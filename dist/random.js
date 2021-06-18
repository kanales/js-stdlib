"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randint = randint;

function randint(min, max) {
  var h = max - min;
  return min + Math.floor(Math.random() * h);
}