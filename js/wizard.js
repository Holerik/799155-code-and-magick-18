// wizard.js
'use strict';
(function () {
  var COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomIndex = function (upperLimit) {
    return Math.floor(Math.random() * upperLimit);
  };

  window.getRandomElement = function (elements) {
    return elements[getRandomIndex(elements.length)];
  };

  var getRandomCoatColor = function (coatColors) {
    var color = window.getRandomElement(coatColors);
    return 'rgb(' + color + ')';
  };

  var getRandomEyesColor = function (eyeColors) {
    return window.getRandomElement(eyeColors);
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomCoatColor(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    document.querySelector('input[name="coat-color"]').value = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomEyesColor(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    document.querySelector('input[name="eyes-color"]').value = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;
})();
