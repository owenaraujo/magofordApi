"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = createToken;
exports.verifyToken = verifyToken;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function createToken(_x) {
  return _createToken.apply(this, arguments);
}

function _createToken() {
  _createToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _jsonwebtoken["default"].sign({
              id: id
            }, process.env.SECRET, {
              expiresIn: 3600
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createToken.apply(this, arguments);
}

function verifyToken(_x2, _x3, _x4) {
  return _verifyToken.apply(this, arguments);
}

function _verifyToken() {
  _verifyToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var xtoken;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            xtoken = req.headers.xtoken;

            if (xtoken) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.json({
              value: "no has iniciado session",
              status: null
            }));

          case 4:
            _jsonwebtoken["default"].verify(xtoken, process.env.SECRET);

            next();
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.json({
              value: "se debe iniciar session de nuevo",
              status: false
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _verifyToken.apply(this, arguments);
}