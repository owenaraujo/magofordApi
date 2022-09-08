"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var producto = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  // marca:{type: String,  required: true},
  // modelo:{type: String,  required: true},
  codigo: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    "default": true
  },
  descripcion: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  ubicacion: {
    type: String,
    required: false
  },
  //iva:{type: Number,  required: false},
  alerta: {
    type: String,
    required: false
  } // precio:{type: Number , required: true},
  // proveedor_id:{type: Schema.Types.ObjectId, ref: 'proveedores'},
  // nombre:{type: String , required: true},

}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)('productos', producto);

exports["default"] = _default;