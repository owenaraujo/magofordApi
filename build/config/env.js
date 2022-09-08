"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  mongodb: process.env.MONGO_URI,
  mongodb_2: process.env.MONGO_URI_2,
  secret: process.env.SECRET
};
exports["default"] = _default;