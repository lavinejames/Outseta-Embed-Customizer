// Sync input ranges with the input numbers
const inputRangeElements = document.querySelectorAll(".input-range");

inputRangeElements.forEach(function(element) {
    element.addEventListener("input", updateValue);
});

const inputNumberElements = document.querySelectorAll(".input-number");

inputNumberElements.forEach(function(element) {
    element.addEventListener("input", updateValue);
});

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

// Wrapper padding
const wrapperPadding = document.getElementById("wrapperPadding");

wrapperPadding.addEventListener("input", function () {
  const newWrapperPadding = wrapperPadding.value;
  document.documentElement.style.setProperty(
    "--embed--wrapper-padding",
    newWrapperPadding + "px"
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

// Dark mode
const darkMode = document.getElementById('darkMode');

// Add an event listener for the 'change' event
darkMode.addEventListener('change', function () {
  if (darkMode.checked) {
    // Checkbox is checked, update CSS variables
    document.documentElement.style.setProperty('--embed-wrapper-bg', 'var(--neutral--900)');
    document.documentElement.style.setProperty('--embed-text-color', 'var(--neutral--white)');
  } else {
    // Checkbox is unchecked, set CSS variables to their initial values
    document.documentElement.style.setProperty('--embed-wrapper-bg', 'var(--neutral--white)');
    document.documentElement.style.setProperty('--embed-text-color', 'var(--neutral--900)');
  }
});