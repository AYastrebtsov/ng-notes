var we = Object.defineProperty;
var ke = (e, t, r) =>
  t in e
    ? we(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var m = (e, t, r) => (ke(e, typeof t != "symbol" ? t + "" : t, r), r),
  C = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  };
var S = (e, t, r) => (
    C(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  _ = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  U = (e, t, r, s) => (
    C(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r
  );
var M = (e, t, r) => (C(e, t, "access private method"), r);
import { j as q } from "./jsx-runtime-_e34SzbC.js";
import { b as Ee } from "./preview-C73hajvK.js";
import {
  w as $,
  x as h,
  E as G,
  y as xe,
  z as X,
  A as Le,
  Q as Se,
} from "./QueryClientProvider--9jJntYg.js";
import { d as Re } from "./store-DdwlwKBF.js";
import { B as Pe } from "./index-yeJ0zlv8.js";
import { b as qe } from "./api.esm-vZf3A5nu.js";
import { c as R, t as Te } from "./utils-B6PcESyr.js";
import { P as Me } from "./Provider-CQC4cIn_.js";
import { Q as Ae } from "./queryClient-DmQdYsl8.js";
import "./index-DVXBtNgz.js";
import "./mapValues-BA7I9QKQ.js";
import "./index-CMHnigvr.js";
import "./isPlainObject-DD6CNesz.js";
import "./index-C-I6vmrZ.js";
import "./index-DrFu-skq.js";
import "./index-RMSiDl4v.js";
import "./index-BojaLiPF.js";
import "./extends-CCbyfPlC.js";
function Ie(e, t) {
  const r = e.emit;
  if (r._isPiped) return;
  const s = function (n, ...i) {
    return t.emit(n, ...i), r.call(this, n, ...i);
  };
  (s._isPiped = !0), (e.emit = s);
}
function Ce(e) {
  const t = [...e];
  return Object.freeze(t), t;
}
class _e {
  constructor() {
    m(this, "subscriptions", []);
  }
  async dispose() {
    await Promise.all(this.subscriptions.map((t) => t()));
  }
}
class He {
  constructor(t) {
    m(this, "handlers");
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
class We extends _e {
  constructor(...r) {
    super();
    m(this, "handlersController");
    m(this, "emitter");
    m(this, "publicEmitter");
    m(this, "events");
    $(
      this.validateHandlers(r),
      h.formatMessage(
        "Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?"
      )
    ),
      (this.handlersController = new He(r)),
      (this.emitter = new G()),
      (this.publicEmitter = new G()),
      Ie(this.emitter, this.publicEmitter),
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
    $(
      this.validateHandlers(r),
      h.formatMessage(
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
    return Ce(this.handlersController.currentHandlers());
  }
  createLifeCycleEvents() {
    return {
      on: (...r) => this.publicEmitter.on(...r),
      removeListener: (...r) => this.publicEmitter.removeListener(...r),
      removeAllListeners: (...r) => this.publicEmitter.removeAllListeners(...r),
    };
  }
}
var je = async (e) => {
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
const Ne = async ({
  request: e,
  requestId: t,
  handlers: r,
  resolutionContext: s,
}) => {
  let o = null,
    n = null;
  for (const i of r)
    if (
      ((n = await i.run({ request: e, requestId: t, resolutionContext: s })),
      n !== null && (o = i),
      n != null && n.response)
    )
      break;
  return o
    ? {
        handler: o,
        parsedResult: n == null ? void 0 : n.parsedResult,
        response: n == null ? void 0 : n.response,
      }
    : null;
};
async function De(e, t = "warn") {
  const r = new URL(e.url),
    s = xe(r),
    o = `intercepted a request without a matching request handler:

  • ${e.method} ${s}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`;
  function n(i) {
    switch (i) {
      case "error":
        throw (
          (h.error("Error: %s", o),
          new Error(
            h.formatMessage(
              'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
            )
          ))
        );
      case "warn": {
        h.warn("Warning: %s", o);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          h.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            i
          )
        );
    }
  }
  if (typeof t == "function") {
    t(e, { warning: n.bind(null, "warn"), error: n.bind(null, "error") });
    return;
  }
  r.protocol !== "file:" && n(t);
}
function Be(e, t) {
  X.add({ ...e, url: e.url.toString() }, t), X.persist();
}
async function te(e, t, r, s, o, n) {
  var u, f, d, p, g, y;
  if (
    (o.emit("request:start", { request: e, requestId: t }),
    e.headers.get("x-msw-intention") === "bypass")
  ) {
    o.emit("request:end", { request: e, requestId: t }),
      (u = n == null ? void 0 : n.onPassthroughResponse) == null ||
        u.call(n, e);
    return;
  }
  const i = await je(() =>
    Ne({
      request: e,
      requestId: t,
      handlers: r,
      resolutionContext: n == null ? void 0 : n.resolutionContext,
    })
  );
  if (i.error)
    throw (
      (o.emit("unhandledException", {
        error: i.error,
        request: e,
        requestId: t,
      }),
      i.error)
    );
  if (!i.data) {
    await De(e, s.onUnhandledRequest),
      o.emit("request:unhandled", { request: e, requestId: t }),
      o.emit("request:end", { request: e, requestId: t }),
      (f = n == null ? void 0 : n.onPassthroughResponse) == null ||
        f.call(n, e);
    return;
  }
  const { response: a } = i.data;
  if (!a) {
    o.emit("request:end", { request: e, requestId: t }),
      (d = n == null ? void 0 : n.onPassthroughResponse) == null ||
        d.call(n, e);
    return;
  }
  if (a.status === 302 && a.headers.get("x-msw-intention") === "passthrough") {
    o.emit("request:end", { request: e, requestId: t }),
      (p = n == null ? void 0 : n.onPassthroughResponse) == null ||
        p.call(n, e);
    return;
  }
  Be(e, a), o.emit("request:match", { request: e, requestId: t });
  const l = i.data,
    c =
      ((g = n == null ? void 0 : n.transformResponse) == null
        ? void 0
        : g.call(n, a)) || a;
  return (
    (y = n == null ? void 0 : n.onMockedResponse) == null || y.call(n, c, l),
    o.emit("request:end", { request: e, requestId: t }),
    c
  );
}
const Fe = (e) => (t) => {
  const { themes: r = [], selectedTheme: s } = Ee(),
    o = r.find(({ name: n }) => !!s && n === s);
  return q.jsx(e, { theme: o == null ? void 0 : o.themeObject, children: t() });
};
function Ue(e) {
  return {
    status: e.status,
    statusText: e.statusText,
    headers: Object.fromEntries(e.headers.entries()),
  };
}
function O(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function re(e, t) {
  return Object.entries(t).reduce((r, [s, o]) => {
    const n = r[s];
    return Array.isArray(n) && Array.isArray(o)
      ? ((r[s] = n.concat(o)), r)
      : O(n) && O(o)
      ? ((r[s] = re(n, o)), r)
      : ((r[s] = o), r);
  }, Object.assign({}, e));
}
var $e = {},
  Ge = /(%?)(%([sdijo]))/g;
function Xe(e, t) {
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
function T(e, ...t) {
  if (t.length === 0) return e;
  let r = 0,
    s = e.replace(Ge, (o, n, i, a) => {
      const l = t[r],
        c = Xe(l, a);
      return n ? o : (r++, c);
    });
  return (
    r < t.length && (s += ` ${t.slice(r).join(" ")}`),
    (s = s.replace(/%{2,2}/g, "%")),
    s
  );
}
var Oe = 2;
function Ke(e) {
  if (!e.stack) return;
  const t = e.stack.split(`
`);
  t.splice(1, Oe),
    (e.stack = t.join(`
`));
}
var Ve = class extends Error {
    constructor(e, ...t) {
      super(e),
        (this.message = e),
        (this.name = "Invariant Violation"),
        (this.message = T(e, ...t)),
        Ke(this);
    }
  },
  w = (e, t, ...r) => {
    if (!e) throw new Ve(t, ...r);
  };
w.as = (e, t, r, ...s) => {
  if (!t) {
    const o = s.length === 0 ? r : T(r, s);
    let n;
    try {
      n = Reflect.construct(e, [o]);
    } catch {
      n = e(o);
    }
    throw n;
  }
};
function D() {
  if (typeof navigator < "u" && navigator.product === "ReactNative") return !0;
  if (typeof process < "u") {
    const e = process.type;
    return e === "renderer" || e === "worker"
      ? !1
      : !!(process.versions && process.versions.node);
  }
  return !1;
}
var B = async (e) => {
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
function ze(e) {
  return new URL(e, location.href).href;
}
function H(e, t, r) {
  return (
    [e.active, e.installing, e.waiting]
      .filter((i) => i != null)
      .find((i) => r(i.scriptURL, t)) || null
  );
}
var Je = async (e, t = {}, r) => {
  const s = ze(e),
    o = await navigator.serviceWorker
      .getRegistrations()
      .then((a) => a.filter((l) => H(l, s, r)));
  !navigator.serviceWorker.controller && o.length > 0 && location.reload();
  const [n] = o;
  if (n) return n.update().then(() => [H(n, s, r), n]);
  const i = await B(async () => {
    const a = await navigator.serviceWorker.register(e, t);
    return [H(a, s, r), a];
  });
  if (i.error) {
    if (i.error.message.includes("(404)")) {
      const l = new URL((t == null ? void 0 : t.scope) || "/", location.href);
      throw new Error(
        h.formatMessage(`Failed to register a Service Worker for scope ('${l.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      h.formatMessage(
        `Failed to register the Service Worker:

%s`,
        i.error.message
      )
    );
  }
  return i.data;
};
function se(e = {}) {
  if (e.quiet) return;
  const t = e.message || "Mocking enabled.";
  console.groupCollapsed(
    `%c${h.formatMessage(t)}`,
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
async function Qe(e, t) {
  var r, s;
  if (
    (e.workerChannel.send("MOCK_ACTIVATE"),
    await e.events.once("MOCKING_ENABLED"),
    e.isMockingEnabled)
  ) {
    h.warn(
      'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
    );
    return;
  }
  (e.isMockingEnabled = !0),
    se({
      quiet: t.quiet,
      workerScope: (r = e.registration) == null ? void 0 : r.scope,
      workerUrl: (s = e.worker) == null ? void 0 : s.scriptURL,
    });
}
var Ye = class {
  constructor(e) {
    this.port = e;
  }
  postMessage(e, ...t) {
    const [r, s] = t;
    this.port.postMessage({ type: e, data: r }, { transfer: s });
  }
};
function Ze(e) {
  if (!["HEAD", "GET"].includes(e.method)) return e.body;
}
function et(e) {
  return new Request(e.url, { ...e, body: Ze(e) });
}
var tt = (e, t) => async (r, s) => {
  const o = new Ye(r.ports[0]),
    n = s.payload.id,
    i = et(s.payload),
    a = i.clone(),
    l = i.clone();
  Le.cache.set(i, l), e.requests.set(n, l);
  try {
    await te(i, n, e.getRequestHandlers(), t, e.emitter, {
      onPassthroughResponse() {
        o.postMessage("PASSTHROUGH");
      },
      async onMockedResponse(c, { handler: u, parsedResult: f }) {
        const d = c.clone(),
          p = c.clone(),
          g = Ue(c);
        if (e.supports.readableStreamTransfer) {
          const y = c.body;
          o.postMessage("MOCK_RESPONSE", { ...g, body: y }, y ? [y] : void 0);
        } else {
          const y = c.body === null ? null : await d.arrayBuffer();
          o.postMessage("MOCK_RESPONSE", { ...g, body: y });
        }
        t.quiet ||
          e.emitter.once("response:mocked", () => {
            u.log({ request: a, response: p, parsedResult: f });
          });
      },
    });
  } catch (c) {
    c instanceof Error &&
      (h.error(
        `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
        i.method,
        i.url,
        c.stack ?? c
      ),
      o.postMessage("MOCK_RESPONSE", {
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
async function rt(e) {
  e.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload: t } = await e.events.once("INTEGRITY_CHECK_RESPONSE");
  t.checksum !== "26357c79639bfa20d64c0efca2a87423" &&
    h.warn(`The currently registered Service Worker has been generated by a different version of MSW (${t.packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`);
}
var st = new TextEncoder();
function nt(e) {
  return st.encode(e);
}
function ot(e, t) {
  return new TextDecoder(t).decode(e);
}
function it(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
var at = new Set([101, 103, 204, 205, 304]);
function ne(e) {
  return at.has(e);
}
var x = Symbol("isPatchedModule"),
  lt = Object.defineProperty,
  ct = (e, t) => {
    for (var r in t) lt(e, r, { get: t[r], enumerable: !0 });
  },
  W = {};
ct(W, {
  blue: () => dt,
  gray: () => j,
  green: () => ft,
  red: () => ht,
  yellow: () => ut,
});
function ut(e) {
  return `\x1B[33m${e}\x1B[0m`;
}
function dt(e) {
  return `\x1B[34m${e}\x1B[0m`;
}
function j(e) {
  return `\x1B[90m${e}\x1B[0m`;
}
function ht(e) {
  return `\x1B[31m${e}\x1B[0m`;
}
function ft(e) {
  return `\x1B[32m${e}\x1B[0m`;
}
var I = D(),
  oe = class {
    constructor(e) {
      m(this, "prefix");
      (this.name = e), (this.prefix = `[${this.name}]`);
      const t = K("DEBUG"),
        r = K("LOG_LEVEL");
      t === "1" || t === "true" || (typeof t < "u" && this.name.startsWith(t))
        ? ((this.debug = P(r, "debug") ? b : this.debug),
          (this.info = P(r, "info") ? b : this.info),
          (this.success = P(r, "success") ? b : this.success),
          (this.warning = P(r, "warning") ? b : this.warning),
          (this.error = P(r, "error") ? b : this.error))
        : ((this.info = b),
          (this.success = b),
          (this.warning = b),
          (this.error = b),
          (this.only = b));
    }
    extend(e) {
      return new oe(`${this.name}:${e}`);
    }
    debug(e, ...t) {
      this.logEntry({
        level: "debug",
        message: j(e),
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
      const r = new pt();
      return (s, ...o) => {
        r.measure(),
          this.logEntry({
            level: "info",
            message: `${s} ${j(`${r.deltaTime}ms`)}`,
            positionals: o,
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
          colors: o,
          positionals: n = [],
        } = e,
        i = this.createEntry(t, r),
        a = (o == null ? void 0 : o.timestamp) || "gray",
        l = (o == null ? void 0 : o.prefix) || "gray",
        c = { timestamp: W[a], prefix: W[l] };
      this.getWriter(t)(
        [c.timestamp(this.formatTimestamp(i.timestamp))]
          .concat(s != null ? c.prefix(s) : [])
          .concat(V(r))
          .join(" "),
        ...n.map(V)
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
          return gt;
        case "warning":
          return mt;
        case "error":
          return yt;
      }
    }
  },
  pt = class {
    constructor() {
      m(this, "startTime");
      m(this, "endTime");
      m(this, "deltaTime");
      this.startTime = performance.now();
    }
    measure() {
      this.endTime = performance.now();
      const e = this.endTime - this.startTime;
      this.deltaTime = e.toFixed(2);
    }
  },
  b = () => {};
function gt(e, ...t) {
  if (I) {
    process.stdout.write(
      T(e, ...t) +
        `
`
    );
    return;
  }
  console.log(e, ...t);
}
function mt(e, ...t) {
  if (I) {
    process.stderr.write(
      T(e, ...t) +
        `
`
    );
    return;
  }
  console.warn(e, ...t);
}
function yt(e, ...t) {
  if (I) {
    process.stderr.write(
      T(e, ...t) +
        `
`
    );
    return;
  }
  console.error(e, ...t);
}
function K(e) {
  var t;
  return I ? $e[e] : (t = globalThis[e]) == null ? void 0 : t.toString();
}
function P(e, t) {
  return e !== void 0 && e !== t;
}
function V(e) {
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
var bt = class extends Error {
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
  ie = class {
    static listenerCount(e, t) {
      return e.listenerCount(t);
    }
    constructor() {
      (this.events = new Map()),
        (this.maxListeners = ie.defaultMaxListeners),
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
        const s = new bt(this, e, this.listenerCount(e));
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
  ae = ie;
ae.defaultMaxListeners = 10;
var vt = "x-interceptors-internal-request-id";
function z(e) {
  return globalThis[e] || void 0;
}
function wt(e, t) {
  globalThis[e] = t;
}
function kt(e) {
  delete globalThis[e];
}
var F = class {
  constructor(e) {
    (this.symbol = e),
      (this.readyState = "INACTIVE"),
      (this.emitter = new ae()),
      (this.subscriptions = []),
      (this.logger = new oe(e.description)),
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
        (this.on = (s, o) => (
          e.info('proxying the "%s" listener', s),
          r.emitter.addListener(s, o),
          this.subscriptions.push(() => {
            r.emitter.removeListener(s, o),
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
      e.info("global symbol deleted:", z(this.symbol)),
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
    const t = z(this.symbol);
    return (
      this.logger.info(
        "retrieved global instance:",
        (e = t == null ? void 0 : t.constructor) == null ? void 0 : e.name
      ),
      t
    );
  }
  setInstance() {
    wt(this.symbol, this),
      this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    kt(this.symbol),
      this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function le() {
  return Math.random().toString(16).slice(2);
}
var N = class extends F {
  constructor(e) {
    (N.symbol = Symbol(e.name)),
      super(N.symbol),
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
function Et(e) {
  return (t, r) => {
    var a;
    const { payload: s } = r,
      { requestId: o } = s,
      n = e.requests.get(o);
    if ((e.requests.delete(o), (a = s.type) != null && a.includes("opaque")))
      return;
    const i =
      s.status === 0
        ? Response.error()
        : new Response(ne(s.status) ? null : s.body, s);
    i.url ||
      Object.defineProperty(i, "url", {
        value: n.url,
        enumerable: !0,
        writable: !1,
      }),
      e.emitter.emit(
        s.isMockedResponse ? "response:mocked" : "response:bypass",
        { response: i, request: n, requestId: s.requestId }
      );
  };
}
function xt(e, t) {
  !(t != null && t.quiet) &&
    !location.href.startsWith(e.scope) &&
    h.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
}
var Lt = (e) =>
  function (r, s) {
    return (async () => {
      e.events.removeAllListeners(),
        e.workerChannel.on("REQUEST", tt(e, r)),
        e.workerChannel.on("RESPONSE", Et(e));
      const i = await Je(
          r.serviceWorker.url,
          r.serviceWorker.options,
          r.findWorker
        ),
        [a, l] = i;
      if (!a) {
        const c =
          s != null && s.findWorker
            ? h.formatMessage(
                `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
                r.serviceWorker.url
              )
            : h.formatMessage(
                `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
                r.serviceWorker.url,
                location.host
              );
        throw new Error(c);
      }
      return (
        (e.worker = a),
        (e.registration = l),
        e.events.addListener(window, "beforeunload", () => {
          a.state !== "redundant" && e.workerChannel.send("CLIENT_CLOSED"),
            window.clearInterval(e.keepAliveInterval);
        }),
        await rt(e).catch((c) => {
          h.error(
            "Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues), including the original error below."
          ),
            console.error(c);
        }),
        (e.keepAliveInterval = window.setInterval(
          () => e.workerChannel.send("KEEPALIVE_REQUEST"),
          5e3
        )),
        xt(l, e.startOptions),
        l
      );
    })().then(async (i) => {
      const a = i.installing || i.waiting;
      return (
        a &&
          (await new Promise((l) => {
            a.addEventListener("statechange", () => {
              if (a.state === "activated") return l();
            });
          })),
        await Qe(e, r).catch((l) => {
          throw new Error(
            `Failed to enable mocking: ${l == null ? void 0 : l.message}`
          );
        }),
        i
      );
    });
  };
function ce(e = {}) {
  e.quiet ||
    console.log(
      `%c${h.formatMessage("Mocking disabled.")}`,
      "color:orangered;font-weight:bold;"
    );
}
var St = (e) =>
    function () {
      var r;
      if (!e.isMockingEnabled) {
        h.warn(
          'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
        );
        return;
      }
      e.workerChannel.send("MOCK_DEACTIVATE"),
        (e.isMockingEnabled = !1),
        window.clearInterval(e.keepAliveInterval),
        ce({ quiet: (r = e.startOptions) == null ? void 0 : r.quiet });
    },
  Rt = {
    serviceWorker: { url: "/ng-notes/mockServiceWorker.js", options: null },
    quiet: !1,
    waitUntilReady: !0,
    onUnhandledRequest: "warn",
    findWorker(e, t) {
      return e === t;
    },
  };
function Pt() {
  const e = (t, r) => {
    (e.state = "pending"),
      (e.resolve = (s) => {
        if (e.state !== "pending") return;
        e.result = s;
        const o = (n) => ((e.state = "fulfilled"), n);
        return t(s instanceof Promise ? s : Promise.resolve(s).then(o));
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
var v,
  L,
  A,
  ee,
  ue =
    ((ee = class extends Promise {
      constructor(t = null) {
        const r = Pt();
        super((s, o) => {
          r(s, o), t == null || t(r.resolve, r.reject);
        });
        _(this, L);
        _(this, v, void 0);
        m(this, "resolve");
        m(this, "reject");
        U(this, v, r),
          (this.resolve = S(this, v).resolve),
          (this.reject = S(this, v).reject);
      }
      get state() {
        return S(this, v).state;
      }
      get rejectionReason() {
        return S(this, v).rejectionReason;
      }
      then(t, r) {
        return M(this, L, A).call(this, super.then(t, r));
      }
      catch(t) {
        return M(this, L, A).call(this, super.catch(t));
      }
      finally(t) {
        return M(this, L, A).call(this, super.finally(t));
      }
    }),
    (v = new WeakMap()),
    (L = new WeakSet()),
    (A = function (t) {
      return Object.defineProperties(t, {
        resolve: { configurable: !0, value: this.resolve },
        reject: { configurable: !0, value: this.reject },
      });
    }),
    ee),
  qt = class {
    constructor(e) {
      (this.request = e), (this.responsePromise = new ue());
    }
    respondWith(e) {
      w(
        this.responsePromise.state === "pending",
        'Failed to respond to "%s %s" request: the "request" event has already been responded to.',
        this.request.method,
        this.request.url
      ),
        this.responsePromise.resolve(e);
    }
  };
function de(e) {
  const t = new qt(e);
  return (
    Reflect.set(e, "respondWith", t.respondWith.bind(t)),
    { interactiveRequest: e, requestController: t }
  );
}
async function he(e, t, ...r) {
  const s = e.listeners(t);
  if (s.length !== 0) for (const o of s) await o.apply(e, r);
}
function Tt(e, t) {
  try {
    return e[t], !0;
  } catch {
    return !1;
  }
}
function Mt(e) {
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
var fe = class extends F {
    constructor() {
      super(fe.symbol);
    }
    checkEnvironment() {
      return typeof globalThis < "u" && typeof globalThis.fetch < "u";
    }
    async setup() {
      const e = globalThis.fetch;
      w(!e[x], 'Failed to patch the "fetch" module: already patched.'),
        (globalThis.fetch = async (t, r) => {
          var s;
          const o = le(),
            n =
              typeof t == "string" && typeof location < "u" && !Mt(t)
                ? new URL(t, location.origin)
                : t,
            i = new Request(n, r);
          this.logger.info("[%s] %s", i.method, i.url);
          const { interactiveRequest: a, requestController: l } = de(i);
          this.logger.info(
            'emitting the "request" event for %d listener(s)...',
            this.emitter.listenerCount("request")
          ),
            this.emitter.once("request", ({ requestId: p }) => {
              p === o &&
                l.responsePromise.state === "pending" &&
                l.responsePromise.resolve(void 0);
            }),
            this.logger.info("awaiting for the mocked response...");
          const c = a.signal,
            u = new ue();
          c &&
            c.addEventListener(
              "abort",
              () => {
                u.reject(c.reason);
              },
              { once: !0 }
            );
          const f = await B(async () => {
            const p = he(this.emitter, "request", { request: a, requestId: o });
            await Promise.race([u, p, l.responsePromise]),
              this.logger.info("all request listeners have been resolved!");
            const g = await l.responsePromise;
            return this.logger.info("event.respondWith called with:", g), g;
          });
          if (u.state === "rejected") return Promise.reject(u.rejectionReason);
          if (f.error) return Promise.reject(J(f.error));
          const d = f.data;
          if (d && !((s = i.signal) != null && s.aborted)) {
            if (
              (this.logger.info("received mocked response:", d),
              Tt(d, "type") && d.type === "error")
            )
              return (
                this.logger.info(
                  "received a network error response, rejecting the request promise..."
                ),
                Promise.reject(J(d))
              );
            const p = d.clone();
            return (
              this.emitter.emit("response", {
                response: p,
                isMockedResponse: !0,
                request: a,
                requestId: o,
              }),
              Object.defineProperty(d, "url", {
                writable: !1,
                enumerable: !0,
                configurable: !1,
                value: i.url,
              }),
              d
            );
          }
          return (
            this.logger.info("no mocked response received!"),
            e(i).then((p) => {
              const g = p.clone();
              return (
                this.logger.info("original fetch performed", g),
                this.emitter.emit("response", {
                  response: g,
                  isMockedResponse: !1,
                  request: a,
                  requestId: o,
                }),
                p
              );
            })
          );
        }),
        Object.defineProperty(globalThis.fetch, x, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.fetch, x, { value: void 0 }),
            (globalThis.fetch = e),
            this.logger.info(
              'restored native "globalThis.fetch"!',
              globalThis.fetch.name
            );
        });
    }
  },
  pe = fe;
pe.symbol = Symbol("fetch");
function J(e) {
  return Object.assign(new TypeError("Failed to fetch"), { cause: e });
}
function At(e, t) {
  const r = new Uint8Array(e.byteLength + t.byteLength);
  return r.set(e, 0), r.set(t, e.byteLength), r;
}
var ge = class {
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
  It = class extends ge {
    constructor(e, t) {
      super(e),
        (this.lengthComputable =
          (t == null ? void 0 : t.lengthComputable) || !1),
        (this.composed = (t == null ? void 0 : t.composed) || !1),
        (this.loaded = (t == null ? void 0 : t.loaded) || 0),
        (this.total = (t == null ? void 0 : t.total) || 0);
    }
  },
  Ct = typeof ProgressEvent < "u";
function _t(e, t, r) {
  const s = [
      "error",
      "progress",
      "loadstart",
      "loadend",
      "load",
      "timeout",
      "abort",
    ],
    o = Ct ? ProgressEvent : It;
  return s.includes(t)
    ? new o(t, {
        lengthComputable: !0,
        loaded: (r == null ? void 0 : r.loaded) || 0,
        total: (r == null ? void 0 : r.total) || 0,
      })
    : new ge(t, { target: e, currentTarget: e });
}
function me(e, t) {
  if (!(t in e)) return null;
  if (Object.prototype.hasOwnProperty.call(e, t)) return e;
  const s = Reflect.getPrototypeOf(e);
  return s ? me(s, t) : null;
}
function Q(e, t) {
  return new Proxy(e, Ht(t));
}
function Ht(e) {
  const {
      constructorCall: t,
      methodCall: r,
      getProperty: s,
      setProperty: o,
    } = e,
    n = {};
  return (
    typeof t < "u" &&
      (n.construct = function (i, a, l) {
        const c = Reflect.construct.bind(null, i, a, l);
        return t.call(l, a, c);
      }),
    (n.set = function (i, a, l) {
      const c = () => {
        const u = me(i, a) || i,
          f = Reflect.getOwnPropertyDescriptor(u, a);
        return typeof (f == null ? void 0 : f.set) < "u"
          ? (f.set.apply(i, [l]), !0)
          : Reflect.defineProperty(u, a, {
              writable: !0,
              enumerable: !0,
              configurable: !0,
              value: l,
            });
      };
      return typeof o < "u" ? o.call(i, [a, l], c) : c();
    }),
    (n.get = function (i, a, l) {
      const c = () => i[a],
        u = typeof s < "u" ? s.call(i, [a, l], c) : c();
      return typeof u == "function"
        ? (...f) => {
            const d = u.bind(i, ...f);
            return typeof r < "u" ? r.call(i, [a, f], d) : d();
          }
        : u;
    }),
    n
  );
}
function Wt(e) {
  return [
    "application/xhtml+xml",
    "application/xml",
    "image/svg+xml",
    "text/html",
    "text/xml",
  ].some((r) => e.startsWith(r));
}
function jt(e) {
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function Nt(e, t) {
  const r = ne(e.status) ? null : t;
  return new Response(r, {
    status: e.status,
    statusText: e.statusText,
    headers: Dt(e.getAllResponseHeaders()),
  });
}
function Dt(e) {
  const t = new Headers(),
    r = e.split(/[\r\n]+/);
  for (const s of r) {
    if (s.trim() === "") continue;
    const [o, ...n] = s.split(": "),
      i = n.join(": ");
    t.append(o, i);
  }
  return t;
}
var Y = Symbol("isMockedResponse"),
  Bt = D(),
  Ft = class {
    constructor(e, t) {
      (this.initialRequest = e),
        (this.logger = t),
        (this.method = "GET"),
        (this.url = null),
        (this.events = new Map()),
        (this.requestId = le()),
        (this.requestHeaders = new Headers()),
        (this.responseBuffer = new Uint8Array()),
        (this.request = Q(e, {
          setProperty: ([r, s], o) => {
            switch (r) {
              case "ontimeout": {
                const n = r.slice(2);
                return this.request.addEventListener(n, s), o();
              }
              default:
                return o();
            }
          },
          methodCall: ([r, s], o) => {
            var n;
            switch (r) {
              case "open": {
                const [i, a] = s;
                return (
                  typeof a > "u"
                    ? ((this.method = "GET"), (this.url = Z(i)))
                    : ((this.method = i), (this.url = Z(a))),
                  (this.logger = this.logger.extend(
                    `${this.method} ${this.url.href}`
                  )),
                  this.logger.info("open", this.method, this.url.href),
                  o()
                );
              }
              case "addEventListener": {
                const [i, a] = s;
                return (
                  this.registerEvent(i, a),
                  this.logger.info("addEventListener", i, a),
                  o()
                );
              }
              case "setRequestHeader": {
                const [i, a] = s;
                return (
                  this.requestHeaders.set(i, a),
                  this.logger.info("setRequestHeader", i, a),
                  o()
                );
              }
              case "send": {
                const [i] = s;
                i != null &&
                  (this.requestBody = typeof i == "string" ? nt(i) : i),
                  this.request.addEventListener("load", () => {
                    if (typeof this.onResponse < "u") {
                      const c = Nt(this.request, this.request.response);
                      this.onResponse.call(this, {
                        response: c,
                        isMockedResponse: Y in this.request,
                        request: a,
                        requestId: this.requestId,
                      });
                    }
                  });
                const a = this.toFetchApiRequest();
                (
                  ((n = this.onRequest) == null
                    ? void 0
                    : n.call(this, {
                        request: a,
                        requestId: this.requestId,
                      })) || Promise.resolve()
                ).finally(() => {
                  if (this.request.readyState < this.request.LOADING)
                    return (
                      this.logger.info(
                        "request callback settled but request has not been handled (readystate %d), performing as-is...",
                        this.request.readyState
                      ),
                      Bt && this.request.setRequestHeader(vt, this.requestId),
                      o()
                    );
                });
                break;
              }
              default:
                return o();
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
        k(this.request, Y, !0),
        k(this.request, "status", e.status),
        k(this.request, "statusText", e.statusText),
        k(this.request, "responseURL", this.url.href),
        (this.request.getResponseHeader = new Proxy(
          this.request.getResponseHeader,
          {
            apply: (s, o, n) => {
              if (
                (this.logger.info("getResponseHeader", n[0]),
                this.request.readyState < this.request.HEADERS_RECEIVED)
              )
                return (
                  this.logger.info("headers not received yet, returning null"),
                  null
                );
              const i = e.headers.get(n[0]);
              return (
                this.logger.info('resolved response header "%s" to', n[0], i), i
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
              const o = Array.from(e.headers.entries()).map(
                ([n, i]) => `${n}: ${i}`
              ).join(`\r
`);
              return this.logger.info("resolved all response headers to", o), o;
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
          o = async () => {
            const { value: n, done: i } = await s.read();
            if (i) {
              this.logger.info("response body stream done!"), r();
              return;
            }
            n &&
              (this.logger.info("read response body chunk:", n),
              (this.responseBuffer = At(this.responseBuffer, n)),
              this.trigger("progress", {
                loaded: this.responseBuffer.byteLength,
                total: t,
              })),
              o();
          };
        o();
      } else r();
    }
    responseBufferToText() {
      return ot(this.responseBuffer);
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
          const e = jt(this.responseBufferToText());
          return this.logger.info("resolved response JSON", e), e;
        }
        case "arraybuffer": {
          const e = it(this.responseBuffer);
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
        (w(
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
        (w(
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
        : Wt(e)
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
      k(this.request, "readyState", e),
        this.logger.info("set readyState to: %d", e),
        e !== this.request.UNSENT &&
          (this.logger.info('triggerring "readystatechange" event...'),
          this.trigger("readystatechange"));
    }
    trigger(e, t) {
      const r = this.request[`on${e}`],
        s = _t(this.request, e, t);
      this.logger.info('trigger "%s"', e, t || ""),
        typeof r == "function" &&
          (this.logger.info('found a direct "%s" callback, calling...', e),
          r.call(this.request, s));
      for (const [o, n] of this.events)
        o === e &&
          (this.logger.info(
            'found %d listener(s) for "%s" event, calling...',
            n.length,
            e
          ),
          n.forEach((i) => i.call(this.request, s)));
    }
    toFetchApiRequest() {
      this.logger.info("converting request to a Fetch API Request...");
      const e = new Request(this.url.href, {
          method: this.method,
          headers: this.requestHeaders,
          credentials: this.request.withCredentials ? "include" : "same-origin",
          body: ["GET", "HEAD"].includes(this.method) ? null : this.requestBody,
        }),
        t = Q(e.headers, {
          methodCall: ([r, s], o) => {
            switch (r) {
              case "append":
              case "set": {
                const [n, i] = s;
                this.request.setRequestHeader(n, i);
                break;
              }
              case "delete": {
                const [n] = s;
                console.warn(
                  `XMLHttpRequest: Cannot remove a "${n}" header from the Fetch API representation of the "${e.method} ${e.url}" request. XMLHttpRequest headers cannot be removed.`
                );
                break;
              }
            }
            return o();
          },
        });
      return (
        k(e, "headers", t),
        this.logger.info("converted request to a Fetch API Request!", e),
        e
      );
    }
  };
function Z(e) {
  return typeof location > "u"
    ? new URL(e)
    : new URL(e.toString(), location.href);
}
function k(e, t, r) {
  Reflect.defineProperty(e, t, { writable: !0, enumerable: !0, value: r });
}
function Ut({ emitter: e, logger: t }) {
  return new Proxy(globalThis.XMLHttpRequest, {
    construct(s, o, n) {
      t.info("constructed new XMLHttpRequest");
      const i = Reflect.construct(s, o, n),
        a = Object.getOwnPropertyDescriptors(s.prototype);
      for (const c in a) Reflect.defineProperty(i, c, a[c]);
      const l = new Ft(i, t);
      return (
        (l.onRequest = async function ({ request: c, requestId: u }) {
          const { interactiveRequest: f, requestController: d } = de(c);
          this.logger.info("awaiting mocked response..."),
            e.once("request", ({ requestId: y }) => {
              y === u &&
                d.responsePromise.state === "pending" &&
                d.respondWith(void 0);
            });
          const p = await B(async () => {
            this.logger.info(
              'emitting the "request" event for %s listener(s)...',
              e.listenerCount("request")
            ),
              await he(e, "request", { request: f, requestId: u }),
              this.logger.info('all "request" listeners settled!');
            const y = await d.responsePromise;
            return this.logger.info("event.respondWith called with:", y), y;
          });
          if (p.error) {
            this.logger.info(
              "request listener threw an exception, aborting request...",
              p.error
            ),
              l.errorWith(p.error);
            return;
          }
          const g = p.data;
          if (typeof g < "u") {
            if (
              (this.logger.info(
                "received mocked response: %d %s",
                g.status,
                g.statusText
              ),
              g.type === "error")
            ) {
              this.logger.info(
                "received a network error response, rejecting the request promise..."
              ),
                l.errorWith(new TypeError("Network error"));
              return;
            }
            return l.respondWith(g);
          }
          this.logger.info(
            "no mocked response received, performing request as-is..."
          );
        }),
        (l.onResponse = async function ({
          response: c,
          isMockedResponse: u,
          request: f,
          requestId: d,
        }) {
          this.logger.info(
            'emitting the "response" event for %s listener(s)...',
            e.listenerCount("response")
          ),
            e.emit("response", {
              response: c,
              isMockedResponse: u,
              request: f,
              requestId: d,
            });
        }),
        l.request
      );
    },
  });
}
var ye = class extends F {
    constructor() {
      super(ye.interceptorSymbol);
    }
    checkEnvironment() {
      return typeof globalThis.XMLHttpRequest < "u";
    }
    setup() {
      const e = this.logger.extend("setup");
      e.info('patching "XMLHttpRequest" module...');
      const t = globalThis.XMLHttpRequest;
      w(!t[x], 'Failed to patch the "XMLHttpRequest" module: already patched.'),
        (globalThis.XMLHttpRequest = Ut({
          emitter: this.emitter,
          logger: this.logger,
        })),
        e.info(
          'native "XMLHttpRequest" module patched!',
          globalThis.XMLHttpRequest.name
        ),
        Object.defineProperty(globalThis.XMLHttpRequest, x, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.XMLHttpRequest, x, {
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
  be = ye;
be.interceptorSymbol = Symbol("xhr");
function $t(e, t) {
  const r = new N({ name: "fallback", interceptors: [new pe(), new be()] });
  return (
    r.on("request", async ({ request: s, requestId: o }) => {
      const n = s.clone(),
        i = await te(s, o, e.getRequestHandlers(), t, e.emitter, {
          onMockedResponse(a, { handler: l, parsedResult: c }) {
            t.quiet ||
              e.emitter.once("response:mocked", ({ response: u }) => {
                l.log({ request: n, response: u, parsedResult: c });
              });
          },
        });
      i && s.respondWith(i);
    }),
    r.on(
      "response",
      ({ response: s, isMockedResponse: o, request: n, requestId: i }) => {
        e.emitter.emit(o ? "response:mocked" : "response:bypass", {
          response: s,
          request: n,
          requestId: i,
        });
      }
    ),
    r.apply(),
    r
  );
}
function Gt(e) {
  return async function (r) {
    (e.fallbackInterceptor = $t(e, r)),
      se({ message: "Mocking enabled (fallback mode).", quiet: r.quiet });
  };
}
function Xt(e) {
  return function () {
    var r, s;
    (r = e.fallbackInterceptor) == null || r.dispose(),
      ce({ quiet: (s = e.startOptions) == null ? void 0 : s.quiet });
  };
}
function Ot() {
  try {
    const e = new ReadableStream({ start: (r) => r.close() });
    return new MessageChannel().port1.postMessage(e, [e]), !0;
  } catch {
    return !1;
  }
}
var Kt = class extends We {
  constructor(...t) {
    super(...t);
    m(this, "context");
    m(this, "startHandler", null);
    m(this, "stopHandler", null);
    m(this, "listeners");
    w(
      !D(),
      h.formatMessage(
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
            (o) => {
              if (o.source !== this.context.worker) return;
              const n = o.data;
              n && n.type === r && s(o, n);
            }
          );
        },
        send: (r) => {
          var s;
          (s = this.context.worker) == null || s.postMessage(r);
        },
      },
      events: {
        addListener: (r, s, o) => (
          r.addEventListener(s, o),
          this.listeners.push({ eventType: s, target: r, callback: o }),
          () => {
            r.removeEventListener(s, o);
          }
        ),
        removeAllListeners: () => {
          for (const { target: r, eventType: s, callback: o } of this.listeners)
            r.removeEventListener(s, o);
          this.listeners = [];
        },
        once: (r) => {
          const s = [];
          return new Promise((o, n) => {
            const i = (a) => {
              try {
                const l = a.data;
                l.type === r && o(l);
              } catch (l) {
                n(l);
              }
            };
            s.push(
              this.context.events.addListener(
                navigator.serviceWorker,
                "message",
                i
              ),
              this.context.events.addListener(
                navigator.serviceWorker,
                "messageerror",
                n
              )
            );
          }).finally(() => {
            s.forEach((o) => o());
          });
        },
      },
      supports: {
        serviceWorkerApi:
          !("serviceWorker" in navigator) || location.protocol === "file:",
        readableStreamTransfer: Ot(),
      },
    };
    return (
      (this.startHandler = t.supports.serviceWorkerApi ? Gt(t) : Lt(t)),
      (this.stopHandler = t.supports.serviceWorkerApi ? Xt(t) : St(t)),
      t
    );
  }
  async start(t = {}) {
    return (
      t.waitUntilReady === !0 &&
        h.warn(
          'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'
        ),
      (this.context.startOptions = re(Rt, t)),
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
function Vt(...e) {
  return new Kt(...e);
}
var zt = /\.(js|jsx|ts|tsx|mjs|woff|woff2|ttf|otf|eot)$/,
  Jt = [
    "sb-common-assets",
    "node_modules",
    "node-modules",
    "hot-update.json",
    "__webpack_hmr",
    "sb-vite",
  ],
  Qt = (e) => !!(zt.test(e) || Jt.some((r) => e.includes(r))),
  Yt = (e) =>
    typeof (e == null ? void 0 : e.onUnhandledRequest) == "string"
      ? e
      : {
          ...e,
          onUnhandledRequest: (...t) => {
            const [{ url: r }, s] = t;
            if (!Qt(r)) {
              if (!(e != null && e.onUnhandledRequest)) {
                s.warning();
                return;
              }
              typeof (e == null ? void 0 : e.onUnhandledRequest) ==
                "function" && e.onUnhandledRequest(...t);
            }
          },
        },
  E;
function Zt(e, t = []) {
  const r = Vt(...t);
  return r.start(Yt(e)), (E = r), r;
}
function er(e) {
  if ((E == null || E.resetHandlers(), e != null)) {
    if (Array.isArray(e) && e.length > 0) {
      E.use(...e);
      return;
    }
    if ("handlers" in e && e.handlers) {
      const t = Object.values(e.handlers)
        .filter(Boolean)
        .reduce((r, s) => r.concat(s), []);
      t.length > 0 && E.use(...t);
      return;
    }
  }
}
var tr = async (e) => {
  var t;
  return (
    er(e.parameters.msw),
    typeof window < "u" &&
      "navigator" in window &&
      (t = navigator.serviceWorker) != null &&
      t.controller &&
      (await navigator.serviceWorker.ready),
    {}
  );
};
const rr = {
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

        /* для компонента <Calendar/> */
        span[data-p-disabled="true"] {
          opacity: 0.3;
        }
        span[data-p-highlight="true"] {
          color: #912F46;
          background-color: rgba(145, 47, 70, 0.2);
        }
        #birthday_panel + div {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.6;
        }
        #birthday_panel span[data-pc-name="ripple"]{
          background-color: rgba(145, 47, 70, 0.3);
        }
        /* для компонента <Calendar/> */
    `,
    },
    inputtext: {
      root: ({ props: e, context: t }) => ({
        className: R(
          "font-Inter text-sm/[1.125rem] bg-transparent font-bold outline-none"
        ),
      }),
    },
    button: {
      root: ({ props: e, context: t }) => ({
        className: R(
          "font-Inter w-full rounded-lg bg-912F46 active:bg-[#792035] pb-3 pl-1 pr-1 pt-3 transition-colors ",
          { "bg-F1F1F1  pointer-events-none cursor-default": e.disabled },
          { "text-8D929A pointer-events-none cursor-default": e.loading },
          { "bg-F1F1F1 active:bg-[#ccc]": e.plain }
        ),
      }),
      label: ({ props: e, context: t }) => ({
        className: R(
          "text-sm/[1.125rem] text-8D929A font-bold text-FFFFFF transition-colors",
          { hidden: e.loading },
          { "text-8D929A": e.disabled },
          { "text-212121": e.plain },
          { "text-8D929A": e.disabled && e.plain }
        ),
      }),
    },
    toast: {
      root: ({ props: e }) => ({
        className: R("w-max max-w-sm", {
          "-translate-x-2/4":
            e.position === "center" ||
            e.position === "bottom-center" ||
            e.position === "top-center",
        }),
      }),
      content: { className: "my-4 mx-[10px] rounded-xl bg-FFFFFF shadow-xl" },
      closeButton: { className: "hidden" },
      transition: {
        timeout: { enter: 300, exit: 350 },
        classNames: {
          enter: "opacity-0 max-h-0 translate-x-0 translate-y-2/4",
          enterActive:
            "!max-h-40 !opacity-100 !translate-y-0 transition-transform transition-opacity duration-300",
          exit: "max-h-40 opacity-100 scale-100",
          exitActive:
            "!opacity-0 !mb-0 scale-75 overflow-hidden transition-all duration-300 ease-in",
        },
      },
    },
    calendar: {
      root: { className: "h-[18px]" },
      input: { root: { className: "w-full -translate-y-[3px] pr-6" } },
      panel: {
        className:
          "absolute w-auto p-2 min-w-[80vw] border rounded-lg shadow-md bg-white border-surface-200",
      },
      groupContainer: { className: "flex" },
      group: {
        className:
          "flex-1 border-l border-surface-200 pr-0.5 pl-0.5 pt-0 pb-0 first:pl-0 first:border-l-0",
      },
      header: {
        className:
          "font-semibold flex items-center justify-between p-2 m-0 border-b rounded-t-md text-surface-700  bg-surface-0 border-surface-200",
      },
      previousButton: {
        className:
          "flex items-center justify-center cursor-pointer overflow-hidden relative w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out",
      },
      nextButton: {
        className:
          "flex items-center justify-center cursor-pointer overflow-hidden relative w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out",
      },
      title: { className: "leading-8 mx-auto" },
      monthTitle: {
        className:
          "text-gray-700 font-Inter transition duration-200 font-semibold p-2 mr-2",
      },
      yearTitle: {
        className:
          "text-gray-700 font-Inter  transition duration-200 font-semibold p-2",
      },
      table: {
        className:
          "text-base font-Inter  leading-none border-collapse w-full m-0 my-2",
      },
      tableHeaderCell: { className: "p-0 md:p-2" },
      weekDay: { className: "text-gray-600" },
      day: { className: "p-0 md:p-2" },
      dayLabel: {
        className:
          "flex items-center justify-center mx-auto w-10 h-10 rounded-full border-transparent border cursor-default",
      },
      monthPicker: { className: "my-2" },
      month: {
        className:
          "inline-flex items-center justify-center w-1/3 p-2 rounded-md font-Inter text-surface-600 bg-transparent cursor-pointer",
      },
      decadeTitle: { className: "font-Inter" },
      yearPicker: { className: "my-2" },
      year: {
        className:
          "inline-flex items-center justify-center w-1/3 p-2 rounded-md font-Inter  text-surface-600 bg-transparent focus:outline-none cursor-pointer",
      },
      transition: {
        timeout: 150,
        classNames: {
          enter: "opacity-0",
          enterActive: "opacity-100 transition-opacity duration-200 ease-in",
          exit: "opacity-100",
          exitActive: "!opacity-0 transition-opacity duration-150 ease-linear",
        },
      },
    },
    skeleton: {
      root: () => ({
        className: R(
          "overflow-hidden",
          "bg-gray-200",
          "rounded-md",
          "after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:content after:w-full after:h-full after:bg-blue-400 after:left-full after:transform after:translate-x-full after:z-10 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent animate-pulse"
        ),
      }),
    },
  },
  sr = new Ae();
Zt();
const ve = ({ children: e }) =>
    q.jsx(Pe, {
      children: q.jsx(Me, {
        store: Re,
        children: q.jsx(Se, {
          client: sr,
          children: q.jsx(qe, {
            value: {
              unstyled: !0,
              pt: rr,
              ripple: !0,
              ptOptions: {
                mergeSections: !0,
                mergeProps: !0,
                classNameMergeFunction: Te,
              },
            },
            children: e,
          }),
        }),
      }),
    }),
  xr = {
    parameters: {
      controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    },
    decorators: [Fe(ve)],
    loaders: [tr],
  };
ve.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Provider",
  props: {
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
  },
};
export { ve as Provider, xr as default };
