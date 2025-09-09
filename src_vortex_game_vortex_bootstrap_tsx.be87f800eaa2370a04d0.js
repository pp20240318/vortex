"use strict";
(self.webpackChunkfederation_clients = self.webpackChunkfederation_clients || []).push([["src_vortex_game_vortex_bootstrap_tsx"], {
    "./node_modules/preact/compat/dist/compat.module.js": (e, t, n) => {
        n.d(t, {
            Children: () => p,
            cloneElement: () => B,
            createContext: () => o.createContext,
            createElement: () => o.createElement,
            default: () => Q,
            forwardRef: () => _,
            isValidElement: () => W,
            lazy: () => x,
            memo: () => c,
            unstable_batchedUpdates: () => G
        });
        var o = n("webpack/sharing/consume/default/preact/preact")
          , r = n("webpack/sharing/consume/default/preact/hooks/preact/hooks?4e9b");
        function a(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function u(e, t) {
            for (var n in e)
                if ("__source" !== n && !(n in t))
                    return !0;
            for (var o in t)
                if ("__source" !== o && e[o] !== t[o])
                    return !0;
            return !1
        }
        function i(e, t) {
            this.props = e,
            this.context = t
        }
        function c(e, t) {
            function n(e) {
                var n = this.props.ref
                  , o = n == e.ref;
                return !o && n && (n.call ? n(null) : n.current = null),
                t ? !t(this.props, e) || !o : u(this.props, e)
            }
            function r(t) {
                return this.shouldComponentUpdate = n,
                (0,
                o.createElement)(e, t)
            }
            return r.displayName = "Memo(" + (e.displayName || e.name) + ")",
            r.prototype.isReactComponent = !0,
            r.__f = !0,
            r
        }
        n.o(r, "useContext") && n.d(t, {
            useContext: function() {
                return r.useContext
            }
        }),
        n.o(r, "useEffect") && n.d(t, {
            useEffect: function() {
                return r.useEffect
            }
        }),
        n.o(r, "useMemo") && n.d(t, {
            useMemo: function() {
                return r.useMemo
            }
        }),
        n.o(r, "useRef") && n.d(t, {
            useRef: function() {
                return r.useRef
            }
        }),
        n.o(r, "useState") && n.d(t, {
            useState: function() {
                return r.useState
            }
        }),
        (i.prototype = new o.Component).isPureReactComponent = !0,
        i.prototype.shouldComponentUpdate = function(e, t) {
            return u(this.props, e) || u(this.state, t)
        }
        ;
        var s = o.options.__b;
        o.options.__b = function(e) {
            e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
            e.ref = null),
            s && s(e)
        }
        ;
        var l = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
        function _(e) {
            function t(t) {
                var n = a({}, t);
                return delete n.ref,
                e(n, t.ref || null)
            }
            return t.$$typeof = l,
            t.render = t,
            t.prototype.isReactComponent = t.__f = !0,
            t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
            t
        }
        var f = function(e, t) {
            return null == e ? null : (0,
            o.toChildArray)((0,
            o.toChildArray)(e).map(t))
        }
          , p = {
            map: f,
            forEach: f,
            count: function(e) {
                return e ? (0,
                o.toChildArray)(e).length : 0
            },
            only: function(e) {
                var t = (0,
                o.toChildArray)(e);
                if (1 !== t.length)
                    throw "Children.only";
                return t[0]
            },
            toArray: o.toChildArray
        }
          , d = o.options.__e;
        o.options.__e = function(e, t, n, o) {
            if (e.then)
                for (var r, a = t; a = a.__; )
                    if ((r = a.__c) && r.__c)
                        return null == t.__e && (t.__e = n.__e,
                        t.__k = n.__k),
                        r.__c(e, t);
            d(e, t, n, o)
        }
        ;
        var m = o.options.unmount;
        function v(e, t, n) {
            return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
                "function" == typeof e.__c && e.__c()
            }
            )),
            e.__c.__H = null),
            null != (e = a({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t),
            e.__c = null),
            e.__k = e.__k && e.__k.map((function(e) {
                return v(e, t, n)
            }
            ))),
            e
        }
        function h(e, t, n) {
            return e && n && (e.__v = null,
            e.__k = e.__k && e.__k.map((function(e) {
                return h(e, t, n)
            }
            )),
            e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e),
            e.__c.__e = !0,
            e.__c.__P = n)),
            e
        }
        function y() {
            this.__u = 0,
            this.t = null,
            this.__b = null
        }
        function b(e) {
            var t = e.__.__c;
            return t && t.__a && t.__a(e)
        }
        function x(e) {
            var t, n, r;
            function a(a) {
                if (t || (t = e()).then((function(e) {
                    n = e.default || e
                }
                ), (function(e) {
                    r = e
                }
                )),
                r)
                    throw r;
                if (!n)
                    throw t;
                return (0,
                o.createElement)(n, a)
            }
            return a.displayName = "Lazy",
            a.__f = !0,
            a
        }
        function C() {
            this.u = null,
            this.o = null
        }
        o.options.unmount = function(e) {
            var t = e.__c;
            t && t.__R && t.__R(),
            t && 32 & e.__u && (e.type = null),
            m && m(e)
        }
        ,
        (y.prototype = new o.Component).__c = function(e, t) {
            var n = t.__c
              , o = this;
            null == o.t && (o.t = []),
            o.t.push(n);
            var r = b(o.__v)
              , a = !1
              , u = function() {
                a || (a = !0,
                n.__R = null,
                r ? r(i) : i())
            };
            n.__R = u;
            var i = function() {
                if (!--o.__u) {
                    if (o.state.__a) {
                        var e = o.state.__a;
                        o.__v.__k[0] = h(e, e.__c.__P, e.__c.__O)
                    }
                    var t;
                    for (o.setState({
                        __a: o.__b = null
                    }); t = o.t.pop(); )
                        t.forceUpdate()
                }
            };
            o.__u++ || 32 & t.__u || o.setState({
                __a: o.__b = o.__v.__k[0]
            }),
            e.then(u, u)
        }
        ,
        y.prototype.componentWillUnmount = function() {
            this.t = []
        }
        ,
        y.prototype.render = function(e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div")
                      , r = this.__v.__k[0].__c;
                    this.__v.__k[0] = v(this.__b, n, r.__O = r.__P)
                }
                this.__b = null
            }
            var a = t.__a && (0,
            o.createElement)(o.Fragment, null, e.fallback);
            return a && (a.__u &= -33),
            [(0,
            o.createElement)(o.Fragment, null, t.__a ? null : e.children), a]
        }
        ;
        var E = function(e, t, n) {
            if (++n[1] === n[0] && e.o.delete(t),
            e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                for (n = e.u; n; ) {
                    for (; n.length > 3; )
                        n.pop()();
                    if (n[1] < n[0])
                        break;
                    e.u = n = n[2]
                }
        };
        function g(e) {
            return this.getChildContext = function() {
                return e.context
            }
            ,
            e.children
        }
        function S(e) {
            var t = this
              , n = e.i;
            t.componentWillUnmount = function() {
                (0,
                o.render)(null, t.l),
                t.l = null,
                t.i = null
            }
            ,
            t.i && t.i !== n && t.componentWillUnmount(),
            t.l || (t.i = n,
            t.l = {
                nodeType: 1,
                parentNode: n,
                childNodes: [],
                contains: function() {
                    return !0
                },
                appendChild: function(e) {
                    this.childNodes.push(e),
                    t.i.appendChild(e)
                },
                insertBefore: function(e, n) {
                    this.childNodes.push(e),
                    t.i.appendChild(e)
                },
                removeChild: function(e) {
                    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                    t.i.removeChild(e)
                }
            }),
            (0,
            o.render)((0,
            o.createElement)(g, {
                context: t.context
            }, e.__v), t.l)
        }
        (C.prototype = new o.Component).__a = function(e) {
            var t = this
              , n = b(t.__v)
              , o = t.o.get(e);
            return o[0]++,
            function(r) {
                var a = function() {
                    t.props.revealOrder ? (o.push(r),
                    E(t, e, o)) : r()
                };
                n ? n(a) : a()
            }
        }
        ,
        C.prototype.render = function(e) {
            this.u = null,
            this.o = new Map;
            var t = (0,
            o.toChildArray)(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--; )
                this.o.set(t[n], this.u = [1, 0, this.u]);
            return e.children
        }
        ,
        C.prototype.componentDidUpdate = C.prototype.componentDidMount = function() {
            var e = this;
            this.o.forEach((function(t, n) {
                E(e, n, t)
            }
            ))
        }
        ;
        var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
          , R = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
          , k = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
          , I = /[A-Z0-9]/g
          , P = "undefined" != typeof document
          , w = function(e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
        };
        o.Component.prototype.isReactComponent = {},
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
            Object.defineProperty(o.Component.prototype, e, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        }
        ));
        var A = o.options.event;
        function L() {}
        function O() {
            return this.cancelBubble
        }
        function V() {
            return this.defaultPrevented
        }
        o.options.event = function(e) {
            return A && (e = A(e)),
            e.persist = L,
            e.isPropagationStopped = O,
            e.isDefaultPrevented = V,
            e.nativeEvent = e
        }
        ;
        var M, T = {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.class
            }
        }, U = o.options.vnode;
        o.options.vnode = function(e) {
            "string" == typeof e.type && function(e) {
                var t = e.props
                  , n = e.type
                  , r = {}
                  , a = -1 === n.indexOf("-");
                for (var u in t) {
                    var i = t[u];
                    if (!("value" === u && "defaultValue"in t && null == i || P && "children" === u && "noscript" === n || "class" === u || "className" === u)) {
                        var c = u.toLowerCase();
                        "defaultValue" === u && "value"in t && null == t.value ? u = "value" : "download" === u && !0 === i ? i = "" : "translate" === c && "no" === i ? i = !1 : "o" === c[0] && "n" === c[1] ? "ondoubleclick" === c ? u = "ondblclick" : "onchange" !== c || "input" !== n && "textarea" !== n || w(t.type) ? "onfocus" === c ? u = "onfocusin" : "onblur" === c ? u = "onfocusout" : k.test(u) && (u = c) : c = u = "oninput" : a && R.test(u) ? u = u.replace(I, "-$&").toLowerCase() : null === i && (i = void 0),
                        "oninput" === c && r[u = c] && (u = "oninputCapture"),
                        r[u] = i
                    }
                }
                "select" == n && r.multiple && Array.isArray(r.value) && (r.value = (0,
                o.toChildArray)(t.children).forEach((function(e) {
                    e.props.selected = -1 != r.value.indexOf(e.props.value)
                }
                ))),
                "select" == n && null != r.defaultValue && (r.value = (0,
                o.toChildArray)(t.children).forEach((function(e) {
                    e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
                }
                ))),
                t.class && !t.className ? (r.class = t.class,
                Object.defineProperty(r, "className", T)) : (t.className && !t.class || t.class && t.className) && (r.class = r.className = t.className),
                e.props = r
            }(e),
            e.$$typeof = N,
            U && U(e)
        }
        ;
        var F = o.options.__r;
        o.options.__r = function(e) {
            F && F(e),
            M = e.__c
        }
        ;
        var D = o.options.diffed;
        o.options.diffed = function(e) {
            D && D(e);
            var t = e.props
              , n = e.__e;
            null != n && "textarea" === e.type && "value"in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value),
            M = null
        }
        ;
        var H = {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function(e) {
                        return M.__n[e.__c].props.value
                    },
                    useCallback: r.useCallback,
                    useContext: r.useContext,
                    useDebugValue: r.useDebugValue,
                    useDeferredValue: j,
                    useEffect: r.useEffect,
                    useId: r.useId,
                    useImperativeHandle: r.useImperativeHandle,
                    useInsertionEffect: Y,
                    useLayoutEffect: r.useLayoutEffect,
                    useMemo: r.useMemo,
                    useReducer: r.useReducer,
                    useRef: r.useRef,
                    useState: r.useState,
                    useSyncExternalStore: J,
                    useTransition: Z
                }
            }
        };
        function W(e) {
            return !!e && e.$$typeof === N
        }
        function B(e) {
            return W(e) ? o.cloneElement.apply(null, arguments) : e
        }
        var G = function(e, t) {
            return e(t)
        }
          , z = o.Fragment;
        function $(e) {
            e()
        }
        function j(e) {
            return e
        }
        function Z() {
            return [!1, $]
        }
        var Y = r.useLayoutEffect
          , q = W;
        function J(e, t) {
            var n = t()
              , o = (0,
            r.useState)({
                h: {
                    __: n,
                    v: t
                }
            })
              , a = o[0].h
              , u = o[1];
            return (0,
            r.useLayoutEffect)((function() {
                a.__ = n,
                a.v = t,
                K(a) && u({
                    h: a
                })
            }
            ), [e, n, t]),
            (0,
            r.useEffect)((function() {
                return K(a) && u({
                    h: a
                }),
                e((function() {
                    K(a) && u({
                        h: a
                    })
                }
                ))
            }
            ), [e]),
            n
        }
        function K(e) {
            var t, n, o = e.v, r = e.__;
            try {
                var a = o();
                return !((t = r) === (n = a) && (0 !== t || 1 / t == 1 / n) || t != t && n != n)
            } catch (e) {
                return !0
            }
        }
        var Q = {
            useState: r.useState,
            useId: r.useId,
            useReducer: r.useReducer,
            useEffect: r.useEffect,
            useLayoutEffect: r.useLayoutEffect,
            useInsertionEffect: Y,
            useTransition: Z,
            useDeferredValue: j,
            useSyncExternalStore: J,
            startTransition: $,
            useRef: r.useRef,
            useImperativeHandle: r.useImperativeHandle,
            useMemo: r.useMemo,
            useCallback: r.useCallback,
            useContext: r.useContext,
            useDebugValue: r.useDebugValue,
            version: "18.3.1",
            Children: p,
            render: function(e, t, n) {
                return null == t.__k && (t.textContent = ""),
                (0,
                o.render)(e, t),
                "function" == typeof n && n(),
                e ? e.__c : null
            },
            hydrate: function(e, t, n) {
                return (0,
                o.hydrate)(e, t),
                "function" == typeof n && n(),
                e ? e.__c : null
            },
            unmountComponentAtNode: function(e) {
                return !!e.__k && ((0,
                o.render)(null, e),
                !0)
            },
            createPortal: function(e, t) {
                var n = (0,
                o.createElement)(S, {
                    __v: e,
                    i: t
                });
                return n.containerInfo = t,
                n
            },
            createElement: o.createElement,
            createContext: o.createContext,
            createFactory: function(e) {
                return o.createElement.bind(null, e)
            },
            cloneElement: B,
            createRef: o.createRef,
            Fragment: o.Fragment,
            isValidElement: W,
            isElement: q,
            isFragment: function(e) {
                return W(e) && e.type === o.Fragment
            },
            isMemo: function(e) {
                return !!e && !!e.displayName && ("string" == typeof e.displayName || e.displayName instanceof String) && e.displayName.startsWith("Memo(")
            },
            findDOMNode: function(e) {
                return e && (e.base || 1 === e.nodeType && e) || null
            },
            Component: o.Component,
            PureComponent: i,
            memo: c,
            forwardRef: _,
            flushSync: function(e, t) {
                return e(t)
            },
            unstable_batchedUpdates: G,
            StrictMode: z,
            Suspense: y,
            SuspenseList: C,
            lazy: x,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: H
        }
    }
    ,
    "./src/vortex/game.vortex/bootstrap.tsx": (e, t, n) => {
        n.r(t);
        var o = n("./node_modules/preact/compat/dist/compat.module.js")
          , r = n("webpack/container/remote/fm/bootstrap");
        n("webpack/container/remote/fm/assets/scss/globals");
        const a = (0,
        o.lazy)(( () => Promise.all([n.e("webpack_sharing_consume_default_mobx-react-lite_mobx-react-lite"), n.e("webpack_sharing_consume_default_react-i18next_react-i18next-webpack_container_remote_fm_ui-we-5b4f5e"), n.e("src_vortex_game_vortex_components_PageMain_index_ts")]).then(n.bind(n, "./src/vortex/game.vortex/components/PageMain/index.ts"))))
          , u = (0,
        o.lazy)(( () => Promise.all([n.e("webpack_sharing_consume_default_react-i18next_react-i18next-webpack_container_remote_fm_ui-we-5b4f5e"), n.e("src_vortex_game_vortex_components_PageResult_index_ts")]).then(n.bind(n, "./src/vortex/game.vortex/components/PageResult/index.ts"))))
          , i = (0,
        o.lazy)(( () => Promise.all([n.e("webpack_sharing_consume_default_mobx-react-lite_mobx-react-lite"), n.e("src_vortex_game_vortex_components_PageBet_index_tsx")]).then(n.bind(n, "./src/vortex/game.vortex/components/PageBet/index.tsx"))))
          , c = (0,
        o.lazy)(( () => Promise.all([n.e("webpack_sharing_consume_default_mobx-react-lite_mobx-react-lite"), n.e("src_vortex_game_vortex_components_PageBet_PageShare_tsx")]).then(n.bind(n, "./src/vortex/game.vortex/components/PageBet/PageShare.tsx"))));
        (0,
        r.bootstrap)({
            entry: "vortex.vortex",
            meta: {
                title: "Vortex",
                favicon: "favicon.ico",
                canonical: !0
            },
            env: {
                LOCAL: "MISSING_ENV_VAR".LOCAL,
                FORCE_LOCAL: "MISSING_ENV_VAR".FORCE_LOCAL,
                APP_ENV: "production",
                NODE_ENV: "production",
                THEME: "vortex",
                GAME: "MISSING_ENV_VAR".GAME,
                CLIENT_API_HOST: "turbogames-vortex-client",
                CLIENT_WS_HOST: "MISSING_ENV_VAR".CLIENT_WS_HOST,
                CLIENT_PUBLIC_URL: "MISSING_ENV_VAR".CLIENT_PUBLIC_URL,
                CENTRIFUGE: "MISSING_ENV_VAR".CENTRIFUGE
            },
            pages: {
                main: a,
                render: i,
                result: u,
                share: c,
                fair: null
            },
            customStore: void 0
        })
    }
}]);
