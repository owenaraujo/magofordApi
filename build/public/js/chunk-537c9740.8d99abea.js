"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-537c9740"], {
  2609: function _(t, e, c) {
    "use strict";

    c("d593");
  },
  "59fc": function fc(t, e, c) {
    "use strict";

    c.r(e);
    var r = c("7a23"),
        n = {
      "class": "container-fluid"
    },
        a = {
      "class": "d-sm-flex align-items-center justify-content-between mb-4"
    },
        o = Object(r["h"])("h1", {
      "class": "h3 mb-0 text-gray-800"
    }, "Productos", -1),
        u = Object(r["g"])("Nuevo"),
        s = {
      "class": "row"
    },
        d = {
      "class": "col-lg-12"
    },
        b = {
      "class": "table-responsive scrollbar-light-blue"
    },
        i = {
      "class": "table table-striped table-bordered text-center",
      id: "table"
    },
        l = {
      "class": "thead-dark"
    },
        O = Object(r["h"])("th", null, "CODIGO", -1),
        j = Object(r["h"])("th", null, "PRODUCTO", -1),
        p = Object(r["h"])("th", null, "STOCK", -1),
        h = Object(r["h"])("th", null, "ubicacion", -1),
        f = {
      key: 0
    };

    function v(t, e, c, v, m, w) {
      var k = Object(r["B"])("router-link"),
          g = Object(r["B"])("Lista");
      return Object(r["s"])(), Object(r["e"])("div", n, [Object(r["h"])("div", a, [o, Object(r["h"])(k, {
        to: "/productos/add",
        "class": "btn btn-primary mt-2"
      }, {
        "default": Object(r["N"])(function () {
          return [u];
        }),
        _: 1
      })]), Object(r["h"])("div", s, [Object(r["h"])("div", d, [Object(r["h"])("div", b, [Object(r["h"])("table", i, [Object(r["h"])("thead", l, [Object(r["h"])("tr", null, [O, j, p, h, v.usuario.rol.grado <= 1 ? (Object(r["s"])(), Object(r["e"])("th", f, "ACCIONES")) : Object(r["f"])("", !0)])]), Object(r["h"])("tbody", null, [(Object(r["s"])(!0), Object(r["e"])(r["a"], null, Object(r["z"])(v.productos, function (t) {
        return Object(r["O"])((Object(r["s"])(), Object(r["e"])(g, {
          access: v.usuario.rol.grado,
          key: t,
          producto: t
        }, null, 8, ["access", "producto"])), [[r["K"], -1 != t.codigo.toLowerCase().indexOf(c.param.toLowerCase()) || -1 != t.nombre.toLowerCase().indexOf(c.param.toLowerCase())]]);
      }), 128))])])])])])]);
    }

    var m = c("5c40"),
        w = c("5502"),
        k = {
      "class": "d-none"
    },
        g = {
      key: 0
    },
        y = Object(r["h"])("i", {
      "class": "fas fa-audio-description"
    }, null, -1),
        x = Object(r["h"])("i", {
      "class": "fas fa-edit"
    }, null, -1),
        C = {
      "class": "confirmar d-inline"
    },
        P = Object(r["h"])("i", {
      "class": "fas fa-trash-alt"
    }, null, -1),
        _ = Object(r["h"])("i", {
      "class": "fas fa-check"
    }, null, -1);

    function E(t, e, c, n, a, o) {
      var u = Object(r["B"])("Popper"),
          s = Object(r["B"])("router-link");
      return Object(r["s"])(), Object(r["e"])("tr", null, [Object(r["h"])("td", null, Object(r["E"])(c.producto.codigo), 1), Object(r["h"])("td", null, Object(r["E"])(c.producto.nombre), 1), Object(r["h"])("td", k, [Object(r["h"])(u, {
        "class": "dark-popper",
        arrow: "",
        hover: "",
        placement: "right",
        content: t.numeralFormat(c.producto.precio * n.dolar) + " Bs"
      }, {
        "default": Object(r["N"])(function () {
          return [Object(r["h"])("div", null, Object(r["E"])(c.producto.precio), 1)];
        }),
        _: 1
      }, 8, ["content"])]), Object(r["h"])("td", null, Object(r["E"])(c.producto.cantidad), 1), Object(r["h"])("td", null, Object(r["E"])(c.producto.ubicacion), 1), c.access <= 1 ? (Object(r["s"])(), Object(r["e"])("td", g, [Object(r["h"])(s, {
        to: "/productos/add/cantidad?" + c.producto._id,
        "class": "btn btn-primary ml-2"
      }, {
        "default": Object(r["N"])(function () {
          return [y];
        }),
        _: 1
      }, 8, ["to"]), Object(r["h"])(s, {
        to: "/productos/add?" + c.producto._id,
        "class": "btn btn-warning ml-2"
      }, {
        "default": Object(r["N"])(function () {
          return [x];
        }),
        _: 1
      }, 8, ["to"]), Object(r["h"])("div", C, [Object(r["O"])(Object(r["h"])("button", {
        onClick: e[1] || (e[1] = function (t) {
          return n.desactivarProducto(c.producto._id);
        }),
        "class": "btn btn-danger ml-2"
      }, [P], 512), [[r["K"], c.producto.status]]), Object(r["O"])(Object(r["h"])("button", {
        onClick: e[2] || (e[2] = function (t) {
          return n.activarProducto(c.producto._id);
        }),
        "class": "btn btn-success ml-2"
      }, [_], 512), [[r["K"], !c.producto.status]])])])) : Object(r["f"])("", !0)]);
    }

    var L = c("1da1"),
        N = (c("96cf"), c("99af"), c("98a0")),
        B = c("bc3a"),
        R = c.n(B),
        K = c("a1e9"),
        D = c("4b43"),
        I = {
      props: ["producto", "access"],
      components: {
        Popper: D["a"]
      },
      setup: function setup(t) {
        var e = Object(K["k"])(t.producto),
            c = Object(w["b"])(),
            r = Object(m["d"])(function () {
          return c.state.system.info.dolar;
        }),
            n = Object(m["d"])(function () {
          return c.state.toask;
        }),
            a = Object(m["d"])(function () {
          return c.state.token;
        }),
            o = Object(m["d"])(function () {
          return c.state.api;
        });

        function u(t) {
          return s.apply(this, arguments);
        }

        function s() {
          return s = Object(L["a"])(_regenerator["default"].mark(function t(c) {
            var r, u;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, R.a["delete"]("".concat(o.value, "/productos/activar/").concat(c), {
                      headers: {
                        xtoken: a.value
                      }
                    });

                  case 2:
                    r = t.sent, u = r.data, e.value.status = !0, Object(N["a"])(u.value, n.value.warning);

                  case 6:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          })), s.apply(this, arguments);
        }

        function d(t) {
          return b.apply(this, arguments);
        }

        function b() {
          return b = Object(L["a"])(_regenerator["default"].mark(function t(c) {
            var r, u;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, R.a["delete"]("".concat(o.value, "/productos/").concat(c), {
                      headers: {
                        xtoken: a.value
                      }
                    });

                  case 2:
                    r = t.sent, u = r.data, e.value.status = !1, Object(N["a"])(u.value, n.value.danger);

                  case 6:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          })), b.apply(this, arguments);
        }

        return {
          activarProducto: u,
          desactivarProducto: d,
          dolar: r
        };
      }
    };
    I.render = E;
    var J = I,
        S = {
      props: ["param"],
      components: {
        Lista: J
      },
      setup: function setup() {
        var t = Object(w["b"])();
        t.dispatch("getProductos"), t.dispatch("buscar");
        var e = Object(m["d"])(function () {
          return t.state.usuario;
        }),
            c = Object(m["d"])(function () {
          return t.state.productos;
        });
        return {
          productos: c,
          usuario: e
        };
      }
    };
    c("2609");
    S.render = v;
    e["default"] = S;
  },
  d593: function d593(t, e, c) {}
}]);