/**
 * Created by FoxyGirl on 09.02.2017.
 */
'use strict';

/**
 * @module utils
 */
window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var SPACE_KEY_CODE = 32;
  var ESCAPE_KEY_CODE = 27;

  return {
    getRandomElementExcept: getRandomElementExcept,
    isActivationEvent: isActivationEvent,
    isDeactivationEvent: isDeactivationEvent,
    getRandomArrayFromArray: getRandomArrayFromArray
  };

  /**
   * Generate random element form array.
   * @private
   * @param {Array} array - The array of elements.
   * @return {string} The random element form array.
   */
  function getRandomElement(array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  }

  /**
   * Generate random element form array excepting item.
   * @param {Array} array - The array of elements.
   * @param {string} item - The item for exception.
   * @return {string} The random element form array excepting item.
   */
  function getRandomElementExcept(array, item) {
    var newColor = null;
    do {
      newColor = getRandomElement(array);
    } while (newColor === item);
    return newColor;
  }

  /**
  * Control activation event from keyboard.
  * @param {Event} event - The Event.
  * @return {boolean} If is activation event from keyboard - true, else - false.
  */
  function isActivationEvent(event) {
    return event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE;
  }

  /**
  * Control deactivation event from keyboard.
  * @param {Event} event - The Event.
  * @return {boolean} If is deactivation event from keyboard - true, else - false.
  */
  function isDeactivationEvent(event) {
    return event.keyCode === ESCAPE_KEY_CODE;
  }

  /**
   * Get new array of random elements from base array.
   * @param {Array} array - The base array.
   * @param {number} length - Length of new array. Must be <= length of base array.
   * @return {Array} - New array.
   */
  function getRandomArrayFromArray(array, length) {
    if (length > array.length) {
      length = array.length;
    }
    var newArray = [];
    var randomIndexArray = [];
    var randomIndex = null;
    while (randomIndexArray.length < length) {
      randomIndex = Math.floor(Math.random() * array.length);
      if (randomIndexArray.indexOf(randomIndex) === -1) {
        randomIndexArray.push(randomIndex);
      }
    }

    randomIndexArray.forEach(function (element) {
      newArray.push(array[element]);
    });

    return newArray;
  }

})();
