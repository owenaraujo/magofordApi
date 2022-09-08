"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var proveedor = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  rif: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    "default": true
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)('proveedores', proveedor);

exports["default"] = _default;