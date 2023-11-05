// Sync input ranges with the input numbers
document.querySelector(".input-range").addEventListener("input", updateValue);
document.querySelector(".input-number").addEventListener("input", updateValue);

function updateValue(e) {
  var sibling = e.target.previousElementSibling || e.target.nextElementSibling;
  sibling.value = e.target.value;
}

// Accent color
const accentColor = document.getElementById("accentColor");

accentColor.addEventListener("input", function () {
  const selectedColor = accentColor.value;
  document.documentElement.style.setProperty("--embed--accent", selectedColor);
});

// Font
const font = document.getElementById("font");

font.addEventListener("change", function () {
  const selectedFont = font.value;
  document.documentElement.style.setProperty("--embed--font", selectedFont);
});

// Wrapper radius
const wrapperRadius = document.getElementById("wrapperRadius");

wrapperRadius.addEventListener("input", function () {
  const newWrapperRadius = wrapperRadius.value;
  document.documentElement.style.setProperty(
    "--embed--wrapper-radius",
    newWrapperRadius + "px"
  );
});

// Input radius
const inputRadius = document.getElementById("inputRadius");

inputRadius.addEventListener("input", function () {
  const newInputRadius = inputRadius.value;
  document.documentElement.style.setProperty(
    "--embed--input-radius",
    newInputRadius + "px"
  );
});

// Button radius
const buttonRadius = document.getElementById("buttonRadius");

buttonRadius.addEventListener("input", function () {
  const newButtonRadius = buttonRadius.value;
  document.documentElement.style.setProperty(
    "--embed--button-radius",
    newButtonRadius + "px"
  );
});
