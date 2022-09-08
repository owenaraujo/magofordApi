"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = _interopRequireDefault(require("./config/config"));

require("./config/database");

var port = _config["default"].get('port');

_config["default"].listen(port, function () {
  console.log('server in port ' + port);
});