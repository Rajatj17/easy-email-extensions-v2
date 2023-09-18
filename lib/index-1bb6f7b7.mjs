import ta from "react";
import { c as ra } from "./index-7b6f5d54.mjs";
import "easy-email-editor";
import "easy-email-core";
import "react-dom";
import "react-final-form";
import "mjml-browser";
var zn = { exports: {} }, ea;
function ia() {
  return ea || (ea = 1, function(U, k) {
    (function(c, b) {
      U.exports = b();
    })(ra, function() {
      var c = navigator.userAgent, b = navigator.platform, M = /gecko\/\d/i.test(c), L = /MSIE \d/.test(c), J = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(c), Y = /Edge\/(\d+)/.exec(c), E = L || J || Y, _ = E && (L ? document.documentMode || 6 : +(Y || J)[1]), G = !Y && /WebKit\//.test(c), lt = G && /Qt\/\d+\.\d+/.test(c), V = !Y && /Chrome\//.test(c), ae = /Opera\//.test(c), at = /Apple Computer/.test(navigator.vendor), Mi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(c), ir = /PhantomJS/.test(c), Je = at && (/Mobile\/\w+/.test(c) || navigator.maxTouchPoints > 2), Ae = /Android/.test(c), bt = Je || Ae || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(c), me = Je || /Mac/.test(b), zr = /\bCrOS\b/.test(c), xt = /win/i.test(b), ze = ae && c.match(/Version\/(\d*\.\d*)/);
      ze && (ze = Number(ze[1])), ze && ze >= 15 && (ae = !1, G = !0);
      var Ur = me && (lt || ae && (ze == null || ze < 12.11)), st = M || E && _ >= 9;
      function je(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var be = function(e, t) {
        var i = e.className, r = je(t).exec(i);
        if (r) {
          var n = i.slice(r.index + r[0].length);
          e.className = i.slice(0, r.index) + (n ? r[1] + n : "");
        }
      };
      function Ue(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function xe(e, t) {
        return Ue(e).appendChild(t);
      }
      function W(e, t, i, r) {
        var n = document.createElement(e);
        if (i && (n.className = i), r && (n.style.cssText = r), typeof t == "string")
          n.appendChild(document.createTextNode(t));
        else if (t)
          for (var o = 0; o < t.length; ++o)
            n.appendChild(t[o]);
        return n;
      }
      function g(e, t, i, r) {
        var n = W(e, t, i, r);
        return n.setAttribute("role", "presentation"), n;
      }
      var D;
      document.createRange ? D = function(e, t, i, r) {
        var n = document.createRange();
        return n.setEnd(r || e, i), n.setStart(e, t), n;
      } : D = function(e, t, i) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch (n) {
          return r;
        }
        return r.collapse(!0), r.moveEnd("character", i), r.moveStart("character", t), r;
      };
      function C(e, t) {
        if (t.nodeType == 3 && (t = t.parentNode), e.contains)
          return e.contains(t);
        do
          if (t.nodeType == 11 && (t = t.host), t == e)
            return !0;
        while (t = t.parentNode);
      }
      function F() {
        var e;
        try {
          e = document.activeElement;
        } catch (t) {
          e = document.body || null;
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
          e = e.shadowRoot.activeElement;
        return e;
      }
      function oe(e, t) {
        var i = e.className;
        je(t).test(i) || (e.className += (i ? " " : "") + t);
      }
      function Ve(e, t) {
        for (var i = e.split(" "), r = 0; r < i.length; r++)
          i[r] && !je(i[r]).test(t) && (t += " " + i[r]);
        return t;
      }
      var nr = function(e) {
        e.select();
      };
      Je ? nr = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : E && (nr = function(e) {
        try {
          e.select();
        } catch (t) {
        }
      });
      function Di(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, t);
        };
      }
      function Ct(e, t, i) {
        t || (t = {});
        for (var r in e)
          e.hasOwnProperty(r) && (i !== !1 || !t.hasOwnProperty(r)) && (t[r] = e[r]);
        return t;
      }
      function Fe(e, t, i, r, n) {
        t == null && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
        for (var o = r || 0, l = n || 0; ; ) {
          var a = e.indexOf("	", o);
          if (a < 0 || a >= t)
            return l + (t - o);
          l += a - o, l += i - l % i, o = a + 1;
        }
      }
      var ut = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = Di(this.onTimeout, this);
      };
      ut.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +/* @__PURE__ */ new Date() ? e.f() : setTimeout(e.handler, e.time - +/* @__PURE__ */ new Date());
      }, ut.prototype.set = function(e, t) {
        this.f = t;
        var i = +/* @__PURE__ */ new Date() + e;
        (!this.id || i < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = i);
      };
      function ve(e, t) {
        for (var i = 0; i < e.length; ++i)
          if (e[i] == t)
            return i;
        return -1;
      }
      var _n = 50, _r = { toString: function() {
        return "CodeMirror.Pass";
      } }, _e = { scroll: !1 }, Ni = { origin: "*mouse" }, or = { origin: "+move" };
      function Oi(e, t, i) {
        for (var r = 0, n = 0; ; ) {
          var o = e.indexOf("	", r);
          o == -1 && (o = e.length);
          var l = o - r;
          if (o == e.length || n + l >= t)
            return r + Math.min(l, t - n);
          if (n += o - r, n += i - n % i, r = o + 1, n >= t)
            return r;
        }
      }
      var Gr = [""];
      function Ai(e) {
        for (; Gr.length <= e; )
          Gr.push(K(Gr) + " ");
        return Gr[e];
      }
      function K(e) {
        return e[e.length - 1];
      }
      function Kr(e, t) {
        for (var i = [], r = 0; r < e.length; r++)
          i[r] = t(e[r], r);
        return i;
      }
      function aa(e, t, i) {
        for (var r = 0, n = i(t); r < e.length && i(e[r]) <= n; )
          r++;
        e.splice(r, 0, t);
      }
      function Gn() {
      }
      function Kn(e, t) {
        var i;
        return Object.create ? i = Object.create(e) : (Gn.prototype = e, i = new Gn()), t && Ct(t, i), i;
      }
      var sa = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function Wi(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || sa.test(e));
      }
      function Xr(e, t) {
        return t ? t.source.indexOf("\\w") > -1 && Wi(e) ? !0 : t.test(e) : Wi(e);
      }
      function Xn(e) {
        for (var t in e)
          if (e.hasOwnProperty(t) && e[t])
            return !1;
        return !0;
      }
      var ua = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function Hi(e) {
        return e.charCodeAt(0) >= 768 && ua.test(e);
      }
      function qn(e, t, i) {
        for (; (i < 0 ? t > 0 : t < e.length) && Hi(e.charAt(t)); )
          t += i;
        return t;
      }
      function lr(e, t, i) {
        for (var r = t > i ? -1 : 1; ; ) {
          if (t == i)
            return t;
          var n = (t + i) / 2, o = r < 0 ? Math.ceil(n) : Math.floor(n);
          if (o == t)
            return e(o) ? t : i;
          e(o) ? i = o : t = o + r;
        }
      }
      function fa(e, t, i, r) {
        if (!e)
          return r(t, i, "ltr", 0);
        for (var n = !1, o = 0; o < e.length; ++o) {
          var l = e[o];
          (l.from < i && l.to > t || t == i && l.to == t) && (r(Math.max(l.from, t), Math.min(l.to, i), l.level == 1 ? "rtl" : "ltr", o), n = !0);
        }
        n || r(t, i, "ltr");
      }
      var ar = null;
      function sr(e, t, i) {
        var r;
        ar = null;
        for (var n = 0; n < e.length; ++n) {
          var o = e[n];
          if (o.from < t && o.to > t)
            return n;
          o.to == t && (o.from != o.to && i == "before" ? r = n : ar = n), o.from == t && (o.from != o.to && i != "before" ? r = n : ar = n);
        }
        return r != null ? r : ar;
      }
      var ha = function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function i(u) {
          return u <= 247 ? e.charAt(u) : 1424 <= u && u <= 1524 ? "R" : 1536 <= u && u <= 1785 ? t.charAt(u - 1536) : 1774 <= u && u <= 2220 ? "r" : 8192 <= u && u <= 8203 ? "w" : u == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, n = /[stwN]/, o = /[LRr]/, l = /[Lb1n]/, a = /[1n]/;
        function s(u, f, h) {
          this.level = u, this.from = f, this.to = h;
        }
        return function(u, f) {
          var h = f == "ltr" ? "L" : "R";
          if (u.length == 0 || f == "ltr" && !r.test(u))
            return !1;
          for (var p = u.length, d = [], v = 0; v < p; ++v)
            d.push(i(u.charCodeAt(v)));
          for (var y = 0, x = h; y < p; ++y) {
            var w = d[y];
            w == "m" ? d[y] = x : x = w;
          }
          for (var T = 0, S = h; T < p; ++T) {
            var N = d[T];
            N == "1" && S == "r" ? d[T] = "n" : o.test(N) && (S = N, N == "r" && (d[T] = "R"));
          }
          for (var H = 1, A = d[0]; H < p - 1; ++H) {
            var B = d[H];
            B == "+" && A == "1" && d[H + 1] == "1" ? d[H] = "1" : B == "," && A == d[H + 1] && (A == "1" || A == "n") && (d[H] = A), A = B;
          }
          for (var Z = 0; Z < p; ++Z) {
            var ce = d[Z];
            if (ce == ",")
              d[Z] = "N";
            else if (ce == "%") {
              var j = void 0;
              for (j = Z + 1; j < p && d[j] == "%"; ++j)
                ;
              for (var Oe = Z && d[Z - 1] == "!" || j < p && d[j] == "1" ? "1" : "N", Te = Z; Te < j; ++Te)
                d[Te] = Oe;
              Z = j - 1;
            }
          }
          for (var ie = 0, Me = h; ie < p; ++ie) {
            var pe = d[ie];
            Me == "L" && pe == "1" ? d[ie] = "L" : o.test(pe) && (Me = pe);
          }
          for (var le = 0; le < p; ++le)
            if (n.test(d[le])) {
              var ne = void 0;
              for (ne = le + 1; ne < p && n.test(d[ne]); ++ne)
                ;
              for (var $ = (le ? d[le - 1] : h) == "L", De = (ne < p ? d[ne] : h) == "L", tr = $ == De ? $ ? "L" : "R" : h, mt = le; mt < ne; ++mt)
                d[mt] = tr;
              le = ne - 1;
            }
          for (var ye = [], Ze, de = 0; de < p; )
            if (l.test(d[de])) {
              var Rn = de;
              for (++de; de < p && l.test(d[de]); ++de)
                ;
              ye.push(new s(0, Rn, de));
            } else {
              var ot = de, Ht = ye.length, Et = f == "rtl" ? 1 : 0;
              for (++de; de < p && d[de] != "L"; ++de)
                ;
              for (var we = ot; we < de; )
                if (a.test(d[we])) {
                  ot < we && (ye.splice(Ht, 0, new s(1, ot, we)), Ht += Et);
                  var rr = we;
                  for (++we; we < de && a.test(d[we]); ++we)
                    ;
                  ye.splice(Ht, 0, new s(2, rr, we)), Ht += Et, ot = we;
                } else
                  ++we;
              ot < de && ye.splice(Ht, 0, new s(1, ot, de));
            }
          return f == "ltr" && (ye[0].level == 1 && (Ze = u.match(/^\s+/)) && (ye[0].from = Ze[0].length, ye.unshift(new s(0, 0, Ze[0].length))), K(ye).level == 1 && (Ze = u.match(/\s+$/)) && (K(ye).to -= Ze[0].length, ye.push(new s(0, p - Ze[0].length, p)))), f == "rtl" ? ye.reverse() : ye;
        };
      }();
      function $e(e, t) {
        var i = e.order;
        return i == null && (i = e.order = ha(e.text, t)), i;
      }
      var Yn = [], P = function(e, t, i) {
        if (e.addEventListener)
          e.addEventListener(t, i, !1);
        else if (e.attachEvent)
          e.attachEvent("on" + t, i);
        else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || Yn).concat(i);
        }
      };
      function Ei(e, t) {
        return e._handlers && e._handlers[t] || Yn;
      }
      function We(e, t, i) {
        if (e.removeEventListener)
          e.removeEventListener(t, i, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + t, i);
        else {
          var r = e._handlers, n = r && r[t];
          if (n) {
            var o = ve(n, i);
            o > -1 && (r[t] = n.slice(0, o).concat(n.slice(o + 1)));
          }
        }
      }
      function te(e, t) {
        var i = Ei(e, t);
        if (i.length)
          for (var r = Array.prototype.slice.call(arguments, 2), n = 0; n < i.length; ++n)
            i[n].apply(null, r);
      }
      function se(e, t, i) {
        return typeof t == "string" && (t = { type: t, preventDefault: function() {
          this.defaultPrevented = !0;
        } }), te(e, i || t.type, e, t), Fi(t) || t.codemirrorIgnore;
      }
      function Zn(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (var i = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
            ve(i, t[r]) == -1 && i.push(t[r]);
      }
      function Pe(e, t) {
        return Ei(e, t).length > 0;
      }
      function Ft(e) {
        e.prototype.on = function(t, i) {
          P(this, t, i);
        }, e.prototype.off = function(t, i) {
          We(this, t, i);
        };
      }
      function Se(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function Qn(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function Fi(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function ur(e) {
        Se(e), Qn(e);
      }
      function Pi(e) {
        return e.target || e.srcElement;
      }
      function Jn(e) {
        var t = e.which;
        return t == null && (e.button & 1 ? t = 1 : e.button & 2 ? t = 3 : e.button & 4 && (t = 2)), me && e.ctrlKey && t == 1 && (t = 3), t;
      }
      var ca = function() {
        if (E && _ < 9)
          return !1;
        var e = W("div");
        return "draggable" in e || "dragDrop" in e;
      }(), Ii;
      function da(e) {
        if (Ii == null) {
          var t = W("span", "​");
          xe(e, W("span", [t, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Ii = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(E && _ < 8));
        }
        var i = Ii ? W("span", "​") : W("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return i.setAttribute("cm-text", ""), i;
      }
      var Ri;
      function pa(e) {
        if (Ri != null)
          return Ri;
        var t = xe(e, document.createTextNode("AخA")), i = D(t, 0, 1).getBoundingClientRect(), r = D(t, 1, 2).getBoundingClientRect();
        return Ue(e), !i || i.left == i.right ? !1 : Ri = r.right - i.right < 3;
      }
      var Bi = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var t = 0, i = [], r = e.length; t <= r; ) {
          var n = e.indexOf(`
`, t);
          n == -1 && (n = e.length);
          var o = e.slice(t, e.charAt(n - 1) == "\r" ? n - 1 : n), l = o.indexOf("\r");
          l != -1 ? (i.push(o.slice(0, l)), t += l + 1) : (i.push(o), t = n + 1);
        }
        return i;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, va = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch (t) {
          return !1;
        }
      } : function(e) {
        var t;
        try {
          t = e.ownerDocument.selection.createRange();
        } catch (i) {
        }
        return !t || t.parentElement() != e ? !1 : t.compareEndPoints("StartToEnd", t) != 0;
      }, ga = function() {
        var e = W("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), zi = null;
      function ya(e) {
        if (zi != null)
          return zi;
        var t = xe(e, W("span", "x")), i = t.getBoundingClientRect(), r = D(t, 0, 1).getBoundingClientRect();
        return zi = Math.abs(i.left - r.left) > 1;
      }
      var Ui = {}, Pt = {};
      function ma(e, t) {
        arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ui[e] = t;
      }
      function ba(e, t) {
        Pt[e] = t;
      }
      function qr(e) {
        if (typeof e == "string" && Pt.hasOwnProperty(e))
          e = Pt[e];
        else if (e && typeof e.name == "string" && Pt.hasOwnProperty(e.name)) {
          var t = Pt[e.name];
          typeof t == "string" && (t = { name: t }), e = Kn(t, e), e.name = t.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return qr("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return qr("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function _i(e, t) {
        t = qr(t);
        var i = Ui[t.name];
        if (!i)
          return _i(e, "text/plain");
        var r = i(e, t);
        if (It.hasOwnProperty(t.name)) {
          var n = It[t.name];
          for (var o in n)
            n.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = n[o]);
        }
        if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
          for (var l in t.modeProps)
            r[l] = t.modeProps[l];
        return r;
      }
      var It = {};
      function xa(e, t) {
        var i = It.hasOwnProperty(e) ? It[e] : It[e] = {};
        Ct(t, i);
      }
      function wt(e, t) {
        if (t === !0)
          return t;
        if (e.copyState)
          return e.copyState(t);
        var i = {};
        for (var r in t) {
          var n = t[r];
          n instanceof Array && (n = n.concat([])), i[r] = n;
        }
        return i;
      }
      function Gi(e, t) {
        for (var i; e.innerMode && (i = e.innerMode(t), !(!i || i.mode == e)); )
          t = i.state, e = i.mode;
        return i || { mode: e, state: t };
      }
      function jn(e, t, i) {
        return e.startState ? e.startState(t, i) : !0;
      }
      var re = function(e, t, i) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = i;
      };
      re.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, re.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, re.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, re.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, re.prototype.eat = function(e) {
        var t = this.string.charAt(this.pos), i;
        if (typeof e == "string" ? i = t == e : i = t && (e.test ? e.test(t) : e(t)), i)
          return ++this.pos, t;
      }, re.prototype.eatWhile = function(e) {
        for (var t = this.pos; this.eat(e); )
          ;
        return this.pos > t;
      }, re.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, re.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, re.prototype.skipTo = function(e) {
        var t = this.string.indexOf(e, this.pos);
        if (t > -1)
          return this.pos = t, !0;
      }, re.prototype.backUp = function(e) {
        this.pos -= e;
      }, re.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = Fe(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Fe(this.string, this.lineStart, this.tabSize) : 0);
      }, re.prototype.indentation = function() {
        return Fe(this.string, null, this.tabSize) - (this.lineStart ? Fe(this.string, this.lineStart, this.tabSize) : 0);
      }, re.prototype.match = function(e, t, i) {
        if (typeof e == "string") {
          var r = function(l) {
            return i ? l.toLowerCase() : l;
          }, n = this.string.substr(this.pos, e.length);
          if (r(n) == r(e))
            return t !== !1 && (this.pos += e.length), !0;
        } else {
          var o = this.string.slice(this.pos).match(e);
          return o && o.index > 0 ? null : (o && t !== !1 && (this.pos += o[0].length), o);
        }
      }, re.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, re.prototype.hideFirstChars = function(e, t) {
        this.lineStart += e;
        try {
          return t();
        } finally {
          this.lineStart -= e;
        }
      }, re.prototype.lookAhead = function(e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e);
      }, re.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function O(e, t) {
        if (t -= e.first, t < 0 || t >= e.size)
          throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var i = e; !i.lines; )
          for (var r = 0; ; ++r) {
            var n = i.children[r], o = n.chunkSize();
            if (t < o) {
              i = n;
              break;
            }
            t -= o;
          }
        return i.lines[t];
      }
      function St(e, t, i) {
        var r = [], n = t.line;
        return e.iter(t.line, i.line + 1, function(o) {
          var l = o.text;
          n == i.line && (l = l.slice(0, i.ch)), n == t.line && (l = l.slice(t.ch)), r.push(l), ++n;
        }), r;
      }
      function Ki(e, t, i) {
        var r = [];
        return e.iter(t, i, function(n) {
          r.push(n.text);
        }), r;
      }
      function Ge(e, t) {
        var i = t - e.height;
        if (i)
          for (var r = e; r; r = r.parent)
            r.height += i;
      }
      function X(e) {
        if (e.parent == null)
          return null;
        for (var t = e.parent, i = ve(t.lines, e), r = t.parent; r; t = r, r = r.parent)
          for (var n = 0; r.children[n] != t; ++n)
            i += r.children[n].chunkSize();
        return i + t.first;
      }
      function Lt(e, t) {
        var i = e.first;
        e:
          do {
            for (var r = 0; r < e.children.length; ++r) {
              var n = e.children[r], o = n.height;
              if (t < o) {
                e = n;
                continue e;
              }
              t -= o, i += n.chunkSize();
            }
            return i;
          } while (!e.lines);
        for (var l = 0; l < e.lines.length; ++l) {
          var a = e.lines[l], s = a.height;
          if (t < s)
            break;
          t -= s;
        }
        return i + l;
      }
      function fr(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function Xi(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function m(e, t, i) {
        if (i === void 0 && (i = null), !(this instanceof m))
          return new m(e, t, i);
        this.line = e, this.ch = t, this.sticky = i;
      }
      function I(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function qi(e, t) {
        return e.sticky == t.sticky && I(e, t) == 0;
      }
      function Yi(e) {
        return m(e.line, e.ch);
      }
      function Yr(e, t) {
        return I(e, t) < 0 ? t : e;
      }
      function Zr(e, t) {
        return I(e, t) < 0 ? e : t;
      }
      function Vn(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function R(e, t) {
        if (t.line < e.first)
          return m(e.first, 0);
        var i = e.first + e.size - 1;
        return t.line > i ? m(i, O(e, i).text.length) : Ca(t, O(e, t.line).text.length);
      }
      function Ca(e, t) {
        var i = e.ch;
        return i == null || i > t ? m(e.line, t) : i < 0 ? m(e.line, 0) : e;
      }
      function $n(e, t) {
        for (var i = [], r = 0; r < t.length; r++)
          i[r] = R(e, t[r]);
        return i;
      }
      var Qr = function(e, t) {
        this.state = e, this.lookAhead = t;
      }, Ke = function(e, t, i, r) {
        this.state = t, this.doc = e, this.line = i, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      Ke.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }, Ke.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: t && t.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, Ke.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, Ke.fromSaved = function(e, t, i) {
        return t instanceof Qr ? new Ke(e, wt(e.mode, t.state), i, t.lookAhead) : new Ke(e, wt(e.mode, t), i);
      }, Ke.prototype.save = function(e) {
        var t = e !== !1 ? wt(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new Qr(t, this.maxLookAhead) : t;
      };
      function eo(e, t, i, r) {
        var n = [e.state.modeGen], o = {};
        lo(
          e,
          t.text,
          e.doc.mode,
          i,
          function(u, f) {
            return n.push(u, f);
          },
          o,
          r
        );
        for (var l = i.state, a = function(u) {
          i.baseTokens = n;
          var f = e.state.overlays[u], h = 1, p = 0;
          i.state = !0, lo(e, t.text, f.mode, i, function(d, v) {
            for (var y = h; p < d; ) {
              var x = n[h];
              x > d && n.splice(h, 1, d, n[h + 1], x), h += 2, p = Math.min(d, x);
            }
            if (v)
              if (f.opaque)
                n.splice(y, h - y, d, "overlay " + v), h = y + 2;
              else
                for (; y < h; y += 2) {
                  var w = n[y + 1];
                  n[y + 1] = (w ? w + " " : "") + "overlay " + v;
                }
          }, o), i.state = l, i.baseTokens = null, i.baseTokenPos = 1;
        }, s = 0; s < e.state.overlays.length; ++s)
          a(s);
        return { styles: n, classes: o.bgClass || o.textClass ? o : null };
      }
      function to(e, t, i) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = hr(e, X(t)), n = t.text.length > e.options.maxHighlightLength && wt(e.doc.mode, r.state), o = eo(e, t, r);
          n && (r.state = n), t.stateAfter = r.save(!n), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), i === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return t.styles;
      }
      function hr(e, t, i) {
        var r = e.doc, n = e.display;
        if (!r.mode.startState)
          return new Ke(r, !0, t);
        var o = wa(e, t, i), l = o > r.first && O(r, o - 1).stateAfter, a = l ? Ke.fromSaved(r, l, o) : new Ke(r, jn(r.mode), o);
        return r.iter(o, t, function(s) {
          Zi(e, s.text, a);
          var u = a.line;
          s.stateAfter = u == t - 1 || u % 5 == 0 || u >= n.viewFrom && u < n.viewTo ? a.save() : null, a.nextLine();
        }), i && (r.modeFrontier = a.line), a;
      }
      function Zi(e, t, i, r) {
        var n = e.doc.mode, o = new re(t, e.options.tabSize, i);
        for (o.start = o.pos = r || 0, t == "" && ro(n, i.state); !o.eol(); )
          Qi(n, o, i.state), o.start = o.pos;
      }
      function ro(e, t) {
        if (e.blankLine)
          return e.blankLine(t);
        if (e.innerMode) {
          var i = Gi(e, t);
          if (i.mode.blankLine)
            return i.mode.blankLine(i.state);
        }
      }
      function Qi(e, t, i, r) {
        for (var n = 0; n < 10; n++) {
          r && (r[0] = Gi(e, i).mode);
          var o = e.token(t, i);
          if (t.pos > t.start)
            return o;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var io = function(e, t, i) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = i;
      };
      function no(e, t, i, r) {
        var n = e.doc, o = n.mode, l;
        t = R(n, t);
        var a = O(n, t.line), s = hr(e, t.line, i), u = new re(a.text, e.options.tabSize, s), f;
        for (r && (f = []); (r || u.pos < t.ch) && !u.eol(); )
          u.start = u.pos, l = Qi(o, u, s.state), r && f.push(new io(u, l, wt(n.mode, s.state)));
        return r ? f : new io(u, l, s.state);
      }
      function oo(e, t) {
        if (e)
          for (; ; ) {
            var i = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!i)
              break;
            e = e.slice(0, i.index) + e.slice(i.index + i[0].length);
            var r = i[1] ? "bgClass" : "textClass";
            t[r] == null ? t[r] = i[2] : new RegExp("(?:^|\\s)" + i[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + i[2]);
          }
        return e;
      }
      function lo(e, t, i, r, n, o, l) {
        var a = i.flattenSpans;
        a == null && (a = e.options.flattenSpans);
        var s = 0, u = null, f = new re(t, e.options.tabSize, r), h, p = e.options.addModeClass && [null];
        for (t == "" && oo(ro(i, r.state), o); !f.eol(); ) {
          if (f.pos > e.options.maxHighlightLength ? (a = !1, l && Zi(e, t, r, f.pos), f.pos = t.length, h = null) : h = oo(Qi(i, f, r.state, p), o), p) {
            var d = p[0].name;
            d && (h = "m-" + (h ? d + " " + h : d));
          }
          if (!a || u != h) {
            for (; s < f.start; )
              s = Math.min(f.start, s + 5e3), n(s, u);
            u = h;
          }
          f.start = f.pos;
        }
        for (; s < f.pos; ) {
          var v = Math.min(f.pos, s + 5e3);
          n(v, u), s = v;
        }
      }
      function wa(e, t, i) {
        for (var r, n, o = e.doc, l = i ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > l; --a) {
          if (a <= o.first)
            return o.first;
          var s = O(o, a - 1), u = s.stateAfter;
          if (u && (!i || a + (u instanceof Qr ? u.lookAhead : 0) <= o.modeFrontier))
            return a;
          var f = Fe(s.text, null, e.options.tabSize);
          (n == null || r > f) && (n = a - 1, r = f);
        }
        return n;
      }
      function Sa(e, t) {
        if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
          for (var i = e.first, r = t - 1; r > i; r--) {
            var n = O(e, r).stateAfter;
            if (n && (!(n instanceof Qr) || r + n.lookAhead < t)) {
              i = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, i);
        }
      }
      var ao = !1, et = !1;
      function La() {
        ao = !0;
      }
      function ka() {
        et = !0;
      }
      function Jr(e, t, i) {
        this.marker = e, this.from = t, this.to = i;
      }
      function cr(e, t) {
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var r = e[i];
            if (r.marker == t)
              return r;
          }
      }
      function Ta(e, t) {
        for (var i, r = 0; r < e.length; ++r)
          e[r] != t && (i || (i = [])).push(e[r]);
        return i;
      }
      function Ma(e, t, i) {
        var r = i && window.WeakSet && (i.markedSpans || (i.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && r.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], r && r.add(e.markedSpans)), t.marker.attachLine(e);
      }
      function Da(e, t, i) {
        var r;
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var o = e[n], l = o.marker, a = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
            if (a || o.from == t && l.type == "bookmark" && (!i || !o.marker.insertLeft)) {
              var s = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
              (r || (r = [])).push(new Jr(l, o.from, s ? null : o.to));
            }
          }
        return r;
      }
      function Na(e, t, i) {
        var r;
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var o = e[n], l = o.marker, a = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
            if (a || o.from == t && l.type == "bookmark" && (!i || o.marker.insertLeft)) {
              var s = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
              (r || (r = [])).push(new Jr(
                l,
                s ? null : o.from - t,
                o.to == null ? null : o.to - t
              ));
            }
          }
        return r;
      }
      function Ji(e, t) {
        if (t.full)
          return null;
        var i = fr(e, t.from.line) && O(e, t.from.line).markedSpans, r = fr(e, t.to.line) && O(e, t.to.line).markedSpans;
        if (!i && !r)
          return null;
        var n = t.from.ch, o = t.to.ch, l = I(t.from, t.to) == 0, a = Da(i, n, l), s = Na(r, o, l), u = t.text.length == 1, f = K(t.text).length + (u ? n : 0);
        if (a)
          for (var h = 0; h < a.length; ++h) {
            var p = a[h];
            if (p.to == null) {
              var d = cr(s, p.marker);
              d ? u && (p.to = d.to == null ? null : d.to + f) : p.to = n;
            }
          }
        if (s)
          for (var v = 0; v < s.length; ++v) {
            var y = s[v];
            if (y.to != null && (y.to += f), y.from == null) {
              var x = cr(a, y.marker);
              x || (y.from = f, u && (a || (a = [])).push(y));
            } else
              y.from += f, u && (a || (a = [])).push(y);
          }
        a && (a = so(a)), s && s != a && (s = so(s));
        var w = [a];
        if (!u) {
          var T = t.text.length - 2, S;
          if (T > 0 && a)
            for (var N = 0; N < a.length; ++N)
              a[N].to == null && (S || (S = [])).push(new Jr(a[N].marker, null, null));
          for (var H = 0; H < T; ++H)
            w.push(S);
          w.push(s);
        }
        return w;
      }
      function so(e) {
        for (var t = 0; t < e.length; ++t) {
          var i = e[t];
          i.from != null && i.from == i.to && i.marker.clearWhenEmpty !== !1 && e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function Oa(e, t, i) {
        var r = null;
        if (e.iter(t.line, i.line + 1, function(d) {
          if (d.markedSpans)
            for (var v = 0; v < d.markedSpans.length; ++v) {
              var y = d.markedSpans[v].marker;
              y.readOnly && (!r || ve(r, y) == -1) && (r || (r = [])).push(y);
            }
        }), !r)
          return null;
        for (var n = [{ from: t, to: i }], o = 0; o < r.length; ++o)
          for (var l = r[o], a = l.find(0), s = 0; s < n.length; ++s) {
            var u = n[s];
            if (!(I(u.to, a.from) < 0 || I(u.from, a.to) > 0)) {
              var f = [s, 1], h = I(u.from, a.from), p = I(u.to, a.to);
              (h < 0 || !l.inclusiveLeft && !h) && f.push({ from: u.from, to: a.from }), (p > 0 || !l.inclusiveRight && !p) && f.push({ from: a.to, to: u.to }), n.splice.apply(n, f), s += f.length - 3;
            }
          }
        return n;
      }
      function uo(e) {
        var t = e.markedSpans;
        if (t) {
          for (var i = 0; i < t.length; ++i)
            t[i].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function fo(e, t) {
        if (t) {
          for (var i = 0; i < t.length; ++i)
            t[i].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function jr(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function Vr(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function ji(e, t) {
        var i = e.lines.length - t.lines.length;
        if (i != 0)
          return i;
        var r = e.find(), n = t.find(), o = I(r.from, n.from) || jr(e) - jr(t);
        if (o)
          return -o;
        var l = I(r.to, n.to) || Vr(e) - Vr(t);
        return l || t.id - e.id;
      }
      function ho(e, t) {
        var i = et && e.markedSpans, r;
        if (i)
          for (var n = void 0, o = 0; o < i.length; ++o)
            n = i[o], n.marker.collapsed && (t ? n.from : n.to) == null && (!r || ji(r, n.marker) < 0) && (r = n.marker);
        return r;
      }
      function co(e) {
        return ho(e, !0);
      }
      function $r(e) {
        return ho(e, !1);
      }
      function Aa(e, t) {
        var i = et && e.markedSpans, r;
        if (i)
          for (var n = 0; n < i.length; ++n) {
            var o = i[n];
            o.marker.collapsed && (o.from == null || o.from < t) && (o.to == null || o.to > t) && (!r || ji(r, o.marker) < 0) && (r = o.marker);
          }
        return r;
      }
      function po(e, t, i, r, n) {
        var o = O(e, t), l = et && o.markedSpans;
        if (l)
          for (var a = 0; a < l.length; ++a) {
            var s = l[a];
            if (s.marker.collapsed) {
              var u = s.marker.find(0), f = I(u.from, i) || jr(s.marker) - jr(n), h = I(u.to, r) || Vr(s.marker) - Vr(n);
              if (!(f >= 0 && h <= 0 || f <= 0 && h >= 0) && (f <= 0 && (s.marker.inclusiveRight && n.inclusiveLeft ? I(u.to, i) >= 0 : I(u.to, i) > 0) || f >= 0 && (s.marker.inclusiveRight && n.inclusiveLeft ? I(u.from, r) <= 0 : I(u.from, r) < 0)))
                return !0;
            }
          }
      }
      function Xe(e) {
        for (var t; t = co(e); )
          e = t.find(-1, !0).line;
        return e;
      }
      function Wa(e) {
        for (var t; t = $r(e); )
          e = t.find(1, !0).line;
        return e;
      }
      function Ha(e) {
        for (var t, i; t = $r(e); )
          e = t.find(1, !0).line, (i || (i = [])).push(e);
        return i;
      }
      function Vi(e, t) {
        var i = O(e, t), r = Xe(i);
        return i == r ? t : X(r);
      }
      function vo(e, t) {
        if (t > e.lastLine())
          return t;
        var i = O(e, t), r;
        if (!ft(e, i))
          return t;
        for (; r = $r(i); )
          i = r.find(1, !0).line;
        return X(i) + 1;
      }
      function ft(e, t) {
        var i = et && t.markedSpans;
        if (i) {
          for (var r = void 0, n = 0; n < i.length; ++n)
            if (r = i[n], !!r.marker.collapsed) {
              if (r.from == null)
                return !0;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && $i(e, t, r))
                return !0;
            }
        }
      }
      function $i(e, t, i) {
        if (i.to == null) {
          var r = i.marker.find(1, !0);
          return $i(e, r.line, cr(r.line.markedSpans, i.marker));
        }
        if (i.marker.inclusiveRight && i.to == t.text.length)
          return !0;
        for (var n = void 0, o = 0; o < t.markedSpans.length; ++o)
          if (n = t.markedSpans[o], n.marker.collapsed && !n.marker.widgetNode && n.from == i.to && (n.to == null || n.to != i.from) && (n.marker.inclusiveLeft || i.marker.inclusiveRight) && $i(e, t, n))
            return !0;
      }
      function tt(e) {
        e = Xe(e);
        for (var t = 0, i = e.parent, r = 0; r < i.lines.length; ++r) {
          var n = i.lines[r];
          if (n == e)
            break;
          t += n.height;
        }
        for (var o = i.parent; o; i = o, o = i.parent)
          for (var l = 0; l < o.children.length; ++l) {
            var a = o.children[l];
            if (a == i)
              break;
            t += a.height;
          }
        return t;
      }
      function ei(e) {
        if (e.height == 0)
          return 0;
        for (var t = e.text.length, i, r = e; i = co(r); ) {
          var n = i.find(0, !0);
          r = n.from.line, t += n.from.ch - n.to.ch;
        }
        for (r = e; i = $r(r); ) {
          var o = i.find(0, !0);
          t -= r.text.length - o.from.ch, r = o.to.line, t += r.text.length - o.to.ch;
        }
        return t;
      }
      function en(e) {
        var t = e.display, i = e.doc;
        t.maxLine = O(i, i.first), t.maxLineLength = ei(t.maxLine), t.maxLineChanged = !0, i.iter(function(r) {
          var n = ei(r);
          n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = r);
        });
      }
      var Rt = function(e, t, i) {
        this.text = e, fo(this, t), this.height = i ? i(this) : 1;
      };
      Rt.prototype.lineNo = function() {
        return X(this);
      }, Ft(Rt);
      function Ea(e, t, i, r) {
        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), uo(e), fo(e, i);
        var n = r ? r(e) : 1;
        n != e.height && Ge(e, n);
      }
      function Fa(e) {
        e.parent = null, uo(e);
      }
      var Pa = {}, Ia = {};
      function go(e, t) {
        if (!e || /^\s*$/.test(e))
          return null;
        var i = t.addModeClass ? Ia : Pa;
        return i[e] || (i[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function yo(e, t) {
        var i = g("span", null, null, G ? "padding-right: .1px" : null), r = {
          pre: g("pre", [i], "CodeMirror-line"),
          content: i,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
        t.measure = {};
        for (var n = 0; n <= (t.rest ? t.rest.length : 0); n++) {
          var o = n ? t.rest[n - 1] : t.line, l = void 0;
          r.pos = 0, r.addToken = Ba, pa(e.display.measure) && (l = $e(o, e.doc.direction)) && (r.addToken = Ua(r.addToken, l)), r.map = [];
          var a = t != e.display.externalMeasured && X(o);
          _a(o, r, to(e, o, a)), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = Ve(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = Ve(o.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(da(e.display.measure))), n == 0 ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (G) {
          var s = r.content.lastChild;
          (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return te(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = Ve(r.pre.className, r.textClass || "")), r;
      }
      function Ra(e) {
        var t = W("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
      }
      function Ba(e, t, i, r, n, o, l) {
        if (t) {
          var a = e.splitSpaces ? za(t, e.trailingSpace) : t, s = e.cm.state.specialChars, u = !1, f;
          if (!s.test(t))
            e.col += t.length, f = document.createTextNode(a), e.map.push(e.pos, e.pos + t.length, f), E && _ < 9 && (u = !0), e.pos += t.length;
          else {
            f = document.createDocumentFragment();
            for (var h = 0; ; ) {
              s.lastIndex = h;
              var p = s.exec(t), d = p ? p.index - h : t.length - h;
              if (d) {
                var v = document.createTextNode(a.slice(h, h + d));
                E && _ < 9 ? f.appendChild(W("span", [v])) : f.appendChild(v), e.map.push(e.pos, e.pos + d, v), e.col += d, e.pos += d;
              }
              if (!p)
                break;
              h += d + 1;
              var y = void 0;
              if (p[0] == "	") {
                var x = e.cm.options.tabSize, w = x - e.col % x;
                y = f.appendChild(W("span", Ai(w), "cm-tab")), y.setAttribute("role", "presentation"), y.setAttribute("cm-text", "	"), e.col += w;
              } else
                p[0] == "\r" || p[0] == `
` ? (y = f.appendChild(W("span", p[0] == "\r" ? "␍" : "␤", "cm-invalidchar")), y.setAttribute("cm-text", p[0]), e.col += 1) : (y = e.cm.options.specialCharPlaceholder(p[0]), y.setAttribute("cm-text", p[0]), E && _ < 9 ? f.appendChild(W("span", [y])) : f.appendChild(y), e.col += 1);
              e.map.push(e.pos, e.pos + 1, y), e.pos++;
            }
          }
          if (e.trailingSpace = a.charCodeAt(t.length - 1) == 32, i || r || n || u || o || l) {
            var T = i || "";
            r && (T += r), n && (T += n);
            var S = W("span", [f], T, o);
            if (l)
              for (var N in l)
                l.hasOwnProperty(N) && N != "style" && N != "class" && S.setAttribute(N, l[N]);
            return e.content.appendChild(S);
          }
          e.content.appendChild(f);
        }
      }
      function za(e, t) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var i = t, r = "", n = 0; n < e.length; n++) {
          var o = e.charAt(n);
          o == " " && i && (n == e.length - 1 || e.charCodeAt(n + 1) == 32) && (o = " "), r += o, i = o == " ";
        }
        return r;
      }
      function Ua(e, t) {
        return function(i, r, n, o, l, a, s) {
          n = n ? n + " cm-force-border" : "cm-force-border";
          for (var u = i.pos, f = u + r.length; ; ) {
            for (var h = void 0, p = 0; p < t.length && (h = t[p], !(h.to > u && h.from <= u)); p++)
              ;
            if (h.to >= f)
              return e(i, r, n, o, l, a, s);
            e(i, r.slice(0, h.to - u), n, o, null, a, s), o = null, r = r.slice(h.to - u), u = h.to;
          }
        };
      }
      function mo(e, t, i, r) {
        var n = !r && i.widgetNode;
        n && e.map.push(e.pos, e.pos + t, n), !r && e.cm.display.input.needsContentAttribute && (n || (n = e.content.appendChild(document.createElement("span"))), n.setAttribute("cm-marker", i.id)), n && (e.cm.display.input.setUneditable(n), e.content.appendChild(n)), e.pos += t, e.trailingSpace = !1;
      }
      function _a(e, t, i) {
        var r = e.markedSpans, n = e.text, o = 0;
        if (!r) {
          for (var l = 1; l < i.length; l += 2)
            t.addToken(t, n.slice(o, o = i[l]), go(i[l + 1], t.cm.options));
          return;
        }
        for (var a = n.length, s = 0, u = 1, f = "", h, p, d = 0, v, y, x, w, T; ; ) {
          if (d == s) {
            v = y = x = p = "", T = null, w = null, d = 1 / 0;
            for (var S = [], N = void 0, H = 0; H < r.length; ++H) {
              var A = r[H], B = A.marker;
              if (B.type == "bookmark" && A.from == s && B.widgetNode)
                S.push(B);
              else if (A.from <= s && (A.to == null || A.to > s || B.collapsed && A.to == s && A.from == s)) {
                if (A.to != null && A.to != s && d > A.to && (d = A.to, y = ""), B.className && (v += " " + B.className), B.css && (p = (p ? p + ";" : "") + B.css), B.startStyle && A.from == s && (x += " " + B.startStyle), B.endStyle && A.to == d && (N || (N = [])).push(B.endStyle, A.to), B.title && ((T || (T = {})).title = B.title), B.attributes)
                  for (var Z in B.attributes)
                    (T || (T = {}))[Z] = B.attributes[Z];
                B.collapsed && (!w || ji(w.marker, B) < 0) && (w = A);
              } else
                A.from > s && d > A.from && (d = A.from);
            }
            if (N)
              for (var ce = 0; ce < N.length; ce += 2)
                N[ce + 1] == d && (y += " " + N[ce]);
            if (!w || w.from == s)
              for (var j = 0; j < S.length; ++j)
                mo(t, 0, S[j]);
            if (w && (w.from || 0) == s) {
              if (mo(
                t,
                (w.to == null ? a + 1 : w.to) - s,
                w.marker,
                w.from == null
              ), w.to == null)
                return;
              w.to == s && (w = !1);
            }
          }
          if (s >= a)
            break;
          for (var Oe = Math.min(a, d); ; ) {
            if (f) {
              var Te = s + f.length;
              if (!w) {
                var ie = Te > Oe ? f.slice(0, Oe - s) : f;
                t.addToken(
                  t,
                  ie,
                  h ? h + v : v,
                  x,
                  s + ie.length == d ? y : "",
                  p,
                  T
                );
              }
              if (Te >= Oe) {
                f = f.slice(Oe - s), s = Oe;
                break;
              }
              s = Te, x = "";
            }
            f = n.slice(o, o = i[u++]), h = go(i[u++], t.cm.options);
          }
        }
      }
      function bo(e, t, i) {
        this.line = t, this.rest = Ha(t), this.size = this.rest ? X(K(this.rest)) - i + 1 : 1, this.node = this.text = null, this.hidden = ft(e, t);
      }
      function ti(e, t, i) {
        for (var r = [], n, o = t; o < i; o = n) {
          var l = new bo(e.doc, O(e.doc, o), o);
          n = o + l.size, r.push(l);
        }
        return r;
      }
      var Bt = null;
      function Ga(e) {
        Bt ? Bt.ops.push(e) : e.ownsGroup = Bt = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function Ka(e) {
        var t = e.delayedCallbacks, i = 0;
        do {
          for (; i < t.length; i++)
            t[i].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var n = e.ops[r];
            if (n.cursorActivityHandlers)
              for (; n.cursorActivityCalled < n.cursorActivityHandlers.length; )
                n.cursorActivityHandlers[n.cursorActivityCalled++].call(null, n.cm);
          }
        } while (i < t.length);
      }
      function Xa(e, t) {
        var i = e.ownsGroup;
        if (i)
          try {
            Ka(i);
          } finally {
            Bt = null, t(i);
          }
      }
      var dr = null;
      function ue(e, t) {
        var i = Ei(e, t);
        if (i.length) {
          var r = Array.prototype.slice.call(arguments, 2), n;
          Bt ? n = Bt.delayedCallbacks : dr ? n = dr : (n = dr = [], setTimeout(qa, 0));
          for (var o = function(a) {
            n.push(function() {
              return i[a].apply(null, r);
            });
          }, l = 0; l < i.length; ++l)
            o(l);
        }
      }
      function qa() {
        var e = dr;
        dr = null;
        for (var t = 0; t < e.length; ++t)
          e[t]();
      }
      function xo(e, t, i, r) {
        for (var n = 0; n < t.changes.length; n++) {
          var o = t.changes[n];
          o == "text" ? Za(e, t) : o == "gutter" ? wo(e, t, i, r) : o == "class" ? tn(e, t) : o == "widget" && Qa(e, t, r);
        }
        t.changes = null;
      }
      function pr(e) {
        return e.node == e.text && (e.node = W("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), E && _ < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function Ya(e, t) {
        var i = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (i && (i += " CodeMirror-linebackground"), t.background)
          i ? t.background.className = i : (t.background.parentNode.removeChild(t.background), t.background = null);
        else if (i) {
          var r = pr(t);
          t.background = r.insertBefore(W("div", null, i), r.firstChild), e.display.input.setUneditable(t.background);
        }
      }
      function Co(e, t) {
        var i = e.display.externalMeasured;
        return i && i.line == t.line ? (e.display.externalMeasured = null, t.measure = i.measure, i.built) : yo(e, t);
      }
      function Za(e, t) {
        var i = t.text.className, r = Co(e, t);
        t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, tn(e, t)) : i && (t.text.className = i);
      }
      function tn(e, t) {
        Ya(e, t), t.line.wrapClass ? pr(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
        var i = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
        t.text.className = i || "";
      }
      function wo(e, t, i, r) {
        if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
          var n = pr(t);
          t.gutterBackground = W(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(t.gutterBackground), n.insertBefore(t.gutterBackground, t.text);
        }
        var o = t.line.gutterMarkers;
        if (e.options.lineNumbers || o) {
          var l = pr(t), a = t.gutter = W("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (a.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(a), l.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), e.options.lineNumbers && (!o || !o["CodeMirror-linenumbers"]) && (t.lineNumber = a.appendChild(
            W(
              "div",
              Xi(e.options, i),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), o)
            for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
              var u = e.display.gutterSpecs[s].className, f = o.hasOwnProperty(u) && o[u];
              f && a.appendChild(W(
                "div",
                [f],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"
              ));
            }
        }
      }
      function Qa(e, t, i) {
        t.alignable && (t.alignable = null);
        for (var r = je("CodeMirror-linewidget"), n = t.node.firstChild, o = void 0; n; n = o)
          o = n.nextSibling, r.test(n.className) && t.node.removeChild(n);
        So(e, t, i);
      }
      function Ja(e, t, i, r) {
        var n = Co(e, t);
        return t.text = t.node = n.pre, n.bgClass && (t.bgClass = n.bgClass), n.textClass && (t.textClass = n.textClass), tn(e, t), wo(e, t, i, r), So(e, t, r), t.node;
      }
      function So(e, t, i) {
        if (Lo(e, t.line, t, i, !0), t.rest)
          for (var r = 0; r < t.rest.length; r++)
            Lo(e, t.rest[r], t, i, !1);
      }
      function Lo(e, t, i, r, n) {
        if (t.widgets)
          for (var o = pr(i), l = 0, a = t.widgets; l < a.length; ++l) {
            var s = a[l], u = W("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
            s.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), ja(s, u, i, r), e.display.input.setUneditable(u), n && s.above ? o.insertBefore(u, i.gutter || i.text) : o.appendChild(u), ue(s, "redraw");
          }
      }
      function ja(e, t, i, r) {
        if (e.noHScroll) {
          (i.alignable || (i.alignable = [])).push(t);
          var n = r.wrapperWidth;
          t.style.left = r.fixedPos + "px", e.coverGutter || (n -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = n + "px";
        }
        e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function vr(e) {
        if (e.height != null)
          return e.height;
        var t = e.doc.cm;
        if (!t)
          return 0;
        if (!C(document.body, e.node)) {
          var i = "position: relative;";
          e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"), xe(t.display.measure, W("div", [e.node], null, i));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function rt(e, t) {
        for (var i = Pi(t); i != e.wrapper; i = i.parentNode)
          if (!i || i.nodeType == 1 && i.getAttribute("cm-ignore-events") == "true" || i.parentNode == e.sizer && i != e.mover)
            return !0;
      }
      function ri(e) {
        return e.lineSpace.offsetTop;
      }
      function rn(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function ko(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var t = xe(e.measure, W("pre", "x", "CodeMirror-line-like")), i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle, r = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function qe(e) {
        return _n - e.display.nativeBarWidth;
      }
      function kt(e) {
        return e.display.scroller.clientWidth - qe(e) - e.display.barWidth;
      }
      function nn(e) {
        return e.display.scroller.clientHeight - qe(e) - e.display.barHeight;
      }
      function Va(e, t, i) {
        var r = e.options.lineWrapping, n = r && kt(e);
        if (!t.measure.heights || r && t.measure.width != n) {
          var o = t.measure.heights = [];
          if (r) {
            t.measure.width = n;
            for (var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
              var s = l[a], u = l[a + 1];
              Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - i.top);
            }
          }
          o.push(i.bottom - i.top);
        }
      }
      function To(e, t, i) {
        if (e.line == t)
          return { map: e.measure.map, cache: e.measure.cache };
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return { map: e.measure.maps[r], cache: e.measure.caches[r] };
        for (var n = 0; n < e.rest.length; n++)
          if (X(e.rest[n]) > i)
            return { map: e.measure.maps[n], cache: e.measure.caches[n], before: !0 };
      }
      function $a(e, t) {
        t = Xe(t);
        var i = X(t), r = e.display.externalMeasured = new bo(e.doc, t, i);
        r.lineN = i;
        var n = r.built = yo(e, r);
        return r.text = n.pre, xe(e.display.lineMeasure, n.pre), r;
      }
      function Mo(e, t, i, r) {
        return Ye(e, zt(e, t), i, r);
      }
      function on(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[Dt(e, t)];
        var i = e.display.externalMeasured;
        if (i && t >= i.lineN && t < i.lineN + i.size)
          return i;
      }
      function zt(e, t) {
        var i = X(t), r = on(e, i);
        r && !r.text ? r = null : r && r.changes && (xo(e, r, i, fn(e)), e.curOp.forceUpdate = !0), r || (r = $a(e, t));
        var n = To(r, t, i);
        return {
          line: t,
          view: r,
          rect: null,
          map: n.map,
          cache: n.cache,
          before: n.before,
          hasHeights: !1
        };
      }
      function Ye(e, t, i, r, n) {
        t.before && (i = -1);
        var o = i + (r || ""), l;
        return t.cache.hasOwnProperty(o) ? l = t.cache[o] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Va(e, t.view, t.rect), t.hasHeights = !0), l = ts(e, t, i, r), l.bogus || (t.cache[o] = l)), {
          left: l.left,
          right: l.right,
          top: n ? l.rtop : l.top,
          bottom: n ? l.rbottom : l.bottom
        };
      }
      var Do = { left: 0, right: 0, top: 0, bottom: 0 };
      function No(e, t, i) {
        for (var r, n, o, l, a, s, u = 0; u < e.length; u += 3)
          if (a = e[u], s = e[u + 1], t < a ? (n = 0, o = 1, l = "left") : t < s ? (n = t - a, o = n + 1) : (u == e.length - 3 || t == s && e[u + 3] > t) && (o = s - a, n = o - 1, t >= s && (l = "right")), n != null) {
            if (r = e[u + 2], a == s && i == (r.insertLeft ? "left" : "right") && (l = i), i == "left" && n == 0)
              for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                r = e[(u -= 3) + 2], l = "left";
            if (i == "right" && n == s - a)
              for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; )
                r = e[(u += 3) + 2], l = "right";
            break;
          }
        return { node: r, start: n, end: o, collapse: l, coverStart: a, coverEnd: s };
      }
      function es(e, t) {
        var i = Do;
        if (t == "left")
          for (var r = 0; r < e.length && (i = e[r]).left == i.right; r++)
            ;
        else
          for (var n = e.length - 1; n >= 0 && (i = e[n]).left == i.right; n--)
            ;
        return i;
      }
      function ts(e, t, i, r) {
        var n = No(t.map, i, r), o = n.node, l = n.start, a = n.end, s = n.collapse, u;
        if (o.nodeType == 3) {
          for (var f = 0; f < 4; f++) {
            for (; l && Hi(t.line.text.charAt(n.coverStart + l)); )
              --l;
            for (; n.coverStart + a < n.coverEnd && Hi(t.line.text.charAt(n.coverStart + a)); )
              ++a;
            if (E && _ < 9 && l == 0 && a == n.coverEnd - n.coverStart ? u = o.parentNode.getBoundingClientRect() : u = es(D(o, l, a).getClientRects(), r), u.left || u.right || l == 0)
              break;
            a = l, l = l - 1, s = "right";
          }
          E && _ < 11 && (u = rs(e.display.measure, u));
        } else {
          l > 0 && (s = r = "right");
          var h;
          e.options.lineWrapping && (h = o.getClientRects()).length > 1 ? u = h[r == "right" ? h.length - 1 : 0] : u = o.getBoundingClientRect();
        }
        if (E && _ < 9 && !l && (!u || !u.left && !u.right)) {
          var p = o.parentNode.getClientRects()[0];
          p ? u = { left: p.left, right: p.left + _t(e.display), top: p.top, bottom: p.bottom } : u = Do;
        }
        for (var d = u.top - t.rect.top, v = u.bottom - t.rect.top, y = (d + v) / 2, x = t.view.measure.heights, w = 0; w < x.length - 1 && !(y < x[w]); w++)
          ;
        var T = w ? x[w - 1] : 0, S = x[w], N = {
          left: (s == "right" ? u.right : u.left) - t.rect.left,
          right: (s == "left" ? u.left : u.right) - t.rect.left,
          top: T,
          bottom: S
        };
        return !u.left && !u.right && (N.bogus = !0), e.options.singleCursorHeightPerLine || (N.rtop = d, N.rbottom = v), N;
      }
      function rs(e, t) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !ya(e))
          return t;
        var i = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: t.left * i,
          right: t.right * i,
          top: t.top * r,
          bottom: t.bottom * r
        };
      }
      function Oo(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var t = 0; t < e.rest.length; t++)
            e.measure.caches[t] = {};
      }
      function Ao(e) {
        e.display.externalMeasure = null, Ue(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
          Oo(e.display.view[t]);
      }
      function gr(e) {
        Ao(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function Wo() {
        return V && Ae ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
      }
      function Ho() {
        return V && Ae ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
      }
      function ln(e) {
        var t = 0;
        if (e.widgets)
          for (var i = 0; i < e.widgets.length; ++i)
            e.widgets[i].above && (t += vr(e.widgets[i]));
        return t;
      }
      function ii(e, t, i, r, n) {
        if (!n) {
          var o = ln(t);
          i.top += o, i.bottom += o;
        }
        if (r == "line")
          return i;
        r || (r = "local");
        var l = tt(t);
        if (r == "local" ? l += ri(e.display) : l -= e.display.viewOffset, r == "page" || r == "window") {
          var a = e.display.lineSpace.getBoundingClientRect();
          l += a.top + (r == "window" ? 0 : Ho());
          var s = a.left + (r == "window" ? 0 : Wo());
          i.left += s, i.right += s;
        }
        return i.top += l, i.bottom += l, i;
      }
      function Eo(e, t, i) {
        if (i == "div")
          return t;
        var r = t.left, n = t.top;
        if (i == "page")
          r -= Wo(), n -= Ho();
        else if (i == "local" || !i) {
          var o = e.display.sizer.getBoundingClientRect();
          r += o.left, n += o.top;
        }
        var l = e.display.lineSpace.getBoundingClientRect();
        return { left: r - l.left, top: n - l.top };
      }
      function ni(e, t, i, r, n) {
        return r || (r = O(e.doc, t.line)), ii(e, r, Mo(e, r, t.ch, n), i);
      }
      function Ie(e, t, i, r, n, o) {
        r = r || O(e.doc, t.line), n || (n = zt(e, r));
        function l(v, y) {
          var x = Ye(e, n, v, y ? "right" : "left", o);
          return y ? x.left = x.right : x.right = x.left, ii(e, r, x, i);
        }
        var a = $e(r, e.doc.direction), s = t.ch, u = t.sticky;
        if (s >= r.text.length ? (s = r.text.length, u = "before") : s <= 0 && (s = 0, u = "after"), !a)
          return l(u == "before" ? s - 1 : s, u == "before");
        function f(v, y, x) {
          var w = a[y], T = w.level == 1;
          return l(x ? v - 1 : v, T != x);
        }
        var h = sr(a, s, u), p = ar, d = f(s, h, u == "before");
        return p != null && (d.other = f(s, p, u != "before")), d;
      }
      function Fo(e, t) {
        var i = 0;
        t = R(e.doc, t), e.options.lineWrapping || (i = _t(e.display) * t.ch);
        var r = O(e.doc, t.line), n = tt(r) + ri(e.display);
        return { left: i, right: i, top: n, bottom: n + r.height };
      }
      function an(e, t, i, r, n) {
        var o = m(e, t, i);
        return o.xRel = n, r && (o.outside = r), o;
      }
      function sn(e, t, i) {
        var r = e.doc;
        if (i += e.display.viewOffset, i < 0)
          return an(r.first, 0, null, -1, -1);
        var n = Lt(r, i), o = r.first + r.size - 1;
        if (n > o)
          return an(r.first + r.size - 1, O(r, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var l = O(r, n); ; ) {
          var a = is(e, l, n, t, i), s = Aa(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
          if (!s)
            return a;
          var u = s.find(1);
          if (u.line == n)
            return u;
          l = O(r, n = u.line);
        }
      }
      function Po(e, t, i, r) {
        r -= ln(t);
        var n = t.text.length, o = lr(function(l) {
          return Ye(e, i, l - 1).bottom <= r;
        }, n, 0);
        return n = lr(function(l) {
          return Ye(e, i, l).top > r;
        }, o, n), { begin: o, end: n };
      }
      function Io(e, t, i, r) {
        i || (i = zt(e, t));
        var n = ii(e, t, Ye(e, i, r), "line").top;
        return Po(e, t, i, n);
      }
      function un(e, t, i, r) {
        return e.bottom <= i ? !1 : e.top > i ? !0 : (r ? e.left : e.right) > t;
      }
      function is(e, t, i, r, n) {
        n -= tt(t);
        var o = zt(e, t), l = ln(t), a = 0, s = t.text.length, u = !0, f = $e(t, e.doc.direction);
        if (f) {
          var h = (e.options.lineWrapping ? os : ns)(e, t, i, o, f, r, n);
          u = h.level != 1, a = u ? h.from : h.to - 1, s = u ? h.to : h.from - 1;
        }
        var p = null, d = null, v = lr(function(H) {
          var A = Ye(e, o, H);
          return A.top += l, A.bottom += l, un(A, r, n, !1) ? (A.top <= n && A.left <= r && (p = H, d = A), !0) : !1;
        }, a, s), y, x, w = !1;
        if (d) {
          var T = r - d.left < d.right - r, S = T == u;
          v = p + (S ? 0 : 1), x = S ? "after" : "before", y = T ? d.left : d.right;
        } else {
          !u && (v == s || v == a) && v++, x = v == 0 ? "after" : v == t.text.length ? "before" : Ye(e, o, v - (u ? 1 : 0)).bottom + l <= n == u ? "after" : "before";
          var N = Ie(e, m(i, v, x), "line", t, o);
          y = N.left, w = n < N.top ? -1 : n >= N.bottom ? 1 : 0;
        }
        return v = qn(t.text, v, 1), an(i, v, x, w, r - y);
      }
      function ns(e, t, i, r, n, o, l) {
        var a = lr(function(h) {
          var p = n[h], d = p.level != 1;
          return un(Ie(
            e,
            m(i, d ? p.to : p.from, d ? "before" : "after"),
            "line",
            t,
            r
          ), o, l, !0);
        }, 0, n.length - 1), s = n[a];
        if (a > 0) {
          var u = s.level != 1, f = Ie(
            e,
            m(i, u ? s.from : s.to, u ? "after" : "before"),
            "line",
            t,
            r
          );
          un(f, o, l, !0) && f.top > l && (s = n[a - 1]);
        }
        return s;
      }
      function os(e, t, i, r, n, o, l) {
        var a = Po(e, t, r, l), s = a.begin, u = a.end;
        /\s/.test(t.text.charAt(u - 1)) && u--;
        for (var f = null, h = null, p = 0; p < n.length; p++) {
          var d = n[p];
          if (!(d.from >= u || d.to <= s)) {
            var v = d.level != 1, y = Ye(e, r, v ? Math.min(u, d.to) - 1 : Math.max(s, d.from)).right, x = y < o ? o - y + 1e9 : y - o;
            (!f || h > x) && (f = d, h = x);
          }
        }
        return f || (f = n[n.length - 1]), f.from < s && (f = { from: s, to: f.to, level: f.level }), f.to > u && (f = { from: f.from, to: u, level: f.level }), f;
      }
      var Tt;
      function Ut(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (Tt == null) {
          Tt = W("pre", null, "CodeMirror-line-like");
          for (var t = 0; t < 49; ++t)
            Tt.appendChild(document.createTextNode("x")), Tt.appendChild(W("br"));
          Tt.appendChild(document.createTextNode("x"));
        }
        xe(e.measure, Tt);
        var i = Tt.offsetHeight / 50;
        return i > 3 && (e.cachedTextHeight = i), Ue(e.measure), i || 1;
      }
      function _t(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var t = W("span", "xxxxxxxxxx"), i = W("pre", [t], "CodeMirror-line-like");
        xe(e.measure, i);
        var r = t.getBoundingClientRect(), n = (r.right - r.left) / 10;
        return n > 2 && (e.cachedCharWidth = n), n || 10;
      }
      function fn(e) {
        for (var t = e.display, i = {}, r = {}, n = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
          var a = e.display.gutterSpecs[l].className;
          i[a] = o.offsetLeft + o.clientLeft + n, r[a] = o.clientWidth;
        }
        return {
          fixedPos: hn(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: i,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth
        };
      }
      function hn(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function Ro(e) {
        var t = Ut(e.display), i = e.options.lineWrapping, r = i && Math.max(5, e.display.scroller.clientWidth / _t(e.display) - 3);
        return function(n) {
          if (ft(e.doc, n))
            return 0;
          var o = 0;
          if (n.widgets)
            for (var l = 0; l < n.widgets.length; l++)
              n.widgets[l].height && (o += n.widgets[l].height);
          return i ? o + (Math.ceil(n.text.length / r) || 1) * t : o + t;
        };
      }
      function cn(e) {
        var t = e.doc, i = Ro(e);
        t.iter(function(r) {
          var n = i(r);
          n != r.height && Ge(r, n);
        });
      }
      function Mt(e, t, i, r) {
        var n = e.display;
        if (!i && Pi(t).getAttribute("cm-not-content") == "true")
          return null;
        var o, l, a = n.lineSpace.getBoundingClientRect();
        try {
          o = t.clientX - a.left, l = t.clientY - a.top;
        } catch (h) {
          return null;
        }
        var s = sn(e, o, l), u;
        if (r && s.xRel > 0 && (u = O(e.doc, s.line).text).length == s.ch) {
          var f = Fe(u, u.length, e.options.tabSize) - u.length;
          s = m(s.line, Math.max(0, Math.round((o - ko(e.display).left) / _t(e.display)) - f));
        }
        return s;
      }
      function Dt(e, t) {
        if (t >= e.display.viewTo || (t -= e.display.viewFrom, t < 0))
          return null;
        for (var i = e.display.view, r = 0; r < i.length; r++)
          if (t -= i[r].size, t < 0)
            return r;
      }
      function Le(e, t, i, r) {
        t == null && (t = e.doc.first), i == null && (i = e.doc.first + e.doc.size), r || (r = 0);
        var n = e.display;
        if (r && i < n.viewTo && (n.updateLineNumbers == null || n.updateLineNumbers > t) && (n.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= n.viewTo)
          et && Vi(e.doc, t) < n.viewTo && ct(e);
        else if (i <= n.viewFrom)
          et && vo(e.doc, i + r) > n.viewFrom ? ct(e) : (n.viewFrom += r, n.viewTo += r);
        else if (t <= n.viewFrom && i >= n.viewTo)
          ct(e);
        else if (t <= n.viewFrom) {
          var o = oi(e, i, i + r, 1);
          o ? (n.view = n.view.slice(o.index), n.viewFrom = o.lineN, n.viewTo += r) : ct(e);
        } else if (i >= n.viewTo) {
          var l = oi(e, t, t, -1);
          l ? (n.view = n.view.slice(0, l.index), n.viewTo = l.lineN) : ct(e);
        } else {
          var a = oi(e, t, t, -1), s = oi(e, i, i + r, 1);
          a && s ? (n.view = n.view.slice(0, a.index).concat(ti(e, a.lineN, s.lineN)).concat(n.view.slice(s.index)), n.viewTo += r) : ct(e);
        }
        var u = n.externalMeasured;
        u && (i < u.lineN ? u.lineN += r : t < u.lineN + u.size && (n.externalMeasured = null));
      }
      function ht(e, t, i) {
        e.curOp.viewChanged = !0;
        var r = e.display, n = e.display.externalMeasured;
        if (n && t >= n.lineN && t < n.lineN + n.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
          var o = r.view[Dt(e, t)];
          if (o.node != null) {
            var l = o.changes || (o.changes = []);
            ve(l, i) == -1 && l.push(i);
          }
        }
      }
      function ct(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function oi(e, t, i, r) {
        var n = Dt(e, t), o, l = e.display.view;
        if (!et || i == e.doc.first + e.doc.size)
          return { index: n, lineN: i };
        for (var a = e.display.viewFrom, s = 0; s < n; s++)
          a += l[s].size;
        if (a != t) {
          if (r > 0) {
            if (n == l.length - 1)
              return null;
            o = a + l[n].size - t, n++;
          } else
            o = a - t;
          t += o, i += o;
        }
        for (; Vi(e.doc, i) != i; ) {
          if (n == (r < 0 ? 0 : l.length - 1))
            return null;
          i += r * l[n - (r < 0 ? 1 : 0)].size, n += r;
        }
        return { index: n, lineN: i };
      }
      function ls(e, t, i) {
        var r = e.display, n = r.view;
        n.length == 0 || t >= r.viewTo || i <= r.viewFrom ? (r.view = ti(e, t, i), r.viewFrom = t) : (r.viewFrom > t ? r.view = ti(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Dt(e, t))), r.viewFrom = t, r.viewTo < i ? r.view = r.view.concat(ti(e, r.viewTo, i)) : r.viewTo > i && (r.view = r.view.slice(0, Dt(e, i)))), r.viewTo = i;
      }
      function Bo(e) {
        for (var t = e.display.view, i = 0, r = 0; r < t.length; r++) {
          var n = t[r];
          !n.hidden && (!n.node || n.changes) && ++i;
        }
        return i;
      }
      function yr(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function zo(e, t) {
        t === void 0 && (t = !0);
        for (var i = e.doc, r = {}, n = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), l = 0; l < i.sel.ranges.length; l++)
          if (!(!t && l == i.sel.primIndex)) {
            var a = i.sel.ranges[l];
            if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
              var s = a.empty();
              (s || e.options.showCursorWhenSelecting) && Uo(e, a.head, n), s || as(e, a, o);
            }
          }
        return r;
      }
      function Uo(e, t, i) {
        var r = Ie(e, t, "div", null, null, !e.options.singleCursorHeightPerLine), n = i.appendChild(W("div", " ", "CodeMirror-cursor"));
        if (n.style.left = r.left + "px", n.style.top = r.top + "px", n.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var o = ni(e, t, "div", null, null);
          o.right - o.left > 0 && (n.style.width = o.right - o.left + "px");
        }
        if (r.other) {
          var l = i.appendChild(W("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
          l.style.display = "", l.style.left = r.other.left + "px", l.style.top = r.other.top + "px", l.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function li(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function as(e, t, i) {
        var r = e.display, n = e.doc, o = document.createDocumentFragment(), l = ko(e.display), a = l.left, s = Math.max(r.sizerWidth, kt(e) - r.sizer.offsetLeft) - l.right, u = n.direction == "ltr";
        function f(S, N, H, A) {
          N < 0 && (N = 0), N = Math.round(N), A = Math.round(A), o.appendChild(W("div", null, "CodeMirror-selected", "position: absolute; left: " + S + `px;
                             top: ` + N + "px; width: " + (H == null ? s - S : H) + `px;
                             height: ` + (A - N) + "px"));
        }
        function h(S, N, H) {
          var A = O(n, S), B = A.text.length, Z, ce;
          function j(ie, Me) {
            return ni(e, m(S, ie), "div", A, Me);
          }
          function Oe(ie, Me, pe) {
            var le = Io(e, A, null, ie), ne = Me == "ltr" == (pe == "after") ? "left" : "right", $ = pe == "after" ? le.begin : le.end - (/\s/.test(A.text.charAt(le.end - 1)) ? 2 : 1);
            return j($, ne)[ne];
          }
          var Te = $e(A, n.direction);
          return fa(Te, N || 0, H == null ? B : H, function(ie, Me, pe, le) {
            var ne = pe == "ltr", $ = j(ie, ne ? "left" : "right"), De = j(Me - 1, ne ? "right" : "left"), tr = N == null && ie == 0, mt = H == null && Me == B, ye = le == 0, Ze = !Te || le == Te.length - 1;
            if (De.top - $.top <= 3) {
              var de = (u ? tr : mt) && ye, Rn = (u ? mt : tr) && Ze, ot = de ? a : (ne ? $ : De).left, Ht = Rn ? s : (ne ? De : $).right;
              f(ot, $.top, Ht - ot, $.bottom);
            } else {
              var Et, we, rr, Bn;
              ne ? (Et = u && tr && ye ? a : $.left, we = u ? s : Oe(ie, pe, "before"), rr = u ? a : Oe(Me, pe, "after"), Bn = u && mt && Ze ? s : De.right) : (Et = u ? Oe(ie, pe, "before") : a, we = !u && tr && ye ? s : $.right, rr = !u && mt && Ze ? a : De.left, Bn = u ? Oe(Me, pe, "after") : s), f(Et, $.top, we - Et, $.bottom), $.bottom < De.top && f(a, $.bottom, null, De.top), f(rr, De.top, Bn - rr, De.bottom);
            }
            (!Z || li($, Z) < 0) && (Z = $), li(De, Z) < 0 && (Z = De), (!ce || li($, ce) < 0) && (ce = $), li(De, ce) < 0 && (ce = De);
          }), { start: Z, end: ce };
        }
        var p = t.from(), d = t.to();
        if (p.line == d.line)
          h(p.line, p.ch, d.ch);
        else {
          var v = O(n, p.line), y = O(n, d.line), x = Xe(v) == Xe(y), w = h(p.line, p.ch, x ? v.text.length + 1 : null).end, T = h(d.line, x ? 0 : null, d.ch).start;
          x && (w.top < T.top - 2 ? (f(w.right, w.top, null, w.bottom), f(a, T.top, T.left, T.bottom)) : f(w.right, w.top, T.left - w.right, w.bottom)), w.bottom < T.top && f(a, w.bottom, null, T.top);
        }
        i.appendChild(o);
      }
      function dn(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var i = !0;
          t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
            e.hasFocus() || Gt(e), t.cursorDiv.style.visibility = (i = !i) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
        }
      }
      function _o(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || vn(e));
      }
      function pn(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Gt(e));
        }, 100);
      }
      function vn(e, t) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || (te(e, "focus", e, t), e.state.focused = !0, oe(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), G && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), dn(e));
      }
      function Gt(e, t) {
        e.state.delayingBlurEvent || (e.state.focused && (te(e, "blur", e, t), e.state.focused = !1, be(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function ai(e) {
        for (var t = e.display, i = t.lineDiv.offsetTop, r = Math.max(0, t.scroller.getBoundingClientRect().top), n = t.lineDiv.getBoundingClientRect().top, o = 0, l = 0; l < t.view.length; l++) {
          var a = t.view[l], s = e.options.lineWrapping, u = void 0, f = 0;
          if (!a.hidden) {
            if (n += a.line.height, E && _ < 8) {
              var h = a.node.offsetTop + a.node.offsetHeight;
              u = h - i, i = h;
            } else {
              var p = a.node.getBoundingClientRect();
              u = p.bottom - p.top, !s && a.text.firstChild && (f = a.text.firstChild.getBoundingClientRect().right - p.left - 1);
            }
            var d = a.line.height - u;
            if ((d > 5e-3 || d < -5e-3) && (n < r && (o -= d), Ge(a.line, u), Go(a.line), a.rest))
              for (var v = 0; v < a.rest.length; v++)
                Go(a.rest[v]);
            if (f > e.display.sizerWidth) {
              var y = Math.ceil(f / _t(e.display));
              y > e.display.maxLineLength && (e.display.maxLineLength = y, e.display.maxLine = a.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(o) > 2 && (t.scroller.scrollTop += o);
      }
      function Go(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var i = e.widgets[t], r = i.node.parentNode;
            r && (i.height = r.offsetHeight);
          }
      }
      function si(e, t, i) {
        var r = i && i.top != null ? Math.max(0, i.top) : e.scroller.scrollTop;
        r = Math.floor(r - ri(e));
        var n = i && i.bottom != null ? i.bottom : r + e.wrapper.clientHeight, o = Lt(t, r), l = Lt(t, n);
        if (i && i.ensure) {
          var a = i.ensure.from.line, s = i.ensure.to.line;
          a < o ? (o = a, l = Lt(t, tt(O(t, a)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= l && (o = Lt(t, tt(O(t, s)) - e.wrapper.clientHeight), l = s);
        }
        return { from: o, to: Math.max(l, o + 1) };
      }
      function ss(e, t) {
        if (!se(e, "scrollCursorIntoView")) {
          var i = e.display, r = i.sizer.getBoundingClientRect(), n = null;
          if (t.top + r.top < 0 ? n = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (n = !1), n != null && !ir) {
            var o = W("div", "​", null, `position: absolute;
                         top: ` + (t.top - i.viewOffset - ri(e.display)) + `px;
                         height: ` + (t.bottom - t.top + qe(e) + i.barHeight) + `px;
                         left: ` + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
            e.display.lineSpace.appendChild(o), o.scrollIntoView(n), e.display.lineSpace.removeChild(o);
          }
        }
      }
      function us(e, t, i, r) {
        r == null && (r = 0);
        var n;
        !e.options.lineWrapping && t == i && (i = t.sticky == "before" ? m(t.line, t.ch + 1, "before") : t, t = t.ch ? m(t.line, t.sticky == "before" ? t.ch - 1 : t.ch, "after") : t);
        for (var o = 0; o < 5; o++) {
          var l = !1, a = Ie(e, t), s = !i || i == t ? a : Ie(e, i);
          n = {
            left: Math.min(a.left, s.left),
            top: Math.min(a.top, s.top) - r,
            right: Math.max(a.left, s.left),
            bottom: Math.max(a.bottom, s.bottom) + r
          };
          var u = gn(e, n), f = e.doc.scrollTop, h = e.doc.scrollLeft;
          if (u.scrollTop != null && (br(e, u.scrollTop), Math.abs(e.doc.scrollTop - f) > 1 && (l = !0)), u.scrollLeft != null && (Nt(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (l = !0)), !l)
            break;
        }
        return n;
      }
      function fs(e, t) {
        var i = gn(e, t);
        i.scrollTop != null && br(e, i.scrollTop), i.scrollLeft != null && Nt(e, i.scrollLeft);
      }
      function gn(e, t) {
        var i = e.display, r = Ut(e.display);
        t.top < 0 && (t.top = 0);
        var n = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : i.scroller.scrollTop, o = nn(e), l = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var a = e.doc.height + rn(i), s = t.top < r, u = t.bottom > a - r;
        if (t.top < n)
          l.scrollTop = s ? 0 : t.top;
        else if (t.bottom > n + o) {
          var f = Math.min(t.top, (u ? a : t.bottom) - o);
          f != n && (l.scrollTop = f);
        }
        var h = e.options.fixedGutter ? 0 : i.gutters.offsetWidth, p = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : i.scroller.scrollLeft - h, d = kt(e) - i.gutters.offsetWidth, v = t.right - t.left > d;
        return v && (t.right = t.left + d), t.left < 10 ? l.scrollLeft = 0 : t.left < p ? l.scrollLeft = Math.max(0, t.left + h - (v ? 0 : 10)) : t.right > d + p - 3 && (l.scrollLeft = t.right + (v ? 0 : 10) - d), l;
      }
      function yn(e, t) {
        t != null && (ui(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t);
      }
      function Kt(e) {
        ui(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
      }
      function mr(e, t, i) {
        (t != null || i != null) && ui(e), t != null && (e.curOp.scrollLeft = t), i != null && (e.curOp.scrollTop = i);
      }
      function hs(e, t) {
        ui(e), e.curOp.scrollToPos = t;
      }
      function ui(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
          e.curOp.scrollToPos = null;
          var i = Fo(e, t.from), r = Fo(e, t.to);
          Ko(e, i, r, t.margin);
        }
      }
      function Ko(e, t, i, r) {
        var n = gn(e, {
          left: Math.min(t.left, i.left),
          top: Math.min(t.top, i.top) - r,
          right: Math.max(t.right, i.right),
          bottom: Math.max(t.bottom, i.bottom) + r
        });
        mr(e, n.scrollLeft, n.scrollTop);
      }
      function br(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (M || bn(e, { top: t }), Xo(e, t, !0), M && bn(e), wr(e, 100));
      }
      function Xo(e, t, i) {
        t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), !(e.display.scroller.scrollTop == t && !i) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
      }
      function Nt(e, t, i, r) {
        t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((i ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) && (e.doc.scrollLeft = t, Jo(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
      }
      function xr(e) {
        var t = e.display, i = t.gutters.offsetWidth, r = Math.round(e.doc.height + rn(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? i : 0,
          docHeight: r,
          scrollHeight: r + qe(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: i
        };
      }
      var Ot = function(e, t, i) {
        this.cm = i;
        var r = this.vert = W("div", [W("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), n = this.horiz = W("div", [W("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = n.tabIndex = -1, e(r), e(n), P(r, "scroll", function() {
          r.clientHeight && t(r.scrollTop, "vertical");
        }), P(n, "scroll", function() {
          n.clientWidth && t(n.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, E && _ < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      Ot.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1, i = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (i) {
          this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
          var n = e.viewHeight - (t ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + n) + "px";
        } else
          this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (t) {
          this.horiz.style.display = "block", this.horiz.style.right = i ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var o = e.viewWidth - e.barLeft - (i ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: i ? r : 0, bottom: t ? r : 0 };
      }, Ot.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, Ot.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, Ot.prototype.zeroWidthHack = function() {
        var e = me && !Mi ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new ut(), this.disableVert = new ut();
      }, Ot.prototype.enableZeroWidthBar = function(e, t, i) {
        e.style.pointerEvents = "auto";
        function r() {
          var n = e.getBoundingClientRect(), o = i == "vert" ? document.elementFromPoint(n.right - 1, (n.top + n.bottom) / 2) : document.elementFromPoint((n.right + n.left) / 2, n.bottom - 1);
          o != e ? e.style.pointerEvents = "none" : t.set(1e3, r);
        }
        t.set(1e3, r);
      }, Ot.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var Cr = function() {
      };
      Cr.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, Cr.prototype.setScrollLeft = function() {
      }, Cr.prototype.setScrollTop = function() {
      }, Cr.prototype.clear = function() {
      };
      function Xt(e, t) {
        t || (t = xr(e));
        var i = e.display.barWidth, r = e.display.barHeight;
        qo(e, t);
        for (var n = 0; n < 4 && i != e.display.barWidth || r != e.display.barHeight; n++)
          i != e.display.barWidth && e.options.lineWrapping && ai(e), qo(e, xr(e)), i = e.display.barWidth, r = e.display.barHeight;
      }
      function qo(e, t) {
        var i = e.display, r = i.scrollbars.update(t);
        i.sizer.style.paddingRight = (i.barWidth = r.right) + "px", i.sizer.style.paddingBottom = (i.barHeight = r.bottom) + "px", i.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (i.scrollbarFiller.style.display = "block", i.scrollbarFiller.style.height = r.bottom + "px", i.scrollbarFiller.style.width = r.right + "px") : i.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (i.gutterFiller.style.display = "block", i.gutterFiller.style.height = r.bottom + "px", i.gutterFiller.style.width = t.gutterWidth + "px") : i.gutterFiller.style.display = "";
      }
      var Yo = { native: Ot, null: Cr };
      function Zo(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && be(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Yo[e.options.scrollbarStyle](function(t) {
          e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), P(t, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), t.setAttribute("cm-not-content", "true");
        }, function(t, i) {
          i == "horizontal" ? Nt(e, t) : br(e, t);
        }, e), e.display.scrollbars.addClass && oe(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var cs = 0;
      function At(e) {
        e.curOp = {
          cm: e,
          viewChanged: !1,
          // Flag that indicates that lines might need to be redrawn
          startHeight: e.doc.height,
          // Used to detect need to update scrollbar
          forceUpdate: !1,
          // Used to force a redraw
          updateInput: 0,
          // Whether to reset the input textarea
          typing: !1,
          // Whether this reset should be careful to leave existing text (for compositing)
          changeObjs: null,
          // Accumulated changes, for firing change events
          cursorActivityHandlers: null,
          // Set of handlers to fire cursorActivity on
          cursorActivityCalled: 0,
          // Tracks which cursorActivity handlers have been called already
          selectionChanged: !1,
          // Whether the selection needs to be redrawn
          updateMaxLine: !1,
          // Set when the widest line needs to be determined anew
          scrollLeft: null,
          scrollTop: null,
          // Intermediate scroll position, not pushed to DOM yet
          scrollToPos: null,
          // Used to scroll to a specific position
          focus: !1,
          id: ++cs,
          // Unique ID
          markArrays: null
          // Used by addMarkedSpan
        }, Ga(e.curOp);
      }
      function Wt(e) {
        var t = e.curOp;
        t && Xa(t, function(i) {
          for (var r = 0; r < i.ops.length; r++)
            i.ops[r].cm.curOp = null;
          ds(i);
        });
      }
      function ds(e) {
        for (var t = e.ops, i = 0; i < t.length; i++)
          ps(t[i]);
        for (var r = 0; r < t.length; r++)
          vs(t[r]);
        for (var n = 0; n < t.length; n++)
          gs(t[n]);
        for (var o = 0; o < t.length; o++)
          ys(t[o]);
        for (var l = 0; l < t.length; l++)
          ms(t[l]);
      }
      function ps(e) {
        var t = e.cm, i = t.display;
        xs(t), e.updateMaxLine && en(t), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new fi(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function vs(e) {
        e.updatedDisplay = e.mustUpdate && mn(e.cm, e.update);
      }
      function gs(e) {
        var t = e.cm, i = t.display;
        e.updatedDisplay && ai(t), e.barMeasure = xr(t), i.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Mo(t, i.maxLine, i.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(i.scroller.clientWidth, i.sizer.offsetLeft + e.adjustWidthTo + qe(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, i.sizer.offsetLeft + e.adjustWidthTo - kt(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = i.input.prepareSelection());
      }
      function ys(e) {
        var t = e.cm;
        e.adjustWidthTo != null && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Nt(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
        var i = e.focus && e.focus == F();
        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, i), (e.updatedDisplay || e.startHeight != t.doc.height) && Xt(t, e.barMeasure), e.updatedDisplay && Cn(t, e.barMeasure), e.selectionChanged && dn(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), i && _o(e.cm);
      }
      function ms(e) {
        var t = e.cm, i = t.display, r = t.doc;
        if (e.updatedDisplay && Qo(t, e.update), i.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (i.wheelStartX = i.wheelStartY = null), e.scrollTop != null && Xo(t, e.scrollTop, e.forceScroll), e.scrollLeft != null && Nt(t, e.scrollLeft, !0, !0), e.scrollToPos) {
          var n = us(
            t,
            R(r, e.scrollToPos.from),
            R(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          ss(t, n);
        }
        var o = e.maybeHiddenMarkers, l = e.maybeUnhiddenMarkers;
        if (o)
          for (var a = 0; a < o.length; ++a)
            o[a].lines.length || te(o[a], "hide");
        if (l)
          for (var s = 0; s < l.length; ++s)
            l[s].lines.length && te(l[s], "unhide");
        i.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && te(t, "changes", t, e.changeObjs), e.update && e.update.finish();
      }
      function Ne(e, t) {
        if (e.curOp)
          return t();
        At(e);
        try {
          return t();
        } finally {
          Wt(e);
        }
      }
      function fe(e, t) {
        return function() {
          if (e.curOp)
            return t.apply(e, arguments);
          At(e);
          try {
            return t.apply(e, arguments);
          } finally {
            Wt(e);
          }
        };
      }
      function Ce(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          At(this);
          try {
            return e.apply(this, arguments);
          } finally {
            Wt(this);
          }
        };
      }
      function he(e) {
        return function() {
          var t = this.cm;
          if (!t || t.curOp)
            return e.apply(this, arguments);
          At(t);
          try {
            return e.apply(this, arguments);
          } finally {
            Wt(t);
          }
        };
      }
      function wr(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, Di(bs, e));
      }
      function bs(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var i = +/* @__PURE__ */ new Date() + e.options.workTime, r = hr(e, t.highlightFrontier), n = [];
          t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
            if (r.line >= e.display.viewFrom) {
              var l = o.styles, a = o.text.length > e.options.maxHighlightLength ? wt(t.mode, r.state) : null, s = eo(e, o, r, !0);
              a && (r.state = a), o.styles = s.styles;
              var u = o.styleClasses, f = s.classes;
              f ? o.styleClasses = f : u && (o.styleClasses = null);
              for (var h = !l || l.length != o.styles.length || u != f && (!u || !f || u.bgClass != f.bgClass || u.textClass != f.textClass), p = 0; !h && p < l.length; ++p)
                h = l[p] != o.styles[p];
              h && n.push(r.line), o.stateAfter = r.save(), r.nextLine();
            } else
              o.text.length <= e.options.maxHighlightLength && Zi(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+/* @__PURE__ */ new Date() > i)
              return wr(e, e.options.workDelay), !0;
          }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), n.length && Ne(e, function() {
            for (var o = 0; o < n.length; o++)
              ht(e, n[o], "text");
          });
        }
      }
      var fi = function(e, t, i) {
        var r = e.display;
        this.viewport = t, this.visible = si(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = kt(e), this.force = i, this.dims = fn(e), this.events = [];
      };
      fi.prototype.signal = function(e, t) {
        Pe(e, t) && this.events.push(arguments);
      }, fi.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          te.apply(null, this.events[e]);
      };
      function xs(e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = qe(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = qe(e) + "px", t.scrollbarsClipped = !0);
      }
      function Cs(e) {
        if (e.hasFocus())
          return null;
        var t = F();
        if (!t || !C(e.display.lineDiv, t))
          return null;
        var i = { activeElt: t };
        if (window.getSelection) {
          var r = window.getSelection();
          r.anchorNode && r.extend && C(e.display.lineDiv, r.anchorNode) && (i.anchorNode = r.anchorNode, i.anchorOffset = r.anchorOffset, i.focusNode = r.focusNode, i.focusOffset = r.focusOffset);
        }
        return i;
      }
      function ws(e) {
        if (!(!e || !e.activeElt || e.activeElt == F()) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && C(document.body, e.anchorNode) && C(document.body, e.focusNode))) {
          var t = window.getSelection(), i = document.createRange();
          i.setEnd(e.anchorNode, e.anchorOffset), i.collapse(!1), t.removeAllRanges(), t.addRange(i), t.extend(e.focusNode, e.focusOffset);
        }
      }
      function mn(e, t) {
        var i = e.display, r = e.doc;
        if (t.editorIsHidden)
          return ct(e), !1;
        if (!t.force && t.visible.from >= i.viewFrom && t.visible.to <= i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && Bo(e) == 0)
          return !1;
        jo(e) && (ct(e), t.dims = fn(e));
        var n = r.first + r.size, o = Math.max(t.visible.from - e.options.viewportMargin, r.first), l = Math.min(n, t.visible.to + e.options.viewportMargin);
        i.viewFrom < o && o - i.viewFrom < 20 && (o = Math.max(r.first, i.viewFrom)), i.viewTo > l && i.viewTo - l < 20 && (l = Math.min(n, i.viewTo)), et && (o = Vi(e.doc, o), l = vo(e.doc, l));
        var a = o != i.viewFrom || l != i.viewTo || i.lastWrapHeight != t.wrapperHeight || i.lastWrapWidth != t.wrapperWidth;
        ls(e, o, l), i.viewOffset = tt(O(e.doc, i.viewFrom)), e.display.mover.style.top = i.viewOffset + "px";
        var s = Bo(e);
        if (!a && s == 0 && !t.force && i.renderedView == i.view && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo))
          return !1;
        var u = Cs(e);
        return s > 4 && (i.lineDiv.style.display = "none"), Ss(e, i.updateLineNumbers, t.dims), s > 4 && (i.lineDiv.style.display = ""), i.renderedView = i.view, ws(u), Ue(i.cursorDiv), Ue(i.selectionDiv), i.gutters.style.height = i.sizer.style.minHeight = 0, a && (i.lastWrapHeight = t.wrapperHeight, i.lastWrapWidth = t.wrapperWidth, wr(e, 400)), i.updateLineNumbers = null, !0;
      }
      function Qo(e, t) {
        for (var i = t.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || t.oldDisplayWidth == kt(e)) {
            if (i && i.top != null && (i = { top: Math.min(e.doc.height + rn(e.display) - nn(e), i.top) }), t.visible = si(e.display, e.doc, i), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
              break;
          } else
            r && (t.visible = si(e.display, e.doc, i));
          if (!mn(e, t))
            break;
          ai(e);
          var n = xr(e);
          yr(e), Xt(e, n), Cn(e, n), t.force = !1;
        }
        t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function bn(e, t) {
        var i = new fi(e, t);
        if (mn(e, i)) {
          ai(e), Qo(e, i);
          var r = xr(e);
          yr(e), Xt(e, r), Cn(e, r), i.finish();
        }
      }
      function Ss(e, t, i) {
        var r = e.display, n = e.options.lineNumbers, o = r.lineDiv, l = o.firstChild;
        function a(v) {
          var y = v.nextSibling;
          return G && me && e.display.currentWheelTarget == v ? v.style.display = "none" : v.parentNode.removeChild(v), y;
        }
        for (var s = r.view, u = r.viewFrom, f = 0; f < s.length; f++) {
          var h = s[f];
          if (!h.hidden)
            if (!h.node || h.node.parentNode != o) {
              var p = Ja(e, h, u, i);
              o.insertBefore(p, l);
            } else {
              for (; l != h.node; )
                l = a(l);
              var d = n && t != null && t <= u && h.lineNumber;
              h.changes && (ve(h.changes, "gutter") > -1 && (d = !1), xo(e, h, u, i)), d && (Ue(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(Xi(e.options, u)))), l = h.node.nextSibling;
            }
          u += h.size;
        }
        for (; l; )
          l = a(l);
      }
      function xn(e) {
        var t = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = t + "px", ue(e, "gutterChanged", e);
      }
      function Cn(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + qe(e) + "px";
      }
      function Jo(e) {
        var t = e.display, i = t.view;
        if (!(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = hn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, n = t.gutters.offsetWidth, o = r + "px", l = 0; l < i.length; l++)
            if (!i[l].hidden) {
              e.options.fixedGutter && (i[l].gutter && (i[l].gutter.style.left = o), i[l].gutterBackground && (i[l].gutterBackground.style.left = o));
              var a = i[l].alignable;
              if (a)
                for (var s = 0; s < a.length; s++)
                  a[s].style.left = o;
            }
          e.options.fixedGutter && (t.gutters.style.left = r + n + "px");
        }
      }
      function jo(e) {
        if (!e.options.lineNumbers)
          return !1;
        var t = e.doc, i = Xi(e.options, t.first + t.size - 1), r = e.display;
        if (i.length != r.lineNumChars) {
          var n = r.measure.appendChild(W(
            "div",
            [W("div", i)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), o = n.firstChild.offsetWidth, l = n.offsetWidth - o;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - l) + 1, r.lineNumWidth = r.lineNumInnerWidth + l, r.lineNumChars = r.lineNumInnerWidth ? i.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", xn(e.display), !0;
        }
        return !1;
      }
      function wn(e, t) {
        for (var i = [], r = !1, n = 0; n < e.length; n++) {
          var o = e[n], l = null;
          if (typeof o != "string" && (l = o.style, o = o.className), o == "CodeMirror-linenumbers")
            if (t)
              r = !0;
            else
              continue;
          i.push({ className: o, style: l });
        }
        return t && !r && i.push({ className: "CodeMirror-linenumbers", style: null }), i;
      }
      function Vo(e) {
        var t = e.gutters, i = e.gutterSpecs;
        Ue(t), e.lineGutter = null;
        for (var r = 0; r < i.length; ++r) {
          var n = i[r], o = n.className, l = n.style, a = t.appendChild(W("div", null, "CodeMirror-gutter " + o));
          l && (a.style.cssText = l), o == "CodeMirror-linenumbers" && (e.lineGutter = a, a.style.width = (e.lineNumWidth || 1) + "px");
        }
        t.style.display = i.length ? "" : "none", xn(e);
      }
      function Sr(e) {
        Vo(e.display), Le(e), Jo(e);
      }
      function Ls(e, t, i, r) {
        var n = this;
        this.input = i, n.scrollbarFiller = W("div", null, "CodeMirror-scrollbar-filler"), n.scrollbarFiller.setAttribute("cm-not-content", "true"), n.gutterFiller = W("div", null, "CodeMirror-gutter-filler"), n.gutterFiller.setAttribute("cm-not-content", "true"), n.lineDiv = g("div", null, "CodeMirror-code"), n.selectionDiv = W("div", null, null, "position: relative; z-index: 1"), n.cursorDiv = W("div", null, "CodeMirror-cursors"), n.measure = W("div", null, "CodeMirror-measure"), n.lineMeasure = W("div", null, "CodeMirror-measure"), n.lineSpace = g(
          "div",
          [n.measure, n.lineMeasure, n.selectionDiv, n.cursorDiv, n.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var o = g("div", [n.lineSpace], "CodeMirror-lines");
        n.mover = W("div", [o], null, "position: relative"), n.sizer = W("div", [n.mover], "CodeMirror-sizer"), n.sizerWidth = null, n.heightForcer = W("div", null, null, "position: absolute; height: " + _n + "px; width: 1px;"), n.gutters = W("div", null, "CodeMirror-gutters"), n.lineGutter = null, n.scroller = W("div", [n.sizer, n.heightForcer, n.gutters], "CodeMirror-scroll"), n.scroller.setAttribute("tabIndex", "-1"), n.wrapper = W("div", [n.scrollbarFiller, n.gutterFiller, n.scroller], "CodeMirror"), n.wrapper.setAttribute("translate", "no"), E && _ < 8 && (n.gutters.style.zIndex = -1, n.scroller.style.paddingRight = 0), !G && !(M && bt) && (n.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(n.wrapper) : e(n.wrapper)), n.viewFrom = n.viewTo = t.first, n.reportedViewFrom = n.reportedViewTo = t.first, n.view = [], n.renderedView = null, n.externalMeasured = null, n.viewOffset = 0, n.lastWrapHeight = n.lastWrapWidth = 0, n.updateLineNumbers = null, n.nativeBarWidth = n.barHeight = n.barWidth = 0, n.scrollbarsClipped = !1, n.lineNumWidth = n.lineNumInnerWidth = n.lineNumChars = null, n.alignWidgets = !1, n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.maxLine = null, n.maxLineLength = 0, n.maxLineChanged = !1, n.wheelDX = n.wheelDY = n.wheelStartX = n.wheelStartY = null, n.shift = !1, n.selForContextMenu = null, n.activeTouch = null, n.gutterSpecs = wn(r.gutters, r.lineNumbers), Vo(n), i.init(n);
      }
      var hi = 0, it = null;
      E ? it = -0.53 : M ? it = 15 : V ? it = -0.7 : at && (it = -1 / 3);
      function $o(e) {
        var t = e.wheelDeltaX, i = e.wheelDeltaY;
        return t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), i == null && e.detail && e.axis == e.VERTICAL_AXIS ? i = e.detail : i == null && (i = e.wheelDelta), { x: t, y: i };
      }
      function ks(e) {
        var t = $o(e);
        return t.x *= it, t.y *= it, t;
      }
      function el(e, t) {
        var i = $o(t), r = i.x, n = i.y, o = it;
        t.deltaMode === 0 && (r = t.deltaX, n = t.deltaY, o = 1);
        var l = e.display, a = l.scroller, s = a.scrollWidth > a.clientWidth, u = a.scrollHeight > a.clientHeight;
        if (r && s || n && u) {
          if (n && me && G) {
            e:
              for (var f = t.target, h = l.view; f != a; f = f.parentNode)
                for (var p = 0; p < h.length; p++)
                  if (h[p].node == f) {
                    e.display.currentWheelTarget = f;
                    break e;
                  }
          }
          if (r && !M && !ae && o != null) {
            n && u && br(e, Math.max(0, a.scrollTop + n * o)), Nt(e, Math.max(0, a.scrollLeft + r * o)), (!n || n && u) && Se(t), l.wheelStartX = null;
            return;
          }
          if (n && o != null) {
            var d = n * o, v = e.doc.scrollTop, y = v + l.wrapper.clientHeight;
            d < 0 ? v = Math.max(0, v + d - 50) : y = Math.min(e.doc.height, y + d + 50), bn(e, { top: v, bottom: y });
          }
          hi < 20 && t.deltaMode !== 0 && (l.wheelStartX == null ? (l.wheelStartX = a.scrollLeft, l.wheelStartY = a.scrollTop, l.wheelDX = r, l.wheelDY = n, setTimeout(function() {
            if (l.wheelStartX != null) {
              var x = a.scrollLeft - l.wheelStartX, w = a.scrollTop - l.wheelStartY, T = w && l.wheelDY && w / l.wheelDY || x && l.wheelDX && x / l.wheelDX;
              l.wheelStartX = l.wheelStartY = null, T && (it = (it * hi + T) / (hi + 1), ++hi);
            }
          }, 200)) : (l.wheelDX += r, l.wheelDY += n));
        }
      }
      var He = function(e, t) {
        this.ranges = e, this.primIndex = t;
      };
      He.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, He.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var t = 0; t < this.ranges.length; t++) {
          var i = this.ranges[t], r = e.ranges[t];
          if (!qi(i.anchor, r.anchor) || !qi(i.head, r.head))
            return !1;
        }
        return !0;
      }, He.prototype.deepCopy = function() {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new z(Yi(this.ranges[t].anchor), Yi(this.ranges[t].head));
        return new He(e, this.primIndex);
      }, He.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, He.prototype.contains = function(e, t) {
        t || (t = e);
        for (var i = 0; i < this.ranges.length; i++) {
          var r = this.ranges[i];
          if (I(t, r.from()) >= 0 && I(e, r.to()) <= 0)
            return i;
        }
        return -1;
      };
      var z = function(e, t) {
        this.anchor = e, this.head = t;
      };
      z.prototype.from = function() {
        return Zr(this.anchor, this.head);
      }, z.prototype.to = function() {
        return Yr(this.anchor, this.head);
      }, z.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function Re(e, t, i) {
        var r = e && e.options.selectionsMayTouch, n = t[i];
        t.sort(function(p, d) {
          return I(p.from(), d.from());
        }), i = ve(t, n);
        for (var o = 1; o < t.length; o++) {
          var l = t[o], a = t[o - 1], s = I(a.to(), l.from());
          if (r && !l.empty() ? s > 0 : s >= 0) {
            var u = Zr(a.from(), l.from()), f = Yr(a.to(), l.to()), h = a.empty() ? l.from() == l.head : a.from() == a.head;
            o <= i && --i, t.splice(--o, 2, new z(h ? f : u, h ? u : f));
          }
        }
        return new He(t, i);
      }
      function dt(e, t) {
        return new He([new z(e, t || e)], 0);
      }
      function pt(e) {
        return e.text ? m(
          e.from.line + e.text.length - 1,
          K(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function tl(e, t) {
        if (I(e, t.from) < 0)
          return e;
        if (I(e, t.to) <= 0)
          return pt(t);
        var i = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
        return e.line == t.to.line && (r += pt(t).ch - t.to.ch), m(i, r);
      }
      function Sn(e, t) {
        for (var i = [], r = 0; r < e.sel.ranges.length; r++) {
          var n = e.sel.ranges[r];
          i.push(new z(
            tl(n.anchor, t),
            tl(n.head, t)
          ));
        }
        return Re(e.cm, i, e.sel.primIndex);
      }
      function rl(e, t, i) {
        return e.line == t.line ? m(i.line, e.ch - t.ch + i.ch) : m(i.line + (e.line - t.line), e.ch);
      }
      function Ts(e, t, i) {
        for (var r = [], n = m(e.first, 0), o = n, l = 0; l < t.length; l++) {
          var a = t[l], s = rl(a.from, n, o), u = rl(pt(a), n, o);
          if (n = a.to, o = u, i == "around") {
            var f = e.sel.ranges[l], h = I(f.head, f.anchor) < 0;
            r[l] = new z(h ? u : s, h ? s : u);
          } else
            r[l] = new z(s, s);
        }
        return new He(r, e.sel.primIndex);
      }
      function Ln(e) {
        e.doc.mode = _i(e.options, e.doc.modeOption), Lr(e);
      }
      function Lr(e) {
        e.doc.iter(function(t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, wr(e, 100), e.state.modeGen++, e.curOp && Le(e);
      }
      function il(e, t) {
        return t.from.ch == 0 && t.to.ch == 0 && K(t.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function kn(e, t, i, r) {
        function n(T) {
          return i ? i[T] : null;
        }
        function o(T, S, N) {
          Ea(T, S, N, r), ue(T, "change", T, t);
        }
        function l(T, S) {
          for (var N = [], H = T; H < S; ++H)
            N.push(new Rt(u[H], n(H), r));
          return N;
        }
        var a = t.from, s = t.to, u = t.text, f = O(e, a.line), h = O(e, s.line), p = K(u), d = n(u.length - 1), v = s.line - a.line;
        if (t.full)
          e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
        else if (il(e, t)) {
          var y = l(0, u.length - 1);
          o(h, h.text, d), v && e.remove(a.line, v), y.length && e.insert(a.line, y);
        } else if (f == h)
          if (u.length == 1)
            o(f, f.text.slice(0, a.ch) + p + f.text.slice(s.ch), d);
          else {
            var x = l(1, u.length - 1);
            x.push(new Rt(p + f.text.slice(s.ch), d, r)), o(f, f.text.slice(0, a.ch) + u[0], n(0)), e.insert(a.line + 1, x);
          }
        else if (u.length == 1)
          o(f, f.text.slice(0, a.ch) + u[0] + h.text.slice(s.ch), n(0)), e.remove(a.line + 1, v);
        else {
          o(f, f.text.slice(0, a.ch) + u[0], n(0)), o(h, p + h.text.slice(s.ch), d);
          var w = l(1, u.length - 1);
          v > 1 && e.remove(a.line + 1, v - 1), e.insert(a.line + 1, w);
        }
        ue(e, "change", e, t);
      }
      function vt(e, t, i) {
        function r(n, o, l) {
          if (n.linked)
            for (var a = 0; a < n.linked.length; ++a) {
              var s = n.linked[a];
              if (s.doc != o) {
                var u = l && s.sharedHist;
                i && !u || (t(s.doc, u), r(s.doc, n, u));
              }
            }
        }
        r(e, null, !0);
      }
      function nl(e, t) {
        if (t.cm)
          throw new Error("This document is already in use.");
        e.doc = t, t.cm = e, cn(e), Ln(e), ol(e), e.options.direction = t.direction, e.options.lineWrapping || en(e), e.options.mode = t.modeOption, Le(e);
      }
      function ol(e) {
        (e.doc.direction == "rtl" ? oe : be)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Ms(e) {
        Ne(e, function() {
          ol(e), Le(e);
        });
      }
      function ci(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function Tn(e, t) {
        var i = { from: Yi(t.from), to: pt(t), text: St(e, t.from, t.to) };
        return sl(e, i, t.from.line, t.to.line + 1), vt(e, function(r) {
          return sl(r, i, t.from.line, t.to.line + 1);
        }, !0), i;
      }
      function ll(e) {
        for (; e.length; ) {
          var t = K(e);
          if (t.ranges)
            e.pop();
          else
            break;
        }
      }
      function Ds(e, t) {
        if (t)
          return ll(e.done), K(e.done);
        if (e.done.length && !K(e.done).ranges)
          return K(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), K(e.done);
      }
      function al(e, t, i, r) {
        var n = e.history;
        n.undone.length = 0;
        var o = +/* @__PURE__ */ new Date(), l, a;
        if ((n.lastOp == r || n.lastOrigin == t.origin && t.origin && (t.origin.charAt(0) == "+" && n.lastModTime > o - (e.cm ? e.cm.options.historyEventDelay : 500) || t.origin.charAt(0) == "*")) && (l = Ds(n, n.lastOp == r)))
          a = K(l.changes), I(t.from, t.to) == 0 && I(t.from, a.to) == 0 ? a.to = pt(t) : l.changes.push(Tn(e, t));
        else {
          var s = K(n.done);
          for ((!s || !s.ranges) && di(e.sel, n.done), l = {
            changes: [Tn(e, t)],
            generation: n.generation
          }, n.done.push(l); n.done.length > n.undoDepth; )
            n.done.shift(), n.done[0].ranges || n.done.shift();
        }
        n.done.push(i), n.generation = ++n.maxGeneration, n.lastModTime = n.lastSelTime = o, n.lastOp = n.lastSelOp = r, n.lastOrigin = n.lastSelOrigin = t.origin, a || te(e, "historyAdded");
      }
      function Ns(e, t, i, r) {
        var n = t.charAt(0);
        return n == "*" || n == "+" && i.ranges.length == r.ranges.length && i.somethingSelected() == r.somethingSelected() && /* @__PURE__ */ new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function Os(e, t, i, r) {
        var n = e.history, o = r && r.origin;
        i == n.lastSelOp || o && n.lastSelOrigin == o && (n.lastModTime == n.lastSelTime && n.lastOrigin == o || Ns(e, o, K(n.done), t)) ? n.done[n.done.length - 1] = t : di(t, n.done), n.lastSelTime = +/* @__PURE__ */ new Date(), n.lastSelOrigin = o, n.lastSelOp = i, r && r.clearRedo !== !1 && ll(n.undone);
      }
      function di(e, t) {
        var i = K(t);
        i && i.ranges && i.equals(e) || t.push(e);
      }
      function sl(e, t, i, r) {
        var n = t["spans_" + e.id], o = 0;
        e.iter(Math.max(e.first, i), Math.min(e.first + e.size, r), function(l) {
          l.markedSpans && ((n || (n = t["spans_" + e.id] = {}))[o] = l.markedSpans), ++o;
        });
      }
      function As(e) {
        if (!e)
          return null;
        for (var t, i = 0; i < e.length; ++i)
          e[i].marker.explicitlyCleared ? t || (t = e.slice(0, i)) : t && t.push(e[i]);
        return t ? t.length ? t : null : e;
      }
      function Ws(e, t) {
        var i = t["spans_" + e.id];
        if (!i)
          return null;
        for (var r = [], n = 0; n < t.text.length; ++n)
          r.push(As(i[n]));
        return r;
      }
      function ul(e, t) {
        var i = Ws(e, t), r = Ji(e, t);
        if (!i)
          return r;
        if (!r)
          return i;
        for (var n = 0; n < i.length; ++n) {
          var o = i[n], l = r[n];
          if (o && l)
            e:
              for (var a = 0; a < l.length; ++a) {
                for (var s = l[a], u = 0; u < o.length; ++u)
                  if (o[u].marker == s.marker)
                    continue e;
                o.push(s);
              }
          else
            l && (i[n] = l);
        }
        return i;
      }
      function qt(e, t, i) {
        for (var r = [], n = 0; n < e.length; ++n) {
          var o = e[n];
          if (o.ranges) {
            r.push(i ? He.prototype.deepCopy.call(o) : o);
            continue;
          }
          var l = o.changes, a = [];
          r.push({ changes: a });
          for (var s = 0; s < l.length; ++s) {
            var u = l[s], f = void 0;
            if (a.push({ from: u.from, to: u.to, text: u.text }), t)
              for (var h in u)
                (f = h.match(/^spans_(\d+)$/)) && ve(t, Number(f[1])) > -1 && (K(a)[h] = u[h], delete u[h]);
          }
        }
        return r;
      }
      function Mn(e, t, i, r) {
        if (r) {
          var n = e.anchor;
          if (i) {
            var o = I(t, n) < 0;
            o != I(i, n) < 0 ? (n = t, t = i) : o != I(t, i) < 0 && (t = i);
          }
          return new z(n, t);
        } else
          return new z(i || t, t);
      }
      function pi(e, t, i, r, n) {
        n == null && (n = e.cm && (e.cm.display.shift || e.extend)), ge(e, new He([Mn(e.sel.primary(), t, i, n)], 0), r);
      }
      function fl(e, t, i) {
        for (var r = [], n = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
          r[o] = Mn(e.sel.ranges[o], t[o], null, n);
        var l = Re(e.cm, r, e.sel.primIndex);
        ge(e, l, i);
      }
      function Dn(e, t, i, r) {
        var n = e.sel.ranges.slice(0);
        n[t] = i, ge(e, Re(e.cm, n, e.sel.primIndex), r);
      }
      function hl(e, t, i, r) {
        ge(e, dt(t, i), r);
      }
      function Hs(e, t, i) {
        var r = {
          ranges: t.ranges,
          update: function(n) {
            this.ranges = [];
            for (var o = 0; o < n.length; o++)
              this.ranges[o] = new z(
                R(e, n[o].anchor),
                R(e, n[o].head)
              );
          },
          origin: i && i.origin
        };
        return te(e, "beforeSelectionChange", e, r), e.cm && te(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Re(e.cm, r.ranges, r.ranges.length - 1) : t;
      }
      function cl(e, t, i) {
        var r = e.history.done, n = K(r);
        n && n.ranges ? (r[r.length - 1] = t, vi(e, t, i)) : ge(e, t, i);
      }
      function ge(e, t, i) {
        vi(e, t, i), Os(e, e.sel, e.cm ? e.cm.curOp.id : NaN, i);
      }
      function vi(e, t, i) {
        (Pe(e, "beforeSelectionChange") || e.cm && Pe(e.cm, "beforeSelectionChange")) && (t = Hs(e, t, i));
        var r = i && i.bias || (I(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        dl(e, vl(e, t, r, !0)), !(i && i.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Kt(e.cm);
      }
      function dl(e, t) {
        t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, Zn(e.cm)), ue(e, "cursorActivity", e));
      }
      function pl(e) {
        dl(e, vl(e, e.sel, null, !1));
      }
      function vl(e, t, i, r) {
        for (var n, o = 0; o < t.ranges.length; o++) {
          var l = t.ranges[o], a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o], s = gi(e, l.anchor, a && a.anchor, i, r), u = gi(e, l.head, a && a.head, i, r);
          (n || s != l.anchor || u != l.head) && (n || (n = t.ranges.slice(0, o)), n[o] = new z(s, u));
        }
        return n ? Re(e.cm, n, t.primIndex) : t;
      }
      function Yt(e, t, i, r, n) {
        var o = O(e, t.line);
        if (o.markedSpans)
          for (var l = 0; l < o.markedSpans.length; ++l) {
            var a = o.markedSpans[l], s = a.marker, u = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft, f = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
            if ((a.from == null || (u ? a.from <= t.ch : a.from < t.ch)) && (a.to == null || (f ? a.to >= t.ch : a.to > t.ch))) {
              if (n && (te(s, "beforeCursorEnter"), s.explicitlyCleared))
                if (o.markedSpans) {
                  --l;
                  continue;
                } else
                  break;
              if (!s.atomic)
                continue;
              if (i) {
                var h = s.find(r < 0 ? 1 : -1), p = void 0;
                if ((r < 0 ? f : u) && (h = gl(e, h, -r, h && h.line == t.line ? o : null)), h && h.line == t.line && (p = I(h, i)) && (r < 0 ? p < 0 : p > 0))
                  return Yt(e, h, t, r, n);
              }
              var d = s.find(r < 0 ? -1 : 1);
              return (r < 0 ? u : f) && (d = gl(e, d, r, d.line == t.line ? o : null)), d ? Yt(e, d, t, r, n) : null;
            }
          }
        return t;
      }
      function gi(e, t, i, r, n) {
        var o = r || 1, l = Yt(e, t, i, o, n) || !n && Yt(e, t, i, o, !0) || Yt(e, t, i, -o, n) || !n && Yt(e, t, i, -o, !0);
        return l || (e.cantEdit = !0, m(e.first, 0));
      }
      function gl(e, t, i, r) {
        return i < 0 && t.ch == 0 ? t.line > e.first ? R(e, m(t.line - 1)) : null : i > 0 && t.ch == (r || O(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? m(t.line + 1, 0) : null : new m(t.line, t.ch + i);
      }
      function yl(e) {
        e.setSelection(m(e.firstLine(), 0), m(e.lastLine()), _e);
      }
      function ml(e, t, i) {
        var r = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return r.canceled = !0;
          }
        };
        return i && (r.update = function(n, o, l, a) {
          n && (r.from = R(e, n)), o && (r.to = R(e, o)), l && (r.text = l), a !== void 0 && (r.origin = a);
        }), te(e, "beforeChange", e, r), e.cm && te(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function Zt(e, t, i) {
        if (e.cm) {
          if (!e.cm.curOp)
            return fe(e.cm, Zt)(e, t, i);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((Pe(e, "beforeChange") || e.cm && Pe(e.cm, "beforeChange")) && (t = ml(e, t, !0), !t))) {
          var r = ao && !i && Oa(e, t.from, t.to);
          if (r)
            for (var n = r.length - 1; n >= 0; --n)
              bl(e, { from: r[n].from, to: r[n].to, text: n ? [""] : t.text, origin: t.origin });
          else
            bl(e, t);
        }
      }
      function bl(e, t) {
        if (!(t.text.length == 1 && t.text[0] == "" && I(t.from, t.to) == 0)) {
          var i = Sn(e, t);
          al(e, t, i, e.cm ? e.cm.curOp.id : NaN), kr(e, t, i, Ji(e, t));
          var r = [];
          vt(e, function(n, o) {
            !o && ve(r, n.history) == -1 && (Sl(n.history, t), r.push(n.history)), kr(n, t, null, Ji(n, t));
          });
        }
      }
      function yi(e, t, i) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !i)) {
          for (var n = e.history, o, l = e.sel, a = t == "undo" ? n.done : n.undone, s = t == "undo" ? n.undone : n.done, u = 0; u < a.length && (o = a[u], !(i ? o.ranges && !o.equals(e.sel) : !o.ranges)); u++)
            ;
          if (u != a.length) {
            for (n.lastOrigin = n.lastSelOrigin = null; ; )
              if (o = a.pop(), o.ranges) {
                if (di(o, s), i && !o.equals(e.sel)) {
                  ge(e, o, { clearRedo: !1 });
                  return;
                }
                l = o;
              } else if (r) {
                a.push(o);
                return;
              } else
                break;
            var f = [];
            di(l, s), s.push({ changes: f, generation: n.generation }), n.generation = o.generation || ++n.maxGeneration;
            for (var h = Pe(e, "beforeChange") || e.cm && Pe(e.cm, "beforeChange"), p = function(y) {
              var x = o.changes[y];
              if (x.origin = t, h && !ml(e, x, !1))
                return a.length = 0, {};
              f.push(Tn(e, x));
              var w = y ? Sn(e, x) : K(a);
              kr(e, x, w, ul(e, x)), !y && e.cm && e.cm.scrollIntoView({ from: x.from, to: pt(x) });
              var T = [];
              vt(e, function(S, N) {
                !N && ve(T, S.history) == -1 && (Sl(S.history, x), T.push(S.history)), kr(S, x, null, ul(S, x));
              });
            }, d = o.changes.length - 1; d >= 0; --d) {
              var v = p(d);
              if (v)
                return v.v;
            }
          }
        }
      }
      function xl(e, t) {
        if (t != 0 && (e.first += t, e.sel = new He(Kr(e.sel.ranges, function(n) {
          return new z(
            m(n.anchor.line + t, n.anchor.ch),
            m(n.head.line + t, n.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          Le(e.cm, e.first, e.first - t, t);
          for (var i = e.cm.display, r = i.viewFrom; r < i.viewTo; r++)
            ht(e.cm, r, "gutter");
        }
      }
      function kr(e, t, i, r) {
        if (e.cm && !e.cm.curOp)
          return fe(e.cm, kr)(e, t, i, r);
        if (t.to.line < e.first) {
          xl(e, t.text.length - 1 - (t.to.line - t.from.line));
          return;
        }
        if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var n = t.text.length - 1 - (e.first - t.from.line);
            xl(e, n), t = {
              from: m(e.first, 0),
              to: m(t.to.line + n, t.to.ch),
              text: [K(t.text)],
              origin: t.origin
            };
          }
          var o = e.lastLine();
          t.to.line > o && (t = {
            from: t.from,
            to: m(o, O(e, o).text.length),
            text: [t.text[0]],
            origin: t.origin
          }), t.removed = St(e, t.from, t.to), i || (i = Sn(e, t)), e.cm ? Es(e.cm, t, r) : kn(e, t, r), vi(e, i, _e), e.cantEdit && gi(e, m(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function Es(e, t, i) {
        var r = e.doc, n = e.display, o = t.from, l = t.to, a = !1, s = o.line;
        e.options.lineWrapping || (s = X(Xe(O(r, o.line))), r.iter(s, l.line + 1, function(d) {
          if (d == n.maxLine)
            return a = !0, !0;
        })), r.sel.contains(t.from, t.to) > -1 && Zn(e), kn(r, t, i, Ro(e)), e.options.lineWrapping || (r.iter(s, o.line + t.text.length, function(d) {
          var v = ei(d);
          v > n.maxLineLength && (n.maxLine = d, n.maxLineLength = v, n.maxLineChanged = !0, a = !1);
        }), a && (e.curOp.updateMaxLine = !0)), Sa(r, o.line), wr(e, 400);
        var u = t.text.length - (l.line - o.line) - 1;
        t.full ? Le(e) : o.line == l.line && t.text.length == 1 && !il(e.doc, t) ? ht(e, o.line, "text") : Le(e, o.line, l.line + 1, u);
        var f = Pe(e, "changes"), h = Pe(e, "change");
        if (h || f) {
          var p = {
            from: o,
            to: l,
            text: t.text,
            removed: t.removed,
            origin: t.origin
          };
          h && ue(e, "change", e, p), f && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(p);
        }
        e.display.selForContextMenu = null;
      }
      function Qt(e, t, i, r, n) {
        var o;
        r || (r = i), I(r, i) < 0 && (o = [r, i], i = o[0], r = o[1]), typeof t == "string" && (t = e.splitLines(t)), Zt(e, { from: i, to: r, text: t, origin: n });
      }
      function Cl(e, t, i, r) {
        i < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
      }
      function wl(e, t, i, r) {
        for (var n = 0; n < e.length; ++n) {
          var o = e[n], l = !0;
          if (o.ranges) {
            o.copied || (o = e[n] = o.deepCopy(), o.copied = !0);
            for (var a = 0; a < o.ranges.length; a++)
              Cl(o.ranges[a].anchor, t, i, r), Cl(o.ranges[a].head, t, i, r);
            continue;
          }
          for (var s = 0; s < o.changes.length; ++s) {
            var u = o.changes[s];
            if (i < u.from.line)
              u.from = m(u.from.line + r, u.from.ch), u.to = m(u.to.line + r, u.to.ch);
            else if (t <= u.to.line) {
              l = !1;
              break;
            }
          }
          l || (e.splice(0, n + 1), n = 0);
        }
      }
      function Sl(e, t) {
        var i = t.from.line, r = t.to.line, n = t.text.length - (r - i) - 1;
        wl(e.done, i, r, n), wl(e.undone, i, r, n);
      }
      function Tr(e, t, i, r) {
        var n = t, o = t;
        return typeof t == "number" ? o = O(e, Vn(e, t)) : n = X(t), n == null ? null : (r(o, n) && e.cm && ht(e.cm, n, i), o);
      }
      function Mr(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, i = 0; i < e.length; ++i)
          e[i].parent = this, t += e[i].height;
        this.height = t;
      }
      Mr.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        // Remove the n lines at offset 'at'.
        removeInner: function(e, t) {
          for (var i = e, r = e + t; i < r; ++i) {
            var n = this.lines[i];
            this.height -= n.height, Fa(n), ue(n, "delete");
          }
          this.lines.splice(e, t);
        },
        // Helper used to collapse a small branch into a single leaf.
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        // Insert the given array of lines at offset 'at', count them as
        // having the given height.
        insertInner: function(e, t, i) {
          this.height += i, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
          for (var r = 0; r < t.length; ++r)
            t[r].parent = this;
        },
        // Used to iterate over a part of the tree.
        iterN: function(e, t, i) {
          for (var r = e + t; e < r; ++e)
            if (i(this.lines[e]))
              return !0;
        }
      };
      function Dr(e) {
        this.children = e;
        for (var t = 0, i = 0, r = 0; r < e.length; ++r) {
          var n = e[r];
          t += n.chunkSize(), i += n.height, n.parent = this;
        }
        this.size = t, this.height = i, this.parent = null;
      }
      Dr.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, t) {
          this.size -= t;
          for (var i = 0; i < this.children.length; ++i) {
            var r = this.children[i], n = r.chunkSize();
            if (e < n) {
              var o = Math.min(t, n - e), l = r.height;
              if (r.removeInner(e, o), this.height -= l - r.height, n == o && (this.children.splice(i--, 1), r.parent = null), (t -= o) == 0)
                break;
              e = 0;
            } else
              e -= n;
          }
          if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Mr))) {
            var a = [];
            this.collapse(a), this.children = [new Mr(a)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var t = 0; t < this.children.length; ++t)
            this.children[t].collapse(e);
        },
        insertInner: function(e, t, i) {
          this.size += t.length, this.height += i;
          for (var r = 0; r < this.children.length; ++r) {
            var n = this.children[r], o = n.chunkSize();
            if (e <= o) {
              if (n.insertInner(e, t, i), n.lines && n.lines.length > 50) {
                for (var l = n.lines.length % 25 + 25, a = l; a < n.lines.length; ) {
                  var s = new Mr(n.lines.slice(a, a += 25));
                  n.height -= s.height, this.children.splice(++r, 0, s), s.parent = this;
                }
                n.lines = n.lines.slice(0, l), this.maybeSpill();
              }
              break;
            }
            e -= o;
          }
        },
        // When a node has grown, check whether it should be split.
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var t = e.children.splice(e.children.length - 5, 5), i = new Dr(t);
              if (e.parent) {
                e.size -= i.size, e.height -= i.height;
                var n = ve(e.parent.children, e);
                e.parent.children.splice(n + 1, 0, i);
              } else {
                var r = new Dr(e.children);
                r.parent = e, e.children = [r, i], e = r;
              }
              i.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, t, i) {
          for (var r = 0; r < this.children.length; ++r) {
            var n = this.children[r], o = n.chunkSize();
            if (e < o) {
              var l = Math.min(t, o - e);
              if (n.iterN(e, l, i))
                return !0;
              if ((t -= l) == 0)
                break;
              e = 0;
            } else
              e -= o;
          }
        }
      };
      var Nr = function(e, t, i) {
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && (this[r] = i[r]);
        this.doc = e, this.node = t;
      };
      Nr.prototype.clear = function() {
        var e = this.doc.cm, t = this.line.widgets, i = this.line, r = X(i);
        if (!(r == null || !t)) {
          for (var n = 0; n < t.length; ++n)
            t[n] == this && t.splice(n--, 1);
          t.length || (i.widgets = null);
          var o = vr(this);
          Ge(i, Math.max(0, i.height - o)), e && (Ne(e, function() {
            Ll(e, i, -o), ht(e, r, "widget");
          }), ue(e, "lineWidgetCleared", e, this, r));
        }
      }, Nr.prototype.changed = function() {
        var e = this, t = this.height, i = this.doc.cm, r = this.line;
        this.height = null;
        var n = vr(this) - t;
        n && (ft(this.doc, r) || Ge(r, r.height + n), i && Ne(i, function() {
          i.curOp.forceUpdate = !0, Ll(i, r, n), ue(i, "lineWidgetChanged", i, e, X(r));
        }));
      }, Ft(Nr);
      function Ll(e, t, i) {
        tt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && yn(e, i);
      }
      function Fs(e, t, i, r) {
        var n = new Nr(e, i, r), o = e.cm;
        return o && n.noHScroll && (o.display.alignWidgets = !0), Tr(e, t, "widget", function(l) {
          var a = l.widgets || (l.widgets = []);
          if (n.insertAt == null ? a.push(n) : a.splice(Math.min(a.length, Math.max(0, n.insertAt)), 0, n), n.line = l, o && !ft(e, l)) {
            var s = tt(l) < e.scrollTop;
            Ge(l, l.height + vr(n)), s && yn(o, n.height), o.curOp.forceUpdate = !0;
          }
          return !0;
        }), o && ue(o, "lineWidgetAdded", o, n, typeof t == "number" ? t : X(t)), n;
      }
      var kl = 0, gt = function(e, t) {
        this.lines = [], this.type = t, this.doc = e, this.id = ++kl;
      };
      gt.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, t = e && !e.curOp;
          if (t && At(e), Pe(this, "clear")) {
            var i = this.find();
            i && ue(this, "clear", i.from, i.to);
          }
          for (var r = null, n = null, o = 0; o < this.lines.length; ++o) {
            var l = this.lines[o], a = cr(l.markedSpans, this);
            e && !this.collapsed ? ht(e, X(l), "text") : e && (a.to != null && (n = X(l)), a.from != null && (r = X(l))), l.markedSpans = Ta(l.markedSpans, a), a.from == null && this.collapsed && !ft(this.doc, l) && e && Ge(l, Ut(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var s = 0; s < this.lines.length; ++s) {
              var u = Xe(this.lines[s]), f = ei(u);
              f > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = f, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && Le(e, r, n + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && pl(e.doc)), e && ue(e, "markerCleared", e, this, r, n), t && Wt(e), this.parent && this.parent.clear();
        }
      }, gt.prototype.find = function(e, t) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var i, r, n = 0; n < this.lines.length; ++n) {
          var o = this.lines[n], l = cr(o.markedSpans, this);
          if (l.from != null && (i = m(t ? o : X(o), l.from), e == -1))
            return i;
          if (l.to != null && (r = m(t ? o : X(o), l.to), e == 1))
            return r;
        }
        return i && { from: i, to: r };
      }, gt.prototype.changed = function() {
        var e = this, t = this.find(-1, !0), i = this, r = this.doc.cm;
        !t || !r || Ne(r, function() {
          var n = t.line, o = X(t.line), l = on(r, o);
          if (l && (Oo(l), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !ft(i.doc, n) && i.height != null) {
            var a = i.height;
            i.height = null;
            var s = vr(i) - a;
            s && Ge(n, n.height + s);
          }
          ue(r, "markerChanged", r, e);
        });
      }, gt.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (!t.maybeHiddenMarkers || ve(t.maybeHiddenMarkers, this) == -1) && (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, gt.prototype.detachLine = function(e) {
        if (this.lines.splice(ve(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
        }
      }, Ft(gt);
      function Jt(e, t, i, r, n) {
        if (r && r.shared)
          return Ps(e, t, i, r, n);
        if (e.cm && !e.cm.curOp)
          return fe(e.cm, Jt)(e, t, i, r, n);
        var o = new gt(e, n), l = I(t, i);
        if (r && Ct(r, o, !1), l > 0 || l == 0 && o.clearWhenEmpty !== !1)
          return o;
        if (o.replacedWith && (o.collapsed = !0, o.widgetNode = g("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
          if (po(e, t.line, t, i, o) || t.line != i.line && po(e, i.line, t, i, o))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          ka();
        }
        o.addToHistory && al(e, { from: t, to: i, origin: "markText" }, e.sel, NaN);
        var a = t.line, s = e.cm, u;
        if (e.iter(a, i.line + 1, function(h) {
          s && o.collapsed && !s.options.lineWrapping && Xe(h) == s.display.maxLine && (u = !0), o.collapsed && a != t.line && Ge(h, 0), Ma(h, new Jr(
            o,
            a == t.line ? t.ch : null,
            a == i.line ? i.ch : null
          ), e.cm && e.cm.curOp), ++a;
        }), o.collapsed && e.iter(t.line, i.line + 1, function(h) {
          ft(e, h) && Ge(h, 0);
        }), o.clearOnEnter && P(o, "beforeCursorEnter", function() {
          return o.clear();
        }), o.readOnly && (La(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++kl, o.atomic = !0), s) {
          if (u && (s.curOp.updateMaxLine = !0), o.collapsed)
            Le(s, t.line, i.line + 1);
          else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
            for (var f = t.line; f <= i.line; f++)
              ht(s, f, "text");
          o.atomic && pl(s.doc), ue(s, "markerAdded", s, o);
        }
        return o;
      }
      var Or = function(e, t) {
        this.markers = e, this.primary = t;
        for (var i = 0; i < e.length; ++i)
          e[i].parent = this;
      };
      Or.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          ue(this, "clear");
        }
      }, Or.prototype.find = function(e, t) {
        return this.primary.find(e, t);
      }, Ft(Or);
      function Ps(e, t, i, r, n) {
        r = Ct(r), r.shared = !1;
        var o = [Jt(e, t, i, r, n)], l = o[0], a = r.widgetNode;
        return vt(e, function(s) {
          a && (r.widgetNode = a.cloneNode(!0)), o.push(Jt(s, R(s, t), R(s, i), r, n));
          for (var u = 0; u < s.linked.length; ++u)
            if (s.linked[u].isParent)
              return;
          l = K(o);
        }), new Or(o, l);
      }
      function Tl(e) {
        return e.findMarks(m(e.first, 0), e.clipPos(m(e.lastLine())), function(t) {
          return t.parent;
        });
      }
      function Is(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i], n = r.find(), o = e.clipPos(n.from), l = e.clipPos(n.to);
          if (I(o, l)) {
            var a = Jt(e, o, l, r.primary, r.primary.type);
            r.markers.push(a), a.parent = r;
          }
        }
      }
      function Rs(e) {
        for (var t = function(r) {
          var n = e[r], o = [n.primary.doc];
          vt(n.primary.doc, function(s) {
            return o.push(s);
          });
          for (var l = 0; l < n.markers.length; l++) {
            var a = n.markers[l];
            ve(o, a.doc) == -1 && (a.parent = null, n.markers.splice(l--, 1));
          }
        }, i = 0; i < e.length; i++)
          t(i);
      }
      var Bs = 0, ke = function(e, t, i, r, n) {
        if (!(this instanceof ke))
          return new ke(e, t, i, r, n);
        i == null && (i = 0), Dr.call(this, [new Mr([new Rt("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i;
        var o = m(i, 0);
        this.sel = dt(o), this.history = new ci(null), this.id = ++Bs, this.modeOption = t, this.lineSep = r, this.direction = n == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), kn(this, { from: o, to: o, text: e }), ge(this, dt(o), _e);
      };
      ke.prototype = Kn(Dr.prototype, {
        constructor: ke,
        // Iterate over the document. Supports two forms -- with only one
        // argument, it calls that for each line in the document. With
        // three, it iterates over the range given by the first two (with
        // the second being non-inclusive).
        iter: function(e, t, i) {
          i ? this.iterN(e - this.first, t - e, i) : this.iterN(this.first, this.first + this.size, e);
        },
        // Non-public interface for adding and removing lines.
        insert: function(e, t) {
          for (var i = 0, r = 0; r < t.length; ++r)
            i += t[r].height;
          this.insertInner(e - this.first, t, i);
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t);
        },
        // From here, the methods are part of the public interface. Most
        // are also available from CodeMirror (editor) instances.
        getValue: function(e) {
          var t = Ki(this, this.first, this.first + this.size);
          return e === !1 ? t : t.join(e || this.lineSeparator());
        },
        setValue: he(function(e) {
          var t = m(this.first, 0), i = this.first + this.size - 1;
          Zt(this, {
            from: t,
            to: m(i, O(this, i).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && mr(this.cm, 0, 0), ge(this, dt(t), _e);
        }),
        replaceRange: function(e, t, i, r) {
          t = R(this, t), i = i ? R(this, i) : t, Qt(this, e, t, i, r);
        },
        getRange: function(e, t, i) {
          var r = St(this, R(this, e), R(this, t));
          return i === !1 ? r : i === "" ? r.join("") : r.join(i || this.lineSeparator());
        },
        getLine: function(e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function(e) {
          if (fr(this, e))
            return O(this, e);
        },
        getLineNumber: function(e) {
          return X(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = O(this, e)), Xe(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return R(this, e);
        },
        getCursor: function(e) {
          var t = this.sel.primary(), i;
          return e == null || e == "head" ? i = t.head : e == "anchor" ? i = t.anchor : e == "end" || e == "to" || e === !1 ? i = t.to() : i = t.from(), i;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: he(function(e, t, i) {
          hl(this, R(this, typeof e == "number" ? m(e, t || 0) : e), null, i);
        }),
        setSelection: he(function(e, t, i) {
          hl(this, R(this, e), R(this, t || e), i);
        }),
        extendSelection: he(function(e, t, i) {
          pi(this, R(this, e), t && R(this, t), i);
        }),
        extendSelections: he(function(e, t) {
          fl(this, $n(this, e), t);
        }),
        extendSelectionsBy: he(function(e, t) {
          var i = Kr(this.sel.ranges, e);
          fl(this, $n(this, i), t);
        }),
        setSelections: he(function(e, t, i) {
          if (e.length) {
            for (var r = [], n = 0; n < e.length; n++)
              r[n] = new z(
                R(this, e[n].anchor),
                R(this, e[n].head || e[n].anchor)
              );
            t == null && (t = Math.min(e.length - 1, this.sel.primIndex)), ge(this, Re(this.cm, r, t), i);
          }
        }),
        addSelection: he(function(e, t, i) {
          var r = this.sel.ranges.slice(0);
          r.push(new z(R(this, e), R(this, t || e))), ge(this, Re(this.cm, r, r.length - 1), i);
        }),
        getSelection: function(e) {
          for (var t = this.sel.ranges, i, r = 0; r < t.length; r++) {
            var n = St(this, t[r].from(), t[r].to());
            i = i ? i.concat(n) : n;
          }
          return e === !1 ? i : i.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var t = [], i = this.sel.ranges, r = 0; r < i.length; r++) {
            var n = St(this, i[r].from(), i[r].to());
            e !== !1 && (n = n.join(e || this.lineSeparator())), t[r] = n;
          }
          return t;
        },
        replaceSelection: function(e, t, i) {
          for (var r = [], n = 0; n < this.sel.ranges.length; n++)
            r[n] = e;
          this.replaceSelections(r, t, i || "+input");
        },
        replaceSelections: he(function(e, t, i) {
          for (var r = [], n = this.sel, o = 0; o < n.ranges.length; o++) {
            var l = n.ranges[o];
            r[o] = { from: l.from(), to: l.to(), text: this.splitLines(e[o]), origin: i };
          }
          for (var a = t && t != "end" && Ts(this, r, t), s = r.length - 1; s >= 0; s--)
            Zt(this, r[s]);
          a ? cl(this, a) : this.cm && Kt(this.cm);
        }),
        undo: he(function() {
          yi(this, "undo");
        }),
        redo: he(function() {
          yi(this, "redo");
        }),
        undoSelection: he(function() {
          yi(this, "undo", !0);
        }),
        redoSelection: he(function() {
          yi(this, "redo", !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, t = 0, i = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++t;
          for (var n = 0; n < e.undone.length; n++)
            e.undone[n].ranges || ++i;
          return { undo: t, redo: i };
        },
        clearHistory: function() {
          var e = this;
          this.history = new ci(this.history), vt(this, function(t) {
            return t.history = e.history;
          }, !0);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: qt(this.history.done),
            undone: qt(this.history.undone)
          };
        },
        setHistory: function(e) {
          var t = this.history = new ci(this.history);
          t.done = qt(e.done.slice(0), null, !0), t.undone = qt(e.undone.slice(0), null, !0);
        },
        setGutterMarker: he(function(e, t, i) {
          return Tr(this, e, "gutter", function(r) {
            var n = r.gutterMarkers || (r.gutterMarkers = {});
            return n[t] = i, !i && Xn(n) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: he(function(e) {
          var t = this;
          this.iter(function(i) {
            i.gutterMarkers && i.gutterMarkers[e] && Tr(t, i, "gutter", function() {
              return i.gutterMarkers[e] = null, Xn(i.gutterMarkers) && (i.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var t;
          if (typeof e == "number") {
            if (!fr(this, e) || (t = e, e = O(this, e), !e))
              return null;
          } else if (t = X(e), t == null)
            return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: he(function(e, t, i) {
          return Tr(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var n = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[n])
              r[n] = i;
            else {
              if (je(i).test(r[n]))
                return !1;
              r[n] += " " + i;
            }
            return !0;
          });
        }),
        removeLineClass: he(function(e, t, i) {
          return Tr(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var n = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass", o = r[n];
            if (o)
              if (i == null)
                r[n] = null;
              else {
                var l = o.match(je(i));
                if (!l)
                  return !1;
                var a = l.index + l[0].length;
                r[n] = o.slice(0, l.index) + (!l.index || a == o.length ? "" : " ") + o.slice(a) || null;
              }
            else
              return !1;
            return !0;
          });
        }),
        addLineWidget: he(function(e, t, i) {
          return Fs(this, e, t, i);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, t, i) {
          return Jt(this, R(this, e), R(this, t), i, i && i.type || "range");
        },
        setBookmark: function(e, t) {
          var i = {
            replacedWith: t && (t.nodeType == null ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents
          };
          return e = R(this, e), Jt(this, e, e, i, "bookmark");
        },
        findMarksAt: function(e) {
          e = R(this, e);
          var t = [], i = O(this, e.line).markedSpans;
          if (i)
            for (var r = 0; r < i.length; ++r) {
              var n = i[r];
              (n.from == null || n.from <= e.ch) && (n.to == null || n.to >= e.ch) && t.push(n.marker.parent || n.marker);
            }
          return t;
        },
        findMarks: function(e, t, i) {
          e = R(this, e), t = R(this, t);
          var r = [], n = e.line;
          return this.iter(e.line, t.line + 1, function(o) {
            var l = o.markedSpans;
            if (l)
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                !(s.to != null && n == e.line && e.ch >= s.to || s.from == null && n != e.line || s.from != null && n == t.line && s.from >= t.ch) && (!i || i(s.marker)) && r.push(s.marker.parent || s.marker);
              }
            ++n;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(t) {
            var i = t.markedSpans;
            if (i)
              for (var r = 0; r < i.length; ++r)
                i[r].from != null && e.push(i[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var t, i = this.first, r = this.lineSeparator().length;
          return this.iter(function(n) {
            var o = n.text.length + r;
            if (o > e)
              return t = e, !0;
            e -= o, ++i;
          }), R(this, m(i, t));
        },
        indexFromPos: function(e) {
          e = R(this, e);
          var t = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var i = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            t += r.text.length + i;
          }), t;
        },
        copy: function(e) {
          var t = new ke(
            Ki(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var t = this.first, i = this.first + this.size;
          e.from != null && e.from > t && (t = e.from), e.to != null && e.to < i && (i = e.to);
          var r = new ke(Ki(this, t, i), e.mode || this.modeOption, t, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], Is(r, Tl(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof Q && (e = e.doc), this.linked)
            for (var t = 0; t < this.linked.length; ++t) {
              var i = this.linked[t];
              if (i.doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Rs(Tl(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            vt(e, function(n) {
              return r.push(n.id);
            }, !0), e.history = new ci(null), e.history.done = qt(this.history.done, r), e.history.undone = qt(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          vt(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : Bi(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: he(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(t) {
            return t.order = null;
          }), this.cm && Ms(this.cm));
        })
      }), ke.prototype.eachLine = ke.prototype.iter;
      var Ml = 0;
      function zs(e) {
        var t = this;
        if (Dl(t), !(se(t, e) || rt(t.display, e))) {
          Se(e), E && (Ml = +/* @__PURE__ */ new Date());
          var i = Mt(t, e, !0), r = e.dataTransfer.files;
          if (!(!i || t.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var n = r.length, o = Array(n), l = 0, a = function() {
                ++l == n && fe(t, function() {
                  i = R(t.doc, i);
                  var d = {
                    from: i,
                    to: i,
                    text: t.doc.splitLines(
                      o.filter(function(v) {
                        return v != null;
                      }).join(t.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  Zt(t.doc, d), cl(t.doc, dt(R(t.doc, i), R(t.doc, pt(d))));
                })();
              }, s = function(d, v) {
                if (t.options.allowDropFileTypes && ve(t.options.allowDropFileTypes, d.type) == -1) {
                  a();
                  return;
                }
                var y = new FileReader();
                y.onerror = function() {
                  return a();
                }, y.onload = function() {
                  var x = y.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(x)) {
                    a();
                    return;
                  }
                  o[v] = x, a();
                }, y.readAsText(d);
              }, u = 0; u < r.length; u++)
                s(r[u], u);
            else {
              if (t.state.draggingText && t.doc.sel.contains(i) > -1) {
                t.state.draggingText(e), setTimeout(function() {
                  return t.display.input.focus();
                }, 20);
                return;
              }
              try {
                var f = e.dataTransfer.getData("Text");
                if (f) {
                  var h;
                  if (t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), vi(t.doc, dt(i, i)), h)
                    for (var p = 0; p < h.length; ++p)
                      Qt(t.doc, "", h[p].anchor, h[p].head, "drag");
                  t.replaceSelection(f, "around", "paste"), t.display.input.focus();
                }
              } catch (d) {
              }
            }
        }
      }
      function Us(e, t) {
        if (E && (!e.state.draggingText || +/* @__PURE__ */ new Date() - Ml < 100)) {
          ur(t);
          return;
        }
        if (!(se(e, t) || rt(e.display, t)) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !at)) {
          var i = W("img", null, null, "position: fixed; left: 0; top: 0;");
          i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", ae && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), t.dataTransfer.setDragImage(i, 0, 0), ae && i.parentNode.removeChild(i);
        }
      }
      function _s(e, t) {
        var i = Mt(e, t);
        if (i) {
          var r = document.createDocumentFragment();
          Uo(e, i, r), e.display.dragCursor || (e.display.dragCursor = W("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), xe(e.display.dragCursor, r);
        }
      }
      function Dl(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function Nl(e) {
        if (document.getElementsByClassName) {
          for (var t = document.getElementsByClassName("CodeMirror"), i = [], r = 0; r < t.length; r++) {
            var n = t[r].CodeMirror;
            n && i.push(n);
          }
          i.length && i[0].operation(function() {
            for (var o = 0; o < i.length; o++)
              e(i[o]);
          });
        }
      }
      var Ol = !1;
      function Gs() {
        Ol || (Ks(), Ol = !0);
      }
      function Ks() {
        var e;
        P(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, Nl(Xs);
          }, 100));
        }), P(window, "blur", function() {
          return Nl(Gt);
        });
      }
      function Xs(e) {
        var t = e.display;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize();
      }
      for (var yt = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, Ar = 0; Ar < 10; Ar++)
        yt[Ar + 48] = yt[Ar + 96] = String(Ar);
      for (var mi = 65; mi <= 90; mi++)
        yt[mi] = String.fromCharCode(mi);
      for (var Wr = 1; Wr <= 12; Wr++)
        yt[Wr + 111] = yt[Wr + 63235] = "F" + Wr;
      var nt = {};
      nt.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, nt.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, nt.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, nt.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, nt.default = me ? nt.macDefault : nt.pcDefault;
      function qs(e) {
        var t = e.split(/-(?!$)/);
        e = t[t.length - 1];
        for (var i, r, n, o, l = 0; l < t.length - 1; l++) {
          var a = t[l];
          if (/^(cmd|meta|m)$/i.test(a))
            o = !0;
          else if (/^a(lt)?$/i.test(a))
            i = !0;
          else if (/^(c|ctrl|control)$/i.test(a))
            r = !0;
          else if (/^s(hift)?$/i.test(a))
            n = !0;
          else
            throw new Error("Unrecognized modifier name: " + a);
        }
        return i && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), n && (e = "Shift-" + e), e;
      }
      function Ys(e) {
        var t = {};
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (/^(name|fallthrough|(de|at)tach)$/.test(i))
              continue;
            if (r == "...") {
              delete e[i];
              continue;
            }
            for (var n = Kr(i.split(" "), qs), o = 0; o < n.length; o++) {
              var l = void 0, a = void 0;
              o == n.length - 1 ? (a = n.join(" "), l = r) : (a = n.slice(0, o + 1).join(" "), l = "...");
              var s = t[a];
              if (!s)
                t[a] = l;
              else if (s != l)
                throw new Error("Inconsistent bindings for " + a);
            }
            delete e[i];
          }
        for (var u in t)
          e[u] = t[u];
        return e;
      }
      function jt(e, t, i, r) {
        t = bi(t);
        var n = t.call ? t.call(e, r) : t[e];
        if (n === !1)
          return "nothing";
        if (n === "...")
          return "multi";
        if (n != null && i(n))
          return "handled";
        if (t.fallthrough) {
          if (Object.prototype.toString.call(t.fallthrough) != "[object Array]")
            return jt(e, t.fallthrough, i, r);
          for (var o = 0; o < t.fallthrough.length; o++) {
            var l = jt(e, t.fallthrough[o], i, r);
            if (l)
              return l;
          }
        }
      }
      function Al(e) {
        var t = typeof e == "string" ? e : yt[e.keyCode];
        return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod";
      }
      function Wl(e, t, i) {
        var r = e;
        return t.altKey && r != "Alt" && (e = "Alt-" + e), (Ur ? t.metaKey : t.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (Ur ? t.ctrlKey : t.metaKey) && r != "Mod" && (e = "Cmd-" + e), !i && t.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function Hl(e, t) {
        if (ae && e.keyCode == 34 && e.char)
          return !1;
        var i = yt[e.keyCode];
        return i == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (i = e.code), Wl(i, e, t));
      }
      function bi(e) {
        return typeof e == "string" ? nt[e] : e;
      }
      function Vt(e, t) {
        for (var i = e.doc.sel.ranges, r = [], n = 0; n < i.length; n++) {
          for (var o = t(i[n]); r.length && I(o.from, K(r).to) <= 0; ) {
            var l = r.pop();
            if (I(l.from, o.from) < 0) {
              o.from = l.from;
              break;
            }
          }
          r.push(o);
        }
        Ne(e, function() {
          for (var a = r.length - 1; a >= 0; a--)
            Qt(e.doc, "", r[a].from, r[a].to, "+delete");
          Kt(e);
        });
      }
      function Nn(e, t, i) {
        var r = qn(e.text, t + i, i);
        return r < 0 || r > e.text.length ? null : r;
      }
      function On(e, t, i) {
        var r = Nn(e, t.ch, i);
        return r == null ? null : new m(t.line, r, i < 0 ? "after" : "before");
      }
      function An(e, t, i, r, n) {
        if (e) {
          t.doc.direction == "rtl" && (n = -n);
          var o = $e(i, t.doc.direction);
          if (o) {
            var l = n < 0 ? K(o) : o[0], a = n < 0 == (l.level == 1), s = a ? "after" : "before", u;
            if (l.level > 0 || t.doc.direction == "rtl") {
              var f = zt(t, i);
              u = n < 0 ? i.text.length - 1 : 0;
              var h = Ye(t, f, u).top;
              u = lr(function(p) {
                return Ye(t, f, p).top == h;
              }, n < 0 == (l.level == 1) ? l.from : l.to - 1, u), s == "before" && (u = Nn(i, u, 1));
            } else
              u = n < 0 ? l.to : l.from;
            return new m(r, u, s);
          }
        }
        return new m(r, n < 0 ? i.text.length : 0, n < 0 ? "before" : "after");
      }
      function Zs(e, t, i, r) {
        var n = $e(t, e.doc.direction);
        if (!n)
          return On(t, i, r);
        i.ch >= t.text.length ? (i.ch = t.text.length, i.sticky = "before") : i.ch <= 0 && (i.ch = 0, i.sticky = "after");
        var o = sr(n, i.ch, i.sticky), l = n[o];
        if (e.doc.direction == "ltr" && l.level % 2 == 0 && (r > 0 ? l.to > i.ch : l.from < i.ch))
          return On(t, i, r);
        var a = function(w, T) {
          return Nn(t, w instanceof m ? w.ch : w, T);
        }, s, u = function(w) {
          return e.options.lineWrapping ? (s = s || zt(e, t), Io(e, t, s, w)) : { begin: 0, end: t.text.length };
        }, f = u(i.sticky == "before" ? a(i, -1) : i.ch);
        if (e.doc.direction == "rtl" || l.level == 1) {
          var h = l.level == 1 == r < 0, p = a(i, h ? 1 : -1);
          if (p != null && (h ? p <= l.to && p <= f.end : p >= l.from && p >= f.begin)) {
            var d = h ? "before" : "after";
            return new m(i.line, p, d);
          }
        }
        var v = function(w, T, S) {
          for (var N = function(Z, ce) {
            return ce ? new m(i.line, a(Z, 1), "before") : new m(i.line, Z, "after");
          }; w >= 0 && w < n.length; w += T) {
            var H = n[w], A = T > 0 == (H.level != 1), B = A ? S.begin : a(S.end, -1);
            if (H.from <= B && B < H.to || (B = A ? H.from : a(H.to, -1), S.begin <= B && B < S.end))
              return N(B, A);
          }
        }, y = v(o + r, r, f);
        if (y)
          return y;
        var x = r > 0 ? f.end : a(f.begin, -1);
        return x != null && !(r > 0 && x == t.text.length) && (y = v(r > 0 ? 0 : n.length - 1, r, u(x)), y) ? y : null;
      }
      var Hr = {
        selectAll: yl,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), _e);
        },
        killLine: function(e) {
          return Vt(e, function(t) {
            if (t.empty()) {
              var i = O(e.doc, t.head.line).text.length;
              return t.head.ch == i && t.head.line < e.lastLine() ? { from: t.head, to: m(t.head.line + 1, 0) } : { from: t.head, to: m(t.head.line, i) };
            } else
              return { from: t.from(), to: t.to() };
          });
        },
        deleteLine: function(e) {
          return Vt(e, function(t) {
            return {
              from: m(t.from().line, 0),
              to: R(e.doc, m(t.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return Vt(e, function(t) {
            return {
              from: m(t.from().line, 0),
              to: t.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return Vt(e, function(t) {
            var i = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return { from: r, to: t.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return Vt(e, function(t) {
            var i = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
            return { from: t.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(m(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(m(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return El(e, t.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return Fl(e, t.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return Qs(e, t.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
            var i = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
          }, or);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
            var i = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: i }, "div");
          }, or);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
            var i = e.cursorCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? Fl(e, t.head) : r;
          }, or);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var t = [], i = e.listSelections(), r = e.options.tabSize, n = 0; n < i.length; n++) {
            var o = i[n].from(), l = Fe(e.getLine(o.line), o.ch, r);
            t.push(Ai(r - l % r));
          }
          e.replaceSelections(t);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        // Swap the two chars left and right of each selection's head.
        // Move cursor behind the two swapped characters afterwards.
        //
        // Doesn't consider line feeds a character.
        // Doesn't scan more than one line above to find a character.
        // Doesn't do anything on an empty line.
        // Doesn't do anything with non-empty selections.
        transposeChars: function(e) {
          return Ne(e, function() {
            for (var t = e.listSelections(), i = [], r = 0; r < t.length; r++)
              if (t[r].empty()) {
                var n = t[r].head, o = O(e.doc, n.line).text;
                if (o) {
                  if (n.ch == o.length && (n = new m(n.line, n.ch - 1)), n.ch > 0)
                    n = new m(n.line, n.ch + 1), e.replaceRange(
                      o.charAt(n.ch - 1) + o.charAt(n.ch - 2),
                      m(n.line, n.ch - 2),
                      n,
                      "+transpose"
                    );
                  else if (n.line > e.doc.first) {
                    var l = O(e.doc, n.line - 1).text;
                    l && (n = new m(n.line, 1), e.replaceRange(
                      o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1),
                      m(n.line - 1, l.length - 1),
                      n,
                      "+transpose"
                    ));
                  }
                }
                i.push(new z(n, n));
              }
            e.setSelections(i);
          });
        },
        newlineAndIndent: function(e) {
          return Ne(e, function() {
            for (var t = e.listSelections(), i = t.length - 1; i >= 0; i--)
              e.replaceRange(e.doc.lineSeparator(), t[i].anchor, t[i].head, "+input");
            t = e.listSelections();
            for (var r = 0; r < t.length; r++)
              e.indentLine(t[r].from().line, null, !0);
            Kt(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function El(e, t) {
        var i = O(e.doc, t), r = Xe(i);
        return r != i && (t = X(r)), An(!0, e, r, t, 1);
      }
      function Qs(e, t) {
        var i = O(e.doc, t), r = Wa(i);
        return r != i && (t = X(r)), An(!0, e, i, t, -1);
      }
      function Fl(e, t) {
        var i = El(e, t.line), r = O(e.doc, i.line), n = $e(r, e.doc.direction);
        if (!n || n[0].level == 0) {
          var o = Math.max(i.ch, r.text.search(/\S/)), l = t.line == i.line && t.ch <= o && t.ch;
          return m(i.line, l ? 0 : o, i.sticky);
        }
        return i;
      }
      function xi(e, t, i) {
        if (typeof t == "string" && (t = Hr[t], !t))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, n = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), i && (e.display.shift = !1), n = t(e) != _r;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return n;
      }
      function Js(e, t, i) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var n = jt(t, e.state.keyMaps[r], i, e);
          if (n)
            return n;
        }
        return e.options.extraKeys && jt(t, e.options.extraKeys, i, e) || jt(t, e.options.keyMap, i, e);
      }
      var js = new ut();
      function Er(e, t, i, r) {
        var n = e.state.keySeq;
        if (n) {
          if (Al(t))
            return "handled";
          if (/\'$/.test(t) ? e.state.keySeq = null : js.set(50, function() {
            e.state.keySeq == n && (e.state.keySeq = null, e.display.input.reset());
          }), Pl(e, n + " " + t, i, r))
            return !0;
        }
        return Pl(e, t, i, r);
      }
      function Pl(e, t, i, r) {
        var n = Js(e, t, r);
        return n == "multi" && (e.state.keySeq = t), n == "handled" && ue(e, "keyHandled", e, t, i), (n == "handled" || n == "multi") && (Se(i), dn(e)), !!n;
      }
      function Il(e, t) {
        var i = Hl(t, !0);
        return i ? t.shiftKey && !e.state.keySeq ? Er(e, "Shift-" + i, t, function(r) {
          return xi(e, r, !0);
        }) || Er(e, i, t, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return xi(e, r);
        }) : Er(e, i, t, function(r) {
          return xi(e, r);
        }) : !1;
      }
      function Vs(e, t, i) {
        return Er(e, "'" + i + "'", t, function(r) {
          return xi(e, r, !0);
        });
      }
      var Wn = null;
      function Rl(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && (t.curOp.focus = F(), !se(t, e))) {
          E && _ < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var i = e.keyCode;
          t.display.shift = i == 16 || e.shiftKey;
          var r = Il(t, e);
          ae && (Wn = r ? i : null, !r && i == 88 && !ga && (me ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), M && !me && !r && i == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), i == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && $s(t);
        }
      }
      function $s(e) {
        var t = e.display.lineDiv;
        oe(t, "CodeMirror-crosshair");
        function i(r) {
          (r.keyCode == 18 || !r.altKey) && (be(t, "CodeMirror-crosshair"), We(document, "keyup", i), We(document, "mouseover", i));
        }
        P(document, "keyup", i), P(document, "mouseover", i);
      }
      function Bl(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), se(this, e);
      }
      function zl(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && !(rt(t.display, e) || se(t, e) || e.ctrlKey && !e.altKey || me && e.metaKey)) {
          var i = e.keyCode, r = e.charCode;
          if (ae && i == Wn) {
            Wn = null, Se(e);
            return;
          }
          if (!(ae && (!e.which || e.which < 10) && Il(t, e))) {
            var n = String.fromCharCode(r == null ? i : r);
            n != "\b" && (Vs(t, e, n) || t.display.input.onKeyPress(e));
          }
        }
      }
      var eu = 400, Hn = function(e, t, i) {
        this.time = e, this.pos = t, this.button = i;
      };
      Hn.prototype.compare = function(e, t, i) {
        return this.time + eu > e && I(t, this.pos) == 0 && i == this.button;
      };
      var Fr, Pr;
      function tu(e, t) {
        var i = +/* @__PURE__ */ new Date();
        return Pr && Pr.compare(i, e, t) ? (Fr = Pr = null, "triple") : Fr && Fr.compare(i, e, t) ? (Pr = new Hn(i, e, t), Fr = null, "double") : (Fr = new Hn(i, e, t), Pr = null, "single");
      }
      function Ul(e) {
        var t = this, i = t.display;
        if (!(se(t, e) || i.activeTouch && i.input.supportsTouch())) {
          if (i.input.ensurePolled(), i.shift = e.shiftKey, rt(i, e)) {
            G || (i.scroller.draggable = !1, setTimeout(function() {
              return i.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!En(t, e)) {
            var r = Mt(t, e), n = Jn(e), o = r ? tu(r, n) : "single";
            window.focus(), n == 1 && t.state.selectingText && t.state.selectingText(e), !(r && ru(t, n, r, o, e)) && (n == 1 ? r ? nu(t, r, o, e) : Pi(e) == i.scroller && Se(e) : n == 2 ? (r && pi(t.doc, r), setTimeout(function() {
              return i.input.focus();
            }, 20)) : n == 3 && (st ? t.display.input.onContextMenu(e) : pn(t)));
          }
        }
      }
      function ru(e, t, i, r, n) {
        var o = "Click";
        return r == "double" ? o = "Double" + o : r == "triple" && (o = "Triple" + o), o = (t == 1 ? "Left" : t == 2 ? "Middle" : "Right") + o, Er(e, Wl(o, n), n, function(l) {
          if (typeof l == "string" && (l = Hr[l]), !l)
            return !1;
          var a = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), a = l(e, i) != _r;
          } finally {
            e.state.suppressEdits = !1;
          }
          return a;
        });
      }
      function iu(e, t, i) {
        var r = e.getOption("configureMouse"), n = r ? r(e, t, i) : {};
        if (n.unit == null) {
          var o = zr ? i.shiftKey && i.metaKey : i.altKey;
          n.unit = o ? "rectangle" : t == "single" ? "char" : t == "double" ? "word" : "line";
        }
        return (n.extend == null || e.doc.extend) && (n.extend = e.doc.extend || i.shiftKey), n.addNew == null && (n.addNew = me ? i.metaKey : i.ctrlKey), n.moveOnDrag == null && (n.moveOnDrag = !(me ? i.altKey : i.ctrlKey)), n;
      }
      function nu(e, t, i, r) {
        E ? setTimeout(Di(_o, e), 0) : e.curOp.focus = F();
        var n = iu(e, i, r), o = e.doc.sel, l;
        e.options.dragDrop && ca && !e.isReadOnly() && i == "single" && (l = o.contains(t)) > -1 && (I((l = o.ranges[l]).from(), t) < 0 || t.xRel > 0) && (I(l.to(), t) > 0 || t.xRel < 0) ? ou(e, r, t, n) : lu(e, r, t, n);
      }
      function ou(e, t, i, r) {
        var n = e.display, o = !1, l = fe(e, function(u) {
          G && (n.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : pn(e)), We(n.wrapper.ownerDocument, "mouseup", l), We(n.wrapper.ownerDocument, "mousemove", a), We(n.scroller, "dragstart", s), We(n.scroller, "drop", l), o || (Se(u), r.addNew || pi(e.doc, i, null, null, r.extend), G && !at || E && _ == 9 ? setTimeout(function() {
            n.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), n.input.focus();
          }, 20) : n.input.focus());
        }), a = function(u) {
          o = o || Math.abs(t.clientX - u.clientX) + Math.abs(t.clientY - u.clientY) >= 10;
        }, s = function() {
          return o = !0;
        };
        G && (n.scroller.draggable = !0), e.state.draggingText = l, l.copy = !r.moveOnDrag, P(n.wrapper.ownerDocument, "mouseup", l), P(n.wrapper.ownerDocument, "mousemove", a), P(n.scroller, "dragstart", s), P(n.scroller, "drop", l), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return n.input.focus();
        }, 20), n.scroller.dragDrop && n.scroller.dragDrop();
      }
      function _l(e, t, i) {
        if (i == "char")
          return new z(t, t);
        if (i == "word")
          return e.findWordAt(t);
        if (i == "line")
          return new z(m(t.line, 0), R(e.doc, m(t.line + 1, 0)));
        var r = i(e, t);
        return new z(r.from, r.to);
      }
      function lu(e, t, i, r) {
        E && pn(e);
        var n = e.display, o = e.doc;
        Se(t);
        var l, a, s = o.sel, u = s.ranges;
        if (r.addNew && !r.extend ? (a = o.sel.contains(i), a > -1 ? l = u[a] : l = new z(i, i)) : (l = o.sel.primary(), a = o.sel.primIndex), r.unit == "rectangle")
          r.addNew || (l = new z(i, i)), i = Mt(e, t, !0, !0), a = -1;
        else {
          var f = _l(e, i, r.unit);
          r.extend ? l = Mn(l, f.anchor, f.head, r.extend) : l = f;
        }
        r.addNew ? a == -1 ? (a = u.length, ge(
          o,
          Re(e, u.concat([l]), a),
          { scroll: !1, origin: "*mouse" }
        )) : u.length > 1 && u[a].empty() && r.unit == "char" && !r.extend ? (ge(
          o,
          Re(e, u.slice(0, a).concat(u.slice(a + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), s = o.sel) : Dn(o, a, l, Ni) : (a = 0, ge(o, new He([l], 0), Ni), s = o.sel);
        var h = i;
        function p(S) {
          if (I(h, S) != 0)
            if (h = S, r.unit == "rectangle") {
              for (var N = [], H = e.options.tabSize, A = Fe(O(o, i.line).text, i.ch, H), B = Fe(O(o, S.line).text, S.ch, H), Z = Math.min(A, B), ce = Math.max(A, B), j = Math.min(i.line, S.line), Oe = Math.min(e.lastLine(), Math.max(i.line, S.line)); j <= Oe; j++) {
                var Te = O(o, j).text, ie = Oi(Te, Z, H);
                Z == ce ? N.push(new z(m(j, ie), m(j, ie))) : Te.length > ie && N.push(new z(m(j, ie), m(j, Oi(Te, ce, H))));
              }
              N.length || N.push(new z(i, i)), ge(
                o,
                Re(e, s.ranges.slice(0, a).concat(N), a),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(S);
            } else {
              var Me = l, pe = _l(e, S, r.unit), le = Me.anchor, ne;
              I(pe.anchor, le) > 0 ? (ne = pe.head, le = Zr(Me.from(), pe.anchor)) : (ne = pe.anchor, le = Yr(Me.to(), pe.head));
              var $ = s.ranges.slice(0);
              $[a] = au(e, new z(R(o, le), ne)), ge(o, Re(e, $, a), Ni);
            }
        }
        var d = n.wrapper.getBoundingClientRect(), v = 0;
        function y(S) {
          var N = ++v, H = Mt(e, S, !0, r.unit == "rectangle");
          if (H)
            if (I(H, h) != 0) {
              e.curOp.focus = F(), p(H);
              var A = si(n, o);
              (H.line >= A.to || H.line < A.from) && setTimeout(fe(e, function() {
                v == N && y(S);
              }), 150);
            } else {
              var B = S.clientY < d.top ? -20 : S.clientY > d.bottom ? 20 : 0;
              B && setTimeout(fe(e, function() {
                v == N && (n.scroller.scrollTop += B, y(S));
              }), 50);
            }
        }
        function x(S) {
          e.state.selectingText = !1, v = 1 / 0, S && (Se(S), n.input.focus()), We(n.wrapper.ownerDocument, "mousemove", w), We(n.wrapper.ownerDocument, "mouseup", T), o.history.lastSelOrigin = null;
        }
        var w = fe(e, function(S) {
          S.buttons === 0 || !Jn(S) ? x(S) : y(S);
        }), T = fe(e, x);
        e.state.selectingText = T, P(n.wrapper.ownerDocument, "mousemove", w), P(n.wrapper.ownerDocument, "mouseup", T);
      }
      function au(e, t) {
        var i = t.anchor, r = t.head, n = O(e.doc, i.line);
        if (I(i, r) == 0 && i.sticky == r.sticky)
          return t;
        var o = $e(n);
        if (!o)
          return t;
        var l = sr(o, i.ch, i.sticky), a = o[l];
        if (a.from != i.ch && a.to != i.ch)
          return t;
        var s = l + (a.from == i.ch == (a.level != 1) ? 0 : 1);
        if (s == 0 || s == o.length)
          return t;
        var u;
        if (r.line != i.line)
          u = (r.line - i.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var f = sr(o, r.ch, r.sticky), h = f - l || (r.ch - i.ch) * (a.level == 1 ? -1 : 1);
          f == s - 1 || f == s ? u = h < 0 : u = h > 0;
        }
        var p = o[s + (u ? -1 : 0)], d = u == (p.level == 1), v = d ? p.from : p.to, y = d ? "after" : "before";
        return i.ch == v && i.sticky == y ? t : new z(new m(i.line, v, y), r);
      }
      function Gl(e, t, i, r) {
        var n, o;
        if (t.touches)
          n = t.touches[0].clientX, o = t.touches[0].clientY;
        else
          try {
            n = t.clientX, o = t.clientY;
          } catch (p) {
            return !1;
          }
        if (n >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && Se(t);
        var l = e.display, a = l.lineDiv.getBoundingClientRect();
        if (o > a.bottom || !Pe(e, i))
          return Fi(t);
        o -= a.top - l.viewOffset;
        for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
          var u = l.gutters.childNodes[s];
          if (u && u.getBoundingClientRect().right >= n) {
            var f = Lt(e.doc, o), h = e.display.gutterSpecs[s];
            return te(e, i, e, f, h.className, t), Fi(t);
          }
        }
      }
      function En(e, t) {
        return Gl(e, t, "gutterClick", !0);
      }
      function Kl(e, t) {
        rt(e.display, t) || su(e, t) || se(e, t, "contextmenu") || st || e.display.input.onContextMenu(t);
      }
      function su(e, t) {
        return Pe(e, "gutterContextMenu") ? Gl(e, t, "gutterContextMenu", !1) : !1;
      }
      function Xl(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), gr(e);
      }
      var $t = { toString: function() {
        return "CodeMirror.Init";
      } }, ql = {}, Ci = {};
      function uu(e) {
        var t = e.optionHandlers;
        function i(r, n, o, l) {
          e.defaults[r] = n, o && (t[r] = l ? function(a, s, u) {
            u != $t && o(a, s, u);
          } : o);
        }
        e.defineOption = i, e.Init = $t, i("value", "", function(r, n) {
          return r.setValue(n);
        }, !0), i("mode", null, function(r, n) {
          r.doc.modeOption = n, Ln(r);
        }, !0), i("indentUnit", 2, Ln, !0), i("indentWithTabs", !1), i("smartIndent", !0), i("tabSize", 4, function(r) {
          Lr(r), gr(r), Le(r);
        }, !0), i("lineSeparator", null, function(r, n) {
          if (r.doc.lineSep = n, !!n) {
            var o = [], l = r.doc.first;
            r.doc.iter(function(s) {
              for (var u = 0; ; ) {
                var f = s.text.indexOf(n, u);
                if (f == -1)
                  break;
                u = f + n.length, o.push(m(l, f));
              }
              l++;
            });
            for (var a = o.length - 1; a >= 0; a--)
              Qt(r.doc, n, o[a], m(o[a].line, o[a].ch + n.length));
          }
        }), i("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function(r, n, o) {
          r.state.specialChars = new RegExp(n.source + (n.test("	") ? "" : "|	"), "g"), o != $t && r.refresh();
        }), i("specialCharPlaceholder", Ra, function(r) {
          return r.refresh();
        }, !0), i("electricChars", !0), i("inputStyle", bt ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), i("spellcheck", !1, function(r, n) {
          return r.getInputField().spellcheck = n;
        }, !0), i("autocorrect", !1, function(r, n) {
          return r.getInputField().autocorrect = n;
        }, !0), i("autocapitalize", !1, function(r, n) {
          return r.getInputField().autocapitalize = n;
        }, !0), i("rtlMoveVisually", !xt), i("wholeLineUpdateBefore", !0), i("theme", "default", function(r) {
          Xl(r), Sr(r);
        }, !0), i("keyMap", "default", function(r, n, o) {
          var l = bi(n), a = o != $t && bi(o);
          a && a.detach && a.detach(r, l), l.attach && l.attach(r, a || null);
        }), i("extraKeys", null), i("configureMouse", null), i("lineWrapping", !1, hu, !0), i("gutters", [], function(r, n) {
          r.display.gutterSpecs = wn(n, r.options.lineNumbers), Sr(r);
        }, !0), i("fixedGutter", !0, function(r, n) {
          r.display.gutters.style.left = n ? hn(r.display) + "px" : "0", r.refresh();
        }, !0), i("coverGutterNextToScrollbar", !1, function(r) {
          return Xt(r);
        }, !0), i("scrollbarStyle", "native", function(r) {
          Zo(r), Xt(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), i("lineNumbers", !1, function(r, n) {
          r.display.gutterSpecs = wn(r.options.gutters, n), Sr(r);
        }, !0), i("firstLineNumber", 1, Sr, !0), i("lineNumberFormatter", function(r) {
          return r;
        }, Sr, !0), i("showCursorWhenSelecting", !1, yr, !0), i("resetSelectionOnContextMenu", !0), i("lineWiseCopyCut", !0), i("pasteLinesPerSelection", !0), i("selectionsMayTouch", !1), i("readOnly", !1, function(r, n) {
          n == "nocursor" && (Gt(r), r.display.input.blur()), r.display.input.readOnlyChanged(n);
        }), i("screenReaderLabel", null, function(r, n) {
          n = n === "" ? null : n, r.display.input.screenReaderLabelChanged(n);
        }), i("disableInput", !1, function(r, n) {
          n || r.display.input.reset();
        }, !0), i("dragDrop", !0, fu), i("allowDropFileTypes", null), i("cursorBlinkRate", 530), i("cursorScrollMargin", 0), i("cursorHeight", 1, yr, !0), i("singleCursorHeightPerLine", !0, yr, !0), i("workTime", 100), i("workDelay", 100), i("flattenSpans", !0, Lr, !0), i("addModeClass", !1, Lr, !0), i("pollInterval", 100), i("undoDepth", 200, function(r, n) {
          return r.doc.history.undoDepth = n;
        }), i("historyEventDelay", 1250), i("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), i("maxHighlightLength", 1e4, Lr, !0), i("moveInputWithCursor", !0, function(r, n) {
          n || r.display.input.resetPosition();
        }), i("tabindex", null, function(r, n) {
          return r.display.input.getField().tabIndex = n || "";
        }), i("autofocus", null), i("direction", "ltr", function(r, n) {
          return r.doc.setDirection(n);
        }, !0), i("phrases", null);
      }
      function fu(e, t, i) {
        var r = i && i != $t;
        if (!t != !r) {
          var n = e.display.dragFunctions, o = t ? P : We;
          o(e.display.scroller, "dragstart", n.start), o(e.display.scroller, "dragenter", n.enter), o(e.display.scroller, "dragover", n.over), o(e.display.scroller, "dragleave", n.leave), o(e.display.scroller, "drop", n.drop);
        }
      }
      function hu(e) {
        e.options.lineWrapping ? (oe(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (be(e.display.wrapper, "CodeMirror-wrap"), en(e)), cn(e), Le(e), gr(e), setTimeout(function() {
          return Xt(e);
        }, 100);
      }
      function Q(e, t) {
        var i = this;
        if (!(this instanceof Q))
          return new Q(e, t);
        this.options = t = t ? Ct(t) : {}, Ct(ql, t, !1);
        var r = t.value;
        typeof r == "string" ? r = new ke(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
        var n = new Q.inputStyles[t.inputStyle](this), o = this.display = new Ls(e, r, n, t);
        o.wrapper.CodeMirror = this, Xl(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Zo(this), this.state = {
          keyMaps: [],
          // stores maps added by addKeyMap
          overlays: [],
          // highlighting overlays, as added by addOverlay
          modeGen: 0,
          // bumped when mode/overlay changes, used to invalidate highlighting info
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          // used to disable editing during key handlers when in readOnly mode
          pasteIncoming: -1,
          cutIncoming: -1,
          // help recognize paste/cut edits in input.poll
          selectingText: !1,
          draggingText: !1,
          highlight: new ut(),
          // stores highlight worker timeout
          keySeq: null,
          // Unfinished key sequence
          specialChars: null
        }, t.autofocus && !bt && o.input.focus(), E && _ < 11 && setTimeout(function() {
          return i.display.input.reset(!0);
        }, 20), cu(this), Gs(), At(this), this.curOp.forceUpdate = !0, nl(this, r), t.autofocus && !bt || this.hasFocus() ? setTimeout(function() {
          i.hasFocus() && !i.state.focused && vn(i);
        }, 20) : Gt(this);
        for (var l in Ci)
          Ci.hasOwnProperty(l) && Ci[l](this, t[l], $t);
        jo(this), t.finishInit && t.finishInit(this);
        for (var a = 0; a < Fn.length; ++a)
          Fn[a](this);
        Wt(this), G && t.lineWrapping && getComputedStyle(o.lineDiv).textRendering == "optimizelegibility" && (o.lineDiv.style.textRendering = "auto");
      }
      Q.defaults = ql, Q.optionHandlers = Ci;
      function cu(e) {
        var t = e.display;
        P(t.scroller, "mousedown", fe(e, Ul)), E && _ < 11 ? P(t.scroller, "dblclick", fe(e, function(s) {
          if (!se(e, s)) {
            var u = Mt(e, s);
            if (!(!u || En(e, s) || rt(e.display, s))) {
              Se(s);
              var f = e.findWordAt(u);
              pi(e.doc, f.anchor, f.head);
            }
          }
        })) : P(t.scroller, "dblclick", function(s) {
          return se(e, s) || Se(s);
        }), P(t.scroller, "contextmenu", function(s) {
          return Kl(e, s);
        }), P(t.input.getField(), "contextmenu", function(s) {
          t.scroller.contains(s.target) || Kl(e, s);
        });
        var i, r = { end: 0 };
        function n() {
          t.activeTouch && (i = setTimeout(function() {
            return t.activeTouch = null;
          }, 1e3), r = t.activeTouch, r.end = +/* @__PURE__ */ new Date());
        }
        function o(s) {
          if (s.touches.length != 1)
            return !1;
          var u = s.touches[0];
          return u.radiusX <= 1 && u.radiusY <= 1;
        }
        function l(s, u) {
          if (u.left == null)
            return !0;
          var f = u.left - s.left, h = u.top - s.top;
          return f * f + h * h > 20 * 20;
        }
        P(t.scroller, "touchstart", function(s) {
          if (!se(e, s) && !o(s) && !En(e, s)) {
            t.input.ensurePolled(), clearTimeout(i);
            var u = +/* @__PURE__ */ new Date();
            t.activeTouch = {
              start: u,
              moved: !1,
              prev: u - r.end <= 300 ? r : null
            }, s.touches.length == 1 && (t.activeTouch.left = s.touches[0].pageX, t.activeTouch.top = s.touches[0].pageY);
          }
        }), P(t.scroller, "touchmove", function() {
          t.activeTouch && (t.activeTouch.moved = !0);
        }), P(t.scroller, "touchend", function(s) {
          var u = t.activeTouch;
          if (u && !rt(t, s) && u.left != null && !u.moved && /* @__PURE__ */ new Date() - u.start < 300) {
            var f = e.coordsChar(t.activeTouch, "page"), h;
            !u.prev || l(u, u.prev) ? h = new z(f, f) : !u.prev.prev || l(u, u.prev.prev) ? h = e.findWordAt(f) : h = new z(m(f.line, 0), R(e.doc, m(f.line + 1, 0))), e.setSelection(h.anchor, h.head), e.focus(), Se(s);
          }
          n();
        }), P(t.scroller, "touchcancel", n), P(t.scroller, "scroll", function() {
          t.scroller.clientHeight && (br(e, t.scroller.scrollTop), Nt(e, t.scroller.scrollLeft, !0), te(e, "scroll", e));
        }), P(t.scroller, "mousewheel", function(s) {
          return el(e, s);
        }), P(t.scroller, "DOMMouseScroll", function(s) {
          return el(e, s);
        }), P(t.wrapper, "scroll", function() {
          return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
        }), t.dragFunctions = {
          enter: function(s) {
            se(e, s) || ur(s);
          },
          over: function(s) {
            se(e, s) || (_s(e, s), ur(s));
          },
          start: function(s) {
            return Us(e, s);
          },
          drop: fe(e, zs),
          leave: function(s) {
            se(e, s) || Dl(e);
          }
        };
        var a = t.input.getField();
        P(a, "keyup", function(s) {
          return Bl.call(e, s);
        }), P(a, "keydown", fe(e, Rl)), P(a, "keypress", fe(e, zl)), P(a, "focus", function(s) {
          return vn(e, s);
        }), P(a, "blur", function(s) {
          return Gt(e, s);
        });
      }
      var Fn = [];
      Q.defineInitHook = function(e) {
        return Fn.push(e);
      };
      function Ir(e, t, i, r) {
        var n = e.doc, o;
        i == null && (i = "add"), i == "smart" && (n.mode.indent ? o = hr(e, t).state : i = "prev");
        var l = e.options.tabSize, a = O(n, t), s = Fe(a.text, null, l);
        a.stateAfter && (a.stateAfter = null);
        var u = a.text.match(/^\s*/)[0], f;
        if (!r && !/\S/.test(a.text))
          f = 0, i = "not";
        else if (i == "smart" && (f = n.mode.indent(o, a.text.slice(u.length), a.text), f == _r || f > 150)) {
          if (!r)
            return;
          i = "prev";
        }
        i == "prev" ? t > n.first ? f = Fe(O(n, t - 1).text, null, l) : f = 0 : i == "add" ? f = s + e.options.indentUnit : i == "subtract" ? f = s - e.options.indentUnit : typeof i == "number" && (f = s + i), f = Math.max(0, f);
        var h = "", p = 0;
        if (e.options.indentWithTabs)
          for (var d = Math.floor(f / l); d; --d)
            p += l, h += "	";
        if (p < f && (h += Ai(f - p)), h != u)
          return Qt(n, h, m(t, 0), m(t, u.length), "+input"), a.stateAfter = null, !0;
        for (var v = 0; v < n.sel.ranges.length; v++) {
          var y = n.sel.ranges[v];
          if (y.head.line == t && y.head.ch < u.length) {
            var x = m(t, u.length);
            Dn(n, v, new z(x, x));
            break;
          }
        }
      }
      var Be = null;
      function wi(e) {
        Be = e;
      }
      function Pn(e, t, i, r, n) {
        var o = e.doc;
        e.display.shift = !1, r || (r = o.sel);
        var l = +/* @__PURE__ */ new Date() - 200, a = n == "paste" || e.state.pasteIncoming > l, s = Bi(t), u = null;
        if (a && r.ranges.length > 1)
          if (Be && Be.text.join(`
`) == t) {
            if (r.ranges.length % Be.text.length == 0) {
              u = [];
              for (var f = 0; f < Be.text.length; f++)
                u.push(o.splitLines(Be.text[f]));
            }
          } else
            s.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = Kr(s, function(w) {
              return [w];
            }));
        for (var h = e.curOp.updateInput, p = r.ranges.length - 1; p >= 0; p--) {
          var d = r.ranges[p], v = d.from(), y = d.to();
          d.empty() && (i && i > 0 ? v = m(v.line, v.ch - i) : e.state.overwrite && !a ? y = m(y.line, Math.min(O(o, y.line).text.length, y.ch + K(s).length)) : a && Be && Be.lineWise && Be.text.join(`
`) == s.join(`
`) && (v = y = m(v.line, 0)));
          var x = {
            from: v,
            to: y,
            text: u ? u[p % u.length] : s,
            origin: n || (a ? "paste" : e.state.cutIncoming > l ? "cut" : "+input")
          };
          Zt(e.doc, x), ue(e, "inputRead", e, x);
        }
        t && !a && Zl(e, t), Kt(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = h), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function Yl(e, t) {
        var i = e.clipboardData && e.clipboardData.getData("Text");
        if (i)
          return e.preventDefault(), !t.isReadOnly() && !t.options.disableInput && Ne(t, function() {
            return Pn(t, i, 0, null, "paste");
          }), !0;
      }
      function Zl(e, t) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var i = e.doc.sel, r = i.ranges.length - 1; r >= 0; r--) {
            var n = i.ranges[r];
            if (!(n.head.ch > 100 || r && i.ranges[r - 1].head.line == n.head.line)) {
              var o = e.getModeAt(n.head), l = !1;
              if (o.electricChars) {
                for (var a = 0; a < o.electricChars.length; a++)
                  if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                    l = Ir(e, n.head.line, "smart");
                    break;
                  }
              } else
                o.electricInput && o.electricInput.test(O(e.doc, n.head.line).text.slice(0, n.head.ch)) && (l = Ir(e, n.head.line, "smart"));
              l && ue(e, "electricInput", e, n.head.line);
            }
          }
      }
      function Ql(e) {
        for (var t = [], i = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var n = e.doc.sel.ranges[r].head.line, o = { anchor: m(n, 0), head: m(n + 1, 0) };
          i.push(o), t.push(e.getRange(o.anchor, o.head));
        }
        return { text: t, ranges: i };
      }
      function Jl(e, t, i, r) {
        e.setAttribute("autocorrect", i ? "" : "off"), e.setAttribute("autocapitalize", r ? "" : "off"), e.setAttribute("spellcheck", !!t);
      }
      function jl() {
        var e = W("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), t = W("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return G ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), Je && (e.style.border = "1px solid black"), Jl(e), t;
      }
      function du(e) {
        var t = e.optionHandlers, i = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            window.focus(), this.display.input.focus();
          },
          setOption: function(r, n) {
            var o = this.options, l = o[r];
            o[r] == n && r != "mode" || (o[r] = n, t.hasOwnProperty(r) && fe(this, t[r])(this, n, l), te(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, n) {
            this.state.keyMaps[n ? "push" : "unshift"](bi(r));
          },
          removeKeyMap: function(r) {
            for (var n = this.state.keyMaps, o = 0; o < n.length; ++o)
              if (n[o] == r || n[o].name == r)
                return n.splice(o, 1), !0;
          },
          addOverlay: Ce(function(r, n) {
            var o = r.token ? r : e.getMode(this.options, r);
            if (o.startState)
              throw new Error("Overlays may not be stateful.");
            aa(
              this.state.overlays,
              {
                mode: o,
                modeSpec: r,
                opaque: n && n.opaque,
                priority: n && n.priority || 0
              },
              function(l) {
                return l.priority;
              }
            ), this.state.modeGen++, Le(this);
          }),
          removeOverlay: Ce(function(r) {
            for (var n = this.state.overlays, o = 0; o < n.length; ++o) {
              var l = n[o].modeSpec;
              if (l == r || typeof r == "string" && l.name == r) {
                n.splice(o, 1), this.state.modeGen++, Le(this);
                return;
              }
            }
          }),
          indentLine: Ce(function(r, n, o) {
            typeof n != "string" && typeof n != "number" && (n == null ? n = this.options.smartIndent ? "smart" : "prev" : n = n ? "add" : "subtract"), fr(this.doc, r) && Ir(this, r, n, o);
          }),
          indentSelection: Ce(function(r) {
            for (var n = this.doc.sel.ranges, o = -1, l = 0; l < n.length; l++) {
              var a = n[l];
              if (a.empty())
                a.head.line > o && (Ir(this, a.head.line, r, !0), o = a.head.line, l == this.doc.sel.primIndex && Kt(this));
              else {
                var s = a.from(), u = a.to(), f = Math.max(o, s.line);
                o = Math.min(this.lastLine(), u.line - (u.ch ? 0 : 1)) + 1;
                for (var h = f; h < o; ++h)
                  Ir(this, h, r);
                var p = this.doc.sel.ranges;
                s.ch == 0 && n.length == p.length && p[l].from().ch > 0 && Dn(this.doc, l, new z(s, p[l].to()), _e);
              }
            }
          }),
          // Fetch the parser token for a given character. Useful for hacks
          // that want to inspect the mode state (say, for completion).
          getTokenAt: function(r, n) {
            return no(this, r, n);
          },
          getLineTokens: function(r, n) {
            return no(this, m(r), n, !0);
          },
          getTokenTypeAt: function(r) {
            r = R(this.doc, r);
            var n = to(this, O(this.doc, r.line)), o = 0, l = (n.length - 1) / 2, a = r.ch, s;
            if (a == 0)
              s = n[2];
            else
              for (; ; ) {
                var u = o + l >> 1;
                if ((u ? n[u * 2 - 1] : 0) >= a)
                  l = u;
                else if (n[u * 2 + 1] < a)
                  o = u + 1;
                else {
                  s = n[u * 2 + 2];
                  break;
                }
              }
            var f = s ? s.indexOf("overlay ") : -1;
            return f < 0 ? s : f == 0 ? null : s.slice(0, f - 1);
          },
          getModeAt: function(r) {
            var n = this.doc.mode;
            return n.innerMode ? e.innerMode(n, this.getTokenAt(r).state).mode : n;
          },
          getHelper: function(r, n) {
            return this.getHelpers(r, n)[0];
          },
          getHelpers: function(r, n) {
            var o = [];
            if (!i.hasOwnProperty(n))
              return o;
            var l = i[n], a = this.getModeAt(r);
            if (typeof a[n] == "string")
              l[a[n]] && o.push(l[a[n]]);
            else if (a[n])
              for (var s = 0; s < a[n].length; s++) {
                var u = l[a[n][s]];
                u && o.push(u);
              }
            else
              a.helperType && l[a.helperType] ? o.push(l[a.helperType]) : l[a.name] && o.push(l[a.name]);
            for (var f = 0; f < l._global.length; f++) {
              var h = l._global[f];
              h.pred(a, this) && ve(o, h.val) == -1 && o.push(h.val);
            }
            return o;
          },
          getStateAfter: function(r, n) {
            var o = this.doc;
            return r = Vn(o, r == null ? o.first + o.size - 1 : r), hr(this, r + 1, n).state;
          },
          cursorCoords: function(r, n) {
            var o, l = this.doc.sel.primary();
            return r == null ? o = l.head : typeof r == "object" ? o = R(this.doc, r) : o = r ? l.from() : l.to(), Ie(this, o, n || "page");
          },
          charCoords: function(r, n) {
            return ni(this, R(this.doc, r), n || "page");
          },
          coordsChar: function(r, n) {
            return r = Eo(this, r, n || "page"), sn(this, r.left, r.top);
          },
          lineAtHeight: function(r, n) {
            return r = Eo(this, { top: r, left: 0 }, n || "page").top, Lt(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, n, o) {
            var l = !1, a;
            if (typeof r == "number") {
              var s = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > s && (r = s, l = !0), a = O(this.doc, r);
            } else
              a = r;
            return ii(this, a, { top: 0, left: 0 }, n || "page", o || l).top + (l ? this.doc.height - tt(a) : 0);
          },
          defaultTextHeight: function() {
            return Ut(this.display);
          },
          defaultCharWidth: function() {
            return _t(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, n, o, l, a) {
            var s = this.display;
            r = Ie(this, R(this.doc, r));
            var u = r.bottom, f = r.left;
            if (n.style.position = "absolute", n.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(n), s.sizer.appendChild(n), l == "over")
              u = r.top;
            else if (l == "above" || l == "near") {
              var h = Math.max(s.wrapper.clientHeight, this.doc.height), p = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
              (l == "above" || r.bottom + n.offsetHeight > h) && r.top > n.offsetHeight ? u = r.top - n.offsetHeight : r.bottom + n.offsetHeight <= h && (u = r.bottom), f + n.offsetWidth > p && (f = p - n.offsetWidth);
            }
            n.style.top = u + "px", n.style.left = n.style.right = "", a == "right" ? (f = s.sizer.clientWidth - n.offsetWidth, n.style.right = "0px") : (a == "left" ? f = 0 : a == "middle" && (f = (s.sizer.clientWidth - n.offsetWidth) / 2), n.style.left = f + "px"), o && fs(this, { left: f, top: u, right: f + n.offsetWidth, bottom: u + n.offsetHeight });
          },
          triggerOnKeyDown: Ce(Rl),
          triggerOnKeyPress: Ce(zl),
          triggerOnKeyUp: Bl,
          triggerOnMouseDown: Ce(Ul),
          execCommand: function(r) {
            if (Hr.hasOwnProperty(r))
              return Hr[r].call(null, this);
          },
          triggerElectric: Ce(function(r) {
            Zl(this, r);
          }),
          findPosH: function(r, n, o, l) {
            var a = 1;
            n < 0 && (a = -1, n = -n);
            for (var s = R(this.doc, r), u = 0; u < n && (s = In(this.doc, s, a, o, l), !s.hitSide); ++u)
              ;
            return s;
          },
          moveH: Ce(function(r, n) {
            var o = this;
            this.extendSelectionsBy(function(l) {
              return o.display.shift || o.doc.extend || l.empty() ? In(o.doc, l.head, r, n, o.options.rtlMoveVisually) : r < 0 ? l.from() : l.to();
            }, or);
          }),
          deleteH: Ce(function(r, n) {
            var o = this.doc.sel, l = this.doc;
            o.somethingSelected() ? l.replaceSelection("", null, "+delete") : Vt(this, function(a) {
              var s = In(l, a.head, r, n, !1);
              return r < 0 ? { from: s, to: a.head } : { from: a.head, to: s };
            });
          }),
          findPosV: function(r, n, o, l) {
            var a = 1, s = l;
            n < 0 && (a = -1, n = -n);
            for (var u = R(this.doc, r), f = 0; f < n; ++f) {
              var h = Ie(this, u, "div");
              if (s == null ? s = h.left : h.left = s, u = Vl(this, h, a, o), u.hitSide)
                break;
            }
            return u;
          },
          moveV: Ce(function(r, n) {
            var o = this, l = this.doc, a = [], s = !this.display.shift && !l.extend && l.sel.somethingSelected();
            if (l.extendSelectionsBy(function(f) {
              if (s)
                return r < 0 ? f.from() : f.to();
              var h = Ie(o, f.head, "div");
              f.goalColumn != null && (h.left = f.goalColumn), a.push(h.left);
              var p = Vl(o, h, r, n);
              return n == "page" && f == l.sel.primary() && yn(o, ni(o, p, "div").top - h.top), p;
            }, or), a.length)
              for (var u = 0; u < l.sel.ranges.length; u++)
                l.sel.ranges[u].goalColumn = a[u];
          }),
          // Find the word at the given position (as returned by coordsChar).
          findWordAt: function(r) {
            var n = this.doc, o = O(n, r.line).text, l = r.ch, a = r.ch;
            if (o) {
              var s = this.getHelper(r, "wordChars");
              (r.sticky == "before" || a == o.length) && l ? --l : ++a;
              for (var u = o.charAt(l), f = Xr(u, s) ? function(h) {
                return Xr(h, s);
              } : /\s/.test(u) ? function(h) {
                return /\s/.test(h);
              } : function(h) {
                return !/\s/.test(h) && !Xr(h);
              }; l > 0 && f(o.charAt(l - 1)); )
                --l;
              for (; a < o.length && f(o.charAt(a)); )
                ++a;
            }
            return new z(m(r.line, l), m(r.line, a));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? oe(this.display.cursorDiv, "CodeMirror-overwrite") : be(this.display.cursorDiv, "CodeMirror-overwrite"), te(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == F();
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: Ce(function(r, n) {
            mr(this, r, n);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - qe(this) - this.display.barHeight,
              width: r.scrollWidth - qe(this) - this.display.barWidth,
              clientHeight: nn(this),
              clientWidth: kt(this)
            };
          },
          scrollIntoView: Ce(function(r, n) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, n == null && (n = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: m(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = n || 0, r.from.line != null ? hs(this, r) : Ko(this, r.from, r.to, r.margin);
          }),
          setSize: Ce(function(r, n) {
            var o = this, l = function(s) {
              return typeof s == "number" || /^\d+$/.test(String(s)) ? s + "px" : s;
            };
            r != null && (this.display.wrapper.style.width = l(r)), n != null && (this.display.wrapper.style.height = l(n)), this.options.lineWrapping && Ao(this);
            var a = this.display.viewFrom;
            this.doc.iter(a, this.display.viewTo, function(s) {
              if (s.widgets) {
                for (var u = 0; u < s.widgets.length; u++)
                  if (s.widgets[u].noHScroll) {
                    ht(o, a, "widget");
                    break;
                  }
              }
              ++a;
            }), this.curOp.forceUpdate = !0, te(this, "refresh", this);
          }),
          operation: function(r) {
            return Ne(this, r);
          },
          startOperation: function() {
            return At(this);
          },
          endOperation: function() {
            return Wt(this);
          },
          refresh: Ce(function() {
            var r = this.display.cachedTextHeight;
            Le(this), this.curOp.forceUpdate = !0, gr(this), mr(this, this.doc.scrollLeft, this.doc.scrollTop), xn(this.display), (r == null || Math.abs(r - Ut(this.display)) > 0.5 || this.options.lineWrapping) && cn(this), te(this, "refresh", this);
          }),
          swapDoc: Ce(function(r) {
            var n = this.doc;
            return n.cm = null, this.state.selectingText && this.state.selectingText(), nl(this, r), gr(this), this.display.input.reset(), mr(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, ue(this, "swapDoc", this, n), n;
          }),
          phrase: function(r) {
            var n = this.options.phrases;
            return n && Object.prototype.hasOwnProperty.call(n, r) ? n[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, Ft(e), e.registerHelper = function(r, n, o) {
          i.hasOwnProperty(r) || (i[r] = e[r] = { _global: [] }), i[r][n] = o;
        }, e.registerGlobalHelper = function(r, n, o, l) {
          e.registerHelper(r, n, l), i[r]._global.push({ pred: o, val: l });
        };
      }
      function In(e, t, i, r, n) {
        var o = t, l = i, a = O(e, t.line), s = n && e.direction == "rtl" ? -i : i;
        function u() {
          var T = t.line + s;
          return T < e.first || T >= e.first + e.size ? !1 : (t = new m(T, t.ch, t.sticky), a = O(e, T));
        }
        function f(T) {
          var S;
          if (r == "codepoint") {
            var N = a.text.charCodeAt(t.ch + (i > 0 ? 0 : -1));
            if (isNaN(N))
              S = null;
            else {
              var H = i > 0 ? N >= 55296 && N < 56320 : N >= 56320 && N < 57343;
              S = new m(t.line, Math.max(0, Math.min(a.text.length, t.ch + i * (H ? 2 : 1))), -i);
            }
          } else
            n ? S = Zs(e.cm, a, t, i) : S = On(a, t, i);
          if (S == null)
            if (!T && u())
              t = An(n, e.cm, a, t.line, s);
            else
              return !1;
          else
            t = S;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          f();
        else if (r == "column")
          f(!0);
        else if (r == "word" || r == "group")
          for (var h = null, p = r == "group", d = e.cm && e.cm.getHelper(t, "wordChars"), v = !0; !(i < 0 && !f(!v)); v = !1) {
            var y = a.text.charAt(t.ch) || `
`, x = Xr(y, d) ? "w" : p && y == `
` ? "n" : !p || /\s/.test(y) ? null : "p";
            if (p && !v && !x && (x = "s"), h && h != x) {
              i < 0 && (i = 1, f(), t.sticky = "after");
              break;
            }
            if (x && (h = x), i > 0 && !f(!v))
              break;
          }
        var w = gi(e, t, o, l, !0);
        return qi(o, w) && (w.hitSide = !0), w;
      }
      function Vl(e, t, i, r) {
        var n = e.doc, o = t.left, l;
        if (r == "page") {
          var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight), s = Math.max(a - 0.5 * Ut(e.display), 3);
          l = (i > 0 ? t.bottom : t.top) + i * s;
        } else
          r == "line" && (l = i > 0 ? t.bottom + 3 : t.top - 3);
        for (var u; u = sn(e, o, l), !!u.outside; ) {
          if (i < 0 ? l <= 0 : l >= n.height) {
            u.hitSide = !0;
            break;
          }
          l += i * 5;
        }
        return u;
      }
      var q = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new ut(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      q.prototype.init = function(e) {
        var t = this, i = this, r = i.cm, n = i.div = e.lineDiv;
        n.contentEditable = !0, Jl(n, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function o(a) {
          for (var s = a.target; s; s = s.parentNode) {
            if (s == n)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(s.className))
              break;
          }
          return !1;
        }
        P(n, "paste", function(a) {
          !o(a) || se(r, a) || Yl(a, r) || _ <= 11 && setTimeout(fe(r, function() {
            return t.updateFromDOM();
          }), 20);
        }), P(n, "compositionstart", function(a) {
          t.composing = { data: a.data, done: !1 };
        }), P(n, "compositionupdate", function(a) {
          t.composing || (t.composing = { data: a.data, done: !1 });
        }), P(n, "compositionend", function(a) {
          t.composing && (a.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0);
        }), P(n, "touchstart", function() {
          return i.forceCompositionEnd();
        }), P(n, "input", function() {
          t.composing || t.readFromDOMSoon();
        });
        function l(a) {
          if (!(!o(a) || se(r, a))) {
            if (r.somethingSelected())
              wi({ lineWise: !1, text: r.getSelections() }), a.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var s = Ql(r);
              wi({ lineWise: !0, text: s.text }), a.type == "cut" && r.operation(function() {
                r.setSelections(s.ranges, 0, _e), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (a.clipboardData) {
              a.clipboardData.clearData();
              var u = Be.text.join(`
`);
              if (a.clipboardData.setData("Text", u), a.clipboardData.getData("Text") == u) {
                a.preventDefault();
                return;
              }
            }
            var f = jl(), h = f.firstChild;
            r.display.lineSpace.insertBefore(f, r.display.lineSpace.firstChild), h.value = Be.text.join(`
`);
            var p = F();
            nr(h), setTimeout(function() {
              r.display.lineSpace.removeChild(f), p.focus(), p == n && i.showPrimarySelection();
            }, 50);
          }
        }
        P(n, "copy", l), P(n, "cut", l);
      }, q.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, q.prototype.prepareSelection = function() {
        var e = zo(this.cm, !1);
        return e.focus = F() == this.div, e;
      }, q.prototype.showSelection = function(e, t) {
        !e || !this.cm.display.view.length || ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, q.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, q.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), t = this.cm, i = t.doc.sel.primary(), r = i.from(), n = i.to();
        if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || n.line < t.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var o = Si(t, e.anchorNode, e.anchorOffset), l = Si(t, e.focusNode, e.focusOffset);
        if (!(o && !o.bad && l && !l.bad && I(Zr(o, l), r) == 0 && I(Yr(o, l), n) == 0)) {
          var a = t.display.view, s = r.line >= t.display.viewFrom && $l(t, r) || { node: a[0].measure.map[2], offset: 0 }, u = n.line < t.display.viewTo && $l(t, n);
          if (!u) {
            var f = a[a.length - 1].measure, h = f.maps ? f.maps[f.maps.length - 1] : f.map;
            u = { node: h[h.length - 1], offset: h[h.length - 2] - h[h.length - 3] };
          }
          if (!s || !u) {
            e.removeAllRanges();
            return;
          }
          var p = e.rangeCount && e.getRangeAt(0), d;
          try {
            d = D(s.node, s.offset, u.offset, u.node);
          } catch (v) {
          }
          d && (!M && t.state.focused ? (e.collapse(s.node, s.offset), d.collapsed || (e.removeAllRanges(), e.addRange(d))) : (e.removeAllRanges(), e.addRange(d)), p && e.anchorNode == null ? e.addRange(p) : M && this.startGracePeriod()), this.rememberSelection();
        }
      }, q.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, q.prototype.showMultipleSelections = function(e) {
        xe(this.cm.display.cursorDiv, e.cursors), xe(this.cm.display.selectionDiv, e.selection);
      }, q.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, q.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return C(this.div, t);
      }, q.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || F() != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, q.prototype.blur = function() {
        this.div.blur();
      }, q.prototype.getField = function() {
        return this.div;
      }, q.prototype.supportsTouch = function() {
        return !0;
      }, q.prototype.receivedFocus = function() {
        var e = this, t = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : Ne(this.cm, function() {
          return t.cm.curOp.selectionChanged = !0;
        });
        function i() {
          t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, i));
        }
        this.polling.set(this.cm.options.pollInterval, i);
      }, q.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, q.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), t = this.cm;
          if (Ae && V && this.cm.display.gutterSpecs.length && pu(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var i = Si(t, e.anchorNode, e.anchorOffset), r = Si(t, e.focusNode, e.focusOffset);
            i && r && Ne(t, function() {
              ge(t.doc, dt(i, r), _e), (i.bad || r.bad) && (t.curOp.selectionChanged = !0);
            });
          }
        }
      }, q.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, t = e.display, i = e.doc.sel.primary(), r = i.from(), n = i.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = m(r.line - 1, O(e.doc, r.line - 1).length)), n.ch == O(e.doc, n.line).text.length && n.line < e.lastLine() && (n = m(n.line + 1, 0)), r.line < t.viewFrom || n.line > t.viewTo - 1)
          return !1;
        var o, l, a;
        r.line == t.viewFrom || (o = Dt(e, r.line)) == 0 ? (l = X(t.view[0].line), a = t.view[0].node) : (l = X(t.view[o].line), a = t.view[o - 1].node.nextSibling);
        var s = Dt(e, n.line), u, f;
        if (s == t.view.length - 1 ? (u = t.viewTo - 1, f = t.lineDiv.lastChild) : (u = X(t.view[s + 1].line) - 1, f = t.view[s + 1].node.previousSibling), !a)
          return !1;
        for (var h = e.doc.splitLines(vu(e, a, f, l, u)), p = St(e.doc, m(l, 0), m(u, O(e.doc, u).text.length)); h.length > 1 && p.length > 1; )
          if (K(h) == K(p))
            h.pop(), p.pop(), u--;
          else if (h[0] == p[0])
            h.shift(), p.shift(), l++;
          else
            break;
        for (var d = 0, v = 0, y = h[0], x = p[0], w = Math.min(y.length, x.length); d < w && y.charCodeAt(d) == x.charCodeAt(d); )
          ++d;
        for (var T = K(h), S = K(p), N = Math.min(
          T.length - (h.length == 1 ? d : 0),
          S.length - (p.length == 1 ? d : 0)
        ); v < N && T.charCodeAt(T.length - v - 1) == S.charCodeAt(S.length - v - 1); )
          ++v;
        if (h.length == 1 && p.length == 1 && l == r.line)
          for (; d && d > r.ch && T.charCodeAt(T.length - v - 1) == S.charCodeAt(S.length - v - 1); )
            d--, v++;
        h[h.length - 1] = T.slice(0, T.length - v).replace(/^\u200b+/, ""), h[0] = h[0].slice(d).replace(/\u200b+$/, "");
        var H = m(l, d), A = m(u, p.length ? K(p).length - v : 0);
        if (h.length > 1 || h[0] || I(H, A))
          return Qt(e.doc, h, H, A, "+input"), !0;
      }, q.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, q.prototype.reset = function() {
        this.forceCompositionEnd();
      }, q.prototype.forceCompositionEnd = function() {
        this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, q.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, q.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && Ne(this.cm, function() {
          return Le(e.cm);
        });
      }, q.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, q.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || fe(this.cm, Pn)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, q.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, q.prototype.onContextMenu = function() {
      }, q.prototype.resetPosition = function() {
      }, q.prototype.needsContentAttribute = !0;
      function $l(e, t) {
        var i = on(e, t.line);
        if (!i || i.hidden)
          return null;
        var r = O(e.doc, t.line), n = To(i, r, t.line), o = $e(r, e.doc.direction), l = "left";
        if (o) {
          var a = sr(o, t.ch);
          l = a % 2 ? "right" : "left";
        }
        var s = No(n.map, t.ch, l);
        return s.offset = s.collapse == "right" ? s.end : s.start, s;
      }
      function pu(e) {
        for (var t = e; t; t = t.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(t.className))
            return !0;
        return !1;
      }
      function er(e, t) {
        return t && (e.bad = !0), e;
      }
      function vu(e, t, i, r, n) {
        var o = "", l = !1, a = e.doc.lineSeparator(), s = !1;
        function u(d) {
          return function(v) {
            return v.id == d;
          };
        }
        function f() {
          l && (o += a, s && (o += a), l = s = !1);
        }
        function h(d) {
          d && (f(), o += d);
        }
        function p(d) {
          if (d.nodeType == 1) {
            var v = d.getAttribute("cm-text");
            if (v) {
              h(v);
              return;
            }
            var y = d.getAttribute("cm-marker"), x;
            if (y) {
              var w = e.findMarks(m(r, 0), m(n + 1, 0), u(+y));
              w.length && (x = w[0].find(0)) && h(St(e.doc, x.from, x.to).join(a));
              return;
            }
            if (d.getAttribute("contenteditable") == "false")
              return;
            var T = /^(pre|div|p|li|table|br)$/i.test(d.nodeName);
            if (!/^br$/i.test(d.nodeName) && d.textContent.length == 0)
              return;
            T && f();
            for (var S = 0; S < d.childNodes.length; S++)
              p(d.childNodes[S]);
            /^(pre|p)$/i.test(d.nodeName) && (s = !0), T && (l = !0);
          } else
            d.nodeType == 3 && h(d.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; p(t), t != i; )
          t = t.nextSibling, s = !1;
        return o;
      }
      function Si(e, t, i) {
        var r;
        if (t == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[i], !r)
            return er(e.clipPos(m(e.display.viewTo - 1)), !0);
          t = null, i = 0;
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var n = 0; n < e.display.view.length; n++) {
          var o = e.display.view[n];
          if (o.node == r)
            return gu(o, t, i);
        }
      }
      function gu(e, t, i) {
        var r = e.text.firstChild, n = !1;
        if (!t || !C(r, t))
          return er(m(X(e.line), 0), !0);
        if (t == r && (n = !0, t = r.childNodes[i], i = 0, !t)) {
          var o = e.rest ? K(e.rest) : e.line;
          return er(m(X(o), o.text.length), n);
        }
        var l = t.nodeType == 3 ? t : null, a = t;
        for (!l && t.childNodes.length == 1 && t.firstChild.nodeType == 3 && (l = t.firstChild, i && (i = l.nodeValue.length)); a.parentNode != r; )
          a = a.parentNode;
        var s = e.measure, u = s.maps;
        function f(x, w, T) {
          for (var S = -1; S < (u ? u.length : 0); S++)
            for (var N = S < 0 ? s.map : u[S], H = 0; H < N.length; H += 3) {
              var A = N[H + 2];
              if (A == x || A == w) {
                var B = X(S < 0 ? e.line : e.rest[S]), Z = N[H] + T;
                return (T < 0 || A != x) && (Z = N[H + (T ? 1 : 0)]), m(B, Z);
              }
            }
        }
        var h = f(l, a, i);
        if (h)
          return er(h, n);
        for (var p = a.nextSibling, d = l ? l.nodeValue.length - i : 0; p; p = p.nextSibling) {
          if (h = f(p, p.firstChild, 0), h)
            return er(m(h.line, h.ch - d), n);
          d += p.textContent.length;
        }
        for (var v = a.previousSibling, y = i; v; v = v.previousSibling) {
          if (h = f(v, v.firstChild, -1), h)
            return er(m(h.line, h.ch + y), n);
          y += v.textContent.length;
        }
      }
      var ee = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new ut(), this.hasSelection = !1, this.composing = null;
      };
      ee.prototype.init = function(e) {
        var t = this, i = this, r = this.cm;
        this.createField(e);
        var n = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), Je && (n.style.width = "0px"), P(n, "input", function() {
          E && _ >= 9 && t.hasSelection && (t.hasSelection = null), i.poll();
        }), P(n, "paste", function(l) {
          se(r, l) || Yl(l, r) || (r.state.pasteIncoming = +/* @__PURE__ */ new Date(), i.fastPoll());
        });
        function o(l) {
          if (!se(r, l)) {
            if (r.somethingSelected())
              wi({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var a = Ql(r);
              wi({ lineWise: !0, text: a.text }), l.type == "cut" ? r.setSelections(a.ranges, null, _e) : (i.prevInput = "", n.value = a.text.join(`
`), nr(n));
            } else
              return;
            l.type == "cut" && (r.state.cutIncoming = +/* @__PURE__ */ new Date());
          }
        }
        P(n, "cut", o), P(n, "copy", o), P(e.scroller, "paste", function(l) {
          if (!(rt(e, l) || se(r, l))) {
            if (!n.dispatchEvent) {
              r.state.pasteIncoming = +/* @__PURE__ */ new Date(), i.focus();
              return;
            }
            var a = new Event("paste");
            a.clipboardData = l.clipboardData, n.dispatchEvent(a);
          }
        }), P(e.lineSpace, "selectstart", function(l) {
          rt(e, l) || Se(l);
        }), P(n, "compositionstart", function() {
          var l = r.getCursor("from");
          i.composing && i.composing.range.clear(), i.composing = {
            start: l,
            range: r.markText(l, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), P(n, "compositionend", function() {
          i.composing && (i.poll(), i.composing.range.clear(), i.composing = null);
        });
      }, ee.prototype.createField = function(e) {
        this.wrapper = jl(), this.textarea = this.wrapper.firstChild;
      }, ee.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, ee.prototype.prepareSelection = function() {
        var e = this.cm, t = e.display, i = e.doc, r = zo(e);
        if (e.options.moveInputWithCursor) {
          var n = Ie(e, i.sel.primary().head, "div"), o = t.wrapper.getBoundingClientRect(), l = t.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            t.wrapper.clientHeight - 10,
            n.top + l.top - o.top
          )), r.teLeft = Math.max(0, Math.min(
            t.wrapper.clientWidth - 10,
            n.left + l.left - o.left
          ));
        }
        return r;
      }, ee.prototype.showSelection = function(e) {
        var t = this.cm, i = t.display;
        xe(i.cursorDiv, e.cursors), xe(i.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, ee.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing)) {
          var t = this.cm;
          if (t.somethingSelected()) {
            this.prevInput = "";
            var i = t.getSelection();
            this.textarea.value = i, t.state.focused && nr(this.textarea), E && _ >= 9 && (this.hasSelection = i);
          } else
            e || (this.prevInput = this.textarea.value = "", E && _ >= 9 && (this.hasSelection = null));
        }
      }, ee.prototype.getField = function() {
        return this.textarea;
      }, ee.prototype.supportsTouch = function() {
        return !1;
      }, ee.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!bt || F() != this.textarea))
          try {
            this.textarea.focus();
          } catch (e) {
          }
      }, ee.prototype.blur = function() {
        this.textarea.blur();
      }, ee.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, ee.prototype.receivedFocus = function() {
        this.slowPoll();
      }, ee.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, ee.prototype.fastPoll = function() {
        var e = !1, t = this;
        t.pollingFast = !0;
        function i() {
          var r = t.poll();
          !r && !e ? (e = !0, t.polling.set(60, i)) : (t.pollingFast = !1, t.slowPoll());
        }
        t.polling.set(20, i);
      }, ee.prototype.poll = function() {
        var e = this, t = this.cm, i = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || !t.state.focused || va(i) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
          return !1;
        var n = i.value;
        if (n == r && !t.somethingSelected())
          return !1;
        if (E && _ >= 9 && this.hasSelection === n || me && /[\uf700-\uf7ff]/.test(n))
          return t.display.input.reset(), !1;
        if (t.doc.sel == t.display.selForContextMenu) {
          var o = n.charCodeAt(0);
          if (o == 8203 && !r && (r = "​"), o == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var l = 0, a = Math.min(r.length, n.length); l < a && r.charCodeAt(l) == n.charCodeAt(l); )
          ++l;
        return Ne(t, function() {
          Pn(
            t,
            n.slice(l),
            r.length - l,
            null,
            e.composing ? "*compose" : null
          ), n.length > 1e3 || n.indexOf(`
`) > -1 ? i.value = e.prevInput = "" : e.prevInput = n, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(
            e.composing.start,
            t.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, ee.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, ee.prototype.onKeyPress = function() {
        E && _ >= 9 && (this.hasSelection = null), this.fastPoll();
      }, ee.prototype.onContextMenu = function(e) {
        var t = this, i = t.cm, r = i.display, n = t.textarea;
        t.contextMenuPending && t.contextMenuPending();
        var o = Mt(i, e), l = r.scroller.scrollTop;
        if (!o || ae)
          return;
        var a = i.options.resetSelectionOnContextMenu;
        a && i.doc.sel.contains(o) == -1 && fe(i, ge)(i.doc, dt(o), _e);
        var s = n.style.cssText, u = t.wrapper.style.cssText, f = t.wrapper.offsetParent.getBoundingClientRect();
        t.wrapper.style.cssText = "position: static", n.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - f.top - 5) + "px; left: " + (e.clientX - f.left - 5) + `px;
      z-index: 1000; background: ` + (E ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var h;
        G && (h = window.scrollY), r.input.focus(), G && window.scrollTo(null, h), r.input.reset(), i.somethingSelected() || (n.value = t.prevInput = " "), t.contextMenuPending = d, r.selForContextMenu = i.doc.sel, clearTimeout(r.detectingSelectAll);
        function p() {
          if (n.selectionStart != null) {
            var y = i.somethingSelected(), x = "​" + (y ? n.value : "");
            n.value = "⇚", n.value = x, t.prevInput = y ? "" : "​", n.selectionStart = 1, n.selectionEnd = x.length, r.selForContextMenu = i.doc.sel;
          }
        }
        function d() {
          if (t.contextMenuPending == d && (t.contextMenuPending = !1, t.wrapper.style.cssText = u, n.style.cssText = s, E && _ < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = l), n.selectionStart != null)) {
            (!E || E && _ < 9) && p();
            var y = 0, x = function() {
              r.selForContextMenu == i.doc.sel && n.selectionStart == 0 && n.selectionEnd > 0 && t.prevInput == "​" ? fe(i, yl)(i) : y++ < 10 ? r.detectingSelectAll = setTimeout(x, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(x, 200);
          }
        }
        if (E && _ >= 9 && p(), st) {
          ur(e);
          var v = function() {
            We(window, "mouseup", v), setTimeout(d, 20);
          };
          P(window, "mouseup", v);
        } else
          setTimeout(d, 50);
      }, ee.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, ee.prototype.setUneditable = function() {
      }, ee.prototype.needsContentAttribute = !1;
      function yu(e, t) {
        if (t = t ? Ct(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), t.autofocus == null) {
          var i = F();
          t.autofocus = i == e || e.getAttribute("autofocus") != null && i == document.body;
        }
        function r() {
          e.value = a.getValue();
        }
        var n;
        if (e.form && (P(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
          var o = e.form;
          n = o.submit;
          try {
            var l = o.submit = function() {
              r(), o.submit = n, o.submit(), o.submit = l;
            };
          } catch (s) {
          }
        }
        t.finishInit = function(s) {
          s.save = r, s.getTextArea = function() {
            return e;
          }, s.toTextArea = function() {
            s.toTextArea = isNaN, r(), e.parentNode.removeChild(s.getWrapperElement()), e.style.display = "", e.form && (We(e.form, "submit", r), !t.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = n));
          };
        }, e.style.display = "none";
        var a = Q(
          function(s) {
            return e.parentNode.insertBefore(s, e.nextSibling);
          },
          t
        );
        return a;
      }
      function mu(e) {
        e.off = We, e.on = P, e.wheelEventPixels = ks, e.Doc = ke, e.splitLines = Bi, e.countColumn = Fe, e.findColumn = Oi, e.isWordChar = Wi, e.Pass = _r, e.signal = te, e.Line = Rt, e.changeEnd = pt, e.scrollbarModel = Yo, e.Pos = m, e.cmpPos = I, e.modes = Ui, e.mimeModes = Pt, e.resolveMode = qr, e.getMode = _i, e.modeExtensions = It, e.extendMode = xa, e.copyState = wt, e.startState = jn, e.innerMode = Gi, e.commands = Hr, e.keyMap = nt, e.keyName = Hl, e.isModifierKey = Al, e.lookupKey = jt, e.normalizeKeyMap = Ys, e.StringStream = re, e.SharedTextMarker = Or, e.TextMarker = gt, e.LineWidget = Nr, e.e_preventDefault = Se, e.e_stopPropagation = Qn, e.e_stop = ur, e.addClass = oe, e.contains = C, e.rmClass = be, e.keyNames = yt;
      }
      uu(Q), du(Q);
      var bu = "iter insert remove copy getEditor constructor".split(" ");
      for (var Li in ke.prototype)
        ke.prototype.hasOwnProperty(Li) && ve(bu, Li) < 0 && (Q.prototype[Li] = function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(ke.prototype[Li]));
      return Ft(ke), Q.inputStyles = { textarea: ee, contenteditable: q }, Q.defineMode = function(e) {
        !Q.defaults.mode && e != "null" && (Q.defaults.mode = e), ma.apply(this, arguments);
      }, Q.defineMIME = ba, Q.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), Q.defineMIME("text/plain", "null"), Q.defineExtension = function(e, t) {
        Q.prototype[e] = t;
      }, Q.defineDocExtension = function(e, t) {
        ke.prototype[e] = t;
      }, Q.fromTextArea = yu, mu(Q), Q.version = "5.63.3", Q;
    });
  }(zn)), zn.exports;
}
(function(U, k) {
  (function(c) {
    c(ia());
  })(function(c) {
    var b = {
      autoSelfClosers: {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
        menuitem: !0
      },
      implicitlyClosed: {
        dd: !0,
        li: !0,
        optgroup: !0,
        option: !0,
        p: !0,
        rp: !0,
        rt: !0,
        tbody: !0,
        td: !0,
        tfoot: !0,
        th: !0,
        tr: !0
      },
      contextGrabbers: {
        dd: { dd: !0, dt: !0 },
        dt: { dd: !0, dt: !0 },
        li: { li: !0 },
        option: { option: !0, optgroup: !0 },
        optgroup: { optgroup: !0 },
        p: {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          dir: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          menu: !0,
          nav: !0,
          ol: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          ul: !0
        },
        rp: { rp: !0, rt: !0 },
        rt: { rp: !0, rt: !0 },
        tbody: { tbody: !0, tfoot: !0 },
        td: { td: !0, th: !0 },
        tfoot: { tbody: !0 },
        th: { td: !0, th: !0 },
        thead: { tbody: !0, tfoot: !0 },
        tr: { tr: !0 }
      },
      doNotIndent: { pre: !0 },
      allowUnquoted: !0,
      allowMissing: !0,
      caseFold: !0
    }, M = {
      autoSelfClosers: {},
      implicitlyClosed: {},
      contextGrabbers: {},
      doNotIndent: {},
      allowUnquoted: !1,
      allowMissing: !1,
      allowMissingTagName: !1,
      caseFold: !1
    };
    c.defineMode("xml", function(L, J) {
      var Y = L.indentUnit, E = {}, _ = J.htmlMode ? b : M;
      for (var G in _)
        E[G] = _[G];
      for (var G in J)
        E[G] = J[G];
      var lt, V;
      function ae(g, D) {
        function C(Ve) {
          return D.tokenize = Ve, Ve(g, D);
        }
        var F = g.next();
        if (F == "<")
          return g.eat("!") ? g.eat("[") ? g.match("CDATA[") ? C(ir("atom", "]]>")) : null : g.match("--") ? C(ir("comment", "-->")) : g.match("DOCTYPE", !0, !0) ? (g.eatWhile(/[\w\._\-]/), C(Je(1))) : null : g.eat("?") ? (g.eatWhile(/[\w\._\-]/), D.tokenize = ir("meta", "?>"), "meta") : (lt = g.eat("/") ? "closeTag" : "openTag", D.tokenize = at, "tag bracket");
        if (F == "&") {
          var oe;
          return g.eat("#") ? g.eat("x") ? oe = g.eatWhile(/[a-fA-F\d]/) && g.eat(";") : oe = g.eatWhile(/[\d]/) && g.eat(";") : oe = g.eatWhile(/[\w\.\-:]/) && g.eat(";"), oe ? "atom" : "error";
        } else
          return g.eatWhile(/[^&<]/), null;
      }
      ae.isInText = !0;
      function at(g, D) {
        var C = g.next();
        if (C == ">" || C == "/" && g.eat(">"))
          return D.tokenize = ae, lt = C == ">" ? "endTag" : "selfcloseTag", "tag bracket";
        if (C == "=")
          return lt = "equals", null;
        if (C == "<") {
          D.tokenize = ae, D.state = xt, D.tagName = D.tagStart = null;
          var F = D.tokenize(g, D);
          return F ? F + " tag error" : "tag error";
        } else
          return /[\'\"]/.test(C) ? (D.tokenize = Mi(C), D.stringStartCol = g.column(), D.tokenize(g, D)) : (g.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
      }
      function Mi(g) {
        var D = function(C, F) {
          for (; !C.eol(); )
            if (C.next() == g) {
              F.tokenize = at;
              break;
            }
          return "string";
        };
        return D.isInAttribute = !0, D;
      }
      function ir(g, D) {
        return function(C, F) {
          for (; !C.eol(); ) {
            if (C.match(D)) {
              F.tokenize = ae;
              break;
            }
            C.next();
          }
          return g;
        };
      }
      function Je(g) {
        return function(D, C) {
          for (var F; (F = D.next()) != null; ) {
            if (F == "<")
              return C.tokenize = Je(g + 1), C.tokenize(D, C);
            if (F == ">")
              if (g == 1) {
                C.tokenize = ae;
                break;
              } else
                return C.tokenize = Je(g - 1), C.tokenize(D, C);
          }
          return "meta";
        };
      }
      function Ae(g) {
        return g && g.toLowerCase();
      }
      function bt(g, D, C) {
        this.prev = g.context, this.tagName = D || "", this.indent = g.indented, this.startOfLine = C, (E.doNotIndent.hasOwnProperty(D) || g.context && g.context.noIndent) && (this.noIndent = !0);
      }
      function me(g) {
        g.context && (g.context = g.context.prev);
      }
      function zr(g, D) {
        for (var C; ; ) {
          if (!g.context || (C = g.context.tagName, !E.contextGrabbers.hasOwnProperty(Ae(C)) || !E.contextGrabbers[Ae(C)].hasOwnProperty(Ae(D))))
            return;
          me(g);
        }
      }
      function xt(g, D, C) {
        return g == "openTag" ? (C.tagStart = D.column(), ze) : g == "closeTag" ? Ur : xt;
      }
      function ze(g, D, C) {
        return g == "word" ? (C.tagName = D.current(), V = "tag", be) : E.allowMissingTagName && g == "endTag" ? (V = "tag bracket", be(g, D, C)) : (V = "error", ze);
      }
      function Ur(g, D, C) {
        if (g == "word") {
          var F = D.current();
          return C.context && C.context.tagName != F && E.implicitlyClosed.hasOwnProperty(Ae(C.context.tagName)) && me(C), C.context && C.context.tagName == F || E.matchClosing === !1 ? (V = "tag", st) : (V = "tag error", je);
        } else
          return E.allowMissingTagName && g == "endTag" ? (V = "tag bracket", st(g, D, C)) : (V = "error", je);
      }
      function st(g, D, C) {
        return g != "endTag" ? (V = "error", st) : (me(C), xt);
      }
      function je(g, D, C) {
        return V = "error", st(g, D, C);
      }
      function be(g, D, C) {
        if (g == "word")
          return V = "attribute", Ue;
        if (g == "endTag" || g == "selfcloseTag") {
          var F = C.tagName, oe = C.tagStart;
          return C.tagName = C.tagStart = null, g == "selfcloseTag" || E.autoSelfClosers.hasOwnProperty(Ae(F)) ? zr(C, F) : (zr(C, F), C.context = new bt(C, F, oe == C.indented)), xt;
        }
        return V = "error", be;
      }
      function Ue(g, D, C) {
        return g == "equals" ? xe : (E.allowMissing || (V = "error"), be(g, D, C));
      }
      function xe(g, D, C) {
        return g == "string" ? W : g == "word" && E.allowUnquoted ? (V = "string", be) : (V = "error", be(g, D, C));
      }
      function W(g, D, C) {
        return g == "string" ? W : be(g, D, C);
      }
      return {
        startState: function(g) {
          var D = {
            tokenize: ae,
            state: xt,
            indented: g || 0,
            tagName: null,
            tagStart: null,
            context: null
          };
          return g != null && (D.baseIndent = g), D;
        },
        token: function(g, D) {
          if (!D.tagName && g.sol() && (D.indented = g.indentation()), g.eatSpace())
            return null;
          lt = null;
          var C = D.tokenize(g, D);
          return (C || lt) && C != "comment" && (V = null, D.state = D.state(lt || C, g, D), V && (C = V == "error" ? C + " error" : V)), C;
        },
        indent: function(g, D, C) {
          var F = g.context;
          if (g.tokenize.isInAttribute)
            return g.tagStart == g.indented ? g.stringStartCol + 1 : g.indented + Y;
          if (F && F.noIndent)
            return c.Pass;
          if (g.tokenize != at && g.tokenize != ae)
            return C ? C.match(/^(\s*)/)[0].length : 0;
          if (g.tagName)
            return E.multilineTagIndentPastTag !== !1 ? g.tagStart + g.tagName.length + 2 : g.tagStart + Y * (E.multilineTagIndentFactor || 1);
          if (E.alignCDATA && /<!\[CDATA\[/.test(D))
            return 0;
          var oe = D && /^<(\/)?([\w_:\.-]*)/.exec(D);
          if (oe && oe[1])
            for (; F; )
              if (F.tagName == oe[2]) {
                F = F.prev;
                break;
              } else if (E.implicitlyClosed.hasOwnProperty(Ae(F.tagName)))
                F = F.prev;
              else
                break;
          else if (oe)
            for (; F; ) {
              var Ve = E.contextGrabbers[Ae(F.tagName)];
              if (Ve && Ve.hasOwnProperty(Ae(oe[2])))
                F = F.prev;
              else
                break;
            }
          for (; F && F.prev && !F.startOfLine; )
            F = F.prev;
          return F ? F.indent + Y : g.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "<!--",
        blockCommentEnd: "-->",
        configuration: E.htmlMode ? "html" : "xml",
        helperType: E.htmlMode ? "html" : "xml",
        skipAttribute: function(g) {
          g.state == xe && (g.state = be);
        },
        xmlCurrentTag: function(g) {
          return g.tagName ? { name: g.tagName, close: g.type == "closeTag" } : null;
        },
        xmlCurrentContext: function(g) {
          for (var D = [], C = g.context; C; C = C.prev)
            D.push(C.tagName);
          return D.reverse();
        }
      };
    }), c.defineMIME("text/xml", "xml"), c.defineMIME("application/xml", "xml"), c.mimeModes.hasOwnProperty("text/html") || c.defineMIME("text/html", { name: "xml", htmlMode: !0 });
  });
})();
var Br = {};
function ki() {
  return ki = Object.assign || function(U) {
    for (var k = 1; k < arguments.length; k++) {
      var c = arguments[k];
      for (var b in c)
        Object.prototype.hasOwnProperty.call(c, b) && (U[b] = c[b]);
    }
    return U;
  }, ki.apply(this, arguments);
}
function Rr(U) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rr = function(c) {
    return typeof c;
  } : Rr = function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  }, Rr(U);
}
var na = function() {
  var U = function(c, b) {
    return U = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(M, L) {
      M.__proto__ = L;
    } || function(M, L) {
      for (var J in L)
        L.hasOwnProperty(J) && (M[J] = L[J]);
    }, U(c, b);
  };
  return function(k, c) {
    U(k, c);
    function b() {
      this.constructor = k;
    }
    k.prototype = c === null ? Object.create(c) : (b.prototype = c.prototype, new b());
  };
}();
Object.defineProperty(Br, "__esModule", {
  value: !0
});
Br.UnControlled = la = Br.Controlled = void 0;
var Ti = ta, Ee = typeof navigator == "undefined" || ra.PREVENT_CODEMIRROR_RENDER === !0, Qe;
Ee || (Qe = ia());
var Un = function() {
  function U() {
  }
  return U.equals = function(k, c) {
    var b = this, M = Object.keys, L = Rr(k), J = Rr(c);
    return k && c && L === "object" && L === J ? M(k).length === M(c).length && M(k).every(function(Y) {
      return b.equals(k[Y], c[Y]);
    }) : k === c;
  }, U;
}(), oa = function() {
  function U(k, c) {
    this.editor = k, this.props = c;
  }
  return U.prototype.delegateCursor = function(k, c, b) {
    var M = this.editor.getDoc();
    b && this.editor.focus(), c ? M.setCursor(k) : M.setCursor(k, null, {
      scroll: !1
    });
  }, U.prototype.delegateScroll = function(k) {
    this.editor.scrollTo(k.x, k.y);
  }, U.prototype.delegateSelection = function(k, c) {
    var b = this.editor.getDoc();
    b.setSelections(k), c && this.editor.focus();
  }, U.prototype.apply = function(k) {
    k && k.selection && k.selection.ranges && this.delegateSelection(k.selection.ranges, k.selection.focus || !1), k && k.cursor && this.delegateCursor(k.cursor, k.autoScroll || !1, this.editor.getOption("autofocus") || !1), k && k.scroll && this.delegateScroll(k.scroll);
  }, U.prototype.applyNext = function(k, c, b) {
    k && k.selection && k.selection.ranges && c && c.selection && c.selection.ranges && !Un.equals(k.selection.ranges, c.selection.ranges) && this.delegateSelection(c.selection.ranges, c.selection.focus || !1), k && k.cursor && c && c.cursor && !Un.equals(k.cursor, c.cursor) && this.delegateCursor(b.cursor || c.cursor, c.autoScroll || !1, c.autoCursor || !1), k && k.scroll && c && c.scroll && !Un.equals(k.scroll, c.scroll) && this.delegateScroll(c.scroll);
  }, U.prototype.applyUserDefined = function(k, c) {
    c && c.cursor && this.delegateCursor(c.cursor, k.autoScroll || !1, this.editor.getOption("autofocus") || !1);
  }, U.prototype.wire = function(k) {
    var c = this;
    Object.keys(k || {}).filter(function(b) {
      return /^on/.test(b);
    }).forEach(function(b) {
      switch (b) {
        case "onBlur":
          c.editor.on("blur", function(M, L) {
            c.props.onBlur(c.editor, L);
          });
          break;
        case "onContextMenu": {
          c.editor.on("contextmenu", function(M, L) {
            c.props.onContextMenu(c.editor, L);
          });
          break;
        }
        case "onCopy": {
          c.editor.on("copy", function(M, L) {
            c.props.onCopy(c.editor, L);
          });
          break;
        }
        case "onCursor":
          c.editor.on("cursorActivity", function(M) {
            c.props.onCursor(c.editor, c.editor.getDoc().getCursor());
          });
          break;
        case "onCursorActivity":
          c.editor.on("cursorActivity", function(M) {
            c.props.onCursorActivity(c.editor);
          });
          break;
        case "onCut": {
          c.editor.on("cut", function(M, L) {
            c.props.onCut(c.editor, L);
          });
          break;
        }
        case "onDblClick": {
          c.editor.on("dblclick", function(M, L) {
            c.props.onDblClick(c.editor, L);
          });
          break;
        }
        case "onDragEnter":
          c.editor.on("dragenter", function(M, L) {
            c.props.onDragEnter(c.editor, L);
          });
          break;
        case "onDragLeave": {
          c.editor.on("dragleave", function(M, L) {
            c.props.onDragLeave(c.editor, L);
          });
          break;
        }
        case "onDragOver":
          c.editor.on("dragover", function(M, L) {
            c.props.onDragOver(c.editor, L);
          });
          break;
        case "onDragStart": {
          c.editor.on("dragstart", function(M, L) {
            c.props.onDragStart(c.editor, L);
          });
          break;
        }
        case "onDrop":
          c.editor.on("drop", function(M, L) {
            c.props.onDrop(c.editor, L);
          });
          break;
        case "onFocus":
          c.editor.on("focus", function(M, L) {
            c.props.onFocus(c.editor, L);
          });
          break;
        case "onGutterClick":
          c.editor.on("gutterClick", function(M, L, J, Y) {
            c.props.onGutterClick(c.editor, L, J, Y);
          });
          break;
        case "onInputRead":
          c.editor.on("inputRead", function(M, L) {
            c.props.onInputRead(c.editor, L);
          });
          break;
        case "onKeyDown":
          c.editor.on("keydown", function(M, L) {
            c.props.onKeyDown(c.editor, L);
          });
          break;
        case "onKeyHandled":
          c.editor.on("keyHandled", function(M, L, J) {
            c.props.onKeyHandled(c.editor, L, J);
          });
          break;
        case "onKeyPress":
          c.editor.on("keypress", function(M, L) {
            c.props.onKeyPress(c.editor, L);
          });
          break;
        case "onKeyUp":
          c.editor.on("keyup", function(M, L) {
            c.props.onKeyUp(c.editor, L);
          });
          break;
        case "onMouseDown": {
          c.editor.on("mousedown", function(M, L) {
            c.props.onMouseDown(c.editor, L);
          });
          break;
        }
        case "onPaste": {
          c.editor.on("paste", function(M, L) {
            c.props.onPaste(c.editor, L);
          });
          break;
        }
        case "onRenderLine": {
          c.editor.on("renderLine", function(M, L, J) {
            c.props.onRenderLine(c.editor, L, J);
          });
          break;
        }
        case "onScroll":
          c.editor.on("scroll", function(M) {
            c.props.onScroll(c.editor, c.editor.getScrollInfo());
          });
          break;
        case "onSelection":
          c.editor.on("beforeSelectionChange", function(M, L) {
            c.props.onSelection(c.editor, L);
          });
          break;
        case "onTouchStart": {
          c.editor.on("touchstart", function(M, L) {
            c.props.onTouchStart(c.editor, L);
          });
          break;
        }
        case "onUpdate":
          c.editor.on("update", function(M) {
            c.props.onUpdate(c.editor);
          });
          break;
        case "onViewportChange":
          c.editor.on("viewportChange", function(M, L, J) {
            c.props.onViewportChange(c.editor, L, J);
          });
          break;
      }
    });
  }, U;
}(), xu = function(U) {
  na(k, U);
  function k(c) {
    var b = U.call(this, c) || this;
    return Ee || (b.applied = !1, b.appliedNext = !1, b.appliedUserDefined = !1, b.deferred = null, b.emulating = !1, b.hydrated = !1, b.initCb = function() {
      b.props.editorDidConfigure && b.props.editorDidConfigure(b.editor);
    }, b.mounted = !1), b;
  }
  return k.prototype.hydrate = function(c) {
    var b = this, M = c && c.options ? c.options : {}, L = ki({}, Qe.defaults, this.editor.options, M), J = Object.keys(L).some(function(Y) {
      return b.editor.getOption(Y) !== L[Y];
    });
    J && Object.keys(L).forEach(function(Y) {
      M.hasOwnProperty(Y) && b.editor.getOption(Y) !== L[Y] && (b.editor.setOption(Y, L[Y]), b.mirror.setOption(Y, L[Y]));
    }), this.hydrated || (this.deferred ? this.resolveChange(c.value) : this.initChange(c.value || "")), this.hydrated = !0;
  }, k.prototype.initChange = function(c) {
    this.emulating = !0;
    var b = this.editor.getDoc(), M = b.lastLine(), L = b.getLine(b.lastLine()).length;
    b.replaceRange(c || "", {
      line: 0,
      ch: 0
    }, {
      line: M,
      ch: L
    }), this.mirror.setValue(c), b.clearHistory(), this.mirror.clearHistory(), this.emulating = !1;
  }, k.prototype.resolveChange = function(c) {
    this.emulating = !0;
    var b = this.editor.getDoc();
    if (this.deferred.origin === "undo" ? b.undo() : this.deferred.origin === "redo" ? b.redo() : b.replaceRange(this.deferred.text, this.deferred.from, this.deferred.to, this.deferred.origin), c && c !== b.getValue()) {
      var M = b.getCursor();
      b.setValue(c), b.setCursor(M);
    }
    this.emulating = !1, this.deferred = null;
  }, k.prototype.mirrorChange = function(c) {
    var b = this.editor.getDoc();
    return c.origin === "undo" ? (b.setHistory(this.mirror.getHistory()), this.mirror.undo()) : c.origin === "redo" ? (b.setHistory(this.mirror.getHistory()), this.mirror.redo()) : this.mirror.replaceRange(c.text, c.from, c.to, c.origin), this.mirror.getValue();
  }, k.prototype.componentDidMount = function() {
    var c = this;
    Ee || (this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && Qe.defineMode(this.props.defineMode.name, this.props.defineMode.fn), this.editor = Qe(this.ref, this.props.options), this.shared = new oa(this.editor, this.props), this.mirror = Qe(function() {
    }, this.props.options), this.editor.on("electricInput", function() {
      c.mirror.setHistory(c.editor.getDoc().getHistory());
    }), this.editor.on("cursorActivity", function() {
      c.mirror.setCursor(c.editor.getDoc().getCursor());
    }), this.editor.on("beforeChange", function(b, M) {
      if (!c.emulating) {
        M.cancel(), c.deferred = M;
        var L = c.mirrorChange(c.deferred);
        c.props.onBeforeChange && c.props.onBeforeChange(c.editor, c.deferred, L);
      }
    }), this.editor.on("change", function(b, M) {
      c.mounted && c.props.onChange && c.props.onChange(c.editor, M, c.editor.getValue());
    }), this.hydrate(this.props), this.shared.apply(this.props), this.applied = !0, this.mounted = !0, this.shared.wire(this.props), this.editor.getOption("autofocus") && this.editor.focus(), this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
  }, k.prototype.componentDidUpdate = function(c) {
    if (!Ee) {
      var b = {
        cursor: null
      };
      this.props.value !== c.value && (this.hydrated = !1), !this.props.autoCursor && this.props.autoCursor !== void 0 && (b.cursor = this.editor.getDoc().getCursor()), this.hydrate(this.props), this.appliedNext || (this.shared.applyNext(c, this.props, b), this.appliedNext = !0), this.shared.applyUserDefined(c, b), this.appliedUserDefined = !0;
    }
  }, k.prototype.componentWillUnmount = function() {
    Ee || this.props.editorWillUnmount && this.props.editorWillUnmount(Qe);
  }, k.prototype.shouldComponentUpdate = function(c, b) {
    return !Ee;
  }, k.prototype.render = function() {
    var c = this;
    if (Ee)
      return null;
    var b = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
    return Ti.createElement("div", {
      className: b,
      ref: function(L) {
        return c.ref = L;
      }
    });
  }, k;
}(Ti.Component), la = Br.Controlled = xu, Cu = function(U) {
  na(k, U);
  function k(c) {
    var b = U.call(this, c) || this;
    return Ee || (b.applied = !1, b.appliedUserDefined = !1, b.continueChange = !1, b.detached = !1, b.hydrated = !1, b.initCb = function() {
      b.props.editorDidConfigure && b.props.editorDidConfigure(b.editor);
    }, b.mounted = !1, b.onBeforeChangeCb = function() {
      b.continueChange = !0;
    }), b;
  }
  return k.prototype.hydrate = function(c) {
    var b = this, M = c && c.options ? c.options : {}, L = ki({}, Qe.defaults, this.editor.options, M), J = Object.keys(L).some(function(G) {
      return b.editor.getOption(G) !== L[G];
    });
    if (J && Object.keys(L).forEach(function(G) {
      M.hasOwnProperty(G) && b.editor.getOption(G) !== L[G] && b.editor.setOption(G, L[G]);
    }), !this.hydrated) {
      var Y = this.editor.getDoc(), E = Y.lastLine(), _ = Y.getLine(Y.lastLine()).length;
      Y.replaceRange(c.value || "", {
        line: 0,
        ch: 0
      }, {
        line: E,
        ch: _
      });
    }
    this.hydrated = !0;
  }, k.prototype.componentDidMount = function() {
    var c = this;
    Ee || (this.detached = this.props.detach === !0, this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && Qe.defineMode(this.props.defineMode.name, this.props.defineMode.fn), this.editor = Qe(this.ref, this.props.options), this.shared = new oa(this.editor, this.props), this.editor.on("beforeChange", function(b, M) {
      c.props.onBeforeChange && c.props.onBeforeChange(c.editor, M, c.editor.getValue(), c.onBeforeChangeCb);
    }), this.editor.on("change", function(b, M) {
      !c.mounted || !c.props.onChange || (c.props.onBeforeChange ? c.continueChange && c.props.onChange(c.editor, M, c.editor.getValue()) : c.props.onChange(c.editor, M, c.editor.getValue()));
    }), this.hydrate(this.props), this.shared.apply(this.props), this.applied = !0, this.mounted = !0, this.shared.wire(this.props), this.editor.getDoc().clearHistory(), this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
  }, k.prototype.componentDidUpdate = function(c) {
    if (this.detached && this.props.detach === !1 && (this.detached = !1, c.editorDidAttach && c.editorDidAttach(this.editor)), !this.detached && this.props.detach === !0 && (this.detached = !0, c.editorDidDetach && c.editorDidDetach(this.editor)), !(Ee || this.detached)) {
      var b = {
        cursor: null
      };
      this.props.value !== c.value && (this.hydrated = !1, this.applied = !1, this.appliedUserDefined = !1), !c.autoCursor && c.autoCursor !== void 0 && (b.cursor = this.editor.getDoc().getCursor()), this.hydrate(this.props), this.applied || (this.shared.apply(c), this.applied = !0), this.appliedUserDefined || (this.shared.applyUserDefined(c, b), this.appliedUserDefined = !0);
    }
  }, k.prototype.componentWillUnmount = function() {
    Ee || this.props.editorWillUnmount && this.props.editorWillUnmount(Qe);
  }, k.prototype.shouldComponentUpdate = function(c, b) {
    var M = !0;
    return Ee && (M = !1), this.detached && c.detach && (M = !1), M;
  }, k.prototype.render = function() {
    var c = this;
    if (Ee)
      return null;
    var b = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
    return Ti.createElement("div", {
      className: b,
      ref: function(L) {
        return c.ref = L;
      }
    });
  }, k;
}(Ti.Component);
Br.UnControlled = Cu;
const wu = "_container_13rz9_1", Su = {
  container: wu
};
function Au(U) {
  const { value: k, onChange: c } = U;
  return /* @__PURE__ */ ta.createElement(
    la,
    {
      className: Su.container,
      value: k,
      onBeforeChange: (b, M, L) => c(L),
      options: {
        mode: "xml",
        theme: "material",
        lineNumbers: !0,
        autofocus: !0,
        styleActiveLine: !0,
        smartIndent: !0,
        lineWrapping: !0,
        foldGutter: !0
      }
    }
  );
}
export {
  Au as default
};
//# sourceMappingURL=index-1bb6f7b7.mjs.map
