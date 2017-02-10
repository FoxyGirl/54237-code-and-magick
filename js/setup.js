/**
 * Created by FoxyGirl on 27.01.2017.
 */
'use strict';

var setupModalNode = document.querySelector('.setup');
var setupOpenNode = document.querySelector('.setup-open');
var setupCloseNode = setupModalNode.querySelector('.setup-close');
var setupWizardFormNode = setupModalNode.querySelector('.setup-wizard-form');
var wizardCoatNode = document.getElementById('wizard-coat');
var wizardEyesNode = document.getElementById('wizard-eyes');
var fireballSetupNode = setupModalNode.querySelector('.setup-fireball-wrap');
var setupUserNameNode = setupModalNode.querySelector('.setup-user-name');
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
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
var SPACE_KEY_CODE = 32;
var prevFocusedElement = null;

window.colorizeElement(wizardCoatNode, wizardCoatColors, 'fill');
window.colorizeElement(wizardEyesNode, wizardEyesColors, 'fill');
window.colorizeElement(fireballSetupNode, fireballSetupColors, 'background');

setupOpenNode.addEventListener('click', function () {
  showSetupModal();
});

setupOpenNode.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE) {
    event.stopPropagation();
    event.preventDefault();
    showSetupModal();
  }
});

/**
 * Show Setup Modal
 */
function showSetupModal() {
  prevFocusedElement = document.activeElement;

  document.addEventListener('keydown', closeSetupModalKeyHandler);

  setupCloseNode.addEventListener('keydown', closeBtnSetupModalHandler);
  setupCloseNode.addEventListener('click', closeBtnSetupModalHandler);

  setupWizardFormNode.addEventListener('submit', closeSubmitSetupModalHandler);

  document.addEventListener('focus', lockSetupModalHandler, true);

  setupModalNode.addEventListener('keydown', preventDefaultOfSpaseHandler);

  setupModalNode.classList.remove('invisible');
  setupUserNameNode.focus();
}

/**
 * Hide Setup Modal
 */
function hideSetupModal() {
  setupModalNode.classList.add('invisible');
  prevFocusedElement.focus();

  document.removeEventListener('keydown', closeSetupModalKeyHandler);

  setupCloseNode.removeEventListener('keydown', closeBtnSetupModalHandler);
  setupCloseNode.removeEventListener('click', closeBtnSetupModalHandler);

  setupWizardFormNode.removeEventListener('submit', closeSubmitSetupModalHandler);

  document.removeEventListener('focus', lockSetupModalHandler, true);

  setupModalNode.removeEventListener('keydown', preventDefaultOfSpaseHandler);
}

/**
 * Close Setup Modal by keys
 *
 * @param {Event} event - The Event
 */
function closeSetupModalKeyHandler(event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    hideSetupModal();
  }
}

/**
 * Close Setup Modal by keys from close button
 *
 * @param {Event} event - The Event
 */
function closeBtnSetupModalHandler(event) {
  if (event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE || event.type === 'click') {
    event.stopPropagation();
    hideSetupModal();
  }
}

/**
 * Lock Setup Modal
 */
function lockSetupModalHandler() {
  if (!setupModalNode.contains(document.activeElement)) {
    setupCloseNode.focus();
  }
}

/**
 * Close Setup Modal after submit from
 *
 * @param {Event} event - The Event
 */
function closeSubmitSetupModalHandler(event) {
  event.preventDefault();
  console.log('Тут мы отправляем форму как-то и закрываем окно!!!'); // eslint-disable-line
  hideSetupModal();
}

/**
 * Prevent default of Spase key
 *
 * @param {Event} event - The Event
 */
function preventDefaultOfSpaseHandler(event) {
  if (event.keyCode === SPACE_KEY_CODE) {
    event.preventDefault(); // Чтобы не скролилось окно
    event.stopPropagation(); // Чтобы не дошло до window
  }
}
