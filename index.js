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
  document.documentElement.style.setProperty("--neutral--accent", selectedColor);
});

// Sync color range input to color text input
const colorPicker = document.querySelector('#accentColor');
const colorValue = document.querySelector('#accentColorValue');

const updateAccentColorValue = (color) => {
  accentColorValue.value = color;
};

const updateAccentColor = (color) => {
  if (/^#[0-9A-F]{6}$/i.test(color)) {
    accentColor.value = color;
  }
};

accentColor.addEventListener('input', () => {
  updateAccentColorValue(accentColor.value);
});

accentColorValue.addEventListener('input', () => {
  updateAccentColor(accentColorValue.value);
});

// Body font
const bodyFont = document.getElementById("bodyFont");

bodyFont.addEventListener("change", function () {
  const selectedbodyFont = bodyFont.value;
  document.documentElement.style.setProperty("--embed--body-font", selectedbodyFont);
});

// Body font size
const bodyFontSize = document.getElementById("bodyFontSize");

bodyFontSize.addEventListener("input", function () {
  const newBodyFontSize = bodyFontSize.value;
  document.documentElement.style.setProperty(
    "--embed--body-font-size",
    `${newBodyFontSize}px`
  );
});

// Heading font
const headingFont = document.getElementById("headingFont");

headingFont.addEventListener("change", function () {
  const selectedheadingFont = headingFont.value;
  document.documentElement.style.setProperty("--embed--heading-font", selectedheadingFont);
});

// Heading font size
const headingFontSize = document.getElementById("headingFontSize");

headingFontSize.addEventListener("input", function () {
  const newHeadingFontSize = headingFontSize.value;
  document.documentElement.style.setProperty(
    "--embed--heading-font-size",
    `${newHeadingFontSize}px`
  );
});

// Wrapper radius
const wrapperRadius = document.getElementById("wrapperRadius");

wrapperRadius.addEventListener("input", function () {
  const newWrapperRadius = wrapperRadius.value;
  document.documentElement.style.setProperty(
    "--embed--wrapper-radius",
    `${newWrapperRadius}px`
  );
});

// Wrapper padding
const wrapperPadding = document.getElementById("wrapperPadding");

wrapperPadding.addEventListener("input", function () {
  const newWrapperPadding = wrapperPadding.value;
  document.documentElement.style.setProperty(
    "--embed--wrapper-padding",
    `${newWrapperPadding}px`
  );
});

// Input radius
const inputRadius = document.getElementById("inputRadius");

inputRadius.addEventListener("input", function () {
  const newInputRadius = inputRadius.value;
  document.documentElement.style.setProperty(
    "--embed--input-radius",
    `${newInputRadius}px`
  );
});

// Button radius
const buttonRadius = document.getElementById("buttonRadius");

buttonRadius.addEventListener("input", function () {
  const newButtonRadius = buttonRadius.value;
  document.documentElement.style.setProperty(
    "--embed--button-radius",
    `${newButtonRadius}px`
  );
});

// Dark mode
const darkModeCheckbox = document.querySelector('#darkMode');

const darkMode = (isChecked) => {
  const rootStyle = document.documentElement.style; // assuming the variables are on the :root pseudo-class

  if (isChecked) {
    rootStyle.setProperty('--embed--wrapper-bg', 'var(--neutral--950)');
    rootStyle.setProperty('--embed--text', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--input-border', 'var(--neutral--700)');
    rootStyle.setProperty('--embed--input-bg', 'var(--neutral--900)');
    rootStyle.setProperty('--embed--modal-close-bg-hover', 'var(--neutral--800)');
    rootStyle.setProperty('--embed--modal-close-icon-hover', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--600)');
    rootStyle.setProperty('--embed--tabs-bg', 'var(--neutral--900)');
    rootStyle.setProperty('--embed--tabs-link-bg', 'var(--neutral--900)');
    rootStyle.setProperty('--embed--button-secondary-bg', 'var(--neutral--800)');
    rootStyle.setProperty('--embed--divider', 'var(--neutral--800)');
    rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
  } else {
    rootStyle.setProperty('--embed--wrapper-bg', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--text', 'var(--neutral--900)');
    rootStyle.setProperty('--embed--input-border', 'var(--neutral--300)');
    rootStyle.setProperty('--embed--input-bg', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--modal-close-bg-hover', 'var(--neutral--100)');
    rootStyle.setProperty('--embed--modal-close-icon-hover', 'var(--neutral--900)');
    rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--300)');
    rootStyle.setProperty('--embed--tabs-bg', 'var(--neutral--100)');
    rootStyle.setProperty('--embed--tabs-link-bg', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--button-secondary-bg', 'var(--neutral--100)');
    rootStyle.setProperty('--embed--divider', 'var(--neutral--200)');
    rootStyle.setProperty('--embed--input-shadow', 'var(--neutral--shadow)');
  }
}

darkModeCheckbox.addEventListener('change', function() {
  darkMode(this.checked);
});

// Input style
const inputStyleSelect = document.querySelector('#inputStyle');

const inputStyle = () => {
  const rootStyle = document.documentElement.style;
  const isDarkMode = darkModeCheckbox.checked;
  
  switch (inputStyleSelect.value) {
    case 'solid':
      if (isDarkMode) {
        rootStyle.setProperty('--embed--input-bg', 'var(--neutral--800)');
        rootStyle.setProperty('--embed--input-border', 'var(--neutral--transparent)');
        rootStyle.setProperty('--embed--input-shadow', 'var(--neutral--transparent)');
      } else {
        rootStyle.setProperty('--embed--input-bg', 'var(--neutral--100)');
        rootStyle.setProperty('--embed--input-border', 'var(--neutral--transparent)');
        rootStyle.setProperty('--embed--input-shadow', 'var(--neutral--transparent)');
      }
      break;
    case 'border':
      if (isDarkMode) {
        rootStyle.setProperty('--embed--input-bg', 'var(--neutral--900)');
        rootStyle.setProperty('--embed--input-border', 'var(--neutral--700)');
        rootStyle.setProperty('--embed--input-shadow', 'var(--neutral--transparent)');
      } else {
        rootStyle.setProperty('--embed--input-bg', 'var(--neutral--white)');
        rootStyle.setProperty('--embed--input-border', 'var(--neutral--300)');
        rootStyle.setProperty('--embed--input-shadow', 'var(--neutral--shadow)');
      }
      break;
  }
};

inputStyleSelect.addEventListener('change', inputStyle);

// Button style
const buttonStyleSelect = document.querySelector('#buttonStyle');

const buttonStyle = () => {
  const rootStyle = document.documentElement.style;
  const isDarkMode = darkModeCheckbox.checked;
  
  switch (buttonStyleSelect.value) {
    case 'solid':
      if (isDarkMode) {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--accent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
      } else {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--accent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
      }
      break;
    case 'border':
      if (isDarkMode) {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--transparent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
      } else {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--transparent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--950)');
      }
      break;
  }
};

// Event listener for the select element
buttonStyleSelect.addEventListener('change', buttonStyle);