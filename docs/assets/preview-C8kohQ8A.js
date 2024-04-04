var pt = Object.defineProperty;
var gt = (e, t, r) =>
  t in e
    ? pt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var k = (e, t, r) => (gt(e, typeof t != "symbol" ? t + "" : t, r), r),
  ce = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  };
var a = (e, t, r) => (
    ce(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  y = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  f = (e, t, r, s) => (
    ce(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r
  );
var oe = (e, t, r, s) => ({
    set _(n) {
      f(e, t, n, r);
    },
    get _() {
      return a(e, t, s);
    },
  }),
  P = (e, t, r) => (ce(e, t, "access private method"), r);
import { j as te } from "./jsx-runtime-_e34SzbC.js";
import { b as mt } from "./preview-CY0ieD5r.js";
import {
  i as qe,
  d as w,
  E as Pe,
  t as yt,
  e as Re,
  f as vt,
  r as bt,
  n as M,
  h as wt,
  j as Et,
  k as q,
  l as me,
  m as he,
  o as kt,
  S as Ge,
  p as Ke,
  q as Le,
  M as St,
  v as Te,
  w as qt,
  x as Pt,
  y as Rt,
  z as Me,
  A as Lt,
  B as xe,
  C as Ae,
  D as Tt,
  F as Mt,
  Q as xt,
} from "./store-Ew_vBLzJ.js";
import { B as At } from "./index-RDOGhiKV.js";
import { b as Ct } from "./api.esm-Bl9pOvZA.js";
import { c as ae, t as It } from "./utils-vGQRoZUn.js";
import { P as Ft } from "./Provider-B2JF8s1Z.js";
import "./index-DVXBtNgz.js";
import "./mapValues-CKVDuP6u.js";
import "./index-CGNRONEi.js";
import "./isPlainObject-CxEYnkQ8.js";
import "./index-C-I6vmrZ.js";
import "./index-DrFu-skq.js";
import "./index-RMSiDl4v.js";
import "./extends-CCbyfPlC.js";
function Dt(e, t) {
  const r = e.emit;
  if (r._isPiped) return;
  const s = function (i, ...o) {
    return t.emit(i, ...o), r.call(this, i, ...o);
  };
  (s._isPiped = !0), (e.emit = s);
}
function Ht(e) {
  const t = [...e];
  return Object.freeze(t), t;
}
class _t {
  constructor() {
    k(this, "subscriptions", []);
  }
  async dispose() {
    await Promise.all(this.subscriptions.map((t) => t()));
  }
}
class Wt {
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
class jt extends _t {
  constructor(...r) {
    super();
    k(this, "handlersController");
    k(this, "emitter");
    k(this, "publicEmitter");
    k(this, "events");
    qe(
      this.validateHandlers(r),
      w.formatMessage(
        "Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?"
      )
    ),
      (this.handlersController = new Wt(r)),
      (this.emitter = new Pe()),
      (this.publicEmitter = new Pe()),
      Dt(this.emitter, this.publicEmitter),
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
    qe(
      this.validateHandlers(r),
      w.formatMessage(
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
    return Ht(this.handlersController.currentHandlers());
  }
  createLifeCycleEvents() {
    return {
      on: (...r) => this.publicEmitter.on(...r),
      removeListener: (...r) => this.publicEmitter.removeListener(...r),
      removeAllListeners: (...r) => this.publicEmitter.removeAllListeners(...r),
    };
  }
}
var Ut = async (e) => {
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
const Ot = async ({
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
async function Bt(e, t = "warn") {
  const r = new URL(e.url),
    s = yt(r),
    n = `intercepted a request without a matching request handler:

  • ${e.method} ${s}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`;
  function i(o) {
    switch (o) {
      case "error":
        throw (
          (w.error("Error: %s", n),
          new Error(
            w.formatMessage(
              'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
            )
          ))
        );
      case "warn": {
        w.warn("Warning: %s", n);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          w.formatMessage(
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
function Nt(e, t) {
  Re.add({ ...e, url: e.url.toString() }, t), Re.persist();
}
async function Xe(e, t, r, s, n, i) {
  var p, m, h, d, g, v;
  if (
    (n.emit("request:start", { request: e, requestId: t }),
    e.headers.get("x-msw-intention") === "bypass")
  ) {
    n.emit("request:end", { request: e, requestId: t }),
      (p = i == null ? void 0 : i.onPassthroughResponse) == null ||
        p.call(i, e);
    return;
  }
  const o = await Ut(() =>
    Ot({
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
    await Bt(e, s.onUnhandledRequest),
      n.emit("request:unhandled", { request: e, requestId: t }),
      n.emit("request:end", { request: e, requestId: t }),
      (m = i == null ? void 0 : i.onPassthroughResponse) == null ||
        m.call(i, e);
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
      (d = i == null ? void 0 : i.onPassthroughResponse) == null ||
        d.call(i, e);
    return;
  }
  Nt(e, l), n.emit("request:match", { request: e, requestId: t });
  const u = o.data,
    c =
      ((g = i == null ? void 0 : i.transformResponse) == null
        ? void 0
        : g.call(i, l)) || l;
  return (
    (v = i == null ? void 0 : i.onMockedResponse) == null || v.call(i, c, u),
    n.emit("request:end", { request: e, requestId: t }),
    c
  );
}
var K,
  X,
  R,
  S,
  E,
  re,
  O,
  x,
  I,
  Oe,
  Qt =
    ((Oe = class extends vt {
      constructor(t) {
        super();
        y(this, x);
        y(this, K, void 0);
        y(this, X, void 0);
        y(this, R, void 0);
        y(this, S, void 0);
        y(this, E, void 0);
        y(this, re, void 0);
        y(this, O, void 0);
        f(this, O, !1),
          f(this, re, t.defaultOptions),
          this.setOptions(t.options),
          f(this, E, []),
          f(this, R, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          f(this, K, t.state || Gt(this.options)),
          (this.state = a(this, K)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      setOptions(t) {
        (this.options = { ...a(this, re), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !a(this, E).length &&
          this.state.fetchStatus === "idle" &&
          a(this, R).remove(this);
      }
      setData(t, r) {
        const s = bt(this.state.data, t, this.options);
        return (
          P(this, x, I).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          s
        );
      }
      setState(t, r) {
        P(this, x, I).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var s, n;
        const r = (s = a(this, S)) == null ? void 0 : s.promise;
        return (
          (n = a(this, S)) == null || n.cancel(t),
          r ? r.then(M).catch(M) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(a(this, K));
      }
      isActive() {
        return a(this, E).some((t) => t.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? a(this, E).some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !wt(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = a(this, E).find((s) => s.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = a(this, S)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = a(this, E).find((s) => s.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = a(this, S)) == null || r.continue();
      }
      addObserver(t) {
        a(this, E).includes(t) ||
          (a(this, E).push(t),
          this.clearGcTimeout(),
          a(this, R).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        a(this, E).includes(t) &&
          (f(
            this,
            E,
            a(this, E).filter((r) => r !== t)
          ),
          a(this, E).length ||
            (a(this, S) &&
              (a(this, O)
                ? a(this, S).cancel({ revert: !0 })
                : a(this, S).cancelRetry()),
            this.scheduleGc()),
          a(this, R).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return a(this, E).length;
      }
      invalidate() {
        this.state.isInvalidated ||
          P(this, x, I).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var c, p, m;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (a(this, S))
            return a(this, S).continueRetry(), a(this, S).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = a(this, E).find((d) => d.options.queryFn);
          h && this.setOptions(h.options);
        }
        const s = new AbortController(),
          n = { queryKey: this.queryKey, meta: this.meta },
          i = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (f(this, O, !0), s.signal),
            });
          };
        i(n);
        const o = () =>
            !this.options.queryFn || this.options.queryFn === me
              ? Promise.reject(
                  new Error(`Missing queryFn: '${this.options.queryHash}'`)
                )
              : (f(this, O, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, n, this)
                  : this.options.queryFn(n)),
          l = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o,
          };
        i(l),
          (c = this.options.behavior) == null || c.onFetch(l, this),
          f(this, X, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((p = l.fetchOptions) == null ? void 0 : p.meta)) &&
            P(this, x, I).call(this, {
              type: "fetch",
              meta: (m = l.fetchOptions) == null ? void 0 : m.meta,
            });
        const u = (h) => {
          var d, g, v, F;
          (he(h) && h.silent) ||
            P(this, x, I).call(this, { type: "error", error: h }),
            he(h) ||
              ((g = (d = a(this, R).config).onError) == null ||
                g.call(d, h, this),
              (F = (v = a(this, R).config).onSettled) == null ||
                F.call(v, this.state.data, h, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          f(
            this,
            S,
            Et({
              fn: l.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: (h) => {
                var d, g, v, F;
                if (h === void 0) {
                  u(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(h),
                  (g = (d = a(this, R).config).onSuccess) == null ||
                    g.call(d, h, this),
                  (F = (v = a(this, R).config).onSettled) == null ||
                    F.call(v, h, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: u,
              onFail: (h, d) => {
                P(this, x, I).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: d,
                });
              },
              onPause: () => {
                P(this, x, I).call(this, { type: "pause" });
              },
              onContinue: () => {
                P(this, x, I).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
            })
          ),
          a(this, S).promise
        );
      }
    }),
    (K = new WeakMap()),
    (X = new WeakMap()),
    (R = new WeakMap()),
    (S = new WeakMap()),
    (E = new WeakMap()),
    (re = new WeakMap()),
    (O = new WeakMap()),
    (x = new WeakSet()),
    (I = function (t) {
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
              ...$t(s.data, this.options),
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
            return he(n) && n.revert && a(this, X)
              ? { ...a(this, X), fetchStatus: "idle" }
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
        q.batch(() => {
          a(this, E).forEach((s) => {
            s.onQueryUpdate();
          }),
            a(this, R).notify({ query: this, type: "updated", action: t });
        });
    }),
    Oe);
function $t(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: kt(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Gt(e) {
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
var C,
  Be,
  Kt =
    ((Be = class extends Ge {
      constructor(t = {}) {
        super();
        y(this, C, void 0);
        (this.config = t), f(this, C, new Map());
      }
      build(t, r, s) {
        const n = r.queryKey,
          i = r.queryHash ?? Ke(n, r);
        let o = this.get(i);
        return (
          o ||
            ((o = new Qt({
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
        a(this, C).has(t.queryHash) ||
          (a(this, C).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = a(this, C).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && a(this, C).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        q.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return a(this, C).get(t);
      }
      getAll() {
        return [...a(this, C).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((s) => Le(r, s));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((s) => Le(t, s)) : r;
      }
      notify(t) {
        q.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        q.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        q.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (C = new WeakMap()),
    Be),
  L,
  se,
  B,
  Ne,
  Xt =
    ((Ne = class extends Ge {
      constructor(t = {}) {
        super();
        y(this, L, void 0);
        y(this, se, void 0);
        y(this, B, void 0);
        (this.config = t), f(this, L, []), f(this, se, 0);
      }
      build(t, r, s) {
        const n = new St({
          mutationCache: this,
          mutationId: ++oe(this, se)._,
          options: t.defaultMutationOptions(r),
          state: s,
        });
        return this.add(n), n;
      }
      add(t) {
        a(this, L).push(t), this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        f(
          this,
          L,
          a(this, L).filter((r) => r !== t)
        ),
          this.notify({ type: "removed", mutation: t });
      }
      clear() {
        q.batch(() => {
          a(this, L).forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return a(this, L);
      }
      find(t) {
        const r = { exact: !0, ...t };
        return a(this, L).find((s) => Te(r, s));
      }
      findAll(t = {}) {
        return a(this, L).filter((r) => Te(t, r));
      }
      notify(t) {
        q.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        return (
          f(
            this,
            B,
            (a(this, B) ?? Promise.resolve())
              .then(() => {
                const t = a(this, L).filter((r) => r.state.isPaused);
                return q.batch(() =>
                  t.reduce(
                    (r, s) => r.then(() => s.continue().catch(M)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                f(this, B, void 0);
              })
          ),
          a(this, B)
        );
      }
    }),
    (L = new WeakMap()),
    (se = new WeakMap()),
    (B = new WeakMap()),
    Ne);
function Vt(e) {
  return {
    onFetch: (t, r) => {
      const s = async () => {
        var g, v, F, we, Ee;
        const n = t.options,
          i =
            (F =
              (v = (g = t.fetchOptions) == null ? void 0 : g.meta) == null
                ? void 0
                : v.fetchMore) == null
              ? void 0
              : F.direction,
          o = ((we = t.state.data) == null ? void 0 : we.pages) || [],
          l = ((Ee = t.state.data) == null ? void 0 : Ee.pageParams) || [],
          u = { pages: [], pageParams: [] };
        let c = !1;
        const p = (T) => {
            Object.defineProperty(T, "signal", {
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
          m =
            t.options.queryFn && t.options.queryFn !== me
              ? t.options.queryFn
              : () =>
                  Promise.reject(
                    new Error(`Missing queryFn: '${t.options.queryHash}'`)
                  ),
          h = async (T, D, U) => {
            if (c) return Promise.reject();
            if (D == null && T.pages.length) return Promise.resolve(T);
            const ie = {
              queryKey: t.queryKey,
              pageParam: D,
              direction: U ? "backward" : "forward",
              meta: t.options.meta,
            };
            p(ie);
            const ft = await m(ie),
              { maxPages: ke } = t.options,
              Se = U ? qt : Pt;
            return {
              pages: Se(T.pages, ft, ke),
              pageParams: Se(T.pageParams, D, ke),
            };
          };
        let d;
        if (i && o.length) {
          const T = i === "backward",
            D = T ? zt : Ce,
            U = { pages: o, pageParams: l },
            ie = D(n, U);
          d = await h(U, ie, T);
        } else {
          d = await h(u, l[0] ?? n.initialPageParam);
          const T = e ?? o.length;
          for (let D = 1; D < T; D++) {
            const U = Ce(n, d);
            d = await h(d, U);
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
function Ce(e, { pages: t, pageParams: r }) {
  const s = t.length - 1;
  return e.getNextPageParam(t[s], t, r[s], r);
}
function zt(e, { pages: t, pageParams: r }) {
  var s;
  return (s = e.getPreviousPageParam) == null
    ? void 0
    : s.call(e, t[0], t, r[0], r);
}
var b,
  H,
  _,
  V,
  z,
  W,
  J,
  Y,
  Qe,
  Jt =
    ((Qe = class {
      constructor(e = {}) {
        y(this, b, void 0);
        y(this, H, void 0);
        y(this, _, void 0);
        y(this, V, void 0);
        y(this, z, void 0);
        y(this, W, void 0);
        y(this, J, void 0);
        y(this, Y, void 0);
        f(this, b, e.queryCache || new Kt()),
          f(this, H, e.mutationCache || new Xt()),
          f(this, _, e.defaultOptions || {}),
          f(this, V, new Map()),
          f(this, z, new Map()),
          f(this, W, 0);
      }
      mount() {
        oe(this, W)._++,
          a(this, W) === 1 &&
            (f(
              this,
              J,
              Rt.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), a(this, b).onFocus());
              })
            ),
            f(
              this,
              Y,
              Me.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), a(this, b).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        oe(this, W)._--,
          a(this, W) === 0 &&
            ((e = a(this, J)) == null || e.call(this),
            f(this, J, void 0),
            (t = a(this, Y)) == null || t.call(this),
            f(this, Y, void 0));
      }
      isFetching(e) {
        return a(this, b).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return a(this, H).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = a(this, b).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const r = this.defaultQueryOptions(e),
            s = a(this, b).build(this, r);
          return (
            e.revalidateIfStale &&
              s.isStaleByTime(r.staleTime) &&
              this.prefetchQuery(r),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return a(this, b)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const s = r.data;
            return [t, s];
          });
      }
      setQueryData(e, t, r) {
        const s = this.defaultQueryOptions({ queryKey: e }),
          n = a(this, b).get(s.queryHash),
          i = n == null ? void 0 : n.state.data,
          o = Lt(t, i);
        if (o !== void 0)
          return a(this, b)
            .build(this, s)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return q.batch(() =>
          a(this, b)
            .findAll(e)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, t, r)])
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = a(this, b).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = a(this, b);
        q.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = a(this, b),
          s = { type: "active", ...e };
        return q.batch(
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
          s = q.batch(() =>
            a(this, b)
              .findAll(e)
              .map((n) => n.cancel(r))
          );
        return Promise.all(s).then(M).catch(M);
      }
      invalidateQueries(e = {}, t = {}) {
        return q.batch(() => {
          if (
            (a(this, b)
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
          s = q.batch(() =>
            a(this, b)
              .findAll(e)
              .filter((n) => !n.isDisabled())
              .map((n) => {
                let i = n.fetch(void 0, r);
                return (
                  r.throwOnError || (i = i.catch(M)),
                  n.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(s).then(M);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = a(this, b).build(this, t);
        return r.isStaleByTime(t.staleTime)
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(M).catch(M);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Vt(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(M).catch(M);
      }
      resumePausedMutations() {
        return Me.isOnline()
          ? a(this, H).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return a(this, b);
      }
      getMutationCache() {
        return a(this, H);
      }
      getDefaultOptions() {
        return a(this, _);
      }
      setDefaultOptions(e) {
        f(this, _, e);
      }
      setQueryDefaults(e, t) {
        a(this, V).set(xe(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...a(this, V).values()];
        let r = {};
        return (
          t.forEach((s) => {
            Ae(e, s.queryKey) && (r = { ...r, ...s.defaultOptions });
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        a(this, z).set(xe(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...a(this, z).values()];
        let r = {};
        return (
          t.forEach((s) => {
            Ae(e, s.mutationKey) && (r = { ...r, ...s.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...a(this, _).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Ke(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === me && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...a(this, _).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        a(this, b).clear(), a(this, H).clear();
      }
    }),
    (b = new WeakMap()),
    (H = new WeakMap()),
    (_ = new WeakMap()),
    (V = new WeakMap()),
    (z = new WeakMap()),
    (W = new WeakMap()),
    (J = new WeakMap()),
    (Y = new WeakMap()),
    Qe);
const Yt = (e) => (t) => {
  const { themes: r = [], selectedTheme: s } = mt(),
    n = r.find(({ name: i }) => !!s && i === s);
  return te.jsx(e, {
    theme: n == null ? void 0 : n.themeObject,
    children: t(),
  });
};
function Zt(e) {
  return {
    status: e.status,
    statusText: e.statusText,
    headers: Object.fromEntries(e.headers.entries()),
  };
}
function Ie(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function Ve(e, t) {
  return Object.entries(t).reduce((r, [s, n]) => {
    const i = r[s];
    return Array.isArray(i) && Array.isArray(n)
      ? ((r[s] = i.concat(n)), r)
      : Ie(i) && Ie(n)
      ? ((r[s] = Ve(i, n)), r)
      : ((r[s] = n), r);
  }, Object.assign({}, e));
}
var er = {},
  tr = /(%?)(%([sdijo]))/g;
function rr(e, t) {
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
function ne(e, ...t) {
  if (t.length === 0) return e;
  let r = 0,
    s = e.replace(tr, (n, i, o, l) => {
      const u = t[r],
        c = rr(u, l);
      return i ? n : (r++, c);
    });
  return (
    r < t.length && (s += ` ${t.slice(r).join(" ")}`),
    (s = s.replace(/%{2,2}/g, "%")),
    s
  );
}
var sr = 2;
function nr(e) {
  if (!e.stack) return;
  const t = e.stack.split(`
`);
  t.splice(1, sr),
    (e.stack = t.join(`
`));
}
var ir = class extends Error {
    constructor(e, ...t) {
      super(e),
        (this.message = e),
        (this.name = "Invariant Violation"),
        (this.message = ne(e, ...t)),
        nr(this);
    }
  },
  N = (e, t, ...r) => {
    if (!e) throw new ir(t, ...r);
  };
N.as = (e, t, r, ...s) => {
  if (!t) {
    const n = s.length === 0 ? r : ne(r, s);
    let i;
    try {
      i = Reflect.construct(e, [n]);
    } catch {
      i = e(n);
    }
    throw i;
  }
};
function ye() {
  if (typeof navigator < "u" && navigator.product === "ReactNative") return !0;
  if (typeof process < "u") {
    const e = process.type;
    return e === "renderer" || e === "worker"
      ? !1
      : !!(process.versions && process.versions.node);
  }
  return !1;
}
var ve = async (e) => {
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
function or(e) {
  return new URL(e, location.href).href;
}
function de(e, t, r) {
  return (
    [e.active, e.installing, e.waiting]
      .filter((o) => o != null)
      .find((o) => r(o.scriptURL, t)) || null
  );
}
var ar = async (e, t = {}, r) => {
  const s = or(e),
    n = await navigator.serviceWorker
      .getRegistrations()
      .then((l) => l.filter((u) => de(u, s, r)));
  !navigator.serviceWorker.controller && n.length > 0 && location.reload();
  const [i] = n;
  if (i) return i.update().then(() => [de(i, s, r), i]);
  const o = await ve(async () => {
    const l = await navigator.serviceWorker.register(e, t);
    return [de(l, s, r), l];
  });
  if (o.error) {
    if (o.error.message.includes("(404)")) {
      const u = new URL((t == null ? void 0 : t.scope) || "/", location.href);
      throw new Error(
        w.formatMessage(`Failed to register a Service Worker for scope ('${u.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      w.formatMessage(
        `Failed to register the Service Worker:

%s`,
        o.error.message
      )
    );
  }
  return o.data;
};
function ze(e = {}) {
  if (e.quiet) return;
  const t = e.message || "Mocking enabled.";
  console.groupCollapsed(
    `%c${w.formatMessage(t)}`,
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
async function lr(e, t) {
  var r, s;
  if (
    (e.workerChannel.send("MOCK_ACTIVATE"),
    await e.events.once("MOCKING_ENABLED"),
    e.isMockingEnabled)
  ) {
    w.warn(
      'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
    );
    return;
  }
  (e.isMockingEnabled = !0),
    ze({
      quiet: t.quiet,
      workerScope: (r = e.registration) == null ? void 0 : r.scope,
      workerUrl: (s = e.worker) == null ? void 0 : s.scriptURL,
    });
}
var ur = class {
  constructor(e) {
    this.port = e;
  }
  postMessage(e, ...t) {
    const [r, s] = t;
    this.port.postMessage({ type: e, data: r }, { transfer: s });
  }
};
function cr(e) {
  if (!["HEAD", "GET"].includes(e.method)) return e.body;
}
function hr(e) {
  return new Request(e.url, { ...e, body: cr(e) });
}
var dr = (e, t) => async (r, s) => {
  const n = new ur(r.ports[0]),
    i = s.payload.id,
    o = hr(s.payload),
    l = o.clone(),
    u = o.clone();
  Tt.cache.set(o, u), e.requests.set(i, u);
  try {
    await Xe(o, i, e.getRequestHandlers(), t, e.emitter, {
      onPassthroughResponse() {
        n.postMessage("PASSTHROUGH");
      },
      async onMockedResponse(c, { handler: p, parsedResult: m }) {
        const h = c.clone(),
          d = c.clone(),
          g = Zt(c);
        if (e.supports.readableStreamTransfer) {
          const v = c.body;
          n.postMessage("MOCK_RESPONSE", { ...g, body: v }, v ? [v] : void 0);
        } else {
          const v = c.body === null ? null : await h.arrayBuffer();
          n.postMessage("MOCK_RESPONSE", { ...g, body: v });
        }
        t.quiet ||
          e.emitter.once("response:mocked", () => {
            p.log({ request: l, response: d, parsedResult: m });
          });
      },
    });
  } catch (c) {
    c instanceof Error &&
      (w.error(
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
async function fr(e) {
  e.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload: t } = await e.events.once("INTEGRITY_CHECK_RESPONSE");
  t.checksum !== "26357c79639bfa20d64c0efca2a87423" &&
    w.warn(`The currently registered Service Worker has been generated by a different version of MSW (${t.packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`);
}
var pr = new TextEncoder();
function gr(e) {
  return pr.encode(e);
}
function mr(e, t) {
  return new TextDecoder(t).decode(e);
}
function yr(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
var vr = new Set([101, 103, 204, 205, 304]);
function Je(e) {
  return vr.has(e);
}
var G = Symbol("isPatchedModule"),
  br = Object.defineProperty,
  wr = (e, t) => {
    for (var r in t) br(e, r, { get: t[r], enumerable: !0 });
  },
  fe = {};
wr(fe, {
  blue: () => kr,
  gray: () => pe,
  green: () => qr,
  red: () => Sr,
  yellow: () => Er,
});
function Er(e) {
  return `\x1B[33m${e}\x1B[0m`;
}
function kr(e) {
  return `\x1B[34m${e}\x1B[0m`;
}
function pe(e) {
  return `\x1B[90m${e}\x1B[0m`;
}
function Sr(e) {
  return `\x1B[31m${e}\x1B[0m`;
}
function qr(e) {
  return `\x1B[32m${e}\x1B[0m`;
}
var ue = ye(),
  Ye = class {
    constructor(e) {
      k(this, "prefix");
      (this.name = e), (this.prefix = `[${this.name}]`);
      const t = Fe("DEBUG"),
        r = Fe("LOG_LEVEL");
      t === "1" || t === "true" || (typeof t < "u" && this.name.startsWith(t))
        ? ((this.debug = ee(r, "debug") ? A : this.debug),
          (this.info = ee(r, "info") ? A : this.info),
          (this.success = ee(r, "success") ? A : this.success),
          (this.warning = ee(r, "warning") ? A : this.warning),
          (this.error = ee(r, "error") ? A : this.error))
        : ((this.info = A),
          (this.success = A),
          (this.warning = A),
          (this.error = A),
          (this.only = A));
    }
    extend(e) {
      return new Ye(`${this.name}:${e}`);
    }
    debug(e, ...t) {
      this.logEntry({
        level: "debug",
        message: pe(e),
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
      const r = new Pr();
      return (s, ...n) => {
        r.measure(),
          this.logEntry({
            level: "info",
            message: `${s} ${pe(`${r.deltaTime}ms`)}`,
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
        c = { timestamp: fe[l], prefix: fe[u] };
      this.getWriter(t)(
        [c.timestamp(this.formatTimestamp(o.timestamp))]
          .concat(s != null ? c.prefix(s) : [])
          .concat(De(r))
          .join(" "),
        ...i.map(De)
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
          return Rr;
        case "warning":
          return Lr;
        case "error":
          return Tr;
      }
    }
  },
  Pr = class {
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
  A = () => {};
function Rr(e, ...t) {
  if (ue) {
    process.stdout.write(
      ne(e, ...t) +
        `
`
    );
    return;
  }
  console.log(e, ...t);
}
function Lr(e, ...t) {
  if (ue) {
    process.stderr.write(
      ne(e, ...t) +
        `
`
    );
    return;
  }
  console.warn(e, ...t);
}
function Tr(e, ...t) {
  if (ue) {
    process.stderr.write(
      ne(e, ...t) +
        `
`
    );
    return;
  }
  console.error(e, ...t);
}
function Fe(e) {
  var t;
  return ue ? er[e] : (t = globalThis[e]) == null ? void 0 : t.toString();
}
function ee(e, t) {
  return e !== void 0 && e !== t;
}
function De(e) {
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
var Mr = class extends Error {
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
  Ze = class {
    static listenerCount(e, t) {
      return e.listenerCount(t);
    }
    constructor() {
      (this.events = new Map()),
        (this.maxListeners = Ze.defaultMaxListeners),
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
        const s = new Mr(this, e, this.listenerCount(e));
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
  et = Ze;
et.defaultMaxListeners = 10;
var xr = "x-interceptors-internal-request-id";
function He(e) {
  return globalThis[e] || void 0;
}
function Ar(e, t) {
  globalThis[e] = t;
}
function Cr(e) {
  delete globalThis[e];
}
var be = class {
  constructor(e) {
    (this.symbol = e),
      (this.readyState = "INACTIVE"),
      (this.emitter = new et()),
      (this.subscriptions = []),
      (this.logger = new Ye(e.description)),
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
      e.info("global symbol deleted:", He(this.symbol)),
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
    const t = He(this.symbol);
    return (
      this.logger.info(
        "retrieved global instance:",
        (e = t == null ? void 0 : t.constructor) == null ? void 0 : e.name
      ),
      t
    );
  }
  setInstance() {
    Ar(this.symbol, this),
      this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    Cr(this.symbol),
      this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function tt() {
  return Math.random().toString(16).slice(2);
}
var ge = class extends be {
  constructor(e) {
    (ge.symbol = Symbol(e.name)),
      super(ge.symbol),
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
function Ir(e) {
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
        : new Response(Je(s.status) ? null : s.body, s);
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
function Fr(e, t) {
  !(t != null && t.quiet) &&
    !location.href.startsWith(e.scope) &&
    w.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
}
var Dr = (e) =>
  function (r, s) {
    return (async () => {
      e.events.removeAllListeners(),
        e.workerChannel.on("REQUEST", dr(e, r)),
        e.workerChannel.on("RESPONSE", Ir(e));
      const o = await ar(
          r.serviceWorker.url,
          r.serviceWorker.options,
          r.findWorker
        ),
        [l, u] = o;
      if (!l) {
        const c =
          s != null && s.findWorker
            ? w.formatMessage(
                `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
                r.serviceWorker.url
              )
            : w.formatMessage(
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
        await fr(e).catch((c) => {
          w.error(
            "Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues), including the original error below."
          ),
            console.error(c);
        }),
        (e.keepAliveInterval = window.setInterval(
          () => e.workerChannel.send("KEEPALIVE_REQUEST"),
          5e3
        )),
        Fr(u, e.startOptions),
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
        await lr(e, r).catch((u) => {
          throw new Error(
            `Failed to enable mocking: ${u == null ? void 0 : u.message}`
          );
        }),
        o
      );
    });
  };
function rt(e = {}) {
  e.quiet ||
    console.log(
      `%c${w.formatMessage("Mocking disabled.")}`,
      "color:orangered;font-weight:bold;"
    );
}
var Hr = (e) =>
    function () {
      var r;
      if (!e.isMockingEnabled) {
        w.warn(
          'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
        );
        return;
      }
      e.workerChannel.send("MOCK_DEACTIVATE"),
        (e.isMockingEnabled = !1),
        window.clearInterval(e.keepAliveInterval),
        rt({ quiet: (r = e.startOptions) == null ? void 0 : r.quiet });
    },
  _r = {
    serviceWorker: { url: "/ng-notes/mockServiceWorker.js", options: null },
    quiet: !1,
    waitUntilReady: !0,
    onUnhandledRequest: "warn",
    findWorker(e, t) {
      return e === t;
    },
  };
function Wr() {
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
var j,
  Z,
  le,
  $e,
  st =
    (($e = class extends Promise {
      constructor(t = null) {
        const r = Wr();
        super((s, n) => {
          r(s, n), t == null || t(r.resolve, r.reject);
        });
        y(this, Z);
        y(this, j, void 0);
        k(this, "resolve");
        k(this, "reject");
        f(this, j, r),
          (this.resolve = a(this, j).resolve),
          (this.reject = a(this, j).reject);
      }
      get state() {
        return a(this, j).state;
      }
      get rejectionReason() {
        return a(this, j).rejectionReason;
      }
      then(t, r) {
        return P(this, Z, le).call(this, super.then(t, r));
      }
      catch(t) {
        return P(this, Z, le).call(this, super.catch(t));
      }
      finally(t) {
        return P(this, Z, le).call(this, super.finally(t));
      }
    }),
    (j = new WeakMap()),
    (Z = new WeakSet()),
    (le = function (t) {
      return Object.defineProperties(t, {
        resolve: { configurable: !0, value: this.resolve },
        reject: { configurable: !0, value: this.reject },
      });
    }),
    $e),
  jr = class {
    constructor(e) {
      (this.request = e), (this.responsePromise = new st());
    }
    respondWith(e) {
      N(
        this.responsePromise.state === "pending",
        'Failed to respond to "%s %s" request: the "request" event has already been responded to.',
        this.request.method,
        this.request.url
      ),
        this.responsePromise.resolve(e);
    }
  };
function nt(e) {
  const t = new jr(e);
  return (
    Reflect.set(e, "respondWith", t.respondWith.bind(t)),
    { interactiveRequest: e, requestController: t }
  );
}
async function it(e, t, ...r) {
  const s = e.listeners(t);
  if (s.length !== 0) for (const n of s) await n.apply(e, r);
}
function Ur(e, t) {
  try {
    return e[t], !0;
  } catch {
    return !1;
  }
}
function Or(e) {
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
var ot = class extends be {
    constructor() {
      super(ot.symbol);
    }
    checkEnvironment() {
      return typeof globalThis < "u" && typeof globalThis.fetch < "u";
    }
    async setup() {
      const e = globalThis.fetch;
      N(!e[G], 'Failed to patch the "fetch" module: already patched.'),
        (globalThis.fetch = async (t, r) => {
          var s;
          const n = tt(),
            i =
              typeof t == "string" && typeof location < "u" && !Or(t)
                ? new URL(t, location.origin)
                : t,
            o = new Request(i, r);
          this.logger.info("[%s] %s", o.method, o.url);
          const { interactiveRequest: l, requestController: u } = nt(o);
          this.logger.info(
            'emitting the "request" event for %d listener(s)...',
            this.emitter.listenerCount("request")
          ),
            this.emitter.once("request", ({ requestId: d }) => {
              d === n &&
                u.responsePromise.state === "pending" &&
                u.responsePromise.resolve(void 0);
            }),
            this.logger.info("awaiting for the mocked response...");
          const c = l.signal,
            p = new st();
          c &&
            c.addEventListener(
              "abort",
              () => {
                p.reject(c.reason);
              },
              { once: !0 }
            );
          const m = await ve(async () => {
            const d = it(this.emitter, "request", { request: l, requestId: n });
            await Promise.race([p, d, u.responsePromise]),
              this.logger.info("all request listeners have been resolved!");
            const g = await u.responsePromise;
            return this.logger.info("event.respondWith called with:", g), g;
          });
          if (p.state === "rejected") return Promise.reject(p.rejectionReason);
          if (m.error) return Promise.reject(_e(m.error));
          const h = m.data;
          if (h && !((s = o.signal) != null && s.aborted)) {
            if (
              (this.logger.info("received mocked response:", h),
              Ur(h, "type") && h.type === "error")
            )
              return (
                this.logger.info(
                  "received a network error response, rejecting the request promise..."
                ),
                Promise.reject(_e(h))
              );
            const d = h.clone();
            return (
              this.emitter.emit("response", {
                response: d,
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
            e(o).then((d) => {
              const g = d.clone();
              return (
                this.logger.info("original fetch performed", g),
                this.emitter.emit("response", {
                  response: g,
                  isMockedResponse: !1,
                  request: l,
                  requestId: n,
                }),
                d
              );
            })
          );
        }),
        Object.defineProperty(globalThis.fetch, G, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.fetch, G, { value: void 0 }),
            (globalThis.fetch = e),
            this.logger.info(
              'restored native "globalThis.fetch"!',
              globalThis.fetch.name
            );
        });
    }
  },
  at = ot;
at.symbol = Symbol("fetch");
function _e(e) {
  return Object.assign(new TypeError("Failed to fetch"), { cause: e });
}
function Br(e, t) {
  const r = new Uint8Array(e.byteLength + t.byteLength);
  return r.set(e, 0), r.set(t, e.byteLength), r;
}
var lt = class {
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
  Nr = class extends lt {
    constructor(e, t) {
      super(e),
        (this.lengthComputable =
          (t == null ? void 0 : t.lengthComputable) || !1),
        (this.composed = (t == null ? void 0 : t.composed) || !1),
        (this.loaded = (t == null ? void 0 : t.loaded) || 0),
        (this.total = (t == null ? void 0 : t.total) || 0);
    }
  },
  Qr = typeof ProgressEvent < "u";
function $r(e, t, r) {
  const s = [
      "error",
      "progress",
      "loadstart",
      "loadend",
      "load",
      "timeout",
      "abort",
    ],
    n = Qr ? ProgressEvent : Nr;
  return s.includes(t)
    ? new n(t, {
        lengthComputable: !0,
        loaded: (r == null ? void 0 : r.loaded) || 0,
        total: (r == null ? void 0 : r.total) || 0,
      })
    : new lt(t, { target: e, currentTarget: e });
}
function ut(e, t) {
  if (!(t in e)) return null;
  if (Object.prototype.hasOwnProperty.call(e, t)) return e;
  const s = Reflect.getPrototypeOf(e);
  return s ? ut(s, t) : null;
}
function We(e, t) {
  return new Proxy(e, Gr(t));
}
function Gr(e) {
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
        const p = ut(o, l) || o,
          m = Reflect.getOwnPropertyDescriptor(p, l);
        return typeof (m == null ? void 0 : m.set) < "u"
          ? (m.set.apply(o, [u]), !0)
          : Reflect.defineProperty(p, l, {
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
        p = typeof s < "u" ? s.call(o, [l, u], c) : c();
      return typeof p == "function"
        ? (...m) => {
            const h = p.bind(o, ...m);
            return typeof r < "u" ? r.call(o, [l, m], h) : h();
          }
        : p;
    }),
    i
  );
}
function Kr(e) {
  return [
    "application/xhtml+xml",
    "application/xml",
    "image/svg+xml",
    "text/html",
    "text/xml",
  ].some((r) => e.startsWith(r));
}
function Xr(e) {
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function Vr(e, t) {
  const r = Je(e.status) ? null : t;
  return new Response(r, {
    status: e.status,
    statusText: e.statusText,
    headers: zr(e.getAllResponseHeaders()),
  });
}
function zr(e) {
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
var je = Symbol("isMockedResponse"),
  Jr = ye(),
  Yr = class {
    constructor(e, t) {
      (this.initialRequest = e),
        (this.logger = t),
        (this.method = "GET"),
        (this.url = null),
        (this.events = new Map()),
        (this.requestId = tt()),
        (this.requestHeaders = new Headers()),
        (this.responseBuffer = new Uint8Array()),
        (this.request = We(e, {
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
                    ? ((this.method = "GET"), (this.url = Ue(o)))
                    : ((this.method = o), (this.url = Ue(l))),
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
                  (this.requestBody = typeof o == "string" ? gr(o) : o),
                  this.request.addEventListener("load", () => {
                    if (typeof this.onResponse < "u") {
                      const c = Vr(this.request, this.request.response);
                      this.onResponse.call(this, {
                        response: c,
                        isMockedResponse: je in this.request,
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
                      Jr && this.request.setRequestHeader(xr, this.requestId),
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
        Q(this.request, je, !0),
        Q(this.request, "status", e.status),
        Q(this.request, "statusText", e.statusText),
        Q(this.request, "responseURL", this.url.href),
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
              (this.responseBuffer = Br(this.responseBuffer, i)),
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
      return mr(this.responseBuffer);
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
          const e = Xr(this.responseBufferToText());
          return this.logger.info("resolved response JSON", e), e;
        }
        case "arraybuffer": {
          const e = yr(this.responseBuffer);
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
        (N(
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
        (N(
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
        : Kr(e)
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
      Q(this.request, "readyState", e),
        this.logger.info("set readyState to: %d", e),
        e !== this.request.UNSENT &&
          (this.logger.info('triggerring "readystatechange" event...'),
          this.trigger("readystatechange"));
    }
    trigger(e, t) {
      const r = this.request[`on${e}`],
        s = $r(this.request, e, t);
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
        t = We(e.headers, {
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
        Q(e, "headers", t),
        this.logger.info("converted request to a Fetch API Request!", e),
        e
      );
    }
  };
function Ue(e) {
  return typeof location > "u"
    ? new URL(e)
    : new URL(e.toString(), location.href);
}
function Q(e, t, r) {
  Reflect.defineProperty(e, t, { writable: !0, enumerable: !0, value: r });
}
function Zr({ emitter: e, logger: t }) {
  return new Proxy(globalThis.XMLHttpRequest, {
    construct(s, n, i) {
      t.info("constructed new XMLHttpRequest");
      const o = Reflect.construct(s, n, i),
        l = Object.getOwnPropertyDescriptors(s.prototype);
      for (const c in l) Reflect.defineProperty(o, c, l[c]);
      const u = new Yr(o, t);
      return (
        (u.onRequest = async function ({ request: c, requestId: p }) {
          const { interactiveRequest: m, requestController: h } = nt(c);
          this.logger.info("awaiting mocked response..."),
            e.once("request", ({ requestId: v }) => {
              v === p &&
                h.responsePromise.state === "pending" &&
                h.respondWith(void 0);
            });
          const d = await ve(async () => {
            this.logger.info(
              'emitting the "request" event for %s listener(s)...',
              e.listenerCount("request")
            ),
              await it(e, "request", { request: m, requestId: p }),
              this.logger.info('all "request" listeners settled!');
            const v = await h.responsePromise;
            return this.logger.info("event.respondWith called with:", v), v;
          });
          if (d.error) {
            this.logger.info(
              "request listener threw an exception, aborting request...",
              d.error
            ),
              u.errorWith(d.error);
            return;
          }
          const g = d.data;
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
                u.errorWith(new TypeError("Network error"));
              return;
            }
            return u.respondWith(g);
          }
          this.logger.info(
            "no mocked response received, performing request as-is..."
          );
        }),
        (u.onResponse = async function ({
          response: c,
          isMockedResponse: p,
          request: m,
          requestId: h,
        }) {
          this.logger.info(
            'emitting the "response" event for %s listener(s)...',
            e.listenerCount("response")
          ),
            e.emit("response", {
              response: c,
              isMockedResponse: p,
              request: m,
              requestId: h,
            });
        }),
        u.request
      );
    },
  });
}
var ct = class extends be {
    constructor() {
      super(ct.interceptorSymbol);
    }
    checkEnvironment() {
      return typeof globalThis.XMLHttpRequest < "u";
    }
    setup() {
      const e = this.logger.extend("setup");
      e.info('patching "XMLHttpRequest" module...');
      const t = globalThis.XMLHttpRequest;
      N(!t[G], 'Failed to patch the "XMLHttpRequest" module: already patched.'),
        (globalThis.XMLHttpRequest = Zr({
          emitter: this.emitter,
          logger: this.logger,
        })),
        e.info(
          'native "XMLHttpRequest" module patched!',
          globalThis.XMLHttpRequest.name
        ),
        Object.defineProperty(globalThis.XMLHttpRequest, G, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.XMLHttpRequest, G, {
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
  ht = ct;
ht.interceptorSymbol = Symbol("xhr");
function es(e, t) {
  const r = new ge({ name: "fallback", interceptors: [new at(), new ht()] });
  return (
    r.on("request", async ({ request: s, requestId: n }) => {
      const i = s.clone(),
        o = await Xe(s, n, e.getRequestHandlers(), t, e.emitter, {
          onMockedResponse(l, { handler: u, parsedResult: c }) {
            t.quiet ||
              e.emitter.once("response:mocked", ({ response: p }) => {
                u.log({ request: i, response: p, parsedResult: c });
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
function ts(e) {
  return async function (r) {
    (e.fallbackInterceptor = es(e, r)),
      ze({ message: "Mocking enabled (fallback mode).", quiet: r.quiet });
  };
}
function rs(e) {
  return function () {
    var r, s;
    (r = e.fallbackInterceptor) == null || r.dispose(),
      rt({ quiet: (s = e.startOptions) == null ? void 0 : s.quiet });
  };
}
function ss() {
  try {
    const e = new ReadableStream({ start: (r) => r.close() });
    return new MessageChannel().port1.postMessage(e, [e]), !0;
  } catch {
    return !1;
  }
}
var ns = class extends jt {
  constructor(...t) {
    super(...t);
    k(this, "context");
    k(this, "startHandler", null);
    k(this, "stopHandler", null);
    k(this, "listeners");
    N(
      !ye(),
      w.formatMessage(
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
        readableStreamTransfer: ss(),
      },
    };
    return (
      (this.startHandler = t.supports.serviceWorkerApi ? ts(t) : Dr(t)),
      (this.stopHandler = t.supports.serviceWorkerApi ? rs(t) : Hr(t)),
      t
    );
  }
  async start(t = {}) {
    return (
      t.waitUntilReady === !0 &&
        w.warn(
          'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'
        ),
      (this.context.startOptions = Ve(_r, t)),
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
function is(...e) {
  return new ns(...e);
}
var os = /\.(js|jsx|ts|tsx|mjs|woff|woff2|ttf|otf|eot)$/,
  as = [
    "sb-common-assets",
    "node_modules",
    "node-modules",
    "hot-update.json",
    "__webpack_hmr",
    "sb-vite",
  ],
  ls = (e) => !!(os.test(e) || as.some((r) => e.includes(r))),
  us = (e) =>
    typeof (e == null ? void 0 : e.onUnhandledRequest) == "string"
      ? e
      : {
          ...e,
          onUnhandledRequest: (...t) => {
            const [{ url: r }, s] = t;
            if (!ls(r)) {
              if (!(e != null && e.onUnhandledRequest)) {
                s.warning();
                return;
              }
              typeof (e == null ? void 0 : e.onUnhandledRequest) ==
                "function" && e.onUnhandledRequest(...t);
            }
          },
        },
  $;
function cs(e, t = []) {
  const r = is(...t);
  return r.start(us(e)), ($ = r), r;
}
function hs(e) {
  if (($ == null || $.resetHandlers(), e != null)) {
    if (Array.isArray(e) && e.length > 0) {
      $.use(...e);
      return;
    }
    if ("handlers" in e && e.handlers) {
      const t = Object.values(e.handlers)
        .filter(Boolean)
        .reduce((r, s) => r.concat(s), []);
      t.length > 0 && $.use(...t);
      return;
    }
  }
}
var ds = async (e) => {
  var t;
  return (
    hs(e.parameters.msw),
    typeof window < "u" &&
      "navigator" in window &&
      (t = navigator.serviceWorker) != null &&
      t.controller &&
      (await navigator.serviceWorker.ready),
    {}
  );
};
const fs = {
    global: {
      css: () => `
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
    `,
    },
    inputtext: {
      root: ({ props: e, context: t }) => ({
        className: ae(
          "font-Inter text-sm/[1.125rem] bg-transparent font-bold outline-none"
        ),
      }),
    },
    button: {
      root: ({ props: e, context: t }) => ({
        className: ae(
          "font-Inter w-full rounded-lg bg-912F46 active:bg-[#792035] pb-3 pl-1 pr-1 pt-3 transition-colors ",
          { "bg-F1F1F1  pointer-events-none cursor-default": e.disabled },
          { "text-8D929A pointer-events-none cursor-default": e.loading },
          { "bg-F1F1F1 active:bg-[#ccc]": e.plain }
        ),
      }),
      label: ({ props: e, context: t }) => ({
        className: ae(
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
        className: ae("w-max max-w-sm", {
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
  },
  ps = new Jt();
cs();
const dt = ({ children: e }) =>
    te.jsx(At, {
      children: te.jsx(Ft, {
        store: Mt,
        children: te.jsx(xt, {
          client: ps,
          children: te.jsx(Ct, {
            value: {
              unstyled: !0,
              pt: fs,
              ripple: !0,
              ptOptions: {
                mergeSections: !0,
                mergeProps: !0,
                classNameMergeFunction: It,
              },
            },
            children: e,
          }),
        }),
      }),
    }),
  As = {
    parameters: {
      controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    },
    decorators: [Yt(dt)],
    loaders: [ds],
  };
dt.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Provider",
  props: {
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
  },
};
export { dt as Provider, As as default };
