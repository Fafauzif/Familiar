import { useEffect, useReducer, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle, CornersOut, GridFour, Pause, Play, Record, ArrowCounterClockwise, FloppyDisk, Stop, X } from "@phosphor-icons/react";
import type { Listing } from "../domain";
import { mediaFor } from "../media";
import { newTake, recordingTransition, TAKE_LENGTH } from "../recording";

export const RECORDING_TASKS = [
  { name: "Full garment", cue: "Show the full garment", tip: "Hold it by the shoulders or use a hanger. Keep the neckline, sleeves and hem in the frame.", purpose: "A full view gives buyers a clearer idea of the shape and proportions.", kind: "front" },
  { name: "Back view", cue: "Flip your shirt over", tip: "Turn the garment slowly. Keep the back and both sleeves in view, then hold it still.", purpose: "The back can reveal seams, shape and wear that a front photo leaves out.", kind: "back" },
  { name: "Label", cue: "Bring the label closer", tip: "Move the size and care label into the frame. Hold it steady so the printed words are readable.", purpose: "A readable label helps someone check the stated size and fabric composition.", kind: "label" },
  { name: "Movement", cue: "Let the fabric move naturally", tip: "Gently move the hanger from side to side. Let the fabric settle without pulling or stretching it.", purpose: "A movement clip can show how the garment hangs and moves. It does not measure fabric weight.", kind: "front" },
  { name: "Gentle pull", cue: "Pull the fabric gently, then release", tip: "Hold a small section between two hands. Pull gently once, then release. Stop if it feels fragile.", purpose: "Seeing the pull and release can help explain a seller's stretch observation. Exact elasticity remains unmeasured.", kind: "detail" },
  { name: "Details & wear", cue: "Show the fabric and any wear", tip: "Bring the cuff, seams and any worn areas closer. Show the detail first, then its position on the garment.", purpose: "Close views help someone judge visible texture and wear before deciding.", kind: "wear" },
] as const;

interface GuidedRecordingProps {
  garment: Listing;
  stage: number;
  capturedSteps: number[];
  mode: "seller" | "reference";
  onComplete: (step: number) => void;
  onNext: () => void;
  onRetake: (step: number) => void;
  onFinish: () => void;
  onExit: () => void;
  reviewOnly?: boolean;
  onViewStep?: (step: number) => void;
  exitLabel?: string;
  finishLabel?: string;
  storageAvailable?: boolean;
}

