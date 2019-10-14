// render.js
'use strict';
(function () {
  var similarWizardTempl = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElem = similarWizardTempl.cloneNode(true);
    wizardElem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElem;
  };

  var similarList = document.querySelector('.setup-similar-list');
  var similar = document.querySelector('.setup-similar');

  window.render = function (data) {
    // удалим предыдущих магов
    var elements = similarList.querySelectorAll('.setup-similar-item');
    for (var i = 0; i < elements.length; i++) {
      similarList.removeChild(elements[i]);
    }
    var fragment = document.createDocumentFragment();
    var wizardCount = data.length > 4 ? 4 : data.length;
    for (i = 0; i < wizardCount; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarList.appendChild(fragment);
    similar.classList.remove('hidden');
  };
})();
