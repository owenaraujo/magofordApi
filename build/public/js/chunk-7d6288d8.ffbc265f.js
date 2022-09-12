"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7d6288d8"], {
  "0149": function _(t, e, r) {
    var n = r("fc48"),
        i = r("3ac6");
    t.exports = "process" == n(i.process);
  },
  "0273": function _(t, e, r) {
    var n = r("c1b2"),
        i = r("4180"),
        a = r("2c6c");
    t.exports = n ? function (t, e, r) {
      return i.f(t, e, a(1, r));
    } : function (t, e, r) {
      return t[e] = r, t;
    };
  },
  "0348": function _(t, e, r) {
    t.exports = r("fd76");
  },
  "0363": function _(t, e, r) {
    var n = r("3ac6"),
        i = r("d659"),
        a = r("78e7"),
        o = r("3e80"),
        u = r("1e63"),
        s = r("62d0"),
        c = i("wks"),
        f = n.Symbol,
        l = s ? f : f && f.withoutSetter || o;

    t.exports = function (t) {
      return a(c, t) && (u || "string" == typeof c[t]) || (u && a(f, t) ? c[t] = f[t] : c[t] = l("Symbol." + t)), c[t];
    };
  },
  "042b": function b(t, e, r) {
    r("a2ac");
    var n = r("a169");
    t.exports = n("Array").every;
  },
  "06fa": function fa(t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (e) {
        return !0;
      }
    };
  },
  "09e1": function e1(t, e, r) {
    t.exports = r("d339");
  },
  "0a43": function a43(t, e, r) {
    var n = r("3876");
    t.exports = n;
  },
  "0aa1": function aa1(t, e, r) {
    var n = r("a5eb"),
        i = r("4fff"),
        a = r("a016"),
        o = r("06fa"),
        u = o(function () {
      a(1);
    });
    n({
      target: "Object",
      stat: !0,
      forced: u
    }, {
      keys: function keys(t) {
        return a(i(t));
      }
    });
  },
  "0abc": function abc(t, e, r) {
    r("c38c");
    var n = r("764b");
    t.exports = n.Reflect.getPrototypeOf;
  },
  "0aea": function aea(t, e, r) {
    var n = r("d666");

    t.exports = function (t, e, r) {
      for (var i in e) {
        r && r.unsafe && t[i] ? t[i] = e[i] : n(t, i, e[i], r);
      }

      return t;
    };
  },
  "0b11": function b11(t, e, r) {
    t.exports = r("2f74");
  },
  "0b7b": function b7b(t, e, r) {
    var n = r("8f95"),
        i = r("7463"),
        a = r("0363"),
        o = a("iterator");

    t.exports = function (t) {
      if (void 0 != t) return t[o] || t["@@iterator"] || i[n(t)];
    };
  },
  "0c33": function c33(t, e, r) {
    r("25a6");
    var n = r("a169");
    t.exports = n("Array").some;
  },
  "0c82": function c82(t, e, r) {
    var n = r("9bfb");
    n("asyncDispose");
  },
  "0ca2": function ca2(t, e, r) {
    r("e219");
    var n = r("764b");
    t.exports = n.parseFloat;
  },
  "0cae": function cae(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("3ac6"),
        a = r("6594"),
        o = r("06fa"),
        u = r("0273"),
        s = r("5b57"),
        c = r("5f7d"),
        f = r("dfdb"),
        l = r("2874"),
        h = r("4180").f,
        p = r("dee0").forEach,
        v = r("c1b2"),
        d = r("2f5a"),
        y = d.set,
        g = d.getterFor;

    t.exports = function (t, e, r) {
      var d,
          x = -1 !== t.indexOf("Map"),
          m = -1 !== t.indexOf("Weak"),
          b = x ? "set" : "add",
          w = i[t],
          S = w && w.prototype,
          k = {};

      if (v && "function" == typeof w && (m || S.forEach && !o(function () {
        new w().entries().next();
      }))) {
        d = e(function (e, r) {
          y(c(e, d, t), {
            type: t,
            collection: new w()
          }), void 0 != r && s(r, e[b], {
            that: e,
            AS_ENTRIES: x
          });
        });
        var A = g(t);
        p(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (t) {
          var e = "add" == t || "set" == t;
          !(t in S) || m && "clear" == t || u(d.prototype, t, function (r, n) {
            var i = A(this).collection;
            if (!e && m && !f(r)) return "get" == t && void 0;
            var a = i[t](0 === r ? 0 : r, n);
            return e ? this : a;
          });
        }), m || h(d.prototype, "size", {
          configurable: !0,
          get: function get() {
            return A(this).collection.size;
          }
        });
      } else d = r.getConstructor(e, t, x, b), a.REQUIRED = !0;

      return l(d, t, !1, !0), k[t] = d, n({
        global: !0,
        forced: !0
      }, k), m || r.setStrong(d, t, x), d;
    };
  },
  "0cf0": function cf0(t, e, r) {
    var n = r("b323"),
        i = r("9e57"),
        a = i.concat("length", "prototype");

    e.f = Object.getOwnPropertyNames || function (t) {
      return n(t, a);
    };
  },
  "0d73": function d73(t, e, r) {
    "use strict";

    r.r(e), function (t) {
      r.d(e, "AElement", function () {
        return qn;
      }), r.d(e, "AnimateColorElement", function () {
        return Sn;
      }), r.d(e, "AnimateElement", function () {
        return mn;
      }), r.d(e, "AnimateTransformElement", function () {
        return Tn;
      }), r.d(e, "BoundingBox", function () {
        return or;
      }), r.d(e, "CB1", function () {
        return xe;
      }), r.d(e, "CB2", function () {
        return me;
      }), r.d(e, "CB3", function () {
        return be;
      }), r.d(e, "CB4", function () {
        return we;
      }), r.d(e, "Canvg", function () {
        return ia;
      }), r.d(e, "CircleElement", function () {
        return Rr;
      }), r.d(e, "ClipPathElement", function () {
        return Oi;
      }), r.d(e, "DefsElement", function () {
        return tn;
      }), r.d(e, "DescElement", function () {
        return Wi;
      }), r.d(e, "Document", function () {
        return ea;
      }), r.d(e, "Element", function () {
        return Ze;
      }), r.d(e, "EllipseElement", function () {
        return Ir;
      }), r.d(e, "FeColorMatrixElement", function () {
        return bi;
      }), r.d(e, "FeCompositeElement", function () {
        return zi;
      }), r.d(e, "FeDropShadowElement", function () {
        return Ri;
      }), r.d(e, "FeGaussianBlurElement", function () {
        return Ui;
      }), r.d(e, "FeMorphologyElement", function () {
        return Ii;
      }), r.d(e, "FilterElement", function () {
        return Mi;
      }), r.d(e, "Font", function () {
        return ar;
      }), r.d(e, "FontElement", function () {
        return _n;
      }), r.d(e, "FontFaceElement", function () {
        return Vn;
      }), r.d(e, "GElement", function () {
        return nn;
      }), r.d(e, "GlyphElement", function () {
        return Fn;
      }), r.d(e, "GradientElement", function () {
        return un;
      }), r.d(e, "ImageElement", function () {
        return ni;
      }), r.d(e, "LineElement", function () {
        return zr;
      }), r.d(e, "LinearGradientElement", function () {
        return fn;
      }), r.d(e, "MarkerElement", function () {
        return Zr;
      }), r.d(e, "MaskElement", function () {
        return ki;
      }), r.d(e, "Matrix", function () {
        return je;
      }), r.d(e, "MissingGlyphElement", function () {
        return Ln;
      }), r.d(e, "Mouse", function () {
        return Ce;
      }), r.d(e, "PSEUDO_ZERO", function () {
        return ve;
      }), r.d(e, "Parser", function () {
        return Ve;
      }), r.d(e, "PathElement", function () {
        return Ar;
      }), r.d(e, "PathParser", function () {
        return wr;
      }), r.d(e, "PatternElement", function () {
        return Wr;
      }), r.d(e, "Point", function () {
        return Oe;
      }), r.d(e, "PolygonElement", function () {
        return Yr;
      }), r.d(e, "PolylineElement", function () {
        return Ur;
      }), r.d(e, "Property", function () {
        return Te;
      }), r.d(e, "QB1", function () {
        return Se;
      }), r.d(e, "QB2", function () {
        return ke;
      }), r.d(e, "QB3", function () {
        return Ae;
      }), r.d(e, "RadialGradientElement", function () {
        return pn;
      }), r.d(e, "RectElement", function () {
        return Mr;
      }), r.d(e, "RenderedElement", function () {
        return cr;
      }), r.d(e, "Rotate", function () {
        return Ie;
      }), r.d(e, "SVGElement", function () {
        return Or;
      }), r.d(e, "SVGFontLoader", function () {
        return ui;
      }), r.d(e, "Scale", function () {
        return Le;
      }), r.d(e, "Screen", function () {
        return _e;
      }), r.d(e, "Skew", function () {
        return Be;
      }), r.d(e, "SkewX", function () {
        return Xe;
      }), r.d(e, "SkewY", function () {
        return Qe;
      }), r.d(e, "StopElement", function () {
        return yn;
      }), r.d(e, "StyleElement", function () {
        return fi;
      }), r.d(e, "SymbolElement", function () {
        return oi;
      }), r.d(e, "TRefElement", function () {
        return Hn;
      }), r.d(e, "TSpanElement", function () {
        return dr;
      }), r.d(e, "TextElement", function () {
        return hr;
      }), r.d(e, "TextPathElement", function () {
        return ti;
      }), r.d(e, "TitleElement", function () {
        return Yi;
      }), r.d(e, "Transform", function () {
        return $e;
      }), r.d(e, "Translate", function () {
        return De;
      }), r.d(e, "UnknownElement", function () {
        return tr;
      }), r.d(e, "UseElement", function () {
        return pi;
      }), r.d(e, "ViewPort", function () {
        return Pe;
      }), r.d(e, "compressSpaces", function () {
        return Zt;
      }), r.d(e, "getSelectorSpecificity", function () {
        return pe;
      }), r.d(e, "normalizeAttributeName", function () {
        return re;
      }), r.d(e, "normalizeColor", function () {
        return ie;
      }), r.d(e, "parseExternalUrl", function () {
        return ne;
      }), r.d(e, "presets", function () {
        return ua;
      }), r.d(e, "toNumbers", function () {
        return te;
      }), r.d(e, "trimLeft", function () {
        return Jt;
      }), r.d(e, "trimRight", function () {
        return Kt;
      }), r.d(e, "vectorMagnitude", function () {
        return de;
      }), r.d(e, "vectorsAngle", function () {
        return ge;
      }), r.d(e, "vectorsRatio", function () {
        return ye;
      });

      var n = r("a4fc"),
          i = r.n(n),
          a = r("0f79"),
          o = r.n(a),
          u = r("14b1"),
          s = r.n(u),
          c = r("ccb8"),
          f = r.n(c),
          l = r("2d80"),
          h = r.n(l),
          p = r("1e75"),
          v = r.n(p),
          d = r("aa3c"),
          y = r.n(d),
          g = r("4573"),
          x = r.n(g),
          m = r("7c78"),
          b = r.n(m),
          w = r("e4f0"),
          S = r.n(w),
          k = r("3960"),
          A = r.n(k),
          T = r("fa81"),
          P = r.n(T),
          O = r("6b47"),
          C = r.n(O),
          E = r("48fc"),
          M = r.n(E),
          _ = r("d382"),
          N = r.n(_),
          R = r("d3a3"),
          V = r.n(R),
          D = r("900e"),
          I = r.n(D),
          L = r("a3e3"),
          j = r.n(L),
          z = r("298b"),
          F = r.n(z),
          B = r("3002"),
          U = r.n(B),
          H = r("c751"),
          X = r.n(H),
          Y = r("3818"),
          q = r.n(Y),
          Q = r("78b2"),
          W = r.n(Q),
          G = r("c449"),
          $ = r.n(G),
          Z = r("44a4"),
          J = r.n(Z),
          K = r("58e1"),
          tt = r.n(K),
          et = r("c90a"),
          rt = r.n(et),
          nt = r("5f9f"),
          it = r.n(nt),
          at = r("dd25"),
          ot = r.n(at),
          ut = r("7989"),
          st = r.n(ut),
          ct = r("562d"),
          ft = r.n(ct),
          lt = r("c52e"),
          ht = r.n(lt),
          pt = r("9a73"),
          vt = r.n(pt),
          dt = r("d254"),
          yt = r.n(dt),
          gt = r("df10"),
          xt = r.n(gt),
          mt = r("65b8"),
          bt = r.n(mt),
          wt = r("3bc0"),
          St = r.n(wt),
          kt = r("b0bc"),
          At = r.n(kt),
          Tt = r("d01f"),
          Pt = r("8cfd5"),
          Ot = r.n(Pt),
          Ct = r("84ed"),
          Et = r.n(Ct),
          Mt = r("8fa2"),
          _t = r.n(Mt),
          Nt = r("9474"),
          Rt = r.n(Nt),
          Vt = r("898c"),
          Dt = r.n(Vt),
          It = r("e946"),
          Lt = r.n(It),
          jt = r("0dc8"),
          zt = r.n(jt),
          Ft = r("3b4c"),
          Bt = r.n(Ft),
          Ut = r("52da"),
          Ht = r.n(Ut),
          Xt = r("505e"),
          Yt = r.n(Xt),
          qt = r("0348"),
          Qt = r.n(qt),
          Wt = r("d5a8"),
          Gt = r.n(Wt),
          $t = r("5e9e");

      function Zt(t) {
        return t.replace(/(?!\u3000)\s+/gm, " ");
      }

      function Jt(t) {
        return t.replace(/^[\n \t]+/, "");
      }

      function Kt(t) {
        return t.replace(/[\n \t]+$/, "");
      }

      function te(t) {
        var e = (t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
        return s()(e).call(e, o.a);
      }

      var ee = /^[A-Z-]+$/;

      function re(t) {
        return ee.test(t) ? t.toLowerCase() : t;
      }

      function ne(t) {
        var e = t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
        return e[2] || e[3] || e[4];
      }

      function ie(t) {
        if (!i()(t).call(t, "rgb")) return t;
        var e = 3,
            r = t.replace(/\d+(\.\d+)?/g, function (t, r) {
          return e-- && r ? String(Math.round(o()(t))) : t;
        });
        return r;
      }

      var ae = /(\[[^\]]+\])/g,
          oe = /(#[^\s\+>~\.\[:]+)/g,
          ue = /(\.[^\s\+>~\.\[:]+)/g,
          se = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
          ce = /(:[\w-]+\([^\)]*\))/gi,
          fe = /(:[^\s\+>~\.\[:]+)/g,
          le = /([^\s\+>~\.\[:]+)/g;

      function he(t, e) {
        var r = t.match(e);
        return r ? [t.replace(e, " "), r.length] : [t, 0];
      }

      function pe(t) {
        var e = [0, 0, 0],
            r = t.replace(/:not\(([^\)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
            n = 0,
            i = he(r, ae),
            a = f()(i, 2);
        r = a[0], n = a[1], e[1] += n;
        var o = he(r, oe),
            u = f()(o, 2);
        r = u[0], n = u[1], e[0] += n;
        var s = he(r, ue),
            c = f()(s, 2);
        r = c[0], n = c[1], e[1] += n;
        var l = he(r, se),
            h = f()(l, 2);
        r = h[0], n = h[1], e[2] += n;
        var p = he(r, ce),
            v = f()(p, 2);
        r = v[0], n = v[1], e[1] += n;
        var d = he(r, fe),
            y = f()(d, 2);
        r = y[0], n = y[1], e[1] += n, r = r.replace(/[\*\s\+>~]/g, " ").replace(/[#\.]/g, " ");
        var g = he(r, le),
            x = f()(g, 2);
        return r = x[0], n = x[1], e[2] += n, e.join("");
      }

      var ve = 1e-8;

      function de(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
      }

      function ye(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (de(t) * de(e));
      }

      function ge(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(ye(t, e));
      }

      function xe(t) {
        return t * t * t;
      }

      function me(t) {
        return 3 * t * t * (1 - t);
      }

      function be(t) {
        return 3 * t * (1 - t) * (1 - t);
      }

      function we(t) {
        return (1 - t) * (1 - t) * (1 - t);
      }

      function Se(t) {
        return t * t;
      }

      function ke(t) {
        return 2 * t * (1 - t);
      }

      function Ae(t) {
        return (1 - t) * (1 - t);
      }

      var Te = function () {
        function t(e, r, n) {
          V()(this, t), this.document = e, this.name = r, this.value = n, this.isNormalizedColor = !1;
        }

        return I()(t, [{
          key: "split",
          value: function value() {
            var e,
                r,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
                i = this.document,
                a = this.name;
            return s()(e = J()(r = Zt(this.getString())).call(r).split(n)).call(e, function (e) {
              return new t(i, a, e);
            });
          }
        }, {
          key: "hasValue",
          value: function value(t) {
            var e = this.value;
            return null !== e && "" !== e && (t || 0 !== e) && "undefined" !== typeof e;
          }
        }, {
          key: "isString",
          value: function value(t) {
            var e = this.value,
                r = "string" === typeof e;
            return r && t ? t.test(e) : r;
          }
        }, {
          key: "isUrlDefinition",
          value: function value() {
            return this.isString(/^url\(/);
          }
        }, {
          key: "isPixels",
          value: function value() {
            if (!this.hasValue()) return !1;
            var t = this.getString();

            switch (!0) {
              case /px$/.test(t):
              case /^[0-9]+$/.test(t):
                return !0;

              default:
                return !1;
            }
          }
        }, {
          key: "setValue",
          value: function value(t) {
            return this.value = t, this;
          }
        }, {
          key: "getValue",
          value: function value(t) {
            return "undefined" === typeof t || this.hasValue() ? this.value : t;
          }
        }, {
          key: "getNumber",
          value: function value(t) {
            if (!this.hasValue()) return "undefined" === typeof t ? 0 : o()(t);
            var e = this.value,
                r = o()(e);
            return this.isString(/%$/) && (r /= 100), r;
          }
        }, {
          key: "getString",
          value: function value(t) {
            return "undefined" === typeof t || this.hasValue() ? "undefined" === typeof this.value ? "" : String(this.value) : String(t);
          }
        }, {
          key: "getColor",
          value: function value(t) {
            var e = this.getString(t);
            return this.isNormalizedColor || (this.isNormalizedColor = !0, e = ie(e), this.value = e), e;
          }
        }, {
          key: "getDpi",
          value: function value() {
            return 96;
          }
        }, {
          key: "getRem",
          value: function value() {
            return this.document.rootEmSize;
          }
        }, {
          key: "getEm",
          value: function value() {
            return this.document.emSize;
          }
        }, {
          key: "getUnits",
          value: function value() {
            return this.getString().replace(/[0-9\.\-]/g, "");
          }
        }, {
          key: "getPixels",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.hasValue()) return 0;
            var r = "boolean" === typeof t ? [void 0, t] : [t],
                n = f()(r, 2),
                i = n[0],
                a = n[1],
                o = this.document.screen.viewPort;

            switch (!0) {
              case this.isString(/vmin$/):
                return this.getNumber() / 100 * Math.min(o.computeSize("x"), o.computeSize("y"));

              case this.isString(/vmax$/):
                return this.getNumber() / 100 * Math.max(o.computeSize("x"), o.computeSize("y"));

              case this.isString(/vw$/):
                return this.getNumber() / 100 * o.computeSize("x");

              case this.isString(/vh$/):
                return this.getNumber() / 100 * o.computeSize("y");

              case this.isString(/rem$/):
                return this.getNumber() * this.getRem();

              case this.isString(/em$/):
                return this.getNumber() * this.getEm();

              case this.isString(/ex$/):
                return this.getNumber() * this.getEm() / 2;

              case this.isString(/px$/):
                return this.getNumber();

              case this.isString(/pt$/):
                return this.getNumber() * this.getDpi() * (1 / 72);

              case this.isString(/pc$/):
                return 15 * this.getNumber();

              case this.isString(/cm$/):
                return this.getNumber() * this.getDpi() / 2.54;

              case this.isString(/mm$/):
                return this.getNumber() * this.getDpi() / 25.4;

              case this.isString(/in$/):
                return this.getNumber() * this.getDpi();

              case this.isString(/%$/) && a:
                return this.getNumber() * this.getEm();

              case this.isString(/%$/):
                return this.getNumber() * o.computeSize(i);

              default:
                var u = this.getNumber();
                return e && u < 1 ? u * o.computeSize(i) : u;
            }
          }
        }, {
          key: "getMilliseconds",
          value: function value() {
            return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : 1e3 * this.getNumber() : 0;
          }
        }, {
          key: "getRadians",
          value: function value() {
            if (!this.hasValue()) return 0;

            switch (!0) {
              case this.isString(/deg$/):
                return this.getNumber() * (Math.PI / 180);

              case this.isString(/grad$/):
                return this.getNumber() * (Math.PI / 200);

              case this.isString(/rad$/):
                return this.getNumber();

              default:
                return this.getNumber() * (Math.PI / 180);
            }
          }
        }, {
          key: "getDefinition",
          value: function value() {
            var t = this.getString(),
                e = t.match(/#([^\)'"]+)/);
            return e && (e = e[1]), e || (e = t), this.document.definitions[e];
          }
        }, {
          key: "getFillStyleDefinition",
          value: function value(t, e) {
            var r = this.getDefinition();
            if (!r) return null;
            if ("function" === typeof r.createGradient) return r.createGradient(this.document.ctx, t, e);

            if ("function" === typeof r.createPattern) {
              if (r.getHrefAttribute().hasValue()) {
                var n = r.getAttribute("patternTransform");
                r = r.getHrefAttribute().getDefinition(), n.hasValue() && r.getAttribute("patternTransform", !0).setValue(n.value);
              }

              return r.createPattern(this.document.ctx, t, e);
            }

            return null;
          }
        }, {
          key: "getTextBaseline",
          value: function value() {
            return this.hasValue() ? t.textBaselineMapping[this.getString()] : null;
          }
        }, {
          key: "addOpacity",
          value: function value(e) {
            for (var r = this.getColor(), n = r.length, i = 0, a = 0; a < n; a++) {
              if ("," === r[a] && i++, 3 === i) break;
            }

            if (e.hasValue() && this.isString() && 3 !== i) {
              var o = new tt.a(r);
              o.ok && (o.alpha = e.getNumber(), r = o.toRGBA());
            }

            return new t(this.document, this.name, r);
          }
        }], [{
          key: "empty",
          value: function value(e) {
            return new t(e, "EMPTY", "");
          }
        }]), t;
      }();

      Te.textBaselineMapping = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic"
      };

      var Pe = function () {
        function t() {
          V()(this, t), this.viewPorts = [];
        }

        return I()(t, [{
          key: "clear",
          value: function value() {
            this.viewPorts = [];
          }
        }, {
          key: "setCurrent",
          value: function value(t, e) {
            this.viewPorts.push({
              width: t,
              height: e
            });
          }
        }, {
          key: "removeCurrent",
          value: function value() {
            this.viewPorts.pop();
          }
        }, {
          key: "getCurrent",
          value: function value() {
            var t = this.viewPorts;
            return t[t.length - 1];
          }
        }, {
          key: "computeSize",
          value: function value(t) {
            return "number" === typeof t ? t : "x" === t ? this.width : "y" === t ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
          }
        }, {
          key: "width",
          get: function get() {
            return this.getCurrent().width;
          }
        }, {
          key: "height",
          get: function get() {
            return this.getCurrent().height;
          }
        }]), t;
      }(),
          Oe = function () {
        function t(e, r) {
          V()(this, t), this.x = e, this.y = r;
        }

        return I()(t, [{
          key: "angleTo",
          value: function value(t) {
            return Math.atan2(t.y - this.y, t.x - this.x);
          }
        }, {
          key: "applyTransform",
          value: function value(t) {
            var e = this.x,
                r = this.y,
                n = e * t[0] + r * t[2] + t[4],
                i = e * t[1] + r * t[3] + t[5];
            this.x = n, this.y = i;
          }
        }], [{
          key: "parse",
          value: function value(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = te(e),
                i = f()(n, 2),
                a = i[0],
                o = void 0 === a ? r : a,
                u = i[1],
                s = void 0 === u ? r : u;
            return new t(o, s);
          }
        }, {
          key: "parseScale",
          value: function value(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                n = te(e),
                i = f()(n, 2),
                a = i[0],
                o = void 0 === a ? r : a,
                u = i[1],
                s = void 0 === u ? o : u;
            return new t(o, s);
          }
        }, {
          key: "parsePath",
          value: function value(e) {
            for (var r = te(e), n = r.length, i = [], a = 0; a < n; a += 2) {
              i.push(new t(r[a], r[a + 1]));
            }

            return i;
          }
        }]), t;
      }(),
          Ce = function () {
        function t(e) {
          var r, n;
          V()(this, t), this.screen = e, this.working = !1, this.events = [], this.eventElements = [], this.onClick = W()(r = this.onClick).call(r, this), this.onMouseMove = W()(n = this.onMouseMove).call(n, this);
        }

        return I()(t, [{
          key: "isWorking",
          value: function value() {
            return this.working;
          }
        }, {
          key: "start",
          value: function value() {
            if (!this.working) {
              var t = this.screen,
                  e = this.onClick,
                  r = this.onMouseMove,
                  n = t.ctx.canvas;
              n.onclick = e, n.onmousemove = r, this.working = !0;
            }
          }
        }, {
          key: "stop",
          value: function value() {
            if (this.working) {
              var t = this.screen.ctx.canvas;
              this.working = !1, t.onclick = null, t.onmousemove = null;
            }
          }
        }, {
          key: "hasEvents",
          value: function value() {
            return this.working && this.events.length > 0;
          }
        }, {
          key: "runEvents",
          value: function value() {
            if (this.working) {
              var t = this.screen,
                  e = this.events,
                  r = this.eventElements,
                  n = t.ctx.canvas.style;
              n && (n.cursor = ""), x()(e).call(e, function (t, e) {
                var n = t.run,
                    i = r[e];

                while (i) {
                  n(i), i = i.parent;
                }
              }), this.events = [], this.eventElements = [];
            }
          }
        }, {
          key: "checkPath",
          value: function value(t, e) {
            if (this.working && e) {
              var r = this.events,
                  n = this.eventElements;
              x()(r).call(r, function (r, i) {
                var a = r.x,
                    o = r.y;
                !n[i] && e.isPointInPath && e.isPointInPath(a, o) && (n[i] = t);
              });
            }
          }
        }, {
          key: "checkBoundingBox",
          value: function value(t, e) {
            if (this.working && e) {
              var r = this.events,
                  n = this.eventElements;
              x()(r).call(r, function (r, i) {
                var a = r.x,
                    o = r.y;
                !n[i] && e.isPointInBox(a, o) && (n[i] = t);
              });
            }
          }
        }, {
          key: "mapXY",
          value: function value(t, e) {
            var r = this.screen,
                n = r.window,
                i = r.ctx,
                a = new Oe(t, e),
                o = i.canvas;

            while (o) {
              a.x -= o.offsetLeft, a.y -= o.offsetTop, o = o.offsetParent;
            }

            return n.scrollX && (a.x += n.scrollX), n.scrollY && (a.y += n.scrollY), a;
          }
        }, {
          key: "onClick",
          value: function value(t) {
            var e = this.mapXY((t || event).clientX, (t || event).clientY),
                r = e.x,
                n = e.y;
            this.events.push({
              type: "onclick",
              x: r,
              y: n,
              run: function run(t) {
                t.onClick && t.onClick();
              }
            });
          }
        }, {
          key: "onMouseMove",
          value: function value(t) {
            var e = this.mapXY((t || event).clientX, (t || event).clientY),
                r = e.x,
                n = e.y;
            this.events.push({
              type: "onmousemove",
              x: r,
              y: n,
              run: function run(t) {
                t.onMouseMove && t.onMouseMove();
              }
            });
          }
        }]), t;
      }(),
          Ee = "undefined" !== typeof window ? window : null,
          Me = "undefined" !== typeof fetch ? W()(fetch).call(fetch, void 0) : null,
          _e = function () {
        function t(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = r.fetch,
              i = void 0 === n ? Me : n,
              a = r.window,
              o = void 0 === a ? Ee : a;
          V()(this, t), this.ctx = e, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new Pe(), this.mouse = new Ce(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = o, this.fetch = i;
        }

        return I()(t, [{
          key: "wait",
          value: function value(t) {
            this.waits.push(t);
          }
        }, {
          key: "ready",
          value: function value() {
            return this.readyPromise ? this.readyPromise : q.a.resolve();
          }
        }, {
          key: "isReady",
          value: function value() {
            var t;
            if (this.isReadyLock) return !0;
            var e = X()(t = this.waits).call(t, function (t) {
              return t();
            });
            return e && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e, e;
          }
        }, {
          key: "setDefaults",
          value: function value(t) {
            t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4;
          }
        }, {
          key: "setViewBox",
          value: function value(t) {
            var e = t.document,
                r = t.ctx,
                n = t.aspectRatio,
                i = t.width,
                a = t.desiredWidth,
                o = t.height,
                u = t.desiredHeight,
                s = t.minX,
                c = void 0 === s ? 0 : s,
                l = t.minY,
                h = void 0 === l ? 0 : l,
                p = t.refX,
                v = t.refY,
                d = t.clip,
                y = void 0 !== d && d,
                g = t.clipX,
                x = void 0 === g ? 0 : g,
                m = t.clipY,
                b = void 0 === m ? 0 : m,
                w = Zt(n).replace(/^defer\s/, ""),
                S = w.split(" "),
                k = f()(S, 2),
                A = k[0],
                T = k[1],
                P = A || "xMidYMid",
                O = T || "meet",
                C = i / a,
                E = o / u,
                M = Math.min(C, E),
                _ = Math.max(C, E),
                N = a,
                R = u;

            "meet" === O && (N *= M, R *= M), "slice" === O && (N *= _, R *= _);
            var V = new Te(e, "refX", p),
                D = new Te(e, "refY", v),
                I = V.hasValue() && D.hasValue();

            if (I && r.translate(-M * V.getPixels("x"), -M * D.getPixels("y")), y) {
              var L = M * x,
                  j = M * b;
              r.beginPath(), r.moveTo(L, j), r.lineTo(i, j), r.lineTo(i, o), r.lineTo(L, o), r.closePath(), r.clip();
            }

            if (!I) {
              var z = "meet" === O && M === E,
                  F = "slice" === O && _ === E,
                  B = "meet" === O && M === C,
                  U = "slice" === O && _ === C;
              /^xMid/.test(P) && (z || F) && r.translate(i / 2 - N / 2, 0), /YMid$/.test(P) && (B || U) && r.translate(0, o / 2 - R / 2), /^xMax/.test(P) && (z || F) && r.translate(i - N, 0), /YMax$/.test(P) && (B || U) && r.translate(0, o - R);
            }

            switch (!0) {
              case "none" === P:
                r.scale(C, E);
                break;

              case "meet" === O:
                r.scale(M, M);
                break;

              case "slice" === O:
                r.scale(_, _);
                break;
            }

            r.translate(-c, -h);
          }
        }, {
          key: "start",
          value: function value(t) {
            var e = this,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = r.enableRedraw,
                i = void 0 !== n && n,
                a = r.ignoreMouse,
                o = void 0 !== a && a,
                u = r.ignoreAnimation,
                s = void 0 !== u && u,
                c = r.ignoreDimensions,
                f = void 0 !== c && c,
                l = r.ignoreClear,
                h = void 0 !== l && l,
                p = r.forceRedraw,
                v = r.scaleWidth,
                d = r.scaleHeight,
                y = r.offsetX,
                g = r.offsetY,
                x = this.FRAMERATE,
                m = this.mouse,
                b = 1e3 / x;

            if (this.frameDuration = b, this.readyPromise = new q.a(function (t) {
              e.resolveReady = t;
            }), this.isReady() && this.render(t, f, h, v, d, y, g), i) {
              var w = U()(),
                  S = w,
                  k = 0,
                  A = function r() {
                w = U()(), k = w - S, k >= b && (S = w - k % b, e.shouldUpdate(s, p) && (e.render(t, f, h, v, d, y, g), m.runEvents())), e.intervalId = $()(r);
              };

              o || m.start(), this.intervalId = $()(A);
            }
          }
        }, {
          key: "stop",
          value: function value() {
            this.intervalId && ($.a.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
          }
        }, {
          key: "shouldUpdate",
          value: function value(t, e) {
            if (!t) {
              var r,
                  n = this.frameDuration,
                  i = F()(r = this.animations).call(r, function (t, e) {
                return e.update(n) || t;
              }, !1);
              if (i) return !0;
            }

            return !("function" !== typeof e || !e()) || !(this.isReadyLock || !this.isReady()) || !!this.mouse.hasEvents();
          }
        }, {
          key: "render",
          value: function value(t, e, r, n, i, a, o) {
            var u = this.CLIENT_WIDTH,
                s = this.CLIENT_HEIGHT,
                c = this.viewPort,
                f = this.ctx,
                l = this.isFirstRender,
                h = f.canvas;
            c.clear(), h.width && h.height ? c.setCurrent(h.width, h.height) : c.setCurrent(u, s);
            var p = t.getStyle("width"),
                v = t.getStyle("height");
            !e && (l || "number" !== typeof n && "number" !== typeof i) && (p.hasValue() && (h.width = p.getPixels("x"), h.style && (h.style.width = "".concat(h.width, "px"))), v.hasValue() && (h.height = v.getPixels("y"), h.style && (h.style.height = "".concat(h.height, "px"))));
            var d = h.clientWidth || h.width,
                y = h.clientHeight || h.height;

            if (e && p.hasValue() && v.hasValue() && (d = p.getPixels("x"), y = v.getPixels("y")), c.setCurrent(d, y), "number" === typeof a && t.getAttribute("x", !0).setValue(a), "number" === typeof o && t.getAttribute("y", !0).setValue(o), "number" === typeof n || "number" === typeof i) {
              var g,
                  x,
                  m = te(t.getAttribute("viewBox").getString()),
                  b = 0,
                  w = 0;

              if ("number" === typeof n) {
                var S = t.getStyle("width");
                S.hasValue() ? b = S.getPixels("x") / n : isNaN(m[2]) || (b = m[2] / n);
              }

              if ("number" === typeof i) {
                var k = t.getStyle("height");
                k.hasValue() ? w = k.getPixels("y") / i : isNaN(m[3]) || (w = m[3] / i);
              }

              b || (b = w), w || (w = b), t.getAttribute("width", !0).setValue(n), t.getAttribute("height", !0).setValue(i);
              var A = t.getStyle("transform", !0, !0);
              A.setValue(j()(g = j()(x = "".concat(A.getString(), " scale(")).call(x, 1 / b, ", ")).call(g, 1 / w, ")"));
            }

            r || f.clearRect(0, 0, d, y), t.render(f), l && (this.isFirstRender = !1);
          }
        }]), t;
      }();

      _e.defaultWindow = Ee, _e.defaultFetch = Me;

      var Ne = _e.defaultFetch,
          Re = "undefined" !== typeof DOMParser ? DOMParser : null,
          Ve = function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = e.fetch,
              n = void 0 === r ? Ne : r,
              i = e.DOMParser,
              a = void 0 === i ? Re : i;
          V()(this, t), this.fetch = n, this.DOMParser = a;
        }

        return I()(t, [{
          key: "parse",
          value: function () {
            var t = M()(C.a.mark(function t(e) {
              return C.a.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (!/^</.test(e)) {
                        t.next = 2;
                        break;
                      }

                      return t.abrupt("return", this.parseFromString(e));

                    case 2:
                      return t.abrupt("return", this.load(e));

                    case 3:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e(e) {
              return t.apply(this, arguments);
            }

            return e;
          }()
        }, {
          key: "parseFromString",
          value: function value(t) {
            var e = new this.DOMParser();

            try {
              return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
            } catch (r) {
              return this.checkDocument(e.parseFromString(t, "text/xml"));
            }
          }
        }, {
          key: "checkDocument",
          value: function value(t) {
            var e = t.getElementsByTagName("parsererror")[0];
            if (e) throw new Error(e.textContent);
            return t;
          }
        }, {
          key: "load",
          value: function () {
            var t = M()(C.a.mark(function t(e) {
              var r, n;
              return C.a.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, this.fetch(e);

                    case 2:
                      return r = t.sent, t.next = 5, r.text();

                    case 5:
                      return n = t.sent, t.abrupt("return", this.parseFromString(n));

                    case 7:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e(e) {
              return t.apply(this, arguments);
            }

            return e;
          }()
        }]), t;
      }(),
          De = function () {
        function t(e, r) {
          V()(this, t), this.type = "translate", this.point = null, this.point = Oe.parse(r);
        }

        return I()(t, [{
          key: "apply",
          value: function value(t) {
            var e = this.point,
                r = e.x,
                n = e.y;
            t.translate(r || 0, n || 0);
          }
        }, {
          key: "unapply",
          value: function value(t) {
            var e = this.point,
                r = e.x,
                n = e.y;
            t.translate(-1 * r || 0, -1 * n || 0);
          }
        }, {
          key: "applyToPoint",
          value: function value(t) {
            var e = this.point,
                r = e.x,
                n = e.y;
            t.applyTransform([1, 0, 0, 1, r || 0, n || 0]);
          }
        }]), t;
      }(),
          Ie = function () {
        function t(e, r, n) {
          V()(this, t), this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
          var i = te(r);
          this.angle = new Te(e, "angle", i[0]), this.originX = n[0], this.originY = n[1], this.cx = i[1] || 0, this.cy = i[2] || 0;
        }

        return I()(t, [{
          key: "apply",
          value: function value(t) {
            var e = this.cx,
                r = this.cy,
                n = this.originX,
                i = this.originY,
                a = this.angle,
                o = e + n.getPixels("x"),
                u = r + i.getPixels("y");
            t.translate(o, u), t.rotate(a.getRadians()), t.translate(-o, -u);
          }
        }, {
          key: "unapply",
          value: function value(t) {
            var e = this.cx,
                r = this.cy,
                n = this.angle;
            t.translate(e, r), t.rotate(-1 * n.getRadians()), t.translate(-e, -r);
          }
        }, {
          key: "applyToPoint",
          value: function value(t) {
            var e = this.cx,
                r = this.cy,
                n = this.angle,
                i = n.getRadians();
            t.applyTransform([1, 0, 0, 1, e || 0, r || 0]), t.applyTransform([Math.cos(i), Math.sin(i), -Math.sin(i), Math.cos(i), 0, 0]), t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]);
          }
        }]), t;
      }(),
          Le = function () {
        function t(e, r) {
          V()(this, t), this.type = "scale", this.scale = null;
          var n = Oe.parseScale(r);
          0 !== n.x && 0 !== n.y || (n.x = ve, n.y = ve), this.scale = n;
        }

        return I()(t, [{
          key: "apply",
          value: function value(t) {
            var e = this.scale,
                r = e.x,
                n = e.y;
            t.scale(r, n || r);
          }
        }, {
          key: "unapply",
          value: function value(t) {
            var e = this.scale,
                r = e.x,
                n = e.y;
            t.scale(1 / r, 1 / n || r);
          }
        }, {
          key: "applyToPoint",
          value: function value(t) {
            var e = this.scale,
                r = e.x,
                n = e.y;
            t.applyTransform([r || 0, 0, 0, n || 0, 0, 0]);
          }
        }]), t;
      }(),
          je = function () {
        function t(e, r) {
          V()(this, t), this.type = "matrix", this.matrix = [], this.matrix = te(r);
        }

        return I()(t, [{
          key: "apply",
          value: function value(t) {
            var e = this.matrix;
            t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
          }
        }, {
          key: "unapply",
          value: function value(t) {
            var e = this.matrix,
                r = e[0],
                n = e[2],
                i = e[4],
                a = e[1],
                o = e[3],
                u = e[5],
                s = 0,
                c = 0,
                f = 1,
                l = 1 / (r * (o * f - u * c) - n * (a * f - u * s) + i * (a * c - o * s));
            t.transform(l * (o * f - u * c), l * (u * s - a * f), l * (i * c - n * f), l * (r * f - i * s), l * (n * u - i * o), l * (i * a - r * u));
          }
        }, {
          key: "applyToPoint",
          value: function value(t) {
            t.applyTransform(this.matrix);
          }
        }]), t;
      }();

      function ze(t) {
        var e = Fe();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Fe() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Be = function (t) {
        it()(r, t);
        var e = ze(r);

        function r(t, n) {
          var i;
          return V()(this, r), i = e.call(this, t, n), i.type = "skew", i.angle = null, i.angle = new Te(t, "angle", n), i;
        }

        return r;
      }(je);

      function Ue(t) {
        var e = He();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function He() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Xe = function (t) {
        it()(r, t);
        var e = Ue(r);

        function r(t, n) {
          var i;
          return V()(this, r), i = e.call(this, t, n), i.type = "skewX", i.matrix = [1, 0, Math.tan(i.angle.getRadians()), 1, 0, 0], i;
        }

        return r;
      }(Be);

      function Ye(t) {
        var e = qe();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function qe() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Qe = function (t) {
        it()(r, t);
        var e = Ye(r);

        function r(t, n) {
          var i;
          return V()(this, r), i = e.call(this, t, n), i.type = "skewY", i.matrix = [1, Math.tan(i.angle.getRadians()), 0, 1, 0, 0], i;
        }

        return r;
      }(Be);

      function We(t) {
        var e;
        return J()(e = Zt(t)).call(e).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
      }

      function Ge(t) {
        var e = t.split("("),
            r = f()(e, 2),
            n = r[0],
            i = r[1];
        return [J()(n).call(n), J()(i).call(i).replace(")", "")];
      }

      var $e = function () {
        function t(e, r, n) {
          var i = this;
          V()(this, t), this.document = e, this.transforms = [];
          var a = We(r);
          x()(a).call(a, function (e) {
            if ("none" !== e) {
              var r = Ge(e),
                  a = f()(r, 2),
                  o = a[0],
                  u = a[1],
                  s = t.transformTypes[o];
              "undefined" !== typeof s && i.transforms.push(new s(i.document, u, n));
            }
          });
        }

        return I()(t, [{
          key: "apply",
          value: function value(t) {
            for (var e = this.transforms, r = e.length, n = 0; n < r; n++) {
              e[n].apply(t);
            }
          }
        }, {
          key: "unapply",
          value: function value(t) {
            for (var e = this.transforms, r = e.length, n = r - 1; n >= 0; n--) {
              e[n].unapply(t);
            }
          }
        }, {
          key: "applyToPoint",
          value: function value(t) {
            for (var e = this.transforms, r = e.length, n = 0; n < r; n++) {
              e[n].applyToPoint(t);
            }
          }
        }], [{
          key: "fromElement",
          value: function value(e, r) {
            var n = r.getStyle("transform", !1, !0),
                i = r.getStyle("transform-origin", !1, !0).split(),
                a = f()(i, 2),
                o = a[0],
                u = a[1],
                s = void 0 === u ? o : u,
                c = [o, s];
            return n.hasValue() ? new t(e, n.getString(), c) : null;
          }
        }]), t;
      }();

      $e.transformTypes = {
        translate: De,
        rotate: Ie,
        scale: Le,
        matrix: je,
        skewX: Xe,
        skewY: Qe
      };

      var Ze = function () {
        function t(e, r) {
          var n,
              i,
              a = this,
              o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

          if (V()(this, t), this.document = e, this.node = r, this.captureTextNodes = o, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], r && 1 === r.nodeType) {
            if (x()(n = yt()(r.attributes)).call(n, function (t) {
              var r = re(t.nodeName);
              a.attributes[r] = new Te(e, r, t.value);
            }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
              var u,
                  c = s()(u = this.getAttribute("style").getString().split(";")).call(u, function (t) {
                return J()(t).call(t);
              });
              x()(c).call(c, function (t) {
                var r;

                if (t) {
                  var n = s()(r = t.split(":")).call(r, function (t) {
                    return J()(t).call(t);
                  }),
                      i = f()(n, 2),
                      o = i[0],
                      u = i[1];
                  a.styles[o] = new Te(e, o, u);
                }
              });
            }

            var l = e.definitions,
                h = this.getAttribute("id");
            h.hasValue() && (l[h.getValue()] || (l[h.getValue()] = this)), x()(i = yt()(r.childNodes)).call(i, function (t) {
              if (1 === t.nodeType) a.addChild(t);else if (o && (3 === t.nodeType || 4 === t.nodeType)) {
                var r = e.createTextNode(t);
                r.getText().length > 0 && a.addChild(r);
              }
            });
          }
        }

        return I()(t, [{
          key: "getAttribute",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = this.attributes[t];

            if (!r && e) {
              var n = new Te(this.document, t, "");
              return this.attributes[t] = n, n;
            }

            return r || Te.empty(this.document);
          }
        }, {
          key: "getHrefAttribute",
          value: function value() {
            for (var t in this.attributes) {
              if ("href" === t || /:href$/.test(t)) return this.attributes[t];
            }

            return Te.empty(this.document);
          }
        }, {
          key: "getStyle",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = this.styles[t];
            if (n) return n;
            var i = this.getAttribute(t);
            if (i && i.hasValue()) return this.styles[t] = i, i;

            if (!r) {
              var a = this.parent;

              if (a) {
                var o = a.getStyle(t);
                if (o && o.hasValue()) return o;
              }
            }

            if (e) {
              var u = new Te(this.document, t, "");
              return this.styles[t] = u, u;
            }

            return n || Te.empty(this.document);
          }
        }, {
          key: "render",
          value: function value(t) {
            if ("none" !== this.getStyle("display").getString() && "hidden" !== this.getStyle("visibility").getString()) {
              if (t.save(), this.getStyle("mask").hasValue()) {
                var e = this.getStyle("mask").getDefinition();
                e && (this.applyEffects(t), e.apply(t, this));
              } else if ("none" !== this.getStyle("filter").getValue("none")) {
                var r = this.getStyle("filter").getDefinition();
                r && (this.applyEffects(t), r.apply(t, this));
              } else this.setContext(t), this.renderChildren(t), this.clearContext(t);

              t.restore();
            }
          }
        }, {
          key: "setContext",
          value: function value(t) {}
        }, {
          key: "applyEffects",
          value: function value(t) {
            var e = $e.fromElement(this.document, this);
            e && e.apply(t);
            var r = this.getStyle("clip-path", !1, !0);

            if (r.hasValue()) {
              var n = r.getDefinition();
              n && n.apply(t);
            }
          }
        }, {
          key: "clearContext",
          value: function value(t) {}
        }, {
          key: "renderChildren",
          value: function value(t) {
            var e;
            x()(e = this.children).call(e, function (e) {
              e.render(t);
            });
          }
        }, {
          key: "addChild",
          value: function value(e) {
            var r,
                n = e instanceof t ? e : this.document.createElement(e);
            n.parent = this, vt()(r = t.ignoreChildTypes).call(r, n.type) || this.children.push(n);
          }
        }, {
          key: "matchesSelector",
          value: function value(t) {
            var e,
                r = this.node;
            if ("function" === typeof r.matches) return r.matches(t);
            var n = r.getAttribute("class");
            return !(!n || "" === n) && ht()(e = n.split(" ")).call(e, function (e) {
              if (".".concat(e) === t) return !0;
            });
          }
        }, {
          key: "addStylesFromStyleDefinition",
          value: function value() {
            var t = this.document,
                e = t.styles,
                r = t.stylesSpecificity;

            for (var n in e) {
              if ("@" !== n[0] && this.matchesSelector(n)) {
                var i = e[n],
                    a = r[n];
                if (i) for (var o in i) {
                  var u = this.stylesSpecificity[o];
                  "undefined" === typeof u && (u = "000"), a >= u && (this.styles[o] = i[o], this.stylesSpecificity[o] = a);
                }
              }
            }
          }
        }, {
          key: "removeStyles",
          value: function value(t, e) {
            var r = F()(e).call(e, function (e, r) {
              var n,
                  i = t.getStyle(r);
              if (!i.hasValue()) return e;
              var a = i.getString();
              return i.setValue(""), j()(n = []).call(n, ft()(e), [[r, a]]);
            }, []);
            return r;
          }
        }, {
          key: "restoreStyles",
          value: function value(t, e) {
            x()(e).call(e, function (e) {
              var r = f()(e, 2),
                  n = r[0],
                  i = r[1];
              t.getStyle(n, !0).setValue(i);
            });
          }
        }]), t;
      }();

      function Je(t) {
        var e = Ke();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Ke() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      Ze.ignoreChildTypes = ["title"];

      var tr = function (t) {
        it()(r, t);
        var e = Je(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a;
        }

        return r;
      }(Ze);

      function er(t) {
        var e = J()(t).call(t);
        return /^('|")/.test(e) ? e : '"'.concat(e, '"');
      }

      function rr(e) {
        var r;
        return "undefined" === typeof t ? e : s()(r = J()(e).call(e).split(",")).call(r, er).join(",");
      }

      function nr(t) {
        if (!t) return "";
        var e = J()(t).call(t).toLowerCase();

        switch (e) {
          case "normal":
          case "italic":
          case "oblique":
          case "inherit":
          case "initial":
          case "unset":
            return e;

          default:
            return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
        }
      }

      function ir(t) {
        if (!t) return "";
        var e = J()(t).call(t).toLowerCase();

        switch (e) {
          case "normal":
          case "bold":
          case "lighter":
          case "bolder":
          case "inherit":
          case "initial":
          case "unset":
            return e;

          default:
            return /^[\d.]+$/.test(e) ? e : "";
        }
      }

      var ar = function () {
        function t(e, r, n, i, a, o) {
          V()(this, t);
          var u = o ? "string" === typeof o ? t.parse(o) : o : {};
          this.fontFamily = a || u.fontFamily, this.fontSize = i || u.fontSize, this.fontStyle = e || u.fontStyle, this.fontWeight = n || u.fontWeight, this.fontVariant = r || u.fontVariant;
        }

        return I()(t, [{
          key: "toString",
          value: function value() {
            var t;
            return J()(t = [nr(this.fontStyle), this.fontVariant, ir(this.fontWeight), this.fontSize, rr(this.fontFamily)].join(" ")).call(t);
          }
        }], [{
          key: "parse",
          value: function value() {
            var e,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = "",
                a = "",
                o = "",
                u = "",
                s = "",
                c = J()(e = Zt(r)).call(e).split(" "),
                l = {
              fontSize: !1,
              fontStyle: !1,
              fontWeight: !1,
              fontVariant: !1
            };
            return x()(c).call(c, function (e) {
              var r, n, c;

              switch (!0) {
                case !l.fontStyle && vt()(r = t.styles).call(r, e):
                  "inherit" !== e && (i = e), l.fontStyle = !0;
                  break;

                case !l.fontVariant && vt()(n = t.variants).call(n, e):
                  "inherit" !== e && (a = e), l.fontStyle = !0, l.fontVariant = !0;
                  break;

                case !l.fontWeight && vt()(c = t.weights).call(c, e):
                  "inherit" !== e && (o = e), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0;
                  break;

                case !l.fontSize:
                  if ("inherit" !== e) {
                    var h = e.split("/"),
                        p = f()(h, 1);
                    u = p[0];
                  }

                  l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0, l.fontSize = !0;
                  break;

                default:
                  "inherit" !== e && (s += e);
              }
            }), new t(i, a, o, u, s, n);
          }
        }]), t;
      }();

      ar.styles = "normal|italic|oblique|inherit", ar.variants = "normal|small-caps|inherit", ar.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";

      var or = function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.NaN,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NaN,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.NaN,
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
          V()(this, t), this.x1 = e, this.y1 = r, this.x2 = n, this.y2 = i, this.addPoint(e, r), this.addPoint(n, i);
        }

        return I()(t, [{
          key: "addPoint",
          value: function value(t, e) {
            "undefined" !== typeof t && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), "undefined" !== typeof e && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
          }
        }, {
          key: "addX",
          value: function value(t) {
            this.addPoint(t, null);
          }
        }, {
          key: "addY",
          value: function value(t) {
            this.addPoint(null, t);
          }
        }, {
          key: "addBoundingBox",
          value: function value(t) {
            if (t) {
              var e = t.x1,
                  r = t.y1,
                  n = t.x2,
                  i = t.y2;
              this.addPoint(e, r), this.addPoint(n, i);
            }
          }
        }, {
          key: "sumCubic",
          value: function value(t, e, r, n, i) {
            return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * n + Math.pow(t, 3) * i;
          }
        }, {
          key: "bezierCurveAdd",
          value: function value(t, e, r, n, i) {
            var a = 6 * e - 12 * r + 6 * n,
                o = -3 * e + 9 * r - 9 * n + 3 * i,
                u = 3 * r - 3 * e;

            if (0 !== o) {
              var s = Math.pow(a, 2) - 4 * u * o;

              if (!(s < 0)) {
                var c = (-a + Math.sqrt(s)) / (2 * o);
                0 < c && c < 1 && (t ? this.addX(this.sumCubic(c, e, r, n, i)) : this.addY(this.sumCubic(c, e, r, n, i)));
                var f = (-a - Math.sqrt(s)) / (2 * o);
                0 < f && f < 1 && (t ? this.addX(this.sumCubic(f, e, r, n, i)) : this.addY(this.sumCubic(f, e, r, n, i)));
              }
            } else {
              if (0 === a) return;
              var l = -u / a;
              0 < l && l < 1 && (t ? this.addX(this.sumCubic(l, e, r, n, i)) : this.addY(this.sumCubic(l, e, r, n, i)));
            }
          }
        }, {
          key: "addBezierCurve",
          value: function value(t, e, r, n, i, a, o, u) {
            this.addPoint(t, e), this.addPoint(o, u), this.bezierCurveAdd(!0, t, r, i, o), this.bezierCurveAdd(!1, e, n, a, u);
          }
        }, {
          key: "addQuadraticCurve",
          value: function value(t, e, r, n, i, a) {
            var o = t + 2 / 3 * (r - t),
                u = e + 2 / 3 * (n - e),
                s = o + 1 / 3 * (i - t),
                c = u + 1 / 3 * (a - e);
            this.addBezierCurve(t, e, o, s, u, c, i, a);
          }
        }, {
          key: "isPointInBox",
          value: function value(t, e) {
            var r = this.x1,
                n = this.y1,
                i = this.x2,
                a = this.y2;
            return r <= t && t <= i && n <= e && e <= a;
          }
        }, {
          key: "x",
          get: function get() {
            return this.x1;
          }
        }, {
          key: "y",
          get: function get() {
            return this.y1;
          }
        }, {
          key: "width",
          get: function get() {
            return this.x2 - this.x1;
          }
        }, {
          key: "height",
          get: function get() {
            return this.y2 - this.y1;
          }
        }]), t;
      }();

      function ur(t) {
        var e = sr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function sr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var cr = function (t) {
        it()(r, t);
        var e = ur(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.modifiedEmSizeStack = !1, t;
        }

        return I()(r, [{
          key: "calculateOpacity",
          value: function value() {
            var t = 1,
                e = this;

            while (e) {
              var r = e.getStyle("opacity", !1, !0);
              r.hasValue(!0) && (t *= r.getNumber()), e = e.parent;
            }

            return t;
          }
        }, {
          key: "setContext",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            if (!e) {
              var r = this.getStyle("fill"),
                  n = this.getStyle("fill-opacity"),
                  i = this.getStyle("stroke"),
                  a = this.getStyle("stroke-opacity");

              if (r.isUrlDefinition()) {
                var o = r.getFillStyleDefinition(this, n);
                o && (t.fillStyle = o);
              } else if (r.hasValue()) {
                "currentColor" === r.getString() && r.setValue(this.getStyle("color").getColor());
                var u = r.getColor();
                "inherit" !== u && (t.fillStyle = "none" === u ? "rgba(0,0,0,0)" : u);
              }

              if (n.hasValue()) {
                var s = new Te(this.document, "fill", t.fillStyle).addOpacity(n).getColor();
                t.fillStyle = s;
              }

              if (i.isUrlDefinition()) {
                var c = i.getFillStyleDefinition(this, a);
                c && (t.strokeStyle = c);
              } else if (i.hasValue()) {
                "currentColor" === i.getString() && i.setValue(this.getStyle("color").getColor());
                var f = i.getString();
                "inherit" !== f && (t.strokeStyle = "none" === f ? "rgba(0,0,0,0)" : f);
              }

              if (a.hasValue()) {
                var l = new Te(this.document, "stroke", t.strokeStyle).addOpacity(a).getString();
                t.strokeStyle = l;
              }

              var h = this.getStyle("stroke-width");

              if (h.hasValue()) {
                var p = h.getPixels();
                t.lineWidth = p || ve;
              }

              var v = this.getStyle("stroke-linecap"),
                  d = this.getStyle("stroke-linejoin"),
                  y = this.getStyle("stroke-miterlimit"),
                  g = this.getStyle("paint-order"),
                  x = this.getStyle("stroke-dasharray"),
                  m = this.getStyle("stroke-dashoffset");

              if (v.hasValue() && (t.lineCap = v.getString()), d.hasValue() && (t.lineJoin = d.getString()), y.hasValue() && (t.miterLimit = y.getNumber()), g.hasValue() && (t.paintOrder = g.getValue()), x.hasValue() && "none" !== x.getString()) {
                var b = te(x.getString());
                "undefined" !== typeof t.setLineDash ? t.setLineDash(b) : "undefined" !== typeof t.webkitLineDash ? t.webkitLineDash = b : "undefined" === typeof t.mozDash || 1 === b.length && 0 === b[0] || (t.mozDash = b);
                var w = m.getPixels();
                "undefined" !== typeof t.lineDashOffset ? t.lineDashOffset = w : "undefined" !== typeof t.webkitLineDashOffset ? t.webkitLineDashOffset = w : "undefined" !== typeof t.mozDashOffset && (t.mozDashOffset = w);
              }
            }

            if (this.modifiedEmSizeStack = !1, "undefined" !== typeof t.font) {
              var S = this.getStyle("font"),
                  k = this.getStyle("font-style"),
                  A = this.getStyle("font-variant"),
                  T = this.getStyle("font-weight"),
                  P = this.getStyle("font-size"),
                  O = this.getStyle("font-family"),
                  C = new ar(k.getString(), A.getString(), T.getString(), P.hasValue() ? "".concat(P.getPixels(!0), "px") : "", O.getString(), ar.parse(S.getString(), t.font));
              k.setValue(C.fontStyle), A.setValue(C.fontVariant), T.setValue(C.fontWeight), P.setValue(C.fontSize), O.setValue(C.fontFamily), t.font = C.toString(), P.isPixels() && (this.document.emSize = P.getPixels(), this.modifiedEmSizeStack = !0);
            }

            e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity());
          }
        }, {
          key: "clearContext",
          value: function value(t) {
            St()(st()(r.prototype), "clearContext", this).call(this, t), this.modifiedEmSizeStack && this.document.popEmSize();
          }
        }]), r;
      }(Ze);

      function fr(t) {
        var e = lr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function lr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var hr = function (t) {
        it()(r, t);
        var e = fr(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, (this instanceof r ? this.constructor : void 0) === r || i), a.type = "text", a.x = 0, a.y = 0, a.measureCache = -1, a;
        }

        return I()(r, [{
          key: "setContext",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            St()(st()(r.prototype), "setContext", this).call(this, t, e);
            var n = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
            n && (t.textBaseline = n);
          }
        }, {
          key: "initializeCoordinates",
          value: function value(t) {
            this.x = this.getAttribute("x").getPixels("x"), this.y = this.getAttribute("y").getPixels("y");
            var e = this.getAttribute("dx"),
                r = this.getAttribute("dy");
            e.hasValue() && (this.x += e.getPixels("x")), r.hasValue() && (this.y += r.getPixels("y")), this.x += this.getAnchorDelta(t, this, 0);
          }
        }, {
          key: "getBoundingBox",
          value: function value(t) {
            var e,
                r = this;
            if ("text" !== this.type) return this.getTElementBoundingBox(t);
            this.initializeCoordinates(t);
            var n = null;
            return x()(e = this.children).call(e, function (e, i) {
              var a = r.getChildBoundingBox(t, r, r, i);
              n ? n.addBoundingBox(a) : n = a;
            }), n;
          }
        }, {
          key: "getFontSize",
          value: function value() {
            var t = this.document,
                e = this.parent,
                r = ar.parse(t.ctx.font).fontSize,
                n = e.getStyle("font-size").getNumber(r);
            return n;
          }
        }, {
          key: "getTElementBoundingBox",
          value: function value(t) {
            var e = this.getFontSize();
            return new or(this.x, this.y - e, this.x + this.measureText(t), this.y);
          }
        }, {
          key: "getGlyph",
          value: function value(t, e, r) {
            var n = e[r],
                i = null;

            if (t.isArabic) {
              var a = e.length,
                  o = e[r - 1],
                  u = e[r + 1],
                  s = "isolated";
              (0 === r || " " === o) && r < a - 2 && " " !== u && (s = "terminal"), r > 0 && " " !== o && r < a - 2 && " " !== u && (s = "medial"), r > 0 && " " !== o && (r === a - 1 || " " === u) && (s = "initial"), "undefined" !== typeof t.glyphs[n] && (i = t.glyphs[n][s], i || "glyph" !== t.glyphs[n].type || (i = t.glyphs[n]));
            } else i = t.glyphs[n];

            return i || (i = t.missingGlyph), i;
          }
        }, {
          key: "getText",
          value: function value() {
            return "";
          }
        }, {
          key: "getTextFromNode",
          value: function value(t) {
            var e = t || this.node,
                r = yt()(e.parentNode.childNodes),
                n = bt()(r).call(r, e),
                i = r.length - 1,
                a = Zt(e.value || e.text || e.textContent || "");
            return 0 === n && (a = Jt(a)), n === i && (a = Kt(a)), a;
          }
        }, {
          key: "renderChildren",
          value: function value(t) {
            var e,
                r = this;

            if ("text" === this.type) {
              this.initializeCoordinates(t), x()(e = this.children).call(e, function (e, n) {
                r.renderChild(t, r, r, n);
              });
              var n = this.document.screen.mouse;
              n.isWorking() && n.checkBoundingBox(this, this.getBoundingBox(t));
            } else this.renderTElementChildren(t);
          }
        }, {
          key: "renderTElementChildren",
          value: function value(t) {
            var e = this.document,
                r = this.parent,
                n = this.getText(),
                i = r.getStyle("font-family").getDefinition();
            if (i) for (var a, o = i.fontFace.unitsPerEm, u = ar.parse(e.ctx.font), s = r.getStyle("font-size").getNumber(u.fontSize), c = r.getStyle("font-style").getString(u.fontStyle), f = s / o, l = i.isRTL ? xt()(a = n.split("")).call(a).join("") : n, h = te(r.getAttribute("dx").getString()), p = l.length, v = 0; v < p; v++) {
              var d = this.getGlyph(i, l, v);
              t.translate(this.x, this.y), t.scale(f, -f);
              var y = t.lineWidth;
              t.lineWidth = t.lineWidth * o / s, "italic" === c && t.transform(1, 0, .4, 1, 0, 0), d.render(t), "italic" === c && t.transform(1, 0, -.4, 1, 0, 0), t.lineWidth = y, t.scale(1 / f, -1 / f), t.translate(-this.x, -this.y), this.x += s * (d.horizAdvX || i.horizAdvX) / o, "undefined" === typeof h[v] || isNaN(h[v]) || (this.x += h[v]);
            } else {
              var g = this.x,
                  x = this.y;
              "stroke" === t.paintOrder ? (t.strokeStyle && t.strokeText(n, g, x), t.fillStyle && t.fillText(n, g, x)) : (t.fillStyle && t.fillText(n, g, x), t.strokeStyle && t.strokeText(n, g, x));
            }
          }
        }, {
          key: "getAnchorDelta",
          value: function value(t, e, r) {
            var n = this.getStyle("text-anchor").getString("start");

            if ("start" !== n) {
              for (var i = e.children, a = i.length, o = null, u = 0, s = r; s < a; s++) {
                if (o = i[s], s > r && o.getAttribute("x").hasValue() || o.getAttribute("text-anchor").hasValue()) break;
                u += o.measureTextRecursive(t);
              }

              return -1 * ("end" === n ? u : u / 2);
            }

            return 0;
          }
        }, {
          key: "adjustChildCoordinates",
          value: function value(t, e, r, n) {
            var i = r.children[n];
            if ("function" !== typeof i.measureText) return i;
            t.save(), i.setContext(t, !0);
            var a = i.getAttribute("x"),
                o = i.getAttribute("y"),
                u = i.getAttribute("dx"),
                s = i.getAttribute("dy"),
                c = i.getAttribute("text-anchor").getString("start");

            if (0 === n && "textNode" !== i.type && (a.hasValue() || a.setValue(e.getAttribute("x").getValue("0")), o.hasValue() || o.setValue(e.getAttribute("y").getValue("0")), u.hasValue() || u.setValue(e.getAttribute("dx").getValue("0")), s.hasValue() || s.setValue(e.getAttribute("dy").getValue("0"))), a.hasValue()) {
              if (i.x = a.getPixels("x") + e.getAnchorDelta(t, r, n), "start" !== c) {
                var f = i.measureTextRecursive(t);
                i.x += -1 * ("end" === c ? f : f / 2);
              }

              u.hasValue() && (i.x += u.getPixels("x"));
            } else {
              if ("start" !== c) {
                var l = i.measureTextRecursive(t);
                e.x += -1 * ("end" === c ? l : l / 2);
              }

              u.hasValue() && (e.x += u.getPixels("x")), i.x = e.x;
            }

            return e.x = i.x + i.measureText(t), o.hasValue() ? (i.y = o.getPixels("y"), s.hasValue() && (i.y += s.getPixels("y"))) : (s.hasValue() && (e.y += s.getPixels("y")), i.y = e.y), e.y = i.y, i.clearContext(t), t.restore(), i;
          }
        }, {
          key: "getChildBoundingBox",
          value: function value(t, e, r, n) {
            var i,
                a = this.adjustChildCoordinates(t, e, r, n);
            if ("function" !== typeof a.getBoundingBox) return null;
            var o = a.getBoundingBox(t);
            return o ? (x()(i = a.children).call(i, function (r, n) {
              var i = e.getChildBoundingBox(t, e, a, n);
              o.addBoundingBox(i);
            }), o) : null;
          }
        }, {
          key: "renderChild",
          value: function value(t, e, r, n) {
            var i,
                a = this.adjustChildCoordinates(t, e, r, n);
            a.render(t), x()(i = a.children).call(i, function (r, n) {
              e.renderChild(t, e, a, n);
            });
          }
        }, {
          key: "measureTextRecursive",
          value: function value(t) {
            var e,
                r = F()(e = this.children).call(e, function (e, r) {
              return e + r.measureTextRecursive(t);
            }, this.measureText(t));
            return r;
          }
        }, {
          key: "measureText",
          value: function value(t) {
            var e = this.measureCache;
            if (~e) return e;
            var r = this.getText(),
                n = this.measureTargetText(t, r);
            return this.measureCache = n, n;
          }
        }, {
          key: "measureTargetText",
          value: function value(t, e) {
            if (!e.length) return 0;
            var r = this.parent,
                n = r.getStyle("font-family").getDefinition();

            if (n) {
              for (var i, a = this.getFontSize(), o = n.isRTL ? xt()(i = e.split("")).call(i).join("") : e, u = te(r.getAttribute("dx").getString()), s = o.length, c = 0, f = 0; f < s; f++) {
                var l = this.getGlyph(n, o, f);
                c += (l.horizAdvX || n.horizAdvX) * a / n.fontFace.unitsPerEm, "undefined" === typeof u[f] || isNaN(u[f]) || (c += u[f]);
              }

              return c;
            }

            if (!t.measureText) return 10 * e.length;
            t.save(), this.setContext(t, !0);
            var h = t.measureText(e),
                p = h.width;
            return this.clearContext(t), t.restore(), p;
          }
        }]), r;
      }(cr);

      function pr(t) {
        var e = vr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function vr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var dr = function (t) {
        it()(r, t);
        var e = pr(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, (this instanceof r ? this.constructor : void 0) === r || i), a.type = "tspan", a.text = a.children.length > 0 ? "" : a.getTextFromNode(), a;
        }

        return I()(r, [{
          key: "getText",
          value: function value() {
            return this.text;
          }
        }]), r;
      }(hr);

      function yr(t) {
        var e = gr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function gr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var xr = function (t) {
        it()(r, t);
        var e = yr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "textNode", t;
        }

        return r;
      }(dr);

      function mr(t) {
        var e = br();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function br() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var wr = function (t) {
        it()(r, t);
        var e = mr(r);

        function r(t) {
          var n;
          return V()(this, r), n = e.call(this, t.replace(/[+-.]\s+/g, "-").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), n.control = null, n.start = null, n.current = null, n.command = null, n.commands = n.commands, n.i = -1, n.previousCommand = null, n.points = [], n.angles = [], n;
        }

        return I()(r, [{
          key: "reset",
          value: function value() {
            this.i = -1, this.command = null, this.previousCommand = null, this.start = new Oe(0, 0), this.control = new Oe(0, 0), this.current = new Oe(0, 0), this.points = [], this.angles = [];
          }
        }, {
          key: "isEnd",
          value: function value() {
            var t = this.i,
                e = this.commands;
            return t >= e.length - 1;
          }
        }, {
          key: "next",
          value: function value() {
            var t = this.commands[++this.i];
            return this.previousCommand = this.command, this.command = t, t;
          }
        }, {
          key: "getPoint",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "x",
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
                r = new Oe(this.command[t], this.command[e]);
            return this.makeAbsolute(r);
          }
        }, {
          key: "getAsControlPoint",
          value: function value(t, e) {
            var r = this.getPoint(t, e);
            return this.control = r, r;
          }
        }, {
          key: "getAsCurrentPoint",
          value: function value(t, e) {
            var r = this.getPoint(t, e);
            return this.current = r, r;
          }
        }, {
          key: "getReflectedControlPoint",
          value: function value() {
            var t = this.previousCommand.type;
            if (t !== Tt["a"].CURVE_TO && t !== Tt["a"].SMOOTH_CURVE_TO && t !== Tt["a"].QUAD_TO && t !== Tt["a"].SMOOTH_QUAD_TO) return this.current;
            var e = this.current,
                r = e.x,
                n = e.y,
                i = this.control,
                a = i.x,
                o = i.y,
                u = new Oe(2 * r - a, 2 * n - o);
            return u;
          }
        }, {
          key: "makeAbsolute",
          value: function value(t) {
            if (this.command.relative) {
              var e = this.current,
                  r = e.x,
                  n = e.y;
              t.x += r, t.y += n;
            }

            return t;
          }
        }, {
          key: "addMarker",
          value: function value(t, e, r) {
            var n = this.points,
                i = this.angles;
            r && i.length > 0 && !i[i.length - 1] && (i[i.length - 1] = n[n.length - 1].angleTo(r)), this.addMarkerAngle(t, e ? e.angleTo(t) : null);
          }
        }, {
          key: "addMarkerAngle",
          value: function value(t, e) {
            this.points.push(t), this.angles.push(e);
          }
        }, {
          key: "getMarkerPoints",
          value: function value() {
            return this.points;
          }
        }, {
          key: "getMarkerAngles",
          value: function value() {
            for (var t = this.angles, e = t.length, r = 0; r < e; r++) {
              if (!t[r]) for (var n = r + 1; n < e; n++) {
                if (t[n]) {
                  t[r] = t[n];
                  break;
                }
              }
            }

            return t;
          }
        }]), r;
      }(Tt["a"]);

      function Sr(t) {
        var e = kr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function kr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Ar = function (t) {
        it()(r, t);
        var e = Sr(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "path", a.pathParser = null, a.pathParser = new wr(a.getAttribute("d").getString()), a;
        }

        return I()(r, [{
          key: "path",
          value: function value(t) {
            var e = this.pathParser,
                r = new or();
            e.reset(), t && t.beginPath();

            while (!e.isEnd()) {
              switch (e.next().type) {
                case wr.MOVE_TO:
                  this.pathM(t, r);
                  break;

                case wr.LINE_TO:
                  this.pathL(t, r);
                  break;

                case wr.HORIZ_LINE_TO:
                  this.pathH(t, r);
                  break;

                case wr.VERT_LINE_TO:
                  this.pathV(t, r);
                  break;

                case wr.CURVE_TO:
                  this.pathC(t, r);
                  break;

                case wr.SMOOTH_CURVE_TO:
                  this.pathS(t, r);
                  break;

                case wr.QUAD_TO:
                  this.pathQ(t, r);
                  break;

                case wr.SMOOTH_QUAD_TO:
                  this.pathT(t, r);
                  break;

                case wr.ARC:
                  this.pathA(t, r);
                  break;

                case wr.CLOSE_PATH:
                  this.pathZ(t, r);
                  break;
              }
            }

            return r;
          }
        }, {
          key: "getBoundingBox",
          value: function value(t) {
            return this.path();
          }
        }, {
          key: "getMarkers",
          value: function value() {
            var t = this.pathParser,
                e = t.getMarkerPoints(),
                r = t.getMarkerAngles(),
                n = s()(e).call(e, function (t, e) {
              return [t, r[e]];
            });
            return n;
          }
        }, {
          key: "renderChildren",
          value: function value(t) {
            this.path(t), this.document.screen.mouse.checkPath(this, t);
            var e = this.getStyle("fill-rule");
            "" !== t.fillStyle && ("inherit" !== e.getString("inherit") ? At()(t).call(t, e.getString()) : At()(t).call(t)), "" !== t.strokeStyle && t.stroke();
            var r = this.getMarkers();

            if (r) {
              var n = r.length - 1,
                  i = this.getStyle("marker-start"),
                  a = this.getStyle("marker-mid"),
                  o = this.getStyle("marker-end");

              if (i.isUrlDefinition()) {
                var u = i.getDefinition(),
                    s = f()(r[0], 2),
                    c = s[0],
                    l = s[1];
                u.render(t, c, l);
              }

              if (a.isUrlDefinition()) for (var h = a.getDefinition(), p = 1; p < n; p++) {
                var v = f()(r[p], 2),
                    d = v[0],
                    y = v[1];
                h.render(t, d, y);
              }

              if (o.isUrlDefinition()) {
                var g = o.getDefinition(),
                    x = f()(r[n], 2),
                    m = x[0],
                    b = x[1];
                g.render(t, m, b);
              }
            }
          }
        }, {
          key: "pathM",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathM(n),
                a = i.point,
                o = a.x,
                u = a.y;
            n.addMarker(a), e.addPoint(o, u), t && t.moveTo(o, u);
          }
        }, {
          key: "pathL",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathL(n),
                a = i.current,
                o = i.point,
                u = o.x,
                s = o.y;
            n.addMarker(o, a), e.addPoint(u, s), t && t.lineTo(u, s);
          }
        }, {
          key: "pathH",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathH(n),
                a = i.current,
                o = i.point,
                u = o.x,
                s = o.y;
            n.addMarker(o, a), e.addPoint(u, s), t && t.lineTo(u, s);
          }
        }, {
          key: "pathV",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathV(n),
                a = i.current,
                o = i.point,
                u = o.x,
                s = o.y;
            n.addMarker(o, a), e.addPoint(u, s), t && t.lineTo(u, s);
          }
        }, {
          key: "pathC",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathC(n),
                a = i.current,
                o = i.point,
                u = i.controlPoint,
                s = i.currentPoint;
            n.addMarker(s, u, o), e.addBezierCurve(a.x, a.y, o.x, o.y, u.x, u.y, s.x, s.y), t && t.bezierCurveTo(o.x, o.y, u.x, u.y, s.x, s.y);
          }
        }, {
          key: "pathS",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathS(n),
                a = i.current,
                o = i.point,
                u = i.controlPoint,
                s = i.currentPoint;
            n.addMarker(s, u, o), e.addBezierCurve(a.x, a.y, o.x, o.y, u.x, u.y, s.x, s.y), t && t.bezierCurveTo(o.x, o.y, u.x, u.y, s.x, s.y);
          }
        }, {
          key: "pathQ",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathQ(n),
                a = i.current,
                o = i.controlPoint,
                u = i.currentPoint;
            n.addMarker(u, o, o), e.addQuadraticCurve(a.x, a.y, o.x, o.y, u.x, u.y), t && t.quadraticCurveTo(o.x, o.y, u.x, u.y);
          }
        }, {
          key: "pathT",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathT(n),
                a = i.current,
                o = i.controlPoint,
                u = i.currentPoint;
            n.addMarker(u, o, o), e.addQuadraticCurve(a.x, a.y, o.x, o.y, u.x, u.y), t && t.quadraticCurveTo(o.x, o.y, u.x, u.y);
          }
        }, {
          key: "pathA",
          value: function value(t, e) {
            var n = this.pathParser,
                i = r.pathA(n),
                a = i.currentPoint,
                o = i.rX,
                u = i.rY,
                s = i.sweepFlag,
                c = i.xAxisRotation,
                f = i.centp,
                l = i.a1,
                h = i.ad,
                p = 1 - s ? 1 : -1,
                v = l + p * (h / 2),
                d = new Oe(f.x + o * Math.cos(v), f.y + u * Math.sin(v));

            if (n.addMarkerAngle(d, v - p * Math.PI / 2), n.addMarkerAngle(a, v - p * Math.PI), e.addPoint(a.x, a.y), t && !isNaN(l) && !isNaN(h)) {
              var y = o > u ? o : u,
                  g = o > u ? 1 : o / u,
                  x = o > u ? u / o : 1;
              t.translate(f.x, f.y), t.rotate(c), t.scale(g, x), t.arc(0, 0, y, l, l + h, Boolean(1 - s)), t.scale(1 / g, 1 / x), t.rotate(-c), t.translate(-f.x, -f.y);
            }
          }
        }, {
          key: "pathZ",
          value: function value(t, e) {
            r.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
          }
        }], [{
          key: "pathM",
          value: function value(t) {
            var e = t.getAsCurrentPoint();
            return t.start = t.current, {
              point: e
            };
          }
        }, {
          key: "pathL",
          value: function value(t) {
            var e = t.current,
                r = t.getAsCurrentPoint();
            return {
              current: e,
              point: r
            };
          }
        }, {
          key: "pathH",
          value: function value(t) {
            var e = t.current,
                r = t.command,
                n = new Oe((r.relative ? e.x : 0) + r.x, e.y);
            return t.current = n, {
              current: e,
              point: n
            };
          }
        }, {
          key: "pathV",
          value: function value(t) {
            var e = t.current,
                r = t.command,
                n = new Oe(e.x, (r.relative ? e.y : 0) + r.y);
            return t.current = n, {
              current: e,
              point: n
            };
          }
        }, {
          key: "pathC",
          value: function value(t) {
            var e = t.current,
                r = t.getPoint("x1", "y1"),
                n = t.getAsControlPoint("x2", "y2"),
                i = t.getAsCurrentPoint();
            return {
              current: e,
              point: r,
              controlPoint: n,
              currentPoint: i
            };
          }
        }, {
          key: "pathS",
          value: function value(t) {
            var e = t.current,
                r = t.getReflectedControlPoint(),
                n = t.getAsControlPoint("x2", "y2"),
                i = t.getAsCurrentPoint();
            return {
              current: e,
              point: r,
              controlPoint: n,
              currentPoint: i
            };
          }
        }, {
          key: "pathQ",
          value: function value(t) {
            var e = t.current,
                r = t.getAsControlPoint("x1", "y1"),
                n = t.getAsCurrentPoint();
            return {
              current: e,
              controlPoint: r,
              currentPoint: n
            };
          }
        }, {
          key: "pathT",
          value: function value(t) {
            var e = t.current,
                r = t.getReflectedControlPoint();
            t.control = r;
            var n = t.getAsCurrentPoint();
            return {
              current: e,
              controlPoint: r,
              currentPoint: n
            };
          }
        }, {
          key: "pathA",
          value: function value(t) {
            var e = t.current,
                r = t.command,
                n = r.rX,
                i = r.rY,
                a = r.xRot,
                o = r.lArcFlag,
                u = r.sweepFlag,
                s = a * (Math.PI / 180),
                c = t.getAsCurrentPoint(),
                f = new Oe(Math.cos(s) * (e.x - c.x) / 2 + Math.sin(s) * (e.y - c.y) / 2, -Math.sin(s) * (e.x - c.x) / 2 + Math.cos(s) * (e.y - c.y) / 2),
                l = Math.pow(f.x, 2) / Math.pow(n, 2) + Math.pow(f.y, 2) / Math.pow(i, 2);
            l > 1 && (n *= Math.sqrt(l), i *= Math.sqrt(l));
            var h = (o === u ? -1 : 1) * Math.sqrt((Math.pow(n, 2) * Math.pow(i, 2) - Math.pow(n, 2) * Math.pow(f.y, 2) - Math.pow(i, 2) * Math.pow(f.x, 2)) / (Math.pow(n, 2) * Math.pow(f.y, 2) + Math.pow(i, 2) * Math.pow(f.x, 2)));
            isNaN(h) && (h = 0);
            var p = new Oe(h * n * f.y / i, h * -i * f.x / n),
                v = new Oe((e.x + c.x) / 2 + Math.cos(s) * p.x - Math.sin(s) * p.y, (e.y + c.y) / 2 + Math.sin(s) * p.x + Math.cos(s) * p.y),
                d = ge([1, 0], [(f.x - p.x) / n, (f.y - p.y) / i]),
                y = [(f.x - p.x) / n, (f.y - p.y) / i],
                g = [(-f.x - p.x) / n, (-f.y - p.y) / i],
                x = ge(y, g);
            return ye(y, g) <= -1 && (x = Math.PI), ye(y, g) >= 1 && (x = 0), {
              currentPoint: c,
              rX: n,
              rY: i,
              sweepFlag: u,
              xAxisRotation: s,
              centp: v,
              a1: d,
              ad: x
            };
          }
        }, {
          key: "pathZ",
          value: function value(t) {
            t.current = t.start;
          }
        }]), r;
      }(cr);

      function Tr(t) {
        var e = Pr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Pr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Or = function (t) {
        it()(r, t);
        var e = Tr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "svg", t.root = !1, t;
        }

        return I()(r, [{
          key: "setContext",
          value: function value(t) {
            var e = this.document,
                n = e.screen,
                i = e.window,
                a = t.canvas;

            if (n.setDefaults(t), a.style && "undefined" !== typeof t.font && i && "undefined" !== typeof i.getComputedStyle) {
              t.font = i.getComputedStyle(a).getPropertyValue("font");
              var o = new Te(e, "fontSize", ar.parse(t.font).fontSize);
              o.hasValue() && (e.rootEmSize = o.getPixels("y"), e.emSize = e.rootEmSize);
            }

            this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
            var u = n.viewPort,
                s = u.width,
                c = u.height;
            this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
            var f = this.getAttribute("refX"),
                l = this.getAttribute("refY"),
                h = this.getAttribute("viewBox"),
                p = h.hasValue() ? te(h.getString()) : null,
                v = !this.root && "visible" !== this.getStyle("overflow").getValue("hidden"),
                d = 0,
                y = 0,
                g = 0,
                x = 0;
            p && (d = p[0], y = p[1]), this.root || (s = this.getStyle("width").getPixels("x"), c = this.getStyle("height").getPixels("y"), "marker" === this.type && (g = d, x = y, d = 0, y = 0)), n.viewPort.setCurrent(s, c), this.node && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), St()(st()(r.prototype), "setContext", this).call(this, t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), p && (s = p[2], c = p[3]), e.setViewBox({
              ctx: t,
              aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
              width: n.viewPort.width,
              desiredWidth: s,
              height: n.viewPort.height,
              desiredHeight: c,
              minX: d,
              minY: y,
              refX: f.getValue(),
              refY: l.getValue(),
              clip: v,
              clipX: g,
              clipY: x
            }), p && (n.viewPort.removeCurrent(), n.viewPort.setCurrent(s, c));
          }
        }, {
          key: "clearContext",
          value: function value(t) {
            St()(st()(r.prototype), "clearContext", this).call(this, t), this.document.screen.viewPort.removeCurrent();
          }
        }, {
          key: "resize",
          value: function value(t) {
            var e,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = this.getAttribute("width", !0),
                a = this.getAttribute("height", !0),
                o = this.getAttribute("viewBox"),
                u = this.getAttribute("style"),
                s = i.getNumber(0),
                c = a.getNumber(0);
            if (n) if ("string" === typeof n) this.getAttribute("preserveAspectRatio", !0).setValue(n);else {
              var f = this.getAttribute("preserveAspectRatio");
              f.hasValue() && f.setValue(f.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
            }
            (i.setValue(t), a.setValue(r), o.hasValue()) || o.setValue(j()(e = "0 0 ".concat(s || t, " ")).call(e, c || r));

            if (u.hasValue()) {
              var l = this.getStyle("width"),
                  h = this.getStyle("height");
              l.hasValue() && l.setValue("".concat(t, "px")), h.hasValue() && h.setValue("".concat(r, "px"));
            }
          }
        }]), r;
      }(cr);

      function Cr(t) {
        var e = Er();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Er() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Mr = function (t) {
        it()(r, t);
        var e = Cr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "rect", t;
        }

        return I()(r, [{
          key: "path",
          value: function value(t) {
            var e = this.getAttribute("x").getPixels("x"),
                r = this.getAttribute("y").getPixels("y"),
                n = this.getStyle("width", !1, !0).getPixels("x"),
                i = this.getStyle("height", !1, !0).getPixels("y"),
                a = this.getAttribute("rx"),
                o = this.getAttribute("ry"),
                u = a.getPixels("x"),
                s = o.getPixels("y");

            if (a.hasValue() && !o.hasValue() && (s = u), o.hasValue() && !a.hasValue() && (u = s), u = Math.min(u, n / 2), s = Math.min(s, i / 2), t) {
              var c = (Math.sqrt(2) - 1) / 3 * 4;
              t.beginPath(), i > 0 && n > 0 && (t.moveTo(e + u, r), t.lineTo(e + n - u, r), t.bezierCurveTo(e + n - u + c * u, r, e + n, r + s - c * s, e + n, r + s), t.lineTo(e + n, r + i - s), t.bezierCurveTo(e + n, r + i - s + c * s, e + n - u + c * u, r + i, e + n - u, r + i), t.lineTo(e + u, r + i), t.bezierCurveTo(e + u - c * u, r + i, e, r + i - s + c * s, e, r + i - s), t.lineTo(e, r + s), t.bezierCurveTo(e, r + s - c * s, e + u - c * u, r, e + u, r), t.closePath());
            }

            return new or(e, r, e + n, r + i);
          }
        }, {
          key: "getMarkers",
          value: function value() {
            return null;
          }
        }]), r;
      }(Ar);

      function _r(t) {
        var e = Nr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Nr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Rr = function (t) {
        it()(r, t);

        var e = _r(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "circle", t;
        }

        return I()(r, [{
          key: "path",
          value: function value(t) {
            var e = this.getAttribute("cx").getPixels("x"),
                r = this.getAttribute("cy").getPixels("y"),
                n = this.getAttribute("r").getPixels();
            return t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, 2 * Math.PI, !1), t.closePath()), new or(e - n, r - n, e + n, r + n);
          }
        }, {
          key: "getMarkers",
          value: function value() {
            return null;
          }
        }]), r;
      }(Ar);

      function Vr(t) {
        var e = Dr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Dr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Ir = function (t) {
        it()(r, t);
        var e = Vr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "ellipse", t;
        }

        return I()(r, [{
          key: "path",
          value: function value(t) {
            var e = (Math.sqrt(2) - 1) / 3 * 4,
                r = this.getAttribute("rx").getPixels("x"),
                n = this.getAttribute("ry").getPixels("y"),
                i = this.getAttribute("cx").getPixels("x"),
                a = this.getAttribute("cy").getPixels("y");
            return t && r > 0 && n > 0 && (t.beginPath(), t.moveTo(i + r, a), t.bezierCurveTo(i + r, a + e * n, i + e * r, a + n, i, a + n), t.bezierCurveTo(i - e * r, a + n, i - r, a + e * n, i - r, a), t.bezierCurveTo(i - r, a - e * n, i - e * r, a - n, i, a - n), t.bezierCurveTo(i + e * r, a - n, i + r, a - e * n, i + r, a), t.closePath()), new or(i - r, a - n, i + r, a + n);
          }
        }, {
          key: "getMarkers",
          value: function value() {
            return null;
          }
        }]), r;
      }(Ar);

      function Lr(t) {
        var e = jr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function jr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var zr = function (t) {
        it()(r, t);
        var e = Lr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "line", t;
        }

        return I()(r, [{
          key: "getPoints",
          value: function value() {
            return [new Oe(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new Oe(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
          }
        }, {
          key: "path",
          value: function value(t) {
            var e = this.getPoints(),
                r = f()(e, 2),
                n = r[0],
                i = n.x,
                a = n.y,
                o = r[1],
                u = o.x,
                s = o.y;
            return t && (t.beginPath(), t.moveTo(i, a), t.lineTo(u, s)), new or(i, a, u, s);
          }
        }, {
          key: "getMarkers",
          value: function value() {
            var t = this.getPoints(),
                e = f()(t, 2),
                r = e[0],
                n = e[1],
                i = r.angleTo(n);
            return [[r, i], [n, i]];
          }
        }]), r;
      }(Ar);

      function Fr(t) {
        var e = Br();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Br() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Ur = function (t) {
        it()(r, t);
        var e = Fr(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "polyline", a.points = [], a.points = Oe.parsePath(a.getAttribute("points").getString()), a;
        }

        return I()(r, [{
          key: "path",
          value: function value(t) {
            var e = this.points,
                r = f()(e, 1),
                n = r[0],
                i = n.x,
                a = n.y,
                o = new or(i, a);
            return t && (t.beginPath(), t.moveTo(i, a)), x()(e).call(e, function (e) {
              var r = e.x,
                  n = e.y;
              o.addPoint(r, n), t && t.lineTo(r, n);
            }), o;
          }
        }, {
          key: "getMarkers",
          value: function value() {
            var t = this.points,
                e = t.length - 1,
                r = [];
            return x()(t).call(t, function (n, i) {
              i !== e && r.push([n, n.angleTo(t[i + 1])]);
            }), r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]), r;
          }
        }]), r;
      }(Ar);

      function Hr(t) {
        var e = Xr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Xr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Yr = function (t) {
        it()(r, t);
        var e = Hr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "polygon", t;
        }

        return I()(r, [{
          key: "path",
          value: function value(t) {
            var e = St()(st()(r.prototype), "path", this).call(this, t),
                n = f()(this.points, 1),
                i = n[0],
                a = i.x,
                o = i.y;
            return t && (t.lineTo(a, o), t.closePath()), e;
          }
        }]), r;
      }(Ur);

      function qr(t) {
        var e = Qr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Qr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Wr = function (t) {
        it()(r, t);
        var e = qr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "pattern", t;
        }

        return I()(r, [{
          key: "createPattern",
          value: function value(t, e, r) {
            var n = this.getStyle("width").getPixels("x", !0),
                i = this.getStyle("height").getPixels("y", !0),
                a = new Or(this.document, null);
            a.attributes.viewBox = new Te(this.document, "viewBox", this.getAttribute("viewBox").getValue()), a.attributes.width = new Te(this.document, "width", "".concat(n, "px")), a.attributes.height = new Te(this.document, "height", "".concat(i, "px")), a.attributes.transform = new Te(this.document, "transform", this.getAttribute("patternTransform").getValue()), a.children = this.children;
            var o = this.document.createCanvas(n, i),
                u = o.getContext("2d"),
                s = this.getAttribute("x"),
                c = this.getAttribute("y");
            s.hasValue() && c.hasValue() && u.translate(s.getPixels("x", !0), c.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Ot()(this.styles, "fill-opacity");

            for (var f = -1; f <= 1; f++) {
              for (var l = -1; l <= 1; l++) {
                u.save(), a.attributes.x = new Te(this.document, "x", f * o.width), a.attributes.y = new Te(this.document, "y", l * o.height), a.render(u), u.restore();
              }
            }

            var h = t.createPattern(o, "repeat");
            return h;
          }
        }]), r;
      }(Ze);

      function Gr(t) {
        var e = $r();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function $r() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Zr = function (t) {
        it()(r, t);
        var e = Gr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "marker", t;
        }

        return I()(r, [{
          key: "render",
          value: function value(t, e, r) {
            if (e) {
              var n = e.x,
                  i = e.y,
                  a = this.getAttribute("orient").getValue("auto"),
                  o = this.getAttribute("markerUnits").getValue("strokeWidth");
              t.translate(n, i), "auto" === a && t.rotate(r), "strokeWidth" === o && t.scale(t.lineWidth, t.lineWidth), t.save();
              var u = new Or(this.document, null);
              u.type = this.type, u.attributes.viewBox = new Te(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new Te(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new Te(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new Te(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new Te(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new Te(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new Te(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new Te(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(t), t.restore(), "strokeWidth" === o && t.scale(1 / t.lineWidth, 1 / t.lineWidth), "auto" === a && t.rotate(-r), t.translate(-n, -i);
            }
          }
        }]), r;
      }(Ze);

      function Jr(t) {
        var e = Kr();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Kr() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var tn = function (t) {
        it()(r, t);
        var e = Jr(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "defs", t;
        }

        return I()(r, [{
          key: "render",
          value: function value() {}
        }]), r;
      }(Ze);

      function en(t) {
        var e = rn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function rn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var nn = function (t) {
        it()(r, t);
        var e = en(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "g", t;
        }

        return I()(r, [{
          key: "getBoundingBox",
          value: function value(t) {
            var e,
                r = new or();
            return x()(e = this.children).call(e, function (e) {
              r.addBoundingBox(e.getBoundingBox(t));
            }), r;
          }
        }]), r;
      }(cr);

      function an(t) {
        var e = on();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function on() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var un = function (t) {
        it()(r, t);
        var e = an(r);

        function r(t, n, i) {
          var a;
          V()(this, r), a = e.call(this, t, n, i), a.attributesToInherit = ["gradientUnits"], a.stops = [];
          var o = Et()(a),
              u = o.stops,
              s = o.children;
          return x()(s).call(s, function (t) {
            "stop" === t.type && u.push(t);
          }), a;
        }

        return I()(r, [{
          key: "getGradientUnits",
          value: function value() {
            return this.getAttribute("gradientUnits").getString("objectBoundingBox");
          }
        }, {
          key: "createGradient",
          value: function value(t, e, r) {
            var n = this,
                i = this;
            this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(i));
            var a = i,
                o = a.stops,
                u = this.getGradient(t, e);
            if (!u) return this.addParentOpacity(r, o[o.length - 1].color);

            if (x()(o).call(o, function (t) {
              u.addColorStop(t.offset, n.addParentOpacity(r, t.color));
            }), this.getAttribute("gradientTransform").hasValue()) {
              var s = this.document,
                  c = s.screen,
                  l = c.MAX_VIRTUAL_PIXELS,
                  h = c.viewPort,
                  p = f()(h.viewPorts, 1),
                  v = p[0],
                  d = new Mr(s, null);
              d.attributes.x = new Te(s, "x", -l / 3), d.attributes.y = new Te(s, "y", -l / 3), d.attributes.width = new Te(s, "width", l), d.attributes.height = new Te(s, "height", l);
              var y = new nn(s, null);
              y.attributes.transform = new Te(s, "transform", this.getAttribute("gradientTransform").getValue()), y.children = [d];
              var g = new Or(s, null);
              g.attributes.x = new Te(s, "x", 0), g.attributes.y = new Te(s, "y", 0), g.attributes.width = new Te(s, "width", v.width), g.attributes.height = new Te(s, "height", v.height), g.children = [y];
              var m = s.createCanvas(v.width, v.height),
                  b = m.getContext("2d");
              return b.fillStyle = u, g.render(b), b.createPattern(m, "no-repeat");
            }

            return u;
          }
        }, {
          key: "inheritStopContainer",
          value: function value(t) {
            var e,
                r = this;
            x()(e = this.attributesToInherit).call(e, function (e) {
              !r.getAttribute(e).hasValue() && t.getAttribute(e).hasValue() && r.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
            });
          }
        }, {
          key: "addParentOpacity",
          value: function value(t, e) {
            if (t.hasValue()) {
              var r = new Te(this.document, "color", e);
              return r.addOpacity(t).getColor();
            }

            return e;
          }
        }]), r;
      }(Ze);

      function sn(t) {
        var e = cn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function cn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var fn = function (t) {
        it()(r, t);
        var e = sn(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "linearGradient", a.attributesToInherit.push("x1", "y1", "x2", "y2"), a;
        }

        return I()(r, [{
          key: "getGradient",
          value: function value(t, e) {
            var r = "objectBoundingBox" === this.getGradientUnits(),
                n = r ? e.getBoundingBox(t) : null;
            if (r && !n) return null;
            this.getAttribute("x1").hasValue() || this.getAttribute("y1").hasValue() || this.getAttribute("x2").hasValue() || this.getAttribute("y2").hasValue() || (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
            var i = r ? n.x + n.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"),
                a = r ? n.y + n.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"),
                o = r ? n.x + n.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"),
                u = r ? n.y + n.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
            return i === o && a === u ? null : t.createLinearGradient(i, a, o, u);
          }
        }]), r;
      }(un);

      function ln(t) {
        var e = hn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function hn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var pn = function (t) {
        it()(r, t);
        var e = ln(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "radialGradient", a.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr"), a;
        }

        return I()(r, [{
          key: "getGradient",
          value: function value(t, e) {
            var r = "objectBoundingBox" === this.getGradientUnits(),
                n = e.getBoundingBox(t);
            if (r && !n) return null;
            this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
            var i = r ? n.x + n.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"),
                a = r ? n.y + n.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"),
                o = i,
                u = a;
            this.getAttribute("fx").hasValue() && (o = r ? n.x + n.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? n.y + n.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
            var s = r ? (n.width + n.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(),
                c = this.getAttribute("fr").getPixels();
            return t.createRadialGradient(o, u, c, i, a, s);
          }
        }]), r;
      }(un);

      function vn(t) {
        var e = dn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function dn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var yn = function (t) {
        it()(r, t);
        var e = vn(r);

        function r(t, n, i) {
          var a;
          V()(this, r), a = e.call(this, t, n, i), a.type = "stop";
          var o = Math.max(0, Math.min(1, a.getAttribute("offset").getNumber())),
              u = a.getStyle("stop-opacity"),
              s = a.getStyle("stop-color", !0);
          return "" === s.getString() && s.setValue("#000"), u.hasValue() && (s = s.addOpacity(u)), a.offset = o, a.color = s.getColor(), a;
        }

        return r;
      }(Ze);

      function gn(t) {
        var e = xn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function xn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var mn = function (t) {
        it()(r, t);
        var e = gn(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "animate", a.duration = 0, a.initialValue = null, a.initialUnits = "", a.removed = !1, a.frozen = !1, t.screen.animations.push(Et()(a)), a.begin = a.getAttribute("begin").getMilliseconds(), a.maxDuration = a.begin + a.getAttribute("dur").getMilliseconds(), a.from = a.getAttribute("from"), a.to = a.getAttribute("to"), a.values = a.getAttribute("values"), _t()(a).hasValue() && _t()(a).setValue(_t()(a).getString().split(";")), a;
        }

        return I()(r, [{
          key: "getProperty",
          value: function value() {
            var t = this.getAttribute("attributeType").getString(),
                e = this.getAttribute("attributeName").getString();
            return "CSS" === t ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
          }
        }, {
          key: "calcValue",
          value: function value() {
            var t,
                e = this.initialUnits,
                r = this.getProgress(),
                n = r.progress,
                i = r.from,
                a = r.to,
                o = i.getNumber() + (a.getNumber() - i.getNumber()) * n;
            return "%" === e && (o *= 100), j()(t = "".concat(o)).call(t, e);
          }
        }, {
          key: "update",
          value: function value(t) {
            var e = this.parent,
                r = this.getProperty();

            if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
              var n = this.getAttribute("fill").getString("remove");
              if ("indefinite" === this.getAttribute("repeatCount").getString() || "indefinite" === this.getAttribute("repeatDur").getString()) this.duration = 0;else if ("freeze" !== n || this.frozen) {
                if ("remove" === n && !this.removed) return this.removed = !0, r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue), !0;
              } else this.frozen = !0, e.animationFrozen = !0, e.animationFrozenValue = r.getString();
              return !1;
            }

            this.duration += t;
            var i = !1;

            if (this.begin < this.duration) {
              var a = this.calcValue(),
                  o = this.getAttribute("type");

              if (o.hasValue()) {
                var u,
                    s = o.getString();
                a = j()(u = "".concat(s, "(")).call(u, a, ")");
              }

              r.setValue(a), i = !0;
            }

            return i;
          }
        }, {
          key: "getProgress",
          value: function value() {
            var t = this.document,
                e = _t()(this),
                r = {
              progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
            };

            if (e.hasValue()) {
              var n = r.progress * (e.getValue().length - 1),
                  i = Math.floor(n),
                  a = Math.ceil(n);
              r.from = new Te(t, "from", o()(e.getValue()[i])), r.to = new Te(t, "to", o()(e.getValue()[a])), r.progress = (n - i) / (a - i);
            } else r.from = this.from, r.to = this.to;

            return r;
          }
        }]), r;
      }(Ze);

      function bn(t) {
        var e = wn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function wn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Sn = function (t) {
        it()(r, t);
        var e = bn(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "animateColor", t;
        }

        return I()(r, [{
          key: "calcValue",
          value: function value() {
            var t = this.getProgress(),
                e = t.progress,
                r = t.from,
                n = t.to,
                i = new tt.a(r.getColor()),
                a = new tt.a(n.getColor());

            if (i.ok && a.ok) {
              var o,
                  u,
                  s = i.r + (a.r - i.r) * e,
                  c = i.g + (a.g - i.g) * e,
                  f = i.b + (a.b - i.b) * e;
              return j()(o = j()(u = "rgb(".concat(Rt()(s, 10), ", ")).call(u, Rt()(c, 10), ", ")).call(o, Rt()(f, 10), ")");
            }

            return this.getAttribute("from").getColor();
          }
        }]), r;
      }(mn);

      function kn(t) {
        var e = An();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function An() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Tn = function (t) {
        it()(r, t);
        var e = kn(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "animateTransform", t;
        }

        return I()(r, [{
          key: "calcValue",
          value: function value() {
            var t = this.getProgress(),
                e = t.progress,
                r = t.from,
                n = t.to,
                i = te(r.getString()),
                a = te(n.getString()),
                o = s()(i).call(i, function (t, r) {
              var n = a[r];
              return t + (n - t) * e;
            }).join(" ");
            return o;
          }
        }]), r;
      }(mn);

      function Pn(t, e) {
        var r;

        if ("undefined" === typeof Bt.a || null == zt()(t)) {
          if (Lt()(t) || (r = On(t)) || e && t && "number" === typeof t.length) {
            r && (t = r);

            var _n2 = 0,
                i = function i() {};

            return {
              s: i,
              n: function n() {
                return _n2 >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[_n2++]
                };
              },
              e: function e(t) {
                throw t;
              },
              f: i
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var a,
            o = !0,
            u = !1;
        return {
          s: function s() {
            r = Dt()(t);
          },
          n: function n() {
            var t = r.next();
            return o = t.done, t;
          },
          e: function e(t) {
            u = !0, a = t;
          },
          f: function f() {
            try {
              o || null == r["return"] || r["return"]();
            } finally {
              if (u) throw a;
            }
          }
        };
      }

      function On(t, e) {
        var r;

        if (t) {
          if ("string" === typeof t) return Cn(t, e);
          var n = Ht()(r = Object.prototype.toString.call(t)).call(r, 8, -1);
          return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? yt()(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Cn(t, e) : void 0;
        }
      }

      function Cn(t, e) {
        (null == e || e > t.length) && (e = t.length);

        for (var r = 0, n = new Array(e); r < e; r++) {
          n[r] = t[r];
        }

        return n;
      }

      function En(t) {
        var e = Mn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Mn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var _n = function (t) {
        it()(r, t);
        var e = En(r);

        function r(t, n, i) {
          var a;
          V()(this, r), a = e.call(this, t, n, i), a.type = "font", a.glyphs = {}, a.horizAdvX = a.getAttribute("horiz-adv-x").getNumber();
          var o,
              u = t.definitions,
              s = Et()(a),
              c = s.children,
              f = Pn(c);

          try {
            for (f.s(); !(o = f.n()).done;) {
              var l = o.value;

              switch (l.type) {
                case "font-face":
                  a.fontFace = l;
                  var h = l.getStyle("font-family");
                  h.hasValue() && (u[h.getString()] = Et()(a));
                  break;

                case "missing-glyph":
                  a.missingGlyph = l;
                  break;

                case "glyph":
                  var p = l;
                  p.arabicForm ? (a.isRTL = !0, a.isArabic = !0, "undefined" === typeof a.glyphs[p.unicode] && (a.glyphs[p.unicode] = {}), a.glyphs[p.unicode][p.arabicForm] = p) : a.glyphs[p.unicode] = p;
                  break;

                default:
              }
            }
          } catch (v) {
            f.e(v);
          } finally {
            f.f();
          }

          return a;
        }

        return I()(r, [{
          key: "render",
          value: function value() {}
        }]), r;
      }(Ze);

      function Nn(t) {
        var e = Rn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Rn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Vn = function (t) {
        it()(r, t);
        var e = Nn(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "font-face", a.ascent = a.getAttribute("ascent").getNumber(), a.descent = a.getAttribute("descent").getNumber(), a.unitsPerEm = a.getAttribute("units-per-em").getNumber(), a;
        }

        return r;
      }(Ze);

      function Dn(t) {
        var e = In();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function In() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Ln = function (t) {
        it()(r, t);
        var e = Dn(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "missing-glyph", t.horizAdvX = 0, t;
        }

        return r;
      }(Ar);

      function jn(t) {
        var e = zn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function zn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Fn = function (t) {
        it()(r, t);
        var e = jn(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "glyph", a.horizAdvX = a.getAttribute("horiz-adv-x").getNumber(), a.unicode = a.getAttribute("unicode").getString(), a.arabicForm = a.getAttribute("arabic-form").getString(), a;
        }

        return r;
      }(Ar);

      function Bn(t) {
        var e = Un();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Un() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Hn = function (t) {
        it()(r, t);
        var e = Bn(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "tref", t;
        }

        return I()(r, [{
          key: "getText",
          value: function value() {
            var t = this.getHrefAttribute().getDefinition();

            if (t) {
              var e = t.children[0];
              if (e) return e.getText();
            }

            return "";
          }
        }]), r;
      }(hr);

      function Xn(t) {
        var e = Yn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Yn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var qn = function (t) {
        it()(r, t);
        var e = Xn(r);

        function r(t, n, i) {
          var a, o;
          V()(this, r), o = e.call(this, t, n, i), o.type = "a";
          var u = n.childNodes,
              s = u[0],
              c = u.length > 0 && X()(a = yt()(u)).call(a, function (t) {
            return 3 === t.nodeType;
          });
          return o.hasText = c, o.text = c ? o.getTextFromNode(s) : "", o;
        }

        return I()(r, [{
          key: "getText",
          value: function value() {
            return this.text;
          }
        }, {
          key: "renderChildren",
          value: function value(t) {
            if (this.hasText) {
              St()(st()(r.prototype), "renderChildren", this).call(this, t);
              var e = this.document,
                  n = this.x,
                  i = this.y,
                  a = e.screen.mouse,
                  o = new Te(e, "fontSize", ar.parse(e.ctx.font).fontSize);
              a.isWorking() && a.checkBoundingBox(this, new or(n, i - o.getPixels("y"), n + this.measureText(t), i));
            } else if (this.children.length > 0) {
              var u = new nn(this.document, null);
              u.children = this.children, u.parent = this, u.render(t);
            }
          }
        }, {
          key: "onClick",
          value: function value() {
            var t = this.document.window;
            t && t.open(this.getHrefAttribute().getString());
          }
        }, {
          key: "onMouseMove",
          value: function value() {
            var t = this.document.ctx;
            t.canvas.style.cursor = "pointer";
          }
        }]), r;
      }(hr);

      function Qn(t, e) {
        var r;

        if ("undefined" === typeof Bt.a || null == zt()(t)) {
          if (Lt()(t) || (r = Wn(t)) || e && t && "number" === typeof t.length) {
            r && (t = r);

            var _n3 = 0,
                i = function i() {};

            return {
              s: i,
              n: function n() {
                return _n3 >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[_n3++]
                };
              },
              e: function e(t) {
                throw t;
              },
              f: i
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var a,
            o = !0,
            u = !1;
        return {
          s: function s() {
            r = Dt()(t);
          },
          n: function n() {
            var t = r.next();
            return o = t.done, t;
          },
          e: function e(t) {
            u = !0, a = t;
          },
          f: function f() {
            try {
              o || null == r["return"] || r["return"]();
            } finally {
              if (u) throw a;
            }
          }
        };
      }

      function Wn(t, e) {
        var r;

        if (t) {
          if ("string" === typeof t) return Gn(t, e);
          var n = Ht()(r = Object.prototype.toString.call(t)).call(r, 8, -1);
          return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? yt()(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gn(t, e) : void 0;
        }
      }

      function Gn(t, e) {
        (null == e || e > t.length) && (e = t.length);

        for (var r = 0, n = new Array(e); r < e; r++) {
          n[r] = t[r];
        }

        return n;
      }

      function $n(t, e) {
        var r = P()(t);

        if (A.a) {
          var n = A()(t);
          e && (n = S()(n).call(n, function (e) {
            return b()(t, e).enumerable;
          })), r.push.apply(r, n);
        }

        return r;
      }

      function Zn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r,
              n = null != arguments[e] ? arguments[e] : {};
          if (e % 2) x()(r = $n(Object(n), !0)).call(r, function (e) {
            N()(t, e, n[e]);
          });else if (y.a) v()(t, y()(n));else {
            var i;
            x()(i = $n(Object(n))).call(i, function (e) {
              h()(t, e, b()(n, e));
            });
          }
        }

        return t;
      }

      function Jn(t) {
        var e = Kn();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Kn() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var ti = function (t) {
        it()(r, t);
        var e = Jn(r);

        function r(t, n, i) {
          var a;
          V()(this, r), a = e.call(this, t, n, i), a.type = "textPath", a.textWidth = 0, a.textHeight = 0, a.pathLength = -1, a.glyphInfo = null, a.letterSpacingCache = [], a.measuresCache = new Yt.a([["", 0]]);
          var o = a.getHrefAttribute().getDefinition();
          return a.text = a.getTextFromNode(), a.dataArray = a.parsePathData(o), a;
        }

        return I()(r, [{
          key: "getText",
          value: function value() {
            return this.text;
          }
        }, {
          key: "path",
          value: function value(t) {
            var e = this.dataArray;
            t && t.beginPath(), x()(e).call(e, function (e) {
              var r = e.type,
                  n = e.points;

              switch (r) {
                case wr.LINE_TO:
                  t && t.lineTo(n[0], n[1]);
                  break;

                case wr.MOVE_TO:
                  t && t.moveTo(n[0], n[1]);
                  break;

                case wr.CURVE_TO:
                  t && t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                  break;

                case wr.QUAD_TO:
                  t && t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                  break;

                case wr.ARC:
                  var i = f()(n, 8),
                      a = i[0],
                      o = i[1],
                      u = i[2],
                      s = i[3],
                      c = i[4],
                      l = i[5],
                      h = i[6],
                      p = i[7],
                      v = u > s ? u : s,
                      d = u > s ? 1 : u / s,
                      y = u > s ? s / u : 1;
                  t && (t.translate(a, o), t.rotate(h), t.scale(d, y), t.arc(0, 0, v, c, c + l, Boolean(1 - p)), t.scale(1 / d, 1 / y), t.rotate(-h), t.translate(-a, -o));
                  break;

                case wr.CLOSE_PATH:
                  t && t.closePath();
                  break;
              }
            });
          }
        }, {
          key: "renderChildren",
          value: function value(t) {
            this.setTextData(t), t.save();
            var e = this.parent.getStyle("text-decoration").getString(),
                r = this.getFontSize(),
                n = this.glyphInfo,
                i = t.fillStyle;
            "underline" === e && t.beginPath(), x()(n).call(n, function (n, i) {
              var a = n.p0,
                  o = n.p1,
                  u = n.rotation,
                  s = n.text;
              t.save(), t.translate(a.x, a.y), t.rotate(u), t.fillStyle && t.fillText(s, 0, 0), t.strokeStyle && t.strokeText(s, 0, 0), t.restore(), "underline" === e && (0 === i && t.moveTo(a.x, a.y + r / 8), t.lineTo(o.x, o.y + r / 5));
            }), "underline" === e && (t.lineWidth = r / 20, t.strokeStyle = i, t.stroke(), t.closePath()), t.restore();
          }
        }, {
          key: "getLetterSpacingAt",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return this.letterSpacingCache[t] || 0;
          }
        }, {
          key: "findSegmentToFitChar",
          value: function value(t, e, r, n, i, a, o, u, s) {
            var c = a,
                f = this.measureText(t, u);
            " " === u && "justify" === e && r < n && (f += (n - r) / i), s > -1 && (c += this.getLetterSpacingAt(s));
            var l = this.textHeight / 20,
                h = this.getEquidistantPointOnPath(c, l, 0),
                p = this.getEquidistantPointOnPath(c + f, l, 0),
                v = {
              p0: h,
              p1: p
            },
                d = h && p ? Math.atan2(p.y - h.y, p.x - h.x) : 0;

            if (o) {
              var y = Math.cos(Math.PI / 2 + d) * o,
                  g = Math.cos(-d) * o;
              v.p0 = Zn(Zn({}, h), {}, {
                x: h.x + y,
                y: h.y + g
              }), v.p1 = Zn(Zn({}, p), {}, {
                x: p.x + y,
                y: p.y + g
              });
            }

            return c += f, {
              offset: c,
              segment: v,
              rotation: d
            };
          }
        }, {
          key: "measureText",
          value: function value(t, e) {
            var r = this.measuresCache,
                n = e || this.getText();
            if (r.has(n)) return r.get(n);
            var i = this.measureTargetText(t, n);
            return r.set(n, i), i;
          }
        }, {
          key: "setTextData",
          value: function value(t) {
            var e,
                r = this;

            if (!this.glyphInfo) {
              var n = this.getText(),
                  i = n.split(""),
                  a = n.split(" ").length - 1,
                  o = s()(e = this.parent.getAttribute("dx").split()).call(e, function (t) {
                return t.getPixels("x");
              }),
                  u = this.parent.getAttribute("dy").getPixels("y"),
                  c = this.parent.getStyle("text-anchor").getString("start"),
                  f = this.getStyle("letter-spacing"),
                  l = this.parent.getStyle("letter-spacing"),
                  h = 0;
              f.hasValue() && "inherit" !== f.getValue() ? f.hasValue() && "initial" !== f.getValue() && "unset" !== f.getValue() && (h = f.getPixels()) : h = l.getPixels();
              var p = [],
                  v = n.length;
              this.letterSpacingCache = p;

              for (var d = 0; d < v; d++) {
                p.push("undefined" !== typeof o[d] ? o[d] : h);
              }

              var y = F()(p).call(p, function (t, e, r) {
                return 0 === r ? 0 : t + e || 0;
              }, 0),
                  g = this.measureText(t),
                  m = Math.max(g + y, 0);
              this.textWidth = g, this.textHeight = this.getFontSize(), this.glyphInfo = [];
              var b = this.getPathLength(),
                  w = this.getStyle("startOffset").getNumber(0) * b,
                  S = 0;
              "middle" !== c && "center" !== c || (S = -m / 2), "end" !== c && "right" !== c || (S = -m), S += w, x()(i).call(i, function (e, n) {
                var o = r.findSegmentToFitChar(t, c, m, b, a, S, u, e, n),
                    s = o.offset,
                    f = o.segment,
                    l = o.rotation;
                S = s, f.p0 && f.p1 && r.glyphInfo.push({
                  text: i[n],
                  p0: f.p0,
                  p1: f.p1,
                  rotation: l
                });
              });
            }
          }
        }, {
          key: "parsePathData",
          value: function value(t) {
            if (this.pathLength = -1, !t) return [];
            var e = [],
                r = t.pathParser;
            r.reset();

            while (!r.isEnd()) {
              var n = r.current,
                  i = n ? n.x : 0,
                  a = n ? n.y : 0,
                  o = r.next(),
                  u = o.type,
                  s = [];

              switch (o.type) {
                case wr.MOVE_TO:
                  this.pathM(r, s);
                  break;

                case wr.LINE_TO:
                  u = this.pathL(r, s);
                  break;

                case wr.HORIZ_LINE_TO:
                  u = this.pathH(r, s);
                  break;

                case wr.VERT_LINE_TO:
                  u = this.pathV(r, s);
                  break;

                case wr.CURVE_TO:
                  this.pathC(r, s);
                  break;

                case wr.SMOOTH_CURVE_TO:
                  u = this.pathS(r, s);
                  break;

                case wr.QUAD_TO:
                  this.pathQ(r, s);
                  break;

                case wr.SMOOTH_QUAD_TO:
                  u = this.pathT(r, s);
                  break;

                case wr.ARC:
                  s = this.pathA(r);
                  break;

                case wr.CLOSE_PATH:
                  Ar.pathZ(r);
                  break;
              }

              o.type !== wr.CLOSE_PATH ? e.push({
                type: u,
                points: s,
                start: {
                  x: i,
                  y: a
                },
                pathLength: this.calcLength(i, a, u, s)
              }) : e.push({
                type: wr.CLOSE_PATH,
                points: [],
                pathLength: 0
              });
            }

            return e;
          }
        }, {
          key: "pathM",
          value: function value(t, e) {
            var r = Ar.pathM(t).point,
                n = r.x,
                i = r.y;
            e.push(n, i);
          }
        }, {
          key: "pathL",
          value: function value(t, e) {
            var r = Ar.pathL(t).point,
                n = r.x,
                i = r.y;
            return e.push(n, i), wr.LINE_TO;
          }
        }, {
          key: "pathH",
          value: function value(t, e) {
            var r = Ar.pathH(t).point,
                n = r.x,
                i = r.y;
            return e.push(n, i), wr.LINE_TO;
          }
        }, {
          key: "pathV",
          value: function value(t, e) {
            var r = Ar.pathV(t).point,
                n = r.x,
                i = r.y;
            return e.push(n, i), wr.LINE_TO;
          }
        }, {
          key: "pathC",
          value: function value(t, e) {
            var r = Ar.pathC(t),
                n = r.point,
                i = r.controlPoint,
                a = r.currentPoint;
            e.push(n.x, n.y, i.x, i.y, a.x, a.y);
          }
        }, {
          key: "pathS",
          value: function value(t, e) {
            var r = Ar.pathS(t),
                n = r.point,
                i = r.controlPoint,
                a = r.currentPoint;
            return e.push(n.x, n.y, i.x, i.y, a.x, a.y), wr.CURVE_TO;
          }
        }, {
          key: "pathQ",
          value: function value(t, e) {
            var r = Ar.pathQ(t),
                n = r.controlPoint,
                i = r.currentPoint;
            e.push(n.x, n.y, i.x, i.y);
          }
        }, {
          key: "pathT",
          value: function value(t, e) {
            var r = Ar.pathT(t),
                n = r.controlPoint,
                i = r.currentPoint;
            return e.push(n.x, n.y, i.x, i.y), wr.QUAD_TO;
          }
        }, {
          key: "pathA",
          value: function value(t) {
            var e = Ar.pathA(t),
                r = e.rX,
                n = e.rY,
                i = e.sweepFlag,
                a = e.xAxisRotation,
                o = e.centp,
                u = e.a1,
                s = e.ad;
            return 0 === i && s > 0 && (s -= 2 * Math.PI), 1 === i && s < 0 && (s += 2 * Math.PI), [o.x, o.y, r, n, u, s, a, i];
          }
        }, {
          key: "calcLength",
          value: function value(t, e, r, n) {
            var i = 0,
                a = null,
                o = null,
                u = 0;

            switch (r) {
              case wr.LINE_TO:
                return this.getLineLength(t, e, n[0], n[1]);

              case wr.CURVE_TO:
                for (i = 0, a = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), u = .01; u <= 1; u += .01) {
                  o = this.getPointOnCubicBezier(u, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o;
                }

                return i;

              case wr.QUAD_TO:
                for (i = 0, a = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), u = .01; u <= 1; u += .01) {
                  o = this.getPointOnQuadraticBezier(u, t, e, n[0], n[1], n[2], n[3]), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o;
                }

                return i;

              case wr.ARC:
                i = 0;
                var s = n[4],
                    c = n[5],
                    f = n[4] + c,
                    l = Math.PI / 180;
                if (Math.abs(s - f) < l && (l = Math.abs(s - f)), a = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], s, 0), c < 0) for (u = s - l; u > f; u -= l) {
                  o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o;
                } else for (u = s + l; u < f; u += l) {
                  o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), i += this.getLineLength(a.x, a.y, o.x, o.y), a = o;
                }
                return o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], f, 0), i += this.getLineLength(a.x, a.y, o.x, o.y), i;
            }

            return 0;
          }
        }, {
          key: "getPointOnLine",
          value: function value(t, e, r, n, i) {
            var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : r,
                u = (i - r) / (n - e + ve),
                s = Math.sqrt(t * t / (1 + u * u));
            n < e && (s *= -1);
            var c = u * s,
                f = null;
            if (n === e) f = {
              x: a,
              y: o + c
            };else if ((o - r) / (a - e + ve) === u) f = {
              x: a + s,
              y: o + c
            };else {
              var l = 0,
                  h = 0,
                  p = this.getLineLength(e, r, n, i);
              if (p < ve) return null;
              var v = (a - e) * (n - e) + (o - r) * (i - r);
              v /= p * p, l = e + v * (n - e), h = r + v * (i - r);
              var d = this.getLineLength(a, o, l, h),
                  y = Math.sqrt(t * t - d * d);
              s = Math.sqrt(y * y / (1 + u * u)), n < e && (s *= -1), c = u * s, f = {
                x: l + s,
                y: h + c
              };
            }
            return f;
          }
        }, {
          key: "getPointOnPath",
          value: function value(t) {
            var e = this.getPathLength(),
                r = 0,
                n = null;
            if (t < -5e-5 || t - 5e-5 > e) return null;
            var i,
                a = this.dataArray,
                o = Qn(a);

            try {
              for (o.s(); !(i = o.n()).done;) {
                var u = i.value;

                if (!u || !(u.pathLength < 5e-5 || r + u.pathLength + 5e-5 < t)) {
                  var s = t - r,
                      c = 0;

                  switch (u.type) {
                    case wr.LINE_TO:
                      n = this.getPointOnLine(s, u.start.x, u.start.y, u.points[0], u.points[1], u.start.x, u.start.y);
                      break;

                    case wr.ARC:
                      var f = u.points[4],
                          l = u.points[5],
                          h = u.points[4] + l;
                      if (c = f + s / u.pathLength * l, l < 0 && c < h || l >= 0 && c > h) break;
                      n = this.getPointOnEllipticalArc(u.points[0], u.points[1], u.points[2], u.points[3], c, u.points[6]);
                      break;

                    case wr.CURVE_TO:
                      c = s / u.pathLength, c > 1 && (c = 1), n = this.getPointOnCubicBezier(c, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3], u.points[4], u.points[5]);
                      break;

                    case wr.QUAD_TO:
                      c = s / u.pathLength, c > 1 && (c = 1), n = this.getPointOnQuadraticBezier(c, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3]);
                      break;

                    default:
                  }

                  if (n) return n;
                  break;
                }

                r += u.pathLength;
              }
            } catch (p) {
              o.e(p);
            } finally {
              o.f();
            }

            return null;
          }
        }, {
          key: "getLineLength",
          value: function value(t, e, r, n) {
            return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
          }
        }, {
          key: "getPathLength",
          value: function value() {
            var t;
            -1 === this.pathLength && (this.pathLength = F()(t = this.dataArray).call(t, function (t, e) {
              return e.pathLength > 0 ? t + e.pathLength : t;
            }, 0));
            return this.pathLength;
          }
        }, {
          key: "getPointOnCubicBezier",
          value: function value(t, e, r, n, i, a, o, u, s) {
            var c = u * xe(t) + a * me(t) + n * be(t) + e * we(t),
                f = s * xe(t) + o * me(t) + i * be(t) + r * we(t);
            return {
              x: c,
              y: f
            };
          }
        }, {
          key: "getPointOnQuadraticBezier",
          value: function value(t, e, r, n, i, a, o) {
            var u = a * Se(t) + n * ke(t) + e * Ae(t),
                s = o * Se(t) + i * ke(t) + r * Ae(t);
            return {
              x: u,
              y: s
            };
          }
        }, {
          key: "getPointOnEllipticalArc",
          value: function value(t, e, r, n, i, a) {
            var o = Math.cos(a),
                u = Math.sin(a),
                s = {
              x: r * Math.cos(i),
              y: n * Math.sin(i)
            };
            return {
              x: t + (s.x * o - s.y * u),
              y: e + (s.x * u + s.y * o)
            };
          }
        }, {
          key: "buildEquidistantCache",
          value: function value(t, e) {
            var r = this.getPathLength(),
                n = e || .25,
                i = t || r / 100;

            if (!this.equidistantCache || this.equidistantCache.step !== i || this.equidistantCache.precision !== n) {
              this.equidistantCache = {
                step: i,
                precision: n,
                points: []
              };

              for (var a = 0, o = 0; o <= r; o += n) {
                var u = this.getPointOnPath(o),
                    s = this.getPointOnPath(o + n);
                u && s && (a += this.getLineLength(u.x, u.y, s.x, s.y), a >= i && (this.equidistantCache.points.push({
                  x: u.x,
                  y: u.y,
                  distance: o
                }), a -= i));
              }
            }
          }
        }, {
          key: "getEquidistantPointOnPath",
          value: function value(t, e, r) {
            if (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5) return null;
            var n = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
            return this.equidistantCache.points[n] || null;
          }
        }]), r;
      }(hr);

      function ei(t) {
        var e = ri();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function ri() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var ni = function (t) {
        it()(r, t);
        var e = ei(r);

        function r(t, n, i) {
          var a;
          V()(this, r), a = e.call(this, t, n, i), a.type = "image", a.loaded = !1;
          var o = a.getHrefAttribute().getString();
          if (!o) return ot()(a);
          var u = /\.svg$/.test(o);
          return t.images.push(Et()(a)), u ? a.loadSvg(o) : a.loadImage(o), a.isSvg = u, a;
        }

        return I()(r, [{
          key: "loadImage",
          value: function () {
            var t = M()(C.a.mark(function t(e) {
              var r;
              return C.a.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0, t.next = 3, this.document.createImage(e);

                    case 3:
                      r = t.sent, this.image = r, t.next = 10;
                      break;

                    case 7:
                      t.prev = 7, t.t0 = t["catch"](0), console.error('Error while loading image "'.concat(e, '":'), t.t0);

                    case 10:
                      this.loaded = !0;

                    case 11:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this, [[0, 7]]);
            }));

            function e(e) {
              return t.apply(this, arguments);
            }

            return e;
          }()
        }, {
          key: "loadSvg",
          value: function () {
            var t = M()(C.a.mark(function t(e) {
              var r, n;
              return C.a.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0, t.next = 3, this.document.fetch(e);

                    case 3:
                      return r = t.sent, t.next = 6, r.text();

                    case 6:
                      n = t.sent, this.image = n, t.next = 13;
                      break;

                    case 10:
                      t.prev = 10, t.t0 = t["catch"](0), console.error('Error while loading image "'.concat(e, '":'), t.t0);

                    case 13:
                      this.loaded = !0;

                    case 14:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this, [[0, 10]]);
            }));

            function e(e) {
              return t.apply(this, arguments);
            }

            return e;
          }()
        }, {
          key: "renderChildren",
          value: function value(t) {
            var e = this.document,
                r = this.image,
                n = this.loaded,
                i = this.getAttribute("x").getPixels("x"),
                a = this.getAttribute("y").getPixels("y"),
                o = this.getStyle("width").getPixels("x"),
                u = this.getStyle("height").getPixels("y");

            if (n && r && o && u) {
              if (t.save(), this.isSvg) e.canvg.forkString(t, this.image, {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                ignoreDimensions: !0,
                ignoreClear: !0,
                offsetX: i,
                offsetY: a,
                scaleWidth: o,
                scaleHeight: u
              }).render();else {
                var s = this.image;
                t.translate(i, a), e.setViewBox({
                  ctx: t,
                  aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                  width: o,
                  desiredWidth: s.width,
                  height: u,
                  desiredHeight: s.height
                }), this.loaded && ("undefined" === typeof s.complete || s.complete) && t.drawImage(s, 0, 0);
              }
              t.restore();
            }
          }
        }, {
          key: "getBoundingBox",
          value: function value() {
            var t = this.getAttribute("x").getPixels("x"),
                e = this.getAttribute("y").getPixels("y"),
                r = this.getStyle("width").getPixels("x"),
                n = this.getStyle("height").getPixels("y");
            return new or(t, e, t + r, e + n);
          }
        }]), r;
      }(cr);

      function ii(t) {
        var e = ai();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function ai() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var oi = function (t) {
        it()(r, t);
        var e = ii(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "symbol", t;
        }

        return I()(r, [{
          key: "render",
          value: function value(t) {}
        }]), r;
      }(cr),
          ui = function () {
        function t(e) {
          V()(this, t), this.document = e, this.loaded = !1, e.fonts.push(this);
        }

        return I()(t, [{
          key: "load",
          value: function () {
            var t = M()(C.a.mark(function t(e, r) {
              var n, i, a, o;
              return C.a.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0, i = this.document, t.next = 4, i.canvg.parser.load(r);

                    case 4:
                      a = t.sent, o = a.getElementsByTagName("font"), x()(n = yt()(o)).call(n, function (t) {
                        var r = i.createElement(t);
                        i.definitions[e] = r;
                      }), t.next = 12;
                      break;

                    case 9:
                      t.prev = 9, t.t0 = t["catch"](0), console.error('Error while loading font "'.concat(r, '":'), t.t0);

                    case 12:
                      this.loaded = !0;

                    case 13:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this, [[0, 9]]);
            }));

            function e(e, r) {
              return t.apply(this, arguments);
            }

            return e;
          }()
        }]), t;
      }();

      function si(t) {
        var e = ci();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function ci() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var fi = function (t) {
        it()(r, t);
        var e = si(r);

        function r(t, n, i) {
          var a, o;
          V()(this, r), o = e.call(this, t, n, i), o.type = "style";
          var u = Zt(s()(a = yt()(n.childNodes)).call(a, function (t) {
            return t.data;
          }).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")),
              c = u.split("}");
          return x()(c).call(c, function (e) {
            var r = J()(e).call(e);

            if (r) {
              var n = r.split("{"),
                  i = n[0].split(","),
                  a = n[1].split(";");
              x()(i).call(i, function (e) {
                var r = J()(e).call(e);

                if (r) {
                  var n = t.styles[r] || {};

                  if (x()(a).call(a, function (e) {
                    var r,
                        i,
                        a = bt()(e).call(e, ":"),
                        o = J()(r = e.substr(0, a)).call(r),
                        u = J()(i = e.substr(a + 1, e.length - a)).call(i);
                    o && u && (n[o] = new Te(t, o, u));
                  }), t.styles[r] = n, t.stylesSpecificity[r] = pe(r), "@font-face" === r) {
                    var i = n["font-family"].getString().replace(/"|'/g, ""),
                        o = n.src.getString().split(",");
                    x()(o).call(o, function (e) {
                      if (bt()(e).call(e, 'format("svg")') > 0) {
                        var r = ne(e);
                        r && new ui(t).load(i, r);
                      }
                    });
                  }
                }
              });
            }
          }), o;
        }

        return r;
      }(Ze);

      function li(t) {
        var e = hi();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function hi() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      fi.parseExternalUrl = ne;

      var pi = function (t) {
        it()(r, t);
        var e = li(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "use", t;
        }

        return I()(r, [{
          key: "setContext",
          value: function value(t) {
            St()(st()(r.prototype), "setContext", this).call(this, t);
            var e = this.getAttribute("x"),
                n = this.getAttribute("y");
            e.hasValue() && t.translate(e.getPixels("x"), 0), n.hasValue() && t.translate(0, n.getPixels("y"));
          }
        }, {
          key: "path",
          value: function value(t) {
            var e = this.element;
            e && e.path(t);
          }
        }, {
          key: "renderChildren",
          value: function value(t) {
            var e = this.document,
                r = this.element;

            if (r) {
              var n = r;

              if ("symbol" === r.type && (n = new Or(e, null), n.attributes.viewBox = new Te(e, "viewBox", r.getAttribute("viewBox").getString()), n.attributes.preserveAspectRatio = new Te(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), n.attributes.overflow = new Te(e, "overflow", r.getAttribute("overflow").getString()), n.children = r.children, r.styles.opacity = new Te(e, "opacity", this.calculateOpacity())), "svg" === n.type) {
                var i = this.getStyle("width", !1, !0),
                    a = this.getStyle("height", !1, !0);
                i.hasValue() && (n.attributes.width = new Te(e, "width", i.getString())), a.hasValue() && (n.attributes.height = new Te(e, "height", a.getString()));
              }

              var o = n.parent;
              n.parent = this, n.render(t), n.parent = o;
            }
          }
        }, {
          key: "getBoundingBox",
          value: function value(t) {
            var e = this.element;
            return e ? e.getBoundingBox(t) : null;
          }
        }, {
          key: "elementTransform",
          value: function value() {
            var t = this.document,
                e = this.element;
            return $e.fromElement(t, e);
          }
        }, {
          key: "element",
          get: function get() {
            return this._element || (this._element = this.getHrefAttribute().getDefinition()), this._element;
          }
        }]), r;
      }(cr);

      function vi(t) {
        var e = di();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function di() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      function yi(t, e, r, n, i, a) {
        return t[r * n * 4 + 4 * e + a];
      }

      function gi(t, e, r, n, i, a, o) {
        t[r * n * 4 + 4 * e + a] = o;
      }

      function xi(t, e, r) {
        var n = t[e];
        return n * r;
      }

      function mi(t, e, r, n) {
        return e + Math.cos(t) * r + Math.sin(t) * n;
      }

      var bi = function (t) {
        it()(r, t);
        var e = vi(r);

        function r(t, n, i) {
          var a;
          V()(this, r), a = e.call(this, t, n, i), a.type = "feColorMatrix";
          var o = te(a.getAttribute("values").getString());

          switch (a.getAttribute("type").getString("matrix")) {
            case "saturate":
              var u = o[0];
              o = [.213 + .787 * u, .715 - .715 * u, .072 - .072 * u, 0, 0, .213 - .213 * u, .715 + .285 * u, .072 - .072 * u, 0, 0, .213 - .213 * u, .715 - .715 * u, .072 + .928 * u, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
              break;

            case "hueRotate":
              var s = o[0] * Math.PI / 180;
              o = [mi(s, .213, .787, -.213), mi(s, .715, -.715, -.715), mi(s, .072, -.072, .928), 0, 0, mi(s, .213, -.213, .143), mi(s, .715, .285, .14), mi(s, .072, -.072, -.283), 0, 0, mi(s, .213, -.213, -.787), mi(s, .715, -.715, .715), mi(s, .072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
              break;

            case "luminanceToAlpha":
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1];
              break;
          }

          return a.matrix = o, a.includeOpacity = a.getAttribute("includeOpacity").hasValue(), a;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t, e, r, n, i) {
            for (var a = this.includeOpacity, o = this.matrix, u = t.getImageData(0, 0, n, i), s = 0; s < i; s++) {
              for (var c = 0; c < n; c++) {
                var f = yi(u.data, c, s, n, i, 0),
                    l = yi(u.data, c, s, n, i, 1),
                    h = yi(u.data, c, s, n, i, 2),
                    p = yi(u.data, c, s, n, i, 3),
                    v = xi(o, 0, f) + xi(o, 1, l) + xi(o, 2, h) + xi(o, 3, p) + xi(o, 4, 1),
                    d = xi(o, 5, f) + xi(o, 6, l) + xi(o, 7, h) + xi(o, 8, p) + xi(o, 9, 1),
                    y = xi(o, 10, f) + xi(o, 11, l) + xi(o, 12, h) + xi(o, 13, p) + xi(o, 14, 1),
                    g = xi(o, 15, f) + xi(o, 16, l) + xi(o, 17, h) + xi(o, 18, p) + xi(o, 19, 1);
                a && (v = d = y = 0, g *= p / 255), gi(u.data, c, s, n, i, 0, v), gi(u.data, c, s, n, i, 1, d), gi(u.data, c, s, n, i, 2, y), gi(u.data, c, s, n, i, 3, g);
              }
            }

            t.clearRect(0, 0, n, i), t.putImageData(u, 0, 0);
          }
        }]), r;
      }(Ze);

      function wi(t) {
        var e = Si();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Si() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var ki = function (t) {
        it()(r, t);
        var e = wi(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "mask", t;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t, e) {
            var n = this.document,
                i = this.getAttribute("x").getPixels("x"),
                a = this.getAttribute("y").getPixels("y"),
                o = this.getStyle("width").getPixels("x"),
                u = this.getStyle("height").getPixels("y");

            if (!o && !u) {
              var s,
                  c = new or();
              x()(s = this.children).call(s, function (e) {
                c.addBoundingBox(e.getBoundingBox(t));
              }), i = Math.floor(c.x1), a = Math.floor(c.y1), o = Math.floor(c.width), u = Math.floor(c.height);
            }

            var f = this.removeStyles(e, r.ignoreStyles),
                l = n.createCanvas(i + o, a + u),
                h = l.getContext("2d");
            n.screen.setDefaults(h), this.renderChildren(h), new bi(n, {
              nodeType: 1,
              childNodes: [],
              attributes: [{
                nodeName: "type",
                value: "luminanceToAlpha"
              }, {
                nodeName: "includeOpacity",
                value: "true"
              }]
            }).apply(h, 0, 0, i + o, a + u);
            var p = n.createCanvas(i + o, a + u),
                v = p.getContext("2d");
            n.screen.setDefaults(v), e.render(v), v.globalCompositeOperation = "destination-in", v.fillStyle = h.createPattern(l, "no-repeat"), v.fillRect(0, 0, i + o, a + u), t.fillStyle = v.createPattern(p, "no-repeat"), t.fillRect(0, 0, i + o, a + u), this.restoreStyles(e, f);
          }
        }, {
          key: "render",
          value: function value(t) {}
        }]), r;
      }(Ze);

      function Ai(t) {
        var e = Ti();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Ti() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      ki.ignoreStyles = ["mask", "transform", "clip-path"];

      var Pi = function Pi() {},
          Oi = function (t) {
        it()(r, t);
        var e = Ai(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "clipPath", t;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t) {
            var e,
                r = this.document,
                n = Gt()(t),
                i = t.beginPath,
                a = t.closePath;
            n && (n.beginPath = Pi, n.closePath = Pi), Qt()(i, t, []), x()(e = this.children).call(e, function (e) {
              if ("undefined" !== typeof e.path) {
                var i = "undefined" !== typeof e.elementTransform ? e.elementTransform() : null;
                i || (i = $e.fromElement(r, e)), i && i.apply(t), e.path(t), n && (n.closePath = a), i && i.unapply(t);
              }
            }), Qt()(a, t, []), t.clip(), n && (n.beginPath = i, n.closePath = a);
          }
        }, {
          key: "render",
          value: function value(t) {}
        }]), r;
      }(Ze);

      function Ci(t) {
        var e = Ei();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Ei() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Mi = function (t) {
        it()(r, t);
        var e = Ci(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "filter", t;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t, e) {
            var n = this.document,
                i = this.children,
                a = e.getBoundingBox(t);

            if (a) {
              var o = 0,
                  u = 0;
              x()(i).call(i, function (t) {
                var e = t.extraFilterDistance || 0;
                o = Math.max(o, e), u = Math.max(u, e);
              });
              var s = Math.floor(a.width),
                  c = Math.floor(a.height),
                  f = s + 2 * o,
                  l = c + 2 * u;

              if (!(f < 1 || l < 1)) {
                var h = Math.floor(a.x),
                    p = Math.floor(a.y),
                    v = this.removeStyles(e, r.ignoreStyles),
                    d = n.createCanvas(f, l),
                    y = d.getContext("2d");
                n.screen.setDefaults(y), y.translate(-h + o, -p + u), e.render(y), x()(i).call(i, function (t) {
                  "function" === typeof t.apply && t.apply(y, 0, 0, f, l);
                }), t.drawImage(d, 0, 0, f, l, h - o, p - u, f, l), this.restoreStyles(e, v);
              }
            }
          }
        }, {
          key: "render",
          value: function value(t) {}
        }]), r;
      }(Ze);

      function _i(t) {
        var e = Ni();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Ni() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      Mi.ignoreStyles = ["filter", "transform", "clip-path"];

      var Ri = function (t) {
        it()(r, t);

        var e = _i(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "feDropShadow", a.addStylesFromStyleDefinition(), a;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t, e, r, n, i) {}
        }]), r;
      }(Ze);

      function Vi(t) {
        var e = Di();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Di() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Ii = function (t) {
        it()(r, t);
        var e = Vi(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "feMorphology", t;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t, e, r, n, i) {}
        }]), r;
      }(Ze);

      function Li(t) {
        var e = ji();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function ji() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var zi = function (t) {
        it()(r, t);
        var e = Li(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "feComposite", t;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t, e, r, n, i) {}
        }]), r;
      }(Ze);

      function Fi(t) {
        var e = Bi();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Bi() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Ui = function (t) {
        it()(r, t);
        var e = Fi(r);

        function r(t, n, i) {
          var a;
          return V()(this, r), a = e.call(this, t, n, i), a.type = "feGaussianBlur", a.blurRadius = Math.floor(a.getAttribute("stdDeviation").getNumber()), a.extraFilterDistance = a.blurRadius, a;
        }

        return I()(r, [{
          key: "apply",
          value: function value(t, e, r, n, i) {
            var a = this.document,
                o = this.blurRadius,
                u = a.window ? a.window.document.body : null,
                s = t.canvas;
            s.id = a.getUniqueId(), u && (s.style.display = "none", u.appendChild(s)), Object($t["a"])(s, e, r, n, i, o), u && u.removeChild(s);
          }
        }]), r;
      }(Ze);

      function Hi(t) {
        var e = Xi();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Xi() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Yi = function (t) {
        it()(r, t);
        var e = Hi(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "title", t;
        }

        return r;
      }(Ze);

      function qi(t) {
        var e = Qi();
        return function () {
          var r,
              n = st()(t);

          if (e) {
            var i = st()(this).constructor;
            r = rt()(n, arguments, i);
          } else r = n.apply(this, arguments);

          return ot()(this, r);
        };
      }

      function Qi() {
        if ("undefined" === typeof Reflect || !rt.a) return !1;
        if (rt.a.sham) return !1;
        if ("function" === typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(rt()(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      var Wi = function (t) {
        it()(r, t);
        var e = qi(r);

        function r() {
          var t;
          return V()(this, r), t = e.apply(this, arguments), t.type = "desc", t;
        }

        return r;
      }(Ze),
          Gi = {
        svg: Or,
        rect: Mr,
        circle: Rr,
        ellipse: Ir,
        line: zr,
        polyline: Ur,
        polygon: Yr,
        path: Ar,
        pattern: Wr,
        marker: Zr,
        defs: tn,
        linearGradient: fn,
        radialGradient: pn,
        stop: yn,
        animate: mn,
        animateColor: Sn,
        animateTransform: Tn,
        font: _n,
        "font-face": Vn,
        "missing-glyph": Ln,
        glyph: Fn,
        text: hr,
        tspan: dr,
        tref: Hn,
        a: qn,
        textPath: ti,
        image: ni,
        g: nn,
        symbol: oi,
        style: fi,
        use: pi,
        mask: ki,
        clipPath: Oi,
        filter: Mi,
        feDropShadow: Ri,
        feMorphology: Ii,
        feComposite: zi,
        feColorMatrix: bi,
        feGaussianBlur: Ui,
        title: Yi,
        desc: Wi
      };

      function $i(t, e) {
        var r = P()(t);

        if (A.a) {
          var n = A()(t);
          e && (n = S()(n).call(n, function (e) {
            return b()(t, e).enumerable;
          })), r.push.apply(r, n);
        }

        return r;
      }

      function Zi(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r,
              n = null != arguments[e] ? arguments[e] : {};
          if (e % 2) x()(r = $i(Object(n), !0)).call(r, function (e) {
            N()(t, e, n[e]);
          });else if (y.a) v()(t, y()(n));else {
            var i;
            x()(i = $i(Object(n))).call(i, function (e) {
              h()(t, e, b()(n, e));
            });
          }
        }

        return t;
      }

      function Ji(t, e) {
        var r = document.createElement("canvas");
        return r.width = t, r.height = e, r;
      }

      function Ki(t) {
        return ta.apply(this, arguments);
      }

      function ta() {
        return ta = M()(C.a.mark(function t(e) {
          var r,
              n,
              i = arguments;
          return C.a.wrap(function (t) {
            while (1) {
              switch (t.prev = t.next) {
                case 0:
                  return r = i.length > 1 && void 0 !== i[1] && i[1], n = document.createElement("img"), r && (n.crossOrigin = "Anonymous"), t.abrupt("return", new q.a(function (t, r) {
                    n.onload = function () {
                      t(n);
                    }, n.onerror = function () {
                      r();
                    }, n.src = e;
                  }));

                case 4:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        })), ta.apply(this, arguments);
      }

      var ea = function () {
        function t(e) {
          var r,
              n,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              a = i.rootEmSize,
              o = void 0 === a ? 12 : a,
              u = i.emSize,
              s = void 0 === u ? 12 : u,
              c = i.createCanvas,
              f = void 0 === c ? t.createCanvas : c,
              l = i.createImage,
              h = void 0 === l ? t.createImage : l,
              p = i.anonymousCrossOrigin;
          V()(this, t), this.canvg = e, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = e.screen, this.rootEmSize = o, this.emSize = s, this.createCanvas = f, this.createImage = this.bindCreateImage(h, p), this.screen.wait(W()(r = this.isImagesLoaded).call(r, this)), this.screen.wait(W()(n = this.isFontsLoaded).call(n, this));
        }

        return I()(t, [{
          key: "bindCreateImage",
          value: function value(t, e) {
            return "boolean" === typeof e ? function (r, n) {
              return t(r, "boolean" === typeof n ? n : e);
            } : t;
          }
        }, {
          key: "popEmSize",
          value: function value() {
            var t = this.emSizeStack;
            t.pop();
          }
        }, {
          key: "getUniqueId",
          value: function value() {
            return "canvg".concat(++this.uniqueId);
          }
        }, {
          key: "isImagesLoaded",
          value: function value() {
            var t;
            return X()(t = this.images).call(t, function (t) {
              return t.loaded;
            });
          }
        }, {
          key: "isFontsLoaded",
          value: function value() {
            var t;
            return X()(t = this.fonts).call(t, function (t) {
              return t.loaded;
            });
          }
        }, {
          key: "createDocumentElement",
          value: function value(t) {
            var e = this.createElement(t.documentElement);
            return e.root = !0, e.addStylesFromStyleDefinition(), this.documentElement = e, e;
          }
        }, {
          key: "createElement",
          value: function value(e) {
            var r = e.nodeName.replace(/^[^:]+:/, ""),
                n = t.elementTypes[r];
            return "undefined" !== typeof n ? new n(this, e) : new tr(this, e);
          }
        }, {
          key: "createTextNode",
          value: function value(t) {
            return new xr(this, t);
          }
        }, {
          key: "setViewBox",
          value: function value(t) {
            this.screen.setViewBox(Zi({
              document: this
            }, t));
          }
        }, {
          key: "window",
          get: function get() {
            return this.screen.window;
          }
        }, {
          key: "fetch",
          get: function get() {
            return this.screen.fetch;
          }
        }, {
          key: "ctx",
          get: function get() {
            return this.screen.ctx;
          }
        }, {
          key: "emSize",
          get: function get() {
            var t = this.emSizeStack;
            return t[t.length - 1];
          },
          set: function set(t) {
            var e = this.emSizeStack;
            e.push(t);
          }
        }]), t;
      }();

      function ra(t, e) {
        var r = P()(t);

        if (A.a) {
          var n = A()(t);
          e && (n = S()(n).call(n, function (e) {
            return b()(t, e).enumerable;
          })), r.push.apply(r, n);
        }

        return r;
      }

      function na(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r,
              n = null != arguments[e] ? arguments[e] : {};
          if (e % 2) x()(r = ra(Object(n), !0)).call(r, function (e) {
            N()(t, e, n[e]);
          });else if (y.a) v()(t, y()(n));else {
            var i;
            x()(i = ra(Object(n))).call(i, function (e) {
              h()(t, e, b()(n, e));
            });
          }
        }

        return t;
      }

      ea.createCanvas = Ji, ea.createImage = Ki, ea.elementTypes = Gi;

      var ia = function () {
        function t(e, r) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          V()(this, t), this.parser = new Ve(n), this.screen = new _e(e, n), this.options = n;
          var i = new ea(this, n),
              a = i.createDocumentElement(r);
          this.document = i, this.documentElement = a;
        }

        return I()(t, [{
          key: "fork",
          value: function value(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t.from(e, r, na(na({}, this.options), n));
          }
        }, {
          key: "forkString",
          value: function value(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t.fromString(e, r, na(na({}, this.options), n));
          }
        }, {
          key: "ready",
          value: function value() {
            return this.screen.ready();
          }
        }, {
          key: "isReady",
          value: function value() {
            return this.screen.isReady();
          }
        }, {
          key: "render",
          value: function () {
            var t = M()(C.a.mark(function t() {
              var e,
                  r = arguments;
              return C.a.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return e = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.start(na({
                        enableRedraw: !0,
                        ignoreAnimation: !0,
                        ignoreMouse: !0
                      }, e)), t.next = 4, this.ready();

                    case 4:
                      this.stop();

                    case 5:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e() {
              return t.apply(this, arguments);
            }

            return e;
          }()
        }, {
          key: "start",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = this.documentElement,
                r = this.screen,
                n = this.options;
            r.start(e, na(na({
              enableRedraw: !0
            }, n), t));
          }
        }, {
          key: "stop",
          value: function value() {
            this.screen.stop();
          }
        }, {
          key: "resize",
          value: function value(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this.documentElement.resize(t, e, r);
          }
        }], [{
          key: "from",
          value: function () {
            var e = M()(C.a.mark(function e(r, n) {
              var i,
                  a,
                  o,
                  u = arguments;
              return C.a.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return i = u.length > 2 && void 0 !== u[2] ? u[2] : {}, a = new Ve(i), e.next = 4, a.parse(n);

                    case 4:
                      return o = e.sent, e.abrupt("return", new t(r, o, i));

                    case 6:
                    case "end":
                      return e.stop();
                  }
                }
              }, e);
            }));

            function r(t, r) {
              return e.apply(this, arguments);
            }

            return r;
          }()
        }, {
          key: "fromString",
          value: function value(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = new Ve(n),
                a = i.parseFromString(r);
            return new t(e, a, n);
          }
        }]), t;
      }();

      function aa() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.DOMParser,
            r = {
          window: null,
          ignoreAnimation: !0,
          ignoreMouse: !0,
          DOMParser: e,
          createCanvas: function createCanvas(t, e) {
            return new OffscreenCanvas(t, e);
          },
          createImage: function createImage(t) {
            return M()(C.a.mark(function e() {
              var r, n, i;
              return C.a.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, fetch(t);

                    case 2:
                      return r = e.sent, e.next = 5, r.blob();

                    case 5:
                      return n = e.sent, e.next = 8, createImageBitmap(n);

                    case 8:
                      return i = e.sent, e.abrupt("return", i);

                    case 10:
                    case "end":
                      return e.stop();
                  }
                }
              }, e);
            }))();
          }
        };
        return "undefined" === typeof DOMParser && "undefined" !== typeof e || Ot()(r, "DOMParser"), r;
      }

      function oa(t) {
        var e = t.DOMParser,
            r = t.canvas,
            n = t.fetch;
        return {
          window: null,
          ignoreAnimation: !0,
          ignoreMouse: !0,
          DOMParser: e,
          fetch: n,
          createCanvas: r.createCanvas,
          createImage: r.loadImage
        };
      }

      var ua = Object.freeze({
        __proto__: null,
        offscreen: aa,
        node: oa
      });
      e["default"] = ia;
    }.call(this, r("4362"));
  },
  "0dc8": function dc8(t, e, r) {
    t.exports = r("fc75");
  },
  "0e43": function e43(t, e, r) {
    var n = r("a38c");
    t.exports = n;
  },
  "0e67": function e67(t, e, r) {
    var n = r("9bfb");
    n("iterator");
  },
  "0f59": function f59(t, e, r) {
    var n = r("9717");
    t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(n);
  },
  "0f79": function f79(t, e, r) {
    t.exports = r("3c9f");
  },
  "0f8e": function f8e(t, e, r) {
    var n = r("9bfb");
    n("matcher");
  },
  1316: function _(t, e, r) {
    t.exports = r("9cd3");
  },
  "147b": function b(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("dee0").filter,
        a = r("9c96"),
        o = a("filter");
    n({
      target: "Array",
      proto: !0,
      forced: !o
    }, {
      filter: function filter(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  "14b1": function b1(t, e, r) {
    t.exports = r("5c68");
  },
  "14df": function df(t, e, r) {
    var n = r("9883"),
        i = r("0cf0"),
        a = r("a205"),
        o = r("6f8d");

    t.exports = n("Reflect", "ownKeys") || function (t) {
      var e = i.f(o(t)),
          r = a.f;
      return r ? e.concat(r(t)) : e;
    };
  },
  1561: function _(t, e) {
    var r = Math.ceil,
        n = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  1691: function _(t, e) {
    function r(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var r = 0, n = new Array(e); r < e; r++) {
        n[r] = t[r];
      }

      return n;
    }

    t.exports = r, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "16f1": function f1(t, e, r) {
    r("5145"), r("3e47");
    var n = r("d9f3");
    t.exports = n;
  },
  "17c1": function c1(t, e, r) {
    var n = r("bcb4");
    t.exports = n;
  },
  1875: function _(t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  1967: function _(t, e, r) {
    var n = r("3ac6"),
        i = r("ff96").trim,
        a = r("81f0"),
        o = n.parseInt,
        u = /^[+-]?0[Xx]/,
        s = 8 !== o(a + "08") || 22 !== o(a + "0x16");
    t.exports = s ? function (t, e) {
      var r = i(String(t));
      return o(r, e >>> 0 || (u.test(r) ? 16 : 10));
    } : o;
  },
  "1b0d": function b0d(t, e, r) {
    var n = r("9412"),
        i = r("da43"),
        a = Array.prototype,
        o = String.prototype;

    t.exports = function (t) {
      var e = t.includes;
      return t === a || t instanceof Array && e === a.includes ? n : "string" === typeof t || t === o || t instanceof String && e === o.includes ? i : e;
    };
  },
  "1ba9": function ba9(t, e, r) {
    r("8c3c");
    var n = r("764b");
    t.exports = n.Reflect.get;
  },
  "1c0a": function c0a(t, e, r) {
    "use strict";

    var n = r("d63b"),
        i = r("8f95");
    t.exports = n ? {}.toString : function () {
      return "[object " + i(this) + "]";
    };
  },
  "1c29": function c29(t, e, r) {
    r("fc93"), r("6f89"), r("8b7b"), r("e363"), r("64db"), r("22a9"), r("9080"), r("0e67"), r("e699"), r("e7cc"), r("2e85"), r("980e"), r("9ac4"), r("274e"), r("8d05"), r("ef09"), r("aa1b"), r("522d"), r("8176"), r("d1ac");
    var n = r("764b");
    t.exports = n.Symbol;
  },
  "1d3a": function d3a(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("dfdb"),
        a = r("6220"),
        o = r("4508"),
        u = r("6725"),
        s = r("a421"),
        c = r("6c15"),
        f = r("0363"),
        l = r("9c96"),
        h = l("slice"),
        p = f("species"),
        v = [].slice,
        d = Math.max;
    n({
      target: "Array",
      proto: !0,
      forced: !h
    }, {
      slice: function slice(t, e) {
        var r,
            n,
            f,
            l = s(this),
            h = u(l.length),
            y = o(t, h),
            g = o(void 0 === e ? h : e, h);
        if (a(l) && (r = l.constructor, "function" != typeof r || r !== Array && !a(r.prototype) ? i(r) && (r = r[p], null === r && (r = void 0)) : r = void 0, r === Array || void 0 === r)) return v.call(l, y, g);

        for (n = new (void 0 === r ? Array : r)(d(g - y, 0)), f = 0; y < g; y++, f++) {
          y in l && c(n, f, l[y]);
        }

        return n.length = f, n;
      }
    });
  },
  "1e54": function e54(t, e, r) {
    var n = r("5e0b");
    t.exports = n;
  },
  "1e63": function e63(t, e, r) {
    var n = r("4aa6"),
        i = r("06fa");
    t.exports = !!Object.getOwnPropertySymbols && !i(function () {
      var t = Symbol();
      return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41;
    });
  },
  "1e75": function e75(t, e, r) {
    t.exports = r("2d3f");
  },
  "21b8": function b8(t, e, r) {
    var n = r("a5eb"),
        i = r("e9d9");
    n({
      target: "Function",
      proto: !0
    }, {
      bind: i
    });
  },
  "22a9": function a9(t, e, r) {
    var n = r("9bfb");
    n("hasInstance");
  },
  2364: function _(t, e, r) {
    r("0e67"), r("3e47"), r("5145");
    var n = r("beea");
    t.exports = n.f("iterator");
  },
  "24b4": function b4(t, e, r) {
    r("5145");
    var n = r("bc0d"),
        i = r("8f95"),
        a = Array.prototype,
        o = {
      DOMTokenList: !0,
      NodeList: !0
    };

    t.exports = function (t) {
      var e = t.forEach;
      return t === a || t instanceof Array && e === a.forEach || o.hasOwnProperty(i(t)) ? n : e;
    };
  },
  "25a6": function a6(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("dee0").some,
        a = r("9f61"),
        o = a("some");
    n({
      target: "Array",
      proto: !0,
      forced: !o
    }, {
      some: function some(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  2616: function _(t, e, r) {
    var n = r("0363"),
        i = r("7463"),
        a = n("iterator"),
        o = Array.prototype;

    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || o[a] === t);
    };
  },
  "266f": function f(t, e, r) {
    var n = r("9bfb");
    n("patternMatch");
  },
  "26aa": function aa(t, e, r) {
    r("fc93");
    var n = r("a169");
    t.exports = n("Array").concat;
  },
  "274e": function e(t, _e2, r) {
    var n = r("9bfb");
    n("split");
  },
  "27ac": function ac(t, e, r) {
    var n = r("f4c9");
    t.exports = n;
  },
  "27d1": function d1(t, e, r) {
    var n = r("bc59");
    t.exports = n;
  },
  2874: function _(t, e, r) {
    var n = r("d63b"),
        i = r("4180").f,
        a = r("0273"),
        o = r("78e7"),
        u = r("1c0a"),
        s = r("0363"),
        c = s("toStringTag");

    t.exports = function (t, e, r, s) {
      if (t) {
        var f = r ? t : t.prototype;
        o(f, c) || i(f, c, {
          configurable: !0,
          value: e
        }), s && !n && a(f, "toString", u);
      }
    };
  },
  "298b": function b(t, e, r) {
    t.exports = r("7c74");
  },
  "2a0a": function a0a(t, e, r) {
    "use strict";

    var n = r("0cae"),
        i = r("766b");
    t.exports = n("Map", function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, i);
  },
  "2b99": function b99(t, e, r) {
    var n = r("2d0f");
    t.exports = n;
  },
  "2c6c": function c6c(t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  },
  "2c8f": function c8f(t, e, r) {
    var n = r("b887");
    t.exports = n;
  },
  "2d0f": function d0f(t, e, r) {
    r("932a");
    var n = r("764b");
    t.exports = n.Reflect.deleteProperty;
  },
  "2d3f": function d3f(t, e, r) {
    var n = r("930e");
    t.exports = n;
  },
  "2d80": function d80(t, e, r) {
    t.exports = r("0e43");
  },
  "2e85": function e85(t, e, r) {
    var n = r("9bfb");
    n("replace");
  },
  "2ec7": function ec7(t, e, r) {
    var n = r("716a");
    t.exports = n;
  },
  "2f5a": function f5a(t, e, r) {
    var n,
        i,
        a,
        o = r("96e9"),
        u = r("3ac6"),
        s = r("dfdb"),
        c = r("0273"),
        f = r("78e7"),
        l = r("7685"),
        h = r("b2ed"),
        p = r("6e9a"),
        v = "Object already initialized",
        d = u.WeakMap,
        y = function y(t) {
      return a(t) ? i(t) : n(t, {});
    },
        g = function g(t) {
      return function (e) {
        var r;
        if (!s(e) || (r = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return r;
      };
    };

    if (o || l.state) {
      var x = l.state || (l.state = new d()),
          m = x.get,
          b = x.has,
          w = x.set;
      n = function n(t, e) {
        if (b.call(x, t)) throw new TypeError(v);
        return e.facade = t, w.call(x, t, e), e;
      }, i = function i(t) {
        return m.call(x, t) || {};
      }, a = function a(t) {
        return b.call(x, t);
      };
    } else {
      var S = h("state");
      p[S] = !0, n = function n(t, e) {
        if (f(t, S)) throw new TypeError(v);
        return e.facade = t, c(t, S, e), e;
      }, i = function i(t) {
        return f(t, S) ? t[S] : {};
      }, a = function a(t) {
        return f(t, S);
      };
    }

    t.exports = {
      set: n,
      get: i,
      has: a,
      enforce: y,
      getterFor: g
    };
  },
  "2f74": function f74(t, e, r) {
    var n = r("68ec");
    t.exports = n;
  },
  "2f97": function f97(t, e, r) {
    var n = r("dfdb");

    t.exports = function (t) {
      if (!n(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  3002: function _(t, e, r) {
    t.exports = r("96a8");
  },
  "310f": function f(t, e, r) {
    var n = r("042b"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.every;
      return t === i || t instanceof Array && e === i.every ? n : e;
    };
  },
  3327: function _(t, e, r) {
    r("21b8");
    var n = r("a169");
    t.exports = n("Function").bind;
  },
  3436: function _(t, e, r) {
    t.exports = r("2c8f");
  },
  "362a": function a(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("7042"),
        a = r("f354"),
        o = r("06fa"),
        u = r("9883"),
        s = r("b0ea"),
        c = r("7ef9"),
        f = r("d666"),
        l = !!a && o(function () {
      a.prototype["finally"].call({
        then: function then() {}
      }, function () {});
    });

    if (n({
      target: "Promise",
      proto: !0,
      real: !0,
      forced: l
    }, {
      "finally": function _finally(t) {
        var e = s(this, u("Promise")),
            r = "function" == typeof t;
        return this.then(r ? function (r) {
          return c(e, t()).then(function () {
            return r;
          });
        } : t, r ? function (r) {
          return c(e, t()).then(function () {
            throw r;
          });
        } : t);
      }
    }), !i && "function" == typeof a) {
      var h = u("Promise").prototype["finally"];
      a.prototype["finally"] !== h && f(a.prototype, "finally", h, {
        unsafe: !0
      });
    }
  },
  "36c5": function c5(t, e, r) {
    var n = r("bcfb"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.reverse;
      return t === i || t instanceof Array && e === i.reverse ? n : e;
    };
  },
  "373a": function a(t, e, r) {
    var n = r("2364");
    t.exports = n;
  },
  3818: function _(t, e, r) {
    t.exports = r("2ec7");
  },
  3876: function _(t, e, r) {
    var n = r("af5f"),
        i = String.prototype;

    t.exports = function (t) {
      var e = t.startsWith;
      return "string" === typeof t || t === i || t instanceof String && e === i.startsWith ? n : e;
    };
  },
  3960: function _(t, e, r) {
    t.exports = r("a915");
  },
  "3ac6": function ac6(t, e, r) {
    (function (e) {
      var r = function r(t) {
        return t && t.Math == Math && t;
      };

      t.exports = r("object" == (typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis)) && globalThis) || r("object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) && window) || r("object" == (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) && self) || r("object" == (0, _typeof2["default"])(e) && e) || function () {
        return this;
      }() || Function("return this")();
    }).call(this, r("c8ba"));
  },
  "3b4c": function b4c(t, e, r) {
    t.exports = r("abf2");
  },
  "3b7b": function b7b(t, e, r) {
    r("bbe3");
    var n = r("a169");
    t.exports = n("Array").indexOf;
  },
  "3bc0": function bc0(t, e, r) {
    var n = r("fff5"),
        i = r("3436"),
        a = r("4dfb");

    function o(e, r, u) {
      return "undefined" !== typeof Reflect && n ? (t.exports = o = n, t.exports["default"] = t.exports, t.exports.__esModule = !0) : (t.exports = o = function o(t, e, r) {
        var n = a(t, e);

        if (n) {
          var o = i(n, e);
          return o.get ? o.get.call(r) : o.value;
        }
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0), o(e, r, u || e);
    }

    t.exports = o, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "3c9f": function c9f(t, e, r) {
    var n = r("0ca2");
    t.exports = n;
  },
  "3e47": function e47(t, e, r) {
    "use strict";

    var n = r("cbd0").charAt,
        i = r("2f5a"),
        a = r("4056"),
        o = "String Iterator",
        u = i.set,
        s = i.getterFor(o);
    a(String, "String", function (t) {
      u(this, {
        type: o,
        string: String(t),
        index: 0
      });
    }, function () {
      var t,
          e = s(this),
          r = e.string,
          i = e.index;
      return i >= r.length ? {
        value: void 0,
        done: !0
      } : (t = n(r, i), e.index += t.length, {
        value: t,
        done: !1
      });
    });
  },
  "3e476": function e476(t, e, r) {
    var n = r("a5eb"),
        i = r("c1b2"),
        a = r("4180");
    n({
      target: "Object",
      stat: !0,
      forced: !i,
      sham: !i
    }, {
      defineProperty: a.f
    });
  },
  "3e80": function e80(t, e) {
    var r = 0,
        n = Math.random();

    t.exports = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + n).toString(36);
    };
  },
  4035: function _(t, e, r) {
    var n = r("e332");
    t.exports = n;
  },
  4056: function _(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("f575"),
        a = r("5779"),
        o = r("ec62"),
        u = r("2874"),
        s = r("0273"),
        c = r("d666"),
        f = r("0363"),
        l = r("7042"),
        h = r("7463"),
        p = r("bb83"),
        v = p.IteratorPrototype,
        d = p.BUGGY_SAFARI_ITERATORS,
        y = f("iterator"),
        g = "keys",
        x = "values",
        m = "entries",
        b = function b() {
      return this;
    };

    t.exports = function (t, e, r, f, p, w, S) {
      i(r, e, f);

      var k,
          A,
          T,
          P = function P(t) {
        if (t === p && _) return _;
        if (!d && t in E) return E[t];

        switch (t) {
          case g:
            return function () {
              return new r(this, t);
            };

          case x:
            return function () {
              return new r(this, t);
            };

          case m:
            return function () {
              return new r(this, t);
            };
        }

        return function () {
          return new r(this);
        };
      },
          O = e + " Iterator",
          C = !1,
          E = t.prototype,
          M = E[y] || E["@@iterator"] || p && E[p],
          _ = !d && M || P(p),
          N = "Array" == e && E.entries || M;

      if (N && (k = a(N.call(new t())), v !== Object.prototype && k.next && (l || a(k) === v || (o ? o(k, v) : "function" != typeof k[y] && s(k, y, b)), u(k, O, !0, !0), l && (h[O] = b))), p == x && M && M.name !== x && (C = !0, _ = function _() {
        return M.call(this);
      }), l && !S || E[y] === _ || s(E, y, _), h[e] = _, p) if (A = {
        values: P(x),
        keys: w ? _ : P(g),
        entries: P(m)
      }, S) for (T in A) {
        (d || C || !(T in E)) && c(E, T, A[T]);
      } else n({
        target: e,
        proto: !0,
        forced: d || C
      }, A);
      return A;
    };
  },
  "410b": function b(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("dee0").map,
        a = r("9c96"),
        o = a("map");
    n({
      target: "Array",
      proto: !0,
      forced: !o
    }, {
      map: function map(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  4180: function _(t, e, r) {
    var n = r("c1b2"),
        i = r("77b2"),
        a = r("6f8d"),
        o = r("7168"),
        u = Object.defineProperty;
    e.f = n ? u : function (t, e, r) {
      if (a(t), e = o(e, !0), a(r), i) try {
        return u(t, e, r);
      } catch (n) {}
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
      return "value" in r && (t[e] = r.value), t;
    };
  },
  4202: function _(t, e, r) {
    r("147b");
    var n = r("a169");
    t.exports = n("Array").filter;
  },
  "42e6": function e6(t, e, r) {
    var n = r("06fa");
    t.exports = !n(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  4344: function _(t, e, r) {
    var n = r("dfdb"),
        i = r("6220"),
        a = r("0363"),
        o = a("species");

    t.exports = function (t, e) {
      var r;
      return i(t) && (r = t.constructor, "function" != typeof r || r !== Array && !i(r.prototype) ? n(r) && (r = r[o], null === r && (r = void 0)) : r = void 0), new (void 0 === r ? Array : r)(0 === e ? 0 : e);
    };
  },
  "44a4": function a4(t, e, r) {
    t.exports = r("8eeb");
  },
  "44b3": function b3(t, e, r) {
    r("4c06");
    var n = r("a169");
    t.exports = n("Array").reduce;
  },
  "44ba": function ba(t, e, r) {
    var n = r("c1b2"),
        i = r("7043"),
        a = r("2c6c"),
        o = r("a421"),
        u = r("7168"),
        s = r("78e7"),
        c = r("77b2"),
        f = Object.getOwnPropertyDescriptor;
    e.f = n ? f : function (t, e) {
      if (t = o(t), e = u(e, !0), c) try {
        return f(t, e);
      } catch (r) {}
      if (s(t, e)) return a(!i.f.call(t, e), t[e]);
    };
  },
  4508: function _(t, e, r) {
    var n = r("1561"),
        i = Math.max,
        a = Math.min;

    t.exports = function (t, e) {
      var r = n(t);
      return r < 0 ? i(r + e, 0) : a(r, e);
    };
  },
  4573: function _(t, e, r) {
    t.exports = r("24b4");
  },
  "464e": function e(t, _e3, r) {
    var n = r("a5eb");
    n({
      target: "Date",
      stat: !0
    }, {
      now: function now() {
        return new Date().getTime();
      }
    });
  },
  "471b": function b(t, e, r) {
    "use strict";

    var n = r("6414"),
        i = r("4fff"),
        a = r("faaa"),
        o = r("2616"),
        u = r("6725"),
        s = r("6c15"),
        c = r("0b7b");

    t.exports = function (t) {
      var e,
          r,
          f,
          l,
          h,
          p,
          v = i(t),
          d = "function" == typeof this ? this : Array,
          y = arguments.length,
          g = y > 1 ? arguments[1] : void 0,
          x = void 0 !== g,
          m = c(v),
          b = 0;
      if (x && (g = n(g, y > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && o(m)) for (e = u(v.length), r = new d(e); e > b; b++) {
        p = x ? g(v[b], b) : v[b], s(r, b, p);
      } else for (l = m.call(v), h = l.next, r = new d(); !(f = h.call(l)).done; b++) {
        p = x ? a(l, g, [f.value, b], !0) : f.value, s(r, b, p);
      }
      return r.length = b, r;
    };
  },
  "47da": function da(t, e, r) {
    r("5adb");
    var n = r("764b");
    t.exports = n.Object.getOwnPropertyDescriptors;
  },
  "484e": function e(t, _e4, r) {
    var n = r("a5eb"),
        i = r("471b"),
        a = r("7de7"),
        o = !a(function (t) {
      Array.from(t);
    });
    n({
      target: "Array",
      stat: !0,
      forced: o
    }, {
      from: i
    });
  },
  4896: function _(t, e, r) {
    var n,
        i = r("6f8d"),
        a = r("c230"),
        o = r("9e57"),
        u = r("6e9a"),
        s = r("edbd"),
        c = r("7a37"),
        f = r("b2ed"),
        l = ">",
        h = "<",
        p = "prototype",
        v = "script",
        d = f("IE_PROTO"),
        y = function y() {},
        g = function g(t) {
      return h + v + l + t + h + "/" + v + l;
    },
        x = function x(t) {
      t.write(g("")), t.close();
      var e = t.parentWindow.Object;
      return t = null, e;
    },
        m = function m() {
      var t,
          e = c("iframe"),
          r = "java" + v + ":";
      return e.style.display = "none", s.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(g("document.F=Object")), t.close(), t.F;
    },
        _b = function b() {
      try {
        n = document.domain && new ActiveXObject("htmlfile");
      } catch (e) {}

      _b = n ? x(n) : m();
      var t = o.length;

      while (t--) {
        delete _b[p][o[t]];
      }

      return _b();
    };

    u[d] = !0, t.exports = Object.create || function (t, e) {
      var r;
      return null !== t ? (y[p] = i(t), r = new y(), y[p] = null, r[d] = t) : r = _b(), void 0 === e ? r : a(r, e);
    };
  },
  "48fc": function fc(t, e, r) {
    var n = r("62fc");

    function i(t, e, r, i, a, o, u) {
      try {
        var s = t[o](u),
            c = s.value;
      } catch (f) {
        return void r(f);
      }

      s.done ? e(c) : n.resolve(c).then(i, a);
    }

    function a(t) {
      return function () {
        var e = this,
            r = arguments;
        return new n(function (n, a) {
          var o = t.apply(e, r);

          function u(t) {
            i(o, n, a, u, s, "next", t);
          }

          function s(t) {
            i(o, n, a, u, s, "throw", t);
          }

          u(void 0);
        });
      };
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  4929: function _(t, e, r) {
    var n = r("e332");
    t.exports = n;
  },
  "4aa6": function aa6(t, e, r) {
    var n,
        i,
        a = r("3ac6"),
        o = r("9717"),
        u = a.process,
        s = u && u.versions,
        c = s && s.v8;
    c ? (n = c.split("."), i = n[0] < 4 ? 1 : n[0] + n[1]) : o && (n = o.match(/Edge\/(\d+)/), (!n || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/), n && (i = n[1]))), t.exports = i && +i;
  },
  "4c06": function c06(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("e460").left,
        a = r("9f61"),
        o = r("4aa6"),
        u = r("0149"),
        s = a("reduce"),
        c = !u && o > 79 && o < 83;
    n({
      target: "Array",
      proto: !0,
      forced: !s || c
    }, {
      reduce: function reduce(t) {
        return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  "4c19": function c19(t, e, r) {
    var n = r("26aa"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.concat;
      return t === i || t instanceof Array && e === i.concat ? n : e;
    };
  },
  "4dfb": function dfb(t, e, r) {
    var n = r("7989");

    function i(t, e) {
      while (!Object.prototype.hasOwnProperty.call(t, e)) {
        if (t = n(t), null === t) break;
      }

      return t;
    }

    t.exports = i, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "4fff": function fff(t, e, r) {
    var n = r("1875");

    t.exports = function (t) {
      return Object(n(t));
    };
  },
  "505e": function e(t, _e5, r) {
    t.exports = r("17c1");
  },
  5107: function _(t, e, r) {
    r("410b");
    var n = r("a169");
    t.exports = n("Array").map;
  },
  5145: function _(t, e, r) {
    r("9103");
    var n = r("78a2"),
        i = r("3ac6"),
        a = r("8f95"),
        o = r("0273"),
        u = r("7463"),
        s = r("0363"),
        c = s("toStringTag");

    for (var f in n) {
      var l = i[f],
          h = l && l.prototype;
      h && a(h) !== c && o(h, c, f), u[f] = u.Array;
    }
  },
  "522d": function d(t, e, r) {
    var n = r("3ac6"),
        i = r("2874");
    i(n.JSON, "JSON", !0);
  },
  "52d7": function d7(t, e, r) {
    var n = r("b43a"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.fill;
      return t === i || t instanceof Array && e === i.fill ? n : e;
    };
  },
  "52da": function da(t, e, r) {
    t.exports = r("4035");
  },
  "548c": function c(t, e, r) {
    r("84d2");
  },
  "562d": function d(t, e, r) {
    var n = r("6139"),
        i = r("adb0"),
        a = r("5893"),
        o = r("aba2");

    function u(t) {
      return n(t) || i(t) || a(t) || o();
    }

    t.exports = u, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "56c4": function c4(t, e, r) {
    r("a8b3");
    var n = r("a169");
    t.exports = n("Array").forEach;
  },
  "56c5": function c5(t, e, r) {
    var n = r("a5eb"),
        i = r("ec62");
    n({
      target: "Object",
      stat: !0
    }, {
      setPrototypeOf: i
    });
  },
  5779: function _(t, e, r) {
    var n = r("78e7"),
        i = r("4fff"),
        a = r("b2ed"),
        o = r("f5fb"),
        u = a("IE_PROTO"),
        s = Object.prototype;
    t.exports = o ? Object.getPrototypeOf : function (t) {
      return t = i(t), n(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
    };
  },
  5893: function _(t, e, r) {
    r("d3b7"), r("b0c0");
    var n = r("ad99"),
        i = r("a06f"),
        a = r("1691");

    function o(t, e) {
      var r;

      if (t) {
        if ("string" === typeof t) return a(t, e);
        var o = n(r = Object.prototype.toString.call(t)).call(r, 8, -1);
        return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? i(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? a(t, e) : void 0;
      }
    }

    t.exports = o, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "58e1": function e1(t, e) {
    t.exports = function (t) {
      this.ok = !1, this.alpha = 1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = t.replace(/ /g, ""), t = t.toLowerCase();
      var e = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
      };
      t = e[t] || t;

      for (var r = [{
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function process(t) {
          return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3]), parseFloat(t[4])];
        }
      }, {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function process(t) {
          return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
        }
      }, {
        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        example: ["#00ff00", "336699"],
        process: function process(t) {
          return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
        }
      }, {
        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        example: ["#fb0", "f0f"],
        process: function process(t) {
          return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
        }
      }], n = 0; n < r.length; n++) {
        var i = r[n].re,
            a = r[n].process,
            o = i.exec(t);

        if (o) {
          var u = a(o);
          this.r = u[0], this.g = u[1], this.b = u[2], u.length > 3 && (this.alpha = u[3]), this.ok = !0;
        }
      }

      this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
      }, this.toRGBA = function () {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
      }, this.toHex = function () {
        var t = this.r.toString(16),
            e = this.g.toString(16),
            r = this.b.toString(16);
        return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + t + e + r;
      }, this.getHelpXML = function () {
        for (var t = new Array(), n = 0; n < r.length; n++) {
          for (var i = r[n].example, a = 0; a < i.length; a++) {
            t[t.length] = i[a];
          }
        }

        for (var o in e) {
          t[t.length] = o;
        }

        var u = document.createElement("ul");
        u.setAttribute("id", "rgbcolor-examples");

        for (n = 0; n < t.length; n++) {
          try {
            var s = document.createElement("li"),
                c = new RGBColor(t[n]),
                f = document.createElement("div");
            f.style.cssText = "margin: 3px; border: 1px solid black; background:" + c.toHex() + "; color:" + c.toHex(), f.appendChild(document.createTextNode("test"));
            var l = document.createTextNode(" " + t[n] + " -> " + c.toRGB() + " -> " + c.toHex());
            s.appendChild(f), s.appendChild(l), u.appendChild(s);
          } catch (h) {}
        }

        return u;
      };
    };
  },
  "5ab9": function ab9(t, e, r) {
    r("e519");
    var n = r("764b");
    t.exports = n.Array.isArray;
  },
  "5adb": function adb(t, e, r) {
    var n = r("a5eb"),
        i = r("c1b2"),
        a = r("14df"),
        o = r("a421"),
        u = r("44ba"),
        s = r("6c15");
    n({
      target: "Object",
      stat: !0,
      sham: !i
    }, {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
        var e,
            r,
            n = o(t),
            i = u.f,
            c = a(n),
            f = {},
            l = 0;

        while (c.length > l) {
          r = i(n, e = c[l++]), void 0 !== r && s(f, e, r);
        }

        return f;
      }
    });
  },
  "5afb": function afb(t, e, r) {
    var n,
        i,
        a,
        o = r("3ac6"),
        u = r("06fa"),
        s = r("6414"),
        c = r("edbd"),
        f = r("7a37"),
        l = r("0f59"),
        h = r("0149"),
        p = o.location,
        v = o.setImmediate,
        d = o.clearImmediate,
        y = o.process,
        g = o.MessageChannel,
        x = o.Dispatch,
        m = 0,
        b = {},
        w = "onreadystatechange",
        S = function S(t) {
      if (b.hasOwnProperty(t)) {
        var e = b[t];
        delete b[t], e();
      }
    },
        k = function k(t) {
      return function () {
        S(t);
      };
    },
        A = function A(t) {
      S(t.data);
    },
        T = function T(t) {
      o.postMessage(t + "", p.protocol + "//" + p.host);
    };

    v && d || (v = function v(t) {
      var e = [],
          r = 1;

      while (arguments.length > r) {
        e.push(arguments[r++]);
      }

      return b[++m] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e);
      }, n(m), m;
    }, d = function d(t) {
      delete b[t];
    }, h ? n = function n(t) {
      y.nextTick(k(t));
    } : x && x.now ? n = function n(t) {
      x.now(k(t));
    } : g && !l ? (i = new g(), a = i.port2, i.port1.onmessage = A, n = s(a.postMessage, a, 1)) : o.addEventListener && "function" == typeof postMessage && !o.importScripts && p && "file:" !== p.protocol && !u(T) ? (n = T, o.addEventListener("message", A, !1)) : n = w in f("script") ? function (t) {
      c.appendChild(f("script"))[w] = function () {
        c.removeChild(this), S(t);
      };
    } : function (t) {
      setTimeout(k(t), 0);
    }), t.exports = {
      set: v,
      clear: d
    };
  },
  "5b57": function b57(t, e, r) {
    var n = r("6f8d"),
        i = r("2616"),
        a = r("6725"),
        o = r("6414"),
        u = r("0b7b"),
        s = r("8a3b"),
        c = function c(t, e) {
      this.stopped = t, this.result = e;
    };

    t.exports = function (t, e, r) {
      var f,
          l,
          h,
          p,
          v,
          d,
          y,
          g = r && r.that,
          x = !(!r || !r.AS_ENTRIES),
          m = !(!r || !r.IS_ITERATOR),
          b = !(!r || !r.INTERRUPTED),
          w = o(e, g, 1 + x + b),
          S = function S(t) {
        return f && s(f), new c(!0, t);
      },
          k = function k(t) {
        return x ? (n(t), b ? w(t[0], t[1], S) : w(t[0], t[1])) : b ? w(t, S) : w(t);
      };

      if (m) f = t;else {
        if (l = u(t), "function" != typeof l) throw TypeError("Target is not iterable");

        if (i(l)) {
          for (h = 0, p = a(t.length); p > h; h++) {
            if (v = k(t[h]), v && v instanceof c) return v;
          }

          return new c(!1);
        }

        f = l.call(t);
      }
      d = f.next;

      while (!(y = d.call(f)).done) {
        try {
          v = k(y.value);
        } catch (A) {
          throw s(f), A;
        }

        if ("object" == (0, _typeof2["default"])(v) && v && v instanceof c) return v;
      }

      return new c(!1);
    };
  },
  "5c4c": function c4c(t, e, r) {
    var n = r("a0cd");
    t.exports = n;
  },
  "5c68": function c68(t, e, r) {
    var n = r("e392");
    t.exports = n;
  },
  "5d24": function d24(t, e, r) {
    t.exports = r("6426");
  },
  "5e0b": function e0b(t, e, r) {
    r("9103");
    var n = r("a169");
    t.exports = n("Array").values;
  },
  "5e9e": function e9e(t, e, r) {
    "use strict";

    function n(t) {
      return n = "function" === typeof Symbol && "symbol" === (0, _typeof2["default"])(Symbol.iterator) ? function (t) {
        return (0, _typeof2["default"])(t);
      } : function (t) {
        return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : (0, _typeof2["default"])(t);
      }, n(t);
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    r.d(e, "a", function () {
      return s;
    });
    var a = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        o = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

    function u(t, e, r, i, a) {
      if ("string" === typeof t && (t = document.getElementById(t)), !t || "object" !== n(t) || !("getContext" in t)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
      var o = t.getContext("2d");

      try {
        return o.getImageData(e, r, i, a);
      } catch (u) {
        throw new Error("unable to access image data: " + u);
      }
    }

    function s(t, e, r, n, i, a) {
      if (!(isNaN(a) || a < 1)) {
        a |= 0;
        var o = u(t, e, r, n, i);
        o = c(o, e, r, n, i, a), t.getContext("2d").putImageData(o, e, r);
      }
    }

    function c(t, e, r, n, i, u) {
      for (var s, c = t.data, l = 2 * u + 1, h = n - 1, p = i - 1, v = u + 1, d = v * (v + 1) / 2, y = new f(), g = y, x = 1; x < l; x++) {
        g = g.next = new f(), x === v && (s = g);
      }

      g.next = y;

      for (var m = null, b = null, w = 0, S = 0, k = a[u], A = o[u], T = 0; T < i; T++) {
        g = y;

        for (var P = c[S], O = c[S + 1], C = c[S + 2], E = c[S + 3], M = 0; M < v; M++) {
          g.r = P, g.g = O, g.b = C, g.a = E, g = g.next;
        }

        for (var _ = 0, N = 0, R = 0, V = 0, D = v * P, I = v * O, L = v * C, j = v * E, z = d * P, F = d * O, B = d * C, U = d * E, H = 1; H < v; H++) {
          var X = S + ((h < H ? h : H) << 2),
              Y = c[X],
              q = c[X + 1],
              Q = c[X + 2],
              W = c[X + 3],
              G = v - H;
          z += (g.r = Y) * G, F += (g.g = q) * G, B += (g.b = Q) * G, U += (g.a = W) * G, _ += Y, N += q, R += Q, V += W, g = g.next;
        }

        m = y, b = s;

        for (var $ = 0; $ < n; $++) {
          var Z = U * k >> A;

          if (c[S + 3] = Z, 0 !== Z) {
            var J = 255 / Z;
            c[S] = (z * k >> A) * J, c[S + 1] = (F * k >> A) * J, c[S + 2] = (B * k >> A) * J;
          } else c[S] = c[S + 1] = c[S + 2] = 0;

          z -= D, F -= I, B -= L, U -= j, D -= m.r, I -= m.g, L -= m.b, j -= m.a;
          var K = $ + u + 1;
          K = w + (K < h ? K : h) << 2, _ += m.r = c[K], N += m.g = c[K + 1], R += m.b = c[K + 2], V += m.a = c[K + 3], z += _, F += N, B += R, U += V, m = m.next;
          var tt = b,
              et = tt.r,
              rt = tt.g,
              nt = tt.b,
              it = tt.a;
          D += et, I += rt, L += nt, j += it, _ -= et, N -= rt, R -= nt, V -= it, b = b.next, S += 4;
        }

        w += n;
      }

      for (var at = 0; at < n; at++) {
        S = at << 2;
        var ot = c[S],
            ut = c[S + 1],
            st = c[S + 2],
            ct = c[S + 3],
            ft = v * ot,
            lt = v * ut,
            ht = v * st,
            pt = v * ct,
            vt = d * ot,
            dt = d * ut,
            yt = d * st,
            gt = d * ct;
        g = y;

        for (var xt = 0; xt < v; xt++) {
          g.r = ot, g.g = ut, g.b = st, g.a = ct, g = g.next;
        }

        for (var mt = n, bt = 0, wt = 0, St = 0, kt = 0, At = 1; At <= u; At++) {
          S = mt + at << 2;
          var Tt = v - At;
          vt += (g.r = ot = c[S]) * Tt, dt += (g.g = ut = c[S + 1]) * Tt, yt += (g.b = st = c[S + 2]) * Tt, gt += (g.a = ct = c[S + 3]) * Tt, kt += ot, bt += ut, wt += st, St += ct, g = g.next, At < p && (mt += n);
        }

        S = at, m = y, b = s;

        for (var Pt = 0; Pt < i; Pt++) {
          var Ot = S << 2;
          c[Ot + 3] = ct = gt * k >> A, ct > 0 ? (ct = 255 / ct, c[Ot] = (vt * k >> A) * ct, c[Ot + 1] = (dt * k >> A) * ct, c[Ot + 2] = (yt * k >> A) * ct) : c[Ot] = c[Ot + 1] = c[Ot + 2] = 0, vt -= ft, dt -= lt, yt -= ht, gt -= pt, ft -= m.r, lt -= m.g, ht -= m.b, pt -= m.a, Ot = at + ((Ot = Pt + v) < p ? Ot : p) * n << 2, vt += kt += m.r = c[Ot], dt += bt += m.g = c[Ot + 1], yt += wt += m.b = c[Ot + 2], gt += St += m.a = c[Ot + 3], m = m.next, ft += ot = b.r, lt += ut = b.g, ht += st = b.b, pt += ct = b.a, kt -= ot, bt -= ut, wt -= st, St -= ct, b = b.next, S += n;
        }
      }

      return t;
    }

    var f = function t() {
      i(this, t), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
    };
  },
  "5f7d": function f7d(t, e) {
    t.exports = function (t, e, r) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t;
    };
  },
  "5f9e": function f9e(t, e, r) {
    var n = r("4202"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.filter;
      return t === i || t instanceof Array && e === i.filter ? n : e;
    };
  },
  "5f9f": function f9f(t, e, r) {
    var n = r("09e1"),
        i = r("991c");

    function a(t, e) {
      if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = n(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && i(t, e);
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "606e": function e(t, _e6, r) {
    var n = r("5f9e");
    t.exports = n;
  },
  6139: function _(t, e, r) {
    var n = r("1316"),
        i = r("1691");

    function a(t) {
      if (n(t)) return i(t);
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  6220: function _(t, e, r) {
    var n = r("fc48");

    t.exports = Array.isArray || function (t) {
      return "Array" == n(t);
    };
  },
  6271: function _(t, e, r) {
    t.exports = r("373a");
  },
  "62d0": function d0(t, e, r) {
    var n = r("1e63");
    t.exports = n && !Symbol.sham && "symbol" == (0, _typeof2["default"])(Symbol.iterator);
  },
  "62fc": function fc(t, e, r) {
    t.exports = r("984c");
  },
  6326: function _(t, e, r) {
    r("f8b4");
    var n = r("764b");
    t.exports = n.Reflect.construct;
  },
  6386: function _(t, e, r) {
    var n = r("a421"),
        i = r("6725"),
        a = r("4508"),
        o = function o(t) {
      return function (e, r, o) {
        var u,
            s = n(e),
            c = i(s.length),
            f = a(o, c);

        if (t && r != r) {
          while (c > f) {
            if (u = s[f++], u != u) return !0;
          }
        } else for (; c > f; f++) {
          if ((t || f in s) && s[f] === r) return t || f || 0;
        }

        return !t && -1;
      };
    };

    t.exports = {
      includes: o(!0),
      indexOf: o(!1)
    };
  },
  "638c": function c(t, e, r) {
    var n = r("06fa"),
        i = r("fc48"),
        a = "".split;
    t.exports = n(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == i(t) ? a.call(t, "") : Object(t);
    } : Object;
  },
  6414: function _(t, e, r) {
    var n = r("cc94");

    t.exports = function (t, e, r) {
      if (n(t), void 0 === e) return t;

      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };

        case 1:
          return function (r) {
            return t.call(e, r);
          };

        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };

        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  6426: function _(t, e, r) {
    var n = r("ac0c");
    t.exports = n;
  },
  "64db": function db(t, e) {},
  6594: function _(t, e, r) {
    var n = r("6e9a"),
        i = r("dfdb"),
        a = r("78e7"),
        o = r("4180").f,
        u = r("3e80"),
        s = r("42e6"),
        c = u("meta"),
        f = 0,
        l = Object.isExtensible || function () {
      return !0;
    },
        h = function h(t) {
      o(t, c, {
        value: {
          objectID: "O" + f++,
          weakData: {}
        }
      });
    },
        p = function p(t, e) {
      if (!i(t)) return "symbol" == (0, _typeof2["default"])(t) ? t : ("string" == typeof t ? "S" : "P") + t;

      if (!a(t, c)) {
        if (!l(t)) return "F";
        if (!e) return "E";
        h(t);
      }

      return t[c].objectID;
    },
        v = function v(t, e) {
      if (!a(t, c)) {
        if (!l(t)) return !0;
        if (!e) return !1;
        h(t);
      }

      return t[c].weakData;
    },
        d = function d(t) {
      return s && y.REQUIRED && l(t) && !a(t, c) && h(t), t;
    },
        y = t.exports = {
      REQUIRED: !1,
      fastKey: p,
      getWeakData: v,
      onFreeze: d
    };

    n[c] = !0;
  },
  "65b8": function b8(t, e, r) {
    t.exports = r("27ac");
  },
  6725: function _(t, e, r) {
    var n = r("1561"),
        i = Math.min;

    t.exports = function (t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  },
  "680e": function e(t, _e7, r) {
    "use strict";

    var n = r("4fff"),
        i = r("4508"),
        a = r("6725");

    t.exports = function (t) {
      var e = n(this),
          r = a(e.length),
          o = arguments.length,
          u = i(o > 1 ? arguments[1] : void 0, r),
          s = o > 2 ? arguments[2] : void 0,
          c = void 0 === s ? r : i(s, r);

      while (c > u) {
        e[u++] = t;
      }

      return e;
    };
  },
  6813: function _(t, e, r) {
    "use strict";

    var n,
        i,
        a,
        o,
        u = r("a5eb"),
        s = r("7042"),
        c = r("3ac6"),
        f = r("9883"),
        l = r("f354"),
        h = r("d666"),
        p = r("0aea"),
        v = r("ec62"),
        d = r("2874"),
        y = r("d383"),
        g = r("dfdb"),
        x = r("cc94"),
        m = r("5f7d"),
        b = r("e899"),
        w = r("5b57"),
        S = r("7de7"),
        k = r("b0ea"),
        A = r("5afb").set,
        T = r("a0e6"),
        P = r("7ef9"),
        O = r("c2f0"),
        C = r("ad27"),
        E = r("9b8d"),
        M = r("2f5a"),
        _ = r("a0e5"),
        N = r("0363"),
        R = r("e246"),
        V = r("0149"),
        D = r("4aa6"),
        I = N("species"),
        L = "Promise",
        j = M.get,
        z = M.set,
        F = M.getterFor(L),
        B = l && l.prototype,
        _U = l,
        H = B,
        X = c.TypeError,
        Y = c.document,
        q = c.process,
        Q = C.f,
        W = Q,
        G = !!(Y && Y.createEvent && c.dispatchEvent),
        $ = "function" == typeof PromiseRejectionEvent,
        Z = "unhandledrejection",
        J = "rejectionhandled",
        K = 0,
        tt = 1,
        et = 2,
        rt = 1,
        nt = 2,
        it = !1,
        at = _(L, function () {
      var t = b(_U),
          e = t !== String(_U);
      if (!e && 66 === D) return !0;
      if (s && !H["finally"]) return !0;
      if (D >= 51 && /native code/.test(t)) return !1;

      var r = new _U(function (t) {
        t(1);
      }),
          n = function n(t) {
        t(function () {}, function () {});
      },
          i = r.constructor = {};

      return i[I] = n, it = r.then(function () {}) instanceof n, !it || !e && R && !$;
    }),
        ot = at || !S(function (t) {
      _U.all(t)["catch"](function () {});
    }),
        ut = function ut(t) {
      var e;
      return !(!g(t) || "function" != typeof (e = t.then)) && e;
    },
        st = function st(t, e) {
      if (!t.notified) {
        t.notified = !0;
        var r = t.reactions;
        T(function () {
          var n = t.value,
              i = t.state == tt,
              a = 0;

          while (r.length > a) {
            var o,
                u,
                s,
                c = r[a++],
                f = i ? c.ok : c.fail,
                l = c.resolve,
                h = c.reject,
                p = c.domain;

            try {
              f ? (i || (t.rejection === nt && ht(t), t.rejection = rt), !0 === f ? o = n : (p && p.enter(), o = f(n), p && (p.exit(), s = !0)), o === c.promise ? h(X("Promise-chain cycle")) : (u = ut(o)) ? u.call(o, l, h) : l(o)) : h(n);
            } catch (v) {
              p && !s && p.exit(), h(v);
            }
          }

          t.reactions = [], t.notified = !1, e && !t.rejection && ft(t);
        });
      }
    },
        ct = function ct(t, e, r) {
      var n, i;
      G ? (n = Y.createEvent("Event"), n.promise = e, n.reason = r, n.initEvent(t, !1, !0), c.dispatchEvent(n)) : n = {
        promise: e,
        reason: r
      }, !$ && (i = c["on" + t]) ? i(n) : t === Z && O("Unhandled promise rejection", r);
    },
        ft = function ft(t) {
      A.call(c, function () {
        var e,
            r = t.facade,
            n = t.value,
            i = lt(t);
        if (i && (e = E(function () {
          V ? q.emit("unhandledRejection", n, r) : ct(Z, r, n);
        }), t.rejection = V || lt(t) ? nt : rt, e.error)) throw e.value;
      });
    },
        lt = function lt(t) {
      return t.rejection !== rt && !t.parent;
    },
        ht = function ht(t) {
      A.call(c, function () {
        var e = t.facade;
        V ? q.emit("rejectionHandled", e) : ct(J, e, t.value);
      });
    },
        pt = function pt(t, e, r) {
      return function (n) {
        t(e, n, r);
      };
    },
        vt = function vt(t, e, r) {
      t.done || (t.done = !0, r && (t = r), t.value = e, t.state = et, st(t, !0));
    },
        dt = function dt(t, e, r) {
      if (!t.done) {
        t.done = !0, r && (t = r);

        try {
          if (t.facade === e) throw X("Promise can't be resolved itself");
          var n = ut(e);
          n ? T(function () {
            var r = {
              done: !1
            };

            try {
              n.call(e, pt(dt, r, t), pt(vt, r, t));
            } catch (i) {
              vt(r, i, t);
            }
          }) : (t.value = e, t.state = tt, st(t, !1));
        } catch (i) {
          vt({
            done: !1
          }, i, t);
        }
      }
    };

    if (at && (_U = function U(t) {
      m(this, _U, L), x(t), n.call(this);
      var e = j(this);

      try {
        t(pt(dt, e), pt(vt, e));
      } catch (r) {
        vt(e, r);
      }
    }, H = _U.prototype, n = function n(t) {
      z(this, {
        type: L,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: K,
        value: void 0
      });
    }, n.prototype = p(H, {
      then: function then(t, e) {
        var r = F(this),
            n = Q(k(this, _U));
        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = V ? q.domain : void 0, r.parent = !0, r.reactions.push(n), r.state != K && st(r, !1), n.promise;
      },
      "catch": function _catch(t) {
        return this.then(void 0, t);
      }
    }), i = function i() {
      var t = new n(),
          e = j(t);
      this.promise = t, this.resolve = pt(dt, e), this.reject = pt(vt, e);
    }, C.f = Q = function Q(t) {
      return t === _U || t === a ? new i(t) : W(t);
    }, !s && "function" == typeof l && B !== Object.prototype)) {
      o = B.then, it || (h(B, "then", function (t, e) {
        var r = this;
        return new _U(function (t, e) {
          o.call(r, t, e);
        }).then(t, e);
      }, {
        unsafe: !0
      }), h(B, "catch", H["catch"], {
        unsafe: !0
      }));

      try {
        delete B.constructor;
      } catch (yt) {}

      v && v(B, H);
    }

    u({
      global: !0,
      wrap: !0,
      forced: at
    }, {
      Promise: _U
    }), d(_U, L, !1, !0), y(L), a = f(L), u({
      target: L,
      stat: !0,
      forced: at
    }, {
      reject: function reject(t) {
        var e = Q(this);
        return e.reject.call(void 0, t), e.promise;
      }
    }), u({
      target: L,
      stat: !0,
      forced: s || at
    }, {
      resolve: function resolve(t) {
        return P(s && this === a ? _U : this, t);
      }
    }), u({
      target: L,
      stat: !0,
      forced: ot
    }, {
      all: function all(t) {
        var e = this,
            r = Q(e),
            n = r.resolve,
            i = r.reject,
            a = E(function () {
          var r = x(e.resolve),
              a = [],
              o = 0,
              u = 1;
          w(t, function (t) {
            var s = o++,
                c = !1;
            a.push(void 0), u++, r.call(e, t).then(function (t) {
              c || (c = !0, a[s] = t, --u || n(a));
            }, i);
          }), --u || n(a);
        });
        return a.error && i(a.value), r.promise;
      },
      race: function race(t) {
        var e = this,
            r = Q(e),
            n = r.reject,
            i = E(function () {
          var i = x(e.resolve);
          w(t, function (t) {
            i.call(e, t).then(r.resolve, n);
          });
        });
        return i.error && n(i.value), r.promise;
      }
    });
  },
  6850: function _(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("6386").includes,
        a = r("c44e");
    n({
      target: "Array",
      proto: !0
    }, {
      includes: function includes(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), a("includes");
  },
  "68ec": function ec(t, e, r) {
    r("56c5");
    var n = r("764b");
    t.exports = n.Object.setPrototypeOf;
  },
  "6b47": function b47(t, e, r) {
    t.exports = r("96cf");
  },
  "6c15": function c15(t, e, r) {
    "use strict";

    var n = r("7168"),
        i = r("4180"),
        a = r("2c6c");

    t.exports = function (t, e, r) {
      var o = n(e);
      o in t ? i.f(t, o, a(0, r)) : t[o] = r;
    };
  },
  "6c5d": function c5d(t, e, r) {
    var n = r("4c19");
    t.exports = n;
  },
  "6d08": function d08(t, e, r) {
    (function (e) {
      (function () {
        var r, n, i, a, o, u;
        "undefined" !== typeof performance && null !== performance && performance.now ? t.exports = function () {
          return performance.now();
        } : "undefined" !== typeof e && null !== e && e.hrtime ? (t.exports = function () {
          return (r() - o) / 1e6;
        }, n = e.hrtime, r = function r() {
          var t;
          return t = n(), 1e9 * t[0] + t[1];
        }, a = r(), u = 1e9 * e.uptime(), o = a - u) : Date.now ? (t.exports = function () {
          return Date.now() - i;
        }, i = Date.now()) : (t.exports = function () {
          return new Date().getTime() - i;
        }, i = new Date().getTime());
      }).call(this);
    }).call(this, r("4362"));
  },
  "6e9a": function e9a(t, e) {
    t.exports = {};
  },
  "6f89": function f89(t, e) {},
  "6f8d": function f8d(t, e, r) {
    var n = r("dfdb");

    t.exports = function (t) {
      if (!n(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  7042: function _(t, e) {
    t.exports = !0;
  },
  7043: function _(t, e, r) {
    "use strict";

    var n = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        a = i && !n.call({
      1: 2
    }, 1);
    e.f = a ? function (t) {
      var e = i(this, t);
      return !!e && e.enumerable;
    } : n;
  },
  "711e": function e(t, _e8, r) {
    var n = r("a5eb"),
        i = r("680e"),
        a = r("c44e");
    n({
      target: "Array",
      proto: !0
    }, {
      fill: i
    }), a("fill");
  },
  7168: function _(t, e, r) {
    var n = r("dfdb");

    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, i;
      if (e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
      if ("function" == typeof (r = t.valueOf) && !n(i = r.call(t))) return i;
      if (!e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  "716a": function a(t, e, r) {
    r("8e5c"), r("6f89"), r("6813"), r("84d2"), r("75df"), r("362a"), r("3e47"), r("5145");
    var n = r("764b");
    t.exports = n.Promise;
  },
  7201: function _(t, e, r) {
    var n = r("9bfb");
    n("dispose");
  },
  "72a8": function a8(t, e, r) {
    var n = r("1316");

    function i(t) {
      if (n(t)) return t;
    }

    t.exports = i, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  7463: function _(t, e) {
    t.exports = {};
  },
  "74e7": function e7(t, e, r) {
    var n = r("bc59");
    t.exports = n;
  },
  "74fd": function fd(t, e, r) {
    var n = r("9bfb");
    n("observable");
  },
  "75df": function df(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("cc94"),
        a = r("9883"),
        o = r("ad27"),
        u = r("9b8d"),
        s = r("5b57"),
        c = "No one promise resolved";
    n({
      target: "Promise",
      stat: !0
    }, {
      any: function any(t) {
        var e = this,
            r = o.f(e),
            n = r.resolve,
            f = r.reject,
            l = u(function () {
          var r = i(e.resolve),
              o = [],
              u = 0,
              l = 1,
              h = !1;
          s(t, function (t) {
            var i = u++,
                s = !1;
            o.push(void 0), l++, r.call(e, t).then(function (t) {
              s || h || (h = !0, n(t));
            }, function (t) {
              s || h || (s = !0, o[i] = t, --l || f(new (a("AggregateError"))(o, c)));
            });
          }), --l || f(new (a("AggregateError"))(o, c));
        });
        return l.error && f(l.value), r.promise;
      }
    });
  },
  "764b": function b(t, e) {
    t.exports = {};
  },
  "766b": function b(t, e, r) {
    "use strict";

    var n = r("4180").f,
        i = r("4896"),
        a = r("0aea"),
        o = r("6414"),
        u = r("5f7d"),
        s = r("5b57"),
        c = r("4056"),
        f = r("d383"),
        l = r("c1b2"),
        h = r("6594").fastKey,
        p = r("2f5a"),
        v = p.set,
        d = p.getterFor;
    t.exports = {
      getConstructor: function getConstructor(t, e, r, c) {
        var f = t(function (t, n) {
          u(t, f, e), v(t, {
            type: e,
            index: i(null),
            first: void 0,
            last: void 0,
            size: 0
          }), l || (t.size = 0), void 0 != n && s(n, t[c], {
            that: t,
            AS_ENTRIES: r
          });
        }),
            p = d(e),
            y = function y(t, e, r) {
          var n,
              i,
              a = p(t),
              o = g(t, e);
          return o ? o.value = r : (a.last = o = {
            index: i = h(e, !0),
            key: e,
            value: r,
            previous: n = a.last,
            next: void 0,
            removed: !1
          }, a.first || (a.first = o), n && (n.next = o), l ? a.size++ : t.size++, "F" !== i && (a.index[i] = o)), t;
        },
            g = function g(t, e) {
          var r,
              n = p(t),
              i = h(e);
          if ("F" !== i) return n.index[i];

          for (r = n.first; r; r = r.next) {
            if (r.key == e) return r;
          }
        };

        return a(f.prototype, {
          clear: function clear() {
            var t = this,
                e = p(t),
                r = e.index,
                n = e.first;

            while (n) {
              n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete r[n.index], n = n.next;
            }

            e.first = e.last = void 0, l ? e.size = 0 : t.size = 0;
          },
          "delete": function _delete(t) {
            var e = this,
                r = p(e),
                n = g(e, t);

            if (n) {
              var i = n.next,
                  a = n.previous;
              delete r.index[n.index], n.removed = !0, a && (a.next = i), i && (i.previous = a), r.first == n && (r.first = i), r.last == n && (r.last = a), l ? r.size-- : e.size--;
            }

            return !!n;
          },
          forEach: function forEach(t) {
            var e,
                r = p(this),
                n = o(t, arguments.length > 1 ? arguments[1] : void 0, 3);

            while (e = e ? e.next : r.first) {
              n(e.value, e.key, this);

              while (e && e.removed) {
                e = e.previous;
              }
            }
          },
          has: function has(t) {
            return !!g(this, t);
          }
        }), a(f.prototype, r ? {
          get: function get(t) {
            var e = g(this, t);
            return e && e.value;
          },
          set: function set(t, e) {
            return y(this, 0 === t ? 0 : t, e);
          }
        } : {
          add: function add(t) {
            return y(this, t = 0 === t ? 0 : t, t);
          }
        }), l && n(f.prototype, "size", {
          get: function get() {
            return p(this).size;
          }
        }), f;
      },
      setStrong: function setStrong(t, e, r) {
        var n = e + " Iterator",
            i = d(e),
            a = d(n);
        c(t, e, function (t, e) {
          v(this, {
            type: n,
            target: t,
            state: i(t),
            kind: e,
            last: void 0
          });
        }, function () {
          var t = a(this),
              e = t.kind,
              r = t.last;

          while (r && r.removed) {
            r = r.previous;
          }

          return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == e ? {
            value: r.key,
            done: !1
          } : "values" == e ? {
            value: r.value,
            done: !1
          } : {
            value: [r.key, r.value],
            done: !1
          } : (t.target = void 0, {
            value: void 0,
            done: !0
          });
        }, r ? "entries" : "values", !r, !0), f(e);
      }
    };
  },
  7685: function _(t, e, r) {
    var n = r("3ac6"),
        i = r("8fad"),
        a = "__core-js_shared__",
        o = n[a] || i(a, {});
    t.exports = o;
  },
  "77b2": function b2(t, e, r) {
    var n = r("c1b2"),
        i = r("06fa"),
        a = r("7a37");
    t.exports = !n && !i(function () {
      return 7 != Object.defineProperty(a("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  },
  "78a2": function a2(t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  },
  "78b2": function b2(t, e, r) {
    t.exports = r("b5b3");
  },
  "78e7": function e7(t, e, r) {
    var n = r("4fff"),
        i = {}.hasOwnProperty;

    t.exports = Object.hasOwn || function (t, e) {
      return i.call(n(t), e);
    };
  },
  "793c": function c(t, e, r) {
    r("af81");
    var n = r("764b");
    t.exports = n.parseInt;
  },
  7989: function _(t, e, r) {
    var n = r("0b11"),
        i = r("5d24");

    function a(e) {
      return t.exports = a = n ? i : function (t) {
        return t.__proto__ || i(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, a(e);
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "7a37": function a37(t, e, r) {
    var n = r("3ac6"),
        i = r("dfdb"),
        a = n.document,
        o = i(a) && i(a.createElement);

    t.exports = function (t) {
      return o ? a.createElement(t) : {};
    };
  },
  "7c74": function c74(t, e, r) {
    var n = r("b337");
    t.exports = n;
  },
  "7c78": function c78(t, e, r) {
    t.exports = r("b83c");
  },
  "7de7": function de7(t, e, r) {
    var n = r("0363"),
        i = n("iterator"),
        a = !1;

    try {
      var o = 0,
          u = {
        next: function next() {
          return {
            done: !!o++
          };
        },
        "return": function _return() {
          a = !0;
        }
      };
      u[i] = function () {
        return this;
      }, Array.from(u, function () {
        throw 2;
      });
    } catch (s) {}

    t.exports = function (t, e) {
      if (!e && !a) return !1;
      var r = !1;

      try {
        var n = {};
        n[i] = function () {
          return {
            next: function next() {
              return {
                done: r = !0
              };
            }
          };
        }, t(n);
      } catch (s) {}

      return r;
    };
  },
  "7ef9": function ef9(t, e, r) {
    var n = r("6f8d"),
        i = r("dfdb"),
        a = r("ad27");

    t.exports = function (t, e) {
      if (n(t), i(e) && e.constructor === t) return e;
      var r = a.f(t),
          o = r.resolve;
      return o(e), r.promise;
    };
  },
  8012: function _(t, e, r) {
    var n = r("36c5");
    t.exports = n;
  },
  "801c": function c(t, e, r) {
    r("8b7b");
    var n = r("764b");
    t.exports = n.Object.getOwnPropertySymbols;
  },
  8176: function _(t, e) {},
  "81f0": function f0(t, e) {
    t.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  },
  "833c": function c(t, e, r) {
    var n = r("1ba9");
    t.exports = n;
  },
  8383: function _(t, e, r) {
    var n = r("793c");
    t.exports = n;
  },
  "83ee": function ee(t, e, r) {
    var n = r("06fa"),
        i = r("81f0"),
        a = "​᠎";

    t.exports = function (t) {
      return n(function () {
        return !!i[t]() || a[t]() != a || i[t].name !== t;
      });
    };
  },
  "84d2": function d2(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("cc94"),
        a = r("ad27"),
        o = r("9b8d"),
        u = r("5b57");
    n({
      target: "Promise",
      stat: !0
    }, {
      allSettled: function allSettled(t) {
        var e = this,
            r = a.f(e),
            n = r.resolve,
            s = r.reject,
            c = o(function () {
          var r = i(e.resolve),
              a = [],
              o = 0,
              s = 1;
          u(t, function (t) {
            var i = o++,
                u = !1;
            a.push(void 0), s++, r.call(e, t).then(function (t) {
              u || (u = !0, a[i] = {
                status: "fulfilled",
                value: t
              }, --s || n(a));
            }, function (t) {
              u || (u = !0, a[i] = {
                status: "rejected",
                reason: t
              }, --s || n(a));
            });
          }), --s || n(a);
        });
        return c.error && s(c.value), r.promise;
      }
    });
  },
  "84ed": function ed(t, e) {
    function r(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    t.exports = r, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "85d3": function d3(t, e, r) {
    t.exports = r("9a13");
  },
  "898c": function c(t, e, r) {
    t.exports = r("16f1");
  },
  "8a3b": function a3b(t, e, r) {
    var n = r("6f8d");

    t.exports = function (t) {
      var e = t["return"];
      if (void 0 !== e) return n(e.call(t)).value;
    };
  },
  "8b44": function b44(t, e, r) {
    r("8e5c");
  },
  "8b7b": function b7b(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("3ac6"),
        a = r("9883"),
        o = r("7042"),
        u = r("c1b2"),
        s = r("1e63"),
        c = r("62d0"),
        f = r("06fa"),
        l = r("78e7"),
        h = r("6220"),
        p = r("dfdb"),
        v = r("6f8d"),
        d = r("4fff"),
        y = r("a421"),
        g = r("7168"),
        x = r("2c6c"),
        m = r("4896"),
        b = r("a016"),
        w = r("0cf0"),
        S = r("8e11"),
        k = r("a205"),
        A = r("44ba"),
        T = r("4180"),
        P = r("7043"),
        O = r("0273"),
        C = r("d666"),
        E = r("d659"),
        M = r("b2ed"),
        _ = r("6e9a"),
        N = r("3e80"),
        R = r("0363"),
        V = r("beea"),
        D = r("9bfb"),
        I = r("2874"),
        L = r("2f5a"),
        j = r("dee0").forEach,
        z = M("hidden"),
        F = "Symbol",
        B = "prototype",
        U = R("toPrimitive"),
        H = L.set,
        X = L.getterFor(F),
        Y = Object[B],
        _q = i.Symbol,
        Q = a("JSON", "stringify"),
        W = A.f,
        G = T.f,
        $ = S.f,
        Z = P.f,
        J = E("symbols"),
        K = E("op-symbols"),
        tt = E("string-to-symbol-registry"),
        et = E("symbol-to-string-registry"),
        rt = E("wks"),
        nt = i.QObject,
        it = !nt || !nt[B] || !nt[B].findChild,
        at = u && f(function () {
      return 7 != m(G({}, "a", {
        get: function get() {
          return G(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, r) {
      var n = W(Y, e);
      n && delete Y[e], G(t, e, r), n && t !== Y && G(Y, e, n);
    } : G,
        ot = function ot(t, e) {
      var r = J[t] = m(_q[B]);
      return H(r, {
        type: F,
        tag: t,
        description: e
      }), u || (r.description = e), r;
    },
        ut = c ? function (t) {
      return "symbol" == (0, _typeof2["default"])(t);
    } : function (t) {
      return Object(t) instanceof _q;
    },
        st = function st(t, e, r) {
      t === Y && st(K, e, r), v(t);
      var n = g(e, !0);
      return v(r), l(J, n) ? (r.enumerable ? (l(t, z) && t[z][n] && (t[z][n] = !1), r = m(r, {
        enumerable: x(0, !1)
      })) : (l(t, z) || G(t, z, x(1, {})), t[z][n] = !0), at(t, n, r)) : G(t, n, r);
    },
        ct = function ct(t, e) {
      v(t);
      var r = y(e),
          n = b(r).concat(vt(r));
      return j(n, function (e) {
        u && !lt.call(r, e) || st(t, e, r[e]);
      }), t;
    },
        ft = function ft(t, e) {
      return void 0 === e ? m(t) : ct(m(t), e);
    },
        lt = function lt(t) {
      var e = g(t, !0),
          r = Z.call(this, e);
      return !(this === Y && l(J, e) && !l(K, e)) && (!(r || !l(this, e) || !l(J, e) || l(this, z) && this[z][e]) || r);
    },
        ht = function ht(t, e) {
      var r = y(t),
          n = g(e, !0);

      if (r !== Y || !l(J, n) || l(K, n)) {
        var i = W(r, n);
        return !i || !l(J, n) || l(r, z) && r[z][n] || (i.enumerable = !0), i;
      }
    },
        pt = function pt(t) {
      var e = $(y(t)),
          r = [];
      return j(e, function (t) {
        l(J, t) || l(_, t) || r.push(t);
      }), r;
    },
        vt = function vt(t) {
      var e = t === Y,
          r = $(e ? K : y(t)),
          n = [];
      return j(r, function (t) {
        !l(J, t) || e && !l(Y, t) || n.push(J[t]);
      }), n;
    };

    if (s || (_q = function q() {
      if (this instanceof _q) throw TypeError("Symbol is not a constructor");

      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
          e = N(t),
          r = function r(t) {
        this === Y && r.call(K, t), l(this, z) && l(this[z], e) && (this[z][e] = !1), at(this, e, x(1, t));
      };

      return u && it && at(Y, e, {
        configurable: !0,
        set: r
      }), ot(e, t);
    }, C(_q[B], "toString", function () {
      return X(this).tag;
    }), C(_q, "withoutSetter", function (t) {
      return ot(N(t), t);
    }), P.f = lt, T.f = st, A.f = ht, w.f = S.f = pt, k.f = vt, V.f = function (t) {
      return ot(R(t), t);
    }, u && (G(_q[B], "description", {
      configurable: !0,
      get: function get() {
        return X(this).description;
      }
    }), o || C(Y, "propertyIsEnumerable", lt, {
      unsafe: !0
    }))), n({
      global: !0,
      wrap: !0,
      forced: !s,
      sham: !s
    }, {
      Symbol: _q
    }), j(b(rt), function (t) {
      D(t);
    }), n({
      target: F,
      stat: !0,
      forced: !s
    }, {
      "for": function _for(t) {
        var e = String(t);
        if (l(tt, e)) return tt[e];

        var r = _q(e);

        return tt[e] = r, et[r] = e, r;
      },
      keyFor: function keyFor(t) {
        if (!ut(t)) throw TypeError(t + " is not a symbol");
        if (l(et, t)) return et[t];
      },
      useSetter: function useSetter() {
        it = !0;
      },
      useSimple: function useSimple() {
        it = !1;
      }
    }), n({
      target: "Object",
      stat: !0,
      forced: !s,
      sham: !u
    }, {
      create: ft,
      defineProperty: st,
      defineProperties: ct,
      getOwnPropertyDescriptor: ht
    }), n({
      target: "Object",
      stat: !0,
      forced: !s
    }, {
      getOwnPropertyNames: pt,
      getOwnPropertySymbols: vt
    }), n({
      target: "Object",
      stat: !0,
      forced: f(function () {
        k.f(1);
      })
    }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(t) {
        return k.f(d(t));
      }
    }), Q) {
      var dt = !s || f(function () {
        var t = _q();

        return "[null]" != Q([t]) || "{}" != Q({
          a: t
        }) || "{}" != Q(Object(t));
      });
      n({
        target: "JSON",
        stat: !0,
        forced: dt
      }, {
        stringify: function stringify(t, e, r) {
          var n,
              i = [t],
              a = 1;

          while (arguments.length > a) {
            i.push(arguments[a++]);
          }

          if (n = e, (p(e) || void 0 !== t) && !ut(t)) return h(e) || (e = function e(t, _e9) {
            if ("function" == typeof n && (_e9 = n.call(this, t, _e9)), !ut(_e9)) return _e9;
          }), i[1] = e, Q.apply(null, i);
        }
      });
    }

    _q[B][U] || O(_q[B], U, _q[B].valueOf), I(_q, F), _[z] = !0;
  },
  "8c3c": function c3c(t, e, r) {
    var n = r("a5eb"),
        i = r("dfdb"),
        a = r("6f8d"),
        o = r("78e7"),
        u = r("44ba"),
        s = r("5779");

    function c(t, e) {
      var r,
          n,
          f = arguments.length < 3 ? t : arguments[2];
      return a(t) === f ? t[e] : (r = u.f(t, e)) ? o(r, "value") ? r.value : void 0 === r.get ? void 0 : r.get.call(f) : i(n = s(t)) ? c(n, e, f) : void 0;
    }

    n({
      target: "Reflect",
      stat: !0
    }, {
      get: c
    });
  },
  "8c58": function c58(t, e, r) {
    var n = r("0363"),
        i = n("match");

    t.exports = function (t) {
      var e = /./;

      try {
        "/./"[t](e);
      } catch (r) {
        try {
          return e[i] = !1, "/./"[t](e);
        } catch (n) {}
      }

      return !1;
    };
  },
  "8cfd": function cfd(t, e, r) {
    var n = r("3327"),
        i = Function.prototype;

    t.exports = function (t) {
      var e = t.bind;
      return t === i || t instanceof Function && e === i.bind ? n : e;
    };
  },
  "8cfd5": function cfd5(t, e, r) {
    t.exports = r("2b99");
  },
  "8d05": function d05(t, e, r) {
    var n = r("9bfb");
    n("toPrimitive");
  },
  "8e06": function e06(t, e, r) {
    var n = r("1b0d");
    t.exports = n;
  },
  "8e11": function e11(t, e, r) {
    var n = r("a421"),
        i = r("0cf0").f,
        a = {}.toString,
        o = "object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function u(t) {
      try {
        return i(t);
      } catch (e) {
        return o.slice();
      }
    };

    t.exports.f = function (t) {
      return o && "[object Window]" == a.call(t) ? u(t) : i(n(t));
    };
  },
  "8e5c": function e5c(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("5779"),
        a = r("ec62"),
        o = r("4896"),
        u = r("0273"),
        s = r("2c6c"),
        c = r("5b57"),
        f = function f(t, e) {
      var r = this;
      if (!(r instanceof f)) return new f(t, e);
      a && (r = a(new Error(void 0), i(r))), void 0 !== e && u(r, "message", String(e));
      var n = [];
      return c(t, n.push, {
        that: n
      }), u(r, "errors", n), r;
    };

    f.prototype = o(Error.prototype, {
      constructor: s(5, f),
      message: s(5, ""),
      name: s(5, "AggregateError")
    }), n({
      global: !0
    }, {
      AggregateError: f
    });
  },
  "8eeb": function eeb(t, e, r) {
    var n = r("bc0f");
    t.exports = n;
  },
  "8f95": function f95(t, e, r) {
    var n = r("d63b"),
        i = r("fc48"),
        a = r("0363"),
        o = a("toStringTag"),
        u = "Arguments" == i(function () {
      return arguments;
    }()),
        s = function s(t, e) {
      try {
        return t[e];
      } catch (r) {}
    };

    t.exports = n ? i : function (t) {
      var e, r, n;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = s(e = Object(t), o)) ? r : u ? i(e) : "Object" == (n = i(e)) && "function" == typeof e.callee ? "Arguments" : n;
    };
  },
  "8fa2": function fa2(t, e, r) {
    t.exports = r("ca15");
  },
  "8fad": function fad(t, e, r) {
    var n = r("3ac6"),
        i = r("0273");

    t.exports = function (t, e) {
      try {
        i(n, t, e);
      } catch (r) {
        n[t] = e;
      }

      return e;
    };
  },
  "900e": function e(t, _e10, r) {
    var n = r("85d3");

    function i(t, e) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), n(t, i.key, i);
      }
    }

    function a(t, e, r) {
      return e && i(t.prototype, e), r && i(t, r), t;
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  9080: function _(t, e, r) {
    var n = r("9bfb");
    n("isConcatSpreadable");
  },
  9097: function _(t, e, r) {
    r("464e");
    var n = r("764b");
    t.exports = n.Date.now;
  },
  "90b3": function b3(t, e, r) {
    var n = r("52d7");
    t.exports = n;
  },
  9103: function _(t, e, r) {
    "use strict";

    var n = r("a421"),
        i = r("c44e"),
        a = r("7463"),
        o = r("2f5a"),
        u = r("4056"),
        s = "Array Iterator",
        c = o.set,
        f = o.getterFor(s);
    t.exports = u(Array, "Array", function (t, e) {
      c(this, {
        type: s,
        target: n(t),
        index: 0,
        kind: e
      });
    }, function () {
      var t = f(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
      return !e || n >= e.length ? (t.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == r ? {
        value: n,
        done: !1
      } : "values" == r ? {
        value: e[n],
        done: !1
      } : {
        value: [n, e[n]],
        done: !1
      };
    }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries");
  },
  "914b": function b(t, e, r) {
    var n = r("0abc");
    t.exports = n;
  },
  "92cd": function cd(t, e, r) {
    r("1d3a");
    var n = r("a169");
    t.exports = n("Array").slice;
  },
  "930e": function e(t, _e11, r) {
    r("9515");

    var n = r("764b"),
        i = n.Object,
        a = t.exports = function (t, e) {
      return i.defineProperties(t, e);
    };

    i.defineProperties.sham && (a.sham = !0);
  },
  "932a": function a(t, e, r) {
    var n = r("a5eb"),
        i = r("6f8d"),
        a = r("44ba").f;
    n({
      target: "Reflect",
      stat: !0
    }, {
      deleteProperty: function deleteProperty(t, e) {
        var r = a(i(t), e);
        return !(r && !r.configurable) && delete t[e];
      }
    });
  },
  9412: function _(t, e, r) {
    r("6850");
    var n = r("a169");
    t.exports = n("Array").includes;
  },
  9474: function _(t, e, r) {
    t.exports = r("8383");
  },
  9515: function _(t, e, r) {
    var n = r("a5eb"),
        i = r("c1b2"),
        a = r("c230");
    n({
      target: "Object",
      stat: !0,
      forced: !i,
      sham: !i
    }, {
      defineProperties: a
    });
  },
  "96a8": function a8(t, e, r) {
    var n = r("9097");
    t.exports = n;
  },
  "96be": function be(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("6220"),
        a = [].reverse,
        o = [1, 2];
    n({
      target: "Array",
      proto: !0,
      forced: String(o) === String(o.reverse())
    }, {
      reverse: function reverse() {
        return i(this) && (this.length = this.length), a.call(this);
      }
    });
  },
  "96e9": function e9(t, e, r) {
    var n = r("3ac6"),
        i = r("e899"),
        a = n.WeakMap;
    t.exports = "function" === typeof a && /native code/.test(i(a));
  },
  9717: function _(t, e, r) {
    var n = r("9883");
    t.exports = n("navigator", "userAgent") || "";
  },
  9802: function _(t, e, r) {
    var n = r("9bfb");
    n("replaceAll");
  },
  "980e": function e(t, _e12, r) {
    var n = r("9bfb");
    n("search");
  },
  "984c": function c(t, e, r) {
    var n = r("716a");
    r("8b44"), r("548c"), r("c949"), r("a3ad"), t.exports = n;
  },
  9883: function _(t, e, r) {
    var n = r("764b"),
        i = r("3ac6"),
        a = function a(t) {
      return "function" == typeof t ? t : void 0;
    };

    t.exports = function (t, e) {
      return arguments.length < 2 ? a(n[t]) || a(i[t]) : n[t] && n[t][e] || i[t] && i[t][e];
    };
  },
  9906: function _(t, e, r) {
    r("9bcd");
    var n = r("764b");
    t.exports = n.Reflect.apply;
  },
  "991c": function c(t, e, r) {
    var n = r("0b11");

    function i(e, r) {
      return t.exports = i = n || function (t, e) {
        return t.__proto__ = e, t;
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, i(e, r);
    }

    t.exports = i, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "99a4": function a4(t, e, r) {
    "use strict";

    var n = r("dee0").forEach,
        i = r("9f61"),
        a = i("forEach");
    t.exports = a ? [].forEach : function (t) {
      return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
    };
  },
  "9a13": function a13(t, e, r) {
    var n = r("a38c");
    t.exports = n;
  },
  "9a6b": function a6b(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("ff96").trim,
        a = r("83ee");
    n({
      target: "String",
      proto: !0,
      forced: a("trim")
    }, {
      trim: function trim() {
        return i(this);
      }
    });
  },
  "9a73": function a73(t, e, r) {
    t.exports = r("8e06");
  },
  "9ac4": function ac4(t, e, r) {
    var n = r("9bfb");
    n("species");
  },
  "9b8d": function b8d(t, e) {
    t.exports = function (t) {
      try {
        return {
          error: !1,
          value: t()
        };
      } catch (e) {
        return {
          error: !0,
          value: e
        };
      }
    };
  },
  "9bb8": function bb8(t, e, r) {
    var n = r("a5eb"),
        i = r("06fa"),
        a = r("a421"),
        o = r("44ba").f,
        u = r("c1b2"),
        s = i(function () {
      o(1);
    }),
        c = !u || s;
    n({
      target: "Object",
      stat: !0,
      forced: c,
      sham: !u
    }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return o(a(t), e);
      }
    });
  },
  "9bcd": function bcd(t, e, r) {
    var n = r("a5eb"),
        i = r("9883"),
        a = r("cc94"),
        o = r("6f8d"),
        u = r("06fa"),
        s = i("Reflect", "apply"),
        c = Function.apply,
        f = !u(function () {
      s(function () {});
    });
    n({
      target: "Reflect",
      stat: !0,
      forced: f
    }, {
      apply: function apply(t, e, r) {
        return a(t), o(r), s ? s(t, e, r) : c.call(t, e, r);
      }
    });
  },
  "9bfb": function bfb(t, e, r) {
    var n = r("764b"),
        i = r("78e7"),
        a = r("beea"),
        o = r("4180").f;

    t.exports = function (t) {
      var e = n.Symbol || (n.Symbol = {});
      i(e, t) || o(e, t, {
        value: a.f(t)
      });
    };
  },
  "9c96": function c96(t, e, r) {
    var n = r("06fa"),
        i = r("0363"),
        a = r("4aa6"),
        o = i("species");

    t.exports = function (t) {
      return a >= 51 || !n(function () {
        var e = [],
            r = e.constructor = {};
        return r[o] = function () {
          return {
            foo: 1
          };
        }, 1 !== e[t](Boolean).foo;
      });
    };
  },
  "9cd3": function cd3(t, e, r) {
    var n = r("5ab9");
    t.exports = n;
  },
  "9e19": function e19(t, e, r) {
    var n = r("ab88"),
        i = r("6271");

    function a(e) {
      return "function" === typeof n && "symbol" === (0, _typeof2["default"])(i) ? (t.exports = a = function a(t) {
        return (0, _typeof2["default"])(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0) : (t.exports = a = function a(t) {
        return t && "function" === typeof n && t.constructor === n && t !== n.prototype ? "symbol" : (0, _typeof2["default"])(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0), a(e);
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  "9e51": function e51(t, e, r) {
    var n = r("f96e");

    t.exports = function (t) {
      if (n(t)) throw TypeError("The method doesn't accept regular expressions");
      return t;
    };
  },
  "9e57": function e57(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  },
  "9f61": function f61(t, e, r) {
    "use strict";

    var n = r("06fa");

    t.exports = function (t, e) {
      var r = [][t];
      return !!r && n(function () {
        r.call(null, e || function () {
          throw 1;
        }, 1);
      });
    };
  },
  a016: function a016(t, e, r) {
    var n = r("b323"),
        i = r("9e57");

    t.exports = Object.keys || function (t) {
      return n(t, i);
    };
  },
  a06f: function a06f(t, e, r) {
    t.exports = r("74e7");
  },
  a0cd: function a0cd(t, e, r) {
    r("0aa1");
    var n = r("764b");
    t.exports = n.Object.keys;
  },
  a0e5: function a0e5(t, e, r) {
    var n = r("06fa"),
        i = /#|\.prototype\./,
        a = function a(t, e) {
      var r = u[o(t)];
      return r == c || r != s && ("function" == typeof e ? n(e) : !!e);
    },
        o = a.normalize = function (t) {
      return String(t).replace(i, ".").toLowerCase();
    },
        u = a.data = {},
        s = a.NATIVE = "N",
        c = a.POLYFILL = "P";

    t.exports = a;
  },
  a0e6: function a0e6(t, e, r) {
    var n,
        i,
        a,
        o,
        u,
        s,
        c,
        f,
        l = r("3ac6"),
        h = r("44ba").f,
        p = r("5afb").set,
        v = r("0f59"),
        d = r("f86d"),
        y = r("0149"),
        g = l.MutationObserver || l.WebKitMutationObserver,
        x = l.document,
        m = l.process,
        b = l.Promise,
        w = h(l, "queueMicrotask"),
        S = w && w.value;
    S || (n = function n() {
      var t, e;
      y && (t = m.domain) && t.exit();

      while (i) {
        e = i.fn, i = i.next;

        try {
          e();
        } catch (r) {
          throw i ? o() : a = void 0, r;
        }
      }

      a = void 0, t && t.enter();
    }, v || y || d || !g || !x ? b && b.resolve ? (c = b.resolve(void 0), c.constructor = b, f = c.then, o = function o() {
      f.call(c, n);
    }) : o = y ? function () {
      m.nextTick(n);
    } : function () {
      p.call(l, n);
    } : (u = !0, s = x.createTextNode(""), new g(n).observe(s, {
      characterData: !0
    }), o = function o() {
      s.data = u = !u;
    })), t.exports = S || function (t) {
      var e = {
        fn: t,
        next: void 0
      };
      a && (a.next = e), i || (i = e, o()), a = e;
    };
  },
  a169: function a169(t, e, r) {
    var n = r("764b");

    t.exports = function (t) {
      return n[t + "Prototype"];
    };
  },
  a205: function a205(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  a2ac: function a2ac(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("dee0").every,
        a = r("9f61"),
        o = a("every");
    n({
      target: "Array",
      proto: !0,
      forced: !o
    }, {
      every: function every(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  a38c: function a38c(t, e, r) {
    r("3e476");

    var n = r("764b"),
        i = n.Object,
        a = t.exports = function (t, e, r) {
      return i.defineProperty(t, e, r);
    };

    i.defineProperty.sham && (a.sham = !0);
  },
  a3ad: function a3ad(t, e, r) {
    r("75df");
  },
  a3e3: function a3e3(t, e, r) {
    t.exports = r("6c5d");
  },
  a421: function a421(t, e, r) {
    var n = r("638c"),
        i = r("1875");

    t.exports = function (t) {
      return n(i(t));
    };
  },
  a4fc: function a4fc(t, e, r) {
    t.exports = r("0a43");
  },
  a5eb: function a5eb(t, e, r) {
    "use strict";

    var n = r("3ac6"),
        i = r("44ba").f,
        a = r("a0e5"),
        o = r("764b"),
        u = r("6414"),
        s = r("0273"),
        c = r("78e7"),
        f = function f(t) {
      var e = function e(_e13, r, n) {
        if (this instanceof t) {
          switch (arguments.length) {
            case 0:
              return new t();

            case 1:
              return new t(_e13);

            case 2:
              return new t(_e13, r);
          }

          return new t(_e13, r, n);
        }

        return t.apply(this, arguments);
      };

      return e.prototype = t.prototype, e;
    };

    t.exports = function (t, e) {
      var r,
          l,
          h,
          p,
          v,
          d,
          y,
          g,
          x,
          m = t.target,
          b = t.global,
          w = t.stat,
          S = t.proto,
          k = b ? n : w ? n[m] : (n[m] || {}).prototype,
          A = b ? o : o[m] || (o[m] = {}),
          T = A.prototype;

      for (p in e) {
        r = a(b ? p : m + (w ? "." : "#") + p, t.forced), l = !r && k && c(k, p), d = A[p], l && (t.noTargetGet ? (x = i(k, p), y = x && x.value) : y = k[p]), v = l && y ? y : e[p], l && (0, _typeof2["default"])(d) === (0, _typeof2["default"])(v) || (g = t.bind && l ? u(v, n) : t.wrap && l ? f(v) : S && "function" == typeof v ? u(Function.call, v) : v, (t.sham || v && v.sham || d && d.sham) && s(g, "sham", !0), A[p] = g, S && (h = m + "Prototype", c(o, h) || s(o, h, {}), o[h][p] = v, t.real && T && !T[p] && s(T, p, v)));
      }
    };
  },
  a8b3: function a8b3(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("99a4");
    n({
      target: "Array",
      proto: !0,
      forced: [].forEach != i
    }, {
      forEach: i
    });
  },
  a915: function a915(t, e, r) {
    var n = r("801c");
    t.exports = n;
  },
  a94a: function a94a(t, e, r) {
    var n = r("310f");
    t.exports = n;
  },
  aa1b: function aa1b(t, e, r) {
    var n = r("9bfb");
    n("unscopables");
  },
  aa3c: function aa3c(t, e, r) {
    t.exports = r("dae3");
  },
  aa9b: function aa9b(t, e, r) {
    var n = r("5ab9");
    t.exports = n;
  },
  ab88: function ab88(t, e, r) {
    t.exports = r("b5f1");
  },
  aba2: function aba2(t, e) {
    function r() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    t.exports = r, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  abf2: function abf2(t, e, r) {
    var n = r("1c29");
    t.exports = n;
  },
  ac0c: function ac0c(t, e, r) {
    r("de6a");
    var n = r("764b");
    t.exports = n.Object.getPrototypeOf;
  },
  ad27: function ad27(t, e, r) {
    "use strict";

    var n = r("cc94"),
        i = function i(t) {
      var e, r;
      this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
        e = t, r = n;
      }), this.resolve = n(e), this.reject = n(r);
    };

    t.exports.f = function (t) {
      return new i(t);
    };
  },
  ad99: function ad99(t, e, r) {
    t.exports = r("4929");
  },
  adb0: function adb0(t, e, r) {
    var n = r("ab88"),
        i = r("0dc8"),
        a = r("a06f");

    function o(t) {
      if ("undefined" !== typeof n && null != i(t) || null != t["@@iterator"]) return a(t);
    }

    t.exports = o, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  af5f: function af5f(t, e, r) {
    r("db04");
    var n = r("a169");
    t.exports = n("String").startsWith;
  },
  af81: function af81(t, e, r) {
    var n = r("a5eb"),
        i = r("1967");
    n({
      global: !0,
      forced: parseInt != i
    }, {
      parseInt: i
    });
  },
  b0bc: function b0bc(t, e, r) {
    t.exports = r("90b3");
  },
  b0c0: function b0c0(t, e, r) {
    var n = r("83ab"),
        i = r("9bf2").f,
        a = Function.prototype,
        o = a.toString,
        u = /^\s*function ([^ (]*)/,
        s = "name";
    n && !(s in a) && i(a, s, {
      configurable: !0,
      get: function get() {
        try {
          return o.call(this).match(u)[1];
        } catch (t) {
          return "";
        }
      }
    });
  },
  b0ea: function b0ea(t, e, r) {
    var n = r("6f8d"),
        i = r("cc94"),
        a = r("0363"),
        o = a("species");

    t.exports = function (t, e) {
      var r,
          a = n(t).constructor;
      return void 0 === a || void 0 == (r = n(a)[o]) ? e : i(r);
    };
  },
  b2ed: function b2ed(t, e, r) {
    var n = r("d659"),
        i = r("3e80"),
        a = n("keys");

    t.exports = function (t) {
      return a[t] || (a[t] = i(t));
    };
  },
  b323: function b323(t, e, r) {
    var n = r("78e7"),
        i = r("a421"),
        a = r("6386").indexOf,
        o = r("6e9a");

    t.exports = function (t, e) {
      var r,
          u = i(t),
          s = 0,
          c = [];

      for (r in u) {
        !n(o, r) && n(u, r) && c.push(r);
      }

      while (e.length > s) {
        n(u, r = e[s++]) && (~a(c, r) || c.push(r));
      }

      return c;
    };
  },
  b337: function b337(t, e, r) {
    var n = r("44b3"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.reduce;
      return t === i || t instanceof Array && e === i.reduce ? n : e;
    };
  },
  b43a: function b43a(t, e, r) {
    r("711e");
    var n = r("a169");
    t.exports = n("Array").fill;
  },
  b5b3: function b5b3(t, e, r) {
    var n = r("8cfd");
    t.exports = n;
  },
  b5f1: function b5f1(t, e, r) {
    var n = r("1c29");
    r("0c82"), r("7201"), r("0f8e"), r("bffc"), r("74fd"), r("266f"), r("9802"), t.exports = n;
  },
  b83c: function b83c(t, e, r) {
    var n = r("b887");
    t.exports = n;
  },
  b887: function b887(t, e, r) {
    r("9bb8");

    var n = r("764b"),
        i = n.Object,
        a = t.exports = function (t, e) {
      return i.getOwnPropertyDescriptor(t, e);
    };

    i.getOwnPropertyDescriptor.sham && (a.sham = !0);
  },
  bb83: function bb83(t, e, r) {
    "use strict";

    var n,
        i,
        a,
        o = r("06fa"),
        u = r("5779"),
        s = r("0273"),
        c = r("78e7"),
        f = r("0363"),
        l = r("7042"),
        h = f("iterator"),
        p = !1,
        v = function v() {
      return this;
    };

    [].keys && (a = [].keys(), "next" in a ? (i = u(u(a)), i !== Object.prototype && (n = i)) : p = !0);
    var d = void 0 == n || o(function () {
      var t = {};
      return n[h].call(t) !== t;
    });
    d && (n = {}), l && !d || c(n, h) || s(n, h, v), t.exports = {
      IteratorPrototype: n,
      BUGGY_SAFARI_ITERATORS: p
    };
  },
  bbe3: function bbe3(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("6386").indexOf,
        a = r("9f61"),
        o = [].indexOf,
        u = !!o && 1 / [1].indexOf(1, -0) < 0,
        s = a("indexOf");
    n({
      target: "Array",
      proto: !0,
      forced: u || !s
    }, {
      indexOf: function indexOf(t) {
        return u ? o.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  bc0d: function bc0d(t, e, r) {
    var n = r("56c4");
    t.exports = n;
  },
  bc0f: function bc0f(t, e, r) {
    var n = r("fbaa"),
        i = String.prototype;

    t.exports = function (t) {
      var e = t.trim;
      return "string" === typeof t || t === i || t instanceof String && e === i.trim ? n : e;
    };
  },
  bc59: function bc59(t, e, r) {
    r("3e47"), r("484e");
    var n = r("764b");
    t.exports = n.Array.from;
  },
  bcb4: function bcb4(t, e, r) {
    r("2a0a"), r("6f89"), r("3e47"), r("5145");
    var n = r("764b");
    t.exports = n.Map;
  },
  bcfb: function bcfb(t, e, r) {
    r("96be");
    var n = r("a169");
    t.exports = n("Array").reverse;
  },
  beea: function beea(t, e, r) {
    var n = r("0363");
    e.f = n;
  },
  bffc: function bffc(t, e, r) {
    var n = r("9bfb");
    n("metadata");
  },
  c1b2: function c1b2(t, e, r) {
    var n = r("06fa");
    t.exports = !n(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1];
    });
  },
  c230: function c230(t, e, r) {
    var n = r("c1b2"),
        i = r("4180"),
        a = r("6f8d"),
        o = r("a016");
    t.exports = n ? Object.defineProperties : function (t, e) {
      a(t);
      var r,
          n = o(e),
          u = n.length,
          s = 0;

      while (u > s) {
        i.f(t, r = n[s++], e[r]);
      }

      return t;
    };
  },
  c2f0: function c2f0(t, e, r) {
    var n = r("3ac6");

    t.exports = function (t, e) {
      var r = n.console;
      r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e));
    };
  },
  c38c: function c38c(t, e, r) {
    var n = r("a5eb"),
        i = r("6f8d"),
        a = r("5779"),
        o = r("f5fb");
    n({
      target: "Reflect",
      stat: !0,
      sham: !o
    }, {
      getPrototypeOf: function getPrototypeOf(t) {
        return a(i(t));
      }
    });
  },
  c449: function c449(t, e, r) {
    (function (e) {
      for (var n = r("6d08"), i = "undefined" === typeof window ? e : window, a = ["moz", "webkit"], o = "AnimationFrame", u = i["request" + o], s = i["cancel" + o] || i["cancelRequest" + o], c = 0; !u && c < a.length; c++) {
        u = i[a[c] + "Request" + o], s = i[a[c] + "Cancel" + o] || i[a[c] + "CancelRequest" + o];
      }

      if (!u || !s) {
        var f = 0,
            l = 0,
            h = [],
            p = 1e3 / 60;
        u = function u(t) {
          if (0 === h.length) {
            var e = n(),
                r = Math.max(0, p - (e - f));
            f = r + e, setTimeout(function () {
              var t = h.slice(0);
              h.length = 0;

              for (var e = 0; e < t.length; e++) {
                if (!t[e].cancelled) try {
                  t[e].callback(f);
                } catch (r) {
                  setTimeout(function () {
                    throw r;
                  }, 0);
                }
              }
            }, Math.round(r));
          }

          return h.push({
            handle: ++l,
            callback: t,
            cancelled: !1
          }), l;
        }, s = function s(t) {
          for (var e = 0; e < h.length; e++) {
            h[e].handle === t && (h[e].cancelled = !0);
          }
        };
      }

      t.exports = function (t) {
        return u.call(i, t);
      }, t.exports.cancel = function () {
        s.apply(i, arguments);
      }, t.exports.polyfill = function (t) {
        t || (t = i), t.requestAnimationFrame = u, t.cancelAnimationFrame = s;
      };
    }).call(this, r("c8ba"));
  },
  c44e: function c44e(t, e) {
    t.exports = function () {};
  },
  c52e: function c52e(t, e, r) {
    t.exports = r("f8cb");
  },
  c751: function c751(t, e, r) {
    t.exports = r("a94a");
  },
  c81f: function c81f(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("9e51"),
        a = r("1875"),
        o = r("8c58");
    n({
      target: "String",
      proto: !0,
      forced: !o("includes")
    }, {
      includes: function includes(t) {
        return !!~String(a(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  c868: function c868(t, e, r) {
    var n = r("ab88"),
        i = r("0dc8");

    function a(t, e) {
      var r = null == t ? null : "undefined" !== typeof n && i(t) || t["@@iterator"];

      if (null != r) {
        var a,
            o,
            u = [],
            s = !0,
            c = !1;

        try {
          for (r = r.call(t); !(s = (a = r.next()).done); s = !0) {
            if (u.push(a.value), e && u.length === e) break;
          }
        } catch (f) {
          c = !0, o = f;
        } finally {
          try {
            s || null == r["return"] || r["return"]();
          } finally {
            if (c) throw o;
          }
        }

        return u;
      }
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  c90a: function c90a(t, e, r) {
    t.exports = r("f257");
  },
  c949: function c949(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("ad27"),
        a = r("9b8d");
    n({
      target: "Promise",
      stat: !0
    }, {
      "try": function _try(t) {
        var e = i.f(this),
            r = a(t);
        return (r.error ? e.reject : e.resolve)(r.value), e.promise;
      }
    });
  },
  ca15: function ca15(t, e, r) {
    r("5145");
    var n = r("1e54"),
        i = r("8f95"),
        a = Array.prototype,
        o = {
      DOMTokenList: !0,
      NodeList: !0
    };

    t.exports = function (t) {
      var e = t.values;
      return t === a || t instanceof Array && e === a.values || o.hasOwnProperty(i(t)) ? n : e;
    };
  },
  cbd0: function cbd0(t, e, r) {
    var n = r("1561"),
        i = r("1875"),
        a = function a(t) {
      return function (e, r) {
        var a,
            o,
            u = String(i(e)),
            s = n(r),
            c = u.length;
        return s < 0 || s >= c ? t ? "" : void 0 : (a = u.charCodeAt(s), a < 55296 || a > 56319 || s + 1 === c || (o = u.charCodeAt(s + 1)) < 56320 || o > 57343 ? t ? u.charAt(s) : a : t ? u.slice(s, s + 2) : o - 56320 + (a - 55296 << 10) + 65536);
      };
    };

    t.exports = {
      codeAt: a(!1),
      charAt: a(!0)
    };
  },
  cc94: function cc94(t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  ccb8: function ccb8(t, e, r) {
    var n = r("72a8"),
        i = r("c868"),
        a = r("5893"),
        o = r("d7c9");

    function u(t, e) {
      return n(t) || i(t, e) || a(t, e) || o();
    }

    t.exports = u, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  d01f: function d01f(t, e, r) {
    "use strict";

    r.d(e, "a", function () {
      return S;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var _n4 = function n(t, e) {
      return (_n4 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) {
          e.hasOwnProperty(r) && (t[r] = e[r]);
        }
      })(t, e);
    };

    function i(t, e) {
      function r() {
        this.constructor = t;
      }

      _n4(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    function a(t) {
      var e = "";
      Array.isArray(t) || (t = [t]);

      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        if (n.type === S.CLOSE_PATH) e += "z";else if (n.type === S.HORIZ_LINE_TO) e += (n.relative ? "h" : "H") + n.x;else if (n.type === S.VERT_LINE_TO) e += (n.relative ? "v" : "V") + n.y;else if (n.type === S.MOVE_TO) e += (n.relative ? "m" : "M") + n.x + " " + n.y;else if (n.type === S.LINE_TO) e += (n.relative ? "l" : "L") + n.x + " " + n.y;else if (n.type === S.CURVE_TO) e += (n.relative ? "c" : "C") + n.x1 + " " + n.y1 + " " + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;else if (n.type === S.SMOOTH_CURVE_TO) e += (n.relative ? "s" : "S") + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;else if (n.type === S.QUAD_TO) e += (n.relative ? "q" : "Q") + n.x1 + " " + n.y1 + " " + n.x + " " + n.y;else if (n.type === S.SMOOTH_QUAD_TO) e += (n.relative ? "t" : "T") + n.x + " " + n.y;else {
          if (n.type !== S.ARC) throw new Error('Unexpected command type "' + n.type + '" at index ' + r + ".");
          e += (n.relative ? "a" : "A") + n.rX + " " + n.rY + " " + n.xRot + " " + +n.lArcFlag + " " + +n.sweepFlag + " " + n.x + " " + n.y;
        }
      }

      return e;
    }

    function o(t, e) {
      var r = t[0],
          n = t[1];
      return [r * Math.cos(e) - n * Math.sin(e), r * Math.sin(e) + n * Math.cos(e)];
    }

    function u() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      for (var r = 0; r < t.length; r++) {
        if ("number" != typeof t[r]) throw new Error("assertNumbers arguments[" + r + "] is not a number. " + (0, _typeof2["default"])(t[r]) + " == typeof " + t[r]);
      }

      return !0;
    }

    var s = Math.PI;

    function c(t, e, r) {
      t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
      var n = t.rX,
          i = t.rY,
          a = t.x,
          u = t.y;
      n = Math.abs(t.rX), i = Math.abs(t.rY);
      var c = o([(e - a) / 2, (r - u) / 2], -t.xRot / 180 * s),
          f = c[0],
          l = c[1],
          h = Math.pow(f, 2) / Math.pow(n, 2) + Math.pow(l, 2) / Math.pow(i, 2);
      1 < h && (n *= Math.sqrt(h), i *= Math.sqrt(h)), t.rX = n, t.rY = i;
      var p = Math.pow(n, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(f, 2),
          v = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - p) / p)),
          d = n * l / i * v,
          y = -i * f / n * v,
          g = o([d, y], t.xRot / 180 * s);
      t.cX = g[0] + (e + a) / 2, t.cY = g[1] + (r + u) / 2, t.phi1 = Math.atan2((l - y) / i, (f - d) / n), t.phi2 = Math.atan2((-l - y) / i, (-f - d) / n), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * s), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * s), t.phi1 *= 180 / s, t.phi2 *= 180 / s;
    }

    function f(t, e, r) {
      u(t, e, r);
      var n = t * t + e * e - r * r;
      if (0 > n) return [];
      if (0 === n) return [[t * r / (t * t + e * e), e * r / (t * t + e * e)]];
      var i = Math.sqrt(n);
      return [[(t * r + e * i) / (t * t + e * e), (e * r - t * i) / (t * t + e * e)], [(t * r - e * i) / (t * t + e * e), (e * r + t * i) / (t * t + e * e)]];
    }

    var l,
        h = Math.PI / 180;

    function p(t, e, r) {
      return (1 - r) * t + r * e;
    }

    function v(t, e, r, n) {
      return t + Math.cos(n / 180 * s) * e + Math.sin(n / 180 * s) * r;
    }

    function d(t, e, r, n) {
      var i = e - t,
          a = r - e,
          o = 3 * i + 3 * (n - r) - 6 * a,
          u = 6 * (a - i),
          s = 3 * i;
      return Math.abs(o) < 1e-6 ? [-s / u] : function (t, e, r) {
        void 0 === r && (r = 1e-6);
        var n = t * t / 4 - e;
        if (n < -r) return [];
        if (n <= r) return [-t / 2];
        var i = Math.sqrt(n);
        return [-t / 2 - i, -t / 2 + i];
      }(u / o, s / o, 1e-6);
    }

    function y(t, e, r, n, i) {
      var a = 1 - i;
      return t * (a * a * a) + e * (3 * a * a * i) + r * (3 * a * i * i) + n * (i * i * i);
    }

    !function (t) {
      function e() {
        return i(function (t, e, r) {
          return t.relative && (void 0 !== t.x1 && (t.x1 += e), void 0 !== t.y1 && (t.y1 += r), void 0 !== t.x2 && (t.x2 += e), void 0 !== t.y2 && (t.y2 += r), void 0 !== t.x && (t.x += e), void 0 !== t.y && (t.y += r), t.relative = !1), t;
        });
      }

      function r() {
        var t = NaN,
            e = NaN,
            r = NaN,
            n = NaN;
        return i(function (i, a, o) {
          return i.type & S.SMOOTH_CURVE_TO && (i.type = S.CURVE_TO, t = isNaN(t) ? a : t, e = isNaN(e) ? o : e, i.x1 = i.relative ? a - t : 2 * a - t, i.y1 = i.relative ? o - e : 2 * o - e), i.type & S.CURVE_TO ? (t = i.relative ? a + i.x2 : i.x2, e = i.relative ? o + i.y2 : i.y2) : (t = NaN, e = NaN), i.type & S.SMOOTH_QUAD_TO && (i.type = S.QUAD_TO, r = isNaN(r) ? a : r, n = isNaN(n) ? o : n, i.x1 = i.relative ? a - r : 2 * a - r, i.y1 = i.relative ? o - n : 2 * o - n), i.type & S.QUAD_TO ? (r = i.relative ? a + i.x1 : i.x1, n = i.relative ? o + i.y1 : i.y1) : (r = NaN, n = NaN), i;
        });
      }

      function n() {
        var t = NaN,
            e = NaN;
        return i(function (r, n, i) {
          if (r.type & S.SMOOTH_QUAD_TO && (r.type = S.QUAD_TO, t = isNaN(t) ? n : t, e = isNaN(e) ? i : e, r.x1 = r.relative ? n - t : 2 * n - t, r.y1 = r.relative ? i - e : 2 * i - e), r.type & S.QUAD_TO) {
            t = r.relative ? n + r.x1 : r.x1, e = r.relative ? i + r.y1 : r.y1;
            var a = r.x1,
                o = r.y1;
            r.type = S.CURVE_TO, r.x1 = ((r.relative ? 0 : n) + 2 * a) / 3, r.y1 = ((r.relative ? 0 : i) + 2 * o) / 3, r.x2 = (r.x + 2 * a) / 3, r.y2 = (r.y + 2 * o) / 3;
          } else t = NaN, e = NaN;

          return r;
        });
      }

      function i(t) {
        var e = 0,
            r = 0,
            n = NaN,
            i = NaN;
        return function (a) {
          if (isNaN(n) && !(a.type & S.MOVE_TO)) throw new Error("path must start with moveto");
          var o = t(a, e, r, n, i);
          return a.type & S.CLOSE_PATH && (e = n, r = i), void 0 !== a.x && (e = a.relative ? e + a.x : a.x), void 0 !== a.y && (r = a.relative ? r + a.y : a.y), a.type & S.MOVE_TO && (n = e, i = r), o;
        };
      }

      function a(t, e, r, n, a, o) {
        return u(t, e, r, n, a, o), i(function (i, u, s, c) {
          var f = i.x1,
              l = i.x2,
              h = i.relative && !isNaN(c),
              p = void 0 !== i.x ? i.x : h ? 0 : u,
              v = void 0 !== i.y ? i.y : h ? 0 : s;

          function d(t) {
            return t * t;
          }

          i.type & S.HORIZ_LINE_TO && 0 !== e && (i.type = S.LINE_TO, i.y = i.relative ? 0 : s), i.type & S.VERT_LINE_TO && 0 !== r && (i.type = S.LINE_TO, i.x = i.relative ? 0 : u), void 0 !== i.x && (i.x = i.x * t + v * r + (h ? 0 : a)), void 0 !== i.y && (i.y = p * e + i.y * n + (h ? 0 : o)), void 0 !== i.x1 && (i.x1 = i.x1 * t + i.y1 * r + (h ? 0 : a)), void 0 !== i.y1 && (i.y1 = f * e + i.y1 * n + (h ? 0 : o)), void 0 !== i.x2 && (i.x2 = i.x2 * t + i.y2 * r + (h ? 0 : a)), void 0 !== i.y2 && (i.y2 = l * e + i.y2 * n + (h ? 0 : o));
          var y = t * n - e * r;
          if (void 0 !== i.xRot && (1 !== t || 0 !== e || 0 !== r || 1 !== n)) if (0 === y) delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag, i.type = S.LINE_TO;else {
            var g = i.xRot * Math.PI / 180,
                x = Math.sin(g),
                m = Math.cos(g),
                b = 1 / d(i.rX),
                w = 1 / d(i.rY),
                k = d(m) * b + d(x) * w,
                A = 2 * x * m * (b - w),
                T = d(x) * b + d(m) * w,
                P = k * n * n - A * e * n + T * e * e,
                O = A * (t * n + e * r) - 2 * (k * r * n + T * t * e),
                C = k * r * r - A * t * r + T * t * t,
                E = (Math.atan2(O, P - C) + Math.PI) % Math.PI / 2,
                M = Math.sin(E),
                _ = Math.cos(E);

            i.rX = Math.abs(y) / Math.sqrt(P * d(_) + O * M * _ + C * d(M)), i.rY = Math.abs(y) / Math.sqrt(P * d(M) - O * M * _ + C * d(_)), i.xRot = 180 * E / Math.PI;
          }
          return void 0 !== i.sweepFlag && 0 > y && (i.sweepFlag = +!i.sweepFlag), i;
        });
      }

      function s() {
        return function (t) {
          var e = {};

          for (var r in t) {
            e[r] = t[r];
          }

          return e;
        };
      }

      t.ROUND = function (t) {
        function e(e) {
          return Math.round(e * t) / t;
        }

        return void 0 === t && (t = 1e13), u(t), function (t) {
          return void 0 !== t.x1 && (t.x1 = e(t.x1)), void 0 !== t.y1 && (t.y1 = e(t.y1)), void 0 !== t.x2 && (t.x2 = e(t.x2)), void 0 !== t.y2 && (t.y2 = e(t.y2)), void 0 !== t.x && (t.x = e(t.x)), void 0 !== t.y && (t.y = e(t.y)), void 0 !== t.rX && (t.rX = e(t.rX)), void 0 !== t.rY && (t.rY = e(t.rY)), t;
        };
      }, t.TO_ABS = e, t.TO_REL = function () {
        return i(function (t, e, r) {
          return t.relative || (void 0 !== t.x1 && (t.x1 -= e), void 0 !== t.y1 && (t.y1 -= r), void 0 !== t.x2 && (t.x2 -= e), void 0 !== t.y2 && (t.y2 -= r), void 0 !== t.x && (t.x -= e), void 0 !== t.y && (t.y -= r), t.relative = !0), t;
        });
      }, t.NORMALIZE_HVZ = function (t, e, r) {
        return void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), i(function (n, i, a, o, u) {
          if (isNaN(o) && !(n.type & S.MOVE_TO)) throw new Error("path must start with moveto");
          return e && n.type & S.HORIZ_LINE_TO && (n.type = S.LINE_TO, n.y = n.relative ? 0 : a), r && n.type & S.VERT_LINE_TO && (n.type = S.LINE_TO, n.x = n.relative ? 0 : i), t && n.type & S.CLOSE_PATH && (n.type = S.LINE_TO, n.x = n.relative ? o - i : o, n.y = n.relative ? u - a : u), n.type & S.ARC && (0 === n.rX || 0 === n.rY) && (n.type = S.LINE_TO, delete n.rX, delete n.rY, delete n.xRot, delete n.lArcFlag, delete n.sweepFlag), n;
        });
      }, t.NORMALIZE_ST = r, t.QT_TO_C = n, t.INFO = i, t.SANITIZE = function (t) {
        void 0 === t && (t = 0), u(t);
        var e = NaN,
            r = NaN,
            n = NaN,
            a = NaN;
        return i(function (i, o, u, s, c) {
          var f = Math.abs,
              l = !1,
              h = 0,
              p = 0;

          if (i.type & S.SMOOTH_CURVE_TO && (h = isNaN(e) ? 0 : o - e, p = isNaN(r) ? 0 : u - r), i.type & (S.CURVE_TO | S.SMOOTH_CURVE_TO) ? (e = i.relative ? o + i.x2 : i.x2, r = i.relative ? u + i.y2 : i.y2) : (e = NaN, r = NaN), i.type & S.SMOOTH_QUAD_TO ? (n = isNaN(n) ? o : 2 * o - n, a = isNaN(a) ? u : 2 * u - a) : i.type & S.QUAD_TO ? (n = i.relative ? o + i.x1 : i.x1, a = i.relative ? u + i.y1 : i.y2) : (n = NaN, a = NaN), i.type & S.LINE_COMMANDS || i.type & S.ARC && (0 === i.rX || 0 === i.rY || !i.lArcFlag) || i.type & S.CURVE_TO || i.type & S.SMOOTH_CURVE_TO || i.type & S.QUAD_TO || i.type & S.SMOOTH_QUAD_TO) {
            var v = void 0 === i.x ? 0 : i.relative ? i.x : i.x - o,
                d = void 0 === i.y ? 0 : i.relative ? i.y : i.y - u;
            h = isNaN(n) ? void 0 === i.x1 ? h : i.relative ? i.x : i.x1 - o : n - o, p = isNaN(a) ? void 0 === i.y1 ? p : i.relative ? i.y : i.y1 - u : a - u;
            var y = void 0 === i.x2 ? 0 : i.relative ? i.x : i.x2 - o,
                g = void 0 === i.y2 ? 0 : i.relative ? i.y : i.y2 - u;
            f(v) <= t && f(d) <= t && f(h) <= t && f(p) <= t && f(y) <= t && f(g) <= t && (l = !0);
          }

          return i.type & S.CLOSE_PATH && f(o - s) <= t && f(u - c) <= t && (l = !0), l ? [] : i;
        });
      }, t.MATRIX = a, t.ROTATE = function (t, e, r) {
        void 0 === e && (e = 0), void 0 === r && (r = 0), u(t, e, r);
        var n = Math.sin(t),
            i = Math.cos(t);
        return a(i, n, -n, i, e - e * i + r * n, r - e * n - r * i);
      }, t.TRANSLATE = function (t, e) {
        return void 0 === e && (e = 0), u(t, e), a(1, 0, 0, 1, t, e);
      }, t.SCALE = function (t, e) {
        return void 0 === e && (e = t), u(t, e), a(t, 0, 0, e, 0, 0);
      }, t.SKEW_X = function (t) {
        return u(t), a(1, 0, Math.atan(t), 1, 0, 0);
      }, t.SKEW_Y = function (t) {
        return u(t), a(1, Math.atan(t), 0, 1, 0, 0);
      }, t.X_AXIS_SYMMETRY = function (t) {
        return void 0 === t && (t = 0), u(t), a(-1, 0, 0, 1, t, 0);
      }, t.Y_AXIS_SYMMETRY = function (t) {
        return void 0 === t && (t = 0), u(t), a(1, 0, 0, -1, 0, t);
      }, t.A_TO_C = function () {
        return i(function (t, e, r) {
          return S.ARC === t.type ? function (t, e, r) {
            var n, i, a, u;
            t.cX || c(t, e, r);

            for (var s = Math.min(t.phi1, t.phi2), f = Math.max(t.phi1, t.phi2) - s, l = Math.ceil(f / 90), v = new Array(l), d = e, y = r, g = 0; g < l; g++) {
              var x = p(t.phi1, t.phi2, g / l),
                  m = p(t.phi1, t.phi2, (g + 1) / l),
                  b = m - x,
                  w = 4 / 3 * Math.tan(b * h / 4),
                  k = [Math.cos(x * h) - w * Math.sin(x * h), Math.sin(x * h) + w * Math.cos(x * h)],
                  A = k[0],
                  T = k[1],
                  P = [Math.cos(m * h), Math.sin(m * h)],
                  O = P[0],
                  C = P[1],
                  E = [O + w * Math.sin(m * h), C - w * Math.cos(m * h)],
                  M = E[0],
                  _ = E[1];
              v[g] = {
                relative: t.relative,
                type: S.CURVE_TO
              };

              var N = function N(e, r) {
                var n = o([e * t.rX, r * t.rY], t.xRot),
                    i = n[0],
                    a = n[1];
                return [t.cX + i, t.cY + a];
              };

              n = N(A, T), v[g].x1 = n[0], v[g].y1 = n[1], i = N(M, _), v[g].x2 = i[0], v[g].y2 = i[1], a = N(O, C), v[g].x = a[0], v[g].y = a[1], t.relative && (v[g].x1 -= d, v[g].y1 -= y, v[g].x2 -= d, v[g].y2 -= y, v[g].x -= d, v[g].y -= y), d = (u = [v[g].x, v[g].y])[0], y = u[1];
            }

            return v;
          }(t, t.relative ? 0 : e, t.relative ? 0 : r) : t;
        });
      }, t.ANNOTATE_ARCS = function () {
        return i(function (t, e, r) {
          return t.relative && (e = 0, r = 0), S.ARC === t.type && c(t, e, r), t;
        });
      }, t.CLONE = s, t.CALCULATE_BOUNDS = function () {
        var t = function t(_t2) {
          var e = {};

          for (var r in _t2) {
            e[r] = _t2[r];
          }

          return e;
        },
            a = e(),
            o = n(),
            u = r(),
            s = i(function (e, r, n) {
          var i = u(o(a(t(e))));

          function l(t) {
            t > s.maxX && (s.maxX = t), t < s.minX && (s.minX = t);
          }

          function h(t) {
            t > s.maxY && (s.maxY = t), t < s.minY && (s.minY = t);
          }

          if (i.type & S.DRAWING_COMMANDS && (l(r), h(n)), i.type & S.HORIZ_LINE_TO && l(i.x), i.type & S.VERT_LINE_TO && h(i.y), i.type & S.LINE_TO && (l(i.x), h(i.y)), i.type & S.CURVE_TO) {
            l(i.x), h(i.y);

            for (var p = 0, g = d(r, i.x1, i.x2, i.x); p < g.length; p++) {
              0 < (V = g[p]) && 1 > V && l(y(r, i.x1, i.x2, i.x, V));
            }

            for (var x = 0, m = d(n, i.y1, i.y2, i.y); x < m.length; x++) {
              0 < (V = m[x]) && 1 > V && h(y(n, i.y1, i.y2, i.y, V));
            }
          }

          if (i.type & S.ARC) {
            l(i.x), h(i.y), c(i, r, n);

            for (var b = i.xRot / 180 * Math.PI, w = Math.cos(b) * i.rX, k = Math.sin(b) * i.rX, A = -Math.sin(b) * i.rY, T = Math.cos(b) * i.rY, P = i.phi1 < i.phi2 ? [i.phi1, i.phi2] : -180 > i.phi2 ? [i.phi2 + 360, i.phi1 + 360] : [i.phi2, i.phi1], O = P[0], C = P[1], E = function E(t) {
              var e = t[0],
                  r = t[1],
                  n = 180 * Math.atan2(r, e) / Math.PI;
              return n < O ? n + 360 : n;
            }, M = 0, _ = f(A, -w, 0).map(E); M < _.length; M++) {
              (V = _[M]) > O && V < C && l(v(i.cX, w, A, V));
            }

            for (var N = 0, R = f(T, -k, 0).map(E); N < R.length; N++) {
              var V;
              (V = R[N]) > O && V < C && h(v(i.cY, k, T, V));
            }
          }

          return e;
        });

        return s.minX = 1 / 0, s.maxX = -1 / 0, s.minY = 1 / 0, s.maxY = -1 / 0, s;
      };
    }(l || (l = {}));

    var g,
        x = function () {
      function t() {}

      return t.prototype.round = function (t) {
        return this.transform(l.ROUND(t));
      }, t.prototype.toAbs = function () {
        return this.transform(l.TO_ABS());
      }, t.prototype.toRel = function () {
        return this.transform(l.TO_REL());
      }, t.prototype.normalizeHVZ = function (t, e, r) {
        return this.transform(l.NORMALIZE_HVZ(t, e, r));
      }, t.prototype.normalizeST = function () {
        return this.transform(l.NORMALIZE_ST());
      }, t.prototype.qtToC = function () {
        return this.transform(l.QT_TO_C());
      }, t.prototype.aToC = function () {
        return this.transform(l.A_TO_C());
      }, t.prototype.sanitize = function (t) {
        return this.transform(l.SANITIZE(t));
      }, t.prototype.translate = function (t, e) {
        return this.transform(l.TRANSLATE(t, e));
      }, t.prototype.scale = function (t, e) {
        return this.transform(l.SCALE(t, e));
      }, t.prototype.rotate = function (t, e, r) {
        return this.transform(l.ROTATE(t, e, r));
      }, t.prototype.matrix = function (t, e, r, n, i, a) {
        return this.transform(l.MATRIX(t, e, r, n, i, a));
      }, t.prototype.skewX = function (t) {
        return this.transform(l.SKEW_X(t));
      }, t.prototype.skewY = function (t) {
        return this.transform(l.SKEW_Y(t));
      }, t.prototype.xSymmetry = function (t) {
        return this.transform(l.X_AXIS_SYMMETRY(t));
      }, t.prototype.ySymmetry = function (t) {
        return this.transform(l.Y_AXIS_SYMMETRY(t));
      }, t.prototype.annotateArcs = function () {
        return this.transform(l.ANNOTATE_ARCS());
      }, t;
    }(),
        m = function m(t) {
      return " " === t || "\t" === t || "\r" === t || "\n" === t;
    },
        b = function b(t) {
      return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
    },
        w = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.curNumber = "", e.curCommandType = -1, e.curCommandRelative = !1, e.canParseCommandOrComma = !0, e.curNumberHasExp = !1, e.curNumberHasExpDigits = !1, e.curNumberHasDecimal = !1, e.curArgs = [], e;
      }

      return i(e, t), e.prototype.finish = function (t) {
        if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
        return t;
      }, e.prototype.parse = function (t, e) {
        var r = this;
        void 0 === e && (e = []);

        for (var n = function n(t) {
          e.push(t), r.curArgs.length = 0, r.canParseCommandOrComma = !0;
        }, i = 0; i < t.length; i++) {
          var a = t[i],
              o = !(this.curCommandType !== S.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber),
              u = b(a) && ("0" === this.curNumber && "0" === a || o);
          if (!b(a) || u) {
            if ("e" !== a && "E" !== a) {
              if ("-" !== a && "+" !== a || !this.curNumberHasExp || this.curNumberHasExpDigits) {
                if ("." !== a || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                  if (this.curNumber && -1 !== this.curCommandType) {
                    var s = Number(this.curNumber);
                    if (isNaN(s)) throw new SyntaxError("Invalid number ending at " + i);
                    if (this.curCommandType === S.ARC) if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                      if (0 > s) throw new SyntaxError('Expected positive number, got "' + s + '" at index "' + i + '"');
                    } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i + '"');
                    this.curArgs.push(s), this.curArgs.length === k[this.curCommandType] && (S.HORIZ_LINE_TO === this.curCommandType ? n({
                      type: S.HORIZ_LINE_TO,
                      relative: this.curCommandRelative,
                      x: s
                    }) : S.VERT_LINE_TO === this.curCommandType ? n({
                      type: S.VERT_LINE_TO,
                      relative: this.curCommandRelative,
                      y: s
                    }) : this.curCommandType === S.MOVE_TO || this.curCommandType === S.LINE_TO || this.curCommandType === S.SMOOTH_QUAD_TO ? (n({
                      type: this.curCommandType,
                      relative: this.curCommandRelative,
                      x: this.curArgs[0],
                      y: this.curArgs[1]
                    }), S.MOVE_TO === this.curCommandType && (this.curCommandType = S.LINE_TO)) : this.curCommandType === S.CURVE_TO ? n({
                      type: S.CURVE_TO,
                      relative: this.curCommandRelative,
                      x1: this.curArgs[0],
                      y1: this.curArgs[1],
                      x2: this.curArgs[2],
                      y2: this.curArgs[3],
                      x: this.curArgs[4],
                      y: this.curArgs[5]
                    }) : this.curCommandType === S.SMOOTH_CURVE_TO ? n({
                      type: S.SMOOTH_CURVE_TO,
                      relative: this.curCommandRelative,
                      x2: this.curArgs[0],
                      y2: this.curArgs[1],
                      x: this.curArgs[2],
                      y: this.curArgs[3]
                    }) : this.curCommandType === S.QUAD_TO ? n({
                      type: S.QUAD_TO,
                      relative: this.curCommandRelative,
                      x1: this.curArgs[0],
                      y1: this.curArgs[1],
                      x: this.curArgs[2],
                      y: this.curArgs[3]
                    }) : this.curCommandType === S.ARC && n({
                      type: S.ARC,
                      relative: this.curCommandRelative,
                      rX: this.curArgs[0],
                      rY: this.curArgs[1],
                      xRot: this.curArgs[2],
                      lArcFlag: this.curArgs[3],
                      sweepFlag: this.curArgs[4],
                      x: this.curArgs[5],
                      y: this.curArgs[6]
                    })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                  }

                  if (!m(a)) if ("," === a && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;else if ("+" !== a && "-" !== a && "." !== a) {
                    if (u) this.curNumber = a, this.curNumberHasDecimal = !1;else {
                      if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + i + ".");
                      if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + a + '" at index ' + i + ". Command cannot follow comma");
                      if (this.canParseCommandOrComma = !1, "z" !== a && "Z" !== a) {
                        if ("h" === a || "H" === a) this.curCommandType = S.HORIZ_LINE_TO, this.curCommandRelative = "h" === a;else if ("v" === a || "V" === a) this.curCommandType = S.VERT_LINE_TO, this.curCommandRelative = "v" === a;else if ("m" === a || "M" === a) this.curCommandType = S.MOVE_TO, this.curCommandRelative = "m" === a;else if ("l" === a || "L" === a) this.curCommandType = S.LINE_TO, this.curCommandRelative = "l" === a;else if ("c" === a || "C" === a) this.curCommandType = S.CURVE_TO, this.curCommandRelative = "c" === a;else if ("s" === a || "S" === a) this.curCommandType = S.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === a;else if ("q" === a || "Q" === a) this.curCommandType = S.QUAD_TO, this.curCommandRelative = "q" === a;else if ("t" === a || "T" === a) this.curCommandType = S.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === a;else {
                          if ("a" !== a && "A" !== a) throw new SyntaxError('Unexpected character "' + a + '" at index ' + i + ".");
                          this.curCommandType = S.ARC, this.curCommandRelative = "a" === a;
                        }
                      } else e.push({
                        type: S.CLOSE_PATH
                      }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                    }
                  } else this.curNumber = a, this.curNumberHasDecimal = "." === a;
                } else this.curNumber += a, this.curNumberHasDecimal = !0;
              } else this.curNumber += a;
            } else this.curNumber += a, this.curNumberHasExp = !0;
          } else this.curNumber += a, this.curNumberHasExpDigits = this.curNumberHasExp;
        }

        return e;
      }, e.prototype.transform = function (t) {
        return Object.create(this, {
          parse: {
            value: function value(e, r) {
              void 0 === r && (r = []);

              for (var n = 0, i = Object.getPrototypeOf(this).parse.call(this, e); n < i.length; n++) {
                var a = i[n],
                    o = t(a);
                Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
              }

              return r;
            }
          }
        });
      }, e;
    }(x),
        S = function (t) {
      function e(r) {
        var n = t.call(this) || this;
        return n.commands = "string" == typeof r ? e.parse(r) : r, n;
      }

      return i(e, t), e.prototype.encode = function () {
        return e.encode(this.commands);
      }, e.prototype.getBounds = function () {
        var t = l.CALCULATE_BOUNDS();
        return this.transform(t), t;
      }, e.prototype.transform = function (t) {
        for (var e = [], r = 0, n = this.commands; r < n.length; r++) {
          var i = t(n[r]);
          Array.isArray(i) ? e.push.apply(e, i) : e.push(i);
        }

        return this.commands = e, this;
      }, e.encode = function (t) {
        return a(t);
      }, e.parse = function (t) {
        var e = new w(),
            r = [];
        return e.parse(t, r), e.finish(r), r;
      }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e;
    }(x),
        k = ((g = {})[S.MOVE_TO] = 2, g[S.LINE_TO] = 2, g[S.HORIZ_LINE_TO] = 1, g[S.VERT_LINE_TO] = 1, g[S.CLOSE_PATH] = 0, g[S.QUAD_TO] = 4, g[S.SMOOTH_QUAD_TO] = 2, g[S.CURVE_TO] = 6, g[S.SMOOTH_CURVE_TO] = 4, g[S.ARC] = 7, g);
  },
  d1ac: function d1ac(t, e) {},
  d254: function d254(t, e, r) {
    t.exports = r("27d1");
  },
  d339: function d339(t, e, r) {
    var n = r("f446");
    t.exports = n;
  },
  d382: function d382(t, e, r) {
    var n = r("85d3");

    function i(t, e, r) {
      return e in t ? n(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    }

    t.exports = i, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  d383: function d383(t, e, r) {
    "use strict";

    var n = r("9883"),
        i = r("4180"),
        a = r("0363"),
        o = r("c1b2"),
        u = a("species");

    t.exports = function (t) {
      var e = n(t),
          r = i.f;
      o && e && !e[u] && r(e, u, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  },
  d3a3: function d3a3(t, e) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    t.exports = r, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  d5a8: function d5a8(t, e, r) {
    t.exports = r("914b");
  },
  d63b: function d63b(t, e, r) {
    var n = r("0363"),
        i = n("toStringTag"),
        a = {};
    a[i] = "z", t.exports = "[object z]" === String(a);
  },
  d659: function d659(t, e, r) {
    var n = r("7042"),
        i = r("7685");
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.15.2",
      mode: n ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  },
  d666: function d666(t, e, r) {
    var n = r("0273");

    t.exports = function (t, e, r, i) {
      i && i.enumerable ? t[e] = r : n(t, e, r);
    };
  },
  d6d3: function d6d3(t, e, r) {
    var n = r("0c33"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.some;
      return t === i || t instanceof Array && e === i.some ? n : e;
    };
  },
  d7c9: function d7c9(t, e) {
    function r() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    t.exports = r, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  d925e: function d925e(t, e, r) {
    var n = r("a5eb"),
        i = r("c1b2"),
        a = r("4896");
    n({
      target: "Object",
      stat: !0,
      sham: !i
    }, {
      create: a
    });
  },
  d9f3: function d9f3(t, e, r) {
    var n = r("6f8d"),
        i = r("0b7b");

    t.exports = function (t) {
      var e = i(t);
      if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
      return n(e.call(t));
    };
  },
  da43: function da43(t, e, r) {
    r("c81f");
    var n = r("a169");
    t.exports = n("String").includes;
  },
  dae3: function dae3(t, e, r) {
    var n = r("47da");
    t.exports = n;
  },
  db04: function db04(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("44ba").f,
        a = r("6725"),
        o = r("9e51"),
        u = r("1875"),
        s = r("8c58"),
        c = r("7042"),
        f = "".startsWith,
        l = Math.min,
        h = s("startsWith"),
        p = !c && !h && !!function () {
      var t = i(String.prototype, "startsWith");
      return t && !t.writable;
    }();
    n({
      target: "String",
      proto: !0,
      forced: !p && !h
    }, {
      startsWith: function startsWith(t) {
        var e = String(u(this));
        o(t);
        var r = a(l(arguments.length > 1 ? arguments[1] : void 0, e.length)),
            n = String(t);
        return f ? f.call(e, n, r) : e.slice(r, r + n.length) === n;
      }
    });
  },
  dd25: function dd25(t, e, r) {
    var n = r("9e19")["default"],
        i = r("84ed");

    function a(t, e) {
      return !e || "object" !== n(e) && "function" !== typeof e ? i(t) : e;
    }

    t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  de6a: function de6a(t, e, r) {
    var n = r("a5eb"),
        i = r("06fa"),
        a = r("4fff"),
        o = r("5779"),
        u = r("f5fb"),
        s = i(function () {
      o(1);
    });
    n({
      target: "Object",
      stat: !0,
      forced: s,
      sham: !u
    }, {
      getPrototypeOf: function getPrototypeOf(t) {
        return o(a(t));
      }
    });
  },
  dee0: function dee0(t, e, r) {
    var n = r("6414"),
        i = r("638c"),
        a = r("4fff"),
        o = r("6725"),
        u = r("4344"),
        s = [].push,
        c = function c(t) {
      var e = 1 == t,
          r = 2 == t,
          c = 3 == t,
          f = 4 == t,
          l = 6 == t,
          h = 7 == t,
          p = 5 == t || l;
      return function (v, d, y, g) {
        for (var x, m, b = a(v), w = i(b), S = n(d, y, 3), k = o(w.length), A = 0, T = g || u, P = e ? T(v, k) : r || h ? T(v, 0) : void 0; k > A; A++) {
          if ((p || A in w) && (x = w[A], m = S(x, A, b), t)) if (e) P[A] = m;else if (m) switch (t) {
            case 3:
              return !0;

            case 5:
              return x;

            case 6:
              return A;

            case 2:
              s.call(P, x);
          } else switch (t) {
            case 4:
              return !1;

            case 7:
              s.call(P, x);
          }
        }

        return l ? -1 : c || f ? f : P;
      };
    };

    t.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
      filterOut: c(7)
    };
  },
  df10: function df10(t, e, r) {
    t.exports = r("8012");
  },
  dfdb: function dfdb(t, e) {
    t.exports = function (t) {
      return "object" === (0, _typeof2["default"])(t) ? null !== t : "function" === typeof t;
    };
  },
  e219: function e219(t, e, r) {
    var n = r("a5eb"),
        i = r("ee07");
    n({
      global: !0,
      forced: parseFloat != i
    }, {
      parseFloat: i
    });
  },
  e246: function e246(t, e) {
    t.exports = "object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window));
  },
  e332: function e332(t, e, r) {
    var n = r("92cd"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.slice;
      return t === i || t instanceof Array && e === i.slice ? n : e;
    };
  },
  e363: function e363(t, e, r) {
    var n = r("9bfb");
    n("asyncIterator");
  },
  e392: function e392(t, e, r) {
    var n = r("5107"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.map;
      return t === i || t instanceof Array && e === i.map ? n : e;
    };
  },
  e460: function e460(t, e, r) {
    var n = r("cc94"),
        i = r("4fff"),
        a = r("638c"),
        o = r("6725"),
        u = function u(t) {
      return function (e, r, u, s) {
        n(r);
        var c = i(e),
            f = a(c),
            l = o(c.length),
            h = t ? l - 1 : 0,
            p = t ? -1 : 1;
        if (u < 2) while (1) {
          if (h in f) {
            s = f[h], h += p;
            break;
          }

          if (h += p, t ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value");
        }

        for (; t ? h >= 0 : l > h; h += p) {
          h in f && (s = r(s, f[h], h, c));
        }

        return s;
      };
    };

    t.exports = {
      left: u(!1),
      right: u(!0)
    };
  },
  e4f0: function e4f0(t, e, r) {
    t.exports = r("606e");
  },
  e519: function e519(t, e, r) {
    var n = r("a5eb"),
        i = r("6220");
    n({
      target: "Array",
      stat: !0
    }, {
      isArray: i
    });
  },
  e699: function e699(t, e, r) {
    var n = r("9bfb");
    n("match");
  },
  e7cc: function e7cc(t, e, r) {
    var n = r("9bfb");
    n("matchAll");
  },
  e899: function e899(t, e, r) {
    var n = r("7685"),
        i = Function.toString;
    "function" != typeof n.inspectSource && (n.inspectSource = function (t) {
      return i.call(t);
    }), t.exports = n.inspectSource;
  },
  e946: function e946(t, e, r) {
    t.exports = r("aa9b");
  },
  e9d9: function e9d9(t, e, r) {
    "use strict";

    var n = r("cc94"),
        i = r("dfdb"),
        a = [].slice,
        o = {},
        u = function u(t, e, r) {
      if (!(e in o)) {
        for (var n = [], i = 0; i < e; i++) {
          n[i] = "a[" + i + "]";
        }

        o[e] = Function("C,a", "return new C(" + n.join(",") + ")");
      }

      return o[e](t, r);
    };

    t.exports = Function.bind || function (t) {
      var e = n(this),
          r = a.call(arguments, 1),
          o = function o() {
        var n = r.concat(a.call(arguments));
        return this instanceof o ? u(e, n.length, n) : e.apply(t, n);
      };

      return i(e.prototype) && (o.prototype = e.prototype), o;
    };
  },
  ec62: function ec62(t, e, r) {
    var n = r("6f8d"),
        i = r("2f97");
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var t,
          e = !1,
          r = {};

      try {
        t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, t.call(r, []), e = r instanceof Array;
      } catch (a) {}

      return function (r, a) {
        return n(r), i(a), e ? t.call(r, a) : r.__proto__ = a, r;
      };
    }() : void 0);
  },
  edbd: function edbd(t, e, r) {
    var n = r("9883");
    t.exports = n("document", "documentElement");
  },
  ee07: function ee07(t, e, r) {
    var n = r("3ac6"),
        i = r("ff96").trim,
        a = r("81f0"),
        o = n.parseFloat,
        u = 1 / o(a + "-0") !== -1 / 0;
    t.exports = u ? function (t) {
      var e = i(String(t)),
          r = o(e);
      return 0 === r && "-" == e.charAt(0) ? -0 : r;
    } : o;
  },
  ef09: function ef09(t, e, r) {
    var n = r("9bfb");
    n("toStringTag");
  },
  f257: function f257(t, e, r) {
    var n = r("6326");
    t.exports = n;
  },
  f354: function f354(t, e, r) {
    var n = r("3ac6");
    t.exports = n.Promise;
  },
  f446: function f446(t, e, r) {
    r("d925e");
    var n = r("764b"),
        i = n.Object;

    t.exports = function (t, e) {
      return i.create(t, e);
    };
  },
  f4c9: function f4c9(t, e, r) {
    var n = r("3b7b"),
        i = Array.prototype;

    t.exports = function (t) {
      var e = t.indexOf;
      return t === i || t instanceof Array && e === i.indexOf ? n : e;
    };
  },
  f575: function f575(t, e, r) {
    "use strict";

    var n = r("bb83").IteratorPrototype,
        i = r("4896"),
        a = r("2c6c"),
        o = r("2874"),
        u = r("7463"),
        s = function s() {
      return this;
    };

    t.exports = function (t, e, r) {
      var c = e + " Iterator";
      return t.prototype = i(n, {
        next: a(1, r)
      }), o(t, c, !1, !0), u[c] = s, t;
    };
  },
  f5fb: function f5fb(t, e, r) {
    var n = r("06fa");
    t.exports = !n(function () {
      function t() {}

      return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    });
  },
  f86d: function f86d(t, e, r) {
    var n = r("9717");
    t.exports = /web0s(?!.*chrome)/i.test(n);
  },
  f8b4: function f8b4(t, e, r) {
    var n = r("a5eb"),
        i = r("9883"),
        a = r("cc94"),
        o = r("6f8d"),
        u = r("dfdb"),
        s = r("4896"),
        c = r("e9d9"),
        f = r("06fa"),
        l = i("Reflect", "construct"),
        h = f(function () {
      function t() {}

      return !(l(function () {}, [], t) instanceof t);
    }),
        p = !f(function () {
      l(function () {});
    }),
        v = h || p;
    n({
      target: "Reflect",
      stat: !0,
      forced: v,
      sham: v
    }, {
      construct: function construct(t, e) {
        a(t), o(e);
        var r = arguments.length < 3 ? t : a(arguments[2]);
        if (p && !h) return l(t, e, r);

        if (t == r) {
          switch (e.length) {
            case 0:
              return new t();

            case 1:
              return new t(e[0]);

            case 2:
              return new t(e[0], e[1]);

            case 3:
              return new t(e[0], e[1], e[2]);

            case 4:
              return new t(e[0], e[1], e[2], e[3]);
          }

          var n = [null];
          return n.push.apply(n, e), new (c.apply(t, n))();
        }

        var i = r.prototype,
            f = s(u(i) ? i : Object.prototype),
            v = Function.apply.call(t, f, e);
        return u(v) ? v : f;
      }
    });
  },
  f8cb: function f8cb(t, e, r) {
    var n = r("d6d3");
    t.exports = n;
  },
  f96e: function f96e(t, e, r) {
    var n = r("dfdb"),
        i = r("fc48"),
        a = r("0363"),
        o = a("match");

    t.exports = function (t) {
      var e;
      return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
    };
  },
  fa81: function fa81(t, e, r) {
    t.exports = r("5c4c");
  },
  faaa: function faaa(t, e, r) {
    var n = r("6f8d"),
        i = r("8a3b");

    t.exports = function (t, e, r, a) {
      try {
        return a ? e(n(r)[0], r[1]) : e(r);
      } catch (o) {
        throw i(t), o;
      }
    };
  },
  fbaa: function fbaa(t, e, r) {
    r("9a6b");
    var n = r("a169");
    t.exports = n("String").trim;
  },
  fc48: function fc48(t, e) {
    var r = {}.toString;

    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  fc75: function fc75(t, e, r) {
    r("5145"), r("3e47");
    var n = r("0b7b");
    t.exports = n;
  },
  fc93: function fc93(t, e, r) {
    "use strict";

    var n = r("a5eb"),
        i = r("06fa"),
        a = r("6220"),
        o = r("dfdb"),
        u = r("4fff"),
        s = r("6725"),
        c = r("6c15"),
        f = r("4344"),
        l = r("9c96"),
        h = r("0363"),
        p = r("4aa6"),
        v = h("isConcatSpreadable"),
        d = 9007199254740991,
        y = "Maximum allowed index exceeded",
        g = p >= 51 || !i(function () {
      var t = [];
      return t[v] = !1, t.concat()[0] !== t;
    }),
        x = l("concat"),
        m = function m(t) {
      if (!o(t)) return !1;
      var e = t[v];
      return void 0 !== e ? !!e : a(t);
    },
        b = !g || !x;

    n({
      target: "Array",
      proto: !0,
      forced: b
    }, {
      concat: function concat(t) {
        var e,
            r,
            n,
            i,
            a,
            o = u(this),
            l = f(o, 0),
            h = 0;

        for (e = -1, n = arguments.length; e < n; e++) {
          if (a = -1 === e ? o : arguments[e], m(a)) {
            if (i = s(a.length), h + i > d) throw TypeError(y);

            for (r = 0; r < i; r++, h++) {
              r in a && c(l, h, a[r]);
            }
          } else {
            if (h >= d) throw TypeError(y);
            c(l, h++, a);
          }
        }

        return l.length = h, l;
      }
    });
  },
  fd76: function fd76(t, e, r) {
    var n = r("9906");
    t.exports = n;
  },
  ff96: function ff96(t, e, r) {
    var n = r("1875"),
        i = r("81f0"),
        a = "[" + i + "]",
        o = RegExp("^" + a + a + "*"),
        u = RegExp(a + a + "*$"),
        s = function s(t) {
      return function (e) {
        var r = String(n(e));
        return 1 & t && (r = r.replace(o, "")), 2 & t && (r = r.replace(u, "")), r;
      };
    };

    t.exports = {
      start: s(1),
      end: s(2),
      trim: s(3)
    };
  },
  fff5: function fff5(t, e, r) {
    t.exports = r("833c");
  }
}]);