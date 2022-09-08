"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var venta = new _mongoose.Schema({
  user_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "usuarios"
  },
  cliente_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "clientes"
  },
  factura: {
    type: Number,
    required: true
  },
  productos: [{
    precio: {
      type: Number
    },
    imei: [{
      value: {
        type: Number
      }
    }],
    cantidad: {
      type: Number
    },
    iva: {
      type: Number,
      "default": 0
    },
    producto_id: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: "productos"
    }
  }],
  nota: {
    type: String,
    required: false
  },
  dolar: {
    type: Number,
    required: false
  },
  abonos: [Number],
  status: {
    type: Boolean,
    "default": true
  },
  prestamos: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)('ventas', venta);

exports["default"] = _default;