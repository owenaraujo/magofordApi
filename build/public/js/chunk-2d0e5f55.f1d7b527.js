"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e5f55"], {
  9767: function _(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("7a23");

    function r(e, n, t, r, c, a) {
      return Object(u["s"])(), Object(u["e"])(u["a"], null, [Object(u["g"])(Object(u["E"])(e.numeralFormat(r.number, " 000000")) + " ", 1), Object(u["O"])(Object(u["h"])("input", {
        type: "Number",
        "onUpdate:modelValue": n[1] || (n[1] = function (e) {
          return r.number = e;
        }),
        name: "",
        id: ""
      }, null, 512), [[u["J"], r.number]])], 64);
    }

    var c = t("a1e9"),
        a = {
      setup: function setup() {
        var e = Object(c["k"])(2);
        return {
          number: e
        };
      }
    };
    a.render = r;
    n["default"] = a;
  }
}]);