"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var cliente = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  user_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "usuarios"
  },
  status: {
    type: Boolean,
    "default": true
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)("clientes", cliente);

exports["default"] = _default;