/**
 * Created by FoxyGirl on 09.02.2017.
 */
'use strict';

/**
 * @module utils
 * */
window.utils = {
  /**
   * Generate random element form array.
   *
   * @param {Array} array - The array of elements.
   * @return {string} The random element form array.
   */
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },
  /**
   * Generate random element form array excepting item.
   *
   * @param {Array} array - The array of elements.
   * @param {string} item - The item for exception.
   * @return {string} The random element form array excepting item.
   */
  getRandomElementExcept: function (array, item) {
    var newColor = null;
    do {
      newColor = this.getRandomElement(array);
    } while (newColor === item);
    return newColor;
  }
};
