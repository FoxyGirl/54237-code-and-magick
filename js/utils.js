/**
 * Created by FoxyGirl on 09.02.2017.
 */
'use strict';

window.utils = {
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  }
};
