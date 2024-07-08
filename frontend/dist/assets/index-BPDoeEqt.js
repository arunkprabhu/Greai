function td(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var la = { exports: {} },
  Tl = {},
  ia = { exports: {} },
  _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hr = Symbol.for("react.element"),
  nd = Symbol.for("react.portal"),
  rd = Symbol.for("react.fragment"),
  ld = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  ud = Symbol.for("react.context"),
  sd = Symbol.for("react.forward_ref"),
  ad = Symbol.for("react.suspense"),
  cd = Symbol.for("react.memo"),
  fd = Symbol.for("react.lazy"),
  _u = Symbol.iterator;
function dd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_u && e[_u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ua = Object.assign,
  sa = {};
function An(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sa),
    (this.updater = n || oa);
}
An.prototype.isReactComponent = {};
An.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
An.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function aa() {}
aa.prototype = An.prototype;
function Oo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sa),
    (this.updater = n || oa);
}
var To = (Oo.prototype = new aa());
To.constructor = Oo;
ua(To, An.prototype);
To.isPureReactComponent = !0;
var Iu = Array.isArray,
  ca = Object.prototype.hasOwnProperty,
  jo = { current: null },
  fa = { key: !0, ref: !0, __self: !0, __source: !0 };
function da(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ca.call(t, r) && !fa.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: hr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jo.current,
  };
}
function pd(e, t) {
  return {
    $$typeof: hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _o(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hr;
}
function hd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zu = /\/+/g;
function bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hd("" + e.key)
    : t.toString(36);
}
function Hr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hr:
          case nd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + bl(o, 0) : r),
      Iu(l)
        ? ((n = ""),
          e != null && (n = e.replace(zu, "$&/") + "/"),
          Hr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (_o(l) &&
            (l = pd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(zu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Iu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + bl(i, u);
      o += Hr(i, t, n, s, l);
    }
  else if (((s = dd(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + bl(i, u++)), (o += Hr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function kr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Hr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function md(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Vr = { transition: null },
  vd = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Vr,
    ReactCurrentOwner: jo,
  };
function pa() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = {
  map: kr,
  forEach: function (e, t, n) {
    kr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      kr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      kr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_o(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
_.Component = An;
_.Fragment = rd;
_.Profiler = id;
_.PureComponent = Oo;
_.StrictMode = ld;
_.Suspense = ad;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vd;
_.act = pa;
_.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ua({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = jo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ca.call(t, s) &&
        !fa.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: hr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
_.createContext = function (e) {
  return (
    (e = {
      $$typeof: ud,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: od, _context: e }),
    (e.Consumer = e)
  );
};
_.createElement = da;
_.createFactory = function (e) {
  var t = da.bind(null, e);
  return (t.type = e), t;
};
_.createRef = function () {
  return { current: null };
};
_.forwardRef = function (e) {
  return { $$typeof: sd, render: e };
};
_.isValidElement = _o;
_.lazy = function (e) {
  return { $$typeof: fd, _payload: { _status: -1, _result: e }, _init: md };
};
_.memo = function (e, t) {
  return { $$typeof: cd, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
  var t = Vr.transition;
  Vr.transition = {};
  try {
    e();
  } finally {
    Vr.transition = t;
  }
};
_.unstable_act = pa;
_.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
_.useContext = function (e) {
  return ce.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
_.useId = function () {
  return ce.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
_.useRef = function (e) {
  return ce.current.useRef(e);
};
_.useState = function (e) {
  return ce.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
  return ce.current.useTransition();
};
_.version = "18.3.1";
ia.exports = _;
var Sn = ia.exports;
const se = ra(Sn),
  Du = td({ __proto__: null, default: se }, [Sn]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd = Sn,
  gd = Symbol.for("react.element"),
  wd = Symbol.for("react.fragment"),
  Ad = Object.prototype.hasOwnProperty,
  Sd = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ha(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ad.call(t, r) && !kd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: gd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Sd.current,
  };
}
Tl.Fragment = wd;
Tl.jsx = ha;
Tl.jsxs = ha;
la.exports = Tl;
var w = la.exports,
  Oi = {},
  ma = { exports: {} },
  Ne = {},
  va = { exports: {} },
  ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, O) {
    var T = P.length;
    P.push(O);
    e: for (; 0 < T; ) {
      var W = (T - 1) >>> 1,
        Z = P[W];
      if (0 < l(Z, O)) (P[W] = O), (P[T] = Z), (T = W);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var O = P[0],
      T = P.pop();
    if (T !== O) {
      P[0] = T;
      e: for (var W = 0, Z = P.length, Ar = Z >>> 1; W < Ar; ) {
        var Pt = 2 * (W + 1) - 1,
          $l = P[Pt],
          Rt = Pt + 1,
          Sr = P[Rt];
        if (0 > l($l, T))
          Rt < Z && 0 > l(Sr, $l)
            ? ((P[W] = Sr), (P[Rt] = T), (W = Rt))
            : ((P[W] = $l), (P[Pt] = T), (W = Pt));
        else if (Rt < Z && 0 > l(Sr, T)) (P[W] = Sr), (P[Rt] = T), (W = Rt);
        else break e;
      }
    }
    return O;
  }
  function l(P, O) {
    var T = P.sortIndex - O.sortIndex;
    return T !== 0 ? T : P.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    d = 1,
    m = null,
    h = 3,
    g = !1,
    y = !1,
    A = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(P) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a);
      else if (O.startTime <= P)
        r(a), (O.sortIndex = O.expirationTime), t(s, O);
      else break;
      O = n(a);
    }
  }
  function v(P) {
    if (((A = !1), f(P), !y))
      if (n(s) !== null) (y = !0), Jl(k);
      else {
        var O = n(a);
        O !== null && ql(v, O.startTime - P);
      }
  }
  function k(P, O) {
    (y = !1), A && ((A = !1), p(E), (E = -1)), (g = !0);
    var T = h;
    try {
      for (
        f(O), m = n(s);
        m !== null && (!(m.expirationTime > O) || (P && !ge()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var Z = W(m.expirationTime <= O);
          (O = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            f(O);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Ar = !0;
      else {
        var Pt = n(a);
        Pt !== null && ql(v, Pt.startTime - O), (Ar = !1);
      }
      return Ar;
    } finally {
      (m = null), (h = T), (g = !1);
    }
  }
  var C = !1,
    x = null,
    E = -1,
    U = 5,
    j = -1;
  function ge() {
    return !(e.unstable_now() - j < U);
  }
  function En() {
    if (x !== null) {
      var P = e.unstable_now();
      j = P;
      var O = !0;
      try {
        O = x(!0, P);
      } finally {
        O ? xn() : ((C = !1), (x = null));
      }
    } else C = !1;
  }
  var xn;
  if (typeof c == "function")
    xn = function () {
      c(En);
    };
  else if (typeof MessageChannel < "u") {
    var ju = new MessageChannel(),
      ed = ju.port2;
    (ju.port1.onmessage = En),
      (xn = function () {
        ed.postMessage(null);
      });
  } else
    xn = function () {
      R(En, 0);
    };
  function Jl(P) {
    (x = P), C || ((C = !0), xn());
  }
  function ql(P, O) {
    E = R(function () {
      P(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Jl(k));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (U = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var T = h;
      h = O;
      try {
        return P();
      } finally {
        h = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, O) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var T = h;
      h = P;
      try {
        return O();
      } finally {
        h = T;
      }
    }),
    (e.unstable_scheduleCallback = function (P, O, T) {
      var W = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? W + T : W))
          : (T = W),
        P)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (P = {
          id: d++,
          callback: O,
          priorityLevel: P,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > W
          ? ((P.sortIndex = T),
            t(a, P),
            n(s) === null &&
              P === n(a) &&
              (A ? (p(E), (E = -1)) : (A = !0), ql(v, T - W)))
          : ((P.sortIndex = Z), t(s, P), y || g || ((y = !0), Jl(k))),
        P
      );
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (P) {
      var O = h;
      return function () {
        var T = h;
        h = O;
        try {
          return P.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    });
})(ya);
va.exports = ya;
var Cd = va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed = Sn,
  Ce = Cd;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ga = new Set(),
  Zn = {};
function Qt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) ga.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ti = Object.prototype.hasOwnProperty,
  xd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Lu = {},
  Mu = {};
function Nd(e) {
  return Ti.call(Mu, e)
    ? !0
    : Ti.call(Lu, e)
    ? !1
    : xd.test(e)
    ? (Mu[e] = !0)
    : ((Lu[e] = !0), !1);
}
function Pd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rd(e, t, n, r) {
  if (t === null || typeof t > "u" || Pd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Io = /[\-:]([a-z])/g;
function zo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Io, zo);
    ne[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Io, zo);
    ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Io, zo);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Do(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rd(t, n, l, r) && (n = null),
    r || l === null
      ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Xt = Symbol.for("react.fragment"),
  Lo = Symbol.for("react.strict_mode"),
  ji = Symbol.for("react.profiler"),
  wa = Symbol.for("react.provider"),
  Aa = Symbol.for("react.context"),
  Mo = Symbol.for("react.forward_ref"),
  _i = Symbol.for("react.suspense"),
  Ii = Symbol.for("react.suspense_list"),
  Uo = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  Sa = Symbol.for("react.offscreen"),
  Uu = Symbol.iterator;
function Nn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uu && e[Uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  ei;
function zn(e) {
  if (ei === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ei = (t && t[1]) || "";
    }
  return (
    `
` +
    ei +
    e
  );
}
var ti = !1;
function ni(e, t) {
  if (!e || ti) return "";
  ti = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (ti = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Od(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ni(e.type, !1)), e;
    case 11:
      return (e = ni(e.type.render, !1)), e;
    case 1:
      return (e = ni(e.type, !0)), e;
    default:
      return "";
  }
}
function zi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xt:
      return "Fragment";
    case Kt:
      return "Portal";
    case ji:
      return "Profiler";
    case Lo:
      return "StrictMode";
    case _i:
      return "Suspense";
    case Ii:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Aa:
        return (e.displayName || "Context") + ".Consumer";
      case wa:
        return (e._context.displayName || "Context") + ".Provider";
      case Mo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Uo:
        return (
          (t = e.displayName || null), t !== null ? t : zi(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return zi(e(t));
        } catch {}
    }
  return null;
}
function Td(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zi(t);
    case 8:
      return t === Lo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function At(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ka(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jd(e) {
  var t = ka(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Er(e) {
  e._valueTracker || (e._valueTracker = jd(e));
}
function Ca(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ka(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function br(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Di(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = At(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ea(e, t) {
  (t = t.checked), t != null && Do(e, "checked", t, !1);
}
function Li(e, t) {
  Ea(e, t);
  var n = At(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Mi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Mi(e, t.type, At(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Mi(e, t, n) {
  (t !== "number" || br(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + At(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: At(n) };
}
function xa(e, t) {
  var n = At(t.value),
    r = At(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Na(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Na(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xr,
  Pa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xr = xr || document.createElement("div"),
          xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _d = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function (e) {
  _d.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
  });
});
function Ra(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Oa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ra(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Id = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Fi(e, t) {
  if (t) {
    if (Id[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Hi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vi = null;
function Bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qi = null,
  on = null,
  un = null;
function Qu(e) {
  if ((e = yr(e))) {
    if (typeof Qi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), Qi(e.stateNode, e.type, t));
  }
}
function Ta(e) {
  on ? (un ? un.push(e) : (un = [e])) : (on = e);
}
function ja() {
  if (on) {
    var e = on,
      t = un;
    if (((un = on = null), Qu(e), t)) for (e = 0; e < t.length; e++) Qu(t[e]);
  }
}
function _a(e, t) {
  return e(t);
}
function Ia() {}
var ri = !1;
function za(e, t, n) {
  if (ri) return e(t, n);
  ri = !0;
  try {
    return _a(e, t, n);
  } finally {
    (ri = !1), (on !== null || un !== null) && (Ia(), ja());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Wi = !1;
if (be)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        Wi = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    Wi = !1;
  }
function zd(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Fn = !1,
  el = null,
  tl = !1,
  Yi = null,
  Dd = {
    onError: function (e) {
      (Fn = !0), (el = e);
    },
  };
function Ld(e, t, n, r, l, i, o, u, s) {
  (Fn = !1), (el = null), zd.apply(Dd, arguments);
}
function Md(e, t, n, r, l, i, o, u, s) {
  if ((Ld.apply(this, arguments), Fn)) {
    if (Fn) {
      var a = el;
      (Fn = !1), (el = null);
    } else throw Error(S(198));
    tl || ((tl = !0), (Yi = a));
  }
}
function Wt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Da(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wu(e) {
  if (Wt(e) !== e) throw Error(S(188));
}
function Ud(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Wu(l), e;
        if (i === r) return Wu(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function La(e) {
  return (e = Ud(e)), e !== null ? Ma(e) : null;
}
function Ma(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ma(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ua = Ce.unstable_scheduleCallback,
  Yu = Ce.unstable_cancelCallback,
  Bd = Ce.unstable_shouldYield,
  Fd = Ce.unstable_requestPaint,
  Y = Ce.unstable_now,
  Hd = Ce.unstable_getCurrentPriorityLevel,
  Fo = Ce.unstable_ImmediatePriority,
  Ba = Ce.unstable_UserBlockingPriority,
  nl = Ce.unstable_NormalPriority,
  Vd = Ce.unstable_LowPriority,
  Fa = Ce.unstable_IdlePriority,
  jl = null,
  Ke = null;
function Qd(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(jl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Kd,
  Wd = Math.log,
  Yd = Math.LN2;
function Kd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wd(e) / Yd) | 0)) | 0;
}
var Nr = 64,
  Pr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Ln(u)) : ((i &= o), i !== 0 && (r = Ln(i)));
  } else (o = n & ~l), o !== 0 ? (r = Ln(o)) : i !== 0 && (r = Ln(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Xd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Gd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Be(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Xd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ki(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ha() {
  var e = Nr;
  return (Nr <<= 1), !(Nr & 4194240) && (Nr = 64), e;
}
function li(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function Zd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Be(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ho(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var z = 0;
function Va(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qa,
  Vo,
  Wa,
  Ya,
  Ka,
  Xi = !1,
  Rr = [],
  dt = null,
  pt = null,
  ht = null,
  $n = new Map(),
  bn = new Map(),
  st = [],
  Jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dt = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      $n.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bn.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = yr(t)), t !== null && Vo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function qd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (dt = Rn(dt, e, t, n, r, l)), !0;
    case "dragenter":
      return (pt = Rn(pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = Rn(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return $n.set(i, Rn($n.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), bn.set(i, Rn(bn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Xa(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Da(n)), t !== null)) {
          (e.blockedOn = t),
            Ka(e.priority, function () {
              Wa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vi = r), n.target.dispatchEvent(r), (Vi = null);
    } else return (t = yr(n)), t !== null && Vo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xu(e, t, n) {
  Qr(e) && n.delete(t);
}
function $d() {
  (Xi = !1),
    dt !== null && Qr(dt) && (dt = null),
    pt !== null && Qr(pt) && (pt = null),
    ht !== null && Qr(ht) && (ht = null),
    $n.forEach(Xu),
    bn.forEach(Xu);
}
function On(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xi ||
      ((Xi = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, $d)));
}
function er(e) {
  function t(l) {
    return On(l, e);
  }
  if (0 < Rr.length) {
    On(Rr[0], e);
    for (var n = 1; n < Rr.length; n++) {
      var r = Rr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    dt !== null && On(dt, e),
      pt !== null && On(pt, e),
      ht !== null && On(ht, e),
      $n.forEach(t),
      bn.forEach(t),
      n = 0;
    n < st.length;
    n++
  )
    (r = st[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); )
    Xa(n), n.blockedOn === null && st.shift();
}
var sn = lt.ReactCurrentBatchConfig,
  ll = !0;
function bd(e, t, n, r) {
  var l = z,
    i = sn.transition;
  sn.transition = null;
  try {
    (z = 1), Qo(e, t, n, r);
  } finally {
    (z = l), (sn.transition = i);
  }
}
function ep(e, t, n, r) {
  var l = z,
    i = sn.transition;
  sn.transition = null;
  try {
    (z = 4), Qo(e, t, n, r);
  } finally {
    (z = l), (sn.transition = i);
  }
}
function Qo(e, t, n, r) {
  if (ll) {
    var l = Gi(e, t, n, r);
    if (l === null) hi(e, t, r, il, n), Ku(e, r);
    else if (qd(l, e, t, n, r)) r.stopPropagation();
    else if ((Ku(e, r), t & 4 && -1 < Jd.indexOf(e))) {
      for (; l !== null; ) {
        var i = yr(l);
        if (
          (i !== null && Qa(i),
          (i = Gi(e, t, n, r)),
          i === null && hi(e, t, r, il, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else hi(e, t, r, null, n);
  }
}
var il = null;
function Gi(e, t, n, r) {
  if (((il = null), (e = Bo(r)), (e = _t(e)), e !== null))
    if (((t = Wt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Da(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (il = e), null;
}
function Ga(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Hd()) {
        case Fo:
          return 1;
        case Ba:
          return 4;
        case nl:
        case Vd:
          return 16;
        case Fa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Wo = null,
  Wr = null;
function Za() {
  if (Wr) return Wr;
  var e,
    t = Wo,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Wr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Yr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Or() {
  return !0;
}
function Gu() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Or
        : Gu),
      (this.isPropagationStopped = Gu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Or));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Or));
      },
      persist: function () {},
      isPersistent: Or,
    }),
    t
  );
}
var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yo = Pe(kn),
  vr = V({}, kn, { view: 0, detail: 0 }),
  tp = Pe(vr),
  ii,
  oi,
  Tn,
  _l = V({}, vr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ko,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Tn &&
            (Tn && e.type === "mousemove"
              ? ((ii = e.screenX - Tn.screenX), (oi = e.screenY - Tn.screenY))
              : (oi = ii = 0),
            (Tn = e)),
          ii);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : oi;
    },
  }),
  Zu = Pe(_l),
  np = V({}, _l, { dataTransfer: 0 }),
  rp = Pe(np),
  lp = V({}, vr, { relatedTarget: 0 }),
  ui = Pe(lp),
  ip = V({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  op = Pe(ip),
  up = V({}, kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sp = Pe(up),
  ap = V({}, kn, { data: 0 }),
  Ju = Pe(ap),
  cp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  fp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dp[e]) ? !!t[e] : !1;
}
function Ko() {
  return pp;
}
var hp = V({}, vr, {
    key: function (e) {
      if (e.key) {
        var t = cp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ko,
    charCode: function (e) {
      return e.type === "keypress" ? Yr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mp = Pe(hp),
  vp = V({}, _l, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = Pe(vp),
  yp = V({}, vr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ko,
  }),
  gp = Pe(yp),
  wp = V({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ap = Pe(wp),
  Sp = V({}, _l, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  kp = Pe(Sp),
  Cp = [9, 13, 27, 32],
  Xo = be && "CompositionEvent" in window,
  Hn = null;
be && "documentMode" in document && (Hn = document.documentMode);
var Ep = be && "TextEvent" in window && !Hn,
  Ja = be && (!Xo || (Hn && 8 < Hn && 11 >= Hn)),
  $u = " ",
  bu = !1;
function qa(e, t) {
  switch (e) {
    case "keyup":
      return Cp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $a(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function xp(e, t) {
  switch (e) {
    case "compositionend":
      return $a(t);
    case "keypress":
      return t.which !== 32 ? null : ((bu = !0), $u);
    case "textInput":
      return (e = t.data), e === $u && bu ? null : e;
    default:
      return null;
  }
}
function Np(e, t) {
  if (Gt)
    return e === "compositionend" || (!Xo && qa(e, t))
      ? ((e = Za()), (Wr = Wo = ct = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ja && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function es(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pp[e.type] : t === "textarea";
}
function ba(e, t, n, r) {
  Ta(r),
    (t = ol(t, "onChange")),
    0 < t.length &&
      ((n = new Yo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vn = null,
  tr = null;
function Rp(e) {
  cc(e, 0);
}
function Il(e) {
  var t = qt(e);
  if (Ca(t)) return e;
}
function Op(e, t) {
  if (e === "change") return t;
}
var ec = !1;
if (be) {
  var si;
  if (be) {
    var ai = "oninput" in document;
    if (!ai) {
      var ts = document.createElement("div");
      ts.setAttribute("oninput", "return;"),
        (ai = typeof ts.oninput == "function");
    }
    si = ai;
  } else si = !1;
  ec = si && (!document.documentMode || 9 < document.documentMode);
}
function ns() {
  Vn && (Vn.detachEvent("onpropertychange", tc), (tr = Vn = null));
}
function tc(e) {
  if (e.propertyName === "value" && Il(tr)) {
    var t = [];
    ba(t, tr, e, Bo(e)), za(Rp, t);
  }
}
function Tp(e, t, n) {
  e === "focusin"
    ? (ns(), (Vn = t), (tr = n), Vn.attachEvent("onpropertychange", tc))
    : e === "focusout" && ns();
}
function jp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Il(tr);
}
function _p(e, t) {
  if (e === "click") return Il(t);
}
function Ip(e, t) {
  if (e === "input" || e === "change") return Il(t);
}
function zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : zp;
function nr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ti.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function rs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ls(e, t) {
  var n = rs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rs(n);
  }
}
function nc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rc() {
  for (var e = window, t = br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = br(e.document);
  }
  return t;
}
function Go(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dp(e) {
  var t = rc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Go(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ls(n, i));
        var o = ls(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Lp = be && "documentMode" in document && 11 >= document.documentMode,
  Zt = null,
  Zi = null,
  Qn = null,
  Ji = !1;
function is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ji ||
    Zt == null ||
    Zt !== br(r) ||
    ((r = Zt),
    "selectionStart" in r && Go(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qn && nr(Qn, r)) ||
      ((Qn = r),
      (r = ol(Zi, "onSelect")),
      0 < r.length &&
        ((t = new Yo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zt))));
}
function Tr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: Tr("Animation", "AnimationEnd"),
    animationiteration: Tr("Animation", "AnimationIteration"),
    animationstart: Tr("Animation", "AnimationStart"),
    transitionend: Tr("Transition", "TransitionEnd"),
  },
  ci = {},
  lc = {};
be &&
  ((lc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function zl(e) {
  if (ci[e]) return ci[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in lc) return (ci[e] = t[n]);
  return e;
}
var ic = zl("animationend"),
  oc = zl("animationiteration"),
  uc = zl("animationstart"),
  sc = zl("transitionend"),
  ac = new Map(),
  os =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Et(e, t) {
  ac.set(e, t), Qt(t, [e]);
}
for (var fi = 0; fi < os.length; fi++) {
  var di = os[fi],
    Mp = di.toLowerCase(),
    Up = di[0].toUpperCase() + di.slice(1);
  Et(Mp, "on" + Up);
}
Et(ic, "onAnimationEnd");
Et(oc, "onAnimationIteration");
Et(uc, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(sc, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function us(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Md(r, t, void 0, e), (e.currentTarget = null);
}
function cc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          us(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          us(l, u, a), (i = s);
        }
    }
  }
  if (tl) throw ((e = Yi), (tl = !1), (Yi = null), e);
}
function L(e, t) {
  var n = t[to];
  n === void 0 && (n = t[to] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fc(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), fc(n, e, r, t);
}
var jr = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
  if (!e[jr]) {
    (e[jr] = !0),
      ga.forEach(function (n) {
        n !== "selectionchange" && (Bp.has(n) || pi(n, !1, e), pi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jr] || ((t[jr] = !0), pi("selectionchange", !1, t));
  }
}
function fc(e, t, n, r) {
  switch (Ga(t)) {
    case 1:
      var l = bd;
      break;
    case 4:
      l = ep;
      break;
    default:
      l = Qo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Wi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function hi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = _t(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  za(function () {
    var a = i,
      d = Bo(n),
      m = [];
    e: {
      var h = ac.get(e);
      if (h !== void 0) {
        var g = Yo,
          y = e;
        switch (e) {
          case "keypress":
            if (Yr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = mp;
            break;
          case "focusin":
            (y = "focus"), (g = ui);
            break;
          case "focusout":
            (y = "blur"), (g = ui);
            break;
          case "beforeblur":
          case "afterblur":
            g = ui;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = rp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = gp;
            break;
          case ic:
          case oc:
          case uc:
            g = op;
            break;
          case sc:
            g = Ap;
            break;
          case "scroll":
            g = tp;
            break;
          case "wheel":
            g = kp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = sp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = qu;
        }
        var A = (t & 4) !== 0,
          R = !A && e === "scroll",
          p = A ? (h !== null ? h + "Capture" : null) : h;
        A = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              p !== null && ((v = qn(c, p)), v != null && A.push(lr(c, v, f)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < A.length &&
          ((h = new g(h, y, null, n, d)), m.push({ event: h, listeners: A }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Vi &&
            (y = n.relatedTarget || n.fromElement) &&
            (_t(y) || y[et]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? _t(y) : null),
              y !== null &&
                ((R = Wt(y)), y !== R || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((A = Zu),
            (v = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((A = qu),
              (v = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (R = g == null ? h : qt(g)),
            (f = y == null ? h : qt(y)),
            (h = new A(v, c + "leave", g, n, d)),
            (h.target = R),
            (h.relatedTarget = f),
            (v = null),
            _t(d) === a &&
              ((A = new A(p, c + "enter", y, n, d)),
              (A.target = f),
              (A.relatedTarget = R),
              (v = A)),
            (R = v),
            g && y)
          )
            t: {
              for (A = g, p = y, c = 0, f = A; f; f = Yt(f)) c++;
              for (f = 0, v = p; v; v = Yt(v)) f++;
              for (; 0 < c - f; ) (A = Yt(A)), c--;
              for (; 0 < f - c; ) (p = Yt(p)), f--;
              for (; c--; ) {
                if (A === p || (p !== null && A === p.alternate)) break t;
                (A = Yt(A)), (p = Yt(p));
              }
              A = null;
            }
          else A = null;
          g !== null && ss(m, h, g, A, !1),
            y !== null && R !== null && ss(m, R, y, A, !0);
        }
      }
      e: {
        if (
          ((h = a ? qt(a) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var k = Op;
        else if (es(h))
          if (ec) k = Ip;
          else {
            k = jp;
            var C = Tp;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = _p);
        if (k && (k = k(e, a))) {
          ba(m, k, n, d);
          break e;
        }
        C && C(e, h, a),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            Mi(h, "number", h.value);
      }
      switch (((C = a ? qt(a) : window), e)) {
        case "focusin":
          (es(C) || C.contentEditable === "true") &&
            ((Zt = C), (Zi = a), (Qn = null));
          break;
        case "focusout":
          Qn = Zi = Zt = null;
          break;
        case "mousedown":
          Ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ji = !1), is(m, n, d);
          break;
        case "selectionchange":
          if (Lp) break;
        case "keydown":
        case "keyup":
          is(m, n, d);
      }
      var x;
      if (Xo)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Gt
          ? qa(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Ja &&
          n.locale !== "ko" &&
          (Gt || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Gt && (x = Za())
            : ((ct = d),
              (Wo = "value" in ct ? ct.value : ct.textContent),
              (Gt = !0))),
        (C = ol(a, E)),
        0 < C.length &&
          ((E = new Ju(E, e, null, n, d)),
          m.push({ event: E, listeners: C }),
          x ? (E.data = x) : ((x = $a(n)), x !== null && (E.data = x)))),
        (x = Ep ? xp(e, n) : Np(e, n)) &&
          ((a = ol(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new Ju("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: a }),
            (d.data = x)));
    }
    cc(m, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = qn(e, n)),
      i != null && r.unshift(lr(e, i, l)),
      (i = qn(e, t)),
      i != null && r.push(lr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ss(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = qn(n, i)), s != null && o.unshift(lr(n, s, u)))
        : l || ((s = qn(n, i)), s != null && o.push(lr(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Fp = /\r\n?/g,
  Hp = /\u0000|\uFFFD/g;
function as(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Fp,
      `
`
    )
    .replace(Hp, "");
}
function _r(e, t, n) {
  if (((t = as(t)), as(e) !== t && n)) throw Error(S(425));
}
function ul() {}
var qi = null,
  $i = null;
function bi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var eo = typeof setTimeout == "function" ? setTimeout : void 0,
  Vp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cs = typeof Promise == "function" ? Promise : void 0,
  Qp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cs < "u"
      ? function (e) {
          return cs.resolve(null).then(e).catch(Wp);
        }
      : eo;
function Wp(e) {
  setTimeout(function () {
    throw e;
  });
}
function mi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), er(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  er(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cn = Math.random().toString(36).slice(2),
  Ye = "__reactFiber$" + Cn,
  ir = "__reactProps$" + Cn,
  et = "__reactContainer$" + Cn,
  to = "__reactEvents$" + Cn,
  Yp = "__reactListeners$" + Cn,
  Kp = "__reactHandles$" + Cn;
function _t(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Ye])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fs(e); e !== null; ) {
          if ((n = e[Ye])) return n;
          e = fs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yr(e) {
  return (
    (e = e[Ye] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Dl(e) {
  return e[ir] || null;
}
var no = [],
  $t = -1;
function xt(e) {
  return { current: e };
}
function M(e) {
  0 > $t || ((e.current = no[$t]), (no[$t] = null), $t--);
}
function D(e, t) {
  $t++, (no[$t] = e.current), (e.current = t);
}
var St = {},
  oe = xt(St),
  he = xt(!1),
  Mt = St;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function sl() {
  M(he), M(oe);
}
function ds(e, t, n) {
  if (oe.current !== St) throw Error(S(168));
  D(oe, t), D(he, n);
}
function dc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Td(e) || "Unknown", l));
  return V({}, n, r);
}
function al(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Mt = oe.current),
    D(oe, e),
    D(he, he.current),
    !0
  );
}
function ps(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = dc(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      M(he),
      M(oe),
      D(oe, e))
    : M(he),
    D(he, n);
}
var Ze = null,
  Ll = !1,
  vi = !1;
function pc(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function Xp(e) {
  (Ll = !0), pc(e);
}
function Nt() {
  if (!vi && Ze !== null) {
    vi = !0;
    var e = 0,
      t = z;
    try {
      var n = Ze;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (Ll = !1);
    } catch (l) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), Ua(Fo, Nt), l);
    } finally {
      (z = t), (vi = !1);
    }
  }
  return null;
}
var bt = [],
  en = 0,
  cl = null,
  fl = 0,
  Re = [],
  Oe = 0,
  Ut = null,
  Je = 1,
  qe = "";
function Ot(e, t) {
  (bt[en++] = fl), (bt[en++] = cl), (cl = e), (fl = t);
}
function hc(e, t, n) {
  (Re[Oe++] = Je), (Re[Oe++] = qe), (Re[Oe++] = Ut), (Ut = e);
  var r = Je;
  e = qe;
  var l = 32 - Be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Be(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Je = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (qe = i + e);
  } else (Je = (1 << i) | (n << l) | r), (qe = e);
}
function Zo(e) {
  e.return !== null && (Ot(e, 1), hc(e, 1, 0));
}
function Jo(e) {
  for (; e === cl; )
    (cl = bt[--en]), (bt[en] = null), (fl = bt[--en]), (bt[en] = null);
  for (; e === Ut; )
    (Ut = Re[--Oe]),
      (Re[Oe] = null),
      (qe = Re[--Oe]),
      (Re[Oe] = null),
      (Je = Re[--Oe]),
      (Re[Oe] = null);
}
var ke = null,
  Ae = null,
  B = !1,
  Me = null;
function mc(e, t) {
  var n = Te(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Ae = mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ut !== null ? { id: Je, overflow: qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lo(e) {
  if (B) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!hs(e, t)) {
        if (ro(e)) throw Error(S(418));
        t = mt(n.nextSibling);
        var r = ke;
        t && hs(e, t)
          ? mc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e));
      }
    } else {
      if (ro(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e);
    }
  }
}
function ms(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Ir(e) {
  if (e !== ke) return !1;
  if (!B) return ms(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !bi(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (ro(e)) throw (vc(), Error(S(418)));
    for (; t; ) mc(e, t), (t = mt(t.nextSibling));
  }
  if ((ms(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = ke ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function vc() {
  for (var e = Ae; e; ) e = mt(e.nextSibling);
}
function pn() {
  (Ae = ke = null), (B = !1);
}
function qo(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var Gp = lt.ReactCurrentBatchConfig;
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function vs(e) {
  var t = e._init;
  return t(e._payload);
}
function yc(e) {
  function t(p, c) {
    if (e) {
      var f = p.deletions;
      f === null ? ((p.deletions = [c]), (p.flags |= 16)) : f.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function l(p, c) {
    return (p = wt(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, f) {
    return (
      (p.index = f),
      e
        ? ((f = p.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((p.flags |= 2), c) : f)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, c, f, v) {
    return c === null || c.tag !== 6
      ? ((c = Ci(f, p.mode, v)), (c.return = p), c)
      : ((c = l(c, f)), (c.return = p), c);
  }
  function s(p, c, f, v) {
    var k = f.type;
    return k === Xt
      ? d(p, c, f.props.children, v, f.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === ot &&
            vs(k) === c.type))
      ? ((v = l(c, f.props)), (v.ref = jn(p, c, f)), (v.return = p), v)
      : ((v = $r(f.type, f.key, f.props, null, p.mode, v)),
        (v.ref = jn(p, c, f)),
        (v.return = p),
        v);
  }
  function a(p, c, f, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = Ei(f, p.mode, v)), (c.return = p), c)
      : ((c = l(c, f.children || [])), (c.return = p), c);
  }
  function d(p, c, f, v, k) {
    return c === null || c.tag !== 7
      ? ((c = Lt(f, p.mode, v, k)), (c.return = p), c)
      : ((c = l(c, f)), (c.return = p), c);
  }
  function m(p, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ci("" + c, p.mode, f)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Cr:
          return (
            (f = $r(c.type, c.key, c.props, null, p.mode, f)),
            (f.ref = jn(p, null, c)),
            (f.return = p),
            f
          );
        case Kt:
          return (c = Ei(c, p.mode, f)), (c.return = p), c;
        case ot:
          var v = c._init;
          return m(p, v(c._payload), f);
      }
      if (Dn(c) || Nn(c))
        return (c = Lt(c, p.mode, f, null)), (c.return = p), c;
      zr(p, c);
    }
    return null;
  }
  function h(p, c, f, v) {
    var k = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return k !== null ? null : u(p, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Cr:
          return f.key === k ? s(p, c, f, v) : null;
        case Kt:
          return f.key === k ? a(p, c, f, v) : null;
        case ot:
          return (k = f._init), h(p, c, k(f._payload), v);
      }
      if (Dn(f) || Nn(f)) return k !== null ? null : d(p, c, f, v, null);
      zr(p, f);
    }
    return null;
  }
  function g(p, c, f, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (p = p.get(f) || null), u(c, p, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Cr:
          return (p = p.get(v.key === null ? f : v.key) || null), s(c, p, v, k);
        case Kt:
          return (p = p.get(v.key === null ? f : v.key) || null), a(c, p, v, k);
        case ot:
          var C = v._init;
          return g(p, c, f, C(v._payload), k);
      }
      if (Dn(v) || Nn(v)) return (p = p.get(f) || null), d(c, p, v, k, null);
      zr(c, v);
    }
    return null;
  }
  function y(p, c, f, v) {
    for (
      var k = null, C = null, x = c, E = (c = 0), U = null;
      x !== null && E < f.length;
      E++
    ) {
      x.index > E ? ((U = x), (x = null)) : (U = x.sibling);
      var j = h(p, x, f[E], v);
      if (j === null) {
        x === null && (x = U);
        break;
      }
      e && x && j.alternate === null && t(p, x),
        (c = i(j, c, E)),
        C === null ? (k = j) : (C.sibling = j),
        (C = j),
        (x = U);
    }
    if (E === f.length) return n(p, x), B && Ot(p, E), k;
    if (x === null) {
      for (; E < f.length; E++)
        (x = m(p, f[E], v)),
          x !== null &&
            ((c = i(x, c, E)), C === null ? (k = x) : (C.sibling = x), (C = x));
      return B && Ot(p, E), k;
    }
    for (x = r(p, x); E < f.length; E++)
      (U = g(x, p, E, f[E], v)),
        U !== null &&
          (e && U.alternate !== null && x.delete(U.key === null ? E : U.key),
          (c = i(U, c, E)),
          C === null ? (k = U) : (C.sibling = U),
          (C = U));
    return (
      e &&
        x.forEach(function (ge) {
          return t(p, ge);
        }),
      B && Ot(p, E),
      k
    );
  }
  function A(p, c, f, v) {
    var k = Nn(f);
    if (typeof k != "function") throw Error(S(150));
    if (((f = k.call(f)), f == null)) throw Error(S(151));
    for (
      var C = (k = null), x = c, E = (c = 0), U = null, j = f.next();
      x !== null && !j.done;
      E++, j = f.next()
    ) {
      x.index > E ? ((U = x), (x = null)) : (U = x.sibling);
      var ge = h(p, x, j.value, v);
      if (ge === null) {
        x === null && (x = U);
        break;
      }
      e && x && ge.alternate === null && t(p, x),
        (c = i(ge, c, E)),
        C === null ? (k = ge) : (C.sibling = ge),
        (C = ge),
        (x = U);
    }
    if (j.done) return n(p, x), B && Ot(p, E), k;
    if (x === null) {
      for (; !j.done; E++, j = f.next())
        (j = m(p, j.value, v)),
          j !== null &&
            ((c = i(j, c, E)), C === null ? (k = j) : (C.sibling = j), (C = j));
      return B && Ot(p, E), k;
    }
    for (x = r(p, x); !j.done; E++, j = f.next())
      (j = g(x, p, E, j.value, v)),
        j !== null &&
          (e && j.alternate !== null && x.delete(j.key === null ? E : j.key),
          (c = i(j, c, E)),
          C === null ? (k = j) : (C.sibling = j),
          (C = j));
    return (
      e &&
        x.forEach(function (En) {
          return t(p, En);
        }),
      B && Ot(p, E),
      k
    );
  }
  function R(p, c, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Xt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Cr:
          e: {
            for (var k = f.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (((k = f.type), k === Xt)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (c = l(C, f.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === ot &&
                    vs(k) === C.type)
                ) {
                  n(p, C.sibling),
                    (c = l(C, f.props)),
                    (c.ref = jn(p, C, f)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            f.type === Xt
              ? ((c = Lt(f.props.children, p.mode, v, f.key)),
                (c.return = p),
                (p = c))
              : ((v = $r(f.type, f.key, f.props, null, p.mode, v)),
                (v.ref = jn(p, c, f)),
                (v.return = p),
                (p = v));
          }
          return o(p);
        case Kt:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(p, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = Ei(f, p.mode, v)), (c.return = p), (p = c);
          }
          return o(p);
        case ot:
          return (C = f._init), R(p, c, C(f._payload), v);
      }
      if (Dn(f)) return y(p, c, f, v);
      if (Nn(f)) return A(p, c, f, v);
      zr(p, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = l(c, f)), (c.return = p), (p = c))
          : (n(p, c), (c = Ci(f, p.mode, v)), (c.return = p), (p = c)),
        o(p))
      : n(p, c);
  }
  return R;
}
var hn = yc(!0),
  gc = yc(!1),
  dl = xt(null),
  pl = null,
  tn = null,
  $o = null;
function bo() {
  $o = tn = pl = null;
}
function eu(e) {
  var t = dl.current;
  M(dl), (e._currentValue = t);
}
function io(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function an(e, t) {
  (pl = e),
    ($o = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if ($o !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (pl === null) throw Error(S(308));
      (tn = e), (pl.dependencies = { lanes: 0, firstContext: e });
    } else tn = tn.next = e;
  return t;
}
var It = null;
function tu(e) {
  It === null ? (It = [e]) : It.push(e);
}
function wc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), tu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function nu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ac(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $e(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), tu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Kr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ho(e, n);
  }
}
function ys(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hl(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== o &&
        (u === null ? (d.firstBaseUpdate = a) : (u.next = a),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (d = a = s = null), (u = i);
    do {
      var h = u.lane,
        g = u.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            A = u;
          switch (((h = t), (g = n), A.tag)) {
            case 1:
              if (((y = A.payload), typeof y == "function")) {
                m = y.call(g, m, h);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = A.payload),
                (h = typeof y == "function" ? y.call(g, m, h) : y),
                h == null)
              )
                break e;
              m = V({}, m, h);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((a = d = g), (s = m)) : (d = d.next = g),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ft |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function gs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var gr = {},
  Xe = xt(gr),
  or = xt(gr),
  ur = xt(gr);
function zt(e) {
  if (e === gr) throw Error(S(174));
  return e;
}
function ru(e, t) {
  switch ((D(ur, t), D(or, e), D(Xe, gr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bi(t, e));
  }
  M(Xe), D(Xe, t);
}
function mn() {
  M(Xe), M(or), M(ur);
}
function Sc(e) {
  zt(ur.current);
  var t = zt(Xe.current),
    n = Bi(t, e.type);
  t !== n && (D(or, e), D(Xe, n));
}
function lu(e) {
  or.current === e && (M(Xe), M(or));
}
var F = xt(0);
function ml(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var yi = [];
function iu() {
  for (var e = 0; e < yi.length; e++)
    yi[e]._workInProgressVersionPrimary = null;
  yi.length = 0;
}
var Xr = lt.ReactCurrentDispatcher,
  gi = lt.ReactCurrentBatchConfig,
  Bt = 0,
  H = null,
  X = null,
  J = null,
  vl = !1,
  Wn = !1,
  sr = 0,
  Zp = 0;
function re() {
  throw Error(S(321));
}
function ou(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function uu(e, t, n, r, l, i) {
  if (
    ((Bt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xr.current = e === null || e.memoizedState === null ? bp : eh),
    (e = n(r, l)),
    Wn)
  ) {
    i = 0;
    do {
      if (((Wn = !1), (sr = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (J = X = null),
        (t.updateQueue = null),
        (Xr.current = th),
        (e = n(r, l));
    } while (Wn);
  }
  if (
    ((Xr.current = yl),
    (t = X !== null && X.next !== null),
    (Bt = 0),
    (J = X = H = null),
    (vl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function su() {
  var e = sr !== 0;
  return (sr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (H.memoizedState = J = e) : (J = J.next = e), J;
}
function Ie() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(S(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var d = a.lane;
      if ((Bt & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (H.lanes |= d),
          (Ft |= d);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      He(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), (Ft |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ai(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    He(i, t.memoizedState) || (pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function kc() {}
function Cc(e, t) {
  var n = H,
    r = Ie(),
    l = t(),
    i = !He(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    au(Nc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cr(9, xc.bind(null, n, r, l, t), void 0, null),
      $ === null)
    )
      throw Error(S(349));
    Bt & 30 || Ec(n, t, l);
  }
  return l;
}
function Ec(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pc(t) && Rc(e);
}
function Nc(e, t, n) {
  return n(function () {
    Pc(t) && Rc(e);
  });
}
function Pc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Rc(e) {
  var t = tt(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function ws(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $p.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Oc() {
  return Ie().memoizedState;
}
function Gr(e, t, n, r) {
  var l = We();
  (H.flags |= e),
    (l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ml(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && ou(r, o.deps))) {
      l.memoizedState = cr(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = cr(1 | t, n, i, r));
}
function As(e, t) {
  return Gr(8390656, 8, e, t);
}
function au(e, t) {
  return Ml(2048, 8, e, t);
}
function Tc(e, t) {
  return Ml(4, 2, e, t);
}
function jc(e, t) {
  return Ml(4, 4, e, t);
}
function _c(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ic(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ml(4, 4, _c.bind(null, t, e), n)
  );
}
function cu() {}
function zc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Dc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lc(e, t, n) {
  return Bt & 21
    ? (He(n, t) || ((n = Ha()), (H.lanes |= n), (Ft |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Jp(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = gi.transition;
  gi.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (gi.transition = r);
  }
}
function Mc() {
  return Ie().memoizedState;
}
function qp(e, t, n) {
  var r = gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Uc(e))
  )
    Bc(t, n);
  else if (((n = wc(e, t, n, r)), n !== null)) {
    var l = ae();
    Fe(n, e, r, l), Fc(n, t, r);
  }
}
function $p(e, t, n) {
  var r = gt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uc(e)) Bc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), He(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), tu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = wc(e, t, l, r)),
      n !== null && ((l = ae()), Fe(n, e, r, l), Fc(n, t, r));
  }
}
function Uc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Bc(e, t) {
  Wn = vl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ho(e, n);
  }
}
var yl = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  bp = {
    readContext: _e,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: As,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gr(4194308, 4, _c.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = qp.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ws,
    useDebugValue: cu,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = ws(!1),
        t = e[0];
      return (e = Jp.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = We();
      if (B) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), $ === null)) throw Error(S(349));
        Bt & 30 || Ec(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        As(Nc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        cr(9, xc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = $.identifierPrefix;
      if (B) {
        var n = qe,
          r = Je;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  eh = {
    readContext: _e,
    useCallback: zc,
    useContext: _e,
    useEffect: au,
    useImperativeHandle: Ic,
    useInsertionEffect: Tc,
    useLayoutEffect: jc,
    useMemo: Dc,
    useReducer: wi,
    useRef: Oc,
    useState: function () {
      return wi(ar);
    },
    useDebugValue: cu,
    useDeferredValue: function (e) {
      var t = Ie();
      return Lc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = wi(ar)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: kc,
    useSyncExternalStore: Cc,
    useId: Mc,
    unstable_isNewReconciler: !1,
  },
  th = {
    readContext: _e,
    useCallback: zc,
    useContext: _e,
    useEffect: au,
    useImperativeHandle: Ic,
    useInsertionEffect: Tc,
    useLayoutEffect: jc,
    useMemo: Dc,
    useReducer: Ai,
    useRef: Oc,
    useState: function () {
      return Ai(ar);
    },
    useDebugValue: cu,
    useDeferredValue: function (e) {
      var t = Ie();
      return X === null ? (t.memoizedState = e) : Lc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Ai(ar)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: kc,
    useSyncExternalStore: Cc,
    useId: Mc,
    unstable_isNewReconciler: !1,
  };
function De(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function oo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = gt(e),
      i = $e(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, l)),
      t !== null && (Fe(t, e, l, r), Kr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = gt(e),
      i = $e(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, l)),
      t !== null && (Fe(t, e, l, r), Kr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = gt(e),
      l = $e(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = vt(e, l, r)),
      t !== null && (Fe(t, e, r, n), Kr(t, e, r));
  },
};
function Ss(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !nr(n, r) || !nr(l, i)
      : !0
  );
}
function Hc(e, t, n) {
  var r = !1,
    l = St,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = me(t) ? Mt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? dn(e, l) : St)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ks(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function uo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), nu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = me(t) ? Mt : oe.current), (l.context = dn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (oo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ul.enqueueReplaceState(l, l.state, null),
      hl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Od(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function so(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nh = typeof WeakMap == "function" ? WeakMap : Map;
function Vc(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wl || ((wl = !0), (wo = r)), so(e, t);
    }),
    n
  );
}
function Qc(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        so(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        so(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = vh.bind(null, e, t, n)), t.then(e, e));
}
function Es(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $e(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rh = lt.ReactCurrentOwner,
  pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? gc(t, null, n, r) : hn(t, e.child, n, r);
}
function Ns(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    an(t, l),
    (r = uu(e, t, n, r, i, l)),
    (n = su()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (B && n && Zo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Ps(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !gu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Wc(e, t, i, r, l))
      : ((e = $r(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : nr), n(o, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (nr(i, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return ao(e, t, n, r, l);
}
function Yc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(rn, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(rn, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(rn, we),
        (we |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(rn, we),
      (we |= r);
  return ue(e, t, l, n), t.child;
}
function Kc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ao(e, t, n, r, l) {
  var i = me(n) ? Mt : oe.current;
  return (
    (i = dn(t, i)),
    an(t, l),
    (n = uu(e, t, n, r, i, l)),
    (r = su()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (B && r && Zo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Rs(e, t, n, r, l) {
  if (me(n)) {
    var i = !0;
    al(t);
  } else i = !1;
  if ((an(t, l), t.stateNode === null))
    Zr(e, t), Hc(t, n, r), uo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = _e(a))
      : ((a = me(n) ? Mt : oe.current), (a = dn(t, a)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && ks(t, o, r, a)),
      (ut = !1);
    var h = t.memoizedState;
    (o.state = h),
      hl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || he.current || ut
        ? (typeof d == "function" && (oo(t, n, d, r), (s = t.memoizedState)),
          (u = ut || Ss(t, n, u, r, h, s, a))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ac(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : De(t.type, u)),
      (o.props = a),
      (m = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = me(n) ? Mt : oe.current), (s = dn(t, s)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && ks(t, o, r, s)),
      (ut = !1),
      (h = t.memoizedState),
      (o.state = h),
      hl(t, r, o, l);
    var y = t.memoizedState;
    u !== m || h !== y || he.current || ut
      ? (typeof g == "function" && (oo(t, n, g, r), (y = t.memoizedState)),
        (a = ut || Ss(t, n, a, r, h, y, s) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return co(e, t, n, r, i, l);
}
function co(e, t, n, r, l, i) {
  Kc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ps(t, n, !1), nt(e, t, i);
  (r = t.stateNode), (rh.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = hn(t, e.child, null, i)), (t.child = hn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && ps(t, n, !0),
    t.child
  );
}
function Xc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ds(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ds(e, t.context, !1),
    ru(e, t.containerInfo);
}
function Os(e, t, n, r, l) {
  return pn(), qo(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function po(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gc(e, t, n) {
  var r = t.pendingProps,
    l = F.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(F, l & 1),
    e === null)
  )
    return (
      lo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Hl(o, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = po(n)),
              (t.memoizedState = fo),
              e)
            : fu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return lh(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = wt(u, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? po(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = fo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = wt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fu(e, t) {
  return (
    (t = Hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dr(e, t, n, r) {
  return (
    r !== null && qo(r),
    hn(t, e.child, null, n),
    (e = fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Si(Error(S(422)))), Dr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Hl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Lt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && hn(t, e.child, null, o),
        (t.child.memoizedState = po(o)),
        (t.memoizedState = fo),
        i);
  if (!(t.mode & 1)) return Dr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(S(419))), (r = Si(i, r, void 0)), Dr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), pe || u)) {
    if (((r = $), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), tt(e, l), Fe(r, e, l, -1));
    }
    return yu(), (r = Si(Error(S(421)))), Dr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ae = mt(l.nextSibling)),
      (ke = t),
      (B = !0),
      (Me = null),
      e !== null &&
        ((Re[Oe++] = Je),
        (Re[Oe++] = qe),
        (Re[Oe++] = Ut),
        (Je = e.id),
        (qe = e.overflow),
        (Ut = t)),
      (t = fu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ts(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), io(e.return, t, n);
}
function ki(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Zc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = F.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ts(e, n, t);
        else if (e.tag === 19) Ts(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(F, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ml(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ki(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ml(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ki(t, !0, n, null, i);
        break;
      case "together":
        ki(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ft |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ih(e, t, n) {
  switch (t.tag) {
    case 3:
      Xc(t), pn();
      break;
    case 5:
      Sc(t);
      break;
    case 1:
      me(t.type) && al(t);
      break;
    case 4:
      ru(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(dl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(F, F.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Gc(e, t, n)
          : (D(F, F.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      D(F, F.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(F, F.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yc(e, t, n);
  }
  return nt(e, t, n);
}
var Jc, ho, qc, $c;
Jc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ho = function () {};
qc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), zt(Xe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Di(e, l)), (r = Di(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ui(e, l)), (r = Ui(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ul);
    }
    Fi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Zn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Zn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && L("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
$c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function oh(e, t, n) {
  var r = t.pendingProps;
  switch ((Jo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return me(t.type) && sl(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        M(he),
        M(oe),
        iu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ir(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (ko(Me), (Me = null)))),
        ho(e, t),
        le(t),
        null
      );
    case 5:
      lu(t);
      var l = zt(ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (((e = zt(Xe.current)), Ir(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ye] = t), (r[ir] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              L("cancel", r), L("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              L("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Mn.length; l++) L(Mn[l], r);
              break;
            case "source":
              L("error", r);
              break;
            case "img":
            case "image":
            case "link":
              L("error", r), L("load", r);
              break;
            case "details":
              L("toggle", r);
              break;
            case "input":
              Bu(r, i), L("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                L("invalid", r);
              break;
            case "textarea":
              Hu(r, i), L("invalid", r);
          }
          Fi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Zn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  L("scroll", r);
            }
          switch (n) {
            case "input":
              Er(r), Fu(r, i, !0);
              break;
            case "textarea":
              Er(r), Vu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ul);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Na(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ye] = t),
            (e[ir] = r),
            Jc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Hi(n, r)), n)) {
              case "dialog":
                L("cancel", e), L("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                L("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mn.length; l++) L(Mn[l], e);
                l = r;
                break;
              case "source":
                L("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                L("error", e), L("load", e), (l = r);
                break;
              case "details":
                L("toggle", e), (l = r);
                break;
              case "input":
                Bu(e, r), (l = Di(e, r)), L("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  L("invalid", e);
                break;
              case "textarea":
                Hu(e, r), (l = Ui(e, r)), L("invalid", e);
                break;
              default:
                l = r;
            }
            Fi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Oa(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Pa(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Jn(e, s)
                    : typeof s == "number" && Jn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Zn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && L("scroll", e)
                      : s != null && Do(e, i, s, o));
              }
            switch (n) {
              case "input":
                Er(e), Fu(e, r, !1);
                break;
              case "textarea":
                Er(e), Vu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ln(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ul);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) $c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = zt(ur.current)), zt(Xe.current), Ir(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ye] = t),
            (i = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ye] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (M(F),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && Ae !== null && t.mode & 1 && !(t.flags & 128))
          vc(), pn(), (t.flags |= 98560), (i = !1);
        else if (((i = Ir(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[Ye] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Me !== null && (ko(Me), (Me = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || F.current & 1 ? G === 0 && (G = 3) : yu())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        mn(), ho(e, t), e === null && rr(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return eu(t.type._context), le(t), null;
    case 17:
      return me(t.type) && sl(), le(t), null;
    case 19:
      if ((M(F), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) _n(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ml(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    _n(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(F, (F.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > yn &&
            ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ml(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !B)
            )
              return le(t), null;
          } else
            2 * Y() - i.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = F.current),
          D(F, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        vu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function uh(e, t) {
  switch ((Jo(t), t.tag)) {
    case 1:
      return (
        me(t.type) && sl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        M(he),
        M(oe),
        iu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return lu(t), null;
    case 13:
      if ((M(F), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return M(F), null;
    case 4:
      return mn(), null;
    case 10:
      return eu(t.type._context), null;
    case 22:
    case 23:
      return vu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  ie = !1,
  sh = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function mo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var js = !1;
function ah(e, t) {
  if (((qi = ll), (e = rc()), Go(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            d = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (h = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === l && (u = o),
                h === i && ++d === r && (s = o),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($i = { focusedElem: e, selectionRange: n }, ll = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var A = y.memoizedProps,
                    R = y.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? A : De(t.type, A),
                      R
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (v) {
          Q(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (y = js), (js = !1), y;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && mo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function vo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ye], delete t[ir], delete t[to], delete t[Yp], delete t[Kp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ef(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _s(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ef(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ul));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), (e = e.sibling);
}
function go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (go(e, t, n), e = e.sibling; e !== null; ) go(e, t, n), (e = e.sibling);
}
var ee = null,
  Le = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) tf(e, t, n), (n = n.sibling);
}
function tf(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(jl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || nn(n, t);
    case 6:
      var r = ee,
        l = Le;
      (ee = null),
        it(e, t, n),
        (ee = r),
        (Le = l),
        ee !== null &&
          (Le
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Le
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? mi(e.parentNode, n)
              : e.nodeType === 1 && mi(e, n),
            er(e))
          : mi(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Le),
        (ee = n.stateNode.containerInfo),
        (Le = !0),
        it(e, t, n),
        (ee = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && mo(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), it(e, t, n), (ie = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Is(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sh()),
      t.forEach(function (r) {
        var l = gh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Le = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        tf(i, o, l), (ee = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) nf(t, e), (t = t.sibling);
}
function nf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Qe(e), r & 4)) {
        try {
          Yn(3, e, e.return), Bl(3, e);
        } catch (A) {
          Q(e, e.return, A);
        }
        try {
          Yn(5, e, e.return);
        } catch (A) {
          Q(e, e.return, A);
        }
      }
      break;
    case 1:
      ze(t, e), Qe(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Qe(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (A) {
          Q(e, e.return, A);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Ea(l, i),
              Hi(u, o);
            var a = Hi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var d = s[o],
                m = s[o + 1];
              d === "style"
                ? Oa(l, m)
                : d === "dangerouslySetInnerHTML"
                ? Pa(l, m)
                : d === "children"
                ? Jn(l, m)
                : Do(l, d, m, a);
            }
            switch (u) {
              case "input":
                Li(l, i);
                break;
              case "textarea":
                xa(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? ln(l, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ln(l, !!i.multiple, i.defaultValue, !0)
                      : ln(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[ir] = i;
          } catch (A) {
            Q(e, e.return, A);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (A) {
          Q(e, e.return, A);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          er(t.containerInfo);
        } catch (A) {
          Q(e, e.return, A);
        }
      break;
    case 4:
      ze(t, e), Qe(e);
      break;
    case 13:
      ze(t, e),
        Qe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (hu = Y())),
        r & 4 && Is(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || d), ze(t, e), (ie = a)) : ze(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (N = e, d = e.child; d !== null; ) {
            for (m = N = d; N !== null; ) {
              switch (((h = N), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yn(4, h, h.return);
                  break;
                case 1:
                  nn(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (A) {
                      Q(r, n, A);
                    }
                  }
                  break;
                case 5:
                  nn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ds(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (N = g)) : Ds(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ra("display", o)));
              } catch (A) {
                Q(e, e.return, A);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (A) {
                Q(e, e.return, A);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Qe(e), r & 4 && Is(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ef(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ""), (r.flags &= -33));
          var i = _s(e);
          go(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = _s(e);
          yo(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ch(e, t, n) {
  (N = e), rf(e);
}
function rf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Lr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Lr;
        var a = ie;
        if (((Lr = o), (ie = s) && !a))
          for (N = l; N !== null; )
            (o = N),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ls(l)
                : s !== null
                ? ((s.return = o), (N = s))
                : Ls(l);
        for (; i !== null; ) (N = i), rf(i), (i = i.sibling);
        (N = l), (Lr = u), (ie = a);
      }
      zs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (N = i)) : zs(e);
  }
}
function zs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && gs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gs(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && er(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ie || (t.flags & 512 && vo(t));
      } catch (h) {
        Q(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Ds(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Ls(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var i = t.return;
          try {
            vo(t);
          } catch (s) {
            Q(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            vo(t);
          } catch (s) {
            Q(t, o, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var fh = Math.ceil,
  gl = lt.ReactCurrentDispatcher,
  du = lt.ReactCurrentOwner,
  je = lt.ReactCurrentBatchConfig,
  I = 0,
  $ = null,
  K = null,
  te = 0,
  we = 0,
  rn = xt(0),
  G = 0,
  fr = null,
  Ft = 0,
  Fl = 0,
  pu = 0,
  Kn = null,
  de = null,
  hu = 0,
  yn = 1 / 0,
  Ge = null,
  wl = !1,
  wo = null,
  yt = null,
  Mr = !1,
  ft = null,
  Al = 0,
  Xn = 0,
  Ao = null,
  Jr = -1,
  qr = 0;
function ae() {
  return I & 6 ? Y() : Jr !== -1 ? Jr : (Jr = Y());
}
function gt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Gp.transition !== null
      ? (qr === 0 && (qr = Ha()), qr)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ga(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Xn) throw ((Xn = 0), (Ao = null), Error(S(185)));
  mr(e, n, r),
    (!(I & 2) || e !== $) &&
      (e === $ && (!(I & 2) && (Fl |= n), G === 4 && at(e, te)),
      ve(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((yn = Y() + 500), Ll && Nt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Gd(e, t);
  var r = rl(e, e === $ ? te : 0);
  if (r === 0)
    n !== null && Yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yu(n), t === 1))
      e.tag === 0 ? Xp(Ms.bind(null, e)) : pc(Ms.bind(null, e)),
        Qp(function () {
          !(I & 6) && Nt();
        }),
        (n = null);
    else {
      switch (Va(r)) {
        case 1:
          n = Fo;
          break;
        case 4:
          n = Ba;
          break;
        case 16:
          n = nl;
          break;
        case 536870912:
          n = Fa;
          break;
        default:
          n = nl;
      }
      n = df(n, lf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function lf(e, t) {
  if (((Jr = -1), (qr = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = rl(e, e === $ ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = uf();
    ($ !== e || te !== t) && ((Ge = null), (yn = Y() + 500), Dt(e, t));
    do
      try {
        hh();
        break;
      } catch (u) {
        of(e, u);
      }
    while (!0);
    bo(),
      (gl.current = i),
      (I = l),
      K !== null ? (t = 0) : (($ = null), (te = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ki(e)), l !== 0 && ((r = l), (t = So(e, l)))), t === 1)
    )
      throw ((n = fr), Dt(e, 0), at(e, r), ve(e, Y()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !dh(l) &&
          ((t = Sl(e, r)),
          t === 2 && ((i = Ki(e)), i !== 0 && ((r = i), (t = So(e, i)))),
          t === 1))
      )
        throw ((n = fr), Dt(e, 0), at(e, r), ve(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Tt(e, de, Ge);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = hu + 500 - Y()), 10 < t))
          ) {
            if (rl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = eo(Tt.bind(null, e, de, Ge), t);
            break;
          }
          Tt(e, de, Ge);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Be(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = eo(Tt.bind(null, e, de, Ge), r);
            break;
          }
          Tt(e, de, Ge);
          break;
        case 5:
          Tt(e, de, Ge);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ve(e, Y()), e.callbackNode === n ? lf.bind(null, e) : null;
}
function So(e, t) {
  var n = Kn;
  return (
    e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    (e = Sl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && ko(t)),
    e
  );
}
function ko(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function dh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!He(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function at(e, t) {
  for (
    t &= ~pu,
      t &= ~Fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ms(e) {
  if (I & 6) throw Error(S(327));
  cn();
  var t = rl(e, 0);
  if (!(t & 1)) return ve(e, Y()), null;
  var n = Sl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ki(e);
    r !== 0 && ((t = r), (n = So(e, r)));
  }
  if (n === 1) throw ((n = fr), Dt(e, 0), at(e, t), ve(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tt(e, de, Ge),
    ve(e, Y()),
    null
  );
}
function mu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((yn = Y() + 500), Ll && Nt());
  }
}
function Ht(e) {
  ft !== null && ft.tag === 0 && !(I & 6) && cn();
  var t = I;
  I |= 1;
  var n = je.transition,
    r = z;
  try {
    if (((je.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (je.transition = n), (I = t), !(I & 6) && Nt();
  }
}
function vu() {
  (we = rn.current), M(rn);
}
function Dt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vp(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((Jo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && sl();
          break;
        case 3:
          mn(), M(he), M(oe), iu();
          break;
        case 5:
          lu(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          M(F);
          break;
        case 19:
          M(F);
          break;
        case 10:
          eu(r.type._context);
          break;
        case 22:
        case 23:
          vu();
      }
      n = n.return;
    }
  if (
    (($ = e),
    (K = e = wt(e.current, null)),
    (te = we = t),
    (G = 0),
    (fr = null),
    (pu = Fl = Ft = 0),
    (de = Kn = null),
    It !== null)
  ) {
    for (t = 0; t < It.length; t++)
      if (((n = It[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    It = null;
  }
  return e;
}
function of(e, t) {
  do {
    var n = K;
    try {
      if ((bo(), (Xr.current = yl), vl)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        vl = !1;
      }
      if (
        ((Bt = 0),
        (J = X = H = null),
        (Wn = !1),
        (sr = 0),
        (du.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (fr = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            d = u,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Es(o);
          if (g !== null) {
            (g.flags &= -257),
              xs(g, o, u, i, t),
              g.mode & 1 && Cs(i, a, t),
              (t = g),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var A = new Set();
              A.add(s), (t.updateQueue = A);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Cs(i, a, t), yu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (B && u.mode & 1) {
          var R = Es(o);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              xs(R, o, u, i, t),
              qo(vn(s, u));
            break e;
          }
        }
        (i = s = vn(s, u)),
          G !== 4 && (G = 2),
          Kn === null ? (Kn = [i]) : Kn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Vc(i, s, t);
              ys(i, p);
              break e;
            case 1:
              u = s;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (yt === null || !yt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Qc(i, u, t);
                ys(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      af(n);
    } catch (k) {
      (t = k), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uf() {
  var e = gl.current;
  return (gl.current = yl), e === null ? yl : e;
}
function yu() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    $ === null || (!(Ft & 268435455) && !(Fl & 268435455)) || at($, te);
}
function Sl(e, t) {
  var n = I;
  I |= 2;
  var r = uf();
  ($ !== e || te !== t) && ((Ge = null), Dt(e, t));
  do
    try {
      ph();
      break;
    } catch (l) {
      of(e, l);
    }
  while (!0);
  if ((bo(), (I = n), (gl.current = r), K !== null)) throw Error(S(261));
  return ($ = null), (te = 0), G;
}
function ph() {
  for (; K !== null; ) sf(K);
}
function hh() {
  for (; K !== null && !Bd(); ) sf(K);
}
function sf(e) {
  var t = ff(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? af(e) : (K = t),
    (du.current = null);
}
function af(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uh(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = oh(n, t, we)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Tt(e, t, n) {
  var r = z,
    l = je.transition;
  try {
    (je.transition = null), (z = 1), mh(e, t, n, r);
  } finally {
    (je.transition = l), (z = r);
  }
  return null;
}
function mh(e, t, n, r) {
  do cn();
  while (ft !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Zd(e, i),
    e === $ && ((K = $ = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mr ||
      ((Mr = !0),
      df(nl, function () {
        return cn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = je.transition), (je.transition = null);
    var o = z;
    z = 1;
    var u = I;
    (I |= 4),
      (du.current = null),
      ah(e, n),
      nf(n, e),
      Dp($i),
      (ll = !!qi),
      ($i = qi = null),
      (e.current = n),
      ch(n),
      Fd(),
      (I = u),
      (z = o),
      (je.transition = i);
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (ft = e), (Al = l)),
    (i = e.pendingLanes),
    i === 0 && (yt = null),
    Qd(n.stateNode),
    ve(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (wl) throw ((wl = !1), (e = wo), (wo = null), e);
  return (
    Al & 1 && e.tag !== 0 && cn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ao ? Xn++ : ((Xn = 0), (Ao = e))) : (Xn = 0),
    Nt(),
    null
  );
}
function cn() {
  if (ft !== null) {
    var e = Va(Al),
      t = je.transition,
      n = z;
    try {
      if (((je.transition = null), (z = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (Al = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var i = N,
            o = i.child;
          if (N.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var d = N;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, d, i);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (N = m);
                  else
                    for (; N !== null; ) {
                      d = N;
                      var h = d.sibling,
                        g = d.return;
                      if ((bc(d), d === a)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (N = h);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var A = y.child;
                if (A !== null) {
                  y.child = null;
                  do {
                    var R = A.sibling;
                    (A.sibling = null), (A = R);
                  } while (A !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (N = o);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (N = p);
                break e;
              }
              N = i.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          o = N;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (N = f);
          else
            e: for (o = c; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bl(9, u);
                  }
                } catch (k) {
                  Q(u, u.return, k);
                }
              if (u === o) {
                N = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (N = v);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((I = l), Nt(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(jl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (je.transition = t);
    }
  }
  return !1;
}
function Us(e, t, n) {
  (t = vn(n, t)),
    (t = Vc(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = ae()),
    e !== null && (mr(e, 1, t), ve(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Us(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Us(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = vn(n, e)),
            (e = Qc(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = ae()),
            t !== null && (mr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    $ === e &&
      (te & n) === n &&
      (G === 4 || (G === 3 && (te & 130023424) === te && 500 > Y() - hu)
        ? Dt(e, 0)
        : (pu |= n)),
    ve(e, t);
}
function cf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
      : (t = 1));
  var n = ae();
  (e = tt(e, t)), e !== null && (mr(e, t, n), ve(e, n));
}
function yh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cf(e, n);
}
function gh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), cf(e, n);
}
var ff;
ff = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), ih(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), B && t.flags & 1048576 && hc(t, fl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zr(e, t), (e = t.pendingProps);
      var l = dn(t, oe.current);
      an(t, n), (l = uu(null, t, r, e, l, n));
      var i = su();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), al(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            nu(t),
            (l.updater = Ul),
            (t.stateNode = l),
            (l._reactInternals = t),
            uo(t, r, e, n),
            (t = co(null, t, r, !0, i, n)))
          : ((t.tag = 0), B && i && Zo(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ah(r)),
          (e = De(r, e)),
          l)
        ) {
          case 0:
            t = ao(null, t, r, e, n);
            break e;
          case 1:
            t = Rs(null, t, r, e, n);
            break e;
          case 11:
            t = Ns(null, t, r, e, n);
            break e;
          case 14:
            t = Ps(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        ao(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Rs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Xc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ac(e, t),
          hl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = vn(Error(S(423)), t)), (t = Os(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = vn(Error(S(424)), t)), (t = Os(e, t, r, n, l));
            break e;
          } else
            for (
              Ae = mt(t.stateNode.containerInfo.firstChild),
                ke = t,
                B = !0,
                Me = null,
                n = gc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sc(t),
        e === null && lo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        bi(r, l) ? (o = null) : i !== null && bi(r, i) && (t.flags |= 32),
        Kc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && lo(t), null;
    case 13:
      return Gc(e, t, n);
    case 4:
      return (
        ru(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ns(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(dl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (He(i.value, o)) {
            if (i.children === l.children && !he.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = $e(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      io(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  io(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = De(r, t.pendingProps)),
        (l = De(r.type, l)),
        Ps(e, t, r, l, n)
      );
    case 15:
      return Wc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Zr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), al(t)) : (e = !1),
        an(t, n),
        Hc(t, r, l),
        uo(t, r, l, n),
        co(null, t, r, !0, e, n)
      );
    case 19:
      return Zc(e, t, n);
    case 22:
      return Yc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function df(e, t) {
  return Ua(e, t);
}
function wh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Te(e, t, n, r) {
  return new wh(e, t, n, r);
}
function gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ah(e) {
  if (typeof e == "function") return gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mo)) return 11;
    if (e === Uo) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $r(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) gu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Xt:
        return Lt(n.children, l, i, t);
      case Lo:
        (o = 8), (l |= 8);
        break;
      case ji:
        return (
          (e = Te(12, n, t, l | 2)), (e.elementType = ji), (e.lanes = i), e
        );
      case _i:
        return (e = Te(13, n, t, l)), (e.elementType = _i), (e.lanes = i), e;
      case Ii:
        return (e = Te(19, n, t, l)), (e.elementType = Ii), (e.lanes = i), e;
      case Sa:
        return Hl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wa:
              o = 10;
              break e;
            case Aa:
              o = 9;
              break e;
            case Mo:
              o = 11;
              break e;
            case Uo:
              o = 14;
              break e;
            case ot:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Lt(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function Hl(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = Sa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ci(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function Ei(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = li(0)),
    (this.expirationTimes = li(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = li(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function wu(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Sh(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Te(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nu(i),
    e
  );
}
function kh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pf(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return dc(e, n, t);
  }
  return t;
}
function hf(e, t, n, r, l, i, o, u, s) {
  return (
    (e = wu(n, r, !0, e, l, i, o, u, s)),
    (e.context = pf(null)),
    (n = e.current),
    (r = ae()),
    (l = gt(n)),
    (i = $e(r, l)),
    (i.callback = t ?? null),
    vt(n, i, l),
    (e.current.lanes = l),
    mr(e, l, r),
    ve(e, r),
    e
  );
}
function Vl(e, t, n, r) {
  var l = t.current,
    i = ae(),
    o = gt(l);
  return (
    (n = pf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $e(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(l, t, o)),
    e !== null && (Fe(e, l, o, i), Kr(e, l, o)),
    o
  );
}
function kl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Au(e, t) {
  Bs(e, t), (e = e.alternate) && Bs(e, t);
}
function Ch() {
  return null;
}
var mf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Su(e) {
  this._internalRoot = e;
}
Ql.prototype.render = Su.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Vl(e, t, null, null);
};
Ql.prototype.unmount = Su.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ht(function () {
      Vl(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Ql(e) {
  this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ya();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
    st.splice(n, 0, e), n === 0 && Xa(e);
  }
};
function ku(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fs() {}
function Eh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = kl(o);
        i.call(a);
      };
    }
    var o = hf(t, r, e, 0, null, !1, !1, "", Fs);
    return (
      (e._reactRootContainer = o),
      (e[et] = o.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      Ht(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = kl(s);
      u.call(a);
    };
  }
  var s = wu(e, 0, !1, null, null, !1, !1, "", Fs);
  return (
    (e._reactRootContainer = s),
    (e[et] = s.current),
    rr(e.nodeType === 8 ? e.parentNode : e),
    Ht(function () {
      Vl(t, s, n, r);
    }),
    s
  );
}
function Yl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = kl(o);
        u.call(s);
      };
    }
    Vl(t, o, e, l);
  } else o = Eh(n, t, e, l, r);
  return kl(o);
}
Qa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (Ho(t, n | 1), ve(t, Y()), !(I & 6) && ((yn = Y() + 500), Nt()));
      }
      break;
    case 13:
      Ht(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = ae();
          Fe(r, e, 1, l);
        }
      }),
        Au(e, 1);
  }
};
Vo = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = ae();
      Fe(t, e, 134217728, n);
    }
    Au(e, 134217728);
  }
};
Wa = function (e) {
  if (e.tag === 13) {
    var t = gt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = ae();
      Fe(n, e, t, r);
    }
    Au(e, t);
  }
};
Ya = function () {
  return z;
};
Ka = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Qi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Li(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Dl(r);
            if (!l) throw Error(S(90));
            Ca(r), Li(r, l);
          }
        }
      }
      break;
    case "textarea":
      xa(e, n);
      break;
    case "select":
      (t = n.value), t != null && ln(e, !!n.multiple, t, !1);
  }
};
_a = mu;
Ia = Ht;
var xh = { usingClientEntryPoint: !1, Events: [yr, qt, Dl, Ta, ja, mu] },
  In = {
    findFiberByHostInstance: _t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Nh = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = La(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || Ch,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber)
    try {
      (jl = Ur.inject(Nh)), (Ke = Ur);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xh;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ku(t)) throw Error(S(200));
  return kh(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!ku(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = mf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = wu(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    rr(e.nodeType === 8 ? e.parentNode : e),
    new Su(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = La(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Ht(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Wl(t)) throw Error(S(200));
  return Yl(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!ku(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = mf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = hf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[et] = t.current),
    rr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ql(t);
};
Ne.render = function (e, t, n) {
  if (!Wl(t)) throw Error(S(200));
  return Yl(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Wl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Ht(function () {
        Yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = mu;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Yl(e, t, n, !1, r);
};
Ne.version = "18.3.1-next-f1338f8080-20240426";
function vf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vf);
    } catch (e) {
      console.error(e);
    }
}
vf(), (ma.exports = Ne);
var Ph = ma.exports,
  Hs = Ph;
(Oi.createRoot = Hs.createRoot), (Oi.hydrateRoot = Hs.hydrateRoot);
var yf = { exports: {} },
  Rh = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Oh = Rh,
  Th = Oh;
function gf() {}
function wf() {}
wf.resetWarningCache = gf;
var jh = function () {
  function e(r, l, i, o, u, s) {
    if (s !== Th) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: wf,
    resetWarningCache: gf,
  };
  return (n.PropTypes = n), n;
};
yf.exports = jh();
var _h = yf.exports;
const q = ra(_h),
  Ih =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA3CAYAAABKB8k/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANNSURBVHgB7VrtcdswDAV0/R9pA2WCOhu4G1gTNJkg7gRxJnAyQdwJJE9Qb1BvUG0guQOYBUQq+og/SJEq80PvTmf5TFF4BAE+EkZwjbSYA+ITAszpWy4QMzgenyGJShgBCC6RFktEXJ/4ZS+E+DYGiQBcIS1mtfEoxCsZfEvXA31lo2cBBmsYAW48kBYxGf+L7mK6MrEIk9ZvM/VbiICb4+LmARzC3gNpEbaMz9WoN0ginj4VIQHiHraHJ3AIewKIb9AYf3qeJ9GuJkbTa+WShB0BMoTm4ILuSmV8frZtEm2ozQ++dU1iGNj4rBR80TRa6D4WpMWq9dwSvIAMro1gg8AQHRLbv9/BAuZZSGac38BZhdLlMYkGjSKReKFF7pHvaWrdcbDDAJgR6KbLPaXLO7AAkdgQCfZAHUPGJIyCmIxPock4CViCvHdPHztgb3LfNEBgCH0C2wOvpDNo0mUODqAGgkdeeteQhN4U4ozDqU++kI3fgUvIxZDjKgbDAbruARZoynjkPO7aeAYtfpXRZDw0ngh1Hr3sgbaOEeKZ5uwKxkQ/SWgo2OBKZxy0PBLZ6MYzaNooT1QKVr3/Ik4TuCbQxkSXxDzIDm+Xmp8moCPQxsRHBXt2L/GRgIlAGxNdBbvUE3+ccRqN40lo9dCy6TIJ2ozbCLQxcV3BcsbJyj/K+Bf4hDinYLG3CloLtDHRU7CVIuAg5oCNwZFAGxMs3Smgf/I9DXoVDwFIOcuMXr1lHAMcAeoYmPPsaafR/5vrh6K7JoXuDrY8YSLgGxMB35gI+MYXcAV5mhBrtCyHHmKdgj0BNpw2QKqkpIeszNXKby0c7Qh0N+El6ZHD1WcQb0CePKxFWoAtCVsPsC6JQQrBO92tJ0tjwYVAugSAFQG7IEb8yh9Cnhdpayl1wsHtwyHHiW1YESBpe6tuzYWgznTTwLQO+MZEwDcmAr4xEfCNiYBvBK0lXasm1YFUlraITRr3amcle2AvbaEzRxNhJU+J686MNyhC1oflEaFmQa9CEDy+v5MEZP9wlzvOdfpB1X5w8a/1lwXgYoqGIETZtiJbFT+SaIPvndE+qZbHmiiV8cP1vKyC1tX/Qe/FfoegFws8Wrmz2pnJe3v76X9IAOk4mXWNngAAAABJRU5ErkJggg==",
  zh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA1CAYAAAA+qNlvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASqSURBVHgBxVrtedowED756f/CBHEmKJmgdIKECUInKJkgZIKQCQITmEwQOkHpBHUmwBmgqHc6O1jSydhgu+/z5AMJ2a9P9y0rqItkF+PvG1DqK/4dlWZS0HqFfzcwGabQE1TlbLIbg4puFegb/DSAaqRa6yckv4AeIBM3hNU9To6hIbRSc7j+/AAdwyf+8n6vtJ7DGUDJ33Ut+cj6VE06w7kVkvqOP0N9M8CP+hJ/edJVuFu4a8dU6ywcJJ7spnjDZ/8LarnX+xVKcBO8irBW0wNNhnPoCCq/8QBv/Av/i8uTEUr372S4rHEdUOvsFWybyGhHkHwGHaBQFfIacXkCVeCuLmmC9lWGVGUGHYEljtJyPEiKOnwJDdGn1I3ElR1QSHorOAF9Sj1C/R6BH1w2cArYgDflIbSdH9ABSOKS20rhRJjoaWOQpwutgojH3uh5OUcqjMXQMiJoHyNhbAsto13iqBImatpIu/IqmUQAmgITMymICZ6mFRDxVBhvlmckuxmSfvXWaf0TGgSxJggRH0FdvLw/IulHbxxJa47IneCT0b9k94YO96I0fpw4ZX9KJZgajN0pHHvaT4adhXuCMU7tB43rGmsXUqFBOU7XpAmFV3HdVVxpoOw9bp1Ryku+7Xsq3QriS2FuCmF4qoSkrypz9pbBxNnPbsoTNdXlv+EjAKHEXpy5kSmaZUiRsDMPIqEcOZfgBCMhCjI4l9k4372FHhGVyGRCHj7O014PgR2aQk9wcxXfI6golE8vQdqhjqv7AjZxVAHlSB27WFNR13mH3DwkhiiS1atleNnhHmDujlXoOu2QZaj44LMKo24NkUDGkzqwro+lC5iulQPTY+mg6rHuIY5yn+UP2NlemgcZLw2Okt1C+7XlliJpMBdnW+C2iIouQO/fgHdvW6cCC3drk93cVREkt8CG5p14Ib81UZCfGCJMdATcqv5S1VDV2D3DB3moeoDKNjOSIanH1kVZihvvy5y/vIJfX6aa+o483sTjpPlDi2VfZelGDU53LNdfnwBKxzyUn9/Hed+mqZtkQQTiSHXNiZJVfrsh7PLC5CVkpthA4847wHfCOrK1RDJ0BccQaIjm27gOrUGJzDSnAXFp0W+84QZdLq3bNjL0m8FVM+JMZJSTLyPLvUx6ZO24uHndah9ti+5ltwUdx1CPOBOYCbVl0EWehYChl0866vdVeIGrGrHRwbbBtjIBPxd6LHawUUMo9zKpMzymSh/aBrrBQFQ2jqG+qhTgbSQdtNxbV6dtkrFSz715C+7g8uxtpEMvPPyClrGXUm003NN6h7yNfnBC8tH6/bnlnFw0/NObnujDJfIa83ejSu1lh1ItmzXXcRfc7CTP4ko5zY8Ml3AqOH64PUlzPnV+mxnTAuPLpRyF8hpWnRiaguOG7wTyqut8iR9uVPh0ubiukap+IHDCTQUOdsqm5n9oGei+5jpU6oHpU65Lr4nYhlfx8oPbSG2deE4glJtbKDdbq1Jfel9g7xyvd0O8AJ/xk/RjOA1ZFDjh7pZ4AXoAaqLy20X1wAcD05BN9EO8QP56lDq8ImVD6zecW5t8/Ujnt1/iLmw3mTVJj/8BzkdNonUE0AQAAAAASUVORK5CYII=",
  Dh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA1CAYAAAA+qNlvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATcSURBVHgBvVr/daJAEJ7l3f9JKjhSwWkFIRUkVnCmAk0F0QpiKoipQK3gSAXxKggdqFcAezMs6DLsLgsK33uJsg7LxzC/dhYBPljtrvH/GIS4w89BProHEFuQ6RxGNwm0wWoX4pzv+I0+l/BwNXfITlFmgt8SkHIkwEU2CCYoFKFQBA5IIWbOi9qvsRCKjJpHyiEqYWuQG6Dclyb3FlgmnKLgt5ByVkeaQHKwObxCc1zXHJvHRXBVJb4+vCPpV8ckRiD5Kd7wGHpCmThqTYAcG+T2SOwDH9ET/t3Ix2uRPVayNw14wy/QE34cv6G2Mq2VkRBZtLtY8jPRFuVqNySTgtPTCXGeiOShYxw1btDWNneW2Hr26GZPjqIP9aV1RZy0RNo6gTQ9ImIecywgC41HRPl8nSI4XkyDABF7x2al9Y/S+T1oPcivdKcPpjL9gGZYsuMoT1qdISOOTnnLxrfQBCppxGx0DB2i0PhPbWzvadslcCfFJPELOkRgeKQJtEOiHwiZ3kKHII2XiUt5gHYYsOPGT60JqilfiCtoCqzyeCTBhLWGDhEYwl6zaKBI/wGWB6DqrBdFoXH9sYbgCzNpilJvrWt0TxTEE2CEoA6qRjaRnqejmwV0jIw4hrK/bHzgPMtNegY9oNA4TziR6yQkvQLmC32SJhRlbYk4EruTtjNWu0eoavq5D/PQoTSuSlfdQQeOWqNkRn3ZNMcxjqOdb9hvY/BAel6iWWrfE7DXSFvQA4hMP/UEVEoYaC4PlkkST7l60MoKFyv5knBorZFU6XxPawT6xOPlqT2BpsGWYZALxaVJlNxOH6J1aJvC7BycNG5YECAeK2cogjEbnULP4LUKN5ffJifFG5wzuUnXCweOMnFlFrE2QmSq2jTJBUFvrQlCpTr01WZFTjWEIugJ1bJWaTPRRny1Tjf53pfJmJue1BxSXdQC5Li3lcihqsNvfQgboAtsgD5b5qWbIocvklgC5FctKklrt1as91/aBeyEVrtZZRGhd2+xIEP7f3B1fSVgi7lhu9rVZo7yCvB0AVNch+wmSS4qk8nMKBT+9X3RhPLqMATWX8w2bIwcWX+RZ1S8kQakCWFWdXr6SOD6EQlx04iynQEOfMTZ06jvEOhd3ydRTXhhXjLXQtQJBLhrILVdA1COOjTaIzoramImKXExsqlKbluDg0/zfvwRmcJqKs5a4nltQo4aaqMx9sjvXeeAcuzEx+Esyrl32Xs9cUXE5Ki1WvGGWTmJq2J02vgR6Kii2gd/zULdJaAKvCc2GoKjePMjDtmCYQbVWnzl1RHwgarNn9n81uLNm3iulRGwHkyTEOZxDTK9WBspMm0F/sTVxFteXCEGviHMB4Y1gdEcmxEnoFa4vSOiALcZ4TLwWkk1J47AVf2UJw+J24xZfXO+2XDTSExCrYgTUuXxPM6qreu2Drv591uUkxchNom2Jl6svA0Thzn5ZutQIi3TZWlMyk9bEvJLQDUwZL4Cxw1e5wSbw0v2PkAZ9tICLkScgOSpRjFXj/RUlE+sS5lQvaHxYtjRvlDK94UqDdT7JxbIk2ldC3Oo86rLL0ucgFrMK8RJi7OTXNNJneDliRcwl7h2oCNK6ld6Lt+6I15AhUZaDY35DjaoWn2TUvOz4RsX3RPn0GP8GftE/wFTDG4pCDuaIwAAAABJRU5ErkJggg==",
  Lh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA3CAYAAABHGbl4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYGSURBVHgB3VrpVSM5EC71m/+YDEwE64lgPBFgR4CJAIgAE8FABHgjsIlgmgjWG8FqI3CzAVhb1VXqltT3YbOz33uGblvXJ5XqkhScCtvDBP9O8TPDz0Q+Flo+CSwv93ACKBgLTGQBKvoGYOaKSbVBYgD2YMwbPsdjER1ObHuYg1J32NAc/FXpBSH5go87JJlAT/QnxoQehVAVEhzk3/hfK3qGdOBWLCdY/7eautootYHriyfoge7EtocpDui1glCijPn9SLPOYqUb2iKCtAdJdBcVRLUx5gnb2kAHdCO2PdwrXCUIRc6Yd1yJNXYewxDgpEXYDq4U7lN/jxrA1TPHh7bi2Z7Y28cPXI1777uxCIVggivDk+iCVu97oyRAG2IkLkptA9EjkXs6Li+f4ZRAgighrxD0LeRqtadqaHiCDf8E3gcWe2x42WbWxkK0PayD1WskF0EdeLYyUqQY2orCmEDJWGO/tyCaFcETvj3MqupUr9jbxyMSWWcFWfTW8JlAIiJBVnlV7jlV0cBKZJsLkQpfXq6g+0BoACtgLWdnV6PS+RP/P/daebSfQs4iNovJ97CYKqk4lYpTOxCcla+dvQAewCvUuFa4b57RAD9AV7DZ+ZG1YwyZAU+RlRHbYKUbeUuElIYuePvnRpnjpmXpPc74V+gItUu2QEadQeO8ciffVx68WjdZZbb4GrqA2mhPijAjGwkdESoTdL69Nnxizr5C6F52ym/DjuKdBkIbnfarMyCuQoafXLUuwNVJXS3bBpiV20ZOjGbaMYQyI90QtJF2iJ2b5eU89fXQQyEllGqygByQkukKnnjtfJN5Ru6KrZ1n3dNNCu1KUmoi0LAaXrkMqli3FQyHONwGbSPWxDkxxSrZFu4VKkCoAVmtV8H3GupDmDpswN1rolCYGMVW/qB20A++eCl1UVN2Ulu3LXivZauvPGK52oQ0RO8fuergfSaTVgBKyJ33BQekfbFzGk4lL5KXTAwMBYh9wfvS13ikJV1ytAd2HwXDbfpLCcEV60nqeqWd7yifIh2wQe6fUAm8gqxd6VySPKEYajTSVzAAyOEPEAVEGj0qeMhDs0SsguNCx9ipylNxHkT9D4LxFdUsgmK+bzDSeC3UeuVIRgyDdPakoguf2LANnIM0Ffp/YuR1SYlEYQ5DxD6GcaDtA7p0V19ghFxgJdDbMGRnWNyn0hcpl9gsJ301byt8gXOA9+2wvdsRoRN8Af8TEDHtvJ9OLE+PqfOchMSm8OsiWxTc1zoqqNqucdF/Bb4Tre0eczf2HH5BBGHPPtWKaE/e0Q3iH9LzrTQUaAb7gDOs0zfkKIc5kj21BxvNZoHHkesHtI1W3cf4Sb1tDLEXKKO3NY1MIIruJI8vjRkYFSrPMZldskvPy+oNuRudvNM/K4pUKQ/WKkINcXD/kkTqWTQoxVdpOpAigor9j79f22cj0sbEaLmFqRT0Tzkk1BCv/VNMAiVrStPamNwFX5vHXD4v4GVYxTnlQk5IUAB61djI/jiSA40zPTHpvs1TFQH8A4ld8tMmkMj/PC4ubvnZARIgYnN55dRx2bmYbcQcX0516m8P60V6psGvWkKduZuK9xYjaMxfNRx8mq/zkcgxUgznQPkZGSEGJkwfb7X4PUCwaiFaHbqdAg3jAklxa/selRRwU8fhbw+fQUr6puBVl/1WloovHvxhgYq8ou56cj8qOM32UvKLLkvKVp1obkq+m9SdIJ4cfGx8E35dQbaCGM6OKlawx6MLODfyM7twYjVUpO0qz6Bxee9VkF8HJrelY1w4F3JNXSBVlwhqvA6BJ/YbUyICTQ0PBvukj2U2tE3fjcQISO7ZhClpgdyYeRqNYKmT7aHVhLYiRii5a+EhTVGT6C4v+6WqyfGOom81hOxNoNU4N3P8zsOD9zIkaf6fnWqyecXLluyl2wti5Bdeq4Y2u94E6kZMIKtH+24Kp0aHVXLRi1iKmptqo2DgBbT+xCysF55fVBmC1H4eOSUQwwAMJ+aC9w6ddMwlpqJcSHVgimcFOIDYubg5mh86LrEy8IoWyZ34otm/QFkG8x6IzqMAAAAASUVORK5CYII=",
  Mh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAeCAYAAACBkybCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIWSURBVHgBzZiPdYIwEMY/XaCOkA3qCNmgblBGYAPYQDaADXSDsEHtBNgJtBPY3GsoPhrgLoHa33vfU5/my10482+FedFWW6tnK+W0cSLOVlend6vTnR4OBZlYGauL1S1QjVVptcMD0FYF4hKYSkxhYaiEjCAwSpZKqHY6QZbYIklROe0FCeT4fnpDXvRdxfSjJ5VgJrQz5HSco/uzc1CQJaUQQSboSCOcnNkPPfUEQmh0D5hnxMhr6zRGwuyPlIGJsnoTGOsBH+rQeH5vMDy6haDfPRiJNALDMsKDgvH9v2L7/0HyRG74XV7cRFodPDFoYQyZx4M99bY6ejwqoQcp9fhIF2N931gFBJH0AgjxuLnAYweFPDZr17iEnP7mMEEY7Ww35s3xSNfoVmQp195nhXC2E94cXtb4H4QE3+dz7YxqyOlPqzFnkuuEN4eqfaMRPwGEeJAaT2DHAA91b1AIDYwnCCP08A0KIFurhjzEZ5V+OSjEL5qJoD0pxwAbYTC+/ZFielSI384UmEAJDfWATwL/ybLG+OZ0tkRaJEeAC3hHAIXxWeoV/ERyBJAzzRtMn1fGSMEfuB0i0OCXXQbZToB+a5jeNWa63KDy4E7dlHiJ6QsNSRmnWAAF2Y6WAqEzknFqhG1zhO0GFk1Koj9Lok97PXtE3O0mtaUy1ohghXnR6Kbh9vUJ3Sh/uFdaf87objvPmIEvUeSoiUA9OzoAAAAASUVORK5CYII=",
  Uh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGsSURBVHgB1ZfvVYMwFMVvq1/8xgZmA3ECM4JO0LpBN5ANdAPdQDdoO0F1AtgANqh5Emr6SEiIpeA95/YETv783ssjUABYKufKa2WB6Uqi5tzpNlbKe+1S+QnTUqL8jF9Gcgr9s2emyJYYVwRMSaRkcraDCrThxwrABdz41eycOTqZAdCAFMNJ6jVKD4s0ByWezrYg7vW4WAnUuxkC2yqTmTHRm/IC/VUpfyp/6XYBN+g16l2jdkzQj6g5WxOHRj6GD9kmXRhtytYVWA1NSA9w7+aP6ICfWrZfECCBaZVMboOcW+7d4W+nxRASvg4LTCfTPOviv0F3wrugM905PyPgu15z54Onei4d0KaygYGJYWWslzjg1yZUyuAz2CVQv7lODZzBfiBw+ByWckmNSXwSJwogg/8Ea+Ct0GanUEnYs9eVWX4dul7CoS9Zhwr9wE3Rh9atXiRxzFviGIZ2eQO/KvRj69QaxxkMeS3HjLFqjjhRtiS79+Efhi27vsGZRX8ieA2HSFrGRX1exGZcsustwkTPQeWZK0gzxEuifrgo+1QmofXalNRGtwtE6BvOvscwUtP7aAAAAABJRU5ErkJggg==",
  Bh = "assets/logo-DxHSDdR-.png",
  Fh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA3CAYAAABHGbl4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARpSURBVHgB3ZrhddowEMePvHwPI6gTNJkgzgRNJyjZgA0gE8AGuBMknQA6AXQCkwnIBv/qqjORZck2sgwv/b2nh7Hlk053Oktnj2ggAIz1j9LlVpexlJK9lPfRaLSjARhRIkSRR13udcnIKNWFd11YuV+6bIZS9GS0QpkuL7ockIatLhMZqGiiLcYK6Z8ZGeuEYGu8kbidnBtb5WvDvXxPri34TOdAK6R0WQdGm622lBFXHWSNxeJzXXYBmQXLoyHRDUzhd7mNWLCvfB60XJRxWfV1z1Cji6EU8rSlxIo+6ylKgbjLGnWXm9LAwO/23PYt9UGU2jqCt8lGrXs/5kmVgwnjNvkgft6tLxNU53eccvqmmaPUnC4MK+IoV5zkPTI6FUtRBOLKU7F8IWUN80hQFAHM48Fm3fVGhWq4LWLcTzpQoJkFRSCDZdMeyGDmUckhZmT1PT/QnS1FgOr8PzQOvljrtJFol9GFky0H4+b2fFs1VV5bFQuKAP7lFj/Ied6ye+bwr14UnQjqLql8ldyRzuhE4LfW3FPv1qPcnCJAdR4vfRXyBNZ6dDp7aKi7dOq+UgSO1Y5z7cqqc28dx24VlPP/T0Ndd0PZtIVpIqfqlog3u0YxcTtlVY4aPauBkpuGuuOWezuh92t830/r1OPxyHGLWKV8D8/gXEX9GZeq3YN9YW1d6LVqRz0oFLZyMGF65RmACUUiMm1uywv1k/GNTOFnK8UX6qOCldPutjJIMKH3CCUA4dRBCEU9QTWqLzl4uPm+FHynetTzwRP/QQeAPfVnbx3fuIq9UQI4Uulypw+fyD9YrFCuy52ut6E07K3jL9dUD7vJ0J3O9U8u81ZJW6zURsL0YFzTGZDs7lkzvFfO/xv6T2DF9tb/i+QzEqGs43dXMUWfl0p0v3JDLc6cWkuIvYjel3PMntgZfU7sFdOujIq/rQu8fcmpAzBrQL4vdssRgp+nPNidHgvSj6MrHp+NqG4QDy1CeME5Q7r3YW28oGU3j+ruZON21u5oFhAQettyDlYIzH9Ut0AT9+KrdXHtsdIKl6eAs/tAPbmr+PzIqpDpH1uhh9JXYXJ/oe0Mb/95PuwpDWNp6z5wvVw476Rv3OdMrvEb0KfaHahuN9ZybhEYvRX6vs5pAMZLJvBnk/mcQt1aWUhY5um8ywEDvOxrUND3jgxyrrD72ibIJ8RWajAr9egXo9oEKIQj34QuBIxrFoF+zbsK8eUteucl+tK7X6hnfYALuqHVp62nX6dl1VBPQZfKPdKZgZkePqUKxCzaUc382MzoTCD8AjFOKUtwSLl+gtvbZddbDNo2/G5ZskqpINoX2UXK9nzfWrjwKjx6/sG43AzNi+xNV6VO+vpNhPJSSzVU+5deI7PH4/Vc7WNLkVOuCbl86yDzWctZ0pCI9Qqch85WSqUch+B8QAVZoYwuBT5W4Rv0h+fXPIVCyb4JZmBchudMRh+5kKZcJec2NvSR30iWLU6qmA+Yl9015RK9YQnyF4r/w7HDLmnlAAAAAElFTkSuQmCC",
  Hh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA1CAYAAAA+qNlvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOKSURBVHgBxZnhdZswEMfPfv1eOkHJBHUmCCOkE5Ru4ExgZwKTCexMkHYC6AROJ4ANkk5w1QUpTzlOIIHAv/fuOZZP8Od0EicFwANETJRtlT0pq7WdlR2VpTAS6qus1NfbDfhutR/5JzAgdqcdh9jBCFS/gl1n4/DbML/ik8Nxqz5ITAJ+7OlBV6vVHYSRDHx3tX9ecw8afvVxAH/RBhrKHBbig3B1YxKcC36vyh6V/VT2RUV2pT6vlTXMb1TKTIKiJeRurSzr6UPz4IX1yQLuefLpS+3M72hHnEfrWdm1Cm7lurH6jUbigTUvEvU34fpJU6u9UfZdCxuigDaVDFlI1MdiIp6x9kqJbsAD/XCPrHn2qBvhN6z9EcI4se8U9dBVKQgj/Iq1P0MAKurkX7HmHGbECP9qtb165jaHT9JvMCNrYUgbGEfDvl/BjFDEufB/MA5eZ4wZNW/WQttnCATbCpGvJL9gRtbCshe0GmjRJXTfAxXMiIm4PawpeOIQTTz4vgfGYoQ30BXUi66dJdH3SnQBM2OE/2Xtm75OA6L3sABGOH/hZP3d4Am6c2Ex0YTZAXHhN64OKtq30I303RLpYfMWcV262hN001Nr8DS6X1o0Ya/jv9lvOfgx5UVzsv5uwF0jPcPHBeTP+1+UAmyXUUpXEHZKJUxA7+DzoWoS26OM206t77sN036cWUtYifdUcWwIbnkH7Vex5i1cEmFT+iJF09dvUbB7crX39DvAJZkQdXFOLAq25yljol7jJVMGu0ueK+qpEPVDz3UTfe1CGx3bpRATbI+RBwXRaAjid9bvtE7vsP/U9xjtATAghx2iqK1Gf8h3AzEQBLnepimGiewTP32OYPdAndhOEE9z5YRtnufYPfQkJpUQtqBCuHnaI/4k+NM1xNMtbCeoV3BChSdCJEuPPhl6TjhHcKbnO8oTNVp94ghOjZHyvRDEx1kFwBmcPUylJyopRAK7+R6neMN2leE1+xkjvuaxuwTnEAOUV4E4SxiI5Ya4n11DIHpjzI+UKT+PEIdZD0ul/5hFSRvhunF3V9hO1rMgvsaRE1b1+yFcL9rKZd8oQbnAegmNlEN0BXOC8hpvop959N85Hj6FuUG5LjeUKJyd6BE7OETHT5Ee8RkOV4iltjO6R2k50ZZ4imKB46hxifQYeACpxO2jurhoG/0AuRbGMRuLDAJZwcLYUZ3yf6L/1PWGvEynLoMAAAAASUVORK5CYII=",
  Vh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA1CAYAAAA+qNlvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMKSURBVHgBzZmBsZswDIbFm4AN6hHoBKUTNCOwQbNB6QRJJ+B1gl4nIBskG0AnSDb4az/87jg/CbDBJt+d7t0jEpZl2ZZNRgsBoPSfg5YvWorRT72W31ouWZb19AxoZ0stjZY75um0HGlPrMMtwvhBe2AaxnrSRn7GaZMur1oqLbnVV1pqQTenFFiHOBotZYBtTbEx0cEwuVwqj3e0yaMuRMwrTzFM6LRRZ6LVUQDJo46P63RNASSNun5xwTRWUiBc1CkCL1q4oewpnF/O/2biK9oY47hyH66sOXrmmaKNeaHtKZhnN9qYTR23KeHWKr0ewQdtjHH8ITjghZ3QV/qYFj8pBsKqUni+4wieC8UCw3bvUnnYnySnkWDL751Gzwtscsg1+6z9JmAoV8fMbvmMzTvpanHwOaom9BWjb8qGklICPs/rCf2DT0dj8LaO23X24vz2jZ6Y8Qb01/mtmBh6bic80B7YdHHL23ZCv3V0r7QXuvEzk7uFoMtN6Ir2QFgtGkGXG6EOqU73jEPc+lwKulzUT7QHQtSncv26tKPR8Yw6d87sEHldz7iHNk/Ntj/O117LZ662xlCbfHcemyXzq1SL2zbMEqq0fNLyz9rcVp3AwF+tnSb0W0b/+h55DJPZjM4Z8xeqzaoRA3+7VQq6StDvbAeWXFW7dl7ngrEzUv7mns6Hcl/jPLcpTaXMUueNUxcMS2pl/3J25pkiXyBfiB5mbGrG7mYDYUYy9whUWDkB/lx6XxIJ66ToqGDD7Q1hGxv4XbJDhC0ecrqFna604R/mZS1FwI4ytxKV5AvkfI9Sn4C/tw8LlB1GLhJRvraBn6yKQpgYxs2dB1/0hZ+2wB+YDQ02nLDgD/LrjomQv9R12Kg6FNooaS0Y1ui74HxFKwCfkkHfp6QGprb5BmG3v9JFakVbYp2/QqZZ2gHIX7hfKRbg6/gxZhMzEztnbE3atYJd/ItULK8Q25FM1es1pQTDitAhHNOZivbCduACP4y+omcAQwodIXeih63X596V0Y44EX34fJ37DxWjE34FbES0AAAAAElFTkSuQmCC",
  Qh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA3CAYAAABKB8k/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgB7ZntccIwDIaVXv/DCOkEZQRG6AalG9AJSCeATlA26AgZATaADaATqNZFKbILxIpjHO7y3Pl8gD/0Bkd+4wB0DCJOTSmxYmfK0pQx3AMm0DmeZ9N7ESbAiQh4ZUpuysyUA3/3BX2Fg91xoN/Ob5Nei6ClIYLfnVsqfF/ULKBP0BUXwedX2s16J4IC4YAO14IX7ee9ESGCJ14U/QrRbw4poIBFEAUocUS8wi3hjFNnlRW0BKtUWzOBW4B2utxAIGaMtbiH4ovAakdtzDjKMcuux7w00TLGRFjtI5sYY8tJFmK9TqFj8P9mmENXoJ27o6U95/6iOtz8oe1jCoiMmySCROAVgxYTtNN0CW1AD4MWEwx1sOhp0GKCtoNdajouuJOXQYsJah3srTKOBvR1sM5fVkCPwCYH62Sc1gYtJnjJwToZJ9igxQRtBzutv5ylzjga8ORgy/qL8uLa6iG8YmrGD+K3I9wBWZbJOC0Bd8kgIDWDgNQMAlLzCB3Bu3ju0fRocvkWOiJYAAdOT01TRZ+9qT6NkGDjGCSAgydPQjXtkD8e3Ubcns6ZIFiE8EIzUCLcIRlB7+dmYY0P0ALhhfLQm/iZ63fHo1zFtC2g+sfGoQ44VMAT122MoM9ya2TYB1IzCEjNICA1g4DUDAJSQwLqLb3NS4wRhJNrGjum8SidoepoEe1jb7V4eUSodLILeY6bcWf6kHObvedYOdcf7C5V8MWieWn+I/gZwjGcVsqbmXf9N5gpW9RBb3CCzlOxehe2Qx3WvJk7IPjdC3S19ppngCYhvvO6z9O/DhkeiLsxbn0AAAAASUVORK5CYII=",
  Wh = Ih,
  Yh = zh,
  Kh = Dh,
  Xh = Lh,
  Af = Mh,
  Sf = Uh,
  Gh = Bh,
  kf = Fh,
  Zh = Vh,
  Jh = Hh,
  qh = Qh;
var Cf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Vs = se.createContext && se.createContext(Cf),
  $h = ["attr", "size", "title"];
function bh(e, t) {
  if (e == null) return {};
  var n = e0(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function e0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Cl() {
  return (
    (Cl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cl.apply(this, arguments)
  );
}
function Qs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qs(Object(n), !0).forEach(function (r) {
          t0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Qs(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function t0(e, t, n) {
  return (
    (t = n0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function n0(e) {
  var t = r0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ef(e) {
  return (
    e &&
    e.map((t, n) =>
      se.createElement(t.tag, El({ key: n }, t.attr), Ef(t.child))
    )
  );
}
function Ve(e) {
  return (t) =>
    se.createElement(l0, Cl({ attr: El({}, e.attr) }, t), Ef(e.child));
}
function l0(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = bh(e, $h),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      se.createElement(
        "svg",
        Cl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: El(El({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && se.createElement("title", null, i),
        e.children
      )
    );
  };
  return Vs !== void 0
    ? se.createElement(Vs.Consumer, null, (n) => t(n))
    : t(Cf);
}
function i0(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",
        },
        child: [],
      },
    ],
  })(e);
}
function o0(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function u0(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" },
        child: [],
      },
    ],
  })(e);
}
const s0 = () =>
    w.jsx("nav", {
      className: "header",
      children: w.jsxs("div", {
        className: "sub-header",
        children: [
          w.jsx("div", {
            className: "logo-container",
            children: w.jsx("img", { alt: "logo", src: Gh }),
          }),
          w.jsx("div", { children: w.jsx(u0, { className: "menu-icon" }) }),
        ],
      }),
    }),
  xf = ({ children: e }) =>
    w.jsxs("div", {
      className: "pointout-paper",
      children: [w.jsx("div", { className: "pointer" }), e],
    });
xf.propTypes = { children: q.node.isRequired };
function a0(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z",
        },
        child: [],
      },
    ],
  })(e);
}
function c0(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
const Nf = ({ chatData: e }) =>
  w.jsx("div", {
    style: { width: "95%", marginInline: "auto", paddingBlock: 10 },
    children:
      e == null
        ? void 0
        : e.map(({ id: t, message: n, isUser: r }) =>
            w.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  marginBlock: 20,
                },
                children: [
                  w.jsx("div", {
                    style: {
                      width: 40,
                      height: 40,
                      background: "#00b0f0",
                      borderRadius: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: 0.2,
                      fontSize: 20,
                      color: "#ffffff",
                    },
                    children: r ? w.jsx(c0, {}) : w.jsx(a0, {}),
                  }),
                  n == null
                    ? void 0
                    : n.map((l, i) =>
                        w.jsx(
                          "div",
                          {
                            style: {
                              width: "100%",
                              background: "#f3f3f2",
                              flex: 0.8,
                              height: 40,
                              marginLeft: 5,
                              borderRadius: 10,
                              fontSize: 13,
                              fontWeight: 600,
                              padding: 10,
                              color: "grey",
                            },
                            children: w.jsx("h6", { children: l }),
                          },
                          i
                        )
                      ),
                ],
              },
              t
            )
          ),
  });
Nf.propTypes = {
  chatData: q.arrayOf(
    q.shape({ id: q.number.isRequired, message: q.string.isRequired })
  ).isRequired,
};
function f0(e) {
  return Ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8",
        },
        child: [],
      },
    ],
  })(e);
}
function d0(e) {
  return Ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5s-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5m5.331 3a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5m-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5s-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235",
        },
        child: [],
      },
    ],
  })(e);
}
function p0(e) {
  return Ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1m5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1m-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1",
        },
        child: [],
      },
    ],
  })(e);
}
function h0(e) {
  return Ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8",
        },
        child: [],
      },
    ],
  })(e);
}
function m0(e) {
  return Ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8",
        },
        child: [],
      },
    ],
  })(e);
}
const v0 = [
    { id: 1, icon: Wh, activeIcon: qh, name: "home", label: "", loading: !1 },
    {
      id: 2,
      icon: Yh,
      activeIcon: Zh,
      name: "call",
      label: "8 mins",
      loading: !1,
    },
    {
      id: 3,
      icon: Kh,
      activeIcon: Jh,
      name: "call_pause",
      label: "12 min",
      loading: !1,
    },
    {
      id: 4,
      icon: Xh,
      activeIcon: kf,
      name: "profile",
      label: "",
      loading: !0,
    },
  ],
  y0 = [
    {
      id: 1,
      isUser: !1,
      message: ["hi,I'm Good Rob! Choose yours option so we can help you!"],
    },
    { id: 2, isUser: !0, message: ["Option 1"] },
  ],
  xi = [
    { id: 1, icon: "level1" },
    { id: 2, icon: "level2" },
    { id: 3, icon: "level3" },
    { id: 4, icon: "level4" },
    { id: 5, icon: "level5" },
  ],
  Gn = se.forwardRef((e, t) => {
    const { title: n, size: r } = e;
    return w.jsx("button", {
      className: `common-button ${r}`,
      ref: t,
      children: n,
    });
  });
Gn.displayName = "UIbutton";
Gn.propTypes = {
  title: q.string.isRequired,
  size: q.oneOf(["sm", "lg", "md", "xl"]),
};
var Pf = { exports: {} },
  Rf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wr = Sn;
function g0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var w0 = typeof Object.is == "function" ? Object.is : g0,
  A0 = wr.useSyncExternalStore,
  S0 = wr.useRef,
  k0 = wr.useEffect,
  C0 = wr.useMemo,
  E0 = wr.useDebugValue;
Rf.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var i = S0(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = C0(
    function () {
      function s(g) {
        if (!a) {
          if (((a = !0), (d = g), (g = r(g)), l !== void 0 && o.hasValue)) {
            var y = o.value;
            if (l(y, g)) return (m = y);
          }
          return (m = g);
        }
        if (((y = m), w0(d, g))) return y;
        var A = r(g);
        return l !== void 0 && l(y, A) ? y : ((d = g), (m = A));
      }
      var a = !1,
        d,
        m,
        h = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        h === null
          ? void 0
          : function () {
              return s(h());
            },
      ];
    },
    [t, n, r, l]
  );
  var u = A0(e, i[0], i[1]);
  return (
    k0(
      function () {
        (o.hasValue = !0), (o.value = u);
      },
      [u]
    ),
    E0(u),
    u
  );
};
Pf.exports = Rf;
var x0 = Pf.exports,
  Se = "default" in Du ? se : Du,
  Ws = Symbol.for("react-redux-context"),
  Ys = typeof globalThis < "u" ? globalThis : {};
function N0() {
  if (!Se.createContext) return {};
  const e = Ys[Ws] ?? (Ys[Ws] = new Map());
  let t = e.get(Se.createContext);
  return t || ((t = Se.createContext(null)), e.set(Se.createContext, t)), t;
}
var kt = N0(),
  P0 = () => {
    throw new Error("uSES not initialized!");
  };
function Cu(e = kt) {
  return function () {
    return Se.useContext(e);
  };
}
var Of = Cu(),
  Tf = P0,
  R0 = (e) => {
    Tf = e;
  },
  O0 = (e, t) => e === t;
function T0(e = kt) {
  const t = e === kt ? Of : Cu(e),
    n = (r, l = {}) => {
      const { equalityFn: i = O0, devModeChecks: o = {} } =
          typeof l == "function" ? { equalityFn: l } : l,
        {
          store: u,
          subscription: s,
          getServerState: a,
          stabilityCheck: d,
          identityFunctionCheck: m,
        } = t();
      Se.useRef(!0);
      const h = Se.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, d, o.stabilityCheck]
        ),
        g = Tf(s.addNestedSub, u.getState, a || u.getState, h, i);
      return Se.useDebugValue(g), g;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Eu = T0();
function j0(e) {
  e();
}
function _0() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      j0(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const l = (t = { callback: n, next: null, prev: t });
      return (
        l.prev ? (l.prev.next = l) : (e = l),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            l.next ? (l.next.prev = l.prev) : (t = l.prev),
            l.prev ? (l.prev.next = l.next) : (e = l.next));
        }
      );
    },
  };
}
var Ks = { notify() {}, get: () => [] };
function I0(e, t) {
  let n,
    r = Ks,
    l = 0,
    i = !1;
  function o(A) {
    d();
    const R = r.subscribe(A);
    let p = !1;
    return () => {
      p || ((p = !0), R(), m());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    y.onStateChange && y.onStateChange();
  }
  function a() {
    return i;
  }
  function d() {
    l++, n || ((n = e.subscribe(s)), (r = _0()));
  }
  function m() {
    l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = Ks));
  }
  function h() {
    i || ((i = !0), d());
  }
  function g() {
    i && ((i = !1), m());
  }
  const y = {
    addNestedSub: o,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: h,
    tryUnsubscribe: g,
    getListeners: () => r,
  };
  return y;
}
var z0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  D0 = typeof navigator < "u" && navigator.product === "ReactNative",
  L0 = z0 || D0 ? Se.useLayoutEffect : Se.useEffect;
function M0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  identityFunctionCheck: i = "once",
}) {
  const o = Se.useMemo(() => {
      const a = I0(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        identityFunctionCheck: i,
      };
    }, [e, r, l, i]),
    u = Se.useMemo(() => e.getState(), [e]);
  L0(() => {
    const { subscription: a } = o;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      u !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [o, u]);
  const s = t || kt;
  return Se.createElement(s.Provider, { value: o }, n);
}
var U0 = M0;
function jf(e = kt) {
  const t = e === kt ? Of : Cu(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var B0 = jf();
function F0(e = kt) {
  const t = e === kt ? B0 : jf(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var _f = F0();
R0(x0.useSyncExternalStoreWithSelector);
function b(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var H0 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Xs = H0,
  Ni = () => Math.random().toString(36).substring(7).split("").join("."),
  V0 = {
    INIT: `@@redux/INIT${Ni()}`,
    REPLACE: `@@redux/REPLACE${Ni()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ni()}`,
  },
  xl = V0;
function xu(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function If(e, t, n) {
  if (typeof e != "function") throw new Error(b(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(b(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(b(1));
    return n(If)(e, t);
  }
  let r = e,
    l = t,
    i = new Map(),
    o = i,
    u = 0,
    s = !1;
  function a() {
    o === i &&
      ((o = new Map()),
      i.forEach((R, p) => {
        o.set(p, R);
      }));
  }
  function d() {
    if (s) throw new Error(b(3));
    return l;
  }
  function m(R) {
    if (typeof R != "function") throw new Error(b(4));
    if (s) throw new Error(b(5));
    let p = !0;
    a();
    const c = u++;
    return (
      o.set(c, R),
      function () {
        if (p) {
          if (s) throw new Error(b(6));
          (p = !1), a(), o.delete(c), (i = null);
        }
      }
    );
  }
  function h(R) {
    if (!xu(R)) throw new Error(b(7));
    if (typeof R.type > "u") throw new Error(b(8));
    if (typeof R.type != "string") throw new Error(b(17));
    if (s) throw new Error(b(9));
    try {
      (s = !0), (l = r(l, R));
    } finally {
      s = !1;
    }
    return (
      (i = o).forEach((c) => {
        c();
      }),
      R
    );
  }
  function g(R) {
    if (typeof R != "function") throw new Error(b(10));
    (r = R), h({ type: xl.REPLACE });
  }
  function y() {
    const R = m;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(b(11));
        function c() {
          const v = p;
          v.next && v.next(d());
        }
        return c(), { unsubscribe: R(c) };
      },
      [Xs]() {
        return this;
      },
    };
  }
  return (
    h({ type: xl.INIT }),
    { dispatch: h, subscribe: m, getState: d, replaceReducer: g, [Xs]: y }
  );
}
function Q0(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: xl.INIT }) > "u") throw new Error(b(12));
    if (typeof n(void 0, { type: xl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(b(13));
  });
}
function W0(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let l;
  try {
    Q0(n);
  } catch (i) {
    l = i;
  }
  return function (o = {}, u) {
    if (l) throw l;
    let s = !1;
    const a = {};
    for (let d = 0; d < r.length; d++) {
      const m = r[d],
        h = n[m],
        g = o[m],
        y = h(g, u);
      if (typeof y > "u") throw (u && u.type, new Error(b(14)));
      (a[m] = y), (s = s || y !== g);
    }
    return (s = s || r.length !== Object.keys(o).length), s ? a : o;
  };
}
function Nl(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function Y0(...e) {
  return (t) => (n, r) => {
    const l = t(n, r);
    let i = () => {
      throw new Error(b(15));
    };
    const o = { getState: l.getState, dispatch: (s, ...a) => i(s, ...a) },
      u = e.map((s) => s(o));
    return (i = Nl(...u)(l.dispatch)), { ...l, dispatch: i };
  };
}
function K0(e) {
  return xu(e) && "type" in e && typeof e.type == "string";
}
var zf = Symbol.for("immer-nothing"),
  Gs = Symbol.for("immer-draftable"),
  Ee = Symbol.for("immer-state");
function Ue(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var gn = Object.getPrototypeOf;
function Ct(e) {
  return !!e && !!e[Ee];
}
function rt(e) {
  var t;
  return e
    ? Df(e) ||
        Array.isArray(e) ||
        !!e[Gs] ||
        !!((t = e.constructor) != null && t[Gs]) ||
        Xl(e) ||
        Gl(e)
    : !1;
}
var X0 = Object.prototype.constructor.toString();
function Df(e) {
  if (!e || typeof e != "object") return !1;
  const t = gn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === X0;
}
function Pl(e, t) {
  Kl(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Kl(e) {
  const t = e[Ee];
  return t ? t.type_ : Array.isArray(e) ? 1 : Xl(e) ? 2 : Gl(e) ? 3 : 0;
}
function Co(e, t) {
  return Kl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Lf(e, t, n) {
  const r = Kl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function G0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Xl(e) {
  return e instanceof Map;
}
function Gl(e) {
  return e instanceof Set;
}
function jt(e) {
  return e.copy_ || e.base_;
}
function Eo(e, t) {
  if (Xl(e)) return new Map(e);
  if (Gl(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Df(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ee];
    let l = Reflect.ownKeys(r);
    for (let i = 0; i < l.length; i++) {
      const o = l[i],
        u = r[o];
      u.writable === !1 && ((u.writable = !0), (u.configurable = !0)),
        (u.get || u.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: u.enumerable,
            value: e[o],
          });
    }
    return Object.create(gn(e), r);
  } else {
    const r = gn(e);
    if (r !== null && n) return { ...e };
    const l = Object.create(r);
    return Object.assign(l, e);
  }
}
function Nu(e, t = !1) {
  return (
    Zl(e) ||
      Ct(e) ||
      !rt(e) ||
      (Kl(e) > 1 && (e.set = e.add = e.clear = e.delete = Z0),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Nu(r, !0))),
    e
  );
}
function Z0() {
  Ue(2);
}
function Zl(e) {
  return Object.isFrozen(e);
}
var J0 = {};
function Vt(e) {
  const t = J0[e];
  return t || Ue(0, e), t;
}
var dr;
function Mf() {
  return dr;
}
function q0(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Zs(e, t) {
  t &&
    (Vt("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function xo(e) {
  No(e), e.drafts_.forEach($0), (e.drafts_ = null);
}
function No(e) {
  e === dr && (dr = e.parent_);
}
function Js(e) {
  return (dr = q0(dr, e));
}
function $0(e) {
  const t = e[Ee];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function qs(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ee].modified_ && (xo(t), Ue(4)),
        rt(e) && ((e = Rl(t, e)), t.parent_ || Ol(t, e)),
        t.patches_ &&
          Vt("Patches").generateReplacementPatches_(
            n[Ee].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Rl(t, n, [])),
    xo(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== zf ? e : void 0
  );
}
function Rl(e, t, n) {
  if (Zl(t)) return t;
  const r = t[Ee];
  if (!r) return Pl(t, (l, i) => $s(e, r, t, l, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Ol(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const l = r.copy_;
    let i = l,
      o = !1;
    r.type_ === 3 && ((i = new Set(l)), l.clear(), (o = !0)),
      Pl(i, (u, s) => $s(e, r, l, u, s, n, o)),
      Ol(e, l, !1),
      n &&
        e.patches_ &&
        Vt("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function $s(e, t, n, r, l, i, o) {
  if (Ct(l)) {
    const u =
        i && t && t.type_ !== 3 && !Co(t.assigned_, r) ? i.concat(r) : void 0,
      s = Rl(e, l, u);
    if ((Lf(n, r, s), Ct(s))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(l);
  if (rt(l) && !Zl(l)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Rl(e, l),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Ol(e, l);
  }
}
function Ol(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Nu(t, n);
}
function b0(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Mf(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let l = r,
    i = Pu;
  n && ((l = [r]), (i = pr));
  const { revoke: o, proxy: u } = Proxy.revocable(l, i);
  return (r.draft_ = u), (r.revoke_ = o), u;
}
var Pu = {
    get(e, t) {
      if (t === Ee) return e;
      const n = jt(e);
      if (!Co(n, t)) return em(e, n, t);
      const r = n[t];
      return e.finalized_ || !rt(r)
        ? r
        : r === Pi(e.base_, t)
        ? (Ri(e), (e.copy_[t] = Ro(r, e)))
        : r;
    },
    has(e, t) {
      return t in jt(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(jt(e));
    },
    set(e, t, n) {
      const r = Uf(jt(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const l = Pi(jt(e), t),
          i = l == null ? void 0 : l[Ee];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (G0(n, l) && (n !== void 0 || Co(e.base_, t))) return !0;
        Ri(e), Po(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Pi(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Ri(e), Po(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = jt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Ue(11);
    },
    getPrototypeOf(e) {
      return gn(e.base_);
    },
    setPrototypeOf() {
      Ue(12);
    },
  },
  pr = {};
Pl(Pu, (e, t) => {
  pr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
pr.deleteProperty = function (e, t) {
  return pr.set.call(this, e, t, void 0);
};
pr.set = function (e, t, n) {
  return Pu.set.call(this, e[0], t, n, e[0]);
};
function Pi(e, t) {
  const n = e[Ee];
  return (n ? jt(n) : e)[t];
}
function em(e, t, n) {
  var l;
  const r = Uf(t, n);
  return r
    ? "value" in r
      ? r.value
      : (l = r.get) == null
      ? void 0
      : l.call(e.draft_)
    : void 0;
}
function Uf(e, t) {
  if (!(t in e)) return;
  let n = gn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = gn(n);
  }
}
function Po(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Po(e.parent_));
}
function Ri(e) {
  e.copy_ || (e.copy_ = Eo(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var tm = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const o = this;
          return function (s = i, ...a) {
            return o.produce(s, (d) => n.call(this, d, ...a));
          };
        }
        typeof n != "function" && Ue(6),
          r !== void 0 && typeof r != "function" && Ue(7);
        let l;
        if (rt(t)) {
          const i = Js(this),
            o = Ro(t, void 0);
          let u = !0;
          try {
            (l = n(o)), (u = !1);
          } finally {
            u ? xo(i) : No(i);
          }
          return Zs(i, r), qs(l, i);
        } else if (!t || typeof t != "object") {
          if (
            ((l = n(t)),
            l === void 0 && (l = t),
            l === zf && (l = void 0),
            this.autoFreeze_ && Nu(l, !0),
            r)
          ) {
            const i = [],
              o = [];
            Vt("Patches").generateReplacementPatches_(t, l, i, o), r(i, o);
          }
          return l;
        } else Ue(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...u) => this.produceWithPatches(o, (s) => t(s, ...u));
        let r, l;
        return [
          this.produce(t, n, (o, u) => {
            (r = o), (l = u);
          }),
          r,
          l,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    rt(e) || Ue(8), Ct(e) && (e = Bf(e));
    const t = Js(this),
      n = Ro(e, void 0);
    return (n[Ee].isManual_ = !0), No(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ee];
    (!n || !n.isManual_) && Ue(9);
    const { scope_: r } = n;
    return Zs(r, t), qs(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const l = t[n];
      if (l.path.length === 0 && l.op === "replace") {
        e = l.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Vt("Patches").applyPatches_;
    return Ct(e) ? r(e, t) : this.produce(e, (l) => r(l, t));
  }
};
function Ro(e, t) {
  const n = Xl(e)
    ? Vt("MapSet").proxyMap_(e, t)
    : Gl(e)
    ? Vt("MapSet").proxySet_(e, t)
    : b0(e, t);
  return (t ? t.scope_ : Mf()).drafts_.push(n), n;
}
function Bf(e) {
  return Ct(e) || Ue(10, e), Ff(e);
}
function Ff(e) {
  if (!rt(e) || Zl(e)) return e;
  const t = e[Ee];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Eo(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Eo(e, !0);
  return (
    Pl(n, (r, l) => {
      Lf(n, r, Ff(l));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var xe = new tm(),
  Hf = xe.produce;
xe.produceWithPatches.bind(xe);
xe.setAutoFreeze.bind(xe);
xe.setUseStrictShallowCopy.bind(xe);
xe.applyPatches.bind(xe);
xe.createDraft.bind(xe);
xe.finishDraft.bind(xe);
function nm(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function rm(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function lm(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var bs = (e) => (Array.isArray(e) ? e : [e]);
function im(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    lm(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function om(e, t) {
  const n = [],
    { length: r } = e;
  for (let l = 0; l < r; l++) n.push(e[l].apply(null, t));
  return n;
}
var um = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  sm = typeof WeakRef < "u" ? WeakRef : um,
  am = 0,
  ea = 1;
function Br() {
  return { s: am, v: void 0, o: null, p: null };
}
function Ru(e, t = {}) {
  let n = Br();
  const { resultEqualityCheck: r } = t;
  let l,
    i = 0;
  function o() {
    var m;
    let u = n;
    const { length: s } = arguments;
    for (let h = 0, g = s; h < g; h++) {
      const y = arguments[h];
      if (typeof y == "function" || (typeof y == "object" && y !== null)) {
        let A = u.o;
        A === null && (u.o = A = new WeakMap());
        const R = A.get(y);
        R === void 0 ? ((u = Br()), A.set(y, u)) : (u = R);
      } else {
        let A = u.p;
        A === null && (u.p = A = new Map());
        const R = A.get(y);
        R === void 0 ? ((u = Br()), A.set(y, u)) : (u = R);
      }
    }
    const a = u;
    let d;
    if (u.s === ea) d = u.v;
    else if (((d = e.apply(null, arguments)), i++, r)) {
      const h =
        ((m = l == null ? void 0 : l.deref) == null ? void 0 : m.call(l)) ?? l;
      h != null && r(h, d) && ((d = h), i !== 0 && i--),
        (l =
          (typeof d == "object" && d !== null) || typeof d == "function"
            ? new sm(d)
            : d);
    }
    return (a.s = ea), (a.v = d), d;
  }
  return (
    (o.clearCache = () => {
      (n = Br()), o.resetResultsCount();
    }),
    (o.resultsCount = () => i),
    (o.resetResultsCount = () => {
      i = 0;
    }),
    o
  );
}
function Vf(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...l) => {
      let i = 0,
        o = 0,
        u,
        s = {},
        a = l.pop();
      typeof a == "object" && ((s = a), (a = l.pop())),
        nm(
          a,
          `createSelector expects an output function after the inputs, but received: [${typeof a}]`
        );
      const d = { ...n, ...s },
        {
          memoize: m,
          memoizeOptions: h = [],
          argsMemoize: g = Ru,
          argsMemoizeOptions: y = [],
          devModeChecks: A = {},
        } = d,
        R = bs(h),
        p = bs(y),
        c = im(l),
        f = m(function () {
          return i++, a.apply(null, arguments);
        }, ...R),
        v = g(function () {
          o++;
          const C = om(c, arguments);
          return (u = f.apply(null, C)), u;
        }, ...p);
      return Object.assign(v, {
        resultFunc: a,
        memoizedResultFunc: f,
        dependencies: c,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => u,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: m,
        argsMemoize: g,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var cm = Vf(Ru),
  fm = Object.assign(
    (e, t = cm) => {
      rm(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((i) => e[i]);
      return t(r, (...i) => i.reduce((o, u, s) => ((o[n[s]] = u), o), {}));
    },
    { withTypes: () => fm }
  );
function Qf(e) {
  return ({ dispatch: n, getState: r }) =>
    (l) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : l(i);
}
var dm = Qf(),
  pm = Qf,
  hm = (...e) => {
    const t = Vf(...e),
      n = Object.assign(
        (...r) => {
          const l = t(...r),
            i = (o, ...u) => l(Ct(o) ? Bf(o) : o, ...u);
          return Object.assign(i, l), i;
        },
        { withTypes: () => n }
      );
    return n;
  };
hm(Ru);
var mm =
  typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == "object"
            ? Nl
            : Nl.apply(null, arguments);
      };
function wn(e, t) {
  function n(...r) {
    if (t) {
      let l = t(...r);
      if (!l) throw new Error(ye(0));
      return {
        type: e,
        payload: l.payload,
        ...("meta" in l && { meta: l.meta }),
        ...("error" in l && { error: l.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => K0(r) && r.type === e),
    n
  );
}
var Wf = class Un extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Un.prototype);
  }
  static get [Symbol.species]() {
    return Un;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Un(...t[0].concat(this))
      : new Un(...t.concat(this));
  }
};
function ta(e) {
  return rt(e) ? Hf(e, () => {}) : e;
}
function na(e, t, n) {
  if (e.has(t)) {
    let l = e.get(t);
    return n.update && ((l = n.update(l, t, e)), e.set(t, l)), l;
  }
  if (!n.insert) throw new Error(ye(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function vm(e) {
  return typeof e == "boolean";
}
var ym = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: l = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let o = new Wf();
      return n && (vm(n) ? o.push(dm) : o.push(pm(n.extraArgument))), o;
    },
  gm = "RTK_autoBatch",
  Yf = (e) => (t) => {
    setTimeout(t, e);
  },
  wm =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Yf(10),
  Am =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let l = !0,
        i = !1,
        o = !1;
      const u = new Set(),
        s =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? wm
            : e.type === "callback"
            ? e.queueNotification
            : Yf(e.timeout),
        a = () => {
          (o = !1), i && ((i = !1), u.forEach((d) => d()));
        };
      return Object.assign({}, r, {
        subscribe(d) {
          const m = () => l && d(),
            h = r.subscribe(m);
          return (
            u.add(d),
            () => {
              h(), u.delete(d);
            }
          );
        },
        dispatch(d) {
          var m;
          try {
            return (
              (l = !((m = d == null ? void 0 : d.meta) != null && m[gm])),
              (i = !l),
              i && (o || ((o = !0), s(a))),
              r.dispatch(d)
            );
          } finally {
            l = !0;
          }
        },
      });
    },
  Sm = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let l = new Wf(e);
      return r && l.push(Am(typeof r == "object" ? r : void 0)), l;
    },
  km = !0;
function Cm(e) {
  const t = ym(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: l = !0,
      preloadedState: i = void 0,
      enhancers: o = void 0,
    } = e || {};
  let u;
  if (typeof n == "function") u = n;
  else if (xu(n)) u = W0(n);
  else throw new Error(ye(1));
  let s;
  typeof r == "function" ? (s = r(t)) : (s = t());
  let a = Nl;
  l && (a = mm({ trace: !km, ...(typeof l == "object" && l) }));
  const d = Y0(...s),
    m = Sm(d);
  let h = typeof o == "function" ? o(m) : m();
  const g = a(...h);
  return If(u, i, g);
}
function Kf(e) {
  const t = {},
    n = [];
  let r;
  const l = {
    addCase(i, o) {
      const u = typeof i == "string" ? i : i.type;
      if (!u) throw new Error(ye(28));
      if (u in t) throw new Error(ye(29));
      return (t[u] = o), l;
    },
    addMatcher(i, o) {
      return n.push({ matcher: i, reducer: o }), l;
    },
    addDefaultCase(i) {
      return (r = i), l;
    },
  };
  return e(l), [t, n, r];
}
function Em(e) {
  return typeof e == "function";
}
function xm(e, t) {
  let [n, r, l] = Kf(t),
    i;
  if (Em(e)) i = () => ta(e());
  else {
    const u = ta(e);
    i = () => u;
  }
  function o(u = i(), s) {
    let a = [
      n[s.type],
      ...r.filter(({ matcher: d }) => d(s)).map(({ reducer: d }) => d),
    ];
    return (
      a.filter((d) => !!d).length === 0 && (a = [l]),
      a.reduce((d, m) => {
        if (m)
          if (Ct(d)) {
            const g = m(d, s);
            return g === void 0 ? d : g;
          } else {
            if (rt(d)) return Hf(d, (h) => m(h, s));
            {
              const h = m(d, s);
              if (h === void 0) {
                if (d === null) return d;
                throw new Error(ye(9));
              }
              return h;
            }
          }
        return d;
      }, u)
    );
  }
  return (o.getInitialState = i), o;
}
var Nm = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Pm = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += Nm[(Math.random() * 64) | 0];
    return t;
  },
  Rm = Symbol.for("rtk-slice-createasyncthunk");
function Om(e, t) {
  return `${e}/${t}`;
}
function Tm({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Rm];
  return function (l) {
    const { name: i, reducerPath: o = i } = l;
    if (!i) throw new Error(ye(11));
    typeof process < "u";
    const u =
        (typeof l.reducers == "function" ? l.reducers(Im()) : l.reducers) || {},
      s = Object.keys(u),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(f, v) {
          const k = typeof f == "string" ? f : f.type;
          if (!k) throw new Error(ye(12));
          if (k in a.sliceCaseReducersByType) throw new Error(ye(13));
          return (a.sliceCaseReducersByType[k] = v), d;
        },
        addMatcher(f, v) {
          return a.sliceMatchers.push({ matcher: f, reducer: v }), d;
        },
        exposeAction(f, v) {
          return (a.actionCreators[f] = v), d;
        },
        exposeCaseReducer(f, v) {
          return (a.sliceCaseReducersByName[f] = v), d;
        },
      };
    s.forEach((f) => {
      const v = u[f],
        k = {
          reducerName: f,
          type: Om(i, f),
          createNotation: typeof l.reducers == "function",
        };
      Dm(v) ? Mm(k, v, d, t) : zm(k, v, d);
    });
    function m() {
      const [f = {}, v = [], k = void 0] =
          typeof l.extraReducers == "function"
            ? Kf(l.extraReducers)
            : [l.extraReducers],
        C = { ...f, ...a.sliceCaseReducersByType };
      return xm(l.initialState, (x) => {
        for (let E in C) x.addCase(E, C[E]);
        for (let E of a.sliceMatchers) x.addMatcher(E.matcher, E.reducer);
        for (let E of v) x.addMatcher(E.matcher, E.reducer);
        k && x.addDefaultCase(k);
      });
    }
    const h = (f) => f,
      g = new Map();
    let y;
    function A(f, v) {
      return y || (y = m()), y(f, v);
    }
    function R() {
      return y || (y = m()), y.getInitialState();
    }
    function p(f, v = !1) {
      function k(x) {
        let E = x[f];
        return typeof E > "u" && v && (E = R()), E;
      }
      function C(x = h) {
        const E = na(g, v, { insert: () => new WeakMap() });
        return na(E, x, {
          insert: () => {
            const U = {};
            for (const [j, ge] of Object.entries(l.selectors ?? {}))
              U[j] = jm(ge, x, R, v);
            return U;
          },
        });
      }
      return {
        reducerPath: f,
        getSelectors: C,
        get selectors() {
          return C(k);
        },
        selectSlice: k,
      };
    }
    const c = {
      name: i,
      reducer: A,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: R,
      ...p(o),
      injectInto(f, { reducerPath: v, ...k } = {}) {
        const C = v ?? o;
        return (
          f.inject({ reducerPath: C, reducer: A }, k), { ...c, ...p(C, !0) }
        );
      },
    };
    return c;
  };
}
function jm(e, t, n, r) {
  function l(i, ...o) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...o);
  }
  return (l.unwrapped = e), l;
}
var _m = Tm();
function Im() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function zm({ type: e, reducerName: t, createNotation: n }, r, l) {
  let i, o;
  if ("reducer" in r) {
    if (n && !Lm(r)) throw new Error(ye(17));
    (i = r.reducer), (o = r.prepare);
  } else i = r;
  l.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, o ? wn(e, o) : wn(e));
}
function Dm(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Lm(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Mm({ type: e, reducerName: t }, n, r, l) {
  if (!l) throw new Error(ye(18));
  const {
      payloadCreator: i,
      fulfilled: o,
      pending: u,
      rejected: s,
      settled: a,
      options: d,
    } = n,
    m = l(e, i, d);
  r.exposeAction(t, m),
    o && r.addCase(m.fulfilled, o),
    u && r.addCase(m.pending, u),
    s && r.addCase(m.rejected, s),
    a && r.addMatcher(m.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: o || Fr,
      pending: u || Fr,
      rejected: s || Fr,
      settled: a || Fr,
    });
}
function Fr() {}
var Um = (e, t) => {
    if (typeof e != "function") throw new Error(ye(32));
  },
  Ou = "listenerMiddleware",
  Bm = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: l, effect: i } = e;
    if (t) l = wn(t).match;
    else if (n) (t = n.type), (l = n.match);
    else if (r) l = r;
    else if (!l) throw new Error(ye(21));
    return Um(i), { predicate: l, type: t, effect: i };
  },
  Fm = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = Bm(e);
      return {
        id: Pm(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(ye(22));
        },
      };
    },
    { withTypes: () => Fm }
  ),
  Hm = Object.assign(wn(`${Ou}/add`), { withTypes: () => Hm });
wn(`${Ou}/removeAll`);
var Vm = Object.assign(wn(`${Ou}/remove`), { withTypes: () => Vm });
function ye(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Qm = { isProgressOpen: !0, isTranscriptionDetailOpen: !1 },
  Xf = _m({
    name: "greai",
    initialState: Qm,
    reducers: {
      updateIsProgressOpen: (e, t) => ({ ...e, isProgressOpen: t.payload }),
      updateTranscriptionDetailOpen: (e, t) => ({
        ...e,
        isTranscriptionDetailOpen: t.payload,
      }),
    },
  }),
  { updateIsProgressOpen: Wm, updateTranscriptionDetailOpen: Ym } = Xf.actions,
  Km = Xf.reducer,
  Gf = () => {
    const [e, t] = Sn.useState(1),
      n = (r) => {
        e >= 1 && e < 6 && (r === "add" ? t(e + 1) : r === "minus" && t(e - 1));
      };
    return (
      se.useEffect(() => {
        e === 6 ? t(5) : e === 0 && t(1);
      }, [e]),
      console.log(e),
      w.jsxs("div", {
        className: "rating",
        children: [
          w.jsx("div", {
            onClick: () => n("minus"),
            className: "minus",
            children: "-",
          }),
          xi == null
            ? void 0
            : xi.map(({ id: r, icon: l }) => {
                const i = r === e ? "" : "transparent";
                return w.jsx(
                  "div",
                  {
                    className: `level${r}`,
                    children:
                      l === "level1"
                        ? w.jsx(f0, { className: i })
                        : l === "level2"
                        ? w.jsx(p0, { className: i })
                        : l === "level3"
                        ? w.jsx(h0, { className: i })
                        : l === "level4"
                        ? w.jsx(m0, { className: i })
                        : w.jsx(d0, { className: i }),
                  },
                  r
                );
              }),
          w.jsx("div", {
            onClick: () => n("add"),
            className: "add",
            children: "+",
          }),
        ],
      })
    );
  };
Gf.propTypes = {};
function Xm(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48.19 121.42 24.1 21.06-73.61 84.1-24.1-23.06zM191.93 342.63 121.37 272 144 249.37 214.57 320zm65 .79L185.55 272l22.64-22.62 47.16 47.21 111.13-127.17 24.1 21.06z",
        },
        child: [],
      },
    ],
  })(e);
}
const Zf = ({ progressData: e }) => {
  const t = _f(),
    { isTranscriptionDetailOpen: n } = Eu((d) => d.greai),
    [r, l] = se.useState(0),
    [i, o] = se.useState({ like: !0, dislike: !1 }),
    u = (d) => {
      console.log("hi", d), l(d);
    },
    s = () => {
      t(Ym(!n));
    },
    a = (d) => {
      d === "like"
        ? o({ like: !0, dislike: !1 })
        : d === "dislike" && o({ like: !1, dislike: !0 });
    };
  return w.jsx("div", {
    className: "progress-bar",
    children:
      e == null
        ? void 0
        : e.map(
            ({
              id: d,
              name: m,
              icon: h,
              label: g,
              activeIcon: y,
              loading: A,
            }) =>
              w.jsx(w.Fragment, {
                children: w.jsx(
                  "div",
                  {
                    className: "progress-bar-container",
                    children: w.jsxs("div", {
                      onClick: () => u(d),
                      className: `progress-round ${r === d && "isAcitive"} ${
                        A && "loading"
                      } `,
                      children: [
                        r === d &&
                          w.jsx("div", {
                            style: {
                              position: "absolute",
                              zIndex: 5e4,
                              bottom: -11,
                              left: 30,
                            },
                            children: w.jsx(Xm, {
                              style: {
                                stroke: "white",
                                color: "#43cd09",
                                fontSize: 25,
                              },
                            }),
                          }),
                        w.jsx("div", {
                          className: "progress-icon",
                          children: w.jsx("img", {
                            alt: m,
                            src: r === d ? y : h,
                          }),
                        }),
                        w.jsx("span", {
                          className: `left-line ${A && "loading"}`,
                        }),
                        w.jsx("span", {
                          className: `right-line  ${A && "loading"}`,
                        }),
                        w.jsx("div", {
                          className: "label-containaer",
                          children: w.jsx("label", { children: g }),
                        }),
                        r === d &&
                          w.jsx(xf, {
                            children: w.jsx("div", {
                              className: "wrapper",
                              children: w.jsxs("div", {
                                className: "subContainer",
                                children: [
                                  w.jsxs("div", {
                                    className: "fluid",
                                    id: "scroll",
                                    children: [
                                      w.jsxs("div", {
                                        className: "detail-container",
                                        children: [
                                          w.jsx("h5", {
                                            children: "Resume of transaction",
                                          }),
                                          w.jsxs("p", {
                                            className: "paragraph",
                                            children: [
                                              "The customer said his",
                                              " ",
                                              w.jsx("b", {
                                                style: {
                                                  color: "blue",
                                                  textDecoration: "underline",
                                                  fontWeight: 800,
                                                  marginRight: 2,
                                                },
                                                children:
                                                  "signal was lost this afternoon",
                                              }),
                                              "and request as support through technical visit. He confirmed that",
                                              " ",
                                              w.jsxs("b", {
                                                style: {
                                                  color: "blue",
                                                  textDecoration: "underline",
                                                  fontWeight: 800,
                                                  marginRight: 2,
                                                },
                                                children: [
                                                  " ",
                                                  "made all steps to reset the equioment",
                                                ],
                                              }),
                                              "but the problem keep happening,Was suggest to wait some couple hours to restore the signal into the area,but the customer was impatient",
                                            ],
                                          }),
                                          w.jsxs("div", {
                                            className: "checkbox-container",
                                            children: [
                                              w.jsx("input", {
                                                defaultChecked: !0,
                                                type: "checkbox",
                                              }),
                                              w.jsx("label", {
                                                children: "Click to shift to",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      w.jsxs("div", {
                                        className: "transcription-container",
                                        children: [
                                          w.jsxs("div", {
                                            className: "transcription",
                                            children: [
                                              w.jsx("h5", {
                                                children:
                                                  "Transcription detailed",
                                              }),
                                              w.jsx("img", {
                                                onClick: s,
                                                alt: "eye",
                                                src: n ? Af : Sf,
                                              }),
                                            ],
                                          }),
                                          w.jsxs("h6", {
                                            children: [
                                              "Click to",
                                              " ",
                                              n ? "close" : "open",
                                            ],
                                          }),
                                        ],
                                      }),
                                      n &&
                                        w.jsxs("div", {
                                          className: "transcription-sub",
                                          children: [
                                            w.jsx("div", {
                                              className: "chat-container",
                                              children: w.jsx(Nf, {
                                                chatData: y0,
                                              }),
                                            }),
                                            w.jsxs("div", {
                                              className: "option-container",
                                              children: [
                                                w.jsx(Gn, {
                                                  size: "sm",
                                                  title: "1. Technical problem",
                                                }),
                                                w.jsx(Gn, {
                                                  size: "sm",
                                                  title: "1. Change your plan",
                                                }),
                                                w.jsx(Gn, {
                                                  size: "sm",
                                                  title: "1. Change your plan",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  w.jsxs("div", {
                                    className: "client-container",
                                    children: [
                                      w.jsxs("div", {
                                        className: "rating-container",
                                        children: [
                                          w.jsx("h5", {
                                            children: "Client's emotion",
                                          }),
                                          w.jsx("div", {
                                            style: {
                                              display: "flex",
                                              height: 50,
                                              justifyContent: "center",
                                            },
                                            children: w.jsx(Gf, {}),
                                          }),
                                          w.jsxs("div", {
                                            style: {
                                              display: "flex",
                                              alignItems: "center",
                                            },
                                            children: [
                                              w.jsx("div", {
                                                className: "client-icon",
                                                children: w.jsx("img", {
                                                  alt: "profile",
                                                  src: kf,
                                                }),
                                              }),
                                              w.jsx("h5", {
                                                style: {
                                                  marginLeft: "10px",
                                                  color: "black",
                                                },
                                                children: "Augusta Coimbre",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      w.jsx("div", {
                                        className: "feedback-container",
                                        children: w.jsxs("div", {
                                          children: [
                                            w.jsx("h5", {
                                              style: { color: "gray" },
                                              children: "Tips from GreAi",
                                            }),
                                            w.jsxs("p", {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: 700,
                                                color: "#00000098",
                                                padding: 10,
                                              },
                                              children: [
                                                "show confidence; ",
                                                w.jsx("br", {}),
                                                " Maybe telling him that you will resolve the issue soon woud be good.",
                                              ],
                                            }),
                                            w.jsxs("div", {
                                              style: {
                                                fontSize: 20,
                                                marginLeft: 10,
                                              },
                                              children: [
                                                w.jsx(o0, {
                                                  onClick: () => a("like"),
                                                  style: {
                                                    marginInline: 5,
                                                    color: i.like
                                                      ? "#379bdd"
                                                      : "#cccccc",
                                                  },
                                                }),
                                                w.jsx(i0, {
                                                  onClick: () => a("dislike"),
                                                  style: {
                                                    marginInline: 5,
                                                    color: i.dislike
                                                      ? "#379bdd"
                                                      : "#cccccc",
                                                  },
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                      ],
                    }),
                  },
                  d
                ),
              })
          ),
  });
};
Zf.propTypes = {
  progressData: q.arrayOf(
    q.shape({
      id: q.oneOfType([q.string, q.number]).isRequired,
      name: q.string.isRequired,
      icon: q.string.isRequired,
    })
  ).isRequired,
};
const Tu = se.forwardRef((e, t) => {
  const { placeholder: n, value: r, name: l, size: i } = e;
  return w.jsx("input", {
    className: `common-input ${i}`,
    placeholder: n,
    name: l,
    value: r,
    ref: t,
  });
});
Tu.displayName = "UIinput";
Tu.propTypes = {
  placeholder: q.string.isRequired,
  value: q.string.isRequired,
  name: q.string.isRequired,
  size: q.oneOf(["sm", "lg", "md", "xl"]),
};
const Jf = () => {
  const e = _f(),
    { isProgressOpen: t } = Eu((r) => r.greai),
    n = () => {
      e(Wm(!t));
    };
  return w.jsxs("div", {
    className: "toolbar",
    children: [
      w.jsx("div", {
        className: "eye-icon-container",
        onClick: n,
        children: w.jsx("img", { src: t ? Sf : Af }),
      }),
      w.jsx("div", {
        className: "search-container",
        children: w.jsxs("div", {
          className: "searchbox",
          children: [
            w.jsxs("h5", {
              children: [
                w.jsx("b", { children: "Ask me" }),
                " - e.g: GreAI/ What the best way to looks like symphatic?",
              ],
            }),
            w.jsx(Tu, { size: "xl", placeholder: "GreAI/" }),
          ],
        }),
      }),
    ],
  });
};
Jf.propTypes = {};
const qf = () => {
  const { isProgressOpen: e } = Eu((t) => t.greai);
  return w.jsx("div", {
    className: "content",
    children: w.jsxs("div", {
      className: "sub-content",
      children: [w.jsx(Jf, {}), !e && w.jsx(Zf, { progressData: v0 })],
    }),
  });
};
qf.propTypes = {};
const $f = (e) =>
  w.jsx("div", {
    className: "footer",
    children: w.jsx("h6", { children: "Powered by Arun Prabhu" }),
  });
$f.propTypes = {};
const bf = (e) =>
  w.jsxs("div", {
    className: "maincontainer",
    children: [w.jsx(s0, {}), w.jsx(qf, {}), w.jsx($f, {})],
  });
bf.propTypes = {};
const Gm = Cm({ reducer: { greai: Km } });
function Zm() {
  return w.jsx(U0, { store: Gm, children: w.jsx(bf, {}) });
}
Oi.createRoot(document.getElementById("root")).render(
  w.jsx(se.StrictMode, { children: w.jsx(Zm, {}) })
);