export default function GuidedRecording(props: GuidedRecordingProps) {
  const { garment, capturedSteps, mode, onComplete, onNext, onRetake, onFinish, onExit, reviewOnly = false, storageAvailable = true } = props;
  const stage = Math.min(props.stage, 5);
  const baseTask = RECORDING_TASKS[stage];
  const task = { ...baseTask, cue: stage === 1 && garment.category !== "Tops" && garment.category !== "Shirts" ? "Turn the garment over" : baseTask.cue, tip: stage === 0 && garment.category === "Bottoms" ? "Hold it by the waistband or lay it flat. Keep the waist, seams and full hem in the frame." : baseTask.tip };
  const saved = capturedSteps.includes(stage);
  const [take, act] = useReducer(recordingTransition, newTake(saved));
  const [grid, setGrid] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const enlargeRef = useRef<HTMLButtonElement>(null);
  const [alternate, setAlternate] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [playFrame, setPlayFrame] = useState(0);
  const collection = mediaFor(garment.id).photos;
  const exactPhoto = collection.find((photo) => photo.kind === task.kind);
  const basePhoto = exactPhoto ?? (task.kind === "wear" ? collection.find((photo) => photo.kind === "detail") : undefined) ?? collection[0];
  const alternatePhoto = collection.find((photo) => photo.kind === "back") ?? basePhoto;
  const hasAlternate = collection.some((photo) => photo.kind === "back") && task.kind === "front";
  const photo = alternate ? alternatePhoto : basePhoto;
  const running = take.phase === "recording";
  const replaying = take.phase === "replaying";

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => act({ type: "TICK" }), 1000);
    return () => window.clearInterval(timer);
  }, [running]);
  useEffect(() => {
    if (!replaying) return;
    setPlayFrame(0);
    const timer = window.setInterval(() => setPlayFrame((frame) => frame + 1), 1000);
    const end = window.setTimeout(() => act({ type: "REPLAY_END" }), take.elapsed * 1000);
    return () => { window.clearInterval(timer); window.clearTimeout(end); };
  }, [replaying, take.elapsed]);
  useEffect(() => {
    if (!expanded) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setExpanded(false); enlargeRef.current?.focus(); }
      if (event.key === "Tab") {
        const items = modalRef.current?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)");
        if (!items?.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [expanded]);

  const timerText = `00:${String(replaying ? Math.min(playFrame, take.elapsed) : take.elapsed).padStart(2, "0")}`;
  const cue = reviewOnly ? task.cue : saved || take.phase === "preview" ? "Great! Let's go to the next one." : task.cue;
  const canNext = saved && !running && !replaying;
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [stage, garment.id]);
  function retake() {
    onRetake(stage);
    act({ type: "RETAKE" });
  }
  const viewfinder = (
    <div className={`recording-viewfinder ${(task.kind === "front" || task.kind === "back") ? "is-full-view" : ""} ${running || replaying ? "is-recording" : ""}`}>
      {!imageFailed && photo ? <img src={photo.src} alt={`${garment.name}, ${photo.label.toLowerCase()} prepared example`} onError={() => setImageFailed(true)} /> : <div className="recording-image-error"><Record size={38} aria-hidden="true" /><strong>This example photo could not load.</strong><button className="button secondary" onClick={() => setImageFailed(false)}>Try photo again</button></div>}
      {grid && <div className="recording-grid" aria-hidden="true" />}
      <div className="recording-corners" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="recording-frame-top">
        <span className="recording-live"><span className={running ? "pulse-dot" : ""} />{running ? "REC" : take.phase === "paused" ? "PAUSED" : replaying ? "PLAY" : "PREVIEW"} {timerText}</span>
        <span className="recording-example">Prepared example</span>
      </div>
      <div className="recording-frame-bottom">
        <div className="recording-instruction"><span>{saved || take.phase === "preview" ? <CheckCircle size={24} weight="fill" /> : <Record size={24} />}</span><strong>{cue}</strong></div>
        <div className="recording-frame-caption"><span>{photo?.label ?? "Garment preview"} · prepared walkthrough</span>{hasAlternate && <button onClick={() => { setAlternate(!alternate); setImageFailed(false); }} disabled={running} aria-label={alternate ? "Show front view" : "Show back view"}>{alternate ? "Front view" : "Back view"}</button>}</div>
      </div>
    </div>
  );

  return <section className="recording" aria-label={`${mode === "seller" ? "Seller" : "Private reference"} guided recording`}>
    <div className="recording-garment-bar"><img src={collection[0]?.src} alt="" /><div><strong>{garment.name}</strong><span>Size {garment.size} · {mode === "seller" ? "Listing draft" : "Your private reference"}</span></div><span className="recording-save-label"><Check size={16} /> {storageAvailable ? "Saved on this device" : "Session only"}</span></div>
    <div className="recording-progress-panel">
      <div className="recording-progress-heading"><span className="recording-step-disc">STEP<br /><strong>{stage + 1} OF 6</strong></span><h2>{task.name}</h2><span>{capturedSteps.length} of 6 takes saved</span></div>
      <div className="recording-progress-bars" role="progressbar" aria-label="Saved garment takes" aria-valuemin={0} aria-valuemax={6} aria-valuenow={capturedSteps.length} aria-valuetext={`${capturedSteps.length} of 6 recordings saved`}>{RECORDING_TASKS.map((item, index) => <span key={item.name} className={capturedSteps.includes(index) ? "complete" : index === stage ? "current" : ""} />)}</div>
      <ol className="recording-task-list">{RECORDING_TASKS.map((item, index) => <li key={item.name} className={index === stage ? "active" : capturedSteps.includes(index) ? "done" : ""}>{capturedSteps.includes(index) ? <CheckCircle size={16} weight="fill" /> : <span>{index + 1}</span>} {item.name}</li>)}</ol>
    </div>
    <div className="recording-workspace">
      <div className="recording-main">
        <div className="recording-toolbar"><span><Record size={17} /> {replaying ? "Take playback" : "Guided preview"}</span><div><button aria-label={grid ? "Hide framing grid" : "Show framing grid"} aria-pressed={grid} onClick={() => setGrid(!grid)}><GridFour size={20} /></button><button ref={enlargeRef} aria-label="Enlarge garment preview" onClick={() => setExpanded(true)}><CornersOut size={20} /></button></div></div>
        {viewfinder}
        <div className={`recording-transport ${take.phase === "preview" || take.phase === "saved" || replaying ? "has-take" : ""}`}><span><strong>{timerText}</strong> / 00:06</span><div>{take.phase === "ready" && <button className="recording-record-button" onClick={() => act({ type: "START" })}><Record size={21} weight="fill" /> Start recording</button>}{running && <><button onClick={() => act({ type: "PAUSE" })}><Pause size={20} weight="fill" /> Pause</button><button className="recording-record-button" onClick={() => act({ type: "STOP" })}><Stop size={19} weight="fill" /> Stop</button></>}{take.phase === "paused" && <><button onClick={() => act({ type: "RESUME" })}><Play size={19} weight="fill" /> Resume</button><button onClick={() => act({ type: "STOP" })}><Stop size={19} weight="fill" /> Stop</button></>}{(take.phase === "preview" || take.phase === "saved") && <>{!saved ? <button className="button primary recording-primary-action" onClick={() => { act({ type: "SAVE" }); onComplete(stage); }}>Keep this take <Check size={19} /></button> : <button className="button primary recording-primary-action" disabled={!canNext} onClick={stage === 5 ? onFinish : onNext}>{stage === 5 ? props.finishLabel ?? (mode === "seller" ? "Review your listing" : "Save private reference") : reviewOnly ? "Next saved take" : "Keep & continue"}<ArrowRight size={19} /></button>}<button className="recording-small-action" aria-label="Replay take" title="Replay prepared take" onClick={() => act({ type: "REPLAY" })}><Play size={19} weight="fill" /></button><button className="recording-small-action" aria-label="Retake this step" title="Retake this step" onClick={retake}><ArrowCounterClockwise size={19} /></button></>}{replaying && <button onClick={() => act({ type: "REPLAY_END" })}><Pause size={19} weight="fill" /> Stop replay</button>}</div></div>
        <div className="recording-timeline" aria-hidden="true"><span style={{ width: `${(take.elapsed / TAKE_LENGTH) * 100}%` }} /></div>
        {take.error && <p className="recording-error" role="alert">{take.error}</p>}
        <p className="recording-status" role="status">{reviewOnly ? "Your saved prepared take. Replay it, inspect the view, or choose an explicit retake." : saved ? "This take is saved. You can continue or retake it." : take.phase === "preview" ? "Your take is ready. Review it, then keep it to continue." : take.phase === "paused" ? "Recording paused. Resume when you're ready." : running ? "Follow the instruction. This example stops after six seconds." : "Ready when you are. Start the prepared recording."}</p>
      </div>
      <ol className="recording-task-list recording-mobile-task-list">{RECORDING_TASKS.map((item, index) => <li key={item.name} className={index === stage ? "active" : capturedSteps.includes(index) ? "done" : ""}>{capturedSteps.includes(index) ? <CheckCircle size={16} weight="fill" /> : <span>{index + 1}</span>} {item.name}</li>)}</ol>
      <aside className="recording-cue-rail">
        <section className="recording-guide-card"><p className="eyebrow">{reviewOnly ? "Your saved view" : "A little guidance"}</p><h3>{task.cue}</h3><p>{task.tip}</p>{!exactPhoto && <p className="recording-missing-view">This prepared set has no separate {task.kind === "wear" ? "wear photo" : task.kind === "back" ? "back view" : `${task.kind} close-up`}. The preview uses an available garment photo; that missing detail stays unconfirmed.</p>}<div className="recording-tip-photo"><img src={basePhoto?.src} alt={`${task.name} example framing`} /><span><CheckCircle size={18} /> {exactPhoto ? "Example framing" : "Prepared garment preview"}</span></div></section>
        <section className="recording-why-card"><CheckCircle size={24} /><div><h3>{mode === "seller" ? "Help someone picture it." : "Make your comparison more useful."}</h3><p>{task.purpose}</p></div></section>
        <button className="recording-exit" onClick={onExit}><FloppyDisk size={18} /> {props.exitLabel ?? "Save progress & finish later"}</button>
        <p className="recording-disclosure">A prepared walkthrough using garment photos. Your device camera is not recording. {storageAvailable ? "Completed takes stay in this browser." : "This browser cannot retain your progress after this visit."}</p>
      </aside>
    </div>
    {capturedSteps.length > 0 && <section className="recording-catalogue"><div><h3>Your saved takes</h3><span>{capturedSteps.length} captured</span></div><div className="recording-takes">{[...capturedSteps].sort((a, b) => a - b).map((index) => { const item = RECORDING_TASKS[index]; const media = collection.find((p) => p.kind === item.kind) ?? collection[0]; return <button key={index} onClick={() => reviewOnly ? props.onViewStep?.(index) : index === stage ? retake() : onRetake(index)} aria-label={`${reviewOnly ? "View" : "Retake"} ${item.name.toLowerCase()}`}><img src={media?.src} alt="" /><span><CheckCircle size={17} weight="fill" /> {index + 1}. {item.name}</span><small>{reviewOnly ? "View take" : "Retake"}</small></button>; })}</div></section>}
    {expanded && <div ref={modalRef} className="recording-modal" role="dialog" aria-modal="true" aria-label="Enlarged garment preview"><button autoFocus className="recording-modal-close" onClick={() => { setExpanded(false); enlargeRef.current?.focus(); }}><X size={22} /> Close preview</button>{viewfinder}</div>}
  </section>;
}
