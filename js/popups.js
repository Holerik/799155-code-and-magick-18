// popups.js
'use strict';

(function () {
  window.DOM_VK_ENTER = 0x0D;
  window.DOM_VK_ESC = 0x1B;

  // нефильтрованные данные с сервера
  window.wizards = [];
  // окно настройки волшебника
  window.setup = document.querySelector('.setup');
  // координаты начального положения окна
  window.setupTop = window.setup.style.top;
  window.setupLeft = window.setup.style.left;
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
    if (evt.keyCode === window.DOM_VK_ESC) {
      closePopup();
    }
  };

  var onLoad = function (data) {
    window.wizards = data.slice();
    window.render(data);
  };

  var onLoadAfterSave = function () {
    closePopup();
  };

  var onError = function (message) {
    window.showMessage(message, closePopup);
  };

  var openPopup = function () {
    if (window.setup.classList.contains('hidden')) {
      window.setup.classList.remove('hidden');
      window.setup.style.top = window.setupTop;
      window.setup.style.left = window.setupLeft;
      document.addEventListener('keydown', onPopupPressEsc);
    }
    // запрос на загрузку магов с сервера
    window.load(onLoad, onError);
  };


  var openClickHandler = function () {
    openPopup();
  };

  setupOpen.addEventListener('click', openClickHandler);

  var openKeydownHandler = function (evt) {
    if (evt.keyCode === window.DOM_VK_ENTER) {
      openPopup();
    }
  };

  setupOpen.addEventListener('keydown', openKeydownHandler);

  var closeClickHandler = function () {
    closePopup();
  };

  setupClose.addEventListener('click', closeClickHandler);

  var closeKeydownHandler = function (evt) {
    if (evt.keyCode === window.DOM_VK_ENTER) {
      closePopup();
    }
  };

  setupClose.addEventListener('keydown', closeKeydownHandler);

  // отправка данных формы
  var sendFormData = function () {
    window.save(new FormData(window.form), onLoadAfterSave, onError);
  };

  var submitClickHandler = function (evt) {
    evt.preventDefault();
    if (window.form.reportValidity()) {
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
