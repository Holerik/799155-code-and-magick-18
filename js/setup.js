'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes == eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(window.wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left, right);
      }
      return rankDiff;
    }));
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var getRandomIndex = function (upperLimit) {
    return Math.floor(Math.random() * upperLimit);
  };

  window.getRandomElement = function (elements) {
    return elements[getRandomIndex(elements.length)];
  };

  var getRandomFireballColor = function (fireballColors) {
    return window.getRandomElement(fireballColors);
  };

  var coatColor = document.querySelector('input[name="coat-color"]').value;
  var eyesColor = document.querySelector('input[name="eyes-color"]').value;

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
