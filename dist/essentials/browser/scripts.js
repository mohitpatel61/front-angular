/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
    return oe.flat.call(e2);
  } : function(e2) {
    return oe.concat.apply([], e2);
  }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, y = function(e2) {
    return null != e2 && e2 === e2.window;
  }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
  function m(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || C).createElement("script");
    if (o2.text = e2, t2) for (r2 in u) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
  }
  var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
    return new ce.fn.init(e2, t2);
  };
  function c(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  function fe(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
    return ae.call(this);
  }, get: function(e2) {
    return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = ce.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return ce.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(ce.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(ae.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    m(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (c(e2)) {
      for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (!i2) while (t2 = e2[r2++]) n2 += ce.text(t2);
    return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : se.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !l.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (c(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  ce.escapeSelector = function(e2) {
    return (e2 + "").replace(f, p);
  };
  var ye = C, me = s;
  !function() {
    var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
      return e3 === t3 && (a2 = true), 0;
    }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, M2 = function() {
      V2();
    }, R2 = J2(function(e3) {
      return true === e3.disabled && fe(e3, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e3) {
      k2 = { apply: function(e4, t3) {
        me.apply(e4, ae.call(t3));
      }, call: function(e4) {
        me.apply(e4, ae.call(arguments, 1));
      } };
    }
    function I2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
      if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
        if (11 !== p3 && (u3 = L2.exec(t3))) if (i3 = u3[1]) {
          if (9 === p3) {
            if (!(a3 = e3.getElementById(i3))) return n3;
            if (a3.id === i3) return k2.call(n3, a3), n3;
          } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3) return k2.call(n3, a3), n3;
        } else {
          if (u3[2]) return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
          if ((i3 = u3[3]) && e3.getElementsByClassName) return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
        }
        if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
          if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
            (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
            while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return k2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            h2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return re2(t3.replace(ve, "$1"), e3, n3, r3);
    }
    function W2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function F2(e3) {
      return e3[S2] = true, e3;
    }
    function $2(e3) {
      var t3 = T2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function B2(t3) {
      return function(e3) {
        return fe(e3, "input") && e3.type === t3;
      };
    }
    function _2(t3) {
      return function(e3) {
        return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
      };
    }
    function z2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function X2(a3) {
      return F2(function(o3) {
        return o3 = +o3, F2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function U2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    function V2(e3) {
      var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
      return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M2), le.getById = $2(function(e4) {
        return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $2(function(e4) {
        return i2.call(e4, "*");
      }), le.scope = $2(function() {
        return T2.querySelectorAll(":scope");
      }), le.cssHas = $2(function() {
        try {
          return T2.querySelector(":has(*,:jqfake)"), false;
        } catch (e4) {
          return true;
        }
      }), le.getById ? (b2.filter.ID = function(e4) {
        var t4 = e4.replace(O2, P2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (b2.filter.ID = function(e4) {
        var n4 = e4.replace(O2, P2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4, r3, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
            i3 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i3[r3++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
          }
          return [];
        }
      }), b2.find.TAG = function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
      }, b2.find.CLASS = function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && C2) return t4.getElementsByClassName(e4);
      }, d2 = [], $2(function(e4) {
        var t4;
        r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
      }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
        if (e4 === t4) return a2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
      }), T2;
    }
    for (e2 in I2.matches = function(e3, t3) {
      return I2(e3, null, null, t3);
    }, I2.matchesSelector = function(e3, t3) {
      if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3))) try {
        var n3 = i2.call(e3, t3);
        if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
      } catch (e4) {
        h2(t3, true);
      }
      return 0 < I2(t3, T2, null, [e3]).length;
    }, I2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
    }, I2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != T2 && V2(e3);
      var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
      return void 0 !== r3 ? r3 : e3.getAttribute(t3);
    }, I2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, ce.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
        while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--) he.call(e3, n3[r3], 1);
      }
      return o2 = null, e3;
    }, ce.fn.uniqueSort = function() {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(O2, P2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return fe(e4, t3);
      };
    }, CLASS: function(e3) {
      var t3 = s2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = I2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(d3, e3, t3, h3, g3) {
      var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
      return 1 === h3 && 0 === g3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
        if (l3) {
          if (v3) {
            while (u3) {
              o3 = e4;
              while (o3 = o3[u3]) if (m3 ? fe(o3, c3) : 1 === o3.nodeType) return false;
              s3 = u3 = "only" === d3 && !s3 && "nextSibling";
            }
            return true;
          }
          if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
            p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if (1 === o3.nodeType && ++p3 && o3 === e4) {
              i3[d3] = [E2, a3, p3];
              break;
            }
          } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4)) break;
          }
          return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--) e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: F2(function(e3) {
      var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
      return s3[S2] ? F2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: F2(function(t3) {
      return function(e3) {
        return 0 < I2(t3, e3).length;
      };
    }), contains: F2(function(t3) {
      return t3 = t3.replace(O2, P2), function(e3) {
        return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
      };
    }), lang: F2(function(n3) {
      return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = ie.location && ie.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === r2;
    }, focus: function(e3) {
      return e3 === function() {
        try {
          return T2.activeElement;
        } catch (e4) {
        }
      }() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
      return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
      return true;
    }, parent: function(e3) {
      return !b2.pseudos.empty(e3);
    }, header: function(e3) {
      return q2.test(e3.nodeName);
    }, input: function(e3) {
      return N2.test(e3.nodeName);
    }, button: function(e3) {
      return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
    }, text: function(e3) {
      var t3;
      return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: X2(function() {
      return [0];
    }), last: X2(function(e3, t3) {
      return [t3 - 1];
    }), eq: X2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: X2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), odd: X2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), lt: X2(function(e3, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
      return e3;
    }), gt: X2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
      return e3;
    }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = B2(e2);
    for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = _2(e2);
    function G2() {
    }
    function Y2(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
      if (l3) return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = b2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3) break;
      }
      return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
    }
    function Q2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
      return r3;
    }
    function J2(a3, e3, t3) {
      var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[s3]) if (1 === e4.nodeType || c3) return a3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3 = [E2, f3];
        if (n3) {
          while (e4 = e4[s3]) if ((1 === e4.nodeType || c3) && a3(e4, t4, n3)) return true;
        } else while (e4 = e4[s3]) if (1 === e4.nodeType || c3) if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3)) e4 = e4[s3] || e4;
        else {
          if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3) return o3[2] = r3[2];
          if ((i3[l3] = o3)[2] = a3(e4, t4, n3)) return true;
        }
        return false;
      };
    }
    function K2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--) if (!i3[r3](e3, t3, n3)) return false;
        return true;
      } : i3[0];
    }
    function Z2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function ee2(d3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) I2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
        if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
          i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--) (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
        }
        if (e4) {
          if (y3 || d3) {
            if (y3) {
              i3 = [], o3 = s3.length;
              while (o3--) (a3 = s3[o3]) && i3.push(p3[o3] = a3);
              y3(null, s3 = [], i3, r3);
            }
            o3 = s3.length;
            while (o3--) (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
      });
    }
    function te2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = J2(function(e4) {
        return -1 < se.call(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [J2(K2(c3), t3)];
      else {
        if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
          for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
          return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
        }
        c3.push(t3);
      }
      return K2(c3);
    }
    function ne2(e3, t3) {
      var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
      if (!a3) {
        t3 || (t3 = Y2(e3)), n3 = t3.length;
        while (n3--) (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
          for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
            if (x3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
              while (s3 = v3[a4++]) if (s3(o4, t4 || T2, n4)) {
                k2.call(r4, o4);
                break;
              }
              i4 && (E2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
              f3 = Z2(f3);
            }
            k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
          }
          return i4 && (E2 = h3, w2 = p3), c3;
        }, m3 ? F2(r3) : r3))).selector = e3;
      }
      return a3;
    }
    function re2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
          if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0])) return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = D2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
          if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3))) return k2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
    }
    G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $2(function(e3) {
      return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
    }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
  }();
  var d = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
      if (i2 && ce(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, h = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e2, n2, r2) {
    return v(n2) ? ce.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? ce.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
      return -1 < se.call(n2, e3) !== r2;
    }) : ce.filter(n2, e2, r2);
  }
  ce.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, ce.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(ce(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (ce.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) ce.find(e2, i2[t2], n2);
    return 1 < r2 ? ce.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(T(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(T(this, e2 || [], true));
  }, is: function(e2) {
    return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
  } });
  var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2) return this;
    if (n2 = n2 || k, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2)) for (r2 in t2) v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
  function A(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
    return e2;
  }
  ce.fn.extend({ has: function(e2) {
    var t2 = ce(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (ce.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
    if (!b.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), ce.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return d(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return d(e2, "parentNode", n2);
  }, next: function(e2) {
    return A(e2, "nextSibling");
  }, prev: function(e2) {
    return A(e2, "previousSibling");
  }, nextAll: function(e2) {
    return d(e2, "nextSibling");
  }, prevAll: function(e2) {
    return d(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return d(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return d(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return h((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return h(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
  } }, function(r2, i2) {
    ce.fn[r2] = function(e2, t2) {
      var n2 = ce.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e2) {
    return e2;
  }
  function q(e2) {
    throw e2;
  }
  function L(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  ce.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : ce.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        ce.each(e3, function(e4, t3) {
          v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return ce.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = ce.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, ce.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return ce.Deferred(function(r2) {
        ce.each(o2, function(e3, t2) {
          var n2 = v(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
        };
      }
      return ce.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? ce.extend(e3, a2) : a2;
    } }, s2 = {};
    return ce.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then))) return o2.then();
    while (t2--) L(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e2, t2) {
    ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, ce.readyException = function(e2) {
    ie.setTimeout(function() {
      throw e2;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function(e2) {
    return O.then(e2)["catch"](function(e3) {
      ce.readyException(e3);
    }), this;
  }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
  } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2)) for (s2 in i2 = true, n2) M(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(ce(e3), n3);
    })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, R = /^-ms-/, I = /-([a-z])/g;
  function W(e2, t2) {
    return t2.toUpperCase();
  }
  function F(e2) {
    return e2.replace(R, "ms-").replace(I, W);
  }
  var $ = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, $(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[F(t2)] = n2;
    else for (r2 in t2) i2[F(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
        while (n2--) delete r2[t2[n2]];
      }
      (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !ce.isEmptyObject(t2);
  } };
  var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
  function V(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
      } catch (e3) {
      }
      z.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  ce.extend({ hasData: function(e2) {
    return z.hasData(e2) || _.hasData(e2);
  }, data: function(e2, t2, n2) {
    return z.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    z.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return _.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    _.remove(e2, t2);
  } }), ce.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
        _.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      z.set(this, n2);
    }) : M(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3) return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
      this.each(function() {
        z.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      z.remove(this, e2);
    });
  } }), ce.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      ce.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
      _.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), ce.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = ce.queue(this, t2, n2);
      ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      ce.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--) (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
    return ce.contains(e2.ownerDocument, e2);
  }, Z = { composed: true };
  J.getRootNode && (K = function(e2) {
    return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
  });
  var ee = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
  };
  function te(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return ce.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--) ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var ne = {};
  function re(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  ce.fn.extend({ show: function() {
    return re(this, true);
  }, hide: function() {
    return re(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ee(this) ? ce(this).show() : ce(this).hide();
    });
  } });
  var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function Se(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
  }
  function Ee(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) ce.merge(p2, o2.nodeType ? [o2] : o2);
    else if (je.test(o2)) {
      a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
      while (c2--) a2 = a2.lastChild;
      ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++]) if (r2 && -1 < ce.inArray(o2, r2)) i2 && i2.push(o2);
    else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
      c2 = 0;
      while (o2 = a2[c2++]) Ce.test(o2.type || "") && n2.push(o2);
    }
    return f2;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return true;
  }
  function qe() {
    return false;
  }
  function Le(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Le(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = qe;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return ce().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
      ce.event.add(this, t2, i2, r2, n2);
    });
  }
  function He(e2, r2, t2) {
    t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
      var t3, n2 = _.get(this, r2);
      if (1 & e3.isTrigger && this[r2]) {
        if (n2) (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
        else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3) return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
      } else n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
    } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
  }
  ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
    if ($(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
      while (l2--) d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(D) || [""]).length;
      while (l2--) if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
        f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
        while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
        a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
      } else for (d2 in u2) ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
      ce.isEmptyObject(u2) && _.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: l2, handlers: o2 });
      }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
      if (this.originalEvent) return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[ce.expando] ? e2 : new ce.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, ce.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, ce.Event = function(e2, t2) {
    if (!(this instanceof ce.Event)) return new ce.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
  }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
    function o2(e2) {
      if (C.documentMode) {
        var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
        n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
      } else ce.event.simulate(i2, e2.target, ce.event.fix(e2));
    }
    ce.event.special[r2] = { setup: function() {
      var e2;
      if (He(this, r2, true), !C.documentMode) return false;
      (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
    }, trigger: function() {
      return He(this, r2), true;
    }, teardown: function() {
      var e2;
      if (!C.documentMode) return false;
      (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
    }, _default: function(e2) {
      return _.get(e2.target, r2);
    }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
      n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
      n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
    } };
  }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
      ce.event.remove(this, e2, n2, t2);
    });
  } });
  var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e2, t2) {
    return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
  }
  function Ie(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function We(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Fe(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (_.hasData(e2) && (s2 = _.get(e2).events)) for (i2 in _.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) ce.event.add(t2, i2, s2[i2][n2]);
      z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
    }
  }
  function $e(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
    if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2)) return n2.each(function(e3) {
      var t3 = n2.eq(e3);
      h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
    });
    if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2) for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++) u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
    }
    return n2;
  }
  function Be(e2, t2, n2) {
    for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  ce.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
    if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2))) for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2) if (n2) for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Fe(o2[r2], a2[r2]);
    else Fe(e2, c2);
    return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if ($(n2)) {
      if (t2 = n2[_.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
        n2[_.expando] = void 0;
      }
      n2[z.expando] && (n2[z.expando] = void 0);
    }
  } }), ce.fn.extend({ detach: function(e2) {
    return Be(this, e2, true);
  }, remove: function(e2) {
    return Be(this, e2);
  }, text: function(e2) {
    return M(this, function(e3) {
      return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return $e(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return $e(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Re(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return ce.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return M(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = ce.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return $e(this, arguments, function(e2) {
      var t2 = this.parentNode;
      ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    ce.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
  }, Ue = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
    return r2;
  }, Ve = new RegExp(Q.join("|"), "i");
  function Ge(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
    return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Ye(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
        var e3 = ie.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
    } }));
  }();
  var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
  function Ze(e2) {
    var t2 = ce.cssProps[e2] || Ke[e2];
    return t2 || (e2 in Je ? e2 : Ke[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
      while (n2--) if ((e3 = Qe[n2] + t3) in Je) return e3;
    }(e2) || e2);
  }
  var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e2, t2, n2) {
    var r2 = Y.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function it(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
  }
  function ot(e2, t2, n2) {
    var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (_e.test(a2)) {
      if (!n2) return a2;
      a2 = "auto";
    }
    return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  function at(e2, t2, n2, r2, i2) {
    return new at.prototype.init(e2, t2, n2, r2, i2);
  }
  ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Ge(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
      if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = F(t2);
    return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), ce.each(["height", "width"], function(e2, u2) {
    ce.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2) return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
        return ot(e3, u2, n2);
      });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
    } };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    ce.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
  }), ce.fn.extend({ css: function(e2, t2) {
    return M(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = at.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = at.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
  } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, ce.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
  function dt() {
    ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function() {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function vt(e2, t2, n2) {
    for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function yt(o2, e2, t2) {
    var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (a2) return false;
      for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
      return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
    }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
      var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
      return l2.tweens.push(n3), n3;
    }, stop: function(e3) {
      var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
      if (a2) return this;
      for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
      return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
    } }), c2 = l2.props;
    for (!function(e3, t3) {
      var n3, r3, i3, o3, a3;
      for (n3 in e3) if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
      else t3[r3] = i3;
    }(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts)) return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
    return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
  }
  ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return te(n2.elem, e2, Y.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
  }, prefilters: [function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2) if (i2 = t2[r2], ft.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
        if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
        g2 = true;
      }
      d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
    }
    if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
      h2.display = l2;
    }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
      h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
    })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
      for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2) ce.style(e2, r2, d2[r2]);
    })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
  }], prefilter: function(e2, t2) {
    t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
  } }), ce.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
    return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
    }, r2;
  }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(t2, e2, n2, r2) {
    var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
      var e3 = yt(this, ce.extend({}, t2), o2);
      (i2 || _.get(this, "finish")) && e3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(i2, e2, o2) {
    var a2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(o2);
    };
    return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
      var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
      if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
      else for (t2 in r2) r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
      for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
      !e3 && o2 || ce.dequeue(this, i2);
    });
  }, finish: function(a2) {
    return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
      var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
      for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
      for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
      delete t2.finish;
    });
  } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
    var i2 = ce.fn[r2];
    ce.fn[r2] = function(e3, t2, n2) {
      return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
    };
  }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
    ce.fn[e2] = function(e3, t2, n2) {
      return this.animate(r2, e3, t2, n2);
    };
  }), ce.timers = [], ce.fx.tick = function() {
    var e2, t2 = 0, n2 = ce.timers;
    for (st = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function(e2) {
    ce.timers.push(e2), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function() {
    ut || (ut = true, dt());
  }, ce.fx.stop = function() {
    ut = null;
  }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
    return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = ie.setTimeout(e3, r2);
      t2.stop = function() {
        ie.clearTimeout(n2);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt, xt = ce.expr.attrHandle;
  ce.fn.extend({ attr: function(e2, t2) {
    return M(this, ce.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      ce.removeAttr(this, e2);
    });
  } }), ce.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(D);
    if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
  } }), mt = { set: function(e2, t2, n2) {
    return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = xt[t2] || ce.find.attr;
    xt[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
  function Tt(e2) {
    return (e2.match(D) || []).join(" ");
  }
  function Ct(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function kt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
  }
  ce.fn.extend({ prop: function(e2, t2) {
    return M(this, ce.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[ce.propFix[e2] || e2];
    });
  } }), ce.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = ce.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).addClass(t2.call(this, e3, Ct(this)));
    }) : (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).removeClass(t2.call(this, e3, Ct(this)));
    }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " ")) n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return v(t2) ? this.each(function(e3) {
      ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
      if (s2) for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++) r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2)) return true;
    return false;
  } });
  var St = /\r/g;
  ce.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = v(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
  } }), ce.extend({ valHooks: { option: { get: function(e2) {
    var t2 = ce.find.attr(e2, "value");
    return null != t2 ? t2 : Tt(ce.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
      if (t2 = ce(n2).val(), a2) return t2;
      s2.push(t2);
    }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
    while (a2--) ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
    } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  });
  var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
  ce.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2) return null;
    try {
      t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
    e2.stopPropagation();
  };
  ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !y(n2)) {
        for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
      }
      i2 = 0;
      while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
    ce.event.trigger(r2, null, t2);
  } }), ce.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      ce.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return ce.event.trigger(e2, t2, n2, true);
  } });
  var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2)) ce.each(e2, function(e3, t3) {
      r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
    });
    else if (r2 || "object" !== x(e2)) i2(n2, e2);
    else for (t2 in e2) Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  ce.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = v(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2) return "";
    if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2)) ce.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) Pt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, ce.fn.extend({ serialize: function() {
    return ce.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = ce.prop(this, "elements");
      return e2 ? ce.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
    }).map(function(e2, t2) {
      var n2 = ce(this).val();
      return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Lt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
    }).get();
  } });
  var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
  function Ut(o2) {
    return function(e2, t2) {
      "string" != typeof e2 && (t2 = e2, e2 = "*");
      var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
      if (v(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
    };
  }
  function Vt(t2, i2, o2, a2) {
    var s2 = {}, u2 = t2 === _t;
    function l2(e2) {
      var r2;
      return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
        var n2 = t3(i2, o2, a2);
        return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
      }), r2;
    }
    return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
  }
  function Gt(e2, t2) {
    var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && ce.extend(true, e2, r2), e2;
  }
  Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
  }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
    "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
    var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
      var t3;
      if (h2) {
        if (!n2) {
          n2 = {};
          while (t3 = Wt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        }
        t3 = n2[e3.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return h2 ? p2 : null;
    }, setRequestHeader: function(e3, t3) {
      return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
    }, overrideMimeType: function(e3) {
      return null == h2 && (v2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t3;
      if (e3) if (h2) T2.always(e3[T2.status]);
      else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
      return this;
    }, abort: function(e3) {
      var t3 = e3 || u2;
      return c2 && c2.abort(t3), l2(0, t3), this;
    } };
    if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
      r2 = C.createElement("a");
      try {
        r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
      } catch (e3) {
        v2.crossDomain = true;
      }
    }
    if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2) return T2;
    for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
    if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
    if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
      if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
      v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
        T2.abort("timeout");
      }, v2.timeout));
      try {
        h2 = false, c2.send(a2, l2);
      } catch (e3) {
        if (h2) throw e3;
        l2(-1, e3);
      }
    } else l2(-1, "No Transport");
    function l2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = t3;
      h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
        var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
        while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
        if (r4) {
          for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
            u4.unshift(i4);
            break;
          }
        }
        if (u4[0] in n4) o4 = u4[0];
        else {
          for (i4 in n4) {
            if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
              o4 = i4;
              break;
            }
            a4 || (a4 = i4);
          }
          o4 = o4 || a4;
        }
        if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
      }(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
      }), s3 = function(e4, t4, n4, r4) {
        var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
        if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
        o4 = c3.shift();
        while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
          if ("*" === o4) o4 = u4;
          else if ("*" !== u4 && u4 !== o4) {
            if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
              for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                break;
              }
            }
            if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
            else try {
              t4 = a4(t4);
            } catch (e5) {
              return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
            }
          }
        }
        return { state: "success", data: t4 };
      }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
    }
    return T2;
  }, getJSON: function(e2, t2, n2) {
    return ce.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return ce.get(e2, void 0, t2, "script");
  } }), ce.each(["get", "post"], function(e2, i2) {
    ce[i2] = function(e3, t2, n2, r2) {
      return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
    };
  }), ce.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), ce._evalUrl = function(e2, t2, n2) {
    return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      ce.globalEval(e3, t2, n2);
    } });
  }, ce.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return v(n2) ? this.each(function(e2) {
      ce(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = ce(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = v(t2);
    return this.each(function(e2) {
      ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      ce(this).replaceWith(this.childNodes);
    }), this;
  } }), ce.expr.pseudos.hidden = function(e2) {
    return !ce.expr.pseudos.visible(e2);
  }, ce.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, ce.ajaxSettings.xhr = function() {
    try {
      return new ie.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
    var o2, a2;
    if (le.cors || Qt && !i2.crossDomain) return { send: function(e2, t2) {
      var n2, r2 = i2.xhr();
      if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
      for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
      o2 = function(e3) {
        return function() {
          o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
        };
      }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
        4 === r2.readyState && ie.setTimeout(function() {
          o2 && a2();
        });
      }, o2 = o2("abort");
      try {
        r2.send(i2.hasContent && i2.data || null);
      } catch (e3) {
        if (o2) throw e3;
      }
    }, abort: function() {
      o2 && o2();
    } };
  }), ce.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return ce.globalEval(e2), e2;
  } } }), ce.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), ce.ajaxTransport("script", function(n2) {
    var r2, i2;
    if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
      r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
        r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
      }), C.head.appendChild(r2[0]);
    }, abort: function() {
      i2 && i2();
    } };
  });
  var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
    return this[e2] = true, e2;
  } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
    var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
    if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
      return o2 || ce.error(r2 + " was not called"), o2[0];
    }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
      o2 = arguments;
    }, n2.always(function() {
      void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, ce.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function(t2) {
    return ce.grep(ce.timers, function(e2) {
      return t2 === e2.elem;
    }).length;
  }, ce.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, ce.fn.extend({ offset: function(t2) {
    if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
      ce.offset.setOffset(this, t2, e3);
    });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === ce.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position")) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === ce.css(e2, "position")) e2 = e2.offsetParent;
      return e2 || J;
    });
  } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    ce.fn[t2] = function(e2) {
      return M(this, function(e3, t3, n2) {
        var r2;
        if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), ce.each(["top", "left"], function(e2, n2) {
    ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
      if (t2) return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
    });
  }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
    ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      ce.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return M(this, function(e3, t3, n3) {
          var r3;
          return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    ce.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), ce.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
  } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    ce.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2)) return r2 = ae.call(arguments, 2), (i2 = function() {
      return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
    }).guid = e2.guid = e2.guid || ce.guid++, i2;
  }, ce.holdReady = function(e2) {
    e2 ? ce.readyWait++ : ce.ready(true);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
    var t2 = ce.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, ce.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce;
  });
  var tn = ie.jQuery, nn = ie.$;
  return ce.noConflict = function(e2) {
    return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
/*! DataTables 2.1.8
 * © SpryMedia Ltd - datatables.net/license
 */
!function(n) {
  "use strict";
  var a;
  "function" == typeof define && define.amd ? define(["jquery"], function(t) {
    return n(t, window, document);
  }) : "object" == typeof exports ? (a = require("jquery"), "undefined" == typeof window ? module.exports = function(t, e) {
    return t = t || window, e = e || a(t), n(e, t, t.document);
  } : module.exports = n(a, window, window.document)) : window.DataTable = n(jQuery, window, document);
}(function(H, W, _) {
  "use strict";
  function f(t2) {
    var e2 = parseInt(t2, 10);
    return !isNaN(e2) && isFinite(t2) ? e2 : null;
  }
  function s(t2, e2, n2, a2) {
    var r2 = typeof t2, o2 = "string" == r2;
    return "number" == r2 || "bigint" == r2 || !(!a2 || !T(t2)) || (e2 && o2 && (t2 = E(t2, e2)), n2 && o2 && (t2 = t2.replace(P, "")), !isNaN(parseFloat(t2)) && isFinite(t2));
  }
  function c(t2, e2, n2, a2) {
    var r2;
    return !(!a2 || !T(t2)) || ("string" != typeof t2 || !t2.match(/<(input|select)/i)) && (T(r2 = t2) || "string" == typeof r2) && !!s(L(t2), e2, n2, a2) || null;
  }
  function b(t2, e2, n2, a2) {
    var r2 = [], o2 = 0, i2 = e2.length;
    if (void 0 !== a2) for (; o2 < i2; o2++) t2[e2[o2]] && t2[e2[o2]][n2] && r2.push(t2[e2[o2]][n2][a2]);
    else for (; o2 < i2; o2++) t2[e2[o2]] && r2.push(t2[e2[o2]][n2]);
    return r2;
  }
  function h(t2, e2) {
    var n2, a2 = [];
    void 0 === e2 ? (e2 = 0, n2 = t2) : (n2 = e2, e2 = t2);
    for (var r2 = e2; r2 < n2; r2++) a2.push(r2);
    return a2;
  }
  function A(t2) {
    for (var e2 = [], n2 = 0, a2 = t2.length; n2 < a2; n2++) t2[n2] && e2.push(t2[n2]);
    return e2;
  }
  var C, X, e, t, V = function(t2, P2) {
    var E2, k2, M2;
    return V.factory(t2, P2) ? V : this instanceof V ? H(t2).DataTable(P2) : (k2 = void 0 === (P2 = t2), M2 = (E2 = this).length, k2 && (P2 = {}), this.api = function() {
      return new X(this);
    }, this.each(function() {
      var t3 = 1 < M2 ? te({}, P2, true) : P2, e2 = 0, n2 = this.getAttribute("id"), a2 = V.defaults, r2 = H(this);
      if ("table" != this.nodeName.toLowerCase()) $(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      else {
        H(this).trigger("options.dt", t3), Q(a2), K(a2.column), B(a2, a2, true), B(a2.column, a2.column, true), B(a2, H.extend(t3, r2.data()), true);
        var o2 = V.settings;
        for (e2 = 0, R2 = o2.length; e2 < R2; e2++) {
          var i2 = o2[e2];
          if (i2.nTable == this || i2.nTHead && i2.nTHead.parentNode == this || i2.nTFoot && i2.nTFoot.parentNode == this) {
            var l2 = (void 0 !== t3.bRetrieve ? t3 : a2).bRetrieve, s2 = (void 0 !== t3.bDestroy ? t3 : a2).bDestroy;
            if (k2 || l2) return i2.oInstance;
            if (s2) {
              new V.Api(i2).destroy();
              break;
            }
            return void $(i2, 0, "Cannot reinitialise DataTable", 3);
          }
          if (i2.sTableId == this.id) {
            o2.splice(e2, 1);
            break;
          }
        }
        null !== n2 && "" !== n2 || (n2 = "DataTables_Table_" + V.ext._unique++, this.id = n2);
        var u2, c2 = H.extend(true, {}, V.models.oSettings, { sDestroyWidth: r2[0].style.width, sInstance: n2, sTableId: n2, colgroup: H("<colgroup>").prependTo(this), fastData: function(t4, e3, n3) {
          return q(c2, t4, e3, n3);
        } }), n2 = (c2.nTable = this, c2.oInit = t3, o2.push(c2), c2.api = new X(c2), c2.oInstance = 1 === E2.length ? E2 : r2.dataTable(), Q(t3), t3.aLengthMenu && !t3.iDisplayLength && (t3.iDisplayLength = Array.isArray(t3.aLengthMenu[0]) ? t3.aLengthMenu[0][0] : H.isPlainObject(t3.aLengthMenu[0]) ? t3.aLengthMenu[0].value : t3.aLengthMenu[0]), t3 = te(H.extend(true, {}, a2), t3), z(c2.oFeatures, t3, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), z(c2, t3, ["ajax", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "iStateDuration", "bSortCellsTop", "iTabIndex", "sDom", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", "caption", "layout", "orderDescReverse", "typeDetect", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]), z(c2.oScroll, t3, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]), z(c2.oLanguage, t3, "fnInfoCallback"), Y(c2, "aoDrawCallback", t3.fnDrawCallback), Y(c2, "aoStateSaveParams", t3.fnStateSaveParams), Y(c2, "aoStateLoadParams", t3.fnStateLoadParams), Y(c2, "aoStateLoaded", t3.fnStateLoaded), Y(c2, "aoRowCallback", t3.fnRowCallback), Y(c2, "aoRowCreatedCallback", t3.fnCreatedRow), Y(c2, "aoHeaderCallback", t3.fnHeaderCallback), Y(c2, "aoFooterCallback", t3.fnFooterCallback), Y(c2, "aoInitComplete", t3.fnInitComplete), Y(c2, "aoPreDrawCallback", t3.fnPreDrawCallback), c2.rowIdFn = U(t3.rowId), c2), d2 = (V.__browser || (f2 = {}, V.__browser = f2, p2 = H("<div/>").css({ position: "fixed", top: 0, left: -1 * W.pageXOffset, height: 1, width: 1, overflow: "hidden" }).append(H("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(H("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"), d2 = p2.children(), u2 = d2.children(), f2.barWidth = d2[0].offsetWidth - d2[0].clientWidth, f2.bScrollbarLeft = 1 !== Math.round(u2.offset().left), p2.remove()), H.extend(n2.oBrowser, V.__browser), n2.oScroll.iBarWidth = V.__browser.barWidth, c2.oClasses), f2 = (H.extend(d2, V.ext.classes, t3.oClasses), r2.addClass(d2.table), c2.oFeatures.bPaginate || (t3.iDisplayStart = 0), void 0 === c2.iInitDisplayStart && (c2.iInitDisplayStart = t3.iDisplayStart, c2._iDisplayStart = t3.iDisplayStart), t3.iDeferLoading), h2 = (null !== f2 && (c2.deferLoading = true, u2 = Array.isArray(f2), c2._iRecordsDisplay = u2 ? f2[0] : f2, c2._iRecordsTotal = u2 ? f2[1] : f2), []), p2 = this.getElementsByTagName("thead"), n2 = At(c2, p2[0]);
        if (t3.aoColumns) h2 = t3.aoColumns;
        else if (n2.length) for (R2 = n2[e2 = 0].length; e2 < R2; e2++) h2.push(null);
        for (e2 = 0, R2 = h2.length; e2 < R2; e2++) tt(c2);
        var g2, v2, m2, b2, y2, D2, x2, S2 = c2, w2 = t3.aoColumnDefs, T2 = h2, _2 = n2, C2 = function(t4, e3) {
          et(c2, t4, e3);
        }, L2 = S2.aoColumns;
        if (T2) for (g2 = 0, v2 = T2.length; g2 < v2; g2++) T2[g2] && T2[g2].name && (L2[g2].sName = T2[g2].name);
        if (w2) for (g2 = w2.length - 1; 0 <= g2; g2--) {
          var I2 = void 0 !== (x2 = w2[g2]).target ? x2.target : void 0 !== x2.targets ? x2.targets : x2.aTargets;
          for (Array.isArray(I2) || (I2 = [I2]), m2 = 0, b2 = I2.length; m2 < b2; m2++) {
            var A2 = I2[m2];
            if ("number" == typeof A2 && 0 <= A2) {
              for (; L2.length <= A2; ) tt(S2);
              C2(A2, x2);
            } else if ("number" == typeof A2 && A2 < 0) C2(L2.length + A2, x2);
            else if ("string" == typeof A2) for (y2 = 0, D2 = L2.length; y2 < D2; y2++) "_all" === A2 ? C2(y2, x2) : -1 !== A2.indexOf(":name") ? L2[y2].sName === A2.replace(":name", "") && C2(y2, x2) : _2.forEach(function(t4) {
              t4[y2] && (t4 = H(t4[y2].cell), A2.match(/^[a-z][\w-]*$/i) && (A2 = "." + A2), t4.is(A2)) && C2(y2, x2);
            });
          }
        }
        if (T2) for (g2 = 0, v2 = T2.length; g2 < v2; g2++) C2(g2, T2[g2]);
        var F2, n2 = r2.children("tbody").find("tr").eq(0), N2 = (n2.length && (F2 = function(t4, e3) {
          return null !== t4.getAttribute("data-" + e3) ? e3 : null;
        }, H(n2[0]).children("th, td").each(function(t4, e3) {
          var n3, a3 = c2.aoColumns[t4];
          a3 || $(c2, 0, "Incorrect column count", 18), a3.mData === t4 && (n3 = F2(e3, "sort") || F2(e3, "order"), e3 = F2(e3, "filter") || F2(e3, "search"), null === n3 && null === e3 || (a3.mData = { _: t4 + ".display", sort: null !== n3 ? t4 + ".@data-" + n3 : void 0, type: null !== n3 ? t4 + ".@data-" + n3 : void 0, filter: null !== e3 ? t4 + ".@data-" + e3 : void 0 }, a3._isArrayHost = true, et(c2, t4)));
        })), Y(c2, "aoDrawCallback", Qt), c2.oFeatures);
        if (t3.bStateSave && (N2.bStateSave = true), void 0 === t3.aaSorting) for (var j2 = c2.aaSorting, e2 = 0, R2 = j2.length; e2 < R2; e2++) j2[e2][1] = c2.aoColumns[e2].asSorting[0];
        Zt(c2), Y(c2, "aoDrawCallback", function() {
          (c2.bSorted || "ssp" === J(c2) || N2.bDeferRender) && Zt(c2);
        });
        var n2 = r2.children("caption"), n2 = (c2.caption && (n2 = 0 === n2.length ? H("<caption/>").appendTo(r2) : n2).html(c2.caption), n2.length && (n2[0]._captionSide = n2.css("caption-side"), c2.captionNode = n2[0]), 0 === p2.length && (p2 = H("<thead/>").appendTo(r2)), c2.nTHead = p2[0], H("tr", p2).addClass(d2.thead.row), r2.children("tbody")), n2 = (0 === n2.length && (n2 = H("<tbody/>").insertAfter(p2)), c2.nTBody = n2[0], r2.children("tfoot")), O2 = (0 === n2.length && (n2 = H("<tfoot/>").appendTo(r2)), c2.nTFoot = n2[0], H("tr", n2).addClass(d2.tfoot.row), c2.aiDisplay = c2.aiDisplayMaster.slice(), c2.bInitialised = true, c2.oLanguage);
        H.extend(true, O2, t3.oLanguage), O2.sUrl ? H.ajax({ dataType: "json", url: O2.sUrl, success: function(t4) {
          B(a2.oLanguage, t4), H.extend(true, O2, t4, c2.oInit.oLanguage), G(c2, null, "i18n", [c2], true), Mt(c2);
        }, error: function() {
          $(c2, 0, "i18n file loading error", 21), Mt(c2);
        } }) : (G(c2, null, "i18n", [c2], true), Mt(c2));
      }
    }), E2 = null, this);
  }, g = (V.ext = C = { buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], features: {}, search: [], selector: { cell: [], column: [], row: [] }, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { className: {}, detect: [], render: {}, search: {}, order: {} }, _unique: 0, fnVersionCheck: V.fnVersionCheck, iApiIndex: 0, sVersion: V.version }, H.extend(C, { afnFiltering: C.search, aTypes: C.type.detect, ofnSearch: C.type.search, oSort: C.type.order, afnSortData: C.order, aoFeatures: C.feature, oStdClasses: C.classes, oPagination: C.pager }), H.extend(V.ext.classes, { container: "dt-container", empty: { row: "dt-empty" }, info: { container: "dt-info" }, layout: { row: "dt-layout-row", cell: "dt-layout-cell", tableRow: "dt-layout-table", tableCell: "", start: "dt-layout-start", end: "dt-layout-end", full: "dt-layout-full" }, length: { container: "dt-length", select: "dt-input" }, order: { canAsc: "dt-orderable-asc", canDesc: "dt-orderable-desc", isAsc: "dt-ordering-asc", isDesc: "dt-ordering-desc", none: "dt-orderable-none", position: "sorting_" }, processing: { container: "dt-processing" }, scrolling: { body: "dt-scroll-body", container: "dt-scroll", footer: { self: "dt-scroll-foot", inner: "dt-scroll-footInner" }, header: { self: "dt-scroll-head", inner: "dt-scroll-headInner" } }, search: { container: "dt-search", input: "dt-input" }, table: "dataTable", tbody: { cell: "", row: "" }, thead: { cell: "", row: "" }, tfoot: { cell: "", row: "" }, paging: { active: "current", button: "dt-paging-button", container: "dt-paging", disabled: "disabled", nav: "" } }), {}), F = /[\r\n\u2028]/g, N = /<([^>]*>)/g, j = Math.pow(2, 28), R = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/, O = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"), P = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, T = function(t2) {
    return !t2 || true === t2 || "-" === t2;
  }, E = function(t2, e2) {
    return g[e2] || (g[e2] = new RegExp(Pt(e2), "g")), "string" == typeof t2 && "." !== e2 ? t2.replace(/\./g, "").replace(g[e2], ".") : t2;
  }, m = function(t2, e2, n2) {
    var a2 = [], r2 = 0, o2 = t2.length;
    if (void 0 !== n2) for (; r2 < o2; r2++) t2[r2] && t2[r2][e2] && a2.push(t2[r2][e2][n2]);
    else for (; r2 < o2; r2++) t2[r2] && a2.push(t2[r2][e2]);
    return a2;
  }, L = function(t2) {
    if (!t2 || "string" != typeof t2) return t2;
    if (t2.length > j) throw new Error("Exceeded max str len");
    var e2;
    for (t2 = t2.replace(N, ""); (t2 = (e2 = t2).replace(/<script/i, "")) !== e2; ) ;
    return e2;
  }, u = function(t2) {
    return "string" == typeof (t2 = Array.isArray(t2) ? t2.join(",") : t2) ? t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t2;
  }, k = function(t2, e2) {
    var n2;
    return "string" != typeof t2 ? t2 : (n2 = t2.normalize ? t2.normalize("NFD") : t2).length !== t2.length ? (true === e2 ? t2 + " " : "") + n2.replace(/[\u0300-\u036f]/g, "") : n2;
  }, x = function(t2) {
    if (Array.from && Set) return Array.from(new Set(t2));
    if (function(t3) {
      if (!(t3.length < 2)) for (var e3 = t3.slice().sort(), n3 = e3[0], a3 = 1, r3 = e3.length; a3 < r3; a3++) {
        if (e3[a3] === n3) return false;
        n3 = e3[a3];
      }
      return true;
    }(t2)) return t2.slice();
    var e2, n2, a2, r2 = [], o2 = t2.length, i2 = 0;
    t: for (n2 = 0; n2 < o2; n2++) {
      for (e2 = t2[n2], a2 = 0; a2 < i2; a2++) if (r2[a2] === e2) continue t;
      r2.push(e2), i2++;
    }
    return r2;
  }, M = function(t2, e2) {
    if (Array.isArray(e2)) for (var n2 = 0; n2 < e2.length; n2++) M(t2, e2[n2]);
    else t2.push(e2);
    return t2;
  };
  function y(e2, t2) {
    t2 && t2.split(" ").forEach(function(t3) {
      t3 && e2.classList.add(t3);
    });
  }
  function Z(e2) {
    var n2, a2, r2 = {};
    H.each(e2, function(t2) {
      (n2 = t2.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n2[1] + " ") && (a2 = t2.replace(n2[0], n2[2].toLowerCase()), r2[a2] = t2, "o" === n2[1]) && Z(e2[t2]);
    }), e2._hungarianMap = r2;
  }
  function B(e2, n2, a2) {
    var r2;
    e2._hungarianMap || Z(e2), H.each(n2, function(t2) {
      void 0 === (r2 = e2._hungarianMap[t2]) || !a2 && void 0 !== n2[r2] || ("o" === r2.charAt(0) ? (n2[r2] || (n2[r2] = {}), H.extend(true, n2[r2], n2[t2]), B(e2[r2], n2[r2], a2)) : n2[r2] = n2[t2]);
    });
  }
  V.util = { diacritics: function(t2, e2) {
    if ("function" != typeof t2) return k(t2, e2);
    k = t2;
  }, debounce: function(n2, a2) {
    var r2;
    return function() {
      var t2 = this, e2 = arguments;
      clearTimeout(r2), r2 = setTimeout(function() {
        n2.apply(t2, e2);
      }, a2 || 250);
    };
  }, throttle: function(a2, t2) {
    var r2, o2, i2 = void 0 !== t2 ? t2 : 200;
    return function() {
      var t3 = this, e2 = +/* @__PURE__ */ new Date(), n2 = arguments;
      r2 && e2 < r2 + i2 ? (clearTimeout(o2), o2 = setTimeout(function() {
        r2 = void 0, a2.apply(t3, n2);
      }, i2)) : (r2 = e2, a2.apply(t3, n2));
    };
  }, escapeRegex: function(t2) {
    return t2.replace(O, "\\$1");
  }, set: function(a2) {
    var f2;
    return H.isPlainObject(a2) ? V.util.set(a2._) : null === a2 ? function() {
    } : "function" == typeof a2 ? function(t2, e2, n2) {
      a2(t2, "set", e2, n2);
    } : "string" != typeof a2 || -1 === a2.indexOf(".") && -1 === a2.indexOf("[") && -1 === a2.indexOf("(") ? function(t2, e2) {
      t2[a2] = e2;
    } : (f2 = function(t2, e2, n2) {
      for (var a3, r2, o2, i2, l2 = gt(n2), n2 = l2[l2.length - 1], s2 = 0, u2 = l2.length - 1; s2 < u2; s2++) {
        if ("__proto__" === l2[s2] || "constructor" === l2[s2]) throw new Error("Cannot set prototype values");
        if (a3 = l2[s2].match(pt), r2 = l2[s2].match(p), a3) {
          if (l2[s2] = l2[s2].replace(pt, ""), t2[l2[s2]] = [], (a3 = l2.slice()).splice(0, s2 + 1), i2 = a3.join("."), Array.isArray(e2)) for (var c2 = 0, d2 = e2.length; c2 < d2; c2++) f2(o2 = {}, e2[c2], i2), t2[l2[s2]].push(o2);
          else t2[l2[s2]] = e2;
          return;
        }
        r2 && (l2[s2] = l2[s2].replace(p, ""), t2 = t2[l2[s2]](e2)), null !== t2[l2[s2]] && void 0 !== t2[l2[s2]] || (t2[l2[s2]] = {}), t2 = t2[l2[s2]];
      }
      n2.match(p) ? t2[n2.replace(p, "")](e2) : t2[n2.replace(pt, "")] = e2;
    }, function(t2, e2) {
      return f2(t2, e2, a2);
    });
  }, get: function(r2) {
    var o2, f2;
    return H.isPlainObject(r2) ? (o2 = {}, H.each(r2, function(t2, e2) {
      e2 && (o2[t2] = V.util.get(e2));
    }), function(t2, e2, n2, a2) {
      var r3 = o2[e2] || o2._;
      return void 0 !== r3 ? r3(t2, e2, n2, a2) : t2;
    }) : null === r2 ? function(t2) {
      return t2;
    } : "function" == typeof r2 ? function(t2, e2, n2, a2) {
      return r2(t2, e2, n2, a2);
    } : "string" != typeof r2 || -1 === r2.indexOf(".") && -1 === r2.indexOf("[") && -1 === r2.indexOf("(") ? function(t2) {
      return t2[r2];
    } : (f2 = function(t2, e2, n2) {
      var a2, r3, o3;
      if ("" !== n2) for (var i2 = gt(n2), l2 = 0, s2 = i2.length; l2 < s2; l2++) {
        if (d2 = i2[l2].match(pt), a2 = i2[l2].match(p), d2) {
          if (i2[l2] = i2[l2].replace(pt, ""), "" !== i2[l2] && (t2 = t2[i2[l2]]), r3 = [], i2.splice(0, l2 + 1), o3 = i2.join("."), Array.isArray(t2)) for (var u2 = 0, c2 = t2.length; u2 < c2; u2++) r3.push(f2(t2[u2], e2, o3));
          var d2 = d2[0].substring(1, d2[0].length - 1);
          t2 = "" === d2 ? r3 : r3.join(d2);
          break;
        }
        if (a2) i2[l2] = i2[l2].replace(p, ""), t2 = t2[i2[l2]]();
        else {
          if (null === t2 || null === t2[i2[l2]]) return null;
          if (void 0 === t2 || void 0 === t2[i2[l2]]) return;
          t2 = t2[i2[l2]];
        }
      }
      return t2;
    }, function(t2, e2) {
      return f2(t2, e2, r2);
    });
  }, stripHtml: function(t2) {
    var e2 = typeof t2;
    if ("function" != e2) return "string" == e2 ? L(t2) : t2;
    L = t2;
  }, escapeHtml: function(t2) {
    var e2 = typeof t2;
    if ("function" != e2) return "string" == e2 || Array.isArray(t2) ? u(t2) : t2;
    u = t2;
  }, unique: x };
  var r = function(t2, e2, n2) {
    void 0 !== t2[e2] && (t2[n2] = t2[e2]);
  };
  function Q(t2) {
    r(t2, "ordering", "bSort"), r(t2, "orderMulti", "bSortMulti"), r(t2, "orderClasses", "bSortClasses"), r(t2, "orderCellsTop", "bSortCellsTop"), r(t2, "order", "aaSorting"), r(t2, "orderFixed", "aaSortingFixed"), r(t2, "paging", "bPaginate"), r(t2, "pagingType", "sPaginationType"), r(t2, "pageLength", "iDisplayLength"), r(t2, "searching", "bFilter"), "boolean" == typeof t2.sScrollX && (t2.sScrollX = t2.sScrollX ? "100%" : ""), "boolean" == typeof t2.scrollX && (t2.scrollX = t2.scrollX ? "100%" : "");
    var e2 = t2.aoSearchCols;
    if (e2) for (var n2 = 0, a2 = e2.length; n2 < a2; n2++) e2[n2] && B(V.models.oSearch, e2[n2]);
    t2.serverSide && !t2.searchDelay && (t2.searchDelay = 400);
  }
  function K(t2) {
    r(t2, "orderable", "bSortable"), r(t2, "orderData", "aDataSort"), r(t2, "orderSequence", "asSorting"), r(t2, "orderDataType", "sortDataType");
    var e2 = t2.aDataSort;
    "number" != typeof e2 || Array.isArray(e2) || (t2.aDataSort = [e2]);
  }
  function tt(t2) {
    var e2 = V.defaults.column, n2 = t2.aoColumns.length, e2 = H.extend({}, V.models.oColumn, e2, { aDataSort: e2.aDataSort || [n2], mData: e2.mData || n2, idx: n2, searchFixed: {}, colEl: H("<col>").attr("data-dt-column", n2) }), e2 = (t2.aoColumns.push(e2), t2.aoPreSearchCols);
    e2[n2] = H.extend({}, V.models.oSearch, e2[n2]);
  }
  function et(t2, e2, n2) {
    function a2(t3) {
      return "string" == typeof t3 && -1 !== t3.indexOf("@");
    }
    var r2 = t2.aoColumns[e2], o2 = (null != n2 && (K(n2), B(V.defaults.column, n2, true), void 0 === n2.mDataProp || n2.mData || (n2.mData = n2.mDataProp), n2.sType && (r2._sManualType = n2.sType), n2.className && !n2.sClass && (n2.sClass = n2.className), e2 = r2.sClass, H.extend(r2, n2), z(r2, n2, "sWidth", "sWidthOrig"), e2 !== r2.sClass && (r2.sClass = e2 + " " + r2.sClass), void 0 !== n2.iDataSort && (r2.aDataSort = [n2.iDataSort]), z(r2, n2, "aDataSort")), r2.mData), i2 = U(o2);
    r2.mRender && Array.isArray(r2.mRender) && (n2 = (e2 = r2.mRender.slice()).shift(), r2.mRender = V.render[n2].apply(W, e2)), r2._render = r2.mRender ? U(r2.mRender) : null;
    r2._bAttrSrc = H.isPlainObject(o2) && (a2(o2.sort) || a2(o2.type) || a2(o2.filter)), r2._setter = null, r2.fnGetData = function(t3, e3, n3) {
      var a3 = i2(t3, e3, void 0, n3);
      return r2._render && e3 ? r2._render(a3, e3, t3, n3) : a3;
    }, r2.fnSetData = function(t3, e3, n3) {
      return v(o2)(t3, e3, n3);
    }, "number" == typeof o2 || r2._isArrayHost || (t2._rowReadObject = true), t2.oFeatures.bSort || (r2.bSortable = false);
  }
  function nt(t2) {
    var e2 = t2;
    if (e2.oFeatures.bAutoWidth) {
      var n2, a2, r2 = e2.nTable, o2 = e2.aoColumns, i2 = e2.oScroll, l2 = i2.sY, s2 = i2.sX, i2 = i2.sXInner, u2 = it(e2, "bVisible"), c2 = r2.getAttribute("width"), d2 = r2.parentNode, f2 = r2.style.width, f2 = (f2 || c2 || (r2.style.width = "100%", f2 = "100%"), f2 && -1 !== f2.indexOf("%") && (c2 = f2), G(e2, null, "column-calc", { visible: u2 }, false), H(r2.cloneNode()).css("visibility", "hidden").removeAttr("id")), h2 = (f2.append("<tbody>"), H("<tr/>").appendTo(f2.find("tbody")));
      for (f2.append(H(e2.nTHead).clone()).append(H(e2.nTFoot).clone()), f2.find("tfoot th, tfoot td").css("width", ""), f2.find("thead th, thead td").each(function() {
        var t3 = ct(e2, this, true, false);
        t3 ? (this.style.width = t3, s2 && H(this).append(H("<div/>").css({ width: t3, margin: 0, padding: 0, border: 0, height: 1 }))) : this.style.width = "";
      }), n2 = 0; n2 < u2.length; n2++) {
        p2 = u2[n2], a2 = o2[p2];
        var p2 = function(t3, e3) {
          var n3 = t3.aoColumns[e3];
          if (!n3.maxLenString) {
            for (var a3, r3 = "", o3 = -1, i3 = 0, l3 = t3.aiDisplayMaster.length; i3 < l3; i3++) {
              var s3 = t3.aiDisplayMaster[i3], s3 = Dt(t3, s3)[e3], s3 = s3 && "object" == typeof s3 && s3.nodeType ? s3.innerHTML : s3 + "";
              s3 = s3.replace(/id=".*?"/g, "").replace(/name=".*?"/g, ""), (a3 = L(s3).replace(/&nbsp;/g, " ")).length > o3 && (r3 = s3, o3 = a3.length);
            }
            n3.maxLenString = r3;
          }
          return n3.maxLenString;
        }(e2, p2), g2 = C.type.className[a2.sType], v2 = p2 + a2.sContentPadding, p2 = -1 === p2.indexOf("<") ? _.createTextNode(v2) : v2;
        H("<td/>").addClass(g2).addClass(a2.sClass).append(p2).appendTo(h2);
      }
      H("[name]", f2).removeAttr("name");
      var m2 = H("<div/>").css(s2 || l2 ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(f2).appendTo(d2), b2 = (s2 && i2 ? f2.width(i2) : s2 ? (f2.css("width", "auto"), f2.removeAttr("width"), f2.width() < d2.clientWidth && c2 && f2.width(d2.clientWidth)) : l2 ? f2.width(d2.clientWidth) : c2 && f2.width(c2), 0), y2 = f2.find("tbody tr").eq(0).children();
      for (n2 = 0; n2 < u2.length; n2++) {
        var D2 = y2[n2].getBoundingClientRect().width;
        b2 += D2, o2[u2[n2]].sWidth = I(D2);
      }
      r2.style.width = I(b2), m2.remove(), c2 && (r2.style.width = I(c2)), !c2 && !s2 || e2._reszEvt || (H(W).on("resize.DT-" + e2.sInstance, V.util.throttle(function() {
        e2.bDestroying || nt(e2);
      })), e2._reszEvt = true);
    }
    for (var x2 = t2, S2 = x2.aoColumns, w2 = 0; w2 < S2.length; w2++) {
      var T2 = ct(x2, [w2], false, false);
      S2[w2].colEl.css("width", T2);
    }
    i2 = t2.oScroll;
    "" === i2.sY && "" === i2.sX || qt(t2), G(t2, null, "column-sizing", [t2]);
  }
  function at(t2, e2) {
    t2 = it(t2, "bVisible");
    return "number" == typeof t2[e2] ? t2[e2] : null;
  }
  function rt(t2, e2) {
    t2 = it(t2, "bVisible").indexOf(e2);
    return -1 !== t2 ? t2 : null;
  }
  function ot(t2) {
    var e2 = t2.aoHeader, n2 = t2.aoColumns, a2 = 0;
    if (e2.length) for (var r2 = 0, o2 = e2[0].length; r2 < o2; r2++) n2[r2].bVisible && "none" !== H(e2[0][r2].cell).css("display") && a2++;
    return a2;
  }
  function it(t2, n2) {
    var a2 = [];
    return t2.aoColumns.map(function(t3, e2) {
      t3[n2] && a2.push(e2);
    }), a2;
  }
  function lt(t2, e2) {
    return true === e2 ? t2._name : e2;
  }
  function st(t2) {
    for (var e2, n2, a2, r2, o2, i2, l2 = t2.aoColumns, s2 = t2.aoData, u2 = V.ext.type.detect, c2 = 0, d2 = l2.length; c2 < d2; c2++) {
      if (i2 = [], !(o2 = l2[c2]).sType && o2._sManualType) o2.sType = o2._sManualType;
      else if (!o2.sType) {
        if (!t2.typeDetect) return;
        for (e2 = 0, n2 = u2.length; e2 < n2; e2++) {
          var f2 = u2[e2], h2 = f2.oneOf, p2 = f2.allOf || f2, g2 = f2.init, v2 = false, m2 = null;
          if (g2 && (m2 = lt(f2, g2(t2, o2, c2)))) {
            o2.sType = m2;
            break;
          }
          for (a2 = 0, r2 = s2.length; a2 < r2; a2++) if (s2[a2]) {
            if (void 0 === i2[a2] && (i2[a2] = q(t2, a2, c2, "type")), h2 && !v2 && (v2 = lt(f2, h2(i2[a2], t2))), !(m2 = lt(f2, p2(i2[a2], t2))) && e2 !== u2.length - 3) break;
            if ("html" === m2 && !T(i2[a2])) break;
          }
          if (h2 && v2 && m2 || !h2 && m2) {
            o2.sType = m2;
            break;
          }
        }
        o2.sType || (o2.sType = "string");
      }
      var b2 = C.type.className[o2.sType], b2 = (b2 && (ut(t2.aoHeader, c2, b2), ut(t2.aoFooter, c2, b2)), C.type.render[o2.sType]);
      if (b2 && !o2._render) {
        o2._render = V.util.get(b2), y2 = w2 = S2 = x2 = D2 = void 0;
        for (var y2, D2 = t2, x2 = c2, S2 = D2.aoData, w2 = 0; w2 < S2.length; w2++) S2[w2].nTr && (y2 = q(D2, w2, x2, "display"), S2[w2].displayData[x2] = y2, ht(S2[w2].anCells[x2], y2));
      }
    }
  }
  function ut(t2, e2, n2) {
    t2.forEach(function(t3) {
      t3[e2] && t3[e2].unique && y(t3[e2].cell, n2);
    });
  }
  function ct(t2, e2, n2, a2) {
    Array.isArray(e2) || (e2 = dt(e2));
    for (var r2, o2 = 0, i2 = t2.aoColumns, l2 = 0, s2 = e2.length; l2 < s2; l2++) {
      var u2 = i2[e2[l2]], c2 = n2 ? u2.sWidthOrig : u2.sWidth;
      if (a2 || false !== u2.bVisible) {
        if (null == c2) return null;
        "number" == typeof c2 ? (r2 = "px", o2 += c2) : (u2 = c2.match(/([\d\.]+)([^\d]*)/)) && (o2 += +u2[1], r2 = 3 === u2.length ? u2[2] : "px");
      }
    }
    return o2 + r2;
  }
  function dt(t2) {
    t2 = H(t2).closest("[data-dt-column]").attr("data-dt-column");
    return t2 ? t2.split(",").map(function(t3) {
      return +t3;
    }) : [];
  }
  function D(t2, e2, n2, a2) {
    for (var r2 = t2.aoData.length, o2 = H.extend(true, {}, V.models.oRow, { src: n2 ? "dom" : "data", idx: r2 }), i2 = (o2._aData = e2, t2.aoData.push(o2), t2.aoColumns), l2 = 0, s2 = i2.length; l2 < s2; l2++) i2[l2].sType = null;
    t2.aiDisplayMaster.push(r2);
    e2 = t2.rowIdFn(e2);
    return void 0 !== e2 && (t2.aIds[e2] = o2), !n2 && t2.oFeatures.bDeferRender || xt(t2, r2, n2, a2), r2;
  }
  function ft(n2, t2) {
    var a2;
    return (t2 = t2 instanceof H ? t2 : H(t2)).map(function(t3, e2) {
      return a2 = yt(n2, e2), D(n2, a2.data, e2, a2.cells);
    });
  }
  function q(t2, e2, n2, a2) {
    "search" === a2 ? a2 = "filter" : "order" === a2 && (a2 = "sort");
    var r2 = t2.aoData[e2];
    if (r2) {
      var o2 = t2.iDraw, i2 = t2.aoColumns[n2], r2 = r2._aData, l2 = i2.sDefaultContent, s2 = i2.fnGetData(r2, a2, { settings: t2, row: e2, col: n2 });
      if (void 0 === (s2 = "display" !== a2 && s2 && "object" == typeof s2 && s2.nodeName ? s2.innerHTML : s2)) return t2.iDrawError != o2 && null === l2 && ($(t2, 0, "Requested unknown parameter " + ("function" == typeof i2.mData ? "{function}" : "'" + i2.mData + "'") + " for row " + e2 + ", column " + n2, 4), t2.iDrawError = o2), l2;
      if (s2 !== r2 && null !== s2 || null === l2 || void 0 === a2) {
        if ("function" == typeof s2) return s2.call(r2);
      } else s2 = l2;
      return null === s2 && "display" === a2 ? "" : s2 = "filter" === a2 && (e2 = V.ext.type.search)[i2.sType] ? e2[i2.sType](s2) : s2;
    }
  }
  function ht(t2, e2) {
    e2 && "object" == typeof e2 && e2.nodeName ? H(t2).empty().append(e2) : t2.innerHTML = e2;
  }
  var pt = /\[.*?\]$/, p = /\(\)$/;
  function gt(t2) {
    return (t2.match(/(\\.|[^.])+/g) || [""]).map(function(t3) {
      return t3.replace(/\\\./g, ".");
    });
  }
  var U = V.util.get, v = V.util.set;
  function vt(t2) {
    return m(t2.aoData, "_aData");
  }
  function mt(t2) {
    t2.aoData.length = 0, t2.aiDisplayMaster.length = 0, t2.aiDisplay.length = 0, t2.aIds = {};
  }
  function bt(t2, e2, n2, a2) {
    var r2, o2, i2 = t2.aoData[e2];
    if (i2._aSortData = null, i2._aFilterData = null, i2.displayData = null, "dom" !== n2 && (n2 && "auto" !== n2 || "dom" !== i2.src)) {
      var l2 = i2.anCells, s2 = Dt(t2, e2);
      if (l2) if (void 0 !== a2) ht(l2[a2], s2[a2]);
      else for (r2 = 0, o2 = l2.length; r2 < o2; r2++) ht(l2[r2], s2[r2]);
    } else i2._aData = yt(t2, i2, a2, void 0 === a2 ? void 0 : i2._aData).data;
    var u2 = t2.aoColumns;
    if (void 0 !== a2) u2[a2].sType = null, u2[a2].maxLenString = null;
    else {
      for (r2 = 0, o2 = u2.length; r2 < o2; r2++) u2[r2].sType = null, u2[r2].maxLenString = null;
      St(t2, i2);
    }
  }
  function yt(t2, e2, n2, a2) {
    function r2(t3, e3) {
      var n3;
      "string" == typeof t3 && -1 !== (n3 = t3.indexOf("@")) && (n3 = t3.substring(n3 + 1), v(t3)(a2, e3.getAttribute(n3)));
    }
    function o2(t3) {
      void 0 !== n2 && n2 !== d2 || (l2 = f2[d2], s2 = t3.innerHTML.trim(), l2 && l2._bAttrSrc ? (v(l2.mData._)(a2, s2), r2(l2.mData.sort, t3), r2(l2.mData.type, t3), r2(l2.mData.filter, t3)) : h2 ? (l2._setter || (l2._setter = v(l2.mData)), l2._setter(a2, s2)) : a2[d2] = s2), d2++;
    }
    var i2, l2, s2, u2 = [], c2 = e2.firstChild, d2 = 0, f2 = t2.aoColumns, h2 = t2._rowReadObject;
    a2 = void 0 !== a2 ? a2 : h2 ? {} : [];
    if (c2) for (; c2; ) "TD" != (i2 = c2.nodeName.toUpperCase()) && "TH" != i2 || (o2(c2), u2.push(c2)), c2 = c2.nextSibling;
    else for (var p2 = 0, g2 = (u2 = e2.anCells).length; p2 < g2; p2++) o2(u2[p2]);
    var e2 = e2.firstChild ? e2 : e2.nTr;
    return e2 && (e2 = e2.getAttribute("id")) && v(t2.rowId)(a2, e2), { data: a2, cells: u2 };
  }
  function Dt(t2, e2) {
    var n2 = t2.aoData[e2], a2 = t2.aoColumns;
    if (!n2.displayData) {
      n2.displayData = [];
      for (var r2 = 0, o2 = a2.length; r2 < o2; r2++) n2.displayData.push(q(t2, e2, r2, "display"));
    }
    return n2.displayData;
  }
  function xt(t2, e2, n2, a2) {
    var r2, o2, i2, l2, s2, u2, c2 = t2.aoData[e2], d2 = c2._aData, f2 = [], h2 = t2.oClasses.tbody.row;
    if (null === c2.nTr) {
      for (r2 = n2 || _.createElement("tr"), c2.nTr = r2, c2.anCells = f2, y(r2, h2), r2._DT_RowIndex = e2, St(t2, c2), l2 = 0, s2 = t2.aoColumns.length; l2 < s2; l2++) {
        i2 = t2.aoColumns[l2], (o2 = (u2 = !n2 || !a2[l2]) ? _.createElement(i2.sCellType) : a2[l2]) || $(t2, 0, "Incorrect column count", 18), o2._DT_CellIndex = { row: e2, column: l2 }, f2.push(o2);
        var p2 = Dt(t2, e2);
        !u2 && (!i2.mRender && i2.mData === l2 || H.isPlainObject(i2.mData) && i2.mData._ === l2 + ".display") || ht(o2, p2[l2]), y(o2, i2.sClass), i2.bVisible && u2 ? r2.appendChild(o2) : i2.bVisible || u2 || o2.parentNode.removeChild(o2), i2.fnCreatedCell && i2.fnCreatedCell.call(t2.oInstance, o2, q(t2, e2, l2), d2, e2, l2);
      }
      G(t2, "aoRowCreatedCallback", "row-created", [r2, d2, e2, f2]);
    } else y(c2.nTr, h2);
  }
  function St(t2, e2) {
    var n2 = e2.nTr, a2 = e2._aData;
    n2 && ((t2 = t2.rowIdFn(a2)) && (n2.id = t2), a2.DT_RowClass && (t2 = a2.DT_RowClass.split(" "), e2.__rowc = e2.__rowc ? x(e2.__rowc.concat(t2)) : t2, H(n2).removeClass(e2.__rowc.join(" ")).addClass(a2.DT_RowClass)), a2.DT_RowAttr && H(n2).attr(a2.DT_RowAttr), a2.DT_RowData) && H(n2).data(a2.DT_RowData);
  }
  function wt(t2, e2) {
    var n2, a2 = t2.oClasses, r2 = t2.aoColumns, o2 = "header" === e2 ? t2.nTHead : t2.nTFoot, i2 = "header" === e2 ? "sTitle" : e2;
    if (o2) {
      if (("header" === e2 || m(t2.aoColumns, i2).join("")) && 1 === (n2 = (n2 = H("tr", o2)).length ? n2 : H("<tr/>").appendTo(o2)).length) for (var l2 = H("td, th", n2).length, s2 = r2.length; l2 < s2; l2++) H("<th/>").html(r2[l2][i2] || "").appendTo(n2);
      var u2 = At(t2, o2, true);
      "header" === e2 ? t2.aoHeader = u2 : t2.aoFooter = u2, H(o2).children("tr").children("th, td").each(function() {
        ae(t2, e2)(t2, H(this), a2);
      });
    }
  }
  function Tt(t2, e2, n2) {
    var a2, r2, o2, i2, l2, s2 = [], u2 = [], c2 = t2.aoColumns, t2 = c2.length;
    if (e2) {
      for (n2 = n2 || h(t2).filter(function(t3) {
        return c2[t3].bVisible;
      }), a2 = 0; a2 < e2.length; a2++) s2[a2] = e2[a2].slice().filter(function(t3, e3) {
        return n2.includes(e3);
      }), u2.push([]);
      for (a2 = 0; a2 < s2.length; a2++) for (r2 = 0; r2 < s2[a2].length; r2++) if (l2 = i2 = 1, void 0 === u2[a2][r2]) {
        for (o2 = s2[a2][r2].cell; void 0 !== s2[a2 + i2] && s2[a2][r2].cell == s2[a2 + i2][r2].cell; ) u2[a2 + i2][r2] = null, i2++;
        for (; void 0 !== s2[a2][r2 + l2] && s2[a2][r2].cell == s2[a2][r2 + l2].cell; ) {
          for (var d2 = 0; d2 < i2; d2++) u2[a2 + d2][r2 + l2] = null;
          l2++;
        }
        var f2 = H("span.dt-column-title", o2);
        u2[a2][r2] = { cell: o2, colspan: l2, rowspan: i2, title: (f2.length ? f2 : H(o2)).html() };
      }
      return u2;
    }
  }
  function _t(t2, e2) {
    for (var n2, a2, r2 = Tt(t2, e2), o2 = 0; o2 < e2.length; o2++) {
      if (n2 = e2[o2].row) for (; a2 = n2.firstChild; ) n2.removeChild(a2);
      for (var i2 = 0; i2 < r2[o2].length; i2++) {
        var l2 = r2[o2][i2];
        l2 && H(l2.cell).appendTo(n2).attr("rowspan", l2.rowspan).attr("colspan", l2.colspan);
      }
    }
  }
  function S(t2, e2) {
    if (r2 = "ssp" == J(s2 = t2), void 0 !== (i2 = s2.iInitDisplayStart) && -1 !== i2 && (s2._iDisplayStart = !r2 && i2 >= s2.fnRecordsDisplay() ? 0 : i2, s2.iInitDisplayStart = -1), -1 !== G(t2, "aoPreDrawCallback", "preDraw", [t2]).indexOf(false)) w(t2, false);
    else {
      var l2, n2 = [], a2 = 0, r2 = "ssp" == J(t2), o2 = t2.aiDisplay, i2 = t2._iDisplayStart, s2 = t2.fnDisplayEnd(), u2 = t2.aoColumns, c2 = H(t2.nTBody);
      if (t2.bDrawing = true, t2.deferLoading) t2.deferLoading = false, t2.iDraw++, w(t2, false);
      else if (r2) {
        if (!t2.bDestroying && !e2) return 0 === t2.iDraw && c2.empty().append(Ct(t2)), (l2 = t2).iDraw++, w(l2, true), void Ft(l2, function(e3) {
          function n3(t4, e4) {
            return "function" == typeof a3[t4][e4] ? "function" : a3[t4][e4];
          }
          var a3 = e3.aoColumns, t3 = e3.oFeatures, r3 = e3.oPreviousSearch, o3 = e3.aoPreSearchCols;
          return { draw: e3.iDraw, columns: a3.map(function(e4, t4) {
            return { data: n3(t4, "mData"), name: e4.sName, searchable: e4.bSearchable, orderable: e4.bSortable, search: { value: o3[t4].search, regex: o3[t4].regex, fixed: Object.keys(e4.searchFixed).map(function(t5) {
              return { name: t5, term: e4.searchFixed[t5].toString() };
            }) } };
          }), order: Gt(e3).map(function(t4) {
            return { column: t4.col, dir: t4.dir, name: n3(t4.col, "sName") };
          }), start: e3._iDisplayStart, length: t3.bPaginate ? e3._iDisplayLength : -1, search: { value: r3.search, regex: r3.regex, fixed: Object.keys(e3.searchFixed).map(function(t4) {
            return { name: t4, term: e3.searchFixed[t4].toString() };
          }) } };
        }(l2), function(t3) {
          var e3 = l2, n3 = Nt(e3, t3 = t3), a3 = jt(e3, "draw", t3), r3 = jt(e3, "recordsTotal", t3), t3 = jt(e3, "recordsFiltered", t3);
          if (void 0 !== a3) {
            if (+a3 < e3.iDraw) return;
            e3.iDraw = +a3;
          }
          n3 = n3 || [], mt(e3), e3._iRecordsTotal = parseInt(r3, 10), e3._iRecordsDisplay = parseInt(t3, 10);
          for (var o3 = 0, i3 = n3.length; o3 < i3; o3++) D(e3, n3[o3]);
          e3.aiDisplay = e3.aiDisplayMaster.slice(), st(e3), S(e3, true), Ht(e3), w(e3, false);
        });
      } else t2.iDraw++;
      if (0 !== o2.length) for (var d2 = r2 ? t2.aoData.length : s2, f2 = r2 ? 0 : i2; f2 < d2; f2++) {
        for (var h2 = o2[f2], p2 = t2.aoData[h2], g2 = (null === p2.nTr && xt(t2, h2), p2.nTr), v2 = 0; v2 < u2.length; v2++) {
          var m2 = u2[v2], b2 = p2.anCells[v2];
          y(b2, C.type.className[m2.sType]), y(b2, t2.oClasses.tbody.cell);
        }
        G(t2, "aoRowCallback", null, [g2, p2._aData, a2, f2, h2]), n2.push(g2), a2++;
      }
      else n2[0] = Ct(t2);
      G(t2, "aoHeaderCallback", "header", [H(t2.nTHead).children("tr")[0], vt(t2), i2, s2, o2]), G(t2, "aoFooterCallback", "footer", [H(t2.nTFoot).children("tr")[0], vt(t2), i2, s2, o2]), c2[0].replaceChildren ? c2[0].replaceChildren.apply(c2[0], n2) : (c2.children().detach(), c2.append(H(n2))), H(t2.nTableWrapper).toggleClass("dt-empty-footer", 0 === H("tr", t2.nTFoot).length), G(t2, "aoDrawCallback", "draw", [t2], true), t2.bSorted = false, t2.bFiltered = false, t2.bDrawing = false;
    }
  }
  function d(t2, e2, n2) {
    var a2 = t2.oFeatures, r2 = a2.bSort, a2 = a2.bFilter;
    void 0 !== n2 && true !== n2 || (st(t2), r2 && Jt(t2), a2 ? Rt(t2, t2.oPreviousSearch) : t2.aiDisplay = t2.aiDisplayMaster.slice()), true !== e2 && (t2._iDisplayStart = 0), t2._drawHold = e2, S(t2), t2._drawHold = false;
  }
  function Ct(t2) {
    var e2 = t2.oLanguage, n2 = e2.sZeroRecords, a2 = J(t2);
    return t2.iDraw < 1 && "ssp" === a2 || t2.iDraw <= 1 && "ajax" === a2 ? n2 = e2.sLoadingRecords : e2.sEmptyTable && 0 === t2.fnRecordsTotal() && (n2 = e2.sEmptyTable), H("<tr/>").append(H("<td />", { colSpan: ot(t2), class: t2.oClasses.empty.row }).html(n2))[0];
  }
  function Lt(t2, e2, r2) {
    var o2 = [];
    H.each(e2, function(t3, e3) {
      var n3, a2;
      null !== e3 && (n3 = (t3 = t3.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/))[2] ? +t3[2] : 0, a2 = t3[3] ? t3[3].toLowerCase() : "full", t3[1] === r2) && function t4(e4, n4, a3) {
        if (Array.isArray(a3)) for (var r3 = 0; r3 < a3.length; r3++) t4(e4, n4, a3[r3]);
        else {
          var o3 = e4[n4];
          H.isPlainObject(a3) ? a3.features ? (a3.rowId && (e4.id = a3.rowId), a3.rowClass && (e4.className = a3.rowClass), o3.id = a3.id, o3.className = a3.className, t4(e4, n4, a3.features)) : Object.keys(a3).map(function(t5) {
            o3.contents.push({ feature: t5, opts: a3[t5] });
          }) : o3.contents.push(a3);
        }
      }(function(t4, e4, n4) {
        for (var a3, r3 = 0; r3 < t4.length; r3++) if ((a3 = t4[r3]).rowNum === e4 && ("full" === n4 && a3.full || ("start" === n4 || "end" === n4) && (a3.start || a3.end))) return a3[n4] || (a3[n4] = { contents: [] }), a3;
        return (a3 = { rowNum: e4 })[n4] = { contents: [] }, t4.push(a3), a3;
      }(o2, n3, a2), a2, e3);
    }), o2.sort(function(t3, e3) {
      var n3 = t3.rowNum, a2 = e3.rowNum;
      return n3 === a2 ? (t3 = t3.full && !e3.full ? -1 : 1, "bottom" === r2 ? -1 * t3 : t3) : a2 - n3;
    }), "bottom" === r2 && o2.reverse();
    for (var n2 = 0; n2 < o2.length; n2++) delete o2[n2].rowNum, !function(o3, i2) {
      function l2(t4, e3) {
        return C.features[t4] || $(o3, 0, "Unknown feature: " + t4), C.features[t4].apply(this, [o3, e3]);
      }
      function t3(t4) {
        if (i2[t4]) for (var e3, n3 = i2[t4].contents, a2 = 0, r3 = n3.length; a2 < r3; a2++) n3[a2] && ("string" == typeof n3[a2] ? n3[a2] = l2(n3[a2], null) : H.isPlainObject(n3[a2]) ? n3[a2] = l2(n3[a2].feature, n3[a2].opts) : "function" == typeof n3[a2].node ? n3[a2] = n3[a2].node(o3) : "function" == typeof n3[a2] && (e3 = n3[a2](o3), n3[a2] = "function" == typeof e3.node ? e3.node() : e3));
      }
      t3("start"), t3("end"), t3("full");
    }(t2, o2[n2]);
    return o2;
  }
  function It(e2) {
    var a2, t2 = e2.oClasses, n2 = H(e2.nTable), r2 = H("<div/>").attr({ id: e2.sTableId + "_wrapper", class: t2.container }).insertBefore(n2);
    if (e2.nTableWrapper = r2[0], e2.sDom) for (var o2, i2, l2, s2, u2, c2, d2 = e2, t2 = e2.sDom, f2 = r2, h2 = t2.match(/(".*?")|('.*?')|./g), p2 = 0; p2 < h2.length; p2++) o2 = null, "<" == (i2 = h2[p2]) ? (l2 = H("<div/>"), "'" != (s2 = h2[p2 + 1])[0] && '"' != s2[0] || (s2 = s2.replace(/['"]/g, ""), u2 = "", -1 != s2.indexOf(".") ? (c2 = s2.split("."), u2 = c2[0], c2 = c2[1]) : "#" == s2[0] ? u2 = s2 : c2 = s2, l2.attr("id", u2.substring(1)).addClass(c2), p2++), f2.append(l2), f2 = l2) : ">" == i2 ? f2 = f2.parent() : "t" == i2 ? o2 = Bt(d2) : V.ext.feature.forEach(function(t3) {
      i2 == t3.cFeature && (o2 = t3.fnInit(d2));
    }), o2 && f2.append(o2);
    else {
      var n2 = Lt(e2, e2.layout, "top"), t2 = Lt(e2, e2.layout, "bottom"), g2 = ae(e2, "layout");
      n2.forEach(function(t3) {
        g2(e2, r2, t3);
      }), g2(e2, r2, { full: { table: true, contents: [Bt(e2)] } }), t2.forEach(function(t3) {
        g2(e2, r2, t3);
      });
    }
    var n2 = e2, t2 = n2.nTable, v2 = "" !== n2.oScroll.sX || "" !== n2.oScroll.sY;
    n2.oFeatures.bProcessing && (a2 = H("<div/>", { id: n2.sTableId + "_processing", class: n2.oClasses.processing.container, role: "status" }).html(n2.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>"), v2 ? a2.prependTo(H("div.dt-scroll", n2.nTableWrapper)) : a2.insertBefore(t2), H(t2).on("processing.dt.DT", function(t3, e3, n3) {
      a2.css("display", n3 ? "block" : "none");
    }));
  }
  function At(t2, e2, n2) {
    for (var a2, r2, o2, i2, l2, s2, u2 = t2.aoColumns, c2 = H(e2).children("tr"), d2 = e2 && "thead" === e2.nodeName.toLowerCase(), f2 = [], h2 = 0, p2 = c2.length; h2 < p2; h2++) f2.push([]);
    for (h2 = 0, p2 = c2.length; h2 < p2; h2++) for (r2 = (a2 = c2[h2]).firstChild; r2; ) {
      if ("TD" == r2.nodeName.toUpperCase() || "TH" == r2.nodeName.toUpperCase()) {
        var g2, v2, m2, b2, y2, D2 = [];
        for (b2 = (b2 = +r2.getAttribute("colspan")) && 0 != b2 && 1 != b2 ? b2 : 1, y2 = (y2 = +r2.getAttribute("rowspan")) && 0 != y2 && 1 != y2 ? y2 : 1, l2 = function(t3, e3, n3) {
          for (var a3 = t3[e3]; a3[n3]; ) n3++;
          return n3;
        }(f2, h2, 0), s2 = 1 == b2, n2 && (s2 && (et(t2, l2, H(r2).data()), g2 = u2[l2], v2 = r2.getAttribute("width") || null, (m2 = r2.style.width.match(/width:\s*(\d+[pxem%]+)/)) && (v2 = m2[1]), g2.sWidthOrig = g2.sWidth || v2, d2 ? (null === g2.sTitle || g2.autoTitle || (r2.innerHTML = g2.sTitle), !g2.sTitle && s2 && (g2.sTitle = L(r2.innerHTML), g2.autoTitle = true)) : g2.footer && (r2.innerHTML = g2.footer), g2.ariaTitle || (g2.ariaTitle = H(r2).attr("aria-label") || g2.sTitle), g2.className) && H(r2).addClass(g2.className), 0 === H("span.dt-column-title", r2).length && H("<span>").addClass("dt-column-title").append(r2.childNodes).appendTo(r2), d2) && 0 === H("span.dt-column-order", r2).length && H("<span>").addClass("dt-column-order").appendTo(r2), i2 = 0; i2 < b2; i2++) {
          for (o2 = 0; o2 < y2; o2++) f2[h2 + o2][l2 + i2] = { cell: r2, unique: s2 }, f2[h2 + o2].row = a2;
          D2.push(l2 + i2);
        }
        r2.setAttribute("data-dt-column", x(D2).join(","));
      }
      r2 = r2.nextSibling;
    }
    return f2;
  }
  function Ft(n2, t2, a2) {
    function e2(t3) {
      var e3 = n2.jqXHR ? n2.jqXHR.status : null;
      if ((null === t3 || "number" == typeof e3 && 204 == e3) && Nt(n2, t3 = {}, []), (e3 = t3.error || t3.sError) && $(n2, 0, e3), t3.d && "string" == typeof t3.d) try {
        t3 = JSON.parse(t3.d);
      } catch (t4) {
      }
      n2.json = t3, G(n2, null, "xhr", [n2, t3, n2.jqXHR], true), a2(t3);
    }
    var r2, o2 = n2.ajax, i2 = n2.oInstance, l2 = (H.isPlainObject(o2) && o2.data && (l2 = "function" == typeof (r2 = o2.data) ? r2(t2, n2) : r2, t2 = "function" == typeof r2 && l2 ? l2 : H.extend(true, t2, l2), delete o2.data), { url: "string" == typeof o2 ? o2 : "", data: t2, success: e2, dataType: "json", cache: false, type: n2.sServerMethod, error: function(t3, e3) {
      -1 === G(n2, null, "xhr", [n2, null, n2.jqXHR], true).indexOf(true) && ("parsererror" == e3 ? $(n2, 0, "Invalid JSON response", 1) : 4 === t3.readyState && $(n2, 0, "Ajax error", 7)), w(n2, false);
    } });
    H.isPlainObject(o2) && H.extend(l2, o2), n2.oAjaxData = t2, G(n2, null, "preXhr", [n2, t2, l2], true), "function" == typeof o2 ? n2.jqXHR = o2.call(i2, t2, e2, n2) : "" === o2.url ? (i2 = {}, V.util.set(o2.dataSrc)(i2, []), e2(i2)) : n2.jqXHR = H.ajax(l2), r2 && (o2.data = r2);
  }
  function Nt(t2, e2, n2) {
    var a2 = "data";
    if (H.isPlainObject(t2.ajax) && void 0 !== t2.ajax.dataSrc && ("string" == typeof (t2 = t2.ajax.dataSrc) || "function" == typeof t2 ? a2 = t2 : void 0 !== t2.data && (a2 = t2.data)), !n2) return "data" === a2 ? e2.aaData || e2[a2] : "" !== a2 ? U(a2)(e2) : e2;
    v(a2)(e2, n2);
  }
  function jt(t2, e2, n2) {
    var t2 = H.isPlainObject(t2.ajax) ? t2.ajax.dataSrc : null;
    return t2 && t2[e2] ? U(t2[e2])(n2) : (t2 = "", "draw" === e2 ? t2 = "sEcho" : "recordsTotal" === e2 ? t2 = "iTotalRecords" : "recordsFiltered" === e2 && (t2 = "iTotalDisplayRecords"), void 0 !== n2[t2] ? n2[t2] : n2[e2]);
  }
  function Rt(n2, t2) {
    var e2 = n2.aoPreSearchCols;
    if ("ssp" != J(n2)) {
      for (var a2, r2, o2, i2, l2, s2 = n2, u2 = s2.aoColumns, c2 = s2.aoData, d2 = 0; d2 < c2.length; d2++) if (c2[d2] && !(l2 = c2[d2])._aFilterData) {
        for (o2 = [], a2 = 0, r2 = u2.length; a2 < r2; a2++) u2[a2].bSearchable ? "string" != typeof (i2 = null === (i2 = q(s2, d2, a2, "filter")) ? "" : i2) && i2.toString && (i2 = i2.toString()) : i2 = "", i2.indexOf && -1 !== i2.indexOf("&") && (Et.innerHTML = i2, i2 = kt ? Et.textContent : Et.innerText), i2.replace && (i2 = i2.replace(/[\r\n\u2028]/g, "")), o2.push(i2);
        l2._aFilterData = o2, l2._sFilterRow = o2.join("  "), 0;
      }
      n2.aiDisplay = n2.aiDisplayMaster.slice(), Ot(n2.aiDisplay, n2, t2.search, t2), H.each(n2.searchFixed, function(t3, e3) {
        Ot(n2.aiDisplay, n2, e3, {});
      });
      for (var f2 = 0; f2 < e2.length; f2++) {
        var h2 = e2[f2];
        Ot(n2.aiDisplay, n2, h2.search, h2, f2), H.each(n2.aoColumns[f2].searchFixed, function(t3, e3) {
          Ot(n2.aiDisplay, n2, e3, {}, f2);
        });
      }
      for (var p2, g2, v2 = n2, m2 = V.ext.search, b2 = v2.aiDisplay, y2 = 0, D2 = m2.length; y2 < D2; y2++) {
        for (var x2 = [], S2 = 0, w2 = b2.length; S2 < w2; S2++) g2 = b2[S2], p2 = v2.aoData[g2], m2[y2](v2, p2._aFilterData, g2, p2._aData, S2) && x2.push(g2);
        b2.length = 0, b2.push.apply(b2, x2);
      }
    }
    n2.bFiltered = true, G(n2, null, "search", [n2]);
  }
  function Ot(t2, e2, n2, a2, r2) {
    if ("" !== n2) {
      for (var o2 = 0, i2 = [], l2 = "function" == typeof n2 ? n2 : null, s2 = n2 instanceof RegExp ? n2 : l2 ? null : function(t3, e3) {
        var a3 = [], e3 = H.extend({}, { boundary: false, caseInsensitive: true, exact: false, regex: false, smart: true }, e3);
        "string" != typeof t3 && (t3 = t3.toString());
        if (t3 = k(t3), e3.exact) return new RegExp("^" + Pt(t3) + "$", e3.caseInsensitive ? "i" : "");
        {
          var n3, r3, o3;
          t3 = e3.regex ? t3 : Pt(t3), e3.smart && (n3 = (t3.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""]).map(function(t4) {
            var e4, n4 = false;
            return "!" === t4.charAt(0) && (n4 = true, t4 = t4.substring(1)), '"' === t4.charAt(0) ? t4 = (e4 = t4.match(/^"(.*)"$/)) ? e4[1] : t4 : "\u201C" === t4.charAt(0) && (t4 = (e4 = t4.match(/^\u201C(.*)\u201D$/)) ? e4[1] : t4), n4 && (1 < t4.length && a3.push("(?!" + t4 + ")"), t4 = ""), t4.replace(/"/g, "");
          }), r3 = a3.length ? a3.join("") : "", o3 = e3.boundary ? "\\b" : "", t3 = "^(?=.*?" + o3 + n3.join(")(?=.*?" + o3) + ")(" + r3 + ".)*$");
        }
        return new RegExp(t3, e3.caseInsensitive ? "i" : "");
      }(n2, a2), o2 = 0; o2 < t2.length; o2++) {
        var u2 = e2.aoData[t2[o2]], c2 = void 0 === r2 ? u2._sFilterRow : u2._aFilterData[r2];
        (l2 && l2(c2, u2._aData, t2[o2], r2) || s2 && s2.test(c2)) && i2.push(t2[o2]);
      }
      for (t2.length = i2.length, o2 = 0; o2 < i2.length; o2++) t2[o2] = i2[o2];
    }
  }
  var Pt = V.util.escapeRegex, Et = H("<div>")[0], kt = void 0 !== Et.textContent;
  function Mt(i2) {
    var l2, e2, n2, t2, s2 = i2.oInit, u2 = i2.deferLoading, c2 = J(i2);
    i2.bInitialised ? (wt(i2, "header"), wt(i2, "footer"), n2 = function() {
      _t(i2, i2.aoHeader), _t(i2, i2.aoFooter);
      var n3 = i2.iInitDisplayStart;
      if (s2.aaData) for (l2 = 0; l2 < s2.aaData.length; l2++) D(i2, s2.aaData[l2]);
      else !u2 && "dom" != c2 || ft(i2, H(i2.nTBody).children("tr"));
      i2.aiDisplay = i2.aiDisplayMaster.slice(), It(i2);
      var t3 = i2, e3 = t3.nTHead, a2 = e3.querySelectorAll("tr"), r2 = t3.bSortCellsTop, o2 = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
      true === r2 ? e3 = a2[0] : false === r2 && (e3 = a2[a2.length - 1]), $t(t3, e3, e3 === t3.nTHead ? "tr" + o2 + " th" + o2 + ", tr" + o2 + " td" + o2 : "th" + o2 + ", td" + o2), Yt(t3, r2 = [], t3.aaSorting), t3.aaSorting = r2, Ut(i2), w(i2, true), G(i2, null, "preInit", [i2], true), d(i2), "ssp" == c2 && !u2 || ("ajax" == c2 ? Ft(i2, {}, function(t4) {
        var e4 = Nt(i2, t4);
        for (l2 = 0; l2 < e4.length; l2++) D(i2, e4[l2]);
        i2.iInitDisplayStart = n3, d(i2), w(i2, false), Ht(i2);
      }) : (Ht(i2), w(i2, false)));
    }, (e2 = i2).oFeatures.bStateSave ? void 0 !== (t2 = e2.fnStateLoadCallback.call(e2.oInstance, e2, function(t3) {
      Kt(e2, t3, n2);
    })) && Kt(e2, t2, n2) : n2()) : setTimeout(function() {
      Mt(i2);
    }, 200);
  }
  function Ht(t2) {
    var e2;
    t2._bInitComplete || (e2 = [t2, t2.json], t2._bInitComplete = true, nt(t2), G(t2, null, "plugin-init", e2, true), G(t2, "aoInitComplete", "init", e2, true));
  }
  function Wt(t2, e2) {
    e2 = parseInt(e2, 10);
    t2._iDisplayLength = e2, ne(t2), G(t2, null, "length", [t2, e2]);
  }
  function Xt(t2, e2, n2) {
    var a2 = t2._iDisplayStart, r2 = t2._iDisplayLength, o2 = t2.fnRecordsDisplay();
    if (0 === o2 || -1 === r2) a2 = 0;
    else if ("number" == typeof e2) o2 < (a2 = e2 * r2) && (a2 = 0);
    else if ("first" == e2) a2 = 0;
    else if ("previous" == e2) (a2 = 0 <= r2 ? a2 - r2 : 0) < 0 && (a2 = 0);
    else if ("next" == e2) a2 + r2 < o2 && (a2 += r2);
    else if ("last" == e2) a2 = Math.floor((o2 - 1) / r2) * r2;
    else {
      if ("ellipsis" === e2) return;
      $(t2, 0, "Unknown paging action: " + e2, 5);
    }
    o2 = t2._iDisplayStart !== a2;
    t2._iDisplayStart = a2, G(t2, null, o2 ? "page" : "page-nc", [t2]), o2 && n2 && S(t2);
  }
  function w(t2, e2) {
    t2.bDrawing && false === e2 || G(t2, null, "processing", [t2, e2]);
  }
  function Vt(t2, e2, n2) {
    e2 ? (w(t2, true), setTimeout(function() {
      n2(), w(t2, false);
    }, 0)) : n2();
  }
  function Bt(t2) {
    var e2, n2, a2, r2, o2, i2, l2, s2, u2, c2, d2, f2, h2, p2 = H(t2.nTable), g2 = t2.oScroll;
    return "" === g2.sX && "" === g2.sY ? t2.nTable : (e2 = g2.sX, n2 = g2.sY, a2 = t2.oClasses.scrolling, o2 = (r2 = t2.captionNode) ? r2._captionSide : null, u2 = H(p2[0].cloneNode(false)), i2 = H(p2[0].cloneNode(false)), c2 = function(t3) {
      return t3 ? I(t3) : null;
    }, (l2 = p2.children("tfoot")).length || (l2 = null), u2 = H(s2 = "<div/>", { class: a2.container }).append(H(s2, { class: a2.header.self }).css({ overflow: "hidden", position: "relative", border: 0, width: e2 ? c2(e2) : "100%" }).append(H(s2, { class: a2.header.inner }).css({ "box-sizing": "content-box", width: g2.sXInner || "100%" }).append(u2.removeAttr("id").css("margin-left", 0).append("top" === o2 ? r2 : null).append(p2.children("thead"))))).append(H(s2, { class: a2.body }).css({ position: "relative", overflow: "auto", width: c2(e2) }).append(p2)), l2 && u2.append(H(s2, { class: a2.footer.self }).css({ overflow: "hidden", border: 0, width: e2 ? c2(e2) : "100%" }).append(H(s2, { class: a2.footer.inner }).append(i2.removeAttr("id").css("margin-left", 0).append("bottom" === o2 ? r2 : null).append(p2.children("tfoot"))))), c2 = u2.children(), d2 = c2[0], f2 = c2[1], h2 = l2 ? c2[2] : null, H(f2).on("scroll.DT", function() {
      var t3 = this.scrollLeft;
      d2.scrollLeft = t3, l2 && (h2.scrollLeft = t3);
    }), H("th, td", d2).on("focus", function() {
      var t3 = d2.scrollLeft;
      f2.scrollLeft = t3, l2 && (f2.scrollLeft = t3);
    }), H(f2).css("max-height", n2), g2.bCollapse || H(f2).css("height", n2), t2.nScrollHead = d2, t2.nScrollBody = f2, t2.nScrollFoot = h2, t2.aoDrawCallback.push(qt), u2[0]);
  }
  function qt(e2) {
    var t2 = e2.oScroll.iBarWidth, n2 = H(e2.nScrollHead).children("div"), a2 = n2.children("table"), r2 = e2.nScrollBody, o2 = H(r2), i2 = H(e2.nScrollFoot).children("div"), l2 = i2.children("table"), s2 = H(e2.nTHead), u2 = H(e2.nTable), c2 = e2.nTFoot && H("th, td", e2.nTFoot).length ? H(e2.nTFoot) : null, d2 = e2.oBrowser, f2 = r2.scrollHeight > r2.clientHeight;
    if (e2.scrollBarVis !== f2 && void 0 !== e2.scrollBarVis) e2.scrollBarVis = f2, nt(e2);
    else {
      if (e2.scrollBarVis = f2, u2.children("thead, tfoot").remove(), (f2 = s2.clone().prependTo(u2)).find("th, td").removeAttr("tabindex"), f2.find("[id]").removeAttr("id"), c2 && (b2 = c2.clone().prependTo(u2)).find("[id]").removeAttr("id"), e2.aiDisplay.length) {
        for (var h2 = null, p2 = e2._iDisplayStart; p2 < e2.aiDisplay.length; p2++) {
          var g2 = e2.aiDisplay[p2], g2 = e2.aoData[g2].nTr;
          if (g2) {
            h2 = g2;
            break;
          }
        }
        if (h2) for (var v2 = H(h2).children("th, td").map(function(t3) {
          return { idx: at(e2, t3), width: H(this).outerWidth() };
        }), p2 = 0; p2 < v2.length; p2++) {
          var m2 = e2.aoColumns[v2[p2].idx].colEl[0];
          m2.style.width.replace("px", "") !== v2[p2].width && (m2.style.width = v2[p2].width + "px");
        }
      }
      a2.find("colgroup").remove(), a2.append(e2.colgroup.clone()), c2 && (l2.find("colgroup").remove(), l2.append(e2.colgroup.clone())), H("th, td", f2).each(function() {
        H(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
      }), c2 && H("th, td", b2).each(function() {
        H(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
      });
      var s2 = Math.floor(u2.height()) > r2.clientHeight || "scroll" == o2.css("overflow-y"), f2 = "padding" + (d2.bScrollbarLeft ? "Left" : "Right"), b2 = u2.outerWidth();
      a2.css("width", I(b2)), n2.css("width", I(b2)).css(f2, s2 ? t2 + "px" : "0px"), c2 && (l2.css("width", I(b2)), i2.css("width", I(b2)).css(f2, s2 ? t2 + "px" : "0px")), u2.children("colgroup").prependTo(u2), o2.trigger("scroll"), !e2.bSorted && !e2.bFiltered || e2._drawHold || (r2.scrollTop = 0);
    }
  }
  function I(t2) {
    return null === t2 ? "0px" : "number" == typeof t2 ? t2 < 0 ? "0px" : t2 + "px" : t2.match(/\d$/) ? t2 + "px" : t2;
  }
  function Ut(t2) {
    var e2 = t2.aoColumns;
    for (t2.colgroup.empty(), a = 0; a < e2.length; a++) e2[a].bVisible && t2.colgroup.append(e2[a].colEl);
  }
  function $t(o2, t2, e2, i2, l2) {
    ee(t2, e2, function(t3) {
      var e3 = false, n2 = void 0 === i2 ? dt(t3.target) : [i2];
      if (n2.length) {
        for (var a2 = 0, r2 = n2.length; a2 < r2; a2++) if (false !== function(t4, e4, n3, a3) {
          function r3(t5, e5) {
            var n4 = t5._idx;
            return (n4 = void 0 === n4 ? s2.indexOf(t5[1]) : n4) + 1 < s2.length ? n4 + 1 : e5 ? null : 0;
          }
          var o3, i3 = t4.aoColumns[e4], l3 = t4.aaSorting, s2 = i3.asSorting;
          if (!i3.bSortable) return false;
          "number" == typeof l3[0] && (l3 = t4.aaSorting = [l3]);
          (a3 || n3) && t4.oFeatures.bSortMulti ? -1 !== (i3 = m(l3, "0").indexOf(e4)) ? null === (o3 = null === (o3 = r3(l3[i3], true)) && 1 === l3.length ? 0 : o3) ? l3.splice(i3, 1) : (l3[i3][1] = s2[o3], l3[i3]._idx = o3) : (a3 ? l3.push([e4, s2[0], 0]) : l3.push([e4, l3[0][1], 0]), l3[l3.length - 1]._idx = 0) : l3.length && l3[0][0] == e4 ? (o3 = r3(l3[0]), l3.length = 1, l3[0][1] = s2[o3], l3[0]._idx = o3) : (l3.length = 0, l3.push([e4, s2[0]]), l3[0]._idx = 0);
        }(o2, n2[a2], a2, t3.shiftKey) && (e3 = true), 1 === o2.aaSorting.length && "" === o2.aaSorting[0][1]) break;
        e3 && Vt(o2, true, function() {
          Jt(o2), zt(o2, o2.aiDisplay), d(o2, false, false), l2 && l2();
        });
      }
    });
  }
  function zt(t2, e2) {
    if (!(e2.length < 2)) {
      for (var n2 = t2.aiDisplayMaster, a2 = {}, r2 = {}, o2 = 0; o2 < n2.length; o2++) a2[n2[o2]] = o2;
      for (o2 = 0; o2 < e2.length; o2++) r2[e2[o2]] = a2[e2[o2]];
      e2.sort(function(t3, e3) {
        return r2[t3] - r2[e3];
      });
    }
  }
  function Yt(n2, a2, t2) {
    function e2(t3) {
      var e3;
      H.isPlainObject(t3) ? void 0 !== t3.idx ? a2.push([t3.idx, t3.dir]) : t3.name && -1 !== (e3 = m(n2.aoColumns, "sName").indexOf(t3.name)) && a2.push([e3, t3.dir]) : a2.push(t3);
    }
    if (H.isPlainObject(t2)) e2(t2);
    else if (t2.length && "number" == typeof t2[0]) e2(t2);
    else if (t2.length) for (var r2 = 0; r2 < t2.length; r2++) e2(t2[r2]);
  }
  function Gt(t2) {
    var e2, n2, a2, r2, o2, i2, l2, s2 = [], u2 = V.ext.type.order, c2 = t2.aoColumns, d2 = t2.aaSortingFixed, f2 = H.isPlainObject(d2), h2 = [];
    if (t2.oFeatures.bSort) {
      for (Array.isArray(d2) && Yt(t2, h2, d2), f2 && d2.pre && Yt(t2, h2, d2.pre), Yt(t2, h2, t2.aaSorting), f2 && d2.post && Yt(t2, h2, d2.post), e2 = 0; e2 < h2.length; e2++) if (c2[l2 = h2[e2][0]]) for (n2 = 0, a2 = (r2 = c2[l2].aDataSort).length; n2 < a2; n2++) i2 = c2[o2 = r2[n2]].sType || "string", void 0 === h2[e2]._idx && (h2[e2]._idx = c2[o2].asSorting.indexOf(h2[e2][1])), h2[e2][1] && s2.push({ src: l2, col: o2, dir: h2[e2][1], index: h2[e2]._idx, type: i2, formatter: u2[i2 + "-pre"], sorter: u2[i2 + "-" + h2[e2][1]] });
    }
    return s2;
  }
  function Jt(t2, e2, n2) {
    var a2, r2, o2, i2, l2, c2, d2 = [], s2 = V.ext.type.order, f2 = t2.aoData, u2 = t2.aiDisplayMaster;
    for (void 0 !== e2 ? (l2 = t2.aoColumns[e2], c2 = [{ src: e2, col: e2, dir: n2, index: 0, type: l2.sType, formatter: s2[l2.sType + "-pre"], sorter: s2[l2.sType + "-" + n2] }], u2 = u2.slice()) : c2 = Gt(t2), a2 = 0, r2 = c2.length; a2 < r2; a2++) {
      i2 = c2[a2], S2 = x2 = D2 = g2 = p2 = h2 = y2 = b2 = m2 = v2 = void 0;
      var h2, p2, g2, v2 = t2, m2 = i2.col, b2 = v2.aoColumns[m2], y2 = V.ext.order[b2.sSortDataType];
      y2 && (h2 = y2.call(v2.oInstance, v2, m2, rt(v2, m2)));
      for (var D2 = V.ext.type.order[b2.sType + "-pre"], x2 = v2.aoData, S2 = 0; S2 < x2.length; S2++) x2[S2] && ((p2 = x2[S2])._aSortData || (p2._aSortData = []), p2._aSortData[m2] && !y2 || (g2 = y2 ? h2[S2] : q(v2, S2, m2, "sort"), p2._aSortData[m2] = D2 ? D2(g2, v2) : g2));
    }
    if ("ssp" != J(t2) && 0 !== c2.length) {
      for (a2 = 0, o2 = u2.length; a2 < o2; a2++) d2[a2] = a2;
      c2.length && "desc" === c2[0].dir && t2.orderDescReverse && d2.reverse(), u2.sort(function(t3, e3) {
        for (var n3, a3, r3, o3, i3 = c2.length, l3 = f2[t3]._aSortData, s3 = f2[e3]._aSortData, u3 = 0; u3 < i3; u3++) if (n3 = l3[(o3 = c2[u3]).col], a3 = s3[o3.col], o3.sorter) {
          if (0 !== (r3 = o3.sorter(n3, a3))) return r3;
        } else if (0 !== (r3 = n3 < a3 ? -1 : a3 < n3 ? 1 : 0)) return "asc" === o3.dir ? r3 : -r3;
        return (n3 = d2[t3]) < (a3 = d2[e3]) ? -1 : a3 < n3 ? 1 : 0;
      });
    } else 0 === c2.length && u2.sort(function(t3, e3) {
      return t3 < e3 ? -1 : e3 < t3 ? 1 : 0;
    });
    return void 0 === e2 && (t2.bSorted = true, t2.sortDetails = c2, G(t2, null, "order", [t2, c2])), u2;
  }
  function Zt(t2) {
    var e2, n2, a2, r2 = t2.aLastSort, o2 = t2.oClasses.order.position, i2 = Gt(t2), l2 = t2.oFeatures;
    if (l2.bSort && l2.bSortClasses) {
      for (e2 = 0, n2 = r2.length; e2 < n2; e2++) a2 = r2[e2].src, H(m(t2.aoData, "anCells", a2)).removeClass(o2 + (e2 < 2 ? e2 + 1 : 3));
      for (e2 = 0, n2 = i2.length; e2 < n2; e2++) a2 = i2[e2].src, H(m(t2.aoData, "anCells", a2)).addClass(o2 + (e2 < 2 ? e2 + 1 : 3));
    }
    t2.aLastSort = i2;
  }
  function Qt(n2) {
    var t2;
    n2._bLoadingState || (t2 = { time: +/* @__PURE__ */ new Date(), start: n2._iDisplayStart, length: n2._iDisplayLength, order: H.extend(true, [], n2.aaSorting), search: H.extend({}, n2.oPreviousSearch), columns: n2.aoColumns.map(function(t3, e2) {
      return { visible: t3.bVisible, search: H.extend({}, n2.aoPreSearchCols[e2]) };
    }) }, n2.oSavedState = t2, G(n2, "aoStateSaveParams", "stateSaveParams", [n2, t2]), n2.oFeatures.bStateSave && !n2.bDestroying && n2.fnStateSaveCallback.call(n2.oInstance, n2, t2));
  }
  function Kt(n2, t2, e2) {
    var a2, r2, o2 = n2.aoColumns, i2 = (n2._bLoadingState = true, n2._bInitComplete ? new V.Api(n2) : null);
    if (t2 && t2.time) {
      var l2 = n2.iStateDuration;
      if (0 < l2 && t2.time < +/* @__PURE__ */ new Date() - 1e3 * l2) n2._bLoadingState = false;
      else if (-1 !== G(n2, "aoStateLoadParams", "stateLoadParams", [n2, t2]).indexOf(false)) n2._bLoadingState = false;
      else if (t2.columns && o2.length !== t2.columns.length) n2._bLoadingState = false;
      else {
        if (n2.oLoadedState = H.extend(true, {}, t2), G(n2, null, "stateLoadInit", [n2, t2], true), void 0 !== t2.length && (i2 ? i2.page.len(t2.length) : n2._iDisplayLength = t2.length), void 0 !== t2.start && (null === i2 ? (n2._iDisplayStart = t2.start, n2.iInitDisplayStart = t2.start) : Xt(n2, t2.start / n2._iDisplayLength)), void 0 !== t2.order && (n2.aaSorting = [], H.each(t2.order, function(t3, e3) {
          n2.aaSorting.push(e3[0] >= o2.length ? [0, e3[1]] : e3);
        })), void 0 !== t2.search && H.extend(n2.oPreviousSearch, t2.search), t2.columns) {
          for (a2 = 0, r2 = t2.columns.length; a2 < r2; a2++) {
            var s2 = t2.columns[a2];
            void 0 !== s2.visible && (i2 ? i2.column(a2).visible(s2.visible, false) : o2[a2].bVisible = s2.visible), void 0 !== s2.search && H.extend(n2.aoPreSearchCols[a2], s2.search);
          }
          i2 && i2.columns.adjust();
        }
        n2._bLoadingState = false, G(n2, "aoStateLoaded", "stateLoaded", [n2, t2]);
      }
    } else n2._bLoadingState = false;
    e2();
  }
  function $(t2, e2, n2, a2) {
    if (n2 = "DataTables warning: " + (t2 ? "table id=" + t2.sTableId + " - " : "") + n2, a2 && (n2 += ". For more information about this error, please see https://datatables.net/tn/" + a2), e2) W.console && console.log && console.log(n2);
    else {
      e2 = V.ext, e2 = e2.sErrMode || e2.errMode;
      if (t2 && G(t2, null, "dt-error", [t2, a2, n2], true), "alert" == e2) alert(n2);
      else {
        if ("throw" == e2) throw new Error(n2);
        "function" == typeof e2 && e2(t2, a2, n2);
      }
    }
  }
  function z(n2, a2, t2, e2) {
    Array.isArray(t2) ? H.each(t2, function(t3, e3) {
      Array.isArray(e3) ? z(n2, a2, e3[0], e3[1]) : z(n2, a2, e3);
    }) : (void 0 === e2 && (e2 = t2), void 0 !== a2[t2] && (n2[e2] = a2[t2]));
  }
  function te(t2, e2, n2) {
    var a2, r2;
    for (r2 in e2) Object.prototype.hasOwnProperty.call(e2, r2) && (a2 = e2[r2], H.isPlainObject(a2) ? (H.isPlainObject(t2[r2]) || (t2[r2] = {}), H.extend(true, t2[r2], a2)) : n2 && "data" !== r2 && "aaData" !== r2 && Array.isArray(a2) ? t2[r2] = a2.slice() : t2[r2] = a2);
    return t2;
  }
  function ee(t2, e2, n2) {
    H(t2).on("click.DT", e2, function(t3) {
      n2(t3);
    }).on("keypress.DT", e2, function(t3) {
      13 === t3.which && (t3.preventDefault(), n2(t3));
    }).on("selectstart.DT", e2, function() {
      return false;
    });
  }
  function Y(t2, e2, n2) {
    n2 && t2[e2].push(n2);
  }
  function G(e2, t2, n2, a2, r2) {
    var o2 = [];
    return t2 && (o2 = e2[t2].slice().reverse().map(function(t3) {
      return t3.apply(e2.oInstance, a2);
    })), null !== n2 && (t2 = H.Event(n2 + ".dt"), n2 = H(e2.nTable), t2.dt = e2.api, n2[r2 ? "trigger" : "triggerHandler"](t2, a2), r2 && 0 === n2.parents("body").length && H("body").trigger(t2, a2), o2.push(t2.result)), o2;
  }
  function ne(t2) {
    var e2 = t2._iDisplayStart, n2 = t2.fnDisplayEnd(), a2 = t2._iDisplayLength;
    n2 <= e2 && (e2 = n2 - a2), e2 -= e2 % a2, t2._iDisplayStart = e2 = -1 === a2 || e2 < 0 ? 0 : e2;
  }
  function ae(t2, e2) {
    var t2 = t2.renderer, n2 = V.ext.renderer[e2];
    return H.isPlainObject(t2) && t2[e2] ? n2[t2[e2]] || n2._ : "string" == typeof t2 && n2[t2] || n2._;
  }
  function J(t2) {
    return t2.oFeatures.bServerSide ? "ssp" : t2.ajax ? "ajax" : "dom";
  }
  function re(t2, e2, n2) {
    var a2 = t2.fnFormatNumber, r2 = t2._iDisplayStart + 1, o2 = t2._iDisplayLength, i2 = t2.fnRecordsDisplay(), l2 = t2.fnRecordsTotal(), s2 = -1 === o2;
    return e2.replace(/_START_/g, a2.call(t2, r2)).replace(/_END_/g, a2.call(t2, t2.fnDisplayEnd())).replace(/_MAX_/g, a2.call(t2, l2)).replace(/_TOTAL_/g, a2.call(t2, i2)).replace(/_PAGE_/g, a2.call(t2, s2 ? 1 : Math.ceil(r2 / o2))).replace(/_PAGES_/g, a2.call(t2, s2 ? 1 : Math.ceil(i2 / o2))).replace(/_ENTRIES_/g, t2.api.i18n("entries", "", n2)).replace(/_ENTRIES-MAX_/g, t2.api.i18n("entries", "", l2)).replace(/_ENTRIES-TOTAL_/g, t2.api.i18n("entries", "", i2));
  }
  var oe = [], n = Array.prototype;
  X = function(t2, e2) {
    if (!(this instanceof X)) return new X(t2, e2);
    function n2(t3) {
      t3 = t3, e3 = V.settings, a3 = m(e3, "nTable");
      var n3, e3, a3, r2 = t3 ? t3.nTable && t3.oFeatures ? [t3] : t3.nodeName && "table" === t3.nodeName.toLowerCase() ? -1 !== (r2 = a3.indexOf(t3)) ? [e3[r2]] : null : t3 && "function" == typeof t3.settings ? t3.settings().toArray() : ("string" == typeof t3 ? n3 = H(t3).get() : t3 instanceof H && (n3 = t3.get()), n3 ? e3.filter(function(t4, e4) {
        return n3.includes(a3[e4]);
      }) : void 0) : [];
      r2 && o2.push.apply(o2, r2);
    }
    var a2, o2 = [];
    if (Array.isArray(t2)) for (a2 = 0; a2 < t2.length; a2++) n2(t2[a2]);
    else n2(t2);
    if (this.context = 1 < o2.length ? x(o2) : o2, e2) if (e2.length < 1e4) this.push.apply(this, e2);
    else for (a2 = 0; a2 < e2.length; a2++) this.push(e2[a2]);
    this.selector = { rows: null, cols: null, opts: null }, X.extend(this, this, oe);
  }, V.Api = X, H.extend(X.prototype, { any: function() {
    return 0 !== this.count();
  }, context: [], count: function() {
    return this.flatten().length;
  }, each: function(t2) {
    for (var e2 = 0, n2 = this.length; e2 < n2; e2++) t2.call(this, this[e2], e2, this);
    return this;
  }, eq: function(t2) {
    var e2 = this.context;
    return e2.length > t2 ? new X(e2[t2], this[t2]) : null;
  }, filter: function(t2) {
    t2 = n.filter.call(this, t2, this);
    return new X(this.context, t2);
  }, flatten: function() {
    var t2 = [];
    return new X(this.context, t2.concat.apply(t2, this.toArray()));
  }, get: function(t2) {
    return this[t2];
  }, join: n.join, includes: function(t2) {
    return -1 !== this.indexOf(t2);
  }, indexOf: n.indexOf, iterator: function(t2, e2, n2, a2) {
    var r2, o2, i2, l2, s2, u2, c2, d2, f2 = [], h2 = this.context, p2 = this.selector;
    for ("string" == typeof t2 && (a2 = n2, n2 = e2, e2 = t2, t2 = false), o2 = 0, i2 = h2.length; o2 < i2; o2++) {
      var g2 = new X(h2[o2]);
      if ("table" === e2) void 0 !== (r2 = n2.call(g2, h2[o2], o2)) && f2.push(r2);
      else if ("columns" === e2 || "rows" === e2) void 0 !== (r2 = n2.call(g2, h2[o2], this[o2], o2)) && f2.push(r2);
      else if ("every" === e2 || "column" === e2 || "column-rows" === e2 || "row" === e2 || "cell" === e2) for (c2 = this[o2], "column-rows" === e2 && (u2 = ve(h2[o2], p2.opts)), l2 = 0, s2 = c2.length; l2 < s2; l2++) d2 = c2[l2], void 0 !== (r2 = "cell" === e2 ? n2.call(g2, h2[o2], d2.row, d2.column, o2, l2) : n2.call(g2, h2[o2], d2, o2, l2, u2)) && f2.push(r2);
    }
    return f2.length || a2 ? ((t2 = (a2 = new X(h2, t2 ? f2.concat.apply([], f2) : f2)).selector).rows = p2.rows, t2.cols = p2.cols, t2.opts = p2.opts, a2) : this;
  }, lastIndexOf: n.lastIndexOf, length: 0, map: function(t2) {
    t2 = n.map.call(this, t2, this);
    return new X(this.context, t2);
  }, pluck: function(t2) {
    var e2 = V.util.get(t2);
    return this.map(function(t3) {
      return e2(t3);
    });
  }, pop: n.pop, push: n.push, reduce: n.reduce, reduceRight: n.reduceRight, reverse: n.reverse, selector: null, shift: n.shift, slice: function() {
    return new X(this.context, this);
  }, sort: n.sort, splice: n.splice, toArray: function() {
    return n.slice.call(this);
  }, to$: function() {
    return H(this);
  }, toJQuery: function() {
    return H(this);
  }, unique: function() {
    return new X(this.context, x(this.toArray()));
  }, unshift: n.unshift }), W.__apiStruct = oe, X.extend = function(t2, e2, n2) {
    if (n2.length && e2 && (e2 instanceof X || e2.__dt_wrapper)) for (var a2, r2 = 0, o2 = n2.length; r2 < o2; r2++) "__proto__" !== (a2 = n2[r2]).name && (e2[a2.name] = "function" === a2.type ? /* @__PURE__ */ function(e3, n3, a3) {
      return function() {
        var t3 = n3.apply(e3 || this, arguments);
        return X.extend(t3, t3, a3.methodExt), t3;
      };
    }(t2, a2.val, a2) : "object" === a2.type ? {} : a2.val, e2[a2.name].__dt_wrapper = true, X.extend(t2, e2[a2.name], a2.propExt));
  }, X.register = e = function(t2, e2) {
    if (Array.isArray(t2)) for (var n2 = 0, a2 = t2.length; n2 < a2; n2++) X.register(t2[n2], e2);
    else for (var r2 = t2.split("."), o2 = oe, i2 = 0, l2 = r2.length; i2 < l2; i2++) {
      var s2, u2, c2 = function(t3, e3) {
        for (var n3 = 0, a3 = t3.length; n3 < a3; n3++) if (t3[n3].name === e3) return t3[n3];
        return null;
      }(o2, u2 = (s2 = -1 !== r2[i2].indexOf("()")) ? r2[i2].replace("()", "") : r2[i2]);
      c2 || o2.push(c2 = { name: u2, val: {}, methodExt: [], propExt: [], type: "object" }), i2 === l2 - 1 ? (c2.val = e2, c2.type = "function" == typeof e2 ? "function" : H.isPlainObject(e2) ? "object" : "other") : o2 = s2 ? c2.methodExt : c2.propExt;
    }
  }, X.registerPlural = t = function(t2, e2, n2) {
    X.register(t2, n2), X.register(e2, function() {
      var t3 = n2.apply(this, arguments);
      return t3 === this ? this : t3 instanceof X ? t3.length ? Array.isArray(t3[0]) ? new X(t3.context, t3[0]) : t3[0] : void 0 : t3;
    });
  };
  function ie(t2, e2) {
    var n2, a2;
    return Array.isArray(t2) ? (n2 = [], t2.forEach(function(t3) {
      t3 = ie(t3, e2);
      n2.push.apply(n2, t3);
    }), n2.filter(function(t3) {
      return t3;
    })) : "number" == typeof t2 ? [e2[t2]] : (a2 = e2.map(function(t3) {
      return t3.nTable;
    }), H(a2).filter(t2).map(function() {
      var t3 = a2.indexOf(this);
      return e2[t3];
    }).toArray());
  }
  function le(r2, o2, t2) {
    var e2, n2;
    t2 && (e2 = new X(r2)).one("draw", function() {
      t2(e2.ajax.json());
    }), "ssp" == J(r2) ? d(r2, o2) : (w(r2, true), (n2 = r2.jqXHR) && 4 !== n2.readyState && n2.abort(), Ft(r2, {}, function(t3) {
      mt(r2);
      for (var e3 = Nt(r2, t3), n3 = 0, a2 = e3.length; n3 < a2; n3++) D(r2, e3[n3]);
      d(r2, o2), Ht(r2), w(r2, false);
    }));
  }
  function se(t2, e2, n2, a2, r2) {
    for (var o2, i2, l2, s2, u2 = [], c2 = typeof e2, d2 = 0, f2 = (e2 = e2 && "string" != c2 && "function" != c2 && void 0 !== e2.length ? e2 : [e2]).length; d2 < f2; d2++) for (l2 = 0, s2 = (i2 = e2[d2] && e2[d2].split && !e2[d2].match(/[[(:]/) ? e2[d2].split(",") : [e2[d2]]).length; l2 < s2; l2++) (o2 = (o2 = n2("string" == typeof i2[l2] ? i2[l2].trim() : i2[l2])).filter(function(t3) {
      return null != t3;
    })) && o2.length && (u2 = u2.concat(o2));
    var h2 = C.selector[t2];
    if (h2.length) for (d2 = 0, f2 = h2.length; d2 < f2; d2++) u2 = h2[d2](a2, r2, u2);
    return x(u2);
  }
  function ue(t2) {
    return (t2 = t2 || {}).filter && void 0 === t2.search && (t2.search = t2.filter), H.extend({ search: "none", order: "current", page: "all" }, t2);
  }
  function ce(t2) {
    var e2 = new X(t2.context[0]);
    return t2.length && e2.push(t2[0]), e2.selector = t2.selector, e2.length && 1 < e2[0].length && e2[0].splice(1), e2;
  }
  e("tables()", function(t2) {
    return null != t2 ? new X(ie(t2, this.context)) : this;
  }), e("table()", function(t2) {
    var t2 = this.tables(t2), e2 = t2.context;
    return e2.length ? new X(e2[0]) : t2;
  }), [["nodes", "node", "nTable"], ["body", "body", "nTBody"], ["header", "header", "nTHead"], ["footer", "footer", "nTFoot"]].forEach(function(e2) {
    t("tables()." + e2[0] + "()", "table()." + e2[1] + "()", function() {
      return this.iterator("table", function(t2) {
        return t2[e2[2]];
      }, 1);
    });
  }), [["header", "aoHeader"], ["footer", "aoFooter"]].forEach(function(n2) {
    e("table()." + n2[0] + ".structure()", function(t2) {
      var t2 = this.columns(t2).indexes().flatten(), e2 = this.context[0];
      return Tt(e2, e2[n2[1]], t2);
    });
  }), t("tables().containers()", "table().container()", function() {
    return this.iterator("table", function(t2) {
      return t2.nTableWrapper;
    }, 1);
  }), e("tables().every()", function(n2) {
    var a2 = this;
    return this.iterator("table", function(t2, e2) {
      n2.call(a2.table(e2), e2);
    });
  }), e("caption()", function(r2, o2) {
    var t2, e2 = this.context;
    return void 0 === r2 ? (t2 = e2[0].captionNode) && e2.length ? t2.innerHTML : null : this.iterator("table", function(t3) {
      var e3 = H(t3.nTable), n2 = H(t3.captionNode), a2 = H(t3.nTableWrapper);
      n2.length || (n2 = H("<caption/>").html(r2), t3.captionNode = n2[0], o2) || (e3.prepend(n2), o2 = n2.css("caption-side")), n2.html(r2), o2 && (n2.css("caption-side", o2), n2[0]._captionSide = o2), (a2.find("div.dataTables_scroll").length ? (t3 = "top" === o2 ? "Head" : "Foot", a2.find("div.dataTables_scroll" + t3 + " table")) : e3).prepend(n2);
    }, 1);
  }), e("caption.node()", function() {
    var t2 = this.context;
    return t2.length ? t2[0].captionNode : null;
  }), e("draw()", function(e2) {
    return this.iterator("table", function(t2) {
      "page" === e2 ? S(t2) : d(t2, false === (e2 = "string" == typeof e2 ? "full-hold" !== e2 : e2));
    });
  }), e("page()", function(e2) {
    return void 0 === e2 ? this.page.info().page : this.iterator("table", function(t2) {
      Xt(t2, e2);
    });
  }), e("page.info()", function() {
    var t2, e2, n2, a2, r2;
    if (0 !== this.context.length) return e2 = (t2 = this.context[0])._iDisplayStart, n2 = t2.oFeatures.bPaginate ? t2._iDisplayLength : -1, a2 = t2.fnRecordsDisplay(), { page: (r2 = -1 === n2) ? 0 : Math.floor(e2 / n2), pages: r2 ? 1 : Math.ceil(a2 / n2), start: e2, end: t2.fnDisplayEnd(), length: n2, recordsTotal: t2.fnRecordsTotal(), recordsDisplay: a2, serverSide: "ssp" === J(t2) };
  }), e("page.len()", function(e2) {
    return void 0 === e2 ? 0 !== this.context.length ? this.context[0]._iDisplayLength : void 0 : this.iterator("table", function(t2) {
      Wt(t2, e2);
    });
  }), e("ajax.json()", function() {
    var t2 = this.context;
    if (0 < t2.length) return t2[0].json;
  }), e("ajax.params()", function() {
    var t2 = this.context;
    if (0 < t2.length) return t2[0].oAjaxData;
  }), e("ajax.reload()", function(e2, n2) {
    return this.iterator("table", function(t2) {
      le(t2, false === n2, e2);
    });
  }), e("ajax.url()", function(e2) {
    var t2 = this.context;
    return void 0 === e2 ? 0 === t2.length ? void 0 : (t2 = t2[0], H.isPlainObject(t2.ajax) ? t2.ajax.url : t2.ajax) : this.iterator("table", function(t3) {
      H.isPlainObject(t3.ajax) ? t3.ajax.url = e2 : t3.ajax = e2;
    });
  }), e("ajax.url().load()", function(e2, n2) {
    return this.iterator("table", function(t2) {
      le(t2, false === n2, e2);
    });
  });
  function de(o2, i2, t2, e2) {
    function l2(t3, e3) {
      var n2;
      if (Array.isArray(t3) || t3 instanceof H) for (var a2 = 0, r2 = t3.length; a2 < r2; a2++) l2(t3[a2], e3);
      else t3.nodeName && "tr" === t3.nodeName.toLowerCase() ? (t3.setAttribute("data-dt-row", i2.idx), s2.push(t3)) : (n2 = H("<tr><td></td></tr>").attr("data-dt-row", i2.idx).addClass(e3), H("td", n2).addClass(e3).html(t3)[0].colSpan = ot(o2), s2.push(n2[0]));
    }
    var s2 = [];
    l2(t2, e2), i2._details && i2._details.detach(), i2._details = H(s2), i2._detailsShow && i2._details.insertAfter(i2.nTr);
  }
  function fe(t2, e2) {
    var n2 = t2.context;
    if (n2.length && t2.length) {
      var a2 = n2[0].aoData[t2[0]];
      if (a2._details) {
        (a2._detailsShow = e2) ? (a2._details.insertAfter(a2.nTr), H(a2.nTr).addClass("dt-hasChild")) : (a2._details.detach(), H(a2.nTr).removeClass("dt-hasChild")), G(n2[0], null, "childRow", [e2, t2.row(t2[0])]);
        var i2 = n2[0], r2 = new X(i2), a2 = ".dt.DT_details", e2 = "draw" + a2, t2 = "column-sizing" + a2, a2 = "destroy" + a2, l2 = i2.aoData;
        if (r2.off(e2 + " " + t2 + " " + a2), m(l2, "_details").length > 0) {
          r2.on(e2, function(t3, e3) {
            if (i2 !== e3) return;
            r2.rows({ page: "current" }).eq(0).each(function(t4) {
              var e4 = l2[t4];
              if (e4._detailsShow) e4._details.insertAfter(e4.nTr);
            });
          });
          r2.on(t2, function(t3, e3) {
            if (i2 !== e3) return;
            var n3, a3 = ot(e3);
            for (var r3 = 0, o2 = l2.length; r3 < o2; r3++) {
              n3 = l2[r3];
              if (n3 && n3._details) n3._details.each(function() {
                var t4 = H(this).children("td");
                if (t4.length == 1) t4.attr("colspan", a3);
              });
            }
          });
          r2.on(a2, function(t3, e3) {
            if (i2 !== e3) return;
            for (var n3 = 0, a3 = l2.length; n3 < a3; n3++) if (l2[n3] && l2[n3]._details) ye(r2, n3);
          });
        }
        be(n2);
      }
    }
  }
  function he(t2, e2, n2, a2, r2, o2) {
    for (var i2 = [], l2 = 0, s2 = r2.length; l2 < s2; l2++) i2.push(q(t2, r2[l2], e2, o2));
    return i2;
  }
  function pe(t2, e2, n2) {
    var a2 = t2.aoHeader;
    return a2[void 0 !== n2 ? n2 : t2.bSortCellsTop ? 0 : a2.length - 1][e2].cell;
  }
  function ge(e2, n2) {
    return function(t2) {
      return T(t2) || "string" != typeof t2 || (t2 = t2.replace(F, " "), e2 && (t2 = L(t2)), n2 && (t2 = k(t2, false))), t2;
    };
  }
  var ve = function(t2, e2) {
    var n2, a2 = [], r2 = t2.aiDisplay, o2 = t2.aiDisplayMaster, i2 = e2.search, l2 = e2.order, e2 = e2.page;
    if ("ssp" == J(t2)) return "removed" === i2 ? [] : h(0, o2.length);
    if ("current" == e2) for (u2 = t2._iDisplayStart, c2 = t2.fnDisplayEnd(); u2 < c2; u2++) a2.push(r2[u2]);
    else if ("current" == l2 || "applied" == l2) {
      if ("none" == i2) a2 = o2.slice();
      else if ("applied" == i2) a2 = r2.slice();
      else if ("removed" == i2) {
        for (var s2 = {}, u2 = 0, c2 = r2.length; u2 < c2; u2++) s2[r2[u2]] = null;
        o2.forEach(function(t3) {
          Object.prototype.hasOwnProperty.call(s2, t3) || a2.push(t3);
        });
      }
    } else if ("index" == l2 || "original" == l2) for (u2 = 0, c2 = t2.aoData.length; u2 < c2; u2++) t2.aoData[u2] && ("none" == i2 || -1 === (n2 = r2.indexOf(u2)) && "removed" == i2 || 0 <= n2 && "applied" == i2) && a2.push(u2);
    else if ("number" == typeof l2) {
      var d2 = Jt(t2, l2, "asc");
      if ("none" === i2) a2 = d2;
      else for (u2 = 0; u2 < d2.length; u2++) (-1 === (n2 = r2.indexOf(d2[u2])) && "removed" == i2 || 0 <= n2 && "applied" == i2) && a2.push(d2[u2]);
    }
    return a2;
  }, me = (e("rows()", function(n2, a2) {
    void 0 === n2 ? n2 = "" : H.isPlainObject(n2) && (a2 = n2, n2 = ""), a2 = ue(a2);
    var t2 = this.iterator("table", function(t3) {
      return e2 = se("row", e2 = n2, function(n3) {
        var t4 = f(n3), a3 = r2.aoData;
        if (null !== t4 && !o2) return [t4];
        if (i2 = i2 || ve(r2, o2), null !== t4 && -1 !== i2.indexOf(t4)) return [t4];
        if (null == n3 || "" === n3) return i2;
        if ("function" == typeof n3) return i2.map(function(t5) {
          var e4 = a3[t5];
          return n3(t5, e4._aData, e4.nTr) ? t5 : null;
        });
        if (n3.nodeName) return t4 = n3._DT_RowIndex, e3 = n3._DT_CellIndex, void 0 !== t4 ? a3[t4] && a3[t4].nTr === n3 ? [t4] : [] : e3 ? a3[e3.row] && a3[e3.row].nTr === n3.parentNode ? [e3.row] : [] : (t4 = H(n3).closest("*[data-dt-row]")).length ? [t4.data("dt-row")] : [];
        if ("string" == typeof n3 && "#" === n3.charAt(0)) {
          var e3 = r2.aIds[n3.replace(/^#/, "")];
          if (void 0 !== e3) return [e3.idx];
        }
        t4 = A(b(r2.aoData, i2, "nTr"));
        return H(t4).filter(n3).map(function() {
          return this._DT_RowIndex;
        }).toArray();
      }, r2 = t3, o2 = a2), "current" !== o2.order && "applied" !== o2.order || zt(r2, e2), e2;
      var r2, e2, o2, i2;
    }, 1);
    return t2.selector.rows = n2, t2.selector.opts = a2, t2;
  }), e("rows().nodes()", function() {
    return this.iterator("row", function(t2, e2) {
      return t2.aoData[e2].nTr || void 0;
    }, 1);
  }), e("rows().data()", function() {
    return this.iterator(true, "rows", function(t2, e2) {
      return b(t2.aoData, e2, "_aData");
    }, 1);
  }), t("rows().cache()", "row().cache()", function(n2) {
    return this.iterator("row", function(t2, e2) {
      t2 = t2.aoData[e2];
      return "search" === n2 ? t2._aFilterData : t2._aSortData;
    }, 1);
  }), t("rows().invalidate()", "row().invalidate()", function(n2) {
    return this.iterator("row", function(t2, e2) {
      bt(t2, e2, n2);
    });
  }), t("rows().indexes()", "row().index()", function() {
    return this.iterator("row", function(t2, e2) {
      return e2;
    }, 1);
  }), t("rows().ids()", "row().id()", function(t2) {
    for (var e2 = [], n2 = this.context, a2 = 0, r2 = n2.length; a2 < r2; a2++) for (var o2 = 0, i2 = this[a2].length; o2 < i2; o2++) {
      var l2 = n2[a2].rowIdFn(n2[a2].aoData[this[a2][o2]]._aData);
      e2.push((true === t2 ? "#" : "") + l2);
    }
    return new X(n2, e2);
  }), t("rows().remove()", "row().remove()", function() {
    return this.iterator("row", function(t2, e2) {
      var n2 = t2.aoData, a2 = n2[e2], r2 = t2.aiDisplayMaster.indexOf(e2), r2 = (-1 !== r2 && t2.aiDisplayMaster.splice(r2, 1), 0 < t2._iRecordsDisplay && t2._iRecordsDisplay--, ne(t2), t2.rowIdFn(a2._aData));
      void 0 !== r2 && delete t2.aIds[r2], n2[e2] = null;
    }), this;
  }), e("rows.add()", function(o2) {
    var t2 = this.iterator("table", function(t3) {
      for (var e3, n2 = [], a2 = 0, r2 = o2.length; a2 < r2; a2++) (e3 = o2[a2]).nodeName && "TR" === e3.nodeName.toUpperCase() ? n2.push(ft(t3, e3)[0]) : n2.push(D(t3, e3));
      return n2;
    }, 1), e2 = this.rows(-1);
    return e2.pop(), e2.push.apply(e2, t2), e2;
  }), e("row()", function(t2, e2) {
    return ce(this.rows(t2, e2));
  }), e("row().data()", function(t2) {
    var e2, n2 = this.context;
    return void 0 === t2 ? n2.length && this.length && this[0].length ? n2[0].aoData[this[0]]._aData : void 0 : ((e2 = n2[0].aoData[this[0]])._aData = t2, Array.isArray(t2) && e2.nTr && e2.nTr.id && v(n2[0].rowId)(t2, e2.nTr.id), bt(n2[0], this[0], "data"), this);
  }), e("row().node()", function() {
    var t2 = this.context;
    if (t2.length && this.length && this[0].length) {
      t2 = t2[0].aoData[this[0]];
      if (t2 && t2.nTr) return t2.nTr;
    }
    return null;
  }), e("row.add()", function(e2) {
    e2 instanceof H && e2.length && (e2 = e2[0]);
    var t2 = this.iterator("table", function(t3) {
      return e2.nodeName && "TR" === e2.nodeName.toUpperCase() ? ft(t3, e2)[0] : D(t3, e2);
    });
    return this.row(t2[0]);
  }), H(_).on("plugin-init.dt", function(t2, e2) {
    var a2 = new X(e2);
    a2.on("stateSaveParams.DT", function(t3, e3, n2) {
      for (var a3 = e3.rowIdFn, r2 = e3.aiDisplayMaster, o2 = [], i2 = 0; i2 < r2.length; i2++) {
        var l2 = r2[i2], l2 = e3.aoData[l2];
        l2._detailsShow && o2.push("#" + a3(l2._aData));
      }
      n2.childRows = o2;
    }), a2.on("stateLoaded.DT", function(t3, e3, n2) {
      me(a2, n2);
    }), me(a2, a2.state.loaded());
  }), function(t2, e2) {
    e2 && e2.childRows && t2.rows(e2.childRows.map(function(t3) {
      return t3.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
    })).every(function() {
      G(t2.settings()[0], null, "requestChild", [this]);
    });
  }), be = V.util.throttle(function(t2) {
    Qt(t2[0]);
  }, 500), ye = function(t2, e2) {
    var n2 = t2.context;
    n2.length && (e2 = n2[0].aoData[void 0 !== e2 ? e2 : t2[0]]) && e2._details && (e2._details.remove(), e2._detailsShow = void 0, e2._details = void 0, H(e2.nTr).removeClass("dt-hasChild"), be(n2));
  }, De = "row().child", xe = De + "()", Se = (e(xe, function(t2, e2) {
    var n2 = this.context;
    return void 0 === t2 ? n2.length && this.length && n2[0].aoData[this[0]] ? n2[0].aoData[this[0]]._details : void 0 : (true === t2 ? this.child.show() : false === t2 ? ye(this) : n2.length && this.length && de(n2[0], n2[0].aoData[this[0]], t2, e2), this);
  }), e([De + ".show()", xe + ".show()"], function() {
    return fe(this, true), this;
  }), e([De + ".hide()", xe + ".hide()"], function() {
    return fe(this, false), this;
  }), e([De + ".remove()", xe + ".remove()"], function() {
    return ye(this), this;
  }), e(De + ".isShown()", function() {
    var t2 = this.context;
    return t2.length && this.length && t2[0].aoData[this[0]] && t2[0].aoData[this[0]]._detailsShow || false;
  }), /^([^:]+)?:(name|title|visIdx|visible)$/), xe = (e("columns()", function(n2, a2) {
    void 0 === n2 ? n2 = "" : H.isPlainObject(n2) && (a2 = n2, n2 = ""), a2 = ue(a2);
    var t2 = this.iterator("table", function(t3) {
      return e2 = n2, l2 = a2, s2 = (i2 = t3).aoColumns, u2 = m(s2, "sName"), c2 = m(s2, "sTitle"), t3 = V.util.get("[].[].cell")(i2.aoHeader), d2 = x(M([], t3)), se("column", e2, function(n3) {
        var a3, t4 = f(n3);
        if ("" === n3) return h(s2.length);
        if (null !== t4) return [0 <= t4 ? t4 : s2.length + t4];
        if ("function" == typeof n3) return a3 = ve(i2, l2), s2.map(function(t5, e4) {
          return n3(e4, he(i2, e4, 0, 0, a3), pe(i2, e4)) ? e4 : null;
        });
        var e3, r2, o2 = "string" == typeof n3 ? n3.match(Se) : "";
        if (o2) switch (o2[2]) {
          case "visIdx":
          case "visible":
            return o2[1] && o2[1].match(/^\d+$/) ? (e3 = parseInt(o2[1], 10)) < 0 ? [(r2 = s2.map(function(t5, e4) {
              return t5.bVisible ? e4 : null;
            }))[r2.length + e3]] : [at(i2, e3)] : s2.map(function(t5, e4) {
              return t5.bVisible && (!o2[1] || 0 < H(d2[e4]).filter(o2[1]).length) ? e4 : null;
            });
          case "name":
            return u2.map(function(t5, e4) {
              return t5 === o2[1] ? e4 : null;
            });
          case "title":
            return c2.map(function(t5, e4) {
              return t5 === o2[1] ? e4 : null;
            });
          default:
            return [];
        }
        return n3.nodeName && n3._DT_CellIndex ? [n3._DT_CellIndex.column] : (t4 = H(d2).filter(n3).map(function() {
          return dt(this);
        }).toArray()).length || !n3.nodeName ? t4 : (t4 = H(n3).closest("*[data-dt-column]")).length ? [t4.data("dt-column")] : [];
      }, i2, l2);
      var i2, e2, l2, s2, u2, c2, d2;
    }, 1);
    return t2.selector.cols = n2, t2.selector.opts = a2, t2;
  }), t("columns().header()", "column().header()", function(n2) {
    return this.iterator("column", function(t2, e2) {
      return pe(t2, e2, n2);
    }, 1);
  }), t("columns().footer()", "column().footer()", function(n2) {
    return this.iterator("column", function(t2, e2) {
      return t2.aoFooter.length ? t2.aoFooter[void 0 !== n2 ? n2 : 0][e2].cell : null;
    }, 1);
  }), t("columns().data()", "column().data()", function() {
    return this.iterator("column-rows", he, 1);
  }), t("columns().render()", "column().render()", function(o2) {
    return this.iterator("column-rows", function(t2, e2, n2, a2, r2) {
      return he(t2, e2, 0, 0, r2, o2);
    }, 1);
  }), t("columns().dataSrc()", "column().dataSrc()", function() {
    return this.iterator("column", function(t2, e2) {
      return t2.aoColumns[e2].mData;
    }, 1);
  }), t("columns().cache()", "column().cache()", function(o2) {
    return this.iterator("column-rows", function(t2, e2, n2, a2, r2) {
      return b(t2.aoData, r2, "search" === o2 ? "_aFilterData" : "_aSortData", e2);
    }, 1);
  }), t("columns().init()", "column().init()", function() {
    return this.iterator("column", function(t2, e2) {
      return t2.aoColumns[e2];
    }, 1);
  }), t("columns().nodes()", "column().nodes()", function() {
    return this.iterator("column-rows", function(t2, e2, n2, a2, r2) {
      return b(t2.aoData, r2, "anCells", e2);
    }, 1);
  }), t("columns().titles()", "column().title()", function(n2, a2) {
    return this.iterator("column", function(t2, e2) {
      "number" == typeof n2 && (a2 = n2, n2 = void 0);
      e2 = H("span.dt-column-title", this.column(e2).header(a2));
      return void 0 !== n2 ? (e2.html(n2), this) : e2.html();
    }, 1);
  }), t("columns().types()", "column().type()", function() {
    return this.iterator("column", function(t2, e2) {
      e2 = t2.aoColumns[e2].sType;
      return e2 || st(t2), e2;
    }, 1);
  }), t("columns().visible()", "column().visible()", function(n2, a2) {
    var e2 = this, r2 = [], t2 = this.iterator("column", function(t3, e3) {
      if (void 0 === n2) return t3.aoColumns[e3].bVisible;
      !function(t4, e4, n3) {
        var a3, r3, o2 = t4.aoColumns, i2 = o2[e4], l2 = t4.aoData;
        if (void 0 === n3) return i2.bVisible;
        if (i2.bVisible === n3) return false;
        if (n3) for (var s2 = m(o2, "bVisible").indexOf(true, e4 + 1), u2 = 0, c2 = l2.length; u2 < c2; u2++) l2[u2] && (r3 = l2[u2].nTr, a3 = l2[u2].anCells, r3) && r3.insertBefore(a3[e4], a3[s2] || null);
        else H(m(t4.aoData, "anCells", e4)).detach();
        return i2.bVisible = n3, Ut(t4), true;
      }(t3, e3, n2) || r2.push(e3);
    });
    return void 0 !== n2 && this.iterator("table", function(t3) {
      _t(t3, t3.aoHeader), _t(t3, t3.aoFooter), t3.aiDisplay.length || H(t3.nTBody).find("td[colspan]").attr("colspan", ot(t3)), Qt(t3), e2.iterator("column", function(t4, e3) {
        r2.includes(e3) && G(t4, null, "column-visibility", [t4, e3, n2, a2]);
      }), r2.length && (void 0 === a2 || a2) && e2.columns.adjust();
    }), t2;
  }), t("columns().widths()", "column().width()", function() {
    var t2 = this.columns(":visible").count(), t2 = H("<tr>").html("<td>" + Array(t2).join("</td><td>") + "</td>"), n2 = (H(this.table().body()).append(t2), t2.children().map(function() {
      return H(this).outerWidth();
    }));
    return t2.remove(), this.iterator("column", function(t3, e2) {
      t3 = rt(t3, e2);
      return null !== t3 ? n2[t3] : 0;
    }, 1);
  }), t("columns().indexes()", "column().index()", function(n2) {
    return this.iterator("column", function(t2, e2) {
      return "visible" === n2 ? rt(t2, e2) : e2;
    }, 1);
  }), e("columns.adjust()", function() {
    return this.iterator("table", function(t2) {
      nt(t2);
    }, 1);
  }), e("column.index()", function(t2, e2) {
    var n2;
    if (0 !== this.context.length) return n2 = this.context[0], "fromVisible" === t2 || "toData" === t2 ? at(n2, e2) : "fromData" === t2 || "toVisible" === t2 ? rt(n2, e2) : void 0;
  }), e("column()", function(t2, e2) {
    return ce(this.columns(t2, e2));
  }), e("cells()", function(g2, t2, v2) {
    var a2, r2, o2, i2, l2, s2, e2;
    return H.isPlainObject(g2) && (void 0 === g2.row ? (v2 = g2, g2 = null) : (v2 = t2, t2 = null)), H.isPlainObject(t2) && (v2 = t2, t2 = null), null == t2 ? this.iterator("table", function(t3) {
      return a3 = t3, t3 = g2, e3 = ue(v2), d2 = a3.aoData, f2 = ve(a3, e3), n2 = A(b(d2, f2, "anCells")), h2 = H(M([], n2)), p2 = a3.aoColumns.length, se("cell", t3, function(t4) {
        var e4, n3 = "function" == typeof t4;
        if (null == t4 || n3) {
          for (o3 = [], i3 = 0, l3 = f2.length; i3 < l3; i3++) for (r3 = f2[i3], s3 = 0; s3 < p2; s3++) u2 = { row: r3, column: s3 }, (!n3 || (c2 = d2[r3], t4(u2, q(a3, r3, s3), c2.anCells ? c2.anCells[s3] : null))) && o3.push(u2);
          return o3;
        }
        return H.isPlainObject(t4) ? void 0 !== t4.column && void 0 !== t4.row && -1 !== f2.indexOf(t4.row) ? [t4] : [] : (e4 = h2.filter(t4).map(function(t5, e5) {
          return { row: e5._DT_CellIndex.row, column: e5._DT_CellIndex.column };
        }).toArray()).length || !t4.nodeName ? e4 : (c2 = H(t4).closest("*[data-dt-row]")).length ? [{ row: c2.data("dt-row"), column: c2.data("dt-column") }] : [];
      }, a3, e3);
      var a3, e3, r3, o3, i3, l3, s3, u2, c2, d2, f2, n2, h2, p2;
    }) : (e2 = v2 ? { page: v2.page, order: v2.order, search: v2.search } : {}, a2 = this.columns(t2, e2), r2 = this.rows(g2, e2), e2 = this.iterator("table", function(t3, e3) {
      var n2 = [];
      for (o2 = 0, i2 = r2[e3].length; o2 < i2; o2++) for (l2 = 0, s2 = a2[e3].length; l2 < s2; l2++) n2.push({ row: r2[e3][o2], column: a2[e3][l2] });
      return n2;
    }, 1), e2 = v2 && v2.selected ? this.cells(e2, v2) : e2, H.extend(e2.selector, { cols: t2, rows: g2, opts: v2 }), e2);
  }), t("cells().nodes()", "cell().node()", function() {
    return this.iterator("cell", function(t2, e2, n2) {
      t2 = t2.aoData[e2];
      return t2 && t2.anCells ? t2.anCells[n2] : void 0;
    }, 1);
  }), e("cells().data()", function() {
    return this.iterator("cell", function(t2, e2, n2) {
      return q(t2, e2, n2);
    }, 1);
  }), t("cells().cache()", "cell().cache()", function(a2) {
    return a2 = "search" === a2 ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t2, e2, n2) {
      return t2.aoData[e2][a2][n2];
    }, 1);
  }), t("cells().render()", "cell().render()", function(a2) {
    return this.iterator("cell", function(t2, e2, n2) {
      return q(t2, e2, n2, a2);
    }, 1);
  }), t("cells().indexes()", "cell().index()", function() {
    return this.iterator("cell", function(t2, e2, n2) {
      return { row: e2, column: n2, columnVisible: rt(t2, n2) };
    }, 1);
  }), t("cells().invalidate()", "cell().invalidate()", function(a2) {
    return this.iterator("cell", function(t2, e2, n2) {
      bt(t2, e2, a2, n2);
    });
  }), e("cell()", function(t2, e2, n2) {
    return ce(this.cells(t2, e2, n2));
  }), e("cell().data()", function(t2) {
    var e2, n2, a2, r2, o2, i2 = this.context, l2 = this[0];
    return void 0 === t2 ? i2.length && l2.length ? q(i2[0], l2[0].row, l2[0].column) : void 0 : (e2 = i2[0], n2 = l2[0].row, a2 = l2[0].column, r2 = e2.aoColumns[a2], o2 = e2.aoData[n2]._aData, r2.fnSetData(o2, t2, { settings: e2, row: n2, col: a2 }), bt(i2[0], l2[0].row, "data", l2[0].column), this);
  }), e("order()", function(e2, t2) {
    var n2 = this.context, a2 = Array.prototype.slice.call(arguments);
    return void 0 === e2 ? 0 !== n2.length ? n2[0].aaSorting : void 0 : ("number" == typeof e2 ? e2 = [[e2, t2]] : 1 < a2.length && (e2 = a2), this.iterator("table", function(t3) {
      t3.aaSorting = Array.isArray(e2) ? e2.slice() : e2;
    }));
  }), e("order.listener()", function(e2, n2, a2) {
    return this.iterator("table", function(t2) {
      $t(t2, e2, {}, n2, a2);
    });
  }), e("order.fixed()", function(e2) {
    var t2;
    return e2 ? this.iterator("table", function(t3) {
      t3.aaSortingFixed = H.extend(true, {}, e2);
    }) : (t2 = (t2 = this.context).length ? t2[0].aaSortingFixed : void 0, Array.isArray(t2) ? { pre: t2 } : t2);
  }), e(["columns().order()", "column().order()"], function(n2) {
    var a2 = this;
    return n2 ? this.iterator("table", function(t2, e2) {
      t2.aaSorting = a2[e2].map(function(t3) {
        return [t3, n2];
      });
    }) : this.iterator("column", function(t2, e2) {
      for (var n3 = Gt(t2), a3 = 0, r2 = n3.length; a3 < r2; a3++) if (n3[a3].col === e2) return n3[a3].dir;
      return null;
    }, 1);
  }), t("columns().orderable()", "column().orderable()", function(n2) {
    return this.iterator("column", function(t2, e2) {
      t2 = t2.aoColumns[e2];
      return n2 ? t2.asSorting : t2.bSortable;
    }, 1);
  }), e("processing()", function(e2) {
    return this.iterator("table", function(t2) {
      w(t2, e2);
    });
  }), e("search()", function(e2, n2, a2, r2) {
    var t2 = this.context;
    return void 0 === e2 ? 0 !== t2.length ? t2[0].oPreviousSearch.search : void 0 : this.iterator("table", function(t3) {
      t3.oFeatures.bFilter && Rt(t3, "object" == typeof n2 ? H.extend(t3.oPreviousSearch, n2, { search: e2 }) : H.extend(t3.oPreviousSearch, { search: e2, regex: null !== n2 && n2, smart: null === a2 || a2, caseInsensitive: null === r2 || r2 }));
    });
  }), e("search.fixed()", function(e2, n2) {
    var t2 = this.iterator(true, "table", function(t3) {
      t3 = t3.searchFixed;
      return e2 ? void 0 === n2 ? t3[e2] : (null === n2 ? delete t3[e2] : t3[e2] = n2, this) : Object.keys(t3);
    });
    return void 0 !== e2 && void 0 === n2 ? t2[0] : t2;
  }), t("columns().search()", "column().search()", function(a2, r2, o2, i2) {
    return this.iterator("column", function(t2, e2) {
      var n2 = t2.aoPreSearchCols;
      if (void 0 === a2) return n2[e2].search;
      t2.oFeatures.bFilter && ("object" == typeof r2 ? H.extend(n2[e2], r2, { search: a2 }) : H.extend(n2[e2], { search: a2, regex: null !== r2 && r2, smart: null === o2 || o2, caseInsensitive: null === i2 || i2 }), Rt(t2, t2.oPreviousSearch));
    });
  }), e(["columns().search.fixed()", "column().search.fixed()"], function(n2, a2) {
    var t2 = this.iterator(true, "column", function(t3, e2) {
      t3 = t3.aoColumns[e2].searchFixed;
      return n2 ? void 0 === a2 ? t3[n2] : (null === a2 ? delete t3[n2] : t3[n2] = a2, this) : Object.keys(t3);
    });
    return void 0 !== n2 && void 0 === a2 ? t2[0] : t2;
  }), e("state()", function(t2, e2) {
    var n2;
    return t2 ? (n2 = H.extend(true, {}, t2), this.iterator("table", function(t3) {
      false !== e2 && (n2.time = +/* @__PURE__ */ new Date() + 100), Kt(t3, n2, function() {
      });
    })) : this.context.length ? this.context[0].oSavedState : null;
  }), e("state.clear()", function() {
    return this.iterator("table", function(t2) {
      t2.fnStateSaveCallback.call(t2.oInstance, t2, {});
    });
  }), e("state.loaded()", function() {
    return this.context.length ? this.context[0].oLoadedState : null;
  }), e("state.save()", function() {
    return this.iterator("table", function(t2) {
      Qt(t2);
    });
  }), V.use = function(t2, e2) {
    var n2 = "string" == typeof t2 ? e2 : t2, e2 = "string" == typeof e2 ? e2 : t2;
    if (void 0 === n2 && "string" == typeof e2) switch (e2) {
      case "lib":
      case "jq":
        return H;
      case "win":
        return W;
      case "datetime":
        return V.DateTime;
      case "luxon":
        return o;
      case "moment":
        return i;
      default:
        return null;
    }
    "lib" === e2 || "jq" === e2 || n2 && n2.fn && n2.fn.jquery ? H = n2 : "win" == e2 || n2 && n2.document ? _ = (W = n2).document : "datetime" === e2 || n2 && "DateTime" === n2.type ? V.DateTime = n2 : "luxon" === e2 || n2 && n2.FixedOffsetZone ? o = n2 : ("moment" === e2 || n2 && n2.isMoment) && (i = n2);
  }, V.factory = function(t2, e2) {
    var n2 = false;
    return t2 && t2.document && (_ = (W = t2).document), e2 && e2.fn && e2.fn.jquery && (H = e2, n2 = true), n2;
  }, V.versionCheck = function(t2, e2) {
    for (var n2, a2, r2 = (e2 || V.version).split("."), o2 = t2.split("."), i2 = 0, l2 = o2.length; i2 < l2; i2++) if ((n2 = parseInt(r2[i2], 10) || 0) !== (a2 = parseInt(o2[i2], 10) || 0)) return a2 < n2;
    return true;
  }, V.isDataTable = function(t2) {
    var r2 = H(t2).get(0), o2 = false;
    return t2 instanceof V.Api || (H.each(V.settings, function(t3, e2) {
      var n2 = e2.nScrollHead ? H("table", e2.nScrollHead)[0] : null, a2 = e2.nScrollFoot ? H("table", e2.nScrollFoot)[0] : null;
      e2.nTable !== r2 && n2 !== r2 && a2 !== r2 || (o2 = true);
    }), o2);
  }, V.tables = function(e2) {
    var t2 = false, n2 = (H.isPlainObject(e2) && (t2 = e2.api, e2 = e2.visible), V.settings.filter(function(t3) {
      return !(e2 && !H(t3.nTable).is(":visible"));
    }).map(function(t3) {
      return t3.nTable;
    }));
    return t2 ? new X(n2) : n2;
  }, V.camelToHungarian = B, e("$()", function(t2, e2) {
    e2 = this.rows(e2).nodes(), e2 = H(e2);
    return H([].concat(e2.filter(t2).toArray(), e2.find(t2).toArray()));
  }), H.each(["on", "one", "off"], function(t2, n2) {
    e(n2 + "()", function() {
      var t3 = Array.prototype.slice.call(arguments), e2 = (t3[0] = t3[0].split(/\s/).map(function(t4) {
        return t4.match(/\.dt\b/) ? t4 : t4 + ".dt";
      }).join(" "), H(this.tables().nodes()));
      return e2[n2].apply(e2, t3), this;
    });
  }), e("clear()", function() {
    return this.iterator("table", function(t2) {
      mt(t2);
    });
  }), e("error()", function(e2) {
    return this.iterator("table", function(t2) {
      $(t2, 0, e2);
    });
  }), e("settings()", function() {
    return new X(this.context, this.context);
  }), e("init()", function() {
    var t2 = this.context;
    return t2.length ? t2[0].oInit : null;
  }), e("data()", function() {
    return this.iterator("table", function(t2) {
      return m(t2.aoData, "_aData");
    }).flatten();
  }), e("trigger()", function(e2, n2, a2) {
    return this.iterator("table", function(t2) {
      return G(t2, null, e2, n2, a2);
    }).flatten();
  }), e("ready()", function(t2) {
    var e2 = this.context;
    return t2 ? this.tables().every(function() {
      this.context[0]._bInitComplete ? t2.call(this) : this.on("init.dt.DT", function() {
        t2.call(this);
      });
    }) : e2.length ? e2[0]._bInitComplete || false : null;
  }), e("destroy()", function(c2) {
    return c2 = c2 || false, this.iterator("table", function(t2) {
      var e2 = t2.oClasses, n2 = t2.nTable, a2 = t2.nTBody, r2 = t2.nTHead, o2 = t2.nTFoot, i2 = H(n2), a2 = H(a2), l2 = H(t2.nTableWrapper), s2 = t2.aoData.map(function(t3) {
        return t3 ? t3.nTr : null;
      }), u2 = e2.order, o2 = (t2.bDestroying = true, G(t2, "aoDestroyCallback", "destroy", [t2], true), c2 || new X(t2).columns().visible(true), l2.off(".DT").find(":not(tbody *)").off(".DT"), H(W).off(".DT-" + t2.sInstance), n2 != r2.parentNode && (i2.children("thead").detach(), i2.append(r2)), o2 && n2 != o2.parentNode && (i2.children("tfoot").detach(), i2.append(o2)), t2.colgroup.remove(), t2.aaSorting = [], t2.aaSortingFixed = [], Zt(t2), H("th, td", r2).removeClass(u2.canAsc + " " + u2.canDesc + " " + u2.isAsc + " " + u2.isDesc).css("width", ""), a2.children().detach(), a2.append(s2), t2.nTableWrapper.parentNode), r2 = t2.nTableWrapper.nextSibling, u2 = c2 ? "remove" : "detach", a2 = (i2[u2](), l2[u2](), !c2 && o2 && (o2.insertBefore(n2, r2), i2.css("width", t2.sDestroyWidth).removeClass(e2.table)), V.settings.indexOf(t2));
      -1 !== a2 && V.settings.splice(a2, 1);
    });
  }), H.each(["column", "row", "cell"], function(t2, s2) {
    e(s2 + "s().every()", function(a2) {
      var r2, o2 = this.selector.opts, i2 = this, l2 = 0;
      return this.iterator("every", function(t3, e2, n2) {
        r2 = i2[s2](e2, o2), "cell" === s2 ? a2.call(r2, r2[0][0].row, r2[0][0].column, n2, l2) : a2.call(r2, e2, n2, l2), l2++;
      });
    });
  }), e("i18n()", function(t2, e2, n2) {
    var a2 = this.context[0], t2 = U(t2)(a2.oLanguage);
    return "string" == typeof (t2 = H.isPlainObject(t2 = void 0 === t2 ? e2 : t2) ? void 0 !== n2 && void 0 !== t2[n2] ? t2[n2] : t2._ : t2) ? t2.replace("%d", n2) : t2;
  }), V.version = "2.1.8", V.settings = [], V.models = {}, V.models.oSearch = { caseInsensitive: true, search: "", regex: false, smart: true, return: false }, V.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, src: null, idx: -1, displayData: null }, V.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: false, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null, maxLenString: null, searchFixed: null }, V.defaults = { aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], bAutoWidth: true, bDeferRender: true, bDestroy: false, bFilter: true, bInfo: true, bLengthChange: true, bPaginate: true, bProcessing: false, bRetrieve: false, bScrollCollapse: false, bServerSide: false, bSort: true, bSortMulti: true, bSortCellsTop: null, bSortClasses: true, bStateSave: false, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function(t2) {
    return t2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
  }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnStateLoadCallback: function(t2) {
    try {
      return JSON.parse((-1 === t2.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t2.sInstance + "_" + location.pathname));
    } catch (t3) {
      return {};
    }
  }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function(t2, e2) {
    try {
      (-1 === t2.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t2.sInstance + "_" + location.pathname, JSON.stringify(e2));
    } catch (t3) {
    }
  }, fnStateSaveParams: null, iStateDuration: 7200, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: { oAria: { orderable: ": Activate to sort", orderableReverse: ": Activate to invert sorting", orderableRemove: ": Activate to remove sorting", paginate: { first: "First", last: "Last", next: "Next", previous: "Previous", number: "" } }, oPaginate: { sFirst: "\xAB", sLast: "\xBB", sNext: "\u203A", sPrevious: "\u2039" }, entries: { _: "entries", 1: "entry" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_", sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_", sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "_MENU_ _ENTRIES_ per page", sLoadingRecords: "Loading...", sProcessing: "", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" }, orderDescReverse: true, oSearch: H.extend({}, V.models.oSearch), layout: { topStart: "pageLength", topEnd: "search", bottomStart: "info", bottomEnd: "paging" }, sDom: null, searchDelay: null, sPaginationType: "", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId", caption: null, iDeferLoading: null }, Z(V.defaults), V.defaults.column = { aDataSort: null, iDataSort: -1, ariaTitle: "", asSorting: ["asc", "desc", ""], bSearchable: true, bSortable: true, bVisible: true, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }, Z(V.defaults.column), V.models.oSettings = { oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: true, bLengthChange: true, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollbarLeft: false, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, searchFixed: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bInitialised: false, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", pagingControls: 0, iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, bAjaxDataGet: true, jqXHR: null, json: void 0, oAjaxData: void 0, sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: false, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: false, bSorted: false, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function() {
    return "ssp" == J(this) ? +this._iRecordsTotal : this.aiDisplayMaster.length;
  }, fnRecordsDisplay: function() {
    return "ssp" == J(this) ? +this._iRecordsDisplay : this.aiDisplay.length;
  }, fnDisplayEnd: function() {
    var t2 = this._iDisplayLength, e2 = this._iDisplayStart, n2 = e2 + t2, a2 = this.aiDisplay.length, r2 = this.oFeatures, o2 = r2.bPaginate;
    return r2.bServerSide ? false === o2 || -1 === t2 ? e2 + a2 : Math.min(e2 + t2, this._iRecordsDisplay) : !o2 || a2 < n2 || -1 === t2 ? a2 : n2;
  }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null, caption: "", captionNode: null, colgroup: null, deferLoading: null, typeDetect: true }, V.ext.pager);
  H.extend(xe, { simple: function() {
    return ["previous", "next"];
  }, full: function() {
    return ["first", "previous", "next", "last"];
  }, numbers: function() {
    return ["numbers"];
  }, simple_numbers: function() {
    return ["previous", "numbers", "next"];
  }, full_numbers: function() {
    return ["first", "previous", "numbers", "next", "last"];
  }, first_last: function() {
    return ["first", "last"];
  }, first_last_numbers: function() {
    return ["first", "numbers", "last"];
  }, _numbers: Ee, numbers_length: 7 }), H.extend(true, V.ext.renderer, { pagingButton: { _: function(t2, e2, n2, a2, r2) {
    var t2 = t2.oClasses.paging, o2 = [t2.button];
    return a2 && o2.push(t2.active), r2 && o2.push(t2.disabled), { display: a2 = "ellipsis" === e2 ? H('<span class="ellipsis"></span>').html(n2)[0] : H("<button>", { class: o2.join(" "), role: "link", type: "button" }).html(n2), clicker: a2 };
  } }, pagingContainer: { _: function(t2, e2) {
    return e2;
  } } });
  function we(t2, e2, n2, a2, r2) {
    return i ? t2[e2](r2) : o ? t2[n2](r2) : a2 ? t2[a2](r2) : t2;
  }
  var o, i, Te = false;
  function _e(t2, e2, n2) {
    var a2;
    if (W.luxon && !o && (o = W.luxon), i = W.moment && !i ? W.moment : i) {
      if (!(a2 = i.utc(t2, e2, n2, true)).isValid()) return null;
    } else if (o) {
      if (!(a2 = e2 && "string" == typeof t2 ? o.DateTime.fromFormat(t2, e2) : o.DateTime.fromISO(t2)).isValid) return null;
      a2.setLocale(n2);
    } else e2 ? (Te || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), Te = true) : a2 = new Date(t2);
    return a2;
  }
  function Ce(s2) {
    return function(a2, r2, o2, i2) {
      0 === arguments.length ? (o2 = "en", a2 = r2 = null) : 1 === arguments.length ? (o2 = "en", r2 = a2, a2 = null) : 2 === arguments.length && (o2 = r2, r2 = a2, a2 = null);
      var l2 = "datetime" + (r2 ? "-" + r2 : "");
      return V.ext.type.order[l2 + "-pre"] || V.type(l2, { detect: function(t2) {
        return t2 === l2 && l2;
      }, order: { pre: function(t2) {
        return t2.valueOf();
      } }, className: "dt-right" }), function(t2, e2) {
        var n2;
        return null == t2 && (t2 = "--now" === i2 ? (n2 = /* @__PURE__ */ new Date(), new Date(Date.UTC(n2.getFullYear(), n2.getMonth(), n2.getDate(), n2.getHours(), n2.getMinutes(), n2.getSeconds()))) : ""), "type" === e2 ? l2 : "" === t2 ? "sort" !== e2 ? "" : _e("0000-01-01 00:00:00", null, o2) : !(null === r2 || a2 !== r2 || "sort" === e2 || "type" === e2 || t2 instanceof Date) || null === (n2 = _e(t2, a2, o2)) ? t2 : "sort" === e2 ? n2 : (t2 = null === r2 ? we(n2, "toDate", "toJSDate", "")[s2]() : we(n2, "format", "toFormat", "toISOString", r2), "display" === e2 ? u(t2) : t2);
      };
    };
  }
  var Le = ",", Ie = ".";
  if (void 0 !== W.Intl) try {
    for (var Ae = new Intl.NumberFormat().formatToParts(100000.1), a = 0; a < Ae.length; a++) "group" === Ae[a].type ? Le = Ae[a].value : "decimal" === Ae[a].type && (Ie = Ae[a].value);
  } catch (t2) {
  }
  V.datetime = function(n2, a2) {
    var r2 = "datetime-" + n2;
    a2 = a2 || "en", V.ext.type.order[r2] || V.type(r2, { detect: function(t2) {
      var e2 = _e(t2, n2, a2);
      return !("" !== t2 && !e2) && r2;
    }, order: { pre: function(t2) {
      return _e(t2, n2, a2) || 0;
    } }, className: "dt-right" });
  }, V.render = { date: Ce("toLocaleDateString"), datetime: Ce("toLocaleString"), time: Ce("toLocaleTimeString"), number: function(r2, o2, i2, l2, s2) {
    return null == r2 && (r2 = Le), null == o2 && (o2 = Ie), { display: function(t2) {
      if ("number" != typeof t2 && "string" != typeof t2) return t2;
      if ("" === t2 || null === t2) return t2;
      var e2 = t2 < 0 ? "-" : "", n2 = parseFloat(t2), a2 = Math.abs(n2);
      if (1e11 <= a2 || a2 < 1e-4 && 0 !== a2) return (a2 = n2.toExponential(i2).split(/e\+?/))[0] + " x 10<sup>" + a2[1] + "</sup>";
      if (isNaN(n2)) return u(t2);
      n2 = n2.toFixed(i2), t2 = Math.abs(n2);
      a2 = parseInt(t2, 10), n2 = i2 ? o2 + (t2 - a2).toFixed(i2).substring(2) : "";
      return (e2 = 0 === a2 && 0 === parseFloat(n2) ? "" : e2) + (l2 || "") + a2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r2) + n2 + (s2 || "");
    } };
  }, text: function() {
    return { display: u, filter: u };
  } };
  function Fe(t2, e2) {
    return t2 = null != t2 ? t2.toString().toLowerCase() : "", e2 = null != e2 ? e2.toString().toLowerCase() : "", t2.localeCompare(e2, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true });
  }
  var l = V.ext.type, Ne = (V.type = function(n2, t2, e2) {
    if (!t2) return { className: l.className[n2], detect: l.detect.find(function(t3) {
      return t3._name === n2;
    }), order: { pre: l.order[n2 + "-pre"], asc: l.order[n2 + "-asc"], desc: l.order[n2 + "-desc"] }, render: l.render[n2], search: l.search[n2] };
    function a2(t3, e3) {
      l[t3][n2] = e3;
    }
    function r2(t3) {
      Object.defineProperty(t3, "_name", { value: n2 });
      var e3 = l.detect.findIndex(function(t4) {
        return t4._name === n2;
      });
      -1 === e3 ? l.detect.unshift(t3) : l.detect.splice(e3, 1, t3);
    }
    function o2(t3) {
      l.order[n2 + "-pre"] = t3.pre, l.order[n2 + "-asc"] = t3.asc, l.order[n2 + "-desc"] = t3.desc;
    }
    void 0 === e2 && (e2 = t2, t2 = null), "className" === t2 ? a2("className", e2) : "detect" === t2 ? r2(e2) : "order" === t2 ? o2(e2) : "render" === t2 ? a2("render", e2) : "search" === t2 ? a2("search", e2) : t2 || (e2.className && a2("className", e2.className), void 0 !== e2.detect && r2(e2.detect), e2.order && o2(e2.order), void 0 !== e2.render && a2("render", e2.render), void 0 !== e2.search && a2("search", e2.search));
  }, V.types = function() {
    return l.detect.map(function(t2) {
      return t2._name;
    });
  }, V.type("string", { detect: function() {
    return "string";
  }, order: { pre: function(t2) {
    return T(t2) && "boolean" != typeof t2 ? "" : "string" == typeof t2 ? t2.toLowerCase() : t2.toString ? t2.toString() : "";
  } }, search: ge(false, true) }), V.type("string-utf8", { detect: { allOf: function(t2) {
    return true;
  }, oneOf: function(t2) {
    return !T(t2) && navigator.languages && "string" == typeof t2 && t2.match(/[^\x00-\x7F]/);
  } }, order: { asc: Fe, desc: function(t2, e2) {
    return -1 * Fe(t2, e2);
  } }, search: ge(false, true) }), V.type("html", { detect: { allOf: function(t2) {
    return T(t2) || "string" == typeof t2 && -1 !== t2.indexOf("<");
  }, oneOf: function(t2) {
    return !T(t2) && "string" == typeof t2 && -1 !== t2.indexOf("<");
  } }, order: { pre: function(t2) {
    return T(t2) ? "" : t2.replace ? L(t2).trim().toLowerCase() : t2 + "";
  } }, search: ge(true, true) }), V.type("date", { className: "dt-type-date", detect: { allOf: function(t2) {
    var e2;
    return !t2 || t2 instanceof Date || R.test(t2) ? null !== (e2 = Date.parse(t2)) && !isNaN(e2) || T(t2) : null;
  }, oneOf: function(t2) {
    return t2 instanceof Date || "string" == typeof t2 && R.test(t2);
  } }, order: { pre: function(t2) {
    t2 = Date.parse(t2);
    return isNaN(t2) ? -1 / 0 : t2;
  } } }), V.type("html-num-fmt", { className: "dt-type-numeric", detect: { allOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return c(t2, e2, true, false);
  }, oneOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return c(t2, e2, true, false);
  } }, order: { pre: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return Ne(t2, e2, N, P);
  } }, search: ge(true, true) }), V.type("html-num", { className: "dt-type-numeric", detect: { allOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return c(t2, e2, false, true);
  }, oneOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return c(t2, e2, false, false);
  } }, order: { pre: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return Ne(t2, e2, N);
  } }, search: ge(true, true) }), V.type("num-fmt", { className: "dt-type-numeric", detect: { allOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return s(t2, e2, true, true);
  }, oneOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return s(t2, e2, true, false);
  } }, order: { pre: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return Ne(t2, e2, P);
  } } }), V.type("num", { className: "dt-type-numeric", detect: { allOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return s(t2, e2, false, true);
  }, oneOf: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return s(t2, e2, false, false);
  } }, order: { pre: function(t2, e2) {
    e2 = e2.oLanguage.sDecimal;
    return Ne(t2, e2);
  } } }), function(t2, e2, n2, a2) {
    var r2;
    return 0 === t2 || t2 && "-" !== t2 ? "number" == (r2 = typeof t2) || "bigint" == r2 ? t2 : +(t2 = (t2 = e2 ? E(t2, e2) : t2).replace && (n2 && (t2 = t2.replace(n2, "")), a2) ? t2.replace(a2, "") : t2) : -1 / 0;
  });
  function je(t2, e2, n2) {
    n2 && (t2[e2] = n2);
  }
  H.extend(true, V.ext.renderer, { footer: { _: function(t2, e2, n2) {
    e2.addClass(n2.tfoot.cell);
  } }, header: { _: function(p2, g2, v2) {
    g2.addClass(v2.thead.cell), p2.oFeatures.bSort || g2.addClass(v2.order.none);
    var t2 = p2.bSortCellsTop, e2 = g2.closest("thead").find("tr"), n2 = g2.parent().index();
    "disable" === g2.attr("data-dt-order") || "disable" === g2.parent().attr("data-dt-order") || true === t2 && 0 !== n2 || false === t2 && n2 !== e2.length - 1 || H(p2.nTable).on("order.dt.DT column-visibility.dt.DT", function(t3, e3) {
      if (p2 === e3) {
        var n3 = e3.sortDetails;
        if (n3) {
          for (var a2 = v2.order, r2 = e3.api.columns(g2), o2 = p2.aoColumns[r2.flatten()[0]], i2 = r2.orderable().includes(true), l2 = "", s2 = r2.indexes(), u2 = r2.orderable(true).flatten(), c2 = m(n3, "col"), d2 = (g2.removeClass(a2.isAsc + " " + a2.isDesc).toggleClass(a2.none, !i2).toggleClass(a2.canAsc, i2 && u2.includes("asc")).toggleClass(a2.canDesc, i2 && u2.includes("desc")), true), f2 = 0; f2 < s2.length; f2++) c2.includes(s2[f2]) || (d2 = false);
          d2 && (u2 = r2.order(), g2.addClass(u2.includes("asc") ? a2.isAsc : "" + u2.includes("desc") ? a2.isDesc : ""));
          var h2 = -1;
          for (f2 = 0; f2 < c2.length; f2++) if (p2.aoColumns[c2[f2]].bVisible) {
            h2 = c2[f2];
            break;
          }
          s2[0] == h2 ? (r2 = n3[0], u2 = o2.asSorting, g2.attr("aria-sort", "asc" === r2.dir ? "ascending" : "descending"), l2 = u2[r2.index + 1] ? "Reverse" : "Remove") : g2.removeAttr("aria-sort"), g2.attr("aria-label", i2 ? o2.ariaTitle + e3.api.i18n("oAria.orderable" + l2) : o2.ariaTitle), i2 && (g2.find(".dt-column-title").attr("role", "button"), g2.attr("tabindex", 0));
        }
      }
    });
  } }, layout: { _: function(t2, e2, n2) {
    var a2 = t2.oClasses.layout, r2 = H("<div/>").attr("id", n2.id || null).addClass(n2.className || a2.row).appendTo(e2);
    H.each(n2, function(t3, e3) {
      var n3;
      "id" !== t3 && "className" !== t3 && (n3 = "", e3.table && (r2.addClass(a2.tableRow), n3 += a2.tableCell + " "), n3 += "start" === t3 ? a2.start : "end" === t3 ? a2.end : a2.full, H("<div/>").attr({ id: e3.id || null, class: e3.className || a2.cell + " " + n3 }).append(e3.contents).appendTo(r2));
    });
  } } }), V.feature = {}, V.feature.register = function(t2, e2, n2) {
    V.ext.features[t2] = e2, n2 && C.feature.push({ cFeature: n2, fnInit: e2 });
  }, V.feature.register("div", function(t2, e2) {
    var n2 = H("<div>")[0];
    return e2 && (je(n2, "className", e2.className), je(n2, "id", e2.id), je(n2, "innerHTML", e2.html), je(n2, "textContent", e2.text)), n2;
  }), V.feature.register("info", function(t2, s2) {
    var e2, n2, u2;
    return t2.oFeatures.bInfo ? (e2 = t2.oLanguage, n2 = t2.sTableId, u2 = H("<div/>", { class: t2.oClasses.info.container }), s2 = H.extend({ callback: e2.fnInfoCallback, empty: e2.sInfoEmpty, postfix: e2.sInfoPostFix, search: e2.sInfoFiltered, text: e2.sInfo }, s2), t2.aoDrawCallback.push(function(t3) {
      var e3 = s2, n3 = u2, a2 = t3._iDisplayStart + 1, r2 = t3.fnDisplayEnd(), o2 = t3.fnRecordsTotal(), i2 = t3.fnRecordsDisplay(), l2 = i2 ? e3.text : e3.empty;
      i2 !== o2 && (l2 += " " + e3.search), l2 += e3.postfix, l2 = re(t3, l2), e3.callback && (l2 = e3.callback.call(t3.oInstance, t3, a2, r2, o2, i2, l2)), n3.html(l2), G(t3, null, "info", [t3, n3[0], l2]);
    }), t2._infoEl || (u2.attr({ "aria-live": "polite", id: n2 + "_info", role: "status" }), H(t2.nTable).attr("aria-describedby", n2 + "_info"), t2._infoEl = u2), u2) : null;
  }, "i");
  var Re = 0;
  function Oe(t2) {
    var e2 = [];
    return t2.numbers && e2.push("numbers"), t2.previousNext && (e2.unshift("previous"), e2.push("next")), t2.firstLast && (e2.unshift("first"), e2.push("last")), e2;
  }
  function Pe(t2, e2, n2, a2) {
    var r2 = t2.oLanguage.oPaginate, o2 = { display: "", active: false, disabled: false };
    switch (e2) {
      case "ellipsis":
        o2.display = "&#x2026;", o2.disabled = true;
        break;
      case "first":
        o2.display = r2.sFirst, 0 === n2 && (o2.disabled = true);
        break;
      case "previous":
        o2.display = r2.sPrevious, 0 === n2 && (o2.disabled = true);
        break;
      case "next":
        o2.display = r2.sNext, 0 !== a2 && n2 !== a2 - 1 || (o2.disabled = true);
        break;
      case "last":
        o2.display = r2.sLast, 0 !== a2 && n2 !== a2 - 1 || (o2.disabled = true);
        break;
      default:
        "number" == typeof e2 && (o2.display = t2.fnFormatNumber(e2 + 1), n2 === e2) && (o2.active = true);
    }
    return o2;
  }
  function Ee(t2, e2, n2, a2) {
    var r2 = [], o2 = Math.floor(n2 / 2), i2 = a2 ? 2 : 1, l2 = a2 ? 1 : 0;
    return e2 <= n2 ? r2 = h(0, e2) : 1 === n2 ? r2 = [t2] : 3 === n2 ? t2 <= 1 ? r2 = [0, 1, "ellipsis"] : e2 - 2 <= t2 ? (r2 = h(e2 - 2, e2)).unshift("ellipsis") : r2 = ["ellipsis", t2, "ellipsis"] : t2 <= o2 ? ((r2 = h(0, n2 - i2)).push("ellipsis"), a2 && r2.push(e2 - 1)) : e2 - 1 - o2 <= t2 ? ((r2 = h(e2 - (n2 - i2), e2)).unshift("ellipsis"), a2 && r2.unshift(0)) : ((r2 = h(t2 - o2 + i2, t2 + o2 - l2)).push("ellipsis"), r2.unshift("ellipsis"), a2 && (r2.push(e2 - 1), r2.unshift(0))), r2;
  }
  V.feature.register("search", function(n2, a2) {
    var t2, e2, r2, o2, i2, l2, s2, u2, c2, d2;
    return n2.oFeatures.bFilter ? (t2 = n2.oClasses.search, e2 = n2.sTableId, c2 = n2.oLanguage, r2 = n2.oPreviousSearch, o2 = '<input type="search" class="' + t2.input + '"/>', -1 === (a2 = H.extend({ placeholder: c2.sSearchPlaceholder, processing: false, text: c2.sSearch }, a2)).text.indexOf("_INPUT_") && (a2.text += "_INPUT_"), a2.text = re(n2, a2.text), c2 = a2.text.match(/_INPUT_$/), s2 = a2.text.match(/^_INPUT_/), i2 = a2.text.replace(/_INPUT_/, ""), l2 = "<label>" + a2.text + "</label>", s2 ? l2 = "_INPUT_<label>" + i2 + "</label>" : c2 && (l2 = "<label>" + i2 + "</label>_INPUT_"), (s2 = H("<div>").addClass(t2.container).append(l2.replace(/_INPUT_/, o2))).find("label").attr("for", "dt-search-" + Re), s2.find("input").attr("id", "dt-search-" + Re), Re++, u2 = function(t3) {
      var e3 = this.value;
      r2.return && "Enter" !== t3.key || e3 != r2.search && Vt(n2, a2.processing, function() {
        r2.search = e3, Rt(n2, r2), n2._iDisplayStart = 0, S(n2);
      });
    }, c2 = null !== n2.searchDelay ? n2.searchDelay : 0, d2 = H("input", s2).val(r2.search).attr("placeholder", a2.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", c2 ? V.util.debounce(u2, c2) : u2).on("mouseup.DT", function(t3) {
      setTimeout(function() {
        u2.call(d2[0], t3);
      }, 10);
    }).on("keypress.DT", function(t3) {
      if (13 == t3.keyCode) return false;
    }).attr("aria-controls", e2), H(n2.nTable).on("search.dt.DT", function(t3, e3) {
      n2 === e3 && d2[0] !== _.activeElement && d2.val("function" != typeof r2.search ? r2.search : "");
    }), s2) : null;
  }, "f"), V.feature.register("paging", function(t2, e2) {
    if (!t2.oFeatures.bPaginate) return null;
    e2 = H.extend({ buttons: V.ext.pager.numbers_length, type: t2.sPaginationType, boundaryNumbers: true, firstLast: true, previousNext: true, numbers: true }, e2);
    function n2() {
      !function t3(e3, n3, a3) {
        if (!e3._bInitComplete) return;
        var r2 = a3.type ? V.ext.pager[a3.type] : Oe, o2 = e3.oLanguage.oAria.paginate || {}, i2 = e3._iDisplayStart, l2 = e3._iDisplayLength, s2 = e3.fnRecordsDisplay(), u2 = -1 === l2, c2 = u2 ? 0 : Math.ceil(i2 / l2), d2 = u2 ? 1 : Math.ceil(s2 / l2), f2 = [], h2 = [], i2 = r2(a3).map(function(t4) {
          return "numbers" === t4 ? Ee(c2, d2, a3.buttons, a3.boundaryNumbers) : t4;
        });
        f2 = f2.concat.apply(f2, i2);
        for (var p2 = 0; p2 < f2.length; p2++) {
          var g2 = f2[p2], v2 = Pe(e3, g2, c2, d2), m2 = ae(e3, "pagingButton")(e3, g2, v2.display, v2.active, v2.disabled), b2 = "string" == typeof g2 ? o2[g2] : o2.number ? o2.number + (g2 + 1) : null;
          H(m2.clicker).attr({ "aria-controls": e3.sTableId, "aria-disabled": v2.disabled ? "true" : null, "aria-current": v2.active ? "page" : null, "aria-label": b2, "data-dt-idx": g2, tabIndex: v2.disabled ? -1 : e3.iTabIndex || null }), "number" != typeof g2 && H(m2.clicker).addClass(g2), ee(m2.clicker, { action: g2 }, function(t4) {
            t4.preventDefault(), Xt(e3, t4.data.action, true);
          }), h2.push(m2.display);
        }
        u2 = ae(e3, "pagingContainer")(e3, h2);
        s2 = n3.find(_.activeElement).data("dt-idx");
        n3.empty().append(u2);
        void 0 !== s2 && n3.find("[data-dt-idx=" + s2 + "]").trigger("focus");
        h2.length && 1 < a3.buttons && H(n3).height() >= 2 * H(h2[0]).outerHeight() - 10 && t3(e3, n3, H.extend({}, a3, { buttons: a3.buttons - 2 }));
      }(t2, a2.children(), e2);
    }
    var a2 = H("<div/>").addClass(t2.oClasses.paging.container + (e2.type ? " paging_" + e2.type : "")).append(H("<nav>").attr("aria-label", "pagination").addClass(t2.oClasses.paging.nav));
    return t2.aoDrawCallback.push(n2), H(t2.nTable).on("column-sizing.dt.DT", n2), a2;
  }, "p");
  var ke = 0;
  return V.feature.register("pageLength", function(a2, t2) {
    var e2 = a2.oFeatures;
    if (!e2.bPaginate || !e2.bLengthChange) return null;
    t2 = H.extend({ menu: a2.aLengthMenu, text: a2.oLanguage.sLengthMenu }, t2);
    var e2 = a2.oClasses.length, n2 = a2.sTableId, r2 = t2.menu, o2 = [], i2 = [];
    if (Array.isArray(r2[0])) o2 = r2[0], i2 = r2[1];
    else for (p2 = 0; p2 < r2.length; p2++) H.isPlainObject(r2[p2]) ? (o2.push(r2[p2].value), i2.push(r2[p2].label)) : (o2.push(r2[p2]), i2.push(r2[p2]));
    for (var l2 = t2.text.match(/_MENU_$/), s2 = t2.text.match(/^_MENU_/), u2 = t2.text.replace(/_MENU_/, ""), t2 = "<label>" + t2.text + "</label>", s2 = (s2 ? t2 = "_MENU_<label>" + u2 + "</label>" : l2 && (t2 = "<label>" + u2 + "</label>_MENU_"), "tmp-" + +/* @__PURE__ */ new Date()), c2 = H("<div/>").addClass(e2.container).append(t2.replace("_MENU_", '<span id="' + s2 + '"></span>')), d2 = [], f2 = (Array.from(c2.find("label")[0].childNodes).forEach(function(t3) {
      t3.nodeType === Node.TEXT_NODE && d2.push({ el: t3, text: t3.textContent });
    }), function(e3) {
      d2.forEach(function(t3) {
        t3.el.textContent = re(a2, t3.text, e3);
      });
    }), h2 = H("<select/>", { name: n2 + "_length", "aria-controls": n2, class: e2.select }), p2 = 0; p2 < o2.length; p2++) h2[0][p2] = new Option("number" == typeof i2[p2] ? a2.fnFormatNumber(i2[p2]) : i2[p2], o2[p2]);
    return c2.find("label").attr("for", "dt-length-" + ke), h2.attr("id", "dt-length-" + ke), ke++, c2.find("#" + s2).replaceWith(h2), H("select", c2).val(a2._iDisplayLength).on("change.DT", function() {
      Wt(a2, H(this).val()), S(a2);
    }), H(a2.nTable).on("length.dt.DT", function(t3, e3, n3) {
      a2 === e3 && (H("select", c2).val(n3), f2(n3));
    }), f2(a2._iDisplayLength), c2;
  }, "l"), ((H.fn.dataTable = V).$ = H).fn.dataTableSettings = V.settings, H.fn.dataTableExt = V.ext, H.fn.DataTable = function(t2) {
    return H(this).dataTable(t2).api();
  }, H.each(V, function(t2, e2) {
    H.fn.DataTable[t2] = e2;
  }), V;
});
//# sourceMappingURL=scripts.js.map
