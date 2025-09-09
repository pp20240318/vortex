"use strict";
(self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || []).push([[4529], {
    4529: (e, n, t) => {
        t.r(n),
        t.d(n, {
            componentsToDebugString: () => je,
            default: () => Pe,
            getFullscreenElement: () => T,
            getUnstableAudioFingerprint: () => z,
            getUnstableCanvasFingerprint: () => $,
            getUnstableScreenFrame: () => ie,
            getUnstableScreenResolution: () => ne,
            getWebGLContext: () => Se,
            hashComponents: () => Ce,
            isAndroid: () => _,
            isChromium: () => E,
            isDesktopWebKit: () => H,
            isEdgeHTML: () => X,
            isGecko: () => N,
            isSamsungInternet: () => D,
            isTrident: () => Y,
            isWebKit: () => P,
            load: () => Ee,
            loadSources: () => j,
            murmurX64Hash128: () => He,
            prepareForSources: () => Ye,
            sources: () => Ge,
            transformSource: () => C,
            withIframe: () => O
        });
        var r = function() {
            return r = Object.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var o in n = arguments[t])
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                return e
            }
            ,
            r.apply(this, arguments)
        };
        function o(e, n, t, r) {
            return new (t || (t = Promise))((function(o, i) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    var n;
                    e.done ? o(e.value) : (n = e.value,
                    n instanceof t ? n : new t((function(e) {
                        e(n)
                    }
                    ))).then(a, c)
                }
                u((r = r.apply(e, n || [])).next())
            }
            ))
        }
        function i(e, n) {
            var t, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            }, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return a.next = c(0),
            a.throw = c(1),
            a.return = c(2),
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function c(c) {
                return function(u) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a && (a = 0,
                        c[0] && (i = 0)),
                        i; )
                            try {
                                if (t = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        i.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                        i.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2],
                                        i.ops.push(c);
                                        break
                                    }
                                    o[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                c = n.call(e, i)
                            } catch (e) {
                                c = [6, e],
                                r = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, u])
                }
            }
        }
        function a(e, n, t) {
            if (t || 2 === arguments.length)
                for (var r, o = 0, i = n.length; o < i; o++)
                    !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)),
                    r[o] = n[o]);
            return e.concat(r || Array.prototype.slice.call(n))
        }
        Object.create,
        Object.create,
        "function" == typeof SuppressedError && SuppressedError;
        var c = "4.5.1";
        function u(e, n) {
            return new Promise((function(t) {
                return setTimeout(t, e, n)
            }
            ))
        }
        function s(e) {
            return !!e && "function" == typeof e.then
        }
        function l(e, n) {
            try {
                var t = e();
                s(t) ? t.then((function(e) {
                    return n(!0, e)
                }
                ), (function(e) {
                    return n(!1, e)
                }
                )) : n(!0, t)
            } catch (e) {
                n(!1, e)
            }
        }
        function d(e, n, t) {
            return void 0 === t && (t = 16),
            o(this, void 0, void 0, (function() {
                var r, o, a, c;
                return i(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        r = Array(e.length),
                        o = Date.now(),
                        a = 0,
                        i.label = 1;
                    case 1:
                        return a < e.length ? (r[a] = n(e[a], a),
                        (c = Date.now()) >= o + t ? (o = c,
                        [4, new Promise((function(e) {
                            var n = new MessageChannel;
                            n.port1.onmessage = function() {
                                return e()
                            }
                            ,
                            n.port2.postMessage(null)
                        }
                        ))]) : [3, 3]) : [3, 4];
                    case 2:
                        i.sent(),
                        i.label = 3;
                    case 3:
                        return ++a,
                        [3, 1];
                    case 4:
                        return [2, r]
                    }
                }
                ))
            }
            ))
        }
        function f(e) {
            return e.then(void 0, (function() {}
            )),
            e
        }
        function m(e) {
            return parseInt(e)
        }
        function v(e) {
            return parseFloat(e)
        }
        function h(e, n) {
            return "number" == typeof e && isNaN(e) ? n : e
        }
        function p(e) {
            return e.reduce((function(e, n) {
                return e + (n ? 1 : 0)
            }
            ), 0)
        }
        function b(e, n) {
            if (void 0 === n && (n = 1),
            Math.abs(n) >= 1)
                return Math.round(e / n) * n;
            var t = 1 / n;
            return Math.round(e * t) / t
        }
        function y(e, n) {
            var t = e[0] >>> 16
              , r = 65535 & e[0]
              , o = e[1] >>> 16
              , i = 65535 & e[1]
              , a = n[0] >>> 16
              , c = 65535 & n[0]
              , u = n[1] >>> 16
              , s = 0
              , l = 0
              , d = 0
              , f = 0;
            d += (f += i + (65535 & n[1])) >>> 16,
            f &= 65535,
            l += (d += o + u) >>> 16,
            d &= 65535,
            s += (l += r + c) >>> 16,
            l &= 65535,
            s += t + a,
            s &= 65535,
            e[0] = s << 16 | l,
            e[1] = d << 16 | f
        }
        function g(e, n) {
            var t = e[0] >>> 16
              , r = 65535 & e[0]
              , o = e[1] >>> 16
              , i = 65535 & e[1]
              , a = n[0] >>> 16
              , c = 65535 & n[0]
              , u = n[1] >>> 16
              , s = 65535 & n[1]
              , l = 0
              , d = 0
              , f = 0
              , m = 0;
            f += (m += i * s) >>> 16,
            m &= 65535,
            d += (f += o * s) >>> 16,
            f &= 65535,
            d += (f += i * u) >>> 16,
            f &= 65535,
            l += (d += r * s) >>> 16,
            d &= 65535,
            l += (d += o * u) >>> 16,
            d &= 65535,
            l += (d += i * c) >>> 16,
            d &= 65535,
            l += t * s + r * u + o * c + i * a,
            l &= 65535,
            e[0] = l << 16 | d,
            e[1] = f << 16 | m
        }
        function w(e, n) {
            var t = e[0];
            32 == (n %= 64) ? (e[0] = e[1],
            e[1] = t) : n < 32 ? (e[0] = t << n | e[1] >>> 32 - n,
            e[1] = e[1] << n | t >>> 32 - n) : (n -= 32,
            e[0] = e[1] << n | t >>> 32 - n,
            e[1] = t << n | e[1] >>> 32 - n)
        }
        function L(e, n) {
            0 != (n %= 64) && (n < 32 ? (e[0] = e[1] >>> 32 - n,
            e[1] = e[1] << n) : (e[0] = e[1] << n - 32,
            e[1] = 0))
        }
        function k(e, n) {
            e[0] ^= n[0],
            e[1] ^= n[1]
        }
        var V = [4283543511, 3981806797]
          , S = [3301882366, 444984403];
        function W(e) {
            var n = [0, e[0] >>> 1];
            k(e, n),
            g(e, V),
            n[1] = e[0] >>> 1,
            k(e, n),
            g(e, S),
            n[1] = e[0] >>> 1,
            k(e, n)
        }
        var x = [2277735313, 289559509]
          , Z = [1291169091, 658871167]
          , M = [0, 5]
          , R = [0, 1390208809]
          , G = [0, 944331445];
        function F(e, n) {
            var t = function(e) {
                for (var n = new Uint8Array(e.length), t = 0; t < e.length; t++) {
                    var r = e.charCodeAt(t);
                    if (r > 127)
                        return (new TextEncoder).encode(e);
                    n[t] = r
                }
                return n
            }(e);
            n = n || 0;
            var r, o = [0, t.length], i = o[1] % 16, a = o[1] - i, c = [0, n], u = [0, n], s = [0, 0], l = [0, 0];
            for (r = 0; r < a; r += 16)
                s[0] = t[r + 4] | t[r + 5] << 8 | t[r + 6] << 16 | t[r + 7] << 24,
                s[1] = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24,
                l[0] = t[r + 12] | t[r + 13] << 8 | t[r + 14] << 16 | t[r + 15] << 24,
                l[1] = t[r + 8] | t[r + 9] << 8 | t[r + 10] << 16 | t[r + 11] << 24,
                g(s, x),
                w(s, 31),
                g(s, Z),
                k(c, s),
                w(c, 27),
                y(c, u),
                g(c, M),
                y(c, R),
                g(l, Z),
                w(l, 33),
                g(l, x),
                k(u, l),
                w(u, 31),
                y(u, c),
                g(u, M),
                y(u, G);
            s[0] = 0,
            s[1] = 0,
            l[0] = 0,
            l[1] = 0;
            var d = [0, 0];
            switch (i) {
            case 15:
                d[1] = t[r + 14],
                L(d, 48),
                k(l, d);
            case 14:
                d[1] = t[r + 13],
                L(d, 40),
                k(l, d);
            case 13:
                d[1] = t[r + 12],
                L(d, 32),
                k(l, d);
            case 12:
                d[1] = t[r + 11],
                L(d, 24),
                k(l, d);
            case 11:
                d[1] = t[r + 10],
                L(d, 16),
                k(l, d);
            case 10:
                d[1] = t[r + 9],
                L(d, 8),
                k(l, d);
            case 9:
                d[1] = t[r + 8],
                k(l, d),
                g(l, Z),
                w(l, 33),
                g(l, x),
                k(u, l);
            case 8:
                d[1] = t[r + 7],
                L(d, 56),
                k(s, d);
            case 7:
                d[1] = t[r + 6],
                L(d, 48),
                k(s, d);
            case 6:
                d[1] = t[r + 5],
                L(d, 40),
                k(s, d);
            case 5:
                d[1] = t[r + 4],
                L(d, 32),
                k(s, d);
            case 4:
                d[1] = t[r + 3],
                L(d, 24),
                k(s, d);
            case 3:
                d[1] = t[r + 2],
                L(d, 16),
                k(s, d);
            case 2:
                d[1] = t[r + 1],
                L(d, 8),
                k(s, d);
            case 1:
                d[1] = t[r],
                k(s, d),
                g(s, x),
                w(s, 31),
                g(s, Z),
                k(c, s)
            }
            return k(c, o),
            k(u, o),
            y(c, u),
            y(u, c),
            W(c),
            W(u),
            y(c, u),
            y(u, c),
            ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
        }
        function I(e) {
            return "function" != typeof e
        }
        function j(e, n, t, r) {
            var a = Object.keys(e).filter((function(e) {
                return !function(e, n) {
                    for (var t = 0, r = e.length; t < r; ++t)
                        if (e[t] === n)
                            return !0;
                    return !1
                }(t, e)
            }
            ))
              , c = f(d(a, (function(t) {
                return function(e, n) {
                    var t = f(new Promise((function(t) {
                        var r = Date.now();
                        l(e.bind(null, n), (function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var o = Date.now() - r;
                            if (!e[0])
                                return t((function() {
                                    return {
                                        error: e[1],
                                        duration: o
                                    }
                                }
                                ));
                            var i = e[1];
                            if (I(i))
                                return t((function() {
                                    return {
                                        value: i,
                                        duration: o
                                    }
                                }
                                ));
                            t((function() {
                                return new Promise((function(e) {
                                    var n = Date.now();
                                    l(i, (function() {
                                        for (var t = [], r = 0; r < arguments.length; r++)
                                            t[r] = arguments[r];
                                        var i = o + Date.now() - n;
                                        if (!t[0])
                                            return e({
                                                error: t[1],
                                                duration: i
                                            });
                                        e({
                                            value: t[1],
                                            duration: i
                                        })
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    )));
                    return function() {
                        return t.then((function(e) {
                            return e()
                        }
                        ))
                    }
                }(e[t], n)
            }
            ), r));
            return function() {
                return o(this, void 0, void 0, (function() {
                    var e, n, t, o;
                    return i(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, c];
                        case 1:
                            return [4, d(i.sent(), (function(e) {
                                return f(e())
                            }
                            ), r)];
                        case 2:
                            return e = i.sent(),
                            [4, Promise.all(e)];
                        case 3:
                            for (n = i.sent(),
                            t = {},
                            o = 0; o < a.length; ++o)
                                t[a[o]] = n[o];
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
        }
        function C(e, n) {
            var t = function(e) {
                return I(e) ? n(e) : function() {
                    var t = e();
                    return s(t) ? t.then(n) : n(t)
                }
            };
            return function(n) {
                var r = e(n);
                return s(r) ? r.then(t) : t(r)
            }
        }
        function Y() {
            var e = window
              , n = navigator;
            return p(["MSCSSMatrix"in e, "msSetImmediate"in e, "msIndexedDB"in e, "msMaxTouchPoints"in n, "msPointerEnabled"in n]) >= 4
        }
        function X() {
            var e = window
              , n = navigator;
            return p(["msWriteProfilerMark"in e, "MSStream"in e, "msLaunchUri"in n, "msSaveBlob"in n]) >= 3 && !Y()
        }
        function E() {
            var e = window
              , n = navigator;
            return p(["webkitPersistentStorage"in n, "webkitTemporaryStorage"in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in e, "BatteryManager"in e, "webkitMediaStream"in e, "webkitSpeechGrammar"in e]) >= 5
        }
        function P() {
            var e = window;
            return p(["ApplePayError"in e, "CSSPrimitiveValue"in e, "Counter"in e, 0 === navigator.vendor.indexOf("Apple"), "RGBColor"in e, "WebKitMediaKeys"in e]) >= 4
        }
        function H() {
            var e = window
              , n = e.HTMLElement
              , t = e.Document;
            return p(["safari"in e, !("ongestureend"in e), !("TouchEvent"in e), !("orientation"in e), n && !("autocapitalize"in n.prototype), t && "pointerLockElement"in t.prototype]) >= 4
        }
        function A() {
            var e, n = window;
            return e = n.print,
            /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e)) && "[object WebPageNamespace]" === String(n.browser)
        }
        function N() {
            var e, n, t = window;
            return p(["buildID"in navigator, "MozAppearance"in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange"in t, "mozInnerScreenX"in t, "CSSMozDocumentRule"in t, "CanvasCaptureMediaStream"in t]) >= 4
        }
        function J() {
            var e = window
              , n = navigator
              , t = e.CSS
              , r = e.HTMLButtonElement;
            return p([!("getStorageUpdates"in n), r && "popover"in r.prototype, "CSSCounterStyleRule"in e, t.supports("font-size-adjust: ex-height 0.5"), t.supports("text-transform: full-width")]) >= 4
        }
        function T() {
            var e = document;
            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
        }
        function _() {
            var e = E()
              , n = N()
              , t = window
              , r = navigator
              , o = "connection";
            return e ? p([!("SharedWorker"in t), r[o] && "ontypechange"in r[o], !("sinkId"in new Audio)]) >= 2 : !!n && p(["onorientationchange"in t, "orientation"in t, /android/i.test(r.appVersion)]) >= 2
        }
        function D() {
            var e = navigator
              , n = window
              , t = Audio.prototype
              , r = n.visualViewport;
            return p(["srLatency"in t, "srChannelCount"in t, "devicePosture"in e, r && "segments"in r, "getTextInformation"in Image.prototype]) >= 3
        }
        function z() {
            var e = window
              , n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!n)
                return -2;
            if (P() && !H() && !function() {
                var e = window;
                return p(["DOMRectList"in e, "RTCPeerConnectionIceEvent"in e, "SVGGeometryElement"in e, "ontransitioncancel"in e]) >= 3
            }())
                return -1;
            var t = new n(1,5e3,44100)
              , r = t.createOscillator();
            r.type = "triangle",
            r.frequency.value = 1e4;
            var o = t.createDynamicsCompressor();
            o.threshold.value = -50,
            o.knee.value = 40,
            o.ratio.value = 12,
            o.attack.value = 0,
            o.release.value = .25,
            r.connect(o),
            o.connect(t.destination),
            r.start(0);
            var i = function(e) {
                var n = function() {};
                return [new Promise((function(t, r) {
                    var o = !1
                      , i = 0
                      , a = 0;
                    e.oncomplete = function(e) {
                        return t(e.renderedBuffer)
                    }
                    ;
                    var c = function() {
                        setTimeout((function() {
                            return r(B("timeout"))
                        }
                        ), Math.min(500, a + 5e3 - Date.now()))
                    }
                      , u = function() {
                        try {
                            var n = e.startRendering();
                            switch (s(n) && f(n),
                            e.state) {
                            case "running":
                                a = Date.now(),
                                o && c();
                                break;
                            case "suspended":
                                document.hidden || i++,
                                o && i >= 3 ? r(B("suspended")) : setTimeout(u, 500)
                            }
                        } catch (e) {
                            r(e)
                        }
                    };
                    u(),
                    n = function() {
                        o || (o = !0,
                        a > 0 && c())
                    }
                }
                )), n]
            }(t)
              , a = i[0]
              , c = i[1]
              , u = f(a.then((function(e) {
                return function(e) {
                    for (var n = 0, t = 0; t < e.length; ++t)
                        n += Math.abs(e[t]);
                    return n
                }(e.getChannelData(0).subarray(4500))
            }
            ), (function(e) {
                if ("timeout" === e.name || "suspended" === e.name)
                    return -3;
                throw e
            }
            )));
            return function() {
                return c(),
                u
            }
        }
        function B(e) {
            var n = new Error(e);
            return n.name = e,
            n
        }
        function O(e, n, t) {
            var r, a, c;
            return void 0 === t && (t = 50),
            o(this, void 0, void 0, (function() {
                var o, s;
                return i(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        o = document,
                        i.label = 1;
                    case 1:
                        return o.body ? [3, 3] : [4, u(t)];
                    case 2:
                        return i.sent(),
                        [3, 1];
                    case 3:
                        s = o.createElement("iframe"),
                        i.label = 4;
                    case 4:
                        return i.trys.push([4, , 10, 11]),
                        [4, new Promise((function(e, t) {
                            var r = !1
                              , i = function() {
                                r = !0,
                                e()
                            };
                            s.onload = i,
                            s.onerror = function(e) {
                                r = !0,
                                t(e)
                            }
                            ;
                            var a = s.style;
                            a.setProperty("display", "block", "important"),
                            a.position = "absolute",
                            a.top = "0",
                            a.left = "0",
                            a.visibility = "hidden",
                            n && "srcdoc"in s ? s.srcdoc = n : s.src = "about:blank",
                            o.body.appendChild(s);
                            var c = function() {
                                var e, n;
                                r || ("complete" === (null === (n = null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === n ? void 0 : n.readyState) ? i() : setTimeout(c, 10))
                            };
                            c()
                        }
                        ))];
                    case 5:
                        i.sent(),
                        i.label = 6;
                    case 6:
                        return (null === (a = null === (r = s.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, u(t)];
                    case 7:
                        return i.sent(),
                        [3, 6];
                    case 8:
                        return [4, e(s, s.contentWindow)];
                    case 9:
                        return [2, i.sent()];
                    case 10:
                        return null === (c = s.parentNode) || void 0 === c || c.removeChild(s),
                        [7];
                    case 11:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function U(e) {
            for (var n = function(e) {
                for (var n, t, r = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), i = o[1] || void 0, a = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function(e, n) {
                    a[e] = a[e] || [],
                    a[e].push(n)
                }; ; ) {
                    var s = c.exec(o[2]);
                    if (!s)
                        break;
                    var l = s[0];
                    switch (l[0]) {
                    case ".":
                        u("class", l.slice(1));
                        break;
                    case "#":
                        u("id", l.slice(1));
                        break;
                    case "[":
                        var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                        if (!d)
                            throw new Error(r);
                        u(d[1], null !== (t = null !== (n = d[4]) && void 0 !== n ? n : d[5]) && void 0 !== t ? t : "");
                        break;
                    default:
                        throw new Error(r)
                    }
                }
                return [i, a]
            }(e), t = n[0], r = n[1], o = document.createElement(null != t ? t : "div"), i = 0, a = Object.keys(r); i < a.length; i++) {
                var c = a[i]
                  , u = r[c].join(" ");
                "style" === c ? Q(o.style, u) : o.setAttribute(c, u)
            }
            return o
        }
        function Q(e, n) {
            for (var t = 0, r = n.split(";"); t < r.length; t++) {
                var o = r[t]
                  , i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
                if (i) {
                    var a = i[1]
                      , c = i[2]
                      , u = i[4];
                    e.setProperty(a, c, u || "")
                }
            }
        }
        var K = ["monospace", "sans-serif", "serif"]
          , q = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
        function $(e) {
            var n, t, r, o = !1, i = function() {
                var e = document.createElement("canvas");
                return e.width = 1,
                e.height = 1,
                [e, e.getContext("2d")]
            }(), a = i[0], c = i[1];
            return function(e, n) {
                return !(!n || !e.toDataURL)
            }(a, c) ? (o = function(e) {
                return e.rect(0, 0, 10, 10),
                e.rect(2, 2, 6, 6),
                !e.isPointInPath(5, 5, "evenodd")
            }(c),
            e ? t = r = "skipped" : (n = function(e, n) {
                !function(e, n) {
                    e.width = 240,
                    e.height = 60,
                    n.textBaseline = "alphabetic",
                    n.fillStyle = "#f60",
                    n.fillRect(100, 1, 62, 20),
                    n.fillStyle = "#069",
                    n.font = '11pt "Times New Roman"';
                    var t = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                    n.fillText(t, 2, 15),
                    n.fillStyle = "rgba(102, 204, 0, 0.2)",
                    n.font = "18pt Arial",
                    n.fillText(t, 4, 45)
                }(e, n);
                var t = ee(e);
                return t !== ee(e) ? ["unstable", "unstable"] : (function(e, n) {
                    e.width = 122,
                    e.height = 110,
                    n.globalCompositeOperation = "multiply";
                    for (var t = 0, r = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; t < r.length; t++) {
                        var o = r[t]
                          , i = o[0]
                          , a = o[1]
                          , c = o[2];
                        n.fillStyle = i,
                        n.beginPath(),
                        n.arc(a, c, 40, 0, 2 * Math.PI, !0),
                        n.closePath(),
                        n.fill()
                    }
                    n.fillStyle = "#f9c",
                    n.arc(60, 60, 60, 0, 2 * Math.PI, !0),
                    n.arc(60, 60, 20, 0, 2 * Math.PI, !0),
                    n.fill("evenodd")
                }(e, n),
                [ee(e), t])
            }(a, c),
            t = n[0],
            r = n[1])) : t = r = "unsupported",
            {
                winding: o,
                geometry: t,
                text: r
            }
        }
        function ee(e) {
            return e.toDataURL()
        }
        function ne() {
            var e = screen
              , n = function(e) {
                return h(m(e), null)
            }
              , t = [n(e.width), n(e.height)];
            return t.sort().reverse(),
            t
        }
        var te, re, oe = 2500;
        function ie() {
            var e = this;
            return function() {
                if (void 0 === re) {
                    var e = function() {
                        var n = ae();
                        ce(n) ? re = setTimeout(e, oe) : (te = n,
                        re = void 0)
                    };
                    e()
                }
            }(),
            function() {
                return o(e, void 0, void 0, (function() {
                    var e;
                    return i(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return ce(e = ae()) ? te ? [2, a([], te, !0)] : T() ? [4, (t = document,
                            (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t))] : [3, 2] : [3, 2];
                        case 1:
                            n.sent(),
                            e = ae(),
                            n.label = 2;
                        case 2:
                            return ce(e) || (te = e),
                            [2, e]
                        }
                        var t
                    }
                    ))
                }
                ))
            }
        }
        function ae() {
            var e = screen;
            return [h(v(e.availTop), null), h(v(e.width) - v(e.availWidth) - h(v(e.availLeft), 0), null), h(v(e.height) - v(e.availHeight) - h(v(e.availTop), 0), null), h(v(e.availLeft), null)]
        }
        function ce(e) {
            for (var n = 0; n < 4; ++n)
                if (e[n])
                    return !1;
            return !0
        }
        function ue(e) {
            var n;
            return o(this, void 0, void 0, (function() {
                var t, r, o, a, c, s, l;
                return i(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        for (t = document,
                        r = t.createElement("div"),
                        o = new Array(e.length),
                        a = {},
                        se(r),
                        l = 0; l < e.length; ++l)
                            "DIALOG" === (c = U(e[l])).tagName && c.show(),
                            se(s = t.createElement("div")),
                            s.appendChild(c),
                            r.appendChild(s),
                            o[l] = c;
                        i.label = 1;
                    case 1:
                        return t.body ? [3, 3] : [4, u(50)];
                    case 2:
                        return i.sent(),
                        [3, 1];
                    case 3:
                        t.body.appendChild(r);
                        try {
                            for (l = 0; l < e.length; ++l)
                                o[l].offsetParent || (a[e[l]] = !0)
                        } finally {
                            null === (n = r.parentNode) || void 0 === n || n.removeChild(r)
                        }
                        return [2, a]
                    }
                }
                ))
            }
            ))
        }
        function se(e) {
            e.style.setProperty("visibility", "hidden", "important"),
            e.style.setProperty("display", "block", "important")
        }
        function le(e) {
            return matchMedia("(inverted-colors: ".concat(e, ")")).matches
        }
        function de(e) {
            return matchMedia("(forced-colors: ".concat(e, ")")).matches
        }
        function fe(e) {
            return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
        }
        function me(e) {
            return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
        }
        function ve(e) {
            return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches
        }
        function he(e) {
            return matchMedia("(dynamic-range: ".concat(e, ")")).matches
        }
        var pe = Math
          , be = function() {
            return 0
        }
          , ye = {
            default: [],
            apple: [{
                font: "-apple-system-body"
            }],
            serif: [{
                fontFamily: "serif"
            }],
            sans: [{
                fontFamily: "sans-serif"
            }],
            mono: [{
                fontFamily: "monospace"
            }],
            min: [{
                fontSize: "1px"
            }],
            system: [{
                fontFamily: "system-ui"
            }]
        }
          , ge = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938])
          , we = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449])
          , Le = ["FRAGMENT_SHADER", "VERTEX_SHADER"]
          , ke = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"]
          , Ve = "WEBGL_debug_renderer_info";
        function Se(e) {
            if (e.webgl)
                return e.webgl.context;
            var n, t = document.createElement("canvas");
            t.addEventListener("webglCreateContextError", (function() {
                return n = void 0
            }
            ));
            for (var r = 0, o = ["webgl", "experimental-webgl"]; r < o.length; r++) {
                var i = o[r];
                try {
                    n = t.getContext(i)
                } catch (e) {}
                if (n)
                    break
            }
            return e.webgl = {
                context: n
            },
            n
        }
        function We(e, n, t) {
            var r = e.getShaderPrecisionFormat(e[n], e[t]);
            return r ? [r.rangeMin, r.rangeMax, r.precision] : []
        }
        function xe(e) {
            return Object.keys(e.__proto__).filter(Ze)
        }
        function Ze(e) {
            return "string" == typeof e && !e.match(/[^A-Z0-9_x]/)
        }
        function Me() {
            return N()
        }
        function Re(e) {
            return "function" == typeof e.getParameter
        }
        var Ge = {
            fonts: function() {
                var e = this;
                return O((function(n, t) {
                    var r = t.document;
                    return o(e, void 0, void 0, (function() {
                        var e, n, t, o, a, c, u, s, l, d, f;
                        return i(this, (function(i) {
                            for ((e = r.body).style.fontSize = "48px",
                            (n = r.createElement("div")).style.setProperty("visibility", "hidden", "important"),
                            t = {},
                            o = {},
                            a = function(e) {
                                var t = r.createElement("span")
                                  , o = t.style;
                                return o.position = "absolute",
                                o.top = "0",
                                o.left = "0",
                                o.fontFamily = e,
                                t.textContent = "mmMwWLliI0O&1",
                                n.appendChild(t),
                                t
                            }
                            ,
                            c = function(e, n) {
                                return a("'".concat(e, "',").concat(n))
                            }
                            ,
                            u = function() {
                                for (var e = {}, n = function(n) {
                                    e[n] = K.map((function(e) {
                                        return c(n, e)
                                    }
                                    ))
                                }, t = 0, r = q; t < r.length; t++)
                                    n(r[t]);
                                return e
                            }
                            ,
                            s = function(e) {
                                return K.some((function(n, r) {
                                    return e[r].offsetWidth !== t[n] || e[r].offsetHeight !== o[n]
                                }
                                ))
                            }
                            ,
                            l = K.map(a),
                            d = u(),
                            e.appendChild(n),
                            f = 0; f < K.length; f++)
                                t[K[f]] = l[f].offsetWidth,
                                o[K[f]] = l[f].offsetHeight;
                            return [2, q.filter((function(e) {
                                return s(d[e])
                            }
                            ))]
                        }
                        ))
                    }
                    ))
                }
                ))
            },
            domBlockers: function(e) {
                var n = (void 0 === e ? {} : e).debug;
                return o(this, void 0, void 0, (function() {
                    var e, t, r, o, a;
                    return i(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return P() || _() ? (c = atob,
                            e = {
                                abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', c("I0JveC1CYW5uZXItYWRz")],
                                abpvn: [".quangcao", "#mobileCatfish", c("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                                adBlockFinland: [".mainostila", c("LnNwb25zb3JpdA=="), ".ylamainos", c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                                adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", c("LmhlYWRlci1ibG9ja2VkLWFk"), c("I2FkX2Jsb2NrZXI=")],
                                adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                                adGuardBase: [".BetterJsPopOverlay", c("I2FkXzMwMFgyNTA="), c("I2Jhbm5lcmZsb2F0MjI="), c("I2NhbXBhaWduLWJhbm5lcg=="), c("I0FkLUNvbnRlbnQ=")],
                                adGuardChinese: [c("LlppX2FkX2FfSA=="), c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                                adGuardFrench: ["#pavePub", c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", c("LmFkc19iYW4=")],
                                adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                                adGuardJapanese: ["#kauli_yad_1", c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), c("LmFkZ29vZ2xl"), c("Ll9faXNib29zdFJldHVybkFk")],
                                adGuardMobile: [c("YW1wLWF1dG8tYWRz"), c("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", c("I2FkX2ludmlld19hcmVh")],
                                adGuardRussian: [c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), c("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                                adGuardSocial: [c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                                adGuardTrackingProtection: ["#qoo-counter", c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                adGuardTurkish: ["#backkapat", c("I3Jla2xhbWk="), c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                bulgarian: [c("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                                easyList: [".yb-floorad", c("LndpZGdldF9wb19hZHNfd2lkZ2V0"), c("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                                easyListChina: [c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), c("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                                easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", c("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                                easyListCzechSlovak: ["#onlajny-stickers", c("I3Jla2xhbW5pLWJveA=="), c("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                easyListDutch: [c("I2FkdmVydGVudGll"), c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                easyListGermany: ["#SSpotIMPopSlider", c("LnNwb25zb3JsaW5rZ3J1ZW4="), c("I3dlcmJ1bmdza3k="), c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                                easyListItaly: [c("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                easyListLithuania: [c("LnJla2xhbW9zX3RhcnBhcw=="), c("LnJla2xhbW9zX251b3JvZG9z"), c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                estonian: [c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                                fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                                frellwitSwedish: [c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", c("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                greekAdBlock: [c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                hungarian: ["#cemp_doboz", ".optimonk-iframe-container", c("LmFkX19tYWlu"), c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                                icelandicAbp: [c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                latvian: [c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                listKr: [c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), c("I2xpdmVyZUFkV3JhcHBlcg=="), c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), c("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                listeAr: [c("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                listeFr: [c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                officialPolish: ["#ceneo-placeholder-ceneo-12", c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), c("ZGl2I3NrYXBpZWNfYWQ=")],
                                ro: [c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                                ruAd: [c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                thaiAds: ["a[href*=macau-uta-popup]", c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), c("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", c("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                            },
                            t = Object.keys(e),
                            [4, ue((a = []).concat.apply(a, t.map((function(n) {
                                return e[n]
                            }
                            ))))]) : [2, void 0];
                        case 1:
                            return r = i.sent(),
                            n && function(e, n) {
                                for (var t = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
                                    var i = o[r];
                                    t += "\n".concat(i, ":");
                                    for (var a = 0, c = e[i]; a < c.length; a++) {
                                        var u = c[a];
                                        t += "\n  ".concat(n[u] ? "🚫" : "➡️", " ").concat(u)
                                    }
                                }
                                console.log("".concat(t, "\n```"))
                            }(e, r),
                            (o = t.filter((function(n) {
                                var t = e[n];
                                return p(t.map((function(e) {
                                    return r[e]
                                }
                                ))) > .6 * t.length
                            }
                            ))).sort(),
                            [2, o]
                        }
                        var c
                    }
                    ))
                }
                ))
            },
            fontPreferences: function() {
                return void 0 === e && (e = 4e3),
                O((function(n, t) {
                    var r = t.document
                      , o = r.body
                      , i = o.style;
                    i.width = "".concat(e, "px"),
                    i.webkitTextSizeAdjust = i.textSizeAdjust = "none",
                    E() ? o.style.zoom = "".concat(1 / t.devicePixelRatio) : P() && (o.style.zoom = "reset");
                    var c = r.createElement("div");
                    return c.textContent = a([], Array(e / 20 << 0), !0).map((function() {
                        return "word"
                    }
                    )).join(" "),
                    o.appendChild(c),
                    function(e, n) {
                        for (var t = {}, r = {}, o = 0, i = Object.keys(ye); o < i.length; o++) {
                            var a = i[o]
                              , c = ye[a]
                              , u = c[0]
                              , s = void 0 === u ? {} : u
                              , l = c[1]
                              , d = void 0 === l ? "mmMwWLliI0fiflO&1" : l
                              , f = e.createElement("span");
                            f.textContent = d,
                            f.style.whiteSpace = "nowrap";
                            for (var m = 0, v = Object.keys(s); m < v.length; m++) {
                                var h = v[m]
                                  , p = s[h];
                                void 0 !== p && (f.style[h] = p)
                            }
                            t[a] = f,
                            n.append(e.createElement("br"), f)
                        }
                        for (var b = 0, y = Object.keys(ye); b < y.length; b++)
                            r[a = y[b]] = t[a].getBoundingClientRect().width;
                        return r
                    }(r, o)
                }
                ), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
                var e
            },
            audio: function() {
                return P() && J() && A() || E() && D() && (n = (e = window).URLPattern,
                p(["union"in Set.prototype, "Iterator"in e, n && "hasRegExpGroups"in n.prototype, "RGB8"in WebGLRenderingContext.prototype]) >= 3) ? -4 : z();
                var e, n
            },
            screenFrame: function() {
                var e = this;
                if (P() && J() && A())
                    return function() {
                        return Promise.resolve(void 0)
                    }
                    ;
                var n = ie();
                return function() {
                    return o(e, void 0, void 0, (function() {
                        var e, t;
                        return i(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, n()];
                            case 1:
                                return e = r.sent(),
                                [2, [(t = function(e) {
                                    return null === e ? null : b(e, 10)
                                }
                                )(e[0]), t(e[1]), t(e[2]), t(e[3])]]
                            }
                        }
                        ))
                    }
                    ))
                }
            },
            canvas: function() {
                return $(P() && J() && A())
            },
            osCpu: function() {
                return navigator.oscpu
            },
            languages: function() {
                var e, n = navigator, t = [], r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                if (void 0 !== r && t.push([r]),
                Array.isArray(n.languages))
                    E() && p([!("MediaSettingsRange"in (e = window)), "RTCEncodedAudioFrame"in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages);
                else if ("string" == typeof n.languages) {
                    var o = n.languages;
                    o && t.push(o.split(","))
                }
                return t
            },
            colorDepth: function() {
                return window.screen.colorDepth
            },
            deviceMemory: function() {
                return h(v(navigator.deviceMemory), void 0)
            },
            screenResolution: function() {
                if (!(P() && J() && A()))
                    return ne()
            },
            hardwareConcurrency: function() {
                return h(m(navigator.hardwareConcurrency), void 0)
            },
            timezone: function() {
                var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                if (n) {
                    var t = (new n).resolvedOptions().timeZone;
                    if (t)
                        return t
                }
                var r, o = (r = (new Date).getFullYear(),
                -Math.max(v(new Date(r,0,1).getTimezoneOffset()), v(new Date(r,6,1).getTimezoneOffset())));
                return "UTC".concat(o >= 0 ? "+" : "").concat(o)
            },
            sessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            localStorage: function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            },
            indexedDB: function() {
                if (!Y() && !X())
                    try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
            },
            openDatabase: function() {
                return !!window.openDatabase
            },
            cpuClass: function() {
                return navigator.cpuClass
            },
            platform: function() {
                var e = navigator.platform;
                return "MacIntel" === e && P() && !H() ? function() {
                    if ("iPad" === navigator.platform)
                        return !0;
                    var e = screen
                      , n = e.width / e.height;
                    return p(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
                }() ? "iPad" : "iPhone" : e
            },
            plugins: function() {
                var e = navigator.plugins;
                if (e) {
                    for (var n = [], t = 0; t < e.length; ++t) {
                        var r = e[t];
                        if (r) {
                            for (var o = [], i = 0; i < r.length; ++i) {
                                var a = r[i];
                                o.push({
                                    type: a.type,
                                    suffixes: a.suffixes
                                })
                            }
                            n.push({
                                name: r.name,
                                description: r.description,
                                mimeTypes: o
                            })
                        }
                    }
                    return n
                }
            },
            touchSupport: function() {
                var e, n = navigator, t = 0;
                void 0 !== n.maxTouchPoints ? t = m(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"),
                    e = !0
                } catch (n) {
                    e = !1
                }
                return {
                    maxTouchPoints: t,
                    touchEvent: e,
                    touchStart: "ontouchstart"in window
                }
            },
            vendor: function() {
                return navigator.vendor || ""
            },
            vendorFlavors: function() {
                for (var e = [], n = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < t.length; n++) {
                    var r = t[n]
                      , o = window[r];
                    o && "object" == typeof o && e.push(r)
                }
                return e.sort()
            },
            cookiesEnabled: function() {
                var e = document;
                try {
                    e.cookie = "cookietest=1; SameSite=Strict;";
                    var n = -1 !== e.cookie.indexOf("cookietest=");
                    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",
                    n
                } catch (e) {
                    return !1
                }
            },
            colorGamut: function() {
                for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
                    var t = n[e];
                    if (matchMedia("(color-gamut: ".concat(t, ")")).matches)
                        return t
                }
            },
            invertedColors: function() {
                return !!le("inverted") || !le("none") && void 0
            },
            forcedColors: function() {
                return !!de("active") || !de("none") && void 0
            },
            monochrome: function() {
                if (matchMedia("(min-monochrome: 0)").matches) {
                    for (var e = 0; e <= 100; ++e)
                        if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
                            return e;
                    throw new Error("Too high value")
                }
            },
            contrast: function() {
                return fe("no-preference") ? 0 : fe("high") || fe("more") ? 1 : fe("low") || fe("less") ? -1 : fe("forced") ? 10 : void 0
            },
            reducedMotion: function() {
                return !!me("reduce") || !me("no-preference") && void 0
            },
            reducedTransparency: function() {
                return !!ve("reduce") || !ve("no-preference") && void 0
            },
            hdr: function() {
                return !!he("high") || !he("standard") && void 0
            },
            math: function() {
                var e, n = pe.acos || be, t = pe.acosh || be, r = pe.asin || be, o = pe.asinh || be, i = pe.atanh || be, a = pe.atan || be, c = pe.sin || be, u = pe.sinh || be, s = pe.cos || be, l = pe.cosh || be, d = pe.tan || be, f = pe.tanh || be, m = pe.exp || be, v = pe.expm1 || be, h = pe.log1p || be;
                return {
                    acos: n(.12312423423423424),
                    acosh: t(1e308),
                    acoshPf: (e = 1e154,
                    pe.log(e + pe.sqrt(e * e - 1))),
                    asin: r(.12312423423423424),
                    asinh: o(1),
                    asinhPf: pe.log(1 + pe.sqrt(2)),
                    atanh: i(.5),
                    atanhPf: pe.log(3) / 2,
                    atan: a(.5),
                    sin: c(-1e300),
                    sinh: u(1),
                    sinhPf: pe.exp(1) - 1 / pe.exp(1) / 2,
                    cos: s(10.000000000123),
                    cosh: l(1),
                    coshPf: (pe.exp(1) + 1 / pe.exp(1)) / 2,
                    tan: d(-1e300),
                    tanh: f(1),
                    tanhPf: (pe.exp(2) - 1) / (pe.exp(2) + 1),
                    exp: m(1),
                    expm1: v(1),
                    expm1Pf: pe.exp(1) - 1,
                    log1p: h(10),
                    log1pPf: pe.log(11),
                    powPI: pe.pow(pe.PI, -100)
                }
            },
            pdfViewerEnabled: function() {
                return navigator.pdfViewerEnabled
            },
            architecture: function() {
                var e = new Float32Array(1)
                  , n = new Uint8Array(e.buffer);
                return e[0] = 1 / 0,
                e[0] = e[0] - e[0],
                n[3]
            },
            applePay: function() {
                var e = window.ApplePaySession;
                if ("function" != typeof (null == e ? void 0 : e.canMakePayments))
                    return -1;
                if (function() {
                    for (var e = window; ; ) {
                        var n = e.parent;
                        if (!n || n === e)
                            return !1;
                        try {
                            if (n.location.origin !== e.location.origin)
                                return !0
                        } catch (e) {
                            if (e instanceof Error && "SecurityError" === e.name)
                                return !0;
                            throw e
                        }
                        e = n
                    }
                }())
                    return -3;
                try {
                    return e.canMakePayments() ? 1 : 0
                } catch (e) {
                    return function(e) {
                        if (e instanceof Error && "InvalidAccessError" === e.name && /\bfrom\b.*\binsecure\b/i.test(e.message))
                            return -2;
                        throw e
                    }(e)
                }
            },
            privateClickMeasurement: function() {
                var e, n = document.createElement("a"), t = null !== (e = n.attributionSourceId) && void 0 !== e ? e : n.attributionsourceid;
                return void 0 === t ? void 0 : String(t)
            },
            audioBaseLatency: function() {
                var e;
                return _() || P() ? window.AudioContext && null !== (e = (new AudioContext).baseLatency) && void 0 !== e ? e : -1 : -2
            },
            webGlBasics: function(e) {
                var n, t, r, o, i, a, c = Se(e.cache);
                if (!c)
                    return -1;
                if (!Re(c))
                    return -2;
                var u = Me() ? null : c.getExtension(Ve);
                return {
                    version: (null === (n = c.getParameter(c.VERSION)) || void 0 === n ? void 0 : n.toString()) || "",
                    vendor: (null === (t = c.getParameter(c.VENDOR)) || void 0 === t ? void 0 : t.toString()) || "",
                    vendorUnmasked: u ? null === (r = c.getParameter(u.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString() : "",
                    renderer: (null === (o = c.getParameter(c.RENDERER)) || void 0 === o ? void 0 : o.toString()) || "",
                    rendererUnmasked: u ? null === (i = c.getParameter(u.UNMASKED_RENDERER_WEBGL)) || void 0 === i ? void 0 : i.toString() : "",
                    shadingLanguageVersion: (null === (a = c.getParameter(c.SHADING_LANGUAGE_VERSION)) || void 0 === a ? void 0 : a.toString()) || ""
                }
            },
            webGlExtensions: function(e) {
                var n = Se(e.cache);
                if (!n)
                    return -1;
                if (!Re(n))
                    return -2;
                var t = n.getSupportedExtensions()
                  , r = n.getContextAttributes()
                  , o = []
                  , i = []
                  , a = []
                  , c = []
                  , u = [];
                if (r)
                    for (var s = 0, l = Object.keys(r); s < l.length; s++) {
                        var d = l[s];
                        i.push("".concat(d, "=").concat(r[d]))
                    }
                for (var f = 0, m = xe(n); f < m.length; f++) {
                    var v = n[L = m[f]];
                    a.push("".concat(L, "=").concat(v).concat(ge.has(v) ? "=".concat(n.getParameter(v)) : ""))
                }
                if (t)
                    for (var h = 0, p = t; h < p.length; h++) {
                        var b = p[h];
                        if (!(b === Ve && Me() || "WEBGL_polygon_mode" === b && (E() || P()))) {
                            var y = n.getExtension(b);
                            if (y)
                                for (var g = 0, w = xe(y); g < w.length; g++) {
                                    var L;
                                    v = y[L = w[g]],
                                    c.push("".concat(L, "=").concat(v).concat(we.has(v) ? "=".concat(n.getParameter(v)) : ""))
                                }
                            else
                                o.push(b)
                        }
                    }
                for (var k = 0, V = Le; k < V.length; k++)
                    for (var S = V[k], W = 0, x = ke; W < x.length; W++) {
                        var Z = x[W]
                          , M = We(n, S, Z);
                        u.push("".concat(S, ".").concat(Z, "=").concat(M.join(",")))
                    }
                return c.sort(),
                a.sort(),
                {
                    contextAttributes: i,
                    parameters: a,
                    shaderPrecisions: u,
                    extensions: t,
                    extensionParameters: c,
                    unsupportedExtensions: o
                }
            }
        }
          , Fe = "$ if upgrade to Pro: https://fpjs.dev/pro";
        function Ie(e) {
            var n = function(e) {
                if (_())
                    return .4;
                if (P())
                    return !H() || J() && A() ? .3 : .5;
                var n = "value"in e.platform ? e.platform.value : "";
                return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
            }(e)
              , t = function(e) {
                return b(.99 + .01 * e, 1e-4)
            }(n);
            return {
                score: n,
                comment: Fe.replace(/\$/g, "".concat(t))
            }
        }
        function je(e) {
            return JSON.stringify(e, (function(e, n) {
                return n instanceof Error ? r({
                    name: (t = n).name,
                    message: t.message,
                    stack: null === (o = t.stack) || void 0 === o ? void 0 : o.split("\n")
                }, t) : n;
                var t, o
            }
            ), 2)
        }
        function Ce(e) {
            return F(function(e) {
                for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
                    var o = r[t]
                      , i = e[o]
                      , a = "error"in i ? "error" : JSON.stringify(i.value);
                    n += "".concat(n ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(a)
                }
                return n
            }(e))
        }
        function Ye(e) {
            return void 0 === e && (e = 50),
            function(e, n) {
                void 0 === n && (n = 1 / 0);
                var t = window.requestIdleCallback;
                return t ? new Promise((function(e) {
                    return t.call(window, (function() {
                        return e()
                    }
                    ), {
                        timeout: n
                    })
                }
                )) : u(Math.min(e, n))
            }(e, 2 * e)
        }
        function Xe(e, n) {
            var t = Date.now();
            return {
                get: function(r) {
                    return o(this, void 0, void 0, (function() {
                        var o, a, u;
                        return i(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return o = Date.now(),
                                [4, e()];
                            case 1:
                                return a = i.sent(),
                                u = function(e) {
                                    var n;
                                    return {
                                        get visitorId() {
                                            return void 0 === n && (n = Ce(this.components)),
                                            n
                                        },
                                        set visitorId(e) {
                                            n = e
                                        },
                                        confidence: Ie(e),
                                        components: e,
                                        version: c
                                    }
                                }(a),
                                (n || (null == r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(u.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(o - t, "\nvisitorId: ").concat(u.visitorId, "\ncomponents: ").concat(je(a), "\n```")),
                                [2, u]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }
        function Ee(e) {
            var n;
            return void 0 === e && (e = {}),
            o(this, void 0, void 0, (function() {
                var t, r, o;
                return i(this, (function(i) {
                    console.log('Ee:', i )
                    switch (i.label) {
                    case 0:
                        return (null === (n = e.monitoring) || void 0 === n || n) && function() {
                            if (!(window.__fpjs_d_m || Math.random() >= .001))
                                try {
                                    var e = new XMLHttpRequest;
                                    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(c, "/npm-monitoring"), !0),
                                    e.send()
                                } catch (e) {
                                    console.error(e)
                                }
                        }(),
                        t = e.delayFallback,
                        r = e.debug,
                        [4, Ye(t)];
                    case 1:
                        return i.sent(),
                        o = function(e) {
                            return j(Ge, e, [])
                        }({
                            cache: {},
                            debug: r
                        }),
                        [2, Xe(o, r)]
                    }
                }
                ))
            }
            ))
        }
        var Pe = {
            load: Ee,
            hashComponents: Ce,
            componentsToDebugString: je
        }
          , He = F
    }
}]);
