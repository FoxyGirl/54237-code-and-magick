/**
 * Created by FoxyGirl on 10.02.2017.
 */
'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];
  var ENTER_KEY_CODE = 13;

  element.addEventListener('click', function () {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  });

  element.addEventListener('keydown', function (event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    }
  });
};
