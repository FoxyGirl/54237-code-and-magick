/**
 * Created by FoxyGirl on 27.01.2017.
 */
'use strict';

var setupModal = document.querySelector('.setup ');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var setupSubmit = document.querySelector('.setup-submit');
var setupWizardForm = document.querySelector('.setup-wizard-form');
var wizardCoat = document.getElementById('wizard-coat');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = document.getElementById('wizard-eyes');
var wizardEyesColors = ['red', 'blue', 'yellow', 'green', 'black'];
var fireballSetup = document.querySelector('.setup-fireball-wrap');
var fireballSetupColors = ['#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#ee4830'];

setupOpen.addEventListener('click', function () {
  setupModal.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setupModal.classList.add('invisible');
});

setupWizardForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (setupUserName.validity.valueMissing) {
    console.log('Error');
    //  setupUserName.addInvalidity('Не должно быть пустым');
  } else {
    setupWizardForm.submit();
  }
});

wizardCoat.addEventListener('click', function () {
  changeStyle(this, 'fill', wizardCoatColors);
});

wizardEyes.addEventListener('click', function () {
  changeStyle(this, 'fill', wizardEyesColors);
});

fireballSetup.addEventListener('click', function () {
  changeStyle(fireballSetup, 'background', fireballSetupColors);
});

/** change style property in element
 * @param {element} elem : element for changing style property
 * @param {string} styleProp : changeable property
 * @param {arr} arrProp : array of property values
 */
function changeStyle(elem, styleProp, arrProp) {
  var indexProp;
  var currentProp = elem.style[styleProp];
  if (styleProp === 'background') {
    if (currentProp) {
      currentProp = convertRGBDecimalToHex(currentProp);
    } else {
      console.log('!!!' + currentProp);
    }
  }
  indexProp = arrProp.indexOf(currentProp);
  elem.style[styleProp] = ((indexProp === -1) || (indexProp + 1) === arrProp.length) ?
    arrProp[0] : arrProp[indexProp + 1];

  return;
}

/** convert RGB decimal to Hex
 * @param {string} rgb : RGB decimal
 * @return {string} : Hex
 */
function convertRGBDecimalToHex(rgb) {
  var values = rgb.match(/\d+/g);

  return '#' + parseInt(values[0]).toString(16) +
    parseInt(values[1]).toString(16) +
    parseInt(values[2]).toString(16);
}
