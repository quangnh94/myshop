/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cv(a) {
        if (!ck[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
                if (!cm || !cl.createElement) {
                    cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cm.close()
                }
                d = cm.createElement(a), cm.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }

    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }

    function ct() {
        cr = b
    }

    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }

    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }

    function cb(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function ca(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function(b, e) {
                c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && b != null && typeof b == "object") {
                for (var e in b) {
                    ca(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }

    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bT,
            l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)))
        }(k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }

    function bZ(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }

    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bx : by,
            g = 0,
            h = e.length;
        if (d > 0) {
            if (c !== "border") {
                for (; g < h; g++) {
                    c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0
                }
            }
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null) {
            d = a.style[b] || 0
        }
        d = parseFloat(d) || 0;
        if (c) {
            for (; g < h; g++) {
                d += parseFloat(f.css(a, "padding" + e[g])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0)
            }
        }
        return d + "px"
    }

    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") {
                b.outerHTML = a.outerHTML
            } else {
                if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                    if (c === "option") {
                        b.selected = a.defaultSelected
                    } else {
                        if (c === "input" || c === "textarea") {
                            b.defaultValue = a.defaultValue
                        }
                    }
                } else {
                    a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)
                }
            }
            b.removeAttribute(f.expando)
        }
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function(a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function(a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a) {
                        return this
                    }
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) {
                                    return f.find(a)
                                }
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) {
                        return f.ready(a)
                    }
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) {
                    if ((a = arguments[j]) != null) {
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) {
                                continue
                            }
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    }
                }
                return i
            }, e.extend({
                noConflict: function(b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) {
                            return setTimeout(e.ready, 1)
                        }
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) {
                            return
                        }
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") {
                            return setTimeout(e.ready, 1)
                        }
                        if (c.addEventListener) {
                            c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
                        } else {
                            if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null
                                } catch (d) {}
                                c.documentElement.doScroll && b && J()
                            }
                        }
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                },
                isWindow: function(a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                        return !1
                    }
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
                            return !1
                        }
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a) {}
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) {
                        return !1
                    }
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b) {
                        return null
                    }
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) {
                        return a.JSON.parse(b)
                    }
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
                        return (new Function("return " + b))()
                    }
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a) {
                                if (c.apply(a[f], d) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.apply(a[g++], d) === !1) {
                                    break
                                }
                            }
                        }
                    } else {
                        if (i) {
                            for (f in a) {
                                if (c.call(a[f], f, a[f]) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.call(a[g], g, a[g++]) === !1) {
                                    break
                                }
                            }
                        }
                    }
                    return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                } : function(a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H) {
                            return H.call(b, a, c)
                        }
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++) {
                            if (c in b && b[c] === a) {
                                return c
                            }
                        }
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") {
                        for (var f = c.length; e < f; e++) {
                            a[d++] = c[e]
                        }
                    } else {
                        while (c[e] !== b) {
                            a[d++] = c[e++]
                        }
                    }
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) {
                        e = !!b(a[f], f), c !== e && d.push(a[f])
                    }
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) {
                        for (; i < j; i++) {
                            f = c(a[i], i, d), f != null && (h[h.length] = f)
                        }
                    } else {
                        for (g in a) {
                            f = c(a[g], g, d), f != null && (h[h.length] = f)
                        }
                    }
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) {
                        return b
                    }
                    var f = F.call(arguments, 2),
                        g = function() {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function(a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) {
                            e.access(a, j, c[j], f, g, d)
                        }
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) {
                            g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h)
                        }
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m = function(b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) {
                    g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
                }
            },
            n = function(b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++) {
                    if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                }
                i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
            },
            o = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) {
                            for (var f = 0; f < c.length; f++) {
                                if (b[d] === c[f]) {
                                    i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                                    if (a.unique) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) {
                            if (a === c[b]) {
                                return !0
                            }
                        }
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b, (!e || e === !0) && o.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function() {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) {
                            a = h
                        } else {
                            for (var b in h) {
                                a[b] = h[b]
                            }
                        }
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) {
                i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
            }
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
                }
                g || j.resolveWith(j, b)
            } else {
                j !== a && j.resolveWith(j, d ? [a] : [])
            }
            return k
        }
    }), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"),
            r = c.documentElement;
        q.setAttribute("className", "t"), q.innerHTML = "   <link/><table></table><a href='http://phongvanthan.com/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = q.getElementsByTagName("*"), e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = q.getElementsByTagName("input")[0], b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }!q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = "", a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (q.attachEvent) {
            for (o in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) {
                n = "on" + o, p = n in q, p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"), b[o + "Bubbles"] = p
            }
        }
        k.removeChild(q), k = g = h = j = q = i = null, f(function() {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
            !r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div><table " + n + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            }, e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                    return
                }
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
                }
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) {
                    return g.events
                }
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) {
                    return
                }
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? m : f.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) {
                        return
                    }
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") === b
                }
            }
            return !0
        }
    }), f.fn.extend({
        data: function(a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) {
                            g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]))
                        }
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") {
                return this.each(function() {
                    f.data(this, a)
                })
            }
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function() {
                var b = f(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function(a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) {
                return f.queue(this[0], a)
            }
            return this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                    h++, l.add(m)
                }
            }
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) {
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                            }
                            e.className = f.trim(g)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) {
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) {
                                h = h.replace(" " + c[i] + " ", " ")
                            }
                            g.className = f.trim(h)
                        } else {
                            g.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) {
                return this.each(function(c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                })
            }
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) {
                        i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        },
        val: function(a) {
            var c, d, e, g = this[0];
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function(d) {
                    var g = f(this),
                        h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                            return a == null ? "" : a + ""
                        })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                        if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                            this.value = h
                        }
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                    return d
                }
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) {
                        return null
                    }
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) {
                                return b
                            }
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) {
                        return f(i[g]).val()
                    }
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) {
                    return f(a)[c](d)
                }
                if (typeof a.getAttribute == "undefined") {
                    return f.prop(a, c, d)
                }
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                        return g
                    }
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
                    return g
                }
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; h < g; h++) {
                    e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1))
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) {
                        f.error("type property can't be changed")
                    } else {
                        if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b
                        }
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) {
                        return w.get(a, b)
                    }
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) {
                        return w.set(a, b, c)
                    }
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0
    }, w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) {
                    return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /\bhover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function(a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                    d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                    }, i.elem = a), c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: G(g),
                            namespace: n.join(".")
                        }, p), r = j[m];
                        if (!r) {
                            r = j[m] = [], r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                                a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                            }
                        }
                        s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a),
                    h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                        if (!j) {
                            for (j in o) {
                                f.event.remove(a, j + b[h], c, d, !0)
                            }
                            continue
                        }
                        p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++) {
                            s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
                        }
                        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c,
                        i = [],
                        j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered)) {
                        return
                    }
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                        return
                    }
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j) {
                            j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
                        }
                        return
                    }
                    c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1) {
                        return
                    }
                    r = [
                        [e, p.bindType || h]
                    ];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                        for (; m; m = m.parentNode) {
                            r.push([m, s]), n = m
                        }
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
                        m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
                    }
                    c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [],
                    e = d.delegateCount,
                    g = [].slice.call(arguments, 0),
                    h = !c.exclusive && !c.namespace,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s, t;
                g[0] = c, c.delegateTarget = this;
                if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                    m = f(this), m.context = this.ownerDocument || this;
                    for (l = c.target; l != this; l = l.parentNode || this) {
                        o = {}, q = [], m[0] = l;
                        for (j = 0; j < e; j++) {
                            r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)), o[s] && q.push(r)
                        }
                        q.length && i.push({
                            elem: l,
                            matches: q
                        })
                    }
                }
                d.length > e && i.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                    p = i[j], c.currentTarget = p.elem;
                    for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                        r = p.matches[k];
                        if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) {
                            c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                        }
                    }
                }
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, d) {
                    var e, f, g, h = d.button,
                        i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                    return a
                }
            },
            fix: function(a) {
                if (a[f.expando]) {
                    return a
                }
                var d, e, g = a,
                    h = f.event.fixHooks[a.type] || {},
                    i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d;) {
                    e = i[--d], a[e] = g[e]
                }
                a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, f.Event = function(a, b) {
            if (!(this instanceof f.Event)) {
                return new f.Event(a, b)
            }
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K, this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this,
                        d = a.relatedTarget,
                        e = a.handleObj,
                        g = e.selector,
                        h;
                    if (!d || d !== c && !f.contains(c, d)) {
                        a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
                    }
                    return h
                }
            }
        }), f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                        this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                    }), d._submit_attached = !0)
                })
            },
            teardown: function() {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.remove(this, "._submit")
            }
        }), f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        f.event.add(this, "propertychange._change", function(a) {
                            a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), f.event.add(this, "click._change", function(a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                        })
                    }
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                    return a.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }), f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var d = 0,
                e = function(a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function() {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function() {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }), f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = c, c = b);
                    for (i in a) {
                        this.on(i, c, d, a[i], g)
                    }
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) {
                    e = J
                } else {
                    if (!e) {
                        return this
                    }
                }
                g === 1 && (h = e, e = function(a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a) {
                        this.off(g, c, a[g])
                    }
                    return this
                }
                if (c === !1 || typeof c == "function") {
                    d = c, c = b
                }
                d === !1 && (d = J);
                return this.each(function() {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function(a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) {
                    return f.event.trigger(a, b, this[0], !0)
                }
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) {
                    b[d++].guid = c
                }
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            f.fn[b] = function(a, c) {
                c == null && (c = a, a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function() {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else {
                                    if (m.filter(b, [j]).length > 0) {
                                        k = j;
                                        break
                                    }
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                i = !1;
                return 0
            });
            var m = function(b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) {
                    return []
                }
                if (!b || typeof b != "string") {
                    return e
                }
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b)) {
                    if (w.length === 2 && o.relative[w[0]]) {
                        j = y(w[0] + w[1], d, f)
                    } else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) {
                            b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                        }
                    }
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) {
                            q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                        }
                    } else {
                        k = w = []
                    }
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]") {
                    if (!u) {
                        e.push.apply(e, k)
                    } else {
                        if (d && d.nodeType === 1) {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
                            }
                        } else {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && k[t].nodeType === 1 && e.push(j[t])
                            }
                        }
                    }
                } else {
                    s(k, e)
                }
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h) {
                        for (var b = 1; b < a.length; b++) {
                            a[b] === a[b - 1] && a.splice(b--, 1)
                        }
                    }
                }
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a) {
                    return []
                }
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter) {
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\") {
                                continue
                            }
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) {
                                    g = i = !0
                                } else {
                                    if (f === !0) {
                                        continue
                                    }
                                }
                            }
                            if (f) {
                                for (n = 0;
                                    (j = s[n]) != null; n++) {
                                    j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
                                }
                            }
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h], "");
                                if (!g) {
                                    return []
                                }
                                break
                            }
                        }
                    }
                    if (a === q) {
                        if (g == null) {
                            m.error(a)
                        } else {
                            break
                        }
                    }
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9) {
                            if (typeof a.textContent == "string") {
                                return a.textContent
                            }
                            if (typeof a.innerText == "string") {
                                return a.innerText.replace(k, "")
                            }
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                e += n(a)
                            }
                        } else {
                            if (d === 3 || d === 4) {
                                return a.nodeValue
                            }
                        }
                    } else {
                        for (b = 0; c = a[b]; b++) {
                            c.nodeType !== 8 && (e += n(c))
                        }
                    }
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++) {
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1) {}
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) {
                                    c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                                }
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                        },
                        "~": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) {
                                    d[e].getAttribute("name") === a[1] && c.push(d[e])
                                }
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if (typeof b.getElementsByTagName != "undefined") {
                                return b.getElementsByTagName(a[1])
                            }
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) {
                                return a
                            }
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) {
                                h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
                            }
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else {
                                a[2] && m.error(a[0])
                            }
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function(b, c, d, e, f) {
                            if (b[1] === "not") {
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                                    b[3] = m(b[3], null, null, c)
                                } else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            } else {
                                if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                                    return !0
                                }
                            }
                            return b
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return b === 0
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                            if (e === "contains") {
                                return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
                            }
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++) {
                                    if (g[h] === a) {
                                        return !1
                                    }
                                }
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling) {
                                        if (l.nodeType === 1) {
                                            return !1
                                        }
                                    }
                                    if (k === "first") {
                                        return !0
                                    }
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling) {
                                        if (l.nodeType === 1) {
                                            return !1
                                        }
                                    }
                                    return !0;
                                case "nth":
                                    c = b[2], e = b[3];
                                    if (c === 1 && e === 0) {
                                        return !0
                                    }
                                    f = b[0], g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l.nextSibling) {
                                            l.nodeType === 1 && (l.nodeIndex = ++i)
                                        }
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) {
                o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
            }
            var s = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") {
                        Array.prototype.push.apply(d, a)
                    } else {
                        if (typeof a.length == "number") {
                            for (var e = a.length; c < e; c++) {
                                d.push(a[c])
                            }
                        } else {
                            for (; a[c]; c++) {
                                d.push(a[c])
                            }
                        }
                    }
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                        return a.compareDocumentPosition ? -1 : 1
                    }
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) {
                        return a.sourceIndex - b.sourceIndex
                    }
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) {
                        return v(a, b)
                    }
                    if (!g) {
                        return -1
                    }
                    if (!i) {
                        return 1
                    }
                    while (j) {
                        e.unshift(j), j = j.parentNode
                    }
                    j = i;
                    while (j) {
                        f.unshift(j), j = j.parentNode
                    }
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++) {
                        if (e[k] !== f[k]) {
                            return v(e[k], f[k])
                        }
                    }
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) {
                        return c
                    }
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) {
                            return -1
                        }
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
                        if (typeof c.getElementById != "undefined" && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function(a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function() {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) {
                                c[e].nodeType === 1 && d.push(c[e])
                            }
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function() {
                    var a = m,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        m = function(b, e, f, g) {
                            e = e || c;
                            if (!g && !m.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1]) {
                                        return s(e.getElementsByTagName(b), f)
                                    }
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                        return s(e.getElementsByClassName(h[2]), f)
                                    }
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) {
                                        return s([e.body], f)
                                    }
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) {
                                            return s([], f)
                                        }
                                        if (i.id === h[3]) {
                                            return s([i], f)
                                        }
                                    }
                                    try {
                                        return s(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else {
                                    if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                        var k = e,
                                            l = e.getAttribute("id"),
                                            n = l || d,
                                            p = e.parentNode,
                                            q = /^\s*[+~]/.test(b);
                                        l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                        try {
                                            if (!q || p) {
                                                return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                            }
                                        } catch (r) {} finally {
                                            l || k.removeAttribute("id")
                                        }
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) {
                            m[e] = a[e]
                        }
                        b = null
                    }
                }(),
                function() {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function(a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a)) {
                                try {
                                    if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                        var f = b.call(a, c);
                                        if (f || !d || a.document && a.document.nodeType !== 11) {
                                            return f
                                        }
                                    }
                                } catch (g) {}
                            }
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) {
                            return
                        }
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) {
                                return b.getElementsByClassName(a[1])
                            }
                        }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : m.contains = function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var y = function(a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) {
                    f += d[0], a = a.replace(o.match.PSEUDO, "")
                }
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) {
                    m(a, g[h], e, c)
                }
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.POS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b = this,
                c, d;
            if (typeof a != "string") {
                return f(a).filter(function() {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) {
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        })
                    }
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function(a) {
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    var c = f(this);
                    c.text(a.call(this, b, c.text()))
                })
            }
            if (typeof a != "object" && a !== b) {
                return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }
            return f.text(this)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++) {
                if (!a || f.filter(a, [d]).length) {
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
                }
            }
            return this
        },
        empty: function() {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null
            }
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) {
                        this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                    }
                } catch (e) {
                    this.empty().append(a)
                }
            } else {
                f.isFunction(a) ? this.each(function(b) {
                    var c = f(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a)
            }
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) {
                    return this.each(function(b) {
                        var c = f(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    })
                }
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
                return this.each(function() {
                    f(this).domManip(a, c, d, !0)
                })
            }
            if (f.isFunction(j)) {
                return this.each(function(e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                })
            }
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                        d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                }
                k.length && f.each(k, bp)
            }
            return this
        }
    }), f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) {
                    e[g] && bk(d[g], e[g])
                }
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) {
                        bj(d[g], e[g])
                    }
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
                (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) {
                    continue
                }
                if (typeof k == "string") {
                    if (!_.test(k)) {
                        k = b.createTextNode(k)
                    } else {
                        k = k.replace(Y, "<$1></$2>");
                        var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                            m = bg[l] || bg._default,
                            n = m[0],
                            o = b.createElement("div");
                        b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                        while (n--) {
                            o = o.lastChild
                        }
                        if (!f.support.tbody) {
                            var p = $.test(k),
                                q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i) {
                                f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }
                        }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                    }
                }
                var r;
                if (!f.support.appendChecked) {
                    if (k[0] && typeof(r = k.length) == "number") {
                        for (i = 0; i < r; i++) {
                            bn(k[i])
                        }
                    } else {
                        bn(k)
                    }
                }
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                };
                for (j = 0; h[j]; j++) {
                    if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) {
                        e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j])
                    } else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
                }
            }
            return h
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                    continue
                }
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) {
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
                        }
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i,
        br = /opacity=([^)]*)/,
        bs = /([A-Z]|^ms)/g,
        bt = /^-?\d+(?:px)?$/i,
        bu = /^-?\d/,
        bv = /^([\-+])=([\-+.\de]+)/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Left", "Right"],
        by = ["Top", "Bottom"],
        bz, bA, bB;
    f.fn.css = function(a, c) {
        if (arguments.length === 2 && c === b) {
            return this
        }
        return f.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                        return g
                    }
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) {
                    return
                }
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                    try {
                        j[c] = d
                    } catch (l) {}
                }
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                return e
            }
            if (bz) {
                return bz(a, c)
            }
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) {
                d[e] = a.style[e], a.style[e] = b[e]
            }
            c.call(a);
            for (e in b) {
                a.style[e] = d[e]
            }
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) {
                        return bC(a, b, d)
                    }
                    f.swap(a, bw, function() {
                        e = bC(a, b, d)
                    });
                    return e
                }
            },
            set: function(a, b) {
                if (!bt.test(b)) {
                    return b
                }
                b = parseFloat(b);
                if (b >= 0) {
                    return b + "px"
                }
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }), f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function() {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c
    }), c.documentElement.currentStyle && (bB = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    });
    var bD = /%20/g,
        bE = /\[\]$/,
        bF = /\r?\n/g,
        bG = /#.*$/,
        bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bK = /^(?:GET|HEAD)$/,
        bL = /^\/\//,
        bM = /\?/,
        bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bO = /^(?:select|textarea)/i,
        bP = /\s+/,
        bQ = /([?&])_=[^&]*/,
        bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bS = f.fn.load,
        bT = {},
        bU = {},
        bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch (bY) {
        bV = c.createElement("a"), bV.href = "", bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bS) {
                return bS.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bF, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? cb(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader("Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = cc(d, x), w = "success", o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bH.exec(n)) {
                                    o[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2) {
                        for (b in a) {
                            j[b] = [j[b], a[b]]
                        }
                    } else {
                        b = a[v.status], v.then(b, b)
                    }
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bQ, "$1_=" + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                v[u](d[u])
            }
            p = b$(bU, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) {
                        w(-1, z)
                    } else {
                        throw z
                    }
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function() {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    ca(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bD, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f.now(),
        ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cd++
        }
    }), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
                g = [a]
            }, d.always(function() {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                        }
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a.ActiveXObject ? function() {
            for (var a in ch) {
                ch[a](0, 1)
            }
        } : !1,
        cg = 0,
        ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ci() || cj()
        } : ci,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields) {
                            for (j in c.xhrFields) {
                                h[j] = c.xhrFields[j]
                            }
                        }
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) {
                                h.setRequestHeader(j, e[j])
                            }
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function(a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                    if (e) {
                                        h.readyState !== 4 && h.abort()
                                    } else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var ck = {},
        cl, cm, cn = /^(?:toggle|show|hide)$/,
        co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cp, cq = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cr;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(cu("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) {
                return this.animate(cu("hide", 3), a, b, c)
            }
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) {
                d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
            }
            for (g = 0; g < h; g++) {
                this[g].style && (this[g].style.display = "none")
            }
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cu("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) {
                    j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""))
                }
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) {
                    for (b in g) {
                        g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
                    }
                } else {
                    g[b = a + ".run"] && g[b].stop && h(this, g, b)
                }
                for (b = e.length; b--;) {
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
                }(!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cr || cs(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) {
                    i.animatedProperties[b] !== !0 && (g = !1)
                }
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) {
                        for (b in i.animatedProperties) {
                            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
                        }
                    }
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cp), cp = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"], function(a, b) {
        f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function(a) {
        var b = this[0],
            c;
        if (a) {
            return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) {
            return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            }
        }
        var h = e.body,
            i = cy(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function(a) {
        var b = this[0];
        if (a) {
            return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") {
                break
            }
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") {
            l += i.offsetTop, m += i.offsetLeft
        }
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function() {
            if (!this[0]) {
                return null
            }
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a
            })
        }
    }), f.each(["Left", "Top"], function(a, c) {
        var d = "scroll" + c;
        f.fn[d] = function(c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) {
                    return null
                }
                g = cy(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function() {
                g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function(a) {
            var e = this[0];
            if (!e) {
                return a == null ? null : this
            }
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()))
                })
            }
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) {
                return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c])
            }
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);
/*! jQuery UI - v1.11.4 - 2015-04-10
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function(g) {
    function d(i, j) {
        var m, e, l, k = i.nodeName.toLowerCase();
        return "area" === k ? (m = i.parentNode, e = m.name, i.href && e && "map" === m.nodeName.toLowerCase() ? (l = g("img[usemap='#" + e + "']")[0], !!l && c(l)) : !1) : (/^(input|select|textarea|button|object)$/.test(k) ? !i.disabled : "a" === k ? i.href || j : j) && c(i)
    }

    function c(a) {
        return g.expr.filters.visible(a) && !g(a).parents().addBack().filter(function() {
            return "hidden" === g.css(this, "visibility")
        }).length
    }
    g.ui = g.ui || {}, g.extend(g.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), g.fn.extend({
        scrollParent: function(k) {
            var j = this.css("position"),
                l = "absolute" === j,
                m = k ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                e = this.parents().filter(function() {
                    var a = g(this);
                    return l && "static" === a.css("position") ? !1 : m.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
                }).eq(0);
            return "fixed" !== j && e.length ? e : g(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && g(this).removeAttr("id")
            })
        }
    }), g.extend(g.expr[":"], {
        data: g.expr.createPseudo ? g.expr.createPseudo(function(a) {
            return function(e) {
                return !!g.data(e, a)
            }
        }) : function(e, a, j) {
            return !!g.data(e, j[3])
        },
        focusable: function(a) {
            return d(a, !isNaN(g.attr(a, "tabindex")))
        },
        tabbable: function(a) {
            var e = g.attr(a, "tabindex"),
                j = isNaN(e);
            return (j || e >= 0) && d(a, !j)
        }
    }), g("<a>").outerWidth(1).jquery || g.each(["Width", "Height"], function(k, j) {
        function l(q, o, r, n) {
            return g.each(p, function() {
                o -= parseFloat(g.css(q, "padding" + this)) || 0, r && (o -= parseFloat(g.css(q, "border" + this + "Width")) || 0), n && (o -= parseFloat(g.css(q, "margin" + this)) || 0)
            }), o
        }
        var p = "Width" === j ? ["Left", "Right"] : ["Top", "Bottom"],
            e = j.toLowerCase(),
            m = {
                innerWidth: g.fn.innerWidth,
                innerHeight: g.fn.innerHeight,
                outerWidth: g.fn.outerWidth,
                outerHeight: g.fn.outerHeight
            };
        g.fn["inner" + j] = function(a) {
            return void 0 === a ? m["inner" + j].call(this) : this.each(function() {
                g(this).css(e, l(this, a) + "px")
            })
        }, g.fn["outer" + j] = function(a, i) {
            return "number" != typeof a ? m["outer" + j].call(this, a) : this.each(function() {
                g(this).css(e, l(this, a, !0, i) + "px")
            })
        }
    }), g.fn.addBack || (g.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), g("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (g.fn.removeData = function(a) {
        return function(e) {
            return arguments.length ? a.call(this, g.camelCase(e)) : a.call(this)
        }
    }(g.fn.removeData)), g.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), g.fn.extend({
        focus: function(a) {
            return function(e, j) {
                return "number" == typeof e ? this.each(function() {
                    var i = this;
                    setTimeout(function() {
                        g(i).focus(), j && j.call(i)
                    }, e)
                }) : a.apply(this, arguments)
            }
        }(g.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(i) {
                    i.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e) {
                return this.css("zIndex", e)
            }
            if (this.length) {
                for (var a, j, k = g(this[0]); k.length && k[0] !== document;) {
                    if (a = k.css("position"), ("absolute" === a || "relative" === a || "fixed" === a) && (j = parseInt(k.css("zIndex"), 10), !isNaN(j) && 0 !== j)) {
                        return j
                    }
                    k = k.parent()
                }
            }
            return 0
        }
    }), g.ui.plugin = {
        add: function(k, j, l) {
            var m, e = g.ui[k].prototype;
            for (m in l) {
                e.plugins[m] = e.plugins[m] || [], e.plugins[m].push([j, l[m]])
            }
        },
        call: function(o, l, k, m) {
            var p, j = o.plugins[l];
            if (j && (m || o.element[0].parentNode && 11 !== o.element[0].parentNode.nodeType)) {
                for (p = 0; j.length > p; p++) {
                    o.options[j[p][0]] && j[p][1].apply(o.element, k)
                }
            }
        }
    };
    var f = 0,
        h = Array.prototype.slice;
    g.cleanData = function(a) {
        return function(j) {
            var k, m, e;
            for (e = 0; null != (m = j[e]); e++) {
                try {
                    k = g._data(m, "events"), k && k.remove && g(m).triggerHandler("remove")
                } catch (l) {}
            }
            a(j)
        }
    }(g.cleanData), g.widget = function(v, p, w) {
        var k, u, j, e, q = {},
            m = v.split(".")[0];
        return v = v.split(".")[1], k = m + "-" + v, w || (w = p, p = g.Widget), g.expr[":"][k.toLowerCase()] = function(a) {
            return !!g.data(a, k)
        }, g[m] = g[m] || {}, u = g[m][v], j = g[m][v] = function(i, a) {
            return this._createWidget ? (arguments.length && this._createWidget(i, a), void 0) : new j(i, a)
        }, g.extend(j, u, {
            version: w.version,
            _proto: g.extend({}, w),
            _childConstructors: []
        }), e = new p, e.options = g.widget.extend({}, e.options), g.each(w, function(a, i) {
            return g.isFunction(i) ? (q[a] = function() {
                var l = function() {
                        return p.prototype[a].apply(this, arguments)
                    },
                    o = function(n) {
                        return p.prototype[a].apply(this, n)
                    };
                return function() {
                    var s, r = this._super,
                        n = this._superApply;
                    return this._super = l, this._superApply = o, s = i.apply(this, arguments), this._super = r, this._superApply = n, s
                }
            }(), void 0) : (q[a] = i, void 0)
        }), j.prototype = g.widget.extend(e, {
            widgetEventPrefix: u ? e.widgetEventPrefix || v : v
        }, q, {
            constructor: j,
            namespace: m,
            widgetName: v,
            widgetFullName: k
        }), u ? (g.each(u._childConstructors, function(l, a) {
            var n = a.prototype;
            g.widget(n.namespace + "." + n.widgetName, j, a._proto)
        }), delete u._childConstructors) : p._childConstructors.push(j), g.widget.bridge(v, j), j
    }, g.widget.extend = function(k) {
        for (var j, l, e = h.call(arguments, 1), n = 0, m = e.length; m > n; n++) {
            for (j in e[n]) {
                l = e[n][j], e[n].hasOwnProperty(j) && void 0 !== l && (k[j] = g.isPlainObject(l) ? g.isPlainObject(k[j]) ? g.widget.extend({}, k[j], l) : g.widget.extend({}, l) : l)
            }
        }
        return k
    }, g.widget.bridge = function(e, a) {
        var j = a.prototype.widgetFullName || e;
        g.fn[e] = function(i) {
            var m = "string" == typeof i,
                l = h.call(arguments, 1),
                k = this;
            return m ? this.each(function() {
                var o, p = g.data(this, j);
                return "instance" === i ? (k = p, !1) : p ? g.isFunction(p[i]) && "_" !== i.charAt(0) ? (o = p[i].apply(p, l), o !== p && void 0 !== o ? (k = o && o.jquery ? k.pushStack(o.get()) : o, !1) : void 0) : g.error("no such method '" + i + "' for " + e + " widget instance") : g.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + i + "'")
            }) : (l.length && (i = g.widget.extend.apply(null, [i].concat(l))), this.each(function() {
                var n = g.data(this, j);
                n ? (n.option(i || {}), n._init && n._init()) : g.data(this, j, new a(i, this))
            })), k
        }
    }, g.Widget = function() {}, g.Widget._childConstructors = [], g.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, a) {
            a = g(a || this.defaultElement || this)[0], this.element = g(a), this.uuid = f++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = g(), this.hoverable = g(), this.focusable = g(), a !== this && (g.data(a, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(i) {
                    i.target === a && this.destroy()
                }
            }), this.document = g(a.style ? a.ownerDocument : a.document || a), this.window = g(this.document[0].defaultView || this.document[0].parentWindow)), this.options = g.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: g.noop,
        _getCreateEventData: g.noop,
        _create: g.noop,
        _init: g.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(g.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: g.noop,
        widget: function() {
            return this.element
        },
        option: function(k, j) {
            var l, p, e, m = k;
            if (0 === arguments.length) {
                return g.widget.extend({}, this.options)
            }
            if ("string" == typeof k) {
                if (m = {}, l = k.split("."), k = l.shift(), l.length) {
                    for (p = m[k] = g.widget.extend({}, this.options[k]), e = 0; l.length - 1 > e; e++) {
                        p[l[e]] = p[l[e]] || {}, p = p[l[e]]
                    }
                    if (k = l.pop(), 1 === arguments.length) {
                        return void 0 === p[k] ? null : p[k]
                    }
                    p[k] = j
                } else {
                    if (1 === arguments.length) {
                        return void 0 === this.options[k] ? null : this.options[k]
                    }
                    m[k] = j
                }
            }
            return this._setOptions(m), this
        },
        _setOptions: function(i) {
            var a;
            for (a in i) {
                this._setOption(a, i[a])
            }
            return this
        },
        _setOption: function(i, a) {
            return this.options[i] = a, "disabled" === i && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!a), a && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(k, j, l) {
            var m, e = this;
            "boolean" != typeof k && (l = j, j = k, k = !1), l ? (j = m = g(j), this.bindings = this.bindings.add(j)) : (l = j, j = this.element, m = this.widget()), g.each(l, function(p, t) {
                function q() {
                    return k || e.options.disabled !== !0 && !g(this).hasClass("ui-state-disabled") ? ("string" == typeof t ? e[t] : t).apply(e, arguments) : void 0
                }
                "string" != typeof t && (q.guid = t.guid = t.guid || q.guid || g.guid++);
                var n = p.match(/^([\w:-]*)\s*(.*)$/),
                    a = n[1] + e.eventNamespace,
                    i = n[2];
                i ? m.delegate(i, a, q) : j.bind(a, q)
            })
        },
        _off: function(e, a) {
            a = (a || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(a).undelegate(a), this.bindings = g(this.bindings.not(e).get()), this.focusable = g(this.focusable.not(e).get()), this.hoverable = g(this.hoverable.not(e).get())
        },
        _delay: function(l, j) {
            function a() {
                return ("string" == typeof l ? k[l] : l).apply(k, arguments)
            }
            var k = this;
            return setTimeout(a, j || 0)
        },
        _hoverable: function(a) {
            this.hoverable = this.hoverable.add(a), this._on(a, {
                mouseenter: function(e) {
                    g(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    g(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(a) {
            this.focusable = this.focusable.add(a), this._on(a, {
                focusin: function(e) {
                    g(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    g(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(k, j, l) {
            var p, e, m = this.options[k];
            if (l = l || {}, j = g.Event(j), j.type = (k === this.widgetEventPrefix ? k : this.widgetEventPrefix + k).toLowerCase(), j.target = this.element[0], e = j.originalEvent) {
                for (p in e) {
                    p in j || (j[p] = e[p])
                }
            }
            return this.element.trigger(j, l), !(g.isFunction(m) && m.apply(this.element[0], [j].concat(l)) === !1 || j.isDefaultPrevented())
        }
    }, g.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, a) {
        g.Widget.prototype["_" + e] = function(j, m, i) {
            "string" == typeof m && (m = {
                effect: m
            });
            var l, k = m ? m === !0 || "number" == typeof m ? a : m.effect || a : e;
            m = m || {}, "number" == typeof m && (m = {
                duration: m
            }), l = !g.isEmptyObject(m), m.complete = i, m.delay && j.delay(m.delay), l && g.effects && g.effects.effect[k] ? j[e](m) : k !== e && j[k] ? j[k](m.duration, m.easing, i) : j.queue(function(n) {
                g(this)[e](), i && i.call(j[0]), n()
            })
        }
    }), g.widget;
    var b = !1;
    g(document).mouseup(function() {
            b = !1
        }), g.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var a = this;
                this.element.bind("mousedown." + this.widgetName, function(i) {
                    return a._mouseDown(i)
                }).bind("click." + this.widgetName, function(e) {
                    return !0 === g.data(e.target, a.widgetName + ".preventClickEvent") ? (g.removeData(e.target, a.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!b) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var a = this,
                        j = 1 === e.which,
                        k = "string" == typeof this.options.cancel && e.target.nodeName ? g(e.target).closest(this.options.cancel).length : !1;
                    return j && !k && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        a.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === g.data(e.target, this.widgetName + ".preventClickEvent") && g.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(i) {
                        return a._mouseMove(i)
                    }, this._mouseUpDelegate = function(i) {
                        return a._mouseUp(i)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), b = !0, !0)) : !0
                }
            },
            _mouseMove: function(a) {
                if (this._mouseMoved) {
                    if (g.ui.ie && (!document.documentMode || 9 > document.documentMode) && !a.button) {
                        return this._mouseUp(a)
                    }
                    if (!a.which) {
                        return this._mouseUp(a)
                    }
                }
                return (a.which || a.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(a), a.preventDefault()) : (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== !1, this._mouseStarted ? this._mouseDrag(a) : this._mouseUp(a)), !this._mouseStarted)
            },
            _mouseUp: function(a) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, a.target === this._mouseDownEvent.target && g.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a)), b = !1, !1
            },
            _mouseDistanceMet: function(a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }),
        function() {
            function C(n, l, a) {
                return [parseFloat(n[0]) * (j.test(n[0]) ? l / 100 : 1), parseFloat(n[1]) * (j.test(n[1]) ? a / 100 : 1)]
            }

            function v(l, a) {
                return parseInt(g.css(l, a), 10) || 0
            }

            function D(l) {
                var a = l[0];
                return 9 === a.nodeType ? {
                    width: l.width(),
                    height: l.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : g.isWindow(a) ? {
                    width: l.width(),
                    height: l.height(),
                    offset: {
                        top: l.scrollTop(),
                        left: l.scrollLeft()
                    }
                } : a.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: a.pageY,
                        left: a.pageX
                    }
                } : {
                    width: l.outerWidth(),
                    height: l.outerHeight(),
                    offset: l.offset()
                }
            }
            g.ui = g.ui || {};
            var m, A, k = Math.max,
                e = Math.abs,
                w = Math.round,
                q = /left|center|right/,
                B = /top|center|bottom/,
                y = /[\+\-]\d+(\.[\d]+)?%?/,
                z = /^\w+/,
                j = /%$/,
                x = g.fn.position;
            g.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== m) {
                            return m
                        }
                        var o, n, p = g("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            l = p.children()[0];
                        return g("body").append(p), o = l.offsetWidth, p.css("overflow", "scroll"), n = l.offsetWidth, o === n && (n = p[0].clientWidth), p.remove(), m = o - n
                    },
                    getScrollInfo: function(p) {
                        var o = p.isWindow || p.isDocument ? "" : p.element.css("overflow-x"),
                            r = p.isWindow || p.isDocument ? "" : p.element.css("overflow-y"),
                            u = "scroll" === o || "auto" === o && p.width < p.element[0].scrollWidth,
                            l = "scroll" === r || "auto" === r && p.height < p.element[0].scrollHeight;
                        return {
                            width: l ? g.position.scrollbarWidth() : 0,
                            height: u ? g.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(l) {
                        var a = g(l || window),
                            o = g.isWindow(a[0]),
                            p = !!a[0] && 9 === a[0].nodeType;
                        return {
                            element: a,
                            isWindow: o,
                            isDocument: p,
                            offset: a.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: a.scrollLeft(),
                            scrollTop: a.scrollTop(),
                            width: o || p ? a.width() : a.outerWidth(),
                            height: o || p ? a.height() : a.outerHeight()
                        }
                    }
                }, g.fn.position = function(i) {
                    if (!i || !i.of) {
                        return x.apply(this, arguments)
                    }
                    i = g.extend({}, i);
                    var a, l, s, H, t, u, G = g(i.of),
                        E = g.position.getWithinInfo(i.within),
                        F = g.position.getScrollInfo(E),
                        r = (i.collision || "flip").split(" "),
                        o = {};
                    return u = D(G), G[0].preventDefault && (i.at = "left top"), l = u.width, s = u.height, H = u.offset, t = g.extend({}, H), g.each(["my", "at"], function() {
                        var I, p, n = (i[this] || "").split(" ");
                        1 === n.length && (n = q.test(n[0]) ? n.concat(["center"]) : B.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = q.test(n[0]) ? n[0] : "center", n[1] = B.test(n[1]) ? n[1] : "center", I = y.exec(n[0]), p = y.exec(n[1]), o[this] = [I ? I[0] : 0, p ? p[0] : 0], i[this] = [z.exec(n[0])[0], z.exec(n[1])[0]]
                    }), 1 === r.length && (r[1] = r[0]), "right" === i.at[0] ? t.left += l : "center" === i.at[0] && (t.left += l / 2), "bottom" === i.at[1] ? t.top += s : "center" === i.at[1] && (t.top += s / 2), a = C(o.at, l, s), t.left += a[0], t.top += a[1], this.each(function() {
                        var T, p, R = g(this),
                            O = R.outerWidth(),
                            P = R.outerHeight(),
                            J = v(this, "marginLeft"),
                            Q = v(this, "marginTop"),
                            n = O + J + v(this, "marginRight") + F.width,
                            I = P + Q + v(this, "marginBottom") + F.height,
                            K = g.extend({}, t),
                            L = C(o.my, R.outerWidth(), R.outerHeight());
                        "right" === i.my[0] ? K.left -= O : "center" === i.my[0] && (K.left -= O / 2), "bottom" === i.my[1] ? K.top -= P : "center" === i.my[1] && (K.top -= P / 2), K.left += L[0], K.top += L[1], A || (K.left = w(K.left), K.top = w(K.top)), T = {
                            marginLeft: J,
                            marginTop: Q
                        }, g.each(["left", "top"], function(N, M) {
                            g.ui.position[r[N]] && g.ui.position[r[N]][M](K, {
                                targetWidth: l,
                                targetHeight: s,
                                elemWidth: O,
                                elemHeight: P,
                                collisionPosition: T,
                                collisionWidth: n,
                                collisionHeight: I,
                                offset: [a[0] + L[0], a[1] + L[1]],
                                my: i.my,
                                at: i.at,
                                within: E,
                                elem: R
                            })
                        }), i.using && (p = function(W) {
                            var S = H.left - K.left,
                                N = S + l - O,
                                V = H.top - K.top,
                                M = V + s - P,
                                U = {
                                    target: {
                                        element: G,
                                        left: H.left,
                                        top: H.top,
                                        width: l,
                                        height: s
                                    },
                                    element: {
                                        element: R,
                                        left: K.left,
                                        top: K.top,
                                        width: O,
                                        height: P
                                    },
                                    horizontal: 0 > N ? "left" : S > 0 ? "right" : "center",
                                    vertical: 0 > M ? "top" : V > 0 ? "bottom" : "middle"
                                };
                            O > l && l > e(S + N) && (U.horizontal = "center"), P > s && s > e(V + M) && (U.vertical = "middle"), U.important = k(e(S), e(N)) > k(e(V), e(M)) ? "horizontal" : "vertical", i.using.call(this, W, U)
                        }), R.offset(g.extend(K, {
                            using: p
                        }))
                    })
                }, g.ui.position = {
                    fit: {
                        left: function(G, I) {
                            var E, J = I.within,
                                p = J.isWindow ? J.scrollLeft : J.offset.left,
                                H = J.width,
                                o = G.left - I.collisionPosition.marginLeft,
                                F = p - o,
                                u = o + I.collisionWidth - H - p;
                            I.collisionWidth > H ? F > 0 && 0 >= u ? (E = G.left + F + I.collisionWidth - H - p, G.left += F - E) : G.left = u > 0 && 0 >= F ? p : F > u ? p + H - I.collisionWidth : p : F > 0 ? G.left += F : u > 0 ? G.left -= u : G.left = k(G.left - o, G.left)
                        },
                        top: function(G, I) {
                            var E, J = I.within,
                                p = J.isWindow ? J.scrollTop : J.offset.top,
                                H = I.within.height,
                                o = G.top - I.collisionPosition.marginTop,
                                F = p - o,
                                u = o + I.collisionHeight - H - p;
                            I.collisionHeight > H ? F > 0 && 0 >= u ? (E = G.top + F + I.collisionHeight - H - p, G.top += F - E) : G.top = u > 0 && 0 >= F ? p : F > u ? p + H - I.collisionHeight : p : F > 0 ? G.top += F : u > 0 ? G.top -= u : G.top = k(G.top - o, G.top)
                        }
                    },
                    flip: {
                        left: function(K, P) {
                            var H, Q, F = P.within,
                                N = F.offset.left + F.scrollLeft,
                                E = F.width,
                                I = F.isWindow ? F.scrollLeft : F.offset.left,
                                G = K.left - P.collisionPosition.marginLeft,
                                O = G - I,
                                L = G + P.collisionWidth - E - I,
                                M = "left" === P.my[0] ? -P.elemWidth : "right" === P.my[0] ? P.elemWidth : 0,
                                r = "left" === P.at[0] ? P.targetWidth : "right" === P.at[0] ? -P.targetWidth : 0,
                                J = -2 * P.offset[0];
                            0 > O ? (H = K.left + M + r + J + P.collisionWidth - E - N, (0 > H || e(O) > H) && (K.left += M + r + J)) : L > 0 && (Q = K.left - P.collisionPosition.marginLeft + M + r + J - I, (Q > 0 || L > e(Q)) && (K.left += M + r + J))
                        },
                        top: function(L, Q) {
                            var I, R, F = Q.within,
                                O = F.offset.top + F.scrollTop,
                                E = F.height,
                                J = F.isWindow ? F.scrollTop : F.offset.top,
                                H = L.top - Q.collisionPosition.marginTop,
                                P = H - J,
                                M = H + Q.collisionHeight - E - J,
                                N = "top" === Q.my[1],
                                r = N ? -Q.elemHeight : "bottom" === Q.my[1] ? Q.elemHeight : 0,
                                K = "top" === Q.at[1] ? Q.targetHeight : "bottom" === Q.at[1] ? -Q.targetHeight : 0,
                                G = -2 * Q.offset[1];
                            0 > P ? (R = L.top + r + K + G + Q.collisionHeight - E - O, (0 > R || e(P) > R) && (L.top += r + K + G)) : M > 0 && (I = L.top - Q.collisionPosition.marginTop + r + K + G - J, (I > 0 || M > e(I)) && (L.top += r + K + G))
                        }
                    },
                    flipfit: {
                        left: function() {
                            g.ui.position.flip.left.apply(this, arguments), g.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            g.ui.position.flip.top.apply(this, arguments), g.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var l, a, u, G, F, E = document.getElementsByTagName("body")[0],
                        p = document.createElement("div");
                    l = document.createElement(E ? "div" : "body"), u = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, E && g.extend(u, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (F in u) {
                        l.style[F] = u[F]
                    }
                    l.appendChild(p), a = E || document.documentElement, a.insertBefore(l, a.firstChild), p.style.cssText = "position: absolute; left: 10.7432222px;", G = g(p).offset().left, A = G > 10 && 11 > G, l.innerHTML = "", a.removeChild(l)
                }()
        }(), g.ui.position
});
$(document).ready(function() {
    function d(e) {
        return e.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }
    var c = d(location.pathname);
    var b = a("html", "body");
    $("a[href*=#]").not(".NotScroll").each(function() {
        var f = d(this.pathname) || c;
        if (c == f && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, "")) {
            var e = $(this.hash),
                g = this.hash;
            if (g && e.length > 0) {
                var h = e.offset().top;
                $(this).click(function(i) {
                    i.preventDefault();
                    $(b).animate({
                        scrollTop: h
                    }, 400, function() {
                        location.hash = g
                    })
                })
            }
        }
    });

    function a(h) {
        for (var g = 0, k = arguments.length; g < k; g++) {
            var j = arguments[g],
                e = $(j);
            if (e.scrollTop() > 0) {
                return j
            } else {
                e.scrollTop(1);
                var f = e.scrollTop() > 0;
                e.scrollTop(0);
                if (f) {
                    return j
                }
            }
        }
        return []
    }
});
/*!
 * Velocity.js: Accelerated JavaScript animation.
 * @version 0.7.0
 * @docs http://velocityjs.org
 * @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
 */
! function(R, Q, P, O) {
    function N(g) {
        for (var f = -1, j = g ? g.length : 0, i = []; ++f < j;) {
            var h = g[f];
            h && i.push(h)
        }
        return i
    }

    function M(d) {
        var c = B.data(d, H);
        return null === c ? O : c
    }

    function L(b) {
        return function(a) {
            return Math.round(a * b) * (1 / b)
        }
    }

    function K(e, d) {
        var f = e;
        return C.isString(e) ? A.Easings[e] || (f = !1) : f = C.isArray(e) && 1 === e.length ? L.apply(null, e) : C.isArray(e) && 2 === e.length ? y.apply(null, e.concat([d])) : C.isArray(e) && 4 === e.length ? z.apply(null, e) : !1, f === !1 && (f = A.Easings[A.defaults.easing] ? A.defaults.easing : F), f
    }

    function J(ae) {
        if (ae) {
            for (var ad = (new Date).getTime(), ac = 0, ab = A.State.calls.length; ab > ac; ac++) {
                if (A.State.calls[ac]) {
                    var aa = A.State.calls[ac],
                        Z = aa[0],
                        Y = aa[2],
                        X = aa[3];
                    X || (X = A.State.calls[ac][3] = ad - 16);
                    for (var W = Math.min((ad - X) / Y.duration, 1), V = 0, T = Z.length; T > V; V++) {
                        var r = Z[V],
                            p = r.element;
                        if (M(p)) {
                            var o = !1;
                            Y.display && "none" !== Y.display && x.setPropertyValue(p, "display", Y.display), Y.visibility && "hidden" !== Y.visibility && x.setPropertyValue(p, "visibility", Y.visibility);
                            for (var j in r) {
                                if ("element" !== j) {
                                    var i, f = r[j],
                                        d = C.isString(f.easing) ? A.Easings[f.easing] : f.easing;
                                    if (i = 1 === W ? f.endValue : f.startValue + (f.endValue - f.startValue) * d(W), f.currentValue = i, x.Hooks.registered[j]) {
                                        var U = x.Hooks.getRoot(j),
                                            S = M(p).rootPropertyValueCache[U];
                                        S && (f.rootPropertyValue = S)
                                    }
                                    var u = x.setPropertyValue(p, j, f.currentValue + (0 === parseFloat(i) ? "" : f.unitType), f.rootPropertyValue, f.scrollData);
                                    x.Hooks.registered[j] && (M(p).rootPropertyValueCache[U] = x.Normalizations.registered[U] ? x.Normalizations.registered[U]("extract", null, u[1]) : u[1]), "transform" === u[0] && (o = !0)
                                }
                            }
                            Y.mobileHA && M(p).transformCache.translate3d === O && (M(p).transformCache.translate3d = "(0px, 0px, 0px)", o = !0), o && x.flushTransformCache(p)
                        }
                    }
                    Y.display && "none" !== Y.display && (A.State.calls[ac][2].display = !1), Y.visibility && "hidden" !== Y.visibility && (A.State.calls[ac][2].visibility = !1), Y.progress && Y.progress.call(aa[1], aa[1], W, Math.max(0, X + Y.duration - ad), X), 1 === W && I(ac)
                }
            }
        }
        A.State.isTicking && D(J)
    }

    function I(V, U) {
        if (!A.State.calls[V]) {
            return !1
        }
        for (var T = A.State.calls[V][0], S = A.State.calls[V][1], v = A.State.calls[V][2], u = A.State.calls[V][4], t = !1, s = 0, r = T.length; r > s; s++) {
            var q = T[s].element;
            if (U || v.loop || ("none" === v.display && x.setPropertyValue(q, "display", v.display), "hidden" === v.visibility && x.setPropertyValue(q, "visibility", v.visibility)), (B.queue(q)[1] === O || !/\.velocityQueueEntryFlag/i.test(B.queue(q)[1])) && M(q)) {
                M(q).isAnimating = !1, M(q).rootPropertyValueCache = {};
                var p = !1;
                B.each(M(q).transformCache, function(g, e) {
                    var h = /^scale/.test(g) ? 1 : 0;
                    new RegExp("^\\(" + h + "[^.]").test(e) && (p = !0, delete M(q).transformCache[g])
                }), v.mobileHA && (p = !0, delete M(q).transformCache.translate3d), p && x.flushTransformCache(q), x.Values.removeClass(q, ":animating")
            }
            U || !v.complete || v.loop || s !== r - 1 || v.complete.call(S, S), u && u(S), v.queue !== !1 && B.dequeue(q, v.queue)
        }
        A.State.calls[V] = !1;
        for (var f = 0, d = A.State.calls.length; d > f; f++) {
            if (A.State.calls[f] !== !1) {
                t = !0;
                break
            }
        }
        t === !1 && (A.State.isTicking = !1, delete A.State.calls, A.State.calls = [])
    }
    var H = "velocity",
        G = 400,
        F = "swing",
        E = function() {
            if (P.documentMode) {
                return P.documentMode
            }
            for (var d = 7; d > 4; d--) {
                var c = P.createElement("div");
                if (c.innerHTML = "<!--[if IE " + d + "]><span></span><![endif]-->", c.getElementsByTagName("span").length) {
                    return c = null, d
                }
            }
            return O
        }(),
        D = Q.requestAnimationFrame || function() {
            var b = 0;
            return Q.webkitRequestAnimationFrame || Q.mozRequestAnimationFrame || function(a) {
                var f, e = (new Date).getTime();
                return f = Math.max(0, 16 - (e - b)), b = e + f, setTimeout(function() {
                    a(e + f)
                }, f)
            }
        }(),
        C = {
            isString: function(b) {
                return "string" == typeof b
            },
            isArray: Array.isArray || function(b) {
                return "[object Array]" === Object.prototype.toString.call(b)
            },
            isFunction: function(b) {
                return "[object Function]" === Object.prototype.toString.call(b)
            },
            isNode: function(b) {
                return b && b.nodeType
            },
            isNodeList: function(b) {
                return "object" == typeof b && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(b)) && b.length !== O && (0 === b.length || "object" == typeof b[0] && b[0].nodeType > 0)
            },
            isWrapped: function(b) {
                return b && (b.jquery || Q.Zepto && Q.Zepto.zepto.isZ(b))
            },
            isSVG: function(b) {
                return Q.SVGElement && b instanceof SVGElement
            }
        },
        B = Q.jQuery || R.Velocity && R.Velocity.Utilities;
    if (!B) {
        throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.")
    }
    if (R.Velocity !== O && !R.Velocity.Utilities) {
        throw new Error("Velocity: Namespace is occupied.")
    }
    if (7 >= E) {
        if (Q.jQuery) {
            return void(Q.jQuery.fn.velocity = Q.jQuery.fn.animate)
        }
        throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")
    }
    if (8 === E && !Q.jQuery) {
        throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)")
    }
    var A = R.Velocity = R.velocity = {
        State: {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            isChrome: Q.chrome,
            prefixElement: P.createElement("div"),
            prefixMatches: {},
            scrollAnchor: null,
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            isTicking: !1,
            calls: []
        },
        CSS: {},
        Utilities: Q.jQuery,
        Sequences: {},
        Easings: {},
        Promise: Q.Promise,
        defaults: {
            queue: "",
            duration: G,
            easing: F,
            begin: null,
            complete: null,
            progress: null,
            display: null,
            loop: !1,
            delay: !1,
            mobileHA: !0,
            _cacheValues: !0
        },
        animate: function() {},
        mock: !1,
        version: {
            major: 0,
            minor: 7,
            patch: 0
        },
        debug: !1
    };
    Q.pageYOffset !== O ? (A.State.scrollAnchor = Q, A.State.scrollPropertyLeft = "pageXOffset", A.State.scrollPropertyTop = "pageYOffset") : (A.State.scrollAnchor = P.documentElement || P.body.parentNode || P.body, A.State.scrollPropertyLeft = "scrollLeft", A.State.scrollPropertyTop = "scrollTop");
    var z = function() {
            function g(d, c) {
                return 1 - 3 * c + 3 * d
            }

            function f(d, c) {
                return 3 * c - 6 * d
            }

            function j(b) {
                return 3 * b
            }

            function i(c, b, a) {
                return ((g(b, a) * c + f(b, a)) * c + j(b)) * c
            }

            function h(c, b, a) {
                return 3 * g(b, a) * c * c + 2 * f(b, a) * c + j(b)
            }
            return function(e, d, n, m) {
                function l(a) {
                    for (var q = a, p = 0; 8 > p; ++p) {
                        var o = h(q, e, n);
                        if (0 === o) {
                            return q
                        }
                        var c = i(q, e, n) - a;
                        q -= c / o
                    }
                    return q
                }
                if (4 !== arguments.length) {
                    return !1
                }
                for (var k = 0; 4 > k; ++k) {
                    if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k])) {
                        return !1
                    }
                }
                return e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0),
                    function(a) {
                        return e === d && n === m ? a : i(l(a), d, m)
                    }
            }
        }(),
        y = function() {
            function f(b) {
                return -b.tension * b.x - b.friction * b.v
            }

            function e(a, k, j) {
                var i = {
                    x: a.x + j.dx * k,
                    v: a.v + j.dv * k,
                    tension: a.tension,
                    friction: a.friction
                };
                return {
                    dx: i.v,
                    dv: f(i)
                }
            }

            function h(p, o) {
                var n = {
                        dx: p.v,
                        dv: f(p)
                    },
                    m = e(p, 0.5 * o, n),
                    l = e(p, 0.5 * o, m),
                    k = e(p, o, l),
                    b = 1 / 6 * (n.dx + 2 * (m.dx + l.dx) + k.dx),
                    a = 1 / 6 * (n.dv + 2 * (m.dv + l.dv) + k.dv);
                return p.x = p.x + b * o, p.v = p.v + a * o, p
            }
            return function g(v, u, t) {
                var s, r, q, p = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    o = [0],
                    n = 0,
                    d = 0.0001,
                    c = 0.016;
                for (v = parseFloat(v) || 500, u = parseFloat(u) || 20, t = t || null, p.tension = v, p.friction = u, s = null !== t, s ? (n = g(v, u), r = n / t * c) : r = c;;) {
                    if (q = h(q || p, r), o.push(1 + q.x), n += 16, !(Math.abs(q.x) > d && Math.abs(q.v) > d)) {
                        break
                    }
                }
                return s ? function(b) {
                    return o[b * (o.length - 1) | 0]
                } : n
            }
        }();
    ! function() {
        A.Easings.linear = function(c) {
            return c
        }, A.Easings.swing = function(c) {
            return 0.5 - Math.cos(c * Math.PI) / 2
        }, A.Easings.spring = function(c) {
            return 1 - Math.cos(4.5 * c * Math.PI) * Math.exp(6 * -c)
        }, A.Easings.ease = z(0.25, 0.1, 0.25, 1), A.Easings["ease-in"] = z(0.42, 0, 1, 1), A.Easings["ease-out"] = z(0, 0, 0.58, 1), A.Easings["ease-in-out"] = z(0.42, 0, 0.58, 1);
        var b = {};
        B.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, d) {
            b[d] = function(c) {
                return Math.pow(c, a + 2)
            }
        }), B.extend(b, {
            Sine: function(c) {
                return 1 - Math.cos(c * Math.PI / 2)
            },
            Circ: function(c) {
                return 1 - Math.sqrt(1 - c * c)
            },
            Elastic: function(c) {
                return 0 === c || 1 === c ? c : -Math.pow(2, 8 * (c - 1)) * Math.sin((80 * (c - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(c) {
                return c * c * (3 * c - 2)
            },
            Bounce: function(e) {
                for (var d, f = 4; e < ((d = Math.pow(2, --f)) - 1) / 11;) {}
                return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((3 * d - 2) / 22 - e, 2)
            }
        }), B.each(b, function(d, c) {
            A.Easings["easeIn" + d] = c, A.Easings["easeOut" + d] = function(e) {
                return 1 - c(1 - e)
            }, A.Easings["easeInOut" + d] = function(e) {
                return 0.5 > e ? c(2 * e) / 2 : 1 - c(-2 * e + 2) / 2
            }
        })
    }();
    var x = A.CSS = {
        RegEx: {
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Hooks: {
            templates: {
                color: ["Red Green Blue Alpha", "255 255 255 1"],
                backgroundColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderTopColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderRightColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderBottomColor: ["Red Green Blue Alpha", "255 255 255 1"],
                borderLeftColor: ["Red Green Blue Alpha", "255 255 255 1"],
                outlineColor: ["Red Green Blue Alpha", "255 255 255 1"],
                fill: ["Red Green Blue Alpha", "255 255 255 1"],
                stroke: ["Red Green Blue Alpha", "255 255 255 1"],
                stopColor: ["Red Green Blue Alpha", "255 255 255 1"],
                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                backgroundPosition: ["X Y", "0% 0%"],
                transformOrigin: ["X Y Z", "50% 50% 0px"],
                perspectiveOrigin: ["X Y", "50% 50%"]
            },
            registered: {},
            register: function() {
                var i, h, n;
                if (E) {
                    for (i in x.Hooks.templates) {
                        h = x.Hooks.templates[i], n = h[0].split(" ");
                        var m = h[1].match(x.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), m.push(m.shift()), x.Hooks.templates[i] = [n.join(" "), m.join(" ")])
                    }
                }
                for (i in x.Hooks.templates) {
                    h = x.Hooks.templates[i], n = h[0].split(" ");
                    for (var l in n) {
                        var k = i + n[l],
                            j = l;
                        x.Hooks.registered[k] = [i, j]
                    }
                }
            },
            getRoot: function(d) {
                var c = x.Hooks.registered[d];
                return c ? c[0] : d
            },
            cleanRootPropertyValue: function(d, c) {
                return x.RegEx.valueUnwrap.test(c) && (c = c.match(x.Hooks.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(c) && (c = x.Hooks.templates[d][1]), c
            },
            extractValue: function(g, f) {
                var j = x.Hooks.registered[g];
                if (j) {
                    var i = j[0],
                        h = j[1];
                    return f = x.Hooks.cleanRootPropertyValue(i, f), f.toString().match(x.RegEx.valueSplit)[h]
                }
                return f
            },
            injectValue: function(j, i, p) {
                var o = x.Hooks.registered[j];
                if (o) {
                    var n, m, l = o[0],
                        k = o[1];
                    return p = x.Hooks.cleanRootPropertyValue(l, p), n = p.toString().match(x.RegEx.valueSplit), n[k] = i, m = n.join(" ")
                }
                return p
            }
        },
        Normalizations: {
            registered: {
                clip: function(f, e, h) {
                    switch (f) {
                        case "name":
                            return "clip";
                        case "extract":
                            var g;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(h) ? g = h : (g = h.toString().match(x.RegEx.valueUnwrap), g = g ? g[1].replace(/,(\s+)?/g, " ") : h), g;
                        case "inject":
                            return "rect(" + h + ")"
                    }
                },
                opacity: function(f, e, h) {
                    if (8 >= E) {
                        switch (f) {
                            case "name":
                                return "filter";
                            case "extract":
                                var g = h.toString().match(/alpha\(opacity=(.*)\)/i);
                                return h = g ? g[1] / 100 : 1;
                            case "inject":
                                return e.style.zoom = 1, parseFloat(h) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(h), 10) + ")"
                        }
                    } else {
                        switch (f) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return h;
                            case "inject":
                                return h
                        }
                    }
                }
            },
            register: function() {
                function f(g) {
                    var e, m = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        h = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return g = g.replace(m, function(o, n, q, p) {
                        return n + n + q + q + p + p
                    }), e = h.exec(g), e ? "rgb(" + (parseInt(e[1], 16) + " " + parseInt(e[2], 16) + " " + parseInt(e[3], 16)) + ")" : "rgb(0 0 0)"
                }
                var d = ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"];
                9 >= E || A.State.isGingerbread || (d = d.concat(["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]));
                for (var l = 0, k = d.length; k > l; l++) {
                    ! function() {
                        var b = d[l];
                        x.Normalizations.registered[b] = function(a, n, m) {
                            switch (a) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return M(n).transformCache[b] === O ? /^scale/i.test(b) ? 1 : 0 : M(n).transformCache[b].replace(/[()]/g, "");
                                case "inject":
                                    var h = !1;
                                    switch (b.substr(0, b.length - 1)) {
                                        case "translate":
                                            h = !/(%|px|em|rem|\d)$/i.test(m);
                                            break;
                                        case "scal":
                                        case "scale":
                                            A.State.isAndroid && M(n).transformCache[b] === O && (m = 1), h = !/(\d)$/i.test(m);
                                            break;
                                        case "skew":
                                            h = !/(deg|\d)$/i.test(m);
                                            break;
                                        case "rotate":
                                            h = !/(deg|\d)$/i.test(m)
                                    }
                                    return h || (M(n).transformCache[b] = "(" + m + ")"), M(n).transformCache[b]
                            }
                        }
                    }()
                }
                for (var j = ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], l = 0, i = j.length; i > l; l++) {
                    ! function() {
                        var a = j[l];
                        x.Normalizations.registered[a] = function(q, p, o) {
                            switch (q) {
                                case "name":
                                    return a;
                                case "extract":
                                    var n;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) {
                                        n = o
                                    } else {
                                        var m, b = {
                                            aqua: "rgb(0, 255, 255);",
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            fuchsia: "rgb(255, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            lime: "rgb(0, 255, 0)",
                                            maroon: "rgb(128, 0, 0)",
                                            navy: "rgb(0, 0, 128)",
                                            olive: "rgb(128, 128, 0)",
                                            purple: "rgb(128, 0, 128)",
                                            red: "rgb(255, 0, 0)",
                                            silver: "rgb(192, 192, 192)",
                                            teal: "rgb(0, 128, 128)",
                                            white: "rgb(255, 255, 255)",
                                            yellow: "rgb(255, 255, 0)"
                                        };
                                        /^[A-z]+$/i.test(o) ? m = b[o] !== O ? b[o] : b.black : /^#([A-f\d]{3}){1,2}$/i.test(o) ? m = f(o) : /^rgba?\(/i.test(o) || (m = b.black), n = (m || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= E || 3 !== n.split(" ").length || (n += " 1"), n;
                                case "inject":
                                    return 8 >= E ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= E ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            }
        },
        Names: {
            camelCase: function(b) {
                return b.replace(/-(\w)/g, function(d, c) {
                    return c.toUpperCase()
                })
            },
            SVGAttribute: function(d) {
                var c = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y1";
                return (E || A.State.isAndroid && !A.State.isChrome) && (c += "|transform"), new RegExp("^(" + c + ")$", "i").test(d)
            },
            prefixCheck: function(g) {
                if (A.State.prefixMatches[g]) {
                    return [A.State.prefixMatches[g], !0]
                }
                for (var f = ["", "Webkit", "Moz", "ms", "O"], j = 0, i = f.length; i > j; j++) {
                    var h;
                    if (h = 0 === j ? g : f[j] + g.replace(/^\w/, function(b) {
                            return b.toUpperCase()
                        }), C.isString(A.State.prefixElement.style[h])) {
                        return A.State.prefixMatches[g] = h, [h, !0]
                    }
                }
                return [g, !1]
            }
        },
        Values: {
            isCSSNullValue: function(b) {
                return 0 == b || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(b)
            },
            getUnitType: function(b) {
                return /^(rotate|skew)/i.test(b) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(b) ? "" : "px"
            },
            getDisplayType: function(d) {
                var c = d.tagName.toString().toLowerCase();
                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(c) ? "inline" : /^(li)$/i.test(c) ? "list-item" : /^(tr)$/i.test(c) ? "table-row" : "block"
            },
            addClass: function(d, c) {
                d.classList ? d.classList.add(c) : d.className += (d.className.length ? " " : "") + c
            },
            removeClass: function(d, c) {
                d.classList ? d.classList.remove(c) : d.className = d.className.replace(new RegExp("(^|\\s)" + c.split(" ").join("|") + "(\\s|$)", "gi"), " ")
            }
        },
        getPropertyValue: function(t, s, r, q) {
            function p(W, V) {
                function U() {
                    S && x.setPropertyValue(W, "display", "none")
                }
                var T = 0;
                if (8 >= E) {
                    T = B.css(W, V)
                } else {
                    var S = !1;
                    if (/^(width|height)$/.test(V) && 0 === x.getPropertyValue(W, "display") && (S = !0, x.setPropertyValue(W, "display", x.Values.getDisplayType(W))), !q) {
                        if ("height" === V && "border-box" !== x.getPropertyValue(W, "boxSizing").toString().toLowerCase()) {
                            var v = W.offsetHeight - (parseFloat(x.getPropertyValue(W, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(W, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(W, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(W, "paddingBottom")) || 0);
                            return U(), v
                        }
                        if ("width" === V && "border-box" !== x.getPropertyValue(W, "boxSizing").toString().toLowerCase()) {
                            var u = W.offsetWidth - (parseFloat(x.getPropertyValue(W, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(W, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(W, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(W, "paddingRight")) || 0);
                            return U(), u
                        }
                    }
                    var h;
                    h = M(W) === O ? Q.getComputedStyle(W, null) : M(W).computedStyle ? M(W).computedStyle : M(W).computedStyle = Q.getComputedStyle(W, null), E && "borderColor" === V && (V = "borderTopColor"), T = 9 === E && "filter" === V ? h.getPropertyValue(V) : h[V], ("" === T || null === T) && (T = W.style[V]), U()
                }
                if ("auto" === T && /^(top|right|bottom|left)$/i.test(V)) {
                    var g = p(W, "position");
                    ("fixed" === g || "absolute" === g && /top|left/i.test(V)) && (T = B(W).position()[V] + "px")
                }
                return T
            }
            var o;
            if (x.Hooks.registered[s]) {
                var n = s,
                    f = x.Hooks.getRoot(n);
                r === O && (r = x.getPropertyValue(t, x.Names.prefixCheck(f)[0])), x.Normalizations.registered[f] && (r = x.Normalizations.registered[f]("extract", t, r)), o = x.Hooks.extractValue(n, r)
            } else {
                if (x.Normalizations.registered[s]) {
                    var d, b;
                    d = x.Normalizations.registered[s]("name", t), "transform" !== d && (b = p(t, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(b) && x.Hooks.templates[s] && (b = x.Hooks.templates[s][1])), o = x.Normalizations.registered[s]("extract", t, b)
                }
            }
            return /^[\d-]/.test(o) || (o = M(t) && M(t).isSVG && x.Names.SVGAttribute(s) ? /^(height|width)$/i.test(s) ? t.getBBox()[s] : t.getAttribute(s) : p(t, x.Names.prefixCheck(s)[0])), x.Values.isCSSNullValue(o) && (o = 0), A.debug >= 2 && console.log("Get " + s + ": " + o), o
        },
        setPropertyValue: function(r, q, p, o, n) {
            var m = q;
            if ("scroll" === q) {
                n.container ? n.container["scroll" + n.direction] = p : "Left" === n.direction ? Q.scrollTo(p, n.alternateValue) : Q.scrollTo(n.alternateValue, p)
            } else {
                if (x.Normalizations.registered[q] && "transform" === x.Normalizations.registered[q]("name", r)) {
                    x.Normalizations.registered[q]("inject", r, p), m = "transform", p = M(r).transformCache[q]
                } else {
                    if (x.Hooks.registered[q]) {
                        var l = q,
                            f = x.Hooks.getRoot(q);
                        o = o || x.getPropertyValue(r, f), p = x.Hooks.injectValue(l, p, o), q = f
                    }
                    if (x.Normalizations.registered[q] && (p = x.Normalizations.registered[q]("inject", r, p), q = x.Normalizations.registered[q]("name", r)), m = x.Names.prefixCheck(q)[0], 8 >= E) {
                        try {
                            r.style[m] = p
                        } catch (b) {
                            A.debug && console.log("Browser does not support [" + p + "] for [" + m + "]")
                        }
                    } else {
                        M(r) && M(r).isSVG && x.Names.SVGAttribute(q) ? r.setAttribute(q, p) : r.style[m] = p
                    }
                    A.debug >= 2 && console.log("Set " + q + " (" + m + "): " + p)
                }
            }
            return [m, p]
        },
        flushTransformCache: function(h) {
            function f(a) {
                return parseFloat(x.getPropertyValue(h, a))
            }
            var l = "";
            if ((E || A.State.isAndroid && !A.State.isChrome) && M(h).isSVG) {
                var k = {
                    translate: [f("translateX"), f("translateY")],
                    skewX: [f("skewX")],
                    skewY: [f("skewY")],
                    scale: 1 !== f("scale") ? [f("scale"), f("scale")] : [f("scaleX"), f("scaleY")],
                    rotate: [f("rotateZ"), 0, 0]
                };
                B.each(M(h).transformCache, function(b) {
                    /^translate/i.test(b) ? b = "translate" : /^scale/i.test(b) ? b = "scale" : /^rotate/i.test(b) && (b = "rotate"), k[b] && (l += b + "(" + k[b].join(" ") + ") ", delete k[b])
                })
            } else {
                var j, i;
                B.each(M(h).transformCache, function(a) {
                    return j = M(h).transformCache[a], "transformPerspective" === a ? (i = j, !0) : (9 === E && "rotateZ" === a && (a = "rotate"), void(l += a + j + " "))
                }), i && (l = "perspective" + i + " " + l)
            }
            x.setPropertyValue(h, "transform", l)
        }
    };
    x.Hooks.register(), x.Normalizations.register(), A.animate = function() {
        function ab() {
            return Z ? V.promise || null : Y
        }

        function aa() {
            function o() {
                function ax(ay) {
                    var aB = O,
                        aA = O,
                        az = O;
                    return C.isArray(ay) ? (aB = ay[0], !C.isArray(ay[1]) && /^[\d-]/.test(ay[1]) || C.isFunction(ay[1]) ? az = ay[1] : (C.isString(ay[1]) || C.isArray(ay[1])) && (aA = K(ay[1], t.duration), ay[2] !== O && (az = ay[2]))) : aB = ay, aA = aA || t.easing, C.isFunction(aB) && (aB = aB.call(m, h, j)), C.isFunction(az) && (az = az.call(m, h, j)), [aB || 0, aA, az]
                }

                function aw(az, ay) {
                    var aB, aA;
                    return aA = (ay || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(aC) {
                        return aB = aC, ""
                    }), aB || (aB = x.Values.getUnitType(az)), [aA, aB]
                }

                function av() {
                    var aG = {
                            parent: m.parentNode,
                            position: x.getPropertyValue(m, "position"),
                            fontSize: x.getPropertyValue(m, "fontSize")
                        },
                        aF = aG.position === n.lastPosition && aG.parent === n.lastParent,
                        aE = aG.fontSize === n.lastFontSize && aG.parent === n.lastParent;
                    n.lastParent = aG.parent, n.lastPosition = aG.position, n.lastFontSize = aG.fontSize, null === n.remToPxRatio && (n.remToPxRatio = parseFloat(x.getPropertyValue(P.body, "fontSize")) || 16);
                    var aD = {
                            overflowX: null,
                            overflowY: null,
                            boxSizing: null,
                            width: null,
                            minWidth: null,
                            maxWidth: null,
                            height: null,
                            minHeight: null,
                            maxHeight: null,
                            paddingLeft: null
                        },
                        aC = {},
                        aB = 10;
                    if (aC.remToPxRatio = n.remToPxRatio, E && !M(m).isSVG) {
                        var aA = /^auto$/i.test(m.currentStyle.width),
                            az = /^auto$/i.test(m.currentStyle.height)
                    }
                    aF && aE || (M(m).isSVG || (aD.overflowX = x.getPropertyValue(m, "overflowX"), aD.overflowY = x.getPropertyValue(m, "overflowY"), aD.boxSizing = x.getPropertyValue(m, "boxSizing"), aD.minWidth = x.getPropertyValue(m, "minWidth"), aD.maxWidth = x.getPropertyValue(m, "maxWidth") || "none", aD.minHeight = x.getPropertyValue(m, "minHeight"), aD.maxHeight = x.getPropertyValue(m, "maxHeight") || "none", aD.paddingLeft = x.getPropertyValue(m, "paddingLeft")), aD.width = x.getPropertyValue(m, "width", null, !0), aD.height = x.getPropertyValue(m, "height", null, !0)), aF ? (aC.percentToPxRatioWidth = n.lastPercentToPxWidth, aC.percentToPxRatioHeight = n.lastPercentToPxHeight) : (M(m).isSVG || (x.setPropertyValue(m, "overflowX", "hidden"), x.setPropertyValue(m, "overflowY", "hidden"), x.setPropertyValue(m, "boxSizing", "content-box"), x.setPropertyValue(m, "minWidth", aB + "%"), x.setPropertyValue(m, "maxWidth", aB + "%"), x.setPropertyValue(m, "minHeight", aB + "%"), x.setPropertyValue(m, "maxHeight", aB + "%")), x.setPropertyValue(m, "width", aB + "%"), x.setPropertyValue(m, "height", aB + "%")), aE ? aC.emToPxRatio = n.lastEmToPx : M(m).isSVG || x.setPropertyValue(m, "paddingLeft", aB + "em"), aF || (aC.percentToPxRatioWidth = n.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(m, "width", null, !0)) || 1) / aB, aC.percentToPxRatioHeight = n.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(m, "height", null, !0)) || 1) / aB), aE || (aC.emToPxRatio = n.lastEmToPx = (parseFloat(x.getPropertyValue(m, "paddingLeft")) || 1) / aB);
                    for (var ay in aD) {
                        null !== aD[ay] && x.setPropertyValue(m, ay, aD[ay])
                    }
                    return M(m).isSVG || (E ? (aA && x.setPropertyValue(m, "width", "auto"), az && x.setPropertyValue(m, "height", "auto")) : (x.setPropertyValue(m, "height", "auto"), aD.height !== x.getPropertyValue(m, "height", null, !0) && x.setPropertyValue(m, "height", aD.height), x.setPropertyValue(m, "width", "auto"), aD.width !== x.getPropertyValue(m, "width", null, !0) && x.setPropertyValue(m, "width", aD.width))), A.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(aC), m), aC
                }
                if (t.begin && 0 === h && t.begin.call(S, S), "scroll" === U) {
                    var au, at, an, ak = /^x$/i.test(t.axis) ? "Left" : "Top",
                        ar = parseFloat(t.offset) || 0;
                    t.container ? t.container.jquery || C.isNode(t.container) ? (t.container = t.container[0] || t.container, au = t.container["scroll" + ak], an = au + B(m).position()[ak.toLowerCase()] + ar) : t.container = null : (au = A.State.scrollAnchor[A.State["scrollProperty" + ak]], at = A.State.scrollAnchor[A.State["scrollProperty" + ("Left" === ak ? "Top" : "Left")]], an = B(m).offset()[ak.toLowerCase()] + ar), s = {
                        scroll: {
                            rootPropertyValue: !1,
                            startValue: au,
                            currentValue: au,
                            endValue: an,
                            unitType: "",
                            easing: t.easing,
                            scrollData: {
                                container: t.container,
                                direction: ak,
                                alternateValue: at
                            }
                        },
                        element: m
                    }
                } else {
                    if ("reverse" === U) {
                        if (!M(m).tweensContainer) {
                            return void B.dequeue(m, t.queue)
                        }
                        "none" === M(m).opts.display && (M(m).opts.display = "block"), "hidden" === M(m).opts.visibility && (M(m).opts.visibility = "visible"), M(m).opts.loop = !1, M(m).opts.begin = null, M(m).opts.complete = null, p.easing || delete t.easing, p.duration || delete t.duration, t = B.extend({}, M(m).opts, t);
                        var aq = B.extend(!0, {}, M(m).tweensContainer);
                        for (var ap in aq) {
                            if ("element" !== ap) {
                                var ao = aq[ap].startValue;
                                aq[ap].startValue = aq[ap].currentValue = aq[ap].endValue, aq[ap].endValue = ao, p && (aq[ap].easing = t.easing)
                            }
                        }
                        s = aq
                    } else {
                        if ("start" === U) {
                            var aq;
                            M(m).tweensContainer && M(m).isAnimating === !0 && (aq = M(m).tweensContainer);
                            for (var am in u) {
                                var al = ax(u[am]),
                                    aj = al[0],
                                    ai = al[1],
                                    ah = al[2];
                                am = x.Names.camelCase(am);
                                var ag = x.Hooks.getRoot(am),
                                    af = !1;
                                if (M(m).isSVG || x.Names.prefixCheck(ag)[1] !== !1 || x.Normalizations.registered[ag] !== O) {
                                    (t.display && "none" !== t.display || t.visibility && "hidden" !== t.visibility) && /opacity|filter/.test(am) && !ah && 0 !== aj && (ah = 0), t._cacheValues && aq && aq[am] ? (ah === O && (ah = aq[am].endValue + aq[am].unitType), af = M(m).rootPropertyValueCache[ag]) : x.Hooks.registered[am] ? ah === O ? (af = x.getPropertyValue(m, ag), ah = x.getPropertyValue(m, am, af)) : af = x.Hooks.templates[ag][1] : ah === O && (ah = x.getPropertyValue(m, am));
                                    var ae, ad, ac, v;
                                    ae = aw(am, ah), ah = ae[0], ac = ae[1], ae = aw(am, aj), aj = ae[0].replace(/^([+-\/*])=/, function(az, ay) {
                                        return v = ay, ""
                                    }), ad = ae[1], ah = parseFloat(ah) || 0, aj = parseFloat(aj) || 0;
                                    var g;
                                    if ("%" === ad && (/^(fontSize|lineHeight)$/.test(am) ? (aj /= 100, ad = "em") : /^scale/.test(am) ? (aj /= 100, ad = "") : /(Red|Green|Blue)$/i.test(am) && (aj = aj / 100 * 255, ad = "")), /[\/*]/.test(v)) {
                                        ad = ac
                                    } else {
                                        if (ac !== ad && 0 !== ah) {
                                            if (0 === aj) {
                                                ad = ac
                                            } else {
                                                g = g || av();
                                                var b = /margin|padding|left|right|width|text|word|letter/i.test(am) || /X$/.test(am) ? "x" : "y";
                                                switch (ac) {
                                                    case "%":
                                                        ah *= "x" === b ? g.percentToPxRatioWidth : g.percentToPxRatioHeight;
                                                        break;
                                                    case "em":
                                                        ah *= g.emToPxRatio;
                                                        break;
                                                    case "rem":
                                                        ah *= g.remToPxRatio;
                                                        break;
                                                    case "px":
                                                }
                                                switch (ad) {
                                                    case "%":
                                                        ah *= 1 / ("x" === b ? g.percentToPxRatioWidth : g.percentToPxRatioHeight);
                                                        break;
                                                    case "em":
                                                        ah *= 1 / g.emToPxRatio;
                                                        break;
                                                    case "rem":
                                                        ah *= 1 / g.remToPxRatio;
                                                        break;
                                                    case "px":
                                                }
                                            }
                                        }
                                    }
                                    switch (v) {
                                        case "+":
                                            aj = ah + aj;
                                            break;
                                        case "-":
                                            aj = ah - aj;
                                            break;
                                        case "*":
                                            aj = ah * aj;
                                            break;
                                        case "/":
                                            aj = ah / aj
                                    }
                                    s[am] = {
                                        rootPropertyValue: af,
                                        startValue: ah,
                                        currentValue: ah,
                                        endValue: aj,
                                        unitType: ad,
                                        easing: ai
                                    }, A.debug && console.log("tweensContainer (" + am + "): " + JSON.stringify(s[am]), m)
                                } else {
                                    A.debug && console.log("Skipping [" + ag + "] due to a lack of browser support.")
                                }
                            }
                            s.element = m
                        }
                    }
                }
                s.element && (x.Values.addClass(m, ":animating"), k.push(s), M(m).tweensContainer = s, M(m).opts = t, M(m).isAnimating = !0, h === j - 1 ? (A.State.calls.length > 10000 && (A.State.calls = N(A.State.calls)), A.State.calls.push([k, S, t, null, V.resolver]), A.State.isTicking === !1 && (A.State.isTicking = !0, J())) : h++)
            }
            var m = this,
                t = B.extend({}, A.defaults, p),
                s = {};
            if (M(m) === O && B.data(m, H, {
                    isSVG: C.isSVG(m),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                }), parseFloat(t.delay) && t.queue !== !1 && B.queue(m, t.queue, function(b) {
                    A.velocityQueueEntryFlag = !0, setTimeout(b, parseFloat(t.delay))
                }), A.mock === !0) {
                t.duration = 1
            } else {
                switch (t.duration.toString().toLowerCase()) {
                    case "fast":
                        t.duration = 200;
                        break;
                    case "normal":
                        t.duration = G;
                        break;
                    case "slow":
                        t.duration = 600;
                        break;
                    default:
                        t.duration = parseFloat(t.duration) || 1
                }
            }
            t.easing = K(t.easing, t.duration), t.begin && !C.isFunction(t.begin) && (t.begin = null), t.progress && !C.isFunction(t.progress) && (t.progress = null), t.complete && !C.isFunction(t.complete) && (t.complete = null), t.display && (t.display = t.display.toString().toLowerCase(), "auto" === t.display && (t.display = A.CSS.Values.getDisplayType(m))), t.visibility && (t.visibility = t.visibility.toString().toLowerCase()), t.mobileHA = t.mobileHA && A.State.isMobile && !A.State.isGingerbread, t.queue === !1 ? t.delay ? setTimeout(o, t.delay) : o() : B.queue(m, t.queue, function(a) {
                return "clearQueue" === a ? (V.promise && V.resolver(S), !0) : (A.velocityQueueEntryFlag = !0, void o(a))
            }), "" !== t.queue && "fx" !== t.queue || "inprogress" === B.queue(m)[0] || B.dequeue(m)
        }
        var Z, Y, X, S, u, p, l = arguments[0] && (B.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || C.isString(arguments[0].properties));
        if (C.isWrapped(this) ? (Z = !1, X = 0, S = this, Y = this) : (Z = !0, X = 1, S = l ? arguments[0].elements : arguments[0]), S = C.isWrapped(S) ? [].slice.call(S) : S) {
            l ? (u = arguments[0].properties, p = arguments[0].options) : (u = arguments[X], p = arguments[X + 1]);
            var j = C.isArray(S) || C.isNodeList(S) ? S.length : 1,
                h = 0;
            if ("stop" !== u && !B.isPlainObject(p)) {
                var e = X + 1;
                p = {};
                for (var W = e; W < arguments.length; W++) {
                    !C.isArray(arguments[W]) && /^\d/.test(arguments[W]) ? p.duration = parseFloat(arguments[W]) : C.isString(arguments[W]) || C.isArray(arguments[W]) ? p.easing = arguments[W] : C.isFunction(arguments[W]) && (p.complete = arguments[W])
                }
            }
            var V = {
                promise: null,
                resolver: null,
                rejecter: null
            };
            Z && A.Promise && (V.promise = new A.Promise(function(m, g) {
                V.resolver = m, V.rejecter = g
            }));
            var U;
            switch (u) {
                case "scroll":
                    U = "scroll";
                    break;
                case "reverse":
                    U = "reverse";
                    break;
                case "stop":
                    var T = [];
                    return B.each(A.State.calls, function(m, g) {
                        g !== !1 && B.each(C.isNode(g[1]) ? [g[1]] : g[1], function(a, o) {
                            B.each(C.isNode(S) ? [S] : S, function(s, v) {
                                if (v === o) {
                                    if (M(v) && B.each(M(v).tweensContainer, function(ad, ac) {
                                            ac.endValue = ac.currentValue
                                        }), p === !0 || C.isString(p)) {
                                        var t = C.isString(p) ? p : "";
                                        B.each(B.queue(v, t), function(ad, ac) {
                                            C.isFunction(ac) && ac("clearQueue")
                                        }), B.queue(v, t, [])
                                    }
                                    T.push(m)
                                }
                            })
                        })
                    }), B.each(T, function(m, g) {
                        I(g, !0)
                    }), V.promise && V.resolver(S), ab();
                default:
                    if (!B.isPlainObject(u) || B.isEmptyObject(u)) {
                        if (C.isString(u) && A.Sequences[u]) {
                            var r = p.duration;
                            return p.backwards === !0 && (S = (S.jquery ? [].slice.call(S) : S).reverse()), B.each(S, function(m, g) {
                                parseFloat(p.stagger) ? p.delay = parseFloat(p.stagger) * m : C.isFunction(p.stagger) && (p.delay = p.stagger.call(g, m, j)), p.drag && (p.duration = parseFloat(r) || (/^(callout|transition)/.test(u) ? 1000 : G), p.duration = Math.max(p.duration * (p.backwards ? 1 - m / j : (m + 1) / j), 0.75 * p.duration, 200)), A.Sequences[u].call(g, g, p || {}, m, j, S, V.promise ? V : O)
                            }), ab()
                        }
                        var q = "Velocity: First argument (" + u + ") was not a property map, a known action, or a registered sequence. Aborting.";
                        return V.promise ? V.rejecter(new Error(q)) : console.log(q), ab()
                    }
                    U = "start"
            }
            var n = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPxRatio: null
                },
                k = [];
            B.each(C.isNode(S) ? [S] : S, function(b, g) {
                C.isNode(g) && aa.call(g)
            });
            var i, f = B.extend({}, A.defaults, p);
            if (f.loop = parseInt(f.loop), i = 2 * f.loop - 1, f.loop) {
                for (var d = 0; i > d; d++) {
                    var c = {
                        delay: f.delay
                    };
                    f.complete && d === i - 1 && (c.complete = f.complete), A.animate(S, "reverse", c)
                }
            }
            return ab()
        }
    };
    var w = Q.jQuery || Q.Zepto;
    w && (w.fn.velocity = A.animate, w.fn.velocity.defaults = A.defaults), "undefined" != typeof define && define.amd ? define(function() {
        return A
    }) : "undefined" != typeof module && module.exports && (module.exports = A), B.each(["Down", "Up"], function(d, c) {
        A.Sequences["slide" + c] = function(b, n) {
            var m = B.extend({}, n),
                l = {
                    height: null,
                    marginTop: null,
                    marginBottom: null,
                    paddingTop: null,
                    paddingBottom: null,
                    overflow: null,
                    overflowX: null,
                    overflowY: null
                },
                k = m.begin,
                j = m.complete,
                i = !1;
            null !== m.display && (m.display = "Down" === c ? m.display || "auto" : m.display || "none"), m.begin = function() {
                function f() {
                    l.height = parseFloat(A.CSS.getPropertyValue(b, "height")), b.style.height = "auto", A.CSS.getPropertyValue(b, "height") === l.height && (i = !0), A.CSS.setPropertyValue(b, "height", l.height + "px")
                }
                if ("Down" === c) {
                    l.overflow = [A.CSS.getPropertyValue(b, "overflow"), 0], l.overflowX = [A.CSS.getPropertyValue(b, "overflowX"), 0], l.overflowY = [A.CSS.getPropertyValue(b, "overflowY"), 0], b.style.overflow = "hidden", b.style.overflowX = "visible", b.style.overflowY = "hidden", f();
                    for (var e in l) {
                        if (!/^overflow/.test(e)) {
                            var a = A.CSS.getPropertyValue(b, e);
                            "height" === e && (a = parseFloat(a)), l[e] = [a, 0]
                        }
                    }
                } else {
                    f();
                    for (var e in l) {
                        var a = A.CSS.getPropertyValue(b, e);
                        "height" === e && (a = parseFloat(a)), l[e] = [0, a]
                    }
                    b.style.overflow = "hidden", b.style.overflowX = "visible", b.style.overflowY = "hidden"
                }
                k && k.call(b, b)
            }, m.complete = function(e) {
                var g = "Down" === c ? 0 : 1;
                i === !0 ? l.height[g] = "auto" : l.height[g] += "px";
                for (var f in l) {
                    e.style[f] = l[f][g]
                }
                j && j.call(e, e)
            }, A.animate(b, l, m)
        }
    }), B.each(["In", "Out"], function(d, c) {
        A.Sequences["fade" + c] = function(b, l, k, j) {
            var i = B.extend({}, l),
                h = {
                    opacity: "In" === c ? 1 : 0
                };
            k !== j - 1 && (i.complete = i.begin = null), null !== i.display && (i.display = i.display || ("In" === c ? "auto" : "none")), A.animate(this, h, i)
        }
    })
}(window.jQuery || window.Zepto || window, window, document);
var swfobject = function() {
    var aq = "undefined",
        aD = "object",
        ab = "Shockwave Flash",
        X = "ShockwaveFlash.ShockwaveFlash",
        aE = "application/x-shockwave-flash",
        ac = "SWFObjectExprInst",
        ax = "onreadystatechange",
        af = window,
        aL = document,
        aB = navigator,
        aa = false,
        Z = [aN],
        aG = [],
        ag = [],
        al = [],
        aJ, ad, ap, at, ak = false,
        aU = false,
        aH, an, aI = true,
        ah = function() {
            var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq,
                e = aB.userAgent.toLowerCase(),
                c = aB.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(e),
                j = c ? /mac/.test(c) : /mac/.test(e),
                g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                d = !+"\v1",
                f = [0, 0, 0],
                k = null;
            if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
                k = aB.plugins[ab].description;
                if (k && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                    aa = true;
                    d = false;
                    k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10);
                    f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof af.ActiveXObject != aq) {
                    try {
                        var i = new ActiveXObject(X);
                        if (i) {
                            k = i.GetVariable("$version");
                            if (k) {
                                d = true;
                                k = k.split(" ")[1].split(",");
                                f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)]
                            }
                        }
                    } catch (b) {}
                }
            }
            return {
                w3: a,
                pv: f,
                wk: g,
                ie: d,
                win: h,
                mac: j
            }
        }(),
        aK = function() {
            if (!ah.w3) {
                return
            }
            if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
                aP()
            }
            if (!ak) {
                if (typeof aL.addEventListener != aq) {
                    aL.addEventListener("DOMContentLoaded", aP, false)
                }
                if (ah.ie && ah.win) {
                    aL.attachEvent(ax, function() {
                        if (aL.readyState == "complete") {
                            aL.detachEvent(ax, arguments.callee);
                            aP()
                        }
                    });
                    if (af == top) {
                        (function() {
                            if (ak) {
                                return
                            }
                            try {
                                aL.documentElement.doScroll("left")
                            } catch (a) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            aP()
                        })()
                    }
                }
                if (ah.wk) {
                    (function() {
                        if (ak) {
                            return
                        }
                        if (!/loaded|complete/.test(aL.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        aP()
                    })()
                }
                aC(aP)
            }
        }();

    function aP() {
        if (ak) {
            return
        }
        try {
            var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            b.parentNode.removeChild(b)
        } catch (a) {
            return
        }
        ak = true;
        var d = Z.length;
        for (var c = 0; c < d; c++) {
            Z[c]()
        }
    }

    function aj(a) {
        if (ak) {
            a()
        } else {
            Z[Z.length] = a
        }
    }

    function aC(a) {
        if (typeof af.addEventListener != aq) {
            af.addEventListener("load", a, false)
        } else {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("load", a, false)
            } else {
                if (typeof af.attachEvent != aq) {
                    aM(af, "onload", a)
                } else {
                    if (typeof af.onload == "function") {
                        var b = af.onload;
                        af.onload = function() {
                            b();
                            a()
                        }
                    } else {
                        af.onload = a
                    }
                }
            }
        }
    }

    function aN() {
        if (aa) {
            Y()
        } else {
            am()
        }
    }

    function Y() {
        var d = aL.getElementsByTagName("body")[0];
        var b = ar(aD);
        b.setAttribute("type", aE);
        var a = d.appendChild(b);
        if (a) {
            var c = 0;
            (function() {
                if (typeof a.GetVariable != aq) {
                    var e = a.GetVariable("$version");
                    if (e) {
                        e = e.split(" ")[1].split(",");
                        ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]
                    }
                } else {
                    if (c < 10) {
                        c++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                d.removeChild(b);
                a = null;
                am()
            })()
        } else {
            am()
        }
    }

    function am() {
        var g = aG.length;
        if (g > 0) {
            for (var h = 0; h < g; h++) {
                var c = aG[h].id;
                var l = aG[h].callbackFn;
                var a = {
                    success: false,
                    id: c
                };
                if (ah.pv[0] > 0) {
                    var i = aS(c);
                    if (i) {
                        if (ao(aG[h].swfVersion) && !(ah.wk && ah.wk < 312)) {
                            ay(c, true);
                            if (l) {
                                a.success = true;
                                a.ref = av(c);
                                l(a)
                            }
                        } else {
                            if (aG[h].expressInstall && au()) {
                                var e = {};
                                e.data = aG[h].expressInstall;
                                e.width = i.getAttribute("width") || "0";
                                e.height = i.getAttribute("height") || "0";
                                if (i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class")
                                }
                                if (i.getAttribute("align")) {
                                    e.align = i.getAttribute("align")
                                }
                                var f = {};
                                var d = i.getElementsByTagName("param");
                                var k = d.length;
                                for (var j = 0; j < k; j++) {
                                    if (d[j].getAttribute("name").toLowerCase() != "movie") {
                                        f[d[j].getAttribute("name")] = d[j].getAttribute("value")
                                    }
                                }
                                ae(e, f, c, l)
                            } else {
                                aF(i);
                                if (l) {
                                    l(a)
                                }
                            }
                        }
                    }
                } else {
                    ay(c, true);
                    if (l) {
                        var b = av(c);
                        if (b && typeof b.SetVariable != aq) {
                            a.success = true;
                            a.ref = b
                        }
                        l(a)
                    }
                }
            }
        }
    }

    function av(b) {
        var d = null;
        var c = aS(b);
        if (c && c.nodeName == "OBJECT") {
            if (typeof c.SetVariable != aq) {
                d = c
            } else {
                var a = c.getElementsByTagName(aD)[0];
                if (a) {
                    d = a
                }
            }
        }
        return d
    }

    function au() {
        return !aU && ao("http://phongvanthan.com/js/6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312)
    }

    function ae(f, d, h, e) {
        aU = true;
        ap = e || null;
        at = {
            success: false,
            id: h
        };
        var a = aS(h);
        if (a) {
            if (a.nodeName == "OBJECT") {
                aJ = aO(a);
                ad = null
            } else {
                aJ = a;
                ad = h
            }
            f.id = ac;
            if (typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
                f.width = "310"
            }
            if (typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
                f.height = "137"
            }
            aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
            var b = ah.ie && ah.win ? "ActiveX" : "PlugIn",
                c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
            if (typeof d.flashvars != aq) {
                d.flashvars += "&" + c
            } else {
                d.flashvars = c
            }
            if (ah.ie && ah.win && a.readyState != 4) {
                var g = ar("div");
                h += "SWFObjectNew";
                g.setAttribute("id", h);
                a.parentNode.insertBefore(g, a);
                a.style.display = "none";
                (function() {
                    if (a.readyState == 4) {
                        a.parentNode.removeChild(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            aA(f, d, h)
        }
    }

    function aF(a) {
        if (ah.ie && ah.win && a.readyState != 4) {
            var b = ar("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(aO(a), b);
            a.style.display = "none";
            (function() {
                if (a.readyState == 4) {
                    a.parentNode.removeChild(a)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            a.parentNode.replaceChild(aO(a), a)
        }
    }

    function aO(b) {
        var d = ar("div");
        if (ah.win && ah.ie) {
            d.innerHTML = b.innerHTML
        } else {
            var e = b.getElementsByTagName(aD)[0];
            if (e) {
                var a = e.childNodes;
                if (a) {
                    var f = a.length;
                    for (var c = 0; c < f; c++) {
                        if (!(a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
                            d.appendChild(a[c].cloneNode(true))
                        }
                    }
                }
            }
        }
        return d
    }

    function aA(e, g, c) {
        var d, a = aS(c);
        if (ah.wk && ah.wk < 312) {
            return d
        }
        if (a) {
            if (typeof e.id == aq) {
                e.id = c
            }
            if (ah.ie && ah.win) {
                var f = "";
                for (var i in e) {
                    if (e[i] != Object.prototype[i]) {
                        if (i.toLowerCase() == "data") {
                            g.movie = e[i]
                        } else {
                            if (i.toLowerCase() == "styleclass") {
                                f += ' class="' + e[i] + '"'
                            } else {
                                if (i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"'
                                }
                            }
                        }
                    }
                }
                var h = "";
                for (var j in g) {
                    if (g[j] != Object.prototype[j]) {
                        h += '<param name="' + j + '" value="' + g[j] + '" />'
                    }
                }
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
                ag[ag.length] = e.id;
                d = aS(e.id)
            } else {
                var b = ar(aD);
                b.setAttribute("type", aE);
                for (var k in e) {
                    if (e[k] != Object.prototype[k]) {
                        if (k.toLowerCase() == "styleclass") {
                            b.setAttribute("class", e[k])
                        } else {
                            if (k.toLowerCase() != "classid") {
                                b.setAttribute(k, e[k])
                            }
                        }
                    }
                }
                for (var l in g) {
                    if (g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {
                        aQ(b, l, g[l])
                    }
                }
                a.parentNode.replaceChild(b, a);
                d = b
            }
        }
        return d
    }

    function aQ(b, d, c) {
        var a = ar("param");
        a.setAttribute("name", d);
        a.setAttribute("value", c);
        b.appendChild(a)
    }

    function aw(a) {
        var b = aS(a);
        if (b && b.nodeName == "OBJECT") {
            if (ah.ie && ah.win) {
                b.style.display = "none";
                (function() {
                    if (b.readyState == 4) {
                        aT(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                b.parentNode.removeChild(b)
            }
        }
    }

    function aT(a) {
        var b = aS(a);
        if (b) {
            for (var c in b) {
                if (typeof b[c] == "function") {
                    b[c] = null
                }
            }
            b.parentNode.removeChild(b)
        }
    }

    function aS(a) {
        var c = null;
        try {
            c = aL.getElementById(a)
        } catch (b) {}
        return c
    }

    function ar(a) {
        return aL.createElement(a)
    }

    function aM(a, c, b) {
        a.attachEvent(c, b);
        al[al.length] = [a, c, b]
    }

    function ao(a) {
        var b = ah.pv,
            c = a.split(".");
        c[0] = parseInt(c[0], 10);
        c[1] = parseInt(c[1], 10) || 0;
        c[2] = parseInt(c[2], 10) || 0;
        return (b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true : false
    }

    function az(b, f, a, c) {
        if (ah.ie && ah.mac) {
            return
        }
        var e = aL.getElementsByTagName("head")[0];
        if (!e) {
            return
        }
        var g = (a && typeof a == "string") ? a : "screen";
        if (c) {
            aH = null;
            an = null
        }
        if (!aH || an != g) {
            var d = ar("style");
            d.setAttribute("type", "text/css");
            d.setAttribute("media", g);
            aH = e.appendChild(d);
            if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1]
            }
            an = g
        }
        if (ah.ie && ah.win) {
            if (aH && typeof aH.addRule == aD) {
                aH.addRule(b, f)
            }
        } else {
            if (aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(b + " {" + f + "}"))
            }
        }
    }

    function ay(a, c) {
        if (!aI) {
            return
        }
        var b = c ? "visible" : "hidden";
        if (ak && aS(a)) {
            aS(a).style.visibility = b
        } else {
            az("#" + a, "visibility:" + b)
        }
    }

    function ai(b) {
        var a = /[\\\"<>\.;]/;
        var c = a.exec(b) != null;
        return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b
    }
    var aR = function() {
        if (ah.ie && ah.win) {
            window.attachEvent("onunload", function() {
                var a = al.length;
                for (var b = 0; b < a; b++) {
                    al[b][0].detachEvent(al[b][1], al[b][2])
                }
                var d = ag.length;
                for (var c = 0; c < d; c++) {
                    aw(ag[c])
                }
                for (var e in ah) {
                    ah[e] = null
                }
                ah = null;
                for (var f in swfobject) {
                    swfobject[f] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(a, e, c, b) {
            if (ah.w3 && a && e) {
                var d = {};
                d.id = a;
                d.swfVersion = e;
                d.expressInstall = c;
                d.callbackFn = b;
                aG[aG.length] = d;
                ay(a, false)
            } else {
                if (b) {
                    b({
                        success: false,
                        id: a
                    })
                }
            }
        },
        getObjectById: function(a) {
            if (ah.w3) {
                return av(a)
            }
        },
        embedSWF: function(k, e, h, f, c, a, b, i, g, j) {
            var d = {
                success: false,
                id: e
            };
            if (ah.w3 && !(ah.wk && ah.wk < 312) && k && e && h && f && c) {
                ay(e, false);
                aj(function() {
                    h += "";
                    f += "";
                    var q = {};
                    if (g && typeof g === aD) {
                        for (var o in g) {
                            q[o] = g[o]
                        }
                    }
                    q.data = k;
                    q.width = h;
                    q.height = f;
                    var n = {};
                    if (i && typeof i === aD) {
                        for (var p in i) {
                            n[p] = i[p]
                        }
                    }
                    if (b && typeof b === aD) {
                        for (var l in b) {
                            if (typeof n.flashvars != aq) {
                                n.flashvars += "&" + l + "=" + b[l]
                            } else {
                                n.flashvars = l + "=" + b[l]
                            }
                        }
                    }
                    if (ao(c)) {
                        var m = aA(q, n, e);
                        if (q.id == e) {
                            ay(e, true)
                        }
                        d.success = true;
                        d.ref = m
                    } else {
                        if (a && au()) {
                            q.data = a;
                            ae(q, n, e, j);
                            return
                        } else {
                            ay(e, true)
                        }
                    }
                    if (j) {
                        j(d)
                    }
                })
            } else {
                if (j) {
                    j(d)
                }
            }
        },
        switchOffAutoHideShow: function() {
            aI = false
        },
        ua: ah,
        getFlashPlayerVersion: function() {
            return {
                major: ah.pv[0],
                minor: ah.pv[1],
                release: ah.pv[2]
            }
        },
        hasFlashPlayerVersion: ao,
        createSWF: function(a, b, c) {
            if (ah.w3) {
                return aA(a, b, c)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(b, a, d, c) {
            if (ah.w3 && au()) {
                ae(b, a, d, c)
            }
        },
        removeSWF: function(a) {
            if (ah.w3) {
                aw(a)
            }
        },
        createCSS: function(b, a, c, d) {
            if (ah.w3) {
                az(b, a, c, d)
            }
        },
        addDomLoadEvent: aj,
        addLoadEvent: aC,
        getQueryParamValue: function(b) {
            var a = aL.location.search || aL.location.hash;
            if (a) {
                if (/\?/.test(a)) {
                    a = a.split("?")[1]
                }
                if (b == null) {
                    return ai(a)
                }
                var c = a.split("&");
                for (var d = 0; d < c.length; d++) {
                    if (c[d].substring(0, c[d].indexOf("=")) == b) {
                        return ai(c[d].substring((c[d].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (aU) {
                var a = aS(ac);
                if (a && aJ) {
                    a.parentNode.replaceChild(aJ, a);
                    if (ad) {
                        ay(ad, true);
                        if (ah.ie && ah.win) {
                            aJ.style.display = "block"
                        }
                    }
                    if (ap) {
                        ap(at)
                    }
                }
                aU = false
            }
        }
    }
}();
var productCode = "HACQ";
var arrayBanner = ["1"];
var arrayBigBanner = [];
var CodeProduct = "HACQ";
var CookieProduct = "HACQ_Cookie";
var CookieBottomProduct = "HACQ_CookieBottom";
var MASHTTPListCustomSource = [];
var apikey = "848dfc7c1dfe4da3b8dd3c58f8d34be8";
var regClick = false;

function dkn_callback(b, g, e, a, d, c) {
    if (e > 0) {
        var i = encodeURIComponent("http://hacq.360game.vn/quick-play?status=quick-register");
        if ($("#checklogin").attr("rel")) {
            var f = encodeURIComponent("http://hacq.360game.vn/play-game?" + $("#checklogin").attr("rel"))
        } else {
            var f = encodeURIComponent("http://hacq.360game.vn/quick-play")
        }
        if (regClick) {
            i = encodeURIComponent("http://hacq.360game.vn/");
            f = encodeURIComponent("http://hacq.360game.vn/")
        }
        if (c.register == true) {
            var h = encodeURIComponent("http://360game.vn/auth/internal-login?currentLink=" + i);
            window.location.href = "https://sso3.zing.vn/xchecklogin?apikey=" + apikey + "&u=" + h
        } else {
            if (typeof globObj != "undefined" && typeof globObj.regBtn != "undefined" && globObj.regBtn.size() && globObj.regBtn.hasClass("PlayNow")) {
                i = encodeURIComponent("http://hacq.360game.vn/quick-play");
                var h = encodeURIComponent("http://360game.vn/auth/internal-login?currentLink=" + i);
                window.location.href = "https://sso3.zing.vn/xchecklogin?apikey=" + apikey + "&u=" + h
            } else {
                var h = encodeURIComponent("http://360game.vn/auth/internal-login?currentLink=" + f);
                window.location.href = "https://sso3.zing.vn/xchecklogin?apikey=" + apikey + "&u=" + h
            }
        }
    } else {
        alert("CA� lỗi xảy ra vui lA�ng thử lai", 3000)
    }
    regClick = false
}

function dkn_callback2(b, g, e, a, d, c) {
    if (e > 0) {
        var i = encodeURIComponent("http://hacq.360game.vn/");
        if ($("#checklogin").attr("rel")) {
            var f = encodeURIComponent("http://hacq.360game.vn?" + $("#checklogin").attr("rel"))
        } else {
            var f = encodeURIComponent("http://hacq.360game.vn/")
        }
        if (c.register == true) {
            var h = encodeURIComponent("http://360game.vn/auth/internal-login?currentLink=" + i);
            window.location.href = "https://sso3.zing.vn/xchecklogin?apikey=" + apikey + "&u=" + h
        } else {
            if (typeof globObj != "undefined" && typeof globObj.regBtn != "undefined" && globObj.regBtn.size() && globObj.regBtn.hasClass("PlayNow")) {
                i = encodeURIComponent("http://hacq.360game.vn/");
                var h = encodeURIComponent("http://360game.vn/auth/internal-login?currentLink=" + i);
                window.location.href = "https://sso3.zing.vn/xchecklogin?apikey=" + apikey + "&u=" + h
            } else {
                var h = encodeURIComponent("http://360game.vn/auth/internal-login?currentLink=" + f);
                window.location.href = "https://sso3.zing.vn/xchecklogin?apikey=" + apikey + "&u=" + h
            }
        }
    } else {
        alert("CA� lỗi xảy ra vui lA�ng thử lai", 3000)
    }
}

function dkn_quickReg() {
    if ($("#checklogin").val() == "1") {
        window.location.href = "http://hacq.360game.vn/quick-play"
    } else {
        regClick = true;
        zmeOpenWidget.doRegister("", "dkn_callback2")
    }
    return false
}

function dkn_login() {
    zmeOpenWidget.doLogin("dkn_callback")
}
window.zAsyncInit = function() {
    zmeOpenWidget.init({
        apikey: apikey,
        pid: "258",
        callback: "dkn_callback",
        tpl: "5",
        css: "login_quickreg_1.05.css"/*tpa=http://img.zing.vn/products/vendor/general/widget-login/css/login_quickreg_1.05.css*/
    })
};
(function(e) {
    var c, f = "widget-jssdk",
        b = e.getElementsByTagName("script")[0];
    if (e.getElementById(f)) {
        return
    }
    c = e.createElement("script");
    c.id = f;
    c.async = true;
    var a = Math.floor(Math.random() * 10000);
    c.src = "../stc-id.zing.vn/widget/js/openwidget2ff1d.js?type=2&amp;t=" + a;
    b.parentNode.insertBefore(c, b)
}(document));
var config360game = {
    zing_account: "",
    app_name: "hacq360",
    show_header: 1
};
$(document).ready(function() {
    try {
        vmas_click("hacq360", "mainsite360", "")
    } catch (a) {}
});
(function(d, e, j, h, f, c, b) {
    d.GoogleAnalyticsObject = f;
    d[f] = d[f] || function() {
        (d[f].q = d[f].q || []).push(arguments)
    }, d[f].l = 1 * new Date();
    c = e.createElement(j), b = e.getElementsByTagName(j)[0];
    c.async = 1;
    c.src = h;
    b.parentNode.insertBefore(c, b)
})(window, document, "script", "analytics.html"/*tpa=http://www.google-analytics.com/analytics.js*/, "ga");
ga("create", "UA-54697328-5", "auto");
ga("send", "pageview");
Number.prototype.formatNumber = function(k, g, e) {
    var h = this,
        k = isNaN(k = Math.abs(k)) ? 2 : k,
        g = g == undefined ? "." : g,
        e = e == undefined ? "," : e,
        f = h < 0 ? "-" : "",
        b = parseInt(h = Math.abs(+h || 0).toFixed(k)) + "",
        a = (a = b.length) > 3 ? a % 3 : 0;
    return f + (a ? b.substr(0, a) + e : "") + b.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + e) + (k ? g + Math.abs(h - b).toFixed(k).slice(2) : "")
};
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
var appIdFB = {
    vlcm: "572059102909765",
    nhaico: "248394152030960",
    mongcankhon: "316113165180165",
    volam: "849851525029790",
    volam2: "715307218515673",
    volammienphi: "310543362432021",
    kiemthe: "804601679558609",
    "3q": "1385523911693343",
    volam3: "249721521882052",
    "2s": "658637767505650",
    gunny: "313038505512282",
    thankhuc: "1422630531338607",
    aimynhan: "1603398536552239",
    tuongthan: "290515921114329",
    ngoalong: "322470114570518",
    "3d": "249721521882052",
    "2u": "447103912101639",
    hungba: undefined,
    thoiloan: "1483065071912810",
    "9k": "1459304647645630",
    xgame2014: "280351615502856",
    phongvan: "329818837181469",
    thoiloanmobile: "272579879612597",
    ttl: "278305615708721",
    vlcm2: "1479882628965471",
    ttl3d: "781279451938935",
    ctc: "466140210191844",
    docbo: "280258995518111",
    gunnymobi: "312364145625427",
    bc: "418800388274544",
    tfsgm: "684784928304603",
    kt2: "776150779141947",
    vh2: "1528989040701763",
    phongthan: "896534067057840",
    cuutoc: "291971524327085",
    hacq: "1578068592460422"
};
var showPopupSocial = (function(d) {
    var A = false;
    var o = false;
    var f = "social-style-vr3.min.html"/*tpa=http://img.zing.vn/products/vendor/plugin/social-style-vr3.min.css*/;
    var s = "home";
    var y = {
        isZingMe: false,
        isVportalLike: true,
        isDisableSend: false
    };
    var b = {
            zingme: "zingme",
            facebook: "facebook",
            RelativeID: undefined,
            typePage: "subpage"
        },
        u = function(C, D) {
            y.isZingMe = C.isZingMe;
            y.isDisableSend = C.isDisableSend;
            if (typeof C.isVportalLike != "undefined") {
                y.isVportalLike = C.isVportalLike
            }
            s = (typeof C.typePage === undefined) ? s : C.typePage;
            if (C.typePage === "subpage") {} else {
                j(g())
            }
            if (C.typePage === "subweb") {
                link_p = (window.location.href).split("?")[0];
                j(link_p)
            }
            if (typeof D != "undefined") {
                typeof D === "function" && D()
            }
            jQuery(".btn-fb-like-social").remove();
            jQuery("body").css("position", "relative");
            jQuery("body").append('<div id="zme-root"></div>');
            distance = jQuery("body").height() * 0.35;
            if (jQuery("#" + C.RelativeID) != undefined) {
                l(C.typePage);
                if (y.isVportalLike) {
                    r(".btn-custom-like")
                }
                var B = function(G) {
                    var F = d("#static").height() / 1.5;
                    var E = d("body,html").scrollTop() + d(window).height();
                    if (E >= F) {
                        if (!A) {
                            A = true
                        }
                    } else {
                        if (A) {
                            A = false
                        }
                    }
                };
                jQuery(window).bind("scroll", B);
                if (jQuery("#" + C.RelativeID).length > 0) {
                    jQuery("#" + C.RelativeID).children("a").bind("click", function(E) {
                        E.preventDefault();
                        jQuery(window).unbind("scroll");
                        d("body").animate({
                            "padding-bottom": "0"
                        }, 300, function() {
                            jQuery(window).bind("scroll", B)
                        })
                    })
                }
            } else {}
            v();
            p();
            if (e() == "329818837181469") {
                jQuery(".btn-fb-send-social").remove()
            }
        },
        v = function() {
            jQuery("#popup-social-home .btn-fb-share-social,#popup-social-sub .btn-fb-share-social").bind("click", function() {
                k(e())
            });
            t()
        },
        p = function() {
            jQuery("#popup-social-home .btn-fb-send-social,#popup-social-sub .btn-fb-send-social").bind("click", function() {
                i(e())
            })
        },
        e = function() {
            urlSite = location.href;
            domain = urlSite.match(/:\/\/(.[^/]+)/)[1].split(".");
            return appIdFB[domain[0]]
        },
        z = function(B) {
            switch (B) {
                case b.facebook:
                    param = (typeof e() === undefined) ? "" : "&amp;appId=" + e();
                    w("../connect.facebook.net/en_US/all.js#xfbml=1" + param, b.facebook);
                    break;
                case b.zingme:
                    w("../static.me.zing.vn/sp/js/all-1.34.js#&appId=d713b962dbf19d2dea16124b293558d1&status=true", b.zingme);
                    break
            }
        },
        w = function(C, B) {
            jssdk = B + "-jssdk";
            if (B.toLowerCase().trim() === b.facebook) {
                jQuery(".fb-social-button").each(function(D, E) {
                    if (jQuery(E).attr("data-href") != (window.location.href).split("?")[0]) {
                        z(B)
                    }
                })
            }(function(G, D, H) {
                var F, E = G.getElementsByTagName(D)[0];
                if (G.getElementById(H)) {
                    return
                }
                F = G.createElement(D);
                F.id = H;
                F.src = C;
                E.parentNode.insertBefore(F, E);
                if (B.toLowerCase().trim() === "facebook") {
                    setTimeout(function() {
                        link_p_add = (window.location.href).split("?")[0];
                        if (s === "home") {
                            link_p_add = (window.location.href).split("?")[0] + "index.html";
                            if ((window.location.href).split("http://phongvanthan.com/index.html").length > 1) {
                                link_p_add = (window.location.href).split("?")[0]
                            }
                        }
                        url = link_p_add;
                        x(url)
                    }, 1000)
                }
            }(document, "script", jssdk))
        },
        x = function(B) {
            try {
                if (FB && FB.Event && FB.Event.subscribe) {
                    FB.Event.subscribe("edge.create", function(D) {
                        t()
                    });
                    FB.Event.subscribe("edge.remove", function(D) {
                        t()
                    });
                    FB.Event.subscribe("http://phongvanthan.com/js/message.send", function(D) {
                        t()
                    });
                    FB.Event.subscribe("xfbml.render", function(D) {
                        t()
                    })
                }
            } catch (C) {}
        },
        r = function(B) {
            wiFrame = 120;
            if (typeof B != undefined) {
                obj = jQuery(B);
                typeLike = "&type=" + s;
                link_p_add = (window.location.href).split("?")[0], link_p_add = link_p_add.split("#")[0];
                if (b.typePage === "home") {
                    link_p_add = (window.location.href).split("?")[0] + "index.html", link_p_add = link_p_add.split("#")[0] + "index.html";
                    if ((window.location.href).split("http://phongvanthan.com/index.html").length > 1) {
                        link_p_add = (window.location.href).split("?")[0], link_p_add = link_p_add.split("#")[0]
                    }
                    wiFrame = 50
                }
                url = "//mainsite.360game.vn/like/?url=" + link_p_add + typeLike;
                iframeObj = '<iframe width="' + wiFrame + '" height="30" src="' + url + '" frameborder="0"  scrolling="no" allowtransparency="true" style="overflow:hidden;"></iframe>';
                if (obj.length > 0) {
                    obj.html(iframeObj)
                }
            }
        },
        g = function() {
            link_p_add = (window.location.href).split("?")[0], link_p_add = link_p_add.split("#")[0];
            if (link_p_add.split("index.html").length == 4) {
                if (s === "home") {
                    link_p_add = (window.location.href).split("?")[0] + "index.html", link_p_add = link_p_add.split("#")[0];
                    if ((window.location.href).split("http://phongvanthan.com/index.html").length > 1) {
                        link_p_add = (window.location.href).split("?")[0], link_p_add = link_p_add.split("#")[0]
                    }
                }
            }
            return link_p_add
        },
        n = function() {
            _sendfb = '<div title="Send" class="btn-fb-send-social"><div class="pluginButtonImage"><span class="pluginButtonIcon img sp_plugin-button sx_plugin-button_favblue"></span></div><span class="pluginButtonLabel">Send</span></div>';
            _objbtn = jQuery("div.plugin-social-block-p > div#popup-social-sub > div.block-social > div.like-block-social > div.group-facebook > .btn-fb-share-social");
            if (jQuery(".btn-fb-send-social").size() > 0) {} else {
                if (_objbtn.size() > 0) {
                    _objbtn.before(_sendfb)
                }
            }
        },
        l = function(B) {
            jQuery(".fb-social-button,.fb-link-href").each(function(C, D) {
                C = "";
                if (B === "home") {
                    C = "http://phongvanthan.com/index.html"
                }
                jQuery(D).attr("data-href", (window.location.href).split("?")[0] + C)
            });
            n();
            z(b.facebook);
            if (y.isZingMe) {
                z(b.zingme)
            }
            h()
        },
        t = function(B) {
            like = 0;
            link_p_add = g();
            var C = d.ajax({
                type: "POST",
                url: "https://graph.facebook.com/?ids=" + link_p_add,
                dataType: "jsonp"
            });
            C.done(function(D) {
                like = (typeof D[link_p_add] == undefined) ? 0 : D[link_p_add].shares;
                if (typeof like != "undefined") {
                    format = like.formatNumber()
                } else {
                    format = "0"
                }
                rs = format.split(",");
                if (rs.length <= 1) {
                    rs = like
                } else {
                    rs = ((rs[0] < 1) ? like : rs[0] + "k" + ((rs[1] < 1) ? "" : (rs[1].slice(0, 1))))
                }
                if (typeof like == "undefined") {
                    rs = 0
                }
                switch (s) {
                    case "subweb":
                    case "home":
                        jQuery("#popup-social-home .number-social-fb").remove();
                        jQuery("#popup-social-home #fb-root").before('<div class="number-social-fb"><p>' + rs + "</p></div>");
                        break;
                    case "subpage":
                        jQuery("#popup-social-sub .number-social-fb").remove();
                        jQuery("#popup-social-sub .btn-fb-share-social").after('<div class="number-social-fb"><p>' + rs + "</p></div>");
                        break;
                    case "all":
                        jQuery("#popup-social-home .number-social-fb").remove();
                        jQuery("#popup-social-home #fb-root").before('<div class="number-social-fb"><p>' + rs + "</p></div>");
                        jQuery("#popup-social-sub .number-social-fb").remove();
                        jQuery("#popup-social-sub .btn-fb-share-social").after('<div class="number-social-fb"><p>' + rs + "</p></div>");
                        break
                }
            })
        },
        a = function() {
            objIframe = jQuery(".fb-social-button").find("span");
            jQuery(objIframe).addClass("fbiframe");
            if (!jQuery(objIframe).hasClass("fbiframe")) {
                a()
            }
        },
        j = function(C) {
            var B = '<div id="popup-social-home"><div class="block-social"><div class="like-block-social"><div class="button-control"><div class="group-facebook"><div id="fb-root"></div><div class="btn-fb-share-social" title="Share">Share</div><div title="Send" class="btn-fb-send-social">Send</div></div><div class="btn-custom-like"></div></div></div></div></div>';
            if (y.isDisableSend) {
                B = '<div id="popup-social-home"><div class="block-social"><div class="like-block-social"><div class="button-control"><div class="group-facebook"><div id="fb-root"></div><div class="btn-fb-share-social" title="Share">Share</div><div class="btn-custom-like"></div></div></div></div></div>'
            }
            jQuery("body").append(B)
        },
        h = function() {
            jQuery("head").append("<link>");
            var B = jQuery("head").children(":last");
            B.attr({
                rel: "stylesheet",
                type: "text/css",
                href: f
            });
            jQuery("head").append('<meta http-equiv="X-UA-Compatible" content="IE=edge" />')
        },
        k = function(B) {
            var E = document.title;
            D = g();
            if (B == undefined) {
                if (navigator.userAgent.indexOf("MSIE") != -1) {
                    winDef = "scrollbars=no,status=no,toolbar=no,location=nnoo,menubar=no,resizable=yes,height=430,width=550,top=".concat((screen.height - 500) / 2).concat(",left=").concat((screen.width - 500) / 2)
                } else {
                    winDef = "scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=no,height=400,width=550,top=".concat((screen.height - 500) / 2).concat(",left=").concat((screen.width - 500) / 2)
                }
                var D = "http://www.facebook.com/sharer/sharer.php?u=" + D + "&t=" + E;
                var C = window.open(D, "_blank", winDef);
                var F = setInterval(function() {
                    if (C.closed) {
                        clearInterval(F);
                        t()
                    }
                }, 1000)
            } else {
                FB.init({
                    appId: B,
                    status: true,
                    cookie: true
                });
                FB.ui({
                    method: "feed",
                    link: D,
                    caption: E
                }, function(G) {
                    if (G === null) {
                        c("button Share - " + s + "- fail");
                        t()
                    } else {
                        c("button Share - " + s + "- success");
                        t()
                    }
                })
            }
        },
        i = function(B) {
            _utm = "?utm_source=facebook&utm_campaign=button_send";
            var C = document.title;
            urlSend = g();
            FB.init({
                appId: B,
                status: true,
                cookie: true
            });
            FB.ui({
                method: "send",
                link: urlSend,
                caption: C
            }, function(D) {
                if (D === null) {
                    c("button Send - " + s + "- fail")
                } else {
                    c("button Send - " + s + "- success")
                }
            })
        },
        c = function(B) {
            if (typeof ga != "undefined" || typeof _gaq != "undefined") {
                if (typeof _gaq == "undefined") {
                    _gaq.push(["_trackEvent", "facebook", B, s, 1])
                } else {
                    if (typeof ga == "undefined") {
                        ga("send", "event", B, "facebook", s, 1)
                    }
                }
            }
        },
        m = function(C, B) {
            if (jQuery(C).size()) {
                if (d(".plugin-social-block-p").size()) {
                    p_items = d(".plugin-social-block-p");
                    switch (B) {
                        case "before":
                            jQuery(C).before(p_items);
                            break;
                        case "after":
                            jQuery(C).after(p_items);
                            break;
                        case "append":
                            jQuery(C).append(p_items);
                            break
                    }
                }
            }
        },
        q = function() {
            url360game = location.href;
            url360 = url360game.match(/:\/\/(.[^/]+)/)[1].split(".");
            if (url360[1] == "360game") {
                return true
            }
            return false
        };
    return {
        init: u,
        share: v,
        validateLinkHome: g,
        TrackingSocial: x,
        addPositionItem: m
    }
})(jQuery, window);
jQuery(window).load(function() {
    if (jQuery("div.plugin-social-block-p").length > 0) {
        var a = jQuery("div.plugin-social-block-p").offset().top;
        jQuery(window).scroll(function(b) {
            var c = jQuery(window).scrollTop();
            if (c > a) {
                jQuery("div.plugin-social-block-p").addClass("active");
                if (jQuery("#ved_section").length > 0) {
                    jQuery("div.plugin-social-block-p.active").css("top", "40px")
                }
                if (jQuery(".template-blank").length <= 0) {
                    jQuery("div.plugin-social-block-p").before('<div class="template-blank"></div>')
                }
            } else {
                jQuery(".template-blank").remove();
                jQuery("div.plugin-social-block-p").removeClass("active")
            }
        })
    }
});
jQuery.fn.extend({
    setTracking: function(c, a, b) {
        return this.each(function() {
            var e = $(this);
            var d = e.attr("onclick") || e.attr("onClick") || "";
            if (d.indexOf("ga(") < 0 && d.indexOf("_gaq.push(") < 0) {
                e.removeAttr("onClick");
                e.attr("onclick", d + "ga('send', 'event', '" + c + "', '" + a + "', '" + b + "', 1);")
            }
        })
    }
});
var gaTracking = (function(h) {
    var i = {};
    var e = {
        "Tai khoan": "http://phongvanthan.com/js/id.zing.vn",
        "Nap the": "http://phongvanthan.com/js/pay.zing.vn"
    };
    var d = "";
    var j = "";

    function b(m) {
        return decodeURI((RegExp(m + "=(.+?)(&|$)").exec(h.location.search) || [, null])[1])
    }

    function a(m) {
        return m.replace(/([a-z])([A-Z])/g, "$1 $2")
    }

    function g(m) {
        return m.replace(/^[a-z]/, function(n) {
            return n.toUpperCase()
        })
    }

    function l(m) {
        m = a(m);
        m = m.toLowerCase();
        m = g(m);
        return m
    }

    function k() {
        var m = [];
        var q = $("body");
        var s = h.location.href;
        s = s.split("?")[0];
        s = s.split("#")[0];
        s = s.replace("http://", "");
        m = s.split("index.html");
        var t = "";
        var o = "Button Image";
        var p = "Homepage";
        if (q.hasClass("Teaser") || (m.length > 4 && m[1] == "intro" && (m[3] == "teaser"))) {
            p = "Teaser"
        } else {
            if (q.hasClass("Landingpage") || (m.length > 4 && m[1] == "intro" && (m[3] == "landing"))) {
                o = g(m[2].replace(/[-]/ig, " "));
                p = "Landingpage"
            } else {
                if (q.hasClass("Subpage") || m.length >= 3 && m[1] == "tin-tuc") {
                    p = "Subpage"
                } else {
                    if (q.hasClass("Subpage") || m.length >= 3 && m[1] == "su-kien" && (m[2].split("."))[0] == "danh-sach") {
                        p = "Subpage"
                    } else {
                        if (q.hasClass("Subpage") || m.length >= 4 && m[1] == "bai-viet" && m[2] == "huong-dan") {
                            p = "Subpage"
                        } else {
                            if (q.hasClass("Event") || (m.length >= 2 && m[1] == "su-kien")) {
                                o = g(m[2].replace(/[-]/ig, " "));
                                p = "Subweb"
                            } else {
                                p = "Homepage"
                            }
                        }
                    }
                }
            }
        }
        var n = {
            "Nap the": $(".NapThe"),
            "Quen mat khau": $(".ForgotPassword, .ForgotPass"),
            "Dang ky": $(".QuickRegister, .DangKyNhanh"),
            Download: $(".TaiGame, .Download"),
            PlayNow: $(".Playnow, .ChoiNgay"),
            Downloadhttp: $(".DownloadHttp")
        };
        for (inx in n) {
            var r = n[inx];
            r.size() && r.setTracking(inx, o, p)
        }
        i.trackingPlaynow = function() {
            ga("send", "event", "PlayNow", o, p, 1)
        };
        i.trackingDownload = function() {
            ga("send", "event", "Download", o, p, 1)
        };
        $(".DownloadBin").each(function(u) {
            $(this).setTracking("Downloadhttp" + (u + 2), o, p)
        });
        $("[class*=_track_]").each(function(u, v) {
            var x = $(this);
            var w = this.className.match(/\b_track_[^\s]+\b/);
            if (w.length <= 0) {
                return
            }
            var A = this.className.match(/\b_track_[^\s]+\b/)[0];
            var z = A.split("_");
            if (z.length == 3) {
                var y = l(a(z[2]));
                x.setTracking(y, "Link", p)
            } else {
                if (z.length > 3) {
                    switch (z[2]) {
                        case "img":
                            o = "Button Image";
                            break;
                        default:
                            o = "Link";
                            break
                    }
                    y = l(a(z[3]));
                    x.setTracking(y, o, p)
                }
            }
        })
    }

    function c(n, o, p, m) {
        n.each(function() {
            var r = $(this);
            var q = r.attr("onclick");
            q = (q == undefined) ? "" : (q + ";");
            if (q.indexOf("ga(") < 0) {
                r.attr("onclick", q + "ga('send', 'event', '" + o + "', '" + p + "', '" + m + "', 1);")
            }
        })
    }

    function f(n, o) {
        var m = $(n).attr("onclick");
        o = l(o);
        d = a(d);
        j = a(j);
        m = m == undefined ? "" : m
    }
    return {
        addTrack: f,
        convertCase: l,
        capitalizeFirst: g,
        unPascalCase: a,
        linkProcess: k,
        init: function() {
            k();
            this.trackingDownload = i.trackingDownload;
            this.trackingPlaynow = i.trackingPlaynow;
            return "init";
            var m = this;
            d = b("utm_campaign");
            j = b("utm_medium");
            var n = document.body.className.match(/\bGaMedium[^\s]+\b/);
            d = d == "null" ? "NoCampaign" : d.split("_")[0];
            j = (j != "null") ? j : "NoMedium";
            if (n != null && n.length) {
                j = n[0].replace("GaMedium", "")
            }
            $("a, area").each(function() {
                var q = this.className.match(/\bGaCategory[^\s]+\b/);
                var o = this.href;
                if (q) {
                    var r = q[0].replace("GaCategory", "");
                    f(this, r)
                } else {
                    if (jQuery(this).is("#ppregister_link")) {
                        f(this, "Dang ky")
                    }
                    for (var p in e) {
                        if (o.indexOf(e[p]) >= 0) {
                            f(this, p)
                        }
                    }
                }
            })
        }
    }
})(window, undefined);
jQuery(document).ready(function() {
    if (typeof ga != "undefined" || typeof _gaq != "undefined") {
        gaTracking.init();
        if (typeof _gaq == "undefined") {
            _gaq = {
                push: function(a) {
                    ga("send", "event", a[1], a[2], a[3], 1)
                }
            }
        } else {
            if (typeof ga == "undefined") {
                ga = function(h, g, l, k, j, i) {
                    _gaq.push(["_trackEvent", l, k, j, i])
                }
            }
        }
    }
});
/*!
 * Feature Carousel, Version 1.3
 * http://www.bkosolutions.com
 *
 * Copyright 2011 Brian Osborne
 * Licensed under GPL version 3
 * brian@bkosborne.com
 *
 * http://www.gnu.org/licenses/gpl.txt
 */
(function(a) {
    a.fn.featureCarousel = function(f) {
        if (this.length > 1) {
            this.each(function() {
                a(this).featureCarousel(f)
            });
            return this
        }
        f = a.extend({}, a.fn.featureCarousel.defaults, f || {});
        var q = {
            currentCenterNum: f.startingFeature,
            containerWidth: 0,
            containerHeight: 0,
            largeFeatureWidth: 0,
            largeFeatureHeight: 0,
            smallFeatureWidth: 0,
            smallFeatureHeight: 0,
            totalFeatureCount: a(this).children("div").length,
            currentlyMoving: false,
            featuresContainer: a(this),
            featuresArray: [],
            containerIDTag: "#" + a(this).attr("id"),
            timeoutVar: null,
            rotationsRemaining: 0,
            itemsToAnimate: 0,
            borderWidth: 0
        };
        var j = function(w) {
            if (f.preload == true) {
                var u = q.featuresContainer.find("img");
                var t = 0;
                var v = u.length;
                u.each(function(y, z) {
                    var x = new Image();
                    a(x).bind("load error", function() {
                        t++;
                        if (t == v) {
                            w()
                        }
                    });
                    x.src = z.src
                })
            } else {
                w()
            }
        };
        var m = function(t) {
            return q.featuresArray[t - 1]
        };
        var n = function(t) {
            a.each(q.featuresArray, function() {
                if (a(this).data().setPosition == t) {
                    return a(this)
                }
            })
        };
        var c = function(t) {
            if ((t - 1) == 0) {
                return q.totalFeatureCount
            } else {
                return t - 1
            }
        };
        var i = function(t) {
            if ((t + 1) > q.totalFeatureCount) {
                return 1
            } else {
                return t + 1
            }
        };
        var e = function() {
            q.containerWidth = q.featuresContainer.width();
            q.containerHeight = q.featuresContainer.height();
            var t = a(q.containerIDTag).find(".carousel-image:first");
            if (f.largeFeatureWidth > 1) {
                q.largeFeatureWidth = f.largeFeatureWidth
            } else {
                if (f.largeFeatureWidth > 0 && f.largeFeatureWidth < 1) {
                    q.largeFeatureWidth = t.width() * f.largeFeatureWidth
                } else {
                    q.largeFeatureWidth = t.outerWidth()
                }
            }
            if (f.largeFeatureHeight > 1) {
                q.largeFeatureHeight = f.largeFeatureHeight
            } else {
                if (f.largeFeatureHeight > 0 && f.largeFeatureHeight < 1) {
                    q.largeFeatureHeight = t.height() * f.largeFeatureHeight
                } else {
                    q.largeFeatureHeight = t.outerHeight()
                }
            }
            if (f.smallFeatureWidth > 1) {
                q.smallFeatureWidth = f.smallFeatureWidth
            } else {
                if (f.smallFeatureWidth > 0 && f.smallFeatureWidth < 1) {
                    q.smallFeatureWidth = t.width() * f.smallFeatureWidth
                } else {
                    q.smallFeatureWidth = t.outerWidth() / 2
                }
            }
            if (f.smallFeatureHeight > 1) {
                q.smallFeatureHeight = f.smallFeatureHeight
            } else {
                if (f.smallFeatureHeight > 0 && f.smallFeatureHeight < 1) {
                    q.smallFeatureHeight = t.height() * f.smallFeatureHeight
                } else {
                    q.smallFeatureHeight = t.outerHeight() / 2
                }
            }
        };
        var b = function() {
            if (f.displayCutoff > 0 && f.displayCutoff < q.totalFeatureCount) {
                q.totalFeatureCount = f.displayCutoff
            }
            q.featuresContainer.find(".carousel-feature").each(function(t) {
                if (t < q.totalFeatureCount) {
                    q.featuresArray[t] = a(this)
                }
            });
            if (q.featuresContainer.find(".carousel-feature").first().css("borderLeftWidth") != "medium") {
                q.borderWidth = parseInt(q.featuresContainer.find(".carousel-feature").first().css("borderLeftWidth")) * 2
            }
            q.featuresContainer.find(".carousel-feature").each(function() {
                a(this).css({
                    left: (q.containerWidth / 2) - (q.smallFeatureWidth / 2) - (q.borderWidth / 2),
                    width: q.smallFeatureWidth,
                    height: q.smallFeatureHeight,
                    top: f.smallFeatureOffset + f.topPadding,
                    opacity: 0
                })
            }).find(".carousel-image").css({
                width: q.smallFeatureWidth
            });
            if (f.captionBelow) {
                q.featuresContainer.find(".carousel-caption").css("position", "relative")
            }
            if (q.totalFeatureCount < 4) {
                q.itemsToAnimate = q.totalFeatureCount
            } else {
                q.itemsToAnimate = 4
            }
            q.featuresContainer.find(".carousel-caption").hide()
        };
        var r = function() {
            a.each(q.featuresArray, function(x) {
                a(this).data("setPosition", x + 1)
            });
            var w = c(f.startingFeature);
            q.currentCenterNum = w;
            var v = m(w);
            v.data("position", 1);
            var u = v.prevAll();
            u.each(function(x) {
                a(this).data("position", (q.totalFeatureCount - x))
            });
            var t = v.nextAll();
            t.each(function(x) {
                if (a(this).data("setPosition") != undefined) {
                    a(this).data("position", (x + 2))
                }
            });
            if (f.counterStyle == "caption") {
                a.each(q.featuresArray, function() {
                    var y = c(a(this).data("position"));
                    var x = a("<span></span>");
                    x.addClass("numberTag");
                    x.html("(" + y + " of " + q.totalFeatureCount + ") ");
                    a(this).find(".carousel-caption p").prepend(x)
                })
            }
        };
        var h = function() {
            if (f.trackerIndividual) {
                var z = a("<ul></ul>");
                z.addClass("tracker-individual-container");
                for (var y = 0; y < q.totalFeatureCount; y++) {
                    var t = y + 1;
                    var x = a("<div>" + t + "</div>");
                    x.addClass("tracker-individual-blip");
                    x.css("cursor", "pointer");
                    x.attr("id", "tracker-" + (y + 1));
                    var w = a("<li></li>");
                    w.append(x);
                    w.css("float", "left");
                    w.css("list-style-type", "none");
                    z.append(w)
                }
                a(q.containerIDTag).append(z);
                z.hide().show()
            }
            if (f.trackerSummation) {
                var v = a("<div></div>");
                v.addClass("tracker-summation-container");
                var u = a("<span></span>").addClass("tracker-summation-current").text(f.startingFeature);
                var B = a("<span></span>").addClass("tracker-summation-total").text(q.totalFeatureCount);
                var A = a("<span></span>").addClass("tracker-summation-middle").text(" of ");
                v.append(u).append(A).append(B);
                a(q.containerIDTag).append(v)
            }
        };
        var s = function(x, t) {
            if (f.trackerIndividual) {
                var u = q.featuresContainer.find(".tracker-individual-container");
                var v = u.find("#tracker-" + x);
                var w = u.find("#tracker-" + t);
                v.removeClass("tracker-individual-blip-selected");
                w.addClass("tracker-individual-blip-selected")
            }
            if (f.trackerSummation) {
                var u = q.featuresContainer.find(".tracker-summation-container");
                u.find(".tracker-summation-current").text(t)
            }
        };
        var p = function(u) {
            clearTimeout(q.timeoutVar);
            if (!u && f.autoPlay != 0) {
                var t = (Math.abs(f.autoPlay) < f.carouselSpeed) ? f.carouselSpeed : Math.abs(f.autoPlay);
                q.timeoutVar = setTimeout(function() {
                    (f.autoPlay > 0) ? k(true, 1): k(false, 1)
                }, t)
            }
        };
        var d = function(t) {
            a.each(q.featuresArray, function() {
                var u;
                if (t == false) {
                    u = i(a(this).data().position)
                } else {
                    u = c(a(this).data().position)
                }
                a(this).data("position", u)
            })
        };
        var o = function(y, C) {
            var w, t, v, z, u, D, A;
            var B = y.data("position");
            var x;
            if (C == true) {
                x = c(B)
            } else {
                x = i(B)
            }
            if (B == 1) {
                f.leavingCenter(y)
            }
            if (x == 1) {
                w = q.largeFeatureWidth;
                t = q.largeFeatureHeight;
                v = f.topPadding;
                u = y.css("z-index");
                z = (q.containerWidth / 2) - (q.largeFeatureWidth / 2) - (q.borderWidth / 2);
                A = 1
            } else {
                w = q.smallFeatureWidth;
                t = q.smallFeatureHeight;
                v = f.smallFeatureOffset + f.topPadding;
                u = 1;
                A = 0.4;
                if (x == q.totalFeatureCount) {
                    z = f.sidePadding;
                    z = 0
                } else {
                    if (x == 2) {
                        z = q.containerWidth - q.smallFeatureWidth - f.sidePadding - q.borderWidth;
                        z = q.containerWidth - q.smallFeatureWidth - q.borderWidth
                    } else {
                        z = (q.containerWidth / 2) - (q.smallFeatureWidth / 2) - (q.borderWidth / 2);
                        A = 0
                    }
                }
            }
            if (B == 1) {
                y.find(".carousel-caption").hide()
            }
            y.velocity({
                width: w,
                height: t,
                top: v,
                left: z,
                opacity: A
            }, f.carouselSpeed, f.animationEasing, function() {
                if (x == 1) {
                    if (f.captionBelow) {
                        y.css("height", "auto")
                    }
                    y.find(".carousel-caption").fadeTo("fast", 0.85);
                    f.movedToCenter(y)
                } else {
                    y.removeClass("NewCenter")
                }
                q.rotationsRemaining = q.rotationsRemaining - 1;
                y.css("z-index", u);
                if (f.trackerIndividual || f.trackerSummation) {
                    if (x == 1) {
                        var E = q.featuresContainer.find(".carousel-feature").index(y) + 1;
                        var F;
                        if (C == false) {
                            F = i(E)
                        } else {
                            F = c(E)
                        }
                        s(F, E)
                    }
                }
                var G = q.rotationsRemaining / q.itemsToAnimate;
                if (G % 1 == 0) {
                    q.currentlyMoving = false;
                    d(C);
                    if (q.rotationsRemaining > 0) {
                        l(C)
                    }
                }
                p(false)
            }).find(".carousel-image").velocity({
                width: w,
                height: t
            }, f.carouselSpeed, f.animationEasing).end()
        };
        var l = function(w) {
            q.currentlyMoving = true;
            var x, v, t, u;
            if (w == true) {
                x = m(i(q.currentCenterNum));
                v = m(q.currentCenterNum);
                t = m(i(i(q.currentCenterNum)));
                u = m(c(q.currentCenterNum));
                q.currentCenterNum = i(q.currentCenterNum)
            } else {
                x = m(c(q.currentCenterNum));
                v = m(c(c(q.currentCenterNum)));
                t = m(q.currentCenterNum);
                u = m(i(q.currentCenterNum));
                q.currentCenterNum = c(q.currentCenterNum)
            }
            if (w) {
                v.css("z-index", 3)
            } else {
                t.css("z-index", 3)
            }
            x.css("z-index", 4);
            x.addClass("NewCenter");
            o(v, w);
            o(x, w);
            o(t, w);
            if (q.totalFeatureCount > 3) {
                o(u, w)
            }
        };
        var k = function(v, u) {
            if (q.currentlyMoving == false) {
                var t = u * q.itemsToAnimate;
                q.rotationsRemaining = t;
                l(v)
            }
        };
        var g = function(x, w) {
            var u = 1,
                t = 1,
                v;
            v = x;
            while ((v = c(v)) != w) {
                u++
            }
            v = x;
            while ((v = i(v)) != w) {
                t++
            }
            return (u < t) ? u * -1 : t
        };
        a(f.leftButtonTag).live("click", function() {
            k(false, 1)
        });
        a(f.rightButtonTag).live("click", function() {
            k(true, 1)
        });
        q.featuresContainer.find(".carousel-feature").click(function() {
            var t = a(this).data("position");
            if (t == 2) {
                k(true, 1)
            } else {
                if (t == q.totalFeatureCount) {
                    k(false, 1)
                }
            }
        }).mouseover(function() {
            if (q.currentlyMoving == false) {
                var t = a(this).data("position");
                if (t == 2 || t == q.totalFeatureCount) {
                    a(this).css("opacity", 0.8)
                }
            }
            if (f.pauseOnHover) {
                p(true)
            }
            if (f.stopOnHover) {
                f.autoPlay = 0
            }
        }).mouseout(function() {
            if (q.currentlyMoving == false) {
                var t = a(this).data("position");
                if (t == 2 || t == q.totalFeatureCount) {
                    a(this).css("opacity", 0.4)
                }
            }
            if (f.pauseOnHover) {
                p(false)
            }
        });
        a("a", q.containerIDTag).live("click", function(u) {
            var t = a(this).parentsUntil(q.containerIDTag);
            t.each(function() {
                var v = a(this).data("position");
                if (v != undefined) {
                    if (v != 1) {
                        if (v == q.totalFeatureCount) {
                            k(false, 1)
                        } else {
                            if (v == 2) {
                                k(true, 1)
                            }
                        }
                        u.preventDefault();
                        return false
                    } else {
                        f.clickedCenter(a(this))
                    }
                }
            })
        });
        a(".tracker-individual-blip", q.containerIDTag).live("click", function() {
            var t = a(this).attr("id").substring(8);
            var v = q.featuresContainer.find(".carousel-feature").eq(t - 1).data("position");
            var u = q.currentCenterNum;
            if (t != u) {
                var w = g(1, v);
                if (w < 0) {
                    k(false, (w * -1))
                } else {
                    k(true, w)
                }
            }
        });
        this.initialize = function() {
            j(function() {
                e();
                b();
                r();
                h();
                k(true, 1)
            });
            return this
        };
        this.next = function() {
            k(true, 1)
        };
        this.prev = function() {
            k(false, 1)
        };
        this.pause = function() {
            p(true)
        };
        this.start = function() {
            p(false)
        };
        return this.initialize()
    };
    a.fn.featureCarousel.defaults = {
        largeFeatureWidth: 0,
        largeFeatureHeight: 0,
        smallFeatureWidth: 0.5,
        smallFeatureHeight: 0.5,
        topPadding: 20,
        sidePadding: 50,
        smallFeatureOffset: 50,
        startingFeature: 1,
        carouselSpeed: 1000,
        autoPlay: 4000,
        pauseOnHover: true,
        stopOnHover: false,
        trackerIndividual: true,
        trackerSummation: true,
        preload: true,
        displayCutoff: 0,
        animationEasing: "swing",
        leftButtonTag: "#carousel-left",
        rightButtonTag: "#carousel-right",
        captionBelow: false,
        movedToCenter: a.noop,
        leavingCenter: a.noop,
        clickedCenter: a.noop
    }
})(jQuery);
jQuery.fn.activeMenu = function(i) {
    var g = "Active";
    if (i.length > 0) {
        g = i
    }
    var h = this;
    var b = "//" + window.location.hostname + window.location.pathname;
    var f = b;
    if ((window.location.pathname == "index.html") || (window.location.pathname == "app_dev.php/index.html")) {
        f = b + "index.html"
    }
    if ((window.location.pathname == "") || (window.location.pathname == "http://phongvanthan.com/app_dev.php")) {
        f = b + "/index.html"
    }
    b = f;

    function c(r, q) {
        var p = r.length;
        var m = q.length;
        var s = 0;
        var l = (r.length > q.length) ? q.length : r.length;
        var k = (r.length < q.length) ? q.length : r.length;
        for (var n = 0; n < l; n++) {
            if (r[n] == q[n]) {
                s++
            }
        }
        var o = s / k;
        return (o * 100) + "%"
    }

    function a(l) {
        var k = l.split("index.html");
        e.each(function(p) {
            var q = $(this);
            var m = q.attr("href").split("?");
            var o = m[0];
            for (var n = 0; n < k.length; n++) {
                if ((k[n] == "http://phongvanthan.com/js/app_dev.php") || (k[n] == "")) {} else {
                    if ((o.search(k[n]) > 0) || (o.search(k[n]) > 0)) {
                        q.parents("li").addClass(g);
                        q.parents("ul").removeClass("collapse");
                        return false
                    }
                }
            }
        })
    }
    var e = h.find("a");
    var d = 0;
    var j = false;
    e.each(function(l) {
        var n = $(this);
        var m = (n.attr("href")).split("?");
        var k = parseFloat(c(m[0], b));
        if (k >= d) {
            d = k;
            j = n
        }
    });
    if (d >= 85) {
        j.parents("ul").removeClass("collapse");
        $('[href="' + j.attr("href") + '"]').parents("li").addClass(g)
    } else {
        a(window.location.pathname)
    }
    return this
};
$(".main-navigation").activeMenu("Active");
$("#sidenavMenu").activeMenu("Active");
$("ul#sidenavMenu li").click(function(a) {});
var IE6 = jQuery.browser.msie && jQuery.browser.version == 6;

function createOverlays(e) {
    var d = jQuery("#thewindowbackground");
    var a = jQuery(window).width() / 2;
    var c = jQuery(window).height() / 2;
    var b = jQuery(window).scrollTop();
    if (IE6) {
        d.css({
            width: jQuery(document).width() - 18,
            height: jQuery(document).height(),
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 900,
            background: "#000000",
            opacity: 0
        })
    } else {
        d.css({
            width: jQuery(document).width(),
            height: jQuery(document).height(),
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 900,
            background: "#000000",
            opacity: 0
        })
    }
    d.fadeTo("fast", 0.7, function() {
        jQuery("#" + e).css({
            display: "block",
            top: c + b - jQuery("#" + e).outerHeight() / 2,
            left: a - jQuery("#" + e).outerWidth() / 2
        })
    });
    jQuery(window).resize(function() {
        var h = jQuery(window).height() / 2;
        var f = jQuery(window).width() / 2;
        var g = jQuery(window).scrollTop();
        if (IE6) {
            d.css({
                width: jQuery(document).width() - 18
            })
        } else {
            d.css({
                width: jQuery(document).width()
            })
        }
        jQuery("#" + e).css({
            top: h + g - jQuery("#" + e).outerHeight() / 2,
            left: f - jQuery("#" + e).outerWidth() / 2
        })
    });
    jQuery(window).scroll(function() {
        var h = jQuery(window).height() / 2;
        var f = jQuery(window).width() / 2;
        var g = jQuery(window).scrollTop();
        if (IE6) {
            d.css({
                width: jQuery(document).width() - 18
            })
        } else {
            d.css({
                width: jQuery(document).width(),
                height: jQuery(document).height()
            })
        }
        jQuery("#" + e).css({
            top: h + g - jQuery("#" + e).outerHeight() / 2,
            left: f - jQuery("#" + e).outerWidth() / 2
        })
    });
    if (jQuery("#fbPopupMenu_" + e).find("li.Hilite").hasClass("ha")) {
        autoPlay(jQuery("#img_" + e), e)
    }
    jQuery(d).bind("click", function() {
        closeVideo(e);
        return false
    });
    jQuery("#fbclose_" + e).bind("click", function() {
        closeVideo(e);
        return false
    });
    jQuery("#" + e + " .PopupCloseBtn").bind("click", function() {
        closeVideo(e);
        return false
    })
}

function closeVideo(a) {
    jQuery("#" + a).css({
        display: "none"
    });
    jQuery("#thewindowbackground").fadeOut("fast", function() {
        jQuery("#" + a).css({
            display: "none"
        })
    });
    if (a == "MusicOverlays") {
        jQuery("#" + a).remove()
    }
};
(function(b, c) {
    var a = "ActiveBanner";
    b.widget("ui.fadegallery", {
        options: {
            control_event: "click",
            auto_play: false,
            delay: 2,
            control: c,
            next_btn: c,
            prev_btn: c,
            play_backward: false,
            cbFunction: c
        },
        _create: function() {
            var d = this,
                e = d.options,
                f = d.element;
            this.list = f;
            this.list_items = f.find("> li");
            this.control_items = e.control.find("li");
            this.current_active_index;
            this.onAnimate = false;
            this.list_items.each(function(g) {
                var h = jQuery(this);
                if (h.hasClass(a)) {
                    d.current_active_index = g
                }
            });
            if (d.options.cbFunction != c) {
                d.options.cbFunction(d.current_active_index)
            }
            this.control_items.eq(d.current_active_index).addClass(a);
            if (e.control != c) {
                this.list_items.hover(function() {
                    d._clearTimer()
                }, function() {
                    if (e.auto_play) {
                        d._autoPlay()
                    }
                });
                this.control_items.each(function(g) {
                    var h = jQuery(this);
                    h.bind(e.control_event, function() {
                        if (!h.hasClass(a)) {
                            d.onAnimate = true;
                            d.gotoSlide(g)
                        }
                        d._clearTimer();
                        return false
                    });
                    h.bind("mouseout", function() {
                        if (e.auto_play) {
                            d._autoPlay()
                        }
                    })
                })
            }
            if (e.next_btn != c) {
                e.next_btn.bind("click", function() {
                    if (!d.onAnimate) {
                        d._clearTimer();
                        d.onAnimate = true;
                        d.next()
                    }
                    return false
                })
            }
            if (e.prev_btn != c) {
                e.prev_btn.bind("click", function() {
                    if (!d.onAnimate) {
                        d._clearTimer();
                        d.onAnimate = true;
                        d.prev()
                    }
                    return false
                })
            }
            if (e.auto_play) {
                d._autoPlay()
            }
        },
        _clear: function() {
            this.list_items.eq(this.current_active_index).removeClass(a);
            this.control_items.eq(this.current_active_index).removeClass(a);
            this.current_active_index = c
        },
        _autoPlay: function() {
            var d = this;
            this.timer = setInterval(function() {
                d.onAnimate = true;
                if (!d.options.play_backward) {
                    if (d.current_active_index == d.list_items.length - 1) {
                        d.gotoSlide(0)
                    } else {
                        d.gotoSlide(d.current_active_index + 1)
                    }
                } else {
                    if (d.current_active_index == 0) {
                        d.gotoSlide(d.list_items.length - 1)
                    } else {
                        d.gotoSlide(d.current_active_index - 1)
                    }
                }
            }, this.options.delay * 1000)
        },
        next: function() {
            if (this.current_active_index == this.list_items.length - 1) {
                this.gotoSlide(0)
            } else {
                this.gotoSlide(this.current_active_index + 1)
            }
        },
        prev: function() {
            if (this.current_active_index == 0) {
                this.gotoSlide(this.list_items.length - 1)
            } else {
                this.gotoSlide(this.current_active_index - 1)
            }
        },
        gotoSlide: function(e) {
            var d = this;
            this._swapSlides(this.current_active_index, e, function() {
                d.current_active_index = e;
                if (d.options.cbFunction != c) {
                    d.options.cbFunction(e)
                }
            })
        },
        _swapSlides: function(g, d, h) {
            var e = this;
            if (g != c) {
                e.control_items.eq(g).removeClass(a)
            }
            if ((/MSIE 6\.0/).test(navigator.userAgent)) {
                try {
                    DD_belatedPNG.applyVML(e.control_items.eq(g).find("a").get(0))
                } catch (f) {}
            }
            e.control_items.eq(d).addClass(a);
            if ((/MSIE 6\.0/).test(navigator.userAgent)) {
                try {
                    DD_belatedPNG.applyVML(e.control_items.eq(d).find("a").get(0))
                } catch (f) {}
            }
            this.list_items.eq(d).stop().animate({
                opacity: 1
            });
            if (g != c) {
                this.list_items.eq(g).stop().animate({
                    opacity: 0
                }, "normal", "swing", function() {});
                e.list_items.eq(g).removeClass(a);
                e.list_items.eq(d).addClass(a);
                e._internal_callback();
                if (h != c) {
                    h(e)
                }
            } else {
                e.list_items.eq(d).addClass(a);
                e._internal_callback();
                if (h != c) {
                    h(e)
                }
            }
        },
        _internal_callback: function() {
            this.onAnimate = false;
            if (this.timer == null) {
                if (this.options.auto_play) {
                    this._autoPlay()
                }
            }
        },
        _clearTimer: function() {
            clearInterval(this.timer);
            this.timer = null
        }
    })
})(jQuery);
$(function() {
    var d = "";
    var a = "";
    var b = $("#itemTotal").val();
    $("#news-category-home li a").click(function(f) {
        $("#news-category-home li").removeClass("Active");
        d = $(this).data("category");
        $(this).parent("li").addClass("Active");
        var e = jQuery("#blockNews");
        a = $(this).data("shorturl") + "/" + $(this).data("block-name");
        a += d.length > 0 ? ".1.html?cate=" + d : ".1.html";
        var g = $(this).attr("href");
        $("#newsMore").attr("href", g);
        c(e);
        return false
    });

    function c(e) {
        var f;
        if (f != undefined) {
            f.abort()
        }
        f = jQuery.ajax({
            url: a,
            dataType: "json",
            success: function(g) {
                e.html(g);
                e.data("ajax", 1)
            }
        })
    }
});
$(function() {
    var a = "";
    $("#thuvien li a").click(function() {
        var c = "";
        c = $(this).data("category");
        a = $(this).data("shorturl") + "/" + $(this).data("block-name");
        a += c.length > 0 ? ".1.html?cate=" + c : ".1.html";
        jQuery("ul#thuvien > li ").removeClass("Active");
        $(this).parent().addClass("Active");
        b(c);
        return false
    });

    function b(c) {
        $.ajax({
            url: a,
            dataType: "html",
            success: function(d) {
                if (d.length > 0) {
                    $("#gallery-content").html(d);
                    if (jQuery("#listVideo").length > 0) {
                        jQuery("#listVideo").jcarousel()
                    }
                    if (jQuery("ul#tabHeader").length > 0) {
                        jQuery("ul#tabHeader").Sjcarousel({
                            visible: items,
                            scroll: 3,
                            initCallback: init,
                            itemLastOutCallback: {
                                onAfterAnimation: itemLastOutCallback
                            }
                        })
                    }
                    $(" a[rel^='prettyPhoto']").prettyPhoto();
                    PlayYouTube($("#listVideo li a").eq(0).attr("rel"))
                } else {
                    $("#gallery-content").html("Dữ liệu đang cập nhật")
                }
            }
        })
    }
});
$(document).ready(function() {
    var e = $(".BlockChar");
    var b = e.width();
    var c = 80;
    var a = 507;
    var d = e.children();
    d.css({
        width: c
    });
    d.first().css({
        width: a
    }).children("a").css({
        display: "block",
        opacity: 1
    });
    d.children("a").bind("click", function(f) {
        f.stopPropagation()
    });
    d.bind("click", function(f) {
        f.preventDefault();
        var h = $(this);
        var g = d.not(h);
        g.children().fadeOut();
        g.stop(true, true).animate({
            width: c
        }, function() {
            $(this).removeClass("Active")
        });
        h.children().css({
            opacity: 0,
            display: "block"
        }).animate({
            opacity: 1
        });
        h.stop(true, true).animate({
            width: a
        }, function() {
            $(this).addClass("Active")
        });
        return false
    })
});
$(document).ready(function() {
    var f = $("#shortUri").val();
    var d = $("#itemPerPage").val();
    var a = 1;
    var e = $("#listServer");
    var c = $("#listServer").data("target");
    var b = 0;
    $("#listServer").on("click", ".NumPage li a", function(g) {
        g.preventDefault();
        a = $(this).data("page");
        link = getLinkAjax(a);
        ajaxData(a);
        return false
    });
    $(".NumPage li a[data-page='" + a + "']").addClass("CurPage")
});

function getLinkAjax(a) {
    return shortUri + "home-server-list." + a + ".html?limit=" + itemPerPage
}

function addLoading() {
    $(".Heroes").addClass("loading")
}

function ajaxData(a) {
    ajaxObj = $.ajax({
        type: "GET",
        url: $("#listServer").data("target") + "." + a + ".html?limit=" + limit,
        beforeSend: function() {
            $("#listServer").addClass("loading")
        },
        success: function(b) {
            b = b.replace(/[\r\n]|\s{2,}/ig, "");
            $("#listServer").removeClass("loading");
            $("#listServer").html(b);
            $(".NumPage li a").removeClass("CurPage");
            $(".NumPage li a[data-page='" + a + "']").addClass("CurPage");
            if ($(".SelectUI5").length > 0) {
                $(".SelectUI5").addSelectUI({
                    scrollbarWidth: 10
                })
            }
            if ($("#checklogin").val() == "1") {
                appendListGame()
            }
            scrollToLeft(a);
            jcarouselAjax()
        }
    })
}

function loadListServer() {
    if ($("#listServer").length > 0) {
        var a = $("#listServer").data("target");
        ajaxObj = $.ajax({
            type: "GET",
            url: a + ".1.html?limit=10",
            beforeSend: function() {
                $("#listServer").addClass("loading")
            },
            success: function(b) {
                b = b.replace(/[\r\n]|\s{2,}/ig, "");
                $("#listServer").removeClass("loading");
                $("#listServer").html(b);
                limit = $("#itemPerPage").val();
                if ($(".SelectUI5").length > 0) {
                    $(".SelectUI5").addSelectUI({
                        scrollbarWidth: 10
                    })
                }
                if ($("#checklogin").val() == "1") {
                    appendListGame()
                } else {
                    $(".ContentServerList a,a.PlayNow").each(function(c) {
                        var d = $(this);
                        d.unbind("click").bind("click", function(g) {
                            g.preventDefault();
                            var f = $(this);
                            if (f.closest("ul.NumPage").size()) {
                                return
                            }
                            $("#checklogin").attr("rel", d.attr("href").split("?")[1]);
                            zmeOpenWidget.doLogin()
                        })
                    })
                }
                $(".NumPage li a[data-page='1']").addClass("CurPage");
                jcarouselAjax();
                $(".ContentServer").css({
                    margin: 10
                });
                $(".ContentServer").removeAttr("style")
            }
        })
    }
}
loadListServer();

function scrollToLeft(c) {
    var a = $(".NumPage").offset() ? $(".NumPage").offset().left : 0;
    var b = $(".NumPage li a.CurPage").offset() ? $(".NumPage li a.CurPage").offset().left : 0;
    scrollLeft = b - a;
    $(".NumPage").css({
        left: -scrollLeft
    })
};
var linkServerLogin = "http://bc.360game.vn/quick-play?newzing=0";
var clickTanThu = 0;
jQuery(document).ready(function() {
    $("a.NoLogin").click(function() {
        linkServerLogin = $(this).attr("href");
        zmeOpenWidget.doRegister($("#zme-registerwg").get(0), false);
        return false
    })
});

function appendListGame() {
    $.getJSON("http://360game.vn/script/list-game-recent?userName=" + $("#accountname").val() + "&fromAppName=bc360&callback=?", function(e) {
        var b = jQuery.parseJSON(e.data);
        objLength = b.length;
        if (objLength > 4) {
            objLength = 4
        }
        var d = $("<ul></ul>");
        if (!$(".PlayGameHistory").size()) {
            $(".ServerList").prepend($('<div class="PlayGameHistory"></div>'));
            $(".ServerList").prepend('<p class="history-text">Lịch sử chơi game:</p>');
            var a = null;
            for (var c = 0; c < objLength; c++) {
                if (b[c].server_id) {
                    $('<li><a target="_blank" title="' + b[c].app_title + '" href="' + b[c].link_play + '"><img alt="' + b[c].app_title + '" src="' + b[c].link_image + '"><span class="GameName">' + b[c].app_title + '</span><span class="ServerGameName">[' + b[c].server_id + "]</span></a></li>").appendTo(d)
                } else {
                    $('<li><a target="_blank" title="' + b[c].app_title + '" href="' + b[c].link_play + '"><img alt="' + b[c].app_title + '" src="' + b[c].link_image + '"><span class="GameName">' + b[c].app_title + "</span></a></li>").appendTo(d)
                }
            }
            d.appendTo($(".PlayGameHistory"))
        }
    })
};
jQuery(document).ready(function() {
    var b = $("#loginBox_currentUrl").val();
    var a = $("#loginBox_site").val();
    $.ajax({
        url: a + "/login/home-login.html",
        dataType: "json",
        data: "pageCurrent=" + b,
        beforeSend: function() {
            $("#loginBox").addClass("loading")
        },
        success: function(c) {
            $("#loginBox").removeClass("loading");
            $("#loginBox").html(c);
            script360.fillDataLogin();
            if ($("#checklogin").val() == "1") {
                appendListGame()
            }
        }
    });
    jQuery("#logout").click(function() {
        jQuery(location).attr("href", "http://phongvanthan.com/thoat.1000.html")
    });
    if (jQuery("#userbt").length > 0) {
        jQuery("#userbt").bind("focus", function() {
            if (jQuery(this).val() == "TA i khoản Zing ID") {
                jQuery(this).val("")
            }
        });
        jQuery("#userbt").bind("blur", function() {
            if (jQuery(this).val() == "") {
                jQuery(this).val("TA i khoản Zing ID")
            }
        })
    }
    if (jQuery("#pastbt").length > 0) {
        jQuery("#pastbt").bind("focus", function() {
            if (jQuery(this).val() == "Mật khẩu") {
                jQuery(this).val("")
            }
        });
        jQuery("#pastbt").bind("blur", function() {
            if (jQuery(this).val() == "") {
                jQuery(this).val("Mật khẩu")
            }
        })
    }
    if (jQuery(".SelectUI").length > 0) {
        jQuery(".SelectUI").addSelectUI({
            scrollbarWidth: 10,
            wrapperClass: "RankingType1"
        })
    }
    $("#loginBox").delegate("#u", "focus", function() {
        if (jQuery(this).val() == "TA i khoản Zing ID") {
            jQuery(this).val("")
        }
    });
    $("#loginBox").delegate("#u", "blur", function() {
        if (jQuery(this).val() == "") {
            jQuery(this).val("TA i khoản Zing ID")
        }
    });
    $("#loginBox").delegate("#p", "focus", function() {
        if (jQuery(this).val() == "Mật khẩu") {
            jQuery(this).val("")
        }
    });
    $("#loginBox").delegate("#p", "blur", function() {
        if (jQuery(this).val() == "") {
            jQuery(this).val("Mật khẩu")
        }
    })
});

function checklogin() {
    var a = 0;
    if (jQuery("input[name=u]").val() == "" || jQuery("input[name=u]").val() == "TA i khoản Zing ID") {
        jQuery("input[name=u]").focus();
        alert("Vui lA�ng nhập Zing ID!");
        a++
    } else {
        if (jQuery("input[name=p]").val() == "" || jQuery("input[name=p]").val() == "Mật khẩu") {
            jQuery("input[name=p]").focus();
            alert("Vui lA�ng nhập mật khẩu!");
            a++
        }
    }
    if (a == 0) {
        return true
    } else {
        return false
    }
}

function checklogin2() {
    var a = 0;
    if (jQuery("input[name=userbt]").val() == "" || jQuery("input[name=userbt]").val() == "TA i khoản Zing ID") {
        jQuery("input[name=userbt]").focus();
        alert("Vui lA�ng nhập Zing ID!");
        a++
    } else {
        if (jQuery("input[name=pastbt]").val() == "" || jQuery("input[name=pastbt]").val() == "Mật khẩu") {
            jQuery("input[name=pastbt]").focus();
            alert("Vui lA�ng nhập mật khẩu!");
            a++
        }
    }
    if (a == 0) {
        return true
    } else {
        return false
    }
};
$selectDroplist_Manager = new function() {
    this.els = [];
    this.activeName = null;
    return this
};
$selectDroplist_UI = function(a, b) {
    var c = this;
    this.setupDropListUI = function() {
        var e = 0;
        c.select.find("> *").each(function(i) {
            var p = jQuery(this);
            var q = i;
            if (this.tagName.toLowerCase() == "optgroup") {
                p.each(function() {
                    var s = jQuery(this);
                    var u = s.attr("label");
                    var t = jQuery("<li></li>");
                    t.prepend('<span class="OptgroupLabel">' + u + "</span>");
                    var r = jQuery("<ul></ul>");
                    c.elUL.append(t);
                    t.append(r);
                    s.find("option").each(function(w) {
                        var v = jQuery(this);
                        if (v.attr("value") == "null") {
                            r.append('<li class="SelectUITitle" value="' + parseInt(q + w + e + 1) + '"><a href="#" title="' + v.text() + '" rel="' + v.attr("label") + '">' + v.text() + "</a></li>")
                        } else {
                            if (this.getAttribute("selected") == "selected" || this.getAttribute("selected") == true) {
                                r.append('<li class="Active" value="' + parseInt(q + w + e + 1) + '"><a href="#" title="' + v.text() + '" rel="' + v.attr("label") + '">' + v.text() + "</a></li>")
                            } else {
                                r.append('<li value="' + parseInt(q + w + e + 1) + '"><a href="#" title="' + v.text() + '" rel="' + v.attr("label") + '">' + v.text() + "</a></li>")
                            }
                        }
                    });
                    e += s.find("option").length - 1
                })
            } else {
                if (p.attr("value") == "null") {
                    c.elUL.append('<li class="SelectUITitle" value="' + parseInt(i + e + 1) + '"><a href="#" title="' + p.text() + '" rel="' + p.attr("label") + '">' + p.text() + "</a></li>")
                } else {
                    if (this.getAttribute("selected") == "selected" || this.getAttribute("selected") == true) {
                        c.elUL.append('<li class="Active" value="' + parseInt(i + e + 1) + '"><a href="#" title="' + p.text() + '" rel="' + p.attr("label") + '">' + p.text() + "</a></li>")
                    } else {
                        c.elUL.append('<li value="' + parseInt(i + e + 1) + '"><a href="#" title="' + p.text() + '" rel="' + p.attr("label") + '">' + p.text() + "</a></li>")
                    }
                }
            }
        });
        c.el.html(c.elUL);
        var d = c.elUL.attr("class").split(" ");
        var n = true;
        for (var f = 0; f < d.length; f++) {
            if (d[f].match(/^Theme/)) {
                c.elWrapper.addClass(d[f] + "_Wrapper");
                c.el.addClass(d[f] + "_List");
                n = false
            }
        }
        if (n) {
            c.elWrapper.addClass("Theme_Default_Wrapper");
            c.el.addClass("Theme_Default_List");
            c.elUL.addClass("Theme_Default")
        }
        if (!c.select.attr("multiple")) {
            c.maxDropListHeight = b != undefined && b.maxDropListHeight != undefined ? parseInt(b.maxDropListHeight) : 300;
            c.config = {
                maxDropListHeight: c.maxDropListHeight
            };
            var j = "";
            var l = false;
            c.select.find("option").each(function() {
                var i = jQuery(this);
                if (this.getAttribute("selected") == "selected" || this.getAttribute("selected") == true) {
                    j = i.text();
                    l = true
                }
            });
            if (!l) {
                j = c.select.attr("title") != "" ? c.select.attr("title") : ""
            }
            if (!c.select.attr("disabled")) {
                c.droplistTITLE.text(j);
                c.elWrapper.removeClass("Disabled")
            } else {
                c.droplistTITLE.text("");
                c.elWrapper.addClass("Disabled")
            }
            c.el.show();
            c.el.css({
                position: "absolute",
                left: 0,
                display: "none",
                overflow: "hidden",
                width: c.elUL.width()
            });
            c.el.hide();
            c.el.find("ul > li").each(function(p) {
                var i = jQuery(this);
                i.bind("click", function() {
                    if (i.find("span.OptgroupLabel:first-child").length > 0) {
                        return false
                    } else {
                        if (!c.select.attr("disabled")) {
                            c.el.find("ul > li").removeClass("Active");
                            i.addClass("Active");
                            c.droplistTITLE.text(i.text());
                            c.select.val(c.select.find("option").eq(i.attr("value") - 1).val());
                            c.hideList();
                            callExternalFunction(c, $selectDroplist_Manager.els, i.find("a:first").attr("rel"));
                            i.removeClass("Hover");
                            return false
                        }
                    }
                })
            });
            c.el.bind("click", function(i) {
                return false
            })
        } else {
            var o = c.select.attr("size");
            c.elUL.css({
                height: c.elUL.find("li").eq(0).outerHeight(true) * o,
                overflow: "hidden"
            });
            if (!c.elUL.parent().hasClass("jScrollPaneContainer")) {
                c.elUL.jScrollPane({
                    scrollbarWidth: c.options.scrollbarWidth,
                    scrollbarOnLeft: c.options.scrollbarSide == "left" ? true : false
                })
            }
            var k = null;
            var m = null;
            var g = null;

            function h() {
                c.select.find("option").removeAttr("selected");
                c.elUL.find("li").removeClass("Active")
            }
            c.el.find("ul > li").each(function(p) {
                var i = jQuery(this);
                i.bind("click", function(q) {
                    if (i.find("span.OptgroupLabel:first-child").length > 0) {
                        return false
                    } else {
                        if (!c.select.attr("disabled")) {
                            if (q.ctrlKey && !q.shiftKey) {
                                m = p;
                                c.select.find("option").eq(p).attr("selected", "selected")
                            } else {
                                if ((!q.ctrlKey && q.shiftKey) || (q.ctrlKey && q.shiftKey)) {
                                    if (!q.ctrlKey) {
                                        h()
                                    }
                                    if (m == null) {
                                        m = p
                                    } else {
                                        g = p;
                                        if (m != null && g != null) {
                                            c.el.find("ul > li").each(function(s) {
                                                var r = jQuery(this);
                                                if ((m <= g && s >= m && s <= g) || (m >= g && s <= m && s >= g)) {
                                                    c.select.find("option").eq(s).attr("selected", "selected");
                                                    r.addClass("Active")
                                                }
                                            });
                                            g = null
                                        }
                                    }
                                } else {
                                    h();
                                    c.select.find("option").eq(p).attr("selected", "selected");
                                    m = p
                                }
                            }
                            i.addClass("Active");
                            i.removeClass("Hover");
                            return false
                        }
                    }
                })
            })
        }
        c.el.find("ul > li").each(function(p) {
            var i = jQuery(this);
            i.bind("mouseover", function() {
                i.addClass("Hover");
                return false
            });
            i.bind("mouseout", function() {
                i.removeClass("Hover");
                return false
            })
        })
    };
    this.reset = function() {
        c.elUL.empty();
        c.elUL.removeAttr("class");
        c.elUL.attr("title", c.select.attr("title"));
        c.elUL.addClass(c.select.attr("class"));
        this.setupDropListUI()
    };
    this.showList = function() {
        c.el.addClass("TopLevel DropListUIShow");
        c.el.css({
            top: c.elWrapper.offset().top,
            left: c.elWrapper.offset().left
        });
        c.el.show();
        if (c.el.height() > c.maxDropListHeight && !c.elUL.parent().hasClass("jScrollPaneContainer")) {
            c.elUL.height(c.maxDropListHeight);
            c.elUL.jScrollPane({
                scrollbarWidth: c.options.scrollbarWidth,
                scrollbarOnLeft: c.options.scrollbarSide == "left" ? true : false
            })
        }
        c.setDirection();
        c.eventFire = false
    };
    this.hideList = function() {
        if (c.elUL.parent().hasClass("jScrollPaneContainer")) {
            c.el.prepend(c.elUL.parent())
        } else {
            c.el.prepend(c.elUL)
        }
        c.el.removeClass("TopLevel DropListUIShow");
        c.el.hide()
    };
    this.setDirection = function() {
        var j = jQuery(window).height() + jQuery(window).scrollTop();
        var d = c.elWrapper.offset().top;
        var g = c.elWrapper.offset().top + c.elWrapper.height();
        var e = c.elUL.outerHeight();
        var h = "";
        if (c.config.maxDropListHeight > c.maxDropListHeight) {
            c.maxDropListHeight = c.config.maxDropListHeight
        }
        if (e <= j - g - jQuery(window).scrollTop()) {
            h = "down"
        } else {
            if (j - g > c.maxDropListHeight) {
                h = "down"
            } else {
                if (e < d - jQuery(window).scrollTop()) {
                    h = "up"
                } else {
                    if (d - jQuery(window).scrollTop() > c.maxDropListHeight) {
                        h = "up"
                    } else {
                        if (j - g >= d - jQuery(window).scrollTop()) {
                            h = "down";
                            c.maxDropListHeight = j - g
                        } else {
                            h = "up";
                            c.maxDropListHeight = d - jQuery(window).scrollTop()
                        }
                    }
                }
            }
        }
        var i = (/[0-9]+/).test(c.el.css("borderTopWidth")) ? parseInt(c.el.css("borderTopWidth")) : 0;
        var f = (/[0-9]+/).test(c.el.css("borderBottomWidth")) ? parseInt(c.el.css("borderBottomWidth")) : 0;
        c.maxDropListHeight -= (i + f);
        if (h == "up") {
            c.el.css({
                top: d - c.el.outerHeight(true)
            })
        } else {
            c.el.css({
                top: g
            })
        }
    };
    c.options = {
        scrollbarWidth: b != undefined && b.scrollbarWidth != undefined ? parseInt(b.scrollbarWidth) : 10,
        wrapperClass: b != undefined && b.wrapperClass != undefined ? b.wrapperClass : "",
        scrollbarSide: b != undefined && b.scrollbarSide != undefined ? b.scrollbarSide : "right"
    };
    c.select = a;
    c.select.addClass("HasSelectUI");
    c.select.css({
        opacity: 0,
        position: "absolute",
        left: "-1000em",
        top: "-1000em"
    });
    c.reservedHolder = null;
    c.elWrapper = jQuery('<div class="' + b.wrapperClass + ' DropListUI"></div>');
    c.select.before(c.elWrapper);
    c.el = jQuery('<div class="DropListUIContainer"></div>');
    if (!c.select.attr("multiple")) {
        jQuery("body").append(c.el)
    } else {
        c.elWrapper.html(c.el)
    }
    c.elUL = jQuery('<ul title="' + c.select.attr("title") + '"></ul>');
    c.elUL.addClass(c.select.attr("class"));
    c.el.html(c.elUL);
    if (!c.select.attr("multiple")) {
        c.droplistTITLE = jQuery("<p></p>");
        c.elWrapper.append(c.droplistTITLE);
        c.droplistTITLE.bind("click", function(d) {
            c.eventFire = true;
            if (!c.select.attr("disabled")) {
                if (c.el.hasClass("DropListUIShow")) {
                    c.hideList()
                } else {
                    if ($selectDroplist_Manager.activeName != null) {
                        $selectDroplist_Manager.els[$selectDroplist_Manager.activeName].hideList()
                    }
                    c.showList();
                    $selectDroplist_Manager.activeName = c.select.attr("id")
                }
            }
            return false
        })
    }
    this.setupDropListUI()
};
jQuery.fn.extend({
    addSelectUI: function() {
        if ($selectDroplist_Manager != undefined) {
            jQuery(window).bind("resize", function(b) {
                if ($selectDroplist_Manager.activeName != null && $selectDroplist_Manager.els[$selectDroplist_Manager.activeName] != undefined && !$selectDroplist_Manager.els[$selectDroplist_Manager.activeName].eventFire) {
                    $selectDroplist_Manager.els[$selectDroplist_Manager.activeName].hideList()
                }
            });
            jQuery(document).bind("click", function(b) {
                if ($selectDroplist_Manager.activeName != null) {
                    $selectDroplist_Manager.els[$selectDroplist_Manager.activeName].hideList()
                }
                b.stopPropagation()
            })
        }
        var a = arguments[0];
        this.each(function() {
            if (!jQuery(this).hasClass("HasSelectUI")) {
                jQuery(this).addClass("HasSelectUI");
                $selectDroplist_Manager.els[jQuery(this).attr("id")] = new $selectDroplist_UI(jQuery(this), a)
            }
        })
    }
});

function callExternalFunction(c, a, b) {
    c.select.trigger("onchange")
}

function callServer(a) {
    if (jQuery("#boxDangNhap .User").length > 0) {
        window.open(a, "_blank")
    } else {
        linkServerLogin = a;
        $("#ppregister_link").click()
    }
}

function loadDataRanking(h, g) {
    var e = $("#rankingByType").val();
    var f = g;
    if (e == undefined) {
        e = ""
    }
    if (f == undefined) {
        f = ""
    }
    var b = h.split("&");
    var a = 'block={"' + b[0] + '":{}}&' + b[1];
    var c = b[2] == "''" ? "" : b[2];
    var d = b[0];
    jQuery.ajax({
        type: "POST",
        url: c,
        dataType: "json",
        data: a + "&typeRanking=" + e + "&serverRanking=" + f,
        success: function(i) {
            $("#" + d).html(i[d]);
            addClassTable()
        },
        error: function(i) {}
    })
};
var flashvars = {};
var attributes = {};
var params = {};
params.wmode = "transparent";
params.allowfullscreen = "true";
params.scale = "noscale";
params.quality = "high";
params.allowScriptAccess = "always";
swfobject.embedSWF("swf/choingay_v2.html", "playNow", "275", "190", "8.0.0", false, flashvars, params, attributes);

function ChoiNgay() {
    zmeOpenWidget.doLogin();
    _gaq.push(["_trackEvent", "PlayNow", "Button Flash", "MainSite", 1])
}
console = console ? console : {
    log: function() {}
};
var flashvars2 = {};
var attributes2 = {};
var params2 = {};
params2.wmode = "transparent";
params2.allowfullscreen = "true";
params2.scale = "noscale";
params2.quality = "high";
params2.allowScriptAccess = "always";
swfobject.embedSWF("trailer.html"/*tpa=http://img.zing.vn/products/dbth/skin-dbth-2014/images/home/trailer.swf*/, "flashContent2", "286", "148", "8.0.0", "expressInstall.html"/*tpa=http://img.zing.vn/volam2/images/flashheader/home/expressInstall.swf*/, flashvars2, params2, attributes2);

function OpenVideo() {
    _gaq.push(["_trackEvent", "Trailer", "Button Flash", "MainSite", 1]);
    console.log("test");
    $.fancybox({
        arrows: false,
        helpers: {
            media: true
        },
        youtube: {
            autoplay: 1
        },
        href: "https://www.youtube.com/watch?v=cCuqU9WlDcM&feature=youtu.be",
        beforeShow: function(f, e, h, g) {}
    })
};
/*! jCarousel - v0.3.1 - 2015-01-14
 * http://sorgalla.com/jcarousel
 * Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
(function(b) {
    var a = b.jCarousel = {};
    a.version = "0.3.1";
    var c = /^([+\-]=)?(.+)$/;
    a.parseTarget = function(f) {
        var d = !1,
            g = "object" != typeof f ? c.exec(f) : null;
        return g ? (f = parseInt(g[2], 10) || 0, g[1] && (d = !0, "-=" === g[1] && (f *= -1))) : "object" != typeof f && (f = parseInt(f, 10) || 0), {
            target: f,
            relative: d
        }
    }, a.detectCarousel = function(e) {
        for (var d; e.length > 0;) {
            if (d = e.filter("[data-jcarousel]"), d.length > 0) {
                return d
            }
            if (d = e.find("[data-jcarousel]"), d.length > 0) {
                return d
            }
            e = e.parent()
        }
        return null
    }, a.base = function(d) {
        return {
            version: a.version,
            _options: {},
            _element: null,
            _carousel: null,
            _init: b.noop,
            _create: b.noop,
            _destroy: b.noop,
            _reload: b.noop,
            create: function() {
                return this._element.attr("data-" + d.toLowerCase(), !0).data(d, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this)
            },
            destroy: function() {
                return !1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(d).removeAttr("data-" + d.toLowerCase()), this)
            },
            reload: function(e) {
                return !1 === this._trigger("reload") ? this : (e && this.options(e), this._reload(), this._trigger("reloadend"), this)
            },
            element: function() {
                return this._element
            },
            options: function(e, f) {
                if (0 === arguments.length) {
                    return b.extend({}, this._options)
                }
                if ("string" == typeof e) {
                    if (f === void 0) {
                        return this._options[e] === void 0 ? null : this._options[e]
                    }
                    this._options[e] = f
                } else {
                    this._options = b.extend({}, this._options, e)
                }
                return this
            },
            carousel: function() {
                return this._carousel || (this._carousel = a.detectCarousel(this.options("carousel") || this._element), this._carousel || b.error('Could not detect carousel for plugin "' + d + '"')), this._carousel
            },
            _trigger: function(f, h, g) {
                var k, j = !1;
                return g = [this].concat(g || []), (h || this._element).each(function() {
                    k = b.Event((d + ":" + f).toLowerCase()), b(this).trigger(k, g), k.isDefaultPrevented() && (j = !0)
                }), !j
            }
        }
    }, a.plugin = function(d, g) {
        var f = b[d] = function(e, h) {
            this._element = b(e), this.options(h), this._init(), this.create()
        };
        return f.fn = f.prototype = b.extend({}, a.base(d), g), b.fn[d] = function(h) {
            var j = Array.prototype.slice.call(arguments, 1),
                k = this;
            return "string" == typeof h ? this.each(function() {
                var e = b(this).data(d);
                if (!e) {
                    return b.error("Cannot call methods on " + d + ' prior to initialization; attempted to call method "' + h + '"')
                }
                if (!b.isFunction(e[h]) || "_" === h.charAt(0)) {
                    return b.error('No such method "' + h + '" for ' + d + " instance")
                }
                var i = e[h].apply(e, j);
                return i !== e && i !== void 0 ? (k = i, !1) : void 0
            }) : this.each(function() {
                var i = b(this).data(d);
                i instanceof f ? i.reload(h) : new f(this, h)
            }), k
        }, f
    }
})(jQuery),
function(b, a) {
    var c = function(d) {
        return parseFloat(d) || 0
    };
    b.jCarousel.plugin("jcarousel", {
        animating: !1,
        tail: 0,
        inTail: !1,
        resizeTimer: null,
        lt: null,
        vertical: !1,
        rtl: !1,
        circular: !1,
        underflow: !1,
        relative: !1,
        _options: {
            list: function() {
                return this.element().children().eq(0)
            },
            items: function() {
                return this.list().children()
            },
            animation: 400,
            transitions: !1,
            wrap: null,
            vertical: null,
            rtl: null,
            center: !1
        },
        _list: null,
        _items: null,
        _target: b(),
        _first: b(),
        _last: b(),
        _visible: b(),
        _fullyvisible: b(),
        _init: function() {
            var d = this;
            return this.onWindowResize = function() {
                d.resizeTimer && clearTimeout(d.resizeTimer), d.resizeTimer = setTimeout(function() {
                    d.reload()
                }, 100)
            }, this
        },
        _create: function() {
            this._reload(), b(a).on("resize.jcarousel", this.onWindowResize)
        },
        _destroy: function() {
            b(a).off("resize.jcarousel", this.onWindowResize)
        },
        _reload: function() {
            this.vertical = this.options("vertical"), null == this.vertical && (this.vertical = this.list().height() > this.list().width()), this.rtl = this.options("rtl"), null == this.rtl && (this.rtl = function(f) {
                if ("rtl" === ("" + f.attr("dir")).toLowerCase()) {
                    return !0
                }
                var g = !1;
                return f.parents("[dir]").each(function() {
                    return /rtl/i.test(b(this).attr("dir")) ? (g = !0, !1) : void 0
                }), g
            }(this._element)), this.lt = this.vertical ? "top" : "left", this.relative = "relative" === this.list().css("position"), this._list = null, this._items = null;
            var d = this.index(this._target) >= 0 ? this._target : this.closest();
            this.circular = "circular" === this.options("wrap"), this.underflow = !1;
            var e = {
                left: 0,
                top: 0
            };
            return d.length > 0 && (this._prepare(d), this.list().find("[data-jcarousel-clone]").remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, e[this.lt] = this._position(d) + "px"), this.move(e), this
        },
        list: function() {
            if (null === this._list) {
                var d = this.options("list");
                this._list = b.isFunction(d) ? d.call(this) : this._element.find(d)
            }
            return this._list
        },
        items: function() {
            if (null === this._items) {
                var d = this.options("items");
                this._items = (b.isFunction(d) ? d.call(this) : this.list().find(d)).not("[data-jcarousel-clone]")
            }
            return this._items
        },
        index: function(d) {
            return this.items().index(d)
        },
        closest: function() {
            var f, h = this,
                g = this.list().position()[this.lt],
                k = b(),
                j = !1,
                d = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
            return this.rtl && this.relative && !this.vertical && (g += this.list().width() - this.clipping()), this.items().each(function() {
                if (k = b(this), j) {
                    return !1
                }
                var e = h.dimension(k);
                if (g += e, g >= 0) {
                    if (f = e - c(k.css("margin-" + d)), !(0 >= Math.abs(g) - e + f / 2)) {
                        return !1
                    }
                    j = !0
                }
            }), k
        },
        target: function() {
            return this._target
        },
        first: function() {
            return this._first
        },
        last: function() {
            return this._last
        },
        visible: function() {
            return this._visible
        },
        fullyvisible: function() {
            return this._fullyvisible
        },
        hasNext: function() {
            if (!1 === this._trigger("hasnext")) {
                return !0
            }
            var e = this.options("wrap"),
                d = this.items().length - 1;
            return d >= 0 && !this.underflow && (e && "first" !== e || d > this.index(this._last) || this.tail && !this.inTail) ? !0 : !1
        },
        hasPrev: function() {
            if (!1 === this._trigger("hasprev")) {
                return !0
            }
            var d = this.options("wrap");
            return this.items().length > 0 && !this.underflow && (d && "last" !== d || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1
        },
        clipping: function() {
            return this._element["inner" + (this.vertical ? "Height" : "Width")]()
        },
        dimension: function(d) {
            return d["outer" + (this.vertical ? "Height" : "Width")](!0)
        },
        scroll: function(w, H, A) {
            if (this.animating) {
                return this
            }
            if (!1 === this._trigger("scroll", null, [w, H])) {
                return this
            }
            b.isFunction(H) && (A = H, H = !0);
            var j = b.jCarousel.parseTarget(w);
            if (j.relative) {
                var q, m, t, D, x, G, C, z, B = this.items().length - 1,
                    F = Math.abs(j.target),
                    k = this.options("wrap");
                if (j.target > 0) {
                    var y = this.index(this._last);
                    if (y >= B && this.tail) {
                        this.inTail ? "both" === k || "last" === k ? this._scroll(0, H, A) : b.isFunction(A) && A.call(this, !1) : this._scrollTail(H, A)
                    } else {
                        if (q = this.index(this._target), this.underflow && q === B && ("circular" === k || "both" === k || "last" === k) || !this.underflow && y === B && ("both" === k || "last" === k)) {
                            this._scroll(0, H, A)
                        } else {
                            if (t = q + F, this.circular && t > B) {
                                for (z = B, x = this.items().get(-1); t > z++;) {
                                    x = this.items().eq(0), G = this._visible.index(x) >= 0, G && x.after(x.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(x), G || (C = {}, C[this.lt] = this.dimension(x), this.moveBy(C)), this._items = null
                                }
                                this._scroll(x, H, A)
                            } else {
                                this._scroll(Math.min(t, B), H, A)
                            }
                        }
                    }
                } else {
                    if (this.inTail) {
                        this._scroll(Math.max(this.index(this._first) - F + 1, 0), H, A)
                    } else {
                        if (m = this.index(this._first), q = this.index(this._target), D = this.underflow ? q : m, t = D - F, 0 >= D && (this.underflow && "circular" === k || "both" === k || "first" === k)) {
                            this._scroll(B, H, A)
                        } else {
                            if (this.circular && 0 > t) {
                                for (z = t, x = this.items().get(0); 0 > z++;) {
                                    x = this.items().eq(-1), G = this._visible.index(x) >= 0, G && x.after(x.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(x), this._items = null;
                                    var E = this.dimension(x);
                                    C = {}, C[this.lt] = -E, this.moveBy(C)
                                }
                                this._scroll(x, H, A)
                            } else {
                                this._scroll(Math.max(t, 0), H, A)
                            }
                        }
                    }
                }
            } else {
                this._scroll(j.target, H, A)
            }
            return this._trigger("scrollend"), this
        },
        moveBy: function(f, d) {
            var h = this.list().position(),
                g = 1,
                j = 0;
            return this.rtl && !this.vertical && (g = -1, this.relative && (j = this.list().width() - this.clipping())), f.left && (f.left = h.left + j + c(f.left) * g + "px"), f.top && (f.top = h.top + j + c(f.top) * g + "px"), this.move(f, d)
        },
        move: function(m, y) {
            y = y || {};
            var t = this.options("transitions"),
                d = !!t,
                j = !!t.transforms,
                g = !!t.transforms3d,
                k = y.duration || 0,
                w = this.list();
            if (!d && k > 0) {
                return w.animate(m, y), void 0
            }
            var p = y.complete || b.noop,
                x = {};
            if (d) {
                var v = {
                        transitionDuration: w.css("transitionDuration"),
                        transitionTimingFunction: w.css("transitionTimingFunction"),
                        transitionProperty: w.css("transitionProperty")
                    },
                    q = p;
                p = function() {
                    b(this).css(v), q.call(this)
                }, x = {
                    transitionDuration: (k > 0 ? k / 1000 : 0) + "s",
                    transitionTimingFunction: t.easing || y.easing,
                    transitionProperty: k > 0 ? function() {
                        return j || g ? "all" : m.left ? "left" : "top"
                    }() : "none",
                    transform: "none"
                }
            }
            g ? x.transform = "translate3d(" + (m.left || 0) + "," + (m.top || 0) + ",0)" : j ? x.transform = "translate(" + (m.left || 0) + "," + (m.top || 0) + ")" : b.extend(x, m), d && k > 0 && w.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", p), w.css(x), 0 >= k && w.each(function() {
                p.call(this)
            })
        },
        _scroll: function(d, f, h) {
            if (this.animating) {
                return b.isFunction(h) && h.call(this, !1), this
            }
            if ("object" != typeof d ? d = this.items().eq(d) : d.jquery === void 0 && (d = b(d)), 0 === d.length) {
                return b.isFunction(h) && h.call(this, !1), this
            }
            this.inTail = !1, this._prepare(d);
            var g = this._position(d),
                k = this.list().position()[this.lt];
            if (g === k) {
                return b.isFunction(h) && h.call(this, !1), this
            }
            var j = {};
            return j[this.lt] = g + "px", this._animate(j, f, h), this
        },
        _scrollTail: function(d, f) {
            if (this.animating || !this.tail) {
                return b.isFunction(f) && f.call(this, !1), this
            }
            var h = this.list().position()[this.lt];
            this.rtl && this.relative && !this.vertical && (h += this.list().width() - this.clipping()), this.rtl && !this.vertical ? h += this.tail : h -= this.tail, this.inTail = !0;
            var g = {};
            return g[this.lt] = h + "px", this._update({
                target: this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            }), this._animate(g, d, f), this
        },
        _animate: function(f, g, j) {
            if (j = j || b.noop, !1 === this._trigger("animate")) {
                return j.call(this, !1), this
            }
            this.animating = !0;
            var h = this.options("animation"),
                m = b.proxy(function() {
                    this.animating = !1;
                    var e = this.list().find("[data-jcarousel-clone]");
                    e.length > 0 && (e.remove(), this._reload()), this._trigger("animateend"), j.call(this, !0)
                }, this),
                k = "object" == typeof h ? b.extend({}, h) : {
                    duration: h
                },
                d = k.complete || b.noop;
            return g === !1 ? k.duration = 0 : b.fx.speeds[k.duration] !== void 0 && (k.duration = b.fx.speeds[k.duration]), k.complete = function() {
                m(), d.call(this)
            }, this.move(f, k), this
        },
        _prepare: function(p) {
            var t, g, k, j, m = this.index(p),
                x = m,
                q = this.dimension(p),
                z = this.clipping(),
                w = this.vertical ? "bottom" : this.rtl ? "left" : "right",
                s = this.options("center"),
                v = {
                    target: p,
                    first: p,
                    last: p,
                    visible: p,
                    fullyvisible: z >= q ? p : b()
                };
            if (s && (q /= 2, z /= 2), z > q) {
                for (;;) {
                    if (t = this.items().eq(++x), 0 === t.length) {
                        if (!this.circular) {
                            break
                        }
                        if (t = this.items().eq(0), p.get(0) === t.get(0)) {
                            break
                        }
                        if (g = this._visible.index(t) >= 0, g && t.after(t.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(t), !g) {
                            var y = {};
                            y[this.lt] = this.dimension(t), this.moveBy(y)
                        }
                        this._items = null
                    }
                    if (j = this.dimension(t), 0 === j) {
                        break
                    }
                    if (q += j, v.last = t, v.visible = v.visible.add(t), k = c(t.css("margin-" + w)), z >= q - k && (v.fullyvisible = v.fullyvisible.add(t)), q >= z) {
                        break
                    }
                }
            }
            if (!this.circular && !s && z > q) {
                for (x = m;;) {
                    if (0 > --x) {
                        break
                    }
                    if (t = this.items().eq(x), 0 === t.length) {
                        break
                    }
                    if (j = this.dimension(t), 0 === j) {
                        break
                    }
                    if (q += j, v.first = t, v.visible = v.visible.add(t), k = c(t.css("margin-" + w)), z >= q - k && (v.fullyvisible = v.fullyvisible.add(t)), q >= z) {
                        break
                    }
                }
            }
            return this._update(v), this.tail = 0, s || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(v.last) !== this.items().length - 1 || (q -= c(v.last.css("margin-" + w)), q > z && (this.tail = q - z)), this
        },
        _position: function(f) {
            var d = this._first,
                g = d.position()[this.lt],
                j = this.options("center"),
                h = j ? this.clipping() / 2 - this.dimension(d) / 2 : 0;
            return this.rtl && !this.vertical ? (g -= this.relative ? this.list().width() - this.dimension(d) : this.clipping() - this.dimension(d), g += h) : g -= h, !j && (this.index(f) > this.index(d) || this.inTail) && this.tail ? (g = this.rtl && !this.vertical ? g - this.tail : g + this.tail, this.inTail = !0) : this.inTail = !1, -g
        },
        _update: function(d) {
            var f, h = this,
                g = {
                    target: this._target,
                    first: this._first,
                    last: this._last,
                    visible: this._visible,
                    fullyvisible: this._fullyvisible
                },
                k = this.index(d.first || g.first) < this.index(g.first),
                j = function(i) {
                    var m = [],
                        e = [];
                    d[i].each(function() {
                        0 > g[i].index(this) && m.push(this)
                    }), g[i].each(function() {
                        0 > d[i].index(this) && e.push(this)
                    }), k ? m = m.reverse() : e = e.reverse(), h._trigger(i + "in", b(m)), h._trigger(i + "out", b(e)), h["_" + i] = d[i]
                };
            for (f in d) {
                j(f)
            }
            return this
        }
    })
}(jQuery, window),
function(a) {
    a.jcarousel.fn.scrollIntoView = function(m, z, t) {
        var b, j = a.jCarousel.parseTarget(m),
            g = this.index(this._fullyvisible.first()),
            k = this.index(this._fullyvisible.last());
        if (b = j.relative ? 0 > j.target ? Math.max(0, g + j.target) : k + j.target : "object" != typeof j.target ? j.target : this.index(j.target), g > b) {
            return this.scroll(b, z, t)
        }
        if (b >= g && k >= b) {
            return a.isFunction(t) && t.call(this, !1), this
        }
        for (var x, p = this.items(), y = this.clipping(), w = this.vertical ? "bottom" : this.rtl ? "left" : "right", q = 0;;) {
            if (x = p.eq(b), 0 === x.length) {
                break
            }
            if (q += this.dimension(x), q >= y) {
                var v = parseFloat(x.css("margin-" + w)) || 0;
                q - v !== y && b++;
                break
            }
            if (0 >= b) {
                break
            }
            b--
        }
        return this.scroll(b, z, t)
    }
}(jQuery),
function(a) {
    a.jCarousel.plugin("jcarouselControl", {
        _options: {
            target: "+=1",
            event: "click",
            method: "scroll"
        },
        _active: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this), this.onReload = a.proxy(this._reload, this), this.onEvent = a.proxy(function(b) {
                b.preventDefault();
                var c = this.options("method");
                a.isFunction(c) ? c.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"))
            }, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload()
        },
        _destroy: function() {
            this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
        },
        _reload: function() {
            var b, c = a.jCarousel.parseTarget(this.options("target")),
                f = this.carousel();
            if (c.relative) {
                b = f.jcarousel(c.target > 0 ? "hasNext" : "hasPrev")
            } else {
                var d = "object" != typeof c.target ? f.jcarousel("items").eq(c.target) : c.target;
                b = f.jcarousel("target").index(d) >= 0
            }
            return this._active !== b && (this._trigger(b ? "active" : "inactive"), this._active = b), this
        }
    })
}(jQuery),
function(a) {
    a.jCarousel.plugin("jcarouselPagination", {
        _options: {
            perPage: null,
            item: function(b) {
                return '<a href="#' + b + '">' + b + "</a>"
            },
            event: "click",
            method: "scroll"
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this), this.onReload = a.proxy(this._reload, this), this.onScroll = a.proxy(this._update, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload()
        },
        _destroy: function() {
            this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll), this._carouselItems = null
        },
        _reload: function() {
            var j = this.options("perPage");
            if (this._pages = {}, this._items = {}, a.isFunction(j) && (j = j.call(this)), null == j) {
                this._pages = this._calculatePages()
            } else {
                for (var v, m = parseInt(j, 10) || 0, b = this._getCarouselItems(), f = 1, d = 0;;) {
                    if (v = b.eq(d++), 0 === v.length) {
                        break
                    }
                    this._pages[f] = this._pages[f] ? this._pages[f].add(v) : v, 0 === d % m && f++
                }
            }
            this._clear();
            var g = this,
                q = this.carousel().data("jcarousel"),
                k = this._element,
                t = this.options("item"),
                p = this._getCarouselItems().length;
            a.each(this._pages, function(c, h) {
                var l = g._items[c] = a(t.call(g, c, h));
                l.on(g.options("event") + ".jcarouselpagination", a.proxy(function() {
                    var i = h.eq(0);
                    if (q.circular) {
                        var o = q.index(q.target()),
                            n = q.index(i);
                        parseFloat(c) > parseFloat(g._currentPage) ? o > n && (i = "+=" + (p - o + n)) : n > o && (i = "-=" + (o + (p - n)))
                    }
                    q[this.options("method")](i)
                }, g)), k.append(l)
            }), this._update()
        },
        _update: function() {
            var b, c = this.carousel().jcarousel("target");
            a.each(this._pages, function(d, f) {
                return f.each(function() {
                    return c.is(this) ? (b = d, !1) : void 0
                }), b ? !1 : void 0
            }), this._currentPage !== b && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[b])), this._currentPage = b
        },
        items: function() {
            return this._items
        },
        reloadCarouselItems: function() {
            return this._carouselItems = null, this
        },
        _clear: function() {
            this._element.empty(), this._currentPage = null
        },
        _calculatePages: function() {
            for (var k, g, m = this.carousel().data("jcarousel"), h = this._getCarouselItems(), b = m.clipping(), d = 0, c = 0, f = 1, j = {};;) {
                if (k = h.eq(c++), 0 === k.length) {
                    break
                }
                g = m.dimension(k), d + g > b && (f++, d = 0), d += g, j[f] = j[f] ? j[f].add(k) : k
            }
            return j
        },
        _getCarouselItems: function() {
            return this._carouselItems || (this._carouselItems = this.carousel().jcarousel("items")), this._carouselItems
        }
    })
}(jQuery),
function(a) {
    a.jCarousel.plugin("jcarouselAutoscroll", {
        _options: {
            target: "+=1",
            interval: 3000,
            autostart: !0
        },
        _timer: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this), this.onAnimateEnd = a.proxy(this.start, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy), this.options("autostart") && this.start()
        },
        _destroy: function() {
            this.stop(), this.carousel().off("jcarousel:destroy", this.onDestroy)
        },
        start: function() {
            return this.stop(), this.carousel().one("jcarousel:animateend", this.onAnimateEnd), this._timer = setTimeout(a.proxy(function() {
                this.carousel().jcarousel("scroll", this.options("target"))
            }, this), this.options("interval")), this
        },
        stop: function() {
            return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this
        }
    })
}(jQuery);
(function(b) {
    var a = function(c, d) {
        return d.jcarousel("items").eq(c.index())
    };
    b(function() {
        var d = b(".carousel-stage").jcarousel();
        var c = b(".carousel-navigation").jcarousel();
        c.jcarousel("items").each(function() {
            var e = b(this);
            var f = a(e, d);
            e.on("jcarouselcontrol:active", function() {
                c.jcarousel("scrollIntoView", this);
                e.addClass("active")
            }).on("jcarouselcontrol:inactive", function() {
                e.removeClass("active")
            }).jcarouselControl({
                target: f,
                carousel: d
            })
        });
        b(".prev-stage").on("jcarouselcontrol:inactive", function() {
            b(this).addClass("inactive")
        }).on("jcarouselcontrol:active", function() {
            b(this).removeClass("inactive")
        }).jcarouselControl({
            target: "-=1"
        });
        b(".next-stage").on("jcarouselcontrol:inactive", function() {
            b(this).addClass("inactive")
        }).on("jcarouselcontrol:active", function() {
            b(this).removeClass("inactive")
        }).jcarouselControl({
            target: "+=1"
        });
        b(".prev-navigation").on("jcarouselcontrol:inactive", function() {
            b(this).addClass("inactive")
        }).on("jcarouselcontrol:active", function() {
            b(this).removeClass("inactive")
        }).jcarouselControl({
            target: "-=1"
        });
        b(".next-navigation").on("jcarouselcontrol:inactive", function() {
            b(this).addClass("inactive")
        }).on("jcarouselcontrol:active", function() {
            b(this).removeClass("inactive")
        }).jcarouselControl({
            target: "+=1"
        })
    })
})(jQuery);
var globObj = {};
var flashvars = {};
var attributes = {};
var params = {};
params.wmode = "transparent";
params.allowfullscreen = "true";
params.scale = "noscale";
params.quality = "high";
params.allowScriptAccess = "always";
var htmlLikeFanpage = "";
var isIE6 = false;
jQuery(document).ready(function() {
    showPopupSocial.init({
        RelativeID: "popup-social-home",
        typePage: "home",
        isDisableSend: true,
        isVportalLike: false,
        isZingMe: false
    }, function() {
        htmlLikeFanpage = '<div style="margin:10px 0;" class="fb-like" data-href="https://www.facebook.com/phongvanthan.com" data-layout="box_count" data-action="like" data-show-faces="true" data-share="false"></div>';
        $("#popup-social-home .button-control .group-facebook").append(htmlLikeFanpage)
    });
    $("#sidenavMenu > li > a.HasChild").unbind().click(function(a) {
        a.preventDefault();
        var c = $(this);
        var b = c.parent();
        if (b.hasClass("Active")) {
            b.children("ul").show().slideUp(function() {
                b.removeClass("Active")
            })
        } else {
            b.children("ul").show().slideDown(function() {
                b.addClass("Active")
            })
        }
    });
    if ($(".breadcrumb").size()) {
        var m = $(".breadcrumb li:last");
        if (m.text().indexOf(">") !== -1) {
            m.remove()
        }
    }
    $(".DownLoadMiniClient").click(function(a) {
        a.preventDefault();
        download360.hacq("mini")
    });
    $(".DownLoadFullClient").click(function(a) {
        a.preventDefault();
        client: download360.hacq("full")
    });
    $(".off, .Off").click(function(a) {
        a.preventDefault();
        return false
    });
    if ($(".ListNoiDungThuVien a").length > 0) {
        $(".ListNoiDungThuVien a").click(function() {
            $(this).attr("href", $(".ViewMoreGallery").attr("href"))
        })
    }
    if ($("#BannerEvent").length > 0) {
        $("#BannerEvent .carousel").jcarousel({
            wrap: "last"
        }).jcarouselAutoscroll({
            interval: 3000,
            target: "+=1",
            autostart: true
        })
    }
    $(".navigation").css({
        width: $(".navigation ul li").length * 30
    });
    var q = $(document).width();
    var i = $(window).height();
    if (q < 1050) {
        $("#btnChiase").show();
        $("#btn-survey").hide()
    }
    $("#btnChiase").click(function() {
        $("#btnChiase").hide();
        $("#btn-survey").show();
        return false
    });
    if ($("#carouselChar").size()) {
        var r = $("#carouselChar").featureCarousel({
            smallFeatureWidth: 130,
            smallFeatureHeight: 250,
            smallFeatureOffset: 30,
            autoPlay: 0
        });
        $("#carousel-left").click(function() {
            r.prev()
        });
        $("#carousel-right").click(function() {
            r.next()
        })
    }
    var k = $(".BoxThuVien ");
    if (k.length > 0) {
        if ($(".ListPhimAnh").length > 0) {}
        k.find(".TabMenu a").bind("click", function(a) {
            a.preventDefault();
            k.find(".TabMenu li").removeClass("Active");
            k.find(".ListNoiDungThuVien").removeClass("Active");
            var b = $(this).parent().index();
            $(".ViewMoreGallery").attr("href", $(this).attr("href"));
            k.find(".TabMenu li").eq(b).addClass("Active");
            k.find(".ListNoiDungThuVien").eq(b).addClass("Active");
            return false
        })
    }
    jQuery(window).resize(function() {
        var a = $(document).width();
        if (a < 1050) {
            $("#btnChiase").show();
            $("#btn-survey").hide()
        } else {
            $("#btnChiase").hide();
            $("#btn-survey").show()
        }
    });
    $(".survey").css({
        left: (q / 2) - 250
    });
    $("#survey-close").click(function() {
        closeVideo("surveyHomepage")
    });
    $("#btn-survey").click(function() {
        $("#ifr-survey").attr("src", "http://www.surveygizmo.com/s3/1836283/khao-sat-website");
        createOverlays("surveyHomepage")
    });
    if ($(".search-query") != undefined) {
        $(".search-query").bind("focus", function() {
            if ($(this).val() == "Nhập từ khA�a") {
                $(this).val("")
            }
        });
        jQuery(".search-query").bind("blur", function() {
            if (jQuery(this).val() == "") {
                jQuery(this).val("Nhập từ khA�a")
            }
        })
    }
    jQuery(".HoTro").click(function() {
        var a = jQuery(this).attr("href");
        PopupHD(a);
        return false
    });
    setTimeout(function() {
        $("#popup-social-home .button-control .group-facebook").append('<a rel="nofollow" class="btn-my-nu" href="http://cctalk.vn/go.html?roomid=222" target="_blank" title="Mỹ nữ trợ giA�p" >Mỹ nữ trợ giA�p</a>')
    }, 10000);
    if (jQuery("#bannerPopup > div > a > img").length) {
        var l = jQuery(window).height();
        var p = jQuery(window).width();
        var o = jQuery(document).height();
        var j = jQuery("#bannerPopup").height();
        var n = jQuery("#bannerPopup").width();
        $("#thewindowbackground").css({
            display: "block",
            position: "fixed",
            width: p,
            height: l
        });
        jQuery("#bannerPopup").css({
            display: "block",
            position: "fixed",
            top: l - j > 0 ? (l - j) / 2 : 0,
            left: (p - n) / 2
        });
        jQuery("#btClose,#popupBtnClose").click(function() {
            jQuery("#bannerPopup,#thewindowbackground").css({
                display: "none"
            });
            _gaq.push(["_trackEvent", "Banner Popup", "Close - Button", jQuery("#bannerPopup > div > a > img").attr("alt")]);
            return false
        });
        jQuery(window).resize(function() {
            e = jQuery(window).scrollTop();
            l = jQuery(window).height();
            p = jQuery(window).width();
            jQuery("#thewindowbackground").css({
                height: o,
                width: p
            });
            if (isIE6) {
                jQuery("#bannerPopup").css({
                    top: e + (l - j > 0 ? (l - j) / 2 : 0),
                    left: (p - n) / 2
                })
            } else {
                jQuery("#bannerPopup").css({
                    top: l - j > 0 ? (l - j) / 2 : 0,
                    left: (p - n) / 2
                })
            }
        })
    }
    if (jQuery("#bannerPopupBottom > div > a > img").length) {
        jQuery("#bannerPopupBottom").css({
            display: "block"
        });
        jQuery("#btCloseBottom").click(function() {
            jQuery("#bannerPopupBottom").css({
                display: "none"
            });
            _gaq.push(["_trackEvent", "Banner Popup Bottom", "Close", jQuery("#bannerPopupBottom > div > a > img").attr("alt")]);
            return false
        })
    }
    var g = getUrlParameter("cate");
    if (g != undefined) {
        $("ul#tabHeader").find("li.Active").removeClass("Active");
        $("ul#tabHeader").find("li > a[data-target='" + g + "']").parent().addClass("Active")
    }
});

function PopupHD(a) {
    windowWidth = (jQuery(window).width() - 1020) / 2;
    windowHeight = (jQuery(window).height() - 450) / 2;
    window.open(a, "mywindow", "status=1, scrollbars=1, height=623, width=1020, top=" + windowHeight + ",left=" + windowWidth)
}

function getUrlParameter(a) {
    var d = window.location.search.substring(1);
    var c = d.split("&");
    for (var b = 0; b < c.length; b++) {
        var f = c[b].split("=");
        if (f[0] == a) {
            return f[1]
        }
    }
}

function jcarouselAjax() {
    $(".jcarousel").jcarousel();
    $(".jcarousel-control-prev").on("jcarouselcontrol:active", function() {
        $(this).removeClass("inactive")
    }).on("jcarouselcontrol:inactive", function() {
        $(this).addClass("inactive")
    }).jcarouselControl({
        target: "-=1"
    });
    $(".jcarousel-control-next").on("jcarouselcontrol:active", function() {
        $(this).removeClass("inactive")
    }).on("jcarouselcontrol:inactive", function() {
        $(this).addClass("inactive")
    }).jcarouselControl({
        target: "+=1"
    });
    $(".jcarousel-pagination").on("jcarouselpagination:active", "a", function() {
        $(this).addClass("active")
    }).on("jcarouselpagination:inactive", "a", function() {
        $(this).removeClass("active")
    }).jcarouselPagination()
}
jcarouselAjax();
var masWrapperObj = masWrapperObj || {};
var grp = grp || jQuery();
masWrapperObj.setCookie = masWrapperObj.setCookie || function(a, g) {
    var f = new Date();
    var b = 30;
    var d = f.getTime();
    var c = window.location.host;
    f.setTime(d + (b * 60 * 1000));
    var e = escape(g) + ((b == null) ? "" : ";domain=." + c + ";path=/;expires=" + f.toUTCString());
    document.cookie = a + "=" + e
};
masWrapperObj.getCookie = masWrapperObj.getCookie || function(b) {
    var c, a, e, d = document.cookie.split(";");
    for (c = 0; c < d.length; c++) {
        a = d[c].substr(0, d[c].indexOf("="));
        e = d[c].substr(d[c].indexOf("=") + 1);
        a = a.replace(/^\s+|\s+$/g, "");
        if (a == b) {
            return unescape(e)
        }
    }
    return ""
};
masWrapperObj.customTrack = function(a, b) {
    if (typeof MASHTTPSource != "undefined" && MASHTTPSource) {
        var d = jQuery("[href*='" + MASHTTPSource + "']");
        grp = grp.add(d);
        d.each(function(e, f) {
            var g = jQuery(this);
            if (!g.hasClass("DownloadHttp")) {
                g.bind("click", function() {
                    if (!g.hasClass("DownloadBin")) {
                        var h = g.attr("href");
                        var i = h.split("index.html");
                        var k = i[i.length - 1];
                        extensionTypeArray = k.split(".");
                        extensionName = extensionTypeArray[extensionTypeArray.length - 1];
                        if (extensionName == "bin" || extensionName.match(/^[0-9]+$/)) {
                            getFileNameBin(h, a);
                            var l = getFileNameOnly(jQuery(this).attr("href"), a);
                            var j = ((a) ? "idb=" + a + "&" : "") + "gc=" + b + "&file=" + l + "&status=2";
                            trackingMASClient(j);
                            return false
                        }
                    }
                    var l = getFileName(jQuery(this).attr("href"), a);
                    var j = ((a) ? "idb=" + a + "&" : "") + "gc=" + b + "&file=" + l + "&status=2";
                    trackingMASClient(j);
                    return false
                });
                g.bind("contextmenu", function(h) {
                    h.preventDefault();
                    return false
                })
            }
        })
    }
    if (typeof MASHTTPListCustomSource != "undefined" && MASHTTPListCustomSource) {
        for (var c in MASHTTPListCustomSource) {
            var d = jQuery("[href='" + MASHTTPListCustomSource[c]["url"] + "']");
            if (!d.hasClass("DownloadHttp")) {
                (function(f, e) {
                    f.bind("click", function() {
                        if (!f.hasClass("DownloadBin")) {
                            var g = f.attr("href");
                            var h = g.split("index.html");
                            var j = h[h.length - 1];
                            extensionTypeArray = j.split(".");
                            extensionName = extensionTypeArray[extensionTypeArray.length - 1];
                            if (extensionName == "bin" || extensionName.match(/^[0-9]+$/)) {
                                getFileNameBin(g, a);
                                var k = getFileNameOnly(jQuery(this).attr("href"), a);
                                if (typeof MASHTTPListCustomSource[e]["status"] != "undefined") {
                                    var i = ((a) ? "idb=" + a + "&" : "") + "gc=" + b + "&file=" + k + "&status=" + MASHTTPListCustomSource[e]["status"];
                                    trackingMASClient(i)
                                }
                                return false
                            }
                        }
                        var k = getFileName(jQuery(this).attr("href"), a);
                        if (typeof MASHTTPListCustomSource[e]["status"] != "undefined") {
                            var i = ((a) ? "idb=" + a + "&" : "") + "gc=" + b + "&file=" + k + "&status=" + MASHTTPListCustomSource[e]["status"];
                            trackingMASClient(i)
                        }
                        return false
                    });
                    f.bind("contextmenu", function(g) {
                        g.preventDefault();
                        return false
                    })
                })(d, c)
            }
        }
    }
};
jQuery(document).ready(function() {
    var a, b = "";
    a = getURLParameterClient("idb");
    b = getURLParameterClient("utm_term");
    if (typeof productCode !== "undefined") {
        b = productCode
    }
    if (a != undefined && a != "") {
        masWrapperObj.customTrack(a, b);
        grp = grp.add(jQuery(".DownloadOpen").bind("click", function() {
            var c = "idb=" + a + "&gc=" + b + "&status=1";
            trackingMASClient(c)
        }));
        grp = grp.add(jQuery(".DownloadHttp").bind("click", function() {
            var d = getFileName(jQuery(this).attr("href"), a);
            var c = "idb=" + a + "&gc=" + b + "&file=" + d + "&status=2";
            trackingMASClient(c);
            return false
        }));
        grp = grp.add(jQuery(".DownloadVDownload").bind("click", function() {
            var d = getFileName(jQuery(this).attr("href"), a);
            var c = "idb=" + a + "&gc=" + b + "&file=" + d + "&status=3";
            trackingMASClient(c);
            return false
        }));
        grp = grp.add(jQuery(".DownloadTorrent").bind("click", function() {
            var d = getFileName(jQuery(this).attr("href"), a);
            var c = "idb=" + a + "&gc=" + b + "&file=" + d + "&status=4";
            trackingMASClient(c);
            return false
        }));
        grp = grp.add(jQuery(".DownloadBin").bind("click", function() {
            var c = getFileNameBin(jQuery(this).attr("href"), a);
            return false
        }))
    } else {
        masWrapperObj.customTrack(0, b);
        grp = grp.add(jQuery(".DownloadOpen").bind("click", function() {
            var c = "gc=" + b + "&status=1";
            trackingMASClient(c)
        }));
        grp = grp.add(jQuery(".DownloadHttp").bind("click", function() {
            var d = getFileName(jQuery(this).attr("href"), 0);
            var c = "gc=" + b + "&file=" + d + "&status=2";
            trackingMASClient(c);
            return false
        }));
        grp = grp.add(jQuery(".DownloadVDownload").bind("click", function() {
            var d = getFileName(jQuery(this).attr("href"), 0);
            var c = "gc=" + b + "&file=" + d + "&status=3";
            trackingMASClient(c);
            return false
        }));
        grp = grp.add(jQuery(".DownloadTorrent").bind("click", function() {
            var d = getFileName(jQuery(this).attr("href"), 0);
            var c = "gc=" + b + "&file=" + d + "&status=4";
            trackingMASClient(c);
            return false
        }));
        grp = grp.add(jQuery(".DownloadBin").bind("click", function() {
            var c = getFileNameBin(jQuery(this).attr("href"), 0);
            return false
        }))
    }
    grp.bind("contextmenu", function(c) {
        c.preventDefault();
        return false
    })
});

function trackingMASClient(a) {
    jQuery("body").append('<div class="trackingMASClient" style="width:0px;height:0px;overflow:hidden"><img src="http://mas.zing.vn/client.php?' + a + '" width="0" height="0" alt="mas" /></div>')
}

function pathProcess() {
    var a = window.location.search.substring(1);
    if (a != "" && a.indexOf("idb") > -1 && a.indexOf("utm_term")) {
        masWrapperObj.setCookie("MASClientParams", a);
        return a
    }
    var b = masWrapperObj.getCookie("MASClientParams");
    if (b.indexOf("idb") > -1 && b.indexOf("utm_term")) {
        masWrapperObj.setCookie("MASClientParams", b);
        return b
    }
    return ""
}
pathProcess();

function getURLParameterClient(a) {
    var d = pathProcess();
    var c = d.split("&");
    for (var b = 0; b < c.length; b++) {
        var e = c[b].split("=");
        if (e[0] == a) {
            return e[1]
        }
    }
}

function getFileNameBin(b, a) {
    var c = b.split("index.html");
    var d = c[c.length - 1];
    extensionTypeArray = d.split("-");
    extensionName = extensionTypeArray[extensionTypeArray.length - 1];
    str = d.substring(0, d.length - extensionName.length - 1);
    str += "." + a + "-" + extensionName;
    window.location.href = b + "?filename=" + str;
    return str
}

function getFileName(b, a) {
    var c = b.split("index.html");
    var d = c[c.length - 1];
    extensionTypeArray = d.split(".");
    extensionName = extensionTypeArray[extensionTypeArray.length - 1];
    str = d.substring(0, d.length - extensionName.length);
    str += (typeof a != "undefined" ? a : "0") + "." + extensionName;
    window.location.href = b + "?filename=" + str;
    return str
}

function getFileNameOnly(b, a) {
    var c = b.split("index.html");
    var d = c[c.length - 1];
    extensionTypeArray = d.split(".");
    extensionName = extensionTypeArray[extensionTypeArray.length - 1];
    str = d.substring(0, d.length - extensionName.length);
    str += (typeof a != "undefined" ? a : "0") + "." + extensionName;
    return str
}

function flashTrackingDownload(f) {
    if (!f) {
        f = MASHTTPSource
    }
    if (!f) {
        return
    }
    idBanner = getURLParameterClient("idb");
    gameCode = getURLParameterClient("utm_term");
    if (typeof productCode !== "undefined") {
        gameCode = productCode
    }
    var a = f;
    var b = a.split("index.html");
    var d = b[b.length - 1];
    extensionTypeArray = d.split(".");
    extensionName = extensionTypeArray[extensionTypeArray.length - 1];
    var e = getFileName(f, idBanner);
    var c = ((idBanner) ? "idb=" + idBanner + "&" : "") + "gc=" + gameCode + "&file=" + e + "&status=2";
    trackingMASClient(c)
}

function flashTrackingVDownload(f) {
    if (!f) {
        f = MASHTTPSource
    }
    if (!f) {
        return
    }
    idBanner = getURLParameterClient("idb");
    gameCode = getURLParameterClient("utm_term");
    if (typeof productCode !== "undefined") {
        gameCode = productCode
    }
    var a = f;
    var b = a.split("index.html");
    var d = b[b.length - 1];
    extensionTypeArray = d.split(".");
    extensionName = extensionTypeArray[extensionTypeArray.length - 1];
    var e = getFileName(f, idBanner);
    var c = ((idBanner) ? "idb=" + idBanner + "&" : "") + "gc=" + gameCode + "&file=" + e + "&status=3";
    trackingMASClient(c)
}

function addSaveParam() {
    var a = window.location.href;
    if (a.indexOf("utm_source") != -1) {
        var c = a.split("?");
        var b = c[1];
        jQuery("a").each(function() {
            var e = jQuery(this);
            var d = (e.attr("href"));
            if (d.indexOf("?") != -1) {
                e.attr("href", d + "&" + b)
            } else {
                e.attr("href", d + "?" + b)
            }
        })
    }
};