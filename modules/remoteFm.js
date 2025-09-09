var fm;
( () => {
    "use strict";
    var e, a, t, r, n, o, f, d, l, c, i, s, b, u, h, m, p, v, g, P, y = {
        3795: (e, a, t) => {
            var r = {
                "./bootstrap": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922)]).then(( () => () => t(3922))),
                "./assets/scss/globals": () => t.e(859).then(( () => () => t(859))),
                "./assets/font/gilroy": () => t.e(5945).then(( () => () => t(5945))),
                "./assets/font/icons": () => t.e(7232).then(( () => () => t(7232))),
                "./helpers": () => t.e(4938).then(( () => () => t(4938))),
                "./ui": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5103), t.e(7101), t.e(4992), t.e(7477), t.e(8925), t.e(5266), t.e(4227), t.e(9443)]).then(( () => () => t(9443))),
                "./bubbles": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5871)]).then(( () => () => t(5871))),
                "./dice": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(1744)]).then(( () => () => t(1744))),
                "./mines": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(1553)]).then(( () => () => t(1553))),
                "./onetapmines": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5610)]).then(( () => () => t(5610))),
                "./multimines": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(3631)]).then(( () => () => t(3631))),
                "./bonustowers": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(4668)]).then(( () => () => t(4668))),
                "./double": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(1513)]).then(( () => () => t(1513))),
                "./plinko": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(8433)]).then(( () => () => t(8433))),
                "./crash": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(203)]).then(( () => () => t(203))),
                "./vortex": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(3352)]).then(( () => () => t(3352))),
                "./olympus": () => t.e(6726).then(( () => () => t(6726))),
                "./ultimatedice": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(9495)]).then(( () => () => t(9495))),
                "./towers": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(9955)]).then(( () => () => t(9955))),
                "./limbo": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(4989)]).then(( () => () => t(4989))),
                "./wheel": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5890)]).then(( () => () => t(5890))),
                "./crystalpoker": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(6795)]).then(( () => () => t(6795))),
                "./holdcrash": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5511)]).then(( () => () => t(5511))),
                "./dice3": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(7009)]).then(( () => () => t(7009))),
                "./jewelclicker": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(6851)]).then(( () => () => t(6851))),
                "./pandapoker": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(398)]).then(( () => () => t(398))),
                "./catanza": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5736)]).then(( () => () => t(5736))),
                "./chickenzap": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5471)]).then(( () => () => t(5471))),
                "./mysteco": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(1259)]).then(( () => () => t(1259))),
                "./module/ModuleGroupPreloader": () => Promise.all([t.e(5160), t.e(8255)]).then(( () => () => t(8255))),
                "./module/ModuleGroupPageRender": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(7101), t.e(4992), t.e(1714)]).then(( () => () => t(1714))),
                "./module/ModuleGroupPageBet": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(7101), t.e(4992), t.e(7477), t.e(596)]).then(( () => () => t(596))),
                "./module/ModuleGroupPageBetIframe": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(7101), t.e(4992), t.e(7477), t.e(6389)]).then(( () => () => t(6389))),
                "./module/ModuleGroupPageBetShare": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(7101), t.e(4992), t.e(7477), t.e(596), t.e(8143)]).then(( () => () => t(8143))),
                "./module/ModuleLayout": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(1858)]).then(( () => () => t(1858))),
                "./module/ModuleSetting": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(5103), t.e(7101), t.e(4992), t.e(7477), t.e(8925), t.e(5266), t.e(4227), t.e(6238)]).then(( () => () => t(6238))),
                "./module/ModuleTurboUniverse": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(7101), t.e(4992), t.e(8925)]).then(( () => () => t(8925))),
                "./module/ModulePaytable": () => Promise.all([t.e(5160), t.e(5535), t.e(1299), t.e(3922), t.e(1154), t.e(7101), t.e(588)]).then(( () => () => t(588))),
                "./canvas/CanvasController": () => t.e(4340).then(( () => () => t(4340)))
            }
              , n = (e, a) => (t.R = a,
            a = t.o(r, e) ? r[e]() : Promise.resolve().then(( () => {
                throw new Error('Module "' + e + '" does not exist in container.')
            }
            )),
            t.R = void 0,
            a)
              , o = (e, a) => {
                if (t.S) {
                    var r = "default"
                      , n = t.S[r];
                    if (n && n !== e)
                        throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e,
                    t.I(r, a)
                }
            }
            ;
            t.d(a, {
                get: () => n,
                init: () => o
            })
        }
    }, w = {};
    function j(e) {
        var a = w[e];
        if (void 0 !== a)
            return a.exports;
        var t = w[e] = {
            id: e,
            exports: {}
        };
        return y[e].call(t.exports, t, t.exports, j),
        t.exports
    }
    j.m = y,
    j.c = w,
    j.n = e => {
        var a = e && e.__esModule ? () => e.default : () => e;
        return j.d(a, {
            a
        }),
        a
    }
    ,
    a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
    j.t = function(t, r) {
        if (1 & r && (t = this(t)),
        8 & r)
            return t;
        if ("object" == typeof t && t) {
            if (4 & r && t.__esModule)
                return t;
            if (16 & r && "function" == typeof t.then)
                return t
        }
        var n = Object.create(null);
        j.r(n);
        var o = {};
        e = e || [null, a({}), a([]), a(a)];
        for (var f = 2 & r && t; "object" == typeof f && !~e.indexOf(f); f = a(f))
            Object.getOwnPropertyNames(f).forEach((e => o[e] = () => t[e]));
        return o.default = () => t,
        j.d(n, o),
        n
    }
    ,
    j.d = (e, a) => {
        for (var t in a)
            j.o(a, t) && !j.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: a[t]
            })
    }
    ,
    j.f = {},
    j.e = e => Promise.all(Object.keys(j.f).reduce(( (a, t) => (j.f[t](e, a),
    a)), [])),
    j.u = e => e + "." + {
        82: "9f18eed490accb73de0a",
        94: "449786d8c9abaf5e6a7d",
        203: "0f44722e549d9110b7ae",
        242: "b4ddcc2495bc4b9d5529",
        396: "bce2a24a37393c2f543c",
        398: "d6d1862705bb1aa60585",
        431: "60431710acd6b89d8ee7",
        509: "1d3a54d16bad285afa7c",
        552: "93434f81e94a187728d3",
        588: "81c82bbaed9ca4a7fadc",
        595: "f08acafc5acd9000da83",
        596: "28b925a8fc499c818323",
        623: "26bde40c14707fadbc01",
        859: "163ad9118b96ec6f47a5",
        1011: "190e4cf027813883aa3d",
        1072: "0a00daca5b50cb84908a",
        1154: "b2e6096fd8f744f96d80",
        1218: "9f862884338457d8567f",
        1259: "1dc8c95a09ac7fbda800",
        1299: "a89c22a16e3393b59a57",
        1344: "3fd32fded0bb92c59b69",
        1505: "3591cbafe5923be8fe46",
        1513: "9823dd66dd3d32b94bf9",
        1553: "17e4ad63476b10f73383",
        1714: "e0299d9ae77000fad341",
        1744: "7be18375200e8ef904cc",
        1766: "da3afa1dfd856a9b722f",
        1826: "136f2f5b0af562ee68b7",
        1858: "ff2c8f5f0a360b638f0d",
        1871: "934c74cecbc9eeebfdbc",
        2013: "005116f5917fa9866b94",
        2456: "a23141910ad132b32e8b",
        2534: "90a0f0d830dfecf61c95",
        2654: "444b83d35ef361cff377",
        2679: "d1882b37397deac8312a",
        3051: "ec37dbdcaecbe714e847",
        3072: "1953749c2f628ccce098",
        3352: "c4ee3f42e5f17a079baa",
        3631: "18a9f72b12c9c1b64452",
        3778: "282e881895d9e482d43d",
        3895: "3c9bb659403ace7a84b7",
        3922: "587db66c8379e6dca53b",
        4184: "97678345b9d281ec983f",
        4227: "282b10bce559e44718fe",
        4340: "6e8da6de75be8deb4398",
        4529: "83627b2d9f604bc25d3f",
        4548: "f02f232871c5d97981c7",
        4668: "c1eaef10ac008504a5ae",
        4741: "6f280ee1e79af732f9f7",
        4819: "f5c2d96ba8b5347c4623",
        4938: "293ea38884dd6a4422c0",
        4989: "8e972f18a2ebc3cbf32a",
        4992: "ed0eb910b6ede1d87e01",
        5103: "e401eb46e516f54c2cdf",
        5160: "4ae111932f76041b7a8d",
        5266: "a258892af764af62bdd0",
        5415: "e7091c94432078c7d9af",
        5471: "da0fad2cc484fa344b06",
        5511: "a8018ff2434cdf904ac4",
        5535: "86d1a908989a2aa867fd",
        5543: "257fb27804971c335201",
        5576: "53b769f872e0594a019e",
        5610: "23fc489954d8665da7d7",
        5736: "f530e5001324568dc842",
        5827: "c632a365dff10f8dd533",
        5871: "d5a21ef5083ad2dcc3cb",
        5890: "0bfc6bd08d59c0acca23",
        5907: "01a2ef4ee29031e320ae",
        5945: "b4df219b1756d1d992da",
        5946: "8e6a0bf138e6cc1e145c",
        6207: "13d2242d1dd67a0d61e4",
        6238: "ef4dda188cbae2fe9346",
        6389: "3c4a4ff420399f444818",
        6400: "3df79382aeae64129bdf",
        6409: "58ab942a6b9bafed2e2b",
        6574: "dc289799a02eb7355fce",
        6609: "860bab91037517adf3fa",
        6726: "0928bf75dcf201df0d4f",
        6795: "b0beccb4a1a215cf304d",
        6851: "245db615da8ce9049d3d",
        6858: "d31b20568010f28105d8",
        6908: "c8d609813cf3df1d8fb8",
        6958: "d303773d8713e8e47393",
        7005: "f195608a5535f1e17632",
        7009: "dd17fb02ef21b6816fd1",
        7017: "261bb2b8242d132b2733",
        7056: "4aace93de3b9bfa77820",
        7101: "d17a089031a0730b7e2c",
        7232: "68e60fe6e9a7434229ca",
        7430: "e49b6a69cd0243a91807",
        7477: "a2b12d08ea4027923089",
        7829: "8c4a71763e69a1c1dcdf",
        7833: "59e52b1c93ffad954581",
        8009: "439eee2fc3f18629c9fb",
        8025: "e8f82a806d170e4bd963",
        8063: "6e64f1d09144f6c69958",
        8143: "a8b7c4032b78df9884a2",
        8255: "21ae50f98cd24ebea54b",
        8375: "1f9dda1fcba186e509bf",
        8433: "d4a6746258e2a36215fb",
        8438: "627b66911d33dc859875",
        8651: "9d0afd3bdfc74905613c",
        8844: "e81e9ec946b2dd5fff72",
        8925: "700b56603470755ead4b",
        8949: "a684205d017754471cd6",
        9116: "3052f1ee59ace570e644",
        9408: "38479ad1ac8eba2d0088",
        9419: "e0baf22e4a58d6dc6876",
        9443: "042ff11ee2c2806f1b28",
        9472: "2c95145cef9c34dadda1",
        9495: "9deecee0307d80bea23b",
        9556: "31a8618cfb29ed15786e",
        9955: "55a0f0b3d482a76f4c20"
    }[e] + ".js",
    j.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    j.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a),
    t = {},
    r = "federation-modules:",
    j.l = (e, a, n, o) => {
        if (t[e])
            t[e].push(a);
        else {
            var f, d;
            if (void 0 !== n)
                for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                    var i = l[c];
                    if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == r + n) {
                        f = i;
                        break
                    }
                }
            f || (d = !0,
            (f = document.createElement("script")).charset = "utf-8",
            f.timeout = 120,
            j.nc && f.setAttribute("nonce", j.nc),
            f.setAttribute("data-webpack", r + n),
            f.src = e),
            t[e] = [a];
            var s = (a, r) => {
                f.onerror = f.onload = null,
                clearTimeout(b);
                var n = t[e];
                if (delete t[e],
                f.parentNode && f.parentNode.removeChild(f),
                n && n.forEach((e => e(r))),
                a)
                    return a(r)
            }
              , b = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
            }), 12e4);
            f.onerror = s.bind(null, f.onerror),
            f.onload = s.bind(null, f.onload),
            d && document.head.appendChild(f)
        }
    }
    ,
    j.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        j.S = {};
        var e = {}
          , a = {};
        j.I = (t, r) => {
            r || (r = []);
            var n = a[t];
            if (n || (n = a[t] = {}),
            !(r.indexOf(n) >= 0)) {
                if (r.push(n),
                e[t])
                    return e[t];
                j.o(j.S, t) || (j.S[t] = {});
                var o = j.S[t]
                  , f = "federation-modules"
                  , d = (e, a, t, r) => {
                    var n = o[e] = o[e] || {}
                      , d = n[a];
                    (!d || !d.loaded && (!r != !d.eager ? r : f > d.from)) && (n[a] = {
                        get: t,
                        from: f,
                        eager: !!r
                    })
                }
                  , l = [];
                return "default" === t && (d("@fingerprintjs/fingerprintjs", "4.5.1", ( () => j.e(4529).then(( () => () => j(4529))))),
                d("axios", "1.4.0", ( () => j.e(1871).then(( () => () => j(1871))))),
                d("base-x", "5.0.1", ( () => j.e(82).then(( () => () => j(82))))),
                d("centrifuge", "2.8.5", ( () => j.e(6574).then(( () => () => j(6574))))),
                d("classnames", "2.3.2", ( () => j.e(4184).then(( () => () => j(4184))))),
                d("fflate", "0.8.2", ( () => j.e(3778).then(( () => () => j(3778))))),
                d("howler", "2.2.3", ( () => j.e(1766).then(( () => () => j(1766))))),
                d("i18next", "23.2.8", ( () => j.e(6609).then(( () => () => j(6609))))),
                d("jwt-js-decode", "1.8.2", ( () => Promise.all([j.e(2679), j.e(8009)]).then(( () => () => j(2679))))),
                d("markdown-to-jsx", "7.3.2", ( () => Promise.all([j.e(5160), j.e(5535), j.e(9419)]).then(( () => () => j(5576))))),
                d("mobx-react-lite", "3.4.3", ( () => Promise.all([j.e(5160), j.e(5535), j.e(1299), j.e(4548)]).then(( () => () => j(242))))),
                d("mobx", "6.9.0", ( () => j.e(8949).then(( () => () => j(8949))))),
                d("preact/hooks", "0.1.0", ( () => Promise.all([j.e(5160), j.e(396)]).then(( () => () => j(396))))),
                d("preact", "10.15.1", ( () => j.e(6400).then(( () => () => j(6400))))),
                d("react-fast-marquee", "1.6.5", ( () => Promise.all([j.e(5160), j.e(5535), j.e(6958)]).then(( () => () => j(7005))))),
                d("react-i18next", "13.0.1", ( () => Promise.all([j.e(5160), j.e(5535), j.e(8438)]).then(( () => () => j(1072))))),
                d("recursive-diff", "1.0.9", ( () => j.e(7829).then(( () => () => j(7829))))),
                d("uuid", "9.0.0", ( () => j.e(7017).then(( () => () => j(7017)))))),
                e[t] = l.length ? Promise.all(l).then(( () => e[t] = 1)) : 1
            }
        }
    }
    )(),
    ( () => {
        var e;
        j.g.importScripts && (e = j.g.location + "");
        var a = j.g.document;
        if (!e && a && (a.currentScript && (e = a.currentScript.src),
        !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
                for (var r = t.length - 1; r > -1 && !e; )
                    e = t[r--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        j.p = e
    }
    )(),
    n = e => {
        var a = e => e.split(".").map((e => +e == e ? +e : e))
          , t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e)
          , r = t[1] ? a(t[1]) : [];
        return t[2] && (r.length++,
        r.push.apply(r, a(t[2]))),
        t[3] && (r.push([]),
        r.push.apply(r, a(t[3]))),
        r
    }
    ,
    o = (e, a) => {
        e = n(e),
        a = n(a);
        for (var t = 0; ; ) {
            if (t >= e.length)
                return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t]
              , o = (typeof r)[0];
            if (t >= a.length)
                return "u" == o;
            var f = a[t]
              , d = (typeof f)[0];
            if (o != d)
                return "o" == o && "n" == d || "s" == d || "u" == o;
            if ("o" != o && "u" != o && r != f)
                return r < f;
            t++
        }
    }
    ,
    f = e => {
        var a = e[0]
          , t = "";
        if (1 === e.length)
            return "*";
        if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, n = 1; n < e.length; n++)
                r--,
                t += "u" == (typeof (d = e[n]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2,
                d);
            return t
        }
        var o = [];
        for (n = 1; n < e.length; n++) {
            var d = e[n];
            o.push(0 === d ? "not(" + l() + ")" : 1 === d ? "(" + l() + " || " + l() + ")" : 2 === d ? o.pop() + " " + o.pop() : f(d))
        }
        return l();
        function l() {
            return o.pop().replace(/^\((.+)\)$/, "$1")
        }
    }
    ,
    d = (e, a) => {
        if (0 in e) {
            a = n(a);
            var t = e[0]
              , r = t < 0;
            r && (t = -t - 1);
            for (var o = 0, f = 1, l = !0; ; f++,
            o++) {
                var c, i, s = f < e.length ? (typeof e[f])[0] : "";
                if (o >= a.length || "o" == (i = (typeof (c = a[o]))[0]))
                    return !l || ("u" == s ? f > t && !r : "" == s != r);
                if ("u" == i) {
                    if (!l || "u" != s)
                        return !1
                } else if (l)
                    if (s == i)
                        if (f <= t) {
                            if (c != e[f])
                                return !1
                        } else {
                            if (r ? c > e[f] : c < e[f])
                                return !1;
                            c != e[f] && (l = !1)
                        }
                    else if ("s" != s && "n" != s) {
                        if (r || f <= t)
                            return !1;
                        l = !1,
                        f--
                    } else {
                        if (f <= t || i < s != r)
                            return !1;
                        l = !1
                    }
                else
                    "s" != s && "n" != s && (l = !1,
                    f--)
            }
        }
        var b = []
          , u = b.pop.bind(b);
        for (o = 1; o < e.length; o++) {
            var h = e[o];
            b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, a) : !u())
        }
        return !!u()
    }
    ,
    l = (e, a) => {
        var t = e[a];
        return Object.keys(t).reduce(( (e, a) => !e || !t[e].loaded && o(e, a) ? a : e), 0)
    }
    ,
    c = (e, a, t, r) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + f(r) + ")",
    i = (e, a, t, r) => {
        var n = l(e, t);
        return d(r, n) || b(c(e, t, n, r)),
        u(e[t][n])
    }
    ,
    s = (e, a, t) => {
        var r = e[a];
        return (a = Object.keys(r).reduce(( (e, a) => !d(t, a) || e && !o(e, a) ? e : a), 0)) && r[a]
    }
    ,
    b = e => {
        "undefined" != typeof console && console.warn && console.warn(e)
    }
    ,
    u = e => (e.loaded = 1,
    e.get()),
    m = (h = e => function(a, t, r, n) {
        var o = j.I(a);
        return o && o.then ? o.then(e.bind(e, a, j.S[a], t, r, n)) : e(a, j.S[a], t, r, n)
    }
    )(( (e, a, t, r, n) => a && j.o(a, t) ? i(a, 0, t, r) : n())),
    p = h(( (e, a, t, r, n) => {
        var o = a && j.o(a, t) && s(a, t, r);
        return o ? u(o) : n()
    }
    )),
    v = {},
    g = {
        5160: () => m("default", "preact", [1, 10, 15, 1], ( () => j.e(6400).then(( () => () => j(6400))))),
        5535: () => m("default", "preact/hooks", [1, 10, 0, 0], ( () => j.e(552).then(( () => () => j(396))))),
        1299: () => m("default", "mobx", [1, 6, 9, 0], ( () => j.e(8949).then(( () => () => j(8949))))),
        257: () => p("default", "@fingerprintjs/fingerprintjs", [1, 4, 5, 0], ( () => j.e(4529).then(( () => () => j(4529))))),
        286: () => p("default", "react-i18next", [1, 13, 0, 1], ( () => j.e(1072).then(( () => () => j(1072))))),
        529: () => p("default", "axios", [1, 1, 4, 0], ( () => j.e(1871).then(( () => () => j(1871))))),
        3868: () => p("default", "i18next", [1, 23, 2, 3], ( () => j.e(6609).then(( () => () => j(6609))))),
        4166: () => p("default", "howler", [1, 2, 2, 3], ( () => j.e(1766).then(( () => () => j(1766))))),
        8534: () => p("default", "jwt-js-decode", [1, 1, 8, 2], ( () => Promise.all([j.e(2679), j.e(8009)]).then(( () => () => j(2679))))),
        2734: () => m("default", "preact/hooks", [1, 10, 15, 1], ( () => j.e(552).then(( () => () => j(396))))),
        4977: () => m("default", "mobx-react-lite", [1, 3, 4, 3], ( () => j.e(242).then(( () => () => j(242))))),
        5103: () => p("default", "uuid", [1, 9, 0, 0], ( () => j.e(7017).then(( () => () => j(7017))))),
        7101: () => p("default", "classnames", [1, 2, 3, 2], ( () => j.e(4184).then(( () => () => j(4184))))),
        7670: () => p("default", "base-x", [1, 5, 0, 1], ( () => j.e(82).then(( () => () => j(82))))),
        2274: () => p("default", "react-fast-marquee", [1, 1, 6, 5], ( () => j.e(7005).then(( () => () => j(7005))))),
        6289: () => p("default", "markdown-to-jsx", [1, 7, 3, 2], ( () => j.e(5576).then(( () => () => j(5576))))),
        6444: () => p("default", "centrifuge", [1, 2, 7, 6], ( () => j.e(6574).then(( () => () => j(6574))))),
        509: () => p("default", "recursive-diff", [1, 1, 0, 9], ( () => j.e(7829).then(( () => () => j(7829))))),
        5202: () => p("default", "fflate", [2, 0, 8, 2], ( () => j.e(3778).then(( () => () => j(3778)))))
    },
    P = {
        431: [6444],
        509: [509],
        1154: [2734, 4977],
        1299: [1299],
        3922: [257, 286, 529, 3868, 4166, 8534],
        4819: [5202],
        4992: [7670],
        5103: [5103],
        5160: [5160],
        5266: [6289],
        5535: [5535],
        7101: [7101],
        8925: [2274]
    },
    j.f.consumes = (e, a) => {
        j.o(P, e) && P[e].forEach((e => {
            if (j.o(v, e))
                return a.push(v[e]);
            var t = a => {
                v[e] = 0,
                j.m[e] = t => {
                    delete j.c[e],
                    t.exports = a()
                }
            }
              , r = a => {
                delete v[e],
                j.m[e] = t => {
                    throw delete j.c[e],
                    a
                }
            }
            ;
            try {
                var n = g[e]();
                n.then ? a.push(v[e] = n.then(t).catch(r)) : t(n)
            } catch (e) {
                r(e)
            }
        }
        ))
    }
    ,
    ( () => {
        j.b = document.baseURI || self.location.href;
        var e = {
            3052: 0
        };
        j.f.j = (a, t) => {
            var r = j.o(e, a) ? e[a] : void 0;
            if (0 !== r)
                if (r)
                    t.push(r[2]);
                else if (/^(5(09|103|160|535)|1154|1299|431|7101)$/.test(a))
                    e[a] = 0;
                else {
                    var n = new Promise(( (t, n) => r = e[a] = [t, n]));
                    t.push(r[2] = n);
                    var o = j.p + j.u(a)
                      , f = new Error;
                    j.l(o, (t => {
                        if (j.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0),
                        r)) {
                            var n = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            f.message = "Loading chunk " + a + " failed.\n(" + n + ": " + o + ")",
                            f.name = "ChunkLoadError",
                            f.type = n,
                            f.request = o,
                            r[1](f)
                        }
                    }
                    ), "chunk-" + a, a)
                }
        }
        ;
        var a = (a, t) => {
            var r, n, o = t[0], f = t[1], d = t[2], l = 0;
            if (o.some((a => 0 !== e[a]))) {
                for (r in f)
                    j.o(f, r) && (j.m[r] = f[r]);
                d && d(j)
            }
            for (a && a(t); l < o.length; l++)
                n = o[l],
                j.o(e, n) && e[n] && e[n][0](),
                e[n] = 0
        }
          , t = self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || [];
        t.forEach(a.bind(null, 0)),
        t.push = a.bind(null, t.push.bind(t))
    }
    )(),
    j.nc = void 0;
    var x = j(3795);
    fm = x
}
)();
