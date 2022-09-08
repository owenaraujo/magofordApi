"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sistema = require("../controller/sistema");

var _token = require("../midleware/token");

var route = (0, _express.Router)();
route.get('/verifyToken', _token.verifyToken, function (req, res) {
  res.json({
    value: "bienvenido de nuevo",
    status: true
  });
});
route.get('/', _sistema.buscar);
route.post('/', _sistema.crear);
route.post('/:id', _sistema.editar);
var _default = route;
exports["default"] = _default;