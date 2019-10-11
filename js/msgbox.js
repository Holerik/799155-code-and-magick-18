// msgbox.js
'use strict';
(function () {

  var msgBoxForm = document.querySelector('#msgbox-form-container');

  var onMessageBoxPressEsc = function (evt) {
    if (evt.keyCode === window.DOM_VK_ESC) {
      evt.preventDefault();
      closeMessageBox();
    }
  };

  var showMessageBox = function () {
    if (msgBoxForm.classList.contains('hidden')) {
      msgBoxForm.classList.remove('hidden');
      document.addEventListener('keydown', onMessageBoxPressEsc);
    }
  };

  var closePopup = null;

  window.showMessage = function (message, closePopupCall) {
    closePopup = closePopupCall;
    showMessageBox();
    var form = document.querySelector('#msgbox-form');
    form.querySelector('.msgbox-message').textContent = message;
  };

  var closeMessageBox = function () {
    if (!(closePopup === null)) {
      closePopup();
    }
    msgBoxForm.classList.add('hidden');
  };

  msgBoxForm.querySelector('input[name="cancel"]').addEventListener('click', function () {
    closeMessageBox();
  });
})();
