"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = save;
exports.editar = editar;
exports.activar = activar;
exports.filtroFecha = filtroFecha;
exports.limit = limit;
exports.borrar = borrar;
exports.get = get;
exports.getLimit = getLimit;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ventas = _interopRequireDefault(require("../models/ventas"));

var _productos = _interopRequireDefault(require("../models/productos"));

function save(_x, _x2) {
  return _save.apply(this, arguments);
}

function _save() {
  _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var datos, status, factura, id, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            datos = req.body;
            _context3.next = 4;
            return Promise.all(datos.productos.map( /*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(item) {
                var producto, cantidad;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _productos["default"].findById(item.producto_id);

                      case 2:
                        producto = _context.sent;
                        cantidad = producto.cantidad - item.cantidad;

                        if (!(cantidad < 0)) {
                          _context.next = 8;
                          break;
                        }

                        return _context.abrupt("return", false);

                      case 8:
                        return _context.abrupt("return", true);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x7) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 4:
            status = _context3.sent;

            if (!(status.indexOf(false) != -1)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              value: "cantidad de producto no disponible",
              status: false
            }));

          case 7:
            _context3.next = 9;
            return Promise.all(datos.productos.map( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(item) {
                var producto, cantidad;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _productos["default"].findById(item.producto_id);

                      case 2:
                        producto = _context2.sent;
                        cantidad = producto.cantidad - item.cantidad;
                        _context2.next = 6;
                        return _productos["default"].findByIdAndUpdate(item.producto_id, {
                          cantidad: cantidad
                        });

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x8) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 9:
            _context3.next = 11;
            return _ventas["default"].countDocuments();

          case 11:
            factura = _context3.sent;
            datos.factura = factura + 1;
            _context3.next = 15;
            return new _ventas["default"](datos).save();

          case 15:
            id = _context3.sent;
            _context3.next = 18;
            return _ventas["default"].findById(id._id).populate({
              path: "productos.producto_id"
            }).populate("cliente_id").populate("user_id");

          case 18:
            data = _context3.sent;
            res.json({
              value: "venta hecha con exito",
              status: true,
              data: data
            });
            _context3.next = 25;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](0);
            res.json({
              value: "todo ha salido satisfactoriamente mal",
              status: false
            });

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 22]]);
  }));
  return _save.apply(this, arguments);
}

function editar(req, res) {
  var id = req.params.id;
  var datos = req.body;
  console.log(datos, id);
}

function activar(req, res) {
  var id = req.params.id;
  var status = {
    status: true
  };
  console.log(status, id);
}

function filtroFecha(req, res) {
  var _req$params = req.params,
      inicio = _req$params.inicio,
      fin = _req$params.fin;
  console.log(inicio, fin);
}

function limit(req, res) {
  var count = req.params.count;
  console.log(count);
}

function borrar(req, res) {
  var id = req.params.id;
  var status = {
    status: true
  };
  console.log(status, id);
}

function get(_x3, _x4) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _ventas["default"].find().populate("user_id").populate("cliente_id").populate({
              path: "productos.producto_id"
            });

          case 2:
            data = _context4.sent;
            res.json(data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _get.apply(this, arguments);
}

function getLimit(_x5, _x6) {
  return _getLimit.apply(this, arguments);
}

function _getLimit() {
  _getLimit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$params2, limit, page, count, pagination, data;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$params2 = req.params, limit = _req$params2.limit, page = _req$params2.page;
            limit = parseInt(limit);
            page = parseInt(page);
            _context5.next = 5;
            return _ventas["default"].countDocuments();

          case 5:
            count = _context5.sent;
            pagination = {
              start: (page - 1) * limit,
              count: limit
            };
            _context5.next = 9;
            return _ventas["default"].find().skip(pagination.start).limit(pagination.count).populate("user_id").populate("cliente_id").populate({
              path: "productos.producto_id"
            });

          case 9:
            data = _context5.sent;
            res.json({
              ventas: data,
              count: count
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getLimit.apply(this, arguments);
}