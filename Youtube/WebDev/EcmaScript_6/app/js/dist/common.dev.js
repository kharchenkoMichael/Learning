"use strict";

var buttons = document.getElementsByTagName("button");

var _loop = function _loop(i) {
  var button = buttons[i];

  button.onclick = function () {
    console.log(i + 1);
  };
};

for (var i = 0; i < buttons.length; i++) {
  _loop(i);
}

var a = 6;