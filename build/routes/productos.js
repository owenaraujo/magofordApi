"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _token = require("../midleware/token");

var _productos = require("../controller/productos");

var route = (0, _express.Router)();
route.get('/default', function (req, res) {
  res.json('default');
});
route.get('/', _productos.buscar);
route.get('/:id', _productos.buscarId);
route.post('/', _token.verifyToken, _productos.save);
route.post('/:id', _productos.editar);
route.put('/cantidad/:id', _productos.agregar);
route["delete"]('/activar/:id', _productos.activar);
route["delete"]('/:id', _productos.desactivar);
var _default = route;
exports["default"] = _default;