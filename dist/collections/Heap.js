"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = make;
exports.sort = sort;
exports["default"] = void 0;

var _arrays = require("../arrays");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function leftIdx(self, parentIdx) {
  var i = 2 * parentIdx + 1;
  return i < self.size ? i : null;
}

function rightIdx(self, parentIdx) {
  var i = 2 * parentIdx + 2;
  return i < self.size ? i : null;
}

function make(iterable) {
  var cmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var self = new Heap(cmp);
  self.h = Array.from(iterable);
  self.size = self.h.length;

  if (self.size > 1) {
    for (var i = Math.floor(self.size / 2 - 1); i >= 0; i--) {
      self.heapify(i);
    }
  }

  return self;
}

function sort(iterable) {
  var cmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var self = make(iterable, cmp);
  var out = [];
  var x;

  while ((x = self.pop()) !== undefined) {
    out.push(x);
  }

  return out;
}

var Heap = /*#__PURE__*/function () {
  function Heap() {
    var cmp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    _classCallCheck(this, Heap);

    this.h = [];
    this.size = 0;
    this.cmp = cmp !== null && cmp !== void 0 ? cmp : function (x, y) {
      return x > y;
    };
  }

  _createClass(Heap, [{
    key: "toString",
    value: function toString() {
      return this.h.toString();
    }
  }, {
    key: "peek",
    value: function peek() {
      // todo(kanales): should throw exception on empty
      return this.size ? this.h[0] : undefined;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.size < 1) {
        return undefined;
      }

      if (this.size == 1) {
        this.size -= 1;
        return this.h.pop();
      }

      var max = this.h[0];
      this.h[0] = this.h.pop();
      this.size -= 1;
      this.heapify();
      return max;
    }
  }, {
    key: "heapify",
    value: function heapify() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (idx < this.size) {
        var violation = idx;
        var _ref = [leftIdx(this, idx), rightIdx(this, idx)],
            left = _ref[0],
            right = _ref[1];
        if (leftIdx !== null && this.cmp(this.h[left], this.h[violation])) violation = left;
        if (rightIdx !== null && this.cmp(this.h[right], this.h[violation])) violation = right;

        if (violation != idx) {
          (0, _arrays.swap)(this.h, violation, idx);
          this.heapify(violation);
        }
      }
    }
  }, {
    key: "push",
    value: function push(x) {
      this.h.push(x);
      var idx = Math.floor((this.size - 1) / 2);
      this.size += 1;

      while (idx >= 0) {
        this.heapify(idx);
      }
    }
  }]);

  return Heap;
}();

exports["default"] = Heap;