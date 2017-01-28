/**
 * Created by FoxyGirl on 27.01.2017.
 */
'use strict';

var setupModalNode = document.querySelector('.setup');
var setupOpenNode = document.querySelector('.setup-open');
var setupCloseNode = document.querySelector('.setup-close');
var wizardCoatNode = document.getElementById('wizard-coat');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesNode = document.getElementById('wizard-eyes');
var wizardEyesColors = ['red', 'blue', 'yellow', 'green', 'black'];
var fireballSetupNode = document.querySelector('.setup-fireball-wrap');
var fireballSetupColors = ['#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#ee4830'];

setupOpenNode.addEventListener('click', function () {
  setupModalNode.classList.remove('invisible');
});

setupCloseNode.addEventListener('click', function () {
  setupModalNode.classList.add('invisible');
});

wizardCoatNode.addEventListener('click', function (event) {
  changeStyle(event.currentTarget, 'fill', wizardCoatColors);
});

wizardEyesNode.addEventListener('click', function (event) {
  changeStyle(event.currentTarget, 'fill', wizardEyesColors);
});

fireballSetupNode.addEventListener('click', function (event) {
  changeStyle(event.currentTarget, 'background', fireballSetupColors);
});

/** Change style property in element
 * @param {Element} elem : element for changing style property
 * @param {String} styleProp : changeable property
 * @param {Array} arrProp : array of property values
 */
function changeStyle(elem, styleProp, arrProp) {
  var indexProp;
  var currentProp = elem.style[styleProp];
  if (styleProp === 'background') {
    if (currentProp) {
      currentProp = convertRGBDecimalToHex(currentProp);
    } else {
      console.log('!!!' + currentProp); // eslint-disable-line
    }
  }
  indexProp = arrProp.indexOf(currentProp);
  elem.style[styleProp] = ((indexProp === -1) || (indexProp + 1) === arrProp.length) ?
    arrProp[0] : arrProp[indexProp + 1];

  return;
}

/** Convert RGB decimal to Hex
 * @param {String} rgb : RGB decimal
 * @return {String} : Hex
 */
function convertRGBDecimalToHex(rgb) {
  var values = rgb.match(/\d+/g);

  return '#' + parseInt(values[0]).toString(16) +
    parseInt(values[1]).toString(16) +
    parseInt(values[2]).toString(16);
}
