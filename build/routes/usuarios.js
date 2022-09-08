"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = require("../controller/usuarios");

var route = (0, _express.Router)();
route.post('/', _usuarios.save);
route.post('/login', _usuarios.login);
route.get('/', _usuarios.buscar);
route.get('/roles', _usuarios.buscarRoles);
route.get('/:id', _usuarios.buscarId);
route.get('/limit/:count');
route.post('/:id', _usuarios.editar);
route["delete"]('/:id', _usuarios.desactivar);
route["delete"]('/activar/:id', _usuarios.activar);
var _default = route;
exports["default"] = _default;