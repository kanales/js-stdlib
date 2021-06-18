"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lev = lev;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 * @param { String } left
 * @param { String } right
 * @returns { Number }
 */
function lev(left, right) {
  // left is always the longest
  if (left.length < right.length) {
    var _ref = [right, left];
    left = _ref[0];
    right = _ref[1];
  }

  if (right.length == 0) {
    return left.length;
  }

  var prev = Array.from({
    length: right.length + 1
  }, function (_, i) {
    return i;
  });
  var i = 0;

  var _iterator = _createForOfIteratorHelper(left),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c1 = _step.value;
      var current = [i + 1];
      var j = 0;

      var _iterator2 = _createForOfIteratorHelper(right),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var c2 = _step2.value;
          var insertions = prev[j + 1] + 1;
          var deletions = current[j] + 1;
          var substitutions = prev[j] + (c1 != c2 ? 1 : 0);
          current.push(Math.min(insertions, deletions, substitutions));
          j += 1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      prev = current;
      i += 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return prev[prev.length - 1];
} // export function z() {
//     return [];
// }