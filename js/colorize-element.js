/**
 * Created by FoxyGirl on 10.02.2017.
 */
'use strict';

/**
 * @module colorizeElement
 * Change style property in element from array.
 * @param {Element} element - The element for changing style property.
 * @param {Array} colors - The array of colors.
 * @param {string} property - The changeable property.
 * @return {Function} - The function for callback.
 */
window.colorizeElement = (function () {
  return function (element, colors, property) {
    var currentColor = colors[0];
    var ENTER_KEY_CODE = 13;

    return function (event) {
      if (event.type === 'keydown' && event.keyCode !== ENTER_KEY_CODE) {
        return;
      }
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    };
  };
})();
