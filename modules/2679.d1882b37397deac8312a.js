(self.webpackChunkfederation_modules = self.webpackChunkfederation_modules || []).push([[2679], {
    2679: function(t, e, r) {
        !function(t) {
            "use strict";
            function e(t) {
                let e = t.length;
                for (; --e >= 0; )
                    t[e] = 0
            }
            const n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
              , i = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
              , a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
              , s = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
              , o = new Array(576);
            e(o);
            const l = new Array(60);
            e(l);
            const h = new Array(512);
            e(h);
            const d = new Array(256);
            e(d);
            const u = new Array(29);
            e(u);
            const c = new Array(30);
            function f(t, e, r, n, i) {
                this.static_tree = t,
                this.extra_bits = e,
                this.extra_base = r,
                this.elems = n,
                this.max_length = i,
                this.has_stree = t && t.length
            }
            let _, g, w;
            function p(t, e) {
                this.dyn_tree = t,
                this.max_code = 0,
                this.stat_desc = e
            }
            e(c);
            const m = t => t < 256 ? h[t] : h[256 + (t >>> 7)]
              , b = (t, e) => {
                t.pending_buf[t.pending++] = 255 & e,
                t.pending_buf[t.pending++] = e >>> 8 & 255
            }
              , y = (t, e, r) => {
                t.bi_valid > 16 - r ? (t.bi_buf |= e << t.bi_valid & 65535,
                b(t, t.bi_buf),
                t.bi_buf = e >> 16 - t.bi_valid,
                t.bi_valid += r - 16) : (t.bi_buf |= e << t.bi_valid & 65535,
                t.bi_valid += r)
            }
              , k = (t, e, r) => {
                y(t, r[2 * e], r[2 * e + 1])
            }
              , v = (t, e) => {
                let r = 0;
                do {
                    r |= 1 & t,
                    t >>>= 1,
                    r <<= 1
                } while (--e > 0);
                return r >>> 1
            }
              , x = (t, e, r) => {
                const n = new Array(16);
                let i, a, s = 0;
                for (i = 1; i <= 15; i++)
                    s = s + r[i - 1] << 1,
                    n[i] = s;
                for (a = 0; a <= e; a++) {
                    let e = t[2 * a + 1];
                    0 !== e && (t[2 * a] = v(n[e]++, e))
                }
            }
              , S = t => {
                let e;
                for (e = 0; e < 286; e++)
                    t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < 30; e++)
                    t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < 19; e++)
                    t.bl_tree[2 * e] = 0;
                t.dyn_ltree[512] = 1,
                t.opt_len = t.static_len = 0,
                t.sym_next = t.matches = 0
            }
              , E = t => {
                t.bi_valid > 8 ? b(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
                t.bi_buf = 0,
                t.bi_valid = 0
            }
              , A = (t, e, r, n) => {
                const i = 2 * e
                  , a = 2 * r;
                return t[i] < t[a] || t[i] === t[a] && n[e] <= n[r]
            }
              , z = (t, e, r) => {
                const n = t.heap[r];
                let i = r << 1;
                for (; i <= t.heap_len && (i < t.heap_len && A(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
                !A(e, n, t.heap[i], t.depth)); )
                    t.heap[r] = t.heap[i],
                    r = i,
                    i <<= 1;
                t.heap[r] = n
            }
              , R = (t, e, r) => {
                let a, s, o, l, h = 0;
                if (0 !== t.sym_next)
                    do {
                        a = 255 & t.pending_buf[t.sym_buf + h++],
                        a += (255 & t.pending_buf[t.sym_buf + h++]) << 8,
                        s = t.pending_buf[t.sym_buf + h++],
                        0 === a ? k(t, s, e) : (o = d[s],
                        k(t, o + 256 + 1, e),
                        l = n[o],
                        0 !== l && (s -= u[o],
                        y(t, s, l)),
                        a--,
                        o = m(a),
                        k(t, o, r),
                        l = i[o],
                        0 !== l && (a -= c[o],
                        y(t, a, l)))
                    } while (h < t.sym_next);
                k(t, 256, e)
            }
              , C = (t, e) => {
                const r = e.dyn_tree
                  , n = e.stat_desc.static_tree
                  , i = e.stat_desc.has_stree
                  , a = e.stat_desc.elems;
                let s, o, l, h = -1;
                for (t.heap_len = 0,
                t.heap_max = 573,
                s = 0; s < a; s++)
                    0 !== r[2 * s] ? (t.heap[++t.heap_len] = h = s,
                    t.depth[s] = 0) : r[2 * s + 1] = 0;
                for (; t.heap_len < 2; )
                    l = t.heap[++t.heap_len] = h < 2 ? ++h : 0,
                    r[2 * l] = 1,
                    t.depth[l] = 0,
                    t.opt_len--,
                    i && (t.static_len -= n[2 * l + 1]);
                for (e.max_code = h,
                s = t.heap_len >> 1; s >= 1; s--)
                    z(t, r, s);
                l = a;
                do {
                    s = t.heap[1],
                    t.heap[1] = t.heap[t.heap_len--],
                    z(t, r, 1),
                    o = t.heap[1],
                    t.heap[--t.heap_max] = s,
                    t.heap[--t.heap_max] = o,
                    r[2 * l] = r[2 * s] + r[2 * o],
                    t.depth[l] = (t.depth[s] >= t.depth[o] ? t.depth[s] : t.depth[o]) + 1,
                    r[2 * s + 1] = r[2 * o + 1] = l,
                    t.heap[1] = l++,
                    z(t, r, 1)
                } while (t.heap_len >= 2);
                t.heap[--t.heap_max] = t.heap[1],
                ( (t, e) => {
                    const r = e.dyn_tree
                      , n = e.max_code
                      , i = e.stat_desc.static_tree
                      , a = e.stat_desc.has_stree
                      , s = e.stat_desc.extra_bits
                      , o = e.stat_desc.extra_base
                      , l = e.stat_desc.max_length;
                    let h, d, u, c, f, _, g = 0;
                    for (c = 0; c <= 15; c++)
                        t.bl_count[c] = 0;
                    for (r[2 * t.heap[t.heap_max] + 1] = 0,
                    h = t.heap_max + 1; h < 573; h++)
                        d = t.heap[h],
                        c = r[2 * r[2 * d + 1] + 1] + 1,
                        c > l && (c = l,
                        g++),
                        r[2 * d + 1] = c,
                        d > n || (t.bl_count[c]++,
                        f = 0,
                        d >= o && (f = s[d - o]),
                        _ = r[2 * d],
                        t.opt_len += _ * (c + f),
                        a && (t.static_len += _ * (i[2 * d + 1] + f)));
                    if (0 !== g) {
                        do {
                            for (c = l - 1; 0 === t.bl_count[c]; )
                                c--;
                            t.bl_count[c]--,
                            t.bl_count[c + 1] += 2,
                            t.bl_count[l]--,
                            g -= 2
                        } while (g > 0);
                        for (c = l; 0 !== c; c--)
                            for (d = t.bl_count[c]; 0 !== d; )
                                u = t.heap[--h],
                                u > n || (r[2 * u + 1] !== c && (t.opt_len += (c - r[2 * u + 1]) * r[2 * u],
                                r[2 * u + 1] = c),
                                d--)
                    }
                }
                )(t, e),
                x(r, h, t.bl_count)
            }
              , U = (t, e, r) => {
                let n, i, a = -1, s = e[1], o = 0, l = 7, h = 4;
                for (0 === s && (l = 138,
                h = 3),
                e[2 * (r + 1) + 1] = 65535,
                n = 0; n <= r; n++)
                    i = s,
                    s = e[2 * (n + 1) + 1],
                    ++o < l && i === s || (o < h ? t.bl_tree[2 * i] += o : 0 !== i ? (i !== a && t.bl_tree[2 * i]++,
                    t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++,
                    o = 0,
                    a = i,
                    0 === s ? (l = 138,
                    h = 3) : i === s ? (l = 6,
                    h = 3) : (l = 7,
                    h = 4))
            }
              , T = (t, e, r) => {
                let n, i, a = -1, s = e[1], o = 0, l = 7, h = 4;
                for (0 === s && (l = 138,
                h = 3),
                n = 0; n <= r; n++)
                    if (i = s,
                    s = e[2 * (n + 1) + 1],
                    !(++o < l && i === s)) {
                        if (o < h)
                            do {
                                k(t, i, t.bl_tree)
                            } while (0 != --o);
                        else
                            0 !== i ? (i !== a && (k(t, i, t.bl_tree),
                            o--),
                            k(t, 16, t.bl_tree),
                            y(t, o - 3, 2)) : o <= 10 ? (k(t, 17, t.bl_tree),
                            y(t, o - 3, 3)) : (k(t, 18, t.bl_tree),
                            y(t, o - 11, 7));
                        o = 0,
                        a = i,
                        0 === s ? (l = 138,
                        h = 3) : i === s ? (l = 6,
                        h = 3) : (l = 7,
                        h = 4)
                    }
            }
            ;
            let D = !1;
            const N = (t, e, r, n) => {
                y(t, 0 + (n ? 1 : 0), 3),
                E(t),
                b(t, r),
                b(t, ~r),
                r && t.pending_buf.set(t.window.subarray(e, e + r), t.pending),
                t.pending += r
            }
            ;
            var I = {
                _tr_init: t => {
                    D || (( () => {
                        let t, e, r, s, p;
                        const m = new Array(16);
                        for (r = 0,
                        s = 0; s < 28; s++)
                            for (u[s] = r,
                            t = 0; t < 1 << n[s]; t++)
                                d[r++] = s;
                        for (d[r - 1] = s,
                        p = 0,
                        s = 0; s < 16; s++)
                            for (c[s] = p,
                            t = 0; t < 1 << i[s]; t++)
                                h[p++] = s;
                        for (p >>= 7; s < 30; s++)
                            for (c[s] = p << 7,
                            t = 0; t < 1 << i[s] - 7; t++)
                                h[256 + p++] = s;
                        for (e = 0; e <= 15; e++)
                            m[e] = 0;
                        for (t = 0; t <= 143; )
                            o[2 * t + 1] = 8,
                            t++,
                            m[8]++;
                        for (; t <= 255; )
                            o[2 * t + 1] = 9,
                            t++,
                            m[9]++;
                        for (; t <= 279; )
                            o[2 * t + 1] = 7,
                            t++,
                            m[7]++;
                        for (; t <= 287; )
                            o[2 * t + 1] = 8,
                            t++,
                            m[8]++;
                        for (x(o, 287, m),
                        t = 0; t < 30; t++)
                            l[2 * t + 1] = 5,
                            l[2 * t] = v(t, 5);
                        _ = new f(o,n,257,286,15),
                        g = new f(l,i,0,30,15),
                        w = new f(new Array(0),a,0,19,7)
                    }
                    )(),
                    D = !0),
                    t.l_desc = new p(t.dyn_ltree,_),
                    t.d_desc = new p(t.dyn_dtree,g),
                    t.bl_desc = new p(t.bl_tree,w),
                    t.bi_buf = 0,
                    t.bi_valid = 0,
                    S(t)
                }
                ,
                _tr_stored_block: N,
                _tr_flush_block: (t, e, r, n) => {
                    let i, a, h = 0;
                    t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = (t => {
                        let e, r = 4093624447;
                        for (e = 0; e <= 31; e++,
                        r >>>= 1)
                            if (1 & r && 0 !== t.dyn_ltree[2 * e])
                                return 0;
                        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                            return 1;
                        for (e = 32; e < 256; e++)
                            if (0 !== t.dyn_ltree[2 * e])
                                return 1;
                        return 0
                    }
                    )(t)),
                    C(t, t.l_desc),
                    C(t, t.d_desc),
                    h = (t => {
                        let e;
                        for (U(t, t.dyn_ltree, t.l_desc.max_code),
                        U(t, t.dyn_dtree, t.d_desc.max_code),
                        C(t, t.bl_desc),
                        e = 18; e >= 3 && 0 === t.bl_tree[2 * s[e] + 1]; e--)
                            ;
                        return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
                        e
                    }
                    )(t),
                    i = t.opt_len + 3 + 7 >>> 3,
                    a = t.static_len + 3 + 7 >>> 3,
                    a <= i && (i = a)) : i = a = r + 5,
                    r + 4 <= i && -1 !== e ? N(t, e, r, n) : 4 === t.strategy || a === i ? (y(t, 2 + (n ? 1 : 0), 3),
                    R(t, o, l)) : (y(t, 4 + (n ? 1 : 0), 3),
                    ( (t, e, r, n) => {
                        let i;
                        for (y(t, e - 257, 5),
                        y(t, r - 1, 5),
                        y(t, n - 4, 4),
                        i = 0; i < n; i++)
                            y(t, t.bl_tree[2 * s[i] + 1], 3);
                        T(t, t.dyn_ltree, e - 1),
                        T(t, t.dyn_dtree, r - 1)
                    }
                    )(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, h + 1),
                    R(t, t.dyn_ltree, t.dyn_dtree)),
                    S(t),
                    n && E(t)
                }
                ,
                _tr_tally: (t, e, r) => (t.pending_buf[t.sym_buf + t.sym_next++] = e,
                t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8,
                t.pending_buf[t.sym_buf + t.sym_next++] = r,
                0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++,
                e--,
                t.dyn_ltree[2 * (d[r] + 256 + 1)]++,
                t.dyn_dtree[2 * m(e)]++),
                t.sym_next === t.sym_end),
                _tr_align: t => {
                    y(t, 2, 3),
                    k(t, 256, o),
                    (t => {
                        16 === t.bi_valid ? (b(t, t.bi_buf),
                        t.bi_buf = 0,
                        t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf,
                        t.bi_buf >>= 8,
                        t.bi_valid -= 8)
                    }
                    )(t)
                }
            }
              , Z = (t, e, r, n) => {
                let i = 65535 & t | 0
                  , a = t >>> 16 & 65535 | 0
                  , s = 0;
                for (; 0 !== r; ) {
                    s = r > 2e3 ? 2e3 : r,
                    r -= s;
                    do {
                        i = i + e[n++] | 0,
                        a = a + i | 0
                    } while (--s);
                    i %= 65521,
                    a %= 65521
                }
                return i | a << 16 | 0
            }
            ;
            const B = new Uint32Array(( () => {
                let t, e = [];
                for (var r = 0; r < 256; r++) {
                    t = r;
                    for (var n = 0; n < 8; n++)
                        t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                    e[r] = t
                }
                return e
            }
            )());
            var O = (t, e, r, n) => {
                const i = B
                  , a = n + r;
                t ^= -1;
                for (let r = n; r < a; r++)
                    t = t >>> 8 ^ i[255 & (t ^ e[r])];
                return -1 ^ t
            }
              , L = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
              , H = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_MEM_ERROR: -4,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            };
            const {_tr_init: F, _tr_stored_block: M, _tr_flush_block: P, _tr_tally: j, _tr_align: K} = I
              , {Z_NO_FLUSH: G, Z_PARTIAL_FLUSH: J, Z_FULL_FLUSH: Y, Z_FINISH: V, Z_BLOCK: $, Z_OK: W, Z_STREAM_END: q, Z_STREAM_ERROR: X, Z_DATA_ERROR: Q, Z_BUF_ERROR: tt, Z_DEFAULT_COMPRESSION: et, Z_FILTERED: rt, Z_HUFFMAN_ONLY: nt, Z_RLE: it, Z_FIXED: at, Z_DEFAULT_STRATEGY: st, Z_UNKNOWN: ot, Z_DEFLATED: lt} = H
              , ht = 258
              , dt = 262
              , ut = 42
              , ct = 113
              , ft = 666
              , _t = (t, e) => (t.msg = L[e],
            e)
              , gt = t => 2 * t - (t > 4 ? 9 : 0)
              , wt = t => {
                let e = t.length;
                for (; --e >= 0; )
                    t[e] = 0
            }
              , pt = t => {
                let e, r, n, i = t.w_size;
                e = t.hash_size,
                n = e;
                do {
                    r = t.head[--n],
                    t.head[n] = r >= i ? r - i : 0
                } while (--e);
                e = i,
                n = e;
                do {
                    r = t.prev[--n],
                    t.prev[n] = r >= i ? r - i : 0
                } while (--e)
            }
            ;
            let mt = (t, e, r) => (e << t.hash_shift ^ r) & t.hash_mask;
            const bt = t => {
                const e = t.state;
                let r = e.pending;
                r > t.avail_out && (r = t.avail_out),
                0 !== r && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + r), t.next_out),
                t.next_out += r,
                e.pending_out += r,
                t.total_out += r,
                t.avail_out -= r,
                e.pending -= r,
                0 === e.pending && (e.pending_out = 0))
            }
              , yt = (t, e) => {
                P(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
                t.block_start = t.strstart,
                bt(t.strm)
            }
              , kt = (t, e) => {
                t.pending_buf[t.pending++] = e
            }
              , vt = (t, e) => {
                t.pending_buf[t.pending++] = e >>> 8 & 255,
                t.pending_buf[t.pending++] = 255 & e
            }
              , xt = (t, e, r, n) => {
                let i = t.avail_in;
                return i > n && (i = n),
                0 === i ? 0 : (t.avail_in -= i,
                e.set(t.input.subarray(t.next_in, t.next_in + i), r),
                1 === t.state.wrap ? t.adler = Z(t.adler, e, i, r) : 2 === t.state.wrap && (t.adler = O(t.adler, e, i, r)),
                t.next_in += i,
                t.total_in += i,
                i)
            }
              , St = (t, e) => {
                let r, n, i = t.max_chain_length, a = t.strstart, s = t.prev_length, o = t.nice_match;
                const l = t.strstart > t.w_size - dt ? t.strstart - (t.w_size - dt) : 0
                  , h = t.window
                  , d = t.w_mask
                  , u = t.prev
                  , c = t.strstart + ht;
                let f = h[a + s - 1]
                  , _ = h[a + s];
                t.prev_length >= t.good_match && (i >>= 2),
                o > t.lookahead && (o = t.lookahead);
                do {
                    if (r = e,
                    h[r + s] === _ && h[r + s - 1] === f && h[r] === h[a] && h[++r] === h[a + 1]) {
                        a += 2,
                        r++;
                        do {} while (h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && h[++a] === h[++r] && a < c);
                        if (n = ht - (c - a),
                        a = c - ht,
                        n > s) {
                            if (t.match_start = e,
                            s = n,
                            n >= o)
                                break;
                            f = h[a + s - 1],
                            _ = h[a + s]
                        }
                    }
                } while ((e = u[e & d]) > l && 0 != --i);
                return s <= t.lookahead ? s : t.lookahead
            }
              , Et = t => {
                const e = t.w_size;
                let r, n, i;
                do {
                    if (n = t.window_size - t.lookahead - t.strstart,
                    t.strstart >= e + (e - dt) && (t.window.set(t.window.subarray(e, e + e - n), 0),
                    t.match_start -= e,
                    t.strstart -= e,
                    t.block_start -= e,
                    t.insert > t.strstart && (t.insert = t.strstart),
                    pt(t),
                    n += e),
                    0 === t.strm.avail_in)
                        break;
                    if (r = xt(t.strm, t.window, t.strstart + t.lookahead, n),
                    t.lookahead += r,
                    t.lookahead + t.insert >= 3)
                        for (i = t.strstart - t.insert,
                        t.ins_h = t.window[i],
                        t.ins_h = mt(t, t.ins_h, t.window[i + 1]); t.insert && (t.ins_h = mt(t, t.ins_h, t.window[i + 3 - 1]),
                        t.prev[i & t.w_mask] = t.head[t.ins_h],
                        t.head[t.ins_h] = i,
                        i++,
                        t.insert--,
                        !(t.lookahead + t.insert < 3)); )
                            ;
                } while (t.lookahead < dt && 0 !== t.strm.avail_in)
            }
              , At = (t, e) => {
                let r, n, i, a = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, s = 0, o = t.strm.avail_in;
                do {
                    if (r = 65535,
                    i = t.bi_valid + 42 >> 3,
                    t.strm.avail_out < i)
                        break;
                    if (i = t.strm.avail_out - i,
                    n = t.strstart - t.block_start,
                    r > n + t.strm.avail_in && (r = n + t.strm.avail_in),
                    r > i && (r = i),
                    r < a && (0 === r && e !== V || e === G || r !== n + t.strm.avail_in))
                        break;
                    s = e === V && r === n + t.strm.avail_in ? 1 : 0,
                    M(t, 0, 0, s),
                    t.pending_buf[t.pending - 4] = r,
                    t.pending_buf[t.pending - 3] = r >> 8,
                    t.pending_buf[t.pending - 2] = ~r,
                    t.pending_buf[t.pending - 1] = ~r >> 8,
                    bt(t.strm),
                    n && (n > r && (n = r),
                    t.strm.output.set(t.window.subarray(t.block_start, t.block_start + n), t.strm.next_out),
                    t.strm.next_out += n,
                    t.strm.avail_out -= n,
                    t.strm.total_out += n,
                    t.block_start += n,
                    r -= n),
                    r && (xt(t.strm, t.strm.output, t.strm.next_out, r),
                    t.strm.next_out += r,
                    t.strm.avail_out -= r,
                    t.strm.total_out += r)
                } while (0 === s);
                return o -= t.strm.avail_in,
                o && (o >= t.w_size ? (t.matches = 2,
                t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0),
                t.strstart = t.w_size,
                t.insert = t.strstart) : (t.window_size - t.strstart <= o && (t.strstart -= t.w_size,
                t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
                t.matches < 2 && t.matches++,
                t.insert > t.strstart && (t.insert = t.strstart)),
                t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart),
                t.strstart += o,
                t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o),
                t.block_start = t.strstart),
                t.high_water < t.strstart && (t.high_water = t.strstart),
                s ? 4 : e !== G && e !== V && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (i = t.window_size - t.strstart,
                t.strm.avail_in > i && t.block_start >= t.w_size && (t.block_start -= t.w_size,
                t.strstart -= t.w_size,
                t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
                t.matches < 2 && t.matches++,
                i += t.w_size,
                t.insert > t.strstart && (t.insert = t.strstart)),
                i > t.strm.avail_in && (i = t.strm.avail_in),
                i && (xt(t.strm, t.window, t.strstart, i),
                t.strstart += i,
                t.insert += i > t.w_size - t.insert ? t.w_size - t.insert : i),
                t.high_water < t.strstart && (t.high_water = t.strstart),
                i = t.bi_valid + 42 >> 3,
                i = t.pending_buf_size - i > 65535 ? 65535 : t.pending_buf_size - i,
                a = i > t.w_size ? t.w_size : i,
                n = t.strstart - t.block_start,
                (n >= a || (n || e === V) && e !== G && 0 === t.strm.avail_in && n <= i) && (r = n > i ? i : n,
                s = e === V && 0 === t.strm.avail_in && r === n ? 1 : 0,
                M(t, t.block_start, r, s),
                t.block_start += r,
                bt(t.strm)),
                s ? 3 : 1)
            }
              , zt = (t, e) => {
                let r, n;
                for (; ; ) {
                    if (t.lookahead < dt) {
                        if (Et(t),
                        t.lookahead < dt && e === G)
                            return 1;
                        if (0 === t.lookahead)
                            break
                    }
                    if (r = 0,
                    t.lookahead >= 3 && (t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                    r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = t.strstart),
                    0 !== r && t.strstart - r <= t.w_size - dt && (t.match_length = St(t, r)),
                    t.match_length >= 3)
                        if (n = j(t, t.strstart - t.match_start, t.match_length - 3),
                        t.lookahead -= t.match_length,
                        t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                            t.match_length--;
                            do {
                                t.strstart++,
                                t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                                r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                                t.head[t.ins_h] = t.strstart
                            } while (0 != --t.match_length);
                            t.strstart++
                        } else
                            t.strstart += t.match_length,
                            t.match_length = 0,
                            t.ins_h = t.window[t.strstart],
                            t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 1]);
                    else
                        n = j(t, 0, t.window[t.strstart]),
                        t.lookahead--,
                        t.strstart++;
                    if (n && (yt(t, !1),
                    0 === t.strm.avail_out))
                        return 1
                }
                return t.insert = t.strstart < 2 ? t.strstart : 2,
                e === V ? (yt(t, !0),
                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (yt(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
            }
              , Rt = (t, e) => {
                let r, n, i;
                for (; ; ) {
                    if (t.lookahead < dt) {
                        if (Et(t),
                        t.lookahead < dt && e === G)
                            return 1;
                        if (0 === t.lookahead)
                            break
                    }
                    if (r = 0,
                    t.lookahead >= 3 && (t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                    r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = t.strstart),
                    t.prev_length = t.match_length,
                    t.prev_match = t.match_start,
                    t.match_length = 2,
                    0 !== r && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - dt && (t.match_length = St(t, r),
                    t.match_length <= 5 && (t.strategy === rt || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)),
                    t.prev_length >= 3 && t.match_length <= t.prev_length) {
                        i = t.strstart + t.lookahead - 3,
                        n = j(t, t.strstart - 1 - t.prev_match, t.prev_length - 3),
                        t.lookahead -= t.prev_length - 1,
                        t.prev_length -= 2;
                        do {
                            ++t.strstart <= i && (t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                            r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                            t.head[t.ins_h] = t.strstart)
                        } while (0 != --t.prev_length);
                        if (t.match_available = 0,
                        t.match_length = 2,
                        t.strstart++,
                        n && (yt(t, !1),
                        0 === t.strm.avail_out))
                            return 1
                    } else if (t.match_available) {
                        if (n = j(t, 0, t.window[t.strstart - 1]),
                        n && yt(t, !1),
                        t.strstart++,
                        t.lookahead--,
                        0 === t.strm.avail_out)
                            return 1
                    } else
                        t.match_available = 1,
                        t.strstart++,
                        t.lookahead--
                }
                return t.match_available && (n = j(t, 0, t.window[t.strstart - 1]),
                t.match_available = 0),
                t.insert = t.strstart < 2 ? t.strstart : 2,
                e === V ? (yt(t, !0),
                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (yt(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
            }
            ;
            function Ct(t, e, r, n, i) {
                this.good_length = t,
                this.max_lazy = e,
                this.nice_length = r,
                this.max_chain = n,
                this.func = i
            }
            const Ut = [new Ct(0,0,0,0,At), new Ct(4,4,8,4,zt), new Ct(4,5,16,8,zt), new Ct(4,6,32,32,zt), new Ct(4,4,16,16,Rt), new Ct(8,16,32,32,Rt), new Ct(8,16,128,128,Rt), new Ct(8,32,128,256,Rt), new Ct(32,128,258,1024,Rt), new Ct(32,258,258,4096,Rt)];
            function Tt() {
                this.strm = null,
                this.status = 0,
                this.pending_buf = null,
                this.pending_buf_size = 0,
                this.pending_out = 0,
                this.pending = 0,
                this.wrap = 0,
                this.gzhead = null,
                this.gzindex = 0,
                this.method = lt,
                this.last_flush = -1,
                this.w_size = 0,
                this.w_bits = 0,
                this.w_mask = 0,
                this.window = null,
                this.window_size = 0,
                this.prev = null,
                this.head = null,
                this.ins_h = 0,
                this.hash_size = 0,
                this.hash_bits = 0,
                this.hash_mask = 0,
                this.hash_shift = 0,
                this.block_start = 0,
                this.match_length = 0,
                this.prev_match = 0,
                this.match_available = 0,
                this.strstart = 0,
                this.match_start = 0,
                this.lookahead = 0,
                this.prev_length = 0,
                this.max_chain_length = 0,
                this.max_lazy_match = 0,
                this.level = 0,
                this.strategy = 0,
                this.good_match = 0,
                this.nice_match = 0,
                this.dyn_ltree = new Uint16Array(1146),
                this.dyn_dtree = new Uint16Array(122),
                this.bl_tree = new Uint16Array(78),
                wt(this.dyn_ltree),
                wt(this.dyn_dtree),
                wt(this.bl_tree),
                this.l_desc = null,
                this.d_desc = null,
                this.bl_desc = null,
                this.bl_count = new Uint16Array(16),
                this.heap = new Uint16Array(573),
                wt(this.heap),
                this.heap_len = 0,
                this.heap_max = 0,
                this.depth = new Uint16Array(573),
                wt(this.depth),
                this.sym_buf = 0,
                this.lit_bufsize = 0,
                this.sym_next = 0,
                this.sym_end = 0,
                this.opt_len = 0,
                this.static_len = 0,
                this.matches = 0,
                this.insert = 0,
                this.bi_buf = 0,
                this.bi_valid = 0
            }
            const Dt = t => {
                if (!t)
                    return 1;
                const e = t.state;
                return !e || e.strm !== t || e.status !== ut && 57 !== e.status && 69 !== e.status && 73 !== e.status && 91 !== e.status && 103 !== e.status && e.status !== ct && e.status !== ft ? 1 : 0
            }
              , Nt = t => {
                if (Dt(t))
                    return _t(t, X);
                t.total_in = t.total_out = 0,
                t.data_type = ot;
                const e = t.state;
                return e.pending = 0,
                e.pending_out = 0,
                e.wrap < 0 && (e.wrap = -e.wrap),
                e.status = 2 === e.wrap ? 57 : e.wrap ? ut : ct,
                t.adler = 2 === e.wrap ? 0 : 1,
                e.last_flush = -2,
                F(e),
                W
            }
              , It = t => {
                const e = Nt(t);
                var r;
                return e === W && ((r = t.state).window_size = 2 * r.w_size,
                wt(r.head),
                r.max_lazy_match = Ut[r.level].max_lazy,
                r.good_match = Ut[r.level].good_length,
                r.nice_match = Ut[r.level].nice_length,
                r.max_chain_length = Ut[r.level].max_chain,
                r.strstart = 0,
                r.block_start = 0,
                r.lookahead = 0,
                r.insert = 0,
                r.match_length = r.prev_length = 2,
                r.match_available = 0,
                r.ins_h = 0),
                e
            }
              , Zt = (t, e, r, n, i, a) => {
                if (!t)
                    return X;
                let s = 1;
                if (e === et && (e = 6),
                n < 0 ? (s = 0,
                n = -n) : n > 15 && (s = 2,
                n -= 16),
                i < 1 || i > 9 || r !== lt || n < 8 || n > 15 || e < 0 || e > 9 || a < 0 || a > at || 8 === n && 1 !== s)
                    return _t(t, X);
                8 === n && (n = 9);
                const o = new Tt;
                return t.state = o,
                o.strm = t,
                o.status = ut,
                o.wrap = s,
                o.gzhead = null,
                o.w_bits = n,
                o.w_size = 1 << o.w_bits,
                o.w_mask = o.w_size - 1,
                o.hash_bits = i + 7,
                o.hash_size = 1 << o.hash_bits,
                o.hash_mask = o.hash_size - 1,
                o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3),
                o.window = new Uint8Array(2 * o.w_size),
                o.head = new Uint16Array(o.hash_size),
                o.prev = new Uint16Array(o.w_size),
                o.lit_bufsize = 1 << i + 6,
                o.pending_buf_size = 4 * o.lit_bufsize,
                o.pending_buf = new Uint8Array(o.pending_buf_size),
                o.sym_buf = o.lit_bufsize,
                o.sym_end = 3 * (o.lit_bufsize - 1),
                o.level = e,
                o.strategy = a,
                o.method = r,
                It(t)
            }
            ;
            var Bt = {
                deflateInit: (t, e) => Zt(t, e, lt, 15, 8, st),
                deflateInit2: Zt,
                deflateReset: It,
                deflateResetKeep: Nt,
                deflateSetHeader: (t, e) => Dt(t) || 2 !== t.state.wrap ? X : (t.state.gzhead = e,
                W),
                deflate: (t, e) => {
                    if (Dt(t) || e > $ || e < 0)
                        return t ? _t(t, X) : X;
                    const r = t.state;
                    if (!t.output || 0 !== t.avail_in && !t.input || r.status === ft && e !== V)
                        return _t(t, 0 === t.avail_out ? tt : X);
                    const n = r.last_flush;
                    if (r.last_flush = e,
                    0 !== r.pending) {
                        if (bt(t),
                        0 === t.avail_out)
                            return r.last_flush = -1,
                            W
                    } else if (0 === t.avail_in && gt(e) <= gt(n) && e !== V)
                        return _t(t, tt);
                    if (r.status === ft && 0 !== t.avail_in)
                        return _t(t, tt);
                    if (r.status === ut && 0 === r.wrap && (r.status = ct),
                    r.status === ut) {
                        let e = lt + (r.w_bits - 8 << 4) << 8
                          , n = -1;
                        if (n = r.strategy >= nt || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3,
                        e |= n << 6,
                        0 !== r.strstart && (e |= 32),
                        e += 31 - e % 31,
                        vt(r, e),
                        0 !== r.strstart && (vt(r, t.adler >>> 16),
                        vt(r, 65535 & t.adler)),
                        t.adler = 1,
                        r.status = ct,
                        bt(t),
                        0 !== r.pending)
                            return r.last_flush = -1,
                            W
                    }
                    if (57 === r.status)
                        if (t.adler = 0,
                        kt(r, 31),
                        kt(r, 139),
                        kt(r, 8),
                        r.gzhead)
                            kt(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)),
                            kt(r, 255 & r.gzhead.time),
                            kt(r, r.gzhead.time >> 8 & 255),
                            kt(r, r.gzhead.time >> 16 & 255),
                            kt(r, r.gzhead.time >> 24 & 255),
                            kt(r, 9 === r.level ? 2 : r.strategy >= nt || r.level < 2 ? 4 : 0),
                            kt(r, 255 & r.gzhead.os),
                            r.gzhead.extra && r.gzhead.extra.length && (kt(r, 255 & r.gzhead.extra.length),
                            kt(r, r.gzhead.extra.length >> 8 & 255)),
                            r.gzhead.hcrc && (t.adler = O(t.adler, r.pending_buf, r.pending, 0)),
                            r.gzindex = 0,
                            r.status = 69;
                        else if (kt(r, 0),
                        kt(r, 0),
                        kt(r, 0),
                        kt(r, 0),
                        kt(r, 0),
                        kt(r, 9 === r.level ? 2 : r.strategy >= nt || r.level < 2 ? 4 : 0),
                        kt(r, 3),
                        r.status = ct,
                        bt(t),
                        0 !== r.pending)
                            return r.last_flush = -1,
                            W;
                    if (69 === r.status) {
                        if (r.gzhead.extra) {
                            let e = r.pending
                              , n = (65535 & r.gzhead.extra.length) - r.gzindex;
                            for (; r.pending + n > r.pending_buf_size; ) {
                                let i = r.pending_buf_size - r.pending;
                                if (r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + i), r.pending),
                                r.pending = r.pending_buf_size,
                                r.gzhead.hcrc && r.pending > e && (t.adler = O(t.adler, r.pending_buf, r.pending - e, e)),
                                r.gzindex += i,
                                bt(t),
                                0 !== r.pending)
                                    return r.last_flush = -1,
                                    W;
                                e = 0,
                                n -= i
                            }
                            let i = new Uint8Array(r.gzhead.extra);
                            r.pending_buf.set(i.subarray(r.gzindex, r.gzindex + n), r.pending),
                            r.pending += n,
                            r.gzhead.hcrc && r.pending > e && (t.adler = O(t.adler, r.pending_buf, r.pending - e, e)),
                            r.gzindex = 0
                        }
                        r.status = 73
                    }
                    if (73 === r.status) {
                        if (r.gzhead.name) {
                            let e, n = r.pending;
                            do {
                                if (r.pending === r.pending_buf_size) {
                                    if (r.gzhead.hcrc && r.pending > n && (t.adler = O(t.adler, r.pending_buf, r.pending - n, n)),
                                    bt(t),
                                    0 !== r.pending)
                                        return r.last_flush = -1,
                                        W;
                                    n = 0
                                }
                                e = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0,
                                kt(r, e)
                            } while (0 !== e);
                            r.gzhead.hcrc && r.pending > n && (t.adler = O(t.adler, r.pending_buf, r.pending - n, n)),
                            r.gzindex = 0
                        }
                        r.status = 91
                    }
                    if (91 === r.status) {
                        if (r.gzhead.comment) {
                            let e, n = r.pending;
                            do {
                                if (r.pending === r.pending_buf_size) {
                                    if (r.gzhead.hcrc && r.pending > n && (t.adler = O(t.adler, r.pending_buf, r.pending - n, n)),
                                    bt(t),
                                    0 !== r.pending)
                                        return r.last_flush = -1,
                                        W;
                                    n = 0
                                }
                                e = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0,
                                kt(r, e)
                            } while (0 !== e);
                            r.gzhead.hcrc && r.pending > n && (t.adler = O(t.adler, r.pending_buf, r.pending - n, n))
                        }
                        r.status = 103
                    }
                    if (103 === r.status) {
                        if (r.gzhead.hcrc) {
                            if (r.pending + 2 > r.pending_buf_size && (bt(t),
                            0 !== r.pending))
                                return r.last_flush = -1,
                                W;
                            kt(r, 255 & t.adler),
                            kt(r, t.adler >> 8 & 255),
                            t.adler = 0
                        }
                        if (r.status = ct,
                        bt(t),
                        0 !== r.pending)
                            return r.last_flush = -1,
                            W
                    }
                    if (0 !== t.avail_in || 0 !== r.lookahead || e !== G && r.status !== ft) {
                        let n = 0 === r.level ? At(r, e) : r.strategy === nt ? ( (t, e) => {
                            let r;
                            for (; ; ) {
                                if (0 === t.lookahead && (Et(t),
                                0 === t.lookahead)) {
                                    if (e === G)
                                        return 1;
                                    break
                                }
                                if (t.match_length = 0,
                                r = j(t, 0, t.window[t.strstart]),
                                t.lookahead--,
                                t.strstart++,
                                r && (yt(t, !1),
                                0 === t.strm.avail_out))
                                    return 1
                            }
                            return t.insert = 0,
                            e === V ? (yt(t, !0),
                            0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (yt(t, !1),
                            0 === t.strm.avail_out) ? 1 : 2
                        }
                        )(r, e) : r.strategy === it ? ( (t, e) => {
                            let r, n, i, a;
                            const s = t.window;
                            for (; ; ) {
                                if (t.lookahead <= ht) {
                                    if (Et(t),
                                    t.lookahead <= ht && e === G)
                                        return 1;
                                    if (0 === t.lookahead)
                                        break
                                }
                                if (t.match_length = 0,
                                t.lookahead >= 3 && t.strstart > 0 && (i = t.strstart - 1,
                                n = s[i],
                                n === s[++i] && n === s[++i] && n === s[++i])) {
                                    a = t.strstart + ht;
                                    do {} while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < a);
                                    t.match_length = ht - (a - i),
                                    t.match_length > t.lookahead && (t.match_length = t.lookahead)
                                }
                                if (t.match_length >= 3 ? (r = j(t, 1, t.match_length - 3),
                                t.lookahead -= t.match_length,
                                t.strstart += t.match_length,
                                t.match_length = 0) : (r = j(t, 0, t.window[t.strstart]),
                                t.lookahead--,
                                t.strstart++),
                                r && (yt(t, !1),
                                0 === t.strm.avail_out))
                                    return 1
                            }
                            return t.insert = 0,
                            e === V ? (yt(t, !0),
                            0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (yt(t, !1),
                            0 === t.strm.avail_out) ? 1 : 2
                        }
                        )(r, e) : Ut[r.level].func(r, e);
                        if (3 !== n && 4 !== n || (r.status = ft),
                        1 === n || 3 === n)
                            return 0 === t.avail_out && (r.last_flush = -1),
                            W;
                        if (2 === n && (e === J ? K(r) : e !== $ && (M(r, 0, 0, !1),
                        e === Y && (wt(r.head),
                        0 === r.lookahead && (r.strstart = 0,
                        r.block_start = 0,
                        r.insert = 0))),
                        bt(t),
                        0 === t.avail_out))
                            return r.last_flush = -1,
                            W
                    }
                    return e !== V ? W : r.wrap <= 0 ? q : (2 === r.wrap ? (kt(r, 255 & t.adler),
                    kt(r, t.adler >> 8 & 255),
                    kt(r, t.adler >> 16 & 255),
                    kt(r, t.adler >> 24 & 255),
                    kt(r, 255 & t.total_in),
                    kt(r, t.total_in >> 8 & 255),
                    kt(r, t.total_in >> 16 & 255),
                    kt(r, t.total_in >> 24 & 255)) : (vt(r, t.adler >>> 16),
                    vt(r, 65535 & t.adler)),
                    bt(t),
                    r.wrap > 0 && (r.wrap = -r.wrap),
                    0 !== r.pending ? W : q)
                }
                ,
                deflateEnd: t => {
                    if (Dt(t))
                        return X;
                    const e = t.state.status;
                    return t.state = null,
                    e === ct ? _t(t, Q) : W
                }
                ,
                deflateSetDictionary: (t, e) => {
                    let r = e.length;
                    if (Dt(t))
                        return X;
                    const n = t.state
                      , i = n.wrap;
                    if (2 === i || 1 === i && n.status !== ut || n.lookahead)
                        return X;
                    if (1 === i && (t.adler = Z(t.adler, e, r, 0)),
                    n.wrap = 0,
                    r >= n.w_size) {
                        0 === i && (wt(n.head),
                        n.strstart = 0,
                        n.block_start = 0,
                        n.insert = 0);
                        let t = new Uint8Array(n.w_size);
                        t.set(e.subarray(r - n.w_size, r), 0),
                        e = t,
                        r = n.w_size
                    }
                    const a = t.avail_in
                      , s = t.next_in
                      , o = t.input;
                    for (t.avail_in = r,
                    t.next_in = 0,
                    t.input = e,
                    Et(n); n.lookahead >= 3; ) {
                        let t = n.strstart
                          , e = n.lookahead - 2;
                        do {
                            n.ins_h = mt(n, n.ins_h, n.window[t + 3 - 1]),
                            n.prev[t & n.w_mask] = n.head[n.ins_h],
                            n.head[n.ins_h] = t,
                            t++
                        } while (--e);
                        n.strstart = t,
                        n.lookahead = 2,
                        Et(n)
                    }
                    return n.strstart += n.lookahead,
                    n.block_start = n.strstart,
                    n.insert = n.lookahead,
                    n.lookahead = 0,
                    n.match_length = n.prev_length = 2,
                    n.match_available = 0,
                    t.next_in = s,
                    t.input = o,
                    t.avail_in = a,
                    n.wrap = i,
                    W
                }
                ,
                deflateInfo: "pako deflate (from Nodeca project)"
            };
            const Ot = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
            var Lt = {
                assign: function(t) {
                    const e = Array.prototype.slice.call(arguments, 1);
                    for (; e.length; ) {
                        const r = e.shift();
                        if (r) {
                            if ("object" != typeof r)
                                throw new TypeError(r + "must be non-object");
                            for (const e in r)
                                Ot(r, e) && (t[e] = r[e])
                        }
                    }
                    return t
                },
                flattenChunks: t => {
                    let e = 0;
                    for (let r = 0, n = t.length; r < n; r++)
                        e += t[r].length;
                    const r = new Uint8Array(e);
                    for (let e = 0, n = 0, i = t.length; e < i; e++) {
                        let i = t[e];
                        r.set(i, n),
                        n += i.length
                    }
                    return r
                }
            };
            let Ht = !0;
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (t) {
                Ht = !1
            }
            const Ft = new Uint8Array(256);
            for (let t = 0; t < 256; t++)
                Ft[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
            Ft[254] = Ft[254] = 1;
            var Mt = {
                string2buf: t => {
                    if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
                        return (new TextEncoder).encode(t);
                    let e, r, n, i, a, s = t.length, o = 0;
                    for (i = 0; i < s; i++)
                        r = t.charCodeAt(i),
                        55296 == (64512 & r) && i + 1 < s && (n = t.charCodeAt(i + 1),
                        56320 == (64512 & n) && (r = 65536 + (r - 55296 << 10) + (n - 56320),
                        i++)),
                        o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                    for (e = new Uint8Array(o),
                    a = 0,
                    i = 0; a < o; i++)
                        r = t.charCodeAt(i),
                        55296 == (64512 & r) && i + 1 < s && (n = t.charCodeAt(i + 1),
                        56320 == (64512 & n) && (r = 65536 + (r - 55296 << 10) + (n - 56320),
                        i++)),
                        r < 128 ? e[a++] = r : r < 2048 ? (e[a++] = 192 | r >>> 6,
                        e[a++] = 128 | 63 & r) : r < 65536 ? (e[a++] = 224 | r >>> 12,
                        e[a++] = 128 | r >>> 6 & 63,
                        e[a++] = 128 | 63 & r) : (e[a++] = 240 | r >>> 18,
                        e[a++] = 128 | r >>> 12 & 63,
                        e[a++] = 128 | r >>> 6 & 63,
                        e[a++] = 128 | 63 & r);
                    return e
                }
                ,
                buf2string: (t, e) => {
                    const r = e || t.length;
                    if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
                        return (new TextDecoder).decode(t.subarray(0, e));
                    let n, i;
                    const a = new Array(2 * r);
                    for (i = 0,
                    n = 0; n < r; ) {
                        let e = t[n++];
                        if (e < 128) {
                            a[i++] = e;
                            continue
                        }
                        let s = Ft[e];
                        if (s > 4)
                            a[i++] = 65533,
                            n += s - 1;
                        else {
                            for (e &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && n < r; )
                                e = e << 6 | 63 & t[n++],
                                s--;
                            s > 1 ? a[i++] = 65533 : e < 65536 ? a[i++] = e : (e -= 65536,
                            a[i++] = 55296 | e >> 10 & 1023,
                            a[i++] = 56320 | 1023 & e)
                        }
                    }
                    return ( (t, e) => {
                        if (e < 65534 && t.subarray && Ht)
                            return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                        let r = "";
                        for (let n = 0; n < e; n++)
                            r += String.fromCharCode(t[n]);
                        return r
                    }
                    )(a, i)
                }
                ,
                utf8border: (t, e) => {
                    (e = e || t.length) > t.length && (e = t.length);
                    let r = e - 1;
                    for (; r >= 0 && 128 == (192 & t[r]); )
                        r--;
                    return r < 0 || 0 === r ? e : r + Ft[t[r]] > e ? r : e
                }
            }
              , Pt = function() {
                this.input = null,
                this.next_in = 0,
                this.avail_in = 0,
                this.total_in = 0,
                this.output = null,
                this.next_out = 0,
                this.avail_out = 0,
                this.total_out = 0,
                this.msg = "",
                this.state = null,
                this.data_type = 2,
                this.adler = 0
            };
            const jt = Object.prototype.toString
              , {Z_NO_FLUSH: Kt, Z_SYNC_FLUSH: Gt, Z_FULL_FLUSH: Jt, Z_FINISH: Yt, Z_OK: Vt, Z_STREAM_END: $t, Z_DEFAULT_COMPRESSION: Wt, Z_DEFAULT_STRATEGY: qt, Z_DEFLATED: Xt} = H;
            function Qt(t) {
                this.options = Lt.assign({
                    level: Wt,
                    method: Xt,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: qt
                }, t || {});
                let e = this.options;
                e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
                this.err = 0,
                this.msg = "",
                this.ended = !1,
                this.chunks = [],
                this.strm = new Pt,
                this.strm.avail_out = 0;
                let r = Bt.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                if (r !== Vt)
                    throw new Error(L[r]);
                if (e.header && Bt.deflateSetHeader(this.strm, e.header),
                e.dictionary) {
                    let t;
                    if (t = "string" == typeof e.dictionary ? Mt.string2buf(e.dictionary) : "[object ArrayBuffer]" === jt.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary,
                    r = Bt.deflateSetDictionary(this.strm, t),
                    r !== Vt)
                        throw new Error(L[r]);
                    this._dict_set = !0
                }
            }
            function te(t, e) {
                const r = new Qt(e);
                if (r.push(t, !0),
                r.err)
                    throw r.msg || L[r.err];
                return r.result
            }
            Qt.prototype.push = function(t, e) {
                const r = this.strm
                  , n = this.options.chunkSize;
                let i, a;
                if (this.ended)
                    return !1;
                for (a = e === ~~e ? e : !0 === e ? Yt : Kt,
                "string" == typeof t ? r.input = Mt.string2buf(t) : "[object ArrayBuffer]" === jt.call(t) ? r.input = new Uint8Array(t) : r.input = t,
                r.next_in = 0,
                r.avail_in = r.input.length; ; )
                    if (0 === r.avail_out && (r.output = new Uint8Array(n),
                    r.next_out = 0,
                    r.avail_out = n),
                    (a === Gt || a === Jt) && r.avail_out <= 6)
                        this.onData(r.output.subarray(0, r.next_out)),
                        r.avail_out = 0;
                    else {
                        if (i = Bt.deflate(r, a),
                        i === $t)
                            return r.next_out > 0 && this.onData(r.output.subarray(0, r.next_out)),
                            i = Bt.deflateEnd(this.strm),
                            this.onEnd(i),
                            this.ended = !0,
                            i === Vt;
                        if (0 !== r.avail_out) {
                            if (a > 0 && r.next_out > 0)
                                this.onData(r.output.subarray(0, r.next_out)),
                                r.avail_out = 0;
                            else if (0 === r.avail_in)
                                break
                        } else
                            this.onData(r.output)
                    }
                return !0
            }
            ,
            Qt.prototype.onData = function(t) {
                this.chunks.push(t)
            }
            ,
            Qt.prototype.onEnd = function(t) {
                t === Vt && (this.result = Lt.flattenChunks(this.chunks)),
                this.chunks = [],
                this.err = t,
                this.msg = this.strm.msg
            }
            ;
            var ee = {
                Deflate: Qt,
                deflate: te,
                deflateRaw: function(t, e) {
                    return (e = e || {}).raw = !0,
                    te(t, e)
                },
                gzip: function(t, e) {
                    return (e = e || {}).gzip = !0,
                    te(t, e)
                },
                constants: H
            };
            const re = 16209;
            var ne = function(t, e) {
                let r, n, i, a, s, o, l, h, d, u, c, f, _, g, w, p, m, b, y, k, v, x, S, E;
                const A = t.state;
                r = t.next_in,
                S = t.input,
                n = r + (t.avail_in - 5),
                i = t.next_out,
                E = t.output,
                a = i - (e - t.avail_out),
                s = i + (t.avail_out - 257),
                o = A.dmax,
                l = A.wsize,
                h = A.whave,
                d = A.wnext,
                u = A.window,
                c = A.hold,
                f = A.bits,
                _ = A.lencode,
                g = A.distcode,
                w = (1 << A.lenbits) - 1,
                p = (1 << A.distbits) - 1;
                t: do {
                    f < 15 && (c += S[r++] << f,
                    f += 8,
                    c += S[r++] << f,
                    f += 8),
                    m = _[c & w];
                    e: for (; ; ) {
                        if (b = m >>> 24,
                        c >>>= b,
                        f -= b,
                        b = m >>> 16 & 255,
                        0 === b)
                            E[i++] = 65535 & m;
                        else {
                            if (!(16 & b)) {
                                if (0 == (64 & b)) {
                                    m = _[(65535 & m) + (c & (1 << b) - 1)];
                                    continue e
                                }
                                if (32 & b) {
                                    A.mode = 16191;
                                    break t
                                }
                                t.msg = "invalid literal/length code",
                                A.mode = re;
                                break t
                            }
                            y = 65535 & m,
                            b &= 15,
                            b && (f < b && (c += S[r++] << f,
                            f += 8),
                            y += c & (1 << b) - 1,
                            c >>>= b,
                            f -= b),
                            f < 15 && (c += S[r++] << f,
                            f += 8,
                            c += S[r++] << f,
                            f += 8),
                            m = g[c & p];
                            r: for (; ; ) {
                                if (b = m >>> 24,
                                c >>>= b,
                                f -= b,
                                b = m >>> 16 & 255,
                                !(16 & b)) {
                                    if (0 == (64 & b)) {
                                        m = g[(65535 & m) + (c & (1 << b) - 1)];
                                        continue r
                                    }
                                    t.msg = "invalid distance code",
                                    A.mode = re;
                                    break t
                                }
                                if (k = 65535 & m,
                                b &= 15,
                                f < b && (c += S[r++] << f,
                                f += 8,
                                f < b && (c += S[r++] << f,
                                f += 8)),
                                k += c & (1 << b) - 1,
                                k > o) {
                                    t.msg = "invalid distance too far back",
                                    A.mode = re;
                                    break t
                                }
                                if (c >>>= b,
                                f -= b,
                                b = i - a,
                                k > b) {
                                    if (b = k - b,
                                    b > h && A.sane) {
                                        t.msg = "invalid distance too far back",
                                        A.mode = re;
                                        break t
                                    }
                                    if (v = 0,
                                    x = u,
                                    0 === d) {
                                        if (v += l - b,
                                        b < y) {
                                            y -= b;
                                            do {
                                                E[i++] = u[v++]
                                            } while (--b);
                                            v = i - k,
                                            x = E
                                        }
                                    } else if (d < b) {
                                        if (v += l + d - b,
                                        b -= d,
                                        b < y) {
                                            y -= b;
                                            do {
                                                E[i++] = u[v++]
                                            } while (--b);
                                            if (v = 0,
                                            d < y) {
                                                b = d,
                                                y -= b;
                                                do {
                                                    E[i++] = u[v++]
                                                } while (--b);
                                                v = i - k,
                                                x = E
                                            }
                                        }
                                    } else if (v += d - b,
                                    b < y) {
                                        y -= b;
                                        do {
                                            E[i++] = u[v++]
                                        } while (--b);
                                        v = i - k,
                                        x = E
                                    }
                                    for (; y > 2; )
                                        E[i++] = x[v++],
                                        E[i++] = x[v++],
                                        E[i++] = x[v++],
                                        y -= 3;
                                    y && (E[i++] = x[v++],
                                    y > 1 && (E[i++] = x[v++]))
                                } else {
                                    v = i - k;
                                    do {
                                        E[i++] = E[v++],
                                        E[i++] = E[v++],
                                        E[i++] = E[v++],
                                        y -= 3
                                    } while (y > 2);
                                    y && (E[i++] = E[v++],
                                    y > 1 && (E[i++] = E[v++]))
                                }
                                break
                            }
                        }
                        break
                    }
                } while (r < n && i < s);
                y = f >> 3,
                r -= y,
                f -= y << 3,
                c &= (1 << f) - 1,
                t.next_in = r,
                t.next_out = i,
                t.avail_in = r < n ? n - r + 5 : 5 - (r - n),
                t.avail_out = i < s ? s - i + 257 : 257 - (i - s),
                A.hold = c,
                A.bits = f
            };
            const ie = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0])
              , ae = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78])
              , se = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0])
              , oe = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
            var le = (t, e, r, n, i, a, s, o) => {
                const l = o.bits;
                let h, d, u, c, f, _, g = 0, w = 0, p = 0, m = 0, b = 0, y = 0, k = 0, v = 0, x = 0, S = 0, E = null;
                const A = new Uint16Array(16)
                  , z = new Uint16Array(16);
                let R, C, U, T = null;
                for (g = 0; g <= 15; g++)
                    A[g] = 0;
                for (w = 0; w < n; w++)
                    A[e[r + w]]++;
                for (b = l,
                m = 15; m >= 1 && 0 === A[m]; m--)
                    ;
                if (b > m && (b = m),
                0 === m)
                    return i[a++] = 20971520,
                    i[a++] = 20971520,
                    o.bits = 1,
                    0;
                for (p = 1; p < m && 0 === A[p]; p++)
                    ;
                for (b < p && (b = p),
                v = 1,
                g = 1; g <= 15; g++)
                    if (v <<= 1,
                    v -= A[g],
                    v < 0)
                        return -1;
                if (v > 0 && (0 === t || 1 !== m))
                    return -1;
                for (z[1] = 0,
                g = 1; g < 15; g++)
                    z[g + 1] = z[g] + A[g];
                for (w = 0; w < n; w++)
                    0 !== e[r + w] && (s[z[e[r + w]]++] = w);
                if (0 === t ? (E = T = s,
                _ = 20) : 1 === t ? (E = ie,
                T = ae,
                _ = 257) : (E = se,
                T = oe,
                _ = 0),
                S = 0,
                w = 0,
                g = p,
                f = a,
                y = b,
                k = 0,
                u = -1,
                x = 1 << b,
                c = x - 1,
                1 === t && x > 852 || 2 === t && x > 592)
                    return 1;
                for (; ; ) {
                    R = g - k,
                    s[w] + 1 < _ ? (C = 0,
                    U = s[w]) : s[w] >= _ ? (C = T[s[w] - _],
                    U = E[s[w] - _]) : (C = 96,
                    U = 0),
                    h = 1 << g - k,
                    d = 1 << y,
                    p = d;
                    do {
                        d -= h,
                        i[f + (S >> k) + d] = R << 24 | C << 16 | U | 0
                    } while (0 !== d);
                    for (h = 1 << g - 1; S & h; )
                        h >>= 1;
                    if (0 !== h ? (S &= h - 1,
                    S += h) : S = 0,
                    w++,
                    0 == --A[g]) {
                        if (g === m)
                            break;
                        g = e[r + s[w]]
                    }
                    if (g > b && (S & c) !== u) {
                        for (0 === k && (k = b),
                        f += p,
                        y = g - k,
                        v = 1 << y; y + k < m && (v -= A[y + k],
                        !(v <= 0)); )
                            y++,
                            v <<= 1;
                        if (x += 1 << y,
                        1 === t && x > 852 || 2 === t && x > 592)
                            return 1;
                        u = S & c,
                        i[u] = b << 24 | y << 16 | f - a | 0
                    }
                }
                return 0 !== S && (i[f + S] = g - k << 24 | 64 << 16 | 0),
                o.bits = b,
                0
            }
            ;
            const {Z_FINISH: he, Z_BLOCK: de, Z_TREES: ue, Z_OK: ce, Z_STREAM_END: fe, Z_NEED_DICT: _e, Z_STREAM_ERROR: ge, Z_DATA_ERROR: we, Z_MEM_ERROR: pe, Z_BUF_ERROR: me, Z_DEFLATED: be} = H
              , ye = 16180
              , ke = 16190
              , ve = 16191
              , xe = 16192
              , Se = 16194
              , Ee = 16199
              , Ae = 16200
              , ze = 16206
              , Re = 16209
              , Ce = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
            function Ue() {
                this.strm = null,
                this.mode = 0,
                this.last = !1,
                this.wrap = 0,
                this.havedict = !1,
                this.flags = 0,
                this.dmax = 0,
                this.check = 0,
                this.total = 0,
                this.head = null,
                this.wbits = 0,
                this.wsize = 0,
                this.whave = 0,
                this.wnext = 0,
                this.window = null,
                this.hold = 0,
                this.bits = 0,
                this.length = 0,
                this.offset = 0,
                this.extra = 0,
                this.lencode = null,
                this.distcode = null,
                this.lenbits = 0,
                this.distbits = 0,
                this.ncode = 0,
                this.nlen = 0,
                this.ndist = 0,
                this.have = 0,
                this.next = null,
                this.lens = new Uint16Array(320),
                this.work = new Uint16Array(288),
                this.lendyn = null,
                this.distdyn = null,
                this.sane = 0,
                this.back = 0,
                this.was = 0
            }
            const Te = t => {
                if (!t)
                    return 1;
                const e = t.state;
                return !e || e.strm !== t || e.mode < ye || e.mode > 16211 ? 1 : 0
            }
              , De = t => {
                if (Te(t))
                    return ge;
                const e = t.state;
                return t.total_in = t.total_out = e.total = 0,
                t.msg = "",
                e.wrap && (t.adler = 1 & e.wrap),
                e.mode = ye,
                e.last = 0,
                e.havedict = 0,
                e.flags = -1,
                e.dmax = 32768,
                e.head = null,
                e.hold = 0,
                e.bits = 0,
                e.lencode = e.lendyn = new Int32Array(852),
                e.distcode = e.distdyn = new Int32Array(592),
                e.sane = 1,
                e.back = -1,
                ce
            }
              , Ne = t => {
                if (Te(t))
                    return ge;
                const e = t.state;
                return e.wsize = 0,
                e.whave = 0,
                e.wnext = 0,
                De(t)
            }
              , Ie = (t, e) => {
                let r;
                if (Te(t))
                    return ge;
                const n = t.state;
                return e < 0 ? (r = 0,
                e = -e) : (r = 5 + (e >> 4),
                e < 48 && (e &= 15)),
                e && (e < 8 || e > 15) ? ge : (null !== n.window && n.wbits !== e && (n.window = null),
                n.wrap = r,
                n.wbits = e,
                Ne(t))
            }
              , Ze = (t, e) => {
                if (!t)
                    return ge;
                const r = new Ue;
                t.state = r,
                r.strm = t,
                r.window = null,
                r.mode = ye;
                const n = Ie(t, e);
                return n !== ce && (t.state = null),
                n
            }
            ;
            let Be, Oe, Le = !0;
            const He = t => {
                if (Le) {
                    Be = new Int32Array(512),
                    Oe = new Int32Array(32);
                    let e = 0;
                    for (; e < 144; )
                        t.lens[e++] = 8;
                    for (; e < 256; )
                        t.lens[e++] = 9;
                    for (; e < 280; )
                        t.lens[e++] = 7;
                    for (; e < 288; )
                        t.lens[e++] = 8;
                    for (le(1, t.lens, 0, 288, Be, 0, t.work, {
                        bits: 9
                    }),
                    e = 0; e < 32; )
                        t.lens[e++] = 5;
                    le(2, t.lens, 0, 32, Oe, 0, t.work, {
                        bits: 5
                    }),
                    Le = !1
                }
                t.lencode = Be,
                t.lenbits = 9,
                t.distcode = Oe,
                t.distbits = 5
            }
              , Fe = (t, e, r, n) => {
                let i;
                const a = t.state;
                return null === a.window && (a.wsize = 1 << a.wbits,
                a.wnext = 0,
                a.whave = 0,
                a.window = new Uint8Array(a.wsize)),
                n >= a.wsize ? (a.window.set(e.subarray(r - a.wsize, r), 0),
                a.wnext = 0,
                a.whave = a.wsize) : (i = a.wsize - a.wnext,
                i > n && (i = n),
                a.window.set(e.subarray(r - n, r - n + i), a.wnext),
                (n -= i) ? (a.window.set(e.subarray(r - n, r), 0),
                a.wnext = n,
                a.whave = a.wsize) : (a.wnext += i,
                a.wnext === a.wsize && (a.wnext = 0),
                a.whave < a.wsize && (a.whave += i))),
                0
            }
            ;
            var Me = {
                inflateReset: Ne,
                inflateReset2: Ie,
                inflateResetKeep: De,
                inflateInit: t => Ze(t, 15),
                inflateInit2: Ze,
                inflate: (t, e) => {
                    let r, n, i, a, s, o, l, h, d, u, c, f, _, g, w, p, m, b, y, k, v, x, S = 0;
                    const E = new Uint8Array(4);
                    let A, z;
                    const R = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                    if (Te(t) || !t.output || !t.input && 0 !== t.avail_in)
                        return ge;
                    r = t.state,
                    r.mode === ve && (r.mode = xe),
                    s = t.next_out,
                    i = t.output,
                    l = t.avail_out,
                    a = t.next_in,
                    n = t.input,
                    o = t.avail_in,
                    h = r.hold,
                    d = r.bits,
                    u = o,
                    c = l,
                    x = ce;
                    t: for (; ; )
                        switch (r.mode) {
                        case ye:
                            if (0 === r.wrap) {
                                r.mode = xe;
                                break
                            }
                            for (; d < 16; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            if (2 & r.wrap && 35615 === h) {
                                0 === r.wbits && (r.wbits = 15),
                                r.check = 0,
                                E[0] = 255 & h,
                                E[1] = h >>> 8 & 255,
                                r.check = O(r.check, E, 2, 0),
                                h = 0,
                                d = 0,
                                r.mode = 16181;
                                break
                            }
                            if (r.head && (r.head.done = !1),
                            !(1 & r.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                                t.msg = "incorrect header check",
                                r.mode = Re;
                                break
                            }
                            if ((15 & h) !== be) {
                                t.msg = "unknown compression method",
                                r.mode = Re;
                                break
                            }
                            if (h >>>= 4,
                            d -= 4,
                            v = 8 + (15 & h),
                            0 === r.wbits && (r.wbits = v),
                            v > 15 || v > r.wbits) {
                                t.msg = "invalid window size",
                                r.mode = Re;
                                break
                            }
                            r.dmax = 1 << r.wbits,
                            r.flags = 0,
                            t.adler = r.check = 1,
                            r.mode = 512 & h ? 16189 : ve,
                            h = 0,
                            d = 0;
                            break;
                        case 16181:
                            for (; d < 16; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            if (r.flags = h,
                            (255 & r.flags) !== be) {
                                t.msg = "unknown compression method",
                                r.mode = Re;
                                break
                            }
                            if (57344 & r.flags) {
                                t.msg = "unknown header flags set",
                                r.mode = Re;
                                break
                            }
                            r.head && (r.head.text = h >> 8 & 1),
                            512 & r.flags && 4 & r.wrap && (E[0] = 255 & h,
                            E[1] = h >>> 8 & 255,
                            r.check = O(r.check, E, 2, 0)),
                            h = 0,
                            d = 0,
                            r.mode = 16182;
                        case 16182:
                            for (; d < 32; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            r.head && (r.head.time = h),
                            512 & r.flags && 4 & r.wrap && (E[0] = 255 & h,
                            E[1] = h >>> 8 & 255,
                            E[2] = h >>> 16 & 255,
                            E[3] = h >>> 24 & 255,
                            r.check = O(r.check, E, 4, 0)),
                            h = 0,
                            d = 0,
                            r.mode = 16183;
                        case 16183:
                            for (; d < 16; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            r.head && (r.head.xflags = 255 & h,
                            r.head.os = h >> 8),
                            512 & r.flags && 4 & r.wrap && (E[0] = 255 & h,
                            E[1] = h >>> 8 & 255,
                            r.check = O(r.check, E, 2, 0)),
                            h = 0,
                            d = 0,
                            r.mode = 16184;
                        case 16184:
                            if (1024 & r.flags) {
                                for (; d < 16; ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                r.length = h,
                                r.head && (r.head.extra_len = h),
                                512 & r.flags && 4 & r.wrap && (E[0] = 255 & h,
                                E[1] = h >>> 8 & 255,
                                r.check = O(r.check, E, 2, 0)),
                                h = 0,
                                d = 0
                            } else
                                r.head && (r.head.extra = null);
                            r.mode = 16185;
                        case 16185:
                            if (1024 & r.flags && (f = r.length,
                            f > o && (f = o),
                            f && (r.head && (v = r.head.extra_len - r.length,
                            r.head.extra || (r.head.extra = new Uint8Array(r.head.extra_len)),
                            r.head.extra.set(n.subarray(a, a + f), v)),
                            512 & r.flags && 4 & r.wrap && (r.check = O(r.check, n, f, a)),
                            o -= f,
                            a += f,
                            r.length -= f),
                            r.length))
                                break t;
                            r.length = 0,
                            r.mode = 16186;
                        case 16186:
                            if (2048 & r.flags) {
                                if (0 === o)
                                    break t;
                                f = 0;
                                do {
                                    v = n[a + f++],
                                    r.head && v && r.length < 65536 && (r.head.name += String.fromCharCode(v))
                                } while (v && f < o);
                                if (512 & r.flags && 4 & r.wrap && (r.check = O(r.check, n, f, a)),
                                o -= f,
                                a += f,
                                v)
                                    break t
                            } else
                                r.head && (r.head.name = null);
                            r.length = 0,
                            r.mode = 16187;
                        case 16187:
                            if (4096 & r.flags) {
                                if (0 === o)
                                    break t;
                                f = 0;
                                do {
                                    v = n[a + f++],
                                    r.head && v && r.length < 65536 && (r.head.comment += String.fromCharCode(v))
                                } while (v && f < o);
                                if (512 & r.flags && 4 & r.wrap && (r.check = O(r.check, n, f, a)),
                                o -= f,
                                a += f,
                                v)
                                    break t
                            } else
                                r.head && (r.head.comment = null);
                            r.mode = 16188;
                        case 16188:
                            if (512 & r.flags) {
                                for (; d < 16; ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                if (4 & r.wrap && h !== (65535 & r.check)) {
                                    t.msg = "header crc mismatch",
                                    r.mode = Re;
                                    break
                                }
                                h = 0,
                                d = 0
                            }
                            r.head && (r.head.hcrc = r.flags >> 9 & 1,
                            r.head.done = !0),
                            t.adler = r.check = 0,
                            r.mode = ve;
                            break;
                        case 16189:
                            for (; d < 32; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            t.adler = r.check = Ce(h),
                            h = 0,
                            d = 0,
                            r.mode = ke;
                        case ke:
                            if (0 === r.havedict)
                                return t.next_out = s,
                                t.avail_out = l,
                                t.next_in = a,
                                t.avail_in = o,
                                r.hold = h,
                                r.bits = d,
                                _e;
                            t.adler = r.check = 1,
                            r.mode = ve;
                        case ve:
                            if (e === de || e === ue)
                                break t;
                        case xe:
                            if (r.last) {
                                h >>>= 7 & d,
                                d -= 7 & d,
                                r.mode = ze;
                                break
                            }
                            for (; d < 3; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            switch (r.last = 1 & h,
                            h >>>= 1,
                            d -= 1,
                            3 & h) {
                            case 0:
                                r.mode = 16193;
                                break;
                            case 1:
                                if (He(r),
                                r.mode = Ee,
                                e === ue) {
                                    h >>>= 2,
                                    d -= 2;
                                    break t
                                }
                                break;
                            case 2:
                                r.mode = 16196;
                                break;
                            case 3:
                                t.msg = "invalid block type",
                                r.mode = Re
                            }
                            h >>>= 2,
                            d -= 2;
                            break;
                        case 16193:
                            for (h >>>= 7 & d,
                            d -= 7 & d; d < 32; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            if ((65535 & h) != (h >>> 16 ^ 65535)) {
                                t.msg = "invalid stored block lengths",
                                r.mode = Re;
                                break
                            }
                            if (r.length = 65535 & h,
                            h = 0,
                            d = 0,
                            r.mode = Se,
                            e === ue)
                                break t;
                        case Se:
                            r.mode = 16195;
                        case 16195:
                            if (f = r.length,
                            f) {
                                if (f > o && (f = o),
                                f > l && (f = l),
                                0 === f)
                                    break t;
                                i.set(n.subarray(a, a + f), s),
                                o -= f,
                                a += f,
                                l -= f,
                                s += f,
                                r.length -= f;
                                break
                            }
                            r.mode = ve;
                            break;
                        case 16196:
                            for (; d < 14; ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            if (r.nlen = 257 + (31 & h),
                            h >>>= 5,
                            d -= 5,
                            r.ndist = 1 + (31 & h),
                            h >>>= 5,
                            d -= 5,
                            r.ncode = 4 + (15 & h),
                            h >>>= 4,
                            d -= 4,
                            r.nlen > 286 || r.ndist > 30) {
                                t.msg = "too many length or distance symbols",
                                r.mode = Re;
                                break
                            }
                            r.have = 0,
                            r.mode = 16197;
                        case 16197:
                            for (; r.have < r.ncode; ) {
                                for (; d < 3; ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                r.lens[R[r.have++]] = 7 & h,
                                h >>>= 3,
                                d -= 3
                            }
                            for (; r.have < 19; )
                                r.lens[R[r.have++]] = 0;
                            if (r.lencode = r.lendyn,
                            r.lenbits = 7,
                            A = {
                                bits: r.lenbits
                            },
                            x = le(0, r.lens, 0, 19, r.lencode, 0, r.work, A),
                            r.lenbits = A.bits,
                            x) {
                                t.msg = "invalid code lengths set",
                                r.mode = Re;
                                break
                            }
                            r.have = 0,
                            r.mode = 16198;
                        case 16198:
                            for (; r.have < r.nlen + r.ndist; ) {
                                for (; S = r.lencode[h & (1 << r.lenbits) - 1],
                                w = S >>> 24,
                                p = S >>> 16 & 255,
                                m = 65535 & S,
                                !(w <= d); ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                if (m < 16)
                                    h >>>= w,
                                    d -= w,
                                    r.lens[r.have++] = m;
                                else {
                                    if (16 === m) {
                                        for (z = w + 2; d < z; ) {
                                            if (0 === o)
                                                break t;
                                            o--,
                                            h += n[a++] << d,
                                            d += 8
                                        }
                                        if (h >>>= w,
                                        d -= w,
                                        0 === r.have) {
                                            t.msg = "invalid bit length repeat",
                                            r.mode = Re;
                                            break
                                        }
                                        v = r.lens[r.have - 1],
                                        f = 3 + (3 & h),
                                        h >>>= 2,
                                        d -= 2
                                    } else if (17 === m) {
                                        for (z = w + 3; d < z; ) {
                                            if (0 === o)
                                                break t;
                                            o--,
                                            h += n[a++] << d,
                                            d += 8
                                        }
                                        h >>>= w,
                                        d -= w,
                                        v = 0,
                                        f = 3 + (7 & h),
                                        h >>>= 3,
                                        d -= 3
                                    } else {
                                        for (z = w + 7; d < z; ) {
                                            if (0 === o)
                                                break t;
                                            o--,
                                            h += n[a++] << d,
                                            d += 8
                                        }
                                        h >>>= w,
                                        d -= w,
                                        v = 0,
                                        f = 11 + (127 & h),
                                        h >>>= 7,
                                        d -= 7
                                    }
                                    if (r.have + f > r.nlen + r.ndist) {
                                        t.msg = "invalid bit length repeat",
                                        r.mode = Re;
                                        break
                                    }
                                    for (; f--; )
                                        r.lens[r.have++] = v
                                }
                            }
                            if (r.mode === Re)
                                break;
                            if (0 === r.lens[256]) {
                                t.msg = "invalid code -- missing end-of-block",
                                r.mode = Re;
                                break
                            }
                            if (r.lenbits = 9,
                            A = {
                                bits: r.lenbits
                            },
                            x = le(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, A),
                            r.lenbits = A.bits,
                            x) {
                                t.msg = "invalid literal/lengths set",
                                r.mode = Re;
                                break
                            }
                            if (r.distbits = 6,
                            r.distcode = r.distdyn,
                            A = {
                                bits: r.distbits
                            },
                            x = le(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, A),
                            r.distbits = A.bits,
                            x) {
                                t.msg = "invalid distances set",
                                r.mode = Re;
                                break
                            }
                            if (r.mode = Ee,
                            e === ue)
                                break t;
                        case Ee:
                            r.mode = Ae;
                        case Ae:
                            if (o >= 6 && l >= 258) {
                                t.next_out = s,
                                t.avail_out = l,
                                t.next_in = a,
                                t.avail_in = o,
                                r.hold = h,
                                r.bits = d,
                                ne(t, c),
                                s = t.next_out,
                                i = t.output,
                                l = t.avail_out,
                                a = t.next_in,
                                n = t.input,
                                o = t.avail_in,
                                h = r.hold,
                                d = r.bits,
                                r.mode === ve && (r.back = -1);
                                break
                            }
                            for (r.back = 0; S = r.lencode[h & (1 << r.lenbits) - 1],
                            w = S >>> 24,
                            p = S >>> 16 & 255,
                            m = 65535 & S,
                            !(w <= d); ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            if (p && 0 == (240 & p)) {
                                for (b = w,
                                y = p,
                                k = m; S = r.lencode[k + ((h & (1 << b + y) - 1) >> b)],
                                w = S >>> 24,
                                p = S >>> 16 & 255,
                                m = 65535 & S,
                                !(b + w <= d); ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                h >>>= b,
                                d -= b,
                                r.back += b
                            }
                            if (h >>>= w,
                            d -= w,
                            r.back += w,
                            r.length = m,
                            0 === p) {
                                r.mode = 16205;
                                break
                            }
                            if (32 & p) {
                                r.back = -1,
                                r.mode = ve;
                                break
                            }
                            if (64 & p) {
                                t.msg = "invalid literal/length code",
                                r.mode = Re;
                                break
                            }
                            r.extra = 15 & p,
                            r.mode = 16201;
                        case 16201:
                            if (r.extra) {
                                for (z = r.extra; d < z; ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                r.length += h & (1 << r.extra) - 1,
                                h >>>= r.extra,
                                d -= r.extra,
                                r.back += r.extra
                            }
                            r.was = r.length,
                            r.mode = 16202;
                        case 16202:
                            for (; S = r.distcode[h & (1 << r.distbits) - 1],
                            w = S >>> 24,
                            p = S >>> 16 & 255,
                            m = 65535 & S,
                            !(w <= d); ) {
                                if (0 === o)
                                    break t;
                                o--,
                                h += n[a++] << d,
                                d += 8
                            }
                            if (0 == (240 & p)) {
                                for (b = w,
                                y = p,
                                k = m; S = r.distcode[k + ((h & (1 << b + y) - 1) >> b)],
                                w = S >>> 24,
                                p = S >>> 16 & 255,
                                m = 65535 & S,
                                !(b + w <= d); ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                h >>>= b,
                                d -= b,
                                r.back += b
                            }
                            if (h >>>= w,
                            d -= w,
                            r.back += w,
                            64 & p) {
                                t.msg = "invalid distance code",
                                r.mode = Re;
                                break
                            }
                            r.offset = m,
                            r.extra = 15 & p,
                            r.mode = 16203;
                        case 16203:
                            if (r.extra) {
                                for (z = r.extra; d < z; ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                r.offset += h & (1 << r.extra) - 1,
                                h >>>= r.extra,
                                d -= r.extra,
                                r.back += r.extra
                            }
                            if (r.offset > r.dmax) {
                                t.msg = "invalid distance too far back",
                                r.mode = Re;
                                break
                            }
                            r.mode = 16204;
                        case 16204:
                            if (0 === l)
                                break t;
                            if (f = c - l,
                            r.offset > f) {
                                if (f = r.offset - f,
                                f > r.whave && r.sane) {
                                    t.msg = "invalid distance too far back",
                                    r.mode = Re;
                                    break
                                }
                                f > r.wnext ? (f -= r.wnext,
                                _ = r.wsize - f) : _ = r.wnext - f,
                                f > r.length && (f = r.length),
                                g = r.window
                            } else
                                g = i,
                                _ = s - r.offset,
                                f = r.length;
                            f > l && (f = l),
                            l -= f,
                            r.length -= f;
                            do {
                                i[s++] = g[_++]
                            } while (--f);
                            0 === r.length && (r.mode = Ae);
                            break;
                        case 16205:
                            if (0 === l)
                                break t;
                            i[s++] = r.length,
                            l--,
                            r.mode = Ae;
                            break;
                        case ze:
                            if (r.wrap) {
                                for (; d < 32; ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h |= n[a++] << d,
                                    d += 8
                                }
                                if (c -= l,
                                t.total_out += c,
                                r.total += c,
                                4 & r.wrap && c && (t.adler = r.check = r.flags ? O(r.check, i, c, s - c) : Z(r.check, i, c, s - c)),
                                c = l,
                                4 & r.wrap && (r.flags ? h : Ce(h)) !== r.check) {
                                    t.msg = "incorrect data check",
                                    r.mode = Re;
                                    break
                                }
                                h = 0,
                                d = 0
                            }
                            r.mode = 16207;
                        case 16207:
                            if (r.wrap && r.flags) {
                                for (; d < 32; ) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    h += n[a++] << d,
                                    d += 8
                                }
                                if (4 & r.wrap && h !== (4294967295 & r.total)) {
                                    t.msg = "incorrect length check",
                                    r.mode = Re;
                                    break
                                }
                                h = 0,
                                d = 0
                            }
                            r.mode = 16208;
                        case 16208:
                            x = fe;
                            break t;
                        case Re:
                            x = we;
                            break t;
                        case 16210:
                            return pe;
                        default:
                            return ge
                        }
                    return t.next_out = s,
                    t.avail_out = l,
                    t.next_in = a,
                    t.avail_in = o,
                    r.hold = h,
                    r.bits = d,
                    (r.wsize || c !== t.avail_out && r.mode < Re && (r.mode < ze || e !== he)) && Fe(t, t.output, t.next_out, c - t.avail_out),
                    u -= t.avail_in,
                    c -= t.avail_out,
                    t.total_in += u,
                    t.total_out += c,
                    r.total += c,
                    4 & r.wrap && c && (t.adler = r.check = r.flags ? O(r.check, i, c, t.next_out - c) : Z(r.check, i, c, t.next_out - c)),
                    t.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === ve ? 128 : 0) + (r.mode === Ee || r.mode === Se ? 256 : 0),
                    (0 === u && 0 === c || e === he) && x === ce && (x = me),
                    x
                }
                ,
                inflateEnd: t => {
                    if (Te(t))
                        return ge;
                    let e = t.state;
                    return e.window && (e.window = null),
                    t.state = null,
                    ce
                }
                ,
                inflateGetHeader: (t, e) => {
                    if (Te(t))
                        return ge;
                    const r = t.state;
                    return 0 == (2 & r.wrap) ? ge : (r.head = e,
                    e.done = !1,
                    ce)
                }
                ,
                inflateSetDictionary: (t, e) => {
                    const r = e.length;
                    let n, i, a;
                    return Te(t) ? ge : (n = t.state,
                    0 !== n.wrap && n.mode !== ke ? ge : n.mode === ke && (i = 1,
                    i = Z(i, e, r, 0),
                    i !== n.check) ? we : (a = Fe(t, e, r, r),
                    a ? (n.mode = 16210,
                    pe) : (n.havedict = 1,
                    ce)))
                }
                ,
                inflateInfo: "pako inflate (from Nodeca project)"
            }
              , Pe = function() {
                this.text = 0,
                this.time = 0,
                this.xflags = 0,
                this.os = 0,
                this.extra = null,
                this.extra_len = 0,
                this.name = "",
                this.comment = "",
                this.hcrc = 0,
                this.done = !1
            };
            const je = Object.prototype.toString
              , {Z_NO_FLUSH: Ke, Z_FINISH: Ge, Z_OK: Je, Z_STREAM_END: Ye, Z_NEED_DICT: Ve, Z_STREAM_ERROR: $e, Z_DATA_ERROR: We, Z_MEM_ERROR: qe} = H;
            function Xe(t) {
                this.options = Lt.assign({
                    chunkSize: 65536,
                    windowBits: 15,
                    to: ""
                }, t || {});
                const e = this.options;
                e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits,
                0 === e.windowBits && (e.windowBits = -15)),
                !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32),
                e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
                this.err = 0,
                this.msg = "",
                this.ended = !1,
                this.chunks = [],
                this.strm = new Pt,
                this.strm.avail_out = 0;
                let r = Me.inflateInit2(this.strm, e.windowBits);
                if (r !== Je)
                    throw new Error(L[r]);
                if (this.header = new Pe,
                Me.inflateGetHeader(this.strm, this.header),
                e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = Mt.string2buf(e.dictionary) : "[object ArrayBuffer]" === je.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
                e.raw && (r = Me.inflateSetDictionary(this.strm, e.dictionary),
                r !== Je)))
                    throw new Error(L[r])
            }
            function Qe(t, e) {
                const r = new Xe(e);
                if (r.push(t),
                r.err)
                    throw r.msg || L[r.err];
                return r.result
            }
            Xe.prototype.push = function(t, e) {
                const r = this.strm
                  , n = this.options.chunkSize
                  , i = this.options.dictionary;
                let a, s, o;
                if (this.ended)
                    return !1;
                for (s = e === ~~e ? e : !0 === e ? Ge : Ke,
                "[object ArrayBuffer]" === je.call(t) ? r.input = new Uint8Array(t) : r.input = t,
                r.next_in = 0,
                r.avail_in = r.input.length; ; ) {
                    for (0 === r.avail_out && (r.output = new Uint8Array(n),
                    r.next_out = 0,
                    r.avail_out = n),
                    a = Me.inflate(r, s),
                    a === Ve && i && (a = Me.inflateSetDictionary(r, i),
                    a === Je ? a = Me.inflate(r, s) : a === We && (a = Ve)); r.avail_in > 0 && a === Ye && r.state.wrap > 0 && 0 !== t[r.next_in]; )
                        Me.inflateReset(r),
                        a = Me.inflate(r, s);
                    switch (a) {
                    case $e:
                    case We:
                    case Ve:
                    case qe:
                        return this.onEnd(a),
                        this.ended = !0,
                        !1
                    }
                    if (o = r.avail_out,
                    r.next_out && (0 === r.avail_out || a === Ye))
                        if ("string" === this.options.to) {
                            let t = Mt.utf8border(r.output, r.next_out)
                              , e = r.next_out - t
                              , i = Mt.buf2string(r.output, t);
                            r.next_out = e,
                            r.avail_out = n - e,
                            e && r.output.set(r.output.subarray(t, t + e), 0),
                            this.onData(i)
                        } else
                            this.onData(r.output.length === r.next_out ? r.output : r.output.subarray(0, r.next_out));
                    if (a !== Je || 0 !== o) {
                        if (a === Ye)
                            return a = Me.inflateEnd(this.strm),
                            this.onEnd(a),
                            this.ended = !0,
                            !0;
                        if (0 === r.avail_in)
                            break
                    }
                }
                return !0
            }
            ,
            Xe.prototype.onData = function(t) {
                this.chunks.push(t)
            }
            ,
            Xe.prototype.onEnd = function(t) {
                t === Je && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Lt.flattenChunks(this.chunks)),
                this.chunks = [],
                this.err = t,
                this.msg = this.strm.msg
            }
            ;
            var tr = {
                Inflate: Xe,
                inflate: Qe,
                inflateRaw: function(t, e) {
                    return (e = e || {}).raw = !0,
                    Qe(t, e)
                },
                ungzip: Qe,
                constants: H
            };
            const {Deflate: er, deflate: rr, deflateRaw: nr, gzip: ir} = ee
              , {Inflate: ar, inflate: sr, inflateRaw: or, ungzip: lr} = tr;
            var hr = {
                Deflate: er,
                deflate: rr,
                deflateRaw: nr,
                gzip: ir,
                Inflate: ar,
                inflate: sr,
                inflateRaw: or,
                ungzip: lr,
                constants: H
            };
            const dr = 1e13;
            class ur {
                buf;
                constructor(t) {
                    this.buf = [+t || 0]
                }
                mulAdd(t, e) {
                    const r = this.buf
                      , n = r.length;
                    let i, a;
                    for (i = 0; i < n; ++i)
                        a = r[i] * t + e,
                        a < dr ? e = 0 : a -= (e = 0 | a / dr) * dr,
                        r[i] = a;
                    e > 0 && (r[i] = e)
                }
                sub(t) {
                    const e = this.buf
                      , r = e.length;
                    let n, i;
                    for (n = 0; n < r; ++n)
                        i = e[n] - t,
                        i < 0 ? (i += dr,
                        t = 1) : t = 0,
                        e[n] = i;
                    for (; 0 === e[e.length - 1]; )
                        e.pop()
                }
                toString(t) {
                    if (10 != (t || 10))
                        throw "only base 10 is supported";
                    const e = this.buf;
                    let r = e[e.length - 1].toString();
                    for (let t = e.length - 2; t >= 0; --t)
                        r += (dr + e[t]).toString().substring(1);
                    return r
                }
                valueOf() {
                    const t = this.buf;
                    let e = 0;
                    for (let r = t.length - 1; r >= 0; --r)
                        e = e * dr + t[r];
                    return e
                }
                simplify() {
                    const t = this.buf;
                    return 1 == t.length ? t[0] : this
                }
            }
            const cr = 'Unsupported algorithm name specified! Supported algorithms: "HS256", "HS384", "HS512", "RS256", "RS384", "RS512" and "none".'
              , fr = "Illegal argument specified!"
              , _r = "Could not find 'crypto'."
              , gr = "Could not find 'pako'."
              , wr = "Unsupported zip type.";
            function pr(t, e, r="argument", n="string") {
                let i = `Invalid argument passed to ${e}.`;
                return typeof t !== n ? i += ` Expected type '${n}', received '${typeof t}'.` : t ? "argument" !== r && (i += ` Provided ${r} is invalid.`) : i += ` Provided ${r} is empty.`,
                i
            }
            function mr(t) {
                return 0 === t[0] ? mr(t.slice(1)) : t
            }
            function br(t) {
                if (!t)
                    throw new Error(fr);
                const e = t.match(/[0-9A-F]{2}/gi);
                if (!e)
                    throw new Error(fr);
                return new Uint8Array(e.map((t => parseInt(t, 16))))
            }
            const yr = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/
              , kr = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
            function vr(t, e) {
                return t.length > e && (t = t.substring(0, e) + "…"),
                t
            }
            class xr {
                enc;
                pos;
                constructor(t, e=0) {
                    t instanceof xr ? (this.enc = t.enc,
                    this.pos = t.pos) : (this.enc = t,
                    this.pos = e)
                }
                get(t) {
                    if (void 0 === t && (t = this.pos++),
                    t >= this.enc.length)
                        throw "Requesting byte offset " + t + " on a stream of length " + this.enc.length;
                    return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
                }
                hexDigits = "0123456789ABCDEF";
                hexByte(t) {
                    return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                }
                hexDump(t, e, r) {
                    let n = "";
                    for (let i = t; i < e; ++i)
                        if (n += this.hexByte(this.get(i)),
                        !0 !== r)
                            switch (15 & i) {
                            case 7:
                                n += "  ";
                                break;
                            case 15:
                                n += "\n";
                                break;
                            default:
                                n += " "
                            }
                    return n
                }
                isASCII(t, e) {
                    for (let r = t; r < e; ++r) {
                        const t = this.get(r);
                        if (t < 32 || t > 176)
                            return !1
                    }
                    return !0
                }
                parseStringISO(t, e) {
                    let r = "";
                    for (let n = t; n < e; ++n)
                        r += String.fromCharCode(this.get(n));
                    return r
                }
                parseStringUTF(t, e) {
                    let r = "";
                    for (let n = t; n < e; ) {
                        const t = this.get(n++);
                        r += t < 128 ? String.fromCharCode(t) : t > 191 && t < 224 ? String.fromCharCode((31 & t) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & t) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
                    }
                    return r
                }
                parseStringBMP(t, e) {
                    let r, n, i = "";
                    for (let a = t; a < e; )
                        r = this.get(a++),
                        n = this.get(a++),
                        i += String.fromCharCode(r << 8 | n);
                    return i
                }
                parseTime(t, e, r) {
                    let n = this.parseStringISO(t, e);
                    const i = (r ? yr : kr).exec(n);
                    if (!i)
                        return "Unrecognized time: " + n;
                    if (r) {
                        const t = +i[1] < 70 ? 2e3 : 1900;
                        i[1] = t + ""
                    }
                    return n = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4],
                    i[5] && (n += ":" + i[5],
                    i[6] && (n += ":" + i[6],
                    i[7] && (n += "." + i[7]))),
                    i[8] && (n += " UTC",
                    "Z" != i[8] && (n += i[8],
                    i[9] && (n += ":" + i[9]))),
                    n
                }
                parseInteger(t, e) {
                    let r, n = this.get(t), i = "";
                    const a = n > 127
                      , s = a ? 255 : 0;
                    for (; n == s && ++t < e; )
                        n = this.get(t);
                    if (r = e - t,
                    0 === r)
                        return a ? -1 : 0;
                    if (r > 4) {
                        let t = +n;
                        for (r <<= 3; 0 == (128 & (t ^ s)); )
                            t <<= 1,
                            --r;
                        i = "(" + r + " bit)\n"
                    }
                    a && (n -= 256);
                    const o = new ur(n);
                    for (let r = t + 1; r < e; ++r)
                        o.mulAdd(256, this.get(r));
                    return i + o.toString()
                }
                parseBitString(t, e, r) {
                    const n = this.get(t)
                      , i = "(" + ((e - t - 1 << 3) - n) + " bit)\n";
                    let a = "";
                    for (let s = t + 1; s < e; ++s) {
                        const t = this.get(s)
                          , o = s == e - 1 ? n : 0;
                        for (let e = 7; e >= o; --e)
                            a += t >> e & 1 ? "1" : "0";
                        if (a.length > r)
                            return i + vr(a, r)
                    }
                    return i + a
                }
                parseOctetString(t, e, r) {
                    if (this.isASCII(t, e))
                        return vr(this.parseStringISO(t, e), r);
                    const n = e - t;
                    let i = "(" + n + " byte)\n";
                    n > (r /= 2) && (e = t + r);
                    for (let r = t; r < e; ++r)
                        i += this.hexByte(this.get(r));
                    return n > r && (i += "…"),
                    i
                }
                parseOID(t, e, r) {
                    let n = ""
                      , i = new ur
                      , a = 0;
                    for (let s = t; s < e; ++s) {
                        const t = this.get(s);
                        if (i.mulAdd(128, 127 & t),
                        a += 7,
                        !(128 & t)) {
                            if ("" === n)
                                if (i = i.simplify(),
                                i instanceof ur)
                                    i.sub(80),
                                    n = "2." + i.toString();
                                else {
                                    const t = i < 80 ? i < 40 ? 0 : 1 : 2;
                                    n = t + "." + (i - 40 * t)
                                }
                            else
                                n += "." + i.toString();
                            if (n.length > r)
                                return vr(n, r);
                            i = new ur,
                            a = 0
                        }
                    }
                    return a > 0 && (n += ".incomplete"),
                    n
                }
            }
            class Sr {
                stream;
                header;
                length;
                tag;
                sub;
                constructor(t, e, r, n, i) {
                    if (!(n instanceof Er))
                        throw "Invalid tag value.";
                    this.stream = t,
                    this.header = e,
                    this.length = r,
                    this.tag = n,
                    this.sub = i
                }
                typeName() {
                    switch (this.tag.tagClass) {
                    case 0:
                        switch (this.tag.tagNumber) {
                        case 0:
                            return "EOC";
                        case 1:
                            return "BOOLEAN";
                        case 2:
                            return "INTEGER";
                        case 3:
                            return "BIT_STRING";
                        case 4:
                            return "OCTET_STRING";
                        case 5:
                            return "NULL";
                        case 6:
                            return "OBJECT_IDENTIFIER";
                        case 7:
                            return "ObjectDescriptor";
                        case 8:
                            return "EXTERNAL";
                        case 9:
                            return "REAL";
                        case 10:
                            return "ENUMERATED";
                        case 11:
                            return "EMBEDDED_PDV";
                        case 12:
                            return "UTF8String";
                        case 16:
                            return "SEQUENCE";
                        case 17:
                            return "SET";
                        case 18:
                            return "NumericString";
                        case 19:
                            return "PrintableString";
                        case 20:
                            return "TeletexString";
                        case 21:
                            return "VideotexString";
                        case 22:
                            return "IA5String";
                        case 23:
                            return "UTCTime";
                        case 24:
                            return "GeneralizedTime";
                        case 25:
                            return "GraphicString";
                        case 26:
                            return "VisibleString";
                        case 27:
                            return "GeneralString";
                        case 28:
                            return "UniversalString";
                        case 30:
                            return "BMPString"
                        }
                        return "Universal_" + this.tag.tagNumber.toString();
                    case 1:
                        return "Application_" + this.tag.tagNumber.toString();
                    case 2:
                        return "[" + this.tag.tagNumber.toString() + "]";
                    case 3:
                        return "Private_" + this.tag.tagNumber.toString()
                    }
                }
                content(t) {
                    if (void 0 === this.tag)
                        return null;
                    void 0 === t && (t = 1 / 0);
                    const e = this.posContent()
                      , r = Math.abs(this.length);
                    if (!this.tag.isUniversal())
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + r, t);
                    switch (this.tag.tagNumber) {
                    case 1:
                        return 0 === this.stream.get(e) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(e, e + r);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + r, t);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + r, t);
                    case 6:
                        return this.stream.parseOID(e, e + r, t);
                    case 16:
                    case 17:
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                    case 12:
                        return vr(this.stream.parseStringUTF(e, e + r), t);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return vr(this.stream.parseStringISO(e, e + r), t);
                    case 30:
                        return vr(this.stream.parseStringBMP(e, e + r), t);
                    case 23:
                    case 24:
                        return this.stream.parseTime(e, e + r, 23 == this.tag.tagNumber)
                    }
                    return null
                }
                toString() {
                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                }
                posStart() {
                    return this.stream.pos
                }
                posContent() {
                    return this.stream.pos + this.header
                }
                posEnd() {
                    return this.stream.pos + this.header + Math.abs(this.length)
                }
                toHexString() {
                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                }
                getHex() {
                    return this.stream.hexDump(this.posContent(), this.posEnd(), !0)
                }
                getAB(t=!0) {
                    return t ? mr(br(this.getHex())) : br(this.getHex())
                }
                static decodeLength(t) {
                    let e = t.get();
                    const r = 127 & e;
                    if (r == e)
                        return r;
                    if (r > 6)
                        throw "Length over 48 bits not supported at position " + (t.pos - 1);
                    if (0 === r)
                        return null;
                    e = 0;
                    for (let n = 0; n < r; ++n)
                        e = 256 * e + t.get();
                    return e
                }
                static decode(t) {
                    t instanceof xr || (t = new xr(t,0));
                    const e = new xr(t)
                      , r = new Er(t);
                    let n = Sr.decodeLength(t)
                      , i = null;
                    const a = t.pos
                      , s = a - e.pos
                      , o = function() {
                        if (i = [],
                        null !== n) {
                            const e = a + n;
                            for (; t.pos < e; )
                                i[i.length] = Sr.decode(t);
                            if (t.pos != e)
                                throw "Content size is not correct for container starting at offset " + a
                        } else
                            try {
                                for (; ; ) {
                                    const e = Sr.decode(t);
                                    if (e.tag.isEOC())
                                        break;
                                    i[i.length] = e
                                }
                                n = a - t.pos
                            } catch (t) {
                                throw "Exception while decoding undefined length content: " + t
                            }
                    };
                    if (r.tagConstructed)
                        o();
                    else if (r.isUniversal() && (3 == r.tagNumber || 4 == r.tagNumber))
                        try {
                            if (3 == r.tagNumber && 0 != t.get())
                                throw "BIT STRINGs with unused bits cannot encapsulate.";
                            o();
                            for (let t = 0; t < i.length; ++t)
                                if (i[t].tag.isEOC())
                                    throw "EOC is not supposed to be actual content."
                        } catch (t) {
                            i = null
                        }
                    if (null === i) {
                        if (null === n)
                            throw "We can't skip over an invalid tag with undefined length at offset " + a;
                        t.pos = a + Math.abs(n)
                    }
                    return new Sr(e,s,n,r,i)
                }
            }
            class Er {
                tagClass;
                tagConstructed;
                tagNumber;
                constructor(t) {
                    let e = t.get();
                    if (this.tagClass = e >> 6,
                    this.tagConstructed = 0 != (32 & e),
                    this.tagNumber = 31 & e,
                    31 == this.tagNumber) {
                        const r = new ur;
                        do {
                            e = t.get(),
                            r.mulAdd(128, 127 & e)
                        } while (128 & e);
                        this.tagNumber = r.simplify()
                    }
                }
                isUniversal() {
                    return 0 === this.tagClass
                }
                isEOC() {
                    return 0 === this.tagClass && 0 === this.tagNumber
                }
            }
            const Ar = "object" == typeof window && (window.crypto || window.msCrypto)
              , zr = Ar && (Ar.subtle || Ar.webkitSubtle || Ar.Subtle);
            class Rr {
                header = "";
                payload = "";
                signature = "";
                constructor(t, e="JwtSplit") {
                    if ("string" != typeof t)
                        throw new Error(pr(t, e, "JWT string"));
                    this.fromString(t, e)
                }
                fromString(t, e="JwtSplit.fromString") {
                    const r = t.split(".");
                    if (3 !== r.length)
                        throw new Error(pr(t, e, "JWT string"));
                    const [n,i,a] = r;
                    this.header = n,
                    this.payload = i,
                    this.signature = a
                }
                toString() {
                    return this.header + "." + this.payload + "." + this.signature
                }
            }
            class Cr {
                header = {};
                payload = {};
                signature = "";
                constructor(t, e="JwtDecode") {
                    if ("string" != typeof t)
                        throw new Error(pr(t, e, "JWT string"));
                    this.fromString(t, e)
                }
                isGzip() {
                    return Or(this.header)
                }
                fromString(t, e="JwtDecode.fromString") {
                    const r = Mr(t, e);
                    r && (this.header = r.header ? Tr(Br(r.header)) : {},
                    this.payload = r.payload ? this.isGzip() ? Tr(Vr(r.payload)) : Tr(Br(r.payload)) : {},
                    this.signature = r.signature || "")
                }
                toString() {
                    return Gr(Dr(this.header)) + "." + (this.isGzip() ? Jr(Dr(this.payload)) : Gr(Dr(this.payload))) + "." + this.signature
                }
            }
            function Ur(t) {
                try {
                    return Promise.resolve(t())
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            function Tr(t) {
                return JSON.parse(t)
            }
            function Dr(t) {
                return JSON.stringify(t)
            }
            function Nr(t) {
                if ("undefined" != typeof Buffer)
                    return xn(Buffer.from(t, "base64"));
                if ("undefined" != typeof atob)
                    return xn(atob(t));
                throw new Error(fr)
            }
            function Ir(t) {
                if ("string" != typeof t || t.length % 4 != 0)
                    throw new Error(fr);
                return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            function Zr(t) {
                if ("string" != typeof t || t.length % 4 == 1)
                    throw new Error(fr);
                for (; t.length % 4 != 0; )
                    t += "=";
                return t.replace(/-/g, "+").replace(/_/g, "/")
            }
            function Br(t) {
                return Nr(Zr(t))
            }
            function Or(t) {
                return "object" == typeof t && "string" == typeof t.zip && "GZIP" === t.zip.toUpperCase()
            }
            function Lr(t, e="jwtDecode") {
                return new Cr(t,e)
            }
            const Hr = Lr
              , Fr = Lr;
            function Mr(t, e="jwtSplit") {
                return new Rr(t,e)
            }
            const Pr = Mr
              , jr = Mr;
            function Kr(t) {
                if ("undefined" != typeof Buffer)
                    return Buffer.from(vn(t)).toString("base64");
                if ("undefined" != typeof btoa)
                    return btoa(qr(vn(t)));
                throw new Error(fr)
            }
            function Gr(t) {
                return Ir(Kr(t))
            }
            function Jr(t, e="zlib") {
                return Gr($r(t, e))
            }
            function Yr(t) {
                if ("string" != typeof t)
                    throw new Error(fr);
                if (hr && (hr.inflate || hr.ungzip)) {
                    const e = Wr(t);
                    let r;
                    try {
                        r = hr.inflate(e, {
                            raw: !1
                        })
                    } catch {
                        try {
                            r = hr.ungzip(e, {
                                raw: !1
                            })
                        } catch {
                            throw new Error(wr)
                        }
                    }
                    return qr(r)
                }
                throw new Error(gr)
            }
            function Vr(t) {
                return xn(Yr(Br(t)))
            }
            function $r(t, e="zlib") {
                if ("string" != typeof t)
                    throw new Error(fr);
                if (hr && (hr.deflate || hr.gzip)) {
                    let r;
                    if ("gzip" === e)
                        r = hr.gzip(t, {
                            raw: !1
                        });
                    else {
                        if ("zlib" !== e)
                            throw new Error(wr);
                        r = hr.deflate(t, {
                            raw: !1
                        })
                    }
                    return qr(r)
                }
                throw new Error(gr)
            }
            function Wr(t) {
                const e = new ArrayBuffer(t.length)
                  , r = new Uint8Array(e);
                for (let e = 0; e < t.length; e++)
                    r[e] = t.charCodeAt(e);
                return r
            }
            function qr(t) {
                return t instanceof Uint8Array || (t = new Uint8Array(t)),
                String.fromCharCode(...Array.from(t))
            }
            async function Xr(t, e) {
                if (zr) {
                    const r = Wr(e);
                    return await zr.importKey("raw", r, {
                        name: "HMAC",
                        hash: {
                            name: t
                        }
                    }, !0, ["sign"]).then((t => ({
                        update: async function(e) {
                            return await zr.sign("HMAC", t, Wr(e))
                        }
                    })))
                }
                {
                    const n = await r.e(623).then(r.t.bind(r, 623, 23));
                    return n && n.createHmac ? Promise.resolve(n.createHmac(t.replace("SHA-", "sha"), e)) : Promise.reject(Ar)
                }
            }
            function Qr(t) {
                return async function(e, r) {
                    const n = await Xr("SHA-" + t, r);
                    return zr ? n ? Promise.resolve(Gr(qr(await n.update(e)))) : Promise.reject(fr) : Promise.resolve(Ir(n.update(e).digest("base64")))
                }
            }
            function tn(t) {
                return async function(e, r, n) {
                    return await Qr(t)(e, n) === r
                }
            }
            function en(t) {
                if ("string" != typeof t)
                    throw new Error(fr);
                let e = "public";
                const r = t.split("\n")
                  , n = ["-BEGIN RSA PRIVATE KEY-", "-END RSA PRIVATE KEY-"]
                  , i = ["-BEGIN RSA PUBLIC KEY-", "-BEGIN PUBLIC KEY-", "-END PUBLIC KEY-", "-END RSA PUBLIC KEY-"]
                  , a = r.map((t => t.trim())).filter((t => t.length && function(t) {
                    return n.some((e => t.toUpperCase().indexOf(e) > -1)) ? (e = "private",
                    !1) : !i.some((e => t.toUpperCase().indexOf(e) > -1))
                }(t))).join("");
                if (a.length)
                    return {
                        body: Wr(Nr(Zr(a))),
                        type: e
                    };
                throw new Error(fr)
            }
            function rn(t) {
                if (!t)
                    throw new Error(fr);
                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                let e = Sr.decode(t);
                const r = {};
                if (3 === e.sub.length && (e = e.sub[2].sub[0]),
                9 === e.sub.length ? (r.modulus = e.sub[1].getAB(),
                r.publicExponent = parseInt(e.sub[2].getHex(), 16),
                r.privateExponent = e.sub[3].getAB(),
                r.prime1 = e.sub[4].getAB(),
                r.prime2 = e.sub[5].getAB(),
                r.exponent1 = e.sub[6].getAB(),
                r.exponent2 = e.sub[7].getAB(),
                r.coefficient = e.sub[8].getAB()) : 2 === e.sub.length && (e = e.sub[1].sub[0],
                r.modulus = e.sub[0].getAB(),
                r.publicExponent = parseInt(e.sub[1].getHex(), 16)),
                r.bits = 8 * (r.modulus.length - 1) + Math.ceil(Math.log(r.modulus[0] + 1) / Math.log(2)),
                !r.bits)
                    throw new Error(fr);
                return r
            }
            function nn(t, e, r) {
                if (!t)
                    throw new Error(fr);
                if ("private" === (e = "string" == typeof e && e.toLowerCase() || ["public", "private"][t.privateExponent ? 1 : 0]) && !t.privateExponent)
                    throw new Error(fr);
                let n = t.publicExponent;
                const i = Math.ceil(Math.log(n) / Math.log(256))
                  , a = new Uint8Array(i).map((function(t) {
                    return t = n % 256,
                    n = Math.floor(n / 256),
                    t
                }
                )).reverse()
                  , s = Object.assign({
                    kty: "RSA"
                }, r, {
                    n: Gr(qr(t.modulus)),
                    e: Gr(qr(a))
                });
                return "private" === e && Object.assign(s, {
                    d: Gr(qr(t.privateExponent)),
                    p: Gr(qr(t.prime1)),
                    q: Gr(qr(t.prime2)),
                    dp: Gr(qr(t.exponent1)),
                    dq: Gr(qr(t.exponent2)),
                    qi: Gr(qr(t.coefficient))
                }),
                s
            }
            function an(t, e, r) {
                return Ur(( () => nn(rn(en(t).body), e, r)))
            }
            async function sn(t) {
                if (zr)
                    return {
                        update: function(e) {
                            return {
                                sign: async function(r) {
                                    return await an(r, "private", {
                                        key_ops: ["sign"],
                                        alg: t.replace("SHA-", "RS")
                                    }).then((async r => await zr.importKey("jwk", r, {
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: {
                                            name: t
                                        }
                                    }, !0, ["sign"]).then((async r => await zr.sign({
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: {
                                            name: t
                                        }
                                    }, r, Wr(e)).then(qr).then(Kr)))))
                                }
                            }
                        }
                    };
                {
                    const e = await r.e(623).then(r.t.bind(r, 623, 23));
                    if (e && e.createSign)
                        return e.createSign(t.replace("SHA-", "RSA-SHA"));
                    throw new Error(_r)
                }
            }
            function on(t) {
                return async function(e, r) {
                    try {
                        const n = await sn("SHA-" + t);
                        return Ir(await n.update(e).sign(r, "base64"))
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }
            }
            async function ln(t) {
                if (zr)
                    return {
                        update: function(e) {
                            return {
                                verify: async function(r, n) {
                                    return await an(r, "public", {
                                        key_ops: ["verify"],
                                        alg: t.replace("SHA-", "RS")
                                    }).then((async ({kty: r, n: i, e: a}) => await zr.importKey("jwk", {
                                        kty: r,
                                        n: i,
                                        e: a
                                    }, {
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: {
                                            name: t
                                        }
                                    }, !1, ["verify"]).then((async t => await zr.verify("RSASSA-PKCS1-v1_5", t, Wr(Br(n)), Wr(e))))))
                                }
                            }
                        }
                    };
                {
                    const e = await r.e(623).then(r.t.bind(r, 623, 23));
                    if (e && e.createVerify)
                        return e.createVerify(t.replace("SHA-", "RSA-SHA"));
                    throw new Error(_r)
                }
            }
            function hn(t) {
                return async function(e, r, n) {
                    try {
                        r = Zr(r);
                        const i = await ln("SHA-" + t);
                        return await i.update(e).verify(n, r, "base64")
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }
            }
            async function dn(t, e, r, n) {
                if ("string" != typeof t || t.length < 4)
                    throw new Error(cr);
                const i = t.toLowerCase();
                if ("none" === i)
                    return "" === r;
                const a = i.slice(0, 2)
                  , s = parseInt(i.slice(2));
                if (isNaN(s) || [256, 384, 512].indexOf(s) < 0)
                    throw new Error(cr);
                switch (a) {
                case "rs":
                    return await hn(s)(e, r, n);
                case "hs":
                    return await tn(s)(e, r, n);
                default:
                    throw new Error(cr)
                }
            }
            async function un(t, e, r) {
                if ("string" != typeof t || t.length < 4)
                    throw new Error(cr);
                const n = t.toLowerCase();
                if ("none" === n)
                    return "";
                const i = n.slice(0, 2)
                  , a = parseInt(n.slice(2));
                if (isNaN(a) || [256, 384, 512].indexOf(a) < 0)
                    throw new Error(cr);
                switch (i) {
                case "rs":
                    return await on(a)(e, r);
                case "hs":
                    return await Qr(a)(e, r);
                default:
                    throw new Error(cr)
                }
            }
            async function cn(t, e) {
                const r = Mr(t, "jwtVerify")
                  , n = Tr(Br(r.header))
                  , i = r.header + "." + r.payload;
                return Ur(( () => dn(n.alg, i, r.signature, e)))
            }
            const fn = cn
              , _n = cn;
            function gn(t, e) {
                const r = Mr(t, "jwtSign")
                  , n = Tr(Br(r.header))
                  , i = r.header + "." + r.payload;
                return Ur((async () => await un(n.alg, i, e)))
            }
            const wn = gn
              , pn = gn;
            async function mn(t, e, r) {
                const n = Lr(t, "jwtResign");
                return r && (n.header.alg = r),
                n.signature = await gn(n.toString(), e),
                n.toString()
            }
            const bn = mn
              , yn = mn;
            function kn(t) {
                return Array.prototype.some.apply(t, [t => t.charCodeAt(0) > 255])
            }
            function vn(t) {
                if (kn(t)) {
                    const e = Sn();
                    if (e)
                        return e.encode(t)
                }
                return Wr(t)
            }
            function xn(t) {
                if ("string" == typeof t) {
                    try {
                        const e = En("utf8", {
                            fatal: !0
                        });
                        if (e)
                            return e.decode(Wr(t))
                    } catch {}
                    return t
                }
                try {
                    const e = En("utf8", {
                        fatal: !0
                    });
                    if (e)
                        return e.decode(t)
                } catch {}
                return t.toString("binary")
            }
            function Sn() {
                if ("undefined" != typeof TextEncoder)
                    return new TextEncoder;
                {
                    const t = r(8009);
                    if (void 0 !== t?.TextEncoder)
                        return new t.TextEncoder
                }
                return !1
            }
            function En(...t) {
                if ("undefined" != typeof TextDecoder)
                    return new TextDecoder(...t);
                {
                    const e = r(8009);
                    if (void 0 !== e?.TextDecoder)
                        return new e.TextDecoder(...t)
                }
                return !1
            }
            t.AB2s = qr,
            t.Asn1Tag = class {
                tagClass = 0;
                tagConstructed = !1;
                tagNumber = 0;
                constructor(t) {
                    const e = t.read();
                    this.tagClass = e >> 6,
                    this.tagConstructed = 0 != (32 & e),
                    this.tagNumber = 31 & e
                }
            }
            ,
            t.J2s = Dr,
            t.JwtDecode = Cr,
            t.JwtSplit = Rr,
            t.algHSsign = Qr,
            t.algHSverify = tn,
            t.algRSsign = on,
            t.algRSverify = hn,
            t.algSign = un,
            t.algVerify = dn,
            t.asn12jwk = nn,
            t.b2bu = Ir,
            t.b2s = Nr,
            t.bu2b = Zr,
            t.bu2s = Br,
            t.createHmac = Xr,
            t.createSign = sn,
            t.createVerify = ln,
            t.cryptoType = async function() {
                const t = Ar || await r.e(623).then(r.t.bind(r, 623, 23));
                return t ? t.type || "crypto-node" : "undefined"
            }
            ,
            t.decode = Fr,
            t.decodeJwt = Hr,
            t.getTextDecoder = En,
            t.getTextEncoder = Sn,
            t.isGzip = Or,
            t.jwtDecode = Lr,
            t.jwtResign = mn,
            t.jwtSign = gn,
            t.jwtSplit = Mr,
            t.jwtVerify = cn,
            t.notLatin1String = kn,
            t.pem2asn1 = rn,
            t.pem2jwk = an,
            t.resign = yn,
            t.resignJwt = bn,
            t.s2AB = function(t) {
                const e = new ArrayBuffer(t.length)
                  , r = new Uint8Array(e);
                for (let e = 0; e < t.length; e++)
                    r[e] = t.charCodeAt(e);
                return e
            }
            ,
            t.s2J = Tr,
            t.s2U8A = Wr,
            t.s2b = Kr,
            t.s2bu = Gr,
            t.s2pem = en,
            t.s2zbu = Jr,
            t.sign = pn,
            t.signJwt = wn,
            t.split = jr,
            t.splitJwt = Pr,
            t.textDecode = xn,
            t.textEncode = vn,
            t.tryPromise = Ur,
            t.unzip = Yr,
            t.verify = _n,
            t.verifyJwt = fn,
            t.webCrypto = Ar,
            t.webCryptoSubtle = zr,
            t.zbu2s = Vr,
            t.zip = $r
        }(e)
    }
}]);
