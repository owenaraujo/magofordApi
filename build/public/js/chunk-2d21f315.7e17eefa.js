"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d21f315"], {
  d97a: function d97a(t, e, c) {
    "use strict";

    c.r(e);
    var n = c("7a23"),
        a = {
      style: {
        height: "70vh"
      },
      id: "layoutError"
    },
        r = {
      id: "layoutError_content"
    },
        l = {
      "class": "container"
    },
        o = {
      "class": "row mt-5 justify-content-center"
    },
        i = {
      "class": "col-lg-6"
    },
        s = {
      "class": "text-center mt-4"
    },
        u = Object(n["h"])("h1", {
      "class": "display-1"
    }, "403", -1),
        b = Object(n["h"])("p", {
      "class": "lead"
    }, "sin autorizacion", -1),
        h = Object(n["h"])("p", null, "su acceso a esta area no esta permitido.", -1),
        j = Object(n["h"])("i", {
      "class": "fas fa-arrow-left me-1"
    }, null, -1),
        d = Object(n["g"])(" regresar al inicio ");

    function O(t, e, c, O, f, p) {
      var v = Object(n["B"])("router-link");
      return Object(n["s"])(), Object(n["e"])(n["a"], null, [Object(n["h"])("div", a, [Object(n["h"])("div", r, [Object(n["h"])("main", null, [Object(n["h"])("div", l, [Object(n["h"])("div", o, [Object(n["h"])("div", i, [Object(n["h"])("div", s, [u, b, h, Object(n["h"])(v, {
        to: "/"
      }, {
        "default": Object(n["N"])(function () {
          return [j, d];
        }),
        _: 1
      })])])])])])])]), Object(n["h"])("button", {
        onClick: e[1] || (e[1] = function () {
          return O.alert && O.alert.apply(O, arguments);
        })
      })], 64);
    }

    var f = {
      setup: function setup() {
        function t() {
          for (var t = 4e4, e = 0; e < t; e++) {
            console.log("hola");
          }
        }

        return {
          alert: t
        };
      }
    };
    f.render = O;
    e["default"] = f;
  }
}]);