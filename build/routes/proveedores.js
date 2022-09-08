"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proveedores = require("../controller/proveedores");

var route = (0, _express.Router)();
route.get('/default', function (req, res) {
  res.json('default');
});
route.get('/', _proveedores.buscar);
route.get('/activate', _proveedores.buscarActivos);
route.get('/:id', _proveedores.buscarId);
route.post('/', _proveedores.save);
route.post('/:id', _proveedores.actualizar);
route["delete"]('/:id', _proveedores.desactivar);
route["delete"]('/activate/:id', _proveedores.activar);
var _default = route;
exports["default"] = _default;