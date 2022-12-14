"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

(function (e) {
  function t(t) {
    for (var n, c, s = t[0], i = t[1], l = t[2], u = 0, d = []; u < s.length; u++) {
      c = s[u], Object.prototype.hasOwnProperty.call(r, c) && r[c] && d.push(r[c][0]), r[c] = 0;
    }

    for (n in i) {
      Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }

    b && b(t);

    while (d.length) {
      d.shift()();
    }

    return o.push.apply(o, l || []), a();
  }

  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], n = !0, c = 1; c < a.length; c++) {
        var s = a[c];
        0 !== r[s] && (n = !1);
      }

      n && (o.splice(t--, 1), e = i(i.s = a[0]));
    }

    return e;
  }

  var n = {},
      c = {
    app: 0
  },
      r = {
    app: 0
  },
      o = [];

  function s(e) {
    return i.p + "js/" + ({}[e] || e) + "." + {
      "chunk-0808c6c2": "97c18c68",
      "chunk-0f5192e0": "35e6c94e",
      "chunk-2d0c849f": "8ac40a5b",
      "chunk-2d0e5f55": "f1d7b527",
      "chunk-2d216214": "9b6331c5",
      "chunk-2d216257": "3e772cf8",
      "chunk-2d21f315": "7e17eefa",
      "chunk-537c9740": "8d99abea",
      "chunk-5f3d9ebe": "f3cfd137",
      "chunk-7d6288d8": "ffbc265f",
      "chunk-9f5c9420": "6ebb3817"
    }[e] + ".js";
  }

  function i(t) {
    if (n[t]) return n[t].exports;
    var a = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports;
  }

  i.e = function (e) {
    var t = [],
        a = {
      "chunk-537c9740": 1
    };
    c[e] ? t.push(c[e]) : 0 !== c[e] && a[e] && t.push(c[e] = new Promise(function (t, a) {
      for (var n = "css/" + ({}[e] || e) + "." + {
        "chunk-0808c6c2": "31d6cfe0",
        "chunk-0f5192e0": "31d6cfe0",
        "chunk-2d0c849f": "31d6cfe0",
        "chunk-2d0e5f55": "31d6cfe0",
        "chunk-2d216214": "31d6cfe0",
        "chunk-2d216257": "31d6cfe0",
        "chunk-2d21f315": "31d6cfe0",
        "chunk-537c9740": "40cdae19",
        "chunk-5f3d9ebe": "31d6cfe0",
        "chunk-7d6288d8": "31d6cfe0",
        "chunk-9f5c9420": "31d6cfe0"
      }[e] + ".css", r = i.p + n, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
        var l = o[s],
            u = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (u === n || u === r)) return t();
      }

      var d = document.getElementsByTagName("style");

      for (s = 0; s < d.length; s++) {
        l = d[s], u = l.getAttribute("data-href");
        if (u === n || u === r) return t();
      }

      var b = document.createElement("link");
      b.rel = "stylesheet", b.type = "text/css", b.onload = t, b.onerror = function (t) {
        var n = t && t.target && t.target.src || r,
            o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete c[e], b.parentNode.removeChild(b), a(o);
      }, b.href = r;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(b);
    }).then(function () {
      c[e] = 0;
    }));
    var n = r[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var o = new Promise(function (t, a) {
        n = r[e] = [t, a];
      });
      t.push(n[2] = o);
      var l,
          u = document.createElement("script");
      u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = s(e);
      var d = new Error();

      l = function l(t) {
        u.onerror = u.onload = null, clearTimeout(b);
        var a = r[e];

        if (0 !== a) {
          if (a) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
            d.message = "Loading chunk " + e + " failed.\n(" + n + ": " + c + ")", d.name = "ChunkLoadError", d.type = n, d.request = c, a[1](d);
          }

          r[e] = void 0;
        }
      };

      var b = setTimeout(function () {
        l({
          type: "timeout",
          target: u
        });
      }, 12e4);
      u.onerror = u.onload = l, document.head.appendChild(u);
    }
    return Promise.all(t);
  }, i.m = e, i.c = n, i.d = function (e, t, a) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
    });
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" === (0, _typeof2["default"])(e) && e && e.__esModule) return e;
    var a = Object.create(null);
    if (i.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      i.d(a, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return a;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
      u = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var d = 0; d < l.length; d++) {
    t(l[d]);
  }

  var b = u;
  o.push([0, "chunk-vendors"]), a();
})({
  0: function _(e, t, a) {
    e.exports = a("56d7");
  },
  "1bf3": function bf3(e, t, a) {},
  "373e": function e(_e2, t, a) {
    "use strict";

    a("bb1a");
  },
  4678: function _(e, t, a) {
    var n = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea"
    };

    function c(e) {
      var t = r(e);
      return a(t);
    }

    function r(e) {
      if (!a.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t;
      }

      return n[e];
    }

    c.keys = function () {
      return Object.keys(n);
    }, c.resolve = r, e.exports = c, c.id = "4678";
  },
  "56d7": function d7(e, t, a) {
    "use strict";

    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("7a23"),
        c = {
      style: {
        "user-select": "none"
      }
    };

    function r(e, t, a, r, o, s) {
      var i = Object(n["B"])("Signin"),
          l = Object(n["B"])("Header");
      return Object(n["s"])(), Object(n["e"])("div", c, [r.logged ? Object(n["f"])("", !0) : (Object(n["s"])(), Object(n["e"])(i, {
        key: 0
      })), r.logged ? (Object(n["s"])(), Object(n["e"])(l, {
        key: 1,
        "class": ""
      })) : Object(n["f"])("", !0)]);
    }

    var o = a("5c40"),
        s = a("5502"),
        i = {
      style: {
        "overflow-y": "scroll",
        height: "100vh"
      },
      "class": ""
    },
        l = {
      "class": " container mx-auto row justify-content-center"
    },
        u = {
      "class": "col-xl-10 col-lg-12 col-md-9"
    },
        d = {
      "class": "card o-hidden border-0 shadow-lg my-5"
    },
        b = {
      "class": "card-body p-0"
    },
        f = {
      "class": "row"
    },
        p = Object(n["h"])("div", {
      "class": "col-lg-6 d-none d-lg-block bd-login-image"
    }, null, -1),
        j = {
      "class": "col-lg-6"
    },
        h = {
      "class": "p-5"
    },
        m = Object(n["h"])("div", {
      "class": "text-center"
    }, [Object(n["h"])("h1", {
      "class": "h4 text-gray-900 mb-4"
    }, "Iniciar Sesi??n")], -1),
        v = {
      "class": "user",
      autocomplete: "off"
    },
        g = {
      "class": "form-group"
    },
        O = Object(n["h"])("label", {
      "for": ""
    }, "Usuario", -1),
        k = {
      "class": "form-group"
    },
        y = Object(n["h"])("label", {
      "for": ""
    }, "Contrase??a", -1),
        w = Object(n["h"])("hr", null, null, -1),
        x = Object(n["h"])("hr", null, null, -1);

    function _(e, t, a, c, r, o) {
      return Object(n["s"])(), Object(n["e"])("div", i, [Object(n["h"])("div", l, [Object(n["h"])("div", u, [Object(n["h"])("div", d, [Object(n["h"])("div", b, [Object(n["h"])("div", f, [p, Object(n["h"])("div", j, [Object(n["h"])("div", h, [m, Object(n["h"])("form", v, [Object(n["h"])("div", g, [O, Object(n["O"])(Object(n["h"])("input", {
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return c.usuario.username = e;
        }),
        type: "text",
        "class": "form-control",
        placeholder: "Usuario",
        name: "usuario"
      }, null, 512), [[n["J"], c.usuario.username]])]), Object(n["h"])("div", k, [y, Object(n["O"])(Object(n["h"])("input", {
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return c.usuario.password = e;
        }),
        type: "password",
        "class": "form-control",
        placeholder: "Contrase??a",
        name: "clave"
      }, null, 512), [[n["J"], c.usuario.password]])]), Object(n["h"])("input", {
        onClick: t[3] || (t[3] = function (e) {
          return c.loger();
        }),
        value: "Iniciar",
        "class": "btn btn-primary"
      }), w]), x])])])])])])])]);
    }

    var C = a("1da1"),
        S = (a("96cf"), a("a1e9")),
        P = a("bc3a"),
        U = a.n(P),
        N = a("98a0"),
        T = {
      setup: function setup() {
        var e = Object(s["b"])(),
            t = Object(o["d"])(function () {
          return e.state.api;
        }),
            a = Object(o["d"])(function () {
          return e.state.toask;
        }),
            n = Object(S["k"])({
          password: "",
          username: ""
        }),
            c = Object(o["d"])(function () {
          return e.state.usuarios;
        }),
            r = function () {
          var c = Object(C["a"])(_regenerator["default"].mark(function c() {
            var r, o;
            return _regenerator["default"].wrap(function (c) {
              while (1) {
                switch (c.prev = c.next) {
                  case 0:
                    return c.prev = 0, c.next = 3, U.a.post("".concat(t.value, "/usuarios/login"), n.value);

                  case 3:
                    if (r = c.sent, o = r.data, !o.status) {
                      c.next = 7;
                      break;
                    }

                    return c.abrupt("return", e.dispatch("login", o));

                  case 7:
                    null === o.status && Object(N["a"])(o.value, a.value.warning), !1 === o.status && Object(N["a"])(o.value, a.value.danger), c.next = 14;
                    break;

                  case 11:
                    c.prev = 11, c.t0 = c["catch"](0), Object(N["a"])("no hay acceso al servidor");

                  case 14:
                  case "end":
                    return c.stop();
                }
              }
            }, c, null, [[0, 11]]);
          }));
          return function () {
            return c.apply(this, arguments);
          };
        }();

        return {
          loger: r,
          usuario: n,
          usuarios: c
        };
      }
    };
    T.render = _;
    var z = T,
        R = (a("ac1f"), a("841c"), Object(n["R"])("data-v-677eccef"));
    Object(n["v"])("data-v-677eccef");
    var V = {
      "class": "body"
    },
        A = {
      id: "wrapper"
    },
        L = {
      id: "content-wrapper",
      "class": "d-flex flex-column"
    },
        E = {
      id: "content"
    },
        M = {
      style: {
        "max-height": "10vh"
      },
      "class": "\r\n              navbar navbar-expand navbar-light\r\n              bg-primary\r\n              text-white\r\n              topbar\r\n              static-top\r\n              shadow\r\n            "
    },
        B = Object(n["h"])("i", {
      "class": "fa fa-bars"
    }, null, -1),
        D = {
      "class": "input-group"
    },
        I = Object(n["h"])("h6", null, null, -1),
        F = {
      "class": "ml-auto sm-d-none"
    },
        J = {
      "class": "navbar-nav ml-auto"
    },
        q = Object(n["h"])("div", {
      "class": "topbar-divider d-none d-sm-block"
    }, null, -1),
        H = {
      "class": "nav-item dropdown no-arrow"
    },
        $ = Object(n["h"])("a", {
      "class": "nav-link dropdown-toggle",
      href: "#",
      id: "userDropdown",
      role: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, [Object(n["h"])("span", {
      "class": "mr-2 d-none d-lg-inline small text-white"
    }, [Object(n["h"])("i", {
      "class": "fas fa-user"
    })])], -1),
        K = {
      "class": "\r\n                    dropdown-menu dropdown-menu-right\r\n                    shadow\r\n                    animated--grow-in\r\n                  ",
      "aria-labelledby": "userDropdown"
    },
        W = {
      "class": "d-flex align-items-center ml-2"
    },
        G = Object(n["h"])("i", {
      "class": "ml-2 fas fa-search"
    }, null, -1),
        Q = Object(n["h"])("div", {
      "class": "dropdown-divider"
    }, null, -1),
        X = {
      "class": "dropdown-item",
      href: "#"
    },
        Y = Object(n["h"])("i", {
      "class": "fas fa-user fa-sm fa-fw mr-2 text-gray-600"
    }, null, -1),
        Z = Object(n["h"])("div", {
      "class": "dropdown-divider"
    }, null, -1),
        ee = Object(n["h"])("i", {
      "class": "fas fa-cog fa-sm fa-fw mr-2 text-gray-600"
    }, null, -1),
        te = Object(n["g"])("configuracion "),
        ae = Object(n["h"])("div", {
      "class": "dropdown-divider"
    }, null, -1),
        ne = Object(n["h"])("i", {
      "class": "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-600"
    }, null, -1),
        ce = Object(n["g"])(" Salir "),
        re = {
      style: {
        "overflow-y": "auto",
        height: "90vh"
      },
      "class": "scrollbar-light-blue"
    },
        oe = {
      "class": "sticky-footer bg-white"
    },
        se = {
      "class": "container my-auto"
    },
        ie = {
      "class": "copyright text-center my-auto"
    },
        le = Object(n["h"])("span", null, "Copyright ?? Serious Programming", -1),
        ue = Object(n["g"])(" { "),
        de = Object(n["h"])("div", {
      "class": "modal fade",
      id: "logoutModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    }, [Object(n["h"])("div", {
      "class": "modal-dialog",
      role: "document"
    }, [Object(n["h"])("div", {
      "class": "modal-content"
    }, [Object(n["h"])("div", {
      "class": "modal-header"
    }, [Object(n["h"])("h5", {
      "class": "modal-title",
      id: "exampleModalLabel"
    }, "Ready to Leave?"), Object(n["h"])("button", {
      "class": "close",
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, [Object(n["h"])("span", {
      "aria-hidden": "true"
    }, "??")])]), Object(n["h"])("div", {
      "class": "modal-body"
    }, ' Select "Logout" below if you are ready to end your current session. '), Object(n["h"])("div", {
      "class": "modal-footer"
    }, [Object(n["h"])("button", {
      "class": "btn btn-secondary",
      type: "button",
      "data-dismiss": "modal"
    }, " Cancel "), Object(n["h"])("a", {
      "class": "btn btn-primary",
      href: "login.html"
    }, "Logout")])])])], -1);
    Object(n["t"])();

    var be = R(function (e, t, a, c, r, o) {
      var s = Object(n["B"])("Menu"),
          i = Object(n["B"])("router-link"),
          l = Object(n["B"])("router-view"),
          u = Object(n["B"])("Popper");
      return Object(n["s"])(), Object(n["e"])("div", V, [Object(n["h"])("div", A, [Object(n["h"])(s), Object(n["h"])("div", L, [Object(n["h"])("div", E, [Object(n["h"])("nav", M, [Object(n["h"])("button", {
        onClick: t[1] || (t[1] = function () {
          return c.cambiarSidebar && c.cambiarSidebar.apply(c, arguments);
        }),
        id: "sidebarToggleTop",
        "class": "btn btn-link text-white d-md-none mr-1"
      }, [B]), Object(n["h"])("div", D, [I, Object(n["h"])("p", F, [Object(n["h"])("strong", null, Object(n["E"])(c.time), 1)])]), Object(n["h"])("ul", J, [q, Object(n["h"])("li", H, [$, Object(n["h"])("div", K, [Object(n["h"])("div", W, [Object(n["O"])(Object(n["h"])("input", {
        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
          return c.search = e;
        }),
        type: "search",
        "class": "pr-1 pl-1 w-75 form-control form-control-sm"
      }, null, 512), [[n["J"], c.search]]), G]), Q, Object(n["h"])("a", X, [Y, Object(n["g"])(Object(n["E"])(c.usuario.username), 1)]), Z, c.usuario.rol.grado <= 1 ? (Object(n["s"])(), Object(n["e"])(i, {
        key: 0,
        "class": "dropdown-item d-none",
        to: "/configuracion"
      }, {
        "default": R(function () {
          return [ee, te];
        }),
        _: 1
      })) : Object(n["f"])("", !0), ae, Object(n["h"])("a", {
        "class": "dropdown-item",
        onClick: t[3] || (t[3] = function (e) {
          return c.salir();
        })
      }, [ne, ce])])])])]), Object(n["h"])("div", re, [Object(n["h"])(l, {
        param: c.search
      }, null, 8, ["param"]), Object(n["h"])("footer", oe, [Object(n["h"])("div", se, [Object(n["h"])("div", ie, [Object(n["h"])(u, {
        "class": "dark-popper",
        arrow: "",
        hover: "",
        placement: "left",
        content: e.numeralFormat(c.dolar.info.dolar, "0,0") + "bs"
      }, {
        "default": R(function () {
          return [le];
        }),
        _: 1
      }, 8, ["content"])])])])])])])]), ue, de]);
    }),
        fe = a("c1df"),
        pe = a.n(fe),
        je = Object(n["h"])("div", {
      "class": "sidebar-brand-icon rotate-n-15 d-none"
    }, [Object(n["h"])("svg", {
      x: "0px",
      y: "0px",
      width: "70px",
      height: "60px",
      viewBox: "0 0 52 38",
      "class": "img-thumbnail"
    }, [Object(n["h"])("path", {
      id: "logo-movistar",
      d: "M9.835,4.473c-2.424,0.038-6.898,1.233-8.942,9.58c-0.891,3.638-1.235,7.429-0.473,11.94c0.703,4.162,1.948,7.754,2.787,9.733c0.29,0.683,0.738,1.394,1.084,1.832c0.996,1.259,2.654,1.179,3.35,0.835c0.76-0.374,1.633-1.276,1.317-3.337c-0.153-0.996-0.593-2.452-0.841-3.263c-0.761-2.484-1.773-5.482-1.861-7.617c-0.119-2.857,1.008-3.23,1.756-3.396c1.258-0.277,2.312,1.104,3.314,2.835c1.195,2.066,3.245,5.728,4.916,8.522c1.509,2.524,4.293,5.227,8.765,5.042c4.56-0.19,7.92-1.93,9.651-7.405c1.295-4.097,2.178-7.159,3.6-10.294c1.633-3.605,3.813-5.535,5.648-4.946c1.704,0.548,2.129,2.213,2.15,4.661c0.018,2.166-0.233,4.554-0.427,6.308c-0.071,0.637-0.199,1.916-0.147,2.628c0.103,1.397,0.708,2.794,2.282,3.017c1.676,0.238,3.021-1.102,3.558-2.721c0.212-0.64,0.393-1.615,0.49-2.309c0.493-3.5,0.621-5.852,0.398-9.433c-0.259-4.188-1.078-8.005-2.508-11.31c-1.368-3.159-3.565-5.186-6.381-5.364c-3.119-0.197-6.698,1.872-8.575,5.886c-1.73,3.7-3.115,7.499-3.955,9.437c-0.851,1.967-2.103,3.179-4.027,3.382c-2.353,0.246-4.381-1.462-5.866-3.897c-1.295-2.123-3.86-6.165-5.233-7.523C14.375,6.021,12.902,4.425,9.835,4.473",
      fill: "#019DF4"
    })])], -1),
        he = Object(n["h"])("div", {
      "class": "sidebar-brand-text mx-3"
    }, "El mago de la FORD", -1),
        me = Object(n["h"])("hr", {
      "class": "sidebar-divider my-0"
    }, null, -1),
        ve = Object(n["h"])("hr", {
      "class": "sidebar-divider"
    }, null, -1),
        ge = Object(n["h"])("div", {
      "class": "sidebar-heading"
    }, "Interface", -1),
        Oe = {
      key: 0,
      "class": "nav-item"
    },
        ke = Object(n["h"])("i", {
      "class": "fas fa-fw fa-store mr-3"
    }, null, -1),
        ye = Object(n["h"])("span", null, "Ventas", -1),
        we = {
      id: "collapseTwo",
      "class": "collapse",
      "aria-labelledby": "headingTwo",
      "data-parent": "#accordionSidebar"
    },
        xe = {
      "class": "bg-white py-2 collapse-inner rounded"
    },
        _e = Object(n["g"])("Nueva venta"),
        Ce = Object(n["g"])("Ventas"),
        Se = {
      "class": "nav-item"
    },
        Pe = Object(n["h"])("i", {
      "class": "fas fa-fw fa-box mr-3"
    }, null, -1),
        Ue = Object(n["h"])("span", null, "Productos", -1),
        Ne = {
      id: "collapseUtilities",
      "class": "collapse",
      "aria-labelledby": "headingUtilities",
      "data-parent": "#accordionSidebar"
    },
        Te = {
      "class": "bg-white py-2 collapse-inner rounded"
    },
        ze = Object(n["g"])("Nuevo Producto"),
        Re = Object(n["g"])("Productos"),
        Ve = {
      key: 1,
      "class": "nav-item d-none"
    },
        Ae = Object(n["h"])("i", {
      "class": "fas fa-users mr-3"
    }, null, -1),
        Le = Object(n["h"])("span", null, "Clientes", -1),
        Ee = {
      id: "collapseClientes",
      "class": "collapse",
      "aria-labelledby": "headingUtilities",
      "data-parent": "#accordionSidebar"
    },
        Me = {
      "class": "bg-white py-2 collapse-inner rounded"
    },
        Be = Object(n["g"])("Nuevo Clientes"),
        De = Object(n["g"])("Clientes"),
        Ie = {
      key: 2,
      "class": "nav-item d-none"
    },
        Fe = Object(n["h"])("i", {
      "class": "fas fa-hospital mr-3"
    }, null, -1),
        Je = Object(n["h"])("span", null, "Proveedor", -1),
        qe = {
      id: "collapseProveedor",
      "class": "collapse",
      "aria-labelledby": "headingUtilities",
      "data-parent": "#accordionSidebar"
    },
        He = {
      "class": "bg-white py-2 collapse-inner rounded"
    },
        $e = Object(n["g"])("Nuevo Proveedor"),
        Ke = Object(n["g"])("Proveedores"),
        We = {
      key: 3,
      "class": "nav-item"
    },
        Ge = Object(n["h"])("i", {
      "class": "fas fa-user mr-3"
    }, null, -1),
        Qe = Object(n["h"])("span", null, "Usuarios", -1),
        Xe = {
      id: "collapseUsuarios",
      "class": "collapse",
      "aria-labelledby": "headingUtilities",
      "data-parent": "#accordionSidebar"
    },
        Ye = {
      "class": "bg-white py-2 collapse-inner rounded"
    },
        Ze = Object(n["g"])("Nuevo Usuario"),
        et = Object(n["g"])("Usuarios");

    function tt(e, t, a, c, r, o) {
      var s = Object(n["B"])("router-link");
      return Object(n["s"])(), Object(n["e"])("div", null, [Object(n["h"])("ul", {
        "class": [{
          oculto: c.sidebars
        }, "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"],
        id: "accordionSidebar"
      }, [Object(n["h"])(s, {
        style: {
          height: "9vh"
        },
        "class": "sidebar-brand d-flex align-items-center justify-content-center",
        to: "/productos"
      }, {
        "default": Object(n["N"])(function () {
          return [je, he];
        }),
        _: 1
      }), me, ve, ge, c.user.rol.grado <= 2 ? (Object(n["s"])(), Object(n["e"])("li", Oe, [Object(n["h"])(s, {
        "class": "nav-link collapsed d-none",
        to: "#",
        "data-toggle": "collapse",
        "data-target": "#collapseTwo",
        "aria-expanded": "true",
        "aria-controls": "collapseTwo"
      }, {
        "default": Object(n["N"])(function () {
          return [ke, ye];
        }),
        _: 1
      }), Object(n["h"])("div", we, [Object(n["h"])("div", xe, [Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/ventas/add"
      }, {
        "default": Object(n["N"])(function () {
          return [_e];
        }),
        _: 1
      }), Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/ventas/"
      }, {
        "default": Object(n["N"])(function () {
          return [Ce];
        }),
        _: 1
      })])])])) : Object(n["f"])("", !0), Object(n["h"])("li", Se, [Object(n["h"])(s, {
        "class": "nav-link collapsed",
        to: "#",
        "data-toggle": "collapse",
        "data-target": "#collapseUtilities",
        "aria-expanded": "true",
        "aria-controls": "collapseUtilities"
      }, {
        "default": Object(n["N"])(function () {
          return [Pe, Ue];
        }),
        _: 1
      }), Object(n["h"])("div", Ne, [Object(n["h"])("div", Te, [c.user.rol.grado <= 1 ? (Object(n["s"])(), Object(n["e"])(s, {
        key: 0,
        "class": "collapse-item",
        to: "/productos/add"
      }, {
        "default": Object(n["N"])(function () {
          return [ze];
        }),
        _: 1
      })) : Object(n["f"])("", !0), Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/productos"
      }, {
        "default": Object(n["N"])(function () {
          return [Re];
        }),
        _: 1
      })])])]), c.user.rol.grado <= 2 ? (Object(n["s"])(), Object(n["e"])("li", Ve, [Object(n["h"])(s, {
        "class": "nav-link collapsed",
        to: "#",
        "data-toggle": "collapse",
        "data-target": "#collapseClientes",
        "aria-expanded": "true",
        "aria-controls": "collapseUtilities"
      }, {
        "default": Object(n["N"])(function () {
          return [Ae, Le];
        }),
        _: 1
      }), Object(n["h"])("div", Ee, [Object(n["h"])("div", Me, [Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/clientes/add"
      }, {
        "default": Object(n["N"])(function () {
          return [Be];
        }),
        _: 1
      }), Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/clientes"
      }, {
        "default": Object(n["N"])(function () {
          return [De];
        }),
        _: 1
      })])])])) : Object(n["f"])("", !0), c.user.rol.grado <= 2 ? (Object(n["s"])(), Object(n["e"])("li", Ie, [Object(n["h"])(s, {
        "class": "nav-link collapsed",
        to: "#",
        "data-toggle": "collapse",
        "data-target": "#collapseProveedor",
        "aria-expanded": "true",
        "aria-controls": "collapseUtilities"
      }, {
        "default": Object(n["N"])(function () {
          return [Fe, Je];
        }),
        _: 1
      }), Object(n["h"])("div", qe, [Object(n["h"])("div", He, [c.user.rol.grado <= 1 ? (Object(n["s"])(), Object(n["e"])(s, {
        key: 0,
        "class": "collapse-item",
        to: "/proveedores/add"
      }, {
        "default": Object(n["N"])(function () {
          return [$e];
        }),
        _: 1
      })) : Object(n["f"])("", !0), Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/proveedores"
      }, {
        "default": Object(n["N"])(function () {
          return [Ke];
        }),
        _: 1
      })])])])) : Object(n["f"])("", !0), c.user.rol.grado <= 1 ? (Object(n["s"])(), Object(n["e"])("li", We, [Object(n["h"])(s, {
        "class": "nav-link collapsed",
        to: "#",
        "data-toggle": "collapse",
        "data-target": "#collapseUsuarios",
        "aria-expanded": "true",
        "aria-controls": "collapseUtilities"
      }, {
        "default": Object(n["N"])(function () {
          return [Ge, Qe];
        }),
        _: 1
      }), Object(n["h"])("div", Xe, [Object(n["h"])("div", Ye, [Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/usuarios/add"
      }, {
        "default": Object(n["N"])(function () {
          return [Ze];
        }),
        _: 1
      }), Object(n["h"])(s, {
        "class": "collapse-item",
        to: "/usuarios"
      }, {
        "default": Object(n["N"])(function () {
          return [et];
        }),
        _: 1
      })])])])) : Object(n["f"])("", !0)], 2)]);
    }

    var at = {
      setup: function setup() {
        var e = Object(s["b"])(),
            t = Object(o["d"])(function () {
          return e.state.sidebars;
        }),
            a = Object(o["d"])(function () {
          return e.state.usuario;
        });
        return {
          sidebars: t,
          user: a
        };
      }
    };
    a("b4f4");
    at.render = tt;
    var nt = at,
        ct = a("4b43"),
        rt = {
      components: {
        Menu: nt,
        Popper: ct["a"]
      },
      setup: function setup() {
        var e = Object(s["b"])(),
            t = Object(o["d"])(function () {
          return e.state.usuario;
        }),
            a = Object(o["d"])(function () {
          return e.state.system;
        }),
            n = function n() {
          e.dispatch("logout");
        },
            c = Object(S["k"])(""),
            r = function r() {
          setInterval(function () {
            var e = new Date(),
                t = i(e);
            c.value = t;
          }, 1e3);
        },
            i = function i(e) {
          if (e) return pe.a.locale("es"), pe()(String(e)).format("LL h:mm:ss a");
        },
            l = Object(S["k"])(""),
            u = function u() {
          e.dispatch("activeMenu");
        };

        return r(), {
          time: c,
          search: l,
          cambiarSidebar: u,
          salir: n,
          usuario: t,
          dolar: a
        };
      }
    };
    a("373e");
    rt.render = be, rt.__scopeId = "data-v-677eccef";
    var ot = rt,
        st = {
      components: {
        Signin: z,
        Header: ot
      },
      setup: function setup() {
        var e = Object(s["b"])();
        e.dispatch("verifyLocalstorage");
        var t = Object(o["d"])(function () {
          return e.state.logged;
        });
        return {
          logged: t
        };
      }
    };
    st.render = r;
    var it = st,
        lt = (a("4de4"), a("99af"), a("d81d"), a("d3b7"), a("25f0"), a("a434"), a("8baf")),
        ut = a("6612"),
        dt = a.n(ut);
    a("0da4");
    dt.a.register("locale", "es", {
      delimiters: {
        thousands: ".",
        decimal: ","
      },
      ordinal: function ordinal(e) {
        return 1 === e ? "er" : "??me";
      },
      currency: {
        symbol: "???"
      }
    }), dt.a.locale("es");
    var bt = Object(s["a"])({
      state: {
        statusVenta: !1,
        search: "hola",
        productosVenta: [],
        toask: {
          danger: {
            hideProgressBar: !1,
            showIcon: !0,
            position: "bottom-left",
            type: "danger",
            timeout: 3e3,
            transition: "bounce"
          },
          warning: {
            hideProgressBar: !1,
            showIcon: !0,
            position: "bottom-left",
            type: "warning",
            timeout: 3e3,
            transition: "bounce"
          },
          success: {
            hideProgressBar: !1,
            showIcon: !0,
            position: "bottom-left",
            timeout: 3e3,
            type: "success",
            transition: "bounce"
          }
        },
        api: "https://servermagoford.herokuapp.com/api",
        sidebars: !1,
        logged: !1,
        token: null,
        dataCliente: !1,
        datosCliente: {},
        linkclientes: "/clientes",
        usuarios: [],
        proveedores: [],
        usuario: {},
        ventas: [],
        clientesActivos: [],
        productosTrue: [],
        clientes: [],
        productos: [],
        notaVenta: "",
        ventaActual: {},
        deuda: !1,
        system: {
          id: "",
          info: {
            dolar: ""
          }
        }
      },
      mutations: {
        saveCliente: function saveCliente(e, t) {
          e.datosCliente = t, e.dataCliente = !0;
        },
        saveProductos: function saveProductos(e, t) {
          e.productos = t;
          var a = t.filter(function (e) {
            return !0 === e.status ? e : 0;
          });
          e.productosTrue = a;
        },
        saveProveedores: function saveProveedores(e, t) {
          e.proveedores = [], e.proveedores = t;
        },
        verifyUser: function verifyUser(e) {
          return Object(C["a"])(_regenerator["default"].mark(function t() {
            var a, n, c;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, !localStorage.token || !localStorage.id) {
                      t.next = 20;
                      break;
                    }

                    return e.token = localStorage.token, t.next = 5, U.a.get("".concat(e.api, "/system/VerifyToken"), {
                      headers: {
                        xtoken: e.token
                      }
                    });

                  case 5:
                    if (a = t.sent, a.data.status) {
                      t.next = 8;
                      break;
                    }

                    return t.abrupt("return", Object(N["a"])(a.data.value));

                  case 8:
                    return t.next = 10, U.a.get("".concat(e.api, "/usuarios/").concat(localStorage.id));

                  case 10:
                    if (n = t.sent, c = n.data, null !== c.status) {
                      t.next = 17;
                      break;
                    }

                    return Object(N["a"])(c.value), localStorage.token = "", localStorage.id = "", t.abrupt("return");

                  case 17:
                    e.usuario = c, e.logged = !0, Object(N["a"])("".concat(a.data.value, " ").concat(c.username), e.toask.success);

                  case 20:
                    t.next = 25;
                    break;

                  case 22:
                    t.prev = 22, t.t0 = t["catch"](0), Object(N["a"])("no hay acceso al servidor");

                  case 25:
                  case "end":
                    return t.stop();
                }
              }
            }, t, null, [[0, 22]]);
          }))();
        },
        logear: function logear(e, t) {
          return Object(C["a"])(_regenerator["default"].mark(function a() {
            var n, c;
            return _regenerator["default"].wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, U.a.get("".concat(e.api, "/usuarios/").concat(t.usuario));

                  case 2:
                    n = a.sent, c = n.data, e.usuario = c, e.token = t.value, localStorage.token = t.value, localStorage.id = t.usuario, Object(N["a"])("bienvenido ".concat(c.username), e.toask.success), e.logged = !0;

                  case 10:
                  case "end":
                    return a.stop();
                }
              }
            }, a);
          }))();
        },
        saveClientes: function saveClientes(e, t) {
          e.clientes = t;
          var a = t.filter(function (e) {
            return !0 === e.status ? e : 0;
          });
          e.clientesActivos = a;
        },
        saveUsuarios: function saveUsuarios(e, t) {
          e.usuarios = t;
        },
        cambiarRuta: function cambiarRuta(e, t) {
          e.linkclientes = t.ruta;
        },
        agregar: function agregar(e, t) {
          e.productos.push(t);
        },
        updateProveedor: function updateProveedor(e, t) {
          e.proveedores.map(function (e) {
            return e._id === t ? e.status = !e.status : 0;
          });
        },
        saveToCar: function saveToCar(e, t) {
          var a = e.productosTrue.filter(function (e) {
            if (e._id.toString() === t.producto_id) {
              var a = e.cantidad - t.cantidad;
              if (a >= 0) return e.cantidad = a, e;
            }
          });

          if (0 !== a.length) {
            var n = e.productosVenta.filter(function (e) {
              if (e.producto_id === t.producto_id) return e.cantidad = e.cantidad + t.cantidad, e.imei.push({
                value: null
              }), e;
            });
            0 == n.length && e.productosVenta.push(t);
          }
        },
        addProductoInicial: function addProductoInicial(e, t) {
          e.productosTrue.filter(function (e) {
            return e._id.toString() == t.id ? e.cantidad = e.cantidad + t.cantidad : 0;
          });
        },
        resTotal: function resTotal(e, t) {
          e.productosVenta.filter(function (a) {
            a.producto_id == t.id && (e.productosTrue.filter(function (e) {
              e._id.toString() == t.id && e.cantidad++;
            }), a.cantidad--, 0 == a.cantidad && e.productosVenta.splice(t.indice, 1));
          });
        }
      },
      actions: {
        guardarVenta: function guardarVenta(e, t) {
          var a = e.state;
          a.ventaActual = t;
        },
        vaciarVenta: function vaciarVenta(e) {
          var t = e.state;
          t.productosVenta = [], t.datosCliente = {}, t.dataCliente = !1, t.statusVenta = !1, t.ventaActual = {};
        },
        generarPdf: function generarPdf(e) {
          var t = e.state,
              a = t.ventaActual,
              n = a.productos,
              c = a.cliente_id,
              r = function r(e) {
            pe.a.locale("es");
            var t = "".concat(e),
                a = new Date(t);
            return a.setMonth(a.getMonth() + 1), {
              inicio: pe()(t).format("L"),
              "final": pe()(a).format("L")
            };
          },
              o = new lt["default"]({
            format: "letter"
          }),
              s = a.productos.reduce(function (e, t) {
            return e + (t.precio * t.iva / 100 + t.precio) * t.cantidad;
          }, 0),
              i = a.productos.reduce(function (e, t) {
            return e + t.precio * t.iva / 100 * t.cantidad;
          }, 0),
              l = new Image();

          l.src = "/img/fondo.jpg", o.setFontSize(10);
          var u = dt()(a.factura).format("000000");
          o.text("Cliente:    ".concat(c.nombre, " ").concat(c.apellido), 15, 36), o.text("Factura Nro:  ".concat(u, " "), 165, 34), o.text("Rif:    ".concat(c.dni, " "), 130, 36), o.text("Direccion:    ".concat(c.direccion), 15, 40), o.text("fecha:  ".concat(r(a.createdAt).inicio), 165, 40), o.text("Telefono:    ".concat(c.telefono), 15, 44), o.text("vence:    ".concat(r(a.createdAt)["final"]), 165, 44);

          for (var d = 55, b = 0; b < n.length; b++) {
            var f = n[b],
                p = "";
            f.iva || (p = "(e)"), o.text("".concat(f.producto_id.codigo), 17, d), o.text("".concat(f.producto_id.marca, "-").concat(f.producto_id.modelo), 42, d), o.text("".concat(f.cantidad), 125, d), o.text("".concat(dt()(f.precio * a.dolar).format("0,0")), 135, d), o.text("".concat(dt()(f.cantidad * f.precio * a.dolar).format("0,0")).concat(p), 182, d), d += 5;
          }

          o.text("Total factura :", 135, 112), o.text(" ".concat(dt()(s * a.dolar).format("0,0")), 200, 112, {
            align: "right"
          }), o.text("IVA :", 135, 109), o.text("".concat(dt()(i * a.dolar).format("0,0")), 200, 109, {
            align: "right"
          }), o.text("Total Factura($USD) :", 135, 115), o.text("".concat(s, "$"), 200, 115, {
            align: "right"
          }), o.text("Observaciones:", 10, 109);
          var j = "".concat(a.nota);
          o.text(j, 35, 109, {
            align: "justify",
            lineHeightFactor: 1,
            maxWidth: 95
          }), o.output("dataurlnewwindow");
        },
        buscar: function buscar(e) {
          return Object(C["a"])(_regenerator["default"].mark(function t() {
            var a, n, c;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return a = e.state, t.next = 3, U.a.get("".concat(a.api, "/system"));

                  case 3:
                    n = t.sent, c = n.data, c && (delete c.createdAt, delete c.updatedAt, a.system.info = c, a.system.id = c._id);

                  case 6:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }))();
        },
        resProducto: function resProducto(e, t) {
          var a = e.commit;
          a("resTotal", t);
        },
        comprar: function comprar(e, t) {
          return Object(C["a"])(_regenerator["default"].mark(function a() {
            var n, c, r, o, s, i, l, u;
            return _regenerator["default"].wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {
                  case 0:
                    return n = e.state, c = n.usuario._id, r = n.datosCliente._id, o = n.productosVenta, s = n.system.info.dolar, i = {
                      user_id: c,
                      cliente_id: r,
                      productos: o,
                      nota: t.nota,
                      dolar: s,
                      prestamo: t.prestamo
                    }, a.next = 8, U.a.post("".concat(n.api, "/ventas"), i, {
                      headers: {
                        xtoken: n.token
                      }
                    });

                  case 8:
                    l = a.sent, u = l.data, Object(N["a"])(u.value), !0 === u.status && (n.statusVenta = !0, n.ventaActual = u.data);

                  case 12:
                  case "end":
                    return a.stop();
                }
              }
            }, a);
          }))();
        },
        deleteStore: function deleteStore(e, t) {
          var a = e.state,
              n = e.commit,
              c = a.productosVenta[t].cantidad,
              r = a.productosVenta[t].producto_id;
          n("addProductoInicial", {
            cantidad: c,
            id: r
          }), a.productosVenta.splice(t, 1);
        },
        agregarToCarrito: function agregarToCarrito(e, t) {
          var a = e.commit,
              n = e.state,
              c = n.productosTrue.filter(function (e) {
            if (e._id.toString() == t.producto_id) {
              var a = e.cantidad - t.cantidad;
              if (a >= 0) return e;
            }
          });
          c.length > 0 && a("saveToCar", t);
        },
        guardarCliente: function guardarCliente(e, t) {
          var a = e.commit;
          a("saveCliente", t);
        },
        getProductos: function getProductos(e) {
          return Object(C["a"])(_regenerator["default"].mark(function t() {
            var a, n, c, r;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return a = e.commit, n = e.state, t.next = 3, U.a.get("".concat(n.api, "/productos"));

                  case 3:
                    c = t.sent, r = c.data, a("saveProductos", r);

                  case 6:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }))();
        },
        proveedorStatus: function proveedorStatus(e, t) {
          var a = e.commit;
          a("updateProveedor", t);
        },
        activeMenu: function activeMenu(e) {
          var t = e.state;
          t.sidebars = !t.sidebars;
        },
        sendUrl: function sendUrl(e, t) {
          var a = e.commit;
          a("cambiarRuta", t);
        },
        getProveedores: function getProveedores(e) {
          return Object(C["a"])(_regenerator["default"].mark(function t() {
            var a, n, c, r;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return a = e.state, n = e.commit, t.next = 3, U.a.get("".concat(a.api, "/proveedores"));

                  case 3:
                    c = t.sent, r = c.data, n("saveProveedores", r);

                  case 6:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }))();
        },
        login: function login(e, t) {
          var a = e.commit;
          t.status && a("logear", t);
        },
        getClientes: function getClientes(e) {
          return Object(C["a"])(_regenerator["default"].mark(function t() {
            var a, n, c, r;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return a = e.state, n = e.commit, t.prev = 1, t.next = 4, U.a.get("".concat(a.api, "/clientes"));

                  case 4:
                    c = t.sent, r = c.data, n("saveClientes", r), t.next = 12;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t["catch"](1), Object(N["a"])("no hay conexion con el servidor");

                  case 12:
                  case "end":
                    return t.stop();
                }
              }
            }, t, null, [[1, 9]]);
          }))();
        },
        getUsuarios: function getUsuarios(e) {
          return Object(C["a"])(_regenerator["default"].mark(function t() {
            var a, n, c, r;
            return _regenerator["default"].wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    return a = e.state, n = e.commit, t.prev = 1, t.next = 4, U.a.get("".concat(a.api, "/usuarios"));

                  case 4:
                    c = t.sent, r = c.data, n("saveUsuarios", r), t.next = 12;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t["catch"](1), Object(N["a"])("no hay conexion con el servidor");

                  case 12:
                  case "end":
                    return t.stop();
                }
              }
            }, t, null, [[1, 9]]);
          }))();
        },
        verifyLocalstorage: function verifyLocalstorage(e) {
          var t = e.commit;
          t("verifyUser");
        },
        logout: function logout(e) {
          var t = e.state;
          t.logged = !1, Object(N["a"])("hasta pronto!!!"), delete localStorage.token, delete localStorage.id;
        },
        saveProduct: function saveProduct(e, t) {
          var a = e.commit,
              n = e.state,
              c = n.productos.filter(function (e) {
            return e.modelo === t.modelo && e;
          });
          !(c.length < 0) && a("agregar", t);
        },
        deleteProccessVenta: function deleteProccessVenta(e) {
          var t = e.state;
          t.productosVenta = [], t.datosCliente = {}, t.dataCliente = !1;
        }
      },
      modules: {}
    }),
        ft = (a("3ca3"), a("ddb0"), a("6c02")),
        pt = [{
      path: "/prueba",
      name: "prueba",
      meta: {
        title: "prueba"
      },
      component: function component() {
        return a.e("chunk-2d0e5f55").then(a.bind(null, "9767"));
      }
    }, {
      path: "/",
      name: "index",
      meta: {
        title: "el mago de la FORD"
      },
      component: function component() {
        return a.e("chunk-537c9740").then(a.bind(null, "59fc"));
      }
    }, {
      path: "/configuracion",
      name: "condig",
      meta: {
        title: "configuracion"
      },
      component: function component() {
        return a.e("chunk-2d0c849f").then(a.bind(null, "53f1"));
      }
    }, {
      path: "/403",
      name: "403",
      meta: {
        title: "403"
      },
      component: function component() {
        return a.e("chunk-2d21f315").then(a.bind(null, "d97a"));
      }
    }, {
      path: "/productos",
      name: "productos",
      meta: {
        title: "productos"
      },
      component: function component() {
        return a.e("chunk-537c9740").then(a.bind(null, "59fc"));
      }
    }, {
      path: "/productos/add",
      name: "addProductos",
      meta: {
        title: "formulario de productos"
      },
      component: function component() {
        return a.e("chunk-9f5c9420").then(a.bind(null, "9d49"));
      }
    }, {
      path: "/productos/add/cantidad",
      name: "addProductosCantidad",
      meta: {
        title: "edicion de stock"
      },
      component: function component() {
        return a.e("chunk-0808c6c2").then(a.bind(null, "a0b4"));
      }
    }, {
      path: "/usuarios",
      name: "usuarios",
      meta: {
        title: "usuarios"
      },
      component: function component() {
        return a.e("chunk-5f3d9ebe").then(a.bind(null, "7a66"));
      }
    }, {
      path: "/usuarios/add",
      name: "usuarioAdd",
      meta: {
        title: "formulario de usuarios"
      },
      component: function component() {
        return a.e("chunk-0f5192e0").then(a.bind(null, "3feb"));
      }
    }],
        jt = Object(ft["a"])({
      history: Object(ft["b"])("/"),
      routes: pt,
      base: "history",
      linkActiveClass: "active"
    });
    jt.beforeEach(function (e, t, a) {
      e.matched.length || jt.push("/"), a();
    });
    var ht = "sistema de ventas";
    jt.afterEach(function (e) {
      document.title = e.meta.title || ht;
    });
    var mt = jt,
        vt = a("1157"),
        gt = a.n(vt),
        Ot = (a("c4bb"), a("528a")),
        kt = a.n(Ot);
    a("a101");
    Object(n["d"])(it).use(mt).use(bt).use(kt.a, {
      locale: "es"
    }).use(gt.a).mount("#app");
  },
  b4f4: function b4f4(e, t, a) {
    "use strict";

    a("1bf3");
  },
  bb1a: function bb1a(e, t, a) {}
});