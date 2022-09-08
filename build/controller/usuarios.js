"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.save = save;
exports.editar = editar;
exports.activar = activar;
exports.filtroFecha = filtroFecha;
exports.limit = limit;
exports.desactivar = desactivar;
exports.buscar = buscar;
exports.buscarRoles = buscarRoles;
exports.buscarId = buscarId;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _roles = _interopRequireDefault(require("../models/roles"));

var _token = require("../midleware/token");

function login(_x, _x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, password, data, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 4;
            return _usuarios["default"].findOne({
              username: username
            }).populate('rol');

          case 4:
            data = _context.sent;

            if (data) {
              _context.next = 9;
              break;
            }

            res.json({
              value: "usuario no encontrado",
              status: null
            });
            _context.next = 22;
            break;

          case 9:
            if (!(data.status === false)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.json({
              value: "usuario desactivado",
              status: false
            }));

          case 11:
            token = false;
            _context.next = 14;
            return _usuarios["default"].compare(password, data.password);

          case 14:
            if (!_context.sent) {
              _context.next = 20;
              break;
            }

            _context.next = 17;
            return (0, _token.createToken)(data._id);

          case 17:
            token = _context.sent;
            _context.next = 21;
            break;

          case 20:
            token = false;

          case 21:
            token ? res.json({
              value: token,
              status: true,
              usuario: data._id
            }) : res.json({
              value: "contrase;a incorrecta",
              status: false
            });

          case 22:
            _context.next = 27;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](0);
            res.json({
              value: 'todo ha salido satisfactoriamente mal',
              status: false
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 24]]);
  }));
  return _login.apply(this, arguments);
}

function save(_x3, _x4) {
  return _save.apply(this, arguments);
}

function _save() {
  _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var datos, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            datos = req.body;
            _context2.next = 4;
            return _usuarios["default"].findOne({
              username: datos.username
            });

          case 4:
            data = _context2.sent;

            if (data) {
              _context2.next = 14;
              break;
            }

            _context2.next = 8;
            return _usuarios["default"].encrypPassword(datos.password);

          case 8:
            datos.password = _context2.sent;
            _context2.next = 11;
            return new _usuarios["default"](datos).save();

          case 11:
            res.json({
              value: "usuario guardado con exito",
              status: true
            });
            _context2.next = 15;
            break;

          case 14:
            res.json({
              value: "usuario ya registrado",
              status: null
            });

          case 15:
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            res.json({
              value: "todo ha salido satistactoriamente mal ",
              status: false
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return _save.apply(this, arguments);
}

function editar(_x5, _x6) {
  return _editar.apply(this, arguments);
}

function _editar() {
  _editar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var datos, id, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            datos = req.body;
            id = req.params.id;
            _context3.next = 5;
            return _usuarios["default"].findOne({
              username: datos.username
            });

          case 5:
            data = _context3.sent;

            if (data) {
              _context3.next = 14;
              break;
            }

            _context3.next = 9;
            return _usuarios["default"].encrypPassword(datos.password);

          case 9:
            datos.password = _context3.sent;
            _context3.next = 12;
            return _usuarios["default"].findByIdAndUpdate(id, datos);

          case 12:
            res.json({
              value: "usuario editado con exito",
              status: true
            });
            return _context3.abrupt("return");

          case 14:
            if (!(data._id == id)) {
              _context3.next = 21;
              break;
            }

            _context3.next = 17;
            return _usuarios["default"].encrypPassword(datos.password);

          case 17:
            datos.password = _context3.sent;
            _context3.next = 20;
            return _usuarios["default"].findByIdAndUpdate(id, datos);

          case 20:
            res.json({
              value: "usuario editado con exito",
              status: true
            });

          case 21:
            if (data._id != id) {
              res.json({
                value: "usuario ya registrado",
                status: null
              });
            }

            _context3.next = 27;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](0);
            res.json({
              value: "todo ha salido satistactoriamente mal ",
              status: false
            });

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 24]]);
  }));
  return _editar.apply(this, arguments);
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
            id = req.params.id;
            status = {
              status: true
            };
            _context4.next = 4;
            return _usuarios["default"].findByIdAndUpdate(id, status);

          case 4:
            res.json({
              value: " usuario activado con exito",
              status: true
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _activar.apply(this, arguments);
}

function filtroFecha(req, res) {
  var _req$params = req.params,
      inicio = _req$params.inicio,
      fin = _req$params.fin;
}

function limit(req, res) {
  var count = req.params.count;
}

function desactivar(_x9, _x10) {
  return _desactivar.apply(this, arguments);
}

function _desactivar() {
  _desactivar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, data, status;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _usuarios["default"].findById(id).populate("rol");

          case 3:
            data = _context5.sent;

            if (!(data.rol.grado === 1)) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.json({
              value: "usuario administrador no puede ser desactivado",
              status: false
            }));

          case 6:
            status = {
              status: false
            };
            _context5.next = 9;
            return _usuarios["default"].findByIdAndUpdate(id, status);

          case 9:
            res.json({
              value: " usuario desactivado con exito",
              status: true
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _desactivar.apply(this, arguments);
}

function buscar(_x11, _x12) {
  return _buscar.apply(this, arguments);
}

function _buscar() {
  _buscar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var usuario;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _usuarios["default"].find();

          case 2:
            usuario = _context6.sent;
            res.json(usuario);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _buscar.apply(this, arguments);
}

function buscarRoles(_x13, _x14) {
  return _buscarRoles.apply(this, arguments);
}

function _buscarRoles() {
  _buscarRoles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var rol;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _roles["default"].find();

          case 2:
            rol = _context7.sent;
            res.json(rol);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _buscarRoles.apply(this, arguments);
}

function buscarId(_x15, _x16) {
  return _buscarId.apply(this, arguments);
}

function _buscarId() {
  _buscarId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, usuario;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            _context8.next = 4;
            return _usuarios["default"].findById(id, {
              password: 0
            }).populate('rol');

          case 4:
            usuario = _context8.sent;

            if (usuario) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", res.json({
              value: 'usuario no encontrado',
              status: null
            }));

          case 7:
            res.json(usuario);
            _context8.next = 13;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);
            res.json({
              value: 'todo ha salido satisfactoriamente mal',
              status: false
            });

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return _buscarId.apply(this, arguments);
}