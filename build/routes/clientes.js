"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clientes = require("../controller/clientes");

var route = (0, _express.Router)();
route.get('/default', function (req, res) {
  res.json('default');
});
route.get('/', _clientes.buscar);
route.post('/', _clientes.save);
route.post('/:id', _clientes.editar);
route["delete"]('/:id', _clientes.desactivar);
route["delete"]('/activar/:id', _clientes.activar);
route.get('/:id', _clientes.buscarId);
var _default = route;
exports["default"] = _default;