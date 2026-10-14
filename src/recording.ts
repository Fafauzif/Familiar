export type RecordingPhase = "ready" | "recording" | "paused" | "preview" | "saved" | "replaying";
export interface RecordingTake {
  phase: RecordingPhase;
  elapsed: number;
  error: string;
}
export type RecordingAction =
  | { type: "START" }
  | { type: "TICK" }
  | { type: "PAUSE" }
  | { type: "RESUME" }
  | { type: "STOP" }
  | { type: "SAVE" }
  | { type: "RETAKE" }
  | { type: "REPLAY" }
  | { type: "REPLAY_END" };
export const TAKE_LENGTH = 6;
export const MIN_TAKE_LENGTH = 3;
export function newTake(saved = false): RecordingTake {
  return { phase: saved ? "saved" : "ready", elapsed: saved ? TAKE_LENGTH : 0, error: "" };
}
/** A prepared walkthrough state machine; it never claims to record a device camera. */
export function recordingTransition(state: RecordingTake, action: RecordingAction): RecordingTake {
  switch (action.type) {
    case "START":
      return state.phase === "ready" ? { phase: "recording", elapsed: 0, error: "" } : state;
    case "TICK": {
      if (state.phase !== "recording") return state;
      const elapsed = Math.min(TAKE_LENGTH, state.elapsed + 1);
      return { ...state, elapsed, phase: elapsed === TAKE_LENGTH ? "preview" : "recording" };
    }
    case "PAUSE":
      return state.phase === "recording" ? { ...state, phase: "paused" } : state;
    case "RESUME":
      return state.phase === "paused" ? { ...state, phase: "recording", error: "" } : state;
    case "STOP":
      if (state.phase !== "recording" && state.phase !== "paused") return state;
      return state.elapsed >= MIN_TAKE_LENGTH
        ? { ...state, phase: "preview", error: "" }
        : { ...state, phase: "paused", error: "Keep the garment in view for at least 3 seconds. Resume this take to continue." };
    case "SAVE":
      return state.phase === "preview" && state.elapsed >= MIN_TAKE_LENGTH ? { ...state, phase: "saved", error: "" } : state;
    case "RETAKE":
      return newTake();
    case "REPLAY":
      return state.phase === "preview" || state.phase === "saved" ? { ...state, phase: "replaying" } : state;
    case "REPLAY_END":
      return state.phase === "replaying" ? { ...state, phase: "preview" } : state;
    default:
      return state;
  }
}
export interface SavedTake {
  duration: number;
  step: number;
}
/** Restores only completed takes; an interrupted timer never becomes completed evidence. */
export function sanitizeTakes(input: unknown): SavedTake[] {
  if (!Array.isArray(input)) return [];
  const seen = new Set<number>();
  return input.filter((value): value is SavedTake => {
    if (!value || typeof value !== "object") return false;
    const { duration, step } = value as SavedTake;
    if (!Number.isInteger(step) || step < 0 || step > 5 || seen.has(step) || !Number.isInteger(duration) || duration < MIN_TAKE_LENGTH || duration > TAKE_LENGTH) return false;
    seen.add(step);
    return true;
  }).map(({ duration, step }) => ({ duration, step }));
}
