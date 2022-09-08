"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crear = crear;
exports.editar = editar;
exports.buscar = buscar;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _system = _interopRequireDefault(require("../models/system"));

function crear(_x, _x2) {
  return _crear.apply(this, arguments);
}

function _crear() {
  _crear = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var datos, val;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            datos = req.body;
            val = new _system["default"](datos);
            console.log(val);
            _context.next = 6;
            return val.save();

          case 6:
            res.json({
              value: "guardado con exito",
              status: true
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              value: "todo ha salido satisfactoriamete mal",
              status: false
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _crear.apply(this, arguments);
}

function editar(_x3, _x4) {
  return _editar.apply(this, arguments);
}

function _editar() {
  _editar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, datos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            datos = req.body;
            _context2.next = 5;
            return _system["default"].findByIdAndUpdate(id, datos);

          case 5:
            res.json({
              value: "editado con exito",
              status: true
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              value: "todo ha salido satisfactoriamete mal",
              status: false
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _editar.apply(this, arguments);
}

function buscar(_x5, _x6) {
  return _buscar.apply(this, arguments);
}

function _buscar() {
  _buscar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _system["default"].findOne();

          case 3:
            data = _context3.sent;
            res.json(data);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.json({
              value: "todo ha salido satisfactoriamete mal",
              status: false
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _buscar.apply(this, arguments);
}