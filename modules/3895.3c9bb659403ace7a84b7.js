"use strict";
(self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || []).push([[3895], {
    4913: (e, n, t) => {
        var o = t(8081)
          , r = t.n(o)
          , s = t(3645)
          , l = t.n(s)
          , i = t(1667)
          , a = t.n(i)
          , c = new URL(t(8006),t.b)
          , d = l()(r())
          , m = a()(c);
        d.push([e.id, `.demo--Ig8fs{z-index:1000;position:fixed;transform:rotate(180deg);right:0;top:calc(var(--header-height, 40px) + 3rem);display:flex;align-items:center;gap:0.25rem;padding:0.5rem 0.25rem;border-radius:0 0.25rem 0.25rem 0;background:rgba(34,34,34,.5);color:#e6e6e6;font-family:"Jost",sans-serif;font-size:0.75rem;font-style:normal;font-weight:700;line-height:1.4;text-transform:uppercase;writing-mode:vertical-rl;pointer-events:none;user-select:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-touch-callout:none}.demoIcon--ozzEI{width:0.75rem;height:0.75rem;aspect-ratio:1/1;background:url(${m}) no-repeat center/contain}`, ""]),
        d.locals = {
            demo: "demo--Ig8fs",
            demoIcon: "demoIcon--ozzEI"
        },
        n.Z = d
    }
    ,
    4347: (e, n, t) => {
        t.d(n, {
            O: () => m
        });
        var o = t(6584)
          , r = t(3922)
          , s = t(5160)
          , l = t(2734)
          , i = t(4977)
          , a = t(2667);
        const c = (0,
        i.observer)((function({children: e, style: n}) {
            const {profileCommon: {profile: {apiKey: t}}} = (0,
            r.GET_STORE)();
            if (new URLSearchParams(window.location.search).has("no_demo_label"))
                return null;
            const [i,c] = (0,
            l.useState)(!1);
            return (0,
            l.useMemo)(( () => {
                c(t === a.LY)
            }
            ), [t]),
            i ? (0,
            o.tZ)(o.HY, {
                children: (0,
                s.toChildArray)(e).map((e => (0,
                s.cloneElement)(e, {
                    style: n
                })))
            }) : null
        }
        ));
        var d = t(2009);
        const m = Object.assign((function({children: e}) {
            return (0,
            o.tZ)(o.HY, {
                children: e
            })
        }
        ), {
            Demo: c,
            Other: function({children: e, time: n=1e3, localstorage: t}) {
                const [r,s] = (0,
                l.useState)(!0);
                return (0,
                l.useMemo)(( () => {
                    if (t)
                        return null !== d.Z.get(t) ? s(!1) : (d.Z.set(t, "true"),
                        void setTimeout(( () => {
                            s(!1)
                        }
                        ), n));
                    setTimeout(( () => {
                        s(!1)
                    }
                    ), n)
                }
                ), []),
                r ? (0,
                o.tZ)(o.HY, {
                    children: e
                }) : null
            }
        })
    }
    ,
    3895: (e, n, t) => {
        t.r(n),
        t.d(n, {
            LabelDemo: () => y
        });
        var o = t(6584)
          , r = t(4347)
          , s = t(3379)
          , l = t.n(s)
          , i = t(7795)
          , a = t.n(i)
          , c = t(569)
          , d = t.n(c)
          , m = t(3565)
          , u = t.n(m)
          , h = t(9216)
          , f = t.n(h)
          , p = t(4589)
          , g = t.n(p)
          , b = t(4913)
          , v = {};
        v.styleTagTransform = g(),
        v.setAttributes = u(),
        v.insert = d().bind(null, "head"),
        v.domAPI = a(),
        v.insertStyleElement = f(),
        l()(b.Z, v);
        var Z = b.Z && b.Z.locals ? b.Z.locals : void 0;
        const y = function({customChildren: e, style: n, setting: t}) {
            return e ? (0,
            o.tZ)(r.O.Demo, {
                style: n,
                children: e()
            }) : (0,
            o.tZ)(r.O.Demo, {
                style: n,
                children: (0,
                o.BX)("div", {
                    className: Z.demo,
                    children: [(0,
                    o.tZ)("div", {
                        className: Z.demoIcon
                    }), (0,
                    o.tZ)("div", {
                        children: t?.label ?? "Demo Mode"
                    })]
                })
            })
        }
    }
    ,
    8006: (e, n, t) => {
        e.exports = t.p + "88af7432e3ba199e6b04.png"
    }
}]);
