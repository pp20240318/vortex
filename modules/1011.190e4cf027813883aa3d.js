"use strict";
(self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || []).push([[1011], {
    2685: (e, n, o) => {
        var i = o(8081)
          , t = o.n(i)
          , r = o(3645)
          , a = o.n(r)
          , c = o(1667)
          , l = o.n(c)
          , s = new URL(o(6338),o.b)
          , d = new URL(o(4432),o.b)
          , u = new URL(o(5381),o.b)
          , g = new URL(o(9764),o.b)
          , m = new URL(o(627),o.b)
          , f = new URL(o(800),o.b)
          , p = new URL(o(4363),o.b)
          , h = new URL(o(7106),o.b)
          , b = new URL(o(7120),o.b)
          , k = a()(t())
          , v = l()(s)
          , y = l()(d)
          , w = l()(u)
          , C = l()(g)
          , I = l()(m)
          , E = l()(f)
          , O = l()(p)
          , T = l()(h)
          , U = l()(b);
        k.push([e.id, `.icon--k9yLr{--pulse-grow-duration: 0.3s;position:relative;width:1.5rem;height:1.5rem;aspect-ratio:1/1;color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;user-select:none;-webkit-user-select:none}@media(hover: hover){.icon--k9yLr{cursor:pointer}.icon--k9yLr:hover{animation-name:pulse-grow--FEMyw;animation-duration:var(--pulse-grow-duration);animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate}}.icon--k9yLr:active .iconImage--_j4Q6{background-color:#ff003a}.iconDark--y1G27 .iconImage--_j4Q6{background-color:#000}.iconDark--y1G27 .iconTurboUniverse--Of1Ih::before{background-image:url(${v})}.iconDisabled--JxkN0{pointer-events:none}.iconDisabled--JxkN0 .iconImage--_j4Q6{background-color:#4d4d4d}.iconAnimationActive--Dg_sX{pointer-events:none;animation:pulse-grow--FEMyw var(--pulse-grow-duration) linear alternate}.iconAnimationActive--Dg_sX .iconImage--_j4Q6{background-color:#ff003a}.iconActiveIndicator--CMTO4{position:absolute;top:0;right:0;transform:translate(0.25rem, -0.125rem);width:0.375rem;height:0.375rem;aspect-ratio:1/1;border-radius:50%;background-color:#ff003a}.iconImage--_j4Q6{position:absolute;width:100%;height:100%;background-color:#fff;mask-repeat:no-repeat;mask-size:contain;mask-position:center;transition:background-color .3s linear}.iconImageSettings--iRiUL{mask-image:url(${y})}.iconImageSound--P6lkE{mask-image:url(${w})}.iconImageSound--P6lkE._off{mask-image:url(${C})}.iconImageQuickGame--v3_iQ{mask-image:url(${I})}.iconImageQuickGame--v3_iQ._off{mask-image:url(${E})}.iconImageInfo--pBufU{mask-image:url(${O})}.iconTurboUniverse--Of1Ih{position:absolute;top:0;left:0;width:100%;height:100%}.iconTurboUniverse--Of1Ih::before,.iconTurboUniverse--Of1Ih::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center;background-size:contain;transition:opacity .3s linear}.iconTurboUniverse--Of1Ih::before{background-image:url(${T})}.iconTurboUniverse--Of1Ih::after{opacity:0;background-image:url(${U})}.iconTurboUniverse--Of1Ih{position:absolute;top:0;left:0;width:100%;height:100%}.iconTurboUniverse--Of1Ih::before,.iconTurboUniverse--Of1Ih::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center;background-size:contain;transition:opacity .3s linear}.iconTurboUniverse--Of1Ih::before{background-image:url(${T})}.iconTurboUniverse--Of1Ih::after{opacity:0;background-image:url(${U})}@keyframes pulse-grow--FEMyw{to{transform:scale(1.1)}}`, ""]),
        k.locals = {
            icon: "icon--k9yLr",
            "pulse-grow": "pulse-grow--FEMyw",
            iconImage: "iconImage--_j4Q6",
            iconDark: "iconDark--y1G27",
            iconTurboUniverse: "iconTurboUniverse--Of1Ih",
            iconDisabled: "iconDisabled--JxkN0",
            iconAnimationActive: "iconAnimationActive--Dg_sX",
            iconActiveIndicator: "iconActiveIndicator--CMTO4",
            iconImageSettings: "iconImageSettings--iRiUL",
            iconImageSound: "iconImageSound--P6lkE",
            iconImageQuickGame: "iconImageQuickGame--v3_iQ",
            iconImageInfo: "iconImageInfo--pBufU"
        },
        n.Z = k
    }
    ,
    4099: (e, n, o) => {
        var i = o(3379)
          , t = o.n(i)
          , r = o(7795)
          , a = o.n(r)
          , c = o(569)
          , l = o.n(c)
          , s = o(3565)
          , d = o.n(s)
          , u = o(9216)
          , g = o.n(u)
          , m = o(4589)
          , f = o.n(m)
          , p = o(2685)
          , h = {};
        h.styleTagTransform = f(),
        h.setAttributes = d(),
        h.insert = l().bind(null, "head"),
        h.domAPI = a(),
        h.insertStyleElement = g(),
        t()(p.Z, h),
        n.Z = p.Z && p.Z.locals ? p.Z.locals : void 0
    }
    ,
    4258: (e, n, o) => {
        o.d(n, {
            h: () => v
        });
        var i = o(6584)
          , t = o(5160);
        var r = o(3922)
          , a = o(2734)
          , c = o(4977)
          , l = o(286)
          , s = o(2464);
        const d = (0,
        c.observer)((function({children: e, style: n}) {
            const {profileCommon: {profile: {balanceLoad: o, balance: c, currencySign: d, rounding: u}}} = (0,
            r.GET_STORE)()
              , {t: g} = (0,
            l.useTranslation)()
              , [m,f] = (0,
            a.useState)(!1)
              , [p,h] = (0,
            a.useState)(!1)
              , [b,k] = (0,
            a.useState)([])
              , v = (0,
            a.useRef)(c);
            return (0,
            a.useLayoutEffect)(( () => {
                if (!o)
                    return;
                const e = function(e, n) {
                    const o = Math.pow(10, 2);
                    return Math.round(e * o) / o
                }(c - v.current)
                  , n = e > 0 ? `+${(0,
                s.Z)(e, u)}` : void 0;
                if (h(void 0 !== n),
                v.current = c,
                !n)
                    return;
                const i = [...b, {
                    value: n,
                    key: Math.random()
                }].slice(-10);
                k(i)
            }
            ), [c]),
            o || c || d?.length ? (0,
            i.tZ)(i.HY, {
                children: (0,
                t.toChildArray)(e({
                    title: g("COMMON.BALANCE"),
                    balance: m ? String(c).replace(/./g, "*") : String(c),
                    balanceShort: ( () => {
                        const e = String(c).length > 8 ? (0,
                        s.Z)(c, u) : String(c);
                        return m ? e.replace(/./g, "*") : e
                    }
                    )(),
                    balanceHide: m,
                    currencySign: ( () => {
                        const e = d || ""
                          , n = d.length > 1 ? " " : "";
                        return m ? `${e.replace(/./g, "*")}${n}` : `${e}${n}`
                    }
                    )(),
                    difference: p,
                    differenceList: b
                })).map((e => (0,
                t.cloneElement)(e, {
                    style: n
                })))
            }) : null
        }
        ))
          , u = (0,
        c.observer)((function({children: e, onClick: n=( () => {}
        ), style: o}) {
            const {audioCommon: {setGlobalMuted: a, allMuted: c}} = (0,
            r.GET_STORE)()
              , l = () => {
                a(!c),
                n()
            }
            ;
            return (0,
            i.tZ)(i.HY, {
                children: (0,
                t.toChildArray)(e({
                    active: c
                })).map((e => (0,
                t.cloneElement)(e, {
                    onClick: l,
                    style: o
                })))
            })
        }
        ))
          , g = (0,
        c.observer)((function({children: e, onClick: n=( () => {}
        ), delayOpen: o, delayClose: a, style: c}) {
            const {uiCommon: {setModal: l, modal: s}} = (0,
            r.GET_STORE)()
              , d = () => {
                l({
                    modalName: "setting",
                    render: !s.setting?.render,
                    delayOpen: o,
                    delayClose: a
                }),
                n()
            }
            ;
            return (0,
            i.tZ)(i.HY, {
                children: (0,
                t.toChildArray)(e).map((e => (0,
                t.cloneElement)(e, {
                    onClick: d,
                    style: c
                })))
            })
        }
        ))
          , m = (0,
        c.observer)((function({children: e, onClick: n=( () => {}
        ), style: o, forceActive: i}) {
            return null
        }
        ))
          , f = (0,
        c.observer)((function({children: e, onClick: n=( () => {}
        ), style: o}) {
            const {quickModeCommon: {enabled: a, setEnabled: c}} = (0,
            r.GET_STORE)()
              , l = () => {
                c(!a),
                n()
            }
            ;
            return (0,
            i.tZ)(i.HY, {
                children: (0,
                t.toChildArray)(e({
                    active: a
                })).map((e => (0,
                t.cloneElement)(e, {
                    onClick: l,
                    style: o
                })))
            })
        }
        ))
          , p = (0,
        c.observer)((function({children: e, onClick: n=( () => {}
        ), delayOpen: o, delayClose: a, style: c}) {
            const {uiCommon: {setModal: l, modal: s}, profileCommon: {profile: {storiesNew: d}, settings: {options: u}}} = (0,
            r.GET_STORE)()
              , g = () => {
                l({
                    modalName: "setting",
                    render: !s.setting?.render,
                    delayOpen: o,
                    delayClose: a,
                    data: {
                        page: "turbouniverse"
                    },
                    noTracking: !0
                }),
                n()
            }
            ;
            return !1 === u?.displayUniverse ? null : (0,
            i.tZ)(i.HY, {
                children: (0,
                t.toChildArray)(e({
                    storiesNew: d
                })).map((e => (0,
                t.cloneElement)(e, {
                    onClick: g,
                    style: c
                })))
            })
        }
        ));
        var h = o(2009)
          , b = o(8743);
        const k = (0,
        c.observer)((function({children: e, onClick: n=( () => {}
        ), delayOpen: o, delayClose: c, style: l}) {
            const {uiCommon: {setModal: s, modal: d, guideShown: u, setGuideShown: g}} = (0,
            r.GET_STORE)()
              , m = (0,
            r.GET_GAME_CONFIG)();
            (0,
            a.useEffect)(( () => {
                "aggressive" !== m.guide?.guideVariant || h.Z.get("guideIsShown") ? "passive" === m.guide?.guideVariant && g(!0) : (s({
                    modalName: "setting",
                    render: !d.setting?.render,
                    delayOpen: o,
                    delayClose: c,
                    data: {
                        page: "guide"
                    },
                    noTracking: !0
                }),
                g(!0))
            }
            ), []);
            const f = () => {
                "custom" !== m.guide?.guideVariant && (s({
                    modalName: "setting",
                    render: !d.setting?.render,
                    delayOpen: o,
                    delayClose: c,
                    data: {
                        page: "guide"
                    },
                    noTracking: !0,
                    callbackOnClose: () => {
                        (0,
                        b.Z)({
                            action: "element_view",
                            parameters: {
                                object: "guide",
                                state: !1
                            }
                        })
                    }
                }),
                (0,
                b.Z)({
                    action: "element_view",
                    parameters: {
                        object: "guide",
                        state: !0
                    }
                })),
                g(!u),
                n()
            }
            ;
            return (0,
            i.tZ)(i.HY, {
                children: (0,
                t.toChildArray)(e({
                    guideShown: u
                })).map((e => (0,
                t.cloneElement)(e, {
                    onClick: f,
                    style: l
                })))
            })
        }
        ))
          , v = Object.assign((function({children: e}) {
            return (0,
            i.tZ)(i.HY, {
                children: e
            })
        }
        ), {
            Back: function({children: e, onClick: n=( () => {}
            ), style: o}) {
                const r = new URLSearchParams(window.location.search)
                  , a = r.get("returnUrl") || r.get("iframeReturnUrl")
                  , c = () => {
                    n(),
                    a && function(e) {
                        try {
                            return new URL(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }(a) ? window.location.href = a : window.history.back()
                }
                ;
                return a && "hidden" === a ? null : (0,
                i.tZ)(i.HY, {
                    children: (0,
                    t.toChildArray)(e).map((e => (0,
                    t.cloneElement)(e, {
                        onClick: c,
                        style: o
                    })))
                })
            },
            Logo: function({children: e}) {
                return (0,
                i.tZ)(i.HY, {
                    children: e
                })
            },
            Balance: d,
            Nav: Object.assign((function({children: e}) {
                return (0,
                i.tZ)(i.HY, {
                    children: e
                })
            }
            ), {
                Button: Object.assign((function({children: e, onClick: n=( () => {}
                )}) {
                    return (0,
                    i.tZ)(i.HY, {
                        children: (0,
                        t.toChildArray)(e).map((e => (0,
                        t.cloneElement)(e, {
                            onClick: n
                        })))
                    })
                }
                ), {
                    Music: u,
                    Setting: g,
                    FullScreen: m,
                    QuickMode: f,
                    Universe: p,
                    Guide: k
                })
            })
        })
    }
    ,
    2464: (e, n, o) => {
        o.d(n, {
            M: () => a
        });
        const i = ["", "k", "M", "G", "T", "P", "E", "Z", "Y", "B", "N", "D", "H", "O"]
          , t = (e, n) => {
            const o = Math.pow(10, n);
            return Math.round(e * o) / o
        }
          , r = e => e.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.?$/, "");
        function a(e, n=2) {
            const o = e.toFixed(n);
            if (o.length <= 8)
                return o;
            const a = Math.abs(e);
            let c = Math.floor(Math.log10(a) / 3);
            c = Math.min(c, i.length - 1);
            const l = Math.pow(10, 3 * c);
            let s = t(e / l, n).toFixed(n);
            return s = r(s),
            `${s}${i[c]}`
        }
        n.Z = a
    }
    ,
    4363: (e, n, o) => {
        e.exports = o.p + "04c5652e70f132ff9792.svg"
    }
    ,
    800: (e, n, o) => {
        e.exports = o.p + "7ca98d6623053a9a9177.svg"
    }
    ,
    627: (e, n, o) => {
        e.exports = o.p + "0a1ac91d9ab29521427f.svg"
    }
    ,
    4432: (e, n, o) => {
        e.exports = o.p + "e5fde53707f3488da4ab.svg"
    }
    ,
    9764: (e, n, o) => {
        e.exports = o.p + "24d44e0dc1ed35269208.svg"
    }
    ,
    5381: (e, n, o) => {
        e.exports = o.p + "99c8a44781585a098ad0.svg"
    }
    ,
    6338: (e, n, o) => {
        e.exports = o.p + "c327a1ebdbd1b9858b74.webp"
    }
    ,
    7120: (e, n, o) => {
        e.exports = o.p + "0290073c9052f86d00f2.webp"
    }
    ,
    7106: (e, n, o) => {
        e.exports = o.p + "38293cee0bbb2d0dbab4.webp"
    }
}]);
