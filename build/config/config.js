"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../../package.json"));

var _clientes = _interopRequireDefault(require("../routes/clientes"));

var _proveedores = _interopRequireDefault(require("../routes/proveedores"));

var _productos = _interopRequireDefault(require("../routes/productos"));

var _usuarios = _interopRequireDefault(require("../routes/usuarios"));

var _ventas = _interopRequireDefault(require("../routes/ventas"));

var _sistema = _interopRequireDefault(require("../routes/sistema"));

var _connectHistoryApiFallback = _interopRequireDefault(require("connect-history-api-fallback"));

var _config = require("./config.roles");

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _connectHistoryApiFallback["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public")));
(0, _config.buscar)(); //app.get('/',(req, res) =>{
//  console.log('jola')
//res.json(info);
//})

app.use('/api/clientes', _clientes["default"]);
app.use('/api/proveedores', _proveedores["default"]);
app.use('/api/productos', _productos["default"]);
app.use('/api/usuarios', _usuarios["default"]);
app.use('/api/ventas', _ventas["default"]);
app.use('/api/system', _sistema["default"]);
app.set('port', process.env.PORT || 3000);
app.use(function (req, res, next) {
  res.redirect('/');
});
var _default = app;
exports["default"] = _default;