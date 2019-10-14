// modal.js
'use strict';
(function () {

  var modal = document.querySelector('#modal-form-container');

  var onModalPressEsc = function (evt) {
    if (evt.keyCode === window.DOM_VK_ESC) {
      closeModalDialog();
    }
  };

  var showModalDialog = function () {
    var modalDiv = document.createElement('div');
    modalDiv.id = 'modal-div';
    document.body.style.overflowY = 'hidden';
    document.body.append(modalDiv);
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      document.addEventListener('keydown', onModalPressEsc);
    }  };

  var hideModalDialog = function () {
    document.getElementById('modal-div').remove();
    document.body.style.overflowY = '';
  };

  window.showMessage = function (message) {
    showModalDialog();
    var form = getElementById('modal-form');
    form.querySelector('.modal-message').value = message;
  };

  var closeModalDialog = function () {
    hideModalDialog();
    modal.classList.add('hidden');
  };
  modal.querySelector('input[name="cancel"]').addEventListener('click', function () {
    closeModalDialog();
  });
})();
