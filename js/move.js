// move.js
'use strict';

(function () {
  var startCoords = {
    x: 0,
    y: 0
  };
  // var setup = document.querySelector('.setup');
  var setupHandler = window.setup.querySelector('.upload');
  var dragget = false;
  var msdown = false;

  setupHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    startCoords.x = evt.clientX;
    startCoords.y = evt.clientY;
    if (!msdown) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
    msdown = true;
  });

  var onMouseMove = function (evt) {
    if (!msdown) {
      return;
    }
    evt.preventDefault();
    dragget = true;
    var shift = {
      x: startCoords.x - evt.clientX,
      y: startCoords.y - evt.clientY
    };

    startCoords.x = evt.clientX;
    startCoords.y = evt.clientY;

    window.setup.style.top = (window.setup.offsetTop - shift.y) + 'px';
    window.setup.style.left = (window.setup.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    if (msdown) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    if (dragget) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        setupHandler.removeEventListener('click', onClickPreventDefault);
      };
      setupHandler.addEventListener('click', onClickPreventDefault);
    }
    dragget = false;
    msdown = false;
  };

})();
