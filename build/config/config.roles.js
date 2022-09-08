"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buscar = buscar;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _roles = _interopRequireDefault(require("../models/roles"));

var _config = require("./config.user");

function buscar() {
  return _buscar.apply(this, arguments);
}

function _buscar() {
  _buscar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var rol;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _roles["default"].find();

          case 3:
            rol = _context.sent;
            if (rol.length <= 0) crearRoles();else {
              console.log('roles ya creados exitosamente');
            }
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            console.log('hubo un error en la busqueda de roles');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _buscar.apply(this, arguments);
}

;

function crearRoles() {
  return _crearRoles.apply(this, arguments);
}

function _crearRoles() {
  _crearRoles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var admin, vendedor, usuario;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            admin = {
              nombre: "administrador",
              grado: 1
            };
            vendedor = {
              nombre: "vendedor",
              grado: 2
            };
            usuario = {
              nombre: "usuario",
              grado: 3
            };
            _context2.next = 6;
            return new _roles["default"](admin).save();

          case 6:
            _context2.next = 8;
            return new _roles["default"](vendedor).save();

          case 8:
            _context2.next = 10;
            return new _roles["default"](usuario).save();

          case 10:
            (0, _config.createUSer)();
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.log('hubo un errror en la creacion de roles');

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _crearRoles.apply(this, arguments);
}