"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-9f5c9420", "chunk-2d21f315"], {
  1276: function _(e, t, r) {
    "use strict";

    var n = r("d784"),
        c = r("44e7"),
        o = r("825a"),
        a = r("1d80"),
        l = r("4840"),
        i = r("8aa5"),
        u = r("50c4"),
        s = r("14c3"),
        d = r("9263"),
        b = r("9f7f"),
        v = r("d039"),
        p = b.UNSUPPORTED_Y,
        f = [].push,
        h = Math.min,
        O = 4294967295,
        j = !v(function () {
      var e = /(?:)/,
          t = e.exec;

      e.exec = function () {
        return t.apply(this, arguments);
      };

      var r = "ab".split(e);
      return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
    });
    n("split", function (e, t, r) {
      var n;
      return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, r) {
        var n = String(a(this)),
            o = void 0 === r ? O : r >>> 0;
        if (0 === o) return [];
        if (void 0 === e) return [n];
        if (!c(e)) return t.call(n, e, o);
        var l,
            i,
            u,
            s = [],
            b = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
            v = 0,
            p = new RegExp(e.source, b + "g");

        while (l = d.call(p, n)) {
          if (i = p.lastIndex, i > v && (s.push(n.slice(v, l.index)), l.length > 1 && l.index < n.length && f.apply(s, l.slice(1)), u = l[0].length, v = i, s.length >= o)) break;
          p.lastIndex === l.index && p.lastIndex++;
        }

        return v === n.length ? !u && p.test("") || s.push("") : s.push(n.slice(v)), s.length > o ? s.slice(0, o) : s;
      } : "0".split(void 0, 0).length ? function (e, r) {
        return void 0 === e && 0 === r ? [] : t.call(this, e, r);
      } : t, [function (t, r) {
        var c = a(this),
            o = void 0 == t ? void 0 : t[e];
        return void 0 !== o ? o.call(t, c, r) : n.call(String(c), t, r);
      }, function (e, c) {
        var a = r(n, this, e, c, n !== t);
        if (a.done) return a.value;
        var d = o(this),
            b = String(e),
            v = l(d, RegExp),
            f = d.unicode,
            j = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (p ? "g" : "y"),
            m = new v(p ? "^(?:" + d.source + ")" : d, j),
            g = void 0 === c ? O : c >>> 0;
        if (0 === g) return [];
        if (0 === b.length) return null === s(m, b) ? [b] : [];
        var k = 0,
            y = 0,
            x = [];

        while (y < b.length) {
          m.lastIndex = p ? 0 : y;

          var w,
              _ = s(m, p ? b.slice(y) : b);

          if (null === _ || (w = h(u(m.lastIndex + (p ? y : 0)), b.length)) === k) y = i(b, y, f);else {
            if (x.push(b.slice(k, y)), x.length === g) return x;

            for (var E = 1; E <= _.length - 1; E++) {
              if (x.push(_[E]), x.length === g) return x;
            }

            y = k = w;
          }
        }

        return x.push(b.slice(k)), x;
      }];
    }, !j, p);
  },
  "44e7": function e7(e, t, r) {
    var n = r("861d"),
        c = r("c6b6"),
        o = r("b622"),
        a = o("match");

    e.exports = function (e) {
      var t;
      return n(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == c(e));
    };
  },
  "8aa5": function aa5(e, t, r) {
    "use strict";

    var n = r("6547").charAt;

    e.exports = function (e, t, r) {
      return t + (r ? n(e, t).length : 1);
    };
  },
  "9d49": function d49(e, t, r) {
    "use strict";

    r.r(t);
    var n = r("7a23"),
        c = {
      key: 0
    },
        o = {
      "class": "container-fluid mt-2"
    },
        a = {
      "class": "d-sm-flex align-items-center justify-content-between mb-4"
    },
        l = Object(n["h"])("h1", {
      "class": "h3 mb-0 text-gray-800"
    }, "Panel de Administraci??n", -1),
        i = Object(n["g"])("Regresar"),
        u = {
      "class": "row"
    },
        s = {
      "class": "col-lg-6 m-auto"
    },
        d = {
      autocomplete: "off"
    },
        b = {
      "class": "form-group form-floating mb-3 "
    },
        v = Object(n["h"])("label", null, "ubicacion", -1),
        p = {
      "class": "form-group form-floating mb-3 d-none"
    },
        f = Object(n["h"])("label", null, "Proveedor", -1),
        h = {
      "class": "form-check mb-4 d-none"
    },
        O = Object(n["h"])("label", {
      "for": "iva",
      "class": "form-check-label"
    }, "iva 16%", -1);

    function j(e, t, r, j, m, g) {
      var k = Object(n["B"])("router-link"),
          y = Object(n["B"])("NoAccess");
      return j.usuario.rol.grado <= 1 ? (Object(n["s"])(), Object(n["e"])("div", c, [Object(n["h"])("div", o, [Object(n["h"])("div", a, [l, Object(n["h"])(k, {
        to: "/productos",
        "class": "btn btn-primary"
      }, {
        "default": Object(n["N"])(function () {
          return [i];
        }),
        _: 1
      })]), Object(n["h"])("div", u, [Object(n["h"])("div", s, [Object(n["h"])("form", d, [Object(n["h"])("div", b, [v, Object(n["O"])(Object(n["h"])("select", {
        id: "ubicacion",
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return j.producto.ubicacion = e;
        }),
        name: "proveedor",
        "class": "form-control"
      }, [(Object(n["s"])(!0), Object(n["e"])(n["a"], null, Object(n["z"])(j.ubicacion, function (e) {
        return Object(n["s"])(), Object(n["e"])("option", {
          key: e,
          value: e
        }, Object(n["E"])(e), 9, ["value"]);
      }), 128))], 512), [[n["I"], j.producto.ubicacion]])]), Object(n["h"])("div", p, [f, Object(n["O"])(Object(n["h"])("select", {
        "class": [{
          "is-invalid": "" === j.producto.proveedor_id
        }, "form-control"],
        id: "proveedor",
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return j.producto.proveedor_id = e;
        }),
        name: "proveedor"
      }, [(Object(n["s"])(!0), Object(n["e"])(n["a"], null, Object(n["z"])(j.proveedores, function (e) {
        return Object(n["O"])((Object(n["s"])(), Object(n["e"])("option", {
          key: e.id,
          value: e._id
        }, Object(n["E"])(e.nombre), 9, ["value"])), [[n["K"], !0 === e.status]]);
      }), 128))], 2), [[n["I"], j.producto.proveedor_id]])]), (Object(n["s"])(!0), Object(n["e"])(n["a"], null, Object(n["z"])(j.form, function (e, t) {
        return Object(n["s"])(), Object(n["e"])("div", {
          "class": "mb-2",
          key: t
        }, [Object(n["h"])("label", {
          "for": e.valor
        }, Object(n["E"])(e.valor), 9, ["for"]), e.number ? Object(n["f"])("", !0) : Object(n["O"])((Object(n["s"])(), Object(n["e"])("input", {
          key: 0,
          "class": [{
            "is-invalid": "" === j.producto[e.valor]
          }, "form-control"],
          "onUpdate:modelValue": function onUpdateModelValue(t) {
            return j.producto[e.valor] = t;
          },
          type: "text",
          placeholder: e.valor,
          id: e.valor
        }, null, 10, ["onUpdate:modelValue", "placeholder", "id"])), [[n["J"], j.producto[e.valor]]]), e.number ? Object(n["O"])((Object(n["s"])(), Object(n["e"])("input", {
          key: 1,
          "class": [{
            "is-invalid": "" === j.producto[e.valor]
          }, "form-control"],
          "onUpdate:modelValue": function onUpdateModelValue(t) {
            return j.producto[e.valor] = t;
          },
          type: "Number",
          placeholder: e.valor,
          id: e.valor
        }, null, 10, ["onUpdate:modelValue", "placeholder", "id"])), [[n["J"], j.producto[e.valor], void 0, {
          number: !0
        }]]) : Object(n["f"])("", !0)]);
      }), 128)), Object(n["h"])("div", h, [Object(n["O"])(Object(n["h"])("input", {
        "class": "form-check-input ",
        "onUpdate:modelValue": t[3] || (t[3] = function (e) {
          return j.producto.iva = e;
        }),
        type: "checkbox",
        id: "iva"
      }, null, 512), [[n["H"], j.producto.iva]]), O]), Object(n["h"])("button", {
        onClick: t[4] || (t[4] = Object(n["Q"])(function (e) {
          return j.sendProduct();
        }, ["prevent"])),
        value: "",
        "class": "btn btn-primary"
      }, " Guardar Producto ")])])])])])) : (Object(n["s"])(), Object(n["e"])(y, {
        key: 1
      }));
    }

    var m = r("1da1"),
        g = (r("96cf"), r("99af"), r("ac1f"), r("1276"), r("4de4"), r("a434"), r("a1e9")),
        k = r("5502"),
        y = r("98a0"),
        x = r("6c02"),
        w = r("5c40"),
        _ = r("bc3a"),
        E = r.n(_),
        U = r("d97a"),
        P = {
      components: {
        NoAccess: U["default"]
      },
      setup: function setup() {
        var e = Object(w["d"])(function () {
          return t.state.toask;
        }),
            t = Object(k["b"])(),
            r = Object(x["c"])();
        t.dispatch("getProveedores");

        var n = Object(w["d"])(function () {
          return t.state.proveedores;
        }),
            c = ["barquisimeto", "valencia", "el vigia"],
            o = Object(w["d"])(function () {
          return t.state.token;
        }),
            a = Object(g["k"])([{
          valor: "nombre"
        }, {
          valor: "descripcion"
        }, {
          valor: "cantidad",
          number: !0
        }, {
          valor: "codigo"
        }]),
            l = "",
            i = Object(g["k"])({
          proveedor_id: null,
          nombre: null
        }),
            u = Object(w["d"])(function () {
          return t.state.api;
        }),
            s = function () {
          var t = Object(m["a"])(_regenerator["default"].mark(function t() {
            var n, c;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, E.a.post("".concat(u.value, "/productos/").concat(l), i.value, {
                      headers: {
                        xtoken: o.value
                      }
                    });

                  case 3:
                    if (n = t.sent, c = n.data, !0 !== c.status) {
                      t.next = 12;
                      break;
                    }

                    return r.push("/productos"), l = "", Object(y["a"])(c.value, e.value.success), t.abrupt("return");

                  case 12:
                    Object(y["a"])(c.value, e.value.danger);

                  case 13:
                    t.next = 18;
                    break;

                  case 15:
                    t.prev = 15, t.t0 = t["catch"](0), Object(y["a"])("no se pudo conectar al servidor");

                  case 18:
                  case "end":
                    return t.stop();
                }
              }
            }, t, null, [[0, 15]]);
          }));
          return function () {
            return t.apply(this, arguments);
          };
        }();

        function d() {
          try {
            var e = window.location.href.split("?");

            if (2 === e.length) {
              var n = Object(w["d"])(function () {
                return t.state.productos;
              }),
                  c = n.value;
              if (0 === c.length) return void r.push("/productos/add");
              l = e[1];
              var o = c.filter(function (e) {
                return e._id === l && e;
              });
              o ? (i.value = o[0], o[0].iva ? o[0].iva = !0 : o[0].iva = !1, a.value.splice(4, 2)) : i.value = {};
            }
          } catch (u) {}
        }

        d();
        var b = Object(w["d"])(function () {
          return t.state.usuario;
        });
        return {
          producto: i,
          form: a,
          sendProduct: s,
          proveedores: n,
          token: o,
          usuario: b,
          ubicacion: c
        };
      }
    };

    P.render = j;
    t["default"] = P;
  },
  d97a: function d97a(e, t, r) {
    "use strict";

    r.r(t);
    var n = r("7a23"),
        c = {
      style: {
        height: "70vh"
      },
      id: "layoutError"
    },
        o = {
      id: "layoutError_content"
    },
        a = {
      "class": "container"
    },
        l = {
      "class": "row mt-5 justify-content-center"
    },
        i = {
      "class": "col-lg-6"
    },
        u = {
      "class": "text-center mt-4"
    },
        s = Object(n["h"])("h1", {
      "class": "display-1"
    }, "403", -1),
        d = Object(n["h"])("p", {
      "class": "lead"
    }, "sin autorizacion", -1),
        b = Object(n["h"])("p", null, "su acceso a esta area no esta permitido.", -1),
        v = Object(n["h"])("i", {
      "class": "fas fa-arrow-left me-1"
    }, null, -1),
        p = Object(n["g"])(" regresar al inicio ");

    function f(e, t, r, f, h, O) {
      var j = Object(n["B"])("router-link");
      return Object(n["s"])(), Object(n["e"])(n["a"], null, [Object(n["h"])("div", c, [Object(n["h"])("div", o, [Object(n["h"])("main", null, [Object(n["h"])("div", a, [Object(n["h"])("div", l, [Object(n["h"])("div", i, [Object(n["h"])("div", u, [s, d, b, Object(n["h"])(j, {
        to: "/"
      }, {
        "default": Object(n["N"])(function () {
          return [v, p];
        }),
        _: 1
      })])])])])])])]), Object(n["h"])("button", {
        onClick: t[1] || (t[1] = function () {
          return f.alert && f.alert.apply(f, arguments);
        })
      })], 64);
    }

    var h = {
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
    h.render = f;
    t["default"] = h;
  }
}]);