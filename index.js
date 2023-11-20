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

    // Trigger "input" event on the sibling (input range) to ensure its functionality is updated
    var inputEvent = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    sibling.dispatchEvent(inputEvent);
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

// Dark mode select
const colorModeSelect = document.querySelector('#colorMode');

const colorMode = () => {
  const rootStyle = document.documentElement.style; // assuming the variables are on the :root pseudo-class
  const buttonStyle = buttonStyleSelect.value;
  const inputStyle = inputStyleSelect.value;
  const embedType = embedTypeSelect.value;

  switch(colorModeSelect.value) {
  case 'dark':
    rootStyle.setProperty('--embed--wrapper-bg', 'var(--neutral--950)');
    rootStyle.setProperty('--embed--text', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--input-border', 'var(--neutral--700)');
    rootStyle.setProperty('--embed--input-bg', 'var(--neutral--900)');
    rootStyle.setProperty('--embed--modal-close-bg-hover', 'var(--neutral--800)');
    rootStyle.setProperty('--embed--modal-close-icon-hover', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--600)');
    rootStyle.setProperty('--embed--tabs-bg', 'var(--neutral--transparent)');
    rootStyle.setProperty('--embed--tabs-border', 'var(--neutral--800)');
    rootStyle.setProperty('--embed--tabs-link-bg', 'var(--neutral--900)');
    rootStyle.setProperty('--embed--button-secondary-bg', 'var(--neutral--800)');
    rootStyle.setProperty('--embed--divider', 'var(--neutral--800)');
    if (buttonStyle == 'border') {
      rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
    }
    if (inputStyle == 'solid') {
      rootStyle.setProperty('--embed--input-border', 'var(--neutral--transparent)');
    }
    if (embedType == 'page') {
      rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--950)');
    }
    break;
  case 'light':
    rootStyle.setProperty('--embed--wrapper-bg', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--text', 'var(--neutral--950)');
    rootStyle.setProperty('--embed--input-border', 'var(--neutral--300)');
    rootStyle.setProperty('--embed--input-bg', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--modal-close-bg-hover', 'var(--neutral--100)');
    rootStyle.setProperty('--embed--modal-close-icon-hover', 'var(--neutral--950)');
    rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--300)');
    rootStyle.setProperty('--embed--tabs-bg', 'var(--neutral--100)');
    rootStyle.setProperty('--embed--tabs-link-bg', 'var(--neutral--white)');
    rootStyle.setProperty('--embed--tabs-border', 'var(--neutral--transparent)');
    rootStyle.setProperty('--embed--button-secondary-bg', 'var(--neutral--100)');
    rootStyle.setProperty('--embed--divider', 'var(--neutral--200)');
    rootStyle.setProperty('--embed--input-shadow', 'var(--neutral--shadow)');
    if (buttonStyle == 'border') {
      rootStyle.setProperty('--embed--button-text', 'var(--neutral--950)');
    }
    if (inputStyle == 'solid') {
      rootStyle.setProperty('--embed--input-border', 'var(--neutral--transparent)');
      rootStyle.setProperty('--embed--input-bg', 'var(--neutral--100)');
    }
    if (embedType == 'page') {
      rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--transparent)');
    }
    break;
  }
}

colorModeSelect.addEventListener('change', colorMode);

// Input style
const inputStyleSelect = document.querySelector('#inputStyle');

const inputStyle = () => {
  const rootStyle = document.documentElement.style;
  const colorMode = colorModeSelect.value;
  
  switch (inputStyleSelect.value) {
    case 'solid':
      if (colorMode == 'dark') {
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
      if (colorMode == 'dark') {
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
  const colorMode = colorModeSelect.value;
  
  switch (buttonStyleSelect.value) {
    case 'solid':
      if (colorMode == 'dark') {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--accent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
      } else {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--accent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
      }
      break;
    case 'border':
      if (colorMode == 'dark') {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--transparent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--white)');
      } else {
        rootStyle.setProperty('--embed--button-bg', 'var(--neutral--transparent)');
        rootStyle.setProperty('--embed--button-text', 'var(--neutral--950)');
      }
      break;
  }
};

buttonStyleSelect.addEventListener('change', buttonStyle);

// Embed type
const embedTypeSelect = document.querySelector('#embedType');

const embedType = () => {
  const rootStyle = document.documentElement.style;
  const colorMode = colorModeSelect.value;

  var modalCloseElement = document.querySelectorAll('.modal-close');
  var logo = document.querySelectorAll('.logo-row');
  var signupHeading = document.querySelector('.embed-heading.cc-signup');
  var loginHeading = document.querySelector('.embed-heading.cc-login');
  
  switch (embedTypeSelect.value) {
    case 'popup':
      if (colorMode == 'dark') {
        rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--600)');
        signupHeading.classList.remove('hide');
        loginHeading.classList.remove('hide');
        modalCloseElement.forEach(function(element) {
          element.classList.remove('hide');
        });
        logo.forEach(function(element) {
          element.classList.remove('hide');
        });
      } else {
        rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--300)');
        signupHeading.classList.remove('hide');
        loginHeading.classList.remove('hide');
        modalCloseElement.forEach(function(element) {
          element.classList.remove('hide');
        });
        logo.forEach(function(element) {
          element.classList.remove('hide');
        });
      }
      break;
    case 'page':
      if (colorMode == 'dark') {
        rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--950)');
        signupHeading.classList.add('hide');
        loginHeading.classList.add('hide');
        modalCloseElement.forEach(function(element) {
          element.classList.add('hide');
        });
        logo.forEach(function(element) {
          element.classList.add('hide');
        });
      } else {
        rootStyle.setProperty('--embed--overlay-bg', 'var(--neutral--transparent)');
        signupHeading.classList.add('hide');
        loginHeading.classList.add('hide');
        modalCloseElement.forEach(function(element) {
          element.classList.add('hide');
        });
        logo.forEach(function(element) {
          element.classList.add('hide');
        });
      }
      break;
  }
};

