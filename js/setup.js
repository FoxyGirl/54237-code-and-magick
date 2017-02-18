/**
 * Created by FoxyGirl on 27.01.2017.
 */
'use strict';
(function () {
  var setupModalNode = document.querySelector('.setup');
  var setupOpenNode = document.querySelector('.setup-open');
  var setupOpenIconNode = document.querySelector('.setup-open-icon');
  var wizardCoatNode = document.getElementById('wizard-coat');
  var wizardEyesNode = document.getElementById('wizard-eyes');
  var fireballSetupNode = setupModalNode.querySelector('.setup-fireball-wrap');
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var fireballSetupColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  setupOpenNode.addEventListener('keydown', onSetupKeydownHandler);
  setupOpenNode.addEventListener('click', onSetupClickHandler);

  window.colorizeElement(wizardCoatNode, wizardCoatColors, 'fill', colorizeElem);
  window.colorizeElement(wizardEyesNode, wizardEyesColors, 'fill', colorizeElem);
  window.colorizeElement(fireballSetupNode, fireballSetupColors, 'background', colorizeElem);

  /**
   * Change style property in element.
   * @param {Element} element - The element for changing style property.
   * @param {string} color - New color.
   * @param {string} property - The changeable property.
   */
  function colorizeElem(element, color, property) {
    element.style[property] = color;
  }

  /**
   * Handler for keydown.
   * @param {Event} event - The Event.
   */
  function onSetupKeydownHandler(event) {
    if (window.utils.isActivationEvent(event)) {
      event.stopPropagation();
      event.preventDefault();
      window.setupModal(focusOpenButton);
    }
  }

  /**
   * Handler for click.
   * @param {Event} event - The Event.
   */
  function onSetupClickHandler(event) {
    event.preventDefault();
    window.setupModal();
  }

  /**
   * Callback function for Open Button focusing.
   */
  function focusOpenButton() {
    setupOpenIconNode.focus();
  }

})();
