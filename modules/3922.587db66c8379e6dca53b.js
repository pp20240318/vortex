(self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || []).push([[3922], {
    8661: (t, e, o) => {
        "use strict";
        o.r(e),
        o.d(e, {
            Children: () => f,
            Component: () => i.Component,
            Fragment: () => i.Fragment,
            PureComponent: () => d,
            StrictMode: () => et,
            Suspense: () => _,
            SuspenseList: () => w,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => z,
            cloneElement: () => Y,
            createContext: () => i.createContext,
            createElement: () => i.createElement,
            createFactory: () => J,
            createPortal: () => M,
            createRef: () => i.createRef,
            default: () => rt,
            findDOMNode: () => Q,
            flushSync: () => tt,
            forwardRef: () => p,
            hydrate: () => N,
            isValidElement: () => q,
            lazy: () => T,
            memo: () => u,
            render: () => R,
            startTransition: () => ot,
            unmountComponentAtNode: () => K,
            unstable_batchedUpdates: () => X,
            useDeferredValue: () => it,
            useInsertionEffect: () => nt,
            useSyncExternalStore: () => at,
            useTransition: () => st,
            version: () => H
        });
        var i = o(5160)
          , s = o(5535)
          , n = {};
        for (var a in s)
            ["default", "Component", "Fragment", "createContext", "createElement", "createRef", "Children", "PureComponent", "StrictMode", "Suspense", "SuspenseList", "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", "cloneElement", "createFactory", "createPortal", "findDOMNode", "flushSync", "forwardRef", "hydrate", "isValidElement", "lazy", "memo", "render", "startTransition", "unmountComponentAtNode", "unstable_batchedUpdates", "useDeferredValue", "useInsertionEffect", "useSyncExternalStore", "useTransition", "version"].indexOf(a) < 0 && (n[a] = function(t) {
                return s[t]
            }
            .bind(0, a));
        function r(t, e) {
            for (var o in e)
                t[o] = e[o];
            return t
        }
        function l(t, e) {
            for (var o in t)
                if ("__source" !== o && !(o in e))
                    return !0;
            for (var i in e)
                if ("__source" !== i && t[i] !== e[i])
                    return !0;
            return !1
        }
        function c(t, e) {
            return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
        }
        function d(t) {
            this.props = t
        }
        function u(t, e) {
            function o(t) {
                var o = this.props.ref
                  , i = o == t.ref;
                return !i && o && (o.call ? o(null) : o.current = null),
                e ? !e(this.props, t) || !i : l(this.props, t)
            }
            function s(e) {
                return this.shouldComponentUpdate = o,
                (0,
                i.createElement)(t, e)
            }
            return s.displayName = "Memo(" + (t.displayName || t.name) + ")",
            s.prototype.isReactComponent = !0,
            s.__f = !0,
            s
        }
        o.d(e, n),
        (d.prototype = new i.Component).isPureReactComponent = !0,
        d.prototype.shouldComponentUpdate = function(t, e) {
            return l(this.props, t) || l(this.state, e)
        }
        ;
        var h = i.options.__b;
        i.options.__b = function(t) {
            t.type && t.type.__f && t.ref && (t.props.ref = t.ref,
            t.ref = null),
            h && h(t)
        }
        ;
        var m = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
        function p(t) {
            function e(e) {
                var o = r({}, e);
                return delete o.ref,
                t(o, e.ref || null)
            }
            return e.$$typeof = m,
            e.render = e,
            e.prototype.isReactComponent = e.__f = !0,
            e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")",
            e
        }
        var b = function(t, e) {
            return null == t ? null : (0,
            i.toChildArray)((0,
            i.toChildArray)(t).map(e))
        }
          , f = {
            map: b,
            forEach: b,
            count: function(t) {
                return t ? (0,
                i.toChildArray)(t).length : 0
            },
            only: function(t) {
                var e = (0,
                i.toChildArray)(t);
                if (1 !== e.length)
                    throw "Children.only";
                return e[0]
            },
            toArray: i.toChildArray
        }
          , y = i.options.__e;
        i.options.__e = function(t, e, o, i) {
            if (t.then)
                for (var s, n = e; n = n.__; )
                    if ((s = n.__c) && s.__c)
                        return null == e.__e && (e.__e = o.__e,
                        e.__k = o.__k),
                        s.__c(t, e);
            y(t, e, o, i)
        }
        ;
        var v = i.options.unmount;
        function g(t, e, o) {
            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(t) {
                "function" == typeof t.__c && t.__c()
            }
            )),
            t.__c.__H = null),
            null != (t = r({}, t)).__c && (t.__c.__P === o && (t.__c.__P = e),
            t.__c = null),
            t.__k = t.__k && t.__k.map((function(t) {
                return g(t, e, o)
            }
            ))),
            t
        }
        function C(t, e, o) {
            return t && (t.__v = null,
            t.__k = t.__k && t.__k.map((function(t) {
                return C(t, e, o)
            }
            )),
            t.__c && t.__c.__P === e && (t.__e && o.insertBefore(t.__e, t.__d),
            t.__c.__e = !0,
            t.__c.__P = o)),
            t
        }
        function _() {
            this.__u = 0,
            this.t = null,
            this.__b = null
        }
        function I(t) {
            var e = t.__.__c;
            return e && e.__a && e.__a(t)
        }
        function T(t) {
            var e, o, s;
            function n(n) {
                if (e || (e = t()).then((function(t) {
                    o = t.default || t
                }
                ), (function(t) {
                    s = t
                }
                )),
                s)
                    throw s;
                if (!o)
                    throw e;
                return (0,
                i.createElement)(o, n)
            }
            return n.displayName = "Lazy",
            n.__f = !0,
            n
        }
        function w() {
            this.u = null,
            this.o = null
        }
        i.options.unmount = function(t) {
            var e = t.__c;
            e && e.__R && e.__R(),
            e && !0 === t.__h && (t.type = null),
            v && v(t)
        }
        ,
        (_.prototype = new i.Component).__c = function(t, e) {
            var o = e.__c
              , i = this;
            null == i.t && (i.t = []),
            i.t.push(o);
            var s = I(i.__v)
              , n = !1
              , a = function() {
                n || (n = !0,
                o.__R = null,
                s ? s(r) : r())
            };
            o.__R = a;
            var r = function() {
                if (!--i.__u) {
                    if (i.state.__a) {
                        var t = i.state.__a;
                        i.__v.__k[0] = C(t, t.__c.__P, t.__c.__O)
                    }
                    var e;
                    for (i.setState({
                        __a: i.__b = null
                    }); e = i.t.pop(); )
                        e.forceUpdate()
                }
            }
              , l = !0 === e.__h;
            i.__u++ || l || i.setState({
                __a: i.__b = i.__v.__k[0]
            }),
            t.then(a, a)
        }
        ,
        _.prototype.componentWillUnmount = function() {
            this.t = []
        }
        ,
        _.prototype.render = function(t, e) {
            if (this.__b) {
                if (this.__v.__k) {
                    var o = document.createElement("div")
                      , s = this.__v.__k[0].__c;
                    this.__v.__k[0] = g(this.__b, o, s.__O = s.__P)
                }
                this.__b = null
            }
            var n = e.__a && (0,
            i.createElement)(i.Fragment, null, t.fallback);
            return n && (n.__h = null),
            [(0,
            i.createElement)(i.Fragment, null, e.__a ? null : t.children), n]
        }
        ;
        var O = function(t, e, o) {
            if (++o[1] === o[0] && t.o.delete(e),
            t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
                for (o = t.u; o; ) {
                    for (; o.length > 3; )
                        o.pop()();
                    if (o[1] < o[0])
                        break;
                    t.u = o = o[2]
                }
        };
        function A(t) {
            return this.getChildContext = function() {
                return t.context
            }
            ,
            t.children
        }
        function k(t) {
            var e = this
              , o = t.i;
            e.componentWillUnmount = function() {
                (0,
                i.render)(null, e.l),
                e.l = null,
                e.i = null
            }
            ,
            e.i && e.i !== o && e.componentWillUnmount(),
            t.__v ? (e.l || (e.i = o,
            e.l = {
                nodeType: 1,
                parentNode: o,
                childNodes: [],
                appendChild: function(t) {
                    this.childNodes.push(t),
                    e.i.appendChild(t)
                },
                insertBefore: function(t, o) {
                    this.childNodes.push(t),
                    e.i.appendChild(t)
                },
                removeChild: function(t) {
                    this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1),
                    e.i.removeChild(t)
                }
            }),
            (0,
            i.render)((0,
            i.createElement)(A, {
                context: e.context
            }, t.__v), e.l)) : e.l && e.componentWillUnmount()
        }
        function M(t, e) {
            var o = (0,
            i.createElement)(k, {
                __v: t,
                i: e
            });
            return o.containerInfo = e,
            o
        }
        (w.prototype = new i.Component).__a = function(t) {
            var e = this
              , o = I(e.__v)
              , i = e.o.get(t);
            return i[0]++,
            function(s) {
                var n = function() {
                    e.props.revealOrder ? (i.push(s),
                    O(e, t, i)) : s()
                };
                o ? o(n) : n()
            }
        }
        ,
        w.prototype.render = function(t) {
            this.u = null,
            this.o = new Map;
            var e = (0,
            i.toChildArray)(t.children);
            t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
            for (var o = e.length; o--; )
                this.o.set(e[o], this.u = [1, 0, this.u]);
            return t.children
        }
        ,
        w.prototype.componentDidUpdate = w.prototype.componentDidMount = function() {
            var t = this;
            this.o.forEach((function(e, o) {
                O(t, o, e)
            }
            ))
        }
        ;
        var E = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
          , S = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
          , P = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
          , L = /[A-Z0-9]/g
          , D = "undefined" != typeof document
          , B = function(t) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t)
        };
        function R(t, e, o) {
            return null == e.__k && (e.textContent = ""),
            (0,
            i.render)(t, e),
            "function" == typeof o && o(),
            t ? t.__c : null
        }
        function N(t, e, o) {
            return (0,
            i.hydrate)(t, e),
            "function" == typeof o && o(),
            t ? t.__c : null
        }
        i.Component.prototype.isReactComponent = {},
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
            Object.defineProperty(i.Component.prototype, t, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        }
        ));
        var x = i.options.event;
        function F() {}
        function V() {
            return this.cancelBubble
        }
        function j() {
            return this.defaultPrevented
        }
        i.options.event = function(t) {
            return x && (t = x(t)),
            t.persist = F,
            t.isPropagationStopped = V,
            t.isDefaultPrevented = j,
            t.nativeEvent = t
        }
        ;
        var $, U = {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.class
            }
        }, Z = i.options.vnode;
        i.options.vnode = function(t) {
            "string" == typeof t.type && function(t) {
                var e = t.props
                  , o = t.type
                  , s = {};
                for (var n in e) {
                    var a = e[n];
                    if (!("value" === n && "defaultValue"in e && null == a || D && "children" === n && "noscript" === o || "class" === n || "className" === n)) {
                        var r = n.toLowerCase();
                        "defaultValue" === n && "value"in e && null == e.value ? n = "value" : "download" === n && !0 === a ? a = "" : "ondoubleclick" === r ? n = "ondblclick" : "onchange" !== r || "input" !== o && "textarea" !== o || B(e.type) ? "onfocus" === r ? n = "onfocusin" : "onblur" === r ? n = "onfocusout" : P.test(n) ? n = r : -1 === o.indexOf("-") && S.test(n) ? n = n.replace(L, "-$&").toLowerCase() : null === a && (a = void 0) : r = n = "oninput",
                        "oninput" === r && s[n = r] && (n = "oninputCapture"),
                        s[n] = a
                    }
                }
                "select" == o && s.multiple && Array.isArray(s.value) && (s.value = (0,
                i.toChildArray)(e.children).forEach((function(t) {
                    t.props.selected = -1 != s.value.indexOf(t.props.value)
                }
                ))),
                "select" == o && null != s.defaultValue && (s.value = (0,
                i.toChildArray)(e.children).forEach((function(t) {
                    t.props.selected = s.multiple ? -1 != s.defaultValue.indexOf(t.props.value) : s.defaultValue == t.props.value
                }
                ))),
                e.class && !e.className ? (s.class = e.class,
                Object.defineProperty(s, "className", U)) : (e.className && !e.class || e.class && e.className) && (s.class = s.className = e.className),
                t.props = s
            }(t),
            t.$$typeof = E,
            Z && Z(t)
        }
        ;
        var W = i.options.__r;
        i.options.__r = function(t) {
            W && W(t),
            $ = t.__c
        }
        ;
        var G = i.options.diffed;
        i.options.diffed = function(t) {
            G && G(t);
            var e = t.props
              , o = t.__e;
            null != o && "textarea" === t.type && "value"in e && e.value !== o.value && (o.value = null == e.value ? "" : e.value),
            $ = null
        }
        ;
        var z = {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function(t) {
                        return $.__n[t.__c].props.value
                    }
                }
            }
        }
          , H = "17.0.2";
        function J(t) {
            return i.createElement.bind(null, t)
        }
        function q(t) {
            return !!t && t.$$typeof === E
        }
        function Y(t) {
            return q(t) ? i.cloneElement.apply(null, arguments) : t
        }
        function K(t) {
            return !!t.__k && ((0,
            i.render)(null, t),
            !0)
        }
        function Q(t) {
            return t && (t.base || 1 === t.nodeType && t) || null
        }
        var X = function(t, e) {
            return t(e)
        }
          , tt = function(t, e) {
            return t(e)
        }
          , et = i.Fragment;
        function ot(t) {
            t()
        }
        function it(t) {
            return t
        }
        function st() {
            return [!1, ot]
        }
        var nt = s.useLayoutEffect;
        function at(t, e) {
            var o = e()
              , i = (0,
            s.useState)({
                h: {
                    __: o,
                    v: e
                }
            })
              , n = i[0].h
              , a = i[1];
            return (0,
            s.useLayoutEffect)((function() {
                n.__ = o,
                n.v = e,
                c(n.__, e()) || a({
                    h: n
                })
            }
            ), [t, o, e]),
            (0,
            s.useEffect)((function() {
                return c(n.__, n.v()) || a({
                    h: n
                }),
                t((function() {
                    c(n.__, n.v()) || a({
                        h: n
                    })
                }
                ))
            }
            ), [t]),
            o
        }
        var rt = {
            useState: s.useState,
            useId: s.useId,
            useReducer: s.useReducer,
            useEffect: s.useEffect,
            useLayoutEffect: s.useLayoutEffect,
            useInsertionEffect: nt,
            useTransition: st,
            useDeferredValue: it,
            useSyncExternalStore: at,
            startTransition: ot,
            useRef: s.useRef,
            useImperativeHandle: s.useImperativeHandle,
            useMemo: s.useMemo,
            useCallback: s.useCallback,
            useContext: s.useContext,
            useDebugValue: s.useDebugValue,
            version: "17.0.2",
            Children: f,
            render: R,
            hydrate: N,
            unmountComponentAtNode: K,
            createPortal: M,
            createElement: i.createElement,
            createContext: i.createContext,
            createFactory: J,
            cloneElement: Y,
            createRef: i.createRef,
            Fragment: i.Fragment,
            isValidElement: q,
            findDOMNode: Q,
            Component: i.Component,
            PureComponent: d,
            memo: u,
            forwardRef: p,
            flushSync: tt,
            unstable_batchedUpdates: X,
            StrictMode: et,
            Suspense: _,
            SuspenseList: w,
            lazy: T,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: z
        }
    }
    ,
    6584: (t, e, o) => {
        "use strict";
        o.d(e, {
            BX: () => n,
            HY: () => i.Fragment,
            tZ: () => n
        });
        var i = o(5160)
          , s = 0;
        function n(t, e, o, n, a, r) {
            var l, c, d = {};
            for (c in e)
                "ref" == c ? l = e[c] : d[c] = e[c];
            var u = {
                type: t,
                props: d,
                key: o,
                ref: l,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: --s,
                __source: a,
                __self: r
            };
            if ("function" == typeof t && (l = t.defaultProps))
                for (c in l)
                    void 0 === d[c] && (d[c] = l[c]);
            return i.options.vnode && i.options.vnode(u),
            u
        }
    }
    ,
    3922: (t, e, o) => {
        "use strict";
        o.r(e),
        o.d(e, {
            GET_ENV: () => I,
            GET_GAME_CONFIG: () => r,
            GET_STORE: () => g,
            bootstrap: () => w
        });
        var i = o(6584)
          , s = o(5160)
          , n = o(8661);
        let a = null;
        const r = () => a;
        var l = o(7864)
          , c = o(4412)
          , d = o(3486)
          , u = o(4036)
          , h = o(6322)
          , m = o(1794)
          , p = o(748)
          , b = o(9273)
          , f = o(5004);
        let y = null;
        const v = async ({customStore: t=class {
        }
        }) => {
            const e = {
                profileCommon: l.default,
                autobetCommon: c.default,
                uiCommon: d.default,
                audioCommon: u.default,
                tournamentsCommon: h.default,
                freebetsCommon: m.default,
                balanceCommon: p.default,
                quickModeCommon: b.default,
                trackingCommon: f.default,
                game: class {
                }
            }
              , o = r().storeList || {};
            for (const [t,i] of Object.entries(o)) {
                if (!e[t])
                    continue;
                const o = await C(i, t);
                o && (e[t] = o.default)
            }
            const i = t;
            y = new class {
                constructor() {
                    this.profileCommon = new e.profileCommon(this),
                    this.autobetCommon = new e.autobetCommon(this),
                    this.uiCommon = new e.uiCommon(this),
                    this.audioCommon = new e.audioCommon(this),
                    this.tournamentsCommon = new e.tournamentsCommon(this),
                    this.freebetsCommon = new e.freebetsCommon(this),
                    this.balanceCommon = new e.balanceCommon(this),
                    this.quickModeCommon = new e.quickModeCommon(this),
                    this.trackingCommon = new e.trackingCommon(this),
                    this.customStore = new i(this),
                    this.game = new e.game(this,r())
                }
            }
            ,
            Object.freeze(y)
        }
          , g = () => y
          , C = async (t, e) => {
            try {
                return await o(1734)(`./${t}.ts`)
            } catch (t) {
                throw new Error(`GET_STORE: ${e} is not defined`)
            }
        }
        ;
        let _ = null;
        const I = () => _;
        var T = o(5414);
        const w = async t => {
            ( ({env: t}) => {
                _ = t,
                Object.freeze(_)
            }
            )(t),
            await (async ({entry: t}) => {
                try {
                    const e = await fetch(`modules/config/${t}.json`)
                      , o = await e.json();
                    a = o,
                    Object.freeze(a)
                } catch (t) {
                    throw new Error("GET_GAME_CONFIG: config is not defined")
                }
            }
            )(t);
            const e = ( () => {
                const {pathname: t} = window.location
                  , e = r().gameClientPublicUrl;
                switch (t) {
                case `${e || ""}/render`:
                    return "render";
                case `${e || ""}/result`:
                    return "result";
                case `${e || ""}/fair`:
                    return "fair";
                case `${e || ""}/share`:
                    return "share";
                default:
                    return "main"
                }
            }
            )();
            "main" === e && await v(t),
            ( ({meta: {title: t, favicon: e, canonical: o}}) => {
                if (t) {
                    let e = document.getElementsByTagName("title")[0];
                    e || (e = document.createElement("title"),
                    document.getElementsByTagName("head")[0].appendChild(e)),
                    e.innerText = t
                }
                if (e) {
                    let t = document.querySelector("link[rel~='icon']");
                    t || (t = document.createElement("link"),
                    t.rel = "icon",
                    document.getElementsByTagName("head")[0].appendChild(t)),
                    t.href = `${r().gameClientPublicUrl || ""}/static/${e}`
                }
                if (o) {
                    let t = document.querySelector("link[rel~='canonical']");
                    const e = window.location.origin.split(".");
                    t || (t = document.createElement("link"),
                    t.rel = "canonical",
                    document.getElementsByTagName("head")[0].appendChild(t)),
                    t.href = `https://${e[e.length - 2]}.${e[e.length - 1]}/game/${r().gameServerTheme}`
                }
            }
            )(t),
            (0,
            T.VI)(),
            ( ({pages: t}, e) => {
                const o = t[e];
                if (!o)
                    return console.error(`Page ${e} not found`);
                (0,
                s.render)((0,
                i.tZ)(n.Suspense, {
                    fallback: (0,
                    i.tZ)("div", {}),
                    children: (0,
                    i.tZ)(o, {})
                }), document.getElementById("app"))
            }
            )(t, e)
        }
    }
    ,
    4474: (t, e, o) => {
        "use strict";
        o.d(e, {
            $H: () => C,
            Ai: () => u,
            D$: () => D,
            GN: () => v,
            Gw: () => d,
            H2: () => b,
            HF: () => R,
            HQ: () => n,
            II: () => h,
            Ig: () => L,
            KQ: () => M,
            Kd: () => E,
            Nh: () => T,
            Nx: () => N,
            Po: () => I,
            Qk: () => f,
            Um: () => w,
            V_: () => _,
            ZL: () => S,
            b0: () => B,
            bo: () => A,
            cN: () => P,
            gM: () => y,
            iX: () => m,
            ir: () => g,
            jS: () => p,
            mB: () => O,
            r: () => k,
            tN: () => c
        });
        var i = o(529)
          , s = o.n(i);
        const n = () => window.devProxy ? window.devProxy : {
            protocol: "http", //document.location.protocol.replace(":", ""),
            host: document.location.host// document.location.host // fcuk you
        }
          , a = () => {
            const t = n();
            return s().create({
                baseURL: `${t.protocol}://${t.host}/api/common`
            })
        }
          , r = () => {
            const t = n();
            return s().create({
                baseURL: `${t.protocol}://${t.host}/cms`
            })
        }
          , l = () => {
            const t = n();
            return s().create({
                baseURL: `${t.protocol}://${t.host}/universe/api/common`
            })
        }
          , c = ({headers: t, gameId: e, limit: o=10, offset: i=0}) => a().get(`/bets/my?gameId=${e}&limit=${o}&offset=${i}`, {
            headers: t
        })
          , d = t => a().get("/settings", {
            params: t
        })
          , u = t => a().post("/profile", t)
          , h = ({headers: t, ...e}) => a().post("/player/statistics", e, {
            headers: t
        })
          , m = ({headers: t, params: e}) => a().get("/limits", {
            headers: t,
            params: e
        })
          , p = ({headers: t}) => a().get("/rates", {
            headers: t
        })
          , b = ({headers: t, name: e}) => a().put("/player", {
            nickname: e
        }, {
            headers: t
        })
          , f = ({headers: t, betId: e, useBetsApi: o}) => o ? s().create({
            baseURL: `${n().protocol}://${n().host}/api`
        }).get(`/bets/${e}`, {
            headers: t
        }) : a().get(`/bets/${e}`, {
            headers: t
        })
          , y = ({projectId: t, locale: e, key: o, tag: i}) => (t => {
            const e = n();
            return s().create({
                baseURL: "translateHost"in e ? `${e.translateHost.protocol}://${e.translateHost.host}/api` : `${e.protocol}://${e.host}/api`,
                headers: {
                    ...t && {
                        "If-None-Match": `"${t}"`
                    }
                }
            })
        }
        )(i).get(`/translates/${t}/latest/${e}${o ? `/${o}` : ""}`, { // fuck you
            params: {
                v: i
            }
        })
          , v = ({headers: t, params: e}) => a().get(`/tournaments/my?gameId=${e.gameId}${e.sub_partner_id ? `&subPartnerId=${e.sub_partner_id}` : ""}`, {
            headers: t
        })
          , g = ({headers: t, tournamentId: e}) => a().get(`/tournaments/${e}/my`, {
            headers: t
        })
          , C = ({headers: t, tournamentId: e}) => a().get(`/tournaments/${e}`, {
            headers: t
        })
          , _ = ({tournamentIdList: t}) => {
            const e = t.map((t => `filters[tournamentId][$eq]=${t}`)).join("&");
            return r().get(`/api/tournaments?${e}&locale=all&populate=*`)
        }
          , I = () => r().get("/api/stories-list?pagination[pageSize]=10&sort[0]=order:desc&sort[1]=publishedAt:desc&populate=*")
          , T = ({headers: t, key: e, value: o, ttl: i}) => a().post("/storage", {
            key: e,
            value: o,
            ...i ? {
                ttl: i
            } : {}
        }, {
            headers: t
        })
          , w = ({headers: t, key: e, value: o, ttl: i}) => a().put(`/storage/${e}`, {
            value: o,
            ...i ? {
                ttl: i
            } : {}
        }, {
            headers: t
        })
          , O = ({headers: t, gameId: e}) => a().get(`/freebets/all?gameId=${e}`, {
            headers: t
        })
          , A = ({gameId: t}) => a().get(`/version/${t}`)
          , k = (t, e) => a().post("/like", e, {
            headers: t
        })
          , M = (t, e) => a().post("/unlike", e, {
            headers: t
        })
          , E = t => l().post("/leaderboard", t)
          , S = t => l().post("/league/leaderboard", t)
          , P = () => l().get("/league/settings")
          , L = () => l().post("/play-of-the-day")
          , D = t => l().post("/player", t)
          , B = t => l().post("/player/records", t)
          , R = t => l().get(`/like/${t.betId}`)
          , N = t => l().post("/player/fav-games", t);
        e.ZP = a
    }
    ,
    2667: (t, e, o) => {
        "use strict";
        o.d(e, {
            Fs: () => i,
            LY: () => n,
            X9: () => s
        });
        const i = [{
            key: "en",
            value: "en",
            title: "English"
        }, {
            key: "ru",
            value: "ru",
            title: "Русский"
        }, {
            key: "be",
            value: "ru",
            title: "Беларуская"
        }, {
            key: "kk",
            value: "ru",
            title: "Қазақша"
        }, {
            key: "ja",
            value: "ja",
            title: "日本語"
        }, {
            key: "tr",
            value: "tr",
            title: "Türkçe"
        }, {
            key: "az",
            value: "az",
            title: "Azərbaycanca"
        }, {
            key: "uz",
            value: "uz",
            title: "Oʻzbekcha"
        }, {
            key: "bn",
            value: "bn",
            title: "বাংলা"
        }, {
            key: "uk",
            value: "uk",
            title: "Українська"
        }, {
            key: "fr",
            value: "fr",
            title: "Français"
        }, {
            key: "pt",
            value: "pt",
            title: "Português"
        }, {
            key: "es",
            value: "es",
            title: "Español"
        }, {
            key: "zh",
            value: "zh",
            title: "中文"
        }, {
            key: "th",
            value: "th",
            title: "ไทย"
        }, {
            key: "pl",
            value: "pl",
            title: "Polski"
        }, {
            key: "ko",
            value: "ko",
            title: "한국어"
        }, {
            key: "vi",
            value: "vi",
            title: "Tiếng Việt"
        }, {
            key: "de",
            value: "de",
            title: "Deutsch"
        }, {
            key: "hi",
            value: "hi",
            title: "हिन्दी; हिंदी"
        }]
          , s = "en"
          , n = "democustomer" // fuck you  默认渠道
    }
    ,
    5669: (t, e, o) => {
        "use strict";
        function i(t, e=2) {
            const o = Math.pow(10, e)
              , i = Number((Math.abs(t) * o).toPrecision(15));
            return Math.floor(i) / o * Math.sign(t)
        }
        o.d(e, {
            G: () => i
        }),
        e.Z = i
    }
    ,
    9334: (t, e, o) => {
        "use strict";
        o.d(e, {
            Z: () => s
        });
        let i = null;
        function s(t, e) {
            return e instanceof Object ? (e[t] ? i = e[t] : e.data && s(t, e.data),
            i) : null
        }
    }
    ,
    8743: (t, e, o) => {
        "use strict";
        function i({event: t="ga4_interaction", parameters: e, ...o}) {
            const i = "init" === o?.action || Array.isArray(window.dataLayer) && window.dataLayer.some((t => "init" === t.action))
              , s = {
                event: t,
                parameters: e,
                ...o
            };
            window.dataLayer = window.dataLayer || [],
            window.dataLayerQueue = window.dataLayerQueue || [],
            i ? window.dataLayer.push(s) : window.dataLayerQueue.push(s)
        }
        o.d(e, {
            Z: () => i
        })
    }
    ,
    7964: (t, e, o) => {
        "use strict";
        function i() {
            const t = window.innerWidth
              , e = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(Android)|(webOS)/i);
            return !(t > 819 && e && e.includes("iPad")) && (t <= 819 || !!e)
        }
        o.d(e, {
            Z: () => i
        })
    }
    ,
    2009: (t, e, o) => {
        "use strict";
        o.d(e, {
            LS: () => i
        });
        const i = new class {
            constructor() {
                this.check = () => {
                    try {
                        return localStorage && "undefined" != typeof localStorage
                    } catch (t) {
                        return !1
                    }
                }
                ,
                this.set = (t, e) => this.check() && localStorage.setItem(t, e),
                this.get = t => this.check() && localStorage.getItem(t),
                this.remove = t => this.check() && localStorage.removeItem(t),
                this.key = t => this.check() && localStorage.key(t),
                this.length = () => this.check() && localStorage.length,
                this.has = t => this.check() && null !== localStorage.getItem(t)
            }
        }
        ;
        e.Z = i
    }
    ,
    121: (t, e, o) => {
        "use strict";
        function i(t, e=2) {
            const o = Math.pow(10, e);
            return Math.round((t + Number.EPSILON) * o) / o
        }
        o.d(e, {
            N: () => i
        }),
        e.Z = i
    }
    ,
    8675: (t, e, o) => {
        "use strict";
        function i(t) {
            return new Promise((e => setTimeout(e, 1e3 * t)))
        }
        o.d(e, {
            V: () => i
        }),
        e.Z = i
    }
    ,
    8596: (t, e, o) => {
        "use strict";
        function i(t, e) {
            let o = String(t);
            const i = o.indexOf(".");
            if (-1 !== i) {
                const t = o.slice(i + 1).slice(0, e);
                o = o.slice(0, i + 1) + t
            }
            return Number(o)
        }
        o.d(e, {
            Z: () => i
        })
    }
    ,
    5414: (t, e, o) => {
        "use strict";
        o.d(e, {
            VI: () => p,
            fU: () => m
        });
        var i = o(3868)
          , s = o.n(i)
          , n = o(286)
          , a = o(3922)
          , r = o(4474)
          , l = o(2667)
          , c = o(2009);
        function d(t) {
            return t.replace("-", "_")
        }
        function u() {
            return {
                ns: "translation",
                projectId: "5fbba1ce8c2b9e7440670d3d",
                location: (0,
                a.GET_GAME_CONFIG)()?.defaultLocale || d(new URLSearchParams(document.location.search).get("locale") || l.X9),
                lsPrefixName: (0,
                a.GET_GAME_CONFIG)()?.gameClientPublicUrl || "default",
                lsTagName: "i18nTag",
                lsResourcesName: "i18nResources",
                lsDivisionSymbol: "::"
            }
        }
        function h() {
            const {lsPrefixName: t, lsResourcesName: e, lsDivisionSymbol: o, ns: i} = u()
              , s = {};
            for (let n = 0; n < c.Z.length(); n++) {
                const a = c.Z.key(n);
                if (!a.includes(t) || !a.includes(e))
                    continue;
                const r = a.split(o)
                  , l = r[r.length - 1]
                  , d = c.Z.get(a);
                s[l] = {
                    [`${i}`]: JSON.parse(d) || null
                }
            }
            return s
        }
        async function m(t=s().language) {
            await new Promise((t => setTimeout(t, 250)));
            const {projectId: e, lsPrefixName: o, lsTagName: i, lsResourcesName: n, lsDivisionSymbol: a, ns: l} = u()
              , h = d(t)
              , m = s().hasResourceBundle(h, l) ? c.Z.get(i) : void 0;
            try {
                const d = await (0,
                r.gM)({
                    projectId: e,
                    locale: h,
                    tag: m
                });
                c.Z.set(i, d.data.i18nVersion),
                Object.keys(d.data).length > 2 && (c.Z.set(`${o}${a}${n}${a}${t}`, JSON.stringify(d.data)),
                s().addResourceBundle(h, l, d.data, !0, !0),
                s().changeLanguage(h),
                setTimeout(( () => {
                    console.log("i18n.language", s().language),
                    s().changeLanguage(h)
                }
                ), 250))
            } catch (t) {
                if (304 === t?.response?.status)
                    return void s().changeLanguage(h);
                console.error(t)
            }
        }
        const p = () => {
            const {location: t} = u();
            s().use(n.initReactI18next).init({
                lng: t,
                resources: h()
            }, ( (t, e) => {
                m()
            }
            ))
        }
    }
    ,
    4036: (t, e, o) => {
        "use strict";
        o.r(e);
        var i = o(1299)
          , s = o(4166)
          , n = o(7964)
          , a = o(2009)
          , r = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        const l = (0,
        n.Z)()
          , c = "true" === a.Z.get("allMuted")
          , d = 500;
        class u {
            constructor(t) {
                this.audioAllowed = !1,
                this.setAudioAllowed = t => {
                    this.audioAllowed = t
                }
                ,
                this.globalMuted = !1,
                this.setGlobalMuted = (t, e) => {
                    this.globalMuted = t,
                    s.Howler.mute(t),
                    a.Z.set("allMuted", t),
                    t || (this.music || Object.keys(this.musicPlaylist).length ? (0 === this.musicVolume && 0 === this.soundVolume && (this.setSoundMuted(!1),
                    this.setMusicMuted(!1)),
                    this.soundMuted && this.musicMuted && (this.soundVolume && this.setSoundMuted(!1),
                    this.musicVolume && this.setMusicMuted(!1))) : this.soundMuted && this.setSoundMuted(!1))
                }
                ,
                this.globalUnMute = () => {}
                ,
                this.soundMuted = "true" === a.Z.get("soundMuted"),
                this.setSoundMuted = t => {
                    const e = !this.globalMuted && t;
                    this.soundMuted = e,
                    e ? 0 === this.musicVolume && this.setGlobalMuted(!0) : (0 === this.soundVolume && this.setSoundVolume(.5, !1),
                    this.setGlobalMuted(!1)),
                    Object.values(this.sounds).forEach((t => {
                        t.mute(e)
                    }
                    )),
                    a.Z.set("soundMuted", e)
                }
                ,
                this.musicMuted = ( () => {
                    const t = a.Z.get("musicMuted");
                    return !(!l || t) || "true" === a.Z.get("musicMuted")
                }
                )(),
                this.setMusicMuted = t => {
                    const e = !this.globalMuted && t;
                    this.musicMuted = e,
                    this.music?.mute(e),
                    e ? 0 === this.soundVolume && this.setGlobalMuted(!0) : (0 === this.musicVolume && this.setMusicVolume(.5, !1),
                    this.setGlobalMuted(!1)),
                    Object.values(this.musicPlaylist).forEach((t => {
                        t?.mute(e)
                    }
                    )),
                    a.Z.set("musicMuted", e)
                }
                ,
                this.musicIsPlaying = !1,
                this.playlistIsPlaying = {},
                this.sounds = (0,
                i.observable)({}),
                this.music = null,
                this.musicPlaylist = {},
                this.fadeTimeout = null,
                this.fadeTimeouts = {},
                this.soundVolume = a.Z.get("soundVolume") ? Number(a.Z.get("soundVolume")) : 1,
                this.musicVolume = ( () => {
                    const t = a.Z.get("musicVolume");
                    return t ? Number(t) : l ? 0 : 1
                }
                )(),
                this.registerSounds = t => {
                    this.sounds = {
                        ...this.sounds,
                        ...t
                    }
                }
                ,
                this.registerMusic = t => {
                    this.music = t,
                    this.music.once("unlock", ( () => {
                        this.musicIsPlaying && (this.musicIsPlaying = !1,
                        this.playMusic()),
                        Object.keys(this.playlistIsPlaying).length && (this.playlistIsPlaying = {},
                        this.playMusicPlaylist())
                    }
                    ))
                }
                ,
                this.registerMusicPlaylist = t => {
                    this.musicPlaylist = {
                        ...this.musicPlaylist,
                        ...t
                    },
                    Object.values(this.musicPlaylist)[0] && Object.values(this.musicPlaylist)[0].on("unlock", ( () => {
                        this.resumeMusicPlaylist()
                    }
                    )),
                    this.playlistIsPlaying = {
                        ...this.playlistIsPlaying,
                        ...Object.keys(t).reduce(( (t, e) => (t[e] = !1,
                        t)), {})
                    }
                }
                ,
                this.playAudio = (t, e) => {
                    if (document.hidden || !this.audioAllowed)
                        return;
                    this.fadeTimeout && clearTimeout(this.fadeTimeout);
                    const o = this.sounds[t];
                    o ? (o.stop(),
                    o.volume(this.soundVolume),
                    o.play(),
                    e && o.loop(!0)) : console.log(`no such audio ${t}`)
                }
                ,
                this.playAudioPromise = (t, e) => new Promise((o => {
                    if (document.hidden || !this.audioAllowed)
                        return void o();
                    this.fadeTimeout && clearTimeout(this.fadeTimeout);
                    const i = this.sounds[t];
                    if (!i)
                        return console.log(`no such audio ${t}`),
                        void o();
                    i.stop(),
                    i.volume(this.soundVolume),
                    i.once("end", ( () => o())),
                    i.play(),
                    e && i.loop(!0)
                }
                )),
                this.stopAudioByIdSmooth = (t, e=500) => {
                    const o = this.sounds[t];
                    if (!o)
                        return null;
                    o.fade(this.soundVolume, 0, e),
                    this.fadeTimeouts[t] && clearTimeout(this.fadeTimeouts[t]),
                    this.fadeTimeouts[t] = window.setTimeout(( () => {
                        o && o.stop()
                    }
                    ), e)
                }
                ,
                this.stopAudio = (t=null) => {
                    if (t) {
                        const e = this.sounds[t];
                        if (!e)
                            return void console.log(`no such audio ${t}`);
                        e.stop()
                    } else
                        Object.values(this.sounds).forEach((t => {
                            t.stop()
                        }
                        ))
                }
                ,
                this.setMusicIsPlaying = t => {
                    this.musicIsPlaying = t
                }
                ,
                this.setPlaylistIsPlaying = (t, e) => {
                    this.playlistIsPlaying[t] = e
                }
                ,
                this.playMusic = () => {
                    document.hidden || (this.music ? this.musicIsPlaying || (this.setMusicIsPlaying(!0),
                    this.root.uiCommon.isMobile && "unloaded" === this.music.state() && 0 === this.musicVolume || ("unloaded" === this.music.state() && this.music.load(),
                    this.music.volume(this.musicVolume),
                    this.music.seek(0),
                    this.music.play())) : console.log("No Music :("))
                }
                ,
                this.playMusicSmooth = () => {
                    this.music ? this.musicIsPlaying || (this.setMusicIsPlaying(!0),
                    this.root.uiCommon.isMobile && "unloaded" === this.music.state() && 0 === this.musicVolume || ("unloaded" === this.music.state() && this.music.load(),
                    this.audioAllowed && (this.music.seek(0),
                    this.fadeTimeout && clearTimeout(this.fadeTimeout),
                    this.music.fade(0, this.musicVolume, d),
                    this.music.play()))) : console.log("No Music :(")
                }
                ,
                this.stopMusic = () => {
                    this.music && (this.setMusicIsPlaying(!1),
                    this.music.stop())
                }
                ,
                this.stopMusicSmooth = () => {
                    this.music && (this.setMusicIsPlaying(!1),
                    this.music.fade(this.musicVolume, 0, d),
                    this.fadeTimeout = window.setTimeout(( () => {
                        this.music && this.music.stop()
                    }
                    ), d))
                }
                ,
                this.pauseMusic = () => {
                    this.music && (this.music.fade(this.musicVolume, 0, d),
                    this.fadeTimeout = window.setTimeout(( () => {
                        this.music && this.music.pause()
                    }
                    ), d))
                }
                ,
                this.resumeMusic = () => {
                    this.music && (this.fadeTimeout && clearTimeout(this.fadeTimeout),
                    "unloaded" !== this.music?.state() && (this.music.fade(0, this.musicVolume, d),
                    this.music.playing() || this.music.play()))
                }
                ,
                this.playMusicPlaylist = () => {
                    Object.keys(this.playlistIsPlaying).forEach((t => {
                        this.playlistIsPlaying[t] && this.playMusicPlaylistItem(t)
                    }
                    ))
                }
                ,
                this.playMusicPlaylistItem = t => {
                    this.musicPlaylist[t] ? this.playlistIsPlaying[t] || (this.setPlaylistIsPlaying(t, !0),
                    this.root.uiCommon.isMobile && "unloaded" === this.musicPlaylist[t].state() && 0 === this.musicVolume || this.audioAllowed && (this.musicPlaylist[t].volume(this.musicVolume),
                    this.musicPlaylist[t].seek(0),
                    this.musicPlaylist[t].play())) : console.log("No Music :(")
                }
                ,
                this.stopMusicPlaylist = () => {
                    Object.keys(this.musicPlaylist).forEach((t => {
                        this.musicPlaylist[t] && (this.setPlaylistIsPlaying(t, !1),
                        this.musicPlaylist[t].stop())
                    }
                    ))
                }
                ,
                this.stopMusicPlaylistItem = t => {
                    this.musicPlaylist[t] && (this.setPlaylistIsPlaying(t, !1),
                    this.musicPlaylist[t].stop())
                }
                ,
                this.stopMusicFadePlaylistItem = (t, e) => {
                    this.musicPlaylist[t] && (this.musicPlaylist[t].fade(this.musicVolume, 0, e),
                    this.fadeTimeouts[t] = window.setTimeout(( () => {
                        this.setPlaylistIsPlaying(t, !1),
                        this.musicPlaylist[t].stop()
                    }
                    ), e))
                }
                ,
                this.pauseMusicPlaylist = () => {
                    Object.keys(this.musicPlaylist).forEach((t => {
                        this.musicPlaylist[t].fade(this.musicVolume, 0, d),
                        this.fadeTimeouts[t] = window.setTimeout(( () => {
                            this.musicPlaylist[t].pause()
                        }
                        ), d)
                    }
                    ))
                }
                ,
                this.resumeMusicPlaylist = () => {
                    Object.keys(this.fadeTimeouts).map((t => {
                        this.fadeTimeouts[t] && clearTimeout(this.fadeTimeouts[t])
                    }
                    )),
                    Object.keys(this.musicPlaylist).forEach((t => {
                        "unloaded" !== this.musicPlaylist[t].state() && (this.musicPlaylist[t].fade(0, this.musicVolume, d),
                        !this.musicPlaylist[t].playing() && this.playlistIsPlaying[t] && this.musicPlaylist[t].play())
                    }
                    ))
                }
                ,
                this.mutePlaylistItem = (t, e) => {
                    this.musicPlaylist[t] && this.musicPlaylist[t].mute(e)
                }
                ,
                this.setSoundVolume = (t, e=!0) => {
                    a.Z.set("soundVolume", t),
                    e && this.setSoundMuted(!t);
                    const o = Object.values(this.sounds);
                    this.soundVolume = t,
                    o.forEach((e => {
                        e.volume(t)
                    }
                    ))
                }
                ,
                this.setMusicVolume = (t, e=!0) => {
                    a.Z.set("musicVolume", t),
                    e && this.setMusicMuted(!t),
                    this.musicVolume = t,
                    this.music?.volume(t),
                    Object.values(this.musicPlaylist).forEach((e => {
                        e.volume(t)
                    }
                    ))
                }
                ,
                this.root = t,
                (0,
                i.makeObservable)(this),
                this.setGlobalMuted(c),
                document.documentElement.addEventListener("click", ( () => {
                    this.setAudioAllowed(!0)
                }
                )),
                (0,
                i.reaction)(( () => this.root.uiCommon.isVisible), (t => {
                    this.globalMuted || (s.Howler.mute(!t),
                    s.Howler.ctx.resume())
                }
                )),
                (0,
                i.reaction)(( () => this.musicVolume), (t => {
                    this.root.uiCommon.isMobile && "unloaded" === this.music?.state() && t && (this.music?.load(),
                    this.music.on("load", ( () => {
                        this.musicIsPlaying && (this.stopMusicPlaylist(),
                        this.stopMusic(),
                        setTimeout(( () => {
                            this.playMusic(),
                            this.playMusicPlaylist()
                        }
                        ), 100))
                    }
                    )))
                }
                ))
            }
            get allMuted() {
                return this.music || Object.keys(this.musicPlaylist).length ? this.globalMuted || this.musicMuted && this.soundMuted || 0 === this.musicVolume && 0 === this.soundVolume : this.globalMuted || this.soundMuted || 0 === this.soundVolume
            }
        }
        r([i.observable], u.prototype, "audioAllowed", void 0),
        r([i.action], u.prototype, "setAudioAllowed", void 0),
        r([i.observable], u.prototype, "globalMuted", void 0),
        r([i.action], u.prototype, "setGlobalMuted", void 0),
        r([i.action], u.prototype, "globalUnMute", void 0),
        r([i.computed], u.prototype, "allMuted", null),
        r([i.observable], u.prototype, "soundMuted", void 0),
        r([i.action], u.prototype, "setSoundMuted", void 0),
        r([i.observable], u.prototype, "musicMuted", void 0),
        r([i.action], u.prototype, "setMusicMuted", void 0),
        r([i.observable], u.prototype, "musicIsPlaying", void 0),
        r([i.observable], u.prototype, "playlistIsPlaying", void 0),
        r([i.observable], u.prototype, "soundVolume", void 0),
        r([i.observable], u.prototype, "musicVolume", void 0),
        r([i.action], u.prototype, "registerSounds", void 0),
        r([i.action], u.prototype, "registerMusic", void 0),
        r([i.action], u.prototype, "registerMusicPlaylist", void 0),
        r([i.action], u.prototype, "playAudio", void 0),
        r([i.action], u.prototype, "playAudioPromise", void 0),
        r([i.action], u.prototype, "stopAudioByIdSmooth", void 0),
        r([i.action], u.prototype, "stopAudio", void 0),
        r([i.action], u.prototype, "setMusicIsPlaying", void 0),
        r([i.action], u.prototype, "setPlaylistIsPlaying", void 0),
        r([i.action], u.prototype, "playMusic", void 0),
        r([i.action], u.prototype, "playMusicSmooth", void 0),
        r([i.action], u.prototype, "stopMusic", void 0),
        r([i.action], u.prototype, "stopMusicSmooth", void 0),
        r([i.action], u.prototype, "pauseMusic", void 0),
        r([i.action], u.prototype, "resumeMusic", void 0),
        r([i.action], u.prototype, "playMusicPlaylist", void 0),
        r([i.action], u.prototype, "playMusicPlaylistItem", void 0),
        r([i.action], u.prototype, "stopMusicPlaylist", void 0),
        r([i.action], u.prototype, "stopMusicPlaylistItem", void 0),
        r([i.action], u.prototype, "stopMusicFadePlaylistItem", void 0),
        r([i.action], u.prototype, "pauseMusicPlaylist", void 0),
        r([i.action], u.prototype, "resumeMusicPlaylist", void 0),
        r([i.action], u.prototype, "mutePlaylistItem", void 0),
        r([i.action], u.prototype, "setSoundVolume", void 0),
        r([i.action], u.prototype, "setMusicVolume", void 0),
        e.default = u
    }
    ,
    4412: (t, e, o) => {
        "use strict";
        o.r(e);
        var i = o(1299)
          , s = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        class n {
            constructor(t) {
                this.autoModeEnabled = !1,
                this.autoBetEnabled = !1,
                this.autoBetsAmount = 0,
                this.autoBetLimit = !1,
                this.autoBetIndex = null,
                this.stopOnAnyWin = !1,
                this.min = .01,
                this.max = 999,
                this.initialAmount = 0,
                this.onWinIncrease = !1,
                this.onWinIncreaseAmount = 0,
                this.setOnWinIncrease = t => {
                    t ? this.setOnWinIncreaseAmount(100) : this.setOnWinIncreaseAmount(0),
                    this.onWinIncrease = t
                }
                ,
                this.setOnWinIncreaseAmount = t => {
                    this.onWinIncreaseAmount = t
                }
                ,
                this.setOnLoseIncrease = t => {
                    t ? this.setOnLoseIncreaseAmount(100) : this.setOnLoseIncreaseAmount(0),
                    this.onLoseIncrease = t
                }
                ,
                this.setOnLoseIncreaseAmount = t => {
                    this.onLoseIncreaseAmount = t
                }
                ,
                this.onLoseIncrease = !1,
                this.onLoseIncreaseAmount = 0,
                this.setAutoModeEnabled = t => {
                    const {clearBackendErrors: e} = this.root.uiCommon;
                    e(),
                    this.autoModeEnabled = t
                }
                ,
                this.setAutoBetEnabled = t => {
                    this.autoBetEnabled = t
                }
                ,
                this.setAutoBetsAmount = t => {
                    this.autoBetsAmount = Number(t)
                }
                ,
                this.setInitialAmount = t => {
                    this.initialAmount = t
                }
                ,
                this.setAutoBetLimit = t => {
                    this.autoBetLimit = t
                }
                ,
                this.setStopOnAnyWin = t => {
                    this.stopOnAnyWin = t
                }
                ,
                this.setAutoBetIndex = t => {
                    this.autoBetIndex = t
                }
                ,
                this.root = t,
                (0,
                i.makeObservable)(this)
            }
            get onWinIncreaseError() {
                return this.onWinIncrease && this.onWinIncreaseAmount < this.min || this.onWinIncrease && !this.onWinIncreaseAmount ? "COMMON.INCREASE_BY_VALIDATION" : void 0
            }
            get onLoseIncreaseError() {
                return this.onLoseIncrease && this.onLoseIncreaseAmount < this.min || this.onLoseIncrease && !this.onLoseIncreaseAmount ? "COMMON.INCREASE_BY_VALIDATION" : void 0
            }
        }
        s([i.observable], n.prototype, "autoModeEnabled", void 0),
        s([i.observable], n.prototype, "autoBetEnabled", void 0),
        s([i.observable], n.prototype, "autoBetsAmount", void 0),
        s([i.observable], n.prototype, "autoBetLimit", void 0),
        s([i.observable], n.prototype, "autoBetIndex", void 0),
        s([i.observable], n.prototype, "stopOnAnyWin", void 0),
        s([i.observable], n.prototype, "initialAmount", void 0),
        s([i.observable], n.prototype, "onWinIncrease", void 0),
        s([i.observable], n.prototype, "onWinIncreaseAmount", void 0),
        s([i.computed], n.prototype, "onWinIncreaseError", null),
        s([i.action], n.prototype, "setOnWinIncrease", void 0),
        s([i.action], n.prototype, "setOnWinIncreaseAmount", void 0),
        s([i.action], n.prototype, "setOnLoseIncrease", void 0),
        s([i.action], n.prototype, "setOnLoseIncreaseAmount", void 0),
        s([i.observable], n.prototype, "onLoseIncrease", void 0),
        s([i.observable], n.prototype, "onLoseIncreaseAmount", void 0),
        s([i.computed], n.prototype, "onLoseIncreaseError", null),
        s([i.action], n.prototype, "setAutoModeEnabled", void 0),
        s([i.action], n.prototype, "setAutoBetEnabled", void 0),
        s([i.action], n.prototype, "setAutoBetsAmount", void 0),
        s([i.action], n.prototype, "setInitialAmount", void 0),
        s([i.action], n.prototype, "setAutoBetLimit", void 0),
        s([i.action], n.prototype, "setStopOnAnyWin", void 0),
        s([i.action], n.prototype, "setAutoBetIndex", void 0),
        e.default = n
    }
    ,
    748: (t, e, o) => {
        "use strict";
        o.r(e);
        var i = o(1299)
          , s = o(8596)
          , n = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        class a {
            constructor(t) {
                this.balanceData = [],
                this.setBalanceData = ([t,e,o]) => {
                    if (void 0 === e && void 0 === o)
                        return void this.setBalance(t);
                    const i = {
                        timestamp: Date.now(),
                        ticketId: e,
                        result: o,
                        balance: t
                    }
                      , s = this.balanceData.findIndex((t => t?.decrement?.ticketId === e || t?.increment?.ticketId === e))
                      , n = -1 === s ? "decrement" : "increment";
                    "decrement" === n && this.balanceData.push({
                        increment: void 0,
                        decrement: i
                    }),
                    "increment" === n && (this.balanceData[s].increment = i),
                    this.setBalanceTimestamp(Date.now())
                }
                ,
                this.removeBalanceData = t => {
                    this.balanceData = this.balanceData.filter(( (e, o) => o > t))
                }
                ,
                this.loopTimeout = null,
                this.setBalance = t => {
                    this.root.profileCommon.profile && (this.root.profileCommon.profile = {
                        ...this.root.profileCommon.profile,
                        balance: (0,
                        s.Z)(t, this.root.profileCommon.profile?.rounding)
                    },
                    window.parent.postMessage(JSON.stringify({
                        type: "balanceUpdate",
                        balance: t
                    }), "*"))
                }
                ,
                this.getBalanceDataLastIndex = () => {
                    if (!this.balanceData.length)
                        return -1;
                    let t = 0
                      , e = 0;
                    for (let o = 0; o < this.balanceData.length; o++)
                        this.balanceData[o]?.decrement?.timestamp > e && (t = o,
                        e = this.balanceData[o].decrement.timestamp),
                        this.balanceData[o]?.increment?.timestamp > e && (t = o,
                        e = this.balanceData[o].increment.timestamp);
                    return t
                }
                ,
                this.balanceTimestamp = Date.now(),
                this.setBalanceTimestamp = t => {
                    this.balanceTimestamp = t
                }
                ,
                this.loop = () => {
                    if (!this.balanceData.length)
                        return;
                    const t = this.getBalanceDataLastIndex()
                      , e = this.balanceData[t].increment
                      , o = this.balanceData[t].decrement;
                    if (e && "canceled" === e.result)
                        this.setBalance(e.balance);
                    else if (!o || e) {
                        if ("ticketId" !== this.config.mode) {
                            if (Date.now() >= e.timestamp + this.config.delay)
                                return this.setBalance(e.balance),
                                void this.removeBalanceData(t);
                            clearTimeout(this.loopTimeout),
                            this.loopTimeout = setTimeout(( () => this.setBalanceTimestamp(Date.now())), this.config.delay)
                        }
                    } else
                        this.setBalance(o.balance)
                }
                ,
                this.updateBalanceFromTicketId = t => {
                    if ("ticketId" !== this.config.mode)
                        return;
                    const e = this.balanceData.findIndex((e => e?.increment?.ticketId === t));
                    if (-1 === e)
                        return;
                    const o = this.balanceData[e].increment;
                    this.setBalance(o.balance),
                    this.removeBalanceData(e)
                }
                ,
                this.root = t,
                (0,
                i.makeObservable)(this),
                (0,
                i.reaction)(( () => [this.balanceTimestamp]), this.loop)
            }
            get config() {
                return {
                    delay: 0,
                    mode: "default",
                    ...this.root.game?.gameConfig?.balance
                }
            }
        }
        n([i.computed], a.prototype, "config", null),
        n([i.observable], a.prototype, "balanceData", void 0),
        n([i.action], a.prototype, "setBalanceData", void 0),
        n([i.action], a.prototype, "removeBalanceData", void 0),
        n([i.observable], a.prototype, "loopTimeout", void 0),
        n([i.action], a.prototype, "setBalance", void 0),
        n([i.action], a.prototype, "getBalanceDataLastIndex", void 0),
        n([i.observable], a.prototype, "balanceTimestamp", void 0),
        n([i.action], a.prototype, "setBalanceTimestamp", void 0),
        n([i.action], a.prototype, "loop", void 0),
        n([i.action], a.prototype, "updateBalanceFromTicketId", void 0),
        e.default = a
    }
    ,
    1794: (t, e, o) => {
        "use strict";
        o.r(e);
        var i = o(1299)
          , s = o(4474)
          , n = o(2009)
          , a = o(121)
          , r = o(5669)
          , l = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        class c {
            constructor(t) {
                this.freebetsData = {
                    enabled: !1,
                    time: void 0,
                    id: void 0,
                    game: {},
                    gameSuccessIndexList: []
                },
                this.forcedDisabledFreebets = null,
                this.isGameInProgress = !1,
                this.onFreebetChange = {
                    callback: () => {}
                    ,
                    showConfirm: !1,
                    additionalText: null
                },
                this.initFreebetsData = () => {
                    const t = this.freebets.filter((t => !t.archived));
                    if (!t.length)
                        return;
                    let e = {
                        enabled: !0,
                        time: void 0,
                        id: t[0].id,
                        game: {},
                        gameSuccessIndexList: []
                    };
                    const o = JSON.parse(n.Z.get("freebetsData"));
                    o && (e = {
                        ...e,
                        ...o
                    }),
                    e.time && Date.now() >= e.time && (e.enabled = !0),
                    e.time || (e.enabled = !0),
                    e.enabled || (e.id = void 0),
                    e.enabled && !t.find((t => t.id === e?.id))?.id && (e.id = t[0].id),
                    this.updateFreebetsData(e)
                }
                ,
                this.updateFreebetsData = t => {
                    this.freebetsData = {
                        ...this.freebetsData,
                        ...t
                    },
                    n.Z.set("freebetsData", JSON.stringify(this.freebetsData))
                }
                ,
                this.setOnFreebetChange = ({callback: t=( () => {}
                ), showConfirm: e=!1, additionalText: o=null}) => {
                    this.onFreebetChange = {
                        callback: t,
                        showConfirm: e,
                        additionalText: o
                    }
                }
                ,
                this.setForcedDisabledFreebets = t => {
                    this.forcedDisabledFreebets = t
                }
                ,
                this.setIsGameInProgress = t => {
                    this.isGameInProgress = t
                }
                ,
                this.setFirstFreebet = () => {
                    const t = this.freebets.find((t => !t.archived));
                    t ? this.updateFreebetsData({
                        id: t.id
                    }) : this.updateFreebetsData({
                        enabled: !1,
                        id: void 0
                    })
                }
                ,
                this.getFreebetsDataGameByIndex = t => this.freebetsData.game[t],
                this.freebets = [],
                this.loading = !1,
                this.setLoading = t => {
                    this.loading = t
                }
                ,
                this.getFreebets = async () => {
                    const {apiKey: t, token: e, freebetsVerified: o} = this.root.profileCommon.profile;
                    if (t && e && o && this.root.game?.gameConfig?.freebets?.enabled)
                        try {
                            this.setLoading(!0);
                            const {data: o} = await (0,
                            s.mB)({
                                headers: {
                                    authorization: e,
                                    cid: t
                                },
                                gameId: this.root.game.gameServerId
                            })
                              , i = [...o].sort(( (t, e) => t.offer.expire - e.offer.expire || new Date(t.expiresAt).getDate() - new Date(e.expiresAt).getDate() || new Date(t.offer.endAt).getDate() - new Date(e.offer.endAt).getDate()));
                            this.freebets = i,
                            this.initFreebetsData(),
                            this.setLoading(!1)
                        } catch (t) {
                            this.setLoading(!1),
                            console.log("Fetch freebets error:", t)
                        }
                }
                ,
                this.decrementFreebetsLeftById = t => {
                    this.freebets = this.freebets.map((e => (e.id === t && e.left > 0 && (e.left -= 1),
                    e)))
                }
                ,
                this.updateFreebetsPayout = ({index: t, coefficient: e}) => {
                    if (!(t || e || this.list[t] || this.list[t].freebet))
                        return;
                    const o = this.list[t]?.freebetActive?.id
                      , i = this.list[t]?.freebetActive?.offer?.configuration[0]?.betAmount;
                    if (!o || !i)
                        return;
                    let s = (0,
                    r.Z)(i * Number(e));
                    "greedy" === this.root.profileCommon.profile.freebetsType && (s = (0,
                    r.Z)(s - i)),
                    this.freebets = this.freebets.map((t => {
                        if (t.id !== o)
                            return t;
                        const e = {
                            ...t
                        }
                          , i = e.payout[0] || {
                            currency: this.root.profileCommon.profile.currency,
                            payout: 0,
                            enrollmentId: "",
                            payoutUsd: 0,
                            payoutEur: 0,
                            id: ""
                        };
                        return i.payout = (0,
                        a.Z)(i.payout + s),
                        e.payout = [i],
                        e
                    }
                    ))
                }
                ,
                this.freebetCompletedId = void 0,
                this.setFreebetCompletedId = t => {
                    this.freebetCompletedId = t
                }
                ,
                this.reactionFreebetCompleted = async () => {
                    this.freebetCompletedId && this.freebetCompleted?.payout[0]?.payout && this.root.uiCommon.setModal({
                        modalName: "freebetsCompleted",
                        render: !0,
                        delayOpen: this.root.game?.gameConfig?.freebets?.completed?.delayOpen,
                        delayClose: this.root.game?.gameConfig?.freebets?.completed?.delayClose,
                        callbackOnClose: () => {
                            this.setFreebetCompletedId()
                        }
                    })
                }
                ,
                this.setFreebetsArchiveById = t => {
                    this.freebets = this.freebets.map((e => (e.id === t && (e.archived = !0,
                    this.setFreebetCompletedId(t)),
                    e)))
                }
                ,
                this.updateFreebetsArchive = t => {
                    const e = this.freebets.find((e => e.id === t))
                      , o = Object.values(this.list).filter((e => e.freebet && e.freebetActive?.id === t)).length;
                    !e || e.left > 0 || e.archived || 1 !== o || setTimeout(( () => {
                        this.setFreebetsArchiveById(t),
                        this.setFirstFreebet()
                    }
                    ), 0)
                }
                ,
                this.updateFreebetsArchiveEndTime = t => {
                    const e = this.freebets.find((e => e.id === t));
                    e && !e.archived && (this.setFreebetsArchiveById(t),
                    this.setFirstFreebet())
                }
                ,
                this.list = {},
                this.initList = () => {
                    const t = n.Z.get("freebetsList");
                    t && (this.list = JSON.parse(t))
                }
                ,
                this.listAdd = t => {
                    t.freebet && this.freebetActive && this.decrementFreebetsLeftById(this.freebetActive.id),
                    this.list[t.index] = {
                        index: 0,
                        freebet: !1,
                        time: Date.now(),
                        freebetActive: this.freebetActive,
                        game: this.getFreebetsDataGameByIndex(t.index),
                        ...t
                    },
                    n.Z.set("freebetsList", JSON.stringify(this.list)),
                    this.updateFreebetsSuccessIndex()
                }
                ,
                this.listRemoveByIndex = (t=0) => {
                    this.list[t] && (!this.freebetsData.enabled && this.list[t].freebet && this.connectToFreebetCommonUpdate(t, this.list[t].game),
                    this.freebetsData.enabled && this.freebetActive && this.list[t].freebet && this.freebetActive.id !== this.list[t].freebetActive.id && this.connectToFreebetCommonHelperUpdate(t, this.list[t].game),
                    this.freebetsData.enabled && this.freebetActive && !this.list[t].freebet && this.connectToFreebetCommonHelperUpdate(t, this.list[t].game),
                    this.freebetsData.game[t] = this.list[t].game,
                    this.list[t].freebet && this.list[t]?.freebetActive?.id && this.updateFreebetsArchive(this.list[t]?.freebetActive?.id),
                    delete this.list[t],
                    n.Z.set("freebetsList", JSON.stringify(this.list)),
                    this.updateFreebetsSuccessIndex())
                }
                ,
                this.listGetByIndex = (t=0) => {
                    if (this.list[t])
                        return this.list[t]
                }
                ,
                this.connectToFreebetCommonConnect = void 0,
                this.connectToFreebetCommonUpdate = void 0,
                this.connectToFreebetCommon = (t, e) => {
                    this.connectToFreebetCommonConnect = t,
                    this.connectToFreebetCommonUpdate = e
                }
                ,
                this.reconnectToFreebetCommon = (t, e) => {
                    this.connectToFreebetCommonConnect = t,
                    this.connectToFreebetCommonUpdate = e,
                    this.connectToFreebetCommonLoopUpdate()
                }
                ,
                this.connectToFreebetCommonLoopConnect = () => {
                    if (!this.connectToFreebetCommonConnect || !this.connectToFreebetCommonUpdate)
                        return;
                    const t = this.connectToFreebetCommonConnect().map(( (t, e) => [e, t]));
                    if (Object.keys(this.list).length)
                        for (let e of Object.keys(this.list)) {
                            const o = this.list[e];
                            t.map(( (t, e) => Number(o.index) !== e ? t : [Number(o.index), t.game]))
                        }
                    this.updateFreebetsData({
                        game: Object.fromEntries(t)
                    })
                }
                ,
                this.connectToFreebetCommonLoopUpdate = () => {
                    if (this.connectToFreebetCommonConnect && this.connectToFreebetCommonUpdate && Object.keys(this.freebetsData.game).length)
                        for (let t of Object.keys(this.freebetsData.game))
                            this.list[t] || this.connectToFreebetCommonUpdate(t, this.getFreebetsDataGameByIndex(t))
                }
                ,
                this.connectToFreebetCommonLoopId = () => {
                    if (this.connectToFreebetCommonConnect && this.connectToFreebetCommonUpdate && Object.keys(this.freebetsData.gameSuccessIndexList).length && this.freebetActive)
                        for (let t of Object.keys(this.freebetsData.game))
                            this.list[t] || (this.freebetsSuccessIndexList.includes(Number(t)) ? this.connectToFreebetCommonHelperUpdate(t, this.getFreebetsDataGameByIndex(t)) : this.connectToFreebetCommonUpdate(t, this.getFreebetsDataGameByIndex(t)))
                }
                ,
                this.connectToFreebetCommonHelperUpdate = (t, e) => {
                    if (!this.connectToFreebetCommonConnect || !this.connectToFreebetCommonUpdate || !this.freebetActive)
                        return;
                    const o = this.freebetActive?.offer?.configuration[0]
                      , i = o?.minCoefficient;
                    this.connectToFreebetCommonUpdate(t, {
                        ...e,
                        minCoefficient: i,
                        amount: o?.betAmount,
                        ...e?.coefficient && {
                            coefficient: Number(e.coefficient) > 0 && Number(e.coefficient) < i ? String(i) : String(e.coefficient)
                        }
                    })
                }
                ,
                this.updateFreebetsSuccessIndex = () => {
                    if (!this.freebetsData.enabled) {
                        const t = Object.keys(this.list).filter((t => this.list[t].freebet)).map((t => this.list[t].index));
                        return void this.updateFreebetsData({
                            gameSuccessIndexList: t
                        })
                    }
                    let t = Object.keys(this.freebetsData.game).map(( (t, e) => e));
                    for (let e of Object.keys(this.list)) {
                        const o = this.list[e];
                        o.freebet || (t = t.filter((t => t !== o.index)))
                    }
                    if (this.freebetActive.left <= 0) {
                        const e = Object.keys(this.list).filter((t => this.list[t].freebet));
                        t = t.filter((t => e.includes(String(t))))
                    }
                    this.updateFreebetsData({
                        gameSuccessIndexList: t
                    })
                }
                ,
                this.disableAutoBet = () => {
                    const {autoBetEnabled: t, setAutoBetEnabled: e} = this.root.autobetCommon;
                    "boolean" == typeof t && e(!1),
                    Array.isArray(t) && t.map(( (t, o) => {
                        e(!1, o)
                    }
                    ))
                }
                ,
                this.autoDisabledInterval = null,
                this.reactionAutoDisabled = () => {
                    this.autoDisabledInterval && clearInterval(this.autoDisabledInterval),
                    this.freebetsActive.length && (this.autoDisabledInterval = window.setInterval(( () => {
                        for (let t of this.freebetsActive)
                            Date.now() > new Date(t.offer.endAt).getTime() && this.updateFreebetsArchiveEndTime(t.id)
                    }
                    ), 1e3))
                }
                ,
                this.root = t,
                (0,
                i.makeObservable)(this),
                (0,
                i.reaction)(( () => this.root.profileCommon.profile.freebetsVerified), (t => {
                    t && (this.initList(),
                    this.getFreebets())
                }
                )),
                (0,
                i.reaction)(( () => [this.freebetEnabled]), ( () => {
                    this.freebetEnabled && (this.connectToFreebetCommonLoopConnect(),
                    this.connectToFreebetCommonLoopId(),
                    this.updateFreebetsSuccessIndex(),
                    this.disableAutoBet()),
                    this.freebetsData.enabled || (this.connectToFreebetCommonLoopUpdate(),
                    this.updateFreebetsSuccessIndex())
                }
                )),
                (0,
                i.reaction)(( () => [this.freebetId]), ( () => {
                    this.updateFreebetsSuccessIndex(),
                    this.connectToFreebetCommonLoopId()
                }
                )),
                (0,
                i.reaction)(( () => [this.freebetCompletedId]), ( () => {
                    this.reactionFreebetCompleted()
                }
                )),
                (0,
                i.reaction)(( () => [this.freebetsActive.length]), ( () => {
                    this.reactionAutoDisabled()
                }
                ))
            }
            get freebetEnabled() {
                return this.freebetsData.enabled
            }
            get freebetId() {
                return this.freebetsData.id
            }
            get freebetsActive() {
                return this.freebets.filter((t => !t.archived))
            }
            get freebetsArchived() {
                return this.freebets.filter((t => t.archived))
            }
            get freebetActive() {
                if (!this.freebetsData.enabled)
                    return;
                if (!this.freebetsData.id)
                    return;
                return this.freebets.filter((t => t.id === this.freebetsData.id))[0] || void 0
            }
            get freebetCompleted() {
                if (this.freebetCompletedId)
                    return this.freebets.find((t => t.id === this.freebetCompletedId))
            }
            get freebetsSuccessIndexList() {
                return this.freebetsData.gameSuccessIndexList
            }
        }
        l([i.observable], c.prototype, "freebetsData", void 0),
        l([i.observable], c.prototype, "forcedDisabledFreebets", void 0),
        l([i.observable], c.prototype, "isGameInProgress", void 0),
        l([i.observable], c.prototype, "onFreebetChange", void 0),
        l([i.action], c.prototype, "updateFreebetsData", void 0),
        l([i.action], c.prototype, "setOnFreebetChange", void 0),
        l([i.action], c.prototype, "setForcedDisabledFreebets", void 0),
        l([i.action], c.prototype, "setIsGameInProgress", void 0),
        l([i.computed], c.prototype, "freebetEnabled", null),
        l([i.computed], c.prototype, "freebetId", null),
        l([i.observable], c.prototype, "freebets", void 0),
        l([i.computed], c.prototype, "freebetsActive", null),
        l([i.computed], c.prototype, "freebetsArchived", null),
        l([i.computed], c.prototype, "freebetActive", null),
        l([i.observable], c.prototype, "loading", void 0),
        l([i.action], c.prototype, "setLoading", void 0),
        l([i.action], c.prototype, "getFreebets", void 0),
        l([i.action], c.prototype, "decrementFreebetsLeftById", void 0),
        l([i.action], c.prototype, "updateFreebetsPayout", void 0),
        l([i.observable], c.prototype, "freebetCompletedId", void 0),
        l([i.action], c.prototype, "setFreebetCompletedId", void 0),
        l([i.computed], c.prototype, "freebetCompleted", null),
        l([i.action], c.prototype, "reactionFreebetCompleted", void 0),
        l([i.action], c.prototype, "setFreebetsArchiveById", void 0),
        l([i.computed], c.prototype, "freebetsSuccessIndexList", null),
        e.default = c
    }
    ,
    7864: (t, e, o) => {
        "use strict";
        o.r(e),
        o.d(e, {
            default: () => I
        });
        const i = new class {
            setCookie(t, e, o) {
                const i = new Date;
                i.setTime(i.getTime() + o);
                const s = "expires=" + i.toUTCString();
                document.cookie = `${t}=${e};${s};path=/`
            }
            getCookie(t) {
                const e = t + "="
                  , o = document.cookie.split(";");
                for (let t = 0; t < o.length; t++) {
                    let i = o[t];
                    for (; " " === i.charAt(0); )
                        i = i.substring(1, i.length);
                    if (0 === i.indexOf(e))
                        return i.substring(e.length, i.length)
                }
                return null
            }
            deleteCookie(t) {
                this.setCookie(t, "", -1)
            }
            setObjectCookie(t, e, o) {
                const i = JSON.stringify(e);
                this.setCookie(t, i, o)
            }
            getObjectCookie(t) {
                const e = this.getCookie(t);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return null
                }
            }
        }
        ;
        var s = o(1299)
          , n = o(5414)
          , a = o(8534)
          , r = o(3922)
          , l = o(4474)
          , c = o(2009)
          , d = o(2667)
          , u = o(8596)
          , h = o(8743);
        const m = ["en-soc", "en_soc", "es_soc", "es-soc", "de_soc", "de-soc", "fr_soc", "fr-soc", "it_soc", "it-soc", "tr_soc", "tr-soc", "hi-soc", "hi_soc", "pl_soc", "pl-soc", "pt_soc", "pt-soc", "sv_soc", "sv-soc", "vi_soc", "vi-soc", "zh_soc", "zh-soc", "th_soc", "th-soc", "ja_soc", "ja-soc", "ko_soc", "ko-soc", "ru_soc", "ru-soc", "bn_soc", "bn-soc", "uz_soc", "uz-soc", "az_soc", "az-soc"];
        var p = o(8675)
          , b = o(257)
          , f = o.n(b)
          , y = o(9334)
          , v = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        const g = {
            apiKey: "",
            isDemo: !0,
            isTest: !0,
            id: "",
            sid: "",
            balance: 0,
            balanceLoad: !1,
            token: "",
            externalToken: "",
            playerId: "",
            name: "",
            currency: "",
            currencySign: "",
            subPartnerId: "",
            freebetsVerified: void 0,
            freebetsType: null,
            sub: "",
            rounding: 2,
            splitTest: null,
            storiesNew: !1,
            storage: {}
        }
          , C = {
            defaultBet: 1,
            currency: "",
            currencyId: 0,
            maxBet: 100,
            maxWin: 0,
            minBet: .01
        };
        class _ {
            constructor(t) {
                this.settings = {},
                this.profile = g,
                this.customerId = "",
                this.limit = C,
                this.centrifugeAuthenticated = !1,
                this.changedNickname = "",
                this.rates = {},
                this.statistics = {},
                this.language = d.X9,
                this.userAuthenticated = !1,
                this.authInProgress = !1,
                this.version = {
                    rng: "",
                    game: ""
                },
                this.rtp = (0,
                r.GET_GAME_CONFIG)().defaultRtp,
                this.customRtp = !1,
                this.rules = {},
                this.splitTest = {
                    variantType: null,
                    variantValue: null
                },
                this.checkCookies = () => {
                    const t = i.getObjectCookie("splitTest");
                    t && (this.setSplitTest(t),
                    null !== t?.variantValue && "default" !== t?.variantType && (0,
                    h.Z)({
                        action: "experiment_running",
                        attribute: `${t?.variantValue}: ${t?.variantType}`
                    }))
                }
                ,
                this.setSplitTest = t => {
                    this.splitTest = t
                }
                ,
                this.logout = () => {
                    console.log("LOGOUT!"),
                    c.Z.remove("apiKey"),
                    c.Z.remove("token"),
                    c.Z.remove("externalToken"),
                    c.Z.set("isDemo", !1),
                    this.profile = g,
                    this.limit = C,
                    this.userAuthenticated = !1,
                    this.authInProgress = !1,
                    this.root.uiCommon.showUnauthorizedAlert()
                }
                ,
                // this.auth = async (gameId) => {
                //     // 设置身份验证正在进行的标志
                //     this.authInProgress = true;
                    
                //     // 显示加载中的警告提示
                //     this.root.uiCommon.setAlertList({
                //       type: "warning",
                //       title: "",
                //       text: "COMMON.LOADING.PLEASE_WAIT",
                //       sticky: true
                //     });
                  
                //     // 从 URL 参数中获取相关信息
                //     const urlParams = new URLSearchParams(document.location.search);
                //     const cid = urlParams.get("cid");
                //     const subPartnerId = urlParams.get("sub_partner_id");
                //     const token = urlParams.get("token");
                //     const demo = urlParams.get("demo");
                //     const locale = urlParams.get("locale");
                //     const clientId = Boolean(cid) ? cid : d.LY;
                  
                //     // 获取应用程序设置
                //     if (!await this.fetchSettings({
                //       cid: clientId,
                //       subPartnerId: subPartnerId,
                //       gameId: gameId
                //     })) {
                //       // 如果获取设置失败，则锁定应用程序并显示未授权警告
                //       this.authInProgress = false;
                //       this.root.uiCommon.lockedApp(true);
                //       this.root.uiCommon.updateAlertList([]);
                //       setTimeout(this.root.uiCommon.showUnauthorizedAlert, 0);
                //       return;
                //     }
                  
                //     // 判断是否为演示模式
                //     const isDemoMode = "true" === demo || !Boolean(cid) || !Boolean(token) || (cid === d.LY && "false" !== demo);
                //     const demoAvailable = demo ? "true" === demo : this.settings.forceDemoAvailable && isDemoMode;
                  
                //     // 获取用户信息
                //     if (!await this.fetchProfile({
                //       demoAvailable: demoAvailable,
                //       paramExternalToken: token,
                //       paramCid: cid,
                //       paramSubPartnerId: subPartnerId,
                //       gameId: gameId,
                //       demoCID: d.LY
                //     })) {
                //       // 如果获取用户信息失败，则注销用户并显示未授权警告
                //       if (!demoAvailable) {
                //         this.logout();
                //       }
                //       this.authInProgress = false;
                //       this.root.uiCommon.lockedApp(true);
                //       this.root.uiCommon.updateAlertList([]);
                //       setTimeout(this.root.uiCommon.showUnauthorizedAlert, 0);
                //       return;
                //     }
                  
                //     // 设置 cookie 和用户语言
                //     if (demoAvailable) {
                //       c.Z.set("externalToken", this.profile.externalToken);
                //     } else {
                //       c.Z.remove("externalToken");
                //     }
                //     c.Z.set("isDemo", demoAvailable);
                //     this.parseTokenData(this.profile.token);
                //     if (!location.origin.includes("localhost1")) {
                //       await this.root.game.centrifuge.setToken(this.profile.token);
                //     }
                //     // await this.root.game.centrifuge.connect(); // 注释掉 websocket 连接
                  
                //     // 订阅余额更新事件
                //     await this.root.game.centrifuge.subscribe(`balance_ticket#${this.profile.sub}`, ({ data }) => {
                //       if (data.logout) {
                //         this.logout();
                //       } else {
                //         this.root.balanceCommon.setBalanceData(data);
                //       }
                //     });
                  
                //     // 设置语言
                //     this.language = ((0, r.GET_GAME_CONFIG)().defaultLocale || locale || d.X9).toLowerCase();
                //     if (this.settings.availableTranslations.length && !this.settings.availableTranslations.includes(this.language)) {
                //       this.setLanguage(this.settings.availableTranslations[0]);
                //     }
                  
                //     // 获取其他信息
                //     await this.fetchLimits();
                //     await this.fetchVersion();
                //     await this.fetchRates();
                //     this.connectPingSocket(this.profile.token, clientId);
                  
                //     // 设置身份验证标志
                //     this.userAuthenticated = true;
                //     this.centrifugeAuthenticated = true;
                //     this.authInProgress = false;
                //     this.root.uiCommon.updateAlertList([]);
                //     this.root.uiCommon.lockedApp(false);
                // },
                this.auth = async t => {
                    // 设置身份验证正在进行的标志
                    this.authInProgress = true;

                    this.root.uiCommon.setAlertList({
                        type: "warning",
                        title: "",
                        text: "COMMON.LOADING.PLEASE_WAIT",
                        sticky: !0
                    });
                    console.log('document.location.search:', document.location.search)
                    console.log('d.LY:', d.LY)

                    const e = new URLSearchParams(document.location.search)
                    // https://vortex.tgprx.site/?
                    // cid=globonet
                    // &token=f804b1f63346cd31a91e650cf6b76022
                    // &locale=en
                    // &returnUrl=https://slotcatalog.com/en
                    // &demo=true
                      , o = e.get("cid")
                      , i = e.get("sub_partner_id")
                      , s = e.get("token")
                      , n = e.get("demo")
                      , a = e.get("locale")
                      , l = Boolean(o) ? o : d.LY;
                      console.log('o:', o)
                      console.log('d.LY:', d.LY)
                      console.log('l:', l)

                    // 获取应用程序设置
                    if (!await this.fetchSettings({
                        cid: l,
                        subPartnerId: i,
                        gameId: t
                    }))
                        // 如果获取设置失败，则锁定应用程序并显示未授权警告
                        return this.authInProgress = !1,
                        this.root.uiCommon.lockedApp(!0),
                        this.root.uiCommon.updateAlertList([]),
                        void setTimeout(this.root.uiCommon.showUnauthorizedAlert, 0);
                    
                    // 判断是否为演示模式
                    const u = "true" === n || !Boolean(o) || !Boolean(s) || o === d.LY && "false" !== n
                      , h = n ? "true" === n : this.settings.forceDemoAvailable && u;
                    console.log('h----------------------demoAvailable :', h)
                    if (!await this.fetchProfile({
                        demoAvailable: h,
                        paramExternalToken: s,
                        paramCid: o,
                        paramSubPartnerId: i,
                        gameId: t,
                        demoCID: d.LY
                    }))
                        return h || this.logout(),
                        this.authInProgress = !1,
                        this.root.uiCommon.lockedApp(!0),
                        this.root.uiCommon.updateAlertList([]),
                        void setTimeout(this.root.uiCommon.showUnauthorizedAlert, 0);
                    h ? c.Z.set("externalToken", this.profile.externalToken) : c.Z.remove("externalToken"),
                    c.Z.set("isDemo", h),
                    console.log('fuck you:', this.profile.token),
                    this.parseTokenData(this.profile.token),
                    location.origin.includes("localhost1") || await this.root.game.centrifuge.setToken(this.profile.token),
                    await this.root.game.centrifuge.connect(), // fuck you websocket
                    await this.root.game.centrifuge.subscribe(`balance_ticket#${this.profile.sub}`, ( ({data: t}) => {
                        t.logout ? this.logout() : this.root.balanceCommon.setBalanceData(t)
                    }
                    )),
                    this.language = (
                        (0,r.GET_GAME_CONFIG)().defaultLocale || a || d.X9).toLowerCase(),
                        this.settings.availableTranslations.length && !this.settings.availableTranslations.includes(this.language) && this.setLanguage(this.settings.availableTranslations[0]),
                    await this.fetchLimits(),
                    await this.fetchVersion(),
                    await this.fetchRates(),
                    // this.connectPingSocket(this.profile.token, l),
                    this.userAuthenticated = !0,
                    this.centrifugeAuthenticated = !0,
                    this.authInProgress = !1,
                    this.root.uiCommon.updateAlertList([]),
                    this.root.uiCommon.lockedApp(!1)
                }
                ,
                this.fetchSettings = async ({cid: t, subPartnerId: e, gameId: o}) => {
                    // 这是一个异步函数,名为 fetchSettings
                    // 它接受三个参数:
                    // - cid: t
                    // - subPartnerId: e
                    // - gameId: o
                
                    try {
                        // 在 try 块中,我们调用了一个名为 l.Gw 的函数
                        // 这个函数接受一个对象作为参数,包含以下属性:
                        // - cid: t
                        // - domain: window.location.host
                        // - 如果 e 存在,则添加 subPartnerId: e 属性
                        // - 如果 o 存在,则添加 gameId: o 属性
                        const i = await (0, l.Gw)({
                            cid: t,
                            domain: window.location.host,
                            ...e && {
                                subPartnerId: e
                            },
                            ...o && {
                                gameId: o
                            }
                        });
                
                        if (Object.entries(i.data).length === 0) {
                            return false;
                        } else {
                            // 将 i.data 赋值给 this.settings 属性
                            this.settings = i.data;
                            // 返回 true,表示操作成功
                            return true;
                          }
                        
                    } catch (t) {
                        // 如果在 try 块中出现错误,进入 catch 块
                        // 在 catch 块中,我们打印错误信息到控制台
                        console.error("getSettings error:", t);
                
                        // 返回 false,表示操作失败
                        return false;
                    }
                }
                ,
                this.fetchProfile = async t => {
                    const {
                        demoAvailable: e, 
                        paramExternalToken: o, 
                        paramCid: i, 
                        paramSubPartnerId: s, 
                        gameId: n, 
                        demoCID: a, 
                        forceNewDemo: r=!1
                    } = t;
                    // 根据 demoAvailable 和 paramExternalToken 的值,计算出 d 的值
                    const d = e ? o || c.Z.get("externalToken") || "" : o || "no_token"
                    console.log('token ------------d:', d)
                    // 根据 demoAvailable 和 paramCid 的值,计算出 u 的值
                    const u = e ? 
                            a : i === a ? "" 
                               : i
                    // 从 this.root.game.gameConfig 中获取 gameCurrency 的值
                    const {gameCurrency: h} = this.root.game.gameConfig;
                    try {
                        // 调用 f().load() 获取 visitorId
                        // const t = await f().load();
                        // const {visitorId: o} = await t.get();
                        const {data: i} = await (0, l.Ai)({
                            token: r ? "" : d,
                            cid: u,
                            gameId: n,
                            visitorId: 'o',
                            ...h && { currency: h },
                            ...s && { subPartnerId: S }
                        });
                         // 调用 this.setProfile 函数,传入一个对象作为参数
                        return this.setProfile({
                            ...i,
                            ...s && {
                                subPartnerId: s
                            },
                            apiKey: u,
                            playerId: i.id,
                            name: i.playerName,
                            isDemo: e,
                            balanceLoad: !0
                        }),
                        !0
                    } catch (o) {
                         // 如果出现错误,进入 catch 块
                        return e && 401 === o.response.status ? (c.Z.remove("externalToken"),
                        await this.fetchProfile({
                            ...t,
                            forceNewDemo: !0
                        })) : (9 === (0,
                        y.Z)("errorCode", o.response) && this.root.uiCommon.setModal({
                            modalName: "gameIsDisabled",
                            render: !0,
                            delayOpen: 0,
                            delayClose: 0,
                            callbackOnSubmit: () => {
                                location.reload()
                            }
                        }),
                        !1)
                    }
                }
                ,
                this.connectPingSocket = async (t, e) => {
                    if (!e || !["r88", "r88-qa", "r88-release-beta", "r88-demo", "r88-release"].includes(e))
                        return;
                    let o, i = 0, s = !1;
                    const n = `ws://${document.location.host}/ping`
                      , a = () => {
                        o = new WebSocket(n,t),
                        o.onopen = () => {
                            s = !0,
                            console.log("opened ping connection")
                        }
                        ,
                        o.onmessage = () => {}
                        ,
                        o.onclose = () => {
                            i < 3 && !s && (a(),
                            (0,
                            p.Z)(1),
                            i++)
                        }
                    }
                    ;
                    a()
                }
                ,
                this.fetchLimits = async () => {
                    const {profile: t, setLimit: e} = this
                      , {apiKey: o, currency: i} = t
                      , s = {
                        currency: i
                    };
                    t.subPartnerId && (s.sub_partner_id = t.subPartnerId);
                    try {
                        const {data: t} = await (0,
                        l.iX)({
                            headers: {
                                cid: o
                            },
                            params: s
                        });
                        e(t)
                    } catch (t) {
                        console.log("fetchLimits error:", t)
                    }
                }
                ,
                this.fetchRates = async () => {
                    const {apiKey: t, token: e} = this.profile;
                    try {
                        const {data: o} = await (0,
                        l.jS)({
                            headers: {
                                cid: t,
                                authorization: e
                            }
                        });
                        this.rates = o
                    } catch (t) {
                        console.log("Auth error:", t)
                    }
                }
                ,
                this.setRules = (t, e) => {
                    this.rules[t] = e
                }
                ,
                this.fetchRules = async () => {
                    if (this.rules[this.language])
                        return this.rules[this.language];
                    const t = "6270f7428c3cbe68ed98c8a7"
                      , e = this.root.game.gameConfig.gameRule
                      , o = `${e}_short`;
                    let i = !1;
                    try {
                        let s = await Promise.all([(0,
                        l.gM)({
                            projectId: t,
                            locale: this.language,
                            key: e
                        }), (0,
                        l.gM)({
                            projectId: t,
                            locale: this.language,
                            key: o
                        })])
                          , [n,a] = s;
                        n.data[e] && a.data[o] || (s = await Promise.all([(0,
                        l.gM)({
                            projectId: t,
                            tag: "",
                            locale: "en",
                            key: e
                        }), (0,
                        l.gM)({
                            projectId: t,
                            tag: "",
                            locale: "en",
                            key: o
                        })]),
                        [n,a] = s,
                        i = !0);
                        const r = n.data[e]?.replace(/\[\[rng\]\]/g, this.version.rng)?.replace(/\[\[version\]\]/g, this.version.game)
                          , c = {
                            rules: r,
                            rulesShort: a.data[o]
                        };
                        return this.setRules(i ? "en" : this.language, c),
                        c
                    } catch (t) {
                        return console.error("Error updateRules:", t),
                        {
                            rules: "",
                            rulesShort: ""
                        }
                    }
                }
                ,
                this.updateBalance = async () => {
                    let t = c.Z.get("externalToken")
                      , e = c.Z.get("apiKey");
                    const o = await (0,
                    l.ZP)().post("/profile", {
                        cid: e,
                        token: t
                    })
                      , {data: {balance: i}} = o;
                    this.setBalance(i)
                }
                ,
                this.setProfile = t => {
                    const {currencySign: e} = t;
                    if (e && e.length > 1 && "mBTC" !== e && (t.currencySign = e.toUpperCase()),
                    e || (t.currencySign = ""),
                    this.profile = t,
                    t.splitTest && null === this.splitTest?.variantType) {
                        const e = 18e5
                          , o = 108e5;
                        this.setSplitTest(t.splitTest),
                        null !== t.splitTest?.variantValue && "default" !== t.splitTest?.variantType && (0,
                        h.Z)({
                            action: "experiment_start",
                            attribute: `${t.splitTest?.variantValue}: ${t.splitTest?.variantType}`
                        }),
                        i.setObjectCookie("splitTest", t.splitTest, "default" === t.splitTest?.variantType ? e : o)
                    }
                }
                ,
                this.setBalance = t => {
                    this.profile = {
                        ...this.profile,
                        balance: (0,
                        u.Z)(t, this.profile.rounding)
                    }
                }
                ,
                this.setStorage = (t, e) => {
                    this.profile = {
                        ...this.profile,
                        storage: {
                            ...this.profile.storage,
                            [t]: e
                        }
                    }
                }
                ,
                this.setStoriesNew = t => {
                    this.profile = {
                        ...this.profile,
                        storiesNew: t
                    }
                }
                ,
                this.setLimit = t => {
                    this.limit = t
                }
                ,
                this.setPlayerName = async t => {
                    const {token: e, apiKey: o} = this.profile;
                    try {
                        const i = await (0,
                        l.H2)({
                            headers: {
                                authorization: e,
                                cid: o
                            },
                            name: t
                        });
                        this.profile.name = i.data.nickname,
                        this.changedNickname = i.data.nickname,
                        (0,
                        h.Z)({
                            action: "name_changed",
                            parameters: {
                                object: i.data.nickname
                            }
                        })
                    } catch (t) {
                        "nickname does not pass" === t.response.data.message && this.root.uiCommon.setAlertList({
                            type: "error",
                            text: "ERROR.PROFANITY_VALIDATION"
                        })
                    }
                }
                ,
                this.setLanguage = async t => {
                    let e = t;
                    if (this.settings.availableTranslations.length) {
                        const o = this.settings.availableTranslations.map((t => t.slice(0, 2))).indexOf(t);
                        e = -1 === o ? this.settings.availableTranslations[0] : this.settings.availableTranslations[o]
                    }
                    this.language = e,
                    c.Z.set("locale", e);
                    const o = new URL(window.location.href)
                      , i = o.searchParams;
                    i.set("locale", e);
                    const s = i.toString()
                      , a = `${o.pathname}?${s}`;
                    history.replaceState(null, "", a),
                    await (0,
                    n.fU)(e)
                }
                ,
                this.setVersion = t => {
                    this.version = t,
                    c.Z.set("gameVersionLs", JSON.stringify(t)),
                    c.Z.set("versionDate", Date.now())
                }
                ,
                this.fetchVersion = async () => {
                    const t = c.Z.get("versionDate")
                      , e = c.Z.get("gameVersionLs");
                    try {
                        if (t && Date.now() - Number(t) < 864e5 && e) {
                            const t = () => {
                                c.Z.remove("gameVersionLs"),
                                c.Z.remove("versionDate")
                            }
                            ;
                            try {
                                const o = JSON.parse(e);
                                o.rng && o.game ? this.setVersion(o) : t()
                            } catch (e) {
                                t()
                            }
                            return
                        }
                        const {data: o} = await (0,
                        l.bo)({
                            gameId: this.root.game.gameConfig.gameServerId
                        });
                        if (!o?.server)
                            return;
                        const {server: i} = o;
                        if (Array.isArray(i)) {
                            const t = i.find((t => t.rng && t.version && t.name && "game-server" === t.name));
                            t && this.setVersion({
                                rng: t.rng,
                                game: t.version
                            })
                        } else
                            "object" == typeof i && null !== i && i.rng && i.version && this.setVersion({
                                rng: i.rng,
                                game: i.version
                            })
                    } catch (t) {
                        console.log("Versoin error:", t)
                    }
                }
                ,
                this.setRtp = t => {
                    this.rtp = t
                }
                ,
                this.setCustomerId = t => {
                    this.customerId = t
                }
                ,
                this.parseTokenData = t => {
                    const {payload: e} = (0,
                    a.decode)(t);
                    e && "object" == typeof e && (e.config && e.config.rtp && (this.setRtp(e.config.rtp),
                    this.setCustomRtp(!0)),
                    e.customerId && this.setCustomerId(e.customerId))
                }
                ,
                this.setProfileSid = t => {
                    this.profile = {
                        ...this.profile,
                        sid: t
                    }
                }
                ,
                this.setCustomRtp = t => {
                    this.customRtp = t
                }
                ,
                this.root = t,
                (0,
                s.makeObservable)(this),
                this.checkCookies()
            }
            get isSocialLanguage() {
                return m.includes(this.language)
            }
        }
        v([s.observable], _.prototype, "settings", void 0),
        v([s.observable], _.prototype, "profile", void 0),
        v([s.observable], _.prototype, "customerId", void 0),
        v([s.observable], _.prototype, "limit", void 0),
        v([s.observable], _.prototype, "centrifugeAuthenticated", void 0),
        v([s.observable], _.prototype, "changedNickname", void 0),
        v([s.observable], _.prototype, "rates", void 0),
        v([s.observable], _.prototype, "statistics", void 0),
        v([s.observable], _.prototype, "language", void 0),
        v([s.observable], _.prototype, "userAuthenticated", void 0),
        v([s.observable], _.prototype, "authInProgress", void 0),
        v([s.observable], _.prototype, "version", void 0),
        v([s.observable], _.prototype, "rtp", void 0),
        v([s.observable], _.prototype, "customRtp", void 0),
        v([s.observable], _.prototype, "rules", void 0),
        v([s.observable], _.prototype, "splitTest", void 0),
        v([s.computed], _.prototype, "isSocialLanguage", null),
        v([s.action], _.prototype, "setSplitTest", void 0),
        v([s.action], _.prototype, "logout", void 0),
        v([s.action], _.prototype, "auth", void 0),
        v([s.action], _.prototype, "fetchSettings", void 0),
        v([s.action], _.prototype, "fetchProfile", void 0),
        v([s.action], _.prototype, "connectPingSocket", void 0),
        v([s.action], _.prototype, "fetchLimits", void 0),
        v([s.action], _.prototype, "fetchRates", void 0),
        v([s.action], _.prototype, "setRules", void 0),
        v([s.action], _.prototype, "fetchRules", void 0),
        v([s.action], _.prototype, "updateBalance", void 0),
        v([s.action], _.prototype, "setProfile", void 0),
        v([s.action], _.prototype, "setBalance", void 0),
        v([s.action], _.prototype, "setStorage", void 0),
        v([s.action], _.prototype, "setStoriesNew", void 0),
        v([s.action], _.prototype, "setLimit", void 0),
        v([s.action], _.prototype, "setPlayerName", void 0),
        v([s.action], _.prototype, "setLanguage", void 0),
        v([s.action], _.prototype, "setVersion", void 0),
        v([s.action], _.prototype, "fetchVersion", void 0),
        v([s.action], _.prototype, "setRtp", void 0),
        v([s.action], _.prototype, "setCustomerId", void 0),
        v([s.action], _.prototype, "parseTokenData", void 0),
        v([s.action], _.prototype, "setProfileSid", void 0),
        v([s.action], _.prototype, "setCustomRtp", void 0);
        var I = _
    }
    ,
    9273: (t, e, o) => {
        "use strict";
        o.r(e);
        var i = o(1299)
          , s = o(2009)
          , n = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        class a {
            constructor(t) {
                this.enabled = "true" === s.Z.get("quickMode"),
                this.setEnabled = t => {
                    this.enabled = t,
                    !this.root.game?.gameConfig?.quickMode?.disableLS && s.Z.set("quickMode", t)
                }
                ,
                this.quickDuration = t => this.enabled ? t * this.accelerationDuration : t,
                this.root = t,
                (0,
                i.makeObservable)(this)
            }
            get accelerationDuration() {
                return this.root.game?.gameConfig?.quickMode?.accelerationDuration || .5
            }
        }
        n([i.observable], a.prototype, "enabled", void 0),
        n([i.action], a.prototype, "setEnabled", void 0),
        n([i.computed], a.prototype, "accelerationDuration", null),
        e.default = a
    }
    ,
    6322: (t, e, o) => {
        "use strict";
        o.r(e),
        o.d(e, {
            default: () => d
        });
        var i = o(1299)
          , s = o(4474)
          , n = o(3922)
          , a = o(2009)
          , r = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        const l = {
            default: function() {
                const {tournamentsCommon: {bets: t}, profileCommon: {limit: {minBet: e}}, uiCommon: {setAlertList: o}} = (0,
                n.GET_STORE)()
                  , i = 10 * e
                  , s = a.Z.get("isTournamentsDefault");
                return !(s && Date.now() < Number(s) || t.length < 5 || 4 !== t.slice(-4).filter((t => t.amount < i)).length || (o({
                    type: "success",
                    title: "Attention",
                    text: "TOURNAMENT.NOT_ENOUGH"
                }),
                a.Z.set("isTournamentsDefault", Date.now() + 72e5),
                0))
            },
            default5: function() {
                const {tournamentsCommon: {bets: t}, profileCommon: {limit: {minBet: e}}, uiCommon: {setAlertList: o}} = (0,
                n.GET_STORE)()
                  , i = 5 * e
                  , s = a.Z.get("isTournamentsDefault5");
                return !(s && Date.now() < Number(s) || t.length < 5 || 4 !== t.slice(-4).filter((t => t.amount < i)).length || (o({
                    type: "success",
                    title: "Attention",
                    text: "TOURNAMENT.NOT_ENOUGH"
                }),
                a.Z.set("isTournamentsDefault5", Date.now() + 72e5),
                0))
            }
        };
        class c {
            constructor(t) {
                this.currentbet = [null, 0],
                this.bets = [],
                this.tournaments = [],
                this.tournamentsStrapi = {},
                this.tournamentsLeaderbords = {},
                this.tournamentsWinners = {},
                this.activeTournamentId = null,
                this.loading = !1,
                this.disabledUpdate = {},
                this.addBet = t => {
                    t && t.amount && (this.bets = [...this.bets.slice(-20), t],
                    this.currentbet = [t, this.currentbet[1] + 1],
                    this.tournaments.forEach((t => {
                        t.scoring && l[t.scoring] && l[t.scoring]()
                    }
                    )))
                }
                ,
                this.setDisabledUpdate = t => {
                    this.disabledUpdate = {
                        ...this.disabledUpdate,
                        [t]: !0
                    }
                }
                ,
                this.clearDisabledUpdate = () => {
                    this.disabledUpdate = {}
                }
                ,
                this.setActiveTournamentId = async (t=null) => {
                    this.activeTournamentId = t
                }
                ,
                this.getTournaments = async () => {
                    const {profileCommon: {profile: {token: t}}, game: {gameServerId: e}} = this.root
                      , {search: o} = document.location
                      , i = new URLSearchParams(o).get("sub_partner_id") || ""
                      , n = {
                        gameId: e
                    };
                    i && (n.sub_partner_id = i);
                    try {
                        this.loading = !0;
                        const {data: e} = await (0,
                        s.GN)({
                            headers: {
                                authorization: t
                            },
                            params: n
                        });
                        if (!e.length)
                            return;
                        this.tournaments = e.sort(( (t, e) => new Date(e.endAt).getTime() - new Date(t.endAt).getTime())).filter((t => {
                            const e = (new Date).getTime();
                            return new Date(t.startAt).getTime() < e
                        }
                        )),
                        this.loading = !1
                    } catch (t) {
                        return this.loading = !1,
                        console.log(t),
                        !1
                    }
                    this.getTournamentsStrapi()
                }
                ,
                this.getTournamentsStrapi = async () => {
                    const t = this.tournaments.map((t => t.id));
                    try {
                        this.loading = !0;
                        const e = await (0,
                        s.V_)({
                            tournamentIdList: t
                        });
                        e.data.data && e.data.data.forEach((t => {
                            this.tournamentsStrapi[`${t.attributes.tournamentId}${t.attributes.locale}`] = t
                        }
                        )),
                        this.loading = !1
                    } catch (t) {
                        this.loading = !1,
                        console.log(t)
                    }
                }
                ,
                this.getTournamentLeaderbords = async t => {
                    if (t && !this.disabledUpdate[t])
                        try {
                            this.loading = !0;
                            const {data: e} = await (0,
                            s.ir)({
                                headers: {
                                    authorization: this.root.profileCommon.profile.token
                                },
                                tournamentId: t
                            });
                            this.tournamentsLeaderbords[t] = e.list,
                            this.loading = !1,
                            this.setDisabledUpdate(t)
                        } catch (t) {
                            this.loading = !1,
                            console.log(t)
                        }
                }
                ,
                this.getTournamentWinners = async t => {
                    if (t && !this.disabledUpdate[t])
                        try {
                            this.loading = !0;
                            const {data: e} = await (0,
                            s.$H)({
                                headers: {
                                    authorization: this.root.profileCommon.profile.token
                                },
                                tournamentId: t
                            });
                            this.tournamentsWinners[t] = e.list,
                            this.loading = !1,
                            this.setDisabledUpdate(t)
                        } catch (t) {
                            this.loading = !1,
                            console.log(t)
                        }
                }
                ,
                this.root = t,
                (0,
                i.makeObservable)(this),
                (0,
                i.reaction)(( () => this.root.profileCommon.profile.token), (t => {
                    t && this.getTournaments()
                }
                )),
                (0,
                i.reaction)(( () => [this.bets, this.root.profileCommon.profile.name]), ( () => {
                    this.clearDisabledUpdate()
                }
                ))
            }
            get labelTournament() {
                const t = this.tournaments[0]
                  , e = t?.id;
                return {
                    tournament: t,
                    tournamentStrapi: this.tournamentsStrapi[`${e}${this.root.profileCommon.language}`] || this.tournamentsStrapi[`${e}en`]
                }
            }
            get activeTournament() {
                return this.activeTournamentId && this.tournaments.find(( ({id: t}) => this.activeTournamentId === t)) || null
            }
            get activeTournamentStrapi() {
                return this.activeTournamentId ? this.tournamentsStrapi[`${this.activeTournamentId}${this.root.profileCommon.language}`] || this.tournamentsStrapi[`${this.activeTournamentId}en`] : null
            }
        }
        r([i.observable], c.prototype, "currentbet", void 0),
        r([i.observable], c.prototype, "bets", void 0),
        r([i.observable], c.prototype, "tournaments", void 0),
        r([i.observable], c.prototype, "tournamentsStrapi", void 0),
        r([i.observable], c.prototype, "tournamentsLeaderbords", void 0),
        r([i.observable], c.prototype, "tournamentsWinners", void 0),
        r([i.observable], c.prototype, "activeTournamentId", void 0),
        r([i.observable], c.prototype, "loading", void 0),
        r([i.observable], c.prototype, "disabledUpdate", void 0),
        r([i.computed], c.prototype, "labelTournament", null),
        r([i.computed], c.prototype, "activeTournament", null),
        r([i.computed], c.prototype, "activeTournamentStrapi", null),
        r([i.action], c.prototype, "addBet", void 0),
        r([i.action], c.prototype, "setDisabledUpdate", void 0),
        r([i.action], c.prototype, "clearDisabledUpdate", void 0),
        r([i.action], c.prototype, "setActiveTournamentId", void 0),
        r([i.action], c.prototype, "getTournaments", void 0),
        r([i.action], c.prototype, "getTournamentsStrapi", void 0),
        r([i.action], c.prototype, "getTournamentLeaderbords", void 0),
        r([i.action], c.prototype, "getTournamentWinners", void 0);
        var d = c
    }
    ,
    5004: (t, e, o) => {
        "use strict";
        o.r(e);
        var i = o(1299)
          , s = o(8743)
          , n = o(5669)
          , a = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        class r {
            constructor(t) {
                this.sessionStarted = !1,
                this.lastActiveTime = Date.now(),
                this.inactive = !1,
                this.betsSum = 0,
                this.betsCount = 0,
                this.autoBetsCount = 0,
                this.winsCount = 0,
                this.minBetAmount = 0,
                this.maxBetAmount = 0,
                this.lastBetAmount = 0,
                this.lastBetId = null,
                this.width = {
                    current: window.innerWidth,
                    next: window.innerWidth
                },
                this.height = {
                    current: window.innerHeight,
                    next: window.innerHeight
                },
                this.resizeOperation = "init",
                this.setWidth = t => {
                    this.width = t
                }
                ,
                this.setHeight = t => {
                    this.height = t
                }
                ,
                this.setResizeOperation = t => {
                    this.resizeOperation = t
                }
                ,
                this.calculateResize = () => {
                    switch (this.resizeTImeout && clearTimeout(this.resizeTImeout),
                    !0) {
                    case this.width.next === this.width.current && this.height.next !== this.height.current:
                        this.setResizeOperation("verticalShift"),
                        this.setHeight({
                            ...this.height,
                            current: this.height.next
                        });
                        break;
                    case this.width.next !== this.width.current && this.height.next === this.height.current:
                        this.setResizeOperation("horizontalShift"),
                        this.setWidth({
                            ...this.width,
                            current: this.width.next
                        });
                        break;
                    case this.width.next === this.height.current && this.height.next === this.width.current:
                        this.setResizeOperation("orientation"),
                        this.setWidth({
                            ...this.width,
                            current: this.width.next
                        }),
                        this.setHeight({
                            ...this.height,
                            current: this.height.next
                        });
                        break;
                    case this.width.next !== this.width.current && this.height.next !== this.height.current:
                        this.setResizeOperation("resize"),
                        this.setWidth({
                            ...this.width,
                            current: this.width.next
                        }),
                        this.setHeight({
                            ...this.height,
                            current: this.height.next
                        })
                    }
                    (0,
                    s.Z)({
                        action: "app_resized",
                        parameters: {
                            size: `${this.width.next}x${this.height.next}`,
                            method: this.resizeOperation
                        }
                    })
                }
                ,
                this.setInactive = t => {
                    this.inactive = t
                }
                ,
                this.setLastActiveTime = t => {
                    this.lastActiveTime = t
                }
                ,
                this.addBet = (t, e=!1) => {
                    if (!t)
                        return;
                    const {amount: o, id: i} = t;
                    this.setBetsSum(this.betsSum + o),
                    this.setBetsCount(this.betsCount + 1),
                    this.setMinBetAmount(this.minBetAmount ? Math.min(this.minBetAmount, o) : o),
                    this.setMaxBetAmount(Math.max(this.maxBetAmount, o)),
                    this.setLastBetAmount(o),
                    this.setLastBetId(i),
                    e && this.setAutoBetsCount(this.autoBetsCount + 1)
                }
                ,
                this.resetBets = () => {
                    this.setBetsSum(0),
                    this.setBetsCount(0),
                    this.setAutoBetsCount(0),
                    this.setWinsCount(0),
                    this.setMinBetAmount(0),
                    this.setMaxBetAmount(0),
                    this.setLastBetAmount(0),
                    this.setLastBetId(null)
                }
                ,
                this.addWin = () => {
                    this.setWinsCount(this.winsCount + 1)
                }
                ,
                this.checkInactivity = () => {
                    Date.now() - this.lastActiveTime > 18e4 && this.finishSession()
                }
                ,
                this.finishSession = () => {
                    this.sessionStarted && (this.setSessionStarted(!1),
                    (0,
                    s.Z)({
                        action: "game_finished",
                        parameters: {
                            value: (0,
                            n.Z)(this.betsSum),
                            currency: this.root.profileCommon.profile.currency,
                            method: this.autoBetsCount ? "auto" : "manual",
                            min_value: this.minBetAmount,
                            max_value: this.maxBetAmount,
                            last_value: this.lastBetAmount,
                            count: this.betsCount,
                            id: this.lastBetId,
                            wins: this.winsCount
                        }
                    }),
                    this.resetBets())
                }
                ,
                this.startSession = t => {
                    this.sessionStarted || (this.setSessionStarted(!0),
                    (0,
                    s.Z)({
                        action: "game_started",
                        parameters: {
                            id: t
                        }
                    }))
                }
                ,
                this.setSessionStarted = t => {
                    this.sessionStarted = t
                }
                ,
                this.setBetsSum = t => {
                    this.betsSum = t
                }
                ,
                this.setBetsCount = t => {
                    this.betsCount = t
                }
                ,
                this.setAutoBetsCount = t => {
                    this.autoBetsCount = t
                }
                ,
                this.setWinsCount = t => {
                    this.winsCount = t
                }
                ,
                this.setMinBetAmount = t => {
                    this.minBetAmount = t
                }
                ,
                this.setMaxBetAmount = t => {
                    this.maxBetAmount = t
                }
                ,
                this.setLastBetAmount = t => {
                    this.lastBetAmount = t
                }
                ,
                this.setLastBetId = t => {
                    this.lastBetId = t
                }
                ,
                this.initGtmDataLayer = () => {
                    const {game: {gameServerId: t, gameServerTheme: e, gameConfig: o}, uiCommon: {screenWidth: i, screenHeight: n}, profileCommon: {profile: a, version: r, settings: l}} = this.root;
                    window.dataLayer = window.dataLayer || [];
                    const c = a?.splitTest?.variantValue || "default"
                      , d = a?.splitTest?.variantType;
                    (0,
                    s.Z)({
                        action: "init",
                        safe_url: document.location.href.replace(/[?&]token=[^&]+/, "").replace(/[?&]$/, "").replace(/[?&]$/, "?"),
                        object: t,
                        variant: c && d && o.gameVersions && o.gameVersions[c] ? o.gameVersions[c][d] || o.gameVersions[c] : l?.options?.theme || o.gameClient,
                        category: o.gameCategory,
                        casino: a.apiKey,
                        state: !a.isTest,
                        version: r.game,
                        uid: a.id,
                        sid: a.sid,
                        last_update: (new Date).getTime(),
                        size: `${i}x${n}`
                    }),
                    this.loadGTM(),
                    Array.isArray(window.dataLayerQueue) && window.dataLayerQueue.length > 0 && (window.dataLayer.push(...window.dataLayerQueue),
                    window.dataLayerQueue = [])
                }
                ,
                this.loadMicroTracking = () => {
                    const t = document.getElementsByTagName("script")[0]
                      , e = document.createElement("script");
                    e.src = "modules/tracking/microtracker.0.13.configurable.min.js",
                    t.parentNode.insertBefore(e, t)
                }
                ,
                this.loadGTM = () => {
                    window.dataLayer.push({
                        "gtm.start": (new Date).getTime(),
                        event: "gtm.js"
                    });
                    const t = document.getElementsByTagName("script")[0]
                      , e = document.createElement("script");
                    e.async = !0,
                    e.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TX65W37",
                    t.parentNode.insertBefore(e, t)
                }
                ,
                this.root = t,
                (0,
                i.makeObservable)(this),
                (0,
                i.reaction)(( () => this.root.uiCommon.postMessage), (t => {
                    try {
                        const {type: e, data: o} = t.data;
                        "gtmPush" === e && (0,
                        s.Z)({
                            action: "tracked_element_clicked",
                            parameters: {
                                object: o.dataTrack
                            }
                        })
                    } catch (t) {}
                }
                )),
                (0,
                i.reaction)(( () => this.root.uiCommon.isVisible), (t => {
                    t || this.finishSession()
                }
                )),
                (0,
                i.reaction)(( () => this.root.audioCommon.globalMuted), (t => {
                    (0,
                    s.Z)({
                        action: "volume_changed",
                        parameters: {
                            object: "sound",
                            value: t ? 0 : this.root.audioCommon.soundVolume
                        }
                    }),
                    (0,
                    s.Z)({
                        action: "volume_changed",
                        parameters: {
                            object: "music",
                            value: t ? 0 : this.root.audioCommon.musicVolume
                        }
                    })
                }
                )),
                (0,
                i.reaction)(( () => this.root.audioCommon.soundVolume), (t => {
                    this.soundVolumeTImeout && clearTimeout(this.soundVolumeTImeout),
                    this.soundVolumeTImeout = setTimeout(( () => {
                        console.log("soundVolume", t),
                        (0,
                        s.Z)({
                            action: "volume_changed",
                            parameters: {
                                object: "sound",
                                value: t
                            }
                        })
                    }
                    ), 500)
                }
                )),
                (0,
                i.reaction)(( () => this.root.audioCommon.musicVolume), (t => {
                    this.musicVolumeTImeout && clearTimeout(this.musicVolumeTImeout),
                    this.musicVolumeTImeout = setTimeout(( () => {
                        console.log("musicVolume", t),
                        (0,
                        s.Z)({
                            action: "volume_changed",
                            parameters: {
                                object: "music",
                                value: t
                            }
                        })
                    }
                    ), 500)
                }
                )),
                (0,
                i.reaction)(( () => [this.root.uiCommon.screenWidth, this.root.uiCommon.screenHeight]), ( ([t,e]) => {
                    this.resizeTImeout && clearTimeout(this.resizeTImeout),
                    this.setHeight({
                        next: e,
                        current: this.height.current
                    }),
                    this.setWidth({
                        next: t,
                        current: this.width.current
                    }),
                    this.resizeTImeout = setTimeout(( () => {
                        this.calculateResize()
                    }
                    ), 200)
                }
                )),
                (0,
                i.autorun)(( () => {
                    const t = () => {
                        this.setLastActiveTime(Date.now()),
                        this.setInactive(!1)
                    }
                    ;
                    return this.startInactivityCheck(),
                    document.addEventListener("keydown", t),
                    document.addEventListener("mousedown", t),
                    document.addEventListener("unload", this.finishSession),
                    document.addEventListener("onbeforeunload", this.finishSession),
                    () => {
                        this.finishInactivityCheck(),
                        document.removeEventListener("keydown", t),
                        document.removeEventListener("mousedown", t)
                    }
                }
                ))
            }
            startInactivityCheck() {
                this.inactivityInterval = setInterval(this.checkInactivity, 3e4)
            }
            finishInactivityCheck() {
                this.inactivityInterval && clearInterval(this.inactivityInterval)
            }
        }
        a([i.observable], r.prototype, "sessionStarted", void 0),
        a([i.observable], r.prototype, "lastActiveTime", void 0),
        a([i.observable], r.prototype, "inactive", void 0),
        a([i.observable], r.prototype, "inactivityInterval", void 0),
        a([i.observable], r.prototype, "betsSum", void 0),
        a([i.observable], r.prototype, "betsCount", void 0),
        a([i.observable], r.prototype, "autoBetsCount", void 0),
        a([i.observable], r.prototype, "winsCount", void 0),
        a([i.observable], r.prototype, "minBetAmount", void 0),
        a([i.observable], r.prototype, "maxBetAmount", void 0),
        a([i.observable], r.prototype, "lastBetAmount", void 0),
        a([i.observable], r.prototype, "lastBetId", void 0),
        a([i.observable], r.prototype, "width", void 0),
        a([i.observable], r.prototype, "height", void 0),
        a([i.observable], r.prototype, "resizeOperation", void 0),
        a([i.observable], r.prototype, "resizeTImeout", void 0),
        a([i.observable], r.prototype, "soundVolumeTImeout", void 0),
        a([i.observable], r.prototype, "musicVolumeTImeout", void 0),
        a([i.action], r.prototype, "setWidth", void 0),
        a([i.action], r.prototype, "setHeight", void 0),
        a([i.action], r.prototype, "setResizeOperation", void 0),
        a([i.action], r.prototype, "calculateResize", void 0),
        a([i.action], r.prototype, "setInactive", void 0),
        a([i.action], r.prototype, "setLastActiveTime", void 0),
        a([i.action], r.prototype, "addBet", void 0),
        a([i.action], r.prototype, "resetBets", void 0),
        a([i.action], r.prototype, "addWin", void 0),
        a([i.action], r.prototype, "startInactivityCheck", null),
        a([i.action], r.prototype, "finishInactivityCheck", null),
        a([i.action], r.prototype, "checkInactivity", void 0),
        a([i.action], r.prototype, "finishSession", void 0),
        a([i.action], r.prototype, "startSession", void 0),
        a([i.action], r.prototype, "setSessionStarted", void 0),
        a([i.action], r.prototype, "setBetsSum", void 0),
        a([i.action], r.prototype, "setBetsCount", void 0),
        a([i.action], r.prototype, "setAutoBetsCount", void 0),
        a([i.action], r.prototype, "setWinsCount", void 0),
        a([i.action], r.prototype, "setMinBetAmount", void 0),
        a([i.action], r.prototype, "setMaxBetAmount", void 0),
        a([i.action], r.prototype, "setLastBetAmount", void 0),
        a([i.action], r.prototype, "setLastBetId", void 0),
        e.default = r
    }
    ,
    3486: (t, e, o) => {
        "use strict";
        o.r(e),
        o.d(e, {
            default: () => f
        });
        var i = o(1299)
          , s = o(3868)
          , n = o.n(s)
          , a = o(2009)
          , r = o(9334);
        const l = ["CLP", "VND", "KRW", "BIF", "UGX", "JPY", "RWF"]
          , c = ["softswiss", "livespins"];
        var d = o(7964)
          , u = o(8743)
          , h = function(t, e, o, i) {
            var s, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var r = t.length - 1; r >= 0; r--)
                    (s = t[r]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, o, a) : s(e, o)) || a);
            return n > 3 && a && Object.defineProperty(e, o, a),
            a
        };
        const {hidden: m, visibilityChange: p} = function() {
            let t, e;
            return void 0 !== document.hidden ? (t = "hidden",
            e = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden",
            e = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden",
            e = "webkitvisibilitychange"),
            {
                hidden: t,
                visibilityChange: e
            }
        }();
        class b {
            constructor(t) {
                this.backendErrors = (0,
                i.observable)([]),
                this.alertList = [],
                this.fullScreen = !1,
                this.statsModalOpen = !1,
                this.limitsModalOpen = !1,
                this.rulesModalOpen = !1,
                this.statisticModalOpen = !1,
                this.settingsOpen = !1,
                this.tournamentsModalOpen = !1,
                this.exitGameModalOpen = !1,
                this.modal = {},
                this.isMobile = (0,
                d.Z)(),
                this.isOnline = !0,
                this.isVisible = !0,
                this.postMessage = null,
                this.betData = null,
                this.betInfoGameId = null,
                this.betInfoId = null,
                this.lastBetAction = [],
                this.guideShown = "true" === a.Z.get("guideIsShown") || !1,
                this.guideStatus = !1,
                this.screenWidth = 0,
                this.screenHeight = 0,
                this.pageDisabled = !1,
                this.firstClick = !1,
                this.initDate = Date.now(),
                this.noAnimation = "true" === a.Z.get("animationDisabled"),
                this.resizeObserverElementTree = null,
                this.connectRatio = {
                    minWidth: 0,
                    minHeight: 0
                },
                this.connectRatioElement = null,
                this.isScreenMobileTimeout = null,
                this.isScreenMobile = 0,
                this.pageRatio = null,
                this.setIsScreenMobile = t => {
                    this.isScreenMobile = t
                }
                ,
                this.setPageRatio = t => {
                    this.pageRatio = t
                }
                ,
                this.setPageDisabled = t => {
                    this.pageDisabled = t
                }
                ,
                this.setNoAnimation = t => {
                    a.Z.set("animationDisabled", t),
                    this.noAnimation = t
                }
                ,
                this.setGuideShown = t => {
                    a.Z.set("guideIsShown", t),
                    this.guideShown = t
                }
                ,
                this.setGuideStatus = t => {
                    this.guideStatus = t
                }
                ,
                this.handleVisibilityChange = () => {
                    this.isVisible = !document[m]
                }
                ,
                this.setBetInfoGameId = t => {
                    this.betInfoGameId = t
                }
                ,
                this.setBetInfoId = t => {
                    this.betInfoId = t
                }
                ,
                this.setFirstClick = t => {
                    this.firstClick = t
                }
                ,
                this.setPostMessage = t => {
                    this.postMessage = t
                }
                ,
                this.getAmountError = t => {
                    const {profileCommon: {profile: {currencySign: e, currency: o, balance: i}, limit: {minBet: s, maxBet: a}}, uiCommon: {backendErrors: r}, freebetsCommon: {freebetEnabled: d}} = this.root;
                    if (d)
                        return null;
                    const {hasError: u, error: h} = function(t, e) {
                        const {search: o} = window.location
                          , i = new URLSearchParams(o).get("cid")
                          , s = {
                            hasError: !1
                        };
                        return l.includes(e.toUpperCase()) && i && c.includes(i) && t % 100 && (s.hasError = !0,
                        s.error = n().t("ERROR.MULTIPLE_OF")),
                        s
                    }(Number(t), o);
                    return u ? h : r.length ? "Backend Error" : a && Number(t) > a ? n().t("COMMON.MAX_AMOUNT_VALIDATION", {
                        amount: `${e}${a}`,
                        interpolation: {
                            escapeValue: !1
                        }
                    }) : s && Number(t) < s || !t ? n().t("COMMON.MIN_AMOUNT_VALIDATION", {
                        amount: `${e}${s}`,
                        interpolation: {
                            escapeValue: !1
                        }
                    }) : Number(t) > i ? n().t("COMMON.PLACEBET.ERROR.3") : null
                }
                ,
                this.setFullScreen = t => {
                    this.fullScreen = !!t
                }
                ,
                this.setAlertList = t => {
                    this.alertList = [...this.alertList, t]
                }
                ,
                this.updateAlertList = t => {
                    this.alertList = t
                }
                ,
                this.removeFirstItemAlertList = () => {
                    this.alertList = this.alertList.slice(1)
                }
                ,
                this.setBackendErrors = t => {
                    this.backendErrors.replace([...this.backendErrors, t])
                }
                ,
                this.clearBackendErrors = () => {
                    this.backendErrors.replace([])
                }
                ,
                this.setSettingsOpen = t => {
                    this.settingsOpen = t,
                    this.setModal({
                        modalName: "setting",
                        render: t,
                        delayOpen: 0,
                        delayClose: 0
                    })
                }
                ,
                this.setStatsModalOpen = t => {
                    this.statsModalOpen = t,
                    this.setModal({
                        modalName: "mybetsInfo",
                        render: t,
                        delayOpen: 0,
                        delayClose: 0
                    })
                }
                ,
                this.setLimitsModalOpen = t => {
                    this.limitsModalOpen = t,
                    this.setModal({
                        modalName: "limits",
                        render: t,
                        delayOpen: 0,
                        delayClose: 0
                    })
                }
                ,
                this.setRulesModalOpen = t => {
                    this.rulesModalOpen = t,
                    this.setModal({
                        modalName: "rules",
                        render: t,
                        delayOpen: 0,
                        delayClose: 0
                    })
                }
                ,
                this.setStatisticModalOpen = t => {
                    this.statisticModalOpen = t,
                    this.setModal({
                        modalName: "mybets",
                        render: t,
                        delayOpen: 0,
                        delayClose: 0
                    })
                }
                ,
                this.setTournamentsModalOpen = t => {
                    this.tournamentsModalOpen = t,
                    this.setModal({
                        modalName: "tournamentsModalOpen",
                        render: t,
                        delayOpen: 0,
                        delayClose: 0
                    })
                }
                ,
                this.setExitGameModalOpen = t => {
                    this.exitGameModalOpen = t,
                    this.setModal({
                        modalName: "exitGame",
                        render: t,
                        delayOpen: 0,
                        delayClose: 0
                    })
                }
                ,
                this.setModal = ({modalName: t, render: e, delayOpen: o, delayClose: i, callbackOnClose: s, callbackOnSubmit: n, data: a, noTracking: r}) => {
                    this.modal[t] || (this.modal[t] = {
                        timeout: null,
                        render: !1,
                        open: !1,
                        close: !1,
                        delayOpen: 0,
                        delayClose: 0,
                        data: void 0,
                        callbackOnClose: () => {}
                        ,
                        callbackOnSubmit: () => {}
                    }),
                    "number" == typeof o && (this.modal[t].delayOpen = o),
                    "number" == typeof i && (this.modal[t].delayClose = i),
                    "function" == typeof s && (this.modal[t].callbackOnClose = s),
                    "function" == typeof n && (this.modal[t].callbackOnSubmit = n),
                    a && (this.modal[t].data = a),
                    this.modal[t].timeout || (e && (this.modal[t].render = !0,
                    this.modal[t].timeout = window.setTimeout(( () => {
                        this.modal[t].open = !0,
                        this.modal[t].timeout = null
                    }
                    ), this.modal[t].delayOpen)),
                    e || (this.modal[t].open = !1,
                    this.modal[t].close = !0,
                    this.modal[t].timeout = window.setTimeout(( () => {
                        this.modal[t].render = !1,
                        this.modal[t].open = !1,
                        this.modal[t].close = !1,
                        this.modal[t].timeout = null,
                        this.modal[t].callbackOnClose(),
                        this.modal[t].callbackOnClose = () => {}
                        ,
                        this.modal[t].callbackOnSubmit = () => {}
                        ,
                        delete this.modal[t].data
                    }
                    ), this.modal[t].delayClose)),
                    (e || this.modal[t].render) && (r || (0,
                    u.Z)({
                        action: "element_view",
                        parameters: {
                            object: t,
                            state: e
                        }
                    })))
                }
                ,
                this.closeModalAll = () => {
                    for (let t in this.modal)
                        this.setModal({
                            modalName: t,
                            render: !1
                        })
                }
                ,
                this.setIsOnline = t => {
                    this.isOnline = t,
                    t ? this.showOnlineAlert() : this.showOfflineAlert()
                }
                ,
                this.setScreenSize = ({width: t, height: e}) => {
                    this.screenWidth = t,
                    this.screenHeight = e,
                    this.isMobile = (0,
                    d.Z)(),
                    "orientation"in window && (this.isScreenMobileTimeout && clearTimeout(Number(this.isScreenMobileTimeout)),
                    this.isScreenMobileTimeout = window.setTimeout(( () => {
                        this.setIsScreenMobile(performance.now())
                    }
                    ), 500))
                }
                ,
                this.showOnlineAlert = () => {
                    this.setAlertList({
                        title: n().t("COMMON.PLACEBET.ERROR.ATTENTION"),
                        text: n().t("NOTIF.1"),
                        type: "success",
                        value: "networkStatus"
                    })
                }
                ,
                this.showOfflineAlert = () => {
                    this.setAlertList({
                        title: n().t("NOTIF.2"),
                        text: n().t("NOTIF.3"),
                        type: "warning",
                        value: "networkStatus"
                    })
                }
                ,
                this.showUnauthorizedAlert = () => {
                    this.setAlertList({
                        title: n().t("COMMON.PLACEBET.ERROR.ATTENTION"),
                        text: n().t("COMMON.PLEASE_LOGIN"),
                        type: "error",
                        sticky: !0
                    })
                }
                ,
                this.hideUnauthorizedAlert = () => {
                    this.updateAlertList([])
                }
                ,
                this.lockedApp = t => {
                    const e = document.getElementById("app");
                    t ? e?.style.setProperty("pointer-events", "none") : e?.style.removeProperty("pointer-events")
                }
                ,
                this.errorCodeResolver = (t, e) => {
                    if (!this.isOnline)
                        return void this.setAlertList({
                            title: "Warning",
                            text: "You are currently Offline",
                            type: "warning",
                            value: "networkStatus"
                        });
                    let o = ""
                      , i = null;
                    const s = (0,
                    r.Z)("errorCode", t);
                    if (s && [1, 3, 4, 5, 6, 7, 8, 9, 21].includes(s))
                        "mancala" === this.root.game.gameConfig.gameClient && 5 === s ? this.setModal({
                            modalName: "mancalaError.5",
                            render: !0,
                            delayOpen: 0,
                            delayClose: 0
                        }) : 9 === s ? this.setModal({
                            modalName: "gameIsDisabled",
                            render: !0,
                            delayOpen: 0,
                            delayClose: 0,
                            callbackOnSubmit: () => {
                                location.reload()
                            }
                        }) : this.setAlertList({
                            title: n().t("COMMON.PLACEBET.ERROR.ATTENTION"),
                            text: n().t(`COMMON.PLACEBET.ERROR.${s}`),
                            type: "error"
                        });
                    else
                        switch (t && t.data && t.data.data && t.data.data.data && t.data.data.data.code ? i = t.data.data.data.code : t && t.data && t.data.data && t.data.data.code ? i = t.data.data.code : t && t.data && t.data.code ? i = t.data.code : t && t.code && (i = t.code),
                        t && t.data && t.data.data && t.data.data.data && t.data.data.data.error && "string" == typeof t.data.data.data.error ? o = t.data.data.data.error : t && t.data && t.data.data && t.data.data.error && "string" == typeof t.data.data.error ? o = t.data.data.error : t && t.data && t.data.error && "string" == typeof t.data.error ? o = t.data.error : t && t.error && "string" == typeof t.error && (o = t.error),
                        t && t.data && t.data.data && t.data.data.data && t.data.data.data.message && "string" == typeof t.data.data.data.message ? o = t.data.data.data.message : t && t.data && t.data.data && t.data.data.message && "string" == typeof t.data.data.message ? o = t.data.data.message : t && t.data && t.data.message && "string" == typeof t.data.message ? o = t.data.message : t && t.message && "string" == typeof t.message && (o = t.message),
                        i) {
                        case 600:
                            this.setAlertList({
                                title: "Attention!",
                                text: "Error: invalid params",
                                type: "error"
                            });
                            break;
                        case 601:
                            this.setAlertList({
                                title: "Attention!",
                                text: "Error: bet already exist",
                                type: "error"
                            });
                            break;
                        case 603:
                            break;
                        case 604:
                            this.setAlertList({
                                title: "Attention!",
                                text: "Error: amount exceeded",
                                type: "error"
                            });
                            break;
                        case 606:
                            o.length || (o = "Placebet error"),
                            this.setAlertList({
                                title: "Attention!",
                                text: `Error: ${o}`,
                                type: "error"
                            });
                            break;
                        case 607:
                            this.setAlertList({
                                title: "Attention!",
                                text: "Settle bet error",
                                type: "error"
                            });
                            break;
                        case 608:
                            this.setAlertList({
                                title: "Attention!",
                                text: "Error: authentication failed",
                                type: "error"
                            });
                            break;
                        case 609:
                            this.setAlertList({
                                title: "Attention!",
                                text: "Error: user already connected",
                                type: "error"
                            });
                            break;
                        default:
                            this.setAlertList({
                                title: n().t("COMMON.PLACEBET.ERROR.ATTENTION"),
                                text: n().t("COMMON.UNPROCESSED_CODE"),
                                type: "error"
                            }),
                            console.log("unprocessed code")
                        }
                }
                ,
                this.connectRatioListener = () => {
                    window.addEventListener("message", (t => {
                        "connectRatio" === t.data.type && (this.connectRatio = t.data.data,
                        o())
                    }
                    ));
                    const t = Date.now() + 1e4;
                    new MutationObserver(( (o, i) => {
                        for (let s of o)
                            if ("childList" === s.type) {
                                if (Date.now() > t || this.connectRatioElement)
                                    return void i.disconnect();
                                const o = document.getElementById("connectRatioElement")
                                  , s = document.getElementById("observeElementTree");
                                if (o || s)
                                    return this.connectRatioElement = o || s,
                                    i.disconnect(),
                                    void e()
                            }
                    }
                    )).observe(document.documentElement, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    });
                    const e = () => {
                        this.connectRatioElement && (new ResizeObserver(( () => {
                            o()
                        }
                        )).observe(this.connectRatioElement),
                        o())
                    }
                      , o = () => {
                        0 === this.connectRatio.minWidth && 0 === this.connectRatio.minHeight || window.parent.postMessage(JSON.stringify({
                            type: "connectRatio",
                            data: {
                                width: Math.max(this.connectRatioElement?.offsetWidth || 0, this.connectRatio.minWidth),
                                height: Math.max(this.connectRatioElement?.offsetHeight || 0, this.connectRatio.minHeight)
                            }
                        }), "*")
                    }
                }
                ,
                this.registerEvents = () => {
                    const t = () => {
                        this.setScreenSize({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    }
                    ;
                    window.addEventListener("resize", t),
                    window.addEventListener("online", ( () => {
                        this.setIsOnline(!0)
                    }
                    )),
                    window.addEventListener("offline", ( () => {
                        this.setIsOnline(!1)
                    }
                    )),
                    document.addEventListener("click", ( () => {
                        this.setFirstClick(!0)
                    }
                    )),
                    window.addEventListener("message", (t => {
                        this.setPostMessage(t)
                    }
                    )),
                    t()
                }
                ,
                this.checkSettleError = (t, e) => {
                    "Settle failed" === t.message && (this.setAlertList({
                        title: "",
                        text: "COMMON.PLACEBET.ERROR.50",
                        type: "warning"
                    }),
                    e())
                }
                ,
                this.checkErrorToResetGame = (t, e) => {
                    if (t.response && t.response.status) {
                        const o = t.response.status.toString()
                          , i = (0,
                        r.Z)("errorCode", t.response);
                        if ("mancala" === this.root.game.gameConfig.gameClient && 5 === i)
                            return void e();
                        (o.startsWith("4") || o.startsWith("5")) && (this.setAlertList({
                            title: "",
                            text: "COMMON.PLACEBET.ERROR.50",
                            type: "warning"
                        }),
                        e())
                    }
                }
                ,
                this.animationEvents = {},
                this.animationEvent = {
                    init: !1,
                    running: !1,
                    duration: 0,
                    delay: 0,
                    callbackRun: () => {}
                    ,
                    callbackEnd: () => {}
                },
                this.animationEventsCreate = t => {
                    this.animationEvents[t] || (this.animationEvents = Object.assign(this.animationEvents, {
                        [t]: this.animationEvent
                    }))
                }
                ,
                this.animationEventsInit = (t, e) => {
                    const o = e => e[t] ? e[t] : this.animationEvent;
                    if (!this.animationEvents[t] || this.animationEvents[t].init)
                        return o;
                    const i = {
                        ...this.animationEvent,
                        ...e.duration && {
                            duration: e.duration
                        },
                        ...e.delay && {
                            delay: e.delay
                        },
                        ...e.callbackRun && {
                            callbackRun: e.callbackRun
                        },
                        ...e.callbackEnd && {
                            callbackEnd: e.callbackEnd
                        },
                        init: !0
                    };
                    return this.animationEvents = Object.assign(this.animationEvents, {
                        [t]: i
                    }),
                    setTimeout(( () => {
                        this.animationEvents = Object.assign(this.animationEvents, {
                            [t]: {
                                ...i,
                                running: !0
                            }
                        }),
                        i.callbackRun()
                    }
                    ), i.delay),
                    setTimeout(( () => {
                        const {[t]: e, ...o} = this.animationEvents;
                        this.animationEvents = o,
                        i.callbackEnd()
                    }
                    ), i.delay + i.duration),
                    o
                }
                ,
                this.addLastBetAction = ({betId: t, action: e}) => {
                    this.lastBetAction.push({
                        betId: t,
                        action: e
                    })
                }
                ,
                this.root = t,
                (0,
                i.makeObservable)(this),
                void 0 === document.addEventListener || void 0 === m ? console.log("This feature requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.") : document.addEventListener(p, this.handleVisibilityChange, !1),
                this.connectRatioListener(),
                this.registerEvents()
            }
            get orientation() {
                return this.screenWidth > this.screenHeight ? "landscape" : "portrait"
            }
            get amountError() {
                const {game: {amount: t}} = this.root;
                return this.getAmountError(t)
            }
        }
        h([i.observable], b.prototype, "alertList", void 0),
        h([i.observable], b.prototype, "fullScreen", void 0),
        h([i.observable], b.prototype, "statsModalOpen", void 0),
        h([i.observable], b.prototype, "limitsModalOpen", void 0),
        h([i.observable], b.prototype, "rulesModalOpen", void 0),
        h([i.observable], b.prototype, "statisticModalOpen", void 0),
        h([i.observable], b.prototype, "settingsOpen", void 0),
        h([i.observable], b.prototype, "tournamentsModalOpen", void 0),
        h([i.observable], b.prototype, "exitGameModalOpen", void 0),
        h([i.observable], b.prototype, "modal", void 0),
        h([i.observable], b.prototype, "isMobile", void 0),
        h([i.observable], b.prototype, "isOnline", void 0),
        h([i.observable], b.prototype, "isVisible", void 0),
        h([i.observable], b.prototype, "postMessage", void 0),
        h([i.observable], b.prototype, "betData", void 0),
        h([i.observable], b.prototype, "betInfoGameId", void 0),
        h([i.observable], b.prototype, "betInfoId", void 0),
        h([i.observable], b.prototype, "lastBetAction", void 0),
        h([i.observable], b.prototype, "guideShown", void 0),
        h([i.observable], b.prototype, "guideStatus", void 0),
        h([i.observable], b.prototype, "screenWidth", void 0),
        h([i.observable], b.prototype, "screenHeight", void 0),
        h([i.observable], b.prototype, "pageDisabled", void 0),
        h([i.observable], b.prototype, "firstClick", void 0),
        h([i.observable], b.prototype, "initDate", void 0),
        h([i.observable], b.prototype, "noAnimation", void 0),
        h([i.observable], b.prototype, "resizeObserverElementTree", void 0),
        h([i.observable], b.prototype, "connectRatio", void 0),
        h([i.observable], b.prototype, "connectRatioElement", void 0),
        h([i.observable], b.prototype, "isScreenMobileTimeout", void 0),
        h([i.observable], b.prototype, "isScreenMobile", void 0),
        h([i.observable], b.prototype, "pageRatio", void 0),
        h([i.computed], b.prototype, "orientation", null),
        h([i.action], b.prototype, "setIsScreenMobile", void 0),
        h([i.action], b.prototype, "setPageRatio", void 0),
        h([i.action], b.prototype, "setPageDisabled", void 0),
        h([i.action], b.prototype, "setNoAnimation", void 0),
        h([i.action], b.prototype, "setGuideShown", void 0),
        h([i.action], b.prototype, "setGuideStatus", void 0),
        h([i.action], b.prototype, "handleVisibilityChange", void 0),
        h([i.action], b.prototype, "setBetInfoGameId", void 0),
        h([i.action], b.prototype, "setBetInfoId", void 0),
        h([i.action], b.prototype, "setFirstClick", void 0),
        h([i.action], b.prototype, "setPostMessage", void 0),
        h([i.computed], b.prototype, "amountError", null),
        h([i.action], b.prototype, "setFullScreen", void 0),
        h([i.action], b.prototype, "setAlertList", void 0),
        h([i.action], b.prototype, "updateAlertList", void 0),
        h([i.action], b.prototype, "removeFirstItemAlertList", void 0),
        h([i.action], b.prototype, "setBackendErrors", void 0),
        h([i.action], b.prototype, "clearBackendErrors", void 0),
        h([i.action], b.prototype, "setSettingsOpen", void 0),
        h([i.action], b.prototype, "setStatsModalOpen", void 0),
        h([i.action], b.prototype, "setLimitsModalOpen", void 0),
        h([i.action], b.prototype, "setRulesModalOpen", void 0),
        h([i.action], b.prototype, "setStatisticModalOpen", void 0),
        h([i.action], b.prototype, "setTournamentsModalOpen", void 0),
        h([i.action], b.prototype, "setExitGameModalOpen", void 0),
        h([i.action], b.prototype, "setModal", void 0),
        h([i.action], b.prototype, "closeModalAll", void 0),
        h([i.action], b.prototype, "setIsOnline", void 0),
        h([i.action], b.prototype, "setScreenSize", void 0),
        h([i.action], b.prototype, "showUnauthorizedAlert", void 0),
        h([i.action], b.prototype, "hideUnauthorizedAlert", void 0),
        h([i.action], b.prototype, "lockedApp", void 0),
        h([i.action], b.prototype, "connectRatioListener", void 0),
        h([i.action], b.prototype, "registerEvents", void 0),
        h([i.action], b.prototype, "checkSettleError", void 0),
        h([i.action], b.prototype, "checkErrorToResetGame", void 0),
        h([i.observable], b.prototype, "animationEvents", void 0),
        h([i.action], b.prototype, "animationEventsCreate", void 0),
        h([i.action], b.prototype, "animationEventsInit", void 0),
        h([i.action], b.prototype, "addLastBetAction", void 0);
        var f = b
    }
    ,
    1734: (t, e, o) => {
        var i = {
            "./AudioCommon.ts": [4036],
            "./AutobetCommon.ts": [4412],
            "./BalanceCommon.ts": [748],
            "./BonusTowersCommon.ts": [595, 431, 5103, 595],
            "./BubblesCommon.ts": [9472, 431, 5103, 9472],
            "./CatanzaCommon.ts": [1505, 431, 5103, 1505],
            "./ChickenzapCommon.ts": [7430, 431, 5103, 7430],
            "./CrashAutobetCommon.ts": [1826, 1826],
            "./CrashCommon.ts": [4819, 431, 509, 4819],
            "./CrystalpokerCommon.ts": [7833, 431, 5103, 7833],
            "./Dice3Common.ts": [8375, 431, 5103, 8375],
            "./DiceCommon.ts": [5946, 431, 5103, 5946],
            "./DoubleCommon.ts": [5907, 431, 509, 5907],
            "./FreebetsCommon.ts": [1794],
            "./HoldCrashCommon.ts": [8651, 431, 5103, 8651],
            "./JewelclickerCommon.ts": [2456, 431, 5103, 2456],
            "./LimboCommon.ts": [2654, 431, 5103, 2654],
            "./MinesCommon.ts": [6207, 431, 5103, 6207],
            "./MultiMinesCommon.ts": [6908, 431, 5103, 509, 6908],
            "./MystecoCommon.ts": [5415, 431, 5103, 5415],
            "./OneTapMinesCommon.ts": [5543, 431, 5103, 5543],
            "./PandaPokerCommon.ts": [1344, 431, 5103, 1344],
            "./PlinkoCommon.ts": [2013, 431, 5103, 2013],
            "./ProfileCommon.ts": [7864],
            "./QuickModeCommon.ts": [9273],
            "./TournamentsCommon.ts": [6322],
            "./TowersCommon.ts": [9556, 431, 5103, 9556],
            "./TrackingCommon.ts": [5004],
            "./UiCommon.ts": [3486],
            "./UltimateDiceCommon.ts": [9116, 431, 5103, 9116],
            "./VortexCommon.ts": [7056, 431, 5103, 7056],
            "./WheelCommon.ts": [3051, 431, 3051]
        };
        function s(t) {
            if (!o.o(i, t))
                return Promise.resolve().then(( () => {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                ));
            var e = i[t]
              , s = e[0];
            return Promise.all(e.slice(1).map(o.e)).then(( () => o(s)))
        }
        s.keys = () => Object.keys(i),
        s.id = 1734,
        t.exports = s
    }
}]);
