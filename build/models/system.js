"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var system = new _mongoose.Schema({
  dolar: {
    type: Number,
    required: false
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)("system", system);

exports["default"] = _default;