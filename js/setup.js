/**
 * Created by FoxyGirl on 27.01.2017.
 */
'use strict';
(function () {
  var setupModalNode = document.querySelector('.setup');
  var setupOpenNode = document.querySelector('.setup-open');
  var setupOpenIconNode = document.querySelector('.setup-open-icon');
  var setupCloseNode = setupModalNode.querySelector('.setup-close');
  var setupWizardFormNode = setupModalNode.querySelector('.setup-wizard-form');
  var wizardCoatNode = document.getElementById('wizard-coat');
  var wizardEyesNode = document.getElementById('wizard-eyes');
  var fireballSetupNode = setupModalNode.querySelector('.setup-fireball-wrap');
  // var setupUserNameNode = setupModalNode.querySelector('.setup-user-name');
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
  var SPACE_KEY_CODE = 32;

  var changeWizardCoatColorHandler = window.colorizeElement(wizardCoatNode, wizardCoatColors, 'fill');
  var changeWizardEyesColorHandler = window.colorizeElement(wizardEyesNode, wizardEyesColors, 'fill');
  var changeFireballColorHandler = window.colorizeElement(fireballSetupNode, fireballSetupColors, 'background');

  setupOpenNode.addEventListener('keydown', onSetupKeydownHandler);
  setupOpenNode.addEventListener('click', onSetupClickHandler);

  /**
   * Handler for keydown.
   * @param {Event} event - The Event.
   */
  function onSetupKeydownHandler(event) {
    if (window.utils.isActivationEvent(event)) {
      event.stopPropagation();
      event.preventDefault();
      initSetupModal();
      window.enableSetup(focusOpenButton);
    }
  }

  /**
   * Handler for click.
   * @param {Event} event - The Event.
   */
  function onSetupClickHandler(event) {
    event.preventDefault();
    window.enableSetup();
  }

  /**
   * Callback function for Open Button focusing.
   */
  function focusOpenButton() {
    setupOpenIconNode.focus();
  }
/**************************************/ //eslint-disable-line

  setupOpenNode.addEventListener('click', function () {
    initSetupModal();
  });

  /**
   * Show Setup Modal.
   */
  function initSetupModal() {
    wizardCoatNode.addEventListener('click', changeWizardCoatColorHandler);
    wizardEyesNode.addEventListener('click', changeWizardEyesColorHandler);
    fireballSetupNode.addEventListener('click', changeFireballColorHandler);

    wizardCoatNode.addEventListener('keydown', changeWizardCoatColorHandler);
    wizardEyesNode.addEventListener('keydown', changeWizardEyesColorHandler);
    fireballSetupNode.addEventListener('keydown', changeFireballColorHandler);

    document.addEventListener('keydown', removeSetupModalKeyHandler);

    setupCloseNode.addEventListener('keydown', removeBtnSetupModalHandler);
    setupCloseNode.addEventListener('click', removeBtnSetupModalHandler);

    setupWizardFormNode.addEventListener('submit', preventSubmitHandler);

    document.addEventListener('focus', lockSetupModalHandler, true);

    setupModalNode.addEventListener('keydown', preventDefaultOfSpaseHandler);
  }

  /**
   * Hide Setup Modal.
   */
  function removeSetupModal() {
    wizardCoatNode.removeEventListener('click', changeWizardCoatColorHandler);
    wizardEyesNode.removeEventListener('click', changeWizardEyesColorHandler);
    fireballSetupNode.removeEventListener('click', changeFireballColorHandler);

    wizardCoatNode.removeEventListener('keydown', changeWizardCoatColorHandler);
    wizardEyesNode.removeEventListener('keydown', changeWizardEyesColorHandler);
    fireballSetupNode.removeEventListener('keydown', changeFireballColorHandler);

    document.removeEventListener('keydown', removeSetupModalKeyHandler);

    setupCloseNode.removeEventListener('keydown', removeBtnSetupModalHandler);
    setupCloseNode.removeEventListener('click', removeBtnSetupModalHandler);

    setupWizardFormNode.removeEventListener('submit', preventSubmitHandler);

    document.removeEventListener('focus', lockSetupModalHandler, true);

    setupModalNode.removeEventListener('keydown', preventDefaultOfSpaseHandler);
  }

  /**
   * Remove Setup Modal by keys.
   * @param {Event} event - The Event.
   */
  function removeSetupModalKeyHandler(event) {
    if (window.utils.isDeactivationEvent(event)) {
      removeSetupModal();
    }
  }

  /**
   * Remove Setup Modal by keys from close button.
   * @param {Event} event - The Event.
   */
  function removeBtnSetupModalHandler(event) {
    if (window.utils.isActivationEvent(event) || event.type === 'click') {
      event.stopPropagation();
      event.preventDefault();
      removeSetupModal();
    }
  }

  /**
   * Lock Setup Modal.
   */
  function lockSetupModalHandler() {
    if (!setupModalNode.contains(document.activeElement)) {
      setupCloseNode.focus();
    }
  }

  /**
   * Close Setup Modal after submit form.
   * @param {Event} event - The Event.
   */
  function preventSubmitHandler(event) {
    event.preventDefault();
    window.enableSetup().closeSetup();
    removeSetupModal();
  }

  /**
   * Prevent default of Spase key.
   * @param {Event} event - The Event.
   */
  function preventDefaultOfSpaseHandler(event) {
    if (event.keyCode === SPACE_KEY_CODE && event.target.tagName !== 'INPUT') {
      event.preventDefault(); // Чтобы не скролилось окно
      event.stopPropagation(); // Чтобы не дошло до window
    }
  }
})();
