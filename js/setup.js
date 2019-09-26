'use strict';

var WIZARD_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var DOM_VK_ENTER = 0x0D;
var DOM_VK_ESC = 0x1B;
// var MIN_NAME_LENGTH = 2;
// var MAX_NAME_LENGTH = 25;

var getRandomIndex = function (upperLimit) {
  return Math.floor(Math.random() * upperLimit);
};
var getRandomWizardName = function (names) {
  return names[getRandomIndex(names.length)];
};

var getRandomWizardSurname = function (familyes) {
  return familyes[getRandomIndex(familyes.length)];
};

var getRandomCoatColor = function (coatColors) {
  var color = coatColors[getRandomIndex(coatColors.length)];
  return 'rgb(' + color + ')';
};

var getRandomEyesColor = function (eyeColors) {
  return eyeColors[getRandomIndex(eyeColors.length)];
};

var getRandomFireballColor = function (fireballColors) {
  return fireballColors[getRandomIndex(fireballColors.length)];
};

var renderWizard = function (wizard) {
  var wizardElem = similarWizardTempl.cloneNode(true);
  wizardElem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElem.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  return wizardElem;
};

var wizards = [];

var createWizardData = function (count) {
  var wizArray = [];
  for (var i = 0; i < count; i++) {
    var wizard = {};
    wizard.name = getRandomWizardName(WIZARD_NAMES) + ' ' + getRandomWizardSurname(WIZARD_SURNAMES);
    wizard.eyeColor = getRandomEyesColor(EYES_COLORS);
    wizard.coatColor = getRandomCoatColor(COAT_COLORS);
    wizArray[i] = wizard;
  }
  return wizArray;
};

var setup = document.querySelector('.setup');
// userSetup.classList.remove('hidden');
var similarListElem = document.querySelector('.setup-similar-list');
var similarWizardTempl = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');
wizards = createWizardData(WIZARD_COUNT);

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElem.appendChild(fragment);
// document.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var closeButton = setup.querySelector('.setup-submit');

var onPopupPressEsc = function (evt) {
  if (evt.keyCode === DOM_VK_ESC) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupPressEsc);
};

var closePopup = function () {
  if (userNameInput === document.activeElement) {
    return;
  }
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupPressEsc);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === DOM_VK_ENTER) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === DOM_VK_ENTER) {
    closePopup();
  }
});

closeButton.addEventListener('click', function () {
  closePopup();
});

// для ограничений на ввод используем стандартные возможности форм HTML5
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х букв');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Длина имени не должна превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomCoatColor(COAT_COLORS);
  document.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
});

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomEyesColor(EYES_COLORS);
  document.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
});

var fireBall = document.querySelector('.setup-fireball-wrap');
fireBall.addEventListener('click', function () {
  fireBall.style.background = getRandomFireballColor(FIREBALL_COLORS);
  document.querySelector('input[name="fireball-color"]').value = fireBall.style.background;
});