embedTypeSelect.addEventListener('change', embedType);

// Show/hide logo
const showLogoCheckbox = document.querySelector('#showLogo');

const showLogo = () => {
  const embedType = embedTypeSelect.value;

  var logo = document.querySelectorAll('.logo-row');
  
  switch (showLogoCheckbox.checked) {
    case true:
      if (embedType == 'popup') {
        logo.forEach(function(element) {
          element.classList.remove('hide');
        });
      } else {
        logo.forEach(function(element) {
          element.classList.add('hide');
        });
      }
      break;
    case false:
      if (embedType == 'page') {
       logo.forEach(function(element) {
          element.classList.add('hide');
        });
      } else {
       logo.forEach(function(element) {
          element.classList.add('hide');
        });
      }
      break;
  }
};

showLogoCheckbox.addEventListener('change', showLogo);

// Custom CSS
function updateStyle(css) {
  const styleElement = document.getElementById('dynamicStyle');
  
  if (!styleElement) {
      // Create a new style element if it doesn't exist
      const head = document.head || document.getElementsByTagName('head')[0];
      const newStyleElement = document.createElement('style');
      newStyleElement.type = 'text/css';
      newStyleElement.id = 'dynamicStyle';
      head.appendChild(newStyleElement);
  }

  styleElement.textContent = css;
}

document.getElementById('cssTextarea').addEventListener('input', function() {
  const cssInput = this.value;
  updateStyle(cssInput);
});

// Color contrast checker
document.getElementById('accentColor').addEventListener('input', function () {
  var chosenColor = this.value;
  var contrastRatio = getContrastRatio(chosenColor, '#ffffff');

  if (buttonStyleSelect.value == 'border') {
    // Do nothing
  } else if (contrastRatio < 4.5) {
    document.documentElement.style.setProperty('--embed--button-text', 'var(--neutral--950)');
  } else {
    document.documentElement.style.setProperty('--embed--button-text', 'var(--neutral--white)');
  }
});

function getContrastRatio(color1, color2) {
  function hexToRgb(hex) {
      var bigint = parseInt(hex.slice(1), 16);
      return {
          r: (bigint >> 16) & 255,
          g: (bigint >> 8) & 255,
          b: bigint & 255
      };
  }

  var rgb1 = hexToRgb(color1);
  var rgb2 = hexToRgb(color2);

  function calculateLuminance(color) {
      var gammaCorrectedValue = function (value) {
          value /= 255;
          return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
      };

      var r = gammaCorrectedValue(color.r);
      var g = gammaCorrectedValue(color.g);
      var b = gammaCorrectedValue(color.b);

      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  var luminance1 = calculateLuminance(rgb1);
  var luminance2 = calculateLuminance(rgb2);

  var contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);

  return contrastRatio;
}

// Logo upload
function displayImage() {
  var logoInput = document.getElementById('logoInput');
  var logoPlaceholders = document.querySelectorAll('.logo-placeholder');
  var logoImages = document.querySelectorAll('.logo-image');

  logoImages.forEach(function (logoImage, index) {
    if (logoInput.files.length > 0) {
      var file = logoInput.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        logoImage.src = e.target.result;
        // Hide logo placeholders when an image is uploaded
        logoPlaceholders[index].style.display = 'none';
      };

      reader.readAsDataURL(file);
    } else {
      logoImage.src = "";
      // Show logo placeholders when no image is selected
      logoPlaceholders[index].style.display = 'block';
    }
  });
}

