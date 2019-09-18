'use strict';

var WIZARD_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILYES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomWizardName = function (names) {
  var index = Math.floor(Math.random() * names.length);
  return names[index];
};

var getRandomWizardFamily = function (familyes) {
  var index = Math.floor(Math.random() * familyes.length);
  return familyes[index];
};

var getRandomCoatColor = function (coatColors) {
  var index = Math.floor(Math.random() * coatColors.length);
  var color = coatColors[index];
  return 'rgb(' + color + ')';
};

var getRandomEyesColor = function (eyeColors) {
  var index = Math.floor(Math.random() * eyeColors.length);
  return eyeColors[index];
};

var renderWizard = function (wizard) {
  var wizardElem = similarWizardTempl.cloneNode(true);
  wizardElem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElem.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  return wizardElem;
};

var wizards = [];

var createWizardData = function (count, wizArray) {
  for (var i = 0; i < count; i++) {
    var wizard = {};
    wizard.name = getRandomWizardName(WIZARD_NAMES) + ' ' + getRandomWizardFamily(WIZARD_FAMILYES);
    wizard.eyeColor = getRandomEyesColor(EYES_COLORS);
    wizard.coatColor = getRandomCoatColor(COAT_COLORS);
    wizArray[i] = wizard;
  }
};

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');
var similarListElem = document.querySelector('.setup-similar-list');
var similarWizardTempl = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');
createWizardData(WIZARD_COUNT, wizards);

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElem.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
