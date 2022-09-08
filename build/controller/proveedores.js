"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualizar = actualizar;
exports.save = save;
exports.buscarActivos = buscarActivos;
exports.buscar = buscar;
exports.buscarId = buscarId;
exports.desactivar = desactivar;
exports.activar = activar;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

function actualizar(_x, _x2) {
  return _actualizar.apply(this, arguments);
}

function _actualizar() {
  _actualizar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, datos, resultado;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            datos = req.body;
            _context.next = 5;
            return _proveedores["default"].findOne({
              rif: datos.rif
            }, {
              limit: 1
            });

          case 5:
            resultado = _context.sent;

            if (!resultado) {
              _context.next = 14;
              break;
            }

            if (!(resultado._id.toString() === id)) {
              _context.next = 13;
              break;
            }

            _context.next = 10;
            return _proveedores["default"].findByIdAndUpdate(id, datos);

          case 10:
            res.json({
              data: "proveedor actualizado con exito",
              status: true
            });
            _context.next = 14;
            break;

          case 13:
            res.json({
              data: "proveedor ya regitrado",
              status: null
            });

          case 14:
            if (resultado) {
              _context.next = 18;
              break;
            }

            _context.next = 17;
            return _proveedores["default"].findByIdAndUpdate(id, datos);

          case 17:
            res.json({
              data: "proveedor actualizado con exito",
              status: true
            });

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              data: "todo ha salido satisfactoriamente mal",
              status: false
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));
  return _actualizar.apply(this, arguments);
}

function save(_x3, _x4) {
  return _save.apply(this, arguments);
}

function _save() {
  _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var datos, resultado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            datos = req.body;
            _context2.next = 4;
            return _proveedores["default"].findOne({
              rif: datos.rif
            });

          case 4:
            resultado = _context2.sent;

            if (resultado) {
              _context2.next = 11;
              break;
            }

            _context2.next = 8;
            return new _proveedores["default"](datos).save();

          case 8:
            res.json({
              data: "proveedor regitrado con exito",
              status: true
            });
            _context2.next = 12;
            break;

          case 11:
            res.json({
              data: "proveedor ya regitrado",
              status: null
            });

          case 12:
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              data: "todo ha salido satisfactoriamente mal",
              status: false
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return _save.apply(this, arguments);
}

function buscarActivos(_x5, _x6) {
  return _buscarActivos.apply(this, arguments);
}

function _buscarActivos() {
  _buscarActivos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var proveedor;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _proveedores["default"].find({
              status: true
            });

          case 3:
            proveedor = _context3.sent;
            res.json(proveedor);
            _context3.next = 9;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _buscarActivos.apply(this, arguments);
}

function buscar(_x7, _x8) {
  return _buscar.apply(this, arguments);
}

function _buscar() {
  _buscar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var proveedor;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _proveedores["default"].find();

          case 3:
            proveedor = _context4.sent;
            res.json(proveedor);
            _context4.next = 9;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _buscar.apply(this, arguments);
}

function buscarId(_x9, _x10) {
  return _buscarId.apply(this, arguments);
}

function _buscarId() {
  _buscarId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, proveedor;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _proveedores["default"].findById(id);

          case 4:
            proveedor = _context5.sent;
            res.json(proveedor);
            _context5.next = 10;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _buscarId.apply(this, arguments);
}

function desactivar(_x11, _x12) {
  return _desactivar.apply(this, arguments);
}

function _desactivar() {
  _desactivar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, status;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            status = {
              status: false
            };
            _context6.next = 5;
            return _proveedores["default"].findByIdAndUpdate(id, status);

          case 5:
            res.json({
              data: "proveedor desactivado",
              status: true
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            res.json({
              data: "todo ha salido satisfactoriamente mal",
              status: false
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _desactivar.apply(this, arguments);
}

function activar(_x13, _x14) {
  return _activar.apply(this, arguments);
}

function _activar() {
  _activar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, status;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            status = {
              status: true
            };
            _context7.next = 5;
            return _proveedores["default"].findByIdAndUpdate(id, status);

          case 5:
            res.json({
              data: "proveedor activado",
              status: true
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            res.json({
              data: "todo ha salido satisfactoriamente mal",
              status: false
            });

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _activar.apply(this, arguments);
}