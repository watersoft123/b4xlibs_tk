! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = re.type(e);
        return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (re.isFunction(t)) return re.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return re.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return re.inArray(e, t) >= 0 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = xe[e] = {};
        return re.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), re.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Se, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n
                } catch (r) {}
                re.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (re.acceptData(e)) {
            var r, o, a = re.expando,
                s = e.nodeType,
                l = s ? re.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = Y.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: re.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
        }
    }

    function d(e, t, n) {
        if (re.acceptData(e)) {
            var i, r, o = e.nodeType,
                a = o ? re.cache : e,
                s = o ? e[re.expando] : re.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !re.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = Me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function v(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, v(i, t));
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
    }

    function m(e) {
        je.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Xe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
    }

    function C(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var n, i, r, o = re._data(e),
                a = re._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }

    function T(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                r = re._data(t);
                for (i in r.events) re.removeEvent(t, i, r.handle);
                t.removeAttribute(re.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function k(t, n) {
        var i, r = re(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), o
    }

    function S(e) {
        var t = he,
            n = Ze[e];
        return n || (n = k(e, t), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Ke.detach()), Ze[e] = n), n
    }

    function E(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ft.length; r--;)
            if (t = ft[r] + n, t in e) return t;
        return i
    }

    function A(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ae(i) && (o[a] = re._data(i, "olddisplay", S(i.nodeName)))) : (r = Ae(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function O(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function j(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + Ne[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Ne[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Ne[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Ne[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Ne[o] + "Width", !0, r)));
        return a
    }

    function D(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
            i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + j(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function _(e, t, n, i, r) {
        return new _.prototype.init(e, t, n, i, r)
    }

    function P() {
        return setTimeout(function() {
            pt = void 0
        }), pt = re.now()
    }

    function L(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ne[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function q(e, t, n) {
        for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function M(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ae(e),
            g = re._data(e, "fxshow");
        n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(e, "display"), c = "none" === u ? re._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], gt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    h = !0
                }
                f[i] = g && g[i] || re.style(e, i)
            } else u = void 0;
        if (re.isEmptyObject(f)) "inline" === ("none" === u ? S(e.nodeName) : u) && (p.display = u);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = re._data(e, "fxshow", {}), o && (g.hidden = !h), h ? re(e).show() : d.done(function() {
                re(e).hide()
            }), d.done(function() {
                var t;
                re._removeData(e, "fxshow");
                for (t in f) re.style(e, t, f[t])
            });
            for (i in f) a = q(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function I(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function H(e, t, n) {
        var i, r, o = 0,
            a = yt.length,
            s = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = pt || P(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (I(c, u.opts.specialEasing); a > o; o++)
            if (i = yt[o].call(u, e, c, u.opts)) return i;
        return re.map(c, q, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function R(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function F(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, re.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            a = e === zt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function $(e, t) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && re.extend(!0, e, n), e
    }

    function W(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (r in u)
                    if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function V(e, t, n, i) {
        var r;
        if (re.isArray(t)) re.each(t, function(t, r) {
            n || Xt.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== re.type(t)) i(e, t);
        else
            for (r in t) V(e + "[" + r + "]", t[r], n, i)
    }

    function Q() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function B() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function X(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var Y = [],
        U = Y.slice,
        G = Y.concat,
        J = Y.push,
        K = Y.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        ie = "1.11.2",
        re = function(e, t) {
            return new re.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: Y.sort,
        splice: Y.splice
    }, re.extend = re.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], n = r[i], a !== n && (u && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === re.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !re.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && re.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (K) return K.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && l.push(r);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = U.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(U.call(arguments)))
            }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, p, h, g;
            if ((t ? t.ownerDocument || t : F) !== _ && D(t), t = t || _, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && L) {
                if (11 !== s && (r = ye.exec(e)))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && H(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!q || !q.test(e))) {
                    if (p = d = R, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = S(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                        h = be.test(e) && c(t.parentNode) || t, g = u.join(",")
                    }
                    if (g) try {
                        return K.apply(n, h.querySelectorAll(g)), n
                    } catch (v) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = _.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [$, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (l = t[R] || (t[R] = {}), (s = l[i]) && s[0] === $ && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function v(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[R] && (r = m(r)), o && !o[R] && (o = m(o, a)), i(function(i, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    m = i || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : v(m, f, e, s, l),
                    b = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (u = v(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else b = v(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = C.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                        return m(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        g = i && [],
                        m = [],
                        y = A,
                        b = i || o && C.find.TAG("*", u),
                        x = $ += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (A = a !== _ && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && ($ = x)
                        }
                        r && ((c = !f && c) && p--, i && g.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(g, m, a, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = G.call(l));
                            m = v(m)
                        }
                        K.apply(l, m), u && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && ($ = x, A = y), g
                };
            return r ? i(a) : a
        }
        var x, w, C, T, k, S, E, N, A, O, j, D, _, P, L, q, M, I, H, R = "sizzle" + 1 * new Date,
            F = e.document,
            $ = 0,
            W = 0,
            z = n(),
            V = n(),
            Q = n(),
            B = function(e, t) {
                return e === t && (j = !0), 0
            },
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            U = [],
            G = U.pop,
            J = U.push,
            K = U.push,
            Z = U.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ie.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + re + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Ce = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Te = function() {
                D()
            };
        try {
            K.apply(U = Z.call(F.childNodes), F.childNodes), U[F.childNodes.length].nodeType
        } catch (ke) {
            K = {
                apply: U.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : F;
            return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i, P = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), L = !k(i), w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(i.getElementsByClassName), w.getById = r(function(e) {
                return P.appendChild(e).id = R, !i.getElementsByName || !i.getElementsByName(R).length
            }), w.getById ? (C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                return L ? t.getElementsByClassName(e) : void 0
            }, M = [], q = [], (w.qsa = me.test(i.querySelectorAll)) && (r(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (w.matchesSelector = me.test(I = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), M.push("!=", ae)
            }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(P.compareDocumentPosition), H = t || me.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, B = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && H(F, e) ? -1 : t === i || t.ownerDocument === F && H(F, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : O ? ee(O, e) - ee(O, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? a(l[r], u[r]) : l[r] === F ? -1 : u[r] === F ? 1 : 0
            }, i) : _
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== _ && D(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !L || M && M.test(n) || q && q.test(n))) try {
                var i = I.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, _, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== _ && D(e), H(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== _ && D(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== i ? i : w.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (j = !w.detectDuplicates, O = !w.sortStable && e.slice(0), e.sort(B), j) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return O = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Ce).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (c = v[R] || (v[R] = {}), u = c[e] || [], p = u[0] === $ && u[1], f = u[0] === $ && u[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [$, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[R] || (t[R] = {}))[e]) && u[0] === $) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++f || (y && ((d[R] || (d[R] = {}))[e] = [$, f]), d !== t)););
                            return f -= r, f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = E(e.replace(le, "$1"));
                    return r[R] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(we, Ce),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = V[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = C.preFilter; s;) {
                (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), s = s.slice(i.length));
                for (a in C.filter) !(r = he[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = Q[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[R] ? i.push(o) : r.push(o);
                o = Q(e, b(r, i)), o.selector = e
            }
            return o
        }, N = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                d = !i && S(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && L && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(we, Ce), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (i = l(a.matches[0].replace(we, Ce), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || E(e, d))(i, t, !L, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = R.split("").sort(B).join("") === R, w.detectDuplicates = !!j, D(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(_.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (re.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) re.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
        }
    });
    var pe, he = e.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ve = re.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && re.isPlainObject(t))
                        for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = he.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
    ve.prototype = re.fn, pe = re(he);
    var me = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), re.fn.extend({
        has: function(e) {
            var t, n = re(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (re.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return re.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return re.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return re.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return re.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return re.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return re.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return re.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return re.sibling(e.firstChild)
        },
        contents: function(e) {
		    return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(n, i) {
            var r = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), me.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var be = /\S+/g,
        xe = {};
    re.Callbacks = function(e) {
        e = "string" == typeof e ? xe[e] || o(e) : re.extend({}, e);
        var t, n, i, r, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(t) {
                            re.each(t, function(t, n) {
                                var i = re.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), t ? r = l.length : n && (s = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(e, n) {
                        for (var i;
                            (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function(e) {
                    return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, re.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return re.Deferred(function(n) {
                            re.each(t, function(t, o) {
                                var a = re.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, re.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = U.call(arguments),
                a = o.length,
                s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : re.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? U.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var we;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--re.readyWait : !re.isReady) {
                if (!he.body) return setTimeout(re.ready);
                re.isReady = !0, e !== !0 && --re.readyWait > 0 || (we.resolveWith(he, [re]), re.fn.triggerHandler && (re(he).triggerHandler("ready"), re(he).off("ready")))
            }
        }
    }), re.ready.promise = function(t) {
        if (!we)
            if (we = re.Deferred(), "complete" === he.readyState) setTimeout(re.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    a(), re.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Ce, Te = "undefined";
    for (Ce in re(ne)) break;
    ne.ownLast = "0" !== Ce, ne.inlineBlockNeedsLayout = !1, re(function() {
            var e, t, n, i;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), re.acceptData = function(e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Se = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), re.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                re.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, e, t)
            }) : o ? l(o, e, re.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                re.removeData(this, e)
            })
        }
    }), re.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = re._queueHooks(e, t),
                a = function() {
                    re.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return re._data(e, n) || re._data(e, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(e, t + "queue"), re._removeData(e, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = re.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = ["Top", "Right", "Bottom", "Left"],
        Ae = function(e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        Oe = re.access = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === re.type(n)) {
                r = !0;
                for (s in n) re.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(re(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        je = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var De = /^(?:input|select|textarea)$/i,
        _e = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        Le = /^(?:focusinfocus|focusoutblur)$/,
        qe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, g, v = re._data(e);
            if (v) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function(e) {
                        return typeof re === Te || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = qe.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, d = re.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, g, v = re.hasData(e) && re._data(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(be) || [""], u = t.length; u--;)
                    if (s = qe.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = re.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || re.removeEvent(e, p, v.handle), delete c[p])
                    } else
                        for (p in c) re.event.remove(e, p + t[u], n, i, !0);
                re.isEmptyObject(c) && (delete v.handle, re._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, d, f = [i || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Le.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[p] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || p, Le.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (i.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[p] && !re.isWindow(i)) {
                    c = i[a], c && (i[a] = null), re.event.triggered = p;
                    try {
                        i[p]()
                    } catch (g) {}
                    re.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, n, i, r, o, a = [],
                s = U.call(arguments),
                l = (re._data(this, "events") || {})[e.type] || [],
                u = re.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = re.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[re.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Pe.test(r) ? this.mouseHooks : _e.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n))
    }, re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                De.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }), re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0)
        };
        re.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, t);
                r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, t) - 1;
                r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
            }
        }
    }), re.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === r && (a = i, i = function(e) {
                return re().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                re.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                re.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ie = / jQuery\d+="(?:null|\d+)"/g,
        He = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        Re = /^\s+/,
        Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        $e = /<([\w:]+)/,
        We = /<tbody/i,
        ze = /<|&#?\w+;/,
        Ve = /<(?:script|style|link)/i,
        Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Be = /^$|\/(?:java|ecma)script/i,
        Xe = /^true\/(.*)/,
        Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ge = g(he),
        Je = Ge.appendChild(he.createElement("div"));
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td, re.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
            if (ne.html5Clone || re.isXMLDoc(e) || !He.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (i = v(o), s = v(e), a = 0; null != (r = s[a]); ++a) i[a] && T(r, i[a]);
            if (t)
                if (n)
                    for (s = s || v(e), i = i || v(o), a = 0; null != (r = s[a]); a++) C(r, i[a]);
                else C(e, o);
            return i = v(o, "script"), i.length > 0 && w(i, !l && v(e, "script")), i = s = r = null, o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, l, u, c, d = e.length, f = g(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === re.type(o)) re.merge(p, o.nodeType ? [o] : o);
                    else if (ze.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = ($e.exec(o) || ["", ""])[1].toLowerCase(), c = Ue[l] || Ue._default, s.innerHTML = c[1] + o.replace(Fe, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Re.test(o) && p.push(t.createTextNode(Re.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || We.test(o) ? "<table>" !== c[1] || We.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (re.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || re.grep(v(p, "input"), m), h = 0; o = p[h++];)
                if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = v(f.appendChild(o), "script"), a && w(s), n))
                    for (r = 0; o = s[r++];) Be.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = e[a]); a++)
                if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, Y.push(r))
                }
        }
    }), re.fn.extend({
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(v(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && re.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && re.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                if (!("string" != typeof e || Ve.test(e) || !ne.htmlSerialize && He.test(e) || !ne.leadingWhitespace && Re.test(e) || Ue[($e.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Fe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, re.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, i, r, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = re.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ne.checkClone && Qe.test(f)) return this.each(function(n) {
                var i = c.eq(n);
                p && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = re.map(v(s, "script"), b), r = o.length; u > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, v(i, "script"))), t.call(this[l], i, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Be.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ye, "")));
                s = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[t](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ke, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        it = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        rt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : he.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, i, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, r = t.appendChild(he.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, o, a, s, l;
        n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == s && t(), s
            },
            boxSizingReliable: function() {
                return null == a && t(), a
            },
            pixelPosition: function() {
                return null == o && t(), o
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), re.swap = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r
    };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + Ee + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = re.camelCase(t),
                    l = e.style;
                if (t = re.cssProps[s] || (re.cssProps[s] = N(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = re.camelCase(t);
            return t = re.cssProps[s] || (re.cssProps[s] = N(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() {
                    return D(e, t, i)
                }) : D(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && et(e);
                return O(e, n, i ? j(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
        }
    }), re.cssHooks.marginRight = E(ne.reliableMarginRight, function(e, t) {
        return t ? re.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, nt.test(e) || (re.cssHooks[e + t].set = O)
    }), re.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (re.isArray(t)) {
                    for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ae(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = _, _.prototype = {
        constructor: _,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _.propHooks[this.prop];
            return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, re.fx = _.prototype.init, re.fx.step = {};
    var pt, ht, gt = /^(?:toggle|show|hide)$/,
        vt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        mt = /queueHooks$/,
        yt = [M],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = vt.exec(t),
                    o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                    a = (re.cssNumber[e] || "px" !== o && +i) && vt.exec(re.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    re.Animation = re.extend(H, {
            tweener: function(e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), re.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = re.isEmptyObject(e),
                    o = re.speed(t, n, i),
                    a = function() {
                        var t = H(this, re.extend({}, e), o);
                        (r || re._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = re.timers,
                        a = re._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && mt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && re.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = re._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = re.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(e, t) {
            var n = re.fn[t];
            re.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, i, r)
            }
        }), re.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            re.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var e, t = re.timers,
                n = 0;
            for (pt = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || re.fx.stop(), pt = void 0
        }, re.fx.timer = function(e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            ht || (ht = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(ht), ht = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(e, t) {
            return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, r;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), r = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var xt = /\r/g;
    re.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = re.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
                        if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, Ct, Tt = re.expr.attrHandle,
        kt = /^(?:checked|selected)$/i,
        St = ne.getSetAttribute,
        Et = ne.input;
    re.fn.extend({
        attr: function(e, t) {
            return Oe(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Te ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? Ct : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Et && St || !kt.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(St ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Ct = {
        set: function(e, t, n) {
            return t === !1 ? re.removeAttr(e, n) : Et && St || !kt.test(n) ? e.setAttribute(!St && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Tt[t] || re.find.attr;
        Tt[t] = Et && St || !kt.test(t) ? function(e, t, i) {
            var r, o;
            return i || (o = Tt[t], Tt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Tt[t] = o), r
        } : function(e, t, n) {
            return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Et && St || (re.attrHooks.value = {
        set: function(e, t, n) {
            return re.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), St || (wt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Tt.id = Tt.name = Tt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, re.attrHooks.contenteditable = {
        set: function(e, t, n) {
            wt.set(e, "" === t ? !1 : t, n)
        }
    }, re.each(["width", "height"], function(e, t) {
        re.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nt = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return Oe(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = re.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var Ot = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ot, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = re.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ot, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
                re(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === Te || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ot, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jt = re.now(),
        Dt = /\?/,
        _t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = re.trim(t + "");
        return r && !re.trim(r.replace(_t, function(e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
    }, re.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var Pt, Lt, qt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        $t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Wt = {},
        zt = {},
        Vt = "*/".concat("*");
    try {
        Lt = location.href
    } catch (Qt) {
        Lt = he.createElement("a"), Lt.href = "", Lt = Lt.href
    }
    Pt = $t.exec(Lt.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt,
            type: "GET",
            isLocal: Ht.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $($(e, re.ajaxSettings), t) : $(re.ajaxSettings, e)
        },
        ajaxPrefilter: R(Wt),
        ajaxTransport: R(zt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, c, m, y, x, C = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = W(d, w, n)), y = z(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, m = y.error, r = !m)) : (m = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", r ? h.resolveWith(f, [c, C, w]) : h.rejectWith(f, [w, C, m]), w.statusCode(v), v = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? c : m]), g.fireWith(f, [w, C]), l && (p.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, l, u, c, d = re.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                h = re.Deferred(),
                g = re.Callbacks("once memory"),
                v = d.statusCode || {},
                m = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = It.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Lt) + "").replace(qt, "").replace(Ft, Pt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = $t.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Pt[1] && i[2] === Pt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), F(Wt, d, t, w), 2 === b) return w;
            l = re.event && d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Dt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mt.test(o) ? o.replace(Mt, "$1_=" + jt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](d[r]);
            if (u = F(zt, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(m, n)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function(e, t) {
        re[t] = function(e, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(e) {
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(re.isFunction(e) ? function(t) {
                re(this).wrapInner(e.call(this, t))
            } : function() {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }, re.expr.filters.visible = function(e) {
        return !re.expr.filters.hidden(e)
    };
    var Bt = /%20/g,
        Xt = /\[\]$/,
        Yt = /\r?\n/g,
        Ut = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) V(n, e[n], t, r);
        return i.join("&").replace(Bt, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Gt.test(this.nodeName) && !Ut.test(e) && (this.checked || !je.test(e))
            }).map(function(e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yt, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || B()
    } : Q;
    var Jt = 0,
        Kt = {},
        Zt = re.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Kt) Kt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && re.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++Jt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, r) {
                        var s, l, u;
                        if (t && (r || 4 === o.readyState))
                            if (delete Kt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && i(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || re("head")[0] || he.documentElement;
            return {
                send: function(i, r) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || re.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || re.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), re.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var i = de.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var nn = re.fn.load;
    re.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    re.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = re.css(e, "position"),
                d = re(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, re.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = X(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - re.css(i, "marginTop", !0),
                    left: t.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        re.fn[e] = function(i) {
            return Oe(this, function(e, i, r) {
                var o = X(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = E(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            re.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Oe(this, function(t, n, i) {
                    var r;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var on = e.jQuery,
        an = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = an), t && e.jQuery === re && (e.jQuery = on), re
    }, typeof t === Te && (e.jQuery = e.$ = re), re
}), ! function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t, n) {
        try {
            if (n[f]) {
                t = t || "";
                var i = e(n.ownerNode || n.owningElement);
                return "" === t || "*" === t || "#" + (i.prop("id") || "") == t || (i.prop("href") || "") == u.prop("href", t).prop("href")
            }
            return !1
        } catch (r) {
            return !1
        }
    }

    function n(t) {
        var n = (/.*?{/.exec(t) || ["{"])[0],
            r = /{.*}/g.exec(t);
        if (null === r) {
            var o = t.split("{");
            r = "{" + o[1 == o.length ? 0 : 1].split("}")[0] + "}"
        } else r = r[0];
        return {
            styleSheet: e.trim(n.substr(0, n.length - 1)),
            selectorText: i(r.substr(1, r.length - 2))
        }
    }

    function i(e) {
        var t, n, i = [];
        t = d[f].length, s.call(d, e, ";"), n = d[f].length;
        for (var r = n - 1; r >= t; r--) i.push(d[f][r].selectorText), l.call(d, r);
        return i.reverse().join(", ")
    }

    function r(t, n, i) {
        return "string" !== e.type(t.selectorText) ? !1 : t.selectorText === n ? !0 : i === !0 ? e(e.map(t.selectorText.split(","), e.trim)).filter(function(e) {
            return this.toString() === n
        }).length > 0 : !1
    }

    function o(e) {
        for (var t, n = e[0].toUpperCase() + e.slice(1), i = p.length; --i;)
            if (t = p[i] + n, t in c) return t;
        return e
    }

    function a(e, t) {
        return e.ownerDocument = e.ownerDocument || document, e.nodeType = e.nodeType || 1, e.nodeName = e.nodeName || "DIV", e.parentNode = e.parentNode || t.ownerNode || t.owningElement, e.parentStyleSheet = e.parentStyleSheet || t, e
    }

    function s(t, n, i) {
        if (!t || !n) return -1;
        var r = this,
            o = r.insertRule ? function(e, t, n) {
                this.insertRule(e + "{" + t + "}", n)
            } : r.addRule;
        i = i || this[f].length;
        try {
            return o.call(r, t, n, i)
        } catch (a) {
            return e.each(t.split(","), function(t, i) {
                o.call(r, e.trim(i), n)
            }), -1
        }
    }

    function l(t) {
        if (t = t && t.rule ? t.rule : t) {
            var n = this,
                i = n.deleteRule || n.removeRule;
            i || e(document.styleSheets).each(function(r, o) {
                return 1 == e(o[f]).filter(function() {
                    return this === t
                }).length ? (n = o, i = n.deleteRule || n.removeRule, !1) : void 0
            }), "number" == e.type(t) ? i.call(n, t) : e.each(n[f], function(e, r) {
                return t === r ? (i.call(n, e), !1) : void 0
            })
        }
    }
    var u = e(document.createElement("a")),
        c = u.prop("style"),
        d = function(e) {
            return e.sheet || e.styleSheet
        }(e('<style type="text/css">*{}</style>').appendTo("head")[0]),
        f = "cssRules" in d ? "cssRules" : "rules",
        p = ["Webkit", "O", "Moz", "ms"];
    try {
        a(d[f][0], d), e.support.nativeCSSStyleRule = !0
    } catch (h) {
        e.support.nativeCSSStyleRule = !1, CSSStyleRule = function(t) {
            e.extend(this, t), this.rule = t, this.currentStyle = t.style
        }
    }
    e.stylesheet = function(t, n, i) {
        return this instanceof e.stylesheet ? (this.init(t), this.css(n, i)) : new e.stylesheet(t, n, i)
    }, e.extend(e.stylesheet, {
        cssRules: function(i) {
            var o = [],
                s = n(i);
            return e(document.styleSheets).each(function(n, i) {
                t(s.styleSheet, i) && e.merge(o, e(i[f]).filter(function() {
                    return r(this, s.selectorText, "*" === s.styleSheet)
                }).map(function() {
                    return a(e.support.nativeCSSStyleRule ? this : new CSSStyleRule(this), i)
                }))
            }), o.reverse()
        },
        camelCase: e.camelCase || function(e) {
            return e.replace(/-([\da-z])/g, function(e) {
                return e.toUpperCase().replace("-", "")
            })
        },
        cssProps: e.cssProps || {},
        cssStyleName: function(t) {
            if (t) {
                var n = e.camelCase(t);
                if (n in c) return n;
                if ((e.cssProps[t] || (e.cssProps[t] = o(n))) in c) return e.cssProps[t]
            }
        }
    }), e.stylesheet.fn = e.stylesheet.prototype = {
        init: function(i) {
            var r = [];
            switch (e.type(i)) {
                case "string":
                    r = e.stylesheet.cssRules(i);
                    break;
                case "array":
                    e.each(i, function(t, n) {
                        "string" === e.type(n) ? e.merge(r, e.stylesheet.cssRules(n)) : n instanceof CSSStyleRule && r.push(n)
                    });
                    break;
                case "object":
                    i instanceof CSSStyleRule && r.push(val)
            }
            e.extend(this, {
                rules: function() {
                    return r.slice()
                },
                css: function(o, a) {
                    var u = this,
                        c = void 0;
                    switch (e.type(o)) {
                        case "null":
                            return e.each(r, function(e, t) {
                                l.call(t.parentStyleSheet, t)
                            }), r = e.stylesheet.cssRules(i), u;
                        case "string":
                            var f = e.stylesheet.cssStyleName(o);
                            if (f)
                                if (0 === r.length && void 0 !== a) {
                                    var p = n(i),
                                        h = e(document.styleSheets).filter(function() {
                                            return t(p.styleSheet, this)
                                        });
                                    h = h && 1 == h.length ? h[0] : d, s.call(h, p.selectorText, o + ":" + a + ";"), r = e.stylesheet.cssRules(i), c = u
                                } else e.each(r, function(e, t) {
                                    return "" !== t.style[f] ? (void 0 !== a ? (t.style[f] = a, c = u) : c = t.style[f], !1) : void 0
                                }), void 0 === c && void 0 !== a && (r[0].style[f] = a, c = u);
                            break;
                        case "array":
                            c = {}, e.each(o, function(e, t) {
                                c[t] = u.css(t, a)
                            }), void 0 !== a && (c = u);
                            break;
                        case "object":
                            return e.each(o, function(e, t) {
                                u.css(e, t)
                            }), u;
                        default:
                            return u
                    }
                    return c
                }
            })
        }
    }
}), ! function() {
    if (window.getComputedStyle) {
        var e = window.getComputedStyle;
        window.getComputedStyle = function(t, n) {
            return t.parentStyleSheet ? t.style : e(t, n)
        }
    } else document.documentElement.currentStyle && (jQuery.cssHooks.display = {
        get: function(e) {
            return e.parentStyleSheet && "" === e.style.display ? document.documentElement.currentStyle.display : e.style.display
        }
    });
    if (!jQuery.support.opacity && jQuery.cssHooks.opacity) {
        var t = jQuery.cssHooks.opacity,
            n = /alpha\([^)]*\)/i;
        jQuery.cssHooks.opacity = {
            get: t.get,
            set: function(e, i) {
                if (e.parentStyleSheet) {
                    var r = e.style,
                        o = e.currentStyle,
                        a = jQuery.isNumeric(i) ? "alpha(opacity=" + 100 * i + ")" : "",
                        s = o && o.filter || r.filter || "";
                    if (r.zoom = 1, (i >= 1 || "" === i) && "" === jQuery.trim(s.replace(n, "")) && (r.setAttribute("filter", "", 1), r.cssText = r.cssText.replace(/FILTER: ;/i, ""), "" === i || o && !o.filter)) return;
                    r.filter = n.test(s) ? s.replace(n, a) : s + " " + a
                } else t.set(e, i)
            }
        }
    }
}(), 
! function(e) {
    e.fn.initialize = function(t, n) {
        var i = this,
            r = i.selector;
        if ("function" != typeof t || !r) return e(i);
        var o = e("body")[0];
        if (i.firstInitsCalled = i.firstInitsCalled || [], "function" == typeof n && -1 == i.firstInitsCalled.indexOf(n) && (i.firstInitsCalled.push(n), n()), i.initData = i.initData || {}, i.initData[r] = i.initData[r] || [], i.initData[r].push(t), e(this).each(function() {
                this.initsCalled = this.initsCalled || [], -1 == this.initsCalled.indexOf(t) && (this.initsCalled.push(t), e(this).each(t))
            }), !this.initializedObserver) {
            this.initializedObserver = !0, window.MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            var a = new MutationObserver(function(t) {
                    e.each(t, function(t, n) {
                        var o = e();
                        "attributes" == n.type && (o = e(n.target)), "childList" == n.type && n.addedNodes.length && e.each(n.addedNodes, function(e, t) {
                            o = o.add(t)
                        });
                        for (r in i.initData) {
                            var a = i.initData[r],
                                s = o.find(r);
                            o.is(r) && (s = s.add(o)), s.each(function() {
                                var t = this;
                                t.initsCalled = t.initsCalled || [], e.each(a, function(n, i) {
                                    -1 == t.initsCalled.indexOf(i) && (t.initsCalled.push(i), e(t).each(i))
                                })
                            })
                        }
                    })
                }),
                s = {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0
                };
            a.observe(o, s)
        }
        return e(this)
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function(e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, r) {
            return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
        },
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a)) + n
        },
        easeOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - o) * Math.PI / a) + i + n
        },
        easeInOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (a || (a = .3 * r * 1.5), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
        },
        easeInBounce: function(e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, r) {
            return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }), jQuery.extend(jQuery.easing, {
        easeInOutMaterial: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : i / 4 * ((t -= 2) * t * t + 2) + n
        }
    }), ! function(e) {
        function t(e) {
            var t = e.length,
                i = n.type(e);
            return "function" === i || n.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }
        if (!e.jQuery) {
            var n = function(e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function(e) {
                return null != e && e == e.window
            }, n.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e
            }, n.isArray = Array.isArray || function(e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                for (t in e);
                return void 0 === t || o.call(e, t)
            }, n.each = function(e, n, i) {
                var r, o = 0,
                    a = e.length,
                    s = t(e);
                if (i) {
                    if (s)
                        for (; a > o && (r = n.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = n.apply(e[o], i), r === !1) break
                } else if (s)
                    for (; a > o && (r = n.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = n.call(e[o], o, e[o]), r === !1) break; return e
            }, n.data = function(e, t, r) {
                if (void 0 === r) {
                    var o = e[n.expando],
                        a = o && i[o];
                    if (void 0 === t) return a;
                    if (a && t in a) return a[t]
                } else if (void 0 !== t) {
                    var o = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return i[o] = i[o] || {}, i[o][t] = r, r
                }
            }, n.removeData = function(e, t) {
                var r = e[n.expando],
                    o = r && i[r];
                o && n.each(t, function(e, t) {
                    delete o[t]
                })
            }, n.extend = function() {
                var e, t, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) e = s[r], i = o[r], s !== i && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(c, a, i)) : void 0 !== i && (s[r] = i));
                return s
            }, n.queue = function(e, i, r) {
                function o(e, n) {
                    var i = n || [];
                    return null != e && (t(Object(e)) ? ! function(e, t) {
                        for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                        if (n !== n)
                            for (; void 0 !== t[i];) e[r++] = t[i++];
                        return e.length = r, e
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                }
                if (e) {
                    i = (i || "fx") + "queue";
                    var a = n.data(e, i);
                    return r ? (!a || n.isArray(r) ? a = n.data(e, i, o(r)) : a.push(r), a) : a || []
                }
            }, n.dequeue = function(e, t) {
                n.each(e.nodeType ? [e] : e, function(e, i) {
                    t = t || "fx";
                    var r = n.queue(i, t),
                        o = r.shift();
                    "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, function() {
                        n.dequeue(i, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        i = this.offset(),
                        r = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(e).offset();
                    return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: i.top - r.top,
                        left: i.left - r.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window),
    function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, n, i) {
            function r(e) {
                for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                    var r = e[t];
                    r && i.push(r)
                }
                return i
            }

            function o(e) {
                return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
            }

            function a(e) {
                var t = f.data(e, "velocity");
                return null === t ? i : t
            }

            function s(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, n, i, r) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function a(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
                }

                function u(e, t, n) {
                    return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
                }

                function c(t, n) {
                    for (var r = 0; g > r; ++r) {
                        var o = u(n, e, i);
                        if (0 === o) return n;
                        var a = l(n, e, i) - t;
                        n -= a / o
                    }
                    return n
                }

                function d() {
                    for (var t = 0; b > t; ++t) T[t] = l(t * x, e, i)
                }

                function f(t, n, r) {
                    var o, a, s = 0;
                    do a = n + (r - n) / 2, o = l(a, e, i) - t, o > 0 ? r = a : n = a; while (Math.abs(o) > m && ++s < y);
                    return a
                }

                function p(t) {
                    for (var n = 0, r = 1, o = b - 1; r != o && T[r] <= t; ++r) n += x;
                    --r;
                    var a = (t - T[r]) / (T[r + 1] - T[r]),
                        s = n + a * x,
                        l = u(s, e, i);
                    return l >= v ? c(t, s) : 0 == l ? s : f(t, n, n + x)
                }

                function h() {
                    k = !0, (e != n || i != r) && d()
                }
                var g = 4,
                    v = .001,
                    m = 1e-7,
                    y = 10,
                    b = 11,
                    x = 1 / (b - 1),
                    w = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var C = 0; 4 > C; ++C)
                    if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
                e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                var T = w ? new Float32Array(b) : new Array(b),
                    k = !1,
                    S = function(t) {
                        return k || h(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), n, r)
                    };
                S.getControlPoints = function() {
                    return [{
                        x: e,
                        y: n
                    }, {
                        x: i,
                        y: r
                    }]
                };
                var E = "generateBezier(" + [e, n, i, r] + ")";
                return S.toString = function() {
                    return E
                }, S
            }

            function u(e, t) {
                var n = e;
                return g.isString(e) ? b.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        n = b.State.calls.length;
                    n > 1e4 && (b.State.calls = r(b.State.calls));
                    for (var o = 0; n > o; o++)
                        if (b.State.calls[o]) {
                            var s = b.State.calls[o],
                                l = s[0],
                                u = s[2],
                                p = s[3],
                                h = !!p,
                                v = null;
                            p || (p = b.State.calls[o][3] = t - 16);
                            for (var m = Math.min((t - p) / u.duration, 1), y = 0, x = l.length; x > y; y++) {
                                var C = l[y],
                                    k = C.element;
                                if (a(k)) {
                                    var S = !1;
                                    if (u.display !== i && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            f.each(E, function(e, t) {
                                                w.setPropertyValue(k, "display", t)
                                            })
                                        }
                                        w.setPropertyValue(k, "display", u.display)
                                    }
                                    u.visibility !== i && "hidden" !== u.visibility && w.setPropertyValue(k, "visibility", u.visibility);
                                    for (var N in C)
                                        if ("element" !== N) {
                                            var A, O = C[N],
                                                j = g.isString(O.easing) ? b.Easings[O.easing] : O.easing;
                                            if (1 === m) A = O.endValue;
                                            else {
                                                var D = O.endValue - O.startValue;
                                                if (A = O.startValue + D * j(m, u, D), !h && A === O.currentValue) continue
                                            }
                                            if (O.currentValue = A, "tween" === N) v = A;
                                            else {
                                                if (w.Hooks.registered[N]) {
                                                    var _ = w.Hooks.getRoot(N),
                                                        P = a(k).rootPropertyValueCache[_];
                                                    P && (O.rootPropertyValue = P)
                                                }
                                                var L = w.setPropertyValue(k, N, O.currentValue + (0 === parseFloat(A) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
                                                w.Hooks.registered[N] && (a(k).rootPropertyValueCache[_] = w.Normalizations.registered[_] ? w.Normalizations.registered[_]("extract", null, L[1]) : L[1]), "transform" === L[0] && (S = !0)
                                            }
                                        }
                                    u.mobileHA && a(k).transformCache.translate3d === i && (a(k).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && w.flushTransformCache(k)
                                }
                            }
                            u.display !== i && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], m, Math.max(0, p + u.duration - t), p, v), 1 === m && d(o)
                        }
                }
                b.State.isTicking && T(c)
            }

            function d(e, t) {
                if (!b.State.calls[e]) return !1;
                for (var n = b.State.calls[e][0], r = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                    var d = n[u].element;
                    if (t || o.loop || ("none" === o.display && w.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(d, "visibility", o.visibility)), o.loop !== !0 && (f.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && a(d)) {
                        a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
                        var p = !1;
                        f.each(w.Lists.transforms3D, function(e, t) {
                            var n = /^scale/.test(t) ? 1 : 0,
                                r = a(d).transformCache[t];
                            a(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (p = !0, delete a(d).transformCache[t])
                        }), o.mobileHA && (p = !0, delete a(d).transformCache.translate3d), p && w.flushTransformCache(d), w.Values.removeClass(d, "velocity-animating")
                    }
                    if (!t && o.complete && !o.loop && u === c - 1) try {
                        o.complete.call(r, r)
                    } catch (h) {
                        setTimeout(function() {
                            throw h
                        }, 1)
                    }
                    s && o.loop !== !0 && s(r), a(d) && o.loop === !0 && !t && (f.each(a(d).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), b(d, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), o.queue !== !1 && f.dequeue(d, o.queue)
                }
                b.State.calls[e] = !1;
                for (var g = 0, v = b.State.calls.length; v > g; g++)
                    if (b.State.calls[g] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var f, p = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return i
                }(),
                h = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                            t(i + n)
                        }, n)
                    }
                }(),
                g = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                v = !1;
            if (e.fn && e.fn.jquery ? (f = e, v = !0) : f = t.Velocity.Utilities, 8 >= p && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var m = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: f,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: m,
                        easing: y,
                        begin: i,
                        complete: i,
                        progress: i,
                        display: i,
                        visibility: i,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(e) {
                        f.data(e, "velocity", {
                            isSVG: g.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var x = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, n, i) {
                    var r = {
                        x: t.x + i.dx * n,
                        v: t.v + i.dv * n,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: r.v,
                        dv: e(r)
                    }
                }

                function n(n, i) {
                    var r = {
                            dx: n.v,
                            dv: e(n)
                        },
                        o = t(n, .5 * i, r),
                        a = t(n, .5 * i, o),
                        s = t(n, i, a),
                        l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                        u = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + u * i, n
                }
                return function i(e, t, r) {
                    var o, a, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0,
                        d = 1e-4,
                        f = .016;
                    for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, r = r || null, l.tension = e, l.friction = t, o = null !== r, o ? (c = i(e, t), a = c / r * f) : a = f; s = n(s || l, a), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                    return o ? function(e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            b.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, f.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                b.Easings[t[0]] = l.apply(null, t[1])
            });
            var w = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < w.Lists.colors.length; e++) {
                            var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, i, r;
                        if (p)
                            for (n in w.Hooks.templates) {
                                i = w.Hooks.templates[n], r = i[0].split(" ");
                                var o = i[1].match(w.RegEx.valueSplit);
                                "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), w.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                            }
                        for (n in w.Hooks.templates) {
                            i = w.Hooks.templates[n], r = i[0].split(" ");
                            for (var e in r) {
                                var a = n + r[e],
                                    s = e;
                                w.Hooks.registered[a] = [n, s]
                            }
                        }
                    },
                    getRoot: function(e) {
                        var t = w.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var n = w.Hooks.registered[e];
                        if (n) {
                            var i = n[0],
                                r = n[1];
                            return t = w.Hooks.cleanRootPropertyValue(i, t), t.toString().match(w.RegEx.valueSplit)[r]
                        }
                        return t
                    },
                    injectValue: function(e, t, n) {
                        var i = w.Hooks.registered[e];
                        if (i) {
                            var r, o, a = i[0],
                                s = i[1];
                            return n = w.Hooks.cleanRootPropertyValue(a, n), r = n.toString().match(w.RegEx.valueSplit), r[s] = t, o = r.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var i;
                                    return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(w.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                case "inject":
                                    return "rect(" + n + ")"
                            }
                        },
                        blur: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = r ? r[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(e, t, n) {
                            if (8 >= p) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = i ? i[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return n;
                                case "inject":
                                    return n
                            }
                        }
                    },
                    register: function() {
                        9 >= p || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                        for (var e = 0; e < w.Lists.transformsBase.length; e++) ! function() {
                            var t = w.Lists.transformsBase[e];
                            w.Normalizations.registered[t] = function(e, n, r) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return a(n) === i || a(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && a(n).transformCache[t] === i && 1 > r && (r = 1), o = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                o = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                o = !/(deg|\d)$/i.test(r)
                                        }
                                        return o || (a(n).transformCache[t] = "(" + r + ")"), a(n).transformCache[t]
                                }
                            }
                        }();
                        for (var e = 0; e < w.Lists.colors.length; e++) ! function() {
                            var t = w.Lists.colors[e];
                            w.Normalizations.registered[t] = function(e, n, r) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var o;
                                        if (w.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                        else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : w.RegEx.isHex.test(r) ? a = "rgb(" + w.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= p || 3 !== o.split(" ").length || (o += " 1"), o;
                                    case "inject":
                                        return 8 >= p ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (p || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                            var r;
                            if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                    return e.toUpperCase()
                                }), g.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(n, function(e, t, n, i) {
                            return t + t + n + n + i + i
                        }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(e, n, r, o) {
                    function s(e, n) {
                        function r() {
                            u && w.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= p) l = f.css(e, n);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(e, "display") && (u = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !o) {
                                if ("height" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                                    return r(), c
                                }
                                if ("width" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var d = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                                    return r(), d
                                }
                            }
                            var h;
                            h = a(e) === i ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === p && "filter" === n ? h.getPropertyValue(n) : h[n], ("" === l || null === l) && (l = e.style[n]), r()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var g = s(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = f(e).position()[n] + "px")
                        }
                        return l
                    }
                    var l;
                    if (w.Hooks.registered[n]) {
                        var u = n,
                            c = w.Hooks.getRoot(u);
                        r === i && (r = w.getPropertyValue(e, w.Names.prefixCheck(c)[0])), w.Normalizations.registered[c] && (r = w.Normalizations.registered[c]("extract", e, r)), l = w.Hooks.extractValue(u, r)
                    } else if (w.Normalizations.registered[n]) {
                        var d, h;
                        d = w.Normalizations.registered[n]("name", e), "transform" !== d && (h = s(e, w.Names.prefixCheck(d)[0]), w.Values.isCSSNullValue(h) && w.Hooks.templates[n] && (h = w.Hooks.templates[n][1])), l = w.Normalizations.registered[n]("extract", e, h)
                    }
                    if (!/^[\d-]/.test(l))
                        if (a(e) && a(e).isSVG && w.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                l = e.getBBox()[n]
                            } catch (g) {
                                l = 0
                            } else l = e.getAttribute(n);
                            else l = s(e, w.Names.prefixCheck(n)[0]);
                    return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                },
                setPropertyValue: function(e, n, i, r, o) {
                    var s = n;
                    if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i);
                    else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", e)) w.Normalizations.registered[n]("inject", e, i), s = "transform", i = a(e).transformCache[n];
                    else {
                        if (w.Hooks.registered[n]) {
                            var l = n,
                                u = w.Hooks.getRoot(n);
                            r = r || w.getPropertyValue(e, u), i = w.Hooks.injectValue(l, i, r), n = u
                        }
                        if (w.Normalizations.registered[n] && (i = w.Normalizations.registered[n]("inject", e, i), n = w.Normalizations.registered[n]("name", e)), s = w.Names.prefixCheck(n)[0], 8 >= p) try {
                            e.style[s] = i
                        } catch (c) {
                            b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                        } else a(e) && a(e).isSVG && w.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                        b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                    }
                    return [s, i]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(w.getPropertyValue(e, t))
                    }
                    var n = "";
                    if ((p || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
                        var i = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        f.each(a(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                        })
                    } else {
                        var r, o;
                        f.each(a(e).transformCache, function(t) {
                            return r = a(e).transformCache[t], "transformPerspective" === t ? (o = r, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
                        }), o && (n = "perspective" + o + " " + n)
                    }
                    w.setPropertyValue(e, "transform", n)
                }
            };
            w.Hooks.register(), w.Normalizations.register(), b.hook = function(e, t, n) {
                var r = i;
                return e = o(e), f.each(e, function(e, o) {
                    if (a(o) === i && b.init(o), n === i) r === i && (r = b.CSS.getPropertyValue(o, t));
                    else {
                        var s = b.CSS.setPropertyValue(o, t, n);
                        "transform" === s[0] && b.CSS.flushTransformCache(o), r = s
                    }
                }), r
            };
            var C = function() {
                function e() {
                    return s ? N.promise || null : l
                }

                function r() {
                    function e(e) {
                        function d(e, t) {
                            var n = i,
                                r = i,
                                a = i;
                            return g.isArray(e) ? (n = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (g.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = t ? e[1] : u(e[1], s.duration), e[2] !== i && (a = e[2]))) : n = e, t || (r = r || s.easing), g.isFunction(n) && (n = n.call(o, k, T)), g.isFunction(a) && (a = a.call(o, k, T)), [n || 0, r, a]
                        }

                        function p(e, t) {
                            var n, i;
                            return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                return n = e, ""
                            }), n || (n = w.Values.getUnitType(e)), [i, n]
                        }

                        function m() {
                            var e = {
                                    myParent: o.parentNode || n.body,
                                    position: w.getPropertyValue(o, "position"),
                                    fontSize: w.getPropertyValue(o, "fontSize")
                                },
                                i = e.position === L.lastPosition && e.myParent === L.lastParent,
                                r = e.fontSize === L.lastFontSize;
                            L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                            var s = 100,
                                l = {};
                            if (r && i) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                            else {
                                var u = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                    b.CSS.setPropertyValue(u, t, "hidden")
                                }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                    b.CSS.setPropertyValue(u, t, s + "%")
                                }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(w.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                            }
                            return null === L.remToPx && (L.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                        }
                        if (s.begin && 0 === k) try {
                            s.begin.call(h, h)
                        } catch (x) {
                            setTimeout(function() {
                                throw x
                            }, 1)
                        }
                        if ("scroll" === A) {
                            var C, S, E, O = /^x$/i.test(s.axis) ? "Left" : "Top",
                                j = parseFloat(s.offset) || 0;
                            s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, C = s.container["scroll" + O], E = C + f(o).position()[O.toLowerCase()] + j) : s.container = null : (C = b.State.scrollAnchor[b.State["scrollProperty" + O]], S = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === O ? "Top" : "Left")]], E = f(o).offset()[O.toLowerCase()] + j), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: C,
                                    currentValue: C,
                                    endValue: E,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: O,
                                        alternateValue: S
                                    }
                                },
                                element: o
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                        } else if ("reverse" === A) {
                            if (!a(o).tweensContainer) return void f.dequeue(o, s.queue);
                            "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = f.extend({}, a(o).opts, s);
                            var D = f.extend(!0, {}, a(o).tweensContainer);
                            for (var _ in D)
                                if ("element" !== _) {
                                    var P = D[_].startValue;
                                    D[_].startValue = D[_].currentValue = D[_].endValue, D[_].endValue = P, g.isEmptyObject(y) || (D[_].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + _ + "): " + JSON.stringify(D[_]), o)
                                }
                            l = D
                        } else if ("start" === A) {
                            var D;
                            a(o).tweensContainer && a(o).isAnimating === !0 && (D = a(o).tweensContainer), f.each(v, function(e, t) {
                                if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                    var n = d(t, !0),
                                        r = n[0],
                                        o = n[1],
                                        a = n[2];
                                    if (w.RegEx.isHex.test(r)) {
                                        for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(r), u = a ? w.Values.hexToRgb(a) : i, c = 0; c < s.length; c++) {
                                            var f = [l[c]];
                                            o && f.push(o), u !== i && f.push(u[c]), v[e + s[c]] = f
                                        }
                                        delete v[e]
                                    }
                                }
                            });
                            for (var M in v) {
                                var I = d(v[M]),
                                    H = I[0],
                                    R = I[1],
                                    F = I[2];
                                M = w.Names.camelCase(M);
                                var $ = w.Hooks.getRoot(M),
                                    W = !1;
                                if (a(o).isSVG || "tween" === $ || w.Names.prefixCheck($)[1] !== !1 || w.Normalizations.registered[$] !== i) {
                                    (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(M) && !F && 0 !== H && (F = 0), s._cacheValues && D && D[M] ? (F === i && (F = D[M].endValue + D[M].unitType), W = a(o).rootPropertyValueCache[$]) : w.Hooks.registered[M] ? F === i ? (W = w.getPropertyValue(o, $), F = w.getPropertyValue(o, M, W)) : W = w.Hooks.templates[$][1] : F === i && (F = w.getPropertyValue(o, M));
                                    var z, V, Q, B = !1;
                                    if (z = p(M, F), F = z[0], Q = z[1], z = p(M, H), H = z[0].replace(/^([+-\/*])=/, function(e, t) {
                                            return B = t, ""
                                        }), V = z[1], F = parseFloat(F) || 0, H = parseFloat(H) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(M) ? (H /= 100, V = "em") : /^scale/.test(M) ? (H /= 100, V = "") : /(Red|Green|Blue)$/i.test(M) && (H = H / 100 * 255, V = "")), /[\/*]/.test(B)) V = Q;
                                    else if (Q !== V && 0 !== F)
                                        if (0 === H) V = Q;
                                        else {
                                            r = r || m();
                                            var X = /margin|padding|left|right|width|text|word|letter/i.test(M) || /X$/.test(M) || "x" === M ? "x" : "y";
                                            switch (Q) {
                                                case "%":
                                                    F *= "x" === X ? r.percentToPxWidth : r.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    F *= r[Q + "ToPx"]
                                            }
                                            switch (V) {
                                                case "%":
                                                    F *= 1 / ("x" === X ? r.percentToPxWidth : r.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    F *= 1 / r[V + "ToPx"]
                                            }
                                        }
                                    switch (B) {
                                        case "+":
                                            H = F + H;
                                            break;
                                        case "-":
                                            H = F - H;
                                            break;
                                        case "*":
                                            H = F * H;
                                            break;
                                        case "/":
                                            H = F / H
                                    }
                                    l[M] = {
                                        rootPropertyValue: W,
                                        startValue: F,
                                        currentValue: F,
                                        endValue: H,
                                        unitType: V,
                                        easing: R
                                    }, b.debug && console.log("tweensContainer (" + M + "): " + JSON.stringify(l[M]), o)
                                } else b.debug && console.log("Skipping [" + $ + "] due to a lack of browser support.")
                            }
                            l.element = o
                        }
                        l.element && (w.Values.addClass(o, "velocity-animating"), q.push(l), "" === s.queue && (a(o).tweensContainer = l, a(o).opts = s), a(o).isAnimating = !0, k === T - 1 ? (b.State.calls.push([q, h, s, null, N.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : k++)
                    }
                    var r, o = this,
                        s = f.extend({}, b.defaults, y),
                        l = {};
                    switch (a(o) === i && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function(e) {
                        b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay)),
                            next: e
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = m;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function(t, n) {
                        return n === !0 ? (N.promise && N.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o)
                }
                var s, l, p, h, v, y, x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                if (g.isWrapped(this) ? (s = !1, p = 0, h = this, l = this) : (s = !0, p = 1, h = x ? arguments[0].elements || arguments[0].e : arguments[0]), h = o(h)) {
                    x ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[p], y = arguments[p + 1]);
                    var T = h.length,
                        k = 0;
                    if (!/^(stop|finish)$/i.test(v) && !f.isPlainObject(y)) {
                        var S = p + 1;
                        y = {};
                        for (var E = S; E < arguments.length; E++) g.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? g.isString(arguments[E]) || g.isArray(arguments[E]) ? y.easing = arguments[E] : g.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                    }
                    var N = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && (N.promise = new b.Promise(function(e, t) {
                        N.resolver = e, N.rejecter = t
                    }));
                    var A;
                    switch (v) {
                        case "scroll":
                            A = "scroll";
                            break;
                        case "reverse":
                            A = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            f.each(h, function(e, t) {
                                a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                            });
                            var O = [];
                            return f.each(b.State.calls, function(e, t) {
                                t && f.each(t[1], function(n, r) {
                                    var o = y === i ? "" : y;
                                    return o === !0 || t[2].queue === o || y === i && t[2].queue === !1 ? void f.each(h, function(n, i) {
                                        i === r && ((y === !0 || g.isString(y)) && (f.each(f.queue(i, g.isString(y) ? y : ""), function(e, t) {
                                            g.isFunction(t) && t(null, !0)
                                        }), f.queue(i, g.isString(y) ? y : "", [])), "stop" === v ? (a(i) && a(i).tweensContainer && o !== !1 && f.each(a(i).tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), O.push(e)) : "finish" === v && (t[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === v && (f.each(O, function(e, t) {
                                d(t, !0)
                            }), N.promise && N.resolver(h)), e();
                        default:
                            if (!f.isPlainObject(v) || g.isEmptyObject(v)) {
                                if (g.isString(v) && b.Redirects[v]) {
                                    var j = f.extend({}, y),
                                        D = j.duration,
                                        _ = j.delay || 0;
                                    return j.backwards === !0 && (h = f.extend(!0, [], h).reverse()), f.each(h, function(e, t) {
                                        parseFloat(j.stagger) ? j.delay = _ + parseFloat(j.stagger) * e : g.isFunction(j.stagger) && (j.delay = _ + j.stagger.call(t, e, T)), j.drag && (j.duration = parseFloat(D) || (/^(callout|transition)/.test(v) ? 1e3 : m), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / T : (e + 1) / T), .75 * j.duration, 200)), b.Redirects[v].call(t, t, j || {}, e, T, h, N.promise ? N : i)
                                    }), e()
                                }
                                var P = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return N.promise ? N.rejecter(new Error(P)) : console.log(P), e()
                            }
                            A = "start"
                    }
                    var L = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        q = [];
                    f.each(h, function(e, t) {
                        g.isNode(t) && r.call(t)
                    });
                    var M, j = f.extend({}, b.defaults, y);
                    if (j.loop = parseInt(j.loop), M = 2 * j.loop - 1, j.loop)
                        for (var I = 0; M > I; I++) {
                            var H = {
                                delay: j.delay,
                                progress: j.progress
                            };
                            I === M - 1 && (H.display = j.display, H.visibility = j.visibility, H.complete = j.complete), C(h, "reverse", H)
                        }
                    return e()
                }
            };
            b = f.extend(C, b), b.animate = C;
            var T = t.requestAnimationFrame || h;
            return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                n.hidden ? (T = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, c()) : T = t.requestAnimationFrame || h
            }), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(e, t) {
                b.Redirects["slide" + t] = function(e, n, r, o, a, s) {
                    var l = f.extend({}, n),
                        u = l.begin,
                        c = l.complete,
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        p = {};
                    l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                        u && u.call(a, a);
                        for (var n in d) {
                            p[n] = e.style[n];
                            var i = b.CSS.getPropertyValue(e, n);
                            d[n] = "Down" === t ? [i, 0] : [0, i]
                        }
                        p.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var t in p) e.style[t] = p[t];
                        c && c.call(a, a), s && s.resolver(a)
                    }, b(e, d, l)
                }
            }), f.each(["In", "Out"], function(e, t) {
                b.Redirects["fade" + t] = function(e, n, r, o, a, s) {
                    var l = f.extend({}, n),
                        u = {
                            opacity: "In" === t ? 1 : 0
                        },
                        c = l.complete;
                    l.complete = r !== o - 1 ? l.begin = null : function() {
                        c && c.call(a, a), s && s.resolver(a)
                    }, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    }), ! function(e, t, n, i) {
        "use strict";

        function r(e, t, n) {
            return setTimeout(c(e, n), t)
        }

        function o(e, t, n) {
            return Array.isArray(e) ? (a(e, n[t], n), !0) : !1
        }

        function a(e, t, n) {
            var r;
            if (e)
                if (e.forEach) e.forEach(t, n);
                else if (e.length !== i)
                for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
            else
                for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
        }

        function s(e, t, n) {
            for (var r = Object.keys(t), o = 0; o < r.length;)(!n || n && e[r[o]] === i) && (e[r[o]] = t[r[o]]), o++;
            return e
        }

        function l(e, t) {
            return s(e, t, !0)
        }

        function u(e, t, n) {
            var i, r = t.prototype;
            i = e.prototype = Object.create(r), i.constructor = e, i._super = r, n && s(i, n)
        }

        function c(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function d(e, t) {
            return typeof e == ce ? e.apply(t ? t[0] || i : i, t) : e
        }

        function f(e, t) {
            return e === i ? t : e
        }

        function p(e, t, n) {
            a(m(t), function(t) {
                e.addEventListener(t, n, !1)
            })
        }

        function h(e, t, n) {
            a(m(t), function(t) {
                e.removeEventListener(t, n, !1)
            })
        }

        function g(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function v(e, t) {
            return e.indexOf(t) > -1
        }

        function m(e) {
            return e.trim().split(/\s+/g)
        }

        function y(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);
            for (var i = 0; i < e.length;) {
                if (n && e[i][n] == t || !n && e[i] === t) return i;
                i++
            }
            return -1
        }

        function b(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function x(e, t, n) {
            for (var i = [], r = [], o = 0; o < e.length;) {
                var a = t ? e[o][t] : e[o];
                y(r, a) < 0 && i.push(e[o]), r[o] = a, o++
            }
            return n && (i = t ? i.sort(function(e, n) {
                return e[t] > n[t]
            }) : i.sort()), i
        }

        function w(e, t) {
            for (var n, r, o = t[0].toUpperCase() + t.slice(1), a = 0; a < le.length;) {
                if (n = le[a], r = n ? n + o : t, r in e) return r;
                a++
            }
            return i
        }

        function C() {
            return he++
        }

        function T(e) {
            var t = e.ownerDocument;
            return t.defaultView || t.parentWindow
        }

        function k(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                d(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }

        function S(e) {
            var t, n = e.options.inputClass;
            return new(t = n ? n : me ? R : ye ? W : ve ? V : H)(e, E)
        }

        function E(e, t, n) {
            var i = n.pointers.length,
                r = n.changedPointers.length,
                o = t & ke && 0 === i - r,
                a = t & (Ee | Ne) && 0 === i - r;
            n.isFirst = !!o, n.isFinal = !!a, o && (e.session = {}), n.eventType = t, N(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
        }

        function N(e, t) {
            var n = e.session,
                i = t.pointers,
                r = i.length;
            n.firstInput || (n.firstInput = j(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = j(t) : 1 === r && (n.firstMultiple = !1);
            var o = n.firstInput,
                a = n.firstMultiple,
                s = a ? a.center : o.center,
                l = t.center = D(i);
            t.timeStamp = pe(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = q(s, l), t.distance = L(s, l), A(n, t), t.offsetDirection = P(t.deltaX, t.deltaY), t.scale = a ? I(a.pointers, i) : 1, t.rotation = a ? M(a.pointers, i) : 0, O(n, t);
            var u = e.element;
            g(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
        }

        function A(e, t) {
            var n = t.center,
                i = e.offsetDelta || {},
                r = e.prevDelta || {},
                o = e.prevInput || {};
            (t.eventType === ke || o.eventType === Ee) && (r = e.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
            }, i = e.offsetDelta = {
                x: n.x,
                y: n.y
            }), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y)
        }

        function O(e, t) {
            var n, r, o, a, s = e.lastInterval || t,
                l = t.timeStamp - s.timeStamp;
            if (t.eventType != Ne && (l > Te || s.velocity === i)) {
                var u = s.deltaX - t.deltaX,
                    c = s.deltaY - t.deltaY,
                    d = _(l, u, c);
                r = d.x, o = d.y, n = fe(d.x) > fe(d.y) ? d.x : d.y, a = P(u, c), e.lastInterval = t
            } else n = s.velocity, r = s.velocityX, o = s.velocityY, a = s.direction;
            t.velocity = n, t.velocityX = r, t.velocityY = o, t.direction = a
        }

        function j(e) {
            for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                clientX: de(e.pointers[n].clientX),
                clientY: de(e.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: pe(),
                pointers: t,
                center: D(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function D(e) {
            var t = e.length;
            if (1 === t) return {
                x: de(e[0].clientX),
                y: de(e[0].clientY)
            };
            for (var n = 0, i = 0, r = 0; t > r;) n += e[r].clientX, i += e[r].clientY, r++;
            return {
                x: de(n / t),
                y: de(i / t)
            }
        }

        function _(e, t, n) {
            return {
                x: t / e || 0,
                y: n / e || 0
            }
        }

        function P(e, t) {
            return e === t ? Ae : fe(e) >= fe(t) ? e > 0 ? Oe : je : t > 0 ? De : _e
        }

        function L(e, t, n) {
            n || (n = Me);
            var i = t[n[0]] - e[n[0]],
                r = t[n[1]] - e[n[1]];
            return Math.sqrt(i * i + r * r)
        }

        function q(e, t, n) {
            n || (n = Me);
            var i = t[n[0]] - e[n[0]],
                r = t[n[1]] - e[n[1]];
            return 180 * Math.atan2(r, i) / Math.PI
        }

        function M(e, t) {
            return q(t[1], t[0], Ie) - q(e[1], e[0], Ie)
        }

        function I(e, t) {
            return L(t[0], t[1], Ie) / L(e[0], e[1], Ie)
        }

        function H() {
            this.evEl = Re, this.evWin = Fe, this.allow = !0, this.pressed = !1, k.apply(this, arguments)
        }

        function R() {
            this.evEl = ze, this.evWin = Ve, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function F() {
            this.evTarget = Be, this.evWin = Xe, this.started = !1, k.apply(this, arguments)
        }

        function $(e, t) {
            var n = b(e.touches),
                i = b(e.changedTouches);
            return t & (Ee | Ne) && (n = x(n.concat(i), "identifier", !0)), [n, i]
        }

        function W() {
            this.evTarget = Ue, this.targetIds = {}, k.apply(this, arguments)
        }

        function z(e, t) {
            var n = b(e.touches),
                i = this.targetIds;
            if (t & (ke | Se) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
            var r, o, a = b(e.changedTouches),
                s = [],
                l = this.target;
            if (o = n.filter(function(e) {
                    return g(e.target, l)
                }), t === ke)
                for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
            for (r = 0; r < a.length;) i[a[r].identifier] && s.push(a[r]), t & (Ee | Ne) && delete i[a[r].identifier], r++;
            return s.length ? [x(o.concat(s), "identifier", !0), s] : void 0
        }

        function V() {
            k.apply(this, arguments);
            var e = c(this.handler, this);
            this.touch = new W(this.manager, e), this.mouse = new H(this.manager, e)
        }

        function Q(e, t) {
            this.manager = e, this.set(t)
        }

        function B(e) {
            if (v(e, tt)) return tt;
            var t = v(e, nt),
                n = v(e, it);
            return t && n ? nt + " " + it : t || n ? t ? nt : it : v(e, et) ? et : Ze
        }

        function X(e) {
            this.id = C(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = f(this.options.enable, !0), this.state = rt, this.simultaneous = {}, this.requireFail = []
        }

        function Y(e) {
            return e & ut ? "cancel" : e & st ? "end" : e & at ? "move" : e & ot ? "start" : ""
        }

        function U(e) {
            return e == _e ? "down" : e == De ? "up" : e == Oe ? "left" : e == je ? "right" : ""
        }

        function G(e, t) {
            var n = t.manager;
            return n ? n.get(e) : e
        }

        function J() {
            X.apply(this, arguments)
        }

        function K() {
            J.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Z() {
            J.apply(this, arguments)
        }

        function ee() {
            X.apply(this, arguments), this._timer = null, this._input = null
        }

        function te() {
            J.apply(this, arguments)
        }

        function ne() {
            J.apply(this, arguments)
        }

        function ie() {
            X.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function re(e, t) {
            return t = t || {}, t.recognizers = f(t.recognizers, re.defaults.preset), new oe(e, t)
        }

        function oe(e, t) {
            t = t || {}, this.options = l(t, re.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = S(this), this.touchAction = new Q(this, this.options.touchAction), ae(this, !0), a(t.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function ae(e, t) {
            var n = e.element;
            a(e.options.cssProps, function(e, i) {
                n.style[w(n.style, i)] = t ? e : ""
            })
        }

        function se(e, n) {
            var i = t.createEvent("Event");
            i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
        }
        var le = ["", "webkit", "moz", "MS", "ms", "o"],
            ue = t.createElement("div"),
            ce = "function",
            de = Math.round,
            fe = Math.abs,
            pe = Date.now,
            he = 1,
            ge = /mobile|tablet|ip(ad|hone|od)|android/i,
            ve = "ontouchstart" in e,
            me = w(e, "PointerEvent") !== i,
            ye = ve && ge.test(navigator.userAgent),
            be = "touch",
            xe = "pen",
            we = "mouse",
            Ce = "kinect",
            Te = 25,
            ke = 1,
            Se = 2,
            Ee = 4,
            Ne = 8,
            Ae = 1,
            Oe = 2,
            je = 4,
            De = 8,
            _e = 16,
            Pe = Oe | je,
            Le = De | _e,
            qe = Pe | Le,
            Me = ["x", "y"],
            Ie = ["clientX", "clientY"];
        k.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(T(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(T(this.element), this.evWin, this.domHandler)
            }
        };
        var He = {
                mousedown: ke,
                mousemove: Se,
                mouseup: Ee
            },
            Re = "mousedown",
            Fe = "mousemove mouseup";
        u(H, k, {
            handler: function(e) {
                var t = He[e.type];
                t & ke && 0 === e.button && (this.pressed = !0), t & Se && 1 !== e.which && (t = Ee), this.pressed && this.allow && (t & Ee && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: we,
                    srcEvent: e
                }))
            }
        });
        var $e = {
                pointerdown: ke,
                pointermove: Se,
                pointerup: Ee,
                pointercancel: Ne,
                pointerout: Ne
            },
            We = {
                2: be,
                3: xe,
                4: we,
                5: Ce
            },
            ze = "pointerdown",
            Ve = "pointermove pointerup pointercancel";
        e.MSPointerEvent && (ze = "MSPointerDown", Ve = "MSPointerMove MSPointerUp MSPointerCancel"), u(R, k, {
            handler: function(e) {
                var t = this.store,
                    n = !1,
                    i = e.type.toLowerCase().replace("ms", ""),
                    r = $e[i],
                    o = We[e.pointerType] || e.pointerType,
                    a = o == be,
                    s = y(t, e.pointerId, "pointerId");
                r & ke && (0 === e.button || a) ? 0 > s && (t.push(e), s = t.length - 1) : r & (Ee | Ne) && (n = !0), 0 > s || (t[s] = e, this.callback(this.manager, r, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: o,
                    srcEvent: e
                }), n && t.splice(s, 1))
            }
        });
        var Qe = {
                touchstart: ke,
                touchmove: Se,
                touchend: Ee,
                touchcancel: Ne
            },
            Be = "touchstart",
            Xe = "touchstart touchmove touchend touchcancel";
        u(F, k, {
            handler: function(e) {
                var t = Qe[e.type];
                if (t === ke && (this.started = !0), this.started) {
                    var n = $.call(this, e, t);
                    t & (Ee | Ne) && 0 === n[0].length - n[1].length && (this.started = !1), this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: be,
                        srcEvent: e
                    })
                }
            }
        });
        var Ye = {
                touchstart: ke,
                touchmove: Se,
                touchend: Ee,
                touchcancel: Ne
            },
            Ue = "touchstart touchmove touchend touchcancel";
        u(W, k, {
            handler: function(e) {
                var t = Ye[e.type],
                    n = z.call(this, e, t);
                n && this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: be,
                    srcEvent: e
                })
            }
        }), u(V, k, {
            handler: function(e, t, n) {
                var i = n.pointerType == be,
                    r = n.pointerType == we;
                if (i) this.mouse.allow = !1;
                else if (r && !this.mouse.allow) return;
                t & (Ee | Ne) && (this.mouse.allow = !0), this.callback(e, t, n)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ge = w(ue.style, "touchAction"),
            Je = Ge !== i,
            Ke = "compute",
            Ze = "auto",
            et = "manipulation",
            tt = "none",
            nt = "pan-x",
            it = "pan-y";
        Q.prototype = {
            set: function(e) {
                e == Ke && (e = this.compute()), Je && (this.manager.element.style[Ge] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return a(this.manager.recognizers, function(t) {
                    d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }), B(e.join(" "))
            },
            preventDefaults: function(e) {
                if (!Je) {
                    var t = e.srcEvent,
                        n = e.offsetDirection;
                    if (this.manager.session.prevented) return void t.preventDefault();
                    var i = this.actions,
                        r = v(i, tt),
                        o = v(i, it),
                        a = v(i, nt);
                    return r || o && n & Pe || a && n & Le ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var rt = 1,
            ot = 2,
            at = 4,
            st = 8,
            lt = st,
            ut = 16,
            ct = 32;
        X.prototype = {
            defaults: {},
            set: function(e) {
                return s(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (o(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = G(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return o(e, "dropRecognizeWith", this) ? this : (e = G(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (o(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = G(e, this), -1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (o(e, "dropRequireFailure", this)) return this;
                e = G(e, this);
                var t = y(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    n.manager.emit(n.options.event + (t ? Y(i) : ""), e)
                }
                var n = this,
                    i = this.state;
                st > i && t(!0), t(), i >= st && t(!0)
            },
            tryEmit: function(e) {
                return this.canEmit() ? this.emit(e) : void(this.state = ct)
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (ct | rt))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = s({}, e);
                return d(this.options.enable, [this, t]) ? (this.state & (lt | ut | ct) && (this.state = rt), this.state = this.process(t), void(this.state & (ot | at | st | ut) && this.tryEmit(t))) : (this.reset(), void(this.state = ct))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, u(J, X, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    n = e.eventType,
                    i = t & (ot | at),
                    r = this.attrTest(e);
                return i && (n & Ne || !r) ? t | ut : i || r ? n & Ee ? t | st : t & ot ? t | at : ot : ct
            }
        }), u(K, J, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: qe
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & Pe && t.push(it), e & Le && t.push(nt), t
            },
            directionTest: function(e) {
                var t = this.options,
                    n = !0,
                    i = e.distance,
                    r = e.direction,
                    o = e.deltaX,
                    a = e.deltaY;
                return r & t.direction || (t.direction & Pe ? (r = 0 === o ? Ae : 0 > o ? Oe : je, n = o != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === a ? Ae : 0 > a ? De : _e, n = a != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
            },
            attrTest: function(e) {
                return J.prototype.attrTest.call(this, e) && (this.state & ot || !(this.state & ot) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = U(e.direction);
                t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
            }
        }), u(Z, J, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [tt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & ot)
            },
            emit: function(e) {
                if (this._super.emit.call(this, e), 1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + t, e)
                }
            }
        }), u(ee, X, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Ze]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    o = e.deltaTime > t.time;
                if (this._input = e, !i || !n || e.eventType & (Ee | Ne) && !o) this.reset();
                else if (e.eventType & ke) this.reset(), this._timer = r(function() {
                    this.state = lt, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & Ee) return lt;
                return ct
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === lt && (e && e.eventType & Ee ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = pe(), this.manager.emit(this.options.event, this._input)))
            }
        }), u(te, J, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [tt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & ot)
            }
        }), u(ne, J, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: Pe | Le,
                pointers: 1
            },
            getTouchAction: function() {
                return K.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, n = this.options.direction;
                return n & (Pe | Le) ? t = e.velocity : n & Pe ? t = e.velocityX : n & Le && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && fe(t) > this.options.velocity && e.eventType & Ee
            },
            emit: function(e) {
                var t = U(e.direction);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), u(ie, X, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [et]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    o = e.deltaTime < t.time;
                if (this.reset(), e.eventType & ke && 0 === this.count) return this.failTimeout();
                if (i && o && n) {
                    if (e.eventType != Ee) return this.failTimeout();
                    var a = this.pTime ? e.timeStamp - this.pTime < t.interval : !0,
                        s = !this.pCenter || L(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e;
                    var l = this.count % t.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = lt, this.tryEmit()
                    }, t.interval, this), ot) : lt
                }
                return ct
            },
            failTimeout: function() {
                return this._timer = r(function() {
                    this.state = ct
                }, this.options.interval, this), ct
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == lt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), re.VERSION = "2.0.4", re.defaults = {
            domEvents: !1,
            touchAction: Ke,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [te, {
                    enable: !1
                }],
                [Z, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ne, {
                    direction: Pe
                }],
                [K, {
                        direction: Pe
                    },
                    ["swipe"]
                ],
                [ie],
                [ie, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [ee]
            ],
            cssProps: {
                userSelect: "default",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var dt = 1,
            ft = 2;
        oe.prototype = {
            set: function(e) {
                return s(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? ft : dt
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var n, i = this.recognizers,
                        r = t.curRecognizer;
                    (!r || r && r.state & lt) && (r = t.curRecognizer = null);
                    for (var o = 0; o < i.length;) n = i[o], t.stopped === ft || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (ot | at | st) && (r = t.curRecognizer = n), o++
                }
            },
            get: function(e) {
                if (e instanceof X) return e;
                for (var t = this.recognizers, n = 0; n < t.length; n++)
                    if (t[n].options.event == e) return t[n];
                return null
            },
            add: function(e) {
                if (o(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (o(e, "remove", this)) return this;
                var t = this.recognizers;
                return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
            },
            on: function(e, t) {
                var n = this.handlers;
                return a(m(e), function(e) {
                    n[e] = n[e] || [], n[e].push(t)
                }), this
            },
            off: function(e, t) {
                var n = this.handlers;
                return a(m(e), function(e) {
                    t ? n[e].splice(y(n[e], t), 1) : delete n[e]
                }), this
            },
            emit: function(e, t) {
                this.options.domEvents && se(e, t);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length;) n[i](t), i++
                }
            },
            destroy: function() {
                this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, s(re, {
            INPUT_START: ke,
            INPUT_MOVE: Se,
            INPUT_END: Ee,
            INPUT_CANCEL: Ne,
            STATE_POSSIBLE: rt,
            STATE_BEGAN: ot,
            STATE_CHANGED: at,
            STATE_ENDED: st,
            STATE_RECOGNIZED: lt,
            STATE_CANCELLED: ut,
            STATE_FAILED: ct,
            DIRECTION_NONE: Ae,
            DIRECTION_LEFT: Oe,
            DIRECTION_RIGHT: je,
            DIRECTION_UP: De,
            DIRECTION_DOWN: _e,
            DIRECTION_HORIZONTAL: Pe,
            DIRECTION_VERTICAL: Le,
            DIRECTION_ALL: qe,
            Manager: oe,
            Input: k,
            TouchAction: Q,
            TouchInput: W,
            MouseInput: H,
            PointerEventInput: R,
            TouchMouseInput: V,
            SingleTouchInput: F,
            Recognizer: X,
            AttrRecognizer: J,
            Tap: ie,
            Pan: K,
            Swipe: ne,
            Pinch: Z,
            Rotate: te,
            Press: ee,
            on: p,
            off: h,
            each: a,
            merge: l,
            extend: s,
            inherit: u,
            bindFn: c,
            prefixed: w
        }), typeof define == ce && define.amd ? define(function() {
            return re
        }) : "undefined" != typeof module && module.exports ? module.exports = re : e[n] = re
    }(window, document, "Hammer"),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
    }(function(e, t) {
        function n(n, i) {
            var r = e(n);
            r.data("hammer") || r.data("hammer", new t(r[0], i))
        }
        e.fn.hammer = function(e) {
            return this.each(function() {
                n(this, e)
            })
        }, t.Manager.prototype.emit = function(t) {
            return function(n, i) {
                t.call(this, n, i), e(this.element).trigger({
                    type: n,
                    gesture: i
                })
            }
        }(t.Manager.prototype.emit)
    }), window.Materialize = {}, Materialize.guid = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(), Materialize.elementOrParentIsFixed = function(e) {
        var t = $(e),
            n = t.add(t.parents()),
            i = !1;
        return n.each(function() {
            return "fixed" === $(this).css("position") ? (i = !0, !1) : void 0
        }), i
    };
var Vel;
Vel = $ ? $.Velocity : Velocity,
    function(e) {
        e.fn.collapsible = function(t) {
            var n = {
                accordion: void 0
            };
            return t = e.extend(n, t), this.each(function() {
                function n(t) {
                    s = a.find("> li > .collapsible-header"), t.hasClass("active2") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }), s.not(t).removeClass("active").parent().removeClass("active"), s.not(t).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    })
                }

                function i(t) {
                    t.hasClass("active2") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    })
                }

                function r(e) {
                    var t = o(e);
                    return t.length > 0
                }

                function o(e) {
                    return e.closest("li > .collapsible-header")
                }
                var a = e(this),
                    s = e(this).find("> li > .collapsible-header"),
                    l = a.data("collapsible");
                a.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? (s = a.find("> li > .collapsible-header"), s.on("click.collapse", function(t) {
                    var i = e(t.target);
					r(i) && (i = o(i)), i.toggleClass("active2"), n(i);
					if (i.hasClass("active2")) {
						i.addClass("active");
					} else {
						i.removeClass("active");
					}
                }), n(s.filter(".active").first())) : s.each(function() {
                    e(this).on("click.collapse", function(t) {
                        var n = e(t.target);
						r(n) && (n = o(n)), n.toggleClass("active2"), i(n);
						if (n.hasClass("active2")) {
							n.addClass("active");
						} else {
							n.removeClass("active");
						}
                    }), e(this).hasClass("active") && i(e(this))
                })
            })
        }, e(document).ready(function() {
            e(".collapsible").collapsible()
        })
    }(jQuery),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var n = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function i() {
                    void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"))
                }

                function r() {
                    i(), l.addClass("active"), s.constrain_width === !0 ? l.css("width", a.outerWidth()) : l.css("white-space", "nowrap");
                    var t = 0;
                    s.belowOrigin === !0 && (t = a.height());
                    var n, r, o, u = a.offset().left;
                    u + l.innerWidth() > e(window).width() ? s.alignment = "right" : u - l.innerWidth() + a.innerWidth() < 0 && (s.alignment = "left"), "left" === s.alignment ? (r = 0, o = s.gutter, n = a.position().left + r + o, l.css({
                        left: n
                    })) : "right" === s.alignment && (e(window).width() - u - a.innerWidth(), r = 0, o = s.gutter, n = e(window).width() - a.position().left - a.innerWidth() + o, l.css({
                        right: n
                    })), l.css({
                        position: "absolute",
                        top: a.position().top + t
                    }), l.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function o() {
                    l.fadeOut(s.outDuration), l.removeClass("active")
                }
                var a = e(this),
                    s = e.extend({}, n, t),
                    l = e("#" + a.attr("data-activates"));
                if (i(), a.after(l), s.hover) {
                    var u = !1;
                    a.unbind("click." + a.attr("id")), a.on("mouseenter", function(e) {
                        u === !1 && (r(), u = !0)
                    }), a.on("mouseleave", function(t) {
                        var n = t.toElement || t.relatedTarget;
                        e(n).closest(".dropdown-content").is(l) || (l.stop(!0, !0), o(), u = !1)
                    }), l.on("mouseleave", function(t) {
                        var n = t.toElement || t.relatedTarget;
                        e(n).closest(".dropdown-button").is(a) || (l.stop(!0, !0), o(), u = !1)
                    })
                } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function(t) {
                    a[0] == t.currentTarget && 0 === e(t.target).closest(".dropdown-content").length ? (t.preventDefault(), r()) : a.hasClass("active") && (o(), e(document).unbind("click." + l.attr("id"))), l.hasClass("active") && e(document).bind("click." + l.attr("id"), function(t) {
                        !l.is(t.target) && !a.is(t.target) && !a.find(t.target).length > 0 && (o(), e(document).unbind("click." + l.attr("id")))
                    })
                });
                a.on("open", r), a.on("close", o)
            })
        }, e(document).ready(function() {
            e(".dropdown-button").dropdown()
        })
    }(jQuery),
    function(e) {
        var t = 0,
            n = 0,
            i = function() {
                return n++, "materialize-lean-overlay-" + n
            };
        e.fn.extend({
            openModal: function(n) {
                e("body").css("overflow", "hidden");
                var r = {
                        opacity: .5,
                        in_duration: 350,
                        out_duration: 250,
                        ready: void 0,
                        complete: void 0,
                        dismissible: !0,
                        starting_top: "4%",
                        end_top: "10%"
                    },
                    o = i(),
                    a = e(this),
                    s = e('<div class="lean-overlay"></div>'),
                    l = ++t;
                s.attr("id", o).css("z-index", 2e3 + 2 * l), a.data("overlay-id", o).css("z-index", 2e3 + 2 * l + 1), e("body").append(s), n = e.extend(r, n), n.dismissible && (s.click(function() {
                    a.closeModal(n)
                }), e(document).on("keyup.leanModal" + o, function(e) {
                    27 === e.keyCode && a.closeModal(n)
                })), a.find(".modal-close").on("click.close", function(e) {
                    a.closeModal(n)
                }), s.css({
                    display: "block",
                    opacity: 0
                }), a.css({
                    display: "block",
                    opacity: 0
                }), s.velocity({
                    opacity: n.opacity
                }, {
                    duration: n.in_duration,
                    queue: !1,
                    ease: "easeOutCubic"
                }), a.data("associated-overlay", s[0]), a.hasClass("bottom-sheet") ? a.velocity({
                    bottom: "0",
                    opacity: 1
                }, {
                    duration: n.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof n.ready && n.ready()
                    }
                }) : (e.Velocity.hook(a, "scaleX", .7), a.css({
                    top: n.starting_top
                }), a.velocity({
                    top: n.end_top,
                    opacity: 1,
                    scaleX: "1"
                }, {
                    duration: n.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof n.ready && n.ready()
                    }
                }))
            }
        }), e.fn.extend({
            closeModal: function(n) {
                var i = {
                        out_duration: 250,
                        complete: void 0
                    },
                    r = e(this),
                    o = r.data("overlay-id"),
                    a = e("#" + o);
                n = e.extend(i, n), e("body").css("overflow", ""), r.find(".modal-close").off("click.close"), e(document).off("keyup.leanModal" + o), a.velocity({
                    opacity: 0
                }, {
                    duration: n.out_duration,
                    queue: !1,
                    ease: "easeOutQuart"
                }), r.hasClass("bottom-sheet") ? r.velocity({
                    bottom: "-100%",
                    opacity: 0
                }, {
                    duration: n.out_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        a.css({
                            display: "none"
                        }), "function" == typeof n.complete && n.complete(), a.remove(), t--
                    }
                }) : r.velocity({
                    top: n.starting_top,
                    opacity: 0,
                    scaleX: .7
                }, {
                    duration: n.out_duration,
                    complete: function() {
                        e(this).css("display", "none"), "function" == typeof n.complete && n.complete(), a.remove(), t--
                    }
                })
            }
        }), e.fn.extend({
            leanModal: function(t) {
                return this.each(function() {
                    var n = {
                            starting_top: "4%"
                        },
                        i = e.extend(n, t);
                    e(this).click(function(t) {
                        i.starting_top = (e(this).offset().top - e(window).scrollTop()) / 1.15;
                        var n = e(this).attr("href") || "#" + e(this).data("target");
                        e(n).openModal(i), t.preventDefault()
                    })
                })
            }
        })
    }(jQuery),
    function(e) {
        e.fn.materialbox = function() {
            return this.each(function() {
                function t() {
                    i = !1;
                    var t = a.parent(".material-placeholder"),
                        r = (window.innerWidth, window.innerHeight, a.data("width")),
                        s = a.data("height");
                    a.velocity("stop", !0), e("#materialbox-overlay").velocity("stop", !0), e(".materialbox-caption").velocity("stop", !0), e("#materialbox-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: o,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            n = !1, e(this).remove()
                        }
                    }), a.velocity({
                        width: r,
                        height: s,
                        left: 0,
                        top: 0
                    }, {
                        duration: o,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), e(".materialbox-caption").velocity({
                        opacity: 0
                    }, {
                        duration: o,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            t.css({
                                height: "",
                                width: "",
                                position: "",
                                top: "",
                                left: ""
                            }), a.css({
                                height: "",
                                top: "",
                                left: "",
                                width: "",
                                "max-width": "",
                                position: "",
                                "z-index": ""
                            }), a.removeClass("active"), i = !0, e(this).remove()
                        }
                    })
                }
                if (!e(this).hasClass("initialized")) {
                    e(this).addClass("initialized");
                    var n = !1,
                        i = !0,
                        r = 275,
                        o = 200,
                        a = e(this),
                        s = e("<div></div>").addClass("material-placeholder");
                    a.wrap(s), a.on("click", function() {
                        var o = a.parent(".material-placeholder"),
                            s = window.innerWidth,
                            l = window.innerHeight,
                            u = a.width(),
                            c = a.height();
                        if (i === !1) return t(), !1;
                        if (n && i === !0) return t(), !1;
                        i = !1, a.addClass("active"), n = !0, o.css({
                            width: o[0].getBoundingClientRect().width,
                            height: o[0].getBoundingClientRect().height,
                            position: "relative",
                            top: 0,
                            left: 0
                        }), a.css({
                            position: "absolute",
                            "z-index": 1e3
                        }).data("width", u).data("height", c);
                        var d = e('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).click(function() {
                            i === !0 && t()
                        });
                        if (e("body").append(d), d.velocity({
                                opacity: 1
                            }, {
                                duration: r,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), "" !== a.data("caption")) {
                            var f = e('<div class="materialbox-caption"></div>');
                            f.text(a.data("caption")), e("body").append(f), f.css({
                                display: "inline"
                            }), f.velocity({
                                opacity: 1
                            }, {
                                duration: r,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        var p = 0,
                            h = u / s,
                            g = c / l,
                            v = 0,
                            m = 0;
                        h > g ? (p = c / u, v = .9 * s, m = .9 * s * p) : (p = u / c, v = .9 * l * p, m = .9 * l), a.hasClass("responsive-img") ? a.velocity({
                            "max-width": v,
                            width: u
                        }, {
                            duration: 0,
                            queue: !1,
                            complete: function() {
                                a.css({
                                    left: 0,
                                    top: 0
                                }).velocity({
                                    height: m,
                                    width: v,
                                    left: e(document).scrollLeft() + s / 2 - a.parent(".material-placeholder").offset().left - v / 2,
                                    top: e(document).scrollTop() + l / 2 - a.parent(".material-placeholder").offset().top - m / 2
                                }, {
                                    duration: r,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        i = !0
                                    }
                                })
                            }
                        }) : a.css("left", 0).css("top", 0).velocity({
                            height: m,
                            width: v,
                            left: e(document).scrollLeft() + s / 2 - a.parent(".material-placeholder").offset().left - v / 2,
                            top: e(document).scrollTop() + l / 2 - a.parent(".material-placeholder").offset().top - m / 2
                        }, {
                            duration: r,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                i = !0
                            }
                        })
                    }), e(window).scroll(function() {
                        n && t()
                    }), e(document).keyup(function(e) {
                        27 === e.keyCode && i === !0 && n && t()
                    })
                }
            })
        }, e(document).ready(function() {
            e(".materialboxed").materialbox()
        })
    }(jQuery),
    function(e) {
        e.fn.parallax = function() {
            var t = e(window).width();
            return this.each(function(n) {
                function i(n) {
                    var i;
                    i = 601 > t ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;
                    var o = r.children("img").first(),
                        a = o.height(),
                        s = a - i,
                        l = r.offset().top + i,
                        u = r.offset().top,
                        c = e(window).scrollTop(),
                        d = window.innerHeight,
                        f = c + d,
                        p = (f - u) / (i + d),
                        h = Math.round(s * p);
                    n && o.css("display", "block"), l > c && c + d > u && o.css("transform", "translate3D(-50%," + h + "px, 0)")
                }
                var r = e(this);
                r.addClass("parallax"), r.children("img").one("load", function() {
                    i(!0)
                }).each(function() {
                    this.complete && e(this).load()
                }), e(window).scroll(function() {
                    t = e(window).width(), i(!1)
                }), e(window).resize(function() {
                    t = e(window).width(), i(!1)
                })
            })
        }
    }(jQuery),
    function(e) {
        var t = {
            init: function() {
                return this.each(function() {
                    var t = e(this);
                    e(window).width(), t.width("100%");
                    var n, i, r = t.find("li.tab a"),
                        o = t.width(),
                        a = t.find("li").first().outerWidth(),
                        s = 0;
                    n = e(r.filter('[href="' + location.hash + '"]')), 0 === n.length && (n = e(this).find("li.tab a.active").first()), 0 === n.length && (n = e(this).find("li.tab a").first()), n.addClass("active"), s = r.index(n), 0 > s && (s = 0), i = e(n[0].hash), t.append('<div class="indicator"></div>');
                    var l = t.find(".indicator");
                    t.is(":visible") && (l.css({
                        right: o - (s + 1) * a
                    }), l.css({
                        left: s * a
                    })), e(window).resize(function() {
                        o = t.width(), a = t.find("li").first().outerWidth(), 0 > s && (s = 0), 0 !== a && 0 !== o && (l.css({
                            right: o - (s + 1) * a
                        }), l.css({
                            left: s * a
                        }))
                    }), r.not(n).each(function() {
                        e(this.hash).hide()
                    }), t.on("click", "a", function(u) {
                        if (e(this).parent().hasClass("disabled")) return void u.preventDefault();
                        o = t.width(), a = t.find("li").first().outerWidth(), n.removeClass("active"), i.hide(), n = e(this), i = e(this.hash), r = t.find("li.tab a"), n.addClass("active");
                        var c = s;
                        s = r.index(e(this)), 0 > s && (s = 0), i.show(), s - c >= 0 ? (l.velocity({
                            right: o - (s + 1) * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), l.velocity({
                            left: s * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })) : (l.velocity({
                            left: s * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), l.velocity({
                            right: o - (s + 1) * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })), u.preventDefault()
                    })
                })
            },
            select_tab: function(e) {
                this.find('a[href="#' + e + '"]').trigger("click")
            }
        };
        e.fn.tabs = function(n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
        }, e(document).ready(function() {
            e("ul.tabs").tabs()
        })
    }(jQuery),
    function(e) {
        e.fn.tooltip = function(t) {
            var n = null,
                i = !1,
                r = null,
                o = 5,
                a = {
                    delay: 350
                };
            return "remove" === t ? (this.each(function() {
                e("#" + e(this).attr("data-tooltip-id")).remove()
            }), !1) : (t = e.extend(a, t), this.each(function() {
                var a = Materialize.guid(),
                    s = e(this);
                s.attr("data-tooltip-id", a);
                var l = e("<span></span>").text(s.attr("data-tooltip")),
                    u = e("<div></div>");
                u.addClass("material-tooltip").append(l).appendTo(e("body")).attr("id", a);
                var c = e("<div></div>").addClass("backdrop");
                c.appendTo(u), c.css({
                    top: 0,
                    left: 0
                }), s.off("mouseenter.tooltip mouseleave.tooltip"), s.on({
                    "mouseenter.tooltip": function(e) {
                        var a = s.data("delay");
                        a = void 0 === a || "" === a ? t.delay : a, n = 0, r = setInterval(function() {
                            if (n += 10, n >= a && i === !1) {
                                i = !0, u.css({
                                    display: "block",
                                    left: "0px",
                                    top: "0px"
                                }), u.children("span").text(s.attr("data-tooltip"));
                                var e = s.outerWidth(),
                                    t = s.outerHeight(),
                                    r = s.attr("data-position"),
                                    l = u.outerHeight(),
                                    d = u.outerWidth(),
                                    f = "0px",
                                    p = "0px",
                                    h = 8;
                                "top" === r ? (u.css({
                                    top: s.offset().top - l - o,
                                    left: s.offset().left + e / 2 - d / 2
                                }), f = "-10px", c.css({
                                    borderRadius: "14px 14px 0 0",
                                    transformOrigin: "50% 90%",
                                    marginTop: l,
                                    marginLeft: d / 2 - c.width() / 2
                                })) : "left" === r ? (u.css({
                                    top: s.offset().top + t / 2 - l / 2,
                                    left: s.offset().left - d - o
                                }), p = "-10px", c.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "14px 0 0 14px",
                                    transformOrigin: "95% 50%",
                                    marginTop: l / 2,
                                    marginLeft: d
                                })) : "right" === r ? (u.css({
                                    top: s.offset().top + t / 2 - l / 2,
                                    left: s.offset().left + e + o
                                }), p = "+10px", c.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "0 14px 14px 0",
                                    transformOrigin: "5% 50%",
                                    marginTop: l / 2,
                                    marginLeft: "0px"
                                })) : (u.css({
                                    top: s.offset().top + s.outerHeight() + o,
                                    left: s.offset().left + e / 2 - d / 2
                                }), f = "+10px", c.css({
                                    marginLeft: d / 2 - c.width() / 2
                                })), h = d / 8, 8 > h && (h = 8), ("right" === r || "left" === r) && (h = d / 10, 6 > h && (h = 6)), u.velocity({
                                    marginTop: f,
                                    marginLeft: p
                                }, {
                                    duration: 350,
                                    queue: !1
                                }).velocity({
                                    opacity: 1
                                }, {
                                    duration: 300,
                                    delay: 50,
                                    queue: !1
                                }), c.css({
                                    display: "block"
                                }).velocity({
                                    opacity: 1
                                }, {
                                    duration: 55,
                                    delay: 0,
                                    queue: !1
                                }).velocity({
                                    scale: h
                                }, {
                                    duration: 300,
                                    delay: 0,
                                    queue: !1,
                                    easing: "easeInOutQuad"
                                })
                            }
                        }, 10)
                    },
                    "mouseleave.tooltip": function() {
                        clearInterval(r), n = 0, u.velocity({
                            opacity: 0,
                            marginTop: 0,
                            marginLeft: 0
                        }, {
                            duration: 225,
                            queue: !1,
                            delay: 225
                        }), c.velocity({
                            opacity: 0,
                            scale: 1
                        }, {
                            duration: 225,
                            delay: 275,
                            queue: !1,
                            complete: function() {
                                c.css("display", "none"), u.css("display", "none"), i = !1
                            }
                        })
                    }
                })
            }))
        }, e(document).ready(function() {
            e(".tooltipped").tooltip()
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(e) {
            return null !== e && e === e.window
        }

        function n(e) {
            return t(e) ? e : 9 === e.nodeType && e.defaultView
        }

        function i(e) {
            var t, i, r = {
                    top: 0,
                    left: 0
                },
                o = e && e.ownerDocument;
            return t = o.documentElement, "undefined" != typeof e.getBoundingClientRect && (r = e.getBoundingClientRect()), i = n(o), {
                top: r.top + i.pageYOffset - t.clientTop,
                left: r.left + i.pageXOffset - t.clientLeft
            }
        }

        function r(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }

        function o(e) {
            if (c.allowEvent(e) === !1) return null;
            for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
                if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
                    t = n;
                    break
                }
                if (n.classList.contains("waves-effect")) {
                    t = n;
                    break
                }
                n = n.parentElement
            }
            return t
        }

        function a(t) {
            var n = o(t);
            null !== n && (u.show(t, n), "ontouchstart" in e && (n.addEventListener("touchend", u.hide, !1), n.addEventListener("touchcancel", u.hide, !1)), n.addEventListener("mouseup", u.hide, !1), n.addEventListener("mouseleave", u.hide, !1))
        }
        var s = s || {},
            l = document.querySelectorAll.bind(document),
            u = {
                duration: 750,
                show: function(e, t) {
                    if (2 === e.button) return !1;
                    var n = t || this,
                        o = document.createElement("div");
                    o.className = "waves-ripple", n.appendChild(o);
                    var a = i(n),
                        s = e.pageY - a.top,
                        l = e.pageX - a.left,
                        c = "scale(" + n.clientWidth / 100 * 10 + ")";
                    "touches" in e && (s = e.touches[0].pageY - a.top, l = e.touches[0].pageX - a.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", c), o.setAttribute("data-x", l), o.setAttribute("data-y", s);
                    var d = {
                        top: s + "px",
                        left: l + "px"
                    };
                    o.className = o.className + " waves-notransition", o.setAttribute("style", r(d)), o.className = o.className.replace("waves-notransition", ""), d["-webkit-transform"] = c, d["-moz-transform"] = c, d["-ms-transform"] = c, d["-o-transform"] = c, d.transform = c, d.opacity = "1", d["-webkit-transition-duration"] = u.duration + "ms", d["-moz-transition-duration"] = u.duration + "ms", d["-o-transition-duration"] = u.duration + "ms", d["transition-duration"] = u.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", r(d))
                },
                hide: function(e) {
                    c.touchup(e);
                    var t = this,
                        n = (1.4 * t.clientWidth, null),
                        i = t.getElementsByClassName("waves-ripple");
                    if (!(i.length > 0)) return !1;
                    n = i[i.length - 1];
                    var o = n.getAttribute("data-x"),
                        a = n.getAttribute("data-y"),
                        s = n.getAttribute("data-scale"),
                        l = Date.now() - Number(n.getAttribute("data-hold")),
                        d = 350 - l;
                    0 > d && (d = 0), setTimeout(function() {
                        var e = {
                            top: a + "px",
                            left: o + "px",
                            opacity: "0",
                            "-webkit-transition-duration": u.duration + "ms",
                            "-moz-transition-duration": u.duration + "ms",
                            "-o-transition-duration": u.duration + "ms",
                            "transition-duration": u.duration + "ms",
                            "-webkit-transform": s,
                            "-moz-transform": s,
                            "-ms-transform": s,
                            "-o-transform": s,
                            transform: s
                        };
                        n.setAttribute("style", r(e)), setTimeout(function() {
                            try {
                                t.removeChild(n)
                            } catch (e) {
                                return !1
                            }
                        }, u.duration)
                    }, d)
                },
                wrapInput: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if ("input" === n.tagName.toLowerCase()) {
                            var i = n.parentNode;
                            if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect")) continue;
                            var r = document.createElement("i");
                            r.className = n.className + " waves-input-wrapper";
                            var o = n.getAttribute("style");
                            o || (o = ""), r.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), i.replaceChild(r, n), r.appendChild(n)
                        }
                    }
                }
            },
            c = {
                touches: 0,
                allowEvent: function(e) {
                    var t = !0;
                    return "touchstart" === e.type ? c.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                        c.touches > 0 && (c.touches -= 1)
                    }, 500) : "mousedown" === e.type && c.touches > 0 && (t = !1), t
                },
                touchup: function(e) {
                    c.allowEvent(e)
                }
            };
        s.displayEffect = function(t) {
            t = t || {}, "duration" in t && (u.duration = t.duration), u.wrapInput(l(".waves-effect")), "ontouchstart" in e && document.body.addEventListener("touchstart", a, !1), document.body.addEventListener("mousedown", a, !1)
        }, s.attach = function(t) {
            "input" === t.tagName.toLowerCase() && (u.wrapInput([t]), t = t.parentElement), "ontouchstart" in e && t.addEventListener("touchstart", a, !1), t.addEventListener("mousedown", a, !1)
        }, e.Waves = s, document.addEventListener("DOMContentLoaded", function() {
            s.displayEffect()
        }, !1)
    }(window), Materialize.toast = function(e, t, n, i) {
        function r(e) {
            var t = document.createElement("div");
            if (t.classList.add("toast"), n)
                for (var r = n.split(" "), o = 0, a = r.length; a > o; o++) t.classList.add(r[o]);
            ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e): e instanceof jQuery ? t.appendChild(e[0]) : t.innerHTML = e;
            var s = new Hammer(t, {
                prevent_default: !1
            });
            return s.on("pan", function(e) {
                var n = e.deltaX,
                    i = 80;
                t.classList.contains("panning") || t.classList.add("panning");
                var r = 1 - Math.abs(n / i);
                0 > r && (r = 0), Vel(t, {
                    left: n,
                    opacity: r
                }, {
                    duration: 50,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }), s.on("panend", function(e) {
                var n = e.deltaX,
                    r = 80;
                Math.abs(n) > r ? Vel(t, {
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof i && i(), t.parentNode.removeChild(t)
                    }
                }) : (t.classList.remove("panning"), Vel(t, {
                    left: 0,
                    opacity: 1
                }, {
                    duration: 300,
                    easing: "easeOutExpo",
                    queue: !1
                }))
            }), t
        }
        n = n || "";
        var o = document.getElementById("toast-container");
        null === o && (o = document.createElement("div"), o.id = "toast-container", document.body.appendChild(o));
        var a = r(e);
        e && o.appendChild(a), a.style.top = "35px", a.style.opacity = 0, Vel(a, {
            top: "0px",
            opacity: 1
        }, {
            duration: 300,
            easing: "easeOutCubic",
            queue: !1
        });
        var s = t,
            l = setInterval(function() {
                null === a.parentNode && window.clearInterval(l), a.classList.contains("panning") || (s -= 20), 0 >= s && (Vel(a, {
                    opacity: 0,
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof i && i(), this[0].parentNode.removeChild(this[0])
                    }
                }), window.clearInterval(l))
            }, 20)
    },
    function(e) {
        var t = {
            init: function(t) {
                var n = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                t = e.extend(n, t), e(this).each(function() {
                    function n(n) {
                        a = !1, s = !1, e("body").css("overflow", ""), e("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }), "left" === t.edge ? (o.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), r.velocity({
                            left: -1 * (t.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                n === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth))
                            }
                        })) : (o.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), r.velocity({
                            right: -1 * (t.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                n === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth))
                            }
                        }))
                    }
                    var i = e(this),
                        r = e("#" + i.attr("data-activates"));						
                    240 != t.menuWidth && r.css("width", t.menuWidth);
                    var o = e('<div class="drag-target"></div>');
                    e("body").append(o), "left" == t.edge ? (r.css("left", -1 * (t.menuWidth + 10)), o.css({
                        left: 0
                    })) : (r.addClass("right-aligned").css("right", -1 * (t.menuWidth + 10)).css("left", ""), o.css({
                        right: 0
                    })), r.hasClass("fixed") && window.innerWidth > 992 && r.css("left", 0), r.hasClass("fixed") && e(window).resize(function() {
                        window.innerWidth > 992 ? 0 !== e("#sidenav-overlay").css("opacity") && s ? n(!0) : (r.removeAttr("style"), r.css("width", t.menuWidth)) : s === !1 && ("left" === t.edge ? r.css("left", -1 * (t.menuWidth + 10)) : r.css("right", -1 * (t.menuWidth + 10)))
                    }), t.closeOnClick === !0 && r.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        n()
                    });
                    var a = !1,
                        s = !1;
                    o.on("click", function() {
                        n()
                    }), o.hammer({
                        prevent_default: !1
                    }).bind("pan", function(i) {
                        if ("touch" == i.gesture.pointerType) {
							var o = (i.gesture.direction, i.gesture.center.x);
                            if (i.gesture.center.y, i.gesture.velocityX, e("body").css("overflow", "hidden"), 0 === e("#sidenav-overlay").length) {
                                var a = e('<div id="sidenav-overlay"></div>');
                                a.css("opacity", 0).click(function() {
                                    n()
                                }), e("body").append(a)
                            }
                            if ("left" === t.edge && (o > t.menuWidth ? o = t.menuWidth : 0 > o && (o = 0)), "left" === t.edge) o < t.menuWidth / 2 ? s = !1 : o >= t.menuWidth / 2 && (s = !0), r.css("left", o - t.menuWidth);
                            else {
                                o < window.innerWidth - t.menuWidth / 2 ? s = !0 : o >= window.innerWidth - t.menuWidth / 2 && (s = !1);
                                var l = -1 * (o - t.menuWidth / 2);
                                l > 0 && (l = 0), r.css("right", l)
                            }
                            var u;
                            "left" === t.edge ? (u = o / t.menuWidth, e("#sidenav-overlay").velocity({
                                opacity: u
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (u = Math.abs((o - window.innerWidth) / t.menuWidth), e("#sidenav-overlay").velocity({
                                opacity: u
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(n) {
                        if ("touch" == n.gesture.pointerType) {
							var i = n.gesture.velocityX;
                            a = !1, "left" === t.edge ? s && .3 >= i || -.5 > i ? (r.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!s || i > .3) && (e("body").css("overflow", ""), r.velocity({
                                left: -1 * (t.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : s && i >= -.3 || i > .5 ? (r.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!s || -.3 > i) && (e("body").css("overflow", ""), r.velocity({
                                right: -1 * (t.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), i.click(function() {
						$('.extrasidebar').abmsideNav('hide');
						if (s === !0) s = !1, a = !1, n();
                        else {
                            e("body").css("overflow", "hidden"), e("body").append(o), "left" === t.edge ? (o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), r.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), r.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), r.css("left", ""));
                            var i = e('<div id="sidenav-overlay"></div>');
                            i.css("opacity", 0).click(function() {
                                s = !1, a = !1, n(), i.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        e(this).remove()
                                    }
                                })
                            }), e("body").append(i), i.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    s = !0, a = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
				e("#sidenav-overlay").trigger("click")
            }
        };
        e.fn.sideNav = function(n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function(e) {
        function t(t, n, i, r) {
            var o = e();
            return e.each(a, function(e, a) {
                if (a.height() > 0) {
                    var s = a.offset().top,
                        l = a.offset().left,
                        u = l + a.width(),
                        c = s + a.height(),
                        d = !(l > n || r > u || s > i || t > c);
                    d && o.push(a)
                }
            }), o
        }

        function n() {
            ++u;
            var n = o.scrollTop(),
                i = o.scrollLeft(),
                r = i + o.width(),
                a = n + o.height(),
                l = t(n + c.top + 200, r + c.right, a + c.bottom, i + c.left);
            e.each(l, function(e, t) {
                var n = t.data("scrollSpy:ticks");
                "number" != typeof n && t.triggerHandler("scrollSpy:enter"), t.data("scrollSpy:ticks", u)
            }), e.each(s, function(e, t) {
                var n = t.data("scrollSpy:ticks");
                "number" == typeof n && n !== u && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null))
            }), s = l
        }

        function i() {
            o.trigger("scrollSpy:winSize")
        }

        function r(e, t, n) {
            var i, r, o, a = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : d(), a = null, o = e.apply(i, r), i = r = null
            };
            return function() {
                var u = d();
                s || n.leading !== !1 || (s = u);
                var c = t - (u - s);
                return i = this, r = arguments, 0 >= c ? (clearTimeout(a), a = null, s = u, o = e.apply(i, r), i = r = null) : a || n.trailing === !1 || (a = setTimeout(l, c)), o
            }
        }
        var o = e(window),
            a = [],
            s = [],
            l = !1,
            u = 0,
            c = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            d = Date.now || function() {
                return (new Date).getTime()
            };
        e.scrollSpy = function(t, i) {
            var s = [];
            t = e(t), t.each(function(t, n) {
                a.push(e(n)), e(n).data("scrollSpy:id", t), e("a[href=#" + e(n).attr("id") + "]").click(function(t) {
                    t.preventDefault();
                    var n = e(this.hash).offset().top + 1;
                    e("html, body").animate({
                        scrollTop: n - 200
                    }, {
                        duration: 400,
                        queue: !1,
                        easing: "easeOutCubic"
                    })
                })
            }), i = i || {
                throttle: 100
            }, c.top = i.offsetTop || 0, c.right = i.offsetRight || 0, c.bottom = i.offsetBottom || 0, c.left = i.offsetLeft || 0;
            var u = r(n, i.throttle || 100),
                d = function() {
                    e(document).ready(u)
                };
            return l || (o.on("scroll", d), o.on("resize", d), l = !0), setTimeout(d, 0), t.on("scrollSpy:enter", function() {
                s = e.grep(s, function(e) {
                    return 0 != e.height()
                });
                var t = e(this);
                s[0] ? (e("a[href=#" + s[0].attr("id") + "]").removeClass("active"), t.data("scrollSpy:id") < s[0].data("scrollSpy:id") ? s.unshift(e(this)) : s.push(e(this))) : s.push(e(this)), e("a[href=#" + s[0].attr("id") + "]").addClass("active")
            }), t.on("scrollSpy:exit", function() {
                if (s = e.grep(s, function(e) {
                        return 0 != e.height()
                    }), s[0]) {
                    e("a[href=#" + s[0].attr("id") + "]").removeClass("active");
                    var t = e(this);
                    s = e.grep(s, function(e) {
                        return e.attr("id") != t.attr("id")
                    }), s[0] && e("a[href=#" + s[0].attr("id") + "]").addClass("active")
                }
            }), t
        }, e.winSizeSpy = function(t) {
            return e.winSizeSpy = function() {
                return o
            }, t = t || {
                throttle: 100
            }, o.on("resize", r(i, t.throttle || 100))
        }, e.fn.scrollSpy = function(t) {
            return e.scrollSpy(e(this), t)
        }
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            function t(t) {
                var n = t.css("font-family"),
                    r = t.css("font-size");
                r && i.css("font-size", r), n && i.css("font-family", n), "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(t.val() + "\n");
                var o = i.html().replace(/\n/g, "<br>");
                i.html(o), t.is(":visible") ? i.css("width", t.width()) : i.css("width", e(window).width() / 2), t.css("height", i.height())
            }
            Materialize.updateTextFields = function() {
                var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                e(t).each(function(t, n) {
                    e(n).val().length > 0 || void 0 !== e(this).attr("placeholder") || e(n)[0].validity.badInput === !0 || e(n).is(":focus") || e(n).is(":-webkit-autofill") ? e(this).siblings("label").addClass("active") : e(this).siblings("label, i").removeClass("active")
                })
            };
            var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("change", n, function() {
                (0 !== e(this).val().length || void 0 !== e(this).attr("placeholder")) && e(this).siblings("label").addClass("active"), validate_field(e(this))
            }), e(document).ready(function() {
                Materialize.updateTextFields()
            }), e(document).on("reset", function(t) {
                var i = e(t.target);
                i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"), i.find(n).each(function() {
                    "" === e(this).attr("value") && e(this).siblings("label, i").removeClass("active")
                }), i.find("select.initialized").each(function() {
                    var e = i.find("option[selected]").text();
                    i.siblings("input.select-dropdown").val(e)
                }))
            }), e(document).on("focus", n, function() {
				var t= e(this);
                e(this).siblings("label, i").addClass("active"), b4j_raiseEvent("page_parseevent", {eventname: t.attr("evname") + "_gotfocus",eventparams: ""})
            }), e(document).on("blur", n, function() {
                var t = e(this);
                0 === t.val().length && t[0].validity.badInput !== !0 && void 0 === t.attr("placeholder") && t.siblings("label, i").removeClass("active"), 0 === t.val().length && t[0].validity.badInput !== !0 && void 0 !== t.attr("placeholder") && t.siblings("i").removeClass("active"), validate_field(t), b4j_raiseEvent("page_parseevent", {eventname: t.attr("evname") + "_lostfocus",eventparams: ""})
            }), window.validate_field = function(e) {
                var t = void 0 !== e.attr("length"),
                    n = parseInt(e.attr("length")),
                    i = e.val().length;
                0 === e.val().length && e[0].validity.badInput === !1 ? e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && n >= i || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid")))
            };
            var i = e(".hiddendiv").first();
            i.length || (i = e('<div class="hiddendiv common"></div>'), e("body").append(i));
            var r = ".materialize-textarea";
            e(r).each(function() {
                var n = e(this);
                n.val().length && t(n)
            }), e("body").on("keyup keydown autoresize", r, function() {
                t(e(this))
            }), e(document).on("change", '.file-field input[type="file"]', function() {
                for (var t = e(this).closest(".file-field"), n = t.find("input.file-path"), i = e(this)[0].files, r = [], o = 0; o < i.length; o++) r.push(i[o].name);
                n.val(r.join(", ")), n.trigger("change")
            });
            var o, a = "input[type=range]",
                s = !1;
            e(a).each(function() {
                var t = e('<span class="thumb"><span class="value"></span></span>');
                e(this).after(t)
            });
            var l = ".range-field";
            e(document).on("change", a, function(t) {
                var n = e(this).siblings(".thumb");
                n.find(".value").html(e(this).val())
            }), e(document).on("input mousedown touchstart", a, function(t) {
                var n = e(this).siblings(".thumb");
                n.length <= 0 && (n = e('<span class="thumb"><span class="value"></span></span>'), e(this).append(n)), n.find(".value").html(e(this).val()), s = !0, e(this).addClass("active"), n.hasClass("active") || n.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), o = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                var i = e(this).outerWidth();
                0 > o ? o = 0 : o > i && (o = i), n.addClass("active").css("left", o), n.find(".value").html(e(this).val())
            }), e(document).on("mouseup touchend", l, function() {
                s = !1, e(this).removeClass("active")
            }), e(document).on("mousemove touchmove", l, function(t) {
                var n, i = e(this).children(".thumb");
                if (s) {
                    i.hasClass("active") || i.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), n = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                    var r = e(this).outerWidth();
                    0 > n ? n = 0 : n > r && (n = r), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(a).val())
                }
            }), e(document).on("mouseout touchleave", l, function() {
                if (!s) {
                    var t = e(this).children(".thumb");
                    t.hasClass("active") && t.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), t.removeClass("active")
                }
            })
        }), e.fn.material_select = function(t) {
            e(this).each(function() {
                if ($select = e(this), !$select.hasClass("browser-default")) {
                    var n = $select.data("select-id");
                    if (n && ($select.parent().find("span.caret").remove(), $select.parent().find("input").remove(), $select.unwrap(), e("ul#select-options-" + n).remove()), "destroy" === t) return void $select.data("select-id", null).removeClass("initialized");
                    var i = Materialize.guid();
                    $select.data("select-id", i);
                    var r = e('<div class="select-wrapper"></div>');
                    r.addClass($select.attr("class"));
                    var o, a = e('<ul id="select-options-' + i + '" class="dropdown-content select-dropdown"></ul>'),
                        s = $select.children("option");
                    o = void 0 !== $select.find("option:selected") ? $select.find("option:selected") : a.first(), s.each(function() {
                        a.append(e('<li class="' + (e(this).is(":disabled") ? "disabled" : "") + '"><span>' + e(this).html() + "</span></li>"))
                    }), a.find("li").each(function(n) {
                        var i = $select;
                        e(this).click(function() {
                            e(this).hasClass("disabled") || (i.find("option").eq(n).prop("selected", !0), i.trigger("change"), i.siblings("input.select-dropdown").val(e(this).text()), "undefined" != typeof t && t())
                        })
                    }), $select.wrap(r);
                    var l = e('<span class="caret">&#9660;</span>');
                    $select.is(":disabled") && l.addClass("disabled");
                    var u = o.html().replace(/"/g, "&quot;"),
                        c = e('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + i + '" value="' + u + '"/>');
                    $select.before(c), c.before(l), e("body").append(a), $select.is(":disabled") || c.dropdown({
                        hover: !1
                    }), $select.attr("tabindex") && e(c[0]).attr("tabindex", $select.attr("tabindex")), $select.addClass("initialized"), c.on("focus", function() {
                        e(this).trigger("open"), o = e(this).val(), selectedOption = a.find("li").filter(function() {
                            return e(this).text().toLowerCase() === o.toLowerCase()
                        })[0], activateOption(a, selectedOption)
                    }), c.on("blur", function() {
                        e(this).trigger("close")
                    }), activateOption = function(t, n) {
                        t.find("li.active").removeClass("active"), e(n).addClass("active"), t.scrollTo(n)
                    }, filterQuery = [], onKeyDown = function(t) {
                        if (9 == t.which) return void c.trigger("close");
                        if (40 == t.which && !a.is(":visible")) return void c.trigger("open");
                        if (13 != t.which || a.is(":visible")) {
                            t.preventDefault(), letter = String.fromCharCode(t.which).toLowerCase();
                            var n = [9, 13, 27, 38, 40];
                            letter && -1 === n.indexOf(t.which) && (filterQuery.push(letter), string = filterQuery.join(""), newOption = a.find("li").filter(function() {
                                return 0 === e(this).text().toLowerCase().indexOf(string)
                            })[0], newOption && activateOption(a, newOption)), 13 == t.which && (activeOption = a.find("li.active:not(.disabled)")[0], activeOption && (e(activeOption).trigger("click"), c.trigger("close"))), 40 == t.which && (newOption = a.find("li.active").next("li:not(.disabled)")[0], newOption && activateOption(a, newOption)), 27 == t.which && c.trigger("close"), 38 == t.which && (newOption = a.find("li.active").prev("li:not(.disabled)")[0], newOption && activateOption(a, newOption)), setTimeout(function() {
                                filterQuery = []
                            }, 1e3)
                        }
                    }, c.on("keydown", onKeyDown)
                }
            })
        }
    }(jQuery),
    function(e) {
        var t = {
            init: function(t) {
                var n = {
                    indicators: !0,
                    height: 400,
                    transition: 500,
                    interval: 6e3
                };
                return t = e.extend(n, t), this.each(function() {
                    function n(e, t) {
                        e.hasClass("center-align") ? e.velocity({
                            opacity: 0,
                            translateY: -100
                        }, {
                            duration: t,
                            queue: !1
                        }) : e.hasClass("right-align") ? e.velocity({
                            opacity: 0,
                            translateX: 100
                        }, {
                            duration: t,
                            queue: !1
                        }) : e.hasClass("left-align") && e.velocity({
                            opacity: 0,
                            translateX: -100
                        }, {
                            duration: t,
                            queue: !1
                        })
                    }

                    function i(e) {
                        e >= s.length ? e = 0 : 0 > e && (e = s.length - 1), l = a.find(".active").index(), l != e && (r = s.eq(l), $caption = r.find(".caption"), r.removeClass("active"), r.velocity({
                            opacity: 0
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                s.not(".active").velocity({
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        }), n($caption, t.transition), t.indicators && u.eq(l).removeClass("active"), s.eq(e).velocity({
                            opacity: 1
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), s.eq(e).find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: t.transition,
                            delay: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), s.eq(e).addClass("active"), t.indicators && u.eq(e).addClass("active"))
                    }
                    var r, o = e(this),
                        a = o.find("ul.slides").first(),
                        s = a.find("li"),
                        l = a.find(".active").index();
                    if (-1 != l && (r = s.eq(l)), o.hasClass("fullscreen") || (t.indicators ? o.height(t.height + 40) : o.height(t.height), a.height(t.height)), s.find(".caption").each(function() {
                            n(e(this), 0)
                        }), s.find("img").each(function() {
                            e(this).css("background-image", "url(" + e(this).attr("src") + ")"), e(this).attr("src", "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")
                        }), t.indicators) {
                        var u = e('<ul class="indicators"></ul>');
                        s.each(function(n) {
                            var r = e('<li class="indicator-item"></li>');
                            r.click(function() {
                                var n = a.parent(),
                                    r = n.find(e(this)).index();
                                i(r), clearInterval($interval), $interval = setInterval(function() {
                                    l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, i(l)
                                }, t.transition + t.interval)
                            }), u.append(r)
                        }), o.append(u), u = o.find("ul.indicators").find("li.indicator-item")
                    }
                    r ? r.show() : (s.first().addClass("active").velocity({
                        opacity: 1
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), l = 0, r = s.eq(l), t.indicators && u.eq(l).addClass("active")), r.find("img").each(function() {
                        r.find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }), $interval = setInterval(function() {
                        l = a.find(".active").index(), i(l + 1)
                    }, t.transition + t.interval);
                    var c = !1,
                        d = !1,
                        f = !1;
                    o.hammer({
                        prevent_default: !1
                    }).bind("pan", function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            clearInterval($interval);
                            var t = e.gesture.direction,
                                n = e.gesture.deltaX,
                                i = e.gesture.velocityX;
                            $curr_slide = a.find(".active"), $curr_slide.velocity({
                                translateX: n
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), 4 === t && (n > o.innerWidth() / 2 || -.65 > i) ? f = !0 : 2 === t && (n < -1 * o.innerWidth() / 2 || i > .65) && (d = !0);
                            var r;
                            d && (r = $curr_slide.next(), 0 === r.length && (r = s.first()), r.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })), f && (r = $curr_slide.prev(), 0 === r.length && (r = s.last()), r.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(e) {
                        "touch" === e.gesture.pointerType && ($curr_slide = a.find(".active"), c = !1, curr_index = a.find(".active").index(), f || d ? d ? (i(curr_index + 1), $curr_slide.velocity({
                            translateX: -1 * o.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        })) : f && (i(curr_index - 1), $curr_slide.velocity({
                            translateX: o.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        })) : $curr_slide.velocity({
                            translateX: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), d = !1, f = !1, clearInterval($interval), $interval = setInterval(function() {
                            l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, i(l)
                        }, t.transition + t.interval))
                    }), o.on("sliderPause", function() {
                        clearInterval($interval)
                    }), o.on("sliderStart", function() {
                        clearInterval($interval), $interval = setInterval(function() {
                            l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, i(l)
                        }, t.transition + t.interval)
                    })
                })
            },
            pause: function() {
                e(this).trigger("sliderPause")
            },
            start: function() {
                e(this).trigger("sliderStart")
            }
        };
        e.fn.slider = function(n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e(document).on("click.card", ".card", function(t) {
                e(this).find("> .card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        e(this).css({
                            display: "none"
                        })
                    }
                }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && e(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))
            })
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e(document).on("click.chip", ".chip .material-icons", function(t) {
                e(this).parent().remove()
            })
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e.fn.pushpin = function(t) {
                var n = {
                    top: 0,
                    bottom: 1 / 0,
                    offset: 0
                };
                return t = e.extend(n, t), $index = 0, this.each(function() {
                    function n(e) {
                        e.removeClass("pin-top"), e.removeClass("pinned"), e.removeClass("pin-bottom")
                    }

                    function i(i, r) {
                        i.each(function() {
                            t.top <= r && t.bottom >= r && !e(this).hasClass("pinned") && (n(e(this)), e(this).css("top", t.offset), e(this).addClass("pinned")), r < t.top && !e(this).hasClass("pin-top") && (n(e(this)), e(this).css("top", 0), e(this).addClass("pin-top")), r > t.bottom && !e(this).hasClass("pin-bottom") && (n(e(this)), e(this).addClass("pin-bottom"), e(this).css("top", t.bottom - a))
                        })
                    }
                    var r = Materialize.guid(),
                        o = e(this),
                        a = e(this).offset().top;
                    i(o, e(window).scrollTop()), e(window).on("scroll." + r, function() {
                        var n = e(window).scrollTop() + t.offset;
                        i(o, n)
                    })
                })
            }
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn", function(n) {
                var i = e(this);
                t(i)
            }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn", function(t) {
                var i = e(this);
                n(i)
            })
        }), e.fn.extend({
            openFAB: function() {
                var n = e(this);
                t(n)
            },
            closeFAB: function() {
                n($this)
            }
        });
        var t = function(t) {
                if ($this = t, $this.hasClass("active") === !1) {
                    $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: "40px"
                    }, {
                        duration: 0
                    });
                    var n = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        e(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0"
                        }, {
                            duration: 80,
                            delay: n
                        }), n += 40
                    })
                }
            },
            n = function(e) {
                $this = e, $this.removeClass("active"), $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            }
    }(jQuery),
    function(e) {
        Materialize.fadeInImage = function(t) {
            var n = e(t);
            n.css({
                opacity: 0
            }), e(n).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), e(n).velocity({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(t, n) {
                    n.start = 100;
                    var i = t / 100,
                        r = 150 - (100 - t) / 1.75;
                    100 > r && (r = 100), t >= 0 && e(this).css({
                        "-webkit-filter": "grayscale(" + i + ")brightness(" + r + "%)",
                        filter: "grayscale(" + i + ")brightness(" + r + "%)"
                    })
                }
            })
        }, Materialize.showStaggeredList = function(t) {
            var n = 0;
            e(t).find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), e(t).find("li").each(function() {
                e(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: n,
                    easing: [60, 10]
                }), n += 120
            })
        }, e(document).ready(function() {
            var t = !1,
                n = !1;
            e(".dismissable").each(function() {
                e(this).hammer({
                    prevent_default: !1
                }).bind("pan", function(i) {
                    if ("touch" === i.gesture.pointerType) {
                        var r = e(this),
                            o = i.gesture.direction,
                            a = i.gesture.deltaX,
                            s = i.gesture.velocityX;
                        r.velocity({
                            translateX: a
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === o && (a > r.innerWidth() / 2 || -.75 > s) && (t = !0), 2 === o && (a < -1 * r.innerWidth() / 2 || s > .75) && (n = !0)
                    }
                }).bind("panend", function(i) {
                    if (Math.abs(i.gesture.deltaX) < e(this).innerWidth() / 2 && (n = !1, t = !1), "touch" === i.gesture.pointerType) {
                        var r = e(this);
                        if (t || n) {
                            var o;
                            o = t ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({
                                translateX: o
                            }, {
                                duration: 100,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    r.css("border", "none"), r.velocity({
                                        height: 0,
                                        padding: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            r.remove()
                                        }
                                    })
                                }
                            })
                        } else r.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                        t = !1, n = !1
                    }
                })
            })
        })
    }(jQuery),
    function(e) {
        Materialize.scrollFire = function(e) {
            var t = !1;
            window.addEventListener("scroll", function() {
                t = !0
            }), setInterval(function() {
                if (t) {
                    t = !1;
                    for (var n = window.pageYOffset + window.innerHeight, i = 0; i < e.length; i++) {
                        var r = e[i],
                            o = r.selector,
                            a = r.offset,
                            s = r.callback,
                            l = document.querySelector(o);
                        if (null !== l) {
                            var u = l.getBoundingClientRect().top + window.pageYOffset;
                            if (n > u + a && r.done !== !0) {
                                var c = new Function(s);
                                c(), r.done = !0
                            }
                        }
                    }
                }
            }, 100)
        }
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
    }(function(e) {
        function t(o, a, l, d) {
            function f() {
                return t._.node("div", t._.node("div", t._.node("div", t._.node("div", k.component.nodes(b.open), w.box), w.wrap), w.frame), w.holder)
            }

            function p() {
                C.data(a, k).addClass(w.input).attr("tabindex", -1).val(C.data("value") ? k.get("select", x.format) : o.value), x.editable || C.on("focus." + b.id + " click." + b.id, function(e) {
                    e.preventDefault(), k.$root[0].focus()
                }).on("keydown." + b.id, v), r(o, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: o.id + "_root"
                })
            }

            function h() {
                k.$root.on({
                    keydown: v,
                    focusin: function(e) {
                        k.$root.removeClass(w.focused), e.stopPropagation()
                    },
                    "mousedown click": function(t) {
                        var n = t.target;
                        n != k.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), k.$root[0].focus()))
                    }
                }).on({
                    focus: function() {
                        C.addClass(w.target)
                    },
                    blur: function() {
                        C.removeClass(w.target)
                    }
                }).on("focus.toOpen", m).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var t = e(this),
                        n = t.data(),
                        i = t.hasClass(w.navDisabled) || t.hasClass(w.disabled),
                        r = s();
                    r = r && (r.type || r.href), (i || r && !e.contains(k.$root[0], r)) && k.$root[0].focus(), !i && n.nav ? k.set("highlight", k.component.item.highlight, {
                        nav: n.nav
                    }) : !i && "pick" in n ? k.set("select", n.pick) : n.clear ? k.clear().close(!0) : n.close && k.close(!0)
                }), r(k.$root[0], "hidden", !0)
            }

            function g() {
                var t;
                x.hiddenName === !0 ? (t = o.name, o.name = "") : (t = ["string" == typeof x.hiddenPrefix ? x.hiddenPrefix : "", "string" == typeof x.hiddenSuffix ? x.hiddenSuffix : "_submit"], t = t[0] + o.name + t[1]), k._hidden = e('<input type=hidden name="' + t + '"' + (C.data("value") || o.value ? ' value="' + k.get("select", x.formatSubmit) + '"' : "") + ">")[0], C.on("change." + b.id, function() {
                    k._hidden.value = o.value ? k.get("select", x.formatSubmit) : ""
                }), x.container ? e(x.container).append(k._hidden) : C.after(k._hidden)
            }

            function v(e) {
                var t = e.keyCode,
                    n = /^(8|46)$/.test(t);
                return 27 == t ? (k.close(), !1) : void((32 == t || n || !b.open && k.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? k.clear().close() : k.open()))
            }

            function m(e) {
                e.stopPropagation(), "focus" == e.type && k.$root.addClass(w.focused), k.open()
            }
            if (!o) return t;
            var y = !1,
                b = {
                    id: o.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                x = l ? e.extend(!0, {}, l.defaults, d) : d || {},
                w = e.extend({}, t.klasses(), x.klass),
                C = e(o),
                T = function() {
                    return this.start()
                },
                k = T.prototype = {
                    constructor: T,
                    $node: C,
                    start: function() {
                        return b && b.start ? k : (b.methods = {}, b.start = !0, b.open = !1, b.type = o.type, o.autofocus = o == s(), o.readOnly = !x.editable, o.id = o.id || b.id, "text" != o.type && (o.type = "text"), k.component = new l(k, x), k.$root = e(t._.node("div", f(), w.picker, 'id="' + o.id + '_root" tabindex="0"')), h(), x.formatSubmit && g(), p(), x.container ? e(x.container).append(k.$root) : C.after(k.$root), k.on({
                            start: k.component.onStart,
                            render: k.component.onRender,
                            stop: k.component.onStop,
                            open: k.component.onOpen,
                            close: k.component.onClose,
                            set: k.component.onSet
                        }).on({
                            start: x.onStart,
                            render: x.onRender,
                            stop: x.onStop,
                            open: x.onOpen,
                            close: x.onClose,
                            set: x.onSet
                        }), y = n(k.$root.children()[0]), o.autofocus && k.open(), k.trigger("start").trigger("render"))
                    },
                    render: function(e) {
                        return e ? k.$root.html(f()) : k.$root.find("." + w.box).html(k.component.nodes(b.open)), k.trigger("render")
                    },
                    stop: function() {
                        return b.start ? (k.close(), k._hidden && k._hidden.parentNode.removeChild(k._hidden), k.$root.remove(), C.removeClass(w.input).removeData(a), setTimeout(function() {
                            C.off("." + b.id)
                        }, 0), o.type = b.type, o.readOnly = !1, k.trigger("stop"), b.methods = {}, b.start = !1, k) : k
                    },
                    open: function(n) {
                        return b.open ? k : (C.addClass(w.active), r(o, "expanded", !0), setTimeout(function() {
                            k.$root.addClass(w.opened), r(k.$root[0], "hidden", !1)
                        }, 0), n !== !1 && (b.open = !0, y && c.css("overflow", "hidden").css("padding-right", "+=" + i()), k.$root[0].focus(), u.on("click." + b.id + " focusin." + b.id, function(e) {
                            var t = e.target;
                            t != o && t != document && 3 != e.which && k.close(t === k.$root.children()[0])
                        }).on("keydown." + b.id, function(n) {
                            var i = n.keyCode,
                                r = k.component.key[i],
                                o = n.target;
                            27 == i ? k.close(!0) : o != k.$root[0] || !r && 13 != i ? e.contains(k.$root[0], o) && 13 == i && (n.preventDefault(), o.click()) : (n.preventDefault(), r ? t._.trigger(k.component.key.go, k, [t._.trigger(r)]) : k.$root.find("." + w.highlighted).hasClass(w.disabled) || k.set("select", k.component.item.highlight).close())
                        })), k.trigger("open"))
                    },
                    close: function(e) {
                        return e && (k.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                            k.$root.on("focus.toOpen", m)
                        }, 0)), C.removeClass(w.active), r(o, "expanded", !1), setTimeout(function() {
                            k.$root.removeClass(w.opened + " " + w.focused), r(k.$root[0], "hidden", !0)
                        }, 0), b.open ? (b.open = !1, y && c.css("overflow", "").css("padding-right", "-=" + i()), u.off("." + b.id), k.trigger("close")) : k
                    },
                    clear: function(e) {
                        return k.set("clear", null, e)
                    },
                    set: function(t, n, i) {
                        var r, o, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
                            a || (s[t] = n);
                            for (r in s) o = s[r], r in k.component.item && (void 0 === o && (o = null), k.component.set(r, o, i)), ("select" == r || "clear" == r) && C.val("clear" == r ? "" : k.get(r, x.format)).trigger("change");
                            k.render()
                        }
                        return i.muted ? k : k.trigger("set", s)
                    },
                    get: function(e, n) {
                        if (e = e || "value", null != b[e]) return b[e];
                        if ("valueSubmit" == e) {
                            if (k._hidden) return k._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return o.value;
                        if (e in k.component.item) {
                            if ("string" == typeof n) {
                                var i = k.component.get(e);
                                return i ? t._.trigger(k.component.formats.toString, k.component, [n, i]) : ""
                            }
                            return k.component.get(e)
                        }
                    },
                    on: function(t, n, i) {
                        var r, o, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (t) {
                            a || (s[t] = n);
                            for (r in s) o = s[r], i && (r = "_" + r), b.methods[r] = b.methods[r] || [], b.methods[r].push(o)
                        }
                        return k
                    },
                    off: function() {
                        var e, t, n = arguments;
                        for (e = 0, namesCount = n.length; e < namesCount; e += 1) t = n[e], t in b.methods && delete b.methods[t];
                        return k
                    },
                    trigger: function(e, n) {
                        var i = function(e) {
                            var i = b.methods[e];
                            i && i.map(function(e) {
                                t._.trigger(e, k, [n])
                            })
                        };
                        return i("_" + e), i(e), k
                    }
                };
            return new T
        }

        function n(e) {
            var t, n = "position";
            return e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]), "fixed" == t
        }

        function i() {
            if (c.height() <= l.height()) return 0;
            var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                n = t[0].offsetWidth;
            t.css("overflow", "scroll");
            var i = e('<div style="width:100%" />').appendTo(t),
                r = i[0].offsetWidth;
            return t.remove(), n - r
        }

        function r(t, n, i) {
            if (e.isPlainObject(n))
                for (var r in n) o(t, r, n[r]);
            else o(t, n, i)
        }

        function o(e, t, n) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, n)
        }

        function a(t, n) {
            e.isPlainObject(t) || (t = {
                attribute: n
            }), n = "";
            for (var i in t) {
                var r = ("role" == i ? "" : "aria-") + i,
                    o = t[i];
                n += null == o ? "" : r + '="' + t[i] + '"'
            }
            return n
        }

        function s() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        var l = e(window),
            u = e(document),
            c = e(document.documentElement);
        return t.klasses = function(e) {
            return e = e || "picker", {
                picker: e,
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, t._ = {
            group: function(e) {
                for (var n, i = "", r = t._.trigger(e.min, e); r <= t._.trigger(e.max, e, [r]); r += e.i) n = t._.trigger(e.item, e, [r]), i += t._.node(e.node, n[0], n[1], n[2]);
                return i
            },
            node: function(t, n, i, r) {
                return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", r = r ? " " + r : "", "<" + t + i + r + ">" + n + "</" + t + ">") : ""
            },
            lead: function(e) {
                return (10 > e ? "0" : "") + e
            },
            trigger: function(e, t, n) {
                return "function" == typeof e ? e.apply(t, n || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0
            },
            ariaAttr: a
        }, t.extend = function(n, i) {
            e.fn[n] = function(r, o) {
                var a = this.data(n);
                return "picker" == r ? a : a && "string" == typeof r ? t._.trigger(a[r], a, [o]) : this.each(function() {
                    var o = e(this);
                    o.data(n) || new t(this, n, i, r)
                })
            }, e.fn[n].defaults = i.defaults
        }, t
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
    }(function(e, t) {
        function n(e, t) {
            var n = this,
                i = e.$node[0],
                r = i.value,
                o = e.$node.data("value"),
                a = o || r,
                s = o ? t.formatSubmit : t.format,
                l = function() {
                    return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            n.settings = t, n.$node = e.$node, n.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = - function(e) {
                return e[0] === !0 ? e.shift() : -1
            }(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), a ? n.set("select", a, {
                format: s
            }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                40: 7,
                38: -7,
                39: function() {
                    return l() ? -1 : 1
                },
                37: function() {
                    return l() ? 1 : -1
                },
                go: function(e) {
                    var t = n.item.highlight,
                        i = new Date(t.year, t.month, t.date + e);
                    n.set("highlight", i, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function() {
                e.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var n = this.value;
                    n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                    var n = this.value;
                    n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var i = "";
                n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                e.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var i = 7,
            r = 6,
            o = e._;
        n.prototype.set = function(e, t, n) {
            var i = this,
                r = i.item;
            return null === t ? ("clear" == e && (e = "select"), r[e] = t, i) : (r["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function(r) {
                return t = i[r](e, t, n)
            }).pop(), "select" == e ? i.set("highlight", r.select, n) : "highlight" == e ? i.set("view", r.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (r.select && i.disabled(r.select) && i.set("select", r.select, n), r.highlight && i.disabled(r.highlight) && i.set("highlight", r.highlight, n)), i)
        }, n.prototype.get = function(e) {
            return this.item[e]
        }, n.prototype.create = function(e, n, i) {
            var r, a = this;
            return n = void 0 === n ? e : n, n == -(1 / 0) || n == 1 / 0 ? r = n : t.isPlainObject(n) && o.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = o.isDate(n) ? n : a.create().obj) : n = o.isInteger(n) || o.isDate(n) ? a.normalize(new Date(n), i) : a.now(e, n, i), {
                year: r || n.getFullYear(),
                month: r || n.getMonth(),
                date: r || n.getDate(),
                day: r || n.getDay(),
                obj: r || n,
                pick: r || n.getTime()
            }
        }, n.prototype.createRange = function(e, n) {
            var i = this,
                r = function(e) {
                    return e === !0 || t.isArray(e) || o.isDate(e) ? i.create(e) : e
                };
            return o.isInteger(e) || (e = r(e)), o.isInteger(n) || (n = r(n)), o.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : o.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
                from: r(e),
                to: r(n)
            }
        }, n.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, n.prototype.overlapRanges = function(e, t) {
            var n = this;
            return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
        }, n.prototype.now = function(e, t, n) {
            return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
        }, n.prototype.navigate = function(e, n, i) {
            var r, o, a, s, l = t.isArray(n),
                u = t.isPlainObject(n),
                c = this.item.view;
            if (l || u) {
                for (u ? (o = n.year, a = n.month, s = n.date) : (o = +n[0], a = +n[1], s = +n[2]), i && i.nav && c && c.month !== a && (o = c.year, a = c.month), r = new Date(o, a + (i && i.nav ? i.nav : 0), 1), o = r.getFullYear(), a = r.getMonth(); new Date(o, a, s).getMonth() !== a;) s -= 1;
                n = [o, a, s]
            }
            return n
        }, n.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, n.prototype.measure = function(e, t) {
            var n = this;
            return t ? "string" == typeof t ? t = n.parse(e, t) : o.isInteger(t) && (t = n.now(e, t, {
                rel: t
            })) : t = "min" == e ? -(1 / 0) : 1 / 0, t
        }, n.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, n.prototype.validate = function(e, n, i) {
            var r, a, s, l, u = this,
                c = n,
                d = i && i.interval ? i.interval : 1,
                f = -1 === u.item.enable,
                p = u.item.min,
                h = u.item.max,
                g = f && u.item.disable.filter(function(e) {
                    if (t.isArray(e)) {
                        var i = u.create(e).pick;
                        i < n.pick ? r = !0 : i > n.pick && (a = !0)
                    }
                    return o.isInteger(e)
                }).length;
            if ((!i || !i.nav) && (!f && u.disabled(n) || f && u.disabled(n) && (g || r || a) || !f && (n.pick <= p.pick || n.pick >= h.pick)))
                for (f && !g && (!a && d > 0 || !r && 0 > d) && (d *= -1); u.disabled(n) && (Math.abs(d) > 1 && (n.month < c.month || n.month > c.month) && (n = c, d = d > 0 ? 1 : -1), n.pick <= p.pick ? (s = !0, d = 1, n = u.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : -1)])) : n.pick >= h.pick && (l = !0, d = -1, n = u.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : 1)])), !s || !l);) n = u.create([n.year, n.month, n.date + d]);
            return n
        }, n.prototype.disabled = function(e) {
            var n = this,
                i = n.item.disable.filter(function(i) {
                    return o.isInteger(i) ? e.day === (n.settings.firstDay ? i : i - 1) % 7 : t.isArray(i) || o.isDate(i) ? e.pick === n.create(i).pick : t.isPlainObject(i) ? n.withinRange(i, e) : void 0
                });
            return i = i.length && !i.filter(function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === n.item.enable ? !i : i || e.pick < n.item.min.pick || e.pick > n.item.max.pick
        }, n.prototype.parse = function(e, t, n) {
            var i = this,
                r = {};
            return t && "string" == typeof t ? (n && n.format || (n = n || {}, n.format = i.settings.format), i.formats.toArray(n.format).map(function(e) {
                var n = i.formats[e],
                    a = n ? o.trigger(n, i, [t, r]) : e.replace(/^!/, "").length;
                n && (r[e] = t.substr(0, a)), t = t.substr(a)
            }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
        }, n.prototype.formats = function() {
            function e(e, t, n) {
                var i = e.match(/\w+/)[0];
                return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? o.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : o.lead(t.date)
                },
                ddd: function(e, n) {
                    return e ? t(e) : this.settings.weekdaysShort[n.day]
                },
                dddd: function(e, n) {
                    return e ? t(e) : this.settings.weekdaysFull[n.day]
                },
                m: function(e, t) {
                    return e ? o.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : o.lead(t.month + 1)
                },
                mmm: function(t, n) {
                    var i = this.settings.monthsShort;
                    return t ? e(t, i, n) : i[n.month]
                },
                mmmm: function(t, n) {
                    var i = this.settings.monthsFull;
                    return t ? e(t, i, n) : i[n.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var n = this;
                    return n.formats.toArray(e).map(function(e) {
                        return o.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), n.prototype.isDateExact = function(e, n) {
            var i = this;
            return o.isInteger(e) && o.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (o.isDate(e) || t.isArray(e)) && (o.isDate(n) || t.isArray(n)) ? i.create(e).pick === i.create(n).pick : t.isPlainObject(e) && t.isPlainObject(n) ? i.isDateExact(e.from, n.from) && i.isDateExact(e.to, n.to) : !1
        }, n.prototype.isDateOverlap = function(e, n) {
            var i = this,
                r = i.settings.firstDay ? 1 : 0;
            return o.isInteger(e) && (o.isDate(n) || t.isArray(n)) ? (e = e % 7 + r, e === i.create(n).day + 1) : o.isInteger(n) && (o.isDate(e) || t.isArray(e)) ? (n = n % 7 + r, n === i.create(e).day + 1) : t.isPlainObject(e) && t.isPlainObject(n) ? i.overlapRanges(e, n) : !1
        }, n.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, n.prototype.deactivate = function(e, n) {
            var i = this,
                r = i.item.disable.slice(0);
            return "flip" == n ? i.flipEnable() : n === !1 ? (i.flipEnable(1), r = []) : n === !0 ? (i.flipEnable(-1), r = []) : n.map(function(e) {
                for (var n, a = 0; a < r.length; a += 1)
                    if (i.isDateExact(e, r[a])) {
                        n = !0;
                        break
                    }
                n || (o.isInteger(e) || o.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e);
            }), r
        }, n.prototype.activate = function(e, n) {
            var i = this,
                r = i.item.disable,
                a = r.length;
            return "flip" == n ? i.flipEnable() : n === !0 ? (i.flipEnable(1), r = []) : n === !1 ? (i.flipEnable(-1), r = []) : n.map(function(e) {
                var n, s, l, u;
                for (l = 0; a > l; l += 1) {
                    if (s = r[l], i.isDateExact(s, e)) {
                        n = r[l] = null, u = !0;
                        break
                    }
                    if (i.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e, n[3] || n.push("inverted")) : o.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (n)
                    for (l = 0; a > l; l += 1)
                        if (i.isDateExact(r[l], e)) {
                            r[l] = null;
                            break
                        }
                if (u)
                    for (l = 0; a > l; l += 1)
                        if (i.isDateOverlap(r[l], e)) {
                            r[l] = null;
                            break
                        }
                n && r.push(n)
            }), r.filter(function(e) {
                return null != e
            })
        }, n.prototype.nodes = function(e) {
            var t = this,
                n = t.settings,
                a = t.item,
                s = a.now,
                l = a.select,
                u = a.highlight,
                c = a.view,
                d = a.disable,
                f = a.min,
                p = a.max,
                h = function(e, t) {
                    return n.firstDay && (e.push(e.shift()), t.push(t.shift())), o.node("thead", o.node("tr", o.group({
                        min: 0,
                        max: i - 1,
                        i: 1,
                        node: "th",
                        item: function(i) {
                            return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
                        }
                    })))
                }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0), n.weekdaysFull.slice(0)),
                g = function(e) {
                    return o.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && c.year >= p.year && c.month >= p.month || !e && c.year <= f.year && c.month <= f.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + o.ariaAttr({
                        role: "button",
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
                },
                v = function(i) {
                    var r = n.showMonthsShort ? n.monthsShort : n.monthsFull;
                    return "short_months" == i && (r = n.monthsShort), n.selectMonths && void 0 == i ? o.node("select", o.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [r[e], 0, "value=" + e + (c.month == e ? " selected" : "") + (c.year == f.year && e < f.month || c.year == p.year && e > p.month ? " disabled" : "")]
                        }
                    }), n.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + o.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + n.labelMonthSelect + '"') : "short_months" == i ? null != l ? o.node("div", r[l.month]) : o.node("div", r[c.month]) : o.node("div", r[c.month], n.klass.month)
                },
                m = function(i) {
                    var r = c.year,
                        a = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
                    if (a) {
                        var s = f.year,
                            l = p.year,
                            u = r - a,
                            d = r + a;
                        if (s > u && (d += s - u, u = s), d > l) {
                            var h = u - s,
                                g = d - l;
                            u -= h > g ? g : h, d = l
                        }
                        if (n.selectYears && void 0 == i) return o.node("select", o.group({
                            min: u,
                            max: d,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (r == e ? " selected" : "")]
                            }
                        }), n.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + o.ariaAttr({
                            controls: t.$node[0].id + "_table"
                        }) + ' title="' + n.labelYearSelect + '"')
                    }
                    return "raw" == i ? o.node("div", r) : o.node("div", r, n.klass.year)
                };
            return createDayLabel = function() {
                return null != l ? o.node("div", l.date) : o.node("div", s.date)
            }, createWeekdayLabel = function() {
                var e;
                e = null != l ? l.day : s.day;
                var t = n.weekdaysFull[e];
                return t
            }, o.node("div", o.node("div", createWeekdayLabel(), "picker__weekday-display") + o.node("div", v("short_months"), n.klass.month_display) + o.node("div", createDayLabel(), n.klass.day_display) + o.node("div", m("raw"), n.klass.year_display), n.klass.date_display) + o.node("div", o.node("div", (n.selectYears ? v() + m() : v() + m()) + g() + g(1), n.klass.header) + o.node("table", h + o.node("tbody", o.group({
                min: 0,
                max: r - 1,
                i: 1,
                node: "tr",
                item: function(e) {
                    var r = n.firstDay && 0 === t.create([c.year, c.month, 1]).day ? -7 : 0;
                    return [o.group({
                        min: i * e - c.day + r + 1,
                        max: function() {
                            return this.min + i - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = t.create([c.year, c.month, e + (n.firstDay ? 1 : 0)]);
                            var i = l && l.pick == e.pick,
                                r = u && u.pick == e.pick,
                                a = d && t.disabled(e) || e.pick < f.pick || e.pick > p.pick,
                                h = o.trigger(t.formats.toString, t, [n.format, e]);
                            return [o.node("div", e.date, function(t) {
                                return t.push(c.month == e.month ? n.klass.infocus : n.klass.outfocus), s.pick == e.pick && t.push(n.klass.now), i && t.push(n.klass.selected), r && t.push(n.klass.highlighted), a && t.push(n.klass.disabled), t.join(" ")
                            }([n.klass.day]), "data-pick=" + e.pick + " " + o.ariaAttr({
                                role: "gridcell",
                                label: h,
                                selected: i && t.$node.val() === h ? !0 : null,
                                activedescendant: r ? !0 : null,
                                disabled: a ? !0 : null
                            })), "", o.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + o.ariaAttr({
                role: "grid",
                controls: t.$node[0].id,
                readonly: !0
            })), n.klass.calendar_container) + o.node("div", o.node("button", n.today, "btn-flat picker__today", "type=button data-pick=" + s.pick + (e && !t.disabled(s) ? "" : " disabled") + " " + o.ariaAttr({
                controls: t.$node[0].id
            })) + o.node("button", n.clear, "btn-flat picker__clear", "type=button data-clear=1" + (e ? "" : " disabled") + " " + o.ariaAttr({
                controls: t.$node[0].id
            })) + o.node("button", n.close, "btn-flat picker__close", "type=button data-close=true " + (e ? "" : " disabled") + " " + o.ariaAttr({
                controls: t.$node[0].id
            })), n.klass.footer)
        }, n.defaults = function(e) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                format: "d mmmm, yyyy",
                klass: {
                    table: e + "table",
                    header: e + "header",
                    date_display: e + "date-display",
                    day_display: e + "day-display",
                    month_display: e + "month-display",
                    year_display: e + "year-display",
                    calendar_container: e + "calendar-container",
                    navPrev: e + "nav--prev",
                    navNext: e + "nav--next",
                    navDisabled: e + "nav--disabled",
                    month: e + "month",
                    year: e + "year",
                    selectMonth: e + "select--month",
                    selectYear: e + "select--year",
                    weekdays: e + "weekday",
                    day: e + "day",
                    disabled: e + "day--disabled",
                    selected: e + "day--selected",
                    highlighted: e + "day--highlighted",
                    now: e + "day--today",
                    infocus: e + "day--infocus",
                    outfocus: e + "day--outfocus",
                    footer: e + "footer",
                    buttonClear: e + "button--clear",
                    buttonToday: e + "button--today",
                    buttonClose: e + "button--close"
                }
            }
        }(e.klasses().picker + "__"), e.extend("pickadate", n)
    }),
    function(e) {
        function t() {
            var t = +e(this).attr("length"),
                n = +e(this).val().length,
                i = t >= n;
            e(this).parent().find('span[class="character-counter"]').html(n + "/" + t), r(i, e(this))
        }

        function n(t) {
            var n = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            t.parent().append(n)
        }

        function i() {
            e(this).parent().find('span[class="character-counter"]').html("")
        }

        function r(e, t) {
            var n = t.hasClass("invalid");
            e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
        }
        e.fn.characterCounter = function() {
            return this.each(function() {
                var r = void 0 !== e(this).attr("length");
                r && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", i), n(e(this)))
            })
        }, e(document).ready(function() {
            e("input, textarea").characterCounter()
        })
    }(jQuery),
    function(e, t) {
        "use strict";
        var n = function(e) {
                if ("object" != typeof e.document) throw Error("Cookies.js requires a `window` with a `document` object");
                var n = function(e, t, i) {
                    return 1 === arguments.length ? n.get(e) : n.set(e, t, i)
                };
                return n._document = e.document, n._cacheKeyPrefix = "cookey.", n._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), n.defaults = {
                    path: "/",
                    secure: !1
                }, n.get = function(e) {
                    return n._cachedDocumentCookie !== n._document.cookie && n._renewCache(), e = n._cache[n._cacheKeyPrefix + e], e === t ? t : decodeURIComponent(e)
                }, n.set = function(e, i, r) {
                    return r = n._getExtendedOptions(r), r.expires = n._getExpiresDate(i === t ? -1 : r.expires), n._document.cookie = n._generateCookieString(e, i, r), n
                }, n.expire = function(e, i) {
                    return n.set(e, t, i)
                }, n._getExtendedOptions = function(e) {
                    return {
                        path: e && e.path || n.defaults.path,
                        domain: e && e.domain || n.defaults.domain,
                        expires: e && e.expires || n.defaults.expires,
                        secure: e && e.secure !== t ? e.secure : n.defaults.secure
                    }
                }, n._isValidDate = function(e) {
                    return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                }, n._getExpiresDate = function(e, t) {
                    if (t = t || new Date, "number" == typeof e ? e = 1 / 0 === e ? n._maxExpireDate : new Date(t.getTime() + 1e3 * e) : "string" == typeof e && (e = new Date(e)), e && !n._isValidDate(e)) throw Error("`expires` parameter cannot be converted to a valid Date instance");
                    return e
                }, n._generateCookieString = function(e, t, n) {
                    return e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent), e = e.replace(/\(/g, "%28").replace(/\)/g, "%29"), t = (t + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent), n = n || {}, e = e + "=" + t + (n.path ? ";path=" + n.path : ""), e += n.domain ? ";domain=" + n.domain : "", e += n.expires ? ";expires=" + n.expires.toUTCString() : "", e += n.secure ? ";secure" : ""
                }, n._getCacheFromString = function(e) {
                    var i = {};
                    e = e ? e.split("; ") : [];
                    for (var r = 0; r < e.length; r++) {
                        var o = n._getKeyValuePairFromCookieString(e[r]);
                        i[n._cacheKeyPrefix + o.key] === t && (i[n._cacheKeyPrefix + o.key] = o.value)
                    }
                    return i
                }, n._getKeyValuePairFromCookieString = function(e) {
                    var t, n = e.indexOf("="),
                        n = 0 > n ? e.length : n,
                        i = e.substr(0, n);
                    try {
                        t = decodeURIComponent(i)
                    } catch (r) {
                        console && "function" == typeof console.error && console.error('Could not decode cookie with key "' + i + '"', r)
                    }
                    return {
                        key: t,
                        value: e.substr(n + 1)
                    }
                }, n._renewCache = function() {
                    n._cache = n._getCacheFromString(n._document.cookie), n._cachedDocumentCookie = n._document.cookie
                }, n._areEnabled = function() {
                    var e = "1" === n.set("cookies.js", 1).get("cookies.js");
                    return n.expire("cookies.js"), e
                }, n.enabled = n._areEnabled(), n
            },
            i = "object" == typeof e.document ? n(e) : n;
        "function" == typeof define && define.amd ? define(function() {
            return i
        }) : "object" == typeof exports ? ("object" == typeof module && "object" == typeof module.exports && (exports = module.exports = i), exports.Cookies = i) : e.Cookies = i
    }("undefined" == typeof window ? this : window),
    function(e) {
        e.fn.scrollIntoView = function(t, n, i) {
            function r(t, n) {
                void 0 === n ? e.isFunction(o.complete) && o.complete.call(t) : o.smooth ? e(t).stop().animate({
                    scrollTop: n
                }, o) : (t.scrollTop = n, e.isFunction(o.complete) && o.complete.call(t))
            }
            var o = e.extend({}, e.fn.scrollIntoView.defaults);
            "object" == e.type(t) ? e.extend(o, t) : "number" == e.type(t) ? e.extend(o, {
                duration: t,
                easing: n,
                complete: i
            }) : 0 == t && (o.smooth = !1);
            var a = 1 / 0,
                s = 0;
            1 == this.size() ? null == (a = this.get(0).offsetTop) || (s = a + this.get(0).offsetHeight) : this.each(function(e, t) {
                t.offsetTop < a ? a = t.offsetTop : t.offsetTop + t.offsetHeight > s ? s = t.offsetTop + t.offsetHeight : null
            }), s -= a;
            for (var l = this.commonAncestor().get(0), u = e(window).height(); l;) {
                var c = l.scrollTop,
                    d = l.clientHeight;
                if (d > u && (d = u), 0 == d && "BODY" == l.tagName && (d = u), l.scrollTop != (null == (l.scrollTop += 1) || l.scrollTop) && null != (l.scrollTop -= 1) || l.scrollTop != (null == (l.scrollTop -= 1) || l.scrollTop) && null != (l.scrollTop += 1)) return void(c >= a ? r(l, a) : a + s > c + d ? r(l, a + s - d) : r(l, void 0));
                l = l.parentNode
            }
            return this
        }, e.fn.scrollIntoView.defaults = {
            smooth: !0,
            duration: null,
            easing: e.easing && e.easing.easeOutExpo ? "easeOutExpo" : null,
            complete: e.noop(),
            step: null,
            specialEasing: {}
        }, e.fn.isOutOfView = function(e) {
            var t = !0;
            return this.each(function() {
                var n = this.parentNode,
                    i = n.scrollTop,
                    r = n.clientHeight,
                    o = this.offsetTop,
                    a = this.offsetHeight;
                (e ? o > i + r : o + a > i + r) || (e ? i > o + a : i > o) || (t = !1)
            }), t
        }, e.fn.commonAncestor = function() {
            var t = [],
                n = 1 / 0;
            e(this).each(function() {
                var i = e(this).parents();
                t.push(i), n = Math.min(n, i.length)
            });
            for (var i = 0; i < t.length; i++) t[i] = t[i].slice(t[i].length - n);
            for (var i = 0; i < t[0].length; i++) {
                var r = !0;
                for (var o in t)
                    if (t[o][i] != t[0][i]) {
                        r = !1;
                        break
                    }
                if (r) return e(t[0][i])
            }
            return e([])
        }
    }(jQuery);
	
;(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 240,
        edge: 'left',
        closeOnClick: false
      };
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menu_id = $("#"+ $this.attr('data-activates'));

        // Set to width
        if (options.menuWidth != 240) {
          menu_id.css('width', options.menuWidth);
        }

		var extraLeft=0;
		if (options.edge === 'left') {
			var navmobile = $('#nav-mobile');
			if (navmobile) {
				if (navmobile.css('left')=='0px') {
					extraLeft = navmobile.width();
				}
			}
		}
		
        // Add Touch Area
        //var dragTarget = $('<div class="drag-target"></div>');
        //$('body').append(dragTarget);

        if (options.edge == 'left') {
          menu_id.css('left', -1 * (options.menuWidth + 10));
          //dragTarget.css({'left': 0}); // Add Touch Area
        }
        else {
          menu_id.addClass('right-aligned') // Change text-alignment to right
            .css('right', -1 * (options.menuWidth + 10))
            .css('left', '');
          //dragTarget.css({'right': 0}); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu_id.hasClass('fixed')) {
            if (window.innerWidth > 992) {
              menu_id.css('left', 0);
            }
          }

        // Window resize to reset on large screens fixed
        if (menu_id.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay-sidebar').css('opacity') !== 0 && menuOut) {
				removeMenu(true);
              }
              else {
                menu_id.removeAttr('style');
                menu_id.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left')
                menu_id.css('left', -1 * (options.menuWidth + 10));
              else
                menu_id.css('right', -1 * (options.menuWidth + 10));
            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
		
        if (options.closeOnClick === true) {
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){            
			removeMenu();
          });
        }

        function removeMenu(restoreNav) {
          panning = false;
          menuOut = false;
		  
          // Reenable scrolling
          $('body').css('overflow', '');

          $('#sidenav-overlay-sidebar').velocity({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
			
		  var extraLeft=0;
		  if (options.edge === 'left') {
			var navmobile = $('#nav-mobile');
			if (navmobile) {
				if (navmobile.css('left')=='0px') {
					extraLeft = navmobile.width();
				}
			}
		  }	
			
          if (options.edge === 'left') {
            // Reset phantom div
            //dragTarget.css({width: '', right: '', left: '0'});
            menu_id.velocity(
              {left: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            //dragTarget.css({width: '', right: '0', left: ''});
            menu_id.velocity(
              {right: -1 * (options.menuWidth + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }
              });
          }
        }



        // Touch Event
        var panning = false;
        var menuOut = false;
		
		/*
        dragTarget.on('click', function(){
		  removeMenu();
        });
		

        dragTarget.hammer({
          prevent_default: false
        }).bind('pan', function(e) {

          if (e.gesture.pointerType == "touch") {

            var direction = e.gesture.direction;
            var x = e.gesture.center.x;
            var y = e.gesture.center.y;
            var velocityX = e.gesture.velocityX;

            // Disable Scrolling
            $('body').css('overflow', 'hidden');
			
			var extraLeft=0;
			if (options.edge === 'left') {
				var navmobile = $('#nav-mobile');
				if (navmobile) {
					if (navmobile.css('left')=='0px') {
						extraLeft = navmobile.width();
					}
				}
			}

            // If overlay does not exist, create one and if it is clicked, close menu
            if ($('#sidenav-overlay-sidebar').length === 0) {
              var overlay = $('<div id="sidenav-overlay-sidebar"></div>');
              overlay.css('opacity', 0).click( function(){			    
                removeMenu();
              });
			  $('body').append(overlay);			  
            }
			
            // Keep within boundaries
            if (options.edge === 'left') {
              if (x > options.menuWidth) { x = options.menuWidth; }
              else if (x < 0) { x = 0; }
            }

            if (options.edge === 'left') {
              // Left Direction
              if (x < (options.menuWidth / 2)) { menuOut = false; }
              // Right Direction
              else if (x >= (options.menuWidth / 2)) { menuOut = true; }

              menu_id.css('left', (x - options.menuWidth));
            }
            else {
              // Left Direction
              if (x < (window.innerWidth - options.menuWidth / 2)) {
                menuOut = true;
              }
              // Right Direction
              else if (x >= (window.innerWidth - options.menuWidth / 2)) {
               menuOut = false;
             }
              var rightPos = -1 *(x - options.menuWidth / 2);
              if (rightPos > 0) {
                rightPos = 0;
              }

              menu_id.css('right', rightPos);
            }




            // Percentage overlay
            var overlayPerc;
            if (options.edge === 'left') {
              overlayPerc = x / options.menuWidth;
              $('#sidenav-overlay-sidebar').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
            else {
              overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
              $('#sidenav-overlay-sidebar').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }
          }

        }).bind('panend', function(e) {

          if (e.gesture.pointerType == "touch") {
		    var extraLeft=0;
			if (options.edge === 'left') {
				var navmobile = $('#nav-mobile');
				if (navmobile) {
					if (navmobile.css('left')=='0px') {
						extraLeft = navmobile.width();
					}
				}
			} 
		     
            var velocityX = e.gesture.velocityX;
            panning = false;
            if (options.edge === 'left') {
              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay-sidebar').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                dragTarget.css({width: '50%', right: 0, left: ''});
              }
              else if (!menuOut || velocityX > 0.3) {
                // Enable Scrolling
                $('body').css('overflow', '');
                // Slide menu closed
                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay-sidebar').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                dragTarget.css({width: '10px', right: '', left: 0});
              }
            }
            else {
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay-sidebar').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                dragTarget.css({width: '50%', right: '', left: 0});
              }
              else if (!menuOut || velocityX < -0.3) {
                // Enable Scrolling
                $('body').css('overflow', '');
                // Slide menu closed
                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay-sidebar').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                  complete: function () {
                    $(this).remove();
                  }});
                dragTarget.css({width: '10px', right: 0, left: ''});
              }
            }

          }
        });
		*/

          $this.click(function() {
			if (menuOut === true) {
              menuOut = false;
              panning = false;			  
			  removeMenu();
            }
            else {
			    var extraLeft=0;
				if (options.edge === 'left') {
					var navmobile = $('#nav-mobile');
					if (navmobile) {
						if (navmobile.css('left')=='0px') {
							extraLeft = navmobile.width();
						}
					}
				}		
			 	
				
              // Disable Scrolling
              $('body').css('overflow', 'hidden');
              // Push current drag target on top of DOM tree
              //$('body').append(dragTarget);
			  if (options.edge === 'left') {
			    if (menu_id.css('left')=='0px') {					
					$('#sidenav-overlay-sidebar').trigger('click');
					return false;
				}
                //dragTarget.css({width: '50%', right: 0, left: ''});
                menu_id.velocity({left: extraLeft}, {duration: 300, queue: false, easing: 'easeOutQuad'});
				menu_id.css('right','');
              }
              else {
				if (menu_id.css('right')=='0px') {					
					$('#sidenav-overlay-sidebar').trigger('click');
					return false;
				}
                //dragTarget.css({width: '50%', right: '', left: 0});
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                menu_id.css('left','');
              }

			  var overlay = $('<div id="sidenav-overlay-sidebar"></div>');
			  overlay.css('opacity', 0).click(function(){
					menuOut = false;
					panning = false;				
					removeMenu();
					
					overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
						complete: function() {
						$(this).remove();
					} });
			  });
			 
              $('body').append(overlay);
              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  menuOut = true;
                  panning = false;
                }
              });
            }

            return false;
          });
      });


    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {		
      $('#sidenav-overlay-sidebar').trigger('click');
    }
  };


    $.fn.abmsideNav = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.abmsideNav' );
      }
    }; // Plugin end
}( jQuery ));