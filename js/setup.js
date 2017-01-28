/**
 * Created by FoxyGirl on 27.01.2017.
 */
'use strict';

var setupModalNode = document.querySelector('.setup');
var setupOpenNode = document.querySelector('.setup-open');
var setupCloseNode = document.querySelector('.setup-close');
var wizardCoatNode = document.getElementById('wizard-coat');
var wizardEyesNode = document.getElementById('wizard-eyes');
var fireballSetupNode = document.querySelector('.setup-fireball-wrap');
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
  setupModalNode.classList.remove('invisible');
});

setupCloseNode.addEventListener('click', function () {
  setupModalNode.classList.add('invisible');
});

wizardCoatNode.addEventListener('click', changeWizardCoatColorHandler);
wizardEyesNode.addEventListener('click', changeWizardEyesColorHandler);
fireballSetupNode.addEventListener('click', changeFireballColorHandler);


/** Change style property in element from array
 *
 * @param {Element} elem - The element for changing style property
 * @param {string} styleProp - The changeable property.
 * @param {Array} arrProp - The array of property values
 * @return {Function} - The function for callback
 */
function changeStyle(elem, styleProp, arrProp) {
  var counter = 0;
  var element = elem;
  var styleChangeProp = styleProp;
  var arrChangeProp = arrProp;

  return function () {
    counter = (counter < (arrChangeProp.length - 1)) ? (counter + 1) : 0;
    element.style[styleChangeProp] = arrChangeProp[counter];
  };
}
