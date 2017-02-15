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
  var colorizeFunct = null;

  return function (cb) {

    colorizeFunct = cb;

    if (typeof colorizeFunct === 'function') {
      colorizeFunct();
    }
  };
})();
