const states = [
  ["STEADY", "Evidence is stable. No intervention required."],
  ["WATCHFUL", "Change detected. The system is gathering context."],
  ["RECOVERING", "Conditions are improving. Action remains deferred."],
  ["HOLD", "Uncertainty is material. Human judgment is required."]
];
let index = 0;
const posture = document.querySelector("#posture");
const copy = document.querySelector("#posture-copy");
if (posture && copy && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(() => {
    index = (index + 1) % states.length;
    [posture.textContent, copy.textContent] = states[index];
  }, 3600);
}
