var Bt = Object.defineProperty;
var Gt = (e, t, r) =>
  t in e
    ? Bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var x = (e, t, r) => (Gt(e, typeof t != "symbol" ? t + "" : t, r), r),
  Ie = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  };
var a = (e, t, r) => (
    Ie(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  m = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  p = (e, t, r, s) => (
    Ie(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r
  );
var xe = (e, t, r, s) => ({
    set _(n) {
      p(e, t, n, r);
    },
    get _() {
      return a(e, t, s);
    },
  }),
  P = (e, t, r) => (Ie(e, t, "access private method"), r);
import { j as Qe } from "./jsx-dev-runtime-BETcGmrp.js";
import { b as Qt, j as yt } from "./preview-CJIjO9RJ.js";
import {
  i as $e,
  d as S,
  E as Ke,
  t as $t,
  s as Xe,
  R as Kt,
} from "./index-zmhHS-aW.js";
import { r as vt } from "./index-BdMw_Ax9.js";
import { b as Xt } from "./api.esm-DPODbszm.js";
import { c as L, t as Vt } from "./utils-Dyyo_Bbn.js";
import "./mapValues-ChqGHMta.js";
import "./index-BwQhoTO9.js";
import "./isPlainObject-CqtoKmPc.js";
import "./index-C-I6vmrZ.js";
import "./index-DrFu-skq.js";
function zt(e, t) {
  const r = e.emit;
  if (r._isPiped) return;
  const s = function (i, ...o) {
    return t.emit(i, ...o), r.call(this, i, ...o);
  };
  (s._isPiped = !0), (e.emit = s);
}
function Yt(e) {
  const t = [...e];
  return Object.freeze(t), t;
}
class Jt {
  constructor() {
    x(this, "subscriptions", []);
  }
  async dispose() {
    await Promise.all(this.subscriptions.map((t) => t()));
  }
}
class Zt {
  constructor(t) {
    x(this, "handlers");
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
class er extends Jt {
  constructor(...r) {
    super();
    x(this, "handlersController");
    x(this, "emitter");
    x(this, "publicEmitter");
    x(this, "events");
    $e(
      this.validateHandlers(r),
      S.formatMessage(
        "Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?"
      )
    ),
      (this.handlersController = new Zt(r)),
      (this.emitter = new Ke()),
      (this.publicEmitter = new Ke()),
      zt(this.emitter, this.publicEmitter),
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
    $e(
      this.validateHandlers(r),
      S.formatMessage(
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
    return Yt(this.handlersController.currentHandlers());
  }
  createLifeCycleEvents() {
    return {
      on: (...r) => this.publicEmitter.on(...r),
      removeListener: (...r) => this.publicEmitter.removeListener(...r),
      removeAllListeners: (...r) => this.publicEmitter.removeAllListeners(...r),
    };
  }
}
var tr = async (e) => {
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
const rr = async ({
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
async function sr(e, t = "warn") {
  const r = new URL(e.url),
    s = $t(r) + r.search,
    n = `intercepted a request without a matching request handler:

  • ${e.method} ${s}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`;
  function i(o) {
    switch (o) {
      case "error":
        throw (
          (S.error("Error: %s", n),
          new Error(
            S.formatMessage(
              'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
            )
          ))
        );
      case "warn": {
        S.warn("Warning: %s", n);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          S.formatMessage(
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
function nr(e, t) {
  Xe.add({ ...e, url: e.url.toString() }, t), Xe.persist();
}
async function bt(e, t, r, s, n, i) {
  var f, g, l, d, y, b;
  if (
    (n.emit("request:start", { request: e, requestId: t }),
    e.headers.get("x-msw-intention") === "bypass")
  ) {
    n.emit("request:end", { request: e, requestId: t }),
      (f = i == null ? void 0 : i.onPassthroughResponse) == null ||
        f.call(i, e);
    return;
  }
  const o = await tr(() =>
    rr({
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
    await sr(e, s.onUnhandledRequest),
      n.emit("request:unhandled", { request: e, requestId: t }),
      n.emit("request:end", { request: e, requestId: t }),
      (g = i == null ? void 0 : i.onPassthroughResponse) == null ||
        g.call(i, e);
    return;
  }
  const { response: u } = o.data;
  if (!u) {
    n.emit("request:end", { request: e, requestId: t }),
      (l = i == null ? void 0 : i.onPassthroughResponse) == null ||
        l.call(i, e);
    return;
  }
  if (u.status === 302 && u.headers.get("x-msw-intention") === "passthrough") {
    n.emit("request:end", { request: e, requestId: t }),
      (d = i == null ? void 0 : i.onPassthroughResponse) == null ||
        d.call(i, e);
    return;
  }
  nr(e, u), n.emit("request:match", { request: e, requestId: t });
  const c = o.data,
    h =
      ((y = i == null ? void 0 : i.transformResponse) == null
        ? void 0
        : y.call(i, u)) || u;
  return (
    (b = i == null ? void 0 : i.onMockedResponse) == null || b.call(i, h, c),
    n.emit("request:end", { request: e, requestId: t }),
    h
  );
}
const ir = (e) => (t) => {
  const { themes: r = [], selectedTheme: s } = Qt(),
    n = r.find(({ name: i }) => !!s && i === s);
  return yt.jsx(e, {
    theme: n == null ? void 0 : n.themeObject,
    children: t(),
  });
};
function or(e) {
  return {
    status: e.status,
    statusText: e.statusText,
    headers: Object.fromEntries(e.headers.entries()),
  };
}
function Ve(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function wt(e, t) {
  return Object.entries(t).reduce((r, [s, n]) => {
    const i = r[s];
    return Array.isArray(i) && Array.isArray(n)
      ? ((r[s] = i.concat(n)), r)
      : Ve(i) && Ve(n)
      ? ((r[s] = wt(i, n)), r)
      : ((r[s] = n), r);
  }, Object.assign({}, e));
}
var ar = {},
  ur = /(%?)(%([sdijo]))/g;
function lr(e, t) {
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
function qe(e, ...t) {
  if (t.length === 0) return e;
  let r = 0,
    s = e.replace(ur, (n, i, o, u) => {
      const c = t[r],
        h = lr(c, u);
      return i ? n : (r++, h);
    });
  return (
    r < t.length && (s += ` ${t.slice(r).join(" ")}`),
    (s = s.replace(/%{2,2}/g, "%")),
    s
  );
}
var cr = 2;
function hr(e) {
  if (!e.stack) return;
  const t = e.stack.split(`
`);
  t.splice(1, cr),
    (e.stack = t.join(`
`));
}
var dr = class extends Error {
    constructor(e, ...t) {
      super(e),
        (this.message = e),
        (this.name = "Invariant Violation"),
        (this.message = qe(e, ...t)),
        hr(this);
    }
  },
  se = (e, t, ...r) => {
    if (!e) throw new dr(t, ...r);
  };
se.as = (e, t, r, ...s) => {
  if (!t) {
    const n = s.length === 0 ? r : qe(r, s);
    let i;
    try {
      i = Reflect.construct(e, [n]);
    } catch {
      i = e(n);
    }
    throw i;
  }
};
function Ue() {
  if (typeof navigator < "u" && navigator.product === "ReactNative") return !0;
  if (typeof process < "u") {
    const e = process.type;
    return e === "renderer" || e === "worker"
      ? !1
      : !!(process.versions && process.versions.node);
  }
  return !1;
}
var We = async (e) => {
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
function fr(e) {
  return new URL(e, location.href).href;
}
function _e(e, t, r) {
  return (
    [e.active, e.installing, e.waiting]
      .filter((o) => o != null)
      .find((o) => r(o.scriptURL, t)) || null
  );
}
var pr = async (e, t = {}, r) => {
  const s = fr(e),
    n = await navigator.serviceWorker
      .getRegistrations()
      .then((u) => u.filter((c) => _e(c, s, r)));
  !navigator.serviceWorker.controller && n.length > 0 && location.reload();
  const [i] = n;
  if (i) return i.update().then(() => [_e(i, s, r), i]);
  const o = await We(async () => {
    const u = await navigator.serviceWorker.register(e, t);
    return [_e(u, s, r), u];
  });
  if (o.error) {
    if (o.error.message.includes("(404)")) {
      const c = new URL((t == null ? void 0 : t.scope) || "/", location.href);
      throw new Error(
        S.formatMessage(`Failed to register a Service Worker for scope ('${c.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      S.formatMessage(
        `Failed to register the Service Worker:

%s`,
        o.error.message
      )
    );
  }
  return o.data;
};
function kt(e = {}) {
  if (e.quiet) return;
  const t = e.message || "Mocking enabled.";
  console.groupCollapsed(
    `%c${S.formatMessage(t)}`,
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
async function gr(e, t) {
  var r, s;
  if (
    (e.workerChannel.send("MOCK_ACTIVATE"),
    await e.events.once("MOCKING_ENABLED"),
    e.isMockingEnabled)
  ) {
    S.warn(
      'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
    );
    return;
  }
  (e.isMockingEnabled = !0),
    kt({
      quiet: t.quiet,
      workerScope: (r = e.registration) == null ? void 0 : r.scope,
      workerUrl: (s = e.worker) == null ? void 0 : s.scriptURL,
    });
}
var mr = class {
  constructor(e) {
    this.port = e;
  }
  postMessage(e, ...t) {
    const [r, s] = t;
    this.port.postMessage({ type: e, data: r }, { transfer: s });
  }
};
function yr(e) {
  if (!["HEAD", "GET"].includes(e.method)) return e.body;
}
function vr(e) {
  return new Request(e.url, { ...e, body: yr(e) });
}
var br = (e, t) => async (r, s) => {
  const n = new mr(r.ports[0]),
    i = s.payload.id,
    o = vr(s.payload),
    u = o.clone(),
    c = o.clone();
  Kt.cache.set(o, c), e.requests.set(i, c);
  try {
    await bt(o, i, e.getRequestHandlers(), t, e.emitter, {
      onPassthroughResponse() {
        n.postMessage("PASSTHROUGH");
      },
      async onMockedResponse(h, { handler: f, parsedResult: g }) {
        const l = h.clone(),
          d = h.clone(),
          y = or(h);
        if (e.supports.readableStreamTransfer) {
          const b = h.body;
          n.postMessage("MOCK_RESPONSE", { ...y, body: b }, b ? [b] : void 0);
        } else {
          const b = h.body === null ? null : await l.arrayBuffer();
          n.postMessage("MOCK_RESPONSE", { ...y, body: b });
        }
        t.quiet ||
          e.emitter.once("response:mocked", () => {
            f.log({ request: u, response: d, parsedResult: g });
          });
      },
    });
  } catch (h) {
    h instanceof Error &&
      (S.error(
        `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
        o.method,
        o.url,
        h.stack ?? h
      ),
      n.postMessage("MOCK_RESPONSE", {
        status: 500,
        statusText: "Request Handler Error",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: h.name,
          message: h.message,
          stack: h.stack,
        }),
      }));
  }
};
async function wr(e) {
  e.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload: t } = await e.events.once("INTEGRITY_CHECK_RESPONSE");
  t.checksum !== "26357c79639bfa20d64c0efca2a87423" &&
    S.warn(`The currently registered Service Worker has been generated by a different version of MSW (${t.packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`);
}
var kr = new TextEncoder();
function Er(e) {
  return kr.encode(e);
}
function Sr(e, t) {
  return new TextDecoder(t).decode(e);
}
function Pr(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
var qr = new Set([101, 103, 204, 205, 304]);
function Et(e) {
  return qr.has(e);
}
var oe = Symbol("isPatchedModule"),
  Rr = Object.defineProperty,
  xr = (e, t) => {
    for (var r in t) Rr(e, r, { get: t[r], enumerable: !0 });
  },
  Fe = {};
xr(Fe, {
  blue: () => Tr,
  gray: () => He,
  green: () => Cr,
  red: () => Mr,
  yellow: () => Lr,
});
function Lr(e) {
  return `\x1B[33m${e}\x1B[0m`;
}
function Tr(e) {
  return `\x1B[34m${e}\x1B[0m`;
}
function He(e) {
  return `\x1B[90m${e}\x1B[0m`;
}
function Mr(e) {
  return `\x1B[31m${e}\x1B[0m`;
}
function Cr(e) {
  return `\x1B[32m${e}\x1B[0m`;
}
var Me = Ue(),
  St = class {
    constructor(e) {
      x(this, "prefix");
      (this.name = e), (this.prefix = `[${this.name}]`);
      const t = ze("DEBUG"),
        r = ze("LOG_LEVEL");
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
      return new St(`${this.name}:${e}`);
    }
    debug(e, ...t) {
      this.logEntry({
        level: "debug",
        message: He(e),
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
      const r = new Ar();
      return (s, ...n) => {
        r.measure(),
          this.logEntry({
            level: "info",
            message: `${s} ${He(`${r.deltaTime}ms`)}`,
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
        u = (n == null ? void 0 : n.timestamp) || "gray",
        c = (n == null ? void 0 : n.prefix) || "gray",
        h = { timestamp: Fe[u], prefix: Fe[c] };
      this.getWriter(t)(
        [h.timestamp(this.formatTimestamp(o.timestamp))]
          .concat(s != null ? h.prefix(s) : [])
          .concat(Ye(r))
          .join(" "),
        ...i.map(Ye)
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
          return Ir;
        case "warning":
          return _r;
        case "error":
          return Dr;
      }
    }
  },
  Ar = class {
    constructor() {
      x(this, "startTime");
      x(this, "endTime");
      x(this, "deltaTime");
      this.startTime = performance.now();
    }
    measure() {
      this.endTime = performance.now();
      const e = this.endTime - this.startTime;
      this.deltaTime = e.toFixed(2);
    }
  },
  U = () => {};
function Ir(e, ...t) {
  if (Me) {
    process.stdout.write(
      qe(e, ...t) +
        `
`
    );
    return;
  }
  console.log(e, ...t);
}
function _r(e, ...t) {
  if (Me) {
    process.stderr.write(
      qe(e, ...t) +
        `
`
    );
    return;
  }
  console.warn(e, ...t);
}
function Dr(e, ...t) {
  if (Me) {
    process.stderr.write(
      qe(e, ...t) +
        `
`
    );
    return;
  }
  console.error(e, ...t);
}
function ze(e) {
  var t;
  return Me ? ar[e] : (t = globalThis[e]) == null ? void 0 : t.toString();
}
function ve(e, t) {
  return e !== void 0 && e !== t;
}
function Ye(e) {
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
var Fr = class extends Error {
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
  Pt = class {
    static listenerCount(e, t) {
      return e.listenerCount(t);
    }
    constructor() {
      (this.events = new Map()),
        (this.maxListeners = Pt.defaultMaxListeners),
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
        const s = new Fr(this, e, this.listenerCount(e));
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
  qt = Pt;
qt.defaultMaxListeners = 10;
var Hr = "x-interceptors-internal-request-id";
function Je(e) {
  return globalThis[e] || void 0;
}
function jr(e, t) {
  globalThis[e] = t;
}
function Or(e) {
  delete globalThis[e];
}
var Ne = class {
  constructor(e) {
    (this.symbol = e),
      (this.readyState = "INACTIVE"),
      (this.emitter = new qt()),
      (this.subscriptions = []),
      (this.logger = new St(e.description)),
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
      e.info("global symbol deleted:", Je(this.symbol)),
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
    const t = Je(this.symbol);
    return (
      this.logger.info(
        "retrieved global instance:",
        (e = t == null ? void 0 : t.constructor) == null ? void 0 : e.name
      ),
      t
    );
  }
  setInstance() {
    jr(this.symbol, this),
      this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    Or(this.symbol),
      this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function Rt() {
  return Math.random().toString(16).slice(2);
}
var je = class extends Ne {
  constructor(e) {
    (je.symbol = Symbol(e.name)),
      super(je.symbol),
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
function Ur(e) {
  return (t, r) => {
    var u;
    const { payload: s } = r,
      { requestId: n } = s,
      i = e.requests.get(n);
    if ((e.requests.delete(n), (u = s.type) != null && u.includes("opaque")))
      return;
    const o =
      s.status === 0
        ? Response.error()
        : new Response(Et(s.status) ? null : s.body, s);
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
function Wr(e, t) {
  !(t != null && t.quiet) &&
    !location.href.startsWith(e.scope) &&
    S.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
}
var Nr = (e) =>
  function (r, s) {
    return (async () => {
      e.events.removeAllListeners(),
        e.workerChannel.on("REQUEST", br(e, r)),
        e.workerChannel.on("RESPONSE", Ur(e));
      const o = await pr(
          r.serviceWorker.url,
          r.serviceWorker.options,
          r.findWorker
        ),
        [u, c] = o;
      if (!u) {
        const h =
          s != null && s.findWorker
            ? S.formatMessage(
                `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
                r.serviceWorker.url
              )
            : S.formatMessage(
                `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
                r.serviceWorker.url,
                location.host
              );
        throw new Error(h);
      }
      return (
        (e.worker = u),
        (e.registration = c),
        e.events.addListener(window, "beforeunload", () => {
          u.state !== "redundant" && e.workerChannel.send("CLIENT_CLOSED"),
            window.clearInterval(e.keepAliveInterval);
        }),
        await wr(e).catch((h) => {
          S.error(
            "Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues), including the original error below."
          ),
            console.error(h);
        }),
        (e.keepAliveInterval = window.setInterval(
          () => e.workerChannel.send("KEEPALIVE_REQUEST"),
          5e3
        )),
        Wr(c, e.startOptions),
        c
      );
    })().then(async (o) => {
      const u = o.installing || o.waiting;
      return (
        u &&
          (await new Promise((c) => {
            u.addEventListener("statechange", () => {
              if (u.state === "activated") return c();
            });
          })),
        await gr(e, r).catch((c) => {
          throw new Error(
            `Failed to enable mocking: ${c == null ? void 0 : c.message}`
          );
        }),
        o
      );
    });
  };
function xt(e = {}) {
  e.quiet ||
    console.log(
      `%c${S.formatMessage("Mocking disabled.")}`,
      "color:orangered;font-weight:bold;"
    );
}
var Br = (e) =>
    function () {
      var r;
      if (!e.isMockingEnabled) {
        S.warn(
          'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
        );
        return;
      }
      e.workerChannel.send("MOCK_DEACTIVATE"),
        (e.isMockingEnabled = !1),
        window.clearInterval(e.keepAliveInterval),
        xt({ quiet: (r = e.startOptions) == null ? void 0 : r.quiet });
    },
  Gr = {
    serviceWorker: { url: "/ng-notes/mockServiceWorker.js", options: null },
    quiet: !1,
    waitUntilReady: !0,
    onUnhandledRequest: "warn",
    findWorker(e, t) {
      return e === t;
    },
  };
function Qr() {
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
var $,
  ae,
  Le,
  ut,
  Lt =
    ((ut = class extends Promise {
      constructor(t = null) {
        const r = Qr();
        super((s, n) => {
          r(s, n), t == null || t(r.resolve, r.reject);
        });
        m(this, ae);
        m(this, $, void 0);
        x(this, "resolve");
        x(this, "reject");
        p(this, $, r),
          (this.resolve = a(this, $).resolve),
          (this.reject = a(this, $).reject);
      }
      get state() {
        return a(this, $).state;
      }
      get rejectionReason() {
        return a(this, $).rejectionReason;
      }
      then(t, r) {
        return P(this, ae, Le).call(this, super.then(t, r));
      }
      catch(t) {
        return P(this, ae, Le).call(this, super.catch(t));
      }
      finally(t) {
        return P(this, ae, Le).call(this, super.finally(t));
      }
    }),
    ($ = new WeakMap()),
    (ae = new WeakSet()),
    (Le = function (t) {
      return Object.defineProperties(t, {
        resolve: { configurable: !0, value: this.resolve },
        reject: { configurable: !0, value: this.reject },
      });
    }),
    ut),
  $r = class {
    constructor(e) {
      (this.request = e), (this.responsePromise = new Lt());
    }
    respondWith(e) {
      se(
        this.responsePromise.state === "pending",
        'Failed to respond to "%s %s" request: the "request" event has already been responded to.',
        this.request.method,
        this.request.url
      ),
        this.responsePromise.resolve(e);
    }
  };
function Tt(e) {
  const t = new $r(e);
  return (
    Reflect.set(e, "respondWith", t.respondWith.bind(t)),
    { interactiveRequest: e, requestController: t }
  );
}
async function Mt(e, t, ...r) {
  const s = e.listeners(t);
  if (s.length !== 0) for (const n of s) await n.apply(e, r);
}
function Kr(e, t) {
  try {
    return e[t], !0;
  } catch {
    return !1;
  }
}
function Xr(e) {
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
var Ct = class extends Ne {
    constructor() {
      super(Ct.symbol);
    }
    checkEnvironment() {
      return typeof globalThis < "u" && typeof globalThis.fetch < "u";
    }
    async setup() {
      const e = globalThis.fetch;
      se(!e[oe], 'Failed to patch the "fetch" module: already patched.'),
        (globalThis.fetch = async (t, r) => {
          var s;
          const n = Rt(),
            i =
              typeof t == "string" && typeof location < "u" && !Xr(t)
                ? new URL(t, location.origin)
                : t,
            o = new Request(i, r);
          this.logger.info("[%s] %s", o.method, o.url);
          const { interactiveRequest: u, requestController: c } = Tt(o);
          this.logger.info(
            'emitting the "request" event for %d listener(s)...',
            this.emitter.listenerCount("request")
          ),
            this.emitter.once("request", ({ requestId: d }) => {
              d === n &&
                c.responsePromise.state === "pending" &&
                c.responsePromise.resolve(void 0);
            }),
            this.logger.info("awaiting for the mocked response...");
          const h = u.signal,
            f = new Lt();
          h &&
            h.addEventListener(
              "abort",
              () => {
                f.reject(h.reason);
              },
              { once: !0 }
            );
          const g = await We(async () => {
            const d = Mt(this.emitter, "request", { request: u, requestId: n });
            await Promise.race([f, d, c.responsePromise]),
              this.logger.info("all request listeners have been resolved!");
            const y = await c.responsePromise;
            return this.logger.info("event.respondWith called with:", y), y;
          });
          if (f.state === "rejected") return Promise.reject(f.rejectionReason);
          if (g.error) return Promise.reject(Ze(g.error));
          const l = g.data;
          if (l && !((s = o.signal) != null && s.aborted)) {
            if (
              (this.logger.info("received mocked response:", l),
              Kr(l, "type") && l.type === "error")
            )
              return (
                this.logger.info(
                  "received a network error response, rejecting the request promise..."
                ),
                Promise.reject(Ze(l))
              );
            const d = l.clone();
            return (
              this.emitter.emit("response", {
                response: d,
                isMockedResponse: !0,
                request: u,
                requestId: n,
              }),
              Object.defineProperty(l, "url", {
                writable: !1,
                enumerable: !0,
                configurable: !1,
                value: o.url,
              }),
              l
            );
          }
          return (
            this.logger.info("no mocked response received!"),
            e(o).then((d) => {
              const y = d.clone();
              return (
                this.logger.info("original fetch performed", y),
                this.emitter.emit("response", {
                  response: y,
                  isMockedResponse: !1,
                  request: u,
                  requestId: n,
                }),
                d
              );
            })
          );
        }),
        Object.defineProperty(globalThis.fetch, oe, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.fetch, oe, { value: void 0 }),
            (globalThis.fetch = e),
            this.logger.info(
              'restored native "globalThis.fetch"!',
              globalThis.fetch.name
            );
        });
    }
  },
  At = Ct;
At.symbol = Symbol("fetch");
function Ze(e) {
  return Object.assign(new TypeError("Failed to fetch"), { cause: e });
}
function Vr(e, t) {
  const r = new Uint8Array(e.byteLength + t.byteLength);
  return r.set(e, 0), r.set(t, e.byteLength), r;
}
var It = class {
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
  zr = class extends It {
    constructor(e, t) {
      super(e),
        (this.lengthComputable =
          (t == null ? void 0 : t.lengthComputable) || !1),
        (this.composed = (t == null ? void 0 : t.composed) || !1),
        (this.loaded = (t == null ? void 0 : t.loaded) || 0),
        (this.total = (t == null ? void 0 : t.total) || 0);
    }
  },
  Yr = typeof ProgressEvent < "u";
function Jr(e, t, r) {
  const s = [
      "error",
      "progress",
      "loadstart",
      "loadend",
      "load",
      "timeout",
      "abort",
    ],
    n = Yr ? ProgressEvent : zr;
  return s.includes(t)
    ? new n(t, {
        lengthComputable: !0,
        loaded: (r == null ? void 0 : r.loaded) || 0,
        total: (r == null ? void 0 : r.total) || 0,
      })
    : new It(t, { target: e, currentTarget: e });
}
function _t(e, t) {
  if (!(t in e)) return null;
  if (Object.prototype.hasOwnProperty.call(e, t)) return e;
  const s = Reflect.getPrototypeOf(e);
  return s ? _t(s, t) : null;
}
function et(e, t) {
  return new Proxy(e, Zr(t));
}
function Zr(e) {
  const {
      constructorCall: t,
      methodCall: r,
      getProperty: s,
      setProperty: n,
    } = e,
    i = {};
  return (
    typeof t < "u" &&
      (i.construct = function (o, u, c) {
        const h = Reflect.construct.bind(null, o, u, c);
        return t.call(c, u, h);
      }),
    (i.set = function (o, u, c) {
      const h = () => {
        const f = _t(o, u) || o,
          g = Reflect.getOwnPropertyDescriptor(f, u);
        return typeof (g == null ? void 0 : g.set) < "u"
          ? (g.set.apply(o, [c]), !0)
          : Reflect.defineProperty(f, u, {
              writable: !0,
              enumerable: !0,
              configurable: !0,
              value: c,
            });
      };
      return typeof n < "u" ? n.call(o, [u, c], h) : h();
    }),
    (i.get = function (o, u, c) {
      const h = () => o[u],
        f = typeof s < "u" ? s.call(o, [u, c], h) : h();
      return typeof f == "function"
        ? (...g) => {
            const l = f.bind(o, ...g);
            return typeof r < "u" ? r.call(o, [u, g], l) : l();
          }
        : f;
    }),
    i
  );
}
function es(e) {
  return [
    "application/xhtml+xml",
    "application/xml",
    "image/svg+xml",
    "text/html",
    "text/xml",
  ].some((r) => e.startsWith(r));
}
function ts(e) {
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function rs(e, t) {
  const r = Et(e.status) ? null : t;
  return new Response(r, {
    status: e.status,
    statusText: e.statusText,
    headers: ss(e.getAllResponseHeaders()),
  });
}
function ss(e) {
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
var tt = Symbol("isMockedResponse"),
  ns = Ue(),
  is = class {
    constructor(e, t) {
      (this.initialRequest = e),
        (this.logger = t),
        (this.method = "GET"),
        (this.url = null),
        (this.events = new Map()),
        (this.requestId = Rt()),
        (this.requestHeaders = new Headers()),
        (this.responseBuffer = new Uint8Array()),
        (this.request = et(e, {
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
                const [o, u] = s;
                return (
                  typeof u > "u"
                    ? ((this.method = "GET"), (this.url = rt(o)))
                    : ((this.method = o), (this.url = rt(u))),
                  (this.logger = this.logger.extend(
                    `${this.method} ${this.url.href}`
                  )),
                  this.logger.info("open", this.method, this.url.href),
                  n()
                );
              }
              case "addEventListener": {
                const [o, u] = s;
                return (
                  this.registerEvent(o, u),
                  this.logger.info("addEventListener", o, u),
                  n()
                );
              }
              case "setRequestHeader": {
                const [o, u] = s;
                return (
                  this.requestHeaders.set(o, u),
                  this.logger.info("setRequestHeader", o, u),
                  n()
                );
              }
              case "send": {
                const [o] = s;
                o != null &&
                  (this.requestBody = typeof o == "string" ? Er(o) : o),
                  this.request.addEventListener("load", () => {
                    if (typeof this.onResponse < "u") {
                      const h = rs(this.request, this.request.response);
                      this.onResponse.call(this, {
                        response: h,
                        isMockedResponse: tt in this.request,
                        request: u,
                        requestId: this.requestId,
                      });
                    }
                  });
                const u = this.toFetchApiRequest();
                (
                  ((i = this.onRequest) == null
                    ? void 0
                    : i.call(this, {
                        request: u,
                        requestId: this.requestId,
                      })) || Promise.resolve()
                ).finally(() => {
                  if (this.request.readyState < this.request.LOADING)
                    return (
                      this.logger.info(
                        "request callback settled but request has not been handled (readystate %d), performing as-is...",
                        this.request.readyState
                      ),
                      ns && this.request.setRequestHeader(Hr, this.requestId),
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
        ne(this.request, tt, !0),
        ne(this.request, "status", e.status),
        ne(this.request, "statusText", e.statusText),
        ne(this.request, "responseURL", this.url.href),
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
              (this.responseBuffer = Vr(this.responseBuffer, i)),
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
      return Sr(this.responseBuffer);
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
          const e = ts(this.responseBufferToText());
          return this.logger.info("resolved response JSON", e), e;
        }
        case "arraybuffer": {
          const e = Pr(this.responseBuffer);
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
        (se(
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
        (se(
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
        : es(e)
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
      ne(this.request, "readyState", e),
        this.logger.info("set readyState to: %d", e),
        e !== this.request.UNSENT &&
          (this.logger.info('triggerring "readystatechange" event...'),
          this.trigger("readystatechange"));
    }
    trigger(e, t) {
      const r = this.request[`on${e}`],
        s = Jr(this.request, e, t);
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
        t = et(e.headers, {
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
        ne(e, "headers", t),
        this.logger.info("converted request to a Fetch API Request!", e),
        e
      );
    }
  };
function rt(e) {
  return typeof location > "u"
    ? new URL(e)
    : new URL(e.toString(), location.href);
}
function ne(e, t, r) {
  Reflect.defineProperty(e, t, { writable: !0, enumerable: !0, value: r });
}
function os({ emitter: e, logger: t }) {
  return new Proxy(globalThis.XMLHttpRequest, {
    construct(s, n, i) {
      t.info("constructed new XMLHttpRequest");
      const o = Reflect.construct(s, n, i),
        u = Object.getOwnPropertyDescriptors(s.prototype);
      for (const h in u) Reflect.defineProperty(o, h, u[h]);
      const c = new is(o, t);
      return (
        (c.onRequest = async function ({ request: h, requestId: f }) {
          const { interactiveRequest: g, requestController: l } = Tt(h);
          this.logger.info("awaiting mocked response..."),
            e.once("request", ({ requestId: b }) => {
              b === f &&
                l.responsePromise.state === "pending" &&
                l.respondWith(void 0);
            });
          const d = await We(async () => {
            this.logger.info(
              'emitting the "request" event for %s listener(s)...',
              e.listenerCount("request")
            ),
              await Mt(e, "request", { request: g, requestId: f }),
              this.logger.info('all "request" listeners settled!');
            const b = await l.responsePromise;
            return this.logger.info("event.respondWith called with:", b), b;
          });
          if (d.error) {
            this.logger.info(
              "request listener threw an exception, aborting request...",
              d.error
            ),
              c.errorWith(d.error);
            return;
          }
          const y = d.data;
          if (typeof y < "u") {
            if (
              (this.logger.info(
                "received mocked response: %d %s",
                y.status,
                y.statusText
              ),
              y.type === "error")
            ) {
              this.logger.info(
                "received a network error response, rejecting the request promise..."
              ),
                c.errorWith(new TypeError("Network error"));
              return;
            }
            return c.respondWith(y);
          }
          this.logger.info(
            "no mocked response received, performing request as-is..."
          );
        }),
        (c.onResponse = async function ({
          response: h,
          isMockedResponse: f,
          request: g,
          requestId: l,
        }) {
          this.logger.info(
            'emitting the "response" event for %s listener(s)...',
            e.listenerCount("response")
          ),
            e.emit("response", {
              response: h,
              isMockedResponse: f,
              request: g,
              requestId: l,
            });
        }),
        c.request
      );
    },
  });
}
var Dt = class extends Ne {
    constructor() {
      super(Dt.interceptorSymbol);
    }
    checkEnvironment() {
      return typeof globalThis.XMLHttpRequest < "u";
    }
    setup() {
      const e = this.logger.extend("setup");
      e.info('patching "XMLHttpRequest" module...');
      const t = globalThis.XMLHttpRequest;
      se(
        !t[oe],
        'Failed to patch the "XMLHttpRequest" module: already patched.'
      ),
        (globalThis.XMLHttpRequest = os({
          emitter: this.emitter,
          logger: this.logger,
        })),
        e.info(
          'native "XMLHttpRequest" module patched!',
          globalThis.XMLHttpRequest.name
        ),
        Object.defineProperty(globalThis.XMLHttpRequest, oe, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.XMLHttpRequest, oe, {
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
  Ft = Dt;
Ft.interceptorSymbol = Symbol("xhr");
function as(e, t) {
  const r = new je({ name: "fallback", interceptors: [new At(), new Ft()] });
  return (
    r.on("request", async ({ request: s, requestId: n }) => {
      const i = s.clone(),
        o = await bt(s, n, e.getRequestHandlers(), t, e.emitter, {
          onMockedResponse(u, { handler: c, parsedResult: h }) {
            t.quiet ||
              e.emitter.once("response:mocked", ({ response: f }) => {
                c.log({ request: i, response: f, parsedResult: h });
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
function us(e) {
  return async function (r) {
    (e.fallbackInterceptor = as(e, r)),
      kt({ message: "Mocking enabled (fallback mode).", quiet: r.quiet });
  };
}
function ls(e) {
  return function () {
    var r, s;
    (r = e.fallbackInterceptor) == null || r.dispose(),
      xt({ quiet: (s = e.startOptions) == null ? void 0 : s.quiet });
  };
}
function cs() {
  try {
    const e = new ReadableStream({ start: (r) => r.close() });
    return new MessageChannel().port1.postMessage(e, [e]), !0;
  } catch {
    return !1;
  }
}
var hs = class extends er {
  constructor(...t) {
    super(...t);
    x(this, "context");
    x(this, "startHandler", null);
    x(this, "stopHandler", null);
    x(this, "listeners");
    se(
      !Ue(),
      S.formatMessage(
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
            const o = (u) => {
              try {
                const c = u.data;
                c.type === r && n(c);
              } catch (c) {
                i(c);
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
        readableStreamTransfer: cs(),
      },
    };
    return (
      (this.startHandler = t.supports.serviceWorkerApi ? us(t) : Nr(t)),
      (this.stopHandler = t.supports.serviceWorkerApi ? ls(t) : Br(t)),
      t
    );
  }
  async start(t = {}) {
    return (
      t.waitUntilReady === !0 &&
        S.warn(
          'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'
        ),
      (this.context.startOptions = wt(Gr, t)),
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
function ds(...e) {
  return new hs(...e);
}
var fs = /\.(js|jsx|ts|tsx|mjs|woff|woff2|ttf|otf|eot)$/,
  ps = [
    "sb-common-assets",
    "node_modules",
    "node-modules",
    "hot-update.json",
    "__webpack_hmr",
    "sb-vite",
  ],
  gs = (e) => !!(fs.test(e) || ps.some((r) => e.includes(r))),
  ms = (e) =>
    typeof (e == null ? void 0 : e.onUnhandledRequest) == "string"
      ? e
      : {
          ...e,
          onUnhandledRequest: (...t) => {
            const [{ url: r }, s] = t;
            if (!gs(r)) {
              if (!(e != null && e.onUnhandledRequest)) {
                s.warning();
                return;
              }
              typeof (e == null ? void 0 : e.onUnhandledRequest) ==
                "function" && e.onUnhandledRequest(...t);
            }
          },
        },
  ie;
function ys(e, t = []) {
  const r = ds(...t);
  return r.start(ms(e)), (ie = r), r;
}
function vs(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var s = Array.from(typeof e == "string" ? [e] : e);
  s[s.length - 1] = s[s.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = s.reduce(function (u, c) {
    var h = c.match(/\n([\t ]+|(?!\s).)/g);
    return h
      ? u.concat(
          h.map(function (f) {
            var g, l;
            return (l =
              (g = f.match(/[\t ]/g)) === null || g === void 0
                ? void 0
                : g.length) !== null && l !== void 0
              ? l
              : 0;
          })
        )
      : u;
  }, []);
  if (n.length) {
    var i = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, n) +
        "}",
      "g"
    );
    s = s.map(function (u) {
      return u.replace(
        i,
        `
`
      );
    });
  }
  s[0] = s[0].replace(/^\r?\n/, "");
  var o = s[0];
  return (
    t.forEach(function (u, c) {
      var h = o.match(/(?:^|\n)( *)$/),
        f = h ? h[1] : "",
        g = u;
      typeof u == "string" &&
        u.includes(`
`) &&
        (g = String(u)
          .split(
            `
`
          )
          .map(function (l, d) {
            return d === 0 ? l : "" + f + l;
          }).join(`
`)),
        (o += g + s[c + 1]);
    }),
    o
  );
}
function bs(e) {
  let t = !1,
    r;
  return (...n) => (t || ((t = !0), (r = e(...n))), r);
}
function ws(e) {
  return bs(() => {
    console.warn(vs(e));
  });
}
var ks = ws(`
[msw-storybook-addon] You are using parameters.msw as an Array instead of an Object with a property "handlers". This usage is deprecated and will be removed in the next release. Please use the Object syntax instead.

More info: https://github.com/mswjs/msw-storybook-addon/blob/main/MIGRATION.md#parametersmsw-array-notation-deprecated-in-favor-of-object-notation
`);
function Es(e) {
  if ((ie == null || ie.resetHandlers(), e != null)) {
    if (Array.isArray(e) && e.length > 0) {
      ks(), ie.use(...e);
      return;
    }
    if ("handlers" in e && e.handlers) {
      const t = Object.values(e.handlers)
        .filter(Boolean)
        .reduce((r, s) => r.concat(s), []);
      t.length > 0 && ie.use(...t);
      return;
    }
  }
}
var Ss = async (e) => {
    var t;
    return (
      Es(e.parameters.msw),
      typeof window < "u" &&
        "navigator" in window &&
        (t = navigator.serviceWorker) != null &&
        t.controller &&
        (await navigator.serviceWorker.ready),
      {}
    );
  },
  Ce = class {
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
  Ae = typeof window > "u" || "Deno" in globalThis;
function H() {}
function Ps(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qs(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Rs(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function st(e, t) {
  const {
    type: r = "all",
    exact: s,
    fetchStatus: n,
    predicate: i,
    queryKey: o,
    stale: u,
  } = e;
  if (o) {
    if (s) {
      if (t.queryHash !== Be(o, t.options)) return !1;
    } else if (!we(t.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if ((r === "active" && !c) || (r === "inactive" && c)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (n && n !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function nt(e, t) {
  const { exact: r, status: s, predicate: n, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (be(t.options.mutationKey) !== be(i)) return !1;
    } else if (!we(t.options.mutationKey, i)) return !1;
  }
  return !((s && t.state.status !== s) || (n && !n(t)));
}
function Be(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || be)(e);
}
function be(e) {
  return JSON.stringify(e, (t, r) =>
    Oe(r)
      ? Object.keys(r)
          .sort()
          .reduce((s, n) => ((s[n] = r[n]), s), {})
      : r
  );
}
function we(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((r) => !we(e[r], t[r]))
    : !1;
}
function Ht(e, t) {
  if (e === t) return e;
  const r = it(e) && it(t);
  if (r || (Oe(e) && Oe(t))) {
    const s = r ? e : Object.keys(e),
      n = s.length,
      i = r ? t : Object.keys(t),
      o = i.length,
      u = r ? [] : {};
    let c = 0;
    for (let h = 0; h < o; h++) {
      const f = r ? h : i[h];
      !r && e[f] === void 0 && t[f] === void 0 && s.includes(f)
        ? ((u[f] = void 0), c++)
        : ((u[f] = Ht(e[f], t[f])), u[f] === e[f] && e[f] !== void 0 && c++);
    }
    return n === o && c === n ? e : u;
  }
  return t;
}
function it(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Oe(e) {
  if (!ot(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(!ot(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function ot(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function xs(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Ls(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? Ht(e, t)
    : t;
}
function Ts(e, t, r = 0) {
  const s = [...e, t];
  return r && s.length > r ? s.slice(1) : s;
}
function Ms(e, t, r = 0) {
  const s = [t, ...e];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var ke = Symbol(),
  Z,
  K,
  ue,
  lt,
  Cs =
    ((lt = class extends Ce {
      constructor() {
        super();
        m(this, Z, void 0);
        m(this, K, void 0);
        m(this, ue, void 0);
        p(this, ue, (t) => {
          if (!Ae && window.addEventListener) {
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
        a(this, K) || this.setEventListener(a(this, ue));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = a(this, K)) == null || t.call(this), p(this, K, void 0));
      }
      setEventListener(t) {
        var r;
        p(this, ue, t),
          (r = a(this, K)) == null || r.call(this),
          p(
            this,
            K,
            t((s) => {
              typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        a(this, Z) !== t && (p(this, Z, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof a(this, Z) == "boolean"
          ? a(this, Z)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Z = new WeakMap()),
    (K = new WeakMap()),
    (ue = new WeakMap()),
    lt),
  jt = new Cs(),
  le,
  X,
  ce,
  ct,
  As =
    ((ct = class extends Ce {
      constructor() {
        super();
        m(this, le, !0);
        m(this, X, void 0);
        m(this, ce, void 0);
        p(this, ce, (t) => {
          if (!Ae && window.addEventListener) {
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
        a(this, X) || this.setEventListener(a(this, ce));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = a(this, X)) == null || t.call(this), p(this, X, void 0));
      }
      setEventListener(t) {
        var r;
        p(this, ce, t),
          (r = a(this, X)) == null || r.call(this),
          p(this, X, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        a(this, le) !== t &&
          (p(this, le, t),
          this.listeners.forEach((s) => {
            s(t);
          }));
      }
      isOnline() {
        return a(this, le);
      }
    }),
    (le = new WeakMap()),
    (X = new WeakMap()),
    (ce = new WeakMap()),
    ct),
  Te = new As();
function Is(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ge(e) {
  return (e ?? "online") === "online" ? Te.isOnline() : !0;
}
var Ot = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function De(e) {
  return e instanceof Ot;
}
function Ut(e) {
  let t = !1,
    r = 0,
    s = !1,
    n,
    i,
    o;
  const u = new Promise((v, w) => {
      (i = v), (o = w);
    }),
    c = (v) => {
      var w;
      s || (d(new Ot(v)), (w = e.abort) == null || w.call(e));
    },
    h = () => {
      t = !0;
    },
    f = () => {
      t = !1;
    },
    g = () => !jt.isFocused() || (e.networkMode !== "always" && !Te.isOnline()),
    l = (v) => {
      var w;
      s ||
        ((s = !0),
        (w = e.onSuccess) == null || w.call(e, v),
        n == null || n(),
        i(v));
    },
    d = (v) => {
      var w;
      s ||
        ((s = !0),
        (w = e.onError) == null || w.call(e, v),
        n == null || n(),
        o(v));
    },
    y = () =>
      new Promise((v) => {
        var w;
        (n = (C) => {
          const E = s || !g();
          return E && v(C), E;
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (n = void 0), s || (v = e.onContinue) == null || v.call(e);
      }),
    b = () => {
      if (s) return;
      let v;
      try {
        v = e.fn();
      } catch (w) {
        v = Promise.reject(w);
      }
      Promise.resolve(v)
        .then(l)
        .catch((w) => {
          var O;
          if (s) return;
          const C = e.retry ?? (Ae ? 0 : 3),
            E = e.retryDelay ?? Is,
            A = typeof E == "function" ? E(r, w) : E,
            _ =
              C === !0 ||
              (typeof C == "number" && r < C) ||
              (typeof C == "function" && C(r, w));
          if (t || !_) {
            d(w);
            return;
          }
          r++,
            (O = e.onFail) == null || O.call(e, r, w),
            xs(A)
              .then(() => {
                if (g()) return y();
              })
              .then(() => {
                t ? d(w) : b();
              });
        });
    };
  return (
    Ge(e.networkMode) ? b() : y().then(b),
    {
      promise: u,
      cancel: c,
      continue: () => ((n == null ? void 0 : n()) ? u : Promise.resolve()),
      cancelRetry: h,
      continueRetry: f,
    }
  );
}
function _s() {
  let e = [],
    t = 0,
    r = (l) => {
      l();
    },
    s = (l) => {
      l();
    },
    n = (l) => setTimeout(l, 0);
  const i = (l) => {
      n = l;
    },
    o = (l) => {
      let d;
      t++;
      try {
        d = l();
      } finally {
        t--, t || h();
      }
      return d;
    },
    u = (l) => {
      t
        ? e.push(l)
        : n(() => {
            r(l);
          });
    },
    c =
      (l) =>
      (...d) => {
        u(() => {
          l(...d);
        });
      },
    h = () => {
      const l = e;
      (e = []),
        l.length &&
          n(() => {
            s(() => {
              l.forEach((d) => {
                r(d);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: c,
    schedule: u,
    setNotifyFunction: (l) => {
      r = l;
    },
    setBatchNotifyFunction: (l) => {
      s = l;
    },
    setScheduler: i,
  };
}
var M = _s(),
  ee,
  ht,
  Wt =
    ((ht = class {
      constructor() {
        m(this, ee, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          qs(this.gcTime) &&
            p(
              this,
              ee,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Ae ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        a(this, ee) && (clearTimeout(a(this, ee)), p(this, ee, void 0));
      }
    }),
    (ee = new WeakMap()),
    ht),
  he,
  de,
  D,
  T,
  R,
  Ee,
  te,
  j,
  G,
  dt,
  Ds =
    ((dt = class extends Wt {
      constructor(t) {
        super();
        m(this, j);
        m(this, he, void 0);
        m(this, de, void 0);
        m(this, D, void 0);
        m(this, T, void 0);
        m(this, R, void 0);
        m(this, Ee, void 0);
        m(this, te, void 0);
        p(this, te, !1),
          p(this, Ee, t.defaultOptions),
          this.setOptions(t.options),
          p(this, R, []),
          p(this, D, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          p(this, he, t.state || Hs(this.options)),
          (this.state = a(this, he)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      setOptions(t) {
        (this.options = { ...a(this, Ee), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !a(this, R).length &&
          this.state.fetchStatus === "idle" &&
          a(this, D).remove(this);
      }
      setData(t, r) {
        const s = Ls(this.state.data, t, this.options);
        return (
          P(this, j, G).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          s
        );
      }
      setState(t, r) {
        P(this, j, G).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var s, n;
        const r = (s = a(this, T)) == null ? void 0 : s.promise;
        return (
          (n = a(this, T)) == null || n.cancel(t),
          r ? r.then(H).catch(H) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(a(this, he));
      }
      isActive() {
        return a(this, R).some((t) => t.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? a(this, R).some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Rs(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = a(this, R).find((s) => s.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = a(this, T)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = a(this, R).find((s) => s.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = a(this, T)) == null || r.continue();
      }
      addObserver(t) {
        a(this, R).includes(t) ||
          (a(this, R).push(t),
          this.clearGcTimeout(),
          a(this, D).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        a(this, R).includes(t) &&
          (p(
            this,
            R,
            a(this, R).filter((r) => r !== t)
          ),
          a(this, R).length ||
            (a(this, T) &&
              (a(this, te)
                ? a(this, T).cancel({ revert: !0 })
                : a(this, T).cancelRetry()),
            this.scheduleGc()),
          a(this, D).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return a(this, R).length;
      }
      invalidate() {
        this.state.isInvalidated ||
          P(this, j, G).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var h, f, g;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (a(this, T))
            return a(this, T).continueRetry(), a(this, T).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const l = a(this, R).find((d) => d.options.queryFn);
          l && this.setOptions(l.options);
        }
        Array.isArray(this.options.queryKey) ||
          console.error(
            "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
          );
        const s = new AbortController(),
          n = { queryKey: this.queryKey, meta: this.meta },
          i = (l) => {
            Object.defineProperty(l, "signal", {
              enumerable: !0,
              get: () => (p(this, te, !0), s.signal),
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
              : (p(this, te, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, n, this)
                  : this.options.queryFn(n))
          ),
          u = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o,
          };
        i(u),
          (h = this.options.behavior) == null || h.onFetch(u, this),
          p(this, de, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((f = u.fetchOptions) == null ? void 0 : f.meta)) &&
            P(this, j, G).call(this, {
              type: "fetch",
              meta: (g = u.fetchOptions) == null ? void 0 : g.meta,
            });
        const c = (l) => {
          var d, y, b, v;
          (De(l) && l.silent) ||
            P(this, j, G).call(this, { type: "error", error: l }),
            De(l) ||
              ((y = (d = a(this, D).config).onError) == null ||
                y.call(d, l, this),
              (v = (b = a(this, D).config).onSettled) == null ||
                v.call(b, this.state.data, l, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          p(
            this,
            T,
            Ut({
              fn: u.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: (l) => {
                var d, y, b, v;
                if (l === void 0) {
                  console.error(
                    `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
                  ),
                    c(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(l),
                  (y = (d = a(this, D).config).onSuccess) == null ||
                    y.call(d, l, this),
                  (v = (b = a(this, D).config).onSettled) == null ||
                    v.call(b, l, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: c,
              onFail: (l, d) => {
                P(this, j, G).call(this, {
                  type: "failed",
                  failureCount: l,
                  error: d,
                });
              },
              onPause: () => {
                P(this, j, G).call(this, { type: "pause" });
              },
              onContinue: () => {
                P(this, j, G).call(this, { type: "continue" });
              },
              retry: u.options.retry,
              retryDelay: u.options.retryDelay,
              networkMode: u.options.networkMode,
            })
          ),
          a(this, T).promise
        );
      }
    }),
    (he = new WeakMap()),
    (de = new WeakMap()),
    (D = new WeakMap()),
    (T = new WeakMap()),
    (R = new WeakMap()),
    (Ee = new WeakMap()),
    (te = new WeakMap()),
    (j = new WeakSet()),
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
              ...Fs(s.data, this.options),
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
            return De(n) && n.revert && a(this, de)
              ? { ...a(this, de), fetchStatus: "idle" }
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
          a(this, R).forEach((s) => {
            s.onQueryUpdate();
          }),
            a(this, D).notify({ query: this, type: "updated", action: t });
        });
    }),
    dt);
function Fs(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ge(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Hs(e) {
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
var W,
  ft,
  js =
    ((ft = class extends Ce {
      constructor(t = {}) {
        super();
        m(this, W, void 0);
        (this.config = t), p(this, W, new Map());
      }
      build(t, r, s) {
        const n = r.queryKey,
          i = r.queryHash ?? Be(n, r);
        let o = this.get(i);
        return (
          o ||
            ((o = new Ds({
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
        a(this, W).has(t.queryHash) ||
          (a(this, W).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = a(this, W).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && a(this, W).delete(t.queryHash),
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
        return a(this, W).get(t);
      }
      getAll() {
        return [...a(this, W).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((s) => st(r, s));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((s) => st(t, s)) : r;
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
    (W = new WeakMap()),
    ft),
  N,
  Se,
  I,
  fe,
  B,
  Q,
  pt,
  Os =
    ((pt = class extends Wt {
      constructor(t) {
        super();
        m(this, B);
        m(this, N, void 0);
        m(this, Se, void 0);
        m(this, I, void 0);
        m(this, fe, void 0);
        (this.mutationId = t.mutationId),
          p(this, Se, t.defaultOptions),
          p(this, I, t.mutationCache),
          p(this, N, []),
          (this.state = t.state || Us()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = { ...a(this, Se), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        a(this, N).includes(t) ||
          (a(this, N).push(t),
          this.clearGcTimeout(),
          a(this, I).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        p(
          this,
          N,
          a(this, N).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          a(this, I).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        a(this, N).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : a(this, I).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = a(this, fe)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var n, i, o, u, c, h, f, g, l, d, y, b, v, w, C, E, A, _, O, Re;
        const r = () => (
            p(
              this,
              fe,
              Ut({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(t)
                    : Promise.reject(new Error("No mutationFn found")),
                onFail: (q, J) => {
                  P(this, B, Q).call(this, {
                    type: "failed",
                    failureCount: q,
                    error: J,
                  });
                },
                onPause: () => {
                  P(this, B, Q).call(this, { type: "pause" });
                },
                onContinue: () => {
                  P(this, B, Q).call(this, { type: "continue" });
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
              })
            ),
            a(this, fe).promise
          ),
          s = this.state.status === "pending";
        try {
          if (!s) {
            P(this, B, Q).call(this, { type: "pending", variables: t }),
              await ((i = (n = a(this, I).config).onMutate) == null
                ? void 0
                : i.call(n, t, this));
            const J = await ((u = (o = this.options).onMutate) == null
              ? void 0
              : u.call(o, t));
            J !== this.state.context &&
              P(this, B, Q).call(this, {
                type: "pending",
                context: J,
                variables: t,
              });
          }
          const q = await r();
          return (
            await ((h = (c = a(this, I).config).onSuccess) == null
              ? void 0
              : h.call(c, q, t, this.state.context, this)),
            await ((g = (f = this.options).onSuccess) == null
              ? void 0
              : g.call(f, q, t, this.state.context)),
            await ((d = (l = a(this, I).config).onSettled) == null
              ? void 0
              : d.call(
                  l,
                  q,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((b = (y = this.options).onSettled) == null
              ? void 0
              : b.call(y, q, null, t, this.state.context)),
            P(this, B, Q).call(this, { type: "success", data: q }),
            q
          );
        } catch (q) {
          try {
            throw (
              (await ((w = (v = a(this, I).config).onError) == null
                ? void 0
                : w.call(v, q, t, this.state.context, this)),
              await ((E = (C = this.options).onError) == null
                ? void 0
                : E.call(C, q, t, this.state.context)),
              await ((_ = (A = a(this, I).config).onSettled) == null
                ? void 0
                : _.call(
                    A,
                    void 0,
                    q,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((Re = (O = this.options).onSettled) == null
                ? void 0
                : Re.call(O, void 0, q, t, this.state.context)),
              q)
            );
          } finally {
            P(this, B, Q).call(this, { type: "error", error: q });
          }
        }
      }
    }),
    (N = new WeakMap()),
    (Se = new WeakMap()),
    (I = new WeakMap()),
    (fe = new WeakMap()),
    (B = new WeakSet()),
    (Q = function (t) {
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
              isPaused: !Ge(this.options.networkMode),
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
          a(this, N).forEach((s) => {
            s.onMutationUpdate(t);
          }),
            a(this, I).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    pt);
function Us() {
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
var F,
  Pe,
  re,
  gt,
  Ws =
    ((gt = class extends Ce {
      constructor(t = {}) {
        super();
        m(this, F, void 0);
        m(this, Pe, void 0);
        m(this, re, void 0);
        (this.config = t), p(this, F, []), p(this, Pe, 0);
      }
      build(t, r, s) {
        const n = new Os({
          mutationCache: this,
          mutationId: ++xe(this, Pe)._,
          options: t.defaultMutationOptions(r),
          state: s,
        });
        return this.add(n), n;
      }
      add(t) {
        a(this, F).push(t), this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        p(
          this,
          F,
          a(this, F).filter((r) => r !== t)
        ),
          this.notify({ type: "removed", mutation: t });
      }
      clear() {
        M.batch(() => {
          a(this, F).forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return a(this, F);
      }
      find(t) {
        const r = { exact: !0, ...t };
        return a(this, F).find((s) => nt(r, s));
      }
      findAll(t = {}) {
        return a(this, F).filter((r) => nt(t, r));
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
          p(
            this,
            re,
            (a(this, re) ?? Promise.resolve())
              .then(() => {
                const t = a(this, F).filter((r) => r.state.isPaused);
                return M.batch(() =>
                  t.reduce(
                    (r, s) => r.then(() => s.continue().catch(H)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                p(this, re, void 0);
              })
          ),
          a(this, re)
        );
      }
    }),
    (F = new WeakMap()),
    (Pe = new WeakMap()),
    (re = new WeakMap()),
    gt);
function Ns(e) {
  return {
    onFetch: (t, r) => {
      const s = async () => {
        var y, b, v, w, C;
        const n = t.options,
          i =
            (v =
              (b = (y = t.fetchOptions) == null ? void 0 : y.meta) == null
                ? void 0
                : b.fetchMore) == null
              ? void 0
              : v.direction,
          o = ((w = t.state.data) == null ? void 0 : w.pages) || [],
          u = ((C = t.state.data) == null ? void 0 : C.pageParams) || [],
          c = { pages: [], pageParams: [] };
        let h = !1;
        const f = (E) => {
            Object.defineProperty(E, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (h = !0)
                  : t.signal.addEventListener("abort", () => {
                      h = !0;
                    }),
                t.signal
              ),
            });
          },
          g =
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
          l = async (E, A, _) => {
            if (h) return Promise.reject();
            if (A == null && E.pages.length) return Promise.resolve(E);
            const O = {
              queryKey: t.queryKey,
              pageParam: A,
              direction: _ ? "backward" : "forward",
              meta: t.options.meta,
            };
            f(O);
            const Re = await g(O),
              { maxPages: q } = t.options,
              J = _ ? Ms : Ts;
            return {
              pages: J(E.pages, Re, q),
              pageParams: J(E.pageParams, A, q),
            };
          };
        let d;
        if (i && o.length) {
          const E = i === "backward",
            A = E ? Bs : at,
            _ = { pages: o, pageParams: u },
            O = A(n, _);
          d = await l(_, O, E);
        } else {
          d = await l(c, u[0] ?? n.initialPageParam);
          const E = e ?? o.length;
          for (let A = 1; A < E; A++) {
            const _ = at(n, d);
            d = await l(d, _);
          }
        }
        return d;
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
function at(e, { pages: t, pageParams: r }) {
  const s = t.length - 1;
  return e.getNextPageParam(t[s], t, r[s], r);
}
function Bs(e, { pages: t, pageParams: r }) {
  var s;
  return (s = e.getPreviousPageParam) == null
    ? void 0
    : s.call(e, t[0], t, r[0], r);
}
var k,
  V,
  z,
  pe,
  ge,
  Y,
  me,
  ye,
  mt,
  Gs =
    ((mt = class {
      constructor(e = {}) {
        m(this, k, void 0);
        m(this, V, void 0);
        m(this, z, void 0);
        m(this, pe, void 0);
        m(this, ge, void 0);
        m(this, Y, void 0);
        m(this, me, void 0);
        m(this, ye, void 0);
        p(this, k, e.queryCache || new js()),
          p(this, V, e.mutationCache || new Ws()),
          p(this, z, e.defaultOptions || {}),
          p(this, pe, new Map()),
          p(this, ge, new Map()),
          p(this, Y, 0);
      }
      mount() {
        xe(this, Y)._++,
          a(this, Y) === 1 &&
            (p(
              this,
              me,
              jt.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), a(this, k).onFocus());
              })
            ),
            p(
              this,
              ye,
              Te.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), a(this, k).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        xe(this, Y)._--,
          a(this, Y) === 0 &&
            ((e = a(this, me)) == null || e.call(this),
            p(this, me, void 0),
            (t = a(this, ye)) == null || t.call(this),
            p(this, ye, void 0));
      }
      isFetching(e) {
        return a(this, k).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return a(this, V).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = a(this, k).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const r = this.defaultQueryOptions(e),
            s = a(this, k).build(this, r);
          return (
            e.revalidateIfStale &&
              s.isStaleByTime(r.staleTime) &&
              this.prefetchQuery(r),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return a(this, k)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const s = r.data;
            return [t, s];
          });
      }
      setQueryData(e, t, r) {
        const s = this.defaultQueryOptions({ queryKey: e }),
          n = a(this, k).get(s.queryHash),
          i = n == null ? void 0 : n.state.data,
          o = Ps(t, i);
        if (o !== void 0)
          return a(this, k)
            .build(this, s)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return M.batch(() =>
          a(this, k)
            .findAll(e)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, t, r)])
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = a(this, k).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = a(this, k);
        M.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = a(this, k),
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
            a(this, k)
              .findAll(e)
              .map((n) => n.cancel(r))
          );
        return Promise.all(s).then(H).catch(H);
      }
      invalidateQueries(e = {}, t = {}) {
        return M.batch(() => {
          if (
            (a(this, k)
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
            a(this, k)
              .findAll(e)
              .filter((n) => !n.isDisabled())
              .map((n) => {
                let i = n.fetch(void 0, r);
                return (
                  r.throwOnError || (i = i.catch(H)),
                  n.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(s).then(H);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = a(this, k).build(this, t);
        return r.isStaleByTime(t.staleTime)
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(H).catch(H);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Ns(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(H).catch(H);
      }
      resumePausedMutations() {
        return Te.isOnline()
          ? a(this, V).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return a(this, k);
      }
      getMutationCache() {
        return a(this, V);
      }
      getDefaultOptions() {
        return a(this, z);
      }
      setDefaultOptions(e) {
        p(this, z, e);
      }
      setQueryDefaults(e, t) {
        a(this, pe).set(be(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...a(this, pe).values()];
        let r = {};
        return (
          t.forEach((s) => {
            we(e, s.queryKey) && (r = { ...r, ...s.defaultOptions });
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        a(this, ge).set(be(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...a(this, ge).values()];
        let r = {};
        return (
          t.forEach((s) => {
            we(e, s.mutationKey) && (r = { ...r, ...s.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...a(this, z).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Be(t.queryKey, t)),
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
              ...a(this, z).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        a(this, k).clear(), a(this, V).clear();
      }
    }),
    (k = new WeakMap()),
    (V = new WeakMap()),
    (z = new WeakMap()),
    (pe = new WeakMap()),
    (ge = new WeakMap()),
    (Y = new WeakMap()),
    (me = new WeakMap()),
    (ye = new WeakMap()),
    mt),
  Qs = vt.createContext(void 0),
  $s = ({ client: e, children: t }) => (
    vt.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    yt.jsx(Qs.Provider, { value: e, children: t })
  );
const Ks = {
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
    button: {
      root: ({ props: e }) => ({
        className: L(
          "flex justify-center items-center gap-x-1 font-Golos w-full rounded bg-Corp_1 py-3 px-2 transition-colors",
          { "pointer-events-none cursor-default": e.loading },
          { "bg-White active:bg-White border border-Corp_1": e.outlined },
          {
            "bg-Grey_4 border-Grey_4  pointer-events-none cursor-default":
              e.disabled,
          },
          {
            "bg-White border-White  pointer-events-none cursor-default":
              e.disabled && e.outlined,
          }
        ),
      }),
      label: ({ props: e }) => ({
        className: L(
          "font-Golos font-bold text-base/5 text-White transition-colors",
          { "text-Corp_1": e.outlined },
          { "text-Grey_3": e.disabled }
        ),
      }),
      loadingIcon: ({ props: e }) => ({
        className: L("text-White pointer-events-none", {
          "text-Corp_1": e.outlined,
        }),
      }),
    },
    inputtext: {
      root: ({ props: e }) => ({
        className: L(
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
        className: L(
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
        className: L(
          "absolute right-3 top-0 bottom-0 m-auto flex w-6 h-6 justify-center items-center text-Grey_2 bg-transparent rounded-tr-md rounded-br-md transition-all aria-expanded:rotate-180",
          { "[margin:unset] [top:unset] bottom-2": e.value !== null }
        ),
      }),
      wrapper: {
        className: L(
          "max-h-[200px] mt-1 py-3 overflow-auto",
          "bg-Grey_5 text-gray-700 border-0 rounded-md"
        ),
      },
      list: { className: "grid gap-y-[6px]" },
      item: ({ context: e }) => ({
        className: L(
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
    radiobutton: {
      root: {
        className: L(
          "relative",
          "inline-flex",
          "align-bottom",
          "w-[1rem] h-[1rem]",
          "cursor-pointer",
          "select-none"
        ),
      },
      box: ({ props: e }) => ({
        className: L(
          "flex justify-center items-center",
          "w-[1rem] h-[1rem]",
          "border border-Grey_3",
          "rounded-full",
          "transition duration-200 ease-in-out",
          { "border-Corp_1": e.checked },
          { "border-Yellow_Light": e.status === "warning" },
          { "border-Red": e.invalid }
        ),
      }),
      input: {
        className: L(
          "peer",
          "w-full",
          "h-full",
          "absolute",
          "top-0 left-0",
          "z-10",
          "p-0",
          "m-0",
          "opacity-0",
          "rounded-md",
          "outline-none",
          "border-2 border-surface-200",
          "appearance-none",
          "cursor-pointer"
        ),
      },
      icon: ({ props: e }) => ({
        className: L(
          "block",
          "rounded-full",
          "w-[0.5rem] h-[0.5rem]",
          "bg-surface-0",
          {
            "backface-hidden scale-10 invisible": !e.checked,
            "transform visible bg-Corp_1 scale-1": e.checked,
          },
          { "bg-Yellow_Light": e.status === "warning" },
          { "bg-Red": e.invalid },
          "transition duration-200"
        ),
      }),
    },
    checkbox: {
      root: {
        className: L(
          "peer",
          "relative",
          "inline-flex",
          "align-bottom",
          "w-[1rem] h-[1rem]",
          "cursor-pointer",
          "select-none",
          "rounded-md"
        ),
      },
      input: {
        className: L(
          "peer",
          "w-full",
          "h-full",
          "absolute",
          "top-0 left-0",
          "z-10",
          "p-0",
          "m-0",
          "opacity-0",
          "rounded-md",
          "outline-none",
          "border-2 border-surface-200",
          "appearance-none",
          "cursor-pointer"
        ),
      },
      box: ({ props: e, context: t }) => ({
        className: L(
          "flex",
          "items-center",
          "justify-center",
          "w-[1rem] h-[1rem]",
          "rounded-[2px]",
          "border-2 border-Grey_3",
          { "border-primary bg-Corp_1 border-Corp_1": t.checked },
          { "border-Yellow_Light": e.status === "warning" },
          { "border-Red": e.invalid },
          { "bg-Yellow_Light": e.status === "warning" && t.checked },
          { "bg-Red": e.invalid && t.checked },
          "transition-colors",
          "duration-200"
        ),
      }),
      icon: {
        className: "w-3 h-3 transition-all duration-200 text-white text-base",
      },
    },
    dialog: {
      root: ({ state: e }) => ({
        className: L(
          "rounded-lg shadow-lg border-0",
          "max-h-[90%] transform scale-100",
          "m-0 w-[90vw]",
          {
            "transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
              e.maximized,
          }
        ),
      }),
      mask: () => ({ className: "transition duration-200 bg-black/35" }),
      content: { className: "bg-white rounded-2xl" },
      closeButton: { className: "hidden" },
      transition: {
        timeout: 200,
        classNames: {
          enter: "opacity-0 scale-75",
          enterActive:
            "!opacity-100 !scale-100 transition-all duration-200 ease-out",
          exit: "opacity-100 scale-100 transition-all duration-200 ease-out",
          exitActive: "!opacity-0 scale-75",
        },
      },
    },
  },
  Xs = new Gs();
ys();
const Nt = ({ children: e }) =>
    Qe.jsxDEV(
      $s,
      {
        client: Xs,
        children: Qe.jsxDEV(
          Xt,
          {
            value: {
              unstyled: !0,
              pt: Ks,
              ripple: !0,
              ptOptions: {
                mergeSections: !0,
                mergeProps: !0,
                classNameMergeFunction: Vt,
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
  un = {
    parameters: {
      controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    },
    decorators: [ir(Nt)],
    loaders: [Ss],
  };
Nt.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Provider",
  props: {
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
  },
};
export { Nt as Provider, un as default };
