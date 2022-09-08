"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUSer = createUSer;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _roles = _interopRequireDefault(require("../models/roles"));

function createUSer() {
  return _createUSer.apply(this, arguments);
}

function _createUSer() {
  _createUSer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _usuarios["default"].find();

          case 3:
            data = _context.sent;
            if (data.length <= 0) create();else {
              console.log('usuario ya creado');
            }
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('hubo un error en la busqueda de usuarios');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _createUSer.apply(this, arguments);
}

function create() {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var _yield$roles$findOne, _id, newUser;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _roles["default"].findOne({
              grado: 1
            });

          case 3:
            _yield$roles$findOne = _context2.sent;
            _id = _yield$roles$findOne._id;
            _context2.next = 7;
            return _usuarios["default"].encrypPassword('holamundo');

          case 7:
            _context2.t0 = _context2.sent;
            _context2.t1 = _id;
            newUser = {
              username: 'admin',
              email: 'default@gmail.com',
              password: _context2.t0,
              rol: _context2.t1
            };
            _context2.next = 12;
            return new _usuarios["default"](newUser).save();

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t2 = _context2["catch"](0);
            console.log('hubo un error en la creacion de usuarios');

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return _create.apply(this, arguments);
}