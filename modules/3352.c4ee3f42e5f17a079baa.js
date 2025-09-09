"use strict";
(self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || []).push([[3352, 4340], {
    4340: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => r
        });
        class r {
            constructor() {
                this.callbacks = {},
                this.events = {}
            }
            register(e, t) {
                this.callbacks[e] = t
            }
            unregister(e) {
                delete this.callbacks[e]
            }
            invoke(e, ...t) {
                const n = this.callbacks[e];
                n ? n(...t) : console.warn(`Callback with id "${String(e)}" not found.`)
            }
            listCallbacks() {
                return Object.keys(this.callbacks)
            }
            on(e, t) {
                this.events[e] || (this.events[e] = []),
                this.events[e].push(t)
            }
            off(e, t) {
                this.events[e] && (this.events[e] = this.events[e].filter((e => e !== t)))
            }
            trigger(e, t) {
                this.events[e]?.forEach((e => e(t)))
            }
            listEvents() {
                return Object.keys(this.events)
            }
        }
    }
    ,
    1091: (e, t, n) => {
        n.d(t, {
            V: () => i
        });
        var r = n(4340);
        class o extends r.default {
        }
        const i = new o
    }
    ,
    3352: (e, t, n) => {
        n.r(t),
        n.d(t, {
            VortexAlert: () => F,
            VortexAmountButtonMinus: () => L,
            VortexAmountButtonPlus: () => W,
            VortexCanvasController: () => x.V,
            VortexControlAmount: () => b,
            VortexControlButton: () => h,
            VortexControlPayout: () => T,
            VortexGame: () => k,
            VortexInfo: () => P,
            VortexRender: () => _,
            VortexWin: () => R,
            VortexWinBonus: () => H
        });
        var r = n(6584)
          , o = n(4977)
          , i = n(3922)
          , s = n(5160)
          , a = n(286)
          , u = n(2734)
          , l = n(5669);
        const c = (0,
        o.observer)((function({children: e, onClick: t=( () => {}
        ), isPartial: n}) {
            const {game: {amount: o, lockedButtons: c, cashout: m, cashoutProcessing: f, gameState: d, placebetProcessing: g, currentPayout: h, partialPayout: p, durationMultiplier: E, gameConfig: {game: b}}, profileCommon: {limit: {maxWin: C}}} = (0,
            i.GET_STORE)()
              , {t: T} = (0,
            a.useTranslation)()
              , S = (0,
            u.useRef)(null)
              , O = c || f || !d.cashable || g || n && h === p && h !== (0,
            l.Z)(Number(o) + C) || n && !d.collection.find((e => e > 1))
              , v = {
                title: T("COMMON.CASHOUT"),
                request: f,
                disabled: O
            }
              , M = e => {
                if (f || O)
                    return !1;
                m(n),
                t(e)
            }
            ;
            return (0,
            u.useEffect)(( () => {
                d.exCollection && (S.current && clearTimeout(S.current),
                S.current = null,
                S.current = setTimeout(( () => {
                    t()
                }
                ), b?.duration * E))
            }
            ), [d]),
            (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e(v)).map((e => (0,
                s.cloneElement)(e, {
                    onClick: M
                })))
            })
        }
        ))
          , m = (0,
        o.observer)((function({children: e, onClick: t=( () => {}
        ), isPartial: n}) {
            const {game: {lockedButtons: o, cashout: a, cashoutProcessing: l, placebetProcessing: c, gameState: m, durationMultiplier: f, gameConfig: {game: d}}} = (0,
            i.GET_STORE)()
              , g = (0,
            u.useRef)(null)
              , h = e => {
                if (l || o || c)
                    return !1;
                a(n),
                t(e)
            }
            ;
            return (0,
            u.useEffect)(( () => {
                m.exCollection && (g.current && clearTimeout(g.current),
                g.current = null,
                g.current = setTimeout(( () => {
                    t()
                }
                ), d?.duration * f))
            }
            ), [m]),
            (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    onClick: h
                })))
            })
        }
        ));
        var f = n(2009);
        const d = (0,
        o.observer)((function({children: e, onClick: t=( () => {}
        ), forcedAction: n=!1}) {
            const {t: o} = (0,
            a.useTranslation)()
              , l = (0,
            u.useRef)(null)
              , c = (0,
            u.useRef)(null)
              , {game: {roundId: m, lockedButtons: d, placebetProcessing: g, cashoutProcessing: h, placeBet: p, setPlaceBetIsHeld: E, placeBetIsHeld: b, isFreebetEnabled: C, gameConfig: T}, uiCommon: {amountError: S, animationEventsCreate: O, guideShown: v}, quickModeCommon: {setEnabled: M, enabled: y}, freebetsCommon: {freebetEnabled: x, freebetActive: w}} = (0,
            i.GET_STORE)()
              , [A,k] = (0,
            u.useState)("hold")
              , [B,R] = (0,
            u.useState)(!1)
              , H = !!S || !m || d || g || h || b || x && w.left - 1 < 0
              , I = {
                title: o("COMMON.PLACE_BET"),
                request: g,
                disabled: H,
                placeBetIsHeld: b,
                buttonType: A,
                isFreebet: C,
                showH2S: B
            };
            (0,
            u.useEffect)(( () => {
                b || (y ? f.Z.set("alwaysQuickMode", !0) : f.Z.remove("alwaysQuickMode"))
            }
            ), [y]),
            (0,
            u.useEffect)(( () => {
                v && (l.current = setTimeout(( () => {
                    !C && R(!0)
                }
                ), T.placebetHoldEnableTime))
            }
            ), [v]),
            (0,
            u.useEffect)(( () => {
                C && R(!1)
            }
            ), [C]);
            const Z = e => n ? (t(e),
            null) : !(b || g || H) && (e.preventDefault(),
            E(!0),
            window.placeBetIsHeld = !0,
            p(),
            t(e),
            C ? (E(!1),
            null) : (R(!0),
            c.current && clearTimeout(c.current),
            void (c.current = setTimeout(( () => {
                M(!0),
                O("QuickModeButtonAlert")
            }
            ), 300))))
              , P = () => {
                window.placeBetIsHeld = !1,
                !f.Z.get("alwaysQuickMode") && M(!1),
                E(!1),
                c.current && clearTimeout(c.current)
            }
              , _ = e => {
                e.preventDefault(),
                document.activeElement instanceof HTMLElement && document.activeElement.blur()
            }
            ;
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e(I)).map((e => (0,
                s.cloneElement)(e, {
                    onMouseDown: Z,
                    onMouseUp: P,
                    onMouseLeave: P,
                    onTouchStart: Z,
                    onTouchEnd: P,
                    onTouchMove: _,
                    onContextMenu: _
                })))
            })
        }
        ))
          , g = (0,
        o.observer)((function({children: e, onClick: t=( () => {}
        )}) {
            const {game: {lockedButtons: n, placebetProcessing: o, placeBet: a}, uiCommon: {amountError: u}} = (0,
            i.GET_STORE)()
              , l = e => {
                if (o || n || u)
                    return !1;
                a(),
                t(e)
            }
            ;
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    onClick: l
                })))
            })
        }
        ))
          , h = Object.assign((0,
        o.observer)((function({children: e}) {
            return (0,
            r.tZ)(r.HY, {
                children: e
            })
        }
        )), {
            Play: Object.assign(d, {
                Event: g
            }),
            Cashout: Object.assign(c, {
                Event: m
            })
        })
          , p = (0,
        o.observer)((function({children: e}) {
            const {profileCommon: {profile: {balance: t, currencySign: n}, limit: {maxBet: o, maxWin: s, minBet: l}}, uiCommon: {amountError: c}, game: {amount: m, gameConfig: f}} = (0,
            i.GET_STORE)()
              , {t: d} = (0,
            a.useTranslation)()
              , [g,h] = (0,
            u.useState)(!1)
              , [p,E] = (0,
            u.useState)(`${d("COMMON.MAX_PROFIT")} ${n}${s}`)
              , b = (0,
            u.useRef)(null)
              , C = Math.min(t, o);
            return (0,
            u.useEffect)(( () => {
                (Number(m) === C || c) && (h(!0),
                E(c ?? `${d("COMMON.MAX_PROFIT")} ${n}${s}`),
                b.current && clearTimeout(b.current),
                b.current = window.setTimeout(( () => {
                    h(!1),
                    E(`${d("COMMON.MAX_PROFIT")} ${n}${s}`)
                }
                ), f.amountTooltipTimeout))
            }
            ), [C, m]),
            (0,
            r.tZ)(r.HY, {
                children: e({
                    titleMaxWin: p,
                    showTooltip: g
                })
            })
        }
        ))
          , E = (0,
        s.createContext)({})
          , b = Object.assign((0,
        o.observer)((function({children: e}) {
            const {t} = (0,
            a.useTranslation)()
              , {profileCommon: {profile: {balance: n, currencySign: o, rounding: s}, limit: {minBet: l, maxBet: c}, splitTest: m}, game: {amount: f, setAmount: d, lockedUi: g, placebetProcessing: h, cashoutProcessing: p, setCurrentAmountId: b, currentAmountId: C, amountsMap: T, gameState: {initial: S}, gameConfig: {game: {duration: O}}}, uiCommon: {amountError: v}, freebetsCommon: {freebetEnabled: M, freebetsSuccessIndexList: y, freebetActive: x}} = (0,
            i.GET_STORE)()
              , [w,A] = (0,
            u.useState)(Number(f))
              , [k,B] = (0,
            u.useState)(n)
              , [R,H] = (0,
            u.useState)(!1)
              , I = m?.variantValue
              , Z = m?.variantType
              , P = "vortex_less_bet_steps" === I && "test" === Z;
            return (0,
            u.useEffect)(( () => {
                p && H(!0),
                setTimeout(( () => {
                    H(!1)
                }
                ), O)
            }
            ), [p]),
            (0,
            u.useEffect)(( () => {
                P && (T[C] > n ? b(0) : d(T[C]))
            }
            ), []),
            (0,
            u.useEffect)(( () => {
                !S || h || R || M || (A(Number(f)),
                B(n))
            }
            ), [f, n, S, h, R, M]),
            (0,
            u.useEffect)(( () => {
                M && S && (B(x?.offer?.configuration[0]?.betAmount),
                A(x?.offer?.configuration[0]?.betAmount),
                d(x?.offer?.configuration[0]?.betAmount))
            }
            ), [M, S, x]),
            (0,
            r.tZ)(r.HY, {
                children: (0,
                r.tZ)(E.Provider, {
                    value: {
                        handleRight: () => {
                            if (T[C] > n)
                                return null;
                            b(C === T.length - 1 ? isFinite ? C : 0 : C + 1)
                        }
                        ,
                        handleLeft: () => {
                            b(0 === C ? isFinite ? 0 : T.length - 1 : C - 1)
                        }
                        ,
                        disabled: g || h
                    },
                    children: e({
                        title: t("COMMON.BET_AMOUNT"),
                        titleError: v,
                        disabled: g || h || M,
                        defaultValue: w,
                        min: l,
                        max: c,
                        onChange: e => {
                            if (M && e !== x?.offer?.configuration[0]?.betAmount)
                                return null;
                            d(e)
                        }
                        ,
                        prefix: o || "",
                        connectBalance: k,
                        rounding: s > 0 ? s - 1 : s,
                        gtmAction: "input_value_changed",
                        pushGtmDataOnValueChange: !0,
                        isTest: P
                    })
                })
            })
        }
        )), {
            Tooltip: p
        });
        var C = n(2464);
        const T = (0,
        o.observer)((function({children: e}) {
            let {profileCommon: {profile: {currencySign: t, rounding: n}, limit: {maxWin: o}}, game: {currentPayout: s, partialPayout: u, amount: c, gameState: m}} = (0,
            i.GET_STORE)();
            const {t: f} = (0,
            a.useTranslation)()
              , d = u === s && s !== (0,
            l.Z)(Number(c) + o) || !m.collection?.find((e => e > 1)) && !m.initial || m.initial ? null : u;
            return (0,
            r.tZ)(r.HY, {
                children: e({
                    title: f("COMMON.PAYOUT"),
                    titlePartial: f("VORTEX.PART_CASHOUT"),
                    payout: s,
                    payoutShort: (0,
                    C.Z)(s, n),
                    payoutWithSign: `${t}${(0,
                    C.Z)(s, n)}`,
                    payoutShortWithSign: `${t}${(0,
                    C.Z)(s, n)}`,
                    partialPayout: d || "-",
                    partialPayoutShort: d ? (0,
                    C.Z)(u, n) : "-",
                    partialPayoutWithSign: d ? `${t}${(0,
                    C.Z)(u, n)}` : "-",
                    partialPayoutShortWithSign: d ? `${t}${(0,
                    C.Z)(u, n)}` : "-",
                    sign: t
                })
            })
        }
        ))
          , S = (0,
        i.GET_GAME_CONFIG)()?.defaultCoeffs || {
            Symbol1: [0, 1.55, 4.85, 10, 7],
            Symbol2: [0, 2.5, 7.7, 16, 27.5, 44, 20.5],
            Symbol3: [0, 3.9, 12.5, 28, 52, 85, 133, 200, 200]
        }
          , O = (0,
        o.observer)((function({children: e, Vortex: t}) {
            const {game: {settings: n, resultUpdater: o, gameState: {collection: a, symbol: l, bonusWin: c, superBonus: m, exCollection: f}, superBonusState: d, gameConfig: g, symbolAliases: h, durationMultiplier: p}} = (0,
            i.GET_STORE)()
              , E = (0,
            u.useRef)([0, 0, 0])
              , b = (0,
            u.useRef)();
            function C(e, t, n) {
                const r = n - t;
                for (let o = 0; o < Math.abs(r); o++)
                    b.current?.setStep(e, t > n)
            }
            return (0,
            u.useEffect)(( () => {
                const e = document.querySelector("#vortex");
                return (async () => {
                    e && (b.current = new t(e))
                }
                )(),
                () => {
                    e && (e.innerHTML = ""),
                    b.current?.destroy()
                }
            }
            ), []),
            (0,
            u.useEffect)(( () => {
                b.current && b.current?.setSettings(n ?? S)
            }
            ), [n]),
            (0,
            u.useEffect)(( () => {
                const [e,t,n] = E.current
                  , [r,o,i] = f ?? a;
                setTimeout(( () => {
                    r !== e && C("red", r, e),
                    o !== t && C("green", o, t),
                    i !== n && C("blue", i, n)
                }
                ), g.game.duration * p),
                E.current = f ?? a
            }
            ), [a, f]),
            (0,
            u.useEffect)(( () => {
                if (!c)
                    return;
                const e = h[l] || "red";
                setTimeout(( () => {
                    b.current?.setStep(e, "true")
                }
                ), g.game.duration * p)
            }
            ), [c]),
            (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    id: "vortex"
                })))
            })
        }
        ));
        var v = n(7417);
        const M = {
            linear: v.GE,
            makeEaseOut: (0,
            v.DH)(v.w2),
            easeOutCubic: v.w2
        }
          , y = (0,
        o.observer)((function({children: e, onItem: t=( () => {}
        ), onFinish: n=( () => {}
        ), onStart: o=( () => {}
        )}) {
            const {game: {gameState: a, resultUpdater: l, roundId: c, gameConfig: m, superBonusState: f, durationMultiplier: d, setShowBonusGame: g}, uiCommon: {isVisible: h, screenWidth: p, screenHeight: E, noAnimation: b}} = (0,
            i.GET_STORE)()
              , [C,T] = (0,
            u.useState)(!1)
              , [S,O] = (0,
            u.useState)(!1)
              , y = (0,
            u.useRef)()
              , [x,w] = (0,
            u.useState)(-1)
              , [A,k] = (0,
            u.useState)([])
              , B = (0,
            u.useRef)();
            (0,
            u.useEffect)(( () => {
                if (!y.current)
                    return;
                const e = R()
                  , t = parseFloat(getComputedStyle(y.current).width) * e.first;
                y.current.style.transform = `translateY(${t}px)`
            }
            ), []),
            (0,
            u.useEffect)(( () => {
                let e = [...m.game.map, ...m.game.map]
                  , t = 0;
                for (; t < m.game.sliderSettings.mapLength; )
                    e = [...e, ...m.game.map],
                    t++;
                e = [...e, ...m.game.map, ...m.game.map],
                k(e.map(( (e, t) => ({
                    symbol: e,
                    win: t === x
                }))))
            }
            ), [x, f]),
            (0,
            u.useEffect)(( () => {
                g(A.find((e => e.win)) && !S && !!f)
            }
            ), [A, f, S]),
            (0,
            u.useEffect)(( () => {
                if ("" === c)
                    return;
                if (!y.current)
                    return;
                const e = R();
                let r = 0;
                return T(!0),
                O(!0),
                o(),
                (0,
                v.jt)({
                    duration: b ? 1 : m.game.duration * d,
                    timing: M[m.game.timingFunction],
                    draw: function(o) {
                        if (!y.current)
                            return;
                        B.current && clearTimeout(B.current);
                        const i = parseFloat(getComputedStyle(y.current).width)
                          , s = i * e.first
                          , u = i * e.last
                          , l = s + (u - s) * o;
                        y.current.style.transform = `translateY(${l}px)`;
                        const c = Math.round((s + (u - s) * o) / i);
                        if (c > r) {
                            const n = {
                                ...A[c],
                                last: c === e.last,
                                symbol: a.symbol
                            };
                            delete n.win,
                            h && t(n),
                            r = c
                        }
                        if (o >= .95 && T(!1),
                        1 === o) {
                            y.current.style.transform = `translateY(${s}px)`;
                            const t = {
                                ...A[c]
                            };
                            delete t.win,
                            h && n(t),
                            w(e.first),
                            O(!1),
                            B.current = window.setTimeout(( () => {
                                w(-1)
                            }
                            ), m.superBonusDuration)
                        }
                    }
                }),
                () => {}
            }
            ), [l]),
            (0,
            u.useEffect)(( () => {
                if ("" === c)
                    return;
                if (!y.current)
                    return;
                const e = R()
                  , t = parseFloat(getComputedStyle(y.current).width) * e.first;
                y.current.style.transform = `translateY(${t}px)`
            }
            ), [p, E]);
            const R = () => {
                const e = m.game.map.findIndex((e => e === a.symbol));
                return -1 === e ? {
                    first: m.game.map.length,
                    last: m.game.map.length
                } : {
                    first: e + 2 * m.game.map.length,
                    last: e + m.game.sliderSettings.mapLength * m.game.map.length
                }
            }
              , H = {
                animation: S,
                map: A,
                bonusWin: a.bonusWin,
                superBonusState: {
                    isActive: !!f,
                    multiplier: f?.multiplier,
                    index: f?.index,
                    range: f?.range
                },
                blur: C
            };
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e(H)).map((e => (0,
                s.cloneElement)(e, {
                    ref: e => {
                        e instanceof HTMLElement && (y.current = e)
                    }
                })))
            })
        }
        ));
        var x = n(1091);
        x.V.invoke("hideIcons");
        const w = {
            linear: v.GE,
            makeEaseOut: (0,
            v.DH)(v.w2),
            easeOutCubic: v.w2
        }
          , A = (0,
        o.observer)((function({children: e, onItem: t=( () => {}
        ), onFinish: n=( () => {}
        ), onStart: o=( () => {}
        )}) {
            const {game: {roundId: a, gameConfig: l, superBonusState: c}, uiCommon: {isVisible: m, noAnimation: f}} = (0,
            i.GET_STORE)()
              , [d,g] = (0,
            u.useState)(!1)
              , h = (0,
            u.useRef)()
              , [p,E] = (0,
            u.useState)(-1)
              , [b,C] = (0,
            u.useState)([]);
            (0,
            u.useEffect)(( () => {
                if (!h.current)
                    return;
                const e = T()
                  , t = parseFloat(getComputedStyle(h.current).width) * e.first;
                h.current.style.transform = `translateY(${t}px)`
            }
            ), []),
            (0,
            u.useEffect)(( () => {
                if (!c)
                    return;
                let e = [...c.range, ...c.range]
                  , t = 0;
                for (; t < l.game.sliderSettings.mapLength; )
                    e = [...e, ...c.range],
                    t++;
                e = [...e, ...c.range, ...c.range],
                C(e.map(( (e, t) => ({
                    amount: e,
                    win: t === p
                }))))
            }
            ), [p, c]),
            (0,
            u.useEffect)(( () => {
                if ("" === a)
                    return;
                if (!h.current)
                    return;
                const e = T();
                let r = 0;
                g(!0),
                o(),
                (0,
                v.jt)({
                    duration: f ? 1 : l.game.bonusSpinDuration,
                    timing: w[l.game.timingFunction],
                    draw: function(o) {
                        if (!h.current)
                            return;
                        if (!(h.current.childNodes[0] && h.current.childNodes[0]instanceof Element))
                            return;
                        const i = parseFloat(getComputedStyle(h.current.childNodes[0]).height)
                          , s = i * e.first
                          , a = i * e.last
                          , u = s + (a - s) * o;
                        h.current.style.transform = `translateY(${u}px)`;
                        const f = Math.round((s + (a - s) * o) / i);
                        if (f > r) {
                            const n = {
                                ...b[f],
                                last: f === e.last,
                                amount: c.multiplier
                            };
                            delete n.win,
                            m && t(n),
                            r = f
                        }
                        if (1 === o) {
                            h.current.style.transform = `translateY(${s}px)`;
                            const t = {
                                ...b[f]
                            };
                            delete t.win,
                            m && n(t),
                            E(e.first),
                            g(!1),
                            setTimeout(( () => {
                                E(-1)
                            }
                            ), l.superBonusDuration)
                        }
                    }
                })
            }
            ), []);
            const T = () => {
                const e = c.index;
                return -1 === e ? {
                    first: 0,
                    last: 0
                } : {
                    first: e + 2 * c.range.length,
                    last: e + l.game.sliderSettings.mapLength * c.range.length
                }
            }
              , S = {
                animation: d,
                map: b,
                superBonusState: {
                    isActive: !!c,
                    multiplier: c?.multiplier,
                    index: c?.index,
                    range: c?.range
                }
            };
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e(S)).map((e => (0,
                s.cloneElement)(e, {
                    ref: e => {
                        e instanceof HTMLElement && (h.current = e)
                    }
                })))
            })
        }
        ))
          , k = Object.assign((0,
        o.observer)((function({children: e}) {
            return {
                children: e
            }
        }
        )), {
            Canvas: O,
            Line: y,
            BonusSlider: A
        });
        var B = n(8596);
        const R = (0,
        o.observer)((function({children: e, level: t=0, onLoad: n=( () => {}
        )}) {
            const {t: o} = (0,
            a.useTranslation)()
              , {game: {winLevel: s, winScreen: l, payout: c, coefficient: m, placebetProcessing: f}, profileCommon: {profile: {currencySign: d, rounding: g}, settings: {options: h}}, uiCommon: {isVisible: p}} = (0,
            i.GET_STORE)()
              , [E,b] = (0,
            u.useState)(!1);
            (0,
            u.useEffect)(( () => {
                l && p && n(),
                l && b(!0)
            }
            ), [l]),
            (0,
            u.useEffect)(( () => {
                l && s === t && n()
            }
            ), [l, s]),
            (0,
            u.useEffect)(( () => {
                f && b(!0)
            }
            ), [f]),
            (0,
            u.useEffect)(( () => {
                f && b(!1)
            }
            ), [f]);
            const C = h?.customBr;
            return (0,
            r.tZ)(r.HY, {
                children: e({
                    show: (C ? E : l) && s === t,
                    level: s,
                    title: o("MINES.YOU_WIN"),
                    profit: String((0,
                    B.Z)(c, g)),
                    prefix: d || "",
                    coefficient: m,
                    titleCoefficient: o("COMMON.MULTIPLIER")
                })
            })
        }
        ))
          , H = (0,
        o.observer)((function({children: e, onLoad: t=( () => {}
        )}) {
            const {t: n} = (0,
            a.useTranslation)()
              , {game: {payout: o, coefficient: s, gameConfig: {superBonusDuration: l, winDuration: c}, superBonusState: m}, profileCommon: {profile: {currencySign: f, rounding: d}}, uiCommon: {isVisible: g}} = (0,
            i.GET_STORE)()
              , [h,p] = (0,
            u.useState)(!1)
              , [E,b] = (0,
            u.useState)(0);
            return (0,
            u.useEffect)(( () => {
                m && (m.multiplier && b(m.multiplier),
                setTimeout(( () => {
                    b(m.multiplier),
                    t(),
                    p(!0),
                    setTimeout(( () => {
                        p(!1)
                    }
                    ), c)
                }
                ), .8 * l))
            }
            ), [m]),
            (0,
            r.tZ)(r.HY, {
                children: e({
                    show: h,
                    title: n("MINES.YOU_WIN"),
                    profit: String((0,
                    B.Z)(o, d)),
                    prefix: f || "",
                    coefficient: s - E,
                    totalCoefficient: s,
                    bonusCoefficient: E,
                    titleCoefficient: n("COMMON.MULTIPLIER"),
                    titleBonusCoefficient: n("COMMON.BONUS_GAME")
                })
            })
        }
        ))
          , I = (0,
        o.observer)((function({children: e}) {
            const {uiCommon: {modal: t, setModal: n}} = (0,
            i.GET_STORE)();
            return (0,
            r.tZ)(r.HY, {
                children: e({
                    show: t.vortexInfo?.render,
                    open: t.vortexInfo?.open,
                    close: t.vortexInfo?.close,
                    onClose: e => {
                        n({
                            modalName: "vortexInfo",
                            render: e
                        })
                    }
                })
            })
        }
        ))
          , Z = (0,
        o.observer)((function({children: e}) {
            const {uiCommon: {setModal: t}} = (0,
            i.GET_STORE)();
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    onClick: () => {
                        t({
                            modalName: "vortexInfo",
                            render: !0
                        })
                    }
                })))
            })
        }
        ))
          , P = Object.assign((0,
        o.observer)((function({children: e}) {
            const {t} = (0,
            a.useTranslation)();
            return (0,
            r.tZ)(r.HY, {
                children: e({
                    line1: t("VORTEX.BONUS.INFO_1"),
                    line2: t("VORTEX.BONUS.INFO_2")
                })
            })
        }
        )), {
            Modal: Object.assign(I, {
                Button: Z
            })
        })
          , _ = (0,
        o.observer)((function({children: e, betData: t}) {
            return t ? (0,
            r.tZ)(r.HY, {
                children: e({
                    collection: t.game.state.collection
                })
            }) : null
        }
        ));
        var N = n(8661);
        const Y = (0,
        o.observer)((function({children: e, onClick: t=( () => {}
        )}) {
            const {t: n} = (0,
            a.useTranslation)()
              , {game: {setMessagesList: o}, freebetsCommon: {freebetEnabled: u}} = (0,
            i.GET_STORE)()
              , l = e => {
                o({
                    text: u ? "VORTEX.NOTIF5" : "VORTEX.NOTIF1"
                })
            }
            ;
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    onClick: l
                })))
            })
        }
        ))
          , V = (0,
        o.observer)((function({children: e, isPartial: t, onClick: n=( () => {}
        )}) {
            const {t: o} = (0,
            a.useTranslation)()
              , {game: {setMessagesList: u}} = (0,
            i.GET_STORE)()
              , l = e => {
                u({
                    text: o(t ? "VORTEX.NOTIF4" : "VORTEX.NOTIF2")
                })
            }
            ;
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    onClick: l
                })))
            })
        }
        ))
          , $ = (0,
        o.observer)((function({children: e, onClick: t=( () => {}
        )}) {
            const [n,o] = (0,
            u.useState)(0)
              , {t: l} = (0,
            a.useTranslation)()
              , {game: {setMessagesList: c}} = (0,
            i.GET_STORE)()
              , m = e => {
                o((e => e + 1))
            }
            ;
            return (0,
            u.useEffect)(( () => {
                3 === n && (c({
                    text: l("VORTEX.NOTIF3")
                }),
                o(0))
            }
            ), [n]),
            (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    onClick: m
                })))
            })
        }
        ))
          , G = (0,
        s.createContext)({})
          , F = Object.assign((0,
        o.observer)((function({children: e, time: t=3e3}) {
            const {game: {messagesList: n, updateMessagesList: o}} = (0,
            i.GET_STORE)()
              , {t: s} = (0,
            a.useTranslation)()
              , [l,c] = (0,
            u.useState)()
              , m = document.getElementById("modal");
            return (0,
            u.useEffect)(( () => {
                if (0 === n.length)
                    return c(void 0);
                if (null != l)
                    return;
                const e = n[0];
                c({
                    ...e,
                    text: s(e.text || "")
                }),
                setTimeout(( () => {
                    o(n.slice(1)),
                    c(void 0)
                }
                ), t)
            }
            ), [n, l]),
            (0,
            N.createPortal)((0,
            r.tZ)(G.Provider, {
                value: {
                    message: l
                },
                children: (0,
                r.tZ)(r.HY, {
                    children: e
                })
            }), m)
        }
        )), {
            Message: function({children: e}) {
                const {message: t} = (0,
                u.useContext)(G);
                return t ? (0,
                r.tZ)(r.HY, {
                    children: e(t)
                }) : null
            },
            ButtonAmount: Y,
            ButtonCashout: V,
            ButtonPlay: $
        })
          , L = function({children: e, onClick: t=( () => {}
        )}) {
            const {handleLeft: n, disabled: o} = (0,
            u.useContext)(E)
              , i = e => {
                o || (n(),
                t(e))
            }
            ;
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e({
                    disabled: o
                })).map((e => (0,
                s.cloneElement)(e, {
                    onClick: i
                })))
            })
        }
          , W = function({children: e, onClick: t=( () => {}
        )}) {
            const {handleRight: n, disabled: o} = (0,
            u.useContext)(E)
              , i = e => {
                o || (n(),
                t(e))
            }
            ;
            return (0,
            r.tZ)(r.HY, {
                children: (0,
                s.toChildArray)(e({
                    disabled: o
                })).map((e => (0,
                s.cloneElement)(e, {
                    onClick: i
                })))
            })
        }
    }
    ,
    7417: (e, t, n) => {
        function r({timing: e, draw: t, duration: n}) {
            let r, o = performance.now();
            return function i(s) {
                let a = (s - o) / n;
                a > 1 && (a = 1);
                let u = e(a);
                t(u),
                a < 1 && (r = requestAnimationFrame(i))
            }(o),
            {
                stop: function() {
                    cancelAnimationFrame(r)
                }
            }
        }
        function o(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        }
        function i(e) {
            return 1 - Math.pow(1 - e, 3)
        }
        function s(e) {
            return e
        }
        n.d(t, {
            DH: () => o,
            GE: () => s,
            jt: () => r,
            w2: () => i
        })
    }
    ,
    2464: (e, t, n) => {
        n.d(t, {
            M: () => s
        });
        const r = ["", "k", "M", "G", "T", "P", "E", "Z", "Y", "B", "N", "D", "H", "O"]
          , o = (e, t) => {
            const n = Math.pow(10, t);
            return Math.round(e * n) / n
        }
          , i = e => e.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.?$/, "");
        function s(e, t=2) {
            const n = e.toFixed(t);
            if (n.length <= 8)
                return n;
            const s = Math.abs(e);
            let a = Math.floor(Math.log10(s) / 3);
            a = Math.min(a, r.length - 1);
            const u = Math.pow(10, 3 * a);
            let l = o(e / u, t).toFixed(t);
            return l = i(l),
            `${l}${r[a]}`
        }
        t.Z = s
    }
}]);
