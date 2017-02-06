/**
 * Created by FoxyGirl on 27.01.2017.
 */
'use strict';

var setupModalNode = document.querySelector('.setup');
var setupOpenNode = document.querySelector('.setup-open');
var setupCloseNode = setupModalNode.querySelector('.setup-close');
var wizardCoatNode = document.getElementById('wizard-coat');
var wizardEyesNode = document.getElementById('wizard-eyes');
var fireballSetupNode = setupModalNode.querySelector('.setup-fireball-wrap');
var setupWizardFormNode = setupModalNode.querySelector('.setup-wizard-form');
var setupUserNameNode = setupModalNode.querySelector('.setup-user-name');
var setupSubmit = setupModalNode.querySelector('.setup-submit');
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
var TAB_KEY_CODE = 9;

var changeWizardCoatColorHandler = changeStyle(wizardCoatNode, 'fill', wizardCoatColors);
var changeWizardEyesColorHandler = changeStyle(wizardEyesNode, 'fill', wizardEyesColors);
var changeFireballColorHandler = changeStyle(fireballSetupNode, 'background', fireballSetupColors);

setupOpenNode.addEventListener('click', function () {
  showSetupModal();
});

setupOpenNode.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE) {
    setupWizardFormNode.addEventListener('submit', submitWizardFormHandler);
    showSetupModal();
  }
});

setupCloseNode.addEventListener('click', function () {
  hideSetupModal();
});

setupCloseNode.addEventListener('keydown', function (event) {
  if (event.keyCode === TAB_KEY_CODE && event.shiftKey) {
    setupUserNameNode.focus();
  }
});

setupSubmit.addEventListener('keydown', function (event) {
  if (event.keyCode === TAB_KEY_CODE) {
    setupCloseNode.focus();
  }

  if (event.keyCode === TAB_KEY_CODE && event.shiftKey) {
    setupUserNameNode.focus();
  }

  if (event.keyCode === ENTER_KEY_CODE) {
    setupWizardFormNode.remove('submit', submitWizardFormHandler);
    hideSetupModal();
    setupWizardFormNode.submit();
  }
});

/**
 * Show Setup Modal
 */
function showSetupModal() {
  wizardCoatNode.addEventListener('click', changeWizardCoatColorHandler);
  wizardEyesNode.addEventListener('click', changeWizardEyesColorHandler);
  fireballSetupNode.addEventListener('click', changeFireballColorHandler);

  wizardCoatNode.addEventListener('keydown', changeWizardCoatColorHandler);
  wizardEyesNode.addEventListener('keydown', changeWizardEyesColorHandler);
  fireballSetupNode.addEventListener('keydown', changeFireballColorHandler);

  setupModalNode.classList.remove('invisible');
  setupUserNameNode.focus();

  document.addEventListener('keydown', closeSetupModalKeyHandler);
}

/**
 * Hide Setup Modal
 */
function hideSetupModal() {
  setupModalNode.classList.add('invisible');

  wizardCoatNode.removeEventListener('click', changeWizardCoatColorHandler);
  wizardEyesNode.removeEventListener('click', changeWizardEyesColorHandler);
  fireballSetupNode.removeEventListener('click', changeFireballColorHandler);

  wizardCoatNode.removeEventListener('keydown', changeWizardCoatColorHandler);
  wizardEyesNode.removeEventListener('keydown', changeWizardEyesColorHandler);
  fireballSetupNode.removeEventListener('keydown', changeFireballColorHandler);

  setupModalNode.removeEventListener('keydown', closeSetupModalKeyHandler);
}

/**
 * Change style property in element from array
 *
 * @param {Element} elem - The element for changing style property
 * @param {string} styleProp - The changeable property.
 * @param {Array} arrProp - The array of property values
 * @return {Function} - The function for callback
 */
function changeStyle(elem, styleProp, arrProp) {
  var counter = 0;

  return function () {
    if (event.type === 'keydown' && event.keyCode !== SPACE_KEY_CODE) {
      return;
    }

    counter = counter < (arrProp.length - 1) ? counter + 1 : 0;
    elem.style[styleProp] = arrProp[counter];
  };
}

/**
 * Close Setup Modal by keys
 */
function closeSetupModalKeyHandler() {
  var isTargetSetupClose = event.target.classList.contains('setup-close');
  var isEnter = event.keyCode === ENTER_KEY_CODE;
  var isEscape = event.keyCode === ESCAPE_KEY_CODE;

  if (isTargetSetupClose && isEnter || isEscape) {
    hideSetupModal();
  } else {
    return;
  }
}

/**
 * Correct submit of Wizard Form
 *
 * @param {Event} event - The Event
 */
function submitWizardFormHandler(event) {
  event.preventDefault();
}
