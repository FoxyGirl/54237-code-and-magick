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

var changeWizardCoatColorHandler = changeStyle(wizardCoatNode, 'fill', wizardCoatColors);
var changeWizardEyesColorHandler = changeStyle(wizardEyesNode, 'fill', wizardEyesColors);
var changeFireballColorHandler = changeStyle(fireballSetupNode, 'background', fireballSetupColors);

setupOpenNode.addEventListener('click', function () {
  showSetupModal();
});

setupOpenNode.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    showSetupModal();
  }
});

setupCloseNode.addEventListener('click', function () {
  hideSetupModal();
});

setupCloseNode.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    hideSetupModal();
  }
});

/** Show Setup Modal
 */
function showSetupModal() {
  if (isShowSetupModal()) {
    return;
  }

  wizardCoatNode.addEventListener('click', changeWizardCoatColorHandler);
  wizardEyesNode.addEventListener('click', changeWizardEyesColorHandler);
  fireballSetupNode.addEventListener('click', changeFireballColorHandler);

  wizardCoatNode.addEventListener('keydown', changeWizardCoatColorHandler);
  wizardEyesNode.addEventListener('keydown', changeWizardEyesColorHandler);
  fireballSetupNode.addEventListener('keydown', changeFireballColorHandler);

  setupModalNode.classList.remove('invisible');
  setupUserNameNode.focus();
  console.log('show'); // eslint-disable-line
}

/** Hide Setup Modal
 */
function hideSetupModal() {
  setupModalNode.classList.add('invisible');

  wizardCoatNode.removeEventListener('click', changeWizardCoatColorHandler);
  wizardEyesNode.removeEventListener('click', changeWizardEyesColorHandler);
  fireballSetupNode.removeEventListener('click', changeFireballColorHandler);
}

/** Change style property in element from array
 *
 * @param {Element} elem - The element for changing style property
 * @param {string} styleProp - The changeable property.
 * @param {Array} arrProp - The array of property values
 * @return {Function} - The function for callback
 */
function changeStyle(elem, styleProp, arrProp) {
  var counter = 0;

  return function () {
    if ((event.type === 'keydown') && (event.keyCode !== 32)) {
      return;
    }

    counter = counter < (arrProp.length - 1) ? counter + 1 : 0;
    elem.style[styleProp] = arrProp[counter];
  };
}

/** Check is Setup Modal visible
 *  @return {boolean} - true - if Setup Modal is visible : false - if Setup Modal is invisible
 */
function isShowSetupModal() {
  return !setupModalNode.classList.contains('invisible');
}
