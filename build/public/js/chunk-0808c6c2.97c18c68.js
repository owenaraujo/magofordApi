"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0808c6c2", "chunk-2d21f315"], {
  1276: function _(e, t, n) {
    "use strict";

    var r = n("d784"),
        a = n("44e7"),
        c = n("825a"),
        i = n("1d80"),
        u = n("4840"),
        o = n("8aa5"),
        l = n("50c4"),
        s = n("14c3"),
        d = n("9263"),
        p = n("9f7f"),
        b = n("d039"),
        f = p.UNSUPPORTED_Y,
        h = [].push,
        v = Math.min,
        O = 4294967295,
        j = !b(function () {
      var e = /(?:)/,
          t = e.exec;

      e.exec = function () {
        return t.apply(this, arguments);
      };

      var n = "ab".split(e);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    });
    r("split", function (e, t, n) {
      var r;
      return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
        var r = String(i(this)),
            c = void 0 === n ? O : n >>> 0;
        if (0 === c) return [];
        if (void 0 === e) return [r];
        if (!a(e)) return t.call(r, e, c);
        var u,
            o,
            l,
            s = [],
            p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
            b = 0,
            f = new RegExp(e.source, p + "g");

        while (u = d.call(f, r)) {
          if (o = f.lastIndex, o > b && (s.push(r.slice(b, u.index)), u.length > 1 && u.index < r.length && h.apply(s, u.slice(1)), l = u[0].length, b = o, s.length >= c)) break;
          f.lastIndex === u.index && f.lastIndex++;
        }

        return b === r.length ? !l && f.test("") || s.push("") : s.push(r.slice(b)), s.length > c ? s.slice(0, c) : s;
      } : "0".split(void 0, 0).length ? function (e, n) {
        return void 0 === e && 0 === n ? [] : t.call(this, e, n);
      } : t, [function (t, n) {
        var a = i(this),
            c = void 0 == t ? void 0 : t[e];
        return void 0 !== c ? c.call(t, a, n) : r.call(String(a), t, n);
      }, function (e, a) {
        var i = n(r, this, e, a, r !== t);
        if (i.done) return i.value;
        var d = c(this),
            p = String(e),
            b = u(d, RegExp),
            h = d.unicode,
            j = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (f ? "g" : "y"),
            g = new b(f ? "^(?:" + d.source + ")" : d, j),
            m = void 0 === a ? O : a >>> 0;
        if (0 === m) return [];
        if (0 === p.length) return null === s(g, p) ? [p] : [];
        var w = 0,
            x = 0,
            k = [];

        while (x < p.length) {
          g.lastIndex = f ? 0 : x;
          var y,
              R = s(g, f ? p.slice(x) : p);
          if (null === R || (y = v(l(g.lastIndex + (f ? x : 0)), p.length)) === w) x = o(p, x, h);else {
            if (k.push(p.slice(w, x)), k.length === m) return k;

            for (var D = 1; D <= R.length - 1; D++) {
              if (k.push(R[D]), k.length === m) return k;
            }

            x = w = y;
          }
        }

        return k.push(p.slice(w)), k;
      }];
    }, !j, f);
  },
  "44e7": function e7(e, t, n) {
    var r = n("861d"),
        a = n("c6b6"),
        c = n("b622"),
        i = c("match");

    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == a(e));
    };
  },
  "8aa5": function aa5(e, t, n) {
    "use strict";

    var r = n("6547").charAt;

    e.exports = function (e, t, n) {
      return t + (n ? r(e, t).length : 1);
    };
  },
  a0b4: function a0b4(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("7a23"),
        a = {
      key: 0,
      "class": "container-fluid"
    },
        c = {
      "class": "row"
    },
        i = {
      "class": "col-lg-6 m-auto"
    },
        u = {
      autocomplete: "off"
    },
        o = {
      "class": "form-group d-none"
    },
        l = Object(r["h"])("label", {
      "for": "precio"
    }, "Precio Actual", -1),
        s = {
      "class": "form-group"
    },
        d = Object(r["h"])("label", {
      "for": "precio"
    }, "Cantidad de productos Disponibles", -1),
        p = {
      "class": "form-group d-none"
    },
        b = Object(r["h"])("label", {
      "for": "precio"
    }, "Nuevo Precio", -1),
        f = {
      "class": "form-group"
    },
        h = Object(r["h"])("label", {
      "for": "cantidad"
    }, "Agregar Cantidad", -1),
        v = {
      "class": "text-center"
    },
        O = Object(r["g"])("Regresar");

    function j(e, t, n, j, g, m) {
      var w = Object(r["B"])("router-link"),
          x = Object(r["B"])("NoAccess");
      return j.usuario.rol.grado <= 1 ? (Object(r["s"])(), Object(r["e"])("div", a, [Object(r["h"])("div", c, [Object(r["h"])("div", i, [Object(r["h"])("form", u, [Object(r["h"])("div", o, [l, Object(r["O"])(Object(r["h"])("input", {
        type: "number",
        "class": "form-control",
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return j.info.precio = e;
        }),
        disabled: ""
      }, null, 512), [[r["J"], j.info.precio]])]), Object(r["h"])("div", s, [d, Object(r["O"])(Object(r["h"])("input", {
        type: "number",
        "class": "form-control",
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return j.info.cantidad = e;
        }),
        disabled: ""
      }, null, 512), [[r["J"], j.info.cantidad]])]), Object(r["h"])("div", p, [b, Object(r["O"])(Object(r["h"])("input", {
        type: "number",
        placeholder: "Ingrese nuevo precio",
        "class": "form-control",
        "onUpdate:modelValue": t[3] || (t[3] = function (e) {
          return j.newDate.precio = e;
        })
      }, null, 512), [[r["J"], j.newDate.precio, void 0, {
        number: !0
      }]])]), Object(r["h"])("div", f, [h, Object(r["O"])(Object(r["h"])("input", {
        type: "number",
        placeholder: "Ingrese cantidad",
        "onUpdate:modelValue": t[4] || (t[4] = function (e) {
          return j.newDate.cantidad = e;
        }),
        "class": "form-control"
      }, null, 512), [[r["J"], j.newDate.cantidad, void 0, {
        number: !0
      }]])]), Object(r["g"])(" cantidad total =" + Object(r["E"])(j.newDate.cantidad + j.info.cantidad) + " ", 1), Object(r["h"])("div", v, [Object(r["h"])("button", {
        onClick: t[5] || (t[5] = Object(r["Q"])(function (e) {
          return j.update();
        }, ["prevent"])),
        "class": "mr-2 btn btn-primary"
      }, " actualizar "), Object(r["h"])(w, {
        to: "/productos",
        "class": "btn btn-danger"
      }, {
        "default": Object(r["N"])(function () {
          return [O];
        }),
        _: 1
      })])])])])])) : (Object(r["s"])(), Object(r["e"])(x, {
        key: 1
      }));
    }

    var g = n("1da1"),
        m = (n("96cf"), n("ac1f"), n("1276"), n("4de4"), n("99af"), n("a1e9")),
        w = n("5c40"),
        x = n("5502"),
        k = n("6c02"),
        y = n("d97a"),
        R = n("bc3a"),
        D = n.n(R),
        E = n("98a0"),
        I = {
      props: ["param"],
      components: {
        NoAccess: y["default"]
      },
      setup: function setup() {
        var e = Object(k["c"])(),
            t = Object(m["k"])({
          cantidad: null,
          precio: null
        }),
            n = Object(x["b"])(),
            r = window.location.href.split("?"),
            a = {
          cantidad: null,
          precio: null
        };

        function c() {
          return i.apply(this, arguments);
        }

        function i() {
          return i = Object(g["a"])(_regenerator["default"].mark(function t() {
            var c, i, u;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    if (1 == r.lengt) {
                      t.next = 12;
                      break;
                    }

                    if (c = r[1], i = Object(w["d"])(function () {
                      return n.state.productos;
                    }), 0 != i.length) {
                      t.next = 6;
                      break;
                    }

                    return e.push("/productos"), t.abrupt("return");

                  case 6:
                    if (u = i.value.filter(function (e) {
                      return e._id === c ? e : 0;
                    }), console.log(u.length), 0 !== u.length) {
                      t.next = 11;
                      break;
                    }

                    return e.push("/productos"), t.abrupt("return");

                  case 11:
                    a = Object(m["k"])(u[0]);

                  case 12:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          })), i.apply(this, arguments);
        }

        var u = Object(w["d"])(function () {
          return n.state.api;
        }),
            o = Object(w["d"])(function () {
          return n.state.usuario;
        });
        c();
        var l = Object(w["d"])(function () {
          return n.state.toask;
        });

        function s() {
          return d.apply(this, arguments);
        }

        function d() {
          return d = Object(g["a"])(_regenerator["default"].mark(function n() {
            var r, c, i;
            return _regenerator["default"].wrap(function (n) {
              while (1) {
                switch (n.prev = n.next) {
                  case 0:
                    if (n.prev = 0, t.value.precio) {
                      n.next = 3;
                      break;
                    }

                    return n.abrupt("return", t.precio = "");

                  case 3:
                    if (t.value.cantidad) {
                      n.next = 5;
                      break;
                    }

                    return n.abrupt("return", t.cantidad = "");

                  case 5:
                    return r = {
                      cantidad: a.value.cantidad + t.value.cantidad,
                      precio: t.value.precio
                    }, n.next = 8, D.a.put("".concat(u.value, "/productos/cantidad/").concat(a.value._id), r);

                  case 8:
                    c = n.sent, i = c.data, i.status ? (Object(E["a"])(i.value, l.value.success), a.value = {}, t.value = {}, e.push("/productos")) : Object(E["a"])(i.value, l.value.warning), n.next = 16;
                    break;

                  case 13:
                    n.prev = 13, n.t0 = n["catch"](0), Object(E["a"])("no se pudo conectar al servidor");

                  case 16:
                  case "end":
                    return n.stop();
                }
              }
            }, n, null, [[0, 13]]);
          })), d.apply(this, arguments);
        }

        return {
          uri: r,
          info: a,
          newDate: t,
          update: s,
          usuario: o
        };
      }
    };
    I.render = j;
    t["default"] = I;
  },
  d97a: function d97a(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("7a23"),
        a = {
      style: {
        height: "70vh"
      },
      id: "layoutError"
    },
        c = {
      id: "layoutError_content"
    },
        i = {
      "class": "container"
    },
        u = {
      "class": "row mt-5 justify-content-center"
    },
        o = {
      "class": "col-lg-6"
    },
        l = {
      "class": "text-center mt-4"
    },
        s = Object(r["h"])("h1", {
      "class": "display-1"
    }, "403", -1),
        d = Object(r["h"])("p", {
      "class": "lead"
    }, "sin autorizacion", -1),
        p = Object(r["h"])("p", null, "su acceso a esta area no esta permitido.", -1),
        b = Object(r["h"])("i", {
      "class": "fas fa-arrow-left me-1"
    }, null, -1),
        f = Object(r["g"])(" regresar al inicio ");

    function h(e, t, n, h, v, O) {
      var j = Object(r["B"])("router-link");
      return Object(r["s"])(), Object(r["e"])(r["a"], null, [Object(r["h"])("div", a, [Object(r["h"])("div", c, [Object(r["h"])("main", null, [Object(r["h"])("div", i, [Object(r["h"])("div", u, [Object(r["h"])("div", o, [Object(r["h"])("div", l, [s, d, p, Object(r["h"])(j, {
        to: "/"
      }, {
        "default": Object(r["N"])(function () {
          return [b, f];
        }),
        _: 1
      })])])])])])])]), Object(r["h"])("button", {
        onClick: t[1] || (t[1] = function () {
          return h.alert && h.alert.apply(h, arguments);
        })
      })], 64);
    }

    var v = {
      setup: function setup() {
        function e() {
          for (var e = 4e4, t = 0; t < e; t++) {
            console.log("hola");
          }
        }

        return {
          alert: e
        };
      }
    };
    v.render = h;
    t["default"] = v;
  }
}]);