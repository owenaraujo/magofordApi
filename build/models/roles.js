"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var rol = new _mongoose.Schema({
  nombre: {
    type: String
  },
  grado: {
    type: Number
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)('roles', rol);

exports["default"] = _default;