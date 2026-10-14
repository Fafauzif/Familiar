/** Run after npm run build. Exercises the actual prepared recording controls in Chromium. */
import { preview } from "vite";
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve("qa/evidence/studio");
await mkdir(output, { recursive: true });
const server = await preview({
  build: { outDir: process.env.FAMILIAR_STUDIO_BUILD_DIR || "dist" },
  preview: { host: "127.0.0.1", port: 0 },
});
const base = `http://127.0.0.1:${server.httpServer.address().port}`;
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("pageerror", error => errors.push(error.message));
const stored = () => page.evaluate(() => JSON.parse(localStorage.getItem("familiar-v1")));

async function record() {
  await page.getByRole("button", { name: "Start recording", exact: true }).click();
  await page.waitForTimeout(3150);
  await page.getByRole("button", { name: "Stop", exact: true }).click();
  await page.getByRole("button", { name: "Keep this take", exact: true }).click();
}

try {
  await page.goto(`${base}/sell/capture`);
  await page.getByRole("button", { name: "Start recording", exact: true }).waitFor();
  await page.screenshot({ path: path.join(output, "capture-mobile.png"), fullPage: true });
  for (let step = 0; step < 6; step++) {
    await record();
    await page.getByRole("button", {
      name: step === 5 ? "Review your listing" : "Keep & continue", exact: true,
    }).click();
  }
  await page.getByRole("heading", { name: "You know this piece best.", exact: true }).waitFor();
  const cards = page.locator(".studio-review-card");
  await cards.nth(0).getByRole("button", { name: "Confirm", exact: true }).click();
  await cards.nth(1).getByRole("button", { name: "Unsure", exact: true }).click();
  await cards.nth(2).getByRole("button", { name: "Correct", exact: true }).click();
  await cards.nth(2).getByRole("textbox").fill("The prepared pull is an example, not an elasticity measurement.");
  await cards.nth(2).getByRole("button", { name: "Save correction", exact: true }).click();
  await cards.nth(3).getByRole("button", { name: "Confirm", exact: true }).click();

  // A Movement retake must reopen only the dependent review, preserving saved later takes.
  await cards.nth(1).getByRole("button", { name: "Retake", exact: true }).click();
  let state = await stored();
  if (state.decisions.Movement || state.decisions.Stretch?.status !== "corrected") {
    throw new Error("Retake invalidated the wrong review decisions");
  }
  await record();
  await page.getByRole("button", { name: "Keep & continue", exact: true }).click();
  await page.getByRole("button", { name: "Keep & continue", exact: true }).click();
  await page.getByRole("button", { name: "Review your listing", exact: true }).click();
  await page.locator(".studio-review-card").nth(1).getByRole("button", { name: "Confirm", exact: true }).click();
  await page.getByRole("link", { name: "Preview & publish", exact: true }).click();
  await page.getByRole("button", { name: "Publish reviewed listing", exact: true }).click();
  const seller = await stored();
  if (!seller.published || seller.capturedSteps.length !== 6 || seller.decisions.Stretch.status !== "corrected") {
    throw new Error("Seller published state is inconsistent");
  }

  await page.goto(`${base}/reference/capture?new=1`);
  await page.getByRole("combobox", { name: "Choose a prepared garment", exact: true }).selectOption("petal-tee");
  await page.getByRole("textbox", { name: "Name this reference (optional)" }).fill("My everyday tee");
  await page.getByRole("button", { name: "Start guided recording", exact: true }).click();
  for (let step = 0; step < 6; step++) {
    await record();
    await page.getByRole("button", {
      name: step === 5 ? "Save private reference" : "Keep & continue", exact: true,
    }).click();
    if (step === 0) {
      if (new URL(page.url()).searchParams.has("new")) throw new Error("Chooser flag was not cleared after start");
      await page.reload();
      await page.getByRole("heading", { name: "Back view", exact: true }).waitFor();
      const resumed = await stored();
      const pending = resumed.privateReferences.find(item => item.id === resumed.selectedReference);
      if (pending?.templateId !== "petal-tee" || pending.listing.name !== "My everyday tee" || pending.captureStage !== 1) throw new Error("Private chooser selection/name/progress did not resume");
    }
  }
  const buyer = await stored();
  const reference = buyer.privateReferences.find(item => item.id === buyer.selectedReference);
  if (!reference?.ready || reference.listing.name !== "My everyday tee" || reference.capturedSteps.length !== 6) {
    throw new Error("Private reference completion is inconsistent");
  }
  await page.reload();
  const picker = page.getByLabel("Compare with something you own", { exact: true });
  await picker.waitFor();
  if (await picker.inputValue() !== reference.id) throw new Error("Selected reference was not restored");
  await page.goto(`${base}/wardrobe`);
  await page.getByRole("heading", { name: "My everyday tee", exact: true }).waitFor();
  await page.goto(`${base}/reference/capture?step=4&return=%2Fmatch`);
  await page.getByRole("heading", { name: "Gentle pull", exact: true }).waitFor();
  state = await stored();
  if (!state.privateReferences.find(item => item.id === reference.id)?.ready) {
    throw new Error("Inspecting a saved take invalidated the private reference");
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${base}/sell`);
  await page.locator(".studio-dashboard").waitFor();
  await page.screenshot({ path: path.join(output, "studio-desktop.png"), fullPage: true });
  if (errors.length) throw new Error(`Browser errors: ${errors.join("; ")}`);
  const result = {
    errors,
    sellerPublished: seller.published,
    sellerSteps: seller.capturedSteps,
    buyerReady: reference.ready,
    buyerName: reference.listing.name,
    buyerSteps: reference.capturedSteps,
    savedReferenceInspectionPreservesReadiness: true,
  };
  await writeFile(path.join(output, "recording-flow-results.json"), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result));
} finally {
  await browser.close();
  await new Promise(resolve => server.httpServer.close(resolve));
}
