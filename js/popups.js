// popups.js
'use strict';

(function () {
  var DOM_VK_ENTER = 0x0D;
  var DOM_VK_ESC = 0x1B;

  window.setup = document.querySelector('.setup');
  window.setup_top = window.setup.style.top;
  window.setup_left = window.setup.style.left;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');
  var userNameInput = window.setup.querySelector('.setup-user-name');
  var submitButton = window.setup.querySelector('.setup-submit');
  window.form = document.querySelector('.setup-wizard-form');

  var closePopup = function () {
    if (userNameInput === document.activeElement) {
      return;
    }
    window.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupPressEsc);
  };

  var onPopupPressEsc = function (evt) {
    if (evt.keyCode === DOM_VK_ESC) {
      closePopup();
    }
  };

  var openPopup = function () {
    if (window.setup.classList.contains('hidden')) {
      window.setup.classList.remove('hidden');
      window.setup.style.top = window.setup_top;
      window.setup.style.left = window.setup_left;
      document.addEventListener('keydown', onPopupPressEsc);
    }
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
    window.form.submit();
  };

  var submitClickHandler = function (evt) {
    evt.preventDefault();
    if (window.form.repotValidity()) {
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

})();
