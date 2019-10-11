'use strict';

(function () {
  var COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomIndex = function (upperLimit) {
    return Math.floor(Math.random() * upperLimit);
  };

  window.getRandomElement = function (elements) {
    return elements[getRandomIndex(elements.length)];
  };

  var getRandomCoatColor = function (coatColors) {
    var color = getRandomElement(coatColors);
    return 'rgb(' + color + ')';
  };

  var getRandomEyesColor = function (eyeColors) {
    return getRandomElement(eyeColors);
  };

  var getRandomFireballColor = function (fireballColors) {
    return getRandomElement(fireballColors);
  };

  window.similarListElem = document.querySelector('.setup-similar-list');
  var similarWizardTempl = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  window.renderWizard = function (wizard) {
    var wizardElem = similarWizardTempl.cloneNode(true);
    wizardElem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElem;
  };

  var setRandomCoatColor = function () {
    wizardCoat.style.fill = getRandomCoatColor(COAT_COLORS);
    document.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  wizardCoat.addEventListener('click', function () {
    setRandomCoatColor();
  });

  var setRandomEyesColor = function () {
    wizardEyes.style.fill = getRandomEyesColor(EYES_COLORS);
    document.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
  };

  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    setRandomEyesColor();
  });


  var fireBall = document.querySelector('.setup-fireball-wrap');
  var setRandomFireballColor = function () {
    var color = getRandomFireballColor(FIREBALL_COLORS);
    fireBall.style.background = color;
    document.querySelector('input[name="fireball-color"]').value = color;
  };

  fireBall.addEventListener('click', function () {
    setRandomFireballColor();
  });
})();
