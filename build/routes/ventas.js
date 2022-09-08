"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ventas = require("../controller/ventas");

var route = (0, _express.Router)();
route.get('/default', function (req, res) {
  res.json('default');
});
route.get('/:limit/:page', _ventas.getLimit);
route.get('/', _ventas.get);
route.post('/', _ventas.save);
route.get('/:inicio/:fin');
route.get('/:id');
route.get('/limit/:count');
route.put('/:id');
route["delete"]('/:id');
var _default = route;
exports["default"] = _default;