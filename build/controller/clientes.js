"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = save;
exports.editar = editar;
exports.desactivar = desactivar;
exports.activar = activar;
exports.buscarId = buscarId;
exports.buscar = buscar;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _clientes = _interopRequireDefault(require("../models/clientes"));

function save(_x, _x2) {
  return _save.apply(this, arguments);
}

function _save() {
  _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var datos, cliente;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            datos = req.body;
            _context.next = 4;
            return _clientes["default"].find({
              dni: datos.dni
            });

          case 4:
            cliente = _context.sent;

            if (!(cliente.length != 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              value: "usuario ya registrado",
              status: null
            }));

          case 7:
            _context.next = 9;
            return new _clientes["default"](datos).save();

          case 9:
            res.json({
              value: " cliente registrado con exito",
              status: true
            });
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            res.json({
              value: "todo ha salido exitosamente mal",
              status: false
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _save.apply(this, arguments);
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
            return _clientes["default"].findByIdAndUpdate(id, datos);

          case 5:
            res.json({
              value: 'cliente editado con exito',
              status: true
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.json({
              value: 'todo ha salido exitosamente mal',
              status: false
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _editar.apply(this, arguments);
}

function desactivar(_x5, _x6) {
  return _desactivar.apply(this, arguments);
}

function _desactivar() {
  _desactivar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, status;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            status = {
              status: false
            };
            _context3.next = 5;
            return _clientes["default"].findByIdAndUpdate(id, status);

          case 5:
            res.json({
              value: "cliente desactivado con exito",
              status: true
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.json({
              value: "todo ha salido satisfactoriamente mal",
              status: false
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _desactivar.apply(this, arguments);
}

function activar(_x7, _x8) {
  return _activar.apply(this, arguments);
}

function _activar() {
  _activar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, status;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            status = {
              status: true
            };
            _context4.next = 5;
            return _clientes["default"].findByIdAndUpdate(id, status);

          case 5:
            res.json({
              value: "cliente activado con exito",
              status: true
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            res.json({
              value: "todo ha salido satisfactoriamente mal",
              status: false
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _activar.apply(this, arguments);
}

function buscarId(_x9, _x10) {
  return _buscarId.apply(this, arguments);
}

function _buscarId() {
  _buscarId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            console.log(id);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _buscarId.apply(this, arguments);
}

function buscar(_x11, _x12) {
  return _buscar.apply(this, arguments);
}

function _buscar() {
  _buscar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _clientes["default"].find().populate('user_id');

          case 3:
            data = _context6.sent;
            res.json(data);
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            res.json({
              value: 'todo ha salido satisfacctoriamente mal'
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return _buscar.apply(this, arguments);
}