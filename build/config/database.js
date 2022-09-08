"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _env = _interopRequireDefault(require("./env"));

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var con;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose["default"].connect(_env["default"].mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });

        case 3:
          con = _context.sent;
          console.log('conectado a ' + con.connection.name);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log('base de datos no iniciada');
          console.log(_context.t0.reason);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 7]]);
}))();