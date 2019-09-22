'use strict';

var WIZARD_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');
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
document.querySelector('.setup-similar').classList.remove('hidden');
