var Dp = Object.defineProperty;
var Lp = (o, e, t) =>
  e in o
    ? Dp(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (o[e] = t);
var Rr = (o, e, t) => Lp(o, typeof e != "symbol" ? e + "" : e, t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = t(i);
    fetch(i.href, n);
  }
})();
function Mr(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return o;
}
function Fc(o, e) {
  (o.prototype = Object.create(e.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Nt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Sn = { duration: 0.5, overwrite: !1, delay: 0 },
  du,
  ct,
  Te,
  Yt = 1e8,
  ve = 1 / Yt,
  ml = Math.PI * 2,
  Ip = ml / 4,
  Np = 0,
  Bc = Math.sqrt,
  zp = Math.cos,
  Fp = Math.sin,
  Qe = function (e) {
    return typeof e == "string";
  },
  Le = function (e) {
    return typeof e == "function";
  },
  Wr = function (e) {
    return typeof e == "number";
  },
  pu = function (e) {
    return typeof e > "u";
  },
  Er = function (e) {
    return typeof e == "object";
  },
  St = function (e) {
    return e !== !1;
  },
  gu = function () {
    return typeof window < "u";
  },
  ro = function (e) {
    return Le(e) || Qe(e);
  },
  $c =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  ht = Array.isArray,
  _l = /(?:-?\.?\d|\.)+/gi,
  Vc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ln = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Fa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Uc = /[+-]=-?[.\d]+/,
  Wc = /[^,'"\[\]\s]+/gi,
  Bp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ae,
  gr,
  vl,
  mu,
  zt = {},
  Yo = {},
  Yc,
  Xc = function (e) {
    return (Yo = Fi(e, zt)) && Ot;
  },
  _u = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ys = function (e, t) {
    return !t && console.warn(e);
  },
  Gc = function (e, t) {
    return (e && (zt[e] = t) && Yo && (Yo[e] = t)) || zt;
  },
  ws = function () {
    return 0;
  },
  $p = { suppressEvents: !0, isStart: !0, kill: !1 },
  Po = { suppressEvents: !0, kill: !1 },
  Vp = { suppressEvents: !0 },
  vu = {},
  ni = [],
  yl = {},
  Hc,
  Mt = {},
  Ba = {},
  vf = 30,
  ko = [],
  yu = "",
  wu = function (e) {
    var t = e[0],
      r,
      i;
    if ((Er(t) || Le(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
      for (i = ko.length; i-- && !ko[i].targetTest(t); );
      r = ko[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new _h(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  ki = function (e) {
    return e._gsap || wu(Xt(e))[0]._gsap;
  },
  qc = function (e, t, r) {
    return (r = e[t]) && Le(r)
      ? e[t]()
      : (pu(r) && e.getAttribute && e.getAttribute(t)) || r;
  },
  Et = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Fe = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Ze = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  pn = function (e, t) {
    var r = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  Up = function (e, t) {
    for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
    return i < r;
  },
  Xo = function () {
    var e = ni.length,
      t = ni.slice(0),
      r,
      i;
    for (yl = {}, ni.length = 0, r = 0; r < e; r++)
      (i = t[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  jc = function (e, t, r, i) {
    ni.length && !ct && Xo(),
      e.render(t, r, ct && t < 0 && (e._initted || e._startAt)),
      ni.length && !ct && Xo();
  },
  Kc = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Wc).length < 2
      ? t
      : Qe(e)
      ? e.trim()
      : e;
  },
  Jc = function (e) {
    return e;
  },
  qt = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  Wp = function (e) {
    return function (t, r) {
      for (var i in r)
        i in t || (i === "duration" && e) || i === "ease" || (t[i] = r[i]);
    };
  },
  Fi = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  yf = function o(e, t) {
    for (var r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = Er(t[r]) ? o(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e;
  },
  Go = function (e, t) {
    var r = {},
      i;
    for (i in e) i in t || (r[i] = e[i]);
    return r;
  },
  rs = function (e) {
    var t = e.parent || Ae,
      r = e.keyframes ? Wp(ht(e.keyframes)) : qt;
    if (St(e.inherit))
      for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Yp = function (e, t) {
    for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; );
    return r < 0;
  },
  Zc = function (e, t, r, i, n) {
    var s = e[i],
      a;
    if (n) for (a = t[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((t._next = s._next), (s._next = t)) : ((t._next = e[r]), (e[r] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = s),
      (t.parent = t._dp = e),
      t
    );
  },
  ga = function (e, t, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var n = t._prev,
      s = t._next;
    n ? (n._next = s) : e[r] === t && (e[r] = s),
      s ? (s._prev = n) : e[i] === t && (e[i] = n),
      (t._next = t._prev = t.parent = null);
  },
  ai = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  Ai = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  Xp = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  wl = function (e, t, r, i) {
    return (
      e._startAt &&
      (ct
        ? e._startAt.revert(Po)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  },
  Gp = function o(e) {
    return !e || (e._ts && o(e.parent));
  },
  wf = function (e) {
    return e._repeat ? En(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  En = function (e, t) {
    var r = Math.floor((e /= t));
    return e && r === e ? r - 1 : r;
  },
  Ho = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  ma = function (e) {
    return (e._end = Ze(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ve) || 0)
    ));
  },
  _a = function (e, t) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = Ze(
          r._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        ma(e),
        r._dirty || Ai(r, e)),
      e
    );
  },
  Qc = function (e, t) {
    var r;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((r = Ho(e.rawTime(), t)),
        (!t._dur || Vs(0, t.totalDuration(), r) - t._tTime > ve) &&
          t.render(r, !0)),
      Ai(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -ve;
    }
  },
  vr = function (e, t, r, i) {
    return (
      t.parent && ai(t),
      (t._start = Ze(
        (Wr(r) ? r : r || e !== Ae ? $t(e, r, t) : e._time) + t._delay
      )),
      (t._end = Ze(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Zc(e, t, "_first", "_last", e._sort ? "_start" : 0),
      bl(t) || (e._recent = t),
      i || Qc(e, t),
      e._ts < 0 && _a(e, e._tTime),
      e
    );
  },
  eh = function (e, t) {
    return (
      (zt.ScrollTrigger || _u("scrollTrigger", t)) &&
      zt.ScrollTrigger.create(t, e)
    );
  },
  th = function (e, t, r, i, n) {
    if ((xu(e, t, n), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !ct &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Hc !== Dt.frame
    )
      return ni.push(e), (e._lazy = [n, i]), 1;
  },
  Hp = function o(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
  },
  bl = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  qp = function (e, t, r, i) {
    var n = e.ratio,
      s =
        t < 0 ||
        (!t &&
          ((!e._start && Hp(e) && !(!e._initted && bl(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !bl(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      f,
      h;
    if (
      (a &&
        e._repeat &&
        ((l = Vs(0, e._tDur, t)),
        (f = En(l, a)),
        e._yoyo && f & 1 && (s = 1 - s),
        f !== En(e._tTime, a) &&
          ((n = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
      s !== n || ct || i || e._zTime === ve || (!t && e._zTime))
    ) {
      if (!e._initted && th(e, t, i, r, l)) return;
      for (
        h = e._zTime,
          e._zTime = t || (r ? ve : 0),
          r || (r = t && !h),
          e.ratio = s,
          e._from && (s = 1 - s),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(s, u.d), (u = u._next);
      t < 0 && wl(e, t, r, !0),
        e._onUpdate && !r && It(e, "onUpdate"),
        l && e._repeat && !r && e.parent && It(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === s &&
          (s && ai(e, 1),
          !r &&
            !ct &&
            (It(e, s ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  jp = function (e, t, r) {
    var i;
    if (r > t)
      for (i = e._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  Tn = function (e, t, r, i) {
    var n = e._repeat,
      s = Ze(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !i && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = n ? (n < 0 ? 1e10 : Ze(s * (n + 1) + e._rDelay * n)) : s),
      a > 0 && !i && _a(e, (e._tTime = e._tDur * a)),
      e.parent && ma(e),
      r || Ai(e.parent, e),
      e
    );
  },
  bf = function (e) {
    return e instanceof vt ? Ai(e) : Tn(e, e._dur);
  },
  Kp = { _start: 0, endTime: ws, totalDuration: ws },
  $t = function o(e, t, r) {
    var i = e.labels,
      n = e._recent || Kp,
      s = e.duration() >= Yt ? n.endTime(!1) : e._dur,
      a,
      l,
      u;
    return Qe(t) && (isNaN(t) || t in i)
      ? ((l = t.charAt(0)),
        (u = t.substr(-1) === "%"),
        (a = t.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (u ? (a < 0 ? n : r).totalDuration() / 100 : 1))
          : a < 0
          ? (t in i || (i[t] = s), i[t])
          : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            u && r && (l = (l / 100) * (ht(r) ? r[0] : r).totalDuration()),
            a > 1 ? o(e, t.substr(0, a - 1), r) + l : s + l))
      : t == null
      ? s
      : +t;
  },
  is = function (e, t, r) {
    var i = Wr(t[1]),
      n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = t[n],
      a,
      l;
    if ((i && (s.duration = t[1]), (s.parent = r), e)) {
      for (a = s, l = r; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = St(l.vars.inherit) && l.parent);
      (s.immediateRender = St(a.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = t[n - 1]);
    }
    return new Ue(t[0], s, t[n + 1]);
  },
  di = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Vs = function (e, t, r) {
    return r < e ? e : r > t ? t : r;
  },
  ft = function (e, t) {
    return !Qe(e) || !(t = Bp.exec(e)) ? "" : t[1];
  },
  Jp = function (e, t, r) {
    return di(r, function (i) {
      return Vs(e, t, i);
    });
  },
  xl = [].slice,
  rh = function (e, t) {
    return (
      e &&
      Er(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Er(e[0]))) &&
      !e.nodeType &&
      e !== gr
    );
  },
  Zp = function (e, t, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var n;
        return (Qe(i) && !t) || rh(i, 1)
          ? (n = r).push.apply(n, Xt(i))
          : r.push(i);
      }) || r
    );
  },
  Xt = function (e, t, r) {
    return Te && !t && Te.selector
      ? Te.selector(e)
      : Qe(e) && !r && (vl || !Cn())
      ? xl.call((t || mu).querySelectorAll(e), 0)
      : ht(e)
      ? Zp(e, r)
      : rh(e)
      ? xl.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Sl = function (e) {
    return (
      (e = Xt(e)[0] || ys("Invalid scope") || {}),
      function (t) {
        var r = e.current || e.nativeElement || e;
        return Xt(
          t,
          r.querySelectorAll
            ? r
            : r === e
            ? ys("Invalid scope") || mu.createElement("div")
            : e
        );
      }
    );
  },
  ih = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  nh = function (e) {
    if (Le(e)) return e;
    var t = Er(e) ? e : { each: e },
      r = Ri(t.ease),
      i = t.from || 0,
      n = parseFloat(t.base) || 0,
      s = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      u = t.axis,
      f = i,
      h = i;
    return (
      Qe(i)
        ? (f = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && l && ((f = i[0]), (h = i[1])),
      function (d, c, g) {
        var p = (g || t).length,
          m = s[p],
          v,
          w,
          y,
          x,
          S,
          T,
          b,
          O,
          C;
        if (!m) {
          if (((C = t.grid === "auto" ? 0 : (t.grid || [1, Yt])[1]), !C)) {
            for (
              b = -Yt;
              b < (b = g[C++].getBoundingClientRect().left) && C < p;

            );
            C < p && C--;
          }
          for (
            m = s[p] = [],
              v = l ? Math.min(C, p) * f - 0.5 : i % C,
              w = C === Yt ? 0 : l ? (p * h) / C - 0.5 : (i / C) | 0,
              b = 0,
              O = Yt,
              T = 0;
            T < p;
            T++
          )
            (y = (T % C) - v),
              (x = w - ((T / C) | 0)),
              (m[T] = S = u ? Math.abs(u === "y" ? x : y) : Bc(y * y + x * x)),
              S > b && (b = S),
              S < O && (O = S);
          i === "random" && ih(m),
            (m.max = b - O),
            (m.min = O),
            (m.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (C > p
                    ? p - 1
                    : u
                    ? u === "y"
                      ? p / C
                      : C
                    : Math.max(C, p / C)) ||
                0) * (i === "edges" ? -1 : 1)),
            (m.b = p < 0 ? n - p : n),
            (m.u = ft(t.amount || t.each) || 0),
            (r = r && p < 0 ? ph(r) : r);
        }
        return (
          (p = (m[d] - m.min) / m.max || 0),
          Ze(m.b + (r ? r(p) : p) * m.v) + m.u
        );
      }
    );
  },
  El = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = Ze(Math.round(parseFloat(r) / e) * e * t);
      return (i - (i % 1)) / t + (Wr(r) ? 0 : ft(r));
    };
  },
  sh = function (e, t) {
    var r = ht(e),
      i,
      n;
    return (
      !r &&
        Er(e) &&
        ((i = r = e.radius || Yt),
        e.values
          ? ((e = Xt(e.values)), (n = !Wr(e[0])) && (i *= i))
          : (e = El(e.increment))),
      di(
        t,
        r
          ? Le(e)
            ? function (s) {
                return (n = e(s)), Math.abs(n - s) <= i ? n : s;
              }
            : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    l = parseFloat(n ? s.y : 0),
                    u = Yt,
                    f = 0,
                    h = e.length,
                    d,
                    c;
                  h--;

                )
                  n
                    ? ((d = e[h].x - a), (c = e[h].y - l), (d = d * d + c * c))
                    : (d = Math.abs(e[h] - a)),
                    d < u && ((u = d), (f = h));
                return (
                  (f = !i || u <= i ? e[f] : s),
                  n || f === s || Wr(s) ? f : f + ft(s)
                );
              }
          : El(e)
      )
    );
  },
  oh = function (e, t, r, i) {
    return di(ht(e) ? !t : r === !0 ? !!(r = 0) : !i, function () {
      return ht(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) *
                r *
                i
            ) / i;
    });
  },
  Qp = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return function (i) {
      return t.reduce(function (n, s) {
        return s(n);
      }, i);
    };
  },
  eg = function (e, t) {
    return function (r) {
      return e(parseFloat(r)) + (t || ft(r));
    };
  },
  tg = function (e, t, r) {
    return lh(e, t, 0, 1, r);
  },
  ah = function (e, t, r) {
    return di(r, function (i) {
      return e[~~t(i)];
    });
  },
  rg = function o(e, t, r) {
    var i = t - e;
    return ht(e)
      ? ah(e, o(0, e.length), t)
      : di(r, function (n) {
          return ((i + ((n - e) % i)) % i) + e;
        });
  },
  ig = function o(e, t, r) {
    var i = t - e,
      n = i * 2;
    return ht(e)
      ? ah(e, o(0, e.length - 1), t)
      : di(r, function (s) {
          return (s = (n + ((s - e) % n)) % n || 0), e + (s > i ? n - s : s);
        });
  },
  bs = function (e) {
    for (var t = 0, r = "", i, n, s, a; ~(i = e.indexOf("random(", t)); )
      (s = e.indexOf(")", i)),
        (a = e.charAt(i + 7) === "["),
        (n = e.substr(i + 7, s - i - 7).match(a ? Wc : _l)),
        (r +=
          e.substr(t, i - t) + oh(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
        (t = s + 1);
    return r + e.substr(t, e.length - t);
  },
  lh = function (e, t, r, i, n) {
    var s = t - e,
      a = i - r;
    return di(n, function (l) {
      return r + (((l - e) / s) * a || 0);
    });
  },
  ng = function o(e, t, r, i) {
    var n = isNaN(e + t)
      ? 0
      : function (c) {
          return (1 - c) * e + c * t;
        };
    if (!n) {
      var s = Qe(e),
        a = {},
        l,
        u,
        f,
        h,
        d;
      if ((r === !0 && (i = 1) && (r = null), s))
        (e = { p: e }), (t = { p: t });
      else if (ht(e) && !ht(t)) {
        for (f = [], h = e.length, d = h - 2, u = 1; u < h; u++)
          f.push(o(e[u - 1], e[u]));
        h--,
          (n = function (g) {
            g *= h;
            var p = Math.min(d, ~~g);
            return f[p](g - p);
          }),
          (r = t);
      } else i || (e = Fi(ht(e) ? [] : {}, e));
      if (!f) {
        for (l in t) bu.call(a, e, l, "get", t[l]);
        n = function (g) {
          return Tu(g, a) || (s ? e.p : e);
        };
      }
    }
    return di(r, n);
  },
  xf = function (e, t, r) {
    var i = e.labels,
      n = Yt,
      s,
      a,
      l;
    for (s in i)
      (a = i[s] - t),
        a < 0 == !!r && a && n > (a = Math.abs(a)) && ((l = s), (n = a));
    return l;
  },
  It = function (e, t, r) {
    var i = e.vars,
      n = i[t],
      s = Te,
      a = e._ctx,
      l,
      u,
      f;
    if (n)
      return (
        (l = i[t + "Params"]),
        (u = i.callbackScope || e),
        r && ni.length && Xo(),
        a && (Te = a),
        (f = l ? n.apply(u, l) : n.call(u)),
        (Te = s),
        f
      );
  },
  qn = function (e) {
    return (
      ai(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!ct),
      e.progress() < 1 && It(e, "onInterrupt"),
      e
    );
  },
  un,
  uh = [],
  fh = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), gu() || e.headless)) {
        var t = e.name,
          r = Le(e),
          i =
            t && !r && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: ws,
            render: Tu,
            add: bu,
            kill: wg,
            modifier: yg,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: Eu,
            aliases: {},
            register: 0,
          };
        if ((Cn(), e !== i)) {
          if (Mt[t]) return;
          qt(i, qt(Go(e, n), s)),
            Fi(i.prototype, Fi(n, Go(e, s))),
            (Mt[(i.prop = t)] = i),
            e.targetTest && (ko.push(i), (vu[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        Gc(t, i), e.register && e.register(Ot, i, Tt);
      } else uh.push(e);
  },
  _e = 255,
  jn = {
    aqua: [0, _e, _e],
    lime: [0, _e, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _e],
    navy: [0, 0, 128],
    white: [_e, _e, _e],
    olive: [128, 128, 0],
    yellow: [_e, _e, 0],
    orange: [_e, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_e, 0, 0],
    pink: [_e, 192, 203],
    cyan: [0, _e, _e],
    transparent: [_e, _e, _e, 0],
  },
  $a = function (e, t, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (r - t) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? t + (r - t) * (2 / 3 - e) * 6
        : t) *
        _e +
        0.5) |
        0
    );
  },
  ch = function (e, t, r) {
    var i = e ? (Wr(e) ? [e >> 16, (e >> 8) & _e, e & _e] : 0) : jn.black,
      n,
      s,
      a,
      l,
      u,
      f,
      h,
      d,
      c,
      g;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), jn[e]))
        i = jn[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (s = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              s +
              s +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & _e, i & _e, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & _e, e & _e]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = g = e.match(_l)), !t))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (f = +i[2] / 100),
            (s = f <= 0.5 ? f * (u + 1) : f + u - f * u),
            (n = f * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = $a(l + 1 / 3, n, s)),
            (i[1] = $a(l, n, s)),
            (i[2] = $a(l - 1 / 3, n, s));
        else if (~e.indexOf("="))
          return (i = e.match(Vc)), r && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(_l) || jn.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !g &&
        ((n = i[0] / _e),
        (s = i[1] / _e),
        (a = i[2] / _e),
        (h = Math.max(n, s, a)),
        (d = Math.min(n, s, a)),
        (f = (h + d) / 2),
        h === d
          ? (l = u = 0)
          : ((c = h - d),
            (u = f > 0.5 ? c / (2 - h - d) : c / (h + d)),
            (l =
              h === n
                ? (s - a) / c + (s < a ? 6 : 0)
                : h === s
                ? (a - n) / c + 2
                : (n - s) / c + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(f * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  hh = function (e) {
    var t = [],
      r = [],
      i = -1;
    return (
      e.split(si).forEach(function (n) {
        var s = n.match(ln) || [];
        t.push.apply(t, s), r.push((i += s.length + 1));
      }),
      (t.c = r),
      t
    );
  },
  Sf = function (e, t, r) {
    var i = "",
      n = (e + i).match(si),
      s = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      f,
      h;
    if (!n) return e;
    if (
      ((n = n.map(function (d) {
        return (
          (d = ch(d, t, 1)) &&
          s +
            (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      r && ((f = hh(e)), (l = r.c), l.join(i) !== f.c.join(i)))
    )
      for (u = e.replace(si, "1").split(ln), h = u.length - 1; a < h; a++)
        i +=
          u[a] +
          (~l.indexOf(a)
            ? n.shift() || s + "0,0,0,0)"
            : (f.length ? f : n.length ? n : r).shift());
    if (!u)
      for (u = e.split(si), h = u.length - 1; a < h; a++) i += u[a] + n[a];
    return i + u[h];
  },
  si = (function () {
    var o =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in jn) o += "|" + e + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  sg = /hsl[a]?\(/,
  dh = function (e) {
    var t = e.join(" "),
      r;
    if (((si.lastIndex = 0), si.test(t)))
      return (
        (r = sg.test(t)),
        (e[1] = Sf(e[1], r)),
        (e[0] = Sf(e[0], r, hh(e[1]))),
        !0
      );
  },
  xs,
  Dt = (function () {
    var o = Date.now,
      e = 500,
      t = 33,
      r = o(),
      i = r,
      n = 1e3 / 240,
      s = n,
      a = [],
      l,
      u,
      f,
      h,
      d,
      c,
      g = function p(m) {
        var v = o() - i,
          w = m === !0,
          y,
          x,
          S,
          T;
        if (
          ((v > e || v < 0) && (r += v - t),
          (i += v),
          (S = i - r),
          (y = S - s),
          (y > 0 || w) &&
            ((T = ++h.frame),
            (d = S - h.time * 1e3),
            (h.time = S = S / 1e3),
            (s += y + (y >= n ? 4 : n - y)),
            (x = 1)),
          w || (l = u(p)),
          x)
        )
          for (c = 0; c < a.length; c++) a[c](S, d, T, m);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (m) {
          return d / (1e3 / (m || 60));
        },
        wake: function () {
          Yc &&
            (!vl &&
              gu() &&
              ((gr = vl = window),
              (mu = gr.document || {}),
              (zt.gsap = Ot),
              (gr.gsapVersions || (gr.gsapVersions = [])).push(Ot.version),
              Xc(Yo || gr.GreenSockGlobals || (!gr.gsap && gr) || {}),
              uh.forEach(fh)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && h.sleep(),
            (u =
              f ||
              function (m) {
                return setTimeout(m, (s - h.time * 1e3 + 1) | 0);
              }),
            (xs = 1),
            g(2));
        },
        sleep: function () {
          (f ? cancelAnimationFrame : clearTimeout)(l), (xs = 0), (u = ws);
        },
        lagSmoothing: function (m, v) {
          (e = m || 1 / 0), (t = Math.min(v || 33, e));
        },
        fps: function (m) {
          (n = 1e3 / (m || 240)), (s = h.time * 1e3 + n);
        },
        add: function (m, v, w) {
          var y = v
            ? function (x, S, T, b) {
                m(x, S, T, b), h.remove(y);
              }
            : m;
          return h.remove(m), a[w ? "unshift" : "push"](y), Cn(), y;
        },
        remove: function (m, v) {
          ~(v = a.indexOf(m)) && a.splice(v, 1) && c >= v && c--;
        },
        _listeners: a,
      }),
      h
    );
  })(),
  Cn = function () {
    return !xs && Dt.wake();
  },
  ue = {},
  og = /^[\d.\-M][\d.\-,\s]/,
  ag = /["']/g,
  lg = function (e) {
    for (
      var t = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        n = 1,
        s = r.length,
        a,
        l,
        u;
      n < s;
      n++
    )
      (l = r[n]),
        (a = n !== s - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (t[i] = isNaN(u) ? u.replace(ag, "").trim() : +u),
        (i = l.substr(a + 1).trim());
    return t;
  },
  ug = function (e) {
    var t = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  fg = function (e) {
    var t = (e + "").split("("),
      r = ue[t[0]];
    return r && t.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [lg(t[1])] : ug(e).split(",").map(Kc)
        )
      : ue._CE && og.test(e)
      ? ue._CE("", e)
      : r;
  },
  ph = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  gh = function o(e, t) {
    for (var r = e._first, i; r; )
      r instanceof vt
        ? o(r, t)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== t &&
          (r.timeline
            ? o(r.timeline, t)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = t))),
        (r = r._next);
  },
  Ri = function (e, t) {
    return (e && (Le(e) ? e : ue[e] || fg(e))) || t;
  },
  Hi = function (e, t, r, i) {
    r === void 0 &&
      (r = function (l) {
        return 1 - t(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var n = { easeIn: t, easeOut: r, easeInOut: i },
      s;
    return (
      Et(e, function (a) {
        (ue[a] = zt[a] = n), (ue[(s = a.toLowerCase())] = r);
        for (var l in n)
          ue[
            s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = ue[a + "." + l] = n[l];
      }),
      n
    );
  },
  mh = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Va = function o(e, t, r) {
    var i = t >= 1 ? t : 1,
      n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      s = (n / ml) * (Math.asin(1 / i) || 0),
      a = function (f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Fp((f - s) * n) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : mh(a);
    return (
      (n = ml / n),
      (l.config = function (u, f) {
        return o(e, u, f);
      }),
      l
    );
  },
  Ua = function o(e, t) {
    t === void 0 && (t = 1.70158);
    var r = function (s) {
        return s ? --s * s * ((t + 1) * s + t) + 1 : 0;
      },
      i =
        e === "out"
          ? r
          : e === "in"
          ? function (n) {
              return 1 - r(1 - n);
            }
          : mh(r);
    return (
      (i.config = function (n) {
        return o(e, n);
      }),
      i
    );
  };
Et("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, e) {
  var t = e < 5 ? e + 1 : e;
  Hi(
    o + ",Power" + (t - 1),
    e
      ? function (r) {
          return Math.pow(r, t);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, t);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, t) / 2
        : 1 - Math.pow((1 - r) * 2, t) / 2;
    }
  );
});
ue.Linear.easeNone = ue.none = ue.Linear.easeIn;
Hi("Elastic", Va("in"), Va("out"), Va());
(function (o, e) {
  var t = 1 / e,
    r = 2 * t,
    i = 2.5 * t,
    n = function (a) {
      return a < t
        ? o * a * a
        : a < r
        ? o * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < i
        ? o * (a -= 2.25 / e) * a + 0.9375
        : o * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  Hi(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
Hi("Expo", function (o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
Hi("Circ", function (o) {
  return -(Bc(1 - o * o) - 1);
});
Hi("Sine", function (o) {
  return o === 1 ? 1 : -zp(o * Ip) + 1;
});
Hi("Back", Ua("in"), Ua("out"), Ua());
ue.SteppedEase =
  ue.steps =
  zt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (t ? 0 : 1),
          n = t ? 1 : 0,
          s = 1 - ve;
        return function (a) {
          return (((i * Vs(0, s, a)) | 0) + n) * r;
        };
      },
    };
Sn.ease = ue["quad.out"];
Et(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (o) {
    return (yu += o + "," + o + "Params,");
  }
);
var _h = function (e, t) {
    (this.id = Np++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : qc),
      (this.set = t ? t.getSetter : Eu);
  },
  Ss = (function () {
    function o(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Tn(this, +t.duration, 1, 1),
        (this.data = t.data),
        Te && ((this._ctx = Te), Te.data.push(this)),
        xs || Dt.wake();
    }
    var e = o.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Tn(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((Cn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (_a(this, r), !n._dp || n.parent || Qc(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            vr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === ve) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), jc(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + wf(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                wf(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (r, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * n, i)
          : this._repeat
          ? En(this._tTime, n) + 1
          : 1;
      }),
      (e.timeScale = function (r, i) {
        if (!arguments.length) return this._rts === -ve ? 0 : this._rts;
        if (this._rts === r) return this;
        var n =
          this.parent && this._ts ? Ho(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -ve ? 0 : this._rts),
          this.totalTime(Vs(-Math.abs(this._delay), this._tDur, n), i !== !1),
          ma(this),
          Xp(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Cn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ve &&
                      (this._tTime -= ve)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && vr(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (St(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ho(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = Vp);
        var i = ct;
        return (
          (ct = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (ct = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
          (n = i._start + n / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(r) : n;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), bf(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), bf(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime($t(this, r), St(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, St(i));
      }),
      (e.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -ve : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -ve), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          n;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (n = r.rawTime(!0)) >= i &&
            n < this.endTime(!0) - ve)
        );
      }),
      (e.eventCallback = function (r, i, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
              ? ((s[r] = i),
                n && (s[r + "Params"] = n),
                r === "onUpdate" && (this._onUpdate = i))
              : delete s[r],
            this)
          : s[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (n) {
          var s = Le(r) ? r : Jc,
            a = function () {
              var u = i.then;
              (i.then = null),
                Le(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                n(s),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? a()
            : (i._prom = a);
        });
      }),
      (e.kill = function () {
        qn(this);
      }),
      o
    );
  })();
qt(Ss.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ve,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var vt = (function (o) {
  Fc(e, o);
  function e(r, i) {
    var n;
    return (
      r === void 0 && (r = {}),
      (n = o.call(this, r) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!r.smoothChildTiming),
      (n.autoRemoveChildren = !!r.autoRemoveChildren),
      (n._sort = St(r.sortChildren)),
      Ae && vr(r.parent || Ae, Mr(n), i),
      r.reversed && n.reverse(),
      r.paused && n.paused(!0),
      r.scrollTrigger && eh(Mr(n), r.scrollTrigger),
      n
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, n, s) {
      return is(0, arguments, this), this;
    }),
    (t.from = function (i, n, s) {
      return is(1, arguments, this), this;
    }),
    (t.fromTo = function (i, n, s, a) {
      return is(2, arguments, this), this;
    }),
    (t.set = function (i, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        rs(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new Ue(i, n, $t(this, s), 1),
        this
      );
    }),
    (t.call = function (i, n, s) {
      return vr(this, Ue.delayedCall(0, i, n), s);
    }),
    (t.staggerTo = function (i, n, s, a, l, u, f) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || a),
        (s.onComplete = u),
        (s.onCompleteParams = f),
        (s.parent = this),
        new Ue(i, s, $t(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (i, n, s, a, l, u, f) {
      return (
        (s.runBackwards = 1),
        (rs(s).immediateRender = St(s.immediateRender)),
        this.staggerTo(i, n, s, a, l, u, f)
      );
    }),
    (t.staggerFromTo = function (i, n, s, a, l, u, f, h) {
      return (
        (a.startAt = s),
        (rs(a).immediateRender = St(a.immediateRender)),
        this.staggerTo(i, n, a, l, u, f, h)
      );
    }),
    (t.render = function (i, n, s) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        f = i <= 0 ? 0 : Ze(i),
        h = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        c,
        g,
        p,
        m,
        v,
        w,
        y,
        x,
        S,
        T,
        b;
      if (
        (this !== Ae && f > l && i >= 0 && (f = l), f !== this._tTime || s || h)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((f += this._time - a), (i += this._time - a)),
          (d = f),
          (x = this._start),
          (y = this._ts),
          (v = !y),
          h && (u || (a = this._zTime), (i || !n) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((T = this._yoyo),
            (m = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(m * 100 + i, n, s);
          if (
            ((d = Ze(f % m)),
            f === l
              ? ((p = this._repeat), (d = u))
              : ((p = ~~(f / m)),
                p && p === f / m && ((d = u), p--),
                d > u && (d = u)),
            (S = En(this._tTime, m)),
            !a &&
              this._tTime &&
              S !== p &&
              this._tTime - S * m - this._dur <= 0 &&
              (S = p),
            T && p & 1 && ((d = u - d), (b = 1)),
            p !== S && !this._lock)
          ) {
            var O = T && S & 1,
              C = O === (T && p & 1);
            if (
              (p < S && (O = !O),
              (a = O ? 0 : f % u ? u : f),
              (this._lock = 1),
              (this.render(a || (b ? 0 : Ze(p * m)), n, !u)._lock = 0),
              (this._tTime = f),
              !n && this.parent && It(this, "onRepeat"),
              this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                v !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              C &&
                ((this._lock = 2),
                (a = O ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !b && this.invalidate()),
              (this._lock = 0),
              !this._ts && !v)
            )
              return this;
            gh(this, b);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((w = jp(this, Ze(a), Ze(d))), w && (f -= d - (d = w._start))),
          (this._tTime = f),
          (this._time = d),
          (this._act = !y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && d && !n && !p && (It(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (d >= a && i >= 0)
          for (c = this._first; c; ) {
            if (
              ((g = c._next), (c._act || d >= c._start) && c._ts && w !== c)
            ) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (d - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (d - c._start) * c._ts,
                  n,
                  s
                ),
                d !== this._time || (!this._ts && !v))
              ) {
                (w = 0), g && (f += this._zTime = -ve);
                break;
              }
            }
            c = g;
          }
        else {
          c = this._last;
          for (var E = i < 0 ? i : d; c; ) {
            if (((g = c._prev), (c._act || E <= c._end) && c._ts && w !== c)) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (E - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (E - c._start) * c._ts,
                  n,
                  s || (ct && (c._initted || c._startAt))
                ),
                d !== this._time || (!this._ts && !v))
              ) {
                (w = 0), g && (f += this._zTime = E ? -ve : ve);
                break;
              }
            }
            c = g;
          }
        }
        if (
          w &&
          !n &&
          (this.pause(),
          (w.render(d >= a ? 0 : -ve)._zTime = d >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = x), ma(this), this.render(i, n, s);
        this._onUpdate && !n && It(this, "onUpdate", !0),
          ((f === l && this._tTime >= this.totalDuration()) || (!f && a)) &&
            (x === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((f === l && this._ts > 0) || (!f && this._ts < 0)) &&
                ai(this, 1),
              !n &&
                !(i < 0 && !a) &&
                (f || a || !l) &&
                (It(
                  this,
                  f === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (i, n) {
      var s = this;
      if ((Wr(n) || (n = $t(this, n, i)), !(i instanceof Ss))) {
        if (ht(i))
          return (
            i.forEach(function (a) {
              return s.add(a, n);
            }),
            this
          );
        if (Qe(i)) return this.addLabel(i, n);
        if (Le(i)) i = Ue.delayedCall(0, i);
        else return this;
      }
      return this !== i ? vr(this, i, n) : this;
    }),
    (t.getChildren = function (i, n, s, a) {
      i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -Yt);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Ue
            ? n && l.push(u)
            : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, s)))),
          (u = u._next);
      return l;
    }),
    (t.getById = function (i) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === i) return n[s];
    }),
    (t.remove = function (i) {
      return Qe(i)
        ? this.removeLabel(i)
        : Le(i)
        ? this.killTweensOf(i)
        : (ga(this, i),
          i === this._recent && (this._recent = this._last),
          Ai(this));
    }),
    (t.totalTime = function (i, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Ze(
              Dt.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          o.prototype.totalTime.call(this, i, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, n) {
      return (this.labels[i] = $t(this, n)), this;
    }),
    (t.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (t.addPause = function (i, n, s) {
      var a = Ue.delayedCall(0, n || ws, s);
      return (
        (a.data = "isPause"), (this._hasPause = 1), vr(this, a, $t(this, i))
      );
    }),
    (t.removePause = function (i) {
      var n = this._first;
      for (i = $t(this, i); n; )
        n._start === i && n.data === "isPause" && ai(n), (n = n._next);
    }),
    (t.killTweensOf = function (i, n, s) {
      for (var a = this.getTweensOf(i, s), l = a.length; l--; )
        Zr !== a[l] && a[l].kill(i, n);
      return this;
    }),
    (t.getTweensOf = function (i, n) {
      for (var s = [], a = Xt(i), l = this._first, u = Wr(n), f; l; )
        l instanceof Ue
          ? Up(l._targets, a) &&
            (u
              ? (!Zr || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            s.push(l)
          : (f = l.getTweensOf(a, n)).length && s.push.apply(s, f),
          (l = l._next);
      return s;
    }),
    (t.tweenTo = function (i, n) {
      n = n || {};
      var s = this,
        a = $t(s, i),
        l = n,
        u = l.startAt,
        f = l.onStart,
        h = l.onStartParams,
        d = l.immediateRender,
        c,
        g = Ue.to(
          s,
          qt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                ) ||
                ve,
              onStart: function () {
                if ((s.pause(), !c)) {
                  var m =
                    n.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale()
                    );
                  g._dur !== m && Tn(g, m, 0, 1).render(g._time, !0, !0),
                    (c = 1);
                }
                f && f.apply(g, h || []);
              },
            },
            n
          )
        );
      return d ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (i, n, s) {
      return this.tweenTo(n, qt({ startAt: { time: $t(this, i) } }, s));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return i === void 0 && (i = this._time), xf(this, $t(this, i));
    }),
    (t.previousLabel = function (i) {
      return i === void 0 && (i = this._time), xf(this, $t(this, i), 1);
    }),
    (t.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + ve);
    }),
    (t.shiftChildren = function (i, n, s) {
      s === void 0 && (s = 0);
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= s && ((a._start += i), (a._end += i)), (a = a._next);
      if (n) for (u in l) l[u] >= s && (l[u] += i);
      return Ai(this);
    }),
    (t.invalidate = function (i) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
      return o.prototype.invalidate.call(this, i);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Ai(this)
      );
    }),
    (t.totalDuration = function (i) {
      var n = 0,
        s = this,
        a = s._last,
        l = Yt,
        u,
        f,
        h;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (h = s.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (f = a._start),
            f > l && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (vr(s, a, f - a._delay, 1)._lock = 0))
              : (l = f),
            f < 0 &&
              a._ts &&
              ((n -= f),
              ((!h && !s._dp) || (h && h.smoothChildTiming)) &&
                ((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
              s.shiftChildren(-f, !1, -1 / 0),
              (l = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = u);
        Tn(s, s === Ae && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Ae._ts && (jc(Ae, Ho(i, Ae)), (Hc = Dt.frame)), Dt.frame >= vf)) {
        vf += Nt.autoSleep || 120;
        var n = Ae._first;
        if ((!n || !n._ts) && Nt.autoSleep && Dt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || Dt.sleep();
        }
      }
    }),
    e
  );
})(Ss);
qt(vt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var cg = function (e, t, r, i, n, s, a) {
    var l = new Tt(this._pt, e, t, 0, 1, Sh, null, n),
      u = 0,
      f = 0,
      h,
      d,
      c,
      g,
      p,
      m,
      v,
      w;
    for (
      l.b = r,
        l.e = i,
        r += "",
        i += "",
        (v = ~i.indexOf("random(")) && (i = bs(i)),
        s && ((w = [r, i]), s(w, e, t), (r = w[0]), (i = w[1])),
        d = r.match(Fa) || [];
      (h = Fa.exec(i));

    )
      (g = h[0]),
        (p = i.substring(u, h.index)),
        c ? (c = (c + 1) % 5) : p.substr(-5) === "rgba(" && (c = 1),
        g !== d[f++] &&
          ((m = parseFloat(d[f - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || f === 1 ? p : ",",
            s: m,
            c: g.charAt(1) === "=" ? pn(m, g) - m : parseFloat(g) - m,
            m: c && c < 4 ? Math.round : 0,
          }),
          (u = Fa.lastIndex));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = a),
      (Uc.test(i) || v) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  bu = function (e, t, r, i, n, s, a, l, u, f) {
    Le(i) && (i = i(n || 0, e, s));
    var h = e[t],
      d =
        r !== "get"
          ? r
          : Le(h)
          ? u
            ? e[
                t.indexOf("set") || !Le(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : h,
      c = Le(h) ? (u ? mg : bh) : Su,
      g;
    if (
      (Qe(i) &&
        (~i.indexOf("random(") && (i = bs(i)),
        i.charAt(1) === "=" &&
          ((g = pn(d, i) + (ft(d) || 0)), (g || g === 0) && (i = g))),
      !f || d !== i || Tl)
    )
      return !isNaN(d * i) && i !== ""
        ? ((g = new Tt(
            this._pt,
            e,
            t,
            +d || 0,
            i - (d || 0),
            typeof h == "boolean" ? vg : xh,
            0,
            c
          )),
          u && (g.fp = u),
          a && g.modifier(a, this, e),
          (this._pt = g))
        : (!h && !(t in e) && _u(t, i),
          cg.call(this, e, t, d, i, c, l || Nt.stringFilter, u));
  },
  hg = function (e, t, r, i, n) {
    if (
      (Le(e) && (e = ns(e, n, t, r, i)),
      !Er(e) || (e.style && e.nodeType) || ht(e) || $c(e))
    )
      return Qe(e) ? ns(e, n, t, r, i) : e;
    var s = {},
      a;
    for (a in e) s[a] = ns(e[a], n, t, r, i);
    return s;
  },
  vh = function (e, t, r, i, n, s) {
    var a, l, u, f;
    if (
      Mt[e] &&
      (a = new Mt[e]()).init(
        n,
        a.rawVars ? t[e] : hg(t[e], i, n, s, r),
        r,
        i,
        s
      ) !== !1 &&
      ((r._pt = l = new Tt(r._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
      r !== un)
    )
      for (u = r._ptLookup[r._targets.indexOf(n)], f = a._props.length; f--; )
        u[a._props[f]] = l;
    return a;
  },
  Zr,
  Tl,
  xu = function o(e, t, r) {
    var i = e.vars,
      n = i.ease,
      s = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      f = i.runBackwards,
      h = i.yoyoEase,
      d = i.keyframes,
      c = i.autoRevert,
      g = e._dur,
      p = e._startAt,
      m = e._targets,
      v = e.parent,
      w = v && v.data === "nested" ? v.vars.targets : m,
      y = e._overwrite === "auto" && !du,
      x = e.timeline,
      S,
      T,
      b,
      O,
      C,
      E,
      k,
      P,
      R,
      I,
      M,
      $,
      B;
    if (
      (x && (!d || !n) && (n = "none"),
      (e._ease = Ri(n, Sn.ease)),
      (e._yEase = h ? ph(Ri(h === !0 ? n : h, Sn.ease)) : 0),
      h &&
        e._yoyo &&
        !e._repeat &&
        ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
      (e._from = !x && !!i.runBackwards),
      !x || (d && !i.stagger))
    ) {
      if (
        ((P = m[0] ? ki(m[0]).harness : 0),
        ($ = P && i[P.prop]),
        (S = Go(i, vu)),
        p &&
          (p._zTime < 0 && p.progress(1),
          t < 0 && f && a && !c ? p.render(-1, !0) : p.revert(f && g ? Po : $p),
          (p._lazy = 0)),
        s)
      ) {
        if (
          (ai(
            (e._startAt = Ue.set(
              m,
              qt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: !p && St(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return It(e, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (ct || (!a && !c)) && e._startAt.revert(Po),
          a && g && t <= 0 && r <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (f && g && !p) {
        if (
          (t && (a = !1),
          (b = qt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !p && St(l),
              immediateRender: a,
              stagger: 0,
              parent: v,
            },
            S
          )),
          $ && (b[P.prop] = $),
          ai((e._startAt = Ue.set(m, b))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (ct ? e._startAt.revert(Po) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          o(e._startAt, ve, ve);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (g && St(l)) || (l && !g), T = 0;
        T < m.length;
        T++
      ) {
        if (
          ((C = m[T]),
          (k = C._gsap || wu(m)[T]._gsap),
          (e._ptLookup[T] = I = {}),
          yl[k.id] && ni.length && Xo(),
          (M = w === m ? T : w.indexOf(C)),
          P &&
            (R = new P()).init(C, $ || S, e, M, w) !== !1 &&
            ((e._pt = O =
              new Tt(e._pt, C, R.name, 0, 1, R.render, R, 0, R.priority)),
            R._props.forEach(function (F) {
              I[F] = O;
            }),
            R.priority && (E = 1)),
          !P || $)
        )
          for (b in S)
            Mt[b] && (R = vh(b, S, e, M, C, w))
              ? R.priority && (E = 1)
              : (I[b] = O =
                  bu.call(e, C, b, "get", S[b], M, w, 0, i.stringFilter));
        e._op && e._op[T] && e.kill(C, e._op[T]),
          y &&
            e._pt &&
            ((Zr = e),
            Ae.killTweensOf(C, I, e.globalTime(t)),
            (B = !e.parent),
            (Zr = 0)),
          e._pt && l && (yl[k.id] = 1);
      }
      E && Eh(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !B),
      d && t <= 0 && x.render(Yt, !0, !0);
  },
  dg = function (e, t, r, i, n, s, a, l) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      f,
      h,
      d,
      c;
    if (!u)
      for (
        u = e._ptCache[t] = [], d = e._ptLookup, c = e._targets.length;
        c--;

      ) {
        if (((f = d[c][t]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== t && f.fp !== t; ) f = f._next;
        if (!f)
          return (
            (Tl = 1),
            (e.vars[t] = "+=0"),
            xu(e, a),
            (Tl = 0),
            l ? ys(t + " not eligible for reset") : 1
          );
        u.push(f);
      }
    for (c = u.length; c--; )
      (h = u[c]),
        (f = h._pt || h),
        (f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c),
        (f.c = r - f.s),
        h.e && (h.e = Fe(r) + ft(h.e)),
        h.b && (h.b = f.s + ft(h.b));
  },
  pg = function (e, t) {
    var r = e[0] ? ki(e[0]).harness : 0,
      i = r && r.aliases,
      n,
      s,
      a,
      l;
    if (!i) return t;
    n = Fi({}, t);
    for (s in i)
      if (s in n) for (l = i[s].split(","), a = l.length; a--; ) n[l[a]] = n[s];
    return n;
  },
  gg = function (e, t, r, i) {
    var n = t.ease || i || "power1.inOut",
      s,
      a;
    if (ht(t))
      (a = r[e] || (r[e] = [])),
        t.forEach(function (l, u) {
          return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: n });
        });
    else
      for (s in t)
        (a = r[s] || (r[s] = [])),
          s === "ease" || a.push({ t: parseFloat(e), v: t[s], e: n });
  },
  ns = function (e, t, r, i, n) {
    return Le(e)
      ? e.call(t, r, i, n)
      : Qe(e) && ~e.indexOf("random(")
      ? bs(e)
      : e;
  },
  yh = yu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  wh = {};
Et(yh + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (wh[o] = 1);
});
var Ue = (function (o) {
  Fc(e, o);
  function e(r, i, n, s) {
    var a;
    typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
      (a = o.call(this, s ? i : rs(i)) || this);
    var l = a.vars,
      u = l.duration,
      f = l.delay,
      h = l.immediateRender,
      d = l.stagger,
      c = l.overwrite,
      g = l.keyframes,
      p = l.defaults,
      m = l.scrollTrigger,
      v = l.yoyoEase,
      w = i.parent || Ae,
      y = (ht(r) || $c(r) ? Wr(r[0]) : "length" in i) ? [r] : Xt(r),
      x,
      S,
      T,
      b,
      O,
      C,
      E,
      k;
    if (
      ((a._targets = y.length
        ? wu(y)
        : ys(
            "GSAP target " + r + " not found. https://gsap.com",
            !Nt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = c),
      g || d || ro(u) || ro(f))
    ) {
      if (
        ((i = a.vars),
        (x = a.timeline =
          new vt({
            data: "nested",
            defaults: p || {},
            targets: w && w.data === "nested" ? w.vars.targets : y,
          })),
        x.kill(),
        (x.parent = x._dp = Mr(a)),
        (x._start = 0),
        d || ro(u) || ro(f))
      ) {
        if (((b = y.length), (E = d && nh(d)), Er(d)))
          for (O in d) ~yh.indexOf(O) && (k || (k = {}), (k[O] = d[O]));
        for (S = 0; S < b; S++)
          (T = Go(i, wh)),
            (T.stagger = 0),
            v && (T.yoyoEase = v),
            k && Fi(T, k),
            (C = y[S]),
            (T.duration = +ns(u, Mr(a), S, C, y)),
            (T.delay = (+ns(f, Mr(a), S, C, y) || 0) - a._delay),
            !d &&
              b === 1 &&
              T.delay &&
              ((a._delay = f = T.delay), (a._start += f), (T.delay = 0)),
            x.to(C, T, E ? E(S, C, y) : 0),
            (x._ease = ue.none);
        x.duration() ? (u = f = 0) : (a.timeline = 0);
      } else if (g) {
        rs(qt(x.vars.defaults, { ease: "none" })),
          (x._ease = Ri(g.ease || i.ease || "none"));
        var P = 0,
          R,
          I,
          M;
        if (ht(g))
          g.forEach(function ($) {
            return x.to(y, $, ">");
          }),
            x.duration();
        else {
          T = {};
          for (O in g)
            O === "ease" || O === "easeEach" || gg(O, g[O], T, g.easeEach);
          for (O in T)
            for (
              R = T[O].sort(function ($, B) {
                return $.t - B.t;
              }),
                P = 0,
                S = 0;
              S < R.length;
              S++
            )
              (I = R[S]),
                (M = {
                  ease: I.e,
                  duration: ((I.t - (S ? R[S - 1].t : 0)) / 100) * u,
                }),
                (M[O] = I.v),
                x.to(y, M, P),
                (P += M.duration);
          x.duration() < u && x.to({}, { duration: u - x.duration() });
        }
      }
      u || a.duration((u = x.duration()));
    } else a.timeline = 0;
    return (
      c === !0 && !du && ((Zr = Mr(a)), Ae.killTweensOf(y), (Zr = 0)),
      vr(w, Mr(a), n),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (h ||
        (!u &&
          !g &&
          a._start === Ze(w._time) &&
          St(h) &&
          Gp(Mr(a)) &&
          w.data !== "nested")) &&
        ((a._tTime = -ve), a.render(Math.max(0, -f) || 0)),
      m && eh(Mr(a), m),
      a
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, n, s) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        f = i < 0,
        h = i > l - ve && !f ? l : i < ve ? 0 : i,
        d,
        c,
        g,
        p,
        m,
        v,
        w,
        y,
        x;
      if (!u) qp(this, i, n, s);
      else if (
        h !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f)
      ) {
        if (((d = h), (y = this.timeline), this._repeat)) {
          if (((p = u + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(p * 100 + i, n, s);
          if (
            ((d = Ze(h % p)),
            h === l
              ? ((g = this._repeat), (d = u))
              : ((g = ~~(h / p)),
                g && g === Ze(h / p) && ((d = u), g--),
                d > u && (d = u)),
            (v = this._yoyo && g & 1),
            v && ((x = this._yEase), (d = u - d)),
            (m = En(this._tTime, p)),
            d === a && !s && this._initted && g === m)
          )
            return (this._tTime = h), this;
          g !== m &&
            (y && this._yEase && gh(y, v),
            this.vars.repeatRefresh &&
              !v &&
              !this._lock &&
              this._time !== p &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(Ze(p * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (th(this, f ? i : d, s, n, h)) return (this._tTime = 0), this;
          if (a !== this._time && !(s && this.vars.repeatRefresh && g !== m))
            return this;
          if (u !== this._dur) return this.render(i, n, s);
        }
        if (
          ((this._tTime = h),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = w = (x || this._ease)(d / u)),
          this._from && (this.ratio = w = 1 - w),
          d && !a && !n && !g && (It(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (c = this._pt; c; ) c.r(w, c.d), (c = c._next);
        (y && y.render(i < 0 ? i : y._dur * y._ease(d / this._dur), n, s)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !n &&
            (f && wl(this, i, n, s), It(this, "onUpdate")),
          this._repeat &&
            g !== m &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            It(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (f && !this._onUpdate && wl(this, i, !0, !0),
            (i || !u) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              ai(this, 1),
            !n &&
              !(f && !a) &&
              (h || a || v) &&
              (It(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        o.prototype.invalidate.call(this, i)
      );
    }),
    (t.resetTo = function (i, n, s, a, l) {
      xs || Dt.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || xu(this, u),
        (f = this._ease(u / this._dur)),
        dg(this, i, n, s, a, f, u, l)
          ? this.resetTo(i, n, s, a, 1)
          : (_a(this, 0),
            this.parent ||
              Zc(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (i, n) {
      if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
        return (this._lazy = this._pt = 0), this.parent ? qn(this) : this;
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, n, Zr && Zr.vars.overwrite !== !0)
            ._first || qn(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Tn(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = i ? Xt(i) : a,
        u = this._ptLookup,
        f = this._pt,
        h,
        d,
        c,
        g,
        p,
        m,
        v;
      if ((!n || n === "all") && Yp(a, l))
        return n === "all" && (this._pt = 0), qn(this);
      for (
        h = this._op = this._op || [],
          n !== "all" &&
            (Qe(n) &&
              ((p = {}),
              Et(n, function (w) {
                return (p[w] = 1);
              }),
              (n = p)),
            (n = pg(a, n))),
          v = a.length;
        v--;

      )
        if (~l.indexOf(a[v])) {
          (d = u[v]),
            n === "all"
              ? ((h[v] = n), (g = d), (c = {}))
              : ((c = h[v] = h[v] || {}), (g = n));
          for (p in g)
            (m = d && d[p]),
              m &&
                ((!("kill" in m.d) || m.d.kill(p) === !0) && ga(this, m, "_pt"),
                delete d[p]),
              c !== "all" && (c[p] = 1);
        }
      return this._initted && !this._pt && f && qn(this), this;
    }),
    (e.to = function (i, n) {
      return new e(i, n, arguments[2]);
    }),
    (e.from = function (i, n) {
      return is(1, arguments);
    }),
    (e.delayedCall = function (i, n, s, a) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (i, n, s) {
      return is(2, arguments);
    }),
    (e.set = function (i, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(i, n);
    }),
    (e.killTweensOf = function (i, n, s) {
      return Ae.killTweensOf(i, n, s);
    }),
    e
  );
})(Ss);
qt(Ue.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Et("staggerTo,staggerFrom,staggerFromTo", function (o) {
  Ue[o] = function () {
    var e = new vt(),
      t = xl.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var Su = function (e, t, r) {
    return (e[t] = r);
  },
  bh = function (e, t, r) {
    return e[t](r);
  },
  mg = function (e, t, r, i) {
    return e[t](i.fp, r);
  },
  _g = function (e, t, r) {
    return e.setAttribute(t, r);
  },
  Eu = function (e, t) {
    return Le(e[t]) ? bh : pu(e[t]) && e.setAttribute ? _g : Su;
  },
  xh = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  vg = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Sh = function (e, t) {
    var r = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  Tu = function (e, t) {
    for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  yg = function (e, t, r, i) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === i && n.modifier(e, t, r), (n = s);
  },
  wg = function (e) {
    for (var t = this._pt, r, i; t; )
      (i = t._next),
        (t.p === e && !t.op) || t.op === e
          ? ga(this, t, "_pt")
          : t.dep || (r = 1),
        (t = i);
    return !r;
  },
  bg = function (e, t, r, i) {
    i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
  },
  Eh = function (e) {
    for (var t = e._pt, r, i, n, s; t; ) {
      for (r = t._next, i = n; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : s) ? (t._prev._next = t) : (n = t),
        (t._next = i) ? (i._prev = t) : (s = t),
        (t = r);
    }
    e._pt = n;
  },
  Tt = (function () {
    function o(t, r, i, n, s, a, l, u, f) {
      (this.t = r),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = a || xh),
        (this.d = l || this),
        (this.set = u || Su),
        (this.pr = f || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = o.prototype;
    return (
      (e.modifier = function (r, i, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = bg),
          (this.m = r),
          (this.mt = n),
          (this.tween = i);
      }),
      o
    );
  })();
Et(
  yu +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (o) {
    return (vu[o] = 1);
  }
);
zt.TweenMax = zt.TweenLite = Ue;
zt.TimelineLite = zt.TimelineMax = vt;
Ae = new vt({
  sortChildren: !1,
  defaults: Sn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Nt.stringFilter = dh;
var Mi = [],
  Ao = {},
  xg = [],
  Ef = 0,
  Sg = 0,
  Wa = function (e) {
    return (Ao[e] || xg).map(function (t) {
      return t();
    });
  },
  Cl = function () {
    var e = Date.now(),
      t = [];
    e - Ef > 2 &&
      (Wa("matchMediaInit"),
      Mi.forEach(function (r) {
        var i = r.queries,
          n = r.conditions,
          s,
          a,
          l,
          u;
        for (a in i)
          (s = gr.matchMedia(i[a]).matches),
            s && (l = 1),
            s !== n[a] && ((n[a] = s), (u = 1));
        u && (r.revert(), l && t.push(r));
      }),
      Wa("matchMediaRevert"),
      t.forEach(function (r) {
        return r.onMatch(r, function (i) {
          return r.add(null, i);
        });
      }),
      (Ef = e),
      Wa("matchMedia"));
  },
  Th = (function () {
    function o(t, r) {
      (this.selector = r && Sl(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Sg++),
        t && this.add(t);
    }
    var e = o.prototype;
    return (
      (e.add = function (r, i, n) {
        Le(r) && ((n = i), (i = r), (r = Le));
        var s = this,
          a = function () {
            var u = Te,
              f = s.selector,
              h;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = Sl(n)),
              (Te = s),
              (h = i.apply(s, arguments)),
              Le(h) && s._r.push(h),
              (Te = u),
              (s.selector = f),
              (s.isReverted = !1),
              h
            );
          };
        return (
          (s.last = a),
          r === Le
            ? a(s, function (l) {
                return s.add(null, l);
              })
            : r
            ? (s[r] = a)
            : a
        );
      }),
      (e.ignore = function (r) {
        var i = Te;
        (Te = null), r(this), (Te = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof o
              ? r.push.apply(r, i.getTweens())
              : i instanceof Ue &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var n = this;
        if (
          (r
            ? (function () {
                for (var a = n.getTweens(), l = n.data.length, u; l--; )
                  (u = n.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (f) {
                        return a.splice(a.indexOf(f), 1);
                      }));
                for (
                  a
                    .map(function (f) {
                      return {
                        g:
                          f._dur ||
                          f._delay ||
                          (f._sat && !f._sat.vars.immediateRender)
                            ? f.globalTime(0)
                            : -1 / 0,
                        t: f,
                      };
                    })
                    .sort(function (f, h) {
                      return h.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(r);
                    }),
                    l = n.data.length;
                  l--;

                )
                  (u = n.data[l]),
                    u instanceof vt
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ue) && u.revert && u.revert(r);
                n._r.forEach(function (f) {
                  return f(r, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          i)
        )
          for (var s = Mi.length; s--; )
            Mi[s].id === this.id && Mi.splice(s, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      o
    );
  })(),
  Eg = (function () {
    function o(t) {
      (this.contexts = []), (this.scope = t), Te && Te.data.push(this);
    }
    var e = o.prototype;
    return (
      (e.add = function (r, i, n) {
        Er(r) || (r = { matches: r });
        var s = new Th(0, n || this.scope),
          a = (s.conditions = {}),
          l,
          u,
          f;
        Te && !s.selector && (s.selector = Te.selector),
          this.contexts.push(s),
          (i = s.add("onMatch", i)),
          (s.queries = r);
        for (u in r)
          u === "all"
            ? (f = 1)
            : ((l = gr.matchMedia(r[u])),
              l &&
                (Mi.indexOf(s) < 0 && Mi.push(s),
                (a[u] = l.matches) && (f = 1),
                l.addListener
                  ? l.addListener(Cl)
                  : l.addEventListener("change", Cl)));
        return (
          f &&
            i(s, function (h) {
              return s.add(null, h);
            }),
          this
        );
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      o
    );
  })(),
  qo = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      t.forEach(function (i) {
        return fh(i);
      });
    },
    timeline: function (e) {
      return new vt(e);
    },
    getTweensOf: function (e, t) {
      return Ae.getTweensOf(e, t);
    },
    getProperty: function (e, t, r, i) {
      Qe(e) && (e = Xt(e)[0]);
      var n = ki(e || {}).get,
        s = r ? Jc : Kc;
      return (
        r === "native" && (r = ""),
        e &&
          (t
            ? s(((Mt[t] && Mt[t].get) || n)(e, t, r, i))
            : function (a, l, u) {
                return s(((Mt[a] && Mt[a].get) || n)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, t, r) {
      if (((e = Xt(e)), e.length > 1)) {
        var i = e.map(function (f) {
            return Ot.quickSetter(f, t, r);
          }),
          n = i.length;
        return function (f) {
          for (var h = n; h--; ) i[h](f);
        };
      }
      e = e[0] || {};
      var s = Mt[t],
        a = ki(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        u = s
          ? function (f) {
              var h = new s();
              (un._pt = 0),
                h.init(e, r ? f + r : f, un, 0, [e]),
                h.render(1, h),
                un._pt && Tu(1, un);
            }
          : a.set(e, l);
      return s
        ? u
        : function (f) {
            return u(e, l, r ? f + r : f, a, 1);
          };
    },
    quickTo: function (e, t, r) {
      var i,
        n = Ot.to(
          e,
          Fi(((i = {}), (i[t] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        s = function (l, u, f) {
          return n.resetTo(t, l, u, f);
        };
      return (s.tween = n), s;
    },
    isTweening: function (e) {
      return Ae.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ri(e.ease, Sn.ease)), yf(Sn, e || {});
    },
    config: function (e) {
      return yf(Nt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        r = e.effect,
        i = e.plugins,
        n = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function (a) {
        return (
          a && !Mt[a] && !zt[a] && ys(t + " effect requires " + a + " plugin.")
        );
      }),
        (Ba[t] = function (a, l, u) {
          return r(Xt(a), qt(l || {}, n), u);
        }),
        s &&
          (vt.prototype[t] = function (a, l, u) {
            return this.add(Ba[t](a, Er(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, t) {
      ue[e] = Ri(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Ri(e, t) : ue;
    },
    getById: function (e) {
      return Ae.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var r = new vt(e),
        i,
        n;
      for (
        r.smoothChildTiming = St(e.smoothChildTiming),
          Ae.remove(r),
          r._dp = 0,
          r._time = r._tTime = Ae._time,
          i = Ae._first;
        i;

      )
        (n = i._next),
          (t ||
            !(
              !i._dur &&
              i instanceof Ue &&
              i.vars.onComplete === i._targets[0]
            )) &&
            vr(r, i, i._start - i._delay),
          (i = n);
      return vr(Ae, r, 0), r;
    },
    context: function (e, t) {
      return e ? new Th(e, t) : Te;
    },
    matchMedia: function (e) {
      return new Eg(e);
    },
    matchMediaRefresh: function () {
      return (
        Mi.forEach(function (e) {
          var t = e.conditions,
            r,
            i;
          for (i in t) t[i] && ((t[i] = !1), (r = 1));
          r && e.revert();
        }) || Cl()
      );
    },
    addEventListener: function (e, t) {
      var r = Ao[e] || (Ao[e] = []);
      ~r.indexOf(t) || r.push(t);
    },
    removeEventListener: function (e, t) {
      var r = Ao[e],
        i = r && r.indexOf(t);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: rg,
      wrapYoyo: ig,
      distribute: nh,
      random: oh,
      snap: sh,
      normalize: tg,
      getUnit: ft,
      clamp: Jp,
      splitColor: ch,
      toArray: Xt,
      selector: Sl,
      mapRange: lh,
      pipe: Qp,
      unitize: eg,
      interpolate: ng,
      shuffle: ih,
    },
    install: Xc,
    effects: Ba,
    ticker: Dt,
    updateRoot: vt.updateRoot,
    plugins: Mt,
    globalTimeline: Ae,
    core: {
      PropTween: Tt,
      globals: Gc,
      Tween: Ue,
      Timeline: vt,
      Animation: Ss,
      getCache: ki,
      _removeLinkedListItem: ga,
      reverting: function () {
        return ct;
      },
      context: function (e) {
        return e && Te && (Te.data.push(e), (e._ctx = Te)), Te;
      },
      suppressOverwrites: function (e) {
        return (du = e);
      },
    },
  };
Et("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (qo[o] = Ue[o]);
});
Dt.add(vt.updateRoot);
un = qo.to({}, { duration: 0 });
var Tg = function (e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
      r = r._next;
    return r;
  },
  Cg = function (e, t) {
    var r = e._targets,
      i,
      n,
      s;
    for (i in t)
      for (n = r.length; n--; )
        (s = e._ptLookup[n][i]),
          s &&
            (s = s.d) &&
            (s._pt && (s = Tg(s, i)),
            s && s.modifier && s.modifier(t[i], e, r[n], i));
  },
  Ya = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, n, s) {
        s._onInit = function (a) {
          var l, u;
          if (
            (Qe(n) &&
              ((l = {}),
              Et(n, function (f) {
                return (l[f] = 1);
              }),
              (n = l)),
            t)
          ) {
            l = {};
            for (u in n) l[u] = t(n[u]);
            n = l;
          }
          Cg(a, n);
        };
      },
    };
  },
  Ot =
    qo.registerPlugin(
      {
        name: "attr",
        init: function (e, t, r, i, n) {
          var s, a, l;
          this.tween = r;
          for (s in t)
            (l = e.getAttribute(s) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[s],
                i,
                n,
                0,
                0,
                s
              )),
              (a.op = s),
              (a.b = l),
              this._props.push(s);
        },
        render: function (e, t) {
          for (var r = t._pt; r; )
            ct ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Ya("roundProps", El),
      Ya("modifiers"),
      Ya("snap", sh)
    ) || qo;
Ue.version = vt.version = Ot.version = "3.12.5";
Yc = 1;
gu() && Cn();
ue.Power0;
ue.Power1;
ue.Power2;
ue.Power3;
ue.Power4;
ue.Linear;
ue.Quad;
ue.Cubic;
ue.Quart;
ue.Quint;
ue.Strong;
ue.Elastic;
ue.Back;
ue.SteppedEase;
ue.Bounce;
ue.Sine;
ue.Expo;
ue.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Tf,
  Qr,
  gn,
  Cu,
  Oi,
  Cf,
  Ou,
  Og = function () {
    return typeof window < "u";
  },
  Yr = {},
  Ei = 180 / Math.PI,
  mn = Math.PI / 180,
  en = Math.atan2,
  Of = 1e8,
  Pu = /([A-Z])/g,
  Pg = /(left|right|width|margin|padding|x)/i,
  kg = /[\s,\(]\S/,
  yr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Ol = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Ag = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  Rg = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Mg = function (e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Ch = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Oh = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Dg = function (e, t, r) {
    return (e.style[t] = r);
  },
  Lg = function (e, t, r) {
    return e.style.setProperty(t, r);
  },
  Ig = function (e, t, r) {
    return (e._gsap[t] = r);
  },
  Ng = function (e, t, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  zg = function (e, t, r, i, n) {
    var s = e._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
  },
  Fg = function (e, t, r, i, n) {
    var s = e._gsap;
    (s[t] = r), s.renderTransform(n, s);
  },
  Re = "transform",
  Ct = Re + "Origin",
  Bg = function o(e, t) {
    var r = this,
      i = this.target,
      n = i.style,
      s = i._gsap;
    if (e in Yr && n) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = yr[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (r.tfm[a] = Dr(i, a));
              })
            : (this.tfm[e] = s.x ? s[e] : Dr(i, e)),
          e === Ct && (this.tfm.zOrigin = s.zOrigin);
      else
        return yr.transform.split(",").forEach(function (a) {
          return o.call(r, a, t);
        });
      if (this.props.indexOf(Re) >= 0) return;
      s.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(Ct, t, "")),
        (e = Re);
    }
    (n || t) && this.props.push(e, t, n[e]);
  },
  Ph = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  $g = function () {
    var e = this.props,
      t = this.target,
      r = t.style,
      i = t._gsap,
      n,
      s;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? (t[e[n]] = e[n + 2])
        : e[n + 2]
        ? (r[e[n]] = e[n + 2])
        : r.removeProperty(
            e[n].substr(0, 2) === "--"
              ? e[n]
              : e[n].replace(Pu, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (n = Ou()),
        (!n || !n.isStart) &&
          !r[Re] &&
          (Ph(r),
          i.zOrigin &&
            r[Ct] &&
            ((r[Ct] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  kh = function (e, t) {
    var r = { target: e, props: [], revert: $g, save: Bg };
    return (
      e._gsap || Ot.core.getCache(e),
      t &&
        t.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  Ah,
  Pl = function (e, t) {
    var r = Qr.createElementNS
      ? Qr.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Qr.createElement(e);
    return r && r.style ? r : Qr.createElement(e);
  },
  br = function o(e, t, r) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(Pu, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!r && o(e, On(t) || t, 1)) ||
      ""
    );
  },
  Pf = "O,Moz,ms,Ms,Webkit".split(","),
  On = function (e, t, r) {
    var i = t || Oi,
      n = i.style,
      s = 5;
    if (e in n && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(Pf[s] + e in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Pf[s] : "") + e;
  },
  kl = function () {
    Og() &&
      window.document &&
      ((Tf = window),
      (Qr = Tf.document),
      (gn = Qr.documentElement),
      (Oi = Pl("div") || { style: {} }),
      Pl("div"),
      (Re = On(Re)),
      (Ct = Re + "Origin"),
      (Oi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ah = !!On("perspective")),
      (Ou = Ot.core.reverting),
      (Cu = 1));
  },
  Xa = function o(e) {
    var t = Pl(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      i = this.nextSibling,
      n = this.style.cssText,
      s;
    if (
      (gn.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = o);
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      gn.removeChild(t),
      (this.style.cssText = n),
      s
    );
  },
  kf = function (e, t) {
    for (var r = t.length; r--; )
      if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
  },
  Rh = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = Xa.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === Xa || (t = Xa.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +kf(e, ["x", "cx", "x1"]) || 0,
            y: +kf(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Mh = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Rh(e));
  },
  Bi = function (e, t) {
    if (t) {
      var r = e.style,
        i;
      t in Yr && t !== Ct && (t = Re),
        r.removeProperty
          ? ((i = t.substr(0, 2)),
            (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            r.removeProperty(
              i === "--" ? t : t.replace(Pu, "-$1").toLowerCase()
            ))
          : r.removeAttribute(t);
    }
  },
  ei = function (e, t, r, i, n, s) {
    var a = new Tt(e._pt, t, r, 0, 1, s ? Oh : Ch);
    return (e._pt = a), (a.b = i), (a.e = n), e._props.push(r), a;
  },
  Af = { deg: 1, rad: 1, turn: 1 },
  Vg = { grid: 1, flex: 1 },
  li = function o(e, t, r, i) {
    var n = parseFloat(r) || 0,
      s = (r + "").trim().substr((n + "").length) || "px",
      a = Oi.style,
      l = Pg.test(t),
      u = e.tagName.toLowerCase() === "svg",
      f = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      h = 100,
      d = i === "px",
      c = i === "%",
      g,
      p,
      m,
      v;
    if (i === s || !n || Af[i] || Af[s]) return n;
    if (
      (s !== "px" && !d && (n = o(e, t, r, "px")),
      (v = e.getCTM && Mh(e)),
      (c || s === "%") && (Yr[t] || ~t.indexOf("adius")))
    )
      return (
        (g = v ? e.getBBox()[l ? "width" : "height"] : e[f]),
        Fe(c ? (n / g) * h : (n / 100) * g)
      );
    if (
      ((a[l ? "width" : "height"] = h + (d ? s : i)),
      (p =
        ~t.indexOf("adius") || (i === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      v && (p = (e.ownerSVGElement || {}).parentNode),
      (!p || p === Qr || !p.appendChild) && (p = Qr.body),
      (m = p._gsap),
      m && c && m.width && l && m.time === Dt.time && !m.uncache)
    )
      return Fe((n / m.width) * h);
    if (c && (t === "height" || t === "width")) {
      var w = e.style[t];
      (e.style[t] = h + i), (g = e[f]), w ? (e.style[t] = w) : Bi(e, t);
    } else
      (c || s === "%") &&
        !Vg[br(p, "display")] &&
        (a.position = br(e, "position")),
        p === e && (a.position = "static"),
        p.appendChild(Oi),
        (g = Oi[f]),
        p.removeChild(Oi),
        (a.position = "absolute");
    return (
      l && c && ((m = ki(p)), (m.time = Dt.time), (m.width = p[f])),
      Fe(d ? (g * n) / h : g && n ? (h / g) * n : 0)
    );
  },
  Dr = function (e, t, r, i) {
    var n;
    return (
      Cu || kl(),
      t in yr &&
        t !== "transform" &&
        ((t = yr[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Yr[t] && t !== "transform"
        ? ((n = Ts(e, i)),
          (n =
            t !== "transformOrigin"
              ? n[t]
              : n.svg
              ? n.origin
              : Ko(br(e, Ct)) + " " + n.zOrigin + "px"))
        : ((n = e.style[t]),
          (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
            (n =
              (jo[t] && jo[t](e, t, r)) ||
              br(e, t) ||
              qc(e, t) ||
              (t === "opacity" ? 1 : 0))),
      r && !~(n + "").trim().indexOf(" ") ? li(e, t, n, r) + r : n
    );
  },
  Ug = function (e, t, r, i) {
    if (!r || r === "none") {
      var n = On(t, e, 1),
        s = n && br(e, n, 1);
      s && s !== r
        ? ((t = n), (r = s))
        : t === "borderColor" && (r = br(e, "borderTopColor"));
    }
    var a = new Tt(this._pt, e.style, t, 0, 1, Sh),
      l = 0,
      u = 0,
      f,
      h,
      d,
      c,
      g,
      p,
      m,
      v,
      w,
      y,
      x,
      S;
    if (
      ((a.b = r),
      (a.e = i),
      (r += ""),
      (i += ""),
      i === "auto" &&
        ((p = e.style[t]),
        (e.style[t] = i),
        (i = br(e, t) || i),
        p ? (e.style[t] = p) : Bi(e, t)),
      (f = [r, i]),
      dh(f),
      (r = f[0]),
      (i = f[1]),
      (d = r.match(ln) || []),
      (S = i.match(ln) || []),
      S.length)
    ) {
      for (; (h = ln.exec(i)); )
        (m = h[0]),
          (w = i.substring(l, h.index)),
          g
            ? (g = (g + 1) % 5)
            : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (g = 1),
          m !== (p = d[u++] || "") &&
            ((c = parseFloat(p) || 0),
            (x = p.substr((c + "").length)),
            m.charAt(1) === "=" && (m = pn(c, m) + x),
            (v = parseFloat(m)),
            (y = m.substr((v + "").length)),
            (l = ln.lastIndex - y.length),
            y ||
              ((y = y || Nt.units[t] || x),
              l === i.length && ((i += y), (a.e += y))),
            x !== y && (c = li(e, t, p, y) || 0),
            (a._pt = {
              _next: a._pt,
              p: w || u === 1 ? w : ",",
              s: c,
              c: v - c,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = t === "display" && i === "none" ? Oh : Ch;
    return Uc.test(i) && (a.e = 0), (this._pt = a), a;
  },
  Rf = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Wg = function (e) {
    var t = e.split(" "),
      r = t[0],
      i = t[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((e = r), (r = i), (i = e)),
      (t[0] = Rf[r] || r),
      (t[1] = Rf[i] || i),
      t.join(" ")
    );
  },
  Yg = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var r = t.t,
        i = r.style,
        n = t.u,
        s = r._gsap,
        a,
        l,
        u;
      if (n === "all" || n === !0) (i.cssText = ""), (l = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (a = n[u]),
            Yr[a] && ((l = 1), (a = a === "transformOrigin" ? Ct : Re)),
            Bi(r, a);
      l &&
        (Bi(r, Re),
        s &&
          (s.svg && r.removeAttribute("transform"),
          Ts(r, 1),
          (s.uncache = 1),
          Ph(i)));
    }
  },
  jo = {
    clearProps: function (e, t, r, i, n) {
      if (n.data !== "isFromStart") {
        var s = (e._pt = new Tt(e._pt, t, r, 0, 0, Yg));
        return (s.u = i), (s.pr = -10), (s.tween = n), e._props.push(r), 1;
      }
    },
  },
  Es = [1, 0, 0, 1, 0, 0],
  Dh = {},
  Lh = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Mf = function (e) {
    var t = br(e, Re);
    return Lh(t) ? Es : t.substr(7).match(Vc).map(Fe);
  },
  ku = function (e, t) {
    var r = e._gsap || ki(e),
      i = e.style,
      n = Mf(e),
      s,
      a,
      l,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? Es : n)
      : (n === Es &&
          !e.offsetParent &&
          e !== gn &&
          !r.svg &&
          ((l = i.display),
          (i.display = "block"),
          (s = e.parentNode),
          (!s || !e.offsetParent) &&
            ((u = 1), (a = e.nextElementSibling), gn.appendChild(e)),
          (n = Mf(e)),
          l ? (i.display = l) : Bi(e, "display"),
          u &&
            (a
              ? s.insertBefore(e, a)
              : s
              ? s.appendChild(e)
              : gn.removeChild(e))),
        t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Al = function (e, t, r, i, n, s) {
    var a = e._gsap,
      l = n || ku(e, !0),
      u = a.xOrigin || 0,
      f = a.yOrigin || 0,
      h = a.xOffset || 0,
      d = a.yOffset || 0,
      c = l[0],
      g = l[1],
      p = l[2],
      m = l[3],
      v = l[4],
      w = l[5],
      y = t.split(" "),
      x = parseFloat(y[0]) || 0,
      S = parseFloat(y[1]) || 0,
      T,
      b,
      O,
      C;
    r
      ? l !== Es &&
        (b = c * m - g * p) &&
        ((O = x * (m / b) + S * (-p / b) + (p * w - m * v) / b),
        (C = x * (-g / b) + S * (c / b) - (c * w - g * v) / b),
        (x = O),
        (S = C))
      : ((T = Rh(e)),
        (x = T.x + (~y[0].indexOf("%") ? (x / 100) * T.width : x)),
        (S = T.y + (~(y[1] || y[0]).indexOf("%") ? (S / 100) * T.height : S))),
      i || (i !== !1 && a.smooth)
        ? ((v = x - u),
          (w = S - f),
          (a.xOffset = h + (v * c + w * p) - v),
          (a.yOffset = d + (v * g + w * m) - w))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = x),
      (a.yOrigin = S),
      (a.smooth = !!i),
      (a.origin = t),
      (a.originIsAbsolute = !!r),
      (e.style[Ct] = "0px 0px"),
      s &&
        (ei(s, a, "xOrigin", u, x),
        ei(s, a, "yOrigin", f, S),
        ei(s, a, "xOffset", h, a.xOffset),
        ei(s, a, "yOffset", d, a.yOffset)),
      e.setAttribute("data-svg-origin", x + " " + S);
  },
  Ts = function (e, t) {
    var r = e._gsap || new _h(e);
    if ("x" in r && !t && !r.uncache) return r;
    var i = e.style,
      n = r.scaleX < 0,
      s = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = br(e, Ct) || "0",
      f,
      h,
      d,
      c,
      g,
      p,
      m,
      v,
      w,
      y,
      x,
      S,
      T,
      b,
      O,
      C,
      E,
      k,
      P,
      R,
      I,
      M,
      $,
      B,
      F,
      z,
      _,
      N,
      Y,
      he,
      q,
      K;
    return (
      (f = h = d = p = m = v = w = y = x = 0),
      (c = g = 1),
      (r.svg = !!(e.getCTM && Mh(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[Re] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Re] !== "none" ? l[Re] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (b = ku(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((F = e.getBBox()),
            (u = r.xOrigin - F.x + "px " + (r.yOrigin - F.y) + "px"),
            (B = ""))
          : (B = !t && e.getAttribute("data-svg-origin")),
        Al(e, B || u, !!B || r.originIsAbsolute, r.smooth !== !1, b)),
      (S = r.xOrigin || 0),
      (T = r.yOrigin || 0),
      b !== Es &&
        ((k = b[0]),
        (P = b[1]),
        (R = b[2]),
        (I = b[3]),
        (f = M = b[4]),
        (h = $ = b[5]),
        b.length === 6
          ? ((c = Math.sqrt(k * k + P * P)),
            (g = Math.sqrt(I * I + R * R)),
            (p = k || P ? en(P, k) * Ei : 0),
            (w = R || I ? en(R, I) * Ei + p : 0),
            w && (g *= Math.abs(Math.cos(w * mn))),
            r.svg && ((f -= S - (S * k + T * R)), (h -= T - (S * P + T * I))))
          : ((K = b[6]),
            (he = b[7]),
            (_ = b[8]),
            (N = b[9]),
            (Y = b[10]),
            (q = b[11]),
            (f = b[12]),
            (h = b[13]),
            (d = b[14]),
            (O = en(K, Y)),
            (m = O * Ei),
            O &&
              ((C = Math.cos(-O)),
              (E = Math.sin(-O)),
              (B = M * C + _ * E),
              (F = $ * C + N * E),
              (z = K * C + Y * E),
              (_ = M * -E + _ * C),
              (N = $ * -E + N * C),
              (Y = K * -E + Y * C),
              (q = he * -E + q * C),
              (M = B),
              ($ = F),
              (K = z)),
            (O = en(-R, Y)),
            (v = O * Ei),
            O &&
              ((C = Math.cos(-O)),
              (E = Math.sin(-O)),
              (B = k * C - _ * E),
              (F = P * C - N * E),
              (z = R * C - Y * E),
              (q = I * E + q * C),
              (k = B),
              (P = F),
              (R = z)),
            (O = en(P, k)),
            (p = O * Ei),
            O &&
              ((C = Math.cos(O)),
              (E = Math.sin(O)),
              (B = k * C + P * E),
              (F = M * C + $ * E),
              (P = P * C - k * E),
              ($ = $ * C - M * E),
              (k = B),
              (M = F)),
            m &&
              Math.abs(m) + Math.abs(p) > 359.9 &&
              ((m = p = 0), (v = 180 - v)),
            (c = Fe(Math.sqrt(k * k + P * P + R * R))),
            (g = Fe(Math.sqrt($ * $ + K * K))),
            (O = en(M, $)),
            (w = Math.abs(O) > 2e-4 ? O * Ei : 0),
            (x = q ? 1 / (q < 0 ? -q : q) : 0)),
        r.svg &&
          ((B = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !Lh(br(e, Re))),
          B && e.setAttribute("transform", B))),
      Math.abs(w) > 90 &&
        Math.abs(w) < 270 &&
        (n
          ? ((c *= -1), (w += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((g *= -1), (w += w <= 0 ? 180 : -180))),
      (t = t || r.uncache),
      (r.x =
        f -
        ((r.xPercent =
          f &&
          ((!t && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        s),
      (r.y =
        h -
        ((r.yPercent =
          h &&
          ((!t && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        s),
      (r.z = d + s),
      (r.scaleX = Fe(c)),
      (r.scaleY = Fe(g)),
      (r.rotation = Fe(p) + a),
      (r.rotationX = Fe(m) + a),
      (r.rotationY = Fe(v) + a),
      (r.skewX = w + a),
      (r.skewY = y + a),
      (r.transformPerspective = x + s),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
        (i[Ct] = Ko(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = Nt.force3D),
      (r.renderTransform = r.svg ? Gg : Ah ? Ih : Xg),
      (r.uncache = 0),
      r
    );
  },
  Ko = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Ga = function (e, t, r) {
    var i = ft(t);
    return Fe(parseFloat(t) + parseFloat(li(e, "x", r + "px", i))) + i;
  },
  Xg = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Ih(e, t);
  },
  bi = "0deg",
  Wn = "0px",
  xi = ") ",
  Ih = function (e, t) {
    var r = t || this,
      i = r.xPercent,
      n = r.yPercent,
      s = r.x,
      a = r.y,
      l = r.z,
      u = r.rotation,
      f = r.rotationY,
      h = r.rotationX,
      d = r.skewX,
      c = r.skewY,
      g = r.scaleX,
      p = r.scaleY,
      m = r.transformPerspective,
      v = r.force3D,
      w = r.target,
      y = r.zOrigin,
      x = "",
      S = (v === "auto" && e && e !== 1) || v === !0;
    if (y && (h !== bi || f !== bi)) {
      var T = parseFloat(f) * mn,
        b = Math.sin(T),
        O = Math.cos(T),
        C;
      (T = parseFloat(h) * mn),
        (C = Math.cos(T)),
        (s = Ga(w, s, b * C * -y)),
        (a = Ga(w, a, -Math.sin(T) * -y)),
        (l = Ga(w, l, O * C * -y + y));
    }
    m !== Wn && (x += "perspective(" + m + xi),
      (i || n) && (x += "translate(" + i + "%, " + n + "%) "),
      (S || s !== Wn || a !== Wn || l !== Wn) &&
        (x +=
          l !== Wn || S
            ? "translate3d(" + s + ", " + a + ", " + l + ") "
            : "translate(" + s + ", " + a + xi),
      u !== bi && (x += "rotate(" + u + xi),
      f !== bi && (x += "rotateY(" + f + xi),
      h !== bi && (x += "rotateX(" + h + xi),
      (d !== bi || c !== bi) && (x += "skew(" + d + ", " + c + xi),
      (g !== 1 || p !== 1) && (x += "scale(" + g + ", " + p + xi),
      (w.style[Re] = x || "translate(0, 0)");
  },
  Gg = function (e, t) {
    var r = t || this,
      i = r.xPercent,
      n = r.yPercent,
      s = r.x,
      a = r.y,
      l = r.rotation,
      u = r.skewX,
      f = r.skewY,
      h = r.scaleX,
      d = r.scaleY,
      c = r.target,
      g = r.xOrigin,
      p = r.yOrigin,
      m = r.xOffset,
      v = r.yOffset,
      w = r.forceCSS,
      y = parseFloat(s),
      x = parseFloat(a),
      S,
      T,
      b,
      O,
      C;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (u += f), (l += f)),
      l || u
        ? ((l *= mn),
          (u *= mn),
          (S = Math.cos(l) * h),
          (T = Math.sin(l) * h),
          (b = Math.sin(l - u) * -d),
          (O = Math.cos(l - u) * d),
          u &&
            ((f *= mn),
            (C = Math.tan(u - f)),
            (C = Math.sqrt(1 + C * C)),
            (b *= C),
            (O *= C),
            f &&
              ((C = Math.tan(f)),
              (C = Math.sqrt(1 + C * C)),
              (S *= C),
              (T *= C))),
          (S = Fe(S)),
          (T = Fe(T)),
          (b = Fe(b)),
          (O = Fe(O)))
        : ((S = h), (O = d), (T = b = 0)),
      ((y && !~(s + "").indexOf("px")) || (x && !~(a + "").indexOf("px"))) &&
        ((y = li(c, "x", s, "px")), (x = li(c, "y", a, "px"))),
      (g || p || m || v) &&
        ((y = Fe(y + g - (g * S + p * b) + m)),
        (x = Fe(x + p - (g * T + p * O) + v))),
      (i || n) &&
        ((C = c.getBBox()),
        (y = Fe(y + (i / 100) * C.width)),
        (x = Fe(x + (n / 100) * C.height))),
      (C =
        "matrix(" + S + "," + T + "," + b + "," + O + "," + y + "," + x + ")"),
      c.setAttribute("transform", C),
      w && (c.style[Re] = C);
  },
  Hg = function (e, t, r, i, n) {
    var s = 360,
      a = Qe(n),
      l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ei : 1),
      u = l - i,
      f = i + u + "deg",
      h,
      d;
    return (
      a &&
        ((h = n.split("_")[1]),
        h === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        h === "cw" && u < 0
          ? (u = ((u + s * Of) % s) - ~~(u / s) * s)
          : h === "ccw" && u > 0 && (u = ((u - s * Of) % s) - ~~(u / s) * s)),
      (e._pt = d = new Tt(e._pt, t, r, i, u, Ag)),
      (d.e = f),
      (d.u = "deg"),
      e._props.push(r),
      d
    );
  },
  Df = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  qg = function (e, t, r) {
    var i = Df({}, r._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = r.style,
      a,
      l,
      u,
      f,
      h,
      d,
      c,
      g;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (s[Re] = t),
        (a = Ts(r, 1)),
        Bi(r, Re),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[Re]),
        (s[Re] = t),
        (a = Ts(r, 1)),
        (s[Re] = u));
    for (l in Yr)
      (u = i[l]),
        (f = a[l]),
        u !== f &&
          n.indexOf(l) < 0 &&
          ((c = ft(u)),
          (g = ft(f)),
          (h = c !== g ? li(r, l, u, g) : parseFloat(u)),
          (d = parseFloat(f)),
          (e._pt = new Tt(e._pt, a, l, h, d - h, Ol)),
          (e._pt.u = g || 0),
          e._props.push(l));
    Df(a, i);
  };
Et("padding,margin,Width,Radius", function (o, e) {
  var t = "Top",
    r = "Right",
    i = "Bottom",
    n = "Left",
    s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function (a) {
      return e < 2 ? o + a : "border" + a + o;
    });
  jo[e > 1 ? "border" + o : o] = function (a, l, u, f, h) {
    var d, c;
    if (arguments.length < 4)
      return (
        (d = s.map(function (g) {
          return Dr(a, g, u);
        })),
        (c = d.join(" ")),
        c.split(d[0]).length === 5 ? d[0] : c
      );
    (d = (f + "").split(" ")),
      (c = {}),
      s.forEach(function (g, p) {
        return (c[g] = d[p] = d[p] || d[((p - 1) / 2) | 0]);
      }),
      a.init(l, c, h);
  };
});
var Nh = {
  name: "css",
  register: kl,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, r, i, n) {
    var s = this._props,
      a = e.style,
      l = r.vars.startAt,
      u,
      f,
      h,
      d,
      c,
      g,
      p,
      m,
      v,
      w,
      y,
      x,
      S,
      T,
      b,
      O;
    Cu || kl(),
      (this.styles = this.styles || kh(e)),
      (O = this.styles.props),
      (this.tween = r);
    for (p in t)
      if (p !== "autoRound" && ((f = t[p]), !(Mt[p] && vh(p, t, r, i, e, n)))) {
        if (
          ((c = typeof f),
          (g = jo[p]),
          c === "function" && ((f = f.call(r, i, e, n)), (c = typeof f)),
          c === "string" && ~f.indexOf("random(") && (f = bs(f)),
          g)
        )
          g(this, e, p, f, r) && (b = 1);
        else if (p.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
            (f += ""),
            (si.lastIndex = 0),
            si.test(u) || ((m = ft(u)), (v = ft(f))),
            v ? m !== v && (u = li(e, p, u, v) + v) : m && (f += m),
            this.add(a, "setProperty", u, f, i, n, 0, 0, p),
            s.push(p),
            O.push(p, 0, a[p]);
        else if (c !== "undefined") {
          if (
            (l && p in l
              ? ((u = typeof l[p] == "function" ? l[p].call(r, i, e, n) : l[p]),
                Qe(u) && ~u.indexOf("random(") && (u = bs(u)),
                ft(u + "") ||
                  u === "auto" ||
                  (u += Nt.units[p] || ft(Dr(e, p)) || ""),
                (u + "").charAt(1) === "=" && (u = Dr(e, p)))
              : (u = Dr(e, p)),
            (d = parseFloat(u)),
            (w = c === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            w && (f = f.substr(2)),
            (h = parseFloat(f)),
            p in yr &&
              (p === "autoAlpha" &&
                (d === 1 && Dr(e, "visibility") === "hidden" && h && (d = 0),
                O.push("visibility", 0, a.visibility),
                ei(
                  this,
                  a,
                  "visibility",
                  d ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = yr[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (y = p in Yr),
            y)
          ) {
            if (
              (this.styles.save(p),
              x ||
                ((S = e._gsap),
                (S.renderTransform && !t.parseTransform) ||
                  Ts(e, t.parseTransform),
                (T = t.smoothOrigin !== !1 && S.smooth),
                (x = this._pt =
                  new Tt(this._pt, a, Re, 0, 1, S.renderTransform, S, 0, -1)),
                (x.dep = 1)),
              p === "scale")
            )
              (this._pt = new Tt(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (w ? pn(S.scaleY, w + h) : h) - S.scaleY || 0,
                Ol
              )),
                (this._pt.u = 0),
                s.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              O.push(Ct, 0, a[Ct]),
                (f = Wg(f)),
                S.svg
                  ? Al(e, f, 0, T, 0, this)
                  : ((v = parseFloat(f.split(" ")[2]) || 0),
                    v !== S.zOrigin && ei(this, S, "zOrigin", S.zOrigin, v),
                    ei(this, a, p, Ko(u), Ko(f)));
              continue;
            } else if (p === "svgOrigin") {
              Al(e, f, 1, T, 0, this);
              continue;
            } else if (p in Dh) {
              Hg(this, S, p, d, w ? pn(d, w + f) : f);
              continue;
            } else if (p === "smoothOrigin") {
              ei(this, S, "smooth", S.smooth, f);
              continue;
            } else if (p === "force3D") {
              S[p] = f;
              continue;
            } else if (p === "transform") {
              qg(this, f, e);
              continue;
            }
          } else p in a || (p = On(p) || p);
          if (y || ((h || h === 0) && (d || d === 0) && !kg.test(f) && p in a))
            (m = (u + "").substr((d + "").length)),
              h || (h = 0),
              (v = ft(f) || (p in Nt.units ? Nt.units[p] : m)),
              m !== v && (d = li(e, p, u, v)),
              (this._pt = new Tt(
                this._pt,
                y ? S : a,
                p,
                d,
                (w ? pn(d, w + h) : h) - d,
                !y && (v === "px" || p === "zIndex") && t.autoRound !== !1
                  ? Mg
                  : Ol
              )),
              (this._pt.u = v || 0),
              m !== v && v !== "%" && ((this._pt.b = u), (this._pt.r = Rg));
          else if (p in a) Ug.call(this, e, p, u, w ? w + f : f);
          else if (p in e) this.add(e, p, u || e[p], w ? w + f : f, i, n);
          else if (p !== "parseTransform") {
            _u(p, f);
            continue;
          }
          y || (p in a ? O.push(p, 0, a[p]) : O.push(p, 1, u || e[p])),
            s.push(p);
        }
      }
    b && Eh(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Ou())
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    else t.styles.revert();
  },
  get: Dr,
  aliases: yr,
  getSetter: function (e, t, r) {
    var i = yr[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in Yr && t !== Ct && (e._gsap.x || Dr(e, "x"))
        ? r && Cf === r
          ? t === "scale"
            ? Ng
            : Ig
          : (Cf = r || {}) && (t === "scale" ? zg : Fg)
        : e.style && !pu(e.style[t])
        ? Dg
        : ~t.indexOf("-")
        ? Lg
        : Eu(e, t)
    );
  },
  core: { _removeProperty: Bi, _getMatrix: ku },
};
Ot.utils.checkPrefix = On;
Ot.core.getStyleSaver = kh;
(function (o, e, t, r) {
  var i = Et(o + "," + e + "," + t, function (n) {
    Yr[n] = 1;
  });
  Et(e, function (n) {
    (Nt.units[n] = "deg"), (Dh[n] = 1);
  }),
    (yr[i[13]] = o + "," + e),
    Et(r, function (n) {
      var s = n.split(":");
      yr[s[1]] = i[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Et(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    Nt.units[o] = "px";
  }
);
Ot.registerPlugin(Nh);
var ce = Ot.registerPlugin(Nh) || Ot;
ce.core.Tween;
function jg(o, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(o, r.key, r);
  }
}
function Kg(o, e, t) {
  return e && jg(o.prototype, e), o;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var it,
  Ro,
  Lt,
  ti,
  ri,
  _n,
  zh,
  Ti,
  ss,
  Fh,
  Nr,
  ir,
  Bh,
  $h = function () {
    return (
      it ||
      (typeof window < "u" && (it = window.gsap) && it.registerPlugin && it)
    );
  },
  Vh = 1,
  fn = [],
  se = [],
  xr = [],
  os = Date.now,
  Rl = function (e, t) {
    return t;
  },
  Jg = function () {
    var e = ss.core,
      t = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, se),
      i.push.apply(i, xr),
      (se = r),
      (xr = i),
      (Rl = function (s, a) {
        return t[s](a);
      });
  },
  oi = function (e, t) {
    return ~xr.indexOf(e) && xr[xr.indexOf(e) + 1][t];
  },
  as = function (e) {
    return !!~Fh.indexOf(e);
  },
  pt = function (e, t, r, i, n) {
    return e.addEventListener(t, r, { passive: i !== !1, capture: !!n });
  },
  dt = function (e, t, r, i) {
    return e.removeEventListener(t, r, !!i);
  },
  io = "scrollLeft",
  no = "scrollTop",
  Ml = function () {
    return (Nr && Nr.isPressed) || se.cache++;
  },
  Jo = function (e, t) {
    var r = function i(n) {
      if (n || n === 0) {
        Vh && (Lt.history.scrollRestoration = "manual");
        var s = Nr && Nr.isPressed;
        (n = i.v = Math.round(n) || (Nr && Nr.iOS ? 1 : 0)),
          e(n),
          (i.cacheID = se.cache),
          s && Rl("ss", n);
      } else
        (t || se.cache !== i.cacheID || Rl("ref")) &&
          ((i.cacheID = se.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (r.offset = 0), e && r;
  },
  yt = {
    s: io,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Jo(function (o) {
      return arguments.length
        ? Lt.scrollTo(o, Xe.sc())
        : Lt.pageXOffset || ti[io] || ri[io] || _n[io] || 0;
    }),
  },
  Xe = {
    s: no,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: yt,
    sc: Jo(function (o) {
      return arguments.length
        ? Lt.scrollTo(yt.sc(), o)
        : Lt.pageYOffset || ti[no] || ri[no] || _n[no] || 0;
    }),
  },
  bt = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || it.utils.toArray)(e)[0] ||
      (typeof e == "string" && it.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  ui = function (e, t) {
    var r = t.s,
      i = t.sc;
    as(e) && (e = ti.scrollingElement || ri);
    var n = se.indexOf(e),
      s = i === Xe.sc ? 1 : 2;
    !~n && (n = se.push(e) - 1), se[n + s] || pt(e, "scroll", Ml);
    var a = se[n + s],
      l =
        a ||
        (se[n + s] =
          Jo(oi(e, r), !0) ||
          (as(e)
            ? i
            : Jo(function (u) {
                return arguments.length ? (e[r] = u) : e[r];
              })));
    return (
      (l.target = e),
      a || (l.smooth = it.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Dl = function (e, t, r) {
    var i = e,
      n = e,
      s = os(),
      a = s,
      l = t || 50,
      u = Math.max(500, l * 3),
      f = function (g, p) {
        var m = os();
        p || m - s > l
          ? ((n = i), (i = g), (a = s), (s = m))
          : r
          ? (i += g)
          : (i = n + ((g - n) / (m - a)) * (s - a));
      },
      h = function () {
        (n = i = r ? 0 : i), (a = s = 0);
      },
      d = function (g) {
        var p = a,
          m = n,
          v = os();
        return (
          (g || g === 0) && g !== i && f(g),
          s === a || v - a > u
            ? 0
            : ((i + (r ? m : -m)) / ((r ? v : s) - p)) * 1e3
        );
      };
    return { update: f, reset: h, getVelocity: d };
  },
  Yn = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Lf = function (e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  },
  Uh = function () {
    (ss = it.core.globals().ScrollTrigger), ss && ss.core && Jg();
  },
  Wh = function (e) {
    return (
      (it = e || $h()),
      !Ro &&
        it &&
        typeof document < "u" &&
        document.body &&
        ((Lt = window),
        (ti = document),
        (ri = ti.documentElement),
        (_n = ti.body),
        (Fh = [Lt, ti, ri, _n]),
        it.utils.clamp,
        (Bh = it.core.context || function () {}),
        (Ti = "onpointerenter" in _n ? "pointer" : "mouse"),
        (zh = Be.isTouch =
          Lt.matchMedia &&
          Lt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Lt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (ir = Be.eventTypes =
          (
            "ontouchstart" in ri
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ri
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Vh = 0);
        }, 500),
        Uh(),
        (Ro = 1)),
      Ro
    );
  };
yt.op = Xe;
se.cache = 0;
var Be = (function () {
  function o(t) {
    this.init(t);
  }
  var e = o.prototype;
  return (
    (e.init = function (r) {
      Ro || Wh(it) || console.warn("Please gsap.registerPlugin(Observer)"),
        ss || Uh();
      var i = r.tolerance,
        n = r.dragMinimum,
        s = r.type,
        a = r.target,
        l = r.lineHeight,
        u = r.debounce,
        f = r.preventDefault,
        h = r.onStop,
        d = r.onStopDelay,
        c = r.ignore,
        g = r.wheelSpeed,
        p = r.event,
        m = r.onDragStart,
        v = r.onDragEnd,
        w = r.onDrag,
        y = r.onPress,
        x = r.onRelease,
        S = r.onRight,
        T = r.onLeft,
        b = r.onUp,
        O = r.onDown,
        C = r.onChangeX,
        E = r.onChangeY,
        k = r.onChange,
        P = r.onToggleX,
        R = r.onToggleY,
        I = r.onHover,
        M = r.onHoverEnd,
        $ = r.onMove,
        B = r.ignoreCheck,
        F = r.isNormalizer,
        z = r.onGestureStart,
        _ = r.onGestureEnd,
        N = r.onWheel,
        Y = r.onEnable,
        he = r.onDisable,
        q = r.onClick,
        K = r.scrollSpeed,
        L = r.capture,
        G = r.allowClicks,
        ee = r.lockAxis,
        te = r.onLockAxis;
      (this.target = a = bt(a) || ri),
        (this.vars = r),
        c && (c = it.utils.toArray(c)),
        (i = i || 1e-9),
        (n = n || 0),
        (g = g || 1),
        (K = K || 1),
        (s = s || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Lt.getComputedStyle(_n).lineHeight) || 22);
      var fe,
        ge,
        He,
        D,
        W,
        we,
        Oe,
        A = this,
        Ie = 0,
        Kt = 0,
        Ft = r.passive || !f,
        X = ui(a, yt),
        Jt = ui(a, Xe),
        mi = X(),
        Ki = Jt(),
        qe =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          ir[0] === "pointerdown",
        Hr = as(a),
        Ne = a.ownerDocument || ti,
        Zt = [0, 0, 0],
        Bt = [0, 0, 0],
        kr = 0,
        Fn = function () {
          return (kr = os());
        },
        $e = function (j, de) {
          return (
            ((A.event = j) && c && ~c.indexOf(j.target)) ||
            (de && qe && j.pointerType !== "touch") ||
            (B && B(j, de))
          );
        },
        Qs = function () {
          A._vx.reset(), A._vy.reset(), ge.pause(), h && h(A);
        },
        qr = function () {
          var j = (A.deltaX = Lf(Zt)),
            de = (A.deltaY = Lf(Bt)),
            V = Math.abs(j) >= i,
            Q = Math.abs(de) >= i;
          k && (V || Q) && k(A, j, de, Zt, Bt),
            V &&
              (S && A.deltaX > 0 && S(A),
              T && A.deltaX < 0 && T(A),
              C && C(A),
              P && A.deltaX < 0 != Ie < 0 && P(A),
              (Ie = A.deltaX),
              (Zt[0] = Zt[1] = Zt[2] = 0)),
            Q &&
              (O && A.deltaY > 0 && O(A),
              b && A.deltaY < 0 && b(A),
              E && E(A),
              R && A.deltaY < 0 != Kt < 0 && R(A),
              (Kt = A.deltaY),
              (Bt[0] = Bt[1] = Bt[2] = 0)),
            (D || He) && ($ && $(A), He && (w(A), (He = !1)), (D = !1)),
            we && !(we = !1) && te && te(A),
            W && (N(A), (W = !1)),
            (fe = 0);
        },
        Ji = function (j, de, V) {
          (Zt[V] += j),
            (Bt[V] += de),
            A._vx.update(j),
            A._vy.update(de),
            u ? fe || (fe = requestAnimationFrame(qr)) : qr();
        },
        Zi = function (j, de) {
          ee &&
            !Oe &&
            ((A.axis = Oe = Math.abs(j) > Math.abs(de) ? "x" : "y"), (we = !0)),
            Oe !== "y" && ((Zt[2] += j), A._vx.update(j, !0)),
            Oe !== "x" && ((Bt[2] += de), A._vy.update(de, !0)),
            u ? fe || (fe = requestAnimationFrame(qr)) : qr();
        },
        jr = function (j) {
          if (!$e(j, 1)) {
            j = Yn(j, f);
            var de = j.clientX,
              V = j.clientY,
              Q = de - A.x,
              H = V - A.y,
              J = A.isDragging;
            (A.x = de),
              (A.y = V),
              (J ||
                Math.abs(A.startX - de) >= n ||
                Math.abs(A.startY - V) >= n) &&
                (w && (He = !0),
                J || (A.isDragging = !0),
                Zi(Q, H),
                J || (m && m(A)));
          }
        },
        _i = (A.onPress = function (Z) {
          $e(Z, 1) ||
            (Z && Z.button) ||
            ((A.axis = Oe = null),
            ge.pause(),
            (A.isPressed = !0),
            (Z = Yn(Z)),
            (Ie = Kt = 0),
            (A.startX = A.x = Z.clientX),
            (A.startY = A.y = Z.clientY),
            A._vx.reset(),
            A._vy.reset(),
            pt(F ? a : Ne, ir[1], jr, Ft, !0),
            (A.deltaX = A.deltaY = 0),
            y && y(A));
        }),
        ne = (A.onRelease = function (Z) {
          if (!$e(Z, 1)) {
            dt(F ? a : Ne, ir[1], jr, !0);
            var j = !isNaN(A.y - A.startY),
              de = A.isDragging,
              V =
                de &&
                (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3),
              Q = Yn(Z);
            !V &&
              j &&
              (A._vx.reset(),
              A._vy.reset(),
              f &&
                G &&
                it.delayedCall(0.08, function () {
                  if (os() - kr > 300 && !Z.defaultPrevented) {
                    if (Z.target.click) Z.target.click();
                    else if (Ne.createEvent) {
                      var H = Ne.createEvent("MouseEvents");
                      H.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Lt,
                        1,
                        Q.screenX,
                        Q.screenY,
                        Q.clientX,
                        Q.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        Z.target.dispatchEvent(H);
                    }
                  }
                })),
              (A.isDragging = A.isGesturing = A.isPressed = !1),
              h && de && !F && ge.restart(!0),
              v && de && v(A),
              x && x(A, V);
          }
        }),
        vi = function (j) {
          return (
            j.touches &&
            j.touches.length > 1 &&
            (A.isGesturing = !0) &&
            z(j, A.isDragging)
          );
        },
        Qt = function () {
          return (A.isGesturing = !1) || _(A);
        },
        er = function (j) {
          if (!$e(j)) {
            var de = X(),
              V = Jt();
            Ji((de - mi) * K, (V - Ki) * K, 1),
              (mi = de),
              (Ki = V),
              h && ge.restart(!0);
          }
        },
        tr = function (j) {
          if (!$e(j)) {
            (j = Yn(j, f)), N && (W = !0);
            var de =
              (j.deltaMode === 1 ? l : j.deltaMode === 2 ? Lt.innerHeight : 1) *
              g;
            Ji(j.deltaX * de, j.deltaY * de, 0), h && !F && ge.restart(!0);
          }
        },
        yi = function (j) {
          if (!$e(j)) {
            var de = j.clientX,
              V = j.clientY,
              Q = de - A.x,
              H = V - A.y;
            (A.x = de),
              (A.y = V),
              (D = !0),
              h && ge.restart(!0),
              (Q || H) && Zi(Q, H);
          }
        },
        Qi = function (j) {
          (A.event = j), I(A);
        },
        Ar = function (j) {
          (A.event = j), M(A);
        },
        Bn = function (j) {
          return $e(j) || (Yn(j, f) && q(A));
        };
      (ge = A._dc = it.delayedCall(d || 0.25, Qs).pause()),
        (A.deltaX = A.deltaY = 0),
        (A._vx = Dl(0, 50, !0)),
        (A._vy = Dl(0, 50, !0)),
        (A.scrollX = X),
        (A.scrollY = Jt),
        (A.isDragging = A.isGesturing = A.isPressed = !1),
        Bh(this),
        (A.enable = function (Z) {
          return (
            A.isEnabled ||
              (pt(Hr ? Ne : a, "scroll", Ml),
              s.indexOf("scroll") >= 0 && pt(Hr ? Ne : a, "scroll", er, Ft, L),
              s.indexOf("wheel") >= 0 && pt(a, "wheel", tr, Ft, L),
              ((s.indexOf("touch") >= 0 && zh) || s.indexOf("pointer") >= 0) &&
                (pt(a, ir[0], _i, Ft, L),
                pt(Ne, ir[2], ne),
                pt(Ne, ir[3], ne),
                G && pt(a, "click", Fn, !0, !0),
                q && pt(a, "click", Bn),
                z && pt(Ne, "gesturestart", vi),
                _ && pt(Ne, "gestureend", Qt),
                I && pt(a, Ti + "enter", Qi),
                M && pt(a, Ti + "leave", Ar),
                $ && pt(a, Ti + "move", yi)),
              (A.isEnabled = !0),
              Z && Z.type && _i(Z),
              Y && Y(A)),
            A
          );
        }),
        (A.disable = function () {
          A.isEnabled &&
            (fn.filter(function (Z) {
              return Z !== A && as(Z.target);
            }).length || dt(Hr ? Ne : a, "scroll", Ml),
            A.isPressed &&
              (A._vx.reset(), A._vy.reset(), dt(F ? a : Ne, ir[1], jr, !0)),
            dt(Hr ? Ne : a, "scroll", er, L),
            dt(a, "wheel", tr, L),
            dt(a, ir[0], _i, L),
            dt(Ne, ir[2], ne),
            dt(Ne, ir[3], ne),
            dt(a, "click", Fn, !0),
            dt(a, "click", Bn),
            dt(Ne, "gesturestart", vi),
            dt(Ne, "gestureend", Qt),
            dt(a, Ti + "enter", Qi),
            dt(a, Ti + "leave", Ar),
            dt(a, Ti + "move", yi),
            (A.isEnabled = A.isPressed = A.isDragging = !1),
            he && he(A));
        }),
        (A.kill = A.revert =
          function () {
            A.disable();
            var Z = fn.indexOf(A);
            Z >= 0 && fn.splice(Z, 1), Nr === A && (Nr = 0);
          }),
        fn.push(A),
        F && as(a) && (Nr = A),
        A.enable(p);
    }),
    Kg(o, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    o
  );
})();
Be.version = "3.12.5";
Be.create = function (o) {
  return new Be(o);
};
Be.register = Wh;
Be.getAll = function () {
  return fn.slice();
};
Be.getById = function (o) {
  return fn.filter(function (e) {
    return e.vars.id === o;
  })[0];
};
$h() && it.registerPlugin(Be);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var U,
  nn,
  le,
  ke,
  nr,
  xe,
  Yh,
  Zo,
  Cs,
  ls,
  Kn,
  so,
  at,
  va,
  Ll,
  mt,
  If,
  Nf,
  sn,
  Xh,
  Ha,
  Gh,
  gt,
  Il,
  Hh,
  qh,
  Kr,
  Nl,
  Au,
  vn,
  Ru,
  Qo,
  zl,
  qa,
  oo = 1,
  lt = Date.now,
  ja = lt(),
  Ht = 0,
  Jn = 0,
  zf = function (e, t, r) {
    var i = Rt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
  },
  Ff = function (e, t) {
    return t && (!Rt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Zg = function o() {
    return Jn && requestAnimationFrame(o);
  },
  Bf = function () {
    return (va = 1);
  },
  $f = function () {
    return (va = 0);
  },
  mr = function (e) {
    return e;
  },
  Zn = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  jh = function () {
    return typeof window < "u";
  },
  Kh = function () {
    return U || (jh() && (U = window.gsap) && U.registerPlugin && U);
  },
  $i = function (e) {
    return !!~Yh.indexOf(e);
  },
  Jh = function (e) {
    return (
      (e === "Height" ? Ru : le["inner" + e]) ||
      nr["client" + e] ||
      xe["client" + e]
    );
  },
  Zh = function (e) {
    return (
      oi(e, "getBoundingClientRect") ||
      ($i(e)
        ? function () {
            return (No.width = le.innerWidth), (No.height = Ru), No;
          }
        : function () {
            return Ir(e);
          })
    );
  },
  Qg = function (e, t, r) {
    var i = r.d,
      n = r.d2,
      s = r.a;
    return (s = oi(e, "getBoundingClientRect"))
      ? function () {
          return s()[i];
        }
      : function () {
          return (t ? Jh(n) : e["client" + n]) || 0;
        };
  },
  em = function (e, t) {
    return !t || ~xr.indexOf(e)
      ? Zh(e)
      : function () {
          return No;
        };
  },
  wr = function (e, t) {
    var r = t.s,
      i = t.d2,
      n = t.d,
      s = t.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (s = oi(e, r))
        ? s() - Zh(e)()[n]
        : $i(e)
        ? (nr[r] || xe[r]) - Jh(i)
        : e[r] - e["offset" + i]
    );
  },
  ao = function (e, t) {
    for (var r = 0; r < sn.length; r += 3)
      (!t || ~t.indexOf(sn[r + 1])) && e(sn[r], sn[r + 1], sn[r + 2]);
  },
  Rt = function (e) {
    return typeof e == "string";
  },
  wt = function (e) {
    return typeof e == "function";
  },
  Qn = function (e) {
    return typeof e == "number";
  },
  Ci = function (e) {
    return typeof e == "object";
  },
  Xn = function (e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  },
  Ka = function (e, t) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  tn = Math.abs,
  Qh = "left",
  ed = "top",
  Mu = "right",
  Du = "bottom",
  Di = "width",
  Li = "height",
  us = "Right",
  fs = "Left",
  cs = "Top",
  hs = "Bottom",
  Ve = "padding",
  Vt = "margin",
  Pn = "Width",
  Lu = "Height",
  Ye = "px",
  Ut = function (e) {
    return le.getComputedStyle(e);
  },
  tm = function (e) {
    var t = Ut(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  Vf = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  Ir = function (e, t) {
    var r =
        t &&
        Ut(e)[Ll] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        U.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  ea = function (e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  td = function (e) {
    var t = [],
      r = e.labels,
      i = e.duration(),
      n;
    for (n in r) t.push(r[n] / i);
    return t;
  },
  rm = function (e) {
    return function (t) {
      return U.utils.snap(td(e), t);
    };
  },
  Iu = function (e) {
    var t = U.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, n) {
          return i - n;
        });
    return r
      ? function (i, n, s) {
          s === void 0 && (s = 0.001);
          var a;
          if (!n) return t(i);
          if (n > 0) {
            for (i -= s, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
            return r[a - 1];
          } else for (a = r.length, i += s; a--; ) if (r[a] <= i) return r[a];
          return r[0];
        }
      : function (i, n, s) {
          s === void 0 && (s = 0.001);
          var a = t(i);
          return !n || Math.abs(a - i) < s || a - i < 0 == n < 0
            ? a
            : t(n < 0 ? i - e : i + e);
        };
  },
  im = function (e) {
    return function (t, r) {
      return Iu(td(e))(t, r.direction);
    };
  },
  lo = function (e, t, r, i) {
    return r.split(",").forEach(function (n) {
      return e(t, n, i);
    });
  },
  Je = function (e, t, r, i, n) {
    return e.addEventListener(t, r, { passive: !i, capture: !!n });
  },
  Ke = function (e, t, r, i) {
    return e.removeEventListener(t, r, !!i);
  },
  uo = function (e, t, r) {
    (r = r && r.wheelHandler), r && (e(t, "wheel", r), e(t, "touchmove", r));
  },
  Uf = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  fo = { toggleActions: "play", anticipatePin: 0 },
  ta = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Mo = function (e, t) {
    if (Rt(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          i +
          (e in ta
            ? ta[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  co = function (e, t, r, i, n, s, a, l) {
    var u = n.startColor,
      f = n.endColor,
      h = n.fontSize,
      d = n.indent,
      c = n.fontWeight,
      g = ke.createElement("div"),
      p = $i(r) || oi(r, "pinType") === "fixed",
      m = e.indexOf("scroller") !== -1,
      v = p ? xe : r,
      w = e.indexOf("start") !== -1,
      y = w ? u : f,
      x =
        "border-color:" +
        y +
        ";font-size:" +
        h +
        ";color:" +
        y +
        ";font-weight:" +
        c +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (x += "position:" + ((m || l) && p ? "fixed;" : "absolute;")),
      (m || l || !p) &&
        (x += (i === Xe ? Mu : Du) + ":" + (s + parseFloat(d)) + "px;"),
      a &&
        (x +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (g._isStart = w),
      g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (g.style.cssText = x),
      (g.innerText = t || t === 0 ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(g, v.children[0]) : v.appendChild(g),
      (g._offset = g["offset" + i.op.d2]),
      Do(g, 0, i, w),
      g
    );
  },
  Do = function (e, t, r, i) {
    var n = { display: "block" },
      s = r[i ? "os2" : "p2"],
      a = r[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (n[r.a + "Percent"] = i ? -100 : 0),
      (n[r.a] = i ? "1px" : 0),
      (n["border" + s + Pn] = 1),
      (n["border" + a + Pn] = 0),
      (n[r.p] = t + "px"),
      U.set(e, n);
  },
  ie = [],
  Fl = {},
  Os,
  Wf = function () {
    return lt() - Ht > 34 && (Os || (Os = requestAnimationFrame(Vr)));
  },
  rn = function () {
    (!gt || !gt.isPressed || gt.startX > xe.clientWidth) &&
      (se.cache++,
      gt ? Os || (Os = requestAnimationFrame(Vr)) : Vr(),
      Ht || Ui("scrollStart"),
      (Ht = lt()));
  },
  Ja = function () {
    (qh = le.innerWidth), (Hh = le.innerHeight);
  },
  es = function () {
    se.cache++,
      !at &&
        !Gh &&
        !ke.fullscreenElement &&
        !ke.webkitFullscreenElement &&
        (!Il ||
          qh !== le.innerWidth ||
          Math.abs(le.innerHeight - Hh) > le.innerHeight * 0.25) &&
        Zo.restart(!0);
  },
  Vi = {},
  nm = [],
  rd = function o() {
    return Ke(oe, "scrollEnd", o) || Pi(!0);
  },
  Ui = function (e) {
    return (
      (Vi[e] &&
        Vi[e].map(function (t) {
          return t();
        })) ||
      nm
    );
  },
  At = [],
  id = function (e) {
    for (var t = 0; t < At.length; t += 5)
      (!e || (At[t + 4] && At[t + 4].query === e)) &&
        ((At[t].style.cssText = At[t + 1]),
        At[t].getBBox && At[t].setAttribute("transform", At[t + 2] || ""),
        (At[t + 3].uncache = 1));
  },
  Nu = function (e, t) {
    var r;
    for (mt = 0; mt < ie.length; mt++)
      (r = ie[mt]),
        r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
    (Qo = !0), t && id(t), t || Ui("revert");
  },
  nd = function (e, t) {
    se.cache++,
      (t || !_t) &&
        se.forEach(function (r) {
          return wt(r) && r.cacheID++ && (r.rec = 0);
        }),
      Rt(e) && (le.history.scrollRestoration = Au = e);
  },
  _t,
  Ii = 0,
  Yf,
  sm = function () {
    if (Yf !== Ii) {
      var e = (Yf = Ii);
      requestAnimationFrame(function () {
        return e === Ii && Pi(!0);
      });
    }
  },
  sd = function () {
    xe.appendChild(vn),
      (Ru = (!gt && vn.offsetHeight) || le.innerHeight),
      xe.removeChild(vn);
  },
  Xf = function (e) {
    return Cs(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  },
  Pi = function (e, t) {
    if (Ht && !e && !Qo) {
      Je(oe, "scrollEnd", rd);
      return;
    }
    sd(),
      (_t = oe.isRefreshing = !0),
      se.forEach(function (i) {
        return wt(i) && ++i.cacheID && (i.rec = i());
      });
    var r = Ui("refreshInit");
    Xh && oe.sort(),
      t || Nu(),
      se.forEach(function (i) {
        wt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      ie.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      (Qo = !1),
      ie.forEach(function (i) {
        if (i._subPinOffset && i.pin) {
          var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            s = i.pin[n];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh();
        }
      }),
      (zl = 1),
      Xf(!0),
      ie.forEach(function (i) {
        var n = wr(i.scroller, i._dir),
          s = i.vars.end === "max" || (i._endClamp && i.end > n),
          a = i._startClamp && i.start >= n;
        (s || a) &&
          i.setPositions(
            a ? n - 1 : i.start,
            s ? Math.max(a ? n : i.start + 1, n) : i.end,
            !0
          );
      }),
      Xf(!1),
      (zl = 0),
      r.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      se.forEach(function (i) {
        wt(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      nd(Au, 1),
      Zo.pause(),
      Ii++,
      (_t = 2),
      Vr(2),
      ie.forEach(function (i) {
        return wt(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (_t = oe.isRefreshing = !1),
      Ui("refresh");
  },
  Bl = 0,
  Lo = 1,
  ds,
  Vr = function (e) {
    if (e === 2 || (!_t && !Qo)) {
      (oe.isUpdating = !0), ds && ds.update(0);
      var t = ie.length,
        r = lt(),
        i = r - ja >= 50,
        n = t && ie[0].scroll();
      if (
        ((Lo = Bl > n ? -1 : 1),
        _t || (Bl = n),
        i &&
          (Ht && !va && r - Ht > 200 && ((Ht = 0), Ui("scrollEnd")),
          (Kn = ja),
          (ja = r)),
        Lo < 0)
      ) {
        for (mt = t; mt-- > 0; ) ie[mt] && ie[mt].update(0, i);
        Lo = 1;
      } else for (mt = 0; mt < t; mt++) ie[mt] && ie[mt].update(0, i);
      oe.isUpdating = !1;
    }
    Os = 0;
  },
  $l = [
    Qh,
    ed,
    Du,
    Mu,
    Vt + hs,
    Vt + us,
    Vt + cs,
    Vt + fs,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Io = $l.concat([
    Di,
    Li,
    "boxSizing",
    "max" + Pn,
    "max" + Lu,
    "position",
    Vt,
    Ve,
    Ve + cs,
    Ve + us,
    Ve + hs,
    Ve + fs,
  ]),
  om = function (e, t, r) {
    yn(r);
    var i = e._gsap;
    if (i.spacerIsNative) yn(i.spacerState);
    else if (e._gsap.swappedIn) {
      var n = t.parentNode;
      n && (n.insertBefore(e, t), n.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Za = function (e, t, r, i) {
    if (!e._gsap.swappedIn) {
      for (var n = $l.length, s = t.style, a = e.style, l; n--; )
        (l = $l[n]), (s[l] = r[l]);
      (s.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (s.display = "inline-block"),
        (a[Du] = a[Mu] = "auto"),
        (s.flexBasis = r.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Di] = ea(e, yt) + Ye),
        (s[Li] = ea(e, Xe) + Ye),
        (s[Ve] = a[Vt] = a[ed] = a[Qh] = "0"),
        yn(i),
        (a[Di] = a["max" + Pn] = r[Di]),
        (a[Li] = a["max" + Lu] = r[Li]),
        (a[Ve] = r[Ve]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  am = /([A-Z])/g,
  yn = function (e) {
    if (e) {
      var t = e.t.style,
        r = e.length,
        i = 0,
        n,
        s;
      for ((e.t._gsap || U.core.getCache(e.t)).uncache = 1; i < r; i += 2)
        (s = e[i + 1]),
          (n = e[i]),
          s
            ? (t[n] = s)
            : t[n] && t.removeProperty(n.replace(am, "-$1").toLowerCase());
    }
  },
  ho = function (e) {
    for (var t = Io.length, r = e.style, i = [], n = 0; n < t; n++)
      i.push(Io[n], r[Io[n]]);
    return (i.t = e), i;
  },
  lm = function (e, t, r) {
    for (var i = [], n = e.length, s = r ? 8 : 0, a; s < n; s += 2)
      (a = e[s]), i.push(a, a in t ? t[a] : e[s + 1]);
    return (i.t = e.t), i;
  },
  No = { left: 0, top: 0 },
  Gf = function (e, t, r, i, n, s, a, l, u, f, h, d, c, g) {
    wt(e) && (e = e(l)),
      Rt(e) &&
        e.substr(0, 3) === "max" &&
        (e = d + (e.charAt(4) === "=" ? Mo("0" + e.substr(3), r) : 0));
    var p = c ? c.time() : 0,
      m,
      v,
      w;
    if ((c && c.seek(0), isNaN(e) || (e = +e), Qn(e)))
      c &&
        (e = U.utils.mapRange(
          c.scrollTrigger.start,
          c.scrollTrigger.end,
          0,
          d,
          e
        )),
        a && Do(a, r, i, !0);
    else {
      wt(t) && (t = t(l));
      var y = (e || "0").split(" "),
        x,
        S,
        T,
        b;
      (w = bt(t, l) || xe),
        (x = Ir(w) || {}),
        (!x || (!x.left && !x.top)) &&
          Ut(w).display === "none" &&
          ((b = w.style.display),
          (w.style.display = "block"),
          (x = Ir(w)),
          b ? (w.style.display = b) : w.style.removeProperty("display")),
        (S = Mo(y[0], x[i.d])),
        (T = Mo(y[1] || "0", r)),
        (e = x[i.p] - u[i.p] - f + S + n - T),
        a && Do(a, T, i, r - T < 20 || (a._isStart && T > 20)),
        (r -= r - T);
    }
    if ((g && ((l[g] = e || -0.001), e < 0 && (e = 0)), s)) {
      var O = e + r,
        C = s._isStart;
      (m = "scroll" + i.d2),
        Do(
          s,
          O,
          i,
          (C && O > 20) ||
            (!C && (h ? Math.max(xe[m], nr[m]) : s.parentNode[m]) <= O + 1)
        ),
        h &&
          ((u = Ir(a)),
          h && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + Ye));
    }
    return (
      c &&
        w &&
        ((m = Ir(w)),
        c.seek(d),
        (v = Ir(w)),
        (c._caScrollDist = m[i.p] - v[i.p]),
        (e = (e / c._caScrollDist) * d)),
      c && c.seek(p),
      c ? e : Math.round(e)
    );
  },
  um = /(webkit|moz|length|cssText|inset)/i,
  Hf = function (e, t, r, i) {
    if (e.parentNode !== t) {
      var n = e.style,
        s,
        a;
      if (t === xe) {
        (e._stOrig = n.cssText), (a = Ut(e));
        for (s in a)
          !+s &&
            !um.test(s) &&
            a[s] &&
            typeof n[s] == "string" &&
            s !== "0" &&
            (n[s] = a[s]);
        (n.top = r), (n.left = i);
      } else n.cssText = e._stOrig;
      (U.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  od = function (e, t, r) {
    var i = t,
      n = i;
    return function (s) {
      var a = Math.round(e());
      return (
        a !== i &&
          a !== n &&
          Math.abs(a - i) > 3 &&
          Math.abs(a - n) > 3 &&
          ((s = a), r && r()),
        (n = i),
        (i = s),
        s
      );
    };
  },
  po = function (e, t, r) {
    var i = {};
    (i[t.p] = "+=" + r), U.set(e, i);
  },
  qf = function (e, t) {
    var r = ui(e, t),
      i = "_scroll" + t.p2,
      n = function s(a, l, u, f, h) {
        var d = s.tween,
          c = l.onComplete,
          g = {};
        u = u || r();
        var p = od(r, u, function () {
          d.kill(), (s.tween = 0);
        });
        return (
          (h = (f && h) || 0),
          (f = f || a - u),
          d && d.kill(),
          (l[i] = a),
          (l.inherit = !1),
          (l.modifiers = g),
          (g[i] = function () {
            return p(u + f * d.ratio + h * d.ratio * d.ratio);
          }),
          (l.onUpdate = function () {
            se.cache++, s.tween && Vr();
          }),
          (l.onComplete = function () {
            (s.tween = 0), c && c.call(d);
          }),
          (d = s.tween = U.to(e, l)),
          d
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      Je(e, "wheel", r.wheelHandler),
      oe.isTouch && Je(e, "touchmove", r.wheelHandler),
      n
    );
  },
  oe = (function () {
    function o(t, r) {
      nn ||
        o.register(U) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Nl(this),
        this.init(t, r);
    }
    var e = o.prototype;
    return (
      (e.init = function (r, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Jn)
        ) {
          this.update = this.refresh = this.kill = mr;
          return;
        }
        r = Vf(Rt(r) || Qn(r) || r.nodeType ? { trigger: r } : r, fo);
        var n = r,
          s = n.onUpdate,
          a = n.toggleClass,
          l = n.id,
          u = n.onToggle,
          f = n.onRefresh,
          h = n.scrub,
          d = n.trigger,
          c = n.pin,
          g = n.pinSpacing,
          p = n.invalidateOnRefresh,
          m = n.anticipatePin,
          v = n.onScrubComplete,
          w = n.onSnapComplete,
          y = n.once,
          x = n.snap,
          S = n.pinReparent,
          T = n.pinSpacer,
          b = n.containerAnimation,
          O = n.fastScrollEnd,
          C = n.preventOverlaps,
          E =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? yt
              : Xe,
          k = !h && h !== 0,
          P = bt(r.scroller || le),
          R = U.core.getCache(P),
          I = $i(P),
          M =
            ("pinType" in r
              ? r.pinType
              : oi(P, "pinType") || (I && "fixed")) === "fixed",
          $ = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          B = k && r.toggleActions.split(" "),
          F = "markers" in r ? r.markers : fo.markers,
          z = I ? 0 : parseFloat(Ut(P)["border" + E.p2 + Pn]) || 0,
          _ = this,
          N =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(_);
            },
          Y = Qg(P, I, E),
          he = em(P, I),
          q = 0,
          K = 0,
          L = 0,
          G = ui(P, E),
          ee,
          te,
          fe,
          ge,
          He,
          D,
          W,
          we,
          Oe,
          A,
          Ie,
          Kt,
          Ft,
          X,
          Jt,
          mi,
          Ki,
          qe,
          Hr,
          Ne,
          Zt,
          Bt,
          kr,
          Fn,
          $e,
          Qs,
          qr,
          Ji,
          Zi,
          jr,
          _i,
          ne,
          vi,
          Qt,
          er,
          tr,
          yi,
          Qi,
          Ar;
        if (
          ((_._startClamp = _._endClamp = !1),
          (_._dir = E),
          (m *= 45),
          (_.scroller = P),
          (_.scroll = b ? b.time.bind(b) : G),
          (ge = G()),
          (_.vars = r),
          (i = i || r.animation),
          "refreshPriority" in r &&
            ((Xh = 1), r.refreshPriority === -9999 && (ds = _)),
          (R.tweenScroll = R.tweenScroll || {
            top: qf(P, Xe),
            left: qf(P, yt),
          }),
          (_.tweenTo = ee = R.tweenScroll[E.p]),
          (_.scrubDuration = function (V) {
            (vi = Qn(V) && V),
              vi
                ? ne
                  ? ne.duration(V)
                  : (ne = U.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: vi,
                      paused: !0,
                      onComplete: function () {
                        return v && v(_);
                      },
                    }))
                : (ne && ne.progress(1).kill(), (ne = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !_.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (_.animation = i.pause()),
            (i.scrollTrigger = _),
            _.scrubDuration(h),
            (jr = 0),
            l || (l = i.vars.id)),
          x &&
            ((!Ci(x) || x.push) && (x = { snapTo: x }),
            "scrollBehavior" in xe.style &&
              U.set(I ? [xe, nr] : P, { scrollBehavior: "auto" }),
            se.forEach(function (V) {
              return (
                wt(V) &&
                V.target === (I ? ke.scrollingElement || nr : P) &&
                (V.smooth = !1)
              );
            }),
            (fe = wt(x.snapTo)
              ? x.snapTo
              : x.snapTo === "labels"
              ? rm(i)
              : x.snapTo === "labelsDirectional"
              ? im(i)
              : x.directional !== !1
              ? function (V, Q) {
                  return Iu(x.snapTo)(V, lt() - K < 500 ? 0 : Q.direction);
                }
              : U.utils.snap(x.snapTo)),
            (Qt = x.duration || { min: 0.1, max: 2 }),
            (Qt = Ci(Qt) ? ls(Qt.min, Qt.max) : ls(Qt, Qt)),
            (er = U.delayedCall(x.delay || vi / 2 || 0.1, function () {
              var V = G(),
                Q = lt() - K < 500,
                H = ee.tween;
              if (
                (Q || Math.abs(_.getVelocity()) < 10) &&
                !H &&
                !va &&
                q !== V
              ) {
                var J = (V - D) / X,
                  je = i && !k ? i.totalProgress() : J,
                  ae = Q ? 0 : ((je - _i) / (lt() - Kn)) * 1e3 || 0,
                  ze = U.utils.clamp(-J, 1 - J, (tn(ae / 2) * ae) / 0.185),
                  nt = J + (x.inertia === !1 ? 0 : ze),
                  De,
                  Ee,
                  me = x,
                  rr = me.onStart,
                  Pe = me.onInterrupt,
                  kt = me.onComplete;
                if (
                  ((De = fe(nt, _)),
                  Qn(De) || (De = nt),
                  (Ee = Math.round(D + De * X)),
                  V <= W && V >= D && Ee !== V)
                ) {
                  if (H && !H._initted && H.data <= tn(Ee - V)) return;
                  x.inertia === !1 && (ze = De - J),
                    ee(
                      Ee,
                      {
                        duration: Qt(
                          tn(
                            (Math.max(tn(nt - je), tn(De - je)) * 0.185) /
                              ae /
                              0.05 || 0
                          )
                        ),
                        ease: x.ease || "power3",
                        data: tn(Ee - V),
                        onInterrupt: function () {
                          return er.restart(!0) && Pe && Pe(_);
                        },
                        onComplete: function () {
                          _.update(),
                            (q = G()),
                            i &&
                              (ne
                                ? ne.resetTo(
                                    "totalProgress",
                                    De,
                                    i._tTime / i._tDur
                                  )
                                : i.progress(De)),
                            (jr = _i =
                              i && !k ? i.totalProgress() : _.progress),
                            w && w(_),
                            kt && kt(_);
                        },
                      },
                      V,
                      ze * X,
                      Ee - V - ze * X
                    ),
                    rr && rr(_, ee.tween);
                }
              } else _.isActive && q !== V && er.restart(!0);
            }).pause())),
          l && (Fl[l] = _),
          (d = _.trigger = bt(d || (c !== !0 && c))),
          (Ar = d && d._gsap && d._gsap.stRevert),
          Ar && (Ar = Ar(_)),
          (c = c === !0 ? d : bt(c)),
          Rt(a) && (a = { targets: d, className: a }),
          c &&
            (g === !1 ||
              g === Vt ||
              (g =
                !g &&
                c.parentNode &&
                c.parentNode.style &&
                Ut(c.parentNode).display === "flex"
                  ? !1
                  : Ve),
            (_.pin = c),
            (te = U.core.getCache(c)),
            te.spacer
              ? (Jt = te.pinState)
              : (T &&
                  ((T = bt(T)),
                  T && !T.nodeType && (T = T.current || T.nativeElement),
                  (te.spacerIsNative = !!T),
                  T && (te.spacerState = ho(T))),
                (te.spacer = qe = T || ke.createElement("div")),
                qe.classList.add("pin-spacer"),
                l && qe.classList.add("pin-spacer-" + l),
                (te.pinState = Jt = ho(c))),
            r.force3D !== !1 && U.set(c, { force3D: !0 }),
            (_.spacer = qe = te.spacer),
            (Zi = Ut(c)),
            (Fn = Zi[g + E.os2]),
            (Ne = U.getProperty(c)),
            (Zt = U.quickSetter(c, E.a, Ye)),
            Za(c, qe, Zi),
            (Ki = ho(c))),
          F)
        ) {
          (Kt = Ci(F) ? Vf(F, Uf) : Uf),
            (A = co("scroller-start", l, P, E, Kt, 0)),
            (Ie = co("scroller-end", l, P, E, Kt, 0, A)),
            (Hr = A["offset" + E.op.d2]);
          var Bn = bt(oi(P, "content") || P);
          (we = this.markerStart = co("start", l, Bn, E, Kt, Hr, 0, b)),
            (Oe = this.markerEnd = co("end", l, Bn, E, Kt, Hr, 0, b)),
            b && (Qi = U.quickSetter([we, Oe], E.a, Ye)),
            !M &&
              !(xr.length && oi(P, "fixedMarkers") === !0) &&
              (tm(I ? xe : P),
              U.set([A, Ie], { force3D: !0 }),
              (Qs = U.quickSetter(A, E.a, Ye)),
              (Ji = U.quickSetter(Ie, E.a, Ye)));
        }
        if (b) {
          var Z = b.vars.onUpdate,
            j = b.vars.onUpdateParams;
          b.eventCallback("onUpdate", function () {
            _.update(0, 0, 1), Z && Z.apply(b, j || []);
          });
        }
        if (
          ((_.previous = function () {
            return ie[ie.indexOf(_) - 1];
          }),
          (_.next = function () {
            return ie[ie.indexOf(_) + 1];
          }),
          (_.revert = function (V, Q) {
            if (!Q) return _.kill(!0);
            var H = V !== !1 || !_.enabled,
              J = at;
            H !== _.isReverted &&
              (H &&
                ((tr = Math.max(G(), _.scroll.rec || 0)),
                (L = _.progress),
                (yi = i && i.progress())),
              we &&
                [we, Oe, A, Ie].forEach(function (je) {
                  return (je.style.display = H ? "none" : "block");
                }),
              H && ((at = _), _.update(H)),
              c &&
                (!S || !_.isActive) &&
                (H ? om(c, qe, Jt) : Za(c, qe, Ut(c), $e)),
              H || _.update(H),
              (at = J),
              (_.isReverted = H));
          }),
          (_.refresh = function (V, Q, H, J) {
            if (!((at || !_.enabled) && !Q)) {
              if (c && V && Ht) {
                Je(o, "scrollEnd", rd);
                return;
              }
              !_t && N && N(_),
                (at = _),
                ee.tween && !H && (ee.tween.kill(), (ee.tween = 0)),
                ne && ne.pause(),
                p && i && i.revert({ kill: !1 }).invalidate(),
                _.isReverted || _.revert(!0, !0),
                (_._subPinOffset = !1);
              var je = Y(),
                ae = he(),
                ze = b ? b.duration() : wr(P, E),
                nt = X <= 0.01,
                De = 0,
                Ee = J || 0,
                me = Ci(H) ? H.end : r.end,
                rr = r.endTrigger || d,
                Pe = Ci(H)
                  ? H.start
                  : r.start || (r.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"),
                kt = (_.pinnedContainer =
                  r.pinnedContainer && bt(r.pinnedContainer, _)),
                cr = (d && Math.max(0, ie.indexOf(_))) || 0,
                et = cr,
                tt,
                st,
                wi,
                eo,
                ot,
                We,
                hr,
                za,
                _f,
                $n,
                dr,
                Vn,
                to;
              for (
                F &&
                Ci(H) &&
                ((Vn = U.getProperty(A, E.p)), (to = U.getProperty(Ie, E.p)));
                et--;

              )
                (We = ie[et]),
                  We.end || We.refresh(0, 1) || (at = _),
                  (hr = We.pin),
                  hr &&
                    (hr === d || hr === c || hr === kt) &&
                    !We.isReverted &&
                    ($n || ($n = []), $n.unshift(We), We.revert(!0, !0)),
                  We !== ie[et] && (cr--, et--);
              for (
                wt(Pe) && (Pe = Pe(_)),
                  Pe = zf(Pe, "start", _),
                  D =
                    Gf(
                      Pe,
                      d,
                      je,
                      E,
                      G(),
                      we,
                      A,
                      _,
                      ae,
                      z,
                      M,
                      ze,
                      b,
                      _._startClamp && "_startClamp"
                    ) || (c ? -0.001 : 0),
                  wt(me) && (me = me(_)),
                  Rt(me) &&
                    !me.indexOf("+=") &&
                    (~me.indexOf(" ")
                      ? (me = (Rt(Pe) ? Pe.split(" ")[0] : "") + me)
                      : ((De = Mo(me.substr(2), je)),
                        (me = Rt(Pe)
                          ? Pe
                          : (b
                              ? U.utils.mapRange(
                                  0,
                                  b.duration(),
                                  b.scrollTrigger.start,
                                  b.scrollTrigger.end,
                                  D
                                )
                              : D) + De),
                        (rr = d))),
                  me = zf(me, "end", _),
                  W =
                    Math.max(
                      D,
                      Gf(
                        me || (rr ? "100% 0" : ze),
                        rr,
                        je,
                        E,
                        G() + De,
                        Oe,
                        Ie,
                        _,
                        ae,
                        z,
                        M,
                        ze,
                        b,
                        _._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  De = 0,
                  et = cr;
                et--;

              )
                (We = ie[et]),
                  (hr = We.pin),
                  hr &&
                    We.start - We._pinPush <= D &&
                    !b &&
                    We.end > 0 &&
                    ((tt =
                      We.end -
                      (_._startClamp ? Math.max(0, We.start) : We.start)),
                    ((hr === d && We.start - We._pinPush < D) || hr === kt) &&
                      isNaN(Pe) &&
                      (De += tt * (1 - We.progress)),
                    hr === c && (Ee += tt));
              if (
                ((D += De),
                (W += De),
                _._startClamp && (_._startClamp += De),
                _._endClamp &&
                  !_t &&
                  ((_._endClamp = W || -0.001), (W = Math.min(W, wr(P, E)))),
                (X = W - D || ((D -= 0.01) && 0.001)),
                nt && (L = U.utils.clamp(0, 1, U.utils.normalize(D, W, tr))),
                (_._pinPush = Ee),
                we &&
                  De &&
                  ((tt = {}),
                  (tt[E.a] = "+=" + De),
                  kt && (tt[E.p] = "-=" + G()),
                  U.set([we, Oe], tt)),
                c && !(zl && _.end >= wr(P, E)))
              )
                (tt = Ut(c)),
                  (eo = E === Xe),
                  (wi = G()),
                  (Bt = parseFloat(Ne(E.a)) + Ee),
                  !ze &&
                    W > 1 &&
                    ((dr = (I ? ke.scrollingElement || nr : P).style),
                    (dr = {
                      style: dr,
                      value: dr["overflow" + E.a.toUpperCase()],
                    }),
                    I &&
                      Ut(xe)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                      (dr.style["overflow" + E.a.toUpperCase()] = "scroll")),
                  Za(c, qe, tt),
                  (Ki = ho(c)),
                  (st = Ir(c, !0)),
                  (za = M && ui(P, eo ? yt : Xe)()),
                  g
                    ? (($e = [g + E.os2, X + Ee + Ye]),
                      ($e.t = qe),
                      (et = g === Ve ? ea(c, E) + X + Ee : 0),
                      et &&
                        ($e.push(E.d, et + Ye),
                        qe.style.flexBasis !== "auto" &&
                          (qe.style.flexBasis = et + Ye)),
                      yn($e),
                      kt &&
                        ie.forEach(function (Un) {
                          Un.pin === kt &&
                            Un.vars.pinSpacing !== !1 &&
                            (Un._subPinOffset = !0);
                        }),
                      M && G(tr))
                    : ((et = ea(c, E)),
                      et &&
                        qe.style.flexBasis !== "auto" &&
                        (qe.style.flexBasis = et + Ye)),
                  M &&
                    ((ot = {
                      top: st.top + (eo ? wi - D : za) + Ye,
                      left: st.left + (eo ? za : wi - D) + Ye,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (ot[Di] = ot["max" + Pn] = Math.ceil(st.width) + Ye),
                    (ot[Li] = ot["max" + Lu] = Math.ceil(st.height) + Ye),
                    (ot[Vt] =
                      ot[Vt + cs] =
                      ot[Vt + us] =
                      ot[Vt + hs] =
                      ot[Vt + fs] =
                        "0"),
                    (ot[Ve] = tt[Ve]),
                    (ot[Ve + cs] = tt[Ve + cs]),
                    (ot[Ve + us] = tt[Ve + us]),
                    (ot[Ve + hs] = tt[Ve + hs]),
                    (ot[Ve + fs] = tt[Ve + fs]),
                    (mi = lm(Jt, ot, S)),
                    _t && G(0)),
                  i
                    ? ((_f = i._initted),
                      Ha(1),
                      i.render(i.duration(), !0, !0),
                      (kr = Ne(E.a) - Bt + X + Ee),
                      (qr = Math.abs(X - kr) > 1),
                      M && qr && mi.splice(mi.length - 2, 2),
                      i.render(0, !0, !0),
                      _f || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      Ha(0))
                    : (kr = X),
                  dr &&
                    (dr.value
                      ? (dr.style["overflow" + E.a.toUpperCase()] = dr.value)
                      : dr.style.removeProperty("overflow-" + E.a));
              else if (d && G() && !b)
                for (st = d.parentNode; st && st !== xe; )
                  st._pinOffset && ((D -= st._pinOffset), (W -= st._pinOffset)),
                    (st = st.parentNode);
              $n &&
                $n.forEach(function (Un) {
                  return Un.revert(!1, !0);
                }),
                (_.start = D),
                (_.end = W),
                (ge = He = _t ? tr : G()),
                !b && !_t && (ge < tr && G(tr), (_.scroll.rec = 0)),
                _.revert(!1, !0),
                (K = lt()),
                er && ((q = -1), er.restart(!0)),
                (at = 0),
                i &&
                  k &&
                  (i._initted || yi) &&
                  i.progress() !== yi &&
                  i.progress(yi || 0, !0).render(i.time(), !0, !0),
                (nt || L !== _.progress || b || p) &&
                  (i &&
                    !k &&
                    i.totalProgress(
                      b && D < -0.001 && !L ? U.utils.normalize(D, W, 0) : L,
                      !0
                    ),
                  (_.progress = nt || (ge - D) / X === L ? 0 : L)),
                c && g && (qe._pinOffset = Math.round(_.progress * kr)),
                ne && ne.invalidate(),
                isNaN(Vn) ||
                  ((Vn -= U.getProperty(A, E.p)),
                  (to -= U.getProperty(Ie, E.p)),
                  po(A, E, Vn),
                  po(we, E, Vn - (J || 0)),
                  po(Ie, E, to),
                  po(Oe, E, to - (J || 0))),
                nt && !_t && _.update(),
                f && !_t && !Ft && ((Ft = !0), f(_), (Ft = !1));
            }
          }),
          (_.getVelocity = function () {
            return ((G() - He) / (lt() - Kn)) * 1e3 || 0;
          }),
          (_.endAnimation = function () {
            Xn(_.callbackAnimation),
              i &&
                (ne
                  ? ne.progress(1)
                  : i.paused()
                  ? k || Xn(i, _.direction < 0, 1)
                  : Xn(i, i.reversed()));
          }),
          (_.labelToScroll = function (V) {
            return (
              (i &&
                i.labels &&
                (D || _.refresh() || D) + (i.labels[V] / i.duration()) * X) ||
              0
            );
          }),
          (_.getTrailing = function (V) {
            var Q = ie.indexOf(_),
              H = _.direction > 0 ? ie.slice(0, Q).reverse() : ie.slice(Q + 1);
            return (
              Rt(V)
                ? H.filter(function (J) {
                    return J.vars.preventOverlaps === V;
                  })
                : H
            ).filter(function (J) {
              return _.direction > 0 ? J.end <= D : J.start >= W;
            });
          }),
          (_.update = function (V, Q, H) {
            if (!(b && !H && !V)) {
              var J = _t === !0 ? tr : _.scroll(),
                je = V ? 0 : (J - D) / X,
                ae = je < 0 ? 0 : je > 1 ? 1 : je || 0,
                ze = _.progress,
                nt,
                De,
                Ee,
                me,
                rr,
                Pe,
                kt,
                cr;
              if (
                (Q &&
                  ((He = ge),
                  (ge = b ? G() : J),
                  x && ((_i = jr), (jr = i && !k ? i.totalProgress() : ae))),
                m &&
                  c &&
                  !at &&
                  !oo &&
                  Ht &&
                  (!ae && D < J + ((J - He) / (lt() - Kn)) * m
                    ? (ae = 1e-4)
                    : ae === 1 &&
                      W > J + ((J - He) / (lt() - Kn)) * m &&
                      (ae = 0.9999)),
                ae !== ze && _.enabled)
              ) {
                if (
                  ((nt = _.isActive = !!ae && ae < 1),
                  (De = !!ze && ze < 1),
                  (Pe = nt !== De),
                  (rr = Pe || !!ae != !!ze),
                  (_.direction = ae > ze ? 1 : -1),
                  (_.progress = ae),
                  rr &&
                    !at &&
                    ((Ee = ae && !ze ? 0 : ae === 1 ? 1 : ze === 1 ? 2 : 3),
                    k &&
                      ((me =
                        (!Pe && B[Ee + 1] !== "none" && B[Ee + 1]) || B[Ee]),
                      (cr =
                        i &&
                        (me === "complete" || me === "reset" || me in i)))),
                  C &&
                    (Pe || cr) &&
                    (cr || h || !i) &&
                    (wt(C)
                      ? C(_)
                      : _.getTrailing(C).forEach(function (wi) {
                          return wi.endAnimation();
                        })),
                  k ||
                    (ne && !at && !oo
                      ? (ne._dp._time - ne._start !== ne._time &&
                          ne.render(ne._dp._time - ne._start),
                        ne.resetTo
                          ? ne.resetTo("totalProgress", ae, i._tTime / i._tDur)
                          : ((ne.vars.totalProgress = ae),
                            ne.invalidate().restart()))
                      : i && i.totalProgress(ae, !!(at && (K || V)))),
                  c)
                ) {
                  if ((V && g && (qe.style[g + E.os2] = Fn), !M))
                    Zt(Zn(Bt + kr * ae));
                  else if (rr) {
                    if (
                      ((kt = !V && ae > ze && W + 1 > J && J + 1 >= wr(P, E)),
                      S)
                    )
                      if (!V && (nt || kt)) {
                        var et = Ir(c, !0),
                          tt = J - D;
                        Hf(
                          c,
                          xe,
                          et.top + (E === Xe ? tt : 0) + Ye,
                          et.left + (E === Xe ? 0 : tt) + Ye
                        );
                      } else Hf(c, qe);
                    yn(nt || kt ? mi : Ki),
                      (qr && ae < 1 && nt) ||
                        Zt(Bt + (ae === 1 && !kt ? kr : 0));
                  }
                }
                x && !ee.tween && !at && !oo && er.restart(!0),
                  a &&
                    (Pe || (y && ae && (ae < 1 || !qa))) &&
                    Cs(a.targets).forEach(function (wi) {
                      return wi.classList[nt || y ? "add" : "remove"](
                        a.className
                      );
                    }),
                  s && !k && !V && s(_),
                  rr && !at
                    ? (k &&
                        (cr &&
                          (me === "complete"
                            ? i.pause().totalProgress(1)
                            : me === "reset"
                            ? i.restart(!0).pause()
                            : me === "restart"
                            ? i.restart(!0)
                            : i[me]()),
                        s && s(_)),
                      (Pe || !qa) &&
                        (u && Pe && Ka(_, u),
                        $[Ee] && Ka(_, $[Ee]),
                        y && (ae === 1 ? _.kill(!1, 1) : ($[Ee] = 0)),
                        Pe || ((Ee = ae === 1 ? 1 : 3), $[Ee] && Ka(_, $[Ee]))),
                      O &&
                        !nt &&
                        Math.abs(_.getVelocity()) > (Qn(O) ? O : 2500) &&
                        (Xn(_.callbackAnimation),
                        ne
                          ? ne.progress(1)
                          : Xn(i, me === "reverse" ? 1 : !ae, 1)))
                    : k && s && !at && s(_);
              }
              if (Ji) {
                var st = b ? (J / b.duration()) * (b._caScrollDist || 0) : J;
                Qs(st + (A._isFlipped ? 1 : 0)), Ji(st);
              }
              Qi && Qi((-J / b.duration()) * (b._caScrollDist || 0));
            }
          }),
          (_.enable = function (V, Q) {
            _.enabled ||
              ((_.enabled = !0),
              Je(P, "resize", es),
              I || Je(P, "scroll", rn),
              N && Je(o, "refreshInit", N),
              V !== !1 && ((_.progress = L = 0), (ge = He = q = G())),
              Q !== !1 && _.refresh());
          }),
          (_.getTween = function (V) {
            return V && ee ? ee.tween : ne;
          }),
          (_.setPositions = function (V, Q, H, J) {
            if (b) {
              var je = b.scrollTrigger,
                ae = b.duration(),
                ze = je.end - je.start;
              (V = je.start + (ze * V) / ae), (Q = je.start + (ze * Q) / ae);
            }
            _.refresh(
              !1,
              !1,
              {
                start: Ff(V, H && !!_._startClamp),
                end: Ff(Q, H && !!_._endClamp),
              },
              J
            ),
              _.update();
          }),
          (_.adjustPinSpacing = function (V) {
            if ($e && V) {
              var Q = $e.indexOf(E.d) + 1;
              ($e[Q] = parseFloat($e[Q]) + V + Ye),
                ($e[1] = parseFloat($e[1]) + V + Ye),
                yn($e);
            }
          }),
          (_.disable = function (V, Q) {
            if (
              _.enabled &&
              (V !== !1 && _.revert(!0, !0),
              (_.enabled = _.isActive = !1),
              Q || (ne && ne.pause()),
              (tr = 0),
              te && (te.uncache = 1),
              N && Ke(o, "refreshInit", N),
              er && (er.pause(), ee.tween && ee.tween.kill() && (ee.tween = 0)),
              !I)
            ) {
              for (var H = ie.length; H--; )
                if (ie[H].scroller === P && ie[H] !== _) return;
              Ke(P, "resize", es), I || Ke(P, "scroll", rn);
            }
          }),
          (_.kill = function (V, Q) {
            _.disable(V, Q), ne && !Q && ne.kill(), l && delete Fl[l];
            var H = ie.indexOf(_);
            H >= 0 && ie.splice(H, 1),
              H === mt && Lo > 0 && mt--,
              (H = 0),
              ie.forEach(function (J) {
                return J.scroller === _.scroller && (H = 1);
              }),
              H || _t || (_.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                V && i.revert({ kill: !1 }),
                Q || i.kill()),
              we &&
                [we, Oe, A, Ie].forEach(function (J) {
                  return J.parentNode && J.parentNode.removeChild(J);
                }),
              ds === _ && (ds = 0),
              c &&
                (te && (te.uncache = 1),
                (H = 0),
                ie.forEach(function (J) {
                  return J.pin === c && H++;
                }),
                H || (te.spacer = 0)),
              r.onKill && r.onKill(_);
          }),
          ie.push(_),
          _.enable(!1, !1),
          Ar && Ar(_),
          i && i.add && !X)
        ) {
          var de = _.update;
          (_.update = function () {
            (_.update = de), D || W || _.refresh();
          }),
            U.delayedCall(0.01, _.update),
            (X = 0.01),
            (D = W = 0);
        } else _.refresh();
        c && sm();
      }),
      (o.register = function (r) {
        return (
          nn ||
            ((U = r || Kh()), jh() && window.document && o.enable(), (nn = Jn)),
          nn
        );
      }),
      (o.defaults = function (r) {
        if (r) for (var i in r) fo[i] = r[i];
        return fo;
      }),
      (o.disable = function (r, i) {
        (Jn = 0),
          ie.forEach(function (s) {
            return s[i ? "kill" : "disable"](r);
          }),
          Ke(le, "wheel", rn),
          Ke(ke, "scroll", rn),
          clearInterval(so),
          Ke(ke, "touchcancel", mr),
          Ke(xe, "touchstart", mr),
          lo(Ke, ke, "pointerdown,touchstart,mousedown", Bf),
          lo(Ke, ke, "pointerup,touchend,mouseup", $f),
          Zo.kill(),
          ao(Ke);
        for (var n = 0; n < se.length; n += 3)
          uo(Ke, se[n], se[n + 1]), uo(Ke, se[n], se[n + 2]);
      }),
      (o.enable = function () {
        if (
          ((le = window),
          (ke = document),
          (nr = ke.documentElement),
          (xe = ke.body),
          U &&
            ((Cs = U.utils.toArray),
            (ls = U.utils.clamp),
            (Nl = U.core.context || mr),
            (Ha = U.core.suppressOverwrites || mr),
            (Au = le.history.scrollRestoration || "auto"),
            (Bl = le.pageYOffset),
            U.core.globals("ScrollTrigger", o),
            xe))
        ) {
          (Jn = 1),
            (vn = document.createElement("div")),
            (vn.style.height = "100vh"),
            (vn.style.position = "absolute"),
            sd(),
            Zg(),
            Be.register(U),
            (o.isTouch = Be.isTouch),
            (Kr =
              Be.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Il = Be.isTouch === 1),
            Je(le, "wheel", rn),
            (Yh = [le, ke, nr, xe]),
            U.matchMedia
              ? ((o.matchMedia = function (l) {
                  var u = U.matchMedia(),
                    f;
                  for (f in l) u.add(f, l[f]);
                  return u;
                }),
                U.addEventListener("matchMediaInit", function () {
                  return Nu();
                }),
                U.addEventListener("matchMediaRevert", function () {
                  return id();
                }),
                U.addEventListener("matchMedia", function () {
                  Pi(0, 1), Ui("matchMedia");
                }),
                U.matchMedia("(orientation: portrait)", function () {
                  return Ja(), Ja;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Ja(),
            Je(ke, "scroll", rn);
          var r = xe.style,
            i = r.borderTopStyle,
            n = U.core.Animation.prototype,
            s,
            a;
          for (
            n.revert ||
              Object.defineProperty(n, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              s = Ir(xe),
              Xe.m = Math.round(s.top + Xe.sc()) || 0,
              yt.m = Math.round(s.left + yt.sc()) || 0,
              i ? (r.borderTopStyle = i) : r.removeProperty("border-top-style"),
              so = setInterval(Wf, 250),
              U.delayedCall(0.5, function () {
                return (oo = 0);
              }),
              Je(ke, "touchcancel", mr),
              Je(xe, "touchstart", mr),
              lo(Je, ke, "pointerdown,touchstart,mousedown", Bf),
              lo(Je, ke, "pointerup,touchend,mouseup", $f),
              Ll = U.utils.checkPrefix("transform"),
              Io.push(Ll),
              nn = lt(),
              Zo = U.delayedCall(0.2, Pi).pause(),
              sn = [
                ke,
                "visibilitychange",
                function () {
                  var l = le.innerWidth,
                    u = le.innerHeight;
                  ke.hidden
                    ? ((If = l), (Nf = u))
                    : (If !== l || Nf !== u) && es();
                },
                ke,
                "DOMContentLoaded",
                Pi,
                le,
                "load",
                Pi,
                le,
                "resize",
                es,
              ],
              ao(Je),
              ie.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < se.length;
            a += 3
          )
            uo(Ke, se[a], se[a + 1]), uo(Ke, se[a], se[a + 2]);
        }
      }),
      (o.config = function (r) {
        "limitCallbacks" in r && (qa = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(so)) || ((so = i) && setInterval(Wf, i)),
          "ignoreMobileResize" in r &&
            (Il = o.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (ao(Ke) || ao(Je, r.autoRefreshEvents || "none"),
            (Gh = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (o.scrollerProxy = function (r, i) {
        var n = bt(r),
          s = se.indexOf(n),
          a = $i(n);
        ~s && se.splice(s, a ? 6 : 2),
          i && (a ? xr.unshift(le, i, xe, i, nr, i) : xr.unshift(n, i));
      }),
      (o.clearMatchMedia = function (r) {
        ie.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (o.isInViewport = function (r, i, n) {
        var s = (Rt(r) ? bt(r) : r).getBoundingClientRect(),
          a = s[n ? Di : Li] * i || 0;
        return n
          ? s.right - a > 0 && s.left + a < le.innerWidth
          : s.bottom - a > 0 && s.top + a < le.innerHeight;
      }),
      (o.positionInViewport = function (r, i, n) {
        Rt(r) && (r = bt(r));
        var s = r.getBoundingClientRect(),
          a = s[n ? Di : Li],
          l =
            i == null
              ? a / 2
              : i in ta
              ? ta[i] * a
              : ~i.indexOf("%")
              ? (parseFloat(i) * a) / 100
              : parseFloat(i) || 0;
        return n ? (s.left + l) / le.innerWidth : (s.top + l) / le.innerHeight;
      }),
      (o.killAll = function (r) {
        if (
          (ie.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          r !== !0)
        ) {
          var i = Vi.killAll || [];
          (Vi = {}),
            i.forEach(function (n) {
              return n();
            });
        }
      }),
      o
    );
  })();
oe.version = "3.12.5";
oe.saveStyles = function (o) {
  return o
    ? Cs(o).forEach(function (e) {
        if (e && e.style) {
          var t = At.indexOf(e);
          t >= 0 && At.splice(t, 5),
            At.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              U.core.getCache(e),
              Nl()
            );
        }
      })
    : At;
};
oe.revert = function (o, e) {
  return Nu(!o, e);
};
oe.create = function (o, e) {
  return new oe(o, e);
};
oe.refresh = function (o) {
  return o ? es() : (nn || oe.register()) && Pi(!0);
};
oe.update = function (o) {
  return ++se.cache && Vr(o === !0 ? 2 : 0);
};
oe.clearScrollMemory = nd;
oe.maxScroll = function (o, e) {
  return wr(o, e ? yt : Xe);
};
oe.getScrollFunc = function (o, e) {
  return ui(bt(o), e ? yt : Xe);
};
oe.getById = function (o) {
  return Fl[o];
};
oe.getAll = function () {
  return ie.filter(function (o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
oe.isScrolling = function () {
  return !!Ht;
};
oe.snapDirectional = Iu;
oe.addEventListener = function (o, e) {
  var t = Vi[o] || (Vi[o] = []);
  ~t.indexOf(e) || t.push(e);
};
oe.removeEventListener = function (o, e) {
  var t = Vi[o],
    r = t && t.indexOf(e);
  r >= 0 && t.splice(r, 1);
};
oe.batch = function (o, e) {
  var t = [],
    r = {},
    i = e.interval || 0.016,
    n = e.batchMax || 1e9,
    s = function (u, f) {
      var h = [],
        d = [],
        c = U.delayedCall(i, function () {
          f(h, d), (h = []), (d = []);
        }).pause();
      return function (g) {
        h.length || c.restart(!0),
          h.push(g.trigger),
          d.push(g),
          n <= h.length && c.progress(1);
      };
    },
    a;
  for (a in e)
    r[a] =
      a.substr(0, 2) === "on" && wt(e[a]) && a !== "onRefreshInit"
        ? s(a, e[a])
        : e[a];
  return (
    wt(n) &&
      ((n = n()),
      Je(oe, "refresh", function () {
        return (n = e.batchMax());
      })),
    Cs(o).forEach(function (l) {
      var u = {};
      for (a in r) u[a] = r[a];
      (u.trigger = l), t.push(oe.create(u));
    }),
    t
  );
};
var jf = function (e, t, r, i) {
    return (
      t > i ? e(i) : t < 0 && e(0),
      r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  },
  Qa = function o(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Be.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === nr && o(xe, t);
  },
  go = { auto: 1, scroll: 1 },
  fm = function (e) {
    var t = e.event,
      r = e.target,
      i = e.axis,
      n = (t.changedTouches ? t.changedTouches[0] : t).target,
      s = n._gsap || U.core.getCache(n),
      a = lt(),
      l;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== xe &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(go[(l = Ut(n)).overflowY] || go[l.overflowX]));

      )
        n = n.parentNode;
      (s._isScroll =
        n &&
        n !== r &&
        !$i(n) &&
        (go[(l = Ut(n)).overflowY] || go[l.overflowX])),
        (s._isScrollT = a);
    }
    (s._isScroll || i === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  ad = function (e, t, r, i) {
    return Be.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (i = i && fm),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && Je(ke, Be.eventTypes[0], Jf, !1, !0);
      },
      onDisable: function () {
        return Ke(ke, Be.eventTypes[0], Jf, !0);
      },
    });
  },
  cm = /(input|label|select|textarea)/i,
  Kf,
  Jf = function (e) {
    var t = cm.test(e.target.tagName);
    (t || Kf) && ((e._gsapAllow = !0), (Kf = t));
  },
  hm = function (e) {
    Ci(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      r = t.normalizeScrollX,
      i = t.momentum,
      n = t.allowNestedScroll,
      s = t.onRelease,
      a,
      l,
      u = bt(e.target) || nr,
      f = U.core.globals().ScrollSmoother,
      h = f && f.get(),
      d =
        Kr &&
        ((e.content && bt(e.content)) ||
          (h && e.content !== !1 && !h.smooth() && h.content())),
      c = ui(u, Xe),
      g = ui(u, yt),
      p = 1,
      m =
        (Be.isTouch && le.visualViewport
          ? le.visualViewport.scale * le.visualViewport.width
          : le.outerWidth) / le.innerWidth,
      v = 0,
      w = wt(i)
        ? function () {
            return i(a);
          }
        : function () {
            return i || 2.8;
          },
      y,
      x,
      S = ad(u, e.type, !0, n),
      T = function () {
        return (x = !1);
      },
      b = mr,
      O = mr,
      C = function () {
        (l = wr(u, Xe)),
          (O = ls(Kr ? 1 : 0, l)),
          r && (b = ls(0, wr(u, yt))),
          (y = Ii);
      },
      E = function () {
        (d._gsap.y = Zn(parseFloat(d._gsap.y) + c.offset) + "px"),
          (d.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(d._gsap.y) +
            ", 0, 1)"),
          (c.offset = c.cacheID = 0);
      },
      k = function () {
        if (x) {
          requestAnimationFrame(T);
          var F = Zn(a.deltaY / 2),
            z = O(c.v - F);
          if (d && z !== c.v + c.offset) {
            c.offset = z - c.v;
            var _ = Zn((parseFloat(d && d._gsap.y) || 0) - c.offset);
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              _ +
              ", 0, 1)"),
              (d._gsap.y = _ + "px"),
              (c.cacheID = se.cache),
              Vr();
          }
          return !0;
        }
        c.offset && E(), (x = !0);
      },
      P,
      R,
      I,
      M,
      $ = function () {
        C(),
          P.isActive() &&
            P.vars.scrollY > l &&
            (c() > l ? P.progress(1) && c(l) : P.resetTo("scrollY", l));
      };
    return (
      d && U.set(d, { y: "+=0" }),
      (e.ignoreCheck = function (B) {
        return (
          (Kr && B.type === "touchmove" && k()) ||
          (p > 1.05 && B.type !== "touchstart") ||
          a.isGesturing ||
          (B.touches && B.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        x = !1;
        var B = p;
        (p = Zn(((le.visualViewport && le.visualViewport.scale) || 1) / m)),
          P.pause(),
          B !== p && Qa(u, p > 1.01 ? !0 : r ? !1 : "x"),
          (R = g()),
          (I = c()),
          C(),
          (y = Ii);
      }),
      (e.onRelease = e.onGestureStart =
        function (B, F) {
          if ((c.offset && E(), !F)) M.restart(!0);
          else {
            se.cache++;
            var z = w(),
              _,
              N;
            r &&
              ((_ = g()),
              (N = _ + (z * 0.05 * -B.velocityX) / 0.227),
              (z *= jf(g, _, N, wr(u, yt))),
              (P.vars.scrollX = b(N))),
              (_ = c()),
              (N = _ + (z * 0.05 * -B.velocityY) / 0.227),
              (z *= jf(c, _, N, wr(u, Xe))),
              (P.vars.scrollY = O(N)),
              P.invalidate().duration(z).play(0.01),
              ((Kr && P.vars.scrollY >= l) || _ >= l - 1) &&
                U.to({}, { onUpdate: $, duration: z });
          }
          s && s(B);
        }),
      (e.onWheel = function () {
        P._ts && P.pause(), lt() - v > 1e3 && ((y = 0), (v = lt()));
      }),
      (e.onChange = function (B, F, z, _, N) {
        if (
          (Ii !== y && C(),
          F && r && g(b(_[2] === F ? R + (B.startX - B.x) : g() + F - _[1])),
          z)
        ) {
          c.offset && E();
          var Y = N[2] === z,
            he = Y ? I + B.startY - B.y : c() + z - N[1],
            q = O(he);
          Y && he !== q && (I += q - he), c(q);
        }
        (z || F) && Vr();
      }),
      (e.onEnable = function () {
        Qa(u, r ? !1 : "x"),
          oe.addEventListener("refresh", $),
          Je(le, "resize", $),
          c.smooth &&
            ((c.target.style.scrollBehavior = "auto"),
            (c.smooth = g.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        Qa(u, !0),
          Ke(le, "resize", $),
          oe.removeEventListener("refresh", $),
          S.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Be(e)),
      (a.iOS = Kr),
      Kr && !c() && c(1),
      Kr && U.ticker.add(mr),
      (M = a._dc),
      (P = U.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: od(c, c(), function () {
            return P.pause();
          }),
        },
        onUpdate: Vr,
        onComplete: M.vars.onComplete,
      })),
      a
    );
  };
oe.sort = function (o) {
  return ie.sort(
    o ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
oe.observe = function (o) {
  return new Be(o);
};
oe.normalizeScroll = function (o) {
  if (typeof o > "u") return gt;
  if (o === !0 && gt) return gt.enable();
  if (o === !1) {
    gt && gt.kill(), (gt = o);
    return;
  }
  var e = o instanceof Be ? o : hm(o);
  return gt && gt.target === e.target && gt.kill(), $i(e.target) && (gt = e), e;
};
oe.core = {
  _getVelocityProp: Dl,
  _inputObserver: ad,
  _scrollers: se,
  _proxies: xr,
  bridge: {
    ss: function () {
      Ht || Ui("scrollStart"), (Ht = lt());
    },
    ref: function () {
      return at;
    },
  },
};
Kh() && U.registerPlugin(oe);
function ld(o, e, t) {
  return Math.max(o, Math.min(e, t));
}
class dm {
  advance(e) {
    var r;
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      const i = ld(0, this.currentTime / this.duration, 1);
      t = i >= 1;
      const n = t ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * n;
    } else
      this.lerp
        ? ((this.value = (function (n, s, a, l) {
            return (function (f, h, d) {
              return (1 - d) * f + d * h;
            })(n, s, 1 - Math.exp(-a * l));
          })(this.value, this.to, 60 * this.lerp, e)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (t = !0)))
        : ((this.value = this.to), (t = !0));
    t && this.stop(),
      (r = this.onUpdate) == null || r.call(this, this.value, t);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(e, t, { lerp: r, duration: i, easing: n, onStart: s, onUpdate: a }) {
    (this.from = this.value = e),
      (this.to = t),
      (this.lerp = r),
      (this.duration = i),
      (this.easing = n),
      (this.currentTime = 0),
      (this.isRunning = !0),
      s == null || s(),
      (this.onUpdate = a);
  }
}
class pm {
  constructor({
    wrapper: e,
    content: t,
    autoResize: r = !0,
    debounce: i = 250,
  } = {}) {
    Rr(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    Rr(this, "onWrapperResize", () => {
      this.wrapper === window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    });
    Rr(this, "onContentResize", () => {
      this.wrapper === window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    });
    (this.wrapper = e),
      (this.content = t),
      r &&
        ((this.debouncedResize = (function (s, a) {
          let l;
          return function () {
            let u = arguments,
              f = this;
            clearTimeout(l),
              (l = setTimeout(function () {
                s.apply(f, u);
              }, a));
          };
        })(this.resize, i)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize();
  }
  destroy() {
    var e, t;
    (e = this.wrapperResizeObserver) == null || e.disconnect(),
      (t = this.contentResizeObserver) == null || t.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class ud {
  constructor() {
    this.events = {};
  }
  emit(e, ...t) {
    let r = this.events[e] || [];
    for (let i = 0, n = r.length; i < n; i++) r[i](...t);
  }
  on(e, t) {
    var r;
    return (
      ((r = this.events[e]) != null && r.push(t)) || (this.events[e] = [t]),
      () => {
        var i;
        this.events[e] =
          (i = this.events[e]) == null ? void 0 : i.filter((n) => t !== n);
      }
    );
  }
  off(e, t) {
    var r;
    this.events[e] =
      (r = this.events[e]) == null ? void 0 : r.filter((i) => t !== i);
  }
  destroy() {
    this.events = {};
  }
}
const Zf = 100 / 6;
class gm {
  constructor(e, { wheelMultiplier: t = 1, touchMultiplier: r = 1 }) {
    Rr(this, "onTouchStart", (e) => {
      const { clientX: t, clientY: r } = e.targetTouches
        ? e.targetTouches[0]
        : e;
      (this.touchStart.x = t),
        (this.touchStart.y = r),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
    });
    Rr(this, "onTouchMove", (e) => {
      const { clientX: t, clientY: r } = e.targetTouches
          ? e.targetTouches[0]
          : e,
        i = -(t - this.touchStart.x) * this.touchMultiplier,
        n = -(r - this.touchStart.y) * this.touchMultiplier;
      (this.touchStart.x = t),
        (this.touchStart.y = r),
        (this.lastDelta = { x: i, y: n }),
        this.emitter.emit("scroll", { deltaX: i, deltaY: n, event: e });
    });
    Rr(this, "onTouchEnd", (e) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: e,
      });
    });
    Rr(this, "onWheel", (e) => {
      let { deltaX: t, deltaY: r, deltaMode: i } = e;
      (t *= i === 1 ? Zf : i === 2 ? this.windowWidth : 1),
        (r *= i === 1 ? Zf : i === 2 ? this.windowHeight : 1),
        (t *= this.wheelMultiplier),
        (r *= this.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: t, deltaY: r, event: e });
    });
    Rr(this, "onWindowResize", () => {
      (this.windowWidth = window.innerWidth),
        (this.windowHeight = window.innerHeight);
    });
    (this.element = e),
      (this.wheelMultiplier = t),
      (this.touchMultiplier = r),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new ud()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
}
class mm {
  constructor({
    wrapper: e = window,
    content: t = document.documentElement,
    wheelEventsTarget: r = e,
    eventsTarget: i = r,
    smoothWheel: n = !0,
    syncTouch: s = !1,
    syncTouchLerp: a = 0.075,
    touchInertiaMultiplier: l = 35,
    duration: u,
    easing: f = (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
    lerp: h = 0.1,
    infinite: d = !1,
    orientation: c = "vertical",
    gestureOrientation: g = "vertical",
    touchMultiplier: p = 1,
    wheelMultiplier: m = 1,
    autoResize: v = !0,
    prevent: w = !1,
    __experimental__naiveDimensions: y = !1,
  } = {}) {
    (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.direction = 0),
      (this.onVirtualScroll = ({ deltaX: x, deltaY: S, event: T }) => {
        if (T.ctrlKey) return;
        const b = T.type.includes("touch"),
          O = T.type.includes("wheel");
        if (
          ((this.isTouching =
            T.type === "touchstart" || T.type === "touchmove"),
          this.options.syncTouch &&
            b &&
            T.type === "touchstart" &&
            !this.isStopped &&
            !this.isLocked)
        )
          return void this.reset();
        const C = x === 0 && S === 0,
          E =
            (this.options.gestureOrientation === "vertical" && S === 0) ||
            (this.options.gestureOrientation === "horizontal" && x === 0);
        if (C || E) return;
        let k = T.composedPath();
        k = k.slice(0, k.indexOf(this.rootElement));
        const P = this.options.prevent;
        if (
          k.find(($) => {
            var B, F, z, _, N;
            return (
              $ instanceof Element &&
              ((typeof P == "function" ? (P == null ? void 0 : P($)) : P) ||
                ((B = $.hasAttribute) === null || B === void 0
                  ? void 0
                  : B.call($, "data-lenis-prevent")) ||
                (b &&
                  ((F = $.hasAttribute) === null || F === void 0
                    ? void 0
                    : F.call($, "data-lenis-prevent-touch"))) ||
                (O &&
                  ((z = $.hasAttribute) === null || z === void 0
                    ? void 0
                    : z.call($, "data-lenis-prevent-wheel"))) ||
                (((_ = $.classList) === null || _ === void 0
                  ? void 0
                  : _.contains("lenis")) &&
                  !(
                    !((N = $.classList) === null || N === void 0) &&
                    N.contains("lenis-stopped")
                  )))
            );
          })
        )
          return;
        if (this.isStopped || this.isLocked) return void T.preventDefault();
        if (!((this.options.syncTouch && b) || (this.options.smoothWheel && O)))
          return (this.isScrolling = "native"), void this.animate.stop();
        T.preventDefault();
        let R = S;
        this.options.gestureOrientation === "both"
          ? (R = Math.abs(S) > Math.abs(x) ? S : x)
          : this.options.gestureOrientation === "horizontal" && (R = x);
        const I = b && this.options.syncTouch,
          M = b && T.type === "touchend" && Math.abs(R) > 5;
        M && (R = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + R,
            Object.assign(
              { programmatic: !1 },
              I
                ? { lerp: M ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }
            )
          );
      }),
      (this.onNativeScroll = () => {
        if (
          (clearTimeout(this.__resetVelocityTimeout),
          delete this.__resetVelocityTimeout,
          this.__preventNextNativeScrollEvent)
        )
          delete this.__preventNextNativeScrollEvent;
        else if (this.isScrolling === !1 || this.isScrolling === "native") {
          const x = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity),
            (this.velocity = this.animatedScroll - x),
            (this.direction = Math.sign(this.animatedScroll - x)),
            (this.isScrolling = "native"),
            this.emit(),
            this.velocity !== 0 &&
              (this.__resetVelocityTimeout = setTimeout(() => {
                (this.lastVelocity = this.velocity),
                  (this.velocity = 0),
                  (this.isScrolling = !1),
                  this.emit();
              }, 400));
        }
      }),
      (window.lenisVersion = "1.1.3"),
      (e && e !== document.documentElement && e !== document.body) ||
        (e = window),
      (this.options = {
        wrapper: e,
        content: t,
        wheelEventsTarget: r,
        eventsTarget: i,
        smoothWheel: n,
        syncTouch: s,
        syncTouchLerp: a,
        touchInertiaMultiplier: l,
        duration: u,
        easing: f,
        lerp: h,
        infinite: d,
        gestureOrientation: g,
        orientation: c,
        touchMultiplier: p,
        wheelMultiplier: m,
        autoResize: v,
        prevent: w,
        __experimental__naiveDimensions: y,
      }),
      (this.animate = new dm()),
      (this.emitter = new ud()),
      (this.dimensions = new pm({ wrapper: e, content: t, autoResize: v })),
      this.updateClassName(),
      (this.userData = {}),
      (this.time = 0),
      (this.velocity = this.lastVelocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      (this.virtualScroll = new gm(i, {
        touchMultiplier: p,
        wheelMultiplier: m,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName();
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  off(e, t) {
    return this.emitter.off(e, t);
  }
  setScroll(e) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = e)
      : (this.rootElement.scrollTop = e);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop();
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(e) {
    const t = e - (this.time || e);
    (this.time = e), this.animate.advance(0.001 * t);
  }
  scrollTo(
    e,
    {
      offset: t = 0,
      immediate: r = !1,
      lock: i = !1,
      duration: n = this.options.duration,
      easing: s = this.options.easing,
      lerp: a = this.options.lerp,
      onStart: l,
      onComplete: u,
      force: f = !1,
      programmatic: h = !0,
      userData: d = {},
    } = {}
  ) {
    if ((!this.isStopped && !this.isLocked) || f) {
      if (typeof e == "string" && ["top", "left", "start"].includes(e)) e = 0;
      else if (typeof e == "string" && ["bottom", "right", "end"].includes(e))
        e = this.limit;
      else {
        let c;
        if (
          (typeof e == "string"
            ? (c = document.querySelector(e))
            : e instanceof HTMLElement && e != null && e.nodeType && (c = e),
          c)
        ) {
          if (this.options.wrapper !== window) {
            const p = this.rootElement.getBoundingClientRect();
            t -= this.isHorizontal ? p.left : p.top;
          }
          const g = c.getBoundingClientRect();
          e = (this.isHorizontal ? g.left : g.top) + this.animatedScroll;
        }
      }
      if (
        typeof e == "number" &&
        ((e += t),
        (e = Math.round(e)),
        this.options.infinite
          ? h && (this.targetScroll = this.animatedScroll = this.scroll)
          : (e = ld(0, e, this.limit)),
        e !== this.targetScroll)
      ) {
        if (((this.userData = d), r))
          return (
            (this.animatedScroll = this.targetScroll = e),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            u == null || u(this),
            void (this.userData = {})
          );
        h || (this.targetScroll = e),
          this.animate.fromTo(this.animatedScroll, e, {
            duration: n,
            easing: s,
            lerp: a,
            onStart: () => {
              i && (this.isLocked = !0),
                (this.isScrolling = "smooth"),
                l == null || l(this);
            },
            onUpdate: (c, g) => {
              (this.isScrolling = "smooth"),
                (this.lastVelocity = this.velocity),
                (this.velocity = c - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = c),
                this.setScroll(this.scroll),
                h && (this.targetScroll = c),
                g || this.emit(),
                g &&
                  (this.reset(),
                  this.emit(),
                  u == null || u(this),
                  (this.userData = {}),
                  this.preventNextNativeScrollEvent());
            },
          });
      }
    }
  }
  preventNextNativeScrollEvent() {
    (this.__preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        delete this.__preventNextNativeScrollEvent;
      });
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? (function (t, r) {
          return ((t % r) + r) % r;
        })(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(e) {
    this.__isScrolling !== e &&
      ((this.__isScrolling = e), this.updateClassName());
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(e) {
    this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(e) {
    this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let e = "lenis";
    return (
      this.isStopped && (e += " lenis-stopped"),
      this.isLocked && (e += " lenis-locked"),
      this.isScrolling && (e += " lenis-scrolling"),
      this.isScrolling === "smooth" && (e += " lenis-smooth"),
      e
    );
  }
  updateClassName() {
    this.cleanUpClassName(),
      (this.rootElement.className =
        `${this.rootElement.className} ${this.className}`.trim());
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className
      .replace(/lenis(-\w+)?/g, "")
      .trim();
  }
}
const _m = [
    {
      heading:
        "Why should every fitness and nature lover buy gluten-free milk?",
      disc: "Are you one of the fitness freaks looking to lose weight and stay fit without harming any living being? Then a vegan diet can help. Eating vegan is good for everyone as it not just helps you have a perfect body but supports you in maintaining your heart health. So, buy gluten-free milk online to sustain your health without any tension. Why gluten-free milk? Well, the vegan diet is full of gluten as you will consume cereal-based meals made of wheat, barley, rye, semolina, etc. These fibres help maintain good digestion and boost immunity. What’s more, a vegan diet also helps you have a shield against type 2 diabetes and certain cancers. But gluten intolerance or non-celiac gluten sensitivity is the significant reason that will make a person buy gluten-free milk. Don’t worry; all options of gluten-free milk are available online. The significant component of a vegan diet is plant-based milk, like almond milk, soy milk, oats milk, coconut milk, etc. Anyone can buy this vegan milk online in India.",
    },
    {
      heading: "What is organic vegan milk?",
      disc: "Vegan milk is produced from beans, seeds, nuts, and grains. The most popular varieties of vegan milk available online are soy, almond, and oat milk at Alt CO. Other popular brands produce it from coconuts, peas, cashews, hazelnuts, hemp seeds, or rice. A few years back, vegan milk demand was very low, and only a few such products existed. But sales of high protein vegan milk online have exploded in recent years. And why not? It’s cruelty-free, healthier, tastier, and better for the planet. Alt CO. has come up with a whole range of organic vegan milk at the best price. These are usually called vegan dairy-free milk as well.",
    },
    {
      heading: "Why should you buy dairy-free milk online?",
      disc: "Vegan milk is a better choice in every case and on all fronts. They undoubtedly taste better than dairy milk. Production costs are much lesser since there’s no need to breed and house animals or dispose of their waste. Unlike dairy milk, most vegan or dairy-free milk is low in saturated fat yet still comprises plenty of calcium and protein. Buying dairy-free milk online is the best in many ways as you are supposed to get amazing benefits like Convenience in placing order Wider range at a single platform Promising quality, Hygienic and safe packaging, Tested vegan milk on high standards, Cruelty-free milk guaranteed, Doorstep delivery on time, Availability to order vegan milk in bulk quantity",
    },
    {
      heading: "Which is the best dairy-free milk for a vegan diet?",
      disc: "The best dairy-free milk for a vegan diet depends on your taste preferences and nutritional needs. Popular options include oat milk, almond milk, and soy milk, each offering unique benefits.",
    },
    {
      heading: "Excellent reasons to choose vegan milk over regular milk:",
      disc: "Regular milk comes from cruel factory farms, produced from poor animals kept under extreme detention. Even the dairies that pride themselves on being a part of good animal welfare send the useless cows to slaughter. Milk is full of lactose, a form of sugar poorly digested by most people in India due to milk allergy. So, better choose no lactose milk online. People who have stopped drinking milk and switched to other alternatives often reported that their congestion, acne, and digestive problems spontaneously resolved. It is healthier to lose weight, being rich in protein and low in fats. Hence, you must look forward to bettering healthy, safe, cruelty-free dairy milk alternatives online. Alt CO. has got all the varieties that will make you fit not just physically but mentally as well. The feeling of not harming any animal for our wellness is inexplicable.",
    },
    {
      heading:
        "Here is the list of best dairy-free milk you can buy online with us:",
      disc: "Almond milk– Almond milk is made from almonds and comes with a lightly sweet, nutty and frothy fresh taste, similar to cow’s milk. Oats milk – Oat milk is made the same way any other nut or dairy-free milk is prepared. Soaking, blending and straining are the three basic steps involved. Soy milk- Soybeans are the main ingredient to make soy milk by making them undergo the same procedure of soaking, blending and straining. Other online dairy milk alternatives are coconut milk, rice milk, cashew milk, hemp milk, etc. Alt CO. promise good nutrition profiles and different flavours with the best high protein vegan milk online in India to keep things interesting for you.",
    },
    {
      heading: "Why is AltCo one of the best oat milk brands in India?",
      disc: "In a world that’s constantly evolving, we tend to switch to alternatives – ones that are healthier and sustainable. Oats are an unmatched superfood, full of nutrition and health benefits. After exploring all the goodness of oats, we bring them to you in a different form. While keeping sustainability at its core, we help all health-conscious people make easy, affordable, and healthy choices by switching to our range of vegan milk online in India. We want every nature and fitness lover to help us serve and save the planet without compromising on taste. Alt CO. is an alt-dairy brand that promises better-tasting goods for the person on a vegan diet and the planet. Whether procuring first-rate oat grain or packaging in a way that it reaches in best quality and then back to the earth, all our prime motives. We never compromise on quality; hence, we want to help our customers orchestrate the changes they have been longing for and make each day for you better.",
    },
  ],
  vm = { faq: _m };
function ym(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
function wm(o) {
  if (o.__esModule) return o;
  var e = o.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(o).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(o, r);
      Object.defineProperty(
        t,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return o[r];
              },
            }
      );
    }),
    t
  );
}
var zu = { exports: {} },
  be = String,
  fd = function () {
    return {
      isColorSupported: !1,
      reset: be,
      bold: be,
      dim: be,
      italic: be,
      underline: be,
      inverse: be,
      hidden: be,
      strikethrough: be,
      black: be,
      red: be,
      green: be,
      yellow: be,
      blue: be,
      magenta: be,
      cyan: be,
      white: be,
      gray: be,
      bgBlack: be,
      bgRed: be,
      bgGreen: be,
      bgYellow: be,
      bgBlue: be,
      bgMagenta: be,
      bgCyan: be,
      bgWhite: be,
    };
  };
zu.exports = fd();
zu.exports.createColors = fd;
var bm = zu.exports;
const xm = {},
  Sm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xm },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ur = wm(Sm);
let Qf = bm,
  ec = ur,
  Vl = class cd extends Error {
    constructor(e, t, r, i, n, s) {
      super(e),
        (this.name = "CssSyntaxError"),
        (this.reason = e),
        n && (this.file = n),
        i && (this.source = i),
        s && (this.plugin = s),
        typeof t < "u" &&
          typeof r < "u" &&
          (typeof t == "number"
            ? ((this.line = t), (this.column = r))
            : ((this.line = t.line),
              (this.column = t.column),
              (this.endLine = r.line),
              (this.endColumn = r.column))),
        this.setMessage(),
        Error.captureStackTrace && Error.captureStackTrace(this, cd);
    }
    setMessage() {
      (this.message = this.plugin ? this.plugin + ": " : ""),
        (this.message += this.file ? this.file : "<css input>"),
        typeof this.line < "u" &&
          (this.message += ":" + this.line + ":" + this.column),
        (this.message += ": " + this.reason);
    }
    showSourceCode(e) {
      if (!this.source) return "";
      let t = this.source;
      e == null && (e = Qf.isColorSupported), ec && e && (t = ec(t));
      let r = t.split(/\r?\n/),
        i = Math.max(this.line - 3, 0),
        n = Math.min(this.line + 2, r.length),
        s = String(n).length,
        a,
        l;
      if (e) {
        let { bold: u, gray: f, red: h } = Qf.createColors(!0);
        (a = (d) => u(h(d))), (l = (d) => f(d));
      } else a = l = (u) => u;
      return r.slice(i, n).map((u, f) => {
        let h = i + 1 + f,
          d = " " + (" " + h).slice(-s) + " | ";
        if (h === this.line) {
          let c =
            l(d.replace(/\d/g, " ")) +
            u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return (
            a(">") +
            l(d) +
            u +
            `
 ` +
            c +
            a("^")
          );
        }
        return " " + l(d) + u;
      }).join(`
`);
    }
    toString() {
      let e = this.showSourceCode();
      return (
        e &&
          (e =
            `

` +
            e +
            `
`),
        this.name + ": " + this.message + e
      );
    }
  };
var Fu = Vl;
Vl.default = Vl;
var Us = {};
Us.isClean = Symbol("isClean");
Us.my = Symbol("my");
const tc = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1,
};
function Em(o) {
  return o[0].toUpperCase() + o.slice(1);
}
let Ul = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let r = "@" + e.name,
      i = e.params ? this.rawValue(e, "params") : "";
    if (
      (typeof e.raws.afterName < "u"
        ? (r += e.raws.afterName)
        : i && (r += " "),
      e.nodes)
    )
      this.block(e, r + i);
    else {
      let n = (e.raws.between || "") + (t ? ";" : "");
      this.builder(r + i + n, e);
    }
  }
  beforeAfter(e, t) {
    let r;
    e.type === "decl"
      ? (r = this.raw(e, null, "beforeDecl"))
      : e.type === "comment"
      ? (r = this.raw(e, null, "beforeComment"))
      : t === "before"
      ? (r = this.raw(e, null, "beforeRule"))
      : (r = this.raw(e, null, "beforeClose"));
    let i = e.parent,
      n = 0;
    for (; i && i.type !== "root"; ) (n += 1), (i = i.parent);
    if (
      r.includes(`
`)
    ) {
      let s = this.raw(e, null, "indent");
      if (s.length) for (let a = 0; a < n; a++) r += s;
    }
    return r;
  }
  block(e, t) {
    let r = this.raw(e, "between", "beforeOpen");
    this.builder(t + r + "{", e, "start");
    let i;
    e.nodes && e.nodes.length
      ? (this.body(e), (i = this.raw(e, "after")))
      : (i = this.raw(e, "after", "emptyBody")),
      i && this.builder(i),
      this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; ) t -= 1;
    let r = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let n = e.nodes[i],
        s = this.raw(n, "before");
      s && this.builder(s), this.stringify(n, t !== i || r);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"),
      r = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + r + "*/", e);
  }
  decl(e, t) {
    let r = this.raw(e, "between", "colon"),
      i = e.prop + r + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"),
      t && (i += ";"),
      this.builder(i, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, r) {
    let i;
    if ((r || (r = t), t && ((i = e.raws[t]), typeof i < "u"))) return i;
    let n = e.parent;
    if (
      r === "before" &&
      (!n ||
        (n.type === "root" && n.first === e) ||
        (n && n.type === "document"))
    )
      return "";
    if (!n) return tc[r];
    let s = e.root();
    if ((s.rawCache || (s.rawCache = {}), typeof s.rawCache[r] < "u"))
      return s.rawCache[r];
    if (r === "before" || r === "after") return this.beforeAfter(e, r);
    {
      let a = "raw" + Em(r);
      this[a]
        ? (i = this[a](s, e))
        : s.walk((l) => {
            if (((i = l.raws[t]), typeof i < "u")) return !1;
          });
    }
    return typeof i > "u" && (i = tc[r]), (s.rawCache[r] = i), i;
  }
  rawBeforeClose(e) {
    let t;
    return (
      e.walk((r) => {
        if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
          return (
            (t = r.raws.after),
            t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      t && (t = t.replace(/\S/g, "")),
      t
    );
  }
  rawBeforeComment(e, t) {
    let r;
    return (
      e.walkComments((i) => {
        if (typeof i.raws.before < "u")
          return (
            (r = i.raws.before),
            r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      typeof r > "u"
        ? (r = this.raw(t, null, "beforeDecl"))
        : r && (r = r.replace(/\S/g, "")),
      r
    );
  }
  rawBeforeDecl(e, t) {
    let r;
    return (
      e.walkDecls((i) => {
        if (typeof i.raws.before < "u")
          return (
            (r = i.raws.before),
            r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      typeof r > "u"
        ? (r = this.raw(t, null, "beforeRule"))
        : r && (r = r.replace(/\S/g, "")),
      r
    );
  }
  rawBeforeOpen(e) {
    let t;
    return (
      e.walk((r) => {
        if (r.type !== "decl" && ((t = r.raws.between), typeof t < "u"))
          return !1;
      }),
      t
    );
  }
  rawBeforeRule(e) {
    let t;
    return (
      e.walk((r) => {
        if (
          r.nodes &&
          (r.parent !== e || e.first !== r) &&
          typeof r.raws.before < "u"
        )
          return (
            (t = r.raws.before),
            t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")),
            !1
          );
      }),
      t && (t = t.replace(/\S/g, "")),
      t
    );
  }
  rawColon(e) {
    let t;
    return (
      e.walkDecls((r) => {
        if (typeof r.raws.between < "u")
          return (t = r.raws.between.replace(/[^\s:]/g, "")), !1;
      }),
      t
    );
  }
  rawEmptyBody(e) {
    let t;
    return (
      e.walk((r) => {
        if (
          r.nodes &&
          r.nodes.length === 0 &&
          ((t = r.raws.after), typeof t < "u")
        )
          return !1;
      }),
      t
    );
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return (
      e.walk((r) => {
        let i = r.parent;
        if (
          i &&
          i !== e &&
          i.parent &&
          i.parent === e &&
          typeof r.raws.before < "u"
        ) {
          let n = r.raws.before.split(`
`);
          return (t = n[n.length - 1]), (t = t.replace(/\S/g, "")), !1;
        }
      }),
      t
    );
  }
  rawSemicolon(e) {
    let t;
    return (
      e.walk((r) => {
        if (
          r.nodes &&
          r.nodes.length &&
          r.last.type === "decl" &&
          ((t = r.raws.semicolon), typeof t < "u")
        )
          return !1;
      }),
      t
    );
  }
  rawValue(e, t) {
    let r = e[t],
      i = e.raws[t];
    return i && i.value === r ? i.raw : r;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")),
      e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " +
          e.type +
          ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var hd = Ul;
Ul.default = Ul;
let Tm = hd;
function Wl(o, e) {
  new Tm(e).stringify(o);
}
var ya = Wl;
Wl.default = Wl;
let { isClean: mo, my: Cm } = Us,
  Om = Fu,
  Pm = hd,
  km = ya;
function Yl(o, e) {
  let t = new o.constructor();
  for (let r in o) {
    if (!Object.prototype.hasOwnProperty.call(o, r) || r === "proxyCache")
      continue;
    let i = o[r],
      n = typeof i;
    r === "parent" && n === "object"
      ? e && (t[r] = e)
      : r === "source"
      ? (t[r] = i)
      : Array.isArray(i)
      ? (t[r] = i.map((s) => Yl(s, t)))
      : (n === "object" && i !== null && (i = Yl(i)), (t[r] = i));
  }
  return t;
}
let Xl = class {
  constructor(e = {}) {
    (this.raws = {}), (this[mo] = !1), (this[Cm] = !0);
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let r of e[t])
          typeof r.clone == "function"
            ? this.append(r.clone())
            : this.append(r);
      } else this[t] = e[t];
  }
  addToError(e) {
    if (
      ((e.postcssNode = this),
      e.stack && this.source && /\n\s{4}at /.test(e.stack))
    ) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e) this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before,
      delete this.raws.after,
      e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = Yl(this);
    for (let r in e) t[r] = e[r];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: r, start: i } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: i.column, line: i.line },
        { column: r.column, line: r.line },
        t
      );
    }
    return new Om(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf"
          ? e
          : t === "root"
          ? () => e.root().toProxy()
          : e[t];
      },
      set(e, t, r) {
        return (
          e[t] === r ||
            ((e[t] = r),
            (t === "prop" ||
              t === "value" ||
              t === "name" ||
              t === "params" ||
              t === "important" ||
              t === "text") &&
              e.markDirty()),
          !0
        );
      },
    };
  }
  markDirty() {
    if (this[mo]) {
      this[mo] = !1;
      let e = this;
      for (; (e = e.parent); ) e[mo] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let r = this.source.start;
    if (e.index) r = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let i = t.indexOf(e.word);
      i !== -1 && (r = this.positionInside(i, t));
    }
    return r;
  }
  positionInside(e, t) {
    let r = t || this.toString(),
      i = this.source.start.column,
      n = this.source.start.line;
    for (let s = 0; s < e; s++)
      r[s] ===
      `
`
        ? ((i = 1), (n += 1))
        : (i += 1);
    return { column: i, line: n };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let t = { column: this.source.start.column, line: this.source.start.line },
      r = this.source.end
        ? { column: this.source.end.column + 1, line: this.source.end.line }
        : { column: t.column + 1, line: t.line };
    if (e.word) {
      let i = this.toString(),
        n = i.indexOf(e.word);
      n !== -1 &&
        ((t = this.positionInside(n, i)),
        (r = this.positionInside(n + e.word.length, i)));
    } else
      e.start
        ? (t = { column: e.start.column, line: e.start.line })
        : e.index && (t = this.positionInside(e.index)),
        e.end
          ? (r = { column: e.end.column, line: e.end.line })
          : typeof e.endIndex == "number"
          ? (r = this.positionInside(e.endIndex))
          : e.index && (r = this.positionInside(e.index + 1));
    return (
      (r.line < t.line || (r.line === t.line && r.column <= t.column)) &&
        (r = { column: t.column + 1, line: t.line }),
      { end: r, start: t }
    );
  }
  raw(e, t) {
    return new Pm().raw(this, e, t);
  }
  remove() {
    return (
      this.parent && this.parent.removeChild(this), (this.parent = void 0), this
    );
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this,
        r = !1;
      for (let i of e)
        i === this
          ? (r = !0)
          : r
          ? (this.parent.insertAfter(t, i), (t = i))
          : this.parent.insertBefore(t, i);
      r || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; ) e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let r = {},
      i = t == null;
    t = t || new Map();
    let n = 0;
    for (let s in this) {
      if (
        !Object.prototype.hasOwnProperty.call(this, s) ||
        s === "parent" ||
        s === "proxyCache"
      )
        continue;
      let a = this[s];
      if (Array.isArray(a))
        r[s] = a.map((l) =>
          typeof l == "object" && l.toJSON ? l.toJSON(null, t) : l
        );
      else if (typeof a == "object" && a.toJSON) r[s] = a.toJSON(null, t);
      else if (s === "source") {
        let l = t.get(a.input);
        l == null && ((l = n), t.set(a.input, n), n++),
          (r[s] = { end: a.end, inputId: l, start: a.start });
      } else r[s] = a;
    }
    return i && (r.inputs = [...t.keys()].map((s) => s.toJSON())), r;
  }
  toProxy() {
    return (
      this.proxyCache ||
        (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
      this.proxyCache
    );
  }
  toString(e = km) {
    e.stringify && (e = e.stringify);
    let t = "";
    return (
      e(this, (r) => {
        t += r;
      }),
      t
    );
  }
  warn(e, t, r) {
    let i = { node: this };
    for (let n in r) i[n] = r[n];
    return e.warn(t, i);
  }
  get proxyOf() {
    return this;
  }
};
var wa = Xl;
Xl.default = Xl;
let Am = wa,
  Gl = class extends Am {
    constructor(e) {
      e &&
        typeof e.value < "u" &&
        typeof e.value != "string" &&
        (e = { ...e, value: String(e.value) }),
        super(e),
        (this.type = "decl");
    }
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
  };
var ba = Gl;
Gl.default = Gl;
let Rm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
  Mm =
    (o, e = 21) =>
    (t = e) => {
      let r = "",
        i = t;
      for (; i--; ) r += o[(Math.random() * o.length) | 0];
      return r;
    },
  Dm = (o = 21) => {
    let e = "",
      t = o;
    for (; t--; ) e += Rm[(Math.random() * 64) | 0];
    return e;
  };
var Lm = { nanoid: Dm, customAlphabet: Mm };
let { SourceMapConsumer: rc, SourceMapGenerator: ic } = ur,
  { existsSync: Im, readFileSync: Nm } = ur,
  { dirname: el, join: zm } = ur;
function Fm(o) {
  return Buffer ? Buffer.from(o, "base64").toString() : window.atob(o);
}
let Hl = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e),
      (this.inline = this.startWith(this.annotation, "data:"));
    let r = t.map ? t.map.prev : void 0,
      i = this.loadMap(t.from, r);
    !this.mapFile && t.from && (this.mapFile = t.from),
      this.mapFile && (this.root = el(this.mapFile)),
      i && (this.text = i);
  }
  consumer() {
    return (
      this.consumerCache || (this.consumerCache = new rc(this.text)),
      this.consumerCache
    );
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/,
      r = /^data:application\/json;base64,/,
      i = /^data:application\/json;charset=utf-?8,/,
      n = /^data:application\/json,/;
    if (i.test(e) || n.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || r.test(e)) return Fm(e.substr(RegExp.lastMatch.length));
    let s = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + s);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object"
      ? !1
      : typeof e.mappings == "string" ||
          typeof e._mappings == "string" ||
          Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!t) return;
    let r = e.lastIndexOf(t.pop()),
      i = e.indexOf("*/", r);
    r > -1 &&
      i > -1 &&
      (this.annotation = this.getAnnotationURL(e.substring(r, i)));
  }
  loadFile(e) {
    if (((this.root = el(e)), Im(e)))
      return (this.mapFile = e), Nm(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string") return t;
      if (typeof t == "function") {
        let r = t(e);
        if (r) {
          let i = this.loadFile(r);
          if (!i)
            throw new Error(
              "Unable to load previous source map: " + r.toString()
            );
          return i;
        }
      } else {
        if (t instanceof rc) return ic.fromSourceMap(t).toString();
        if (t instanceof ic) return t.toString();
        if (this.isMap(t)) return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline) return this.decodeInline(this.annotation);
      if (this.annotation) {
        let r = this.annotation;
        return e && (r = zm(el(e), r)), this.loadFile(r);
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(
      this.consumer().sourcesContent &&
      this.consumer().sourcesContent.length > 0
    );
  }
};
var dd = Hl;
Hl.default = Hl;
let { SourceMapConsumer: Bm, SourceMapGenerator: $m } = ur,
  { fileURLToPath: nc, pathToFileURL: _o } = ur,
  { isAbsolute: ql, resolve: jl } = ur,
  { nanoid: Vm } = Lm,
  tl = ur,
  sc = Fu,
  Um = dd,
  rl = Symbol("fromOffsetCache"),
  Wm = !!(Bm && $m),
  oc = !!(jl && ql),
  ra = class {
    constructor(e, t = {}) {
      if (e === null || typeof e > "u" || (typeof e == "object" && !e.toString))
        throw new Error(`PostCSS received ${e} instead of CSS string`);
      if (
        ((this.css = e.toString()),
        this.css[0] === "\uFEFF" || this.css[0] === "￾"
          ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
          : (this.hasBOM = !1),
        t.from &&
          (!oc || /^\w+:\/\//.test(t.from) || ql(t.from)
            ? (this.file = t.from)
            : (this.file = jl(t.from))),
        oc && Wm)
      ) {
        let r = new Um(this.css, t);
        if (r.text) {
          this.map = r;
          let i = r.consumer().file;
          !this.file && i && (this.file = this.mapResolve(i));
        }
      }
      this.file || (this.id = "<input css " + Vm(6) + ">"),
        this.map && (this.map.file = this.from);
    }
    error(e, t, r, i = {}) {
      let n, s, a;
      if (t && typeof t == "object") {
        let u = t,
          f = r;
        if (typeof u.offset == "number") {
          let h = this.fromOffset(u.offset);
          (t = h.line), (r = h.col);
        } else (t = u.line), (r = u.column);
        if (typeof f.offset == "number") {
          let h = this.fromOffset(f.offset);
          (s = h.line), (a = h.col);
        } else (s = f.line), (a = f.column);
      } else if (!r) {
        let u = this.fromOffset(t);
        (t = u.line), (r = u.col);
      }
      let l = this.origin(t, r, s, a);
      return (
        l
          ? (n = new sc(
              e,
              l.endLine === void 0
                ? l.line
                : { column: l.column, line: l.line },
              l.endLine === void 0
                ? l.column
                : { column: l.endColumn, line: l.endLine },
              l.source,
              l.file,
              i.plugin
            ))
          : (n = new sc(
              e,
              s === void 0 ? t : { column: r, line: t },
              s === void 0 ? r : { column: a, line: s },
              this.css,
              this.file,
              i.plugin
            )),
        (n.input = {
          column: r,
          endColumn: a,
          endLine: s,
          line: t,
          source: this.css,
        }),
        this.file &&
          (_o && (n.input.url = _o(this.file).toString()),
          (n.input.file = this.file)),
        n
      );
    }
    fromOffset(e) {
      let t, r;
      if (this[rl]) r = this[rl];
      else {
        let n = this.css.split(`
`);
        r = new Array(n.length);
        let s = 0;
        for (let a = 0, l = n.length; a < l; a++)
          (r[a] = s), (s += n[a].length + 1);
        this[rl] = r;
      }
      t = r[r.length - 1];
      let i = 0;
      if (e >= t) i = r.length - 1;
      else {
        let n = r.length - 2,
          s;
        for (; i < n; )
          if (((s = i + ((n - i) >> 1)), e < r[s])) n = s - 1;
          else if (e >= r[s + 1]) i = s + 1;
          else {
            i = s;
            break;
          }
      }
      return { col: e - r[i] + 1, line: i + 1 };
    }
    mapResolve(e) {
      return /^\w+:\/\//.test(e)
        ? e
        : jl(this.map.consumer().sourceRoot || this.map.root || ".", e);
    }
    origin(e, t, r, i) {
      if (!this.map) return !1;
      let n = this.map.consumer(),
        s = n.originalPositionFor({ column: t, line: e });
      if (!s.source) return !1;
      let a;
      typeof r == "number" &&
        (a = n.originalPositionFor({ column: i, line: r }));
      let l;
      ql(s.source)
        ? (l = _o(s.source))
        : (l = new URL(
            s.source,
            this.map.consumer().sourceRoot || _o(this.map.mapFile)
          ));
      let u = {
        column: s.column,
        endColumn: a && a.column,
        endLine: a && a.line,
        line: s.line,
        url: l.toString(),
      };
      if (l.protocol === "file:")
        if (nc) u.file = nc(l);
        else
          throw new Error(
            "file: protocol is not available in this PostCSS build"
          );
      let f = n.sourceContentFor(s.source);
      return f && (u.source = f), u;
    }
    toJSON() {
      let e = {};
      for (let t of ["hasBOM", "css", "file", "id"])
        this[t] != null && (e[t] = this[t]);
      return (
        this.map &&
          ((e.map = { ...this.map }),
          e.map.consumerCache && (e.map.consumerCache = void 0)),
        e
      );
    }
    get from() {
      return this.file || this.id;
    }
  };
var xa = ra;
ra.default = ra;
tl && tl.registerInput && tl.registerInput(ra);
let { SourceMapConsumer: pd, SourceMapGenerator: zo } = ur,
  { dirname: Fo, relative: gd, resolve: md, sep: _d } = ur,
  { pathToFileURL: ac } = ur,
  Ym = xa,
  Xm = !!(pd && zo),
  Gm = !!(Fo && md && gd && _d),
  Hm = class {
    constructor(e, t, r, i) {
      (this.stringify = e),
        (this.mapOpts = r.map || {}),
        (this.root = t),
        (this.opts = r),
        (this.css = i),
        (this.originalCSS = i),
        (this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute),
        (this.memoizedFileURLs = new Map()),
        (this.memoizedPaths = new Map()),
        (this.memoizedURLs = new Map());
    }
    addAnnotation() {
      let e;
      this.isInline()
        ? (e =
            "data:application/json;base64," +
            this.toBase64(this.map.toString()))
        : typeof this.mapOpts.annotation == "string"
        ? (e = this.mapOpts.annotation)
        : typeof this.mapOpts.annotation == "function"
        ? (e = this.mapOpts.annotation(this.opts.to, this.root))
        : (e = this.outputFile() + ".map");
      let t = `
`;
      this.css.includes(`\r
`) &&
        (t = `\r
`),
        (this.css += t + "/*# sourceMappingURL=" + e + " */");
    }
    applyPrevMaps() {
      for (let e of this.previous()) {
        let t = this.toUrl(this.path(e.file)),
          r = e.root || Fo(e.file),
          i;
        this.mapOpts.sourcesContent === !1
          ? ((i = new pd(e.text)),
            i.sourcesContent && (i.sourcesContent = null))
          : (i = e.consumer()),
          this.map.applySourceMap(i, t, this.toUrl(this.path(r)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== !1)
        if (this.root) {
          let e;
          for (let t = this.root.nodes.length - 1; t >= 0; t--)
            (e = this.root.nodes[t]),
              e.type === "comment" &&
                e.text.indexOf("# sourceMappingURL=") === 0 &&
                this.root.removeChild(t);
        } else
          this.css &&
            (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if ((this.clearAnnotation(), Gm && Xm && this.isMap()))
        return this.generateMap();
      {
        let e = "";
        return (
          this.stringify(this.root, (t) => {
            e += t;
          }),
          [e]
        );
      }
    }
    generateMap() {
      if (this.root) this.generateString();
      else if (this.previous().length === 1) {
        let e = this.previous()[0].consumer();
        (e.file = this.outputFile()),
          (this.map = zo.fromSourceMap(e, { ignoreInvalidMapping: !0 }));
      } else
        (this.map = new zo({
          file: this.outputFile(),
          ignoreInvalidMapping: !0,
        })),
          this.map.addMapping({
            generated: { column: 0, line: 1 },
            original: { column: 0, line: 1 },
            source: this.opts.from
              ? this.toUrl(this.path(this.opts.from))
              : "<no source>",
          });
      return (
        this.isSourcesContent() && this.setSourcesContent(),
        this.root && this.previous().length > 0 && this.applyPrevMaps(),
        this.isAnnotation() && this.addAnnotation(),
        this.isInline() ? [this.css] : [this.css, this.map]
      );
    }
    generateString() {
      (this.css = ""),
        (this.map = new zo({
          file: this.outputFile(),
          ignoreInvalidMapping: !0,
        }));
      let e = 1,
        t = 1,
        r = "<no source>",
        i = {
          generated: { column: 0, line: 0 },
          original: { column: 0, line: 0 },
          source: "",
        },
        n,
        s;
      this.stringify(this.root, (a, l, u) => {
        if (
          ((this.css += a),
          l &&
            u !== "end" &&
            ((i.generated.line = e),
            (i.generated.column = t - 1),
            l.source && l.source.start
              ? ((i.source = this.sourcePath(l)),
                (i.original.line = l.source.start.line),
                (i.original.column = l.source.start.column - 1),
                this.map.addMapping(i))
              : ((i.source = r),
                (i.original.line = 1),
                (i.original.column = 0),
                this.map.addMapping(i))),
          (n = a.match(/\n/g)),
          n
            ? ((e += n.length),
              (s = a.lastIndexOf(`
`)),
              (t = a.length - s))
            : (t += a.length),
          l && u !== "start")
        ) {
          let f = l.parent || { raws: {} };
          (!(l.type === "decl" || (l.type === "atrule" && !l.nodes)) ||
            l !== f.last ||
            f.raws.semicolon) &&
            (l.source && l.source.end
              ? ((i.source = this.sourcePath(l)),
                (i.original.line = l.source.end.line),
                (i.original.column = l.source.end.column - 1),
                (i.generated.line = e),
                (i.generated.column = t - 2),
                this.map.addMapping(i))
              : ((i.source = r),
                (i.original.line = 1),
                (i.original.column = 0),
                (i.generated.line = e),
                (i.generated.column = t - 1),
                this.map.addMapping(i)));
        }
      });
    }
    isAnnotation() {
      return this.isInline()
        ? !0
        : typeof this.mapOpts.annotation < "u"
        ? this.mapOpts.annotation
        : this.previous().length
        ? this.previous().some((e) => e.annotation)
        : !0;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
      let e = this.mapOpts.annotation;
      return typeof e < "u" && e !== !0
        ? !1
        : this.previous().length
        ? this.previous().some((t) => t.inline)
        : !0;
    }
    isMap() {
      return typeof this.opts.map < "u"
        ? !!this.opts.map
        : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u"
        ? this.mapOpts.sourcesContent
        : this.previous().length
        ? this.previous().some((e) => e.withContent())
        : !0;
    }
    outputFile() {
      return this.opts.to
        ? this.path(this.opts.to)
        : this.opts.from
        ? this.path(this.opts.from)
        : "to.css";
    }
    path(e) {
      if (
        this.mapOpts.absolute ||
        e.charCodeAt(0) === 60 ||
        /^\w+:\/\//.test(e)
      )
        return e;
      let t = this.memoizedPaths.get(e);
      if (t) return t;
      let r = this.opts.to ? Fo(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" &&
        (r = Fo(md(r, this.mapOpts.annotation)));
      let i = gd(r, e);
      return this.memoizedPaths.set(e, i), i;
    }
    previous() {
      if (!this.previousMaps)
        if (((this.previousMaps = []), this.root))
          this.root.walk((e) => {
            if (e.source && e.source.input.map) {
              let t = e.source.input.map;
              this.previousMaps.includes(t) || this.previousMaps.push(t);
            }
          });
        else {
          let e = new Ym(this.originalCSS, this.opts);
          e.map && this.previousMaps.push(e.map);
        }
      return this.previousMaps;
    }
    setSourcesContent() {
      let e = {};
      if (this.root)
        this.root.walk((t) => {
          if (t.source) {
            let r = t.source.input.from;
            if (r && !e[r]) {
              e[r] = !0;
              let i = this.usesFileUrls
                ? this.toFileUrl(r)
                : this.toUrl(this.path(r));
              this.map.setSourceContent(i, t.source.input.css);
            }
          }
        });
      else if (this.css) {
        let t = this.opts.from
          ? this.toUrl(this.path(this.opts.from))
          : "<no source>";
        this.map.setSourceContent(t, this.css);
      }
    }
    sourcePath(e) {
      return this.mapOpts.from
        ? this.toUrl(this.mapOpts.from)
        : this.usesFileUrls
        ? this.toFileUrl(e.source.input.from)
        : this.toUrl(this.path(e.source.input.from));
    }
    toBase64(e) {
      return Buffer
        ? Buffer.from(e).toString("base64")
        : window.btoa(unescape(encodeURIComponent(e)));
    }
    toFileUrl(e) {
      let t = this.memoizedFileURLs.get(e);
      if (t) return t;
      if (ac) {
        let r = ac(e).toString();
        return this.memoizedFileURLs.set(e, r), r;
      } else
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
    }
    toUrl(e) {
      let t = this.memoizedURLs.get(e);
      if (t) return t;
      _d === "\\" && (e = e.replace(/\\/g, "/"));
      let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(e, r), r;
    }
  };
var vd = Hm;
let qm = wa,
  Kl = class extends qm {
    constructor(e) {
      super(e), (this.type = "comment");
    }
  };
var Sa = Kl;
Kl.default = Kl;
let { isClean: yd, my: wd } = Us,
  bd = ba,
  xd = Sa,
  jm = wa,
  Sd,
  Bu,
  $u,
  Ed;
function Td(o) {
  return o.map((e) => (e.nodes && (e.nodes = Td(e.nodes)), delete e.source, e));
}
function Cd(o) {
  if (((o[yd] = !1), o.proxyOf.nodes)) for (let e of o.proxyOf.nodes) Cd(e);
}
let Xr = class Od extends jm {
  append(...e) {
    for (let t of e) {
      let r = this.normalize(t, this.last);
      for (let i of r) this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if ((super.cleanRaws(e), this.nodes))
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(),
      r,
      i;
    for (
      ;
      this.indexes[t] < this.proxyOf.nodes.length &&
      ((r = this.indexes[t]), (i = e(this.proxyOf.nodes[r], r)), i !== !1);

    )
      this.indexes[t] += 1;
    return delete this.indexes[t], i;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0),
      this.indexes || (this.indexes = {}),
      (this.lastEach += 1);
    let e = this.lastEach;
    return (this.indexes[e] = 0), e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf"
          ? e
          : e[t]
          ? t === "each" || (typeof t == "string" && t.startsWith("walk"))
            ? (...r) =>
                e[t](
                  ...r.map((i) =>
                    typeof i == "function" ? (n, s) => i(n.toProxy(), s) : i
                  )
                )
            : t === "every" || t === "some"
            ? (r) => e[t]((i, ...n) => r(i.toProxy(), ...n))
            : t === "root"
            ? () => e.root().toProxy()
            : t === "nodes"
            ? e.nodes.map((r) => r.toProxy())
            : t === "first" || t === "last"
            ? e[t].toProxy()
            : e[t]
          : e[t];
      },
      set(e, t, r) {
        return (
          e[t] === r ||
            ((e[t] = r),
            (t === "name" || t === "params" || t === "selector") &&
              e.markDirty()),
          !0
        );
      },
    };
  }
  index(e) {
    return typeof e == "number"
      ? e
      : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let r = this.index(e),
      i = this.normalize(t, this.proxyOf.nodes[r]).reverse();
    r = this.index(e);
    for (let s of i) this.proxyOf.nodes.splice(r + 1, 0, s);
    let n;
    for (let s in this.indexes)
      (n = this.indexes[s]), r < n && (this.indexes[s] = n + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let r = this.index(e),
      i = r === 0 ? "prepend" : !1,
      n = this.normalize(t, this.proxyOf.nodes[r], i).reverse();
    r = this.index(e);
    for (let a of n) this.proxyOf.nodes.splice(r, 0, a);
    let s;
    for (let a in this.indexes)
      (s = this.indexes[a]), r <= s && (this.indexes[a] = s + n.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string") e = Td(Sd(e).nodes);
    else if (typeof e > "u") e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e) i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e) i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type) e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)),
        (e = [new bd(e)]);
    } else if (e.selector) e = [new Bu(e)];
    else if (e.name) e = [new $u(e)];
    else if (e.text) e = [new xd(e)];
    else throw new Error("Unknown node type in node creation");
    return e.map(
      (i) => (
        i[wd] || Od.rebuild(i),
        (i = i.proxyOf),
        i.parent && i.parent.removeChild(i),
        i[yd] && Cd(i),
        typeof i.raws.before > "u" &&
          t &&
          typeof t.raws.before < "u" &&
          (i.raws.before = t.raws.before.replace(/\S/g, "")),
        (i.parent = this.proxyOf),
        i
      )
    );
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let r = this.normalize(t, this.first, "prepend").reverse();
      for (let i of r) this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes) this.indexes[i] = this.indexes[i] + r.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return (e.parent = this), this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return (this.proxyOf.nodes = []), this.markDirty(), this;
  }
  removeChild(e) {
    (e = this.index(e)),
      (this.proxyOf.nodes[e].parent = void 0),
      this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let r in this.indexes)
      (t = this.indexes[r]), t >= e && (this.indexes[r] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, r) {
    return (
      r || ((r = t), (t = {})),
      this.walkDecls((i) => {
        (t.props && !t.props.includes(i.prop)) ||
          (t.fast && !i.value.includes(t.fast)) ||
          (i.value = i.value.replace(e, r));
      }),
      this.markDirty(),
      this
    );
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, r) => {
      let i;
      try {
        i = e(t, r);
      } catch (n) {
        throw t.addToError(n);
      }
      return i !== !1 && t.walk && (i = t.walk(e)), i;
    });
  }
  walkAtRules(e, t) {
    return t
      ? e instanceof RegExp
        ? this.walk((r, i) => {
            if (r.type === "atrule" && e.test(r.name)) return t(r, i);
          })
        : this.walk((r, i) => {
            if (r.type === "atrule" && r.name === e) return t(r, i);
          })
      : ((t = e),
        this.walk((r, i) => {
          if (r.type === "atrule") return t(r, i);
        }));
  }
  walkComments(e) {
    return this.walk((t, r) => {
      if (t.type === "comment") return e(t, r);
    });
  }
  walkDecls(e, t) {
    return t
      ? e instanceof RegExp
        ? this.walk((r, i) => {
            if (r.type === "decl" && e.test(r.prop)) return t(r, i);
          })
        : this.walk((r, i) => {
            if (r.type === "decl" && r.prop === e) return t(r, i);
          })
      : ((t = e),
        this.walk((r, i) => {
          if (r.type === "decl") return t(r, i);
        }));
  }
  walkRules(e, t) {
    return t
      ? e instanceof RegExp
        ? this.walk((r, i) => {
            if (r.type === "rule" && e.test(r.selector)) return t(r, i);
          })
        : this.walk((r, i) => {
            if (r.type === "rule" && r.selector === e) return t(r, i);
          })
      : ((t = e),
        this.walk((r, i) => {
          if (r.type === "rule") return t(r, i);
        }));
  }
  get first() {
    if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Xr.registerParse = (o) => {
  Sd = o;
};
Xr.registerRule = (o) => {
  Bu = o;
};
Xr.registerAtRule = (o) => {
  $u = o;
};
Xr.registerRoot = (o) => {
  Ed = o;
};
var qi = Xr;
Xr.default = Xr;
Xr.rebuild = (o) => {
  o.type === "atrule"
    ? Object.setPrototypeOf(o, $u.prototype)
    : o.type === "rule"
    ? Object.setPrototypeOf(o, Bu.prototype)
    : o.type === "decl"
    ? Object.setPrototypeOf(o, bd.prototype)
    : o.type === "comment"
    ? Object.setPrototypeOf(o, xd.prototype)
    : o.type === "root" && Object.setPrototypeOf(o, Ed.prototype),
    (o[wd] = !0),
    o.nodes &&
      o.nodes.forEach((e) => {
        Xr.rebuild(e);
      });
};
let Km = qi,
  Pd,
  kd,
  Ps = class extends Km {
    constructor(e) {
      super({ type: "document", ...e }), this.nodes || (this.nodes = []);
    }
    toResult(e = {}) {
      return new Pd(new kd(), this, e).stringify();
    }
  };
Ps.registerLazyResult = (o) => {
  Pd = o;
};
Ps.registerProcessor = (o) => {
  kd = o;
};
var Vu = Ps;
Ps.default = Ps;
let Jl = class {
  constructor(e, t = {}) {
    if (((this.type = "warning"), (this.text = e), t.node && t.node.source)) {
      let r = t.node.rangeBy(t);
      (this.line = r.start.line),
        (this.column = r.start.column),
        (this.endLine = r.end.line),
        (this.endColumn = r.end.column);
    }
    for (let r in t) this[r] = t[r];
  }
  toString() {
    return this.node
      ? this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word,
        }).message
      : this.plugin
      ? this.plugin + ": " + this.text
      : this.text;
  }
};
var Ad = Jl;
Jl.default = Jl;
let Jm = Ad,
  Zl = class {
    constructor(e, t, r) {
      (this.processor = e),
        (this.messages = []),
        (this.root = t),
        (this.opts = r),
        (this.css = void 0),
        (this.map = void 0);
    }
    toString() {
      return this.css;
    }
    warn(e, t = {}) {
      t.plugin ||
        (this.lastPlugin &&
          this.lastPlugin.postcssPlugin &&
          (t.plugin = this.lastPlugin.postcssPlugin));
      let r = new Jm(e, t);
      return this.messages.push(r), r;
    }
    warnings() {
      return this.messages.filter((e) => e.type === "warning");
    }
    get content() {
      return this.css;
    }
  };
var Uu = Zl;
Zl.default = Zl;
const il = 39,
  lc = 34,
  vo = 92,
  uc = 47,
  yo = 10,
  Gn = 32,
  wo = 12,
  bo = 9,
  xo = 13,
  Zm = 91,
  Qm = 93,
  e_ = 40,
  t_ = 41,
  r_ = 123,
  i_ = 125,
  n_ = 59,
  s_ = 42,
  o_ = 58,
  a_ = 64,
  So = /[\t\n\f\r "#'()/;[\\\]{}]/g,
  Eo = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
  l_ = /.[\r\n"'(/\\]/,
  fc = /[\da-f]/i;
var u_ = function (e, t = {}) {
  let r = e.css.valueOf(),
    i = t.ignoreErrors,
    n,
    s,
    a,
    l,
    u,
    f,
    h,
    d,
    c,
    g,
    p = r.length,
    m = 0,
    v = [],
    w = [];
  function y() {
    return m;
  }
  function x(O) {
    throw e.error("Unclosed " + O, m);
  }
  function S() {
    return w.length === 0 && m >= p;
  }
  function T(O) {
    if (w.length) return w.pop();
    if (m >= p) return;
    let C = O ? O.ignoreUnclosed : !1;
    switch (((n = r.charCodeAt(m)), n)) {
      case yo:
      case Gn:
      case bo:
      case xo:
      case wo: {
        s = m;
        do (s += 1), (n = r.charCodeAt(s));
        while (n === Gn || n === yo || n === bo || n === xo || n === wo);
        (g = ["space", r.slice(m, s)]), (m = s - 1);
        break;
      }
      case Zm:
      case Qm:
      case r_:
      case i_:
      case o_:
      case n_:
      case t_: {
        let E = String.fromCharCode(n);
        g = [E, E, m];
        break;
      }
      case e_: {
        if (
          ((d = v.length ? v.pop()[1] : ""),
          (c = r.charCodeAt(m + 1)),
          d === "url" &&
            c !== il &&
            c !== lc &&
            c !== Gn &&
            c !== yo &&
            c !== bo &&
            c !== wo &&
            c !== xo)
        ) {
          s = m;
          do {
            if (((f = !1), (s = r.indexOf(")", s + 1)), s === -1))
              if (i || C) {
                s = m;
                break;
              } else x("bracket");
            for (h = s; r.charCodeAt(h - 1) === vo; ) (h -= 1), (f = !f);
          } while (f);
          (g = ["brackets", r.slice(m, s + 1), m, s]), (m = s);
        } else
          (s = r.indexOf(")", m + 1)),
            (l = r.slice(m, s + 1)),
            s === -1 || l_.test(l)
              ? (g = ["(", "(", m])
              : ((g = ["brackets", l, m, s]), (m = s));
        break;
      }
      case il:
      case lc: {
        (a = n === il ? "'" : '"'), (s = m);
        do {
          if (((f = !1), (s = r.indexOf(a, s + 1)), s === -1))
            if (i || C) {
              s = m + 1;
              break;
            } else x("string");
          for (h = s; r.charCodeAt(h - 1) === vo; ) (h -= 1), (f = !f);
        } while (f);
        (g = ["string", r.slice(m, s + 1), m, s]), (m = s);
        break;
      }
      case a_: {
        (So.lastIndex = m + 1),
          So.test(r),
          So.lastIndex === 0 ? (s = r.length - 1) : (s = So.lastIndex - 2),
          (g = ["at-word", r.slice(m, s + 1), m, s]),
          (m = s);
        break;
      }
      case vo: {
        for (s = m, u = !0; r.charCodeAt(s + 1) === vo; ) (s += 1), (u = !u);
        if (
          ((n = r.charCodeAt(s + 1)),
          u &&
            n !== uc &&
            n !== Gn &&
            n !== yo &&
            n !== bo &&
            n !== xo &&
            n !== wo &&
            ((s += 1), fc.test(r.charAt(s))))
        ) {
          for (; fc.test(r.charAt(s + 1)); ) s += 1;
          r.charCodeAt(s + 1) === Gn && (s += 1);
        }
        (g = ["word", r.slice(m, s + 1), m, s]), (m = s);
        break;
      }
      default: {
        n === uc && r.charCodeAt(m + 1) === s_
          ? ((s = r.indexOf("*/", m + 2) + 1),
            s === 0 && (i || C ? (s = r.length) : x("comment")),
            (g = ["comment", r.slice(m, s + 1), m, s]),
            (m = s))
          : ((Eo.lastIndex = m + 1),
            Eo.test(r),
            Eo.lastIndex === 0 ? (s = r.length - 1) : (s = Eo.lastIndex - 2),
            (g = ["word", r.slice(m, s + 1), m, s]),
            v.push(g),
            (m = s));
        break;
      }
    }
    return m++, g;
  }
  function b(O) {
    w.push(O);
  }
  return { back: b, endOfFile: S, nextToken: T, position: y };
};
let Rd = qi,
  ia = class extends Rd {
    constructor(e) {
      super(e), (this.type = "atrule");
    }
    append(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
    }
    prepend(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
    }
  };
var Wu = ia;
ia.default = ia;
Rd.registerAtRule(ia);
let Md = qi,
  Dd,
  Ld,
  kn = class extends Md {
    constructor(e) {
      super(e), (this.type = "root"), this.nodes || (this.nodes = []);
    }
    normalize(e, t, r) {
      let i = super.normalize(e);
      if (t) {
        if (r === "prepend")
          this.nodes.length > 1
            ? (t.raws.before = this.nodes[1].raws.before)
            : delete t.raws.before;
        else if (this.first !== t)
          for (let n of i) n.raws.before = t.raws.before;
      }
      return i;
    }
    removeChild(e, t) {
      let r = this.index(e);
      return (
        !t &&
          r === 0 &&
          this.nodes.length > 1 &&
          (this.nodes[1].raws.before = this.nodes[r].raws.before),
        super.removeChild(e)
      );
    }
    toResult(e = {}) {
      return new Dd(new Ld(), this, e).stringify();
    }
  };
kn.registerLazyResult = (o) => {
  Dd = o;
};
kn.registerProcessor = (o) => {
  Ld = o;
};
var Ws = kn;
kn.default = kn;
Md.registerRoot(kn);
let ks = {
  comma(o) {
    return ks.split(o, [","], !0);
  },
  space(o) {
    let e = [
      " ",
      `
`,
      "	",
    ];
    return ks.split(o, e);
  },
  split(o, e, t) {
    let r = [],
      i = "",
      n = !1,
      s = 0,
      a = !1,
      l = "",
      u = !1;
    for (let f of o)
      u
        ? (u = !1)
        : f === "\\"
        ? (u = !0)
        : a
        ? f === l && (a = !1)
        : f === '"' || f === "'"
        ? ((a = !0), (l = f))
        : f === "("
        ? (s += 1)
        : f === ")"
        ? s > 0 && (s -= 1)
        : s === 0 && e.includes(f) && (n = !0),
        n ? (i !== "" && r.push(i.trim()), (i = ""), (n = !1)) : (i += f);
    return (t || i !== "") && r.push(i.trim()), r;
  },
};
var Id = ks;
ks.default = ks;
let Nd = qi,
  f_ = Id,
  na = class extends Nd {
    constructor(e) {
      super(e), (this.type = "rule"), this.nodes || (this.nodes = []);
    }
    get selectors() {
      return f_.comma(this.selector);
    }
    set selectors(e) {
      let t = this.selector ? this.selector.match(/,\s*/) : null,
        r = t ? t[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e.join(r);
    }
  };
var Yu = na;
na.default = na;
Nd.registerRule(na);
let c_ = ba,
  h_ = u_,
  d_ = Sa,
  p_ = Wu,
  g_ = Ws,
  cc = Yu;
const hc = { empty: !0, space: !0 };
function m_(o) {
  for (let e = o.length - 1; e >= 0; e--) {
    let t = o[e],
      r = t[3] || t[2];
    if (r) return r;
  }
}
let __ = class {
  constructor(e) {
    (this.input = e),
      (this.root = new g_()),
      (this.current = this.root),
      (this.spaces = ""),
      (this.semicolon = !1),
      this.createTokenizer(),
      (this.root.source = {
        input: e,
        start: { column: 1, line: 1, offset: 0 },
      });
  }
  atrule(e) {
    let t = new p_();
    (t.name = e[1].slice(1)),
      t.name === "" && this.unnamedAtrule(t, e),
      this.init(t, e[2]);
    let r,
      i,
      n,
      s = !1,
      a = !1,
      l = [],
      u = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (
        ((e = this.tokenizer.nextToken()),
        (r = e[0]),
        r === "(" || r === "["
          ? u.push(r === "(" ? ")" : "]")
          : r === "{" && u.length > 0
          ? u.push("}")
          : r === u[u.length - 1] && u.pop(),
        u.length === 0)
      )
        if (r === ";") {
          (t.source.end = this.getPosition(e[2])),
            t.source.end.offset++,
            (this.semicolon = !0);
          break;
        } else if (r === "{") {
          a = !0;
          break;
        } else if (r === "}") {
          if (l.length > 0) {
            for (n = l.length - 1, i = l[n]; i && i[0] === "space"; )
              i = l[--n];
            i &&
              ((t.source.end = this.getPosition(i[3] || i[2])),
              t.source.end.offset++);
          }
          this.end(e);
          break;
        } else l.push(e);
      else l.push(e);
      if (this.tokenizer.endOfFile()) {
        s = !0;
        break;
      }
    }
    (t.raws.between = this.spacesAndCommentsFromEnd(l)),
      l.length
        ? ((t.raws.afterName = this.spacesAndCommentsFromStart(l)),
          this.raw(t, "params", l),
          s &&
            ((e = l[l.length - 1]),
            (t.source.end = this.getPosition(e[3] || e[2])),
            t.source.end.offset++,
            (this.spaces = t.raws.between),
            (t.raws.between = "")))
        : ((t.raws.afterName = ""), (t.params = "")),
      a && ((t.nodes = []), (this.current = t));
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let r = 0,
      i;
    for (
      let n = t - 1;
      n >= 0 && ((i = e[n]), !(i[0] !== "space" && ((r += 1), r === 2)));
      n--
    );
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let t = 0,
      r,
      i,
      n;
    for (let [s, a] of e.entries()) {
      if (
        ((r = a),
        (i = r[0]),
        i === "(" && (t += 1),
        i === ")" && (t -= 1),
        t === 0 && i === ":")
      )
        if (!n) this.doubleColon(r);
        else {
          if (n[0] === "word" && n[1] === "progid") continue;
          return s;
        }
      n = r;
    }
    return !1;
  }
  comment(e) {
    let t = new d_();
    this.init(t, e[2]),
      (t.source.end = this.getPosition(e[3] || e[2])),
      t.source.end.offset++;
    let r = e[1].slice(2, -2);
    if (/^\s*$/.test(r)) (t.text = ""), (t.raws.left = r), (t.raws.right = "");
    else {
      let i = r.match(/^(\s*)([^]*\S)(\s*)$/);
      (t.text = i[2]), (t.raws.left = i[1]), (t.raws.right = i[3]);
    }
  }
  createTokenizer() {
    this.tokenizer = h_(this.input);
  }
  decl(e, t) {
    let r = new c_();
    this.init(r, e[0][2]);
    let i = e[e.length - 1];
    for (
      i[0] === ";" && ((this.semicolon = !0), e.pop()),
        r.source.end = this.getPosition(i[3] || i[2] || m_(e)),
        r.source.end.offset++;
      e[0][0] !== "word";

    )
      e.length === 1 && this.unknownWord(e), (r.raws.before += e.shift()[1]);
    for (r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length; ) {
      let u = e[0][0];
      if (u === ":" || u === "space" || u === "comment") break;
      r.prop += e.shift()[1];
    }
    r.raws.between = "";
    let n;
    for (; e.length; )
      if (((n = e.shift()), n[0] === ":")) {
        r.raws.between += n[1];
        break;
      } else
        n[0] === "word" && /\w/.test(n[1]) && this.unknownWord([n]),
          (r.raws.between += n[1]);
    (r.prop[0] === "_" || r.prop[0] === "*") &&
      ((r.raws.before += r.prop[0]), (r.prop = r.prop.slice(1)));
    let s = [],
      a;
    for (; e.length && ((a = e[0][0]), !(a !== "space" && a !== "comment")); )
      s.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let u = e.length - 1; u >= 0; u--) {
      if (((n = e[u]), n[1].toLowerCase() === "!important")) {
        r.important = !0;
        let f = this.stringFrom(e, u);
        (f = this.spacesFromEnd(e) + f),
          f !== " !important" && (r.raws.important = f);
        break;
      } else if (n[1].toLowerCase() === "important") {
        let f = e.slice(0),
          h = "";
        for (let d = u; d > 0; d--) {
          let c = f[d][0];
          if (h.trim().indexOf("!") === 0 && c !== "space") break;
          h = f.pop()[1] + h;
        }
        h.trim().indexOf("!") === 0 &&
          ((r.important = !0), (r.raws.important = h), (e = f));
      }
      if (n[0] !== "space" && n[0] !== "comment") break;
    }
    e.some((u) => u[0] !== "space" && u[0] !== "comment") &&
      ((r.raws.between += s.map((u) => u[1]).join("")), (s = [])),
      this.raw(r, "value", s.concat(e), t),
      r.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new cc();
    this.init(t, e[2]),
      (t.selector = ""),
      (t.raws.between = ""),
      (this.current = t);
  }
  end(e) {
    this.current.nodes &&
      this.current.nodes.length &&
      (this.current.raws.semicolon = this.semicolon),
      (this.semicolon = !1),
      (this.current.raws.after = (this.current.raws.after || "") + this.spaces),
      (this.spaces = ""),
      this.current.parent
        ? ((this.current.source.end = this.getPosition(e[2])),
          this.current.source.end.offset++,
          (this.current = this.current.parent))
        : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(),
      this.current.nodes &&
        this.current.nodes.length &&
        (this.current.raws.semicolon = this.semicolon),
      (this.current.raws.after = (this.current.raws.after || "") + this.spaces),
      (this.root.source.end = this.getPosition(this.tokenizer.position()));
  }
  freeSemicolon(e) {
    if (((this.spaces += e[1]), this.current.nodes)) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t &&
        t.type === "rule" &&
        !t.raws.ownSemicolon &&
        ((t.raws.ownSemicolon = this.spaces), (this.spaces = ""));
    }
  }
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return { column: t.col, line: t.line, offset: e };
  }
  init(e, t) {
    this.current.push(e),
      (e.source = { input: this.input, start: this.getPosition(t) }),
      (e.raws.before = this.spaces),
      (this.spaces = ""),
      e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1,
      r = null,
      i = !1,
      n = null,
      s = [],
      a = e[1].startsWith("--"),
      l = [],
      u = e;
    for (; u; ) {
      if (((r = u[0]), l.push(u), r === "(" || r === "["))
        n || (n = u), s.push(r === "(" ? ")" : "]");
      else if (a && i && r === "{") n || (n = u), s.push("}");
      else if (s.length === 0)
        if (r === ";")
          if (i) {
            this.decl(l, a);
            return;
          } else break;
        else if (r === "{") {
          this.rule(l);
          return;
        } else if (r === "}") {
          this.tokenizer.back(l.pop()), (t = !0);
          break;
        } else r === ":" && (i = !0);
      else r === s[s.length - 1] && (s.pop(), s.length === 0 && (n = null));
      u = this.tokenizer.nextToken();
    }
    if (
      (this.tokenizer.endOfFile() && (t = !0),
      s.length > 0 && this.unclosedBracket(n),
      t && i)
    ) {
      if (!a)
        for (
          ;
          l.length &&
          ((u = l[l.length - 1][0]), !(u !== "space" && u !== "comment"));

        )
          this.tokenizer.back(l.pop());
      this.decl(l, a);
    } else this.unknownWord(l);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (((e = this.tokenizer.nextToken()), e[0])) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {}
  raw(e, t, r, i) {
    let n,
      s,
      a = r.length,
      l = "",
      u = !0,
      f,
      h;
    for (let d = 0; d < a; d += 1)
      (n = r[d]),
        (s = n[0]),
        s === "space" && d === a - 1 && !i
          ? (u = !1)
          : s === "comment"
          ? ((h = r[d - 1] ? r[d - 1][0] : "empty"),
            (f = r[d + 1] ? r[d + 1][0] : "empty"),
            !hc[h] && !hc[f]
              ? l.slice(-1) === ","
                ? (u = !1)
                : (l += n[1])
              : (u = !1))
          : (l += n[1]);
    if (!u) {
      let d = r.reduce((c, g) => c + g[1], "");
      e.raws[t] = { raw: d, value: l };
    }
    e[t] = l;
  }
  rule(e) {
    e.pop();
    let t = new cc();
    this.init(t, e[0][2]),
      (t.raws.between = this.spacesAndCommentsFromEnd(e)),
      this.raw(t, "selector", e),
      (this.current = t);
  }
  spacesAndCommentsFromEnd(e) {
    let t,
      r = "";
    for (
      ;
      e.length &&
      ((t = e[e.length - 1][0]), !(t !== "space" && t !== "comment"));

    )
      r = e.pop()[1] + r;
    return r;
  }
  spacesAndCommentsFromStart(e) {
    let t,
      r = "";
    for (; e.length && ((t = e[0][0]), !(t !== "space" && t !== "comment")); )
      r += e.shift()[1];
    return r;
  }
  spacesFromEnd(e) {
    let t,
      r = "";
    for (; e.length && ((t = e[e.length - 1][0]), t === "space"); )
      r = e.pop()[1] + r;
    return r;
  }
  stringFrom(e, t) {
    let r = "";
    for (let i = t; i < e.length; i++) r += e[i][1];
    return e.splice(t, e.length - t), r;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var v_ = __;
let y_ = qi,
  w_ = v_,
  b_ = xa;
function sa(o, e) {
  let t = new b_(o, e),
    r = new w_(t);
  try {
    r.parse();
  } catch (i) {
    throw i;
  }
  return r.root;
}
var Xu = sa;
sa.default = sa;
y_.registerParse(sa);
let { isClean: pr, my: x_ } = Us,
  S_ = vd,
  E_ = ya,
  T_ = qi,
  C_ = Vu,
  dc = Uu,
  O_ = Xu,
  P_ = Ws;
const k_ = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule",
  },
  A_ = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0,
  },
  R_ = { Once: !0, postcssPlugin: !0, prepare: !0 },
  An = 0;
function Hn(o) {
  return typeof o == "object" && typeof o.then == "function";
}
function zd(o) {
  let e = !1,
    t = k_[o.type];
  return (
    o.type === "decl"
      ? (e = o.prop.toLowerCase())
      : o.type === "atrule" && (e = o.name.toLowerCase()),
    e && o.append
      ? [t, t + "-" + e, An, t + "Exit", t + "Exit-" + e]
      : e
      ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e]
      : o.append
      ? [t, An, t + "Exit"]
      : [t, t + "Exit"]
  );
}
function pc(o) {
  let e;
  return (
    o.type === "document"
      ? (e = ["Document", An, "DocumentExit"])
      : o.type === "root"
      ? (e = ["Root", An, "RootExit"])
      : (e = zd(o)),
    {
      eventIndex: 0,
      events: e,
      iterator: 0,
      node: o,
      visitorIndex: 0,
      visitors: [],
    }
  );
}
function Ql(o) {
  return (o[pr] = !1), o.nodes && o.nodes.forEach((e) => Ql(e)), o;
}
let eu = {},
  Rn = class Fd {
    constructor(e, t, r) {
      (this.stringified = !1), (this.processed = !1);
      let i;
      if (
        typeof t == "object" &&
        t !== null &&
        (t.type === "root" || t.type === "document")
      )
        i = Ql(t);
      else if (t instanceof Fd || t instanceof dc)
        (i = Ql(t.root)),
          t.map &&
            (typeof r.map > "u" && (r.map = {}),
            r.map.inline || (r.map.inline = !1),
            (r.map.prev = t.map));
      else {
        let n = O_;
        r.syntax && (n = r.syntax.parse),
          r.parser && (n = r.parser),
          n.parse && (n = n.parse);
        try {
          i = n(t, r);
        } catch (s) {
          (this.processed = !0), (this.error = s);
        }
        i && !i[x_] && T_.rebuild(i);
      }
      (this.result = new dc(e, i, r)),
        (this.helpers = { ...eu, postcss: eu, result: this.result }),
        (this.plugins = this.processor.plugins.map((n) =>
          typeof n == "object" && n.prepare
            ? { ...n, ...n.prepare(this.result) }
            : n
        ));
    }
    async() {
      return this.error
        ? Promise.reject(this.error)
        : this.processed
        ? Promise.resolve(this.result)
        : (this.processing || (this.processing = this.runAsync()),
          this.processing);
    }
    catch(e) {
      return this.async().catch(e);
    }
    finally(e) {
      return this.async().then(e, e);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(e, t) {
      let r = this.result.lastPlugin;
      try {
        t && t.addToError(e),
          (this.error = e),
          e.name === "CssSyntaxError" && !e.plugin
            ? ((e.plugin = r.postcssPlugin), e.setMessage())
            : r.postcssVersion;
      } catch (i) {
        console && console.error && console.error(i);
      }
      return e;
    }
    prepareVisitors() {
      this.listeners = {};
      let e = (t, r, i) => {
        this.listeners[r] || (this.listeners[r] = []),
          this.listeners[r].push([t, i]);
      };
      for (let t of this.plugins)
        if (typeof t == "object")
          for (let r in t) {
            if (!A_[r] && /^[A-Z]/.test(r))
              throw new Error(
                `Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            if (!R_[r])
              if (typeof t[r] == "object")
                for (let i in t[r])
                  i === "*"
                    ? e(t, r, t[r][i])
                    : e(t, r + "-" + i.toLowerCase(), t[r][i]);
              else typeof t[r] == "function" && e(t, r, t[r]);
          }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let e = 0; e < this.plugins.length; e++) {
        let t = this.plugins[e],
          r = this.runOnRoot(t);
        if (Hn(r))
          try {
            await r;
          } catch (i) {
            throw this.handleError(i);
          }
      }
      if ((this.prepareVisitors(), this.hasListener)) {
        let e = this.result.root;
        for (; !e[pr]; ) {
          e[pr] = !0;
          let t = [pc(e)];
          for (; t.length > 0; ) {
            let r = this.visitTick(t);
            if (Hn(r))
              try {
                await r;
              } catch (i) {
                let n = t[t.length - 1].node;
                throw this.handleError(i, n);
              }
          }
        }
        if (this.listeners.OnceExit)
          for (let [t, r] of this.listeners.OnceExit) {
            this.result.lastPlugin = t;
            try {
              if (e.type === "document") {
                let i = e.nodes.map((n) => r(n, this.helpers));
                await Promise.all(i);
              } else await r(e, this.helpers);
            } catch (i) {
              throw this.handleError(i);
            }
          }
      }
      return (this.processed = !0), this.stringify();
    }
    runOnRoot(e) {
      this.result.lastPlugin = e;
      try {
        if (typeof e == "object" && e.Once) {
          if (this.result.root.type === "document") {
            let t = this.result.root.nodes.map((r) => e.Once(r, this.helpers));
            return Hn(t[0]) ? Promise.all(t) : t;
          }
          return e.Once(this.result.root, this.helpers);
        } else if (typeof e == "function")
          return e(this.result.root, this.result);
      } catch (t) {
        throw this.handleError(t);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      (this.stringified = !0), this.sync();
      let e = this.result.opts,
        t = E_;
      e.syntax && (t = e.syntax.stringify),
        e.stringifier && (t = e.stringifier),
        t.stringify && (t = t.stringify);
      let i = new S_(t, this.result.root, this.result.opts).generate();
      return (this.result.css = i[0]), (this.result.map = i[1]), this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (((this.processed = !0), this.processing)) throw this.getAsyncError();
      for (let e of this.plugins) {
        let t = this.runOnRoot(e);
        if (Hn(t)) throw this.getAsyncError();
      }
      if ((this.prepareVisitors(), this.hasListener)) {
        let e = this.result.root;
        for (; !e[pr]; ) (e[pr] = !0), this.walkSync(e);
        if (this.listeners.OnceExit)
          if (e.type === "document")
            for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
          else this.visitSync(this.listeners.OnceExit, e);
      }
      return this.result;
    }
    then(e, t) {
      return this.async().then(e, t);
    }
    toString() {
      return this.css;
    }
    visitSync(e, t) {
      for (let [r, i] of e) {
        this.result.lastPlugin = r;
        let n;
        try {
          n = i(t, this.helpers);
        } catch (s) {
          throw this.handleError(s, t.proxyOf);
        }
        if (t.type !== "root" && t.type !== "document" && !t.parent) return !0;
        if (Hn(n)) throw this.getAsyncError();
      }
    }
    visitTick(e) {
      let t = e[e.length - 1],
        { node: r, visitors: i } = t;
      if (r.type !== "root" && r.type !== "document" && !r.parent) {
        e.pop();
        return;
      }
      if (i.length > 0 && t.visitorIndex < i.length) {
        let [s, a] = i[t.visitorIndex];
        (t.visitorIndex += 1),
          t.visitorIndex === i.length &&
            ((t.visitors = []), (t.visitorIndex = 0)),
          (this.result.lastPlugin = s);
        try {
          return a(r.toProxy(), this.helpers);
        } catch (l) {
          throw this.handleError(l, r);
        }
      }
      if (t.iterator !== 0) {
        let s = t.iterator,
          a;
        for (; (a = r.nodes[r.indexes[s]]); )
          if (((r.indexes[s] += 1), !a[pr])) {
            (a[pr] = !0), e.push(pc(a));
            return;
          }
        (t.iterator = 0), delete r.indexes[s];
      }
      let n = t.events;
      for (; t.eventIndex < n.length; ) {
        let s = n[t.eventIndex];
        if (((t.eventIndex += 1), s === An)) {
          r.nodes &&
            r.nodes.length &&
            ((r[pr] = !0), (t.iterator = r.getIterator()));
          return;
        } else if (this.listeners[s]) {
          t.visitors = this.listeners[s];
          return;
        }
      }
      e.pop();
    }
    walkSync(e) {
      e[pr] = !0;
      let t = zd(e);
      for (let r of t)
        if (r === An)
          e.nodes &&
            e.each((i) => {
              i[pr] || this.walkSync(i);
            });
        else {
          let i = this.listeners[r];
          if (i && this.visitSync(i, e.toProxy())) return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
  };
Rn.registerPostcss = (o) => {
  eu = o;
};
var Bd = Rn;
Rn.default = Rn;
P_.registerLazyResult(Rn);
C_.registerLazyResult(Rn);
let M_ = vd,
  D_ = ya,
  L_ = Xu;
const I_ = Uu;
let tu = class {
  constructor(e, t, r) {
    (t = t.toString()),
      (this.stringified = !1),
      (this._processor = e),
      (this._css = t),
      (this._opts = r),
      (this._map = void 0);
    let i,
      n = D_;
    (this.result = new I_(this._processor, i, this._opts)),
      (this.result.css = t);
    let s = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return s.root;
      },
    });
    let a = new M_(n, i, this._opts, t);
    if (a.isMap()) {
      let [l, u] = a.generate();
      l && (this.result.css = l), u && (this.result.map = u);
    } else a.clearAnnotation(), (this.result.css = a.css);
  }
  async() {
    return this.error
      ? Promise.reject(this.error)
      : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, t) {
    return this.async().then(e, t);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root) return this._root;
    let e,
      t = L_;
    try {
      e = t(this._css, this._opts);
    } catch (r) {
      this.error = r;
    }
    if (this.error) throw this.error;
    return (this._root = e), e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var N_ = tu;
tu.default = tu;
let z_ = N_,
  F_ = Bd,
  B_ = Vu,
  $_ = Ws,
  As = class {
    constructor(e = []) {
      (this.version = "8.4.38"), (this.plugins = this.normalize(e));
    }
    normalize(e) {
      let t = [];
      for (let r of e)
        if (
          (r.postcss === !0 ? (r = r()) : r.postcss && (r = r.postcss),
          typeof r == "object" && Array.isArray(r.plugins))
        )
          t = t.concat(r.plugins);
        else if (typeof r == "object" && r.postcssPlugin) t.push(r);
        else if (typeof r == "function") t.push(r);
        else if (!(typeof r == "object" && (r.parse || r.stringify)))
          throw new Error(r + " is not a PostCSS plugin");
      return t;
    }
    process(e, t = {}) {
      return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax
        ? new z_(this, e, t)
        : new F_(this, e, t);
    }
    use(e) {
      return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
    }
  };
var V_ = As;
As.default = As;
$_.registerProcessor(As);
B_.registerProcessor(As);
let U_ = ba,
  W_ = dd,
  Y_ = Sa,
  X_ = Wu,
  G_ = xa,
  H_ = Ws,
  q_ = Yu;
function Rs(o, e) {
  if (Array.isArray(o)) return o.map((i) => Rs(i));
  let { inputs: t, ...r } = o;
  if (t) {
    e = [];
    for (let i of t) {
      let n = { ...i, __proto__: G_.prototype };
      n.map && (n.map = { ...n.map, __proto__: W_.prototype }), e.push(n);
    }
  }
  if ((r.nodes && (r.nodes = o.nodes.map((i) => Rs(i, e))), r.source)) {
    let { inputId: i, ...n } = r.source;
    (r.source = n), i != null && (r.source.input = e[i]);
  }
  if (r.type === "root") return new H_(r);
  if (r.type === "decl") return new U_(r);
  if (r.type === "rule") return new q_(r);
  if (r.type === "comment") return new Y_(r);
  if (r.type === "atrule") return new X_(r);
  throw new Error("Unknown node type: " + o.type);
}
var j_ = Rs;
Rs.default = Rs;
var gc = {};
let K_ = Fu,
  $d = ba,
  J_ = Bd,
  Z_ = qi,
  Gu = V_,
  Q_ = ya,
  e0 = j_,
  Vd = Vu,
  t0 = Ad,
  Ud = Sa,
  Wd = Wu,
  r0 = Uu,
  i0 = xa,
  n0 = Xu,
  s0 = Id,
  Yd = Yu,
  Xd = Ws,
  o0 = wa;
function pe(...o) {
  return o.length === 1 && Array.isArray(o[0]) && (o = o[0]), new Gu(o);
}
pe.plugin = function (e, t) {
  let r = !1;
  function i(...s) {
    console &&
      console.warn &&
      !r &&
      ((r = !0),
      console.warn(
        e +
          `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
      ),
      gc.LANG &&
        gc.LANG.startsWith("cn") &&
        console.warn(
          e +
            `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
        ));
    let a = t(...s);
    return (a.postcssPlugin = e), (a.postcssVersion = new Gu().version), a;
  }
  let n;
  return (
    Object.defineProperty(i, "postcss", {
      get() {
        return n || (n = i()), n;
      },
    }),
    (i.process = function (s, a, l) {
      return pe([i(l)]).process(s, a);
    }),
    i
  );
};
pe.stringify = Q_;
pe.parse = n0;
pe.fromJSON = e0;
pe.list = s0;
pe.comment = (o) => new Ud(o);
pe.atRule = (o) => new Wd(o);
pe.decl = (o) => new $d(o);
pe.rule = (o) => new Yd(o);
pe.root = (o) => new Xd(o);
pe.document = (o) => new Vd(o);
pe.CssSyntaxError = K_;
pe.Declaration = $d;
pe.Container = Z_;
pe.Processor = Gu;
pe.Document = Vd;
pe.Comment = Ud;
pe.Warning = t0;
pe.AtRule = Wd;
pe.Result = r0;
pe.Input = i0;
pe.Rule = Yd;
pe.Root = Xd;
pe.Node = o0;
J_.registerPostcss(pe);
var a0 = pe;
pe.default = pe;
const Ce = ym(a0);
Ce.stringify;
Ce.fromJSON;
Ce.plugin;
Ce.parse;
Ce.list;
Ce.document;
Ce.comment;
Ce.atRule;
Ce.rule;
Ce.decl;
Ce.root;
Ce.CssSyntaxError;
Ce.Declaration;
Ce.Container;
Ce.Processor;
Ce.Document;
Ce.Comment;
Ce.Warning;
Ce.AtRule;
Ce.Result;
Ce.Input;
Ce.Rule;
Ce.Root;
Ce.Node;
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var zr,
  Ni,
  Hu,
  Ea,
  ts,
  Bo,
  oa,
  ps,
  or = "transform",
  ru = or + "Origin",
  Gd,
  qu = function (e) {
    var t = e.ownerDocument || e;
    for (
      !(or in e.style) &&
      ("msTransform" in e.style) &&
      ((or = "msTransform"), (ru = or + "Origin"));
      t.parentNode && (t = t.parentNode);

    );
    if (((Ni = window), (oa = new Wi()), t)) {
      (zr = t),
        (Hu = t.documentElement),
        (Ea = t.body),
        (ps = zr.createElementNS("http://www.w3.org/2000/svg", "g")),
        (ps.style.transform = "none");
      var r = t.createElement("div"),
        i = t.createElement("div"),
        n = t && (t.body || t.firstElementChild);
      n &&
        n.appendChild &&
        (n.appendChild(r),
        r.appendChild(i),
        r.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)"
        ),
        (Gd = i.offsetParent !== r),
        n.removeChild(r));
    }
    return t;
  },
  l0 = function (e) {
    for (var t, r; e && e !== Ea; )
      (r = e._gsap),
        r && r.uncache && r.get(e, "x"),
        r &&
          !r.scaleX &&
          !r.scaleY &&
          r.renderTransform &&
          ((r.scaleX = r.scaleY = 1e-4),
          r.renderTransform(1, r),
          t ? t.push(r) : (t = [r])),
        (e = e.parentNode);
    return t;
  },
  Hd = [],
  qd = [],
  ju = function () {
    return Ni.pageYOffset || zr.scrollTop || Hu.scrollTop || Ea.scrollTop || 0;
  },
  Ku = function () {
    return (
      Ni.pageXOffset || zr.scrollLeft || Hu.scrollLeft || Ea.scrollLeft || 0
    );
  },
  Ju = function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  },
  u0 = function o(e) {
    if (Ni.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return o(e);
  },
  nl = function o(e, t) {
    if (e.parentNode && (zr || qu(e))) {
      var r = Ju(e),
        i = r
          ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        n = r ? (t ? "rect" : "g") : "div",
        s = t !== 2 ? 0 : 100,
        a = t === 3 ? 100 : 0,
        l =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        u = zr.createElementNS
          ? zr.createElementNS(i.replace(/^https/, "http"), n)
          : zr.createElement(n);
      return (
        t &&
          (r
            ? (Bo || (Bo = o(e)),
              u.setAttribute("width", 0.01),
              u.setAttribute("height", 0.01),
              u.setAttribute("transform", "translate(" + s + "," + a + ")"),
              Bo.appendChild(u))
            : (ts || ((ts = o(e)), (ts.style.cssText = l)),
              (u.style.cssText =
                l +
                "width:0.1px;height:0.1px;top:" +
                a +
                "px;left:" +
                s +
                "px"),
              ts.appendChild(u))),
        u
      );
    }
    throw "Need document and parent.";
  },
  f0 = function (e) {
    for (var t = new Wi(), r = 0; r < e.numberOfItems; r++)
      t.multiply(e.getItem(r).matrix);
    return t;
  },
  jd = function (e) {
    var t = e.getCTM(),
      r;
    return (
      t ||
        ((r = e.style[or]),
        (e.style[or] = "none"),
        e.appendChild(ps),
        (t = ps.getCTM()),
        e.removeChild(ps),
        r
          ? (e.style[or] = r)
          : e.style.removeProperty(
              or.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      t || oa.clone()
    );
  },
  c0 = function (e, t) {
    var r = Ju(e),
      i = e === r,
      n = r ? Hd : qd,
      s = e.parentNode,
      a,
      l,
      u,
      f,
      h,
      d;
    if (e === Ni) return e;
    if (
      (n.length || n.push(nl(e, 1), nl(e, 2), nl(e, 3)), (a = r ? Bo : ts), r)
    )
      i
        ? ((u = jd(e)), (f = -u.e / u.a), (h = -u.f / u.d), (l = oa))
        : e.getBBox
        ? ((u = e.getBBox()),
          (l = e.transform ? e.transform.baseVal : {}),
          (l = l.numberOfItems
            ? l.numberOfItems > 1
              ? f0(l)
              : l.getItem(0).matrix
            : oa),
          (f = l.a * u.x + l.c * u.y),
          (h = l.b * u.x + l.d * u.y))
        : ((l = new Wi()), (f = h = 0)),
        t && e.tagName.toLowerCase() === "g" && (f = h = 0),
        (i ? r : s).appendChild(a),
        a.setAttribute(
          "transform",
          "matrix(" +
            l.a +
            "," +
            l.b +
            "," +
            l.c +
            "," +
            l.d +
            "," +
            (l.e + f) +
            "," +
            (l.f + h) +
            ")"
        );
    else {
      if (((f = h = 0), Gd))
        for (
          l = e.offsetParent, u = e;
          u && (u = u.parentNode) && u !== l && u.parentNode;

        )
          (Ni.getComputedStyle(u)[or] + "").length > 4 &&
            ((f = u.offsetLeft), (h = u.offsetTop), (u = 0));
      if (
        ((d = Ni.getComputedStyle(e)),
        d.position !== "absolute" && d.position !== "fixed")
      )
        for (l = e.offsetParent; s && s !== l; )
          (f += s.scrollLeft || 0), (h += s.scrollTop || 0), (s = s.parentNode);
      (u = a.style),
        (u.top = e.offsetTop - h + "px"),
        (u.left = e.offsetLeft - f + "px"),
        (u[or] = d[or]),
        (u[ru] = d[ru]),
        (u.position = d.position === "fixed" ? "fixed" : "absolute"),
        e.parentNode.appendChild(a);
    }
    return a;
  },
  sl = function (e, t, r, i, n, s, a) {
    return (e.a = t), (e.b = r), (e.c = i), (e.d = n), (e.e = s), (e.f = a), e;
  },
  Wi = (function () {
    function o(t, r, i, n, s, a) {
      t === void 0 && (t = 1),
        r === void 0 && (r = 0),
        i === void 0 && (i = 0),
        n === void 0 && (n = 1),
        s === void 0 && (s = 0),
        a === void 0 && (a = 0),
        sl(this, t, r, i, n, s, a);
    }
    var e = o.prototype;
    return (
      (e.inverse = function () {
        var r = this.a,
          i = this.b,
          n = this.c,
          s = this.d,
          a = this.e,
          l = this.f,
          u = r * s - i * n || 1e-10;
        return sl(
          this,
          s / u,
          -i / u,
          -n / u,
          r / u,
          (n * l - s * a) / u,
          -(r * l - i * a) / u
        );
      }),
      (e.multiply = function (r) {
        var i = this.a,
          n = this.b,
          s = this.c,
          a = this.d,
          l = this.e,
          u = this.f,
          f = r.a,
          h = r.c,
          d = r.b,
          c = r.d,
          g = r.e,
          p = r.f;
        return sl(
          this,
          f * i + d * s,
          f * n + d * a,
          h * i + c * s,
          h * n + c * a,
          l + g * i + p * s,
          u + g * n + p * a
        );
      }),
      (e.clone = function () {
        return new o(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (e.equals = function (r) {
        var i = this.a,
          n = this.b,
          s = this.c,
          a = this.d,
          l = this.e,
          u = this.f;
        return (
          i === r.a &&
          n === r.b &&
          s === r.c &&
          a === r.d &&
          l === r.e &&
          u === r.f
        );
      }),
      (e.apply = function (r, i) {
        i === void 0 && (i = {});
        var n = r.x,
          s = r.y,
          a = this.a,
          l = this.b,
          u = this.c,
          f = this.d,
          h = this.e,
          d = this.f;
        return (
          (i.x = n * a + s * u + h || 0), (i.y = n * l + s * f + d || 0), i
        );
      }),
      o
    );
  })();
function Tr(o, e, t, r) {
  if (!o || !o.parentNode || (zr || qu(o)).documentElement === o)
    return new Wi();
  var i = l0(o),
    n = Ju(o),
    s = n ? Hd : qd,
    a = c0(o, t),
    l = s[0].getBoundingClientRect(),
    u = s[1].getBoundingClientRect(),
    f = s[2].getBoundingClientRect(),
    h = a.parentNode,
    d = !r && u0(o),
    c = new Wi(
      (u.left - l.left) / 100,
      (u.top - l.top) / 100,
      (f.left - l.left) / 100,
      (f.top - l.top) / 100,
      l.left + (d ? 0 : Ku()),
      l.top + (d ? 0 : ju())
    );
  if ((h.removeChild(a), i))
    for (l = i.length; l--; )
      (u = i[l]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
  return e ? c.inverse() : c;
}
/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var h0 = 1,
  Mn,
  ut,
  Se,
  gs,
  Jr,
  Fr,
  iu,
  mc = function (e, t) {
    return e.actions.forEach(function (r) {
      return r.vars[t] && r.vars[t](r);
    });
  },
  nu = {},
  _c = 180 / Math.PI,
  d0 = Math.PI / 180,
  aa = {},
  vc = {},
  Ta = {},
  Zu = function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  },
  p0 = Zu("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  Ca = Zu(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
  ),
  ms = function (e) {
    return Mn(e)[0] || console.warn("Element not found:", e);
  },
  cn = function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  },
  ol = function (e, t, r) {
    return e.forEach(function (i) {
      return i.classList[r](t);
    });
  },
  yc = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1,
  },
  Kd = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  Jd = function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  },
  hn = function (e, t) {
    var r = {},
      i;
    for (i in e) t[i] || (r[i] = e[i]);
    return r;
  },
  Qu = {},
  Zd = function (e) {
    var t = (Qu[e] = Zu(e));
    return (Ta[e] = t.concat(Ca)), t;
  },
  g0 = function (e) {
    var t = e._gsap || ut.core.getCache(e);
    return t.gmCache === ut.ticker.frame
      ? t.gMatrix
      : ((t.gmCache = ut.ticker.frame), (t.gMatrix = Tr(e, !0, !1, !0)));
  },
  m0 = function o(e, t, r) {
    r === void 0 && (r = 0);
    for (
      var i = e.parentNode,
        n = 1e3 * Math.pow(10, r) * (t ? -1 : 1),
        s = t ? -n * 900 : 0;
      e;

    )
      (s += n), (e = e.previousSibling);
    return i ? s + o(i, t, r + 1) : s;
  },
  la = function (e, t, r) {
    return (
      e.forEach(function (i) {
        return (i.d = m0(r ? i.element : i.t, t));
      }),
      e.sort(function (i, n) {
        return i.d - n.d;
      }),
      e
    );
  },
  Ms = function (e, t) {
    for (
      var r = e.element.style, i = (e.css = e.css || []), n = t.length, s, a;
      n--;

    )
      (s = t[n]),
        (a = r[s] || r.getPropertyValue(s)),
        i.push(a ? s : vc[s] || (vc[s] = Jd(s)), a);
    return r;
  },
  ua = function (e) {
    var t = e.css,
      r = e.element.style,
      i = 0;
    for (e.cache.uncache = 1; i < t.length; i += 2)
      t[i + 1] ? (r[t[i]] = t[i + 1]) : r.removeProperty(t[i]);
    !t[t.indexOf("transform") + 1] &&
      r.translate &&
      (r.removeProperty("translate"),
      r.removeProperty("scale"),
      r.removeProperty("rotate"));
  },
  wc = function (e, t) {
    e.forEach(function (r) {
      return (r.a.cache.uncache = 1);
    }),
      t || e.finalStates.forEach(ua);
  },
  al =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ","
    ),
  ef = function (e, t, r) {
    var i = e.element,
      n = e.width,
      s = e.height,
      a = e.uncache,
      l = e.getProp,
      u = i.style,
      f = 4,
      h,
      d,
      c;
    if ((typeof t != "object" && (t = e), Se && r !== 1))
      return (
        Se._abs.push({ t: i, b: e, a: e, sd: 0 }),
        Se._final.push(function () {
          return (e.cache.uncache = 1) && ua(e);
        }),
        i
      );
    for (
      d = l("display") === "none",
        (!e.isVisible || d) &&
          (d && (Ms(e, ["display"]).display = t.display),
          (e.matrix = t.matrix),
          (e.width = n = e.width || t.width),
          (e.height = s = e.height || t.height)),
        Ms(e, al),
        c = window.getComputedStyle(i);
      f--;

    )
      u[al[f]] = c[al[f]];
    if (
      ((u.gridArea = "1 / 1 / 1 / 1"),
      (u.transition = "none"),
      (u.position = "absolute"),
      (u.width = n + "px"),
      (u.height = s + "px"),
      u.top || (u.top = "0px"),
      u.left || (u.left = "0px"),
      a)
    )
      h = new Yi(i);
    else if (((h = hn(e, aa)), (h.position = "absolute"), e.simple)) {
      var g = i.getBoundingClientRect();
      h.matrix = new Wi(1, 0, 0, 1, g.left + Ku(), g.top + ju());
    } else h.matrix = Tr(i, !1, !1, !0);
    return (h = wn(h, e, !0)), (e.x = Fr(h.x, 0.01)), (e.y = Fr(h.y, 0.01)), i;
  },
  bc = function (e, t) {
    return (
      t !== !0 &&
        ((t = Mn(t)),
        (e = e.filter(function (r) {
          if (t.indexOf((r.sd < 0 ? r.b : r.a).element) !== -1) return !0;
          r.t._gsap.renderTransform(1),
            r.b.isVisible &&
              ((r.t.style.width = r.b.width + "px"),
              (r.t.style.height = r.b.height + "px"));
        }))),
      e
    );
  },
  Qd = function (e) {
    return la(e, !0).forEach(function (t) {
      return (
        (t.a.isVisible || t.b.isVisible) && ef(t.sd < 0 ? t.b : t.a, t.b, 1)
      );
    });
  },
  _0 = function (e, t) {
    return (t && e.idLookup[su(t).id]) || e.elementStates[0];
  },
  su = function (e, t, r, i) {
    return e instanceof Yi
      ? e
      : e instanceof lr
      ? _0(e, i)
      : new Yi(
          typeof e == "string" ? ms(e) || console.warn(e + " not found") : e,
          t,
          r
        );
  },
  v0 = function (e, t) {
    for (
      var r = ut.getProperty(e.element, null, "native"),
        i = (e.props = {}),
        n = t.length;
      n--;

    )
      i[t[n]] = (r(t[n]) + "").trim();
    return i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0), e;
  },
  ep = function (e, t) {
    var r = e.style || e,
      i;
    for (i in t) r[i] = t[i];
  },
  y0 = function (e) {
    var t = e.getAttribute("data-flip-id");
    return t || e.setAttribute("data-flip-id", (t = "auto-" + h0++)), t;
  },
  tp = function (e) {
    return e.map(function (t) {
      return t.element;
    });
  },
  xc = function (e, t, r) {
    return e && t.length && r.add(e(tp(t), r, new lr(t, 0, !0)), 0);
  },
  wn = function (e, t, r, i, n, s) {
    var a = e.element,
      l = e.cache,
      u = e.parent,
      f = e.x,
      h = e.y,
      d = t.width,
      c = t.height,
      g = t.scaleX,
      p = t.scaleY,
      m = t.rotation,
      v = t.bounds,
      w = s && iu && iu(a, "transform"),
      y = e,
      x = t.matrix,
      S = x.e,
      T = x.f,
      b =
        e.bounds.width !== v.width ||
        e.bounds.height !== v.height ||
        e.scaleX !== g ||
        e.scaleY !== p ||
        e.rotation !== m,
      O = !b && e.simple && t.simple && !n,
      C,
      E,
      k,
      P,
      R,
      I,
      M;
    return (
      O || !u
        ? ((g = p = 1), (m = C = 0))
        : ((R = g0(u)),
          (I = R.clone().multiply(
            t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix
          )),
          (m = cn(Math.atan2(I.b, I.a) * _c)),
          (C = cn(Math.atan2(I.c, I.d) * _c + m) % 360),
          (g = Math.sqrt(Math.pow(I.a, 2) + Math.pow(I.b, 2))),
          (p =
            Math.sqrt(Math.pow(I.c, 2) + Math.pow(I.d, 2)) * Math.cos(C * d0)),
          n &&
            ((n = Mn(n)[0]),
            (P = ut.getProperty(n)),
            (M = n.getBBox && typeof n.getBBox == "function" && n.getBBox()),
            (y = {
              scaleX: P("scaleX"),
              scaleY: P("scaleY"),
              width: M ? M.width : Math.ceil(parseFloat(P("width", "px"))),
              height: M ? M.height : parseFloat(P("height", "px")),
            })),
          (l.rotation = m + "deg"),
          (l.skewX = C + "deg")),
      r
        ? ((g *= d === y.width || !y.width ? 1 : d / y.width),
          (p *= c === y.height || !y.height ? 1 : c / y.height),
          (l.scaleX = g),
          (l.scaleY = p))
        : ((d = Fr((d * g) / y.scaleX, 0)),
          (c = Fr((c * p) / y.scaleY, 0)),
          (a.style.width = d + "px"),
          (a.style.height = c + "px")),
      i && ep(a, t.props),
      O || !u
        ? ((f += S - e.matrix.e), (h += T - e.matrix.f))
        : b || u !== t.parent
        ? (l.renderTransform(1, l),
          (I = Tr(n || a, !1, !1, !0)),
          (E = R.apply({ x: I.e, y: I.f })),
          (k = R.apply({ x: S, y: T })),
          (f += k.x - E.x),
          (h += k.y - E.y))
        : ((R.e = R.f = 0),
          (k = R.apply({ x: S - e.matrix.e, y: T - e.matrix.f })),
          (f += k.x),
          (h += k.y)),
      (f = Fr(f, 0.02)),
      (h = Fr(h, 0.02)),
      s && !(s instanceof Yi)
        ? w && w.revert()
        : ((l.x = f + "px"), (l.y = h + "px"), l.renderTransform(1, l)),
      s &&
        ((s.x = f),
        (s.y = h),
        (s.rotation = m),
        (s.skewX = C),
        r ? ((s.scaleX = g), (s.scaleY = p)) : ((s.width = d), (s.height = c))),
      s || l
    );
  },
  ll = function (e, t) {
    return e instanceof lr ? e : new lr(e, t);
  },
  rp = function (e, t, r) {
    var i = e.idLookup[r],
      n = e.alt[r];
    return n.isVisible &&
      (!(t.getElementState(n.element) || n).isVisible || !i.isVisible)
      ? n
      : i;
  },
  ul = [],
  fl = "width,height,overflowX,overflowY".split(","),
  To,
  Sc = function (e) {
    if (e !== To) {
      var t = Jr.style,
        r = Jr.clientWidth === window.outerWidth,
        i = Jr.clientHeight === window.outerHeight,
        n = 4;
      if (e && (r || i)) {
        for (; n--; ) ul[n] = t[fl[n]];
        r && ((t.width = Jr.clientWidth + "px"), (t.overflowY = "hidden")),
          i && ((t.height = Jr.clientHeight + "px"), (t.overflowX = "hidden")),
          (To = e);
      } else if (To) {
        for (; n--; ) ul[n] ? (t[fl[n]] = ul[n]) : t.removeProperty(Jd(fl[n]));
        To = e;
      }
    }
  },
  cl = function (e, t, r, i) {
    (e instanceof lr && t instanceof lr) ||
      console.warn("Not a valid state object."),
      (r = r || {});
    var n = r,
      s = n.clearProps,
      a = n.onEnter,
      l = n.onLeave,
      u = n.absolute,
      f = n.absoluteOnLeave,
      h = n.custom,
      d = n.delay,
      c = n.paused,
      g = n.repeat,
      p = n.repeatDelay,
      m = n.yoyo,
      v = n.toggleClass,
      w = n.nested,
      y = n.zIndex,
      x = n.scale,
      S = n.fade,
      T = n.stagger,
      b = n.spin,
      O = n.prune,
      C = ("props" in r ? r : e).props,
      E = hn(r, yc),
      k = ut.timeline({
        delay: d,
        paused: c,
        repeat: g,
        repeatDelay: p,
        yoyo: m,
        data: "isFlip",
      }),
      P = E,
      R = [],
      I = [],
      M = [],
      $ = [],
      B = b === !0 ? 1 : b || 0,
      F =
        typeof b == "function"
          ? b
          : function () {
              return B;
            },
      z = e.interrupted || t.interrupted,
      _ = k[i !== 1 ? "to" : "from"],
      N,
      Y,
      he,
      q,
      K,
      L,
      G,
      ee,
      te,
      fe,
      ge,
      He,
      D,
      W;
    for (Y in t.idLookup)
      (ge = t.alt[Y] ? rp(t, e, Y) : t.idLookup[Y]),
        (K = ge.element),
        (fe = e.idLookup[Y]),
        e.alt[Y] &&
          K === fe.element &&
          (e.alt[Y].isVisible || !ge.isVisible) &&
          (fe = e.alt[Y]),
        fe
          ? ((L = {
              t: K,
              b: fe,
              a: ge,
              sd: fe.element === K ? 0 : ge.isVisible ? 1 : -1,
            }),
            M.push(L),
            L.sd &&
              (L.sd < 0 && ((L.b = ge), (L.a = fe)),
              z && Ms(L.b, C ? Ta[C] : Ca),
              S &&
                M.push(
                  (L.swap = {
                    t: fe.element,
                    b: L.b,
                    a: L.a,
                    sd: -L.sd,
                    swap: L,
                  })
                )),
            (K._flip = fe.element._flip = Se ? Se.timeline : k))
          : ge.isVisible &&
            (M.push({
              t: K,
              b: hn(ge, { isVisible: 1 }),
              a: ge,
              sd: 0,
              entering: 1,
            }),
            (K._flip = Se ? Se.timeline : k));
    if (
      (C &&
        (Qu[C] || Zd(C)).forEach(function (A) {
          return (E[A] = function (Ie) {
            return M[Ie].a.props[A];
          });
        }),
      (M.finalStates = te = []),
      (He = function () {
        for (la(M), Sc(!0), q = 0; q < M.length; q++)
          (L = M[q]),
            (D = L.a),
            (W = L.b),
            O && !D.isDifferent(W) && !L.entering
              ? M.splice(q--, 1)
              : ((K = L.t),
                w && !(L.sd < 0) && q && (D.matrix = Tr(K, !1, !1, !0)),
                W.isVisible && D.isVisible
                  ? (L.sd < 0
                      ? ((G = new Yi(K, C, e.simple)),
                        wn(G, D, x, 0, 0, G),
                        (G.matrix = Tr(K, !1, !1, !0)),
                        (G.css = L.b.css),
                        (L.a = D = G),
                        S && (K.style.opacity = z ? W.opacity : D.opacity),
                        T && $.push(K))
                      : L.sd > 0 &&
                        S &&
                        (K.style.opacity = z ? D.opacity - W.opacity : "0"),
                    wn(D, W, x, C))
                  : W.isVisible !== D.isVisible &&
                    (W.isVisible
                      ? D.isVisible ||
                        ((W.css = D.css),
                        I.push(W),
                        M.splice(q--, 1),
                        u && w && wn(D, W, x, C))
                      : (D.isVisible && R.push(D), M.splice(q--, 1))),
                x ||
                  ((K.style.maxWidth = Math.max(D.width, W.width) + "px"),
                  (K.style.maxHeight = Math.max(D.height, W.height) + "px"),
                  (K.style.minWidth = Math.min(D.width, W.width) + "px"),
                  (K.style.minHeight = Math.min(D.height, W.height) + "px")),
                w && v && K.classList.add(v)),
            te.push(D);
        var Ie;
        if (
          (v &&
            ((Ie = te.map(function (X) {
              return X.element;
            })),
            w &&
              Ie.forEach(function (X) {
                return X.classList.remove(v);
              })),
          Sc(!1),
          x
            ? ((E.scaleX = function (X) {
                return M[X].a.scaleX;
              }),
              (E.scaleY = function (X) {
                return M[X].a.scaleY;
              }))
            : ((E.width = function (X) {
                return M[X].a.width + "px";
              }),
              (E.height = function (X) {
                return M[X].a.height + "px";
              }),
              (E.autoRound = r.autoRound || !1)),
          (E.x = function (X) {
            return M[X].a.x + "px";
          }),
          (E.y = function (X) {
            return M[X].a.y + "px";
          }),
          (E.rotation = function (X) {
            return M[X].a.rotation + (b ? F(X, ee[X], ee) * 360 : 0);
          }),
          (E.skewX = function (X) {
            return M[X].a.skewX;
          }),
          (ee = M.map(function (X) {
            return X.t;
          })),
          (y || y === 0) &&
            ((E.modifiers = {
              zIndex: function () {
                return y;
              },
            }),
            (E.zIndex = y),
            (E.immediateRender = r.immediateRender !== !1)),
          S &&
            (E.opacity = function (X) {
              return M[X].sd < 0 ? 0 : M[X].sd > 0 ? M[X].a.opacity : "+=0";
            }),
          $.length)
        ) {
          T = ut.utils.distribute(T);
          var Kt = ee.slice($.length);
          E.stagger = function (X, Jt) {
            return T(~$.indexOf(Jt) ? ee.indexOf(M[X].swap.t) : X, Jt, Kt);
          };
        }
        if (
          (p0.forEach(function (X) {
            return r[X] && k.eventCallback(X, r[X], r[X + "Params"]);
          }),
          h && ee.length)
        ) {
          (P = hn(E, yc)),
            "scale" in h && ((h.scaleX = h.scaleY = h.scale), delete h.scale);
          for (Y in h)
            (N = hn(h[Y], Kd)),
              (N[Y] = E[Y]),
              !("duration" in N) &&
                "duration" in E &&
                (N.duration = E.duration),
              (N.stagger = E.stagger),
              _.call(k, ee, N, 0),
              delete P[Y];
        }
        (ee.length || I.length || R.length) &&
          (v &&
            k.add(function () {
              return ol(Ie, v, k._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !c &&
            ol(Ie, v, "add"),
          ee.length && _.call(k, ee, P, 0)),
          xc(a, R, k),
          xc(l, I, k);
        var Ft = Se && Se.timeline;
        Ft &&
          (Ft.add(k, 0),
          Se._final.push(function () {
            return wc(M, !s);
          })),
          (he = k.duration()),
          k.call(function () {
            var X = k.time() >= he;
            X && !Ft && wc(M, !s), v && ol(Ie, v, X ? "remove" : "add");
          });
      }),
      f &&
        (u = M.filter(function (A) {
          return !A.sd && !A.a.isVisible && A.b.isVisible;
        }).map(function (A) {
          return A.a.element;
        })),
      Se)
    ) {
      var we;
      u && (we = Se._abs).push.apply(we, bc(M, u)), Se._run.push(He);
    } else u && Qd(bc(M, u)), He();
    var Oe = Se ? Se.timeline : k;
    return (
      (Oe.revert = function () {
        return tf(Oe, 1, 1);
      }),
      Oe
    );
  },
  w0 = function o(e) {
    e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(o);
  },
  tf = function (e, t, r) {
    if (e && e.progress() < 1 && (!e.paused() || r))
      return t && (w0(e), t < 2 && e.progress(1), e.kill()), !0;
  },
  Co = function (e) {
    for (
      var t = (e.idLookup = {}),
        r = (e.alt = {}),
        i = e.elementStates,
        n = i.length,
        s;
      n--;

    )
      (s = i[n]), t[s.id] ? (r[s.id] = s) : (t[s.id] = s);
  },
  lr = (function () {
    function o(t, r, i) {
      if (((this.props = r && r.props), (this.simple = !!(r && r.simple)), i))
        (this.targets = tp(t)), (this.elementStates = t), Co(this);
      else {
        this.targets = Mn(t);
        var n = r && (r.kill === !1 || (r.batch && !r.kill));
        Se && !n && Se._kill.push(this), this.update(n || !!Se);
      }
    }
    var e = o.prototype;
    return (
      (e.update = function (r) {
        var i = this;
        return (
          (this.elementStates = this.targets.map(function (n) {
            return new Yi(n, i.props, i.simple);
          })),
          Co(this),
          this.interrupt(r),
          this.recordInlineStyles(),
          this
        );
      }),
      (e.clear = function () {
        return (
          (this.targets.length = this.elementStates.length = 0), Co(this), this
        );
      }),
      (e.fit = function (r, i, n) {
        for (
          var s = la(this.elementStates.slice(0), !1, !0),
            a = (r || this).idLookup,
            l = 0,
            u,
            f;
          l < s.length;
          l++
        )
          (u = s[l]),
            n && (u.matrix = Tr(u.element, !1, !1, !0)),
            (f = a[u.id]),
            f && wn(u, f, i, !0, 0, u),
            (u.matrix = Tr(u.element, !1, !1, !0));
        return this;
      }),
      (e.getProperty = function (r, i) {
        var n = this.getElementState(r) || aa;
        return (i in n ? n : n.props || aa)[i];
      }),
      (e.add = function (r) {
        for (
          var i = r.targets.length, n = this.idLookup, s = this.alt, a, l, u;
          i--;

        )
          (l = r.elementStates[i]),
            (u = n[l.id]),
            u &&
            (l.element === u.element ||
              (s[l.id] && s[l.id].element === l.element))
              ? ((a = this.elementStates.indexOf(
                  l.element === u.element ? u : s[l.id]
                )),
                this.targets.splice(a, 1, r.targets[i]),
                this.elementStates.splice(a, 1, l))
              : (this.targets.push(r.targets[i]), this.elementStates.push(l));
        return (
          r.interrupted && (this.interrupted = !0),
          r.simple || (this.simple = !1),
          Co(this),
          this
        );
      }),
      (e.compare = function (r) {
        var i = r.idLookup,
          n = this.idLookup,
          s = [],
          a = [],
          l = [],
          u = [],
          f = [],
          h = r.alt,
          d = this.alt,
          c = function (O, C, E) {
            return (
              (O.isVisible !== C.isVisible
                ? O.isVisible
                  ? l
                  : u
                : O.isVisible
                ? a
                : s
              ).push(E) && f.push(E)
            );
          },
          g = function (O, C, E) {
            return f.indexOf(E) < 0 && c(O, C, E);
          },
          p,
          m,
          v,
          w,
          y,
          x,
          S,
          T;
        for (v in i)
          (y = h[v]),
            (x = d[v]),
            (p = y ? rp(r, this, v) : i[v]),
            (w = p.element),
            (m = n[v]),
            x
              ? ((T = m.isVisible || (!x.isVisible && w === m.element) ? m : x),
                (S =
                  y && !p.isVisible && !y.isVisible && T.element === y.element
                    ? y
                    : p),
                S.isVisible && T.isVisible && S.element !== T.element
                  ? ((S.isDifferent(T) ? a : s).push(S.element, T.element),
                    f.push(S.element, T.element))
                  : c(S, T, S.element),
                y && S.element === y.element && (y = i[v]),
                g(S.element !== m.element && y ? y : S, m, m.element),
                g(y && y.element === x.element ? y : S, x, x.element),
                y && g(y, x.element === y.element ? x : m, y.element))
              : (m ? (m.isDifferent(p) ? c(p, m, w) : s.push(w)) : l.push(w),
                y && g(y, m, y.element));
        for (v in n)
          i[v] || (u.push(n[v].element), d[v] && u.push(d[v].element));
        return { changed: a, unchanged: s, enter: l, leave: u };
      }),
      (e.recordInlineStyles = function () {
        for (var r = Ta[this.props] || Ca, i = this.elementStates.length; i--; )
          Ms(this.elementStates[i], r);
      }),
      (e.interrupt = function (r) {
        var i = this,
          n = [];
        this.targets.forEach(function (s) {
          var a = s._flip,
            l = tf(a, r ? 0 : 1);
          r &&
            l &&
            n.indexOf(a) < 0 &&
            a.add(function () {
              return i.updateVisibility();
            }),
            l && n.push(a);
        }),
          !r && n.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!n.length);
      }),
      (e.updateVisibility = function () {
        this.elementStates.forEach(function (r) {
          var i = r.element.getBoundingClientRect();
          (r.isVisible = !!(i.width || i.height || i.top || i.left)),
            (r.uncache = 1);
        });
      }),
      (e.getElementState = function (r) {
        return this.elementStates[this.targets.indexOf(ms(r))];
      }),
      (e.makeAbsolute = function () {
        return la(this.elementStates.slice(0), !0, !0).map(ef);
      }),
      o
    );
  })(),
  Yi = (function () {
    function o(t, r, i) {
      (this.element = t), this.update(r, i);
    }
    var e = o.prototype;
    return (
      (e.isDifferent = function (r) {
        var i = this.bounds,
          n = r.bounds;
        return (
          i.top !== n.top ||
          i.left !== n.left ||
          i.width !== n.width ||
          i.height !== n.height ||
          !this.matrix.equals(r.matrix) ||
          this.opacity !== r.opacity ||
          (this.props &&
            r.props &&
            JSON.stringify(this.props) !== JSON.stringify(r.props))
        );
      }),
      (e.update = function (r, i) {
        var n = this,
          s = n.element,
          a = ut.getProperty(s),
          l = ut.core.getCache(s),
          u = s.getBoundingClientRect(),
          f =
            s.getBBox &&
            typeof s.getBBox == "function" &&
            s.nodeName.toLowerCase() !== "svg" &&
            s.getBBox(),
          h = i
            ? new Wi(1, 0, 0, 1, u.left + Ku(), u.top + ju())
            : Tr(s, !1, !1, !0);
        (n.getProp = a),
          (n.element = s),
          (n.id = y0(s)),
          (n.matrix = h),
          (n.cache = l),
          (n.bounds = u),
          (n.isVisible = !!(u.width || u.height || u.left || u.top)),
          (n.display = a("display")),
          (n.position = a("position")),
          (n.parent = s.parentNode),
          (n.x = a("x")),
          (n.y = a("y")),
          (n.scaleX = l.scaleX),
          (n.scaleY = l.scaleY),
          (n.rotation = a("rotation")),
          (n.skewX = a("skewX")),
          (n.opacity = a("opacity")),
          (n.width = f ? f.width : Fr(a("width", "px"), 0.04)),
          (n.height = f ? f.height : Fr(a("height", "px"), 0.04)),
          r && v0(n, Qu[r] || Zd(r)),
          (n.ctm =
            s.getCTM && s.nodeName.toLowerCase() === "svg" && jd(s).inverse()),
          (n.simple =
            i || (cn(h.a) === 1 && !cn(h.b) && !cn(h.c) && cn(h.d) === 1)),
          (n.uncache = 0);
      }),
      o
    );
  })(),
  b0 = (function () {
    function o(t, r) {
      (this.vars = t),
        (this.batch = r),
        (this.states = []),
        (this.timeline = r.timeline);
    }
    var e = o.prototype;
    return (
      (e.getStateById = function (r) {
        for (var i = this.states.length; i--; )
          if (this.states[i].idLookup[r]) return this.states[i];
      }),
      (e.kill = function () {
        this.batch.remove(this);
      }),
      o
    );
  })(),
  x0 = (function () {
    function o(t) {
      (this.id = t),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new lr()),
        (this.timeline = ut.timeline());
    }
    var e = o.prototype;
    return (
      (e.add = function (r) {
        var i = this.actions.filter(function (n) {
          return n.vars === r;
        });
        return i.length
          ? i[0]
          : ((i = new b0(typeof r == "function" ? { animate: r } : r, this)),
            this.actions.push(i),
            i);
      }),
      (e.remove = function (r) {
        var i = this.actions.indexOf(r);
        return i >= 0 && this.actions.splice(i, 1), this;
      }),
      (e.getState = function (r) {
        var i = this,
          n = Se,
          s = gs;
        return (
          (Se = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (a) {
            a.vars.getState &&
              ((a.states.length = 0), (gs = a), (a.state = a.vars.getState(a))),
              r &&
                a.states.forEach(function (l) {
                  return i.state.add(l);
                });
          }),
          (gs = s),
          (Se = n),
          this.killConflicts(),
          this
        );
      }),
      (e.animate = function () {
        var r = this,
          i = Se,
          n = this.timeline,
          s = this.actions.length,
          a,
          l;
        for (
          Se = this,
            n.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (u) {
              u.vars.animate && u.vars.animate(u);
              var f = u.vars.onEnter,
                h = u.vars.onLeave,
                d = u.targets,
                c,
                g;
              d &&
                d.length &&
                (f || h) &&
                ((c = new lr()),
                u.states.forEach(function (p) {
                  return c.add(p);
                }),
                (g = c.compare(_r.getState(d))),
                g.enter.length && f && f(g.enter),
                g.leave.length && h && h(g.leave));
            }),
            Qd(this._abs),
            this._run.forEach(function (u) {
              return u();
            }),
            l = n.duration(),
            a = this._final.slice(0),
            n.add(function () {
              l <= n.time() &&
                (a.forEach(function (u) {
                  return u();
                }),
                mc(r, "onComplete"));
            }),
            Se = i;
          s--;

        )
          this.actions[s].vars.once && this.actions[s].kill();
        return mc(this, "onStart"), n.restart(), this;
      }),
      (e.loadState = function (r) {
        r ||
          (r = function () {
            return 0;
          });
        var i = [];
        return (
          this.actions.forEach(function (n) {
            if (n.vars.loadState) {
              var s,
                a = function l(u) {
                  u && (n.targets = u),
                    (s = i.indexOf(l)),
                    ~s && (i.splice(s, 1), i.length || r());
                };
              i.push(a), n.vars.loadState(a);
            }
          }),
          i.length || r(),
          this
        );
      }),
      (e.setState = function () {
        return (
          this.actions.forEach(function (r) {
            return (r.targets = r.vars.setState && r.vars.setState(r));
          }),
          this
        );
      }),
      (e.killConflicts = function (r) {
        return (
          this.state.interrupt(r),
          this._kill.forEach(function (i) {
            return i.interrupt(r);
          }),
          this
        );
      }),
      (e.run = function (r, i) {
        var n = this;
        return (
          this !== Se &&
            (r || this.getState(i),
            this.loadState(function () {
              n._killed || (n.setState(), n.animate());
            })),
          this
        );
      }),
      (e.clear = function (r) {
        this.state.clear(), r || (this.actions.length = 0);
      }),
      (e.getStateById = function (r) {
        for (var i = this.actions.length, n; i--; )
          if (((n = this.actions[i].getStateById(r)), n)) return n;
        return this.state.idLookup[r] && this.state;
      }),
      (e.kill = function () {
        (this._killed = 1), this.clear(), delete nu[this.id];
      }),
      o
    );
  })(),
  _r = (function () {
    function o() {}
    return (
      (o.getState = function (t, r) {
        var i = ll(t, r);
        return (
          gs && gs.states.push(i),
          r && r.batch && o.batch(r.batch).state.add(i),
          i
        );
      }),
      (o.from = function (t, r) {
        return (
          (r = r || {}),
          "clearProps" in r || (r.clearProps = !0),
          cl(
            t,
            ll(r.targets || t.targets, {
              props: r.props || t.props,
              simple: r.simple,
              kill: !!r.kill,
            }),
            r,
            -1
          )
        );
      }),
      (o.to = function (t, r) {
        return cl(
          t,
          ll(r.targets || t.targets, {
            props: r.props || t.props,
            simple: r.simple,
            kill: !!r.kill,
          }),
          r,
          1
        );
      }),
      (o.fromTo = function (t, r, i) {
        return cl(t, r, i);
      }),
      (o.fit = function (t, r, i) {
        var n = i ? hn(i, Kd) : {},
          s = i || n,
          a = s.absolute,
          l = s.scale,
          u = s.getVars,
          f = s.props,
          h = s.runBackwards,
          d = s.onComplete,
          c = s.simple,
          g = i && i.fitChild && ms(i.fitChild),
          p = su(r, f, c, t),
          m = su(t, 0, c, p),
          v = f ? Ta[f] : Ca,
          w = ut.context();
        return (
          f && ep(n, p.props),
          Ms(m, v),
          h &&
            ("immediateRender" in n || (n.immediateRender = !0),
            (n.onComplete = function () {
              ua(m), d && d.apply(this, arguments);
            })),
          a && ef(m, p),
          (n = wn(m, p, l || g, f, g, n.duration || u ? n : 0)),
          w &&
            !u &&
            w.add(function () {
              return function () {
                return ua(m);
              };
            }),
          u ? n : n.duration ? ut.to(m.element, n) : null
        );
      }),
      (o.makeAbsolute = function (t, r) {
        return (t instanceof lr ? t : new lr(t, r)).makeAbsolute();
      }),
      (o.batch = function (t) {
        return t || (t = "default"), nu[t] || (nu[t] = new x0(t));
      }),
      (o.killFlipsOf = function (t, r) {
        (t instanceof lr ? t.targets : Mn(t)).forEach(function (i) {
          return i && tf(i._flip, r !== !1 ? 1 : 2);
        });
      }),
      (o.isFlipping = function (t) {
        var r = o.getByTarget(t);
        return !!r && r.isActive();
      }),
      (o.getByTarget = function (t) {
        return (ms(t) || aa)._flip;
      }),
      (o.getElementState = function (t, r) {
        return new Yi(ms(t), r);
      }),
      (o.convertCoordinates = function (t, r, i) {
        var n = Tr(r, !0, !0).multiply(Tr(t));
        return i ? n.apply(i) : n;
      }),
      (o.register = function (t) {
        if (((Jr = typeof document < "u" && document.body), Jr)) {
          (ut = t),
            qu(Jr),
            (Mn = ut.utils.toArray),
            (iu = ut.core.getStyleSaver);
          var r = ut.utils.snap(0.1);
          Fr = function (n, s) {
            return r(parseFloat(n) + s);
          };
        }
      }),
      o
    );
  })();
_r.version = "3.12.5";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(_r);
function S0(o, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(o, r.key, r);
  }
}
function E0(o, e, t) {
  return (
    e && S0(o.prototype, e),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    o
  );
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var Ec = "(prefers-reduced-motion: reduce)",
  dn = 1,
  T0 = 2,
  Dn = 3,
  In = 4,
  Ys = 5,
  $o = 6,
  fa = 7,
  C0 = {
    CREATED: dn,
    MOUNTED: T0,
    IDLE: Dn,
    MOVING: In,
    SCROLLING: Ys,
    DRAGGING: $o,
    DESTROYED: fa,
  };
function Gr(o) {
  o.length = 0;
}
function pi(o, e, t) {
  return Array.prototype.slice.call(o, e, t);
}
function ye(o) {
  return o.bind.apply(o, [null].concat(pi(arguments, 1)));
}
var ip = setTimeout,
  ou = function () {};
function Tc(o) {
  return requestAnimationFrame(o);
}
function Oa(o, e) {
  return typeof e === o;
}
function Ds(o) {
  return !nf(o) && Oa("object", o);
}
var rf = Array.isArray,
  np = ye(Oa, "function"),
  fi = ye(Oa, "string"),
  Xs = ye(Oa, "undefined");
function nf(o) {
  return o === null;
}
function sp(o) {
  try {
    return o instanceof (o.ownerDocument.defaultView || window).HTMLElement;
  } catch {
    return !1;
  }
}
function Gs(o) {
  return rf(o) ? o : [o];
}
function jt(o, e) {
  Gs(o).forEach(e);
}
function sf(o, e) {
  return o.indexOf(e) > -1;
}
function Vo(o, e) {
  return o.push.apply(o, Gs(e)), o;
}
function Br(o, e, t) {
  o &&
    jt(e, function (r) {
      r && o.classList[t ? "add" : "remove"](r);
    });
}
function Cr(o, e) {
  Br(o, fi(e) ? e.split(" ") : e, !0);
}
function Hs(o, e) {
  jt(e, o.appendChild.bind(o));
}
function of(o, e) {
  jt(o, function (t) {
    var r = (e || t).parentNode;
    r && r.insertBefore(t, e);
  });
}
function Ls(o, e) {
  return sp(o) && (o.msMatchesSelector || o.matches).call(o, e);
}
function op(o, e) {
  var t = o ? pi(o.children) : [];
  return e
    ? t.filter(function (r) {
        return Ls(r, e);
      })
    : t;
}
function qs(o, e) {
  return e ? op(o, e)[0] : o.firstElementChild;
}
var Is = Object.keys;
function zi(o, e, t) {
  return (
    o &&
      (t ? Is(o).reverse() : Is(o)).forEach(function (r) {
        r !== "__proto__" && e(o[r], r);
      }),
    o
  );
}
function Ns(o) {
  return (
    pi(arguments, 1).forEach(function (e) {
      zi(e, function (t, r) {
        o[r] = e[r];
      });
    }),
    o
  );
}
function ii(o) {
  return (
    pi(arguments, 1).forEach(function (e) {
      zi(e, function (t, r) {
        rf(t)
          ? (o[r] = t.slice())
          : Ds(t)
          ? (o[r] = ii({}, Ds(o[r]) ? o[r] : {}, t))
          : (o[r] = t);
      });
    }),
    o
  );
}
function Cc(o, e) {
  jt(e || Is(o), function (t) {
    delete o[t];
  });
}
function Or(o, e) {
  jt(o, function (t) {
    jt(e, function (r) {
      t && t.removeAttribute(r);
    });
  });
}
function re(o, e, t) {
  Ds(e)
    ? zi(e, function (r, i) {
        re(o, i, r);
      })
    : jt(o, function (r) {
        nf(t) || t === "" ? Or(r, e) : r.setAttribute(e, String(t));
      });
}
function bn(o, e, t) {
  var r = document.createElement(o);
  return e && (fi(e) ? Cr(r, e) : re(r, e)), t && Hs(t, r), r;
}
function sr(o, e, t) {
  if (Xs(t)) return getComputedStyle(o)[e];
  nf(t) || (o.style[e] = "" + t);
}
function zs(o, e) {
  sr(o, "display", e);
}
function ap(o) {
  (o.setActive && o.setActive()) || o.focus({ preventScroll: !0 });
}
function ar(o, e) {
  return o.getAttribute(e);
}
function Oc(o, e) {
  return o && o.classList.contains(e);
}
function Wt(o) {
  return o.getBoundingClientRect();
}
function Xi(o) {
  jt(o, function (e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  });
}
function lp(o) {
  return qs(new DOMParser().parseFromString(o, "text/html").body);
}
function Lr(o, e) {
  o.preventDefault(), e && (o.stopPropagation(), o.stopImmediatePropagation());
}
function up(o, e) {
  return o && o.querySelector(e);
}
function af(o, e) {
  return e ? pi(o.querySelectorAll(e)) : [];
}
function $r(o, e) {
  Br(o, e, !1);
}
function au(o) {
  return o.timeStamp;
}
function Si(o) {
  return fi(o) ? o : o ? o + "px" : "";
}
var js = "splide",
  lf = "data-" + js;
function _s(o, e) {
  if (!o) throw new Error("[" + js + "] " + (e || ""));
}
var ci = Math.min,
  ca = Math.max,
  ha = Math.floor,
  Fs = Math.ceil,
  xt = Math.abs;
function fp(o, e, t) {
  return xt(o - e) < t;
}
function Uo(o, e, t, r) {
  var i = ci(e, t),
    n = ca(e, t);
  return r ? i < o && o < n : i <= o && o <= n;
}
function on(o, e, t) {
  var r = ci(e, t),
    i = ca(e, t);
  return ci(ca(r, o), i);
}
function lu(o) {
  return +(o > 0) - +(o < 0);
}
function uu(o, e) {
  return (
    jt(e, function (t) {
      o = o.replace("%s", "" + t);
    }),
    o
  );
}
function uf(o) {
  return o < 10 ? "0" + o : "" + o;
}
var Pc = {};
function O0(o) {
  return "" + o + uf((Pc[o] = (Pc[o] || 0) + 1));
}
function cp() {
  var o = [];
  function e(s, a, l, u) {
    i(s, a, function (f, h, d) {
      var c = "addEventListener" in f,
        g = c
          ? f.removeEventListener.bind(f, h, l, u)
          : f.removeListener.bind(f, l);
      c ? f.addEventListener(h, l, u) : f.addListener(l),
        o.push([f, h, d, l, g]);
    });
  }
  function t(s, a, l) {
    i(s, a, function (u, f, h) {
      o = o.filter(function (d) {
        return d[0] === u && d[1] === f && d[2] === h && (!l || d[3] === l)
          ? (d[4](), !1)
          : !0;
      });
    });
  }
  function r(s, a, l) {
    var u,
      f = !0;
    return (
      typeof CustomEvent == "function"
        ? (u = new CustomEvent(a, { bubbles: f, detail: l }))
        : ((u = document.createEvent("CustomEvent")),
          u.initCustomEvent(a, f, !1, l)),
      s.dispatchEvent(u),
      u
    );
  }
  function i(s, a, l) {
    jt(s, function (u) {
      u &&
        jt(a, function (f) {
          f.split(" ").forEach(function (h) {
            var d = h.split(".");
            l(u, d[0], d[1]);
          });
        });
    });
  }
  function n() {
    o.forEach(function (s) {
      s[4]();
    }),
      Gr(o);
  }
  return { bind: e, unbind: t, dispatch: r, destroy: n };
}
var ji = "mounted",
  kc = "ready",
  hi = "move",
  Ks = "moved",
  hp = "click",
  P0 = "active",
  k0 = "inactive",
  A0 = "visible",
  R0 = "hidden",
  Ge = "refresh",
  Pt = "updated",
  Bs = "resize",
  ff = "resized",
  M0 = "drag",
  D0 = "dragging",
  L0 = "dragged",
  cf = "scroll",
  Nn = "scrolled",
  I0 = "overflow",
  dp = "destroy",
  N0 = "arrows:mounted",
  z0 = "arrows:updated",
  F0 = "pagination:mounted",
  B0 = "pagination:updated",
  pp = "navigation:mounted",
  gp = "autoplay:play",
  $0 = "autoplay:playing",
  mp = "autoplay:pause",
  _p = "lazyload:loaded",
  vp = "sk",
  yp = "sh",
  da = "ei";
function Me(o) {
  var e = o ? o.event.bus : document.createDocumentFragment(),
    t = cp();
  function r(n, s) {
    t.bind(e, Gs(n).join(" "), function (a) {
      s.apply(s, rf(a.detail) ? a.detail : []);
    });
  }
  function i(n) {
    t.dispatch(e, n, pi(arguments, 1));
  }
  return (
    o && o.event.on(dp, t.destroy),
    Ns(t, { bus: e, on: r, off: ye(t.unbind, e), emit: i })
  );
}
function Pa(o, e, t, r) {
  var i = Date.now,
    n,
    s = 0,
    a,
    l = !0,
    u = 0;
  function f() {
    if (!l) {
      if (
        ((s = o ? ci((i() - n) / o, 1) : 1),
        t && t(s),
        s >= 1 && (e(), (n = i()), r && ++u >= r))
      )
        return d();
      a = Tc(f);
    }
  }
  function h(v) {
    v || g(), (n = i() - (v ? s * o : 0)), (l = !1), (a = Tc(f));
  }
  function d() {
    l = !0;
  }
  function c() {
    (n = i()), (s = 0), t && t(s);
  }
  function g() {
    a && cancelAnimationFrame(a), (s = 0), (a = 0), (l = !0);
  }
  function p(v) {
    o = v;
  }
  function m() {
    return l;
  }
  return { start: h, rewind: c, pause: d, cancel: g, set: p, isPaused: m };
}
function V0(o) {
  var e = o;
  function t(i) {
    e = i;
  }
  function r(i) {
    return sf(Gs(i), e);
  }
  return { set: t, is: r };
}
function U0(o, e) {
  var t = Pa(0, o, null, 1);
  return function () {
    t.isPaused() && t.start();
  };
}
function W0(o, e, t) {
  var r = o.state,
    i = t.breakpoints || {},
    n = t.reducedMotion || {},
    s = cp(),
    a = [];
  function l() {
    var g = t.mediaQuery === "min";
    Is(i)
      .sort(function (p, m) {
        return g ? +p - +m : +m - +p;
      })
      .forEach(function (p) {
        f(i[p], "(" + (g ? "min" : "max") + "-width:" + p + "px)");
      }),
      f(n, Ec),
      h();
  }
  function u(g) {
    g && s.destroy();
  }
  function f(g, p) {
    var m = matchMedia(p);
    s.bind(m, "change", h), a.push([g, m]);
  }
  function h() {
    var g = r.is(fa),
      p = t.direction,
      m = a.reduce(function (v, w) {
        return ii(v, w[1].matches ? w[0] : {});
      }, {});
    Cc(t),
      c(m),
      t.destroy
        ? o.destroy(t.destroy === "completely")
        : g
        ? (u(!0), o.mount())
        : p !== t.direction && o.refresh();
  }
  function d(g) {
    matchMedia(Ec).matches && (g ? ii(t, n) : Cc(t, Is(n)));
  }
  function c(g, p, m) {
    ii(t, g),
      p && ii(Object.getPrototypeOf(t), g),
      (m || !r.is(dn)) && o.emit(Pt, t);
  }
  return { setup: l, destroy: u, reduce: d, set: c };
}
var ka = "Arrow",
  Aa = ka + "Left",
  Ra = ka + "Right",
  wp = ka + "Up",
  bp = ka + "Down",
  Ac = "rtl",
  Ma = "ttb",
  hl = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [wp, Ra],
    ArrowRight: [bp, Aa],
  };
function Y0(o, e, t) {
  function r(n, s, a) {
    a = a || t.direction;
    var l = a === Ac && !s ? 1 : a === Ma ? 0 : -1;
    return (
      (hl[n] && hl[n][l]) ||
      n.replace(/width|left|right/i, function (u, f) {
        var h = hl[u.toLowerCase()][l] || u;
        return f > 0 ? h.charAt(0).toUpperCase() + h.slice(1) : h;
      })
    );
  }
  function i(n) {
    return n * (t.direction === Ac ? 1 : -1);
  }
  return { resolve: r, orient: i };
}
var Ur = "role",
  xn = "tabindex",
  X0 = "disabled",
  fr = "aria-",
  Js = fr + "controls",
  xp = fr + "current",
  Rc = fr + "selected",
  Gt = fr + "label",
  hf = fr + "labelledby",
  Sp = fr + "hidden",
  df = fr + "orientation",
  $s = fr + "roledescription",
  Mc = fr + "live",
  Dc = fr + "busy",
  Lc = fr + "atomic",
  pf = [Ur, xn, X0, Js, xp, Gt, hf, Sp, df, $s],
  Pr = js + "__",
  gi = "is-",
  dl = js,
  Ic = Pr + "track",
  G0 = Pr + "list",
  Da = Pr + "slide",
  Ep = Da + "--clone",
  H0 = Da + "__container",
  gf = Pr + "arrows",
  La = Pr + "arrow",
  Tp = La + "--prev",
  Cp = La + "--next",
  Ia = Pr + "pagination",
  Op = Ia + "__page",
  q0 = Pr + "progress",
  j0 = q0 + "__bar",
  K0 = Pr + "toggle",
  J0 = Pr + "spinner",
  Z0 = Pr + "sr",
  Q0 = gi + "initialized",
  Gi = gi + "active",
  Pp = gi + "prev",
  kp = gi + "next",
  fu = gi + "visible",
  cu = gi + "loading",
  Ap = gi + "focus-in",
  Rp = gi + "overflow",
  ev = [Gi, fu, Pp, kp, cu, Ap, Rp],
  tv = {
    slide: Da,
    clone: Ep,
    arrows: gf,
    arrow: La,
    prev: Tp,
    next: Cp,
    pagination: Ia,
    page: Op,
    spinner: J0,
  };
function rv(o, e) {
  if (np(o.closest)) return o.closest(e);
  for (var t = o; t && t.nodeType === 1 && !Ls(t, e); ) t = t.parentElement;
  return t;
}
var iv = 5,
  Nc = 200,
  Mp = "touchstart mousedown",
  pl = "touchmove mousemove",
  gl = "touchend touchcancel mouseup click";
function nv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.bind,
    s = o.root,
    a = t.i18n,
    l = {},
    u = [],
    f = [],
    h = [],
    d,
    c,
    g;
  function p() {
    y(), x(), w();
  }
  function m() {
    i(Ge, v),
      i(Ge, p),
      i(Pt, w),
      n(
        document,
        Mp + " keydown",
        function (b) {
          g = b.type === "keydown";
        },
        { capture: !0 }
      ),
      n(s, "focusin", function () {
        Br(s, Ap, !!g);
      });
  }
  function v(b) {
    var O = pf.concat("style");
    Gr(u), $r(s, f), $r(d, h), Or([d, c], O), Or(s, b ? O : ["style", $s]);
  }
  function w() {
    $r(s, f),
      $r(d, h),
      (f = T(dl)),
      (h = T(Ic)),
      Cr(s, f),
      Cr(d, h),
      re(s, Gt, t.label),
      re(s, hf, t.labelledby);
  }
  function y() {
    (d = S("." + Ic)),
      (c = qs(d, "." + G0)),
      _s(d && c, "A track/list element is missing."),
      Vo(u, op(c, "." + Da + ":not(." + Ep + ")")),
      zi(
        { arrows: gf, pagination: Ia, prev: Tp, next: Cp, bar: j0, toggle: K0 },
        function (b, O) {
          l[O] = S("." + b);
        }
      ),
      Ns(l, { root: s, track: d, list: c, slides: u });
  }
  function x() {
    var b = s.id || O0(js),
      O = t.role;
    (s.id = b),
      (d.id = d.id || b + "-track"),
      (c.id = c.id || b + "-list"),
      !ar(s, Ur) && s.tagName !== "SECTION" && O && re(s, Ur, O),
      re(s, $s, a.carousel),
      re(c, Ur, "presentation");
  }
  function S(b) {
    var O = up(s, b);
    return O && rv(O, "." + dl) === s ? O : void 0;
  }
  function T(b) {
    return [
      b + "--" + t.type,
      b + "--" + t.direction,
      t.drag && b + "--draggable",
      t.isNavigation && b + "--nav",
      b === dl && Gi,
    ];
  }
  return Ns(l, { setup: p, mount: m, destroy: v });
}
var Ln = "slide",
  zn = "loop",
  Zs = "fade";
function sv(o, e, t, r) {
  var i = Me(o),
    n = i.on,
    s = i.emit,
    a = i.bind,
    l = o.Components,
    u = o.root,
    f = o.options,
    h = f.isNavigation,
    d = f.updateOnMove,
    c = f.i18n,
    g = f.pagination,
    p = f.slideFocus,
    m = l.Direction.resolve,
    v = ar(r, "style"),
    w = ar(r, Gt),
    y = t > -1,
    x = qs(r, "." + H0),
    S;
  function T() {
    y ||
      ((r.id = u.id + "-slide" + uf(e + 1)),
      re(r, Ur, g ? "tabpanel" : "group"),
      re(r, $s, c.slide),
      re(r, Gt, w || uu(c.slideLabel, [e + 1, o.length]))),
      b();
  }
  function b() {
    a(r, "click", ye(s, hp, F)),
      a(r, "keydown", ye(s, vp, F)),
      n([Ks, yp, Nn], k),
      n(pp, C),
      d && n(hi, E);
  }
  function O() {
    (S = !0),
      i.destroy(),
      $r(r, ev),
      Or(r, pf),
      re(r, "style", v),
      re(r, Gt, w || "");
  }
  function C() {
    var z = o.splides
      .map(function (_) {
        var N = _.splide.Components.Slides.getAt(e);
        return N ? N.slide.id : "";
      })
      .join(" ");
    re(r, Gt, uu(c.slideX, (y ? t : e) + 1)),
      re(r, Js, z),
      re(r, Ur, p ? "button" : ""),
      p && Or(r, $s);
  }
  function E() {
    S || k();
  }
  function k() {
    if (!S) {
      var z = o.index;
      P(), R(), Br(r, Pp, e === z - 1), Br(r, kp, e === z + 1);
    }
  }
  function P() {
    var z = M();
    z !== Oc(r, Gi) &&
      (Br(r, Gi, z), re(r, xp, (h && z) || ""), s(z ? P0 : k0, F));
  }
  function R() {
    var z = $(),
      _ = !z && (!M() || y);
    if (
      (o.state.is([In, Ys]) || re(r, Sp, _ || ""),
      re(af(r, f.focusableNodes || ""), xn, _ ? -1 : ""),
      p && re(r, xn, _ ? -1 : 0),
      z !== Oc(r, fu) && (Br(r, fu, z), s(z ? A0 : R0, F)),
      !z && document.activeElement === r)
    ) {
      var N = l.Slides.getAt(o.index);
      N && ap(N.slide);
    }
  }
  function I(z, _, N) {
    sr((N && x) || r, z, _);
  }
  function M() {
    var z = o.index;
    return z === e || (f.cloneStatus && z === t);
  }
  function $() {
    if (o.is(Zs)) return M();
    var z = Wt(l.Elements.track),
      _ = Wt(r),
      N = m("left", !0),
      Y = m("right", !0);
    return ha(z[N]) <= Fs(_[N]) && ha(_[Y]) <= Fs(z[Y]);
  }
  function B(z, _) {
    var N = xt(z - e);
    return !y && (f.rewind || o.is(zn)) && (N = ci(N, o.length - N)), N <= _;
  }
  var F = {
    index: e,
    slideIndex: t,
    slide: r,
    container: x,
    isClone: y,
    mount: T,
    destroy: O,
    update: k,
    style: I,
    isWithin: B,
  };
  return F;
}
function ov(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.emit,
    s = r.bind,
    a = e.Elements,
    l = a.slides,
    u = a.list,
    f = [];
  function h() {
    d(), i(Ge, c), i(Ge, d);
  }
  function d() {
    l.forEach(function (k, P) {
      p(k, P, -1);
    });
  }
  function c() {
    S(function (k) {
      k.destroy();
    }),
      Gr(f);
  }
  function g() {
    S(function (k) {
      k.update();
    });
  }
  function p(k, P, R) {
    var I = sv(o, P, R, k);
    I.mount(),
      f.push(I),
      f.sort(function (M, $) {
        return M.index - $.index;
      });
  }
  function m(k) {
    return k
      ? T(function (P) {
          return !P.isClone;
        })
      : f;
  }
  function v(k) {
    var P = e.Controller,
      R = P.toIndex(k),
      I = P.hasFocus() ? 1 : t.perPage;
    return T(function (M) {
      return Uo(M.index, R, R + I - 1);
    });
  }
  function w(k) {
    return T(k)[0];
  }
  function y(k, P) {
    jt(k, function (R) {
      if ((fi(R) && (R = lp(R)), sp(R))) {
        var I = l[P];
        I ? of(R, I) : Hs(u, R), Cr(R, t.classes.slide), O(R, ye(n, Bs));
      }
    }),
      n(Ge);
  }
  function x(k) {
    Xi(
      T(k).map(function (P) {
        return P.slide;
      })
    ),
      n(Ge);
  }
  function S(k, P) {
    m(P).forEach(k);
  }
  function T(k) {
    return f.filter(
      np(k)
        ? k
        : function (P) {
            return fi(k) ? Ls(P.slide, k) : sf(Gs(k), P.index);
          }
    );
  }
  function b(k, P, R) {
    S(function (I) {
      I.style(k, P, R);
    });
  }
  function O(k, P) {
    var R = af(k, "img"),
      I = R.length;
    I
      ? R.forEach(function (M) {
          s(M, "load error", function () {
            --I || P();
          });
        })
      : P();
  }
  function C(k) {
    return k ? l.length : f.length;
  }
  function E() {
    return f.length > t.perPage;
  }
  return {
    mount: h,
    destroy: c,
    update: g,
    register: p,
    get: m,
    getIn: v,
    getAt: w,
    add: y,
    remove: x,
    forEach: S,
    filter: T,
    style: b,
    getLength: C,
    isEnough: E,
  };
}
function av(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.bind,
    s = r.emit,
    a = e.Slides,
    l = e.Direction.resolve,
    u = e.Elements,
    f = u.root,
    h = u.track,
    d = u.list,
    c = a.getAt,
    g = a.style,
    p,
    m,
    v;
  function w() {
    y(), n(window, "resize load", U0(ye(s, Bs))), i([Pt, Ge], y), i(Bs, x);
  }
  function y() {
    (p = t.direction === Ma),
      sr(f, "maxWidth", Si(t.width)),
      sr(h, l("paddingLeft"), S(!1)),
      sr(h, l("paddingRight"), S(!0)),
      x(!0);
  }
  function x(F) {
    var z = Wt(f);
    (F || m.width !== z.width || m.height !== z.height) &&
      (sr(h, "height", T()),
      g(l("marginRight"), Si(t.gap)),
      g("width", O()),
      g("height", C(), !0),
      (m = z),
      s(ff),
      v !== (v = B()) && (Br(f, Rp, v), s(I0, v)));
  }
  function S(F) {
    var z = t.padding,
      _ = l(F ? "right" : "left");
    return (z && Si(z[_] || (Ds(z) ? 0 : z))) || "0px";
  }
  function T() {
    var F = "";
    return (
      p &&
        ((F = b()),
        _s(F, "height or heightRatio is missing."),
        (F = "calc(" + F + " - " + S(!1) + " - " + S(!0) + ")")),
      F
    );
  }
  function b() {
    return Si(t.height || Wt(d).width * t.heightRatio);
  }
  function O() {
    return t.autoWidth ? null : Si(t.fixedWidth) || (p ? "" : E());
  }
  function C() {
    return Si(t.fixedHeight) || (p ? (t.autoHeight ? null : E()) : b());
  }
  function E() {
    var F = Si(t.gap);
    return (
      "calc((100%" +
      (F && " + " + F) +
      ")/" +
      (t.perPage || 1) +
      (F && " - " + F) +
      ")"
    );
  }
  function k() {
    return Wt(d)[l("width")];
  }
  function P(F, z) {
    var _ = c(F || 0);
    return _ ? Wt(_.slide)[l("width")] + (z ? 0 : M()) : 0;
  }
  function R(F, z) {
    var _ = c(F);
    if (_) {
      var N = Wt(_.slide)[l("right")],
        Y = Wt(d)[l("left")];
      return xt(N - Y) + (z ? 0 : M());
    }
    return 0;
  }
  function I(F) {
    return R(o.length - 1) - R(0) + P(0, F);
  }
  function M() {
    var F = c(0);
    return (F && parseFloat(sr(F.slide, l("marginRight")))) || 0;
  }
  function $(F) {
    return parseFloat(sr(h, l("padding" + (F ? "Right" : "Left")))) || 0;
  }
  function B() {
    return o.is(Zs) || I(!0) > k();
  }
  return {
    mount: w,
    resize: x,
    listSize: k,
    slideSize: P,
    sliderSize: I,
    totalSize: R,
    getPadding: $,
    isOverflow: B,
  };
}
var lv = 2;
function uv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = e.Elements,
    s = e.Slides,
    a = e.Direction.resolve,
    l = [],
    u;
  function f() {
    i(Ge, h), i([Pt, Bs], c), (u = m()) && (g(u), e.Layout.resize(!0));
  }
  function h() {
    d(), f();
  }
  function d() {
    Xi(l), Gr(l), r.destroy();
  }
  function c() {
    var v = m();
    u !== v && (u < v || !v) && r.emit(Ge);
  }
  function g(v) {
    var w = s.get().slice(),
      y = w.length;
    if (y) {
      for (; w.length < v; ) Vo(w, w);
      Vo(w.slice(-v), w.slice(0, v)).forEach(function (x, S) {
        var T = S < v,
          b = p(x.slide, S);
        T ? of(b, w[0].slide) : Hs(n.list, b),
          Vo(l, b),
          s.register(b, S - v + (T ? 0 : y), x.index);
      });
    }
  }
  function p(v, w) {
    var y = v.cloneNode(!0);
    return Cr(y, t.classes.clone), (y.id = o.root.id + "-clone" + uf(w + 1)), y;
  }
  function m() {
    var v = t.clones;
    if (!o.is(zn)) v = 0;
    else if (Xs(v)) {
      var w = t[a("fixedWidth")] && e.Layout.slideSize(0),
        y = w && Fs(Wt(n.track)[a("width")] / w);
      v = y || (t[a("autoWidth")] && o.length) || t.perPage * lv;
    }
    return v;
  }
  return { mount: f, destroy: d };
}
function fv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.emit,
    s = o.state.set,
    a = e.Layout,
    l = a.slideSize,
    u = a.getPadding,
    f = a.totalSize,
    h = a.listSize,
    d = a.sliderSize,
    c = e.Direction,
    g = c.resolve,
    p = c.orient,
    m = e.Elements,
    v = m.list,
    w = m.track,
    y;
  function x() {
    (y = e.Transition), i([ji, ff, Pt, Ge], S);
  }
  function S() {
    e.Controller.isBusy() || (e.Scroll.cancel(), b(o.index), e.Slides.update());
  }
  function T(_, N, Y, he) {
    _ !== N && F(_ > Y) && (k(), O(E(I(), _ > Y), !0)),
      s(In),
      n(hi, N, Y, _),
      y.start(N, function () {
        s(Dn), n(Ks, N, Y, _), he && he();
      });
  }
  function b(_) {
    O(R(_, !0));
  }
  function O(_, N) {
    if (!o.is(Zs)) {
      var Y = N ? _ : C(_);
      sr(v, "transform", "translate" + g("X") + "(" + Y + "px)"),
        _ !== Y && n(yp);
    }
  }
  function C(_) {
    if (o.is(zn)) {
      var N = P(_),
        Y = N > e.Controller.getEnd(),
        he = N < 0;
      (he || Y) && (_ = E(_, Y));
    }
    return _;
  }
  function E(_, N) {
    var Y = _ - B(N),
      he = d();
    return (_ -= p(he * (Fs(xt(Y) / he) || 1)) * (N ? 1 : -1)), _;
  }
  function k() {
    O(I(), !0), y.cancel();
  }
  function P(_) {
    for (var N = e.Slides.get(), Y = 0, he = 1 / 0, q = 0; q < N.length; q++) {
      var K = N[q].index,
        L = xt(R(K, !0) - _);
      if (L <= he) (he = L), (Y = K);
      else break;
    }
    return Y;
  }
  function R(_, N) {
    var Y = p(f(_ - 1) - $(_));
    return N ? M(Y) : Y;
  }
  function I() {
    var _ = g("left");
    return Wt(v)[_] - Wt(w)[_] + p(u(!1));
  }
  function M(_) {
    return t.trimSpace && o.is(Ln) && (_ = on(_, 0, p(d(!0) - h()))), _;
  }
  function $(_) {
    var N = t.focus;
    return N === "center" ? (h() - l(_, !0)) / 2 : +N * l(_) || 0;
  }
  function B(_) {
    return R(_ ? e.Controller.getEnd() : 0, !!t.trimSpace);
  }
  function F(_) {
    var N = p(E(I(), _));
    return _ ? N >= 0 : N <= v[g("scrollWidth")] - Wt(w)[g("width")];
  }
  function z(_, N) {
    N = Xs(N) ? I() : N;
    var Y = _ !== !0 && p(N) < p(B(!1)),
      he = _ !== !1 && p(N) > p(B(!0));
    return Y || he;
  }
  return {
    mount: x,
    move: T,
    jump: b,
    translate: O,
    shift: E,
    cancel: k,
    toIndex: P,
    toPosition: R,
    getPosition: I,
    getLimit: B,
    exceededLimit: z,
    reposition: S,
  };
}
function cv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.emit,
    s = e.Move,
    a = s.getPosition,
    l = s.getLimit,
    u = s.toPosition,
    f = e.Slides,
    h = f.isEnough,
    d = f.getLength,
    c = t.omitEnd,
    g = o.is(zn),
    p = o.is(Ln),
    m = ye(I, !1),
    v = ye(I, !0),
    w = t.start || 0,
    y,
    x = w,
    S,
    T,
    b;
  function O() {
    C(), i([Pt, Ge, da], C), i(ff, E);
  }
  function C() {
    (S = d(!0)), (T = t.perMove), (b = t.perPage), (y = F());
    var L = on(w, 0, c ? y : S - 1);
    L !== w && ((w = L), s.reposition());
  }
  function E() {
    y !== F() && n(da);
  }
  function k(L, G, ee) {
    if (!K()) {
      var te = R(L),
        fe = B(te);
      fe > -1 && (G || fe !== w) && (Y(fe), s.move(te, fe, x, ee));
    }
  }
  function P(L, G, ee, te) {
    e.Scroll.scroll(L, G, ee, function () {
      var fe = B(s.toIndex(a()));
      Y(c ? ci(fe, y) : fe), te && te();
    });
  }
  function R(L) {
    var G = w;
    if (fi(L)) {
      var ee = L.match(/([+\-<>])(\d+)?/) || [],
        te = ee[1],
        fe = ee[2];
      te === "+" || te === "-"
        ? (G = M(w + +("" + te + (+fe || 1)), w))
        : te === ">"
        ? (G = fe ? z(+fe) : m(!0))
        : te === "<" && (G = v(!0));
    } else G = g ? L : on(L, 0, y);
    return G;
  }
  function I(L, G) {
    var ee = T || (q() ? 1 : b),
      te = M(w + ee * (L ? -1 : 1), w, !(T || q()));
    return te === -1 && p && !fp(a(), l(!L), 1) ? (L ? 0 : y) : G ? te : B(te);
  }
  function M(L, G, ee) {
    if (h() || q()) {
      var te = $(L);
      te !== L && ((G = L), (L = te), (ee = !1)),
        L < 0 || L > y
          ? !T && (Uo(0, L, G, !0) || Uo(y, G, L, !0))
            ? (L = z(_(L)))
            : g
            ? (L = ee ? (L < 0 ? -(S % b || b) : S) : L)
            : t.rewind
            ? (L = L < 0 ? y : 0)
            : (L = -1)
          : ee && L !== G && (L = z(_(G) + (L < G ? -1 : 1)));
    } else L = -1;
    return L;
  }
  function $(L) {
    if (p && t.trimSpace === "move" && L !== w)
      for (var G = a(); G === u(L, !0) && Uo(L, 0, o.length - 1, !t.rewind); )
        L < w ? --L : ++L;
    return L;
  }
  function B(L) {
    return g ? (L + S) % S || 0 : L;
  }
  function F() {
    for (var L = S - (q() || (g && T) ? 1 : b); c && L-- > 0; )
      if (u(S - 1, !0) !== u(L, !0)) {
        L++;
        break;
      }
    return on(L, 0, S - 1);
  }
  function z(L) {
    return on(q() ? L : b * L, 0, y);
  }
  function _(L) {
    return q() ? ci(L, y) : ha((L >= y ? S - 1 : L) / b);
  }
  function N(L) {
    var G = s.toIndex(L);
    return p ? on(G, 0, y) : G;
  }
  function Y(L) {
    L !== w && ((x = w), (w = L));
  }
  function he(L) {
    return L ? x : w;
  }
  function q() {
    return !Xs(t.focus) || t.isNavigation;
  }
  function K() {
    return o.state.is([In, Ys]) && !!t.waitForTransition;
  }
  return {
    mount: O,
    go: k,
    scroll: P,
    getNext: m,
    getPrev: v,
    getAdjacent: I,
    getEnd: F,
    setIndex: Y,
    getIndex: he,
    toIndex: z,
    toPage: _,
    toDest: N,
    hasFocus: q,
    isBusy: K,
  };
}
var hv = "http://www.w3.org/2000/svg",
  dv =
    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  Oo = 40;
function pv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.bind,
    s = r.emit,
    a = t.classes,
    l = t.i18n,
    u = e.Elements,
    f = e.Controller,
    h = u.arrows,
    d = u.track,
    c = h,
    g = u.prev,
    p = u.next,
    m,
    v,
    w = {};
  function y() {
    S(), i(Pt, x);
  }
  function x() {
    T(), y();
  }
  function S() {
    var P = t.arrows;
    P && !(g && p) && C(),
      g &&
        p &&
        (Ns(w, { prev: g, next: p }),
        zs(c, P ? "" : "none"),
        Cr(c, (v = gf + "--" + t.direction)),
        P && (b(), k(), re([g, p], Js, d.id), s(N0, g, p)));
  }
  function T() {
    r.destroy(),
      $r(c, v),
      m ? (Xi(h ? [g, p] : c), (g = p = null)) : Or([g, p], pf);
  }
  function b() {
    i([ji, Ks, Ge, Nn, da], k),
      n(p, "click", ye(O, ">")),
      n(g, "click", ye(O, "<"));
  }
  function O(P) {
    f.go(P, !0);
  }
  function C() {
    (c = h || bn("div", a.arrows)),
      (g = E(!0)),
      (p = E(!1)),
      (m = !0),
      Hs(c, [g, p]),
      !h && of(c, d);
  }
  function E(P) {
    var R =
      '<button class="' +
      a.arrow +
      " " +
      (P ? a.prev : a.next) +
      '" type="button"><svg xmlns="' +
      hv +
      '" viewBox="0 0 ' +
      Oo +
      " " +
      Oo +
      '" width="' +
      Oo +
      '" height="' +
      Oo +
      '" focusable="false"><path d="' +
      (t.arrowPath || dv) +
      '" />';
    return lp(R);
  }
  function k() {
    if (g && p) {
      var P = o.index,
        R = f.getPrev(),
        I = f.getNext(),
        M = R > -1 && P < R ? l.last : l.prev,
        $ = I > -1 && P > I ? l.first : l.next;
      (g.disabled = R < 0),
        (p.disabled = I < 0),
        re(g, Gt, M),
        re(p, Gt, $),
        s(z0, g, p, R, I);
    }
  }
  return { arrows: w, mount: y, destroy: T, update: k };
}
var gv = lf + "-interval";
function mv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.bind,
    s = r.emit,
    a = Pa(t.interval, o.go.bind(o, ">"), b),
    l = a.isPaused,
    u = e.Elements,
    f = e.Elements,
    h = f.root,
    d = f.toggle,
    c = t.autoplay,
    g,
    p,
    m = c === "pause";
  function v() {
    c && (w(), d && re(d, Js, u.track.id), m || y(), T());
  }
  function w() {
    t.pauseOnHover &&
      n(h, "mouseenter mouseleave", function (C) {
        (g = C.type === "mouseenter"), S();
      }),
      t.pauseOnFocus &&
        n(h, "focusin focusout", function (C) {
          (p = C.type === "focusin"), S();
        }),
      d &&
        n(d, "click", function () {
          m ? y() : x(!0);
        }),
      i([hi, cf, Ge], a.rewind),
      i(hi, O);
  }
  function y() {
    l() &&
      e.Slides.isEnough() &&
      (a.start(!t.resetProgress), (p = g = m = !1), T(), s(gp));
  }
  function x(C) {
    C === void 0 && (C = !0), (m = !!C), T(), l() || (a.pause(), s(mp));
  }
  function S() {
    m || (g || p ? x(!1) : y());
  }
  function T() {
    d && (Br(d, Gi, !m), re(d, Gt, t.i18n[m ? "play" : "pause"]));
  }
  function b(C) {
    var E = u.bar;
    E && sr(E, "width", C * 100 + "%"), s($0, C);
  }
  function O(C) {
    var E = e.Slides.getAt(C);
    a.set((E && +ar(E.slide, gv)) || t.interval);
  }
  return { mount: v, destroy: a.cancel, play: y, pause: x, isPaused: l };
}
function _v(o, e, t) {
  var r = Me(o),
    i = r.on;
  function n() {
    t.cover && (i(_p, ye(a, !0)), i([ji, Pt, Ge], ye(s, !0)));
  }
  function s(l) {
    e.Slides.forEach(function (u) {
      var f = qs(u.container || u.slide, "img");
      f && f.src && a(l, f, u);
    });
  }
  function a(l, u, f) {
    f.style(
      "background",
      l ? 'center/cover no-repeat url("' + u.src + '")' : "",
      !0
    ),
      zs(u, l ? "none" : "");
  }
  return { mount: n, destroy: ye(s, !1) };
}
var vv = 10,
  yv = 600,
  wv = 0.6,
  bv = 1.5,
  xv = 800;
function Sv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.emit,
    s = o.state.set,
    a = e.Move,
    l = a.getPosition,
    u = a.getLimit,
    f = a.exceededLimit,
    h = a.translate,
    d = o.is(Ln),
    c,
    g,
    p = 1;
  function m() {
    i(hi, x), i([Pt, Ge], S);
  }
  function v(b, O, C, E, k) {
    var P = l();
    if ((x(), C && (!d || !f()))) {
      var R = e.Layout.sliderSize(),
        I = lu(b) * R * ha(xt(b) / R) || 0;
      b = a.toPosition(e.Controller.toDest(b % R)) + I;
    }
    var M = fp(P, b, 1);
    (p = 1),
      (O = M ? 0 : O || ca(xt(b - P) / bv, xv)),
      (g = E),
      (c = Pa(O, w, ye(y, P, b, k), 1)),
      s(Ys),
      n(cf),
      c.start();
  }
  function w() {
    s(Dn), g && g(), n(Nn);
  }
  function y(b, O, C, E) {
    var k = l(),
      P = b + (O - b) * T(E),
      R = (P - k) * p;
    h(k + R),
      d && !C && f() && ((p *= wv), xt(R) < vv && v(u(f(!0)), yv, !1, g, !0));
  }
  function x() {
    c && c.cancel();
  }
  function S() {
    c && !c.isPaused() && (x(), w());
  }
  function T(b) {
    var O = t.easingFunc;
    return O ? O(b) : 1 - Math.pow(1 - b, 4);
  }
  return { mount: m, destroy: x, scroll: v, cancel: S };
}
var an = { passive: !1, capture: !0 };
function Ev(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.emit,
    s = r.bind,
    a = r.unbind,
    l = o.state,
    u = e.Move,
    f = e.Scroll,
    h = e.Controller,
    d = e.Elements.track,
    c = e.Media.reduce,
    g = e.Direction,
    p = g.resolve,
    m = g.orient,
    v = u.getPosition,
    w = u.exceededLimit,
    y,
    x,
    S,
    T,
    b,
    O = !1,
    C,
    E,
    k;
  function P() {
    s(d, pl, ou, an),
      s(d, gl, ou, an),
      s(d, Mp, I, an),
      s(d, "click", B, { capture: !0 }),
      s(d, "dragstart", Lr),
      i([ji, Pt], R);
  }
  function R() {
    var D = t.drag;
    He(!D), (T = D === "free");
  }
  function I(D) {
    if (((C = !1), !E)) {
      var W = fe(D);
      te(D.target) &&
        (W || !D.button) &&
        (h.isBusy()
          ? Lr(D, !0)
          : ((k = W ? d : window),
            (b = l.is([In, Ys])),
            (S = null),
            s(k, pl, M, an),
            s(k, gl, $, an),
            u.cancel(),
            f.cancel(),
            F(D)));
    }
  }
  function M(D) {
    if ((l.is($o) || (l.set($o), n(M0)), D.cancelable))
      if (b) {
        u.translate(y + ee(q(D)));
        var W = K(D) > Nc,
          we = O !== (O = w());
        (W || we) && F(D), (C = !0), n(D0), Lr(D);
      } else N(D) && ((b = _(D)), Lr(D));
  }
  function $(D) {
    l.is($o) && (l.set(Dn), n(L0)),
      b && (z(D), Lr(D)),
      a(k, pl, M),
      a(k, gl, $),
      (b = !1);
  }
  function B(D) {
    !E && C && Lr(D, !0);
  }
  function F(D) {
    (S = x), (x = D), (y = v());
  }
  function z(D) {
    var W = Y(D),
      we = he(W),
      Oe = t.rewind && t.rewindByDrag;
    c(!1),
      T
        ? h.scroll(we, 0, t.snap)
        : o.is(Zs)
        ? h.go(m(lu(W)) < 0 ? (Oe ? "<" : "-") : Oe ? ">" : "+")
        : o.is(Ln) && O && Oe
        ? h.go(w(!0) ? ">" : "<")
        : h.go(h.toDest(we), !0),
      c(!0);
  }
  function _(D) {
    var W = t.dragMinThreshold,
      we = Ds(W),
      Oe = (we && W.mouse) || 0,
      A = (we ? W.touch : +W) || 10;
    return xt(q(D)) > (fe(D) ? A : Oe);
  }
  function N(D) {
    return xt(q(D)) > xt(q(D, !0));
  }
  function Y(D) {
    if (o.is(zn) || !O) {
      var W = K(D);
      if (W && W < Nc) return q(D) / W;
    }
    return 0;
  }
  function he(D) {
    return (
      v() +
      lu(D) *
        ci(
          xt(D) * (t.flickPower || 600),
          T ? 1 / 0 : e.Layout.listSize() * (t.flickMaxPages || 1)
        )
    );
  }
  function q(D, W) {
    return G(D, W) - G(L(D), W);
  }
  function K(D) {
    return au(D) - au(L(D));
  }
  function L(D) {
    return (x === D && S) || x;
  }
  function G(D, W) {
    return (fe(D) ? D.changedTouches[0] : D)["page" + p(W ? "Y" : "X")];
  }
  function ee(D) {
    return D / (O && o.is(Ln) ? iv : 1);
  }
  function te(D) {
    var W = t.noDrag;
    return !Ls(D, "." + Op + ", ." + La) && (!W || !Ls(D, W));
  }
  function fe(D) {
    return typeof TouchEvent < "u" && D instanceof TouchEvent;
  }
  function ge() {
    return b;
  }
  function He(D) {
    E = D;
  }
  return { mount: P, disable: He, isDragging: ge };
}
var Tv = { Spacebar: " ", Right: Ra, Left: Aa, Up: wp, Down: bp };
function mf(o) {
  return (o = fi(o) ? o : o.key), Tv[o] || o;
}
var zc = "keydown";
function Cv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.bind,
    s = r.unbind,
    a = o.root,
    l = e.Direction.resolve,
    u,
    f;
  function h() {
    d(), i(Pt, c), i(Pt, d), i(hi, p);
  }
  function d() {
    var v = t.keyboard;
    v && ((u = v === "global" ? window : a), n(u, zc, m));
  }
  function c() {
    s(u, zc);
  }
  function g(v) {
    f = v;
  }
  function p() {
    var v = f;
    (f = !0),
      ip(function () {
        f = v;
      });
  }
  function m(v) {
    if (!f) {
      var w = mf(v);
      w === l(Aa) ? o.go("<") : w === l(Ra) && o.go(">");
    }
  }
  return { mount: h, destroy: c, disable: g };
}
var vs = lf + "-lazy",
  Wo = vs + "-srcset",
  Ov = "[" + vs + "], [" + Wo + "]";
function Pv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.off,
    s = r.bind,
    a = r.emit,
    l = t.lazyLoad === "sequential",
    u = [Ks, Nn],
    f = [];
  function h() {
    t.lazyLoad && (d(), i(Ge, d));
  }
  function d() {
    Gr(f), c(), l ? v() : (n(u), i(u, g), g());
  }
  function c() {
    e.Slides.forEach(function (w) {
      af(w.slide, Ov).forEach(function (y) {
        var x = ar(y, vs),
          S = ar(y, Wo);
        if (x !== y.src || S !== y.srcset) {
          var T = t.classes.spinner,
            b = y.parentElement,
            O = qs(b, "." + T) || bn("span", T, b);
          f.push([y, w, O]), y.src || zs(y, "none");
        }
      });
    });
  }
  function g() {
    (f = f.filter(function (w) {
      var y = t.perPage * ((t.preloadPages || 1) + 1) - 1;
      return w[1].isWithin(o.index, y) ? p(w) : !0;
    })),
      f.length || n(u);
  }
  function p(w) {
    var y = w[0];
    Cr(w[1].slide, cu),
      s(y, "load error", ye(m, w)),
      re(y, "src", ar(y, vs)),
      re(y, "srcset", ar(y, Wo)),
      Or(y, vs),
      Or(y, Wo);
  }
  function m(w, y) {
    var x = w[0],
      S = w[1];
    $r(S.slide, cu),
      y.type !== "error" && (Xi(w[2]), zs(x, ""), a(_p, x, S), a(Bs)),
      l && v();
  }
  function v() {
    f.length && p(f.shift());
  }
  return { mount: h, destroy: ye(Gr, f), check: g };
}
function kv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = r.emit,
    s = r.bind,
    a = e.Slides,
    l = e.Elements,
    u = e.Controller,
    f = u.hasFocus,
    h = u.getIndex,
    d = u.go,
    c = e.Direction.resolve,
    g = l.pagination,
    p = [],
    m,
    v;
  function w() {
    y(), i([Pt, Ge, da], w);
    var E = t.pagination;
    g && zs(g, E ? "" : "none"),
      E &&
        (i([hi, cf, Nn], C),
        x(),
        C(),
        n(F0, { list: m, items: p }, O(o.index)));
  }
  function y() {
    m && (Xi(g ? pi(m.children) : m), $r(m, v), Gr(p), (m = null)), r.destroy();
  }
  function x() {
    var E = o.length,
      k = t.classes,
      P = t.i18n,
      R = t.perPage,
      I = f() ? u.getEnd() + 1 : Fs(E / R);
    (m = g || bn("ul", k.pagination, l.track.parentElement)),
      Cr(m, (v = Ia + "--" + b())),
      re(m, Ur, "tablist"),
      re(m, Gt, P.select),
      re(m, df, b() === Ma ? "vertical" : "");
    for (var M = 0; M < I; M++) {
      var $ = bn("li", null, m),
        B = bn("button", { class: k.page, type: "button" }, $),
        F = a.getIn(M).map(function (_) {
          return _.slide.id;
        }),
        z = !f() && R > 1 ? P.pageX : P.slideX;
      s(B, "click", ye(S, M)),
        t.paginationKeyboard && s(B, "keydown", ye(T, M)),
        re($, Ur, "presentation"),
        re(B, Ur, "tab"),
        re(B, Js, F.join(" ")),
        re(B, Gt, uu(z, M + 1)),
        re(B, xn, -1),
        p.push({ li: $, button: B, page: M });
    }
  }
  function S(E) {
    d(">" + E, !0);
  }
  function T(E, k) {
    var P = p.length,
      R = mf(k),
      I = b(),
      M = -1;
    R === c(Ra, !1, I)
      ? (M = ++E % P)
      : R === c(Aa, !1, I)
      ? (M = (--E + P) % P)
      : R === "Home"
      ? (M = 0)
      : R === "End" && (M = P - 1);
    var $ = p[M];
    $ && (ap($.button), d(">" + M), Lr(k, !0));
  }
  function b() {
    return t.paginationDirection || t.direction;
  }
  function O(E) {
    return p[u.toPage(E)];
  }
  function C() {
    var E = O(h(!0)),
      k = O(h());
    if (E) {
      var P = E.button;
      $r(P, Gi), Or(P, Rc), re(P, xn, -1);
    }
    if (k) {
      var R = k.button;
      Cr(R, Gi), re(R, Rc, !0), re(R, xn, "");
    }
    n(B0, { list: m, items: p }, E, k);
  }
  return { items: p, mount: w, destroy: y, getAt: O, update: C };
}
var Av = [" ", "Enter"];
function Rv(o, e, t) {
  var r = t.isNavigation,
    i = t.slideFocus,
    n = [];
  function s() {
    o.splides.forEach(function (g) {
      g.isParent || (u(o, g.splide), u(g.splide, o));
    }),
      r && f();
  }
  function a() {
    n.forEach(function (g) {
      g.destroy();
    }),
      Gr(n);
  }
  function l() {
    a(), s();
  }
  function u(g, p) {
    var m = Me(g);
    m.on(hi, function (v, w, y) {
      p.go(p.is(zn) ? y : v);
    }),
      n.push(m);
  }
  function f() {
    var g = Me(o),
      p = g.on;
    p(hp, d), p(vp, c), p([ji, Pt], h), n.push(g), g.emit(pp, o.splides);
  }
  function h() {
    re(e.Elements.list, df, t.direction === Ma ? "vertical" : "");
  }
  function d(g) {
    o.go(g.index);
  }
  function c(g, p) {
    sf(Av, mf(p)) && (d(g), Lr(p));
  }
  return {
    setup: ye(e.Media.set, { slideFocus: Xs(i) ? r : i }, !0),
    mount: s,
    destroy: a,
    remount: l,
  };
}
function Mv(o, e, t) {
  var r = Me(o),
    i = r.bind,
    n = 0;
  function s() {
    t.wheel && i(e.Elements.track, "wheel", a, an);
  }
  function a(u) {
    if (u.cancelable) {
      var f = u.deltaY,
        h = f < 0,
        d = au(u),
        c = t.wheelMinThreshold || 0,
        g = t.wheelSleep || 0;
      xt(f) > c && d - n > g && (o.go(h ? "<" : ">"), (n = d)), l(h) && Lr(u);
    }
  }
  function l(u) {
    return (
      !t.releaseWheel || o.state.is(In) || e.Controller.getAdjacent(u) !== -1
    );
  }
  return { mount: s };
}
var Dv = 90;
function Lv(o, e, t) {
  var r = Me(o),
    i = r.on,
    n = e.Elements.track,
    s = t.live && !t.isNavigation,
    a = bn("span", Z0),
    l = Pa(Dv, ye(f, !1));
  function u() {
    s &&
      (d(!e.Autoplay.isPaused()),
      re(n, Lc, !0),
      (a.textContent = "…"),
      i(gp, ye(d, !0)),
      i(mp, ye(d, !1)),
      i([Ks, Nn], ye(f, !0)));
  }
  function f(c) {
    re(n, Dc, c), c ? (Hs(n, a), l.start()) : (Xi(a), l.cancel());
  }
  function h() {
    Or(n, [Mc, Lc, Dc]), Xi(a);
  }
  function d(c) {
    s && re(n, Mc, c ? "off" : "polite");
  }
  return { mount: u, disable: d, destroy: h };
}
var Iv = Object.freeze({
    __proto__: null,
    Media: W0,
    Direction: Y0,
    Elements: nv,
    Slides: ov,
    Layout: av,
    Clones: uv,
    Move: fv,
    Controller: cv,
    Arrows: pv,
    Autoplay: mv,
    Cover: _v,
    Scroll: Sv,
    Drag: Ev,
    Keyboard: Cv,
    LazyLoad: Pv,
    Pagination: kv,
    Sync: Rv,
    Wheel: Mv,
    Live: Lv,
  }),
  Nv = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s",
  },
  zv = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: tv,
    i18n: Nv,
    reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
  };
function Fv(o, e, t) {
  var r = e.Slides;
  function i() {
    Me(o).on([ji, Ge], n);
  }
  function n() {
    r.forEach(function (a) {
      a.style("transform", "translateX(-" + 100 * a.index + "%)");
    });
  }
  function s(a, l) {
    r.style("transition", "opacity " + t.speed + "ms " + t.easing), ip(l);
  }
  return { mount: i, start: s, cancel: ou };
}
function Bv(o, e, t) {
  var r = e.Move,
    i = e.Controller,
    n = e.Scroll,
    s = e.Elements.list,
    a = ye(sr, s, "transition"),
    l;
  function u() {
    Me(o).bind(s, "transitionend", function (c) {
      c.target === s && l && (h(), l());
    });
  }
  function f(c, g) {
    var p = r.toPosition(c, !0),
      m = r.getPosition(),
      v = d(c);
    xt(p - m) >= 1 && v >= 1
      ? t.useScroll
        ? n.scroll(p, v, !1, g)
        : (a("transform " + v + "ms " + t.easing), r.translate(p, !0), (l = g))
      : (r.jump(c), g());
  }
  function h() {
    a(""), n.cancel();
  }
  function d(c) {
    var g = t.rewindSpeed;
    if (o.is(Ln) && g) {
      var p = i.getIndex(!0),
        m = i.getEnd();
      if ((p === 0 && c >= m) || (p >= m && c === 0)) return g;
    }
    return t.speed;
  }
  return { mount: u, start: f, cancel: h };
}
var $v = (function () {
    function o(t, r) {
      (this.event = Me()),
        (this.Components = {}),
        (this.state = V0(dn)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var i = fi(t) ? up(document, t) : t;
      _s(i, i + " is invalid."),
        (this.root = i),
        (r = ii(
          { label: ar(i, Gt) || "", labelledby: ar(i, hf) || "" },
          zv,
          o.defaults,
          r || {}
        ));
      try {
        ii(r, JSON.parse(ar(i, lf)));
      } catch {
        _s(!1, "Invalid JSON");
      }
      this._o = Object.create(ii({}, r));
    }
    var e = o.prototype;
    return (
      (e.mount = function (r, i) {
        var n = this,
          s = this.state,
          a = this.Components;
        _s(s.is([dn, fa]), "Already mounted!"),
          s.set(dn),
          (this._C = a),
          (this._T = i || this._T || (this.is(Zs) ? Fv : Bv)),
          (this._E = r || this._E);
        var l = Ns({}, Iv, this._E, { Transition: this._T });
        return (
          zi(l, function (u, f) {
            var h = u(n, a, n._o);
            (a[f] = h), h.setup && h.setup();
          }),
          zi(a, function (u) {
            u.mount && u.mount();
          }),
          this.emit(ji),
          Cr(this.root, Q0),
          s.set(Dn),
          this.emit(kc),
          this
        );
      }),
      (e.sync = function (r) {
        return (
          this.splides.push({ splide: r }),
          r.splides.push({ splide: this, isParent: !0 }),
          this.state.is(Dn) &&
            (this._C.Sync.remount(), r.Components.Sync.remount()),
          this
        );
      }),
      (e.go = function (r) {
        return this._C.Controller.go(r), this;
      }),
      (e.on = function (r, i) {
        return this.event.on(r, i), this;
      }),
      (e.off = function (r) {
        return this.event.off(r), this;
      }),
      (e.emit = function (r) {
        var i;
        return (
          (i = this.event).emit.apply(i, [r].concat(pi(arguments, 1))), this
        );
      }),
      (e.add = function (r, i) {
        return this._C.Slides.add(r, i), this;
      }),
      (e.remove = function (r) {
        return this._C.Slides.remove(r), this;
      }),
      (e.is = function (r) {
        return this._o.type === r;
      }),
      (e.refresh = function () {
        return this.emit(Ge), this;
      }),
      (e.destroy = function (r) {
        r === void 0 && (r = !0);
        var i = this.event,
          n = this.state;
        return (
          n.is(dn)
            ? Me(this).on(kc, this.destroy.bind(this, r))
            : (zi(
                this._C,
                function (s) {
                  s.destroy && s.destroy(r);
                },
                !0
              ),
              i.emit(dp),
              i.destroy(),
              r && Gr(this.splides),
              n.set(fa)),
          this
        );
      }),
      E0(o, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (r) {
            this._C.Media.set(r, !0, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      o
    );
  })(),
  pa = $v;
pa.defaults = {};
pa.STATES = C0;
const Sr = (o, e = document) => e.querySelector(o),
  Na = (o, e = document) => e.querySelectorAll(o),
  Vv = ce.getProperty;
let rt = window.innerWidth < 640;
ce.registerPlugin(oe, _r);
const hu = Wv();
Uv();
Xv();
Gv();
Yv();
Hv();
qv();
jv();
Jv();
window.addEventListener("load", () => Kv());
function Uv() {
  const o = Sr(".pre-loader");
  Vv(".pre-loader .infinite-mover", "height");
  const e = ce.timeline({
    onUpdate: () => window.scrollTo(0, 0),
    onComplete: () => o.remove() && e.kill(),
    defaults: { ease: "power3.inOut", duration: 1 },
  });
  e.to("body", { opacity: 1 })
    .to(".pre-loader .logo", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: "expo",
      duration: 2.5,
    })
    .to(".pre-loader .logo-con", { scale: 0, opacity: 0 })
    .to(
      o,
      {
        keyframes: {
          "0%": { top: 0 },
          "35%": { top: "-30vh" },
          "100%": { top: "115%" },
        },
        duration: 1.5,
      },
      "-=0.6"
    )
    .to(
      ".hero .woobly > div",
      {
        keyframes: { y: [0, "-30vh", 0] },
        stagger: 0.1,
        onStart() {
          hu.start(), (document.body.style.overflow = "visible");
        },
        duration: 1,
      },
      `${rt ? "-=0.8" : "-=0.5"}`
    )
    .from("main .sticky-top", { opacity: 0, yPercent: -100 }, "<+0.1")
    .from(".sub-hero .logo-con img", { yPercent: 100 }, "<+0.1")
    .from(".sub-hero h1 span", { yPercent: 100, stagger: 0.1 }, "<+0.1")
    .from(".sub-hero .hero-star", { opacity: 0, stagger: 0.1 }, "<");
}
function Wv() {
  const o = new mm();
  return (
    o.stop(),
    o.on("scroll", oe.update),
    ce.ticker.add((e) => {
      o.raf(e * 1e3);
    }),
    ce.ticker.lagSmoothing(0),
    o
  );
}
function Yv() {
  const o = Sr(".nav-toggler"),
    e = Na(".line", o),
    t = Sr(".lines-con", o),
    r = ce.timeline({ paused: !0, defaults: { ease: "back.inOut" } }),
    i = ce.timeline({
      paused: !0,
      defaults: { ease: "power3.inOut", duration: 1 },
    });
  let n = !1;
  r
    .to(t, { gap: 0 }, 0)
    .to(e[1], { opacity: 0 }, 0)
    .to(e[0], { yPercent: 100, rotation: -45 }, 0)
    .to(e[2], { yPercent: -100, rotation: 45 }, 0)
    .to(o, { rotation: 90 }, 0),
    i
      .to(".nav-page", { top: 0 })
      .from(".nav-page .logo", { yPercent: 100 }, "<+0.3")
      .from(".nav-page .link span", { yPercent: 100, stagger: 0.1 }, "<+0.1")
      .from(".nav-page .sticky-top", { opacity: 0, yPercent: -100 }, "<+0.1")
      .from(".nav-page .stripe", { y: 0 }, "<+0.1"),
    o.addEventListener("click", () => {
      n
        ? (r.reverse(), i.reverse(), hu.start())
        : (r.play(), i.play(), hu.stop()),
        (n = !n);
    }),
    ce.to(".nav-page .stripe", {
      xPercent: -50,
      repeat: -1,
      ease: "none",
      duration: 10,
    });
  const s = "#97c43e",
    a = "#f8d617";
  ce.to("nav", {
    "--p": s,
    "--s": a,
    scrollTrigger: {
      trigger: ".hero .woobly >div:last-child",
      start: rt ? "-20% 10%" : "-20% 20%",
      end: rt ? "bottom 10%" : "bottom 20%",
      toggleActions: "play reverse restart reverse",
    },
  }),
    ce.to("nav", {
      "--p": s,
      "--s": a,
      scrollTrigger: {
        trigger: ".variety .vegan-delight .good-gut",
        start: rt ? "-10% 10%" : "-10% 20%",
        end: rt ? "90% 10%" : "90% 20%",
        toggleActions: "play reverse restart reverse",
      },
    }),
    ce.to("nav", {
      "--p": s,
      "--s": a,
      scrollTrigger: {
        trigger: ".recipes",
        start: rt ? "top 10%" : "top 20%",
        end: rt ? "90% 10%" : "90% 20%",
        toggleActions: "play reverse restart reverse",
      },
    }),
    rt ||
      ce
        .timeline({
          scrollTrigger: {
            trigger: "nav",
            start: "top 10%",
            end: "bottom -25%",
            scrub: !0,
          },
        })
        .to("nav .logo", { opacity: 1 });
}
function Xv() {
  const o = ["#68219b", "#15559c", "#f97a47", "#7b503f"],
    e = ["#b26de1", "#81b5ee", "#fea887", "#fea887"],
    t = Sr(".horizontal"),
    r = Sr(".mover", t),
    i = Na(".model", r);
  ce
    .timeline({
      scrollTrigger: { pin: t, scrub: !0, end: `bottom ${-r.offsetWidth}` },
    })
    .to(r, { x: "-100vw", backgroundColor: o[1], ease: "none" })
    .to(r, { css: { "--b": e[1] }, ease: "none" }, "<")
    .to(i[0], { yPercent: -150, x: "-50vw", rotation: -90 }, "<")
    .from(i[1], { yPercent: 150, x: "50vw", rotation: 90 }, "<")
    .to(r, { x: "-200vw", backgroundColor: o[2], ease: "none" })
    .to(r, { css: { "--b": e[2], ease: "none" } }, "<")
    .from(i[2], { yPercent: -100, ease: "back.inOut" }, "<")
    .to(r, { x: "-300vw", backgroundColor: o[3], ease: "none" })
    .to(i[3], { rotation: 360, ease: "power1.inOut", duration: 0.7 }, "-=0.75"),
    ce.fromTo(
      i,
      { y: -20 },
      { y: 20, yoyo: !0, repeat: -1, ease: "power1.inOut", duration: 2 }
    );
}
function Gv() {
  const o = Sr(".variety");
  ce.timeline({
    scrollTrigger: {
      trigger: o,
      start: rt ? "5% 90%" : "5% 70%",
      end: rt ? "5% 60%" : "5% 10%",
      scrub: rt ? 1 : 2,
    },
  })
    .from(".vegan-delight h1 span", {
      yPercent: 100,
      stagger: rt ? 0 : 0.1,
      duration: 1,
      ease: "power3",
    })
    .from(".vegan-delight .leaf", { opacity: 0 }, "<+0.4")
    .from(".vegan-delight .leaf-con", { gap: "0", ease: "back" }, "<")
    .from(
      ".vegan-delight .leaf-con >div",
      { width: "50vw", ease: "back" },
      "<"
    );
}
function Hv() {
  const { faq: o } = vm,
    e = Sr(".questions"),
    t = 0.7,
    r = "power3";
  o.forEach((n) => {
    const { heading: s, disc: a } = n;
    e.innerHTML += `
          <div class="question" data-isOpen="false">
            <div>
              <h4>${s}</h4>
              <img class="faq-expander" src="/icons/expander-arrow.svg" alt="">
            </div>
            <p class="my-para">${a}</p>
          </div>
    `;
  });
  const i = document.querySelectorAll(".faq .questions .question");
  i.forEach((n) => {
    const s = n.querySelector("p"),
      a = n.querySelector(".faq-expander");
    n.addEventListener("click", () => {
      if (n.getAttribute("data-isOpen") === "true") {
        n.setAttribute("data-isOpen", "false");
        const u = _r.getState(n, { props: "padding, backgroundColor" });
        (s.style.display = "none"),
          n.classList.remove("active"),
          ce.to(s, { opacity: 0, y: 49, duration: t, ease: r }),
          ce.to(a, { rotate: 0, duration: t, ease: r }),
          _r.from(u, { duration: t, ease: r });
      } else {
        i.forEach((f) => {
          if (f !== n) {
            const h = Sr("p", f),
              d = Sr(".faq-expander", f);
            f.setAttribute("data-isOpen", "false");
            const c = _r.getState(f, { props: "padding, backgroundColor" });
            f.classList.remove("active"),
              (h.style.display = "none"),
              ce.to(h, { opacity: 0, y: 49, duration: t, ease: r }),
              ce.to(d, { rotate: 0, duration: t, ease: r }),
              _r.from(c, { duration: t, ease: r });
          }
        }),
          n.setAttribute("data-isOpen", "true");
        const u = _r.getState(n, { props: "padding, backgroundColor" });
        n.classList.add("active"),
          (s.style.display = "block"),
          ce.to(s, { opacity: 1, y: 0, duration: t, ease: r }),
          ce.to(a, { rotate: 180, duration: t, ease: r }),
          _r.from(u, { duration: t, ease: r });
      }
    });
  });
}
function qv() {
  new pa("#slider2", {
    type: "loop",
    perpage: 4,
    fixedWidth: rt ? "10rem" : "20rem",
    fixedHeight: rt ? "10rem" : "20rem",
    gap: "2rem",
    drag: !0,
    autoplay: !0,
    pauseOnFocus: !1,
    arrows: !1,
    pagination: !1,
    mediaQuery: "min",
    breakpoints: { 640: { perPage: 2 } },
  }).mount(),
    new pa("#slider1", {
      classes: {
        pagination: "splide__pagination pagination_element",
        page: "splide__pagination__page page_element",
      },
      type: "loop",
      perpage: 5,
      fixedWidth: rt ? "13rem" : "20rem",
      fixedHeight: rt ? "18rem" : "24rem",
      gap: rt ? "1.2rem" : "2rem",
      drag: !0,
      autoplay: !0,
      speed: 400,
      interval: 2e3,
      arrows: !1,
      pagination: !0,
    }).mount();
}
function jv() {
  const o = Sr(".leaf-shower"),
    e = 10,
    t = 100 - e,
    r = 10,
    i = 90,
    n = [
      "https://team-nkg-reimagine-round1.vercel.app/icons/leaf/1.svg",
      "https://team-nkg-reimagine-round1.vercel.app/icons/leaf/1.svg",
      "https://team-nkg-reimagine-round1.vercel.app/icons/leaf/1.svg",
    ],
    s = ce.utils.random(n, !0),
    a = ce.utils.random(-90, 90, !0),
    l = ce.utils.random(0.8, 1.1, !0),
    u = ce.utils.random(-t, t, !0),
    f = ce.utils.random(-t, t, !0),
    h = ce.utils.random(1, 4, !0);
  window.addEventListener("click", (c) => {
    for (let g = 0; g < h(); g++) d(c);
  });
  function d(c) {
    let g = u() + e,
      p = f() + e;
    const m = s(),
      v = document.createElement("img");
    (v.src = m),
      ce.set(v, {
        position: "absolute",
        left: c.x + 5,
        top: c.y,
        transformOrigin: "top center",
        rotation: a(),
        scale: l(),
      }),
      ce
        .timeline({ onComplete: () => v.remove() })
        .from(v, { opacity: 0, duration: 0.01 })
        .to(v, { x: g, y: p, scale: "-=0.4", duration: 1 }, 0)
        .to(v, { opacity: 0, duration: 0.4 }, "-=0.4")
        .fromTo(
          v,
          { left: `-=${r}`, top: `-=${r}`, rotation: `-=${i}` },
          {
            left: `+=${r}`,
            top: `+=${r}`,
            rotation: `+=${i}`,
            duration: 0.5,
            repeat: 2,
            yoyoEase: "power1.out",
          },
          0.1
        ),
      o.appendChild(v);
  }
}
function Kv() {
  Na(".infinite-mover").forEach((e) => {
    const t = e.getAttribute("data-direction");
    if (t == 0) return;
    const r = t == 1;
    ce.fromTo(
      e,
      { xPercent: r ? 0 : -50 },
      { xPercent: r ? -50 : 0, repeat: -1, ease: "none", duration: 10 }
    );
  });
}
function Jv() {
  Na(".zoom-image-on-scroll").forEach((e) => {
    ce.to(e, {
      scale: 1.4,
      ease: "none",
      scrollTrigger: { trigger: e, scrub: !0 },
    });
  });
}
