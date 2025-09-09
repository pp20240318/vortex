(self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || []).push([[1858], {
    7633: (n, e, o) => {
        "use strict";
        var t = o(8081)
          , r = o.n(t)
          , i = o(3645)
          , f = o.n(i)
          , c = o(7404)
          , s = f()(r());
        s.push([n.id, "@import url(https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),
        s.i(c.Z),
        s.push([n.id, "", ""]),
        e.Z = s
    }
    ,
    7404: (n, e, o) => {
        "use strict";
        var t = o(8081)
          , r = o.n(t)
          , i = o(3645)
          , f = o.n(i)
          , c = o(1667)
          , s = o.n(c)
          , a = new URL(o(9192),o.b)
          , u = new URL(o(1113),o.b)
          , l = new URL(o(6105),o.b)
          , m = f()(r())
          , d = s()(a)
          , b = s()(u)
          , p = s()(l);
        m.push([n.id, `@font-face {\n    font-family: "fm-iconFont";\n    src: url(${d}) format("truetype"),\nurl(${b}) format("woff"),\nurl(${p}) format("woff2");\n}\n\ni[class^="fm-iconFont-"]:before, i[class*=" fm-iconFont-"]:before {\n    font-family: fm-iconFont !important;\n    font-style: normal;\n    font-weight: normal !important;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.fm-iconFont-angle-down:before {\n    content: "\\f101";\n}\n.fm-iconFont-angle-left:before {\n    content: "\\f102";\n}\n.fm-iconFont-angle-right:before {\n    content: "\\f103";\n}\n.fm-iconFont-angle-top-x2:before {\n    content: "\\f104";\n}\n.fm-iconFont-angle-up:before {\n    content: "\\f105";\n}\n.fm-iconFont-animation:before {\n    content: "\\f106";\n}\n.fm-iconFont-auto:before {\n    content: "\\f107";\n}\n.fm-iconFont-back:before {\n    content: "\\f108";\n}\n.fm-iconFont-bomb:before {\n    content: "\\f109";\n}\n.fm-iconFont-check-save:before {\n    content: "\\f10a";\n}\n.fm-iconFont-check:before {\n    content: "\\f10b";\n}\n.fm-iconFont-close-line:before {\n    content: "\\f10c";\n}\n.fm-iconFont-close:before {\n    content: "\\f10d";\n}\n.fm-iconFont-copy:before {\n    content: "\\f10e";\n}\n.fm-iconFont-currency-mobile:before {\n    content: "\\f10f";\n}\n.fm-iconFont-dollar:before {\n    content: "\\f110";\n}\n.fm-iconFont-edit:before {\n    content: "\\f111";\n}\n.fm-iconFont-guide:before {\n    content: "\\f112";\n}\n.fm-iconFont-how-to-play:before {\n    content: "\\f113";\n}\n.fm-iconFont-icon-user:before {\n    content: "\\f114";\n}\n.fm-iconFont-info-lg:before {\n    content: "\\f115";\n}\n.fm-iconFont-info-sm:before {\n    content: "\\f116";\n}\n.fm-iconFont-ios-add:before {\n    content: "\\f117";\n}\n.fm-iconFont-ios-arrow-top:before {\n    content: "\\f118";\n}\n.fm-iconFont-ios-back:before {\n    content: "\\f119";\n}\n.fm-iconFont-ios-box:before {\n    content: "\\f11a";\n}\n.fm-iconFont-ios-check:before {\n    content: "\\f11b";\n}\n.fm-iconFont-ios-checkmark:before {\n    content: "\\f11c";\n}\n.fm-iconFont-ios-close:before {\n    content: "\\f11d";\n}\n.fm-iconFont-ios-copy:before {\n    content: "\\f11e";\n}\n.fm-iconFont-ios-creditcard:before {\n    content: "\\f11f";\n}\n.fm-iconFont-ios-cup:before {\n    content: "\\f120";\n}\n.fm-iconFont-ios-cursor-click:before {\n    content: "\\f121";\n}\n.fm-iconFont-ios-dollar:before {\n    content: "\\f122";\n}\n.fm-iconFont-ios-down:before {\n    content: "\\f123";\n}\n.fm-iconFont-ios-edit:before {\n    content: "\\f124";\n}\n.fm-iconFont-ios-flash-off:before {\n    content: "\\f125";\n}\n.fm-iconFont-ios-flash-on:before {\n    content: "\\f126";\n}\n.fm-iconFont-ios-fullscreen-off:before {\n    content: "\\f127";\n}\n.fm-iconFont-ios-fullscreen-on:before {\n    content: "\\f128";\n}\n.fm-iconFont-ios-home:before {\n    content: "\\f129";\n}\n.fm-iconFont-ios-how:before {\n    content: "\\f12a";\n}\n.fm-iconFont-ios-info:before {\n    content: "\\f12b";\n}\n.fm-iconFont-ios-left:before {\n    content: "\\f12c";\n}\n.fm-iconFont-ios-limit-old:before {\n    content: "\\f12d";\n}\n.fm-iconFont-ios-limit:before {\n    content: "\\f12e";\n}\n.fm-iconFont-ios-list:before {\n    content: "\\f12f";\n}\n.fm-iconFont-ios-music-off:before {\n    content: "\\f130";\n}\n.fm-iconFont-ios-music-on:before {\n    content: "\\f131";\n}\n.fm-iconFont-ios-nav:before {\n    content: "\\f132";\n}\n.fm-iconFont-ios-play:before {\n    content: "\\f133";\n}\n.fm-iconFont-ios-reload:before {\n    content: "\\f134";\n}\n.fm-iconFont-ios-right:before {\n    content: "\\f135";\n}\n.fm-iconFont-ios-rules:before {\n    content: "\\f136";\n}\n.fm-iconFont-ios-shared:before {\n    content: "\\f137";\n}\n.fm-iconFont-ios-sound-off:before {\n    content: "\\f138";\n}\n.fm-iconFont-ios-sound-on:before {\n    content: "\\f139";\n}\n.fm-iconFont-ios-turbogame:before {\n    content: "\\f13a";\n}\n.fm-iconFont-ios-up:before {\n    content: "\\f13b";\n}\n.fm-iconFont-ios-warning:before {\n    content: "\\f13c";\n}\n.fm-iconFont-like-filled:before {\n    content: "\\f13d";\n}\n.fm-iconFont-like:before {\n    content: "\\f13e";\n}\n.fm-iconFont-music:before {\n    content: "\\f13f";\n}\n.fm-iconFont-my-records:before {\n    content: "\\f140";\n}\n.fm-iconFont-mybets:before {\n    content: "\\f141";\n}\n.fm-iconFont-network:before {\n    content: "\\f142";\n}\n.fm-iconFont-people-icon:before {\n    content: "\\f143";\n}\n.fm-iconFont-plates:before {\n    content: "\\f144";\n}\n.fm-iconFont-rules-menu:before {\n    content: "\\f145";\n}\n.fm-iconFont-rules:before {\n    content: "\\f146";\n}\n.fm-iconFont-save:before {\n    content: "\\f147";\n}\n.fm-iconFont-settings:before {\n    content: "\\f148";\n}\n.fm-iconFont-sound-mute:before {\n    content: "\\f149";\n}\n.fm-iconFont-sound:before {\n    content: "\\f14a";\n}\n.fm-iconFont-target:before {\n    content: "\\f14b";\n}\n.fm-iconFont-timer:before {\n    content: "\\f14c";\n}\n.fm-iconFont-top-plays:before {\n    content: "\\f14d";\n}\n.fm-iconFont-tournament:before {\n    content: "\\f14e";\n}\n.fm-iconFont-turbogame-demo:before {\n    content: "\\f14f";\n}\n.fm-iconFont-union:before {\n    content: "\\f150";\n}\n.fm-iconFont-univers-copy:before {\n    content: "\\f151";\n}\n`, ""]),
        e.Z = m
    }
    ,
    4465: (n, e, o) => {
        "use strict";
        var t = o(8081)
          , r = o.n(t)
          , i = o(3645)
          , f = o.n(i)()(r());
        f.push([n.id, ".header--CucH5{z-index:1000;position:fixed;top:0;left:0;right:0;width:100%;height:2.5rem}.headerBtns--edvax{z-index:1000;position:fixed;top:0.5rem;right:0.5rem;display:flex;flex-direction:row-reverse;align-items:center;gap:0.5rem}.labels--ydaRJ{z-index:1000;position:fixed;top:50%;right:0;transform:translateY(-50%);width:100%;display:flex;flex-direction:column;gap:0.5rem;pointer-events:none}@media(orientation: portrait){.labels--ydaRJ{top:4.25rem}}", ""]),
        f.locals = {
            header: "header--CucH5",
            headerBtns: "headerBtns--edvax",
            labels: "labels--ydaRJ"
        },
        e.Z = f
    }
    ,
    3645: n => {
        "use strict";
        n.exports = function(n) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var o = ""
                      , t = void 0 !== e[5];
                    return e[4] && (o += "@supports (".concat(e[4], ") {")),
                    e[2] && (o += "@media ".concat(e[2], " {")),
                    t && (o += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                    o += n(e),
                    t && (o += "}"),
                    e[2] && (o += "}"),
                    e[4] && (o += "}"),
                    o
                }
                )).join("")
            }
            ,
            e.i = function(n, o, t, r, i) {
                "string" == typeof n && (n = [[null, n, void 0]]);
                var f = {};
                if (t)
                    for (var c = 0; c < this.length; c++) {
                        var s = this[c][0];
                        null != s && (f[s] = !0)
                    }
                for (var a = 0; a < n.length; a++) {
                    var u = [].concat(n[a]);
                    t && f[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                    u[5] = i),
                    o && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                    u[2] = o) : u[2] = o),
                    r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                    u[4] = r) : u[4] = "".concat(r)),
                    e.push(u))
                }
            }
            ,
            e
        }
    }
    ,
    1667: n => {
        "use strict";
        n.exports = function(n, e) {
            return e || (e = {}),
            n ? (n = String(n.__esModule ? n.default : n),
            /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
            e.hash && (n += e.hash),
            /["'() \t\n]|(%20)/.test(n) || e.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n) : n
        }
    }
    ,
    8081: n => {
        "use strict";
        n.exports = function(n) {
            return n[1]
        }
    }
    ,
    3379: n => {
        "use strict";
        var e = [];
        function o(n) {
            for (var o = -1, t = 0; t < e.length; t++)
                if (e[t].identifier === n) {
                    o = t;
                    break
                }
            return o
        }
        function t(n, t) {
            for (var i = {}, f = [], c = 0; c < n.length; c++) {
                var s = n[c]
                  , a = t.base ? s[0] + t.base : s[0]
                  , u = i[a] || 0
                  , l = "".concat(a, " ").concat(u);
                i[a] = u + 1;
                var m = o(l)
                  , d = {
                    css: s[1],
                    media: s[2],
                    sourceMap: s[3],
                    supports: s[4],
                    layer: s[5]
                };
                if (-1 !== m)
                    e[m].references++,
                    e[m].updater(d);
                else {
                    var b = r(d, t);
                    t.byIndex = c,
                    e.splice(c, 0, {
                        identifier: l,
                        updater: b,
                        references: 1
                    })
                }
                f.push(l)
            }
            return f
        }
        function r(n, e) {
            var o = e.domAPI(e);
            return o.update(n),
            function(e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer)
                        return;
                    o.update(n = e)
                } else
                    o.remove()
            }
        }
        n.exports = function(n, r) {
            var i = t(n = n || [], r = r || {});
            return function(n) {
                n = n || [];
                for (var f = 0; f < i.length; f++) {
                    var c = o(i[f]);
                    e[c].references--
                }
                for (var s = t(n, r), a = 0; a < i.length; a++) {
                    var u = o(i[a]);
                    0 === e[u].references && (e[u].updater(),
                    e.splice(u, 1))
                }
                i = s
            }
        }
    }
    ,
    569: n => {
        "use strict";
        var e = {};
        n.exports = function(n, o) {
            var t = function(n) {
                if (void 0 === e[n]) {
                    var o = document.querySelector(n);
                    if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                        try {
                            o = o.contentDocument.head
                        } catch (n) {
                            o = null
                        }
                    e[n] = o
                }
                return e[n]
            }(n);
            if (!t)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            t.appendChild(o)
        }
    }
    ,
    9216: n => {
        "use strict";
        n.exports = function(n) {
            var e = document.createElement("style");
            return n.setAttributes(e, n.attributes),
            n.insert(e, n.options),
            e
        }
    }
    ,
    3565: (n, e, o) => {
        "use strict";
        n.exports = function(n) {
            var e = o.nc;
            e && n.setAttribute("nonce", e)
        }
    }
    ,
    7795: n => {
        "use strict";
        n.exports = function(n) {
            if ("undefined" == typeof document)
                return {
                    update: function() {},
                    remove: function() {}
                };
            var e = n.insertStyleElement(n);
            return {
                update: function(o) {
                    !function(n, e, o) {
                        var t = "";
                        o.supports && (t += "@supports (".concat(o.supports, ") {")),
                        o.media && (t += "@media ".concat(o.media, " {"));
                        var r = void 0 !== o.layer;
                        r && (t += "@layer".concat(o.layer.length > 0 ? " ".concat(o.layer) : "", " {")),
                        t += o.css,
                        r && (t += "}"),
                        o.media && (t += "}"),
                        o.supports && (t += "}");
                        var i = o.sourceMap;
                        i && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                        e.styleTagTransform(t, n, e.options)
                    }(e, n, o)
                },
                remove: function() {
                    !function(n) {
                        if (null === n.parentNode)
                            return !1;
                        n.parentNode.removeChild(n)
                    }(e)
                }
            }
        }
    }
    ,
    4589: n => {
        "use strict";
        n.exports = function(n, e) {
            if (e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
    }
    ,
    4985: (n, e, o) => {
        "use strict";
        o.r(e),
        o.d(e, {
            ModuleLayoutDiv: () => v
        });
        var t = o(6584)
          , r = o(3379)
          , i = o.n(r)
          , f = o(7795)
          , c = o.n(f)
          , s = o(569)
          , a = o.n(s)
          , u = o(3565)
          , l = o.n(u)
          , m = o(9216)
          , d = o.n(m)
          , b = o(4589)
          , p = o.n(b)
          , h = o(4465)
          , F = {};
        F.styleTagTransform = p(),
        F.setAttributes = l(),
        F.insert = a().bind(null, "head"),
        F.domAPI = c(),
        F.insertStyleElement = d(),
        i()(h.Z, F);
        var y = h.Z && h.Z.locals ? h.Z.locals : void 0;
        const v = function({children: n, style: e, noId: o=!1, moduleCssClass: r=null}) {
            return (0,
            t.tZ)("div", {
                id: o ? "" : "ModuleLayoutDiv",
                className: r ? y[r] : y.header,
                style: e,
                children: n && n()
            })
        }
    }
    ,
    1858: (n, e, o) => {
        "use strict";
        o.r(e),
        o.d(e, {
            ModuleLayout: () => w
        });
        var t = o(3379)
          , r = o.n(t)
          , i = o(7795)
          , f = o.n(i)
          , c = o(569)
          , s = o.n(c)
          , a = o(3565)
          , u = o.n(a)
          , l = o(9216)
          , m = o.n(l)
          , d = o(4589)
          , b = o.n(d)
          , p = o(7633)
          , h = {};
        h.styleTagTransform = b(),
        h.setAttributes = u(),
        h.insert = s().bind(null, "head"),
        h.domAPI = f(),
        h.insertStyleElement = m(),
        r()(p.Z, h),
        p.Z && p.Z.locals && p.Z.locals;
        var F = o(6584)
          , y = o(3922)
          , v = o(4977)
          , g = o(2734)
          , x = o(4985);
        const w = (0,
        v.observer)((function({config: n}) {
            if (!(0,
            y.GET_GAME_CONFIG)().module)
                return null;
            if (!(0,
            y.GET_GAME_CONFIG)().module.moduleLayout)
                return null;
            const {uiCommon: {screenWidth: e, screenHeight: t}} = (0,
            y.GET_STORE)()
              , [r,i] = (0,
            g.useState)([])
              , [f,c] = (0,
            g.useState)([])
              , s = (0,
            g.useRef)({})
              , a = (0,
            g.useRef)([]);
            return a.current = [],
            (0,
            g.useEffect)(( () => {
                (async () => {
                    const e = (0,
                    y.GET_GAME_CONFIG)().module.moduleLayout;
                    if (Array.isArray(n))
                        for (let o of n) {
                            if (!o.id)
                                continue;
                            const n = e.findIndex((n => n.id === o.id));
                            -1 !== n && (e[n] = {
                                ...e[n],
                                ...o
                            })
                        }
                    for (let n of e)
                        if (n.id)
                            try {
                                const e = await o(7560)(`./${n.id}/index.tsx`);
                                s.current[n.id] = e[n.id]
                            } catch (e) {
                                return console.error("Not found ModuleLayout component", n.id),
                                !1
                            }
                    i(e)
                }
                )()
            }
            ), []),
            (0,
            g.useEffect)(( () => {
                const n = [...r];
                c(n)
            }
            ), [r]),
            (0,
            g.useEffect)(( () => {
                const n = window.innerWidth > window.innerHeight ? "landscape" : "portrait"
                  , e = [...r];
                for (let o = 0; o < e.length; o++) {
                    if (void 0 === e[o].breakpoint)
                        continue;
                    if (void 0 === e[o].breakpoint[n])
                        continue;
                    const t = Object.keys(e[o].breakpoint[n]).filter((n => Number(n) <= window.innerWidth)).map((n => Number(n)))
                      , r = Math.max(-1, ...t);
                    -1 !== r && (e[o] = {
                        ...e[o],
                        ...e[o].breakpoint[n][r]
                    })
                }
                c(e)
            }
            ), [e, t, r]),
            (0,
            F.BX)(F.HY, {
                children: [f.map((n => {
                    const e = s.current[n.id];
                    return !e || n.group ? null : (0,
                    F.tZ)(e, {
                        ...n.style && {
                            style: n.style
                        },
                        ...n.customChildren && {
                            customChildren: n.customChildren
                        },
                        ...n.setting && {
                            setting: n.setting
                        },
                        ...n.mode && {
                            mode: n.mode || "default"
                        }
                    })
                }
                )), f.map(( (n, e) => n.group ? a.current.includes(n.group) ? null : (a.current.push(n.group),
                (0,
                F.tZ)(x.ModuleLayoutDiv, {
                    noId: !0,
                    ...n.style && {
                        style: n.style
                    },
                    moduleCssClass: n.groupClassName,
                    children: () => f.map(( (o, t) => {
                        if (n.group !== o.group)
                            return null;
                        const r = s.current[o.id];
                        return r ? (0,
                        F.tZ)(r, {
                            ...o.style && e !== t && {
                                style: o.style
                            },
                            ...o.customChildren && {
                                customChildren: o.customChildren
                            },
                            ...o.setting && {
                                setting: o.setting
                            },
                            ...o.mode && {
                                mode: o.mode || "default"
                            }
                        }) : null
                    }
                    ))
                })) : null))]
            })
        }
        ))
    }
    ,
    7560: (n, e, o) => {
        var t = {
            "./ButtonBack/index.tsx": [94, 94],
            "./ButtonFullscreen/index.tsx": [6858, 7101, 1011, 6858],
            "./ButtonGuide/index.tsx": [8025, 7101, 1011, 8025],
            "./ButtonMusic/index.tsx": [4741, 7101, 1011, 4741],
            "./ButtonQuickMode/index.tsx": [9408, 7101, 1011, 9408],
            "./ButtonSetting/index.tsx": [3072, 7101, 1011, 3072],
            "./ButtonTurboUniverse/index.tsx": [2534, 7101, 1011, 2534],
            "./GameBalance/index.tsx": [8063, 7101, 8063],
            "./GameName/index.tsx": [5827, 7101, 5827],
            "./GameTime/index.tsx": [1218, 7101, 1218],
            "./LabelDemo/index.tsx": [3895, 3895],
            "./LabelFreebets/index.tsx": [8844, 8844],
            "./LabelTournaments/index.tsx": [5206, 5266, 6409],
            "./ModuleLayoutDiv/index.tsx": [4985]
        };
        function r(n) {
            if (!o.o(t, n))
                return Promise.resolve().then(( () => {
                    var e = new Error("Cannot find module '" + n + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                ));
            var e = t[n]
              , r = e[0];
            return Promise.all(e.slice(1).map(o.e)).then(( () => o(r)))
        }
        r.keys = () => Object.keys(t),
        r.id = 7560,
        n.exports = r
    }
    ,
    9192: (n, e, o) => {
        "use strict";
        n.exports = o.p + "6529c3b27a2675499407.ttf?bff4a47caa151ea74cca23a47cf885f9"
    }
    ,
    6105: (n, e, o) => {
        "use strict";
        n.exports = o.p + "74d4371017279ba0c19c.woff2?bff4a47caa151ea74cca23a47cf885f9"
    }
    ,
    1113: (n, e, o) => {
        "use strict";
        n.exports = o.p + "553131389f97f0ecce9b.woff?bff4a47caa151ea74cca23a47cf885f9"
    }
}]);
