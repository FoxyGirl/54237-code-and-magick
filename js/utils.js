/**
 * Created by FoxyGirl on 09.02.2017.
 */
'use strict';

window.utils = {
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },
  getRandomElementExcept: function (array, item) {
    var newColor = null;
    do {
      newColor = array[this.getRandomElement(array)];
    } while (newColor === item);
    return newColor;
  }
};
