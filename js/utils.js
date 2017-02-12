/**
 * Created by FoxyGirl on 09.02.2017.
 */
'use strict';

/**
 * @module utils
 * */
window.utils = (function () {
  /**
   * @private
   * Generate random element form array.
   *
   * @param {Array} array - The array of elements.
   * @return {string} The random element form array.
   */
  function getRandomElement(array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  }

  /**
   * Generate random element form array excepting item.
   *
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

  return {
    getRandomElementExcept: getRandomElementExcept
  };
})();
