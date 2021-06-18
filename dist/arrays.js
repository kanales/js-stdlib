"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swap = swap;

function swap(arr, a, b) {
  var _ref = [arr[a], arr[b]],
      x = _ref[0],
      y = _ref[1];
  arr[b] = x;
  arr[a] = y;
}