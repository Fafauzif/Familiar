import { describe, expect, it } from "vitest";
import { MIN_TAKE_LENGTH, TAKE_LENGTH, newTake, recordingTransition, sanitizeTakes } from "../src/recording";
import { initialState, transition, sanitizeStoredState, getActiveReferenceCapture, getActiveDraft } from "../src/domain";

describe("prepared guided recording", () => {
  it("cannot save a take before recording and reviewing", () => {
    const ready = newTake();
    expect(recordingTransition(ready, { type: "SAVE" })).toBe(ready);
    expect(recordingTransition(ready, { type: "STOP" })).toBe(ready);
  });
  it("requires useful duration before accepting a stop", () => {
    let state = recordingTransition(newTake(), { type: "START" });
    state = recordingTransition(state, { type: "TICK" });
    state = recordingTransition(state, { type: "STOP" });
    expect(state.phase).toBe("paused");
    expect(state.error).toContain("at least 3 seconds");
    state = recordingTransition(state, { type: "RESUME" });
    for (let i = 1; i < MIN_TAKE_LENGTH; i++) state = recordingTransition(state, { type: "TICK" });
    expect(recordingTransition(state, { type: "STOP" }).phase).toBe("preview");
  });
  it("pauses without advancing and resumes the existing timer", () => {
    let state = recordingTransition(newTake(), { type: "START" });
    state = recordingTransition(state, { type: "TICK" });
    state = recordingTransition(state, { type: "PAUSE" });
    expect(recordingTransition(state, { type: "TICK" })).toBe(state);
    state = recordingTransition(state, { type: "RESUME" });
    expect(recordingTransition(state, { type: "TICK" }).elapsed).toBe(2);
  });
  it("finishes at six seconds, then explicitly saves", () => {
    let state = recordingTransition(newTake(), { type: "START" });
    for (let i = 0; i < 20; i++) state = recordingTransition(state, { type: "TICK" });
    expect(state.phase).toBe("preview");
    expect(state.elapsed).toBe(TAKE_LENGTH);
    expect(recordingTransition(state, { type: "SAVE" }).phase).toBe("saved");
  });
  it("a retake clears the prior recording", () => {
    expect(recordingTransition(newTake(true), { type: "RETAKE" })).toEqual(newTake());
  });
  it("restores valid saved takes and rejects incomplete/corrupt ones", () => {
    const stored = JSON.parse(JSON.stringify([{ step: 0, duration: 4 }, { step: 1, duration: 6 }]));
    expect(sanitizeTakes(stored)).toEqual(stored);
    expect(sanitizeTakes([{ step: 0, duration: 1 }, { step: 1, duration: 6 }, { step: 1, duration: 4 }, { step: 6, duration: 6 }, { step: 3, duration: Infinity }])).toEqual([{ step: 1, duration: 6 }]);
  });
  it("resumes a seller on the saved task and invalidates a dependent review on retake", () => {
    let state = initialState();
    state = transition(state, { type: "RECORDING_NEXT" });
    expect(state.captureStage).toBe(0);
    for (let step = 0; step < 6; step++) {
      state = transition(state, { type: "RECORDING_COMPLETE", step });
      state = transition(state, { type: "RECORDING_NEXT" });
    }
    state = transition(state, { type: "DECIDE", property: "Movement", status: "confirmed" });
    state = transition(state, { type: "DECIDE", property: "Surface", status: "confirmed" });
    state = sanitizeStoredState(JSON.parse(JSON.stringify(state)));
    expect(getActiveDraft(state).captureComplete).toBe(true);
    state = transition(state, { type: "RECORDING_RETRY", step: 3 });
    const restored = sanitizeStoredState(JSON.parse(JSON.stringify(state)));
    expect(restored.captureStage).toBe(3);
    expect(restored.capturedSteps).not.toContain(3);
    expect(restored.decisions.Movement).toBeUndefined();
    expect(restored.decisions.Surface.status).toBe("confirmed");
  });
  it("a buyer finishes only after all six takes, then resumes a retake privately", () => {
    let state = transition(initialState(), { type: "REFERENCE_CAPTURE_START" });
    state = transition(state, { type: "REFERENCE_CAPTURE_SAVE", name: "My familiar blouse" });
    expect(getActiveReferenceCapture(state)?.ready).toBe(false);
    for (let step = 0; step < 6; step++) {
      state = transition(state, { type: "REFERENCE_RECORDING_COMPLETE", step });
      state = transition(state, { type: "REFERENCE_RECORDING_NEXT" });
    }
    state = transition(state, { type: "REFERENCE_CAPTURE_SAVE", name: "My familiar blouse" });
    state = sanitizeStoredState(JSON.parse(JSON.stringify(state)));
    expect(getActiveReferenceCapture(state)?.ready).toBe(true);
    expect(state.privateReferences.find((r) => r.id === state.selectedReference)?.listing.name).toBe("My familiar blouse");
    state = transition(state, { type: "REFERENCE_RECORDING_RETRY", step: 4 });
    state = sanitizeStoredState(JSON.parse(JSON.stringify(state)));
    expect(getActiveReferenceCapture(state)?.stage).toBe(4);
    expect(getActiveReferenceCapture(state)?.ready).toBe(false);
    expect(getActiveReferenceCapture(state)?.capturedSteps).not.toContain(4);
  });
});
