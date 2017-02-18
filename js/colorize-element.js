/**
 * Created by FoxyGirl on 10.02.2017.
 */
'use strict';

/**
 * @module colorizeElement
 * Add handlers  for change style property in element from array.
 * @return {Function} - The function.
 * @param {Element} element - The element for changing style property.
 * @param {Array} colors - The array of colors.
 * @param {string} property - The changeable property.
 * @param {Function} callback - The callback function.
 */
window.colorizeElement = (function () {
  return function (element, colors, callback) {
    var currentColor = colors[0];

    element.addEventListener('keydown', function (event) {
      if (window.utils.isActivationEvent(event)) {
        event.stopPropagation();
        changeColor();
      }
    });

    element.addEventListener('click', changeColor);

    function changeColor() {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);

      if (typeof callback === 'function') {
        callback(element, currentColor);
      }
    }
  };

})();
