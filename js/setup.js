'use strict';

(function () {
  var WIZARD_COUNT = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomIndex = function (upperLimit) {
    return Math.floor(Math.random() * upperLimit);
  };

  var getRandomElement = function (elements) {
    return elements[getRandomIndex(elements.length)];
  };

  var getRandomWizardName = function (names) {
    return getRandomElement(names);
  };

  var getRandomWizardSurname = function (familyes) {
    return getRandomElement(familyes);
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

  // var setup = document.querySelector('.setup');
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

  /*
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var submitButton = setup.querySelector('.setup-submit');
var form = document.querySelector('.setup-wizard-form');

var closePopup = function () {
  if (userNameInput === document.activeElement) {
    return;
  }
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupPressEsc);
};

var onPopupPressEsc = function (evt) {
  if (evt.keyCode === DOM_VK_ESC) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupPressEsc);
};


var openClickHandler = function () {
  openPopup();
};

setupOpen.addEventListener('click', openClickHandler);

var openKeydownHandler = function (evt) {
  if (evt.keyCode === DOM_VK_ENTER) {
    openPopup();
  }
};

setupOpen.addEventListener('keydown', openKeydownHandler);

var closeClickHandler = function () {
  closePopup();
};

setupClose.addEventListener('click', closeClickHandler);

var closeKeydownHandler = function (evt) {
  if (evt.keyCode === DOM_VK_ENTER) {
    closePopup();
  }
};

setupClose.addEventListener('keydown', closeKeydownHandler);

// отправка данных формы
var sendFormData = function () {
  form.submit();
};

var submitClickHandler = function (evt) {
  evt.preventDefault();
  if (form.repotValidity()) {
    sendFormData();
  }
};

submitButton.addEventListener('click', submitClickHandler);

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

userNameInput.addEventListener('input', function (evt) {
  evt.target.checkValidity();
});
*/
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
