var Zt = Object.defineProperty;
var er = (e, t, r) =>
  t in e
    ? Zt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var k = (e, t, r) => (er(e, typeof t != "symbol" ? t + "" : t, r), r),
  Oe = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  };
var a = (e, t, r) => (
    Oe(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  b = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  g = (e, t, r, s) => (
    Oe(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r
  );
var xe = (e, t, r, s) => ({
    set _(n) {
      g(e, t, n, r);
    },
    get _() {
      return a(e, t, s);
    },
  }),
  R = (e, t, r) => (Oe(e, t, "access private method"), r);
import { j as ze } from "./jsx-dev-runtime-BETcGmrp.js";
import { b as tr, j as Lt } from "./preview-CJIjO9RJ.js";
import { r as Pt } from "./index-BdMw_Ax9.js";
import { b as rr } from "./api.esm-CEpbZOGc.js";
import { c as ye, t as sr } from "./utils-Dyyo_Bbn.js";
import "./mapValues-ChqGHMta.js";
import "./index-BwQhoTO9.js";
import "./isPlainObject-CqtoKmPc.js";
import "./index-C-I6vmrZ.js";
import "./index-DrFu-skq.js";
const nr = (e) => (t) => {
  const { themes: r = [], selectedTheme: s } = tr(),
    n = r.find(({ name: i }) => !!s && i === s);
  return Lt.jsx(e, {
    theme: n == null ? void 0 : n.themeObject,
    children: t(),
  });
};
var ir = /(%?)(%([sdijo]))/g;
function or(e, t) {
  switch (t) {
    case "s":
      return e;
    case "d":
    case "i":
      return Number(e);
    case "j":
      return JSON.stringify(e);
    case "o": {
      if (typeof e == "string") return e;
      const r = JSON.stringify(e);
      return r === "{}" || r === "[]" || /^\[object .+?\]$/.test(r) ? e : r;
    }
  }
}
function Be(e, ...t) {
  if (t.length === 0) return e;
  let r = 0,
    s = e.replace(ir, (n, i, o, l) => {
      const u = t[r],
        c = or(u, l);
      return i ? n : (r++, c);
    });
  return (
    r < t.length && (s += ` ${t.slice(r).join(" ")}`),
    (s = s.replace(/%{2,2}/g, "%")),
    s
  );
}
var ar = 2;
function ur(e) {
  if (!e.stack) return;
  const t = e.stack.split(`
`);
  t.splice(1, ar),
    (e.stack = t.join(`
`));
}
var lr = class extends Error {
    constructor(t, ...r) {
      super(t),
        (this.message = t),
        (this.name = "Invariant Violation"),
        (this.message = Be(t, ...r)),
        ur(this);
    }
  },
  Me = (e, t, ...r) => {
    if (!e) throw new lr(t, ...r);
  };
Me.as = (e, t, r, ...s) => {
  if (!t) {
    const n = s.length === 0 ? r : Be(r, s);
    let i;
    try {
      i = Reflect.construct(e, [n]);
    } catch {
      i = e(n);
    }
    throw i;
  }
};
const cr = "[MSW]";
function Ne(e, ...t) {
  const r = Be(e, ...t);
  return `${cr} ${r}`;
}
function hr(e, ...t) {
  console.warn(Ne(e, ...t));
}
function dr(e, ...t) {
  console.error(Ne(e, ...t));
}
const P = { formatMessage: Ne, warn: hr, error: dr },
  fr = /[\/\\]msw[\/\\]src[\/\\](.+)/,
  pr =
    /(node_modules)?[\/\\]lib[\/\\](core|browser|node|native|iife)[\/\\]|^[^\/\\]*$/;
function gr(e) {
  const t = e.stack;
  if (!t) return;
  const s = t
    .split(
      `
`
    )
    .slice(1)
    .find((i) => !(fr.test(i) || pr.test(i)));
  return s
    ? s.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "")
    : void 0;
}
function mr(e) {
  return e ? typeof e[Symbol.iterator] == "function" : !1;
}
const be = class be {
  constructor(t) {
    k(this, "info");
    k(this, "isUsed");
    k(this, "resolver");
    k(this, "resolverGenerator");
    k(this, "resolverGeneratorResult");
    k(this, "options");
    (this.resolver = t.resolver), (this.options = t.options);
    const r = gr(new Error());
    (this.info = { ...t.info, callFrame: r }), (this.isUsed = !1);
  }
  async parse(t) {
    return {};
  }
  async test(t) {
    const r = await this.parse({
      request: t.request,
      resolutionContext: t.resolutionContext,
    });
    return this.predicate({
      request: t.request,
      parsedResult: r,
      resolutionContext: t.resolutionContext,
    });
  }
  extendResolverArgs(t) {
    return {};
  }
  cloneRequestOrGetFromCache(t) {
    const r = be.cache.get(t);
    if (typeof r < "u") return r;
    const s = t.clone();
    return be.cache.set(t, s), s;
  }
  async run(t) {
    var d, p;
    if (this.isUsed && (d = this.options) != null && d.once) return null;
    const r = this.cloneRequestOrGetFromCache(t.request),
      s = await this.parse({
        request: t.request,
        resolutionContext: t.resolutionContext,
      });
    if (
      !this.predicate({
        request: t.request,
        parsedResult: s,
        resolutionContext: t.resolutionContext,
      }) ||
      (this.isUsed && (p = this.options) != null && p.once)
    )
      return null;
    this.isUsed = !0;
    const i = this.wrapResolver(this.resolver),
      o = this.extendResolverArgs({ request: t.request, parsedResult: s }),
      u = await i({ ...o, requestId: t.requestId, request: t.request }).catch(
        (h) => {
          if (h instanceof Response) return h;
          throw h;
        }
      );
    return this.createExecutionResult({
      request: r,
      requestId: t.requestId,
      response: u,
      parsedResult: s,
    });
  }
  wrapResolver(t) {
    return async (r) => {
      const s = this.resolverGenerator || (await t(r));
      if (mr(s)) {
        this.isUsed = !1;
        const { value: n, done: i } = s[Symbol.iterator]().next(),
          o = await n;
        return (
          i && (this.isUsed = !0),
          !o && i
            ? (Me(
                this.resolverGeneratorResult,
                "Failed to returned a previously stored generator response: the value is not a valid Response."
              ),
              this.resolverGeneratorResult.clone())
            : (this.resolverGenerator || (this.resolverGenerator = s),
              o &&
                (this.resolverGeneratorResult = o == null ? void 0 : o.clone()),
              o)
        );
      }
      return s;
    };
  }
  createExecutionResult(t) {
    return {
      handler: this,
      request: t.request,
      requestId: t.requestId,
      response: t.response,
      parsedResult: t.parsedResult,
    };
  }
};
k(be, "cache", new WeakMap());
let je = be;
var yr = async (e) => {
  try {
    return {
      error: null,
      data: await e().catch((r) => {
        throw r;
      }),
    };
  } catch (t) {
    return { error: t, data: null };
  }
};
const vr = async ({
  request: e,
  requestId: t,
  handlers: r,
  resolutionContext: s,
}) => {
  let n = null,
    i = null;
  for (const o of r)
    if (
      ((i = await o.run({ request: e, requestId: t, resolutionContext: s })),
      i !== null && (n = o),
      i != null && i.response)
    )
      break;
  return n
    ? {
        handler: n,
        parsedResult: i == null ? void 0 : i.parsedResult,
        response: i == null ? void 0 : i.response,
      }
    : null;
};
function br(e) {
  if (typeof location > "u") return e.toString();
  const t = e instanceof URL ? e : new URL(e);
  return t.origin === location.origin ? t.pathname : t.origin + t.pathname;
}
async function wr(e, t = "warn") {
  const r = new URL(e.url),
    s = br(r) + r.search,
    n = `intercepted a request without a matching request handler:

  • ${e.method} ${s}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`;
  function i(o) {
    switch (o) {
      case "error":
        throw (
          (P.error("Error: %s", n),
          new Error(
            P.formatMessage(
              'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
            )
          ))
        );
      case "warn": {
        P.warn("Warning: %s", n);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          P.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            o
          )
        );
    }
  }
  if (typeof t == "function") {
    t(e, { warning: i.bind(null, "warn"), error: i.bind(null, "error") });
    return;
  }
  r.protocol !== "file:" && i(t);
}
var Er = Object.create,
  Rt = Object.defineProperty,
  kr = Object.getOwnPropertyDescriptor,
  qt = Object.getOwnPropertyNames,
  Sr = Object.getPrototypeOf,
  Lr = Object.prototype.hasOwnProperty,
  Pr = (e, t) =>
    function () {
      return t || (0, e[qt(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Rr = (e, t, r, s) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of qt(t))
        !Lr.call(e, n) &&
          n !== r &&
          Rt(e, n, {
            get: () => t[n],
            enumerable: !(s = kr(t, n)) || s.enumerable,
          });
    return e;
  },
  qr = (e, t, r) => (
    (r = e != null ? Er(Sr(e)) : {}),
    Rr(
      t || !e || !e.__esModule
        ? Rt(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  xr = Pr({
    "node_modules/set-cookie-parser/lib/set-cookie.js"(e, t) {
      var r = { decodeValues: !0, map: !1, silent: !1 };
      function s(u) {
        return typeof u == "string" && !!u.trim();
      }
      function n(u, c) {
        var d = u.split(";").filter(s),
          p = d.shift(),
          h = i(p),
          f = h.name,
          m = h.value;
        c = c ? Object.assign({}, r, c) : r;
        try {
          m = c.decodeValues ? decodeURIComponent(m) : m;
        } catch (v) {
          console.error(
            "set-cookie-parser encountered an error while decoding a cookie with value '" +
              m +
              "'. Set options.decodeValues to false to disable this feature.",
            v
          );
        }
        var y = { name: f, value: m };
        return (
          d.forEach(function (v) {
            var w = v.split("="),
              L = w.shift().trimLeft().toLowerCase(),
              E = w.join("=");
            L === "expires"
              ? (y.expires = new Date(E))
              : L === "max-age"
              ? (y.maxAge = parseInt(E, 10))
              : L === "secure"
              ? (y.secure = !0)
              : L === "httponly"
              ? (y.httpOnly = !0)
              : L === "samesite"
              ? (y.sameSite = E)
              : (y[L] = E);
          }),
          y
        );
      }
      function i(u) {
        var c = "",
          d = "",
          p = u.split("=");
        return (
          p.length > 1 ? ((c = p.shift()), (d = p.join("="))) : (d = u),
          { name: c, value: d }
        );
      }
      function o(u, c) {
        if (((c = c ? Object.assign({}, r, c) : r), !u)) return c.map ? {} : [];
        if (u.headers)
          if (typeof u.headers.getSetCookie == "function")
            u = u.headers.getSetCookie();
          else if (u.headers["set-cookie"]) u = u.headers["set-cookie"];
          else {
            var d =
              u.headers[
                Object.keys(u.headers).find(function (h) {
                  return h.toLowerCase() === "set-cookie";
                })
              ];
            !d &&
              u.headers.cookie &&
              !c.silent &&
              console.warn(
                "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
              ),
              (u = d);
          }
        if (
          (Array.isArray(u) || (u = [u]),
          (c = c ? Object.assign({}, r, c) : r),
          c.map)
        ) {
          var p = {};
          return u.filter(s).reduce(function (h, f) {
            var m = n(f, c);
            return (h[m.name] = m), h;
          }, p);
        } else
          return u.filter(s).map(function (h) {
            return n(h, c);
          });
      }
      function l(u) {
        if (Array.isArray(u)) return u;
        if (typeof u != "string") return [];
        var c = [],
          d = 0,
          p,
          h,
          f,
          m,
          y;
        function v() {
          for (; d < u.length && /\s/.test(u.charAt(d)); ) d += 1;
          return d < u.length;
        }
        function w() {
          return (h = u.charAt(d)), h !== "=" && h !== ";" && h !== ",";
        }
        for (; d < u.length; ) {
          for (p = d, y = !1; v(); )
            if (((h = u.charAt(d)), h === ",")) {
              for (f = d, d += 1, v(), m = d; d < u.length && w(); ) d += 1;
              d < u.length && u.charAt(d) === "="
                ? ((y = !0), (d = m), c.push(u.substring(p, f)), (p = d))
                : (d = f + 1);
            } else d += 1;
          (!y || d >= u.length) && c.push(u.substring(p, u.length));
        }
        return c;
      }
      (t.exports = o),
        (t.exports.parse = o),
        (t.exports.parseString = n),
        (t.exports.splitCookiesString = l);
    },
  }),
  Ye = qr(xr()),
  ne = "MSW_COOKIE_STORE";
function Ze() {
  try {
    if (localStorage == null) return !1;
    const e = ne + "_test";
    return (
      localStorage.setItem(e, "test"),
      localStorage.getItem(e),
      localStorage.removeItem(e),
      !0
    );
  } catch {
    return !1;
  }
}
function et(e, t) {
  try {
    return e[t], !0;
  } catch {
    return !1;
  }
}
var Cr = class {
    constructor() {
      this.store = new Map();
    }
    add(e, t) {
      if (et(e, "credentials") && e.credentials === "omit") return;
      const r = new URL(e.url),
        s = t.headers.get("set-cookie");
      if (!s) return;
      const n = Date.now(),
        i = (0, Ye.parse)(s).map(({ maxAge: l, ...u }) => ({
          ...u,
          expires: l === void 0 ? u.expires : new Date(n + l * 1e3),
          maxAge: l,
        })),
        o = this.store.get(r.origin) || new Map();
      i.forEach((l) => {
        this.store.set(r.origin, o.set(l.name, l));
      });
    }
    get(e) {
      this.deleteExpiredCookies();
      const t = new URL(e.url),
        r = this.store.get(t.origin) || new Map();
      if (!et(e, "credentials")) return r;
      switch (e.credentials) {
        case "include":
          return (
            typeof document > "u" ||
              (0, Ye.parse)(document.cookie).forEach((n) => {
                r.set(n.name, n);
              }),
            r
          );
        case "same-origin":
          return r;
        default:
          return new Map();
      }
    }
    getAll() {
      return this.deleteExpiredCookies(), this.store;
    }
    deleteAll(e) {
      const t = new URL(e.url);
      this.store.delete(t.origin);
    }
    clear() {
      this.store.clear();
    }
    hydrate() {
      if (!Ze()) return;
      const e = localStorage.getItem(ne);
      if (e)
        try {
          JSON.parse(e).forEach(([r, s]) => {
            this.store.set(
              r,
              new Map(
                s.map(([n, { expires: i, ...o }]) => [
                  n,
                  i === void 0 ? o : { ...o, expires: new Date(i) },
                ])
              )
            );
          });
        } catch (t) {
          console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${ne}").

Stored value:
${localStorage.getItem(ne)}

Thrown exception:
${t}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`),
            localStorage.removeItem(ne);
        }
    }
    persist() {
      if (!Ze()) return;
      const e = Array.from(this.store.entries()).map(([t, r]) => [
        t,
        Array.from(r.entries()),
      ]);
      localStorage.setItem(ne, JSON.stringify(e));
    }
    deleteExpiredCookies() {
      const e = Date.now();
      this.store.forEach((t, r) => {
        t.forEach(({ expires: s, name: n }) => {
          s !== void 0 && s.getTime() <= e && t.delete(n);
        }),
          t.size === 0 && this.store.delete(r);
      });
    }
  },
  tt = new Cr();
function Mr(e, t) {
  tt.add({ ...e, url: e.url.toString() }, t), tt.persist();
}
async function xt(e, t, r, s, n, i) {
  var d, p, h, f, m, y;
  if (
    (n.emit("request:start", { request: e, requestId: t }),
    e.headers.get("x-msw-intention") === "bypass")
  ) {
    n.emit("request:end", { request: e, requestId: t }),
      (d = i == null ? void 0 : i.onPassthroughResponse) == null ||
        d.call(i, e);
    return;
  }
  const o = await yr(() =>
    vr({
      request: e,
      requestId: t,
      handlers: r,
      resolutionContext: i == null ? void 0 : i.resolutionContext,
    })
  );
  if (o.error)
    throw (
      (n.emit("unhandledException", {
        error: o.error,
        request: e,
        requestId: t,
      }),
      o.error)
    );
  if (!o.data) {
    await wr(e, s.onUnhandledRequest),
      n.emit("request:unhandled", { request: e, requestId: t }),
      n.emit("request:end", { request: e, requestId: t }),
      (p = i == null ? void 0 : i.onPassthroughResponse) == null ||
        p.call(i, e);
    return;
  }
  const { response: l } = o.data;
  if (!l) {
    n.emit("request:end", { request: e, requestId: t }),
      (h = i == null ? void 0 : i.onPassthroughResponse) == null ||
        h.call(i, e);
    return;
  }
  if (l.status === 302 && l.headers.get("x-msw-intention") === "passthrough") {
    n.emit("request:end", { request: e, requestId: t }),
      (f = i == null ? void 0 : i.onPassthroughResponse) == null ||
        f.call(i, e);
    return;
  }
  Mr(e, l), n.emit("request:match", { request: e, requestId: t });
  const u = o.data,
    c =
      ((m = i == null ? void 0 : i.transformResponse) == null
        ? void 0
        : m.call(i, l)) || l;
  return (
    (y = i == null ? void 0 : i.onMockedResponse) == null || y.call(i, c, u),
    n.emit("request:end", { request: e, requestId: t }),
    c
  );
}
function Tr(e) {
  return {
    status: e.status,
    statusText: e.statusText,
    headers: Object.fromEntries(e.headers.entries()),
  };
}
function rt(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function Ct(e, t) {
  return Object.entries(t).reduce((r, [s, n]) => {
    const i = r[s];
    return Array.isArray(i) && Array.isArray(n)
      ? ((r[s] = i.concat(n)), r)
      : rt(i) && rt(n)
      ? ((r[s] = Ct(i, n)), r)
      : ((r[s] = n), r);
  }, Object.assign({}, e));
}
var Ar = class extends Error {
    constructor(t, r, s) {
      super(
        `Possible EventEmitter memory leak detected. ${s} ${r.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
      ),
        (this.emitter = t),
        (this.type = r),
        (this.count = s),
        (this.name = "MaxListenersExceededWarning");
    }
  },
  Mt = class {
    static listenerCount(t, r) {
      return t.listenerCount(r);
    }
    constructor() {
      (this.events = new Map()),
        (this.maxListeners = Mt.defaultMaxListeners),
        (this.hasWarnedAboutPotentialMemoryLeak = !1);
    }
    _emitInternalEvent(t, r, s) {
      this.emit(t, r, s);
    }
    _getListeners(t) {
      return Array.prototype.concat.apply([], this.events.get(t)) || [];
    }
    _removeListener(t, r) {
      const s = t.indexOf(r);
      return s > -1 && t.splice(s, 1), [];
    }
    _wrapOnceListener(t, r) {
      const s = (...n) => (this.removeListener(t, s), r.apply(this, n));
      return Object.defineProperty(s, "name", { value: r.name }), s;
    }
    setMaxListeners(t) {
      return (this.maxListeners = t), this;
    }
    getMaxListeners() {
      return this.maxListeners;
    }
    eventNames() {
      return Array.from(this.events.keys());
    }
    emit(t, ...r) {
      const s = this._getListeners(t);
      return (
        s.forEach((n) => {
          n.apply(this, r);
        }),
        s.length > 0
      );
    }
    addListener(t, r) {
      this._emitInternalEvent("newListener", t, r);
      const s = this._getListeners(t).concat(r);
      if (
        (this.events.set(t, s),
        this.maxListeners > 0 &&
          this.listenerCount(t) > this.maxListeners &&
          !this.hasWarnedAboutPotentialMemoryLeak)
      ) {
        this.hasWarnedAboutPotentialMemoryLeak = !0;
        const n = new Ar(this, t, this.listenerCount(t));
        console.warn(n);
      }
      return this;
    }
    on(t, r) {
      return this.addListener(t, r);
    }
    once(t, r) {
      return this.addListener(t, this._wrapOnceListener(t, r));
    }
    prependListener(t, r) {
      const s = this._getListeners(t);
      if (s.length > 0) {
        const n = [r].concat(s);
        this.events.set(t, n);
      } else this.events.set(t, s.concat(r));
      return this;
    }
    prependOnceListener(t, r) {
      return this.prependListener(t, this._wrapOnceListener(t, r));
    }
    removeListener(t, r) {
      const s = this._getListeners(t);
      return (
        s.length > 0 &&
          (this._removeListener(s, r),
          this.events.set(t, s),
          this._emitInternalEvent("removeListener", t, r)),
        this
      );
    }
    off(t, r) {
      return this.removeListener(t, r);
    }
    removeAllListeners(t) {
      return t ? this.events.delete(t) : this.events.clear(), this;
    }
    listeners(t) {
      return Array.from(this._getListeners(t));
    }
    listenerCount(t) {
      return this._getListeners(t).length;
    }
    rawListeners(t) {
      return this.listeners(t);
    }
  },
  Ue = Mt;
Ue.defaultMaxListeners = 10;
function Ir(e, t) {
  const r = e.emit;
  if (r._isPiped) return;
  const s = function (i, ...o) {
    return t.emit(i, ...o), r.call(this, i, ...o);
  };
  (s._isPiped = !0), (e.emit = s);
}
function _r(e) {
  const t = [...e];
  return Object.freeze(t), t;
}
class Or {
  constructor() {
    k(this, "subscriptions", []);
  }
  async dispose() {
    await Promise.all(this.subscriptions.map((t) => t()));
  }
}
class Fr {
  constructor(t) {
    k(this, "handlers");
    (this.initialHandlers = t), (this.handlers = [...t]);
  }
  prepend(t) {
    this.handlers.unshift(...t);
  }
  reset(t) {
    this.handlers = t.length > 0 ? [...t] : [...this.initialHandlers];
  }
  currentHandlers() {
    return this.handlers;
  }
}
class Dr extends Or {
  constructor(...r) {
    super();
    k(this, "handlersController");
    k(this, "emitter");
    k(this, "publicEmitter");
    k(this, "events");
    Me(
      this.validateHandlers(r),
      P.formatMessage(
        "Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?"
      )
    ),
      (this.handlersController = new Fr(r)),
      (this.emitter = new Ue()),
      (this.publicEmitter = new Ue()),
      Ir(this.emitter, this.publicEmitter),
      (this.events = this.createLifeCycleEvents()),
      this.subscriptions.push(() => {
        this.emitter.removeAllListeners(),
          this.publicEmitter.removeAllListeners();
      });
  }
  validateHandlers(r) {
    return r.every((s) => !Array.isArray(s));
  }
  use(...r) {
    Me(
      this.validateHandlers(r),
      P.formatMessage(
        'Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?'
      )
    ),
      this.handlersController.prepend(r);
  }
  restoreHandlers() {
    this.handlersController.currentHandlers().forEach((r) => {
      r.isUsed = !1;
    });
  }
  resetHandlers(...r) {
    this.handlersController.reset(r);
  }
  listHandlers() {
    return _r(this.handlersController.currentHandlers());
  }
  createLifeCycleEvents() {
    return {
      on: (...r) => this.publicEmitter.on(...r),
      removeListener: (...r) => this.publicEmitter.removeListener(...r),
      removeAllListeners: (...r) => this.publicEmitter.removeAllListeners(...r),
    };
  }
}
var jr = {},
  Ur = /(%?)(%([sdijo]))/g;
function Hr(e, t) {
  switch (t) {
    case "s":
      return e;
    case "d":
    case "i":
      return Number(e);
    case "j":
      return JSON.stringify(e);
    case "o": {
      if (typeof e == "string") return e;
      const r = JSON.stringify(e);
      return r === "{}" || r === "[]" || /^\[object .+?\]$/.test(r) ? e : r;
    }
  }
}
function Re(e, ...t) {
  if (t.length === 0) return e;
  let r = 0,
    s = e.replace(Ur, (n, i, o, l) => {
      const u = t[r],
        c = Hr(u, l);
      return i ? n : (r++, c);
    });
  return (
    r < t.length && (s += ` ${t.slice(r).join(" ")}`),
    (s = s.replace(/%{2,2}/g, "%")),
    s
  );
}
var Wr = 2;
function $r(e) {
  if (!e.stack) return;
  const t = e.stack.split(`
`);
  t.splice(1, Wr),
    (e.stack = t.join(`
`));
}
var Gr = class extends Error {
    constructor(e, ...t) {
      super(e),
        (this.message = e),
        (this.name = "Invariant Violation"),
        (this.message = Re(e, ...t)),
        $r(this);
    }
  },
  re = (e, t, ...r) => {
    if (!e) throw new Gr(t, ...r);
  };
re.as = (e, t, r, ...s) => {
  if (!t) {
    const n = s.length === 0 ? r : Re(r, s);
    let i;
    try {
      i = Reflect.construct(e, [n]);
    } catch {
      i = e(n);
    }
    throw i;
  }
};
function Qe() {
  if (typeof navigator < "u" && navigator.product === "ReactNative") return !0;
  if (typeof process < "u") {
    const e = process.type;
    return e === "renderer" || e === "worker"
      ? !1
      : !!(process.versions && process.versions.node);
  }
  return !1;
}
var Ke = async (e) => {
  try {
    return {
      error: null,
      data: await e().catch((r) => {
        throw r;
      }),
    };
  } catch (t) {
    return { error: t, data: null };
  }
};
function Br(e) {
  return new URL(e, location.href).href;
}
function Fe(e, t, r) {
  return (
    [e.active, e.installing, e.waiting]
      .filter((o) => o != null)
      .find((o) => r(o.scriptURL, t)) || null
  );
}
var Nr = async (e, t = {}, r) => {
  const s = Br(e),
    n = await navigator.serviceWorker
      .getRegistrations()
      .then((l) => l.filter((u) => Fe(u, s, r)));
  !navigator.serviceWorker.controller && n.length > 0 && location.reload();
  const [i] = n;
  if (i) return i.update().then(() => [Fe(i, s, r), i]);
  const o = await Ke(async () => {
    const l = await navigator.serviceWorker.register(e, t);
    return [Fe(l, s, r), l];
  });
  if (o.error) {
    if (o.error.message.includes("(404)")) {
      const u = new URL((t == null ? void 0 : t.scope) || "/", location.href);
      throw new Error(
        P.formatMessage(`Failed to register a Service Worker for scope ('${u.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      P.formatMessage(
        `Failed to register the Service Worker:

%s`,
        o.error.message
      )
    );
  }
  return o.data;
};
function Tt(e = {}) {
  if (e.quiet) return;
  const t = e.message || "Mocking enabled.";
  console.groupCollapsed(
    `%c${P.formatMessage(t)}`,
    "color:orangered;font-weight:bold;"
  ),
    console.log(
      "%cDocumentation: %chttps://mswjs.io/docs",
      "font-weight:bold",
      "font-weight:normal"
    ),
    console.log("Found an issue? https://github.com/mswjs/msw/issues"),
    e.workerUrl && console.log("Worker script URL:", e.workerUrl),
    e.workerScope && console.log("Worker scope:", e.workerScope),
    console.groupEnd();
}
async function Qr(e, t) {
  var r, s;
  if (
    (e.workerChannel.send("MOCK_ACTIVATE"),
    await e.events.once("MOCKING_ENABLED"),
    e.isMockingEnabled)
  ) {
    P.warn(
      'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
    );
    return;
  }
  (e.isMockingEnabled = !0),
    Tt({
      quiet: t.quiet,
      workerScope: (r = e.registration) == null ? void 0 : r.scope,
      workerUrl: (s = e.worker) == null ? void 0 : s.scriptURL,
    });
}
var Kr = class {
  constructor(e) {
    this.port = e;
  }
  postMessage(e, ...t) {
    const [r, s] = t;
    this.port.postMessage({ type: e, data: r }, { transfer: s });
  }
};
function Xr(e) {
  if (!["HEAD", "GET"].includes(e.method)) return e.body;
}
function Vr(e) {
  return new Request(e.url, { ...e, body: Xr(e) });
}
var Jr = (e, t) => async (r, s) => {
  const n = new Kr(r.ports[0]),
    i = s.payload.id,
    o = Vr(s.payload),
    l = o.clone(),
    u = o.clone();
  je.cache.set(o, u), e.requests.set(i, u);
  try {
    await xt(o, i, e.getRequestHandlers(), t, e.emitter, {
      onPassthroughResponse() {
        n.postMessage("PASSTHROUGH");
      },
      async onMockedResponse(c, { handler: d, parsedResult: p }) {
        const h = c.clone(),
          f = c.clone(),
          m = Tr(c);
        if (e.supports.readableStreamTransfer) {
          const y = c.body;
          n.postMessage("MOCK_RESPONSE", { ...m, body: y }, y ? [y] : void 0);
        } else {
          const y = c.body === null ? null : await h.arrayBuffer();
          n.postMessage("MOCK_RESPONSE", { ...m, body: y });
        }
        t.quiet ||
          e.emitter.once("response:mocked", () => {
            d.log({ request: l, response: f, parsedResult: p });
          });
      },
    });
  } catch (c) {
    c instanceof Error &&
      (P.error(
        `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
        o.method,
        o.url,
        c.stack ?? c
      ),
      n.postMessage("MOCK_RESPONSE", {
        status: 500,
        statusText: "Request Handler Error",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: c.name,
          message: c.message,
          stack: c.stack,
        }),
      }));
  }
};
async function zr(e) {
  e.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload: t } = await e.events.once("INTEGRITY_CHECK_RESPONSE");
  t.checksum !== "26357c79639bfa20d64c0efca2a87423" &&
    P.warn(`The currently registered Service Worker has been generated by a different version of MSW (${t.packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`);
}
var Yr = new TextEncoder();
function Zr(e) {
  return Yr.encode(e);
}
function es(e, t) {
  return new TextDecoder(t).decode(e);
}
function ts(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
var rs = new Set([101, 103, 204, 205, 304]);
function At(e) {
  return rs.has(e);
}
var ie = Symbol("isPatchedModule"),
  ss = Object.defineProperty,
  ns = (e, t) => {
    for (var r in t) ss(e, r, { get: t[r], enumerable: !0 });
  },
  He = {};
ns(He, {
  blue: () => os,
  gray: () => We,
  green: () => us,
  red: () => as,
  yellow: () => is,
});
function is(e) {
  return `\x1B[33m${e}\x1B[0m`;
}
function os(e) {
  return `\x1B[34m${e}\x1B[0m`;
}
function We(e) {
  return `\x1B[90m${e}\x1B[0m`;
}
function as(e) {
  return `\x1B[31m${e}\x1B[0m`;
}
function us(e) {
  return `\x1B[32m${e}\x1B[0m`;
}
var Ae = Qe(),
  It = class {
    constructor(e) {
      k(this, "prefix");
      (this.name = e), (this.prefix = `[${this.name}]`);
      const t = st("DEBUG"),
        r = st("LOG_LEVEL");
      t === "1" || t === "true" || (typeof t < "u" && this.name.startsWith(t))
        ? ((this.debug = ve(r, "debug") ? U : this.debug),
          (this.info = ve(r, "info") ? U : this.info),
          (this.success = ve(r, "success") ? U : this.success),
          (this.warning = ve(r, "warning") ? U : this.warning),
          (this.error = ve(r, "error") ? U : this.error))
        : ((this.info = U),
          (this.success = U),
          (this.warning = U),
          (this.error = U),
          (this.only = U));
    }
    extend(e) {
      return new It(`${this.name}:${e}`);
    }
    debug(e, ...t) {
      this.logEntry({
        level: "debug",
        message: We(e),
        positionals: t,
        prefix: this.prefix,
        colors: { prefix: "gray" },
      });
    }
    info(e, ...t) {
      this.logEntry({
        level: "info",
        message: e,
        positionals: t,
        prefix: this.prefix,
        colors: { prefix: "blue" },
      });
      const r = new ls();
      return (s, ...n) => {
        r.measure(),
          this.logEntry({
            level: "info",
            message: `${s} ${We(`${r.deltaTime}ms`)}`,
            positionals: n,
            prefix: this.prefix,
            colors: { prefix: "blue" },
          });
      };
    }
    success(e, ...t) {
      this.logEntry({
        level: "info",
        message: e,
        positionals: t,
        prefix: `✔ ${this.prefix}`,
        colors: { timestamp: "green", prefix: "green" },
      });
    }
    warning(e, ...t) {
      this.logEntry({
        level: "warning",
        message: e,
        positionals: t,
        prefix: `⚠ ${this.prefix}`,
        colors: { timestamp: "yellow", prefix: "yellow" },
      });
    }
    error(e, ...t) {
      this.logEntry({
        level: "error",
        message: e,
        positionals: t,
        prefix: `✖ ${this.prefix}`,
        colors: { timestamp: "red", prefix: "red" },
      });
    }
    only(e) {
      e();
    }
    createEntry(e, t) {
      return { timestamp: new Date(), level: e, message: t };
    }
    logEntry(e) {
      const {
          level: t,
          message: r,
          prefix: s,
          colors: n,
          positionals: i = [],
        } = e,
        o = this.createEntry(t, r),
        l = (n == null ? void 0 : n.timestamp) || "gray",
        u = (n == null ? void 0 : n.prefix) || "gray",
        c = { timestamp: He[l], prefix: He[u] };
      this.getWriter(t)(
        [c.timestamp(this.formatTimestamp(o.timestamp))]
          .concat(s != null ? c.prefix(s) : [])
          .concat(nt(r))
          .join(" "),
        ...i.map(nt)
      );
    }
    formatTimestamp(e) {
      return `${e.toLocaleTimeString("en-GB")}:${e.getMilliseconds()}`;
    }
    getWriter(e) {
      switch (e) {
        case "debug":
        case "success":
        case "info":
          return cs;
        case "warning":
          return hs;
        case "error":
          return ds;
      }
    }
  },
  ls = class {
    constructor() {
      k(this, "startTime");
      k(this, "endTime");
      k(this, "deltaTime");
      this.startTime = performance.now();
    }
    measure() {
      this.endTime = performance.now();
      const e = this.endTime - this.startTime;
      this.deltaTime = e.toFixed(2);
    }
  },
  U = () => {};
function cs(e, ...t) {
  if (Ae) {
    process.stdout.write(
      Re(e, ...t) +
        `
`
    );
    return;
  }
  console.log(e, ...t);
}
function hs(e, ...t) {
  if (Ae) {
    process.stderr.write(
      Re(e, ...t) +
        `
`
    );
    return;
  }
  console.warn(e, ...t);
}
function ds(e, ...t) {
  if (Ae) {
    process.stderr.write(
      Re(e, ...t) +
        `
`
    );
    return;
  }
  console.error(e, ...t);
}
function st(e) {
  var t;
  return Ae ? jr[e] : (t = globalThis[e]) == null ? void 0 : t.toString();
}
function ve(e, t) {
  return e !== void 0 && e !== t;
}
function nt(e) {
  return typeof e > "u"
    ? "undefined"
    : e === null
    ? "null"
    : typeof e == "string"
    ? e
    : typeof e == "object"
    ? JSON.stringify(e)
    : e.toString();
}
var fs = class extends Error {
    constructor(e, t, r) {
      super(
        `Possible EventEmitter memory leak detected. ${r} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
      ),
        (this.emitter = e),
        (this.type = t),
        (this.count = r),
        (this.name = "MaxListenersExceededWarning");
    }
  },
  _t = class {
    static listenerCount(e, t) {
      return e.listenerCount(t);
    }
    constructor() {
      (this.events = new Map()),
        (this.maxListeners = _t.defaultMaxListeners),
        (this.hasWarnedAboutPotentialMemoryLeak = !1);
    }
    _emitInternalEvent(e, t, r) {
      this.emit(e, t, r);
    }
    _getListeners(e) {
      return Array.prototype.concat.apply([], this.events.get(e)) || [];
    }
    _removeListener(e, t) {
      const r = e.indexOf(t);
      return r > -1 && e.splice(r, 1), [];
    }
    _wrapOnceListener(e, t) {
      const r = (...s) => (this.removeListener(e, r), t.apply(this, s));
      return Object.defineProperty(r, "name", { value: t.name }), r;
    }
    setMaxListeners(e) {
      return (this.maxListeners = e), this;
    }
    getMaxListeners() {
      return this.maxListeners;
    }
    eventNames() {
      return Array.from(this.events.keys());
    }
    emit(e, ...t) {
      const r = this._getListeners(e);
      return (
        r.forEach((s) => {
          s.apply(this, t);
        }),
        r.length > 0
      );
    }
    addListener(e, t) {
      this._emitInternalEvent("newListener", e, t);
      const r = this._getListeners(e).concat(t);
      if (
        (this.events.set(e, r),
        this.maxListeners > 0 &&
          this.listenerCount(e) > this.maxListeners &&
          !this.hasWarnedAboutPotentialMemoryLeak)
      ) {
        this.hasWarnedAboutPotentialMemoryLeak = !0;
        const s = new fs(this, e, this.listenerCount(e));
        console.warn(s);
      }
      return this;
    }
    on(e, t) {
      return this.addListener(e, t);
    }
    once(e, t) {
      return this.addListener(e, this._wrapOnceListener(e, t));
    }
    prependListener(e, t) {
      const r = this._getListeners(e);
      if (r.length > 0) {
        const s = [t].concat(r);
        this.events.set(e, s);
      } else this.events.set(e, r.concat(t));
      return this;
    }
    prependOnceListener(e, t) {
      return this.prependListener(e, this._wrapOnceListener(e, t));
    }
    removeListener(e, t) {
      const r = this._getListeners(e);
      return (
        r.length > 0 &&
          (this._removeListener(r, t),
          this.events.set(e, r),
          this._emitInternalEvent("removeListener", e, t)),
        this
      );
    }
    off(e, t) {
      return this.removeListener(e, t);
    }
    removeAllListeners(e) {
      return e ? this.events.delete(e) : this.events.clear(), this;
    }
    listeners(e) {
      return Array.from(this._getListeners(e));
    }
    listenerCount(e) {
      return this._getListeners(e).length;
    }
    rawListeners(e) {
      return this.listeners(e);
    }
  },
  Ot = _t;
Ot.defaultMaxListeners = 10;
var ps = "x-interceptors-internal-request-id";
function it(e) {
  return globalThis[e] || void 0;
}
function gs(e, t) {
  globalThis[e] = t;
}
function ms(e) {
  delete globalThis[e];
}
var Xe = class {
  constructor(e) {
    (this.symbol = e),
      (this.readyState = "INACTIVE"),
      (this.emitter = new Ot()),
      (this.subscriptions = []),
      (this.logger = new It(e.description)),
      this.emitter.setMaxListeners(0),
      this.logger.info("constructing the interceptor...");
  }
  checkEnvironment() {
    return !0;
  }
  apply() {
    const e = this.logger.extend("apply");
    if (
      (e.info("applying the interceptor..."), this.readyState === "APPLIED")
    ) {
      e.info("intercepted already applied!");
      return;
    }
    if (!this.checkEnvironment()) {
      e.info("the interceptor cannot be applied in this environment!");
      return;
    }
    this.readyState = "APPLYING";
    const r = this.getInstance();
    if (r) {
      e.info("found a running instance, reusing..."),
        (this.on = (s, n) => (
          e.info('proxying the "%s" listener', s),
          r.emitter.addListener(s, n),
          this.subscriptions.push(() => {
            r.emitter.removeListener(s, n),
              e.info('removed proxied "%s" listener!', s);
          }),
          this
        )),
        (this.readyState = "APPLIED");
      return;
    }
    e.info("no running instance found, setting up a new instance..."),
      this.setup(),
      this.setInstance(),
      (this.readyState = "APPLIED");
  }
  setup() {}
  on(e, t) {
    const r = this.logger.extend("on");
    return this.readyState === "DISPOSING" || this.readyState === "DISPOSED"
      ? (r.info("cannot listen to events, already disposed!"), this)
      : (r.info('adding "%s" event listener:', e, t),
        this.emitter.on(e, t),
        this);
  }
  once(e, t) {
    return this.emitter.once(e, t), this;
  }
  off(e, t) {
    return this.emitter.off(e, t), this;
  }
  removeAllListeners(e) {
    return this.emitter.removeAllListeners(e), this;
  }
  dispose() {
    const e = this.logger.extend("dispose");
    if (this.readyState === "DISPOSED") {
      e.info("cannot dispose, already disposed!");
      return;
    }
    if (
      (e.info("disposing the interceptor..."),
      (this.readyState = "DISPOSING"),
      !this.getInstance())
    ) {
      e.info("no interceptors running, skipping dispose...");
      return;
    }
    if (
      (this.clearInstance(),
      e.info("global symbol deleted:", it(this.symbol)),
      this.subscriptions.length > 0)
    ) {
      e.info("disposing of %d subscriptions...", this.subscriptions.length);
      for (const t of this.subscriptions) t();
      (this.subscriptions = []),
        e.info("disposed of all subscriptions!", this.subscriptions.length);
    }
    this.emitter.removeAllListeners(),
      e.info("destroyed the listener!"),
      (this.readyState = "DISPOSED");
  }
  getInstance() {
    var e;
    const t = it(this.symbol);
    return (
      this.logger.info(
        "retrieved global instance:",
        (e = t == null ? void 0 : t.constructor) == null ? void 0 : e.name
      ),
      t
    );
  }
  setInstance() {
    gs(this.symbol, this),
      this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    ms(this.symbol),
      this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function Ft() {
  return Math.random().toString(16).slice(2);
}
var $e = class extends Xe {
  constructor(e) {
    ($e.symbol = Symbol(e.name)),
      super($e.symbol),
      (this.interceptors = e.interceptors);
  }
  setup() {
    const e = this.logger.extend("setup");
    e.info("applying all %d interceptors...", this.interceptors.length);
    for (const t of this.interceptors)
      e.info('applying "%s" interceptor...', t.constructor.name),
        t.apply(),
        e.info("adding interceptor dispose subscription"),
        this.subscriptions.push(() => t.dispose());
  }
  on(e, t) {
    for (const r of this.interceptors) r.on(e, t);
    return this;
  }
  once(e, t) {
    for (const r of this.interceptors) r.once(e, t);
    return this;
  }
  off(e, t) {
    for (const r of this.interceptors) r.off(e, t);
    return this;
  }
  removeAllListeners(e) {
    for (const t of this.interceptors) t.removeAllListeners(e);
    return this;
  }
};
function ys(e) {
  return (t, r) => {
    var l;
    const { payload: s } = r,
      { requestId: n } = s,
      i = e.requests.get(n);
    if ((e.requests.delete(n), (l = s.type) != null && l.includes("opaque")))
      return;
    const o =
      s.status === 0
        ? Response.error()
        : new Response(At(s.status) ? null : s.body, s);
    o.url ||
      Object.defineProperty(o, "url", {
        value: i.url,
        enumerable: !0,
        writable: !1,
      }),
      e.emitter.emit(
        s.isMockedResponse ? "response:mocked" : "response:bypass",
        { response: o, request: i, requestId: s.requestId }
      );
  };
}
function vs(e, t) {
  !(t != null && t.quiet) &&
    !location.href.startsWith(e.scope) &&
    P.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
}
var bs = (e) =>
  function (r, s) {
    return (async () => {
      e.events.removeAllListeners(),
        e.workerChannel.on("REQUEST", Jr(e, r)),
        e.workerChannel.on("RESPONSE", ys(e));
      const o = await Nr(
          r.serviceWorker.url,
          r.serviceWorker.options,
          r.findWorker
        ),
        [l, u] = o;
      if (!l) {
        const c =
          s != null && s.findWorker
            ? P.formatMessage(
                `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
                r.serviceWorker.url
              )
            : P.formatMessage(
                `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
                r.serviceWorker.url,
                location.host
              );
        throw new Error(c);
      }
      return (
        (e.worker = l),
        (e.registration = u),
        e.events.addListener(window, "beforeunload", () => {
          l.state !== "redundant" && e.workerChannel.send("CLIENT_CLOSED"),
            window.clearInterval(e.keepAliveInterval);
        }),
        await zr(e).catch((c) => {
          P.error(
            "Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues), including the original error below."
          ),
            console.error(c);
        }),
        (e.keepAliveInterval = window.setInterval(
          () => e.workerChannel.send("KEEPALIVE_REQUEST"),
          5e3
        )),
        vs(u, e.startOptions),
        u
      );
    })().then(async (o) => {
      const l = o.installing || o.waiting;
      return (
        l &&
          (await new Promise((u) => {
            l.addEventListener("statechange", () => {
              if (l.state === "activated") return u();
            });
          })),
        await Qr(e, r).catch((u) => {
          throw new Error(
            `Failed to enable mocking: ${u == null ? void 0 : u.message}`
          );
        }),
        o
      );
    });
  };
function Dt(e = {}) {
  e.quiet ||
    console.log(
      `%c${P.formatMessage("Mocking disabled.")}`,
      "color:orangered;font-weight:bold;"
    );
}
var ws = (e) =>
    function () {
      var r;
      if (!e.isMockingEnabled) {
        P.warn(
          'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
        );
        return;
      }
      e.workerChannel.send("MOCK_DEACTIVATE"),
        (e.isMockingEnabled = !1),
        window.clearInterval(e.keepAliveInterval),
        Dt({ quiet: (r = e.startOptions) == null ? void 0 : r.quiet });
    },
  Es = {
    serviceWorker: { url: "/ng-notes/mockServiceWorker.js", options: null },
    quiet: !1,
    waitUntilReady: !0,
    onUnhandledRequest: "warn",
    findWorker(e, t) {
      return e === t;
    },
  };
function ks() {
  const e = (t, r) => {
    (e.state = "pending"),
      (e.resolve = (s) => {
        if (e.state !== "pending") return;
        e.result = s;
        const n = (i) => ((e.state = "fulfilled"), i);
        return t(s instanceof Promise ? s : Promise.resolve(s).then(n));
      }),
      (e.reject = (s) => {
        if (e.state === "pending")
          return (
            queueMicrotask(() => {
              e.state = "rejected";
            }),
            r((e.rejectionReason = s))
          );
      });
  };
  return e;
}
var N,
  oe,
  Ce,
  gt,
  jt =
    ((gt = class extends Promise {
      constructor(t = null) {
        const r = ks();
        super((s, n) => {
          r(s, n), t == null || t(r.resolve, r.reject);
        });
        b(this, oe);
        b(this, N, void 0);
        k(this, "resolve");
        k(this, "reject");
        g(this, N, r),
          (this.resolve = a(this, N).resolve),
          (this.reject = a(this, N).reject);
      }
      get state() {
        return a(this, N).state;
      }
      get rejectionReason() {
        return a(this, N).rejectionReason;
      }
      then(t, r) {
        return R(this, oe, Ce).call(this, super.then(t, r));
      }
      catch(t) {
        return R(this, oe, Ce).call(this, super.catch(t));
      }
      finally(t) {
        return R(this, oe, Ce).call(this, super.finally(t));
      }
    }),
    (N = new WeakMap()),
    (oe = new WeakSet()),
    (Ce = function (t) {
      return Object.defineProperties(t, {
        resolve: { configurable: !0, value: this.resolve },
        reject: { configurable: !0, value: this.reject },
      });
    }),
    gt),
  Ss = class {
    constructor(e) {
      (this.request = e), (this.responsePromise = new jt());
    }
    respondWith(e) {
      re(
        this.responsePromise.state === "pending",
        'Failed to respond to "%s %s" request: the "request" event has already been responded to.',
        this.request.method,
        this.request.url
      ),
        this.responsePromise.resolve(e);
    }
  };
function Ut(e) {
  const t = new Ss(e);
  return (
    Reflect.set(e, "respondWith", t.respondWith.bind(t)),
    { interactiveRequest: e, requestController: t }
  );
}
async function Ht(e, t, ...r) {
  const s = e.listeners(t);
  if (s.length !== 0) for (const n of s) await n.apply(e, r);
}
function Ls(e, t) {
  try {
    return e[t], !0;
  } catch {
    return !1;
  }
}
function Ps(e) {
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
var Wt = class extends Xe {
    constructor() {
      super(Wt.symbol);
    }
    checkEnvironment() {
      return typeof globalThis < "u" && typeof globalThis.fetch < "u";
    }
    async setup() {
      const e = globalThis.fetch;
      re(!e[ie], 'Failed to patch the "fetch" module: already patched.'),
        (globalThis.fetch = async (t, r) => {
          var s;
          const n = Ft(),
            i =
              typeof t == "string" && typeof location < "u" && !Ps(t)
                ? new URL(t, location.origin)
                : t,
            o = new Request(i, r);
          this.logger.info("[%s] %s", o.method, o.url);
          const { interactiveRequest: l, requestController: u } = Ut(o);
          this.logger.info(
            'emitting the "request" event for %d listener(s)...',
            this.emitter.listenerCount("request")
          ),
            this.emitter.once("request", ({ requestId: f }) => {
              f === n &&
                u.responsePromise.state === "pending" &&
                u.responsePromise.resolve(void 0);
            }),
            this.logger.info("awaiting for the mocked response...");
          const c = l.signal,
            d = new jt();
          c &&
            c.addEventListener(
              "abort",
              () => {
                d.reject(c.reason);
              },
              { once: !0 }
            );
          const p = await Ke(async () => {
            const f = Ht(this.emitter, "request", { request: l, requestId: n });
            await Promise.race([d, f, u.responsePromise]),
              this.logger.info("all request listeners have been resolved!");
            const m = await u.responsePromise;
            return this.logger.info("event.respondWith called with:", m), m;
          });
          if (d.state === "rejected") return Promise.reject(d.rejectionReason);
          if (p.error) return Promise.reject(ot(p.error));
          const h = p.data;
          if (h && !((s = o.signal) != null && s.aborted)) {
            if (
              (this.logger.info("received mocked response:", h),
              Ls(h, "type") && h.type === "error")
            )
              return (
                this.logger.info(
                  "received a network error response, rejecting the request promise..."
                ),
                Promise.reject(ot(h))
              );
            const f = h.clone();
            return (
              this.emitter.emit("response", {
                response: f,
                isMockedResponse: !0,
                request: l,
                requestId: n,
              }),
              Object.defineProperty(h, "url", {
                writable: !1,
                enumerable: !0,
                configurable: !1,
                value: o.url,
              }),
              h
            );
          }
          return (
            this.logger.info("no mocked response received!"),
            e(o).then((f) => {
              const m = f.clone();
              return (
                this.logger.info("original fetch performed", m),
                this.emitter.emit("response", {
                  response: m,
                  isMockedResponse: !1,
                  request: l,
                  requestId: n,
                }),
                f
              );
            })
          );
        }),
        Object.defineProperty(globalThis.fetch, ie, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.fetch, ie, { value: void 0 }),
            (globalThis.fetch = e),
            this.logger.info(
              'restored native "globalThis.fetch"!',
              globalThis.fetch.name
            );
        });
    }
  },
  $t = Wt;
$t.symbol = Symbol("fetch");
function ot(e) {
  return Object.assign(new TypeError("Failed to fetch"), { cause: e });
}
function Rs(e, t) {
  const r = new Uint8Array(e.byteLength + t.byteLength);
  return r.set(e, 0), r.set(t, e.byteLength), r;
}
var Gt = class {
    constructor(e, t) {
      (this.AT_TARGET = 0),
        (this.BUBBLING_PHASE = 0),
        (this.CAPTURING_PHASE = 0),
        (this.NONE = 0),
        (this.type = ""),
        (this.srcElement = null),
        (this.currentTarget = null),
        (this.eventPhase = 0),
        (this.isTrusted = !0),
        (this.composed = !1),
        (this.cancelable = !0),
        (this.defaultPrevented = !1),
        (this.bubbles = !0),
        (this.lengthComputable = !0),
        (this.loaded = 0),
        (this.total = 0),
        (this.cancelBubble = !1),
        (this.returnValue = !0),
        (this.type = e),
        (this.target = (t == null ? void 0 : t.target) || null),
        (this.currentTarget = (t == null ? void 0 : t.currentTarget) || null),
        (this.timeStamp = Date.now());
    }
    composedPath() {
      return [];
    }
    initEvent(e, t, r) {
      (this.type = e), (this.bubbles = !!t), (this.cancelable = !!r);
    }
    preventDefault() {
      this.defaultPrevented = !0;
    }
    stopPropagation() {}
    stopImmediatePropagation() {}
  },
  qs = class extends Gt {
    constructor(e, t) {
      super(e),
        (this.lengthComputable =
          (t == null ? void 0 : t.lengthComputable) || !1),
        (this.composed = (t == null ? void 0 : t.composed) || !1),
        (this.loaded = (t == null ? void 0 : t.loaded) || 0),
        (this.total = (t == null ? void 0 : t.total) || 0);
    }
  },
  xs = typeof ProgressEvent < "u";
function Cs(e, t, r) {
  const s = [
      "error",
      "progress",
      "loadstart",
      "loadend",
      "load",
      "timeout",
      "abort",
    ],
    n = xs ? ProgressEvent : qs;
  return s.includes(t)
    ? new n(t, {
        lengthComputable: !0,
        loaded: (r == null ? void 0 : r.loaded) || 0,
        total: (r == null ? void 0 : r.total) || 0,
      })
    : new Gt(t, { target: e, currentTarget: e });
}
function Bt(e, t) {
  if (!(t in e)) return null;
  if (Object.prototype.hasOwnProperty.call(e, t)) return e;
  const s = Reflect.getPrototypeOf(e);
  return s ? Bt(s, t) : null;
}
function at(e, t) {
  return new Proxy(e, Ms(t));
}
function Ms(e) {
  const {
      constructorCall: t,
      methodCall: r,
      getProperty: s,
      setProperty: n,
    } = e,
    i = {};
  return (
    typeof t < "u" &&
      (i.construct = function (o, l, u) {
        const c = Reflect.construct.bind(null, o, l, u);
        return t.call(u, l, c);
      }),
    (i.set = function (o, l, u) {
      const c = () => {
        const d = Bt(o, l) || o,
          p = Reflect.getOwnPropertyDescriptor(d, l);
        return typeof (p == null ? void 0 : p.set) < "u"
          ? (p.set.apply(o, [u]), !0)
          : Reflect.defineProperty(d, l, {
              writable: !0,
              enumerable: !0,
              configurable: !0,
              value: u,
            });
      };
      return typeof n < "u" ? n.call(o, [l, u], c) : c();
    }),
    (i.get = function (o, l, u) {
      const c = () => o[l],
        d = typeof s < "u" ? s.call(o, [l, u], c) : c();
      return typeof d == "function"
        ? (...p) => {
            const h = d.bind(o, ...p);
            return typeof r < "u" ? r.call(o, [l, p], h) : h();
          }
        : d;
    }),
    i
  );
}
function Ts(e) {
  return [
    "application/xhtml+xml",
    "application/xml",
    "image/svg+xml",
    "text/html",
    "text/xml",
  ].some((r) => e.startsWith(r));
}
function As(e) {
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function Is(e, t) {
  const r = At(e.status) ? null : t;
  return new Response(r, {
    status: e.status,
    statusText: e.statusText,
    headers: _s(e.getAllResponseHeaders()),
  });
}
function _s(e) {
  const t = new Headers(),
    r = e.split(/[\r\n]+/);
  for (const s of r) {
    if (s.trim() === "") continue;
    const [n, ...i] = s.split(": "),
      o = i.join(": ");
    t.append(n, o);
  }
  return t;
}
var ut = Symbol("isMockedResponse"),
  Os = Qe(),
  Fs = class {
    constructor(e, t) {
      (this.initialRequest = e),
        (this.logger = t),
        (this.method = "GET"),
        (this.url = null),
        (this.events = new Map()),
        (this.requestId = Ft()),
        (this.requestHeaders = new Headers()),
        (this.responseBuffer = new Uint8Array()),
        (this.request = at(e, {
          setProperty: ([r, s], n) => {
            switch (r) {
              case "ontimeout": {
                const i = r.slice(2);
                return this.request.addEventListener(i, s), n();
              }
              default:
                return n();
            }
          },
          methodCall: ([r, s], n) => {
            var i;
            switch (r) {
              case "open": {
                const [o, l] = s;
                return (
                  typeof l > "u"
                    ? ((this.method = "GET"), (this.url = lt(o)))
                    : ((this.method = o), (this.url = lt(l))),
                  (this.logger = this.logger.extend(
                    `${this.method} ${this.url.href}`
                  )),
                  this.logger.info("open", this.method, this.url.href),
                  n()
                );
              }
              case "addEventListener": {
                const [o, l] = s;
                return (
                  this.registerEvent(o, l),
                  this.logger.info("addEventListener", o, l),
                  n()
                );
              }
              case "setRequestHeader": {
                const [o, l] = s;
                return (
                  this.requestHeaders.set(o, l),
                  this.logger.info("setRequestHeader", o, l),
                  n()
                );
              }
              case "send": {
                const [o] = s;
                o != null &&
                  (this.requestBody = typeof o == "string" ? Zr(o) : o),
                  this.request.addEventListener("load", () => {
                    if (typeof this.onResponse < "u") {
                      const c = Is(this.request, this.request.response);
                      this.onResponse.call(this, {
                        response: c,
                        isMockedResponse: ut in this.request,
                        request: l,
                        requestId: this.requestId,
                      });
                    }
                  });
                const l = this.toFetchApiRequest();
                (
                  ((i = this.onRequest) == null
                    ? void 0
                    : i.call(this, {
                        request: l,
                        requestId: this.requestId,
                      })) || Promise.resolve()
                ).finally(() => {
                  if (this.request.readyState < this.request.LOADING)
                    return (
                      this.logger.info(
                        "request callback settled but request has not been handled (readystate %d), performing as-is...",
                        this.request.readyState
                      ),
                      Os && this.request.setRequestHeader(ps, this.requestId),
                      n()
                    );
                });
                break;
              }
              default:
                return n();
            }
          },
        }));
    }
    registerEvent(e, t) {
      const s = (this.events.get(e) || []).concat(t);
      this.events.set(e, s), this.logger.info('registered event "%s"', e, t);
    }
    respondWith(e) {
      this.logger.info(
        "responding with a mocked response: %d %s",
        e.status,
        e.statusText
      ),
        se(this.request, ut, !0),
        se(this.request, "status", e.status),
        se(this.request, "statusText", e.statusText),
        se(this.request, "responseURL", this.url.href),
        (this.request.getResponseHeader = new Proxy(
          this.request.getResponseHeader,
          {
            apply: (s, n, i) => {
              if (
                (this.logger.info("getResponseHeader", i[0]),
                this.request.readyState < this.request.HEADERS_RECEIVED)
              )
                return (
                  this.logger.info("headers not received yet, returning null"),
                  null
                );
              const o = e.headers.get(i[0]);
              return (
                this.logger.info('resolved response header "%s" to', i[0], o), o
              );
            },
          }
        )),
        (this.request.getAllResponseHeaders = new Proxy(
          this.request.getAllResponseHeaders,
          {
            apply: () => {
              if (
                (this.logger.info("getAllResponseHeaders"),
                this.request.readyState < this.request.HEADERS_RECEIVED)
              )
                return (
                  this.logger.info(
                    "headers not received yet, returning empty string"
                  ),
                  ""
                );
              const n = Array.from(e.headers.entries()).map(
                ([i, o]) => `${i}: ${o}`
              ).join(`\r
`);
              return this.logger.info("resolved all response headers to", n), n;
            },
          }
        )),
        Object.defineProperties(this.request, {
          response: {
            enumerable: !0,
            configurable: !1,
            get: () => this.response,
          },
          responseText: {
            enumerable: !0,
            configurable: !1,
            get: () => this.responseText,
          },
          responseXML: {
            enumerable: !0,
            configurable: !1,
            get: () => this.responseXML,
          },
        });
      const t = e.headers.has("Content-Length")
        ? Number(e.headers.get("Content-Length"))
        : void 0;
      this.logger.info("calculated response body length", t),
        this.trigger("loadstart", { loaded: 0, total: t }),
        this.setReadyState(this.request.HEADERS_RECEIVED),
        this.setReadyState(this.request.LOADING);
      const r = () => {
        this.logger.info("finalizing the mocked response..."),
          this.setReadyState(this.request.DONE),
          this.trigger("load", {
            loaded: this.responseBuffer.byteLength,
            total: t,
          }),
          this.trigger("loadend", {
            loaded: this.responseBuffer.byteLength,
            total: t,
          });
      };
      if (e.body) {
        this.logger.info("mocked response has body, streaming...");
        const s = e.body.getReader(),
          n = async () => {
            const { value: i, done: o } = await s.read();
            if (o) {
              this.logger.info("response body stream done!"), r();
              return;
            }
            i &&
              (this.logger.info("read response body chunk:", i),
              (this.responseBuffer = Rs(this.responseBuffer, i)),
              this.trigger("progress", {
                loaded: this.responseBuffer.byteLength,
                total: t,
              })),
              n();
          };
        n();
      } else r();
    }
    responseBufferToText() {
      return es(this.responseBuffer);
    }
    get response() {
      if (
        (this.logger.info(
          "getResponse (responseType: %s)",
          this.request.responseType
        ),
        this.request.readyState !== this.request.DONE)
      )
        return null;
      switch (this.request.responseType) {
        case "json": {
          const e = As(this.responseBufferToText());
          return this.logger.info("resolved response JSON", e), e;
        }
        case "arraybuffer": {
          const e = ts(this.responseBuffer);
          return this.logger.info("resolved response ArrayBuffer", e), e;
        }
        case "blob": {
          const e =
              this.request.getResponseHeader("Content-Type") || "text/plain",
            t = new Blob([this.responseBufferToText()], { type: e });
          return (
            this.logger.info("resolved response Blob (mime type: %s)", t, e), t
          );
        }
        default: {
          const e = this.responseBufferToText();
          return (
            this.logger.info(
              'resolving "%s" response type as text',
              this.request.responseType,
              e
            ),
            e
          );
        }
      }
    }
    get responseText() {
      if (
        (re(
          this.request.responseType === "" ||
            this.request.responseType === "text",
          "InvalidStateError: The object is in invalid state."
        ),
        this.request.readyState !== this.request.LOADING &&
          this.request.readyState !== this.request.DONE)
      )
        return "";
      const e = this.responseBufferToText();
      return this.logger.info('getResponseText: "%s"', e), e;
    }
    get responseXML() {
      if (
        (re(
          this.request.responseType === "" ||
            this.request.responseType === "document",
          "InvalidStateError: The object is in invalid state."
        ),
        this.request.readyState !== this.request.DONE)
      )
        return null;
      const e = this.request.getResponseHeader("Content-Type") || "";
      return typeof DOMParser > "u"
        ? (console.warn(
            "Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."
          ),
          null)
        : Ts(e)
        ? new DOMParser().parseFromString(this.responseBufferToText(), e)
        : null;
    }
    errorWith(e) {
      this.logger.info("responding with an error"),
        this.setReadyState(this.request.DONE),
        this.trigger("error"),
        this.trigger("loadend");
    }
    setReadyState(e) {
      if (
        (this.logger.info(
          "setReadyState: %d -> %d",
          this.request.readyState,
          e
        ),
        this.request.readyState === e)
      ) {
        this.logger.info("ready state identical, skipping transition...");
        return;
      }
      se(this.request, "readyState", e),
        this.logger.info("set readyState to: %d", e),
        e !== this.request.UNSENT &&
          (this.logger.info('triggerring "readystatechange" event...'),
          this.trigger("readystatechange"));
    }
    trigger(e, t) {
      const r = this.request[`on${e}`],
        s = Cs(this.request, e, t);
      this.logger.info('trigger "%s"', e, t || ""),
        typeof r == "function" &&
          (this.logger.info('found a direct "%s" callback, calling...', e),
          r.call(this.request, s));
      for (const [n, i] of this.events)
        n === e &&
          (this.logger.info(
            'found %d listener(s) for "%s" event, calling...',
            i.length,
            e
          ),
          i.forEach((o) => o.call(this.request, s)));
    }
    toFetchApiRequest() {
      this.logger.info("converting request to a Fetch API Request...");
      const e = new Request(this.url.href, {
          method: this.method,
          headers: this.requestHeaders,
          credentials: this.request.withCredentials ? "include" : "same-origin",
          body: ["GET", "HEAD"].includes(this.method) ? null : this.requestBody,
        }),
        t = at(e.headers, {
          methodCall: ([r, s], n) => {
            switch (r) {
              case "append":
              case "set": {
                const [i, o] = s;
                this.request.setRequestHeader(i, o);
                break;
              }
              case "delete": {
                const [i] = s;
                console.warn(
                  `XMLHttpRequest: Cannot remove a "${i}" header from the Fetch API representation of the "${e.method} ${e.url}" request. XMLHttpRequest headers cannot be removed.`
                );
                break;
              }
            }
            return n();
          },
        });
      return (
        se(e, "headers", t),
        this.logger.info("converted request to a Fetch API Request!", e),
        e
      );
    }
  };
function lt(e) {
  return typeof location > "u"
    ? new URL(e)
    : new URL(e.toString(), location.href);
}
function se(e, t, r) {
  Reflect.defineProperty(e, t, { writable: !0, enumerable: !0, value: r });
}
function Ds({ emitter: e, logger: t }) {
  return new Proxy(globalThis.XMLHttpRequest, {
    construct(s, n, i) {
      t.info("constructed new XMLHttpRequest");
      const o = Reflect.construct(s, n, i),
        l = Object.getOwnPropertyDescriptors(s.prototype);
      for (const c in l) Reflect.defineProperty(o, c, l[c]);
      const u = new Fs(o, t);
      return (
        (u.onRequest = async function ({ request: c, requestId: d }) {
          const { interactiveRequest: p, requestController: h } = Ut(c);
          this.logger.info("awaiting mocked response..."),
            e.once("request", ({ requestId: y }) => {
              y === d &&
                h.responsePromise.state === "pending" &&
                h.respondWith(void 0);
            });
          const f = await Ke(async () => {
            this.logger.info(
              'emitting the "request" event for %s listener(s)...',
              e.listenerCount("request")
            ),
              await Ht(e, "request", { request: p, requestId: d }),
              this.logger.info('all "request" listeners settled!');
            const y = await h.responsePromise;
            return this.logger.info("event.respondWith called with:", y), y;
          });
          if (f.error) {
            this.logger.info(
              "request listener threw an exception, aborting request...",
              f.error
            ),
              u.errorWith(f.error);
            return;
          }
          const m = f.data;
          if (typeof m < "u") {
            if (
              (this.logger.info(
                "received mocked response: %d %s",
                m.status,
                m.statusText
              ),
              m.type === "error")
            ) {
              this.logger.info(
                "received a network error response, rejecting the request promise..."
              ),
                u.errorWith(new TypeError("Network error"));
              return;
            }
            return u.respondWith(m);
          }
          this.logger.info(
            "no mocked response received, performing request as-is..."
          );
        }),
        (u.onResponse = async function ({
          response: c,
          isMockedResponse: d,
          request: p,
          requestId: h,
        }) {
          this.logger.info(
            'emitting the "response" event for %s listener(s)...',
            e.listenerCount("response")
          ),
            e.emit("response", {
              response: c,
              isMockedResponse: d,
              request: p,
              requestId: h,
            });
        }),
        u.request
      );
    },
  });
}
var Nt = class extends Xe {
    constructor() {
      super(Nt.interceptorSymbol);
    }
    checkEnvironment() {
      return typeof globalThis.XMLHttpRequest < "u";
    }
    setup() {
      const e = this.logger.extend("setup");
      e.info('patching "XMLHttpRequest" module...');
      const t = globalThis.XMLHttpRequest;
      re(
        !t[ie],
        'Failed to patch the "XMLHttpRequest" module: already patched.'
      ),
        (globalThis.XMLHttpRequest = Ds({
          emitter: this.emitter,
          logger: this.logger,
        })),
        e.info(
          'native "XMLHttpRequest" module patched!',
          globalThis.XMLHttpRequest.name
        ),
        Object.defineProperty(globalThis.XMLHttpRequest, ie, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.XMLHttpRequest, ie, {
            value: void 0,
          }),
            (globalThis.XMLHttpRequest = t),
            e.info(
              'native "XMLHttpRequest" module restored!',
              globalThis.XMLHttpRequest.name
            );
        });
    }
  },
  Qt = Nt;
Qt.interceptorSymbol = Symbol("xhr");
function js(e, t) {
  const r = new $e({ name: "fallback", interceptors: [new $t(), new Qt()] });
  return (
    r.on("request", async ({ request: s, requestId: n }) => {
      const i = s.clone(),
        o = await xt(s, n, e.getRequestHandlers(), t, e.emitter, {
          onMockedResponse(l, { handler: u, parsedResult: c }) {
            t.quiet ||
              e.emitter.once("response:mocked", ({ response: d }) => {
                u.log({ request: i, response: d, parsedResult: c });
              });
          },
        });
      o && s.respondWith(o);
    }),
    r.on(
      "response",
      ({ response: s, isMockedResponse: n, request: i, requestId: o }) => {
        e.emitter.emit(n ? "response:mocked" : "response:bypass", {
          response: s,
          request: i,
          requestId: o,
        });
      }
    ),
    r.apply(),
    r
  );
}
function Us(e) {
  return async function (r) {
    (e.fallbackInterceptor = js(e, r)),
      Tt({ message: "Mocking enabled (fallback mode).", quiet: r.quiet });
  };
}
function Hs(e) {
  return function () {
    var r, s;
    (r = e.fallbackInterceptor) == null || r.dispose(),
      Dt({ quiet: (s = e.startOptions) == null ? void 0 : s.quiet });
  };
}
function Ws() {
  try {
    const e = new ReadableStream({ start: (r) => r.close() });
    return new MessageChannel().port1.postMessage(e, [e]), !0;
  } catch {
    return !1;
  }
}
var $s = class extends Dr {
  constructor(...t) {
    super(...t);
    k(this, "context");
    k(this, "startHandler", null);
    k(this, "stopHandler", null);
    k(this, "listeners");
    re(
      !Qe(),
      P.formatMessage(
        "Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."
      )
    ),
      (this.listeners = []),
      (this.context = this.createWorkerContext());
  }
  createWorkerContext() {
    const t = {
      isMockingEnabled: !1,
      startOptions: null,
      worker: null,
      getRequestHandlers: () => this.handlersController.currentHandlers(),
      registration: null,
      requests: new Map(),
      emitter: this.emitter,
      workerChannel: {
        on: (r, s) => {
          this.context.events.addListener(
            navigator.serviceWorker,
            "message",
            (n) => {
              if (n.source !== this.context.worker) return;
              const i = n.data;
              i && i.type === r && s(n, i);
            }
          );
        },
        send: (r) => {
          var s;
          (s = this.context.worker) == null || s.postMessage(r);
        },
      },
      events: {
        addListener: (r, s, n) => (
          r.addEventListener(s, n),
          this.listeners.push({ eventType: s, target: r, callback: n }),
          () => {
            r.removeEventListener(s, n);
          }
        ),
        removeAllListeners: () => {
          for (const { target: r, eventType: s, callback: n } of this.listeners)
            r.removeEventListener(s, n);
          this.listeners = [];
        },
        once: (r) => {
          const s = [];
          return new Promise((n, i) => {
            const o = (l) => {
              try {
                const u = l.data;
                u.type === r && n(u);
              } catch (u) {
                i(u);
              }
            };
            s.push(
              this.context.events.addListener(
                navigator.serviceWorker,
                "message",
                o
              ),
              this.context.events.addListener(
                navigator.serviceWorker,
                "messageerror",
                i
              )
            );
          }).finally(() => {
            s.forEach((n) => n());
          });
        },
      },
      supports: {
        serviceWorkerApi:
          !("serviceWorker" in navigator) || location.protocol === "file:",
        readableStreamTransfer: Ws(),
      },
    };
    return (
      (this.startHandler = t.supports.serviceWorkerApi ? Us(t) : bs(t)),
      (this.stopHandler = t.supports.serviceWorkerApi ? Hs(t) : ws(t)),
      t
    );
  }
  async start(t = {}) {
    return (
      t.waitUntilReady === !0 &&
        P.warn(
          'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'
        ),
      (this.context.startOptions = Ct(Es, t)),
      await this.startHandler(this.context.startOptions, t)
    );
  }
  stop() {
    super.dispose(),
      this.context.events.removeAllListeners(),
      this.context.emitter.removeAllListeners(),
      this.stopHandler();
  }
};
function Gs(...e) {
  return new $s(...e);
}
var Bs = /\.(js|jsx|ts|tsx|mjs|woff|woff2|ttf|otf|eot)$/,
  Ns = [
    "sb-common-assets",
    "node_modules",
    "node-modules",
    "hot-update.json",
    "__webpack_hmr",
    "sb-vite",
  ],
  Qs = (e) => !!(Bs.test(e) || Ns.some((r) => e.includes(r))),
  Ks = (e) =>
    typeof (e == null ? void 0 : e.onUnhandledRequest) == "string"
      ? e
      : {
          ...e,
          onUnhandledRequest: (...t) => {
            const [{ url: r }, s] = t;
            if (!Qs(r)) {
              if (!(e != null && e.onUnhandledRequest)) {
                s.warning();
                return;
              }
              typeof (e == null ? void 0 : e.onUnhandledRequest) ==
                "function" && e.onUnhandledRequest(...t);
            }
          },
        };
function Xs(e, t = []) {
  const r = Gs(...t);
  return r.start(Ks(e)), r;
}
var Ie = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _e = typeof window > "u" || "Deno" in globalThis;
function F() {}
function Vs(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Js(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function zs(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function ct(e, t) {
  const {
    type: r = "all",
    exact: s,
    fetchStatus: n,
    predicate: i,
    queryKey: o,
    stale: l,
  } = e;
  if (o) {
    if (s) {
      if (t.queryHash !== Ve(o, t.options)) return !1;
    } else if (!Ee(t.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const u = t.isActive();
    if ((r === "active" && !u) || (r === "inactive" && u)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (n && n !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function ht(e, t) {
  const { exact: r, status: s, predicate: n, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (we(t.options.mutationKey) !== we(i)) return !1;
    } else if (!Ee(t.options.mutationKey, i)) return !1;
  }
  return !((s && t.state.status !== s) || (n && !n(t)));
}
function Ve(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || we)(e);
}
function we(e) {
  return JSON.stringify(e, (t, r) =>
    Ge(r)
      ? Object.keys(r)
          .sort()
          .reduce((s, n) => ((s[n] = r[n]), s), {})
      : r
  );
}
function Ee(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((r) => !Ee(e[r], t[r]))
    : !1;
}
function Kt(e, t) {
  if (e === t) return e;
  const r = dt(e) && dt(t);
  if (r || (Ge(e) && Ge(t))) {
    const s = r ? e : Object.keys(e),
      n = s.length,
      i = r ? t : Object.keys(t),
      o = i.length,
      l = r ? [] : {};
    let u = 0;
    for (let c = 0; c < o; c++) {
      const d = r ? c : i[c];
      !r && e[d] === void 0 && t[d] === void 0 && s.includes(d)
        ? ((l[d] = void 0), u++)
        : ((l[d] = Kt(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && u++);
    }
    return n === o && u === n ? e : l;
  }
  return t;
}
function dt(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ge(e) {
  if (!ft(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(!ft(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function ft(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ys(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Zs(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? Kt(e, t)
    : t;
}
function en(e, t, r = 0) {
  const s = [...e, t];
  return r && s.length > r ? s.slice(1) : s;
}
function tn(e, t, r = 0) {
  const s = [t, ...e];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var ke = Symbol(),
  Y,
  Q,
  ae,
  mt,
  rn =
    ((mt = class extends Ie {
      constructor() {
        super();
        b(this, Y, void 0);
        b(this, Q, void 0);
        b(this, ae, void 0);
        g(this, ae, (t) => {
          if (!_e && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        a(this, Q) || this.setEventListener(a(this, ae));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = a(this, Q)) == null || t.call(this), g(this, Q, void 0));
      }
      setEventListener(t) {
        var r;
        g(this, ae, t),
          (r = a(this, Q)) == null || r.call(this),
          g(
            this,
            Q,
            t((s) => {
              typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        a(this, Y) !== t && (g(this, Y, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof a(this, Y) == "boolean"
          ? a(this, Y)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Y = new WeakMap()),
    (Q = new WeakMap()),
    (ae = new WeakMap()),
    mt),
  Xt = new rn(),
  ue,
  K,
  le,
  yt,
  sn =
    ((yt = class extends Ie {
      constructor() {
        super();
        b(this, ue, !0);
        b(this, K, void 0);
        b(this, le, void 0);
        g(this, le, (t) => {
          if (!_e && window.addEventListener) {
            const r = () => t(!0),
              s = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
      }
      onSubscribe() {
        a(this, K) || this.setEventListener(a(this, le));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = a(this, K)) == null || t.call(this), g(this, K, void 0));
      }
      setEventListener(t) {
        var r;
        g(this, le, t),
          (r = a(this, K)) == null || r.call(this),
          g(this, K, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        a(this, ue) !== t &&
          (g(this, ue, t),
          this.listeners.forEach((s) => {
            s(t);
          }));
      }
      isOnline() {
        return a(this, ue);
      }
    }),
    (ue = new WeakMap()),
    (K = new WeakMap()),
    (le = new WeakMap()),
    yt),
  Te = new sn();
function nn(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Je(e) {
  return (e ?? "online") === "online" ? Te.isOnline() : !0;
}
var Vt = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function De(e) {
  return e instanceof Vt;
}
function Jt(e) {
  let t = !1,
    r = 0,
    s = !1,
    n,
    i,
    o;
  const l = new Promise((v, w) => {
      (i = v), (o = w);
    }),
    u = (v) => {
      var w;
      s || (f(new Vt(v)), (w = e.abort) == null || w.call(e));
    },
    c = () => {
      t = !0;
    },
    d = () => {
      t = !1;
    },
    p = () => !Xt.isFocused() || (e.networkMode !== "always" && !Te.isOnline()),
    h = (v) => {
      var w;
      s ||
        ((s = !0),
        (w = e.onSuccess) == null || w.call(e, v),
        n == null || n(),
        i(v));
    },
    f = (v) => {
      var w;
      s ||
        ((s = !0),
        (w = e.onError) == null || w.call(e, v),
        n == null || n(),
        o(v));
    },
    m = () =>
      new Promise((v) => {
        var w;
        (n = (L) => {
          const E = s || !p();
          return E && v(L), E;
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (n = void 0), s || (v = e.onContinue) == null || v.call(e);
      }),
    y = () => {
      if (s) return;
      let v;
      try {
        v = e.fn();
      } catch (w) {
        v = Promise.reject(w);
      }
      Promise.resolve(v)
        .then(h)
        .catch((w) => {
          var j;
          if (s) return;
          const L = e.retry ?? (_e ? 0 : 3),
            E = e.retryDelay ?? nn,
            T = typeof E == "function" ? E(r, w) : E,
            I =
              L === !0 ||
              (typeof L == "number" && r < L) ||
              (typeof L == "function" && L(r, w));
          if (t || !I) {
            f(w);
            return;
          }
          r++,
            (j = e.onFail) == null || j.call(e, r, w),
            Ys(T)
              .then(() => {
                if (p()) return m();
              })
              .then(() => {
                t ? f(w) : y();
              });
        });
    };
  return (
    Je(e.networkMode) ? y() : m().then(y),
    {
      promise: l,
      cancel: u,
      continue: () => ((n == null ? void 0 : n()) ? l : Promise.resolve()),
      cancelRetry: c,
      continueRetry: d,
    }
  );
}
function on() {
  let e = [],
    t = 0,
    r = (h) => {
      h();
    },
    s = (h) => {
      h();
    },
    n = (h) => setTimeout(h, 0);
  const i = (h) => {
      n = h;
    },
    o = (h) => {
      let f;
      t++;
      try {
        f = h();
      } finally {
        t--, t || c();
      }
      return f;
    },
    l = (h) => {
      t
        ? e.push(h)
        : n(() => {
            r(h);
          });
    },
    u =
      (h) =>
      (...f) => {
        l(() => {
          h(...f);
        });
      },
    c = () => {
      const h = e;
      (e = []),
        h.length &&
          n(() => {
            s(() => {
              h.forEach((f) => {
                r(f);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: u,
    schedule: l,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      s = h;
    },
    setScheduler: i,
  };
}
var M = on(),
  Z,
  vt,
  zt =
    ((vt = class {
      constructor() {
        b(this, Z, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Js(this.gcTime) &&
            g(
              this,
              Z,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (_e ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        a(this, Z) && (clearTimeout(a(this, Z)), g(this, Z, void 0));
      }
    }),
    (Z = new WeakMap()),
    vt),
  ce,
  he,
  _,
  C,
  x,
  Se,
  ee,
  D,
  G,
  bt,
  an =
    ((bt = class extends zt {
      constructor(t) {
        super();
        b(this, D);
        b(this, ce, void 0);
        b(this, he, void 0);
        b(this, _, void 0);
        b(this, C, void 0);
        b(this, x, void 0);
        b(this, Se, void 0);
        b(this, ee, void 0);
        g(this, ee, !1),
          g(this, Se, t.defaultOptions),
          this.setOptions(t.options),
          g(this, x, []),
          g(this, _, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          g(this, ce, t.state || ln(this.options)),
          (this.state = a(this, ce)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      setOptions(t) {
        (this.options = { ...a(this, Se), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !a(this, x).length &&
          this.state.fetchStatus === "idle" &&
          a(this, _).remove(this);
      }
      setData(t, r) {
        const s = Zs(this.state.data, t, this.options);
        return (
          R(this, D, G).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          s
        );
      }
      setState(t, r) {
        R(this, D, G).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var s, n;
        const r = (s = a(this, C)) == null ? void 0 : s.promise;
        return (
          (n = a(this, C)) == null || n.cancel(t),
          r ? r.then(F).catch(F) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(a(this, ce));
      }
      isActive() {
        return a(this, x).some((t) => t.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? a(this, x).some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !zs(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = a(this, x).find((s) => s.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = a(this, C)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = a(this, x).find((s) => s.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = a(this, C)) == null || r.continue();
      }
      addObserver(t) {
        a(this, x).includes(t) ||
          (a(this, x).push(t),
          this.clearGcTimeout(),
          a(this, _).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        a(this, x).includes(t) &&
          (g(
            this,
            x,
            a(this, x).filter((r) => r !== t)
          ),
          a(this, x).length ||
            (a(this, C) &&
              (a(this, ee)
                ? a(this, C).cancel({ revert: !0 })
                : a(this, C).cancelRetry()),
            this.scheduleGc()),
          a(this, _).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return a(this, x).length;
      }
      invalidate() {
        this.state.isInvalidated ||
          R(this, D, G).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var c, d, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (a(this, C))
            return a(this, C).continueRetry(), a(this, C).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = a(this, x).find((f) => f.options.queryFn);
          h && this.setOptions(h.options);
        }
        Array.isArray(this.options.queryKey) ||
          console.error(
            "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
          );
        const s = new AbortController(),
          n = { queryKey: this.queryKey, meta: this.meta },
          i = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (g(this, ee, !0), s.signal),
            });
          };
        i(n);
        const o = () => (
            this.options.queryFn === ke &&
              console.error(
                `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${this.options.queryHash}'`
              ),
            !this.options.queryFn || this.options.queryFn === ke
              ? Promise.reject(
                  new Error(`Missing queryFn: '${this.options.queryHash}'`)
                )
              : (g(this, ee, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, n, this)
                  : this.options.queryFn(n))
          ),
          l = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o,
          };
        i(l),
          (c = this.options.behavior) == null || c.onFetch(l, this),
          g(this, he, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
            R(this, D, G).call(this, {
              type: "fetch",
              meta: (p = l.fetchOptions) == null ? void 0 : p.meta,
            });
        const u = (h) => {
          var f, m, y, v;
          (De(h) && h.silent) ||
            R(this, D, G).call(this, { type: "error", error: h }),
            De(h) ||
              ((m = (f = a(this, _).config).onError) == null ||
                m.call(f, h, this),
              (v = (y = a(this, _).config).onSettled) == null ||
                v.call(y, this.state.data, h, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          g(
            this,
            C,
            Jt({
              fn: l.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: (h) => {
                var f, m, y, v;
                if (h === void 0) {
                  console.error(
                    `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
                  ),
                    u(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(h),
                  (m = (f = a(this, _).config).onSuccess) == null ||
                    m.call(f, h, this),
                  (v = (y = a(this, _).config).onSettled) == null ||
                    v.call(y, h, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: u,
              onFail: (h, f) => {
                R(this, D, G).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: f,
                });
              },
              onPause: () => {
                R(this, D, G).call(this, { type: "pause" });
              },
              onContinue: () => {
                R(this, D, G).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
            })
          ),
          a(this, C).promise
        );
      }
    }),
    (ce = new WeakMap()),
    (he = new WeakMap()),
    (_ = new WeakMap()),
    (C = new WeakMap()),
    (x = new WeakMap()),
    (Se = new WeakMap()),
    (ee = new WeakMap()),
    (D = new WeakSet()),
    (G = function (t) {
      const r = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...un(s.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...s,
              data: t.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const n = t.error;
            return De(n) && n.revert && a(this, he)
              ? { ...a(this, he), fetchStatus: "idle" }
              : {
                  ...s,
                  error: n,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: n,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...t.state };
        }
      };
      (this.state = r(this.state)),
        M.batch(() => {
          a(this, x).forEach((s) => {
            s.onQueryUpdate();
          }),
            a(this, _).notify({ query: this, type: "updated", action: t });
        });
    }),
    bt);
function un(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Je(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function ln(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    s = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var H,
  wt,
  cn =
    ((wt = class extends Ie {
      constructor(t = {}) {
        super();
        b(this, H, void 0);
        (this.config = t), g(this, H, new Map());
      }
      build(t, r, s) {
        const n = r.queryKey,
          i = r.queryHash ?? Ve(n, r);
        let o = this.get(i);
        return (
          o ||
            ((o = new an({
              cache: this,
              queryKey: n,
              queryHash: i,
              options: t.defaultQueryOptions(r),
              state: s,
              defaultOptions: t.getQueryDefaults(n),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        a(this, H).has(t.queryHash) ||
          (a(this, H).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = a(this, H).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && a(this, H).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        M.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return a(this, H).get(t);
      }
      getAll() {
        return [...a(this, H).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((s) => ct(r, s));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((s) => ct(t, s)) : r;
      }
      notify(t) {
        M.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        M.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        M.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (H = new WeakMap()),
    wt),
  W,
  Le,
  A,
  de,
  $,
  B,
  Et,
  hn =
    ((Et = class extends zt {
      constructor(t) {
        super();
        b(this, $);
        b(this, W, void 0);
        b(this, Le, void 0);
        b(this, A, void 0);
        b(this, de, void 0);
        (this.mutationId = t.mutationId),
          g(this, Le, t.defaultOptions),
          g(this, A, t.mutationCache),
          g(this, W, []),
          (this.state = t.state || dn()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = { ...a(this, Le), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        a(this, W).includes(t) ||
          (a(this, W).push(t),
          this.clearGcTimeout(),
          a(this, A).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        g(
          this,
          W,
          a(this, W).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          a(this, A).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        a(this, W).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : a(this, A).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = a(this, de)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var n, i, o, l, u, c, d, p, h, f, m, y, v, w, L, E, T, I, j, qe;
        const r = () => (
            g(
              this,
              de,
              Jt({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(t)
                    : Promise.reject(new Error("No mutationFn found")),
                onFail: (q, z) => {
                  R(this, $, B).call(this, {
                    type: "failed",
                    failureCount: q,
                    error: z,
                  });
                },
                onPause: () => {
                  R(this, $, B).call(this, { type: "pause" });
                },
                onContinue: () => {
                  R(this, $, B).call(this, { type: "continue" });
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
              })
            ),
            a(this, de).promise
          ),
          s = this.state.status === "pending";
        try {
          if (!s) {
            R(this, $, B).call(this, { type: "pending", variables: t }),
              await ((i = (n = a(this, A).config).onMutate) == null
                ? void 0
                : i.call(n, t, this));
            const z = await ((l = (o = this.options).onMutate) == null
              ? void 0
              : l.call(o, t));
            z !== this.state.context &&
              R(this, $, B).call(this, {
                type: "pending",
                context: z,
                variables: t,
              });
          }
          const q = await r();
          return (
            await ((c = (u = a(this, A).config).onSuccess) == null
              ? void 0
              : c.call(u, q, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null
              ? void 0
              : p.call(d, q, t, this.state.context)),
            await ((f = (h = a(this, A).config).onSettled) == null
              ? void 0
              : f.call(
                  h,
                  q,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((y = (m = this.options).onSettled) == null
              ? void 0
              : y.call(m, q, null, t, this.state.context)),
            R(this, $, B).call(this, { type: "success", data: q }),
            q
          );
        } catch (q) {
          try {
            throw (
              (await ((w = (v = a(this, A).config).onError) == null
                ? void 0
                : w.call(v, q, t, this.state.context, this)),
              await ((E = (L = this.options).onError) == null
                ? void 0
                : E.call(L, q, t, this.state.context)),
              await ((I = (T = a(this, A).config).onSettled) == null
                ? void 0
                : I.call(
                    T,
                    void 0,
                    q,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((qe = (j = this.options).onSettled) == null
                ? void 0
                : qe.call(j, void 0, q, t, this.state.context)),
              q)
            );
          } finally {
            R(this, $, B).call(this, { type: "error", error: q });
          }
        }
      }
    }),
    (W = new WeakMap()),
    (Le = new WeakMap()),
    (A = new WeakMap()),
    (de = new WeakMap()),
    ($ = new WeakSet()),
    (B = function (t) {
      const r = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: !Je(this.options.networkMode),
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: t.error,
              failureCount: s.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        M.batch(() => {
          a(this, W).forEach((s) => {
            s.onMutationUpdate(t);
          }),
            a(this, A).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Et);
function dn() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var O,
  Pe,
  te,
  kt,
  fn =
    ((kt = class extends Ie {
      constructor(t = {}) {
        super();
        b(this, O, void 0);
        b(this, Pe, void 0);
        b(this, te, void 0);
        (this.config = t), g(this, O, []), g(this, Pe, 0);
      }
      build(t, r, s) {
        const n = new hn({
          mutationCache: this,
          mutationId: ++xe(this, Pe)._,
          options: t.defaultMutationOptions(r),
          state: s,
        });
        return this.add(n), n;
      }
      add(t) {
        a(this, O).push(t), this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        g(
          this,
          O,
          a(this, O).filter((r) => r !== t)
        ),
          this.notify({ type: "removed", mutation: t });
      }
      clear() {
        M.batch(() => {
          a(this, O).forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return a(this, O);
      }
      find(t) {
        const r = { exact: !0, ...t };
        return a(this, O).find((s) => ht(r, s));
      }
      findAll(t = {}) {
        return a(this, O).filter((r) => ht(t, r));
      }
      notify(t) {
        M.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        return (
          g(
            this,
            te,
            (a(this, te) ?? Promise.resolve())
              .then(() => {
                const t = a(this, O).filter((r) => r.state.isPaused);
                return M.batch(() =>
                  t.reduce(
                    (r, s) => r.then(() => s.continue().catch(F)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                g(this, te, void 0);
              })
          ),
          a(this, te)
        );
      }
    }),
    (O = new WeakMap()),
    (Pe = new WeakMap()),
    (te = new WeakMap()),
    kt);
function pn(e) {
  return {
    onFetch: (t, r) => {
      const s = async () => {
        var m, y, v, w, L;
        const n = t.options,
          i =
            (v =
              (y = (m = t.fetchOptions) == null ? void 0 : m.meta) == null
                ? void 0
                : y.fetchMore) == null
              ? void 0
              : v.direction,
          o = ((w = t.state.data) == null ? void 0 : w.pages) || [],
          l = ((L = t.state.data) == null ? void 0 : L.pageParams) || [],
          u = { pages: [], pageParams: [] };
        let c = !1;
        const d = (E) => {
            Object.defineProperty(E, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (c = !0)
                  : t.signal.addEventListener("abort", () => {
                      c = !0;
                    }),
                t.signal
              ),
            });
          },
          p =
            t.options.queryFn && t.options.queryFn !== ke
              ? t.options.queryFn
              : () => (
                  t.options.queryFn === ke &&
                    console.error(
                      `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.options.queryHash}'`
                    ),
                  Promise.reject(
                    new Error(`Missing queryFn: '${t.options.queryHash}'`)
                  )
                ),
          h = async (E, T, I) => {
            if (c) return Promise.reject();
            if (T == null && E.pages.length) return Promise.resolve(E);
            const j = {
              queryKey: t.queryKey,
              pageParam: T,
              direction: I ? "backward" : "forward",
              meta: t.options.meta,
            };
            d(j);
            const qe = await p(j),
              { maxPages: q } = t.options,
              z = I ? tn : en;
            return {
              pages: z(E.pages, qe, q),
              pageParams: z(E.pageParams, T, q),
            };
          };
        let f;
        if (i && o.length) {
          const E = i === "backward",
            T = E ? gn : pt,
            I = { pages: o, pageParams: l },
            j = T(n, I);
          f = await h(I, j, E);
        } else {
          f = await h(u, l[0] ?? n.initialPageParam);
          const E = e ?? o.length;
          for (let T = 1; T < E; T++) {
            const I = pt(n, f);
            f = await h(f, I);
          }
        }
        return f;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var n, i;
            return (i = (n = t.options).persister) == null
              ? void 0
              : i.call(
                  n,
                  s,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r
                );
          })
        : (t.fetchFn = s);
    },
  };
}
function pt(e, { pages: t, pageParams: r }) {
  const s = t.length - 1;
  return e.getNextPageParam(t[s], t, r[s], r);
}
function gn(e, { pages: t, pageParams: r }) {
  var s;
  return (s = e.getPreviousPageParam) == null
    ? void 0
    : s.call(e, t[0], t, r[0], r);
}
var S,
  X,
  V,
  fe,
  pe,
  J,
  ge,
  me,
  St,
  mn =
    ((St = class {
      constructor(e = {}) {
        b(this, S, void 0);
        b(this, X, void 0);
        b(this, V, void 0);
        b(this, fe, void 0);
        b(this, pe, void 0);
        b(this, J, void 0);
        b(this, ge, void 0);
        b(this, me, void 0);
        g(this, S, e.queryCache || new cn()),
          g(this, X, e.mutationCache || new fn()),
          g(this, V, e.defaultOptions || {}),
          g(this, fe, new Map()),
          g(this, pe, new Map()),
          g(this, J, 0);
      }
      mount() {
        xe(this, J)._++,
          a(this, J) === 1 &&
            (g(
              this,
              ge,
              Xt.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), a(this, S).onFocus());
              })
            ),
            g(
              this,
              me,
              Te.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), a(this, S).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        xe(this, J)._--,
          a(this, J) === 0 &&
            ((e = a(this, ge)) == null || e.call(this),
            g(this, ge, void 0),
            (t = a(this, me)) == null || t.call(this),
            g(this, me, void 0));
      }
      isFetching(e) {
        return a(this, S).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return a(this, X).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = a(this, S).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const r = this.defaultQueryOptions(e),
            s = a(this, S).build(this, r);
          return (
            e.revalidateIfStale &&
              s.isStaleByTime(r.staleTime) &&
              this.prefetchQuery(r),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return a(this, S)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const s = r.data;
            return [t, s];
          });
      }
      setQueryData(e, t, r) {
        const s = this.defaultQueryOptions({ queryKey: e }),
          n = a(this, S).get(s.queryHash),
          i = n == null ? void 0 : n.state.data,
          o = Vs(t, i);
        if (o !== void 0)
          return a(this, S)
            .build(this, s)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return M.batch(() =>
          a(this, S)
            .findAll(e)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, t, r)])
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = a(this, S).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = a(this, S);
        M.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = a(this, S),
          s = { type: "active", ...e };
        return M.batch(
          () => (
            r.findAll(e).forEach((n) => {
              n.reset();
            }),
            this.refetchQueries(s, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const r = { revert: !0, ...t },
          s = M.batch(() =>
            a(this, S)
              .findAll(e)
              .map((n) => n.cancel(r))
          );
        return Promise.all(s).then(F).catch(F);
      }
      invalidateQueries(e = {}, t = {}) {
        return M.batch(() => {
          if (
            (a(this, S)
              .findAll(e)
              .forEach((s) => {
                s.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const r = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(r, t);
        });
      }
      refetchQueries(e = {}, t) {
        const r = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          s = M.batch(() =>
            a(this, S)
              .findAll(e)
              .filter((n) => !n.isDisabled())
              .map((n) => {
                let i = n.fetch(void 0, r);
                return (
                  r.throwOnError || (i = i.catch(F)),
                  n.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(s).then(F);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = a(this, S).build(this, t);
        return r.isStaleByTime(t.staleTime)
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(F).catch(F);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = pn(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(F).catch(F);
      }
      resumePausedMutations() {
        return Te.isOnline()
          ? a(this, X).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return a(this, S);
      }
      getMutationCache() {
        return a(this, X);
      }
      getDefaultOptions() {
        return a(this, V);
      }
      setDefaultOptions(e) {
        g(this, V, e);
      }
      setQueryDefaults(e, t) {
        a(this, fe).set(we(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...a(this, fe).values()];
        let r = {};
        return (
          t.forEach((s) => {
            Ee(e, s.queryKey) && (r = { ...r, ...s.defaultOptions });
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        a(this, pe).set(we(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...a(this, pe).values()];
        let r = {};
        return (
          t.forEach((s) => {
            Ee(e, s.mutationKey) && (r = { ...r, ...s.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...a(this, V).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Ve(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === ke && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...a(this, V).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        a(this, S).clear(), a(this, X).clear();
      }
    }),
    (S = new WeakMap()),
    (X = new WeakMap()),
    (V = new WeakMap()),
    (fe = new WeakMap()),
    (pe = new WeakMap()),
    (J = new WeakMap()),
    (ge = new WeakMap()),
    (me = new WeakMap()),
    St),
  yn = Pt.createContext(void 0),
  vn = ({ client: e, children: t }) => (
    Pt.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    Lt.jsx(yn.Provider, { value: e, children: t })
  );
const bn = {
    global: {
      css: () => `
        /* для глобального Ripple */
        *[data-pd-ripple="true"]{
            overflow: hidden;
            position: relative;
        }
        span[data-p-ink-active="true"]{
            animation: ripple 0.4s linear;
        }
        @keyframes ripple {
            100% {
                opacity: 0;
                transform: scale(2.5);
            }
        }
        span[data-pc-name="ripple"]{
          display: block;
          position: absolute;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 100%;
          transform: scale(0);
        }
        button[data-pc-name="button"] {
          position: relative;
          overflow: hidden;
        }
        .p-ink-active {
          background-color: rgba(255, 255, 255, 0.32);
        }
        /* для глобального Ripple
    `,
    },
    inputtext: {
      root: ({ props: e }) => ({
        className: ye(
          "font-Golos text-Black bg-Grey_5 w-full rounded-md px-3 py-5 pb-[11px] pt-[29px] text-sm/4 font-normal border border-transparent outline-none",
          { "p-filled": e.value !== "" },
          { "text-Grey_2 pointer-events-none": e.disabled },
          { "border-Yellow_Light": e.status === "warning" },
          { "border-Red text-Red": e.invalid }
        ),
      }),
    },
    dropdown: {
      root: ({ props: e }) => ({
        className: ye(
          "flex w-full justify-between rounded-md border border-transparent bg-Grey_5 py-5 pb-[11px] pl-3 pr-9 pt-[29px] font-Golos text-sm/4 font-normal text-Black outline-none transition-colors duration-200 ease-in-out",
          { "p-filled": e.value !== null },
          { "text-Grey_2 pointer-events-none": e.disabled },
          { "border-Yellow_Light": e.status === "warning" },
          { "border-Red text-Red": e.invalid }
        ),
      }),
      input: {
        className: "h-4 overflow-hidden overflow-ellipsis whitespace-nowrap",
      },
      trigger: ({ props: e }) => ({
        className: ye(
          "absolute right-3 top-0 bottom-0 m-auto flex w-6 h-6 justify-center items-center text-Grey_2 bg-transparent rounded-tr-md rounded-br-md transition-all aria-expanded:rotate-180",
          { "[margin:unset] [top:unset] bottom-2": e.value !== null }
        ),
      }),
      wrapper: {
        className: ye(
          "max-h-[200px] mt-1 py-3 overflow-auto",
          "bg-Grey_5 text-gray-700 border-0 rounded-md"
        ),
      },
      list: { className: "grid gap-y-[6px]" },
      item: ({ context: e }) => ({
        className: ye(
          "relative overflow-hidden px-4 py-[6px] font-Golos text-[0.875rem]/4 font-normal text-Black whitespace-nowrap",
          { "text-Corp_1": e.selected },
          { "text-Grey_3 pointer-events-none": e.disabled }
        ),
      }),
      transition: {
        timeout: 120,
        classNames: {
          enter: "opacity-0 scale-y-90",
          enterActive:
            "opacity-100 !scale-100 transition-transform transition-opacity duration-120 ease-in",
          exit: "opacity-100",
          exitActive: "!opacity-0 transition-opacity duration-100 ease-linear",
        },
      },
    },
  },
  wn = new mn();
Xs();
const Yt = ({ children: e }) =>
    ze.jsxDEV(
      vn,
      {
        client: wn,
        children: ze.jsxDEV(
          rr,
          {
            value: {
              unstyled: !0,
              pt: bn,
              ripple: !0,
              ptOptions: {
                mergeSections: !0,
                mergeProps: !0,
                classNameMergeFunction: sr,
              },
            },
            children: e,
          },
          void 0,
          !1,
          {
            fileName:
              "/Users/andrey/Documents/work/marriator/.storybook/preview.tsx",
            lineNumber: 23,
            columnNumber: 7,
          },
          void 0
        ),
      },
      void 0,
      !1,
      {
        fileName:
          "/Users/andrey/Documents/work/marriator/.storybook/preview.tsx",
        lineNumber: 22,
        columnNumber: 5,
      },
      void 0
    ),
  On = {
    parameters: {
      controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    },
    decorators: [nr(Yt)],
  };
Yt.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Provider",
  props: {
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
  },
};
export { Yt as Provider, On as default };
