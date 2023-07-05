if (typeof wcs == "undefined") {
    wcs = {}
}
if (typeof wcs_SerName == "undefined") {
    wcs_SerName = "wcs.naver.com"
}
if (typeof wcs_add == "undefined") {
    wcs_add = {}
}
if (typeof wcs.transport == "undefined") {
    wcs.transport = "beacon"
}
if (typeof wcs.ref == "undefined") {
    wcs.ref = ""
}
if (typeof wcs.bt == "undefined") {
    wcs.bt = -1
}
if (typeof wcs.norefresh == "undefined") {
    wcs.norefresh = 0
}
(function() {
    var j = {};
    var A = "0.8.7";
    var U = 0;
    var L = -1;
    var am = "NA_SA";
    var ab = "NA_SAC";
    var G = "NA_SAS";
    var c = "NA_MI";
    var E = "NA_CO";
    var K = "NVADID";
    var ai = "NA_DA";
    function aj() {
        return navigator.appName == "Microsoft Internet Explorer"
    }
    function ah() {
        return navigator.userAgent.indexOf("MAC") >= 0
    }
    function I() {
        s();
        B();
        ad();
        X();
        ao();
        ag();
        x();
        P();
        W();
        O();
        N()
    }
    function s() {
        j.os = navigator.platform ? navigator.platform : ""
    }
    function B() {
        var ap = "";
        ap = navigator.userLanguage ? navigator.userLanguage : navigator.language ? navigator.language : "";
        j.ln = ap
    }
    function ad() {
        var ar = "";
        if (window.screen && screen.width && screen.height) {
            ar = screen.width + "x" + screen.height
        } else {
            if (window.java || self.java) {
                var aq = window.java || self.java;
                var ap = aq.awt.Toolkit.getDefaultToolkit().getScreenSize();
                ar = ap.width + "x" + ap.height
            }
        }
        j.sr = ar
    }
    function X() {
        try {
            j.bw = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
            j.bh = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight
        } catch (ap) {}
    }
    function ao() {
        j.c = "";
        if (window.screen) {
            j.c = screen.colorDepth ? screen.colorDepth : screen.pixelDepth
        } else {
            if (window.java || self.java) {
                var ap = window.java || self.java;
                var aq = ap.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
                j.c = aq
            }
        }
    }
    function ag() {
        j.j = "";
        try {
            j.j = navigator.javaEnabled() ? "Y" : "N"
        } catch (ap) {}
    }
    function P() {
        if (navigator.cookieEnabled) {
            j.k = "Y"
        } else {
            j.k = "N"
        }
    }
    function W() {
        var ap = "";
        try {
            if (aj() && !ah() && document.body) {
                var ar = document.body.addBehavior("#default#clientCaps");
                if (document.body.connectionType) {
                    ap = document.body.connectionType
                }
                document.body.removeBehavior(ar)
            }
        } catch (aq) {}
        j.ct = ap
    }
    function x() {
        var ar = "1.0";
        try {
            if (String && String.prototype) {
                ar = "1.1";
                if (ar.search) {
                    ar = "1.2";
                    var aq = new Date()
                      , ay = 0;
                    if (aq.getUTCDate) {
                        ar = "1.3";
                        var au, ap = navigator.appVersion.indexOf("MSIE");
                        if (ap > 0) {
                            var az = parseInt((au = navigator.appVersion.substring(ap + 5)));
                            if (az > 3) {
                                az = parseFloat(au)
                            }
                        }
                        if (aj() && ah() && az >= 5) {
                            ar = "1.4"
                        }
                        if (ay.toFixed) {
                            ar = "1.5";
                            var ax = new Array();
                            if (ax.every) {
                                ar = "1.6";
                                au = 0;
                                var at = new Object();
                                var aw = function(aC) {
                                    var aA = 0;
                                    try {
                                        aA = new Iterator(aC)
                                    } catch (aB) {}
                                    return aA
                                };
                                au = aw(at);
                                if (au && au.next) {
                                    ar = "1.7"
                                }
                                if (ax.reduce) {
                                    ar = "1.8"
                                }
                            }
                        }
                    }
                }
            }
        } catch (av) {}
        j.jv = ar
    }
    function O() {
        j.cs = document.characterSet || document.charset || "-"
    }
    function N() {
        j.tl = encodeURIComponent(document.title.substring(0, 128))
    }
    function b(ap) {
        return ap.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
    function aa(aE, au) {
        var aD = "wcs_bt";
        var az = new Date();
        var aL = "";
        var aw = "/";
        var aG = -1;
        var ay, aq, aH, aM, aA;
        var av = {};
        if (window.location.hostname == "smartstore.naver.com" || window.location.hostname == "m.smartstore.naver.com" || window.location.hostname == "storefarm.naver.com" || window.location.hostname == "m.storefarm.naver.com") {
            ae(aD, "", aw);
            var aB = window.location.pathname.split("/");
            if (aB.length > 2) {
                aw = "/" + aB[1]
            } else {
                aw = window.location.pathname
            }
        }
        ay = m(aD, 1);
        var aI = null;
        for (aI in ay) {
            if (Object.prototype.hasOwnProperty.call(ay, aI)) {
                if (ay[aI].indexOf(":") >= 0) {
                    aq = ay[aI].split("|");
                    for (var aK in aq) {
                        if (Object.prototype.hasOwnProperty.call(aq, aK)) {
                            aH = aq[aK].split(":");
                            var aC = 0;
                            for (var ar in aH) {
                                if (Object.prototype.hasOwnProperty.call(aH, ar)) {
                                    if (aC == 0) {
                                        aM = aH[ar]
                                    } else {
                                        if (aC == 1) {
                                            aA = aH[ar]
                                        }
                                    }
                                    aC++
                                }
                            }
                            av[aM] = aA;
                            if (aM == au && aG < aA) {
                                aG = aA
                            }
                        }
                    }
                    if (wcs.bt > aG) {
                        aG = wcs.bt
                    }
                } else {
                    if (aG < ay[aI]) {
                        aG = ay[aI];
                        wcs.bt = aG;
                        av[au] = aG
                    }
                }
            }
        }
        az.setDate(aE.getDate() + 200 * 365);
        aL = az.toUTCString();
        var ax = [];
        var at = false;
        for (var aF in av) {
            if (aF == au) {
                ax.push({
                    id: aF,
                    time: parseInt(aE.getTime() / 1000).toString()
                });
                at = true
            } else {
                ax.push({
                    id: aF,
                    time: av[aF]
                })
            }
        }
        if (!at) {
            ax.push({
                id: au,
                time: parseInt(aE.getTime() / 1000).toString()
            })
        }
        ax.sort(function(aO, aN) {
            return aN.time - aO.time
        });
        ax = ax.slice(0, 10);
        var aJ = [];
        for (aI = 0; aI < ax.length; aI++) {
            var ap = ax[aI];
            aJ.push(ap.id + ":" + ap.time)
        }
        y(aD, aJ.join("|"), "", aL, aw);
        return aG
    }
    function m(ax, aw) {
        var ar = "";
        var aq = [];
        var az = document.cookie.split(";");
        var ay = az.length;
        var at = false;
        var au = "";
        var ap;
        for (var av = 0; av < ay; av++) {
            au = b(az[av]);
            if (au.indexOf(ax + "=") == 0) {
                ar = au.substring(au.indexOf("=") + 1);
                aq.push(ar);
                at = true;
                if (aw != 1) {
                    break
                }
            }
        }
        if (at && aw == 1) {
            ap = aq
        } else {
            if (at) {
                ap = ar
            } else {
                ap = false
            }
        }
        return ap
    }
    function y(au, at, ap, aq, ar) {
        document.cookie = au + "=" + at + (!aq ? "" : "; expires=" + aq) + "; path=" + (!ar ? "/" : ar) + (!ap ? "" : "; domain=" + ap)
    }
    function ae(au, ap, at) {
        var ar = new Date();
        ar.setDate(ar.getDate() - 1);
        var aq = ar.toUTCString();
        y(au, "", ap, aq, at)
    }
    var p;
    if (!p) {
        p = {}
    }
    (function() {
        function at(ay) {
            return ay < 10 ? "0" + ay : ay
        }
        if (typeof Date.prototype.toJSON !== "function") {
            Date.prototype.toJSON = function() {
                var ay = !(typeof this.valueOf == "undefined") && isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + at(this.getUTCMonth() + 1) + "-" + at(this.getUTCDate()) + "T" + at(this.getUTCHours()) + ":" + at(this.getUTCMinutes()) + ":" + at(this.getUTCSeconds()) + "Z" : null;
                return ay
            }
            ;
            if (!(typeof this.valueOf == "undefined")) {
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                    return this.valueOf()
                }
            }
        }
        var ax = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, aw, ap, au = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, ar;
        function aq(ay) {
            ax.lastIndex = 0;
            return ax.test(ay) ? '"' + ay.replace(ax, function(az) {
                var aA = au[az];
                return typeof aA === "string" ? aA : "\\u" + ("0000" + az.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + ay + '"'
        }
        function av(aF, aC) {
            var aA, az, aG, ay, aD = aw, aB, aE = aC[aF];
            if (aE && typeof aE === "object" && typeof aE.toJSON === "function") {
                aE = aE.toJSON(aF)
            }
            if (typeof ar === "function") {
                aE = ar.call(aC, aF, aE)
            }
            switch (typeof aE) {
            case "string":
                return aq(aE);
            case "number":
                return isFinite(aE) ? String(aE) : "null";
            case "boolean":
            case "null":
                return String(aE);
            case "object":
                if (!aE) {
                    return "null"
                }
                aw += ap;
                aB = [];
                if (Object.prototype.toString.apply(aE) === "[object Array]") {
                    ay = aE.length;
                    for (aA = 0; aA < ay; aA += 1) {
                        aB[aA] = av(aA, aE) || "null"
                    }
                    aG = aB.length === 0 ? "[]" : aw ? "[\n" + aw + aB.join(",\n" + aw) + "\n" + aD + "]" : "[" + aB.join(",") + "]";
                    aw = aD;
                    return aG
                }
                if (ar && typeof ar === "object") {
                    ay = ar.length;
                    for (aA = 0; aA < ay; aA += 1) {
                        if (typeof ar[aA] === "string") {
                            az = ar[aA];
                            aG = av(az, aE);
                            if (aG) {
                                aB.push(aq(az) + (aw ? ": " : ":") + aG)
                            }
                        }
                    }
                } else {
                    for (az in aE) {
                        if (Object.prototype.hasOwnProperty.call(aE, az)) {
                            aG = av(az, aE);
                            if (aG) {
                                aB.push(aq(az) + (aw ? ": " : ":") + aG)
                            }
                        }
                    }
                }
                aG = aB.length === 0 ? "{}" : aw ? "{\n" + aw + aB.join(",\n" + aw) + "\n" + aD + "}" : "{" + aB.join(",") + "}";
                aw = aD;
                return aG
            }
        }
        if (typeof p.stringify !== "function") {
            p.stringify = function(aB, az, aA) {
                var ay;
                aw = "";
                ap = "";
                if (typeof aA === "number") {
                    for (ay = 0; ay < aA; ay += 1) {
                        ap += " "
                    }
                } else {
                    if (typeof aA === "string") {
                        ap = aA
                    }
                }
                ar = az;
                if (az && typeof az !== "function" && (typeof az !== "object" || typeof az.length !== "number")) {
                    throw new Error("JSON.stringify")
                }
                return av("", {
                    "": aB
                })
            }
        }
    }
    )();
    var af = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(ar) {
            var ap = "";
            var az, ax, av, ay, aw, au, at;
            var aq = 0;
            ar = af._utf8_encode(ar);
            while (aq < ar.length) {
                az = ar.charCodeAt(aq++);
                ax = ar.charCodeAt(aq++);
                av = ar.charCodeAt(aq++);
                ay = az >> 2;
                aw = ((az & 3) << 4) | (ax >> 4);
                au = ((ax & 15) << 2) | (av >> 6);
                at = av & 63;
                if (isNaN(ax)) {
                    au = at = 64
                } else {
                    if (isNaN(av)) {
                        at = 64
                    }
                }
                ap = ap + this._keyStr.charAt(ay) + this._keyStr.charAt(aw) + this._keyStr.charAt(au) + this._keyStr.charAt(at)
            }
            return ap
        },
        decode: function(ar) {
            var ap = "";
            var az, ax, av;
            var ay, aw, au, at;
            var aq = 0;
            ar = ar.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (aq < ar.length) {
                ay = this._keyStr.indexOf(ar.charAt(aq++));
                aw = this._keyStr.indexOf(ar.charAt(aq++));
                au = this._keyStr.indexOf(ar.charAt(aq++));
                at = this._keyStr.indexOf(ar.charAt(aq++));
                az = (ay << 2) | (aw >> 4);
                ax = ((aw & 15) << 4) | (au >> 2);
                av = ((au & 3) << 6) | at;
                ap = ap + String.fromCharCode(az);
                if (au != 64) {
                    ap = ap + String.fromCharCode(ax)
                }
                if (at != 64) {
                    ap = ap + String.fromCharCode(av)
                }
            }
            ap = af._utf8_decode(ap);
            return ap
        },
        _utf8_encode: function(aq) {
            aq = aq.replace(/\r\n/g, "\n");
            var ap = "";
            for (var at = 0; at < aq.length; at++) {
                var ar = aq.charCodeAt(at);
                if (ar < 128) {
                    ap += String.fromCharCode(ar)
                } else {
                    if (ar > 127 && ar < 2048) {
                        ap += String.fromCharCode((ar >> 6) | 192);
                        ap += String.fromCharCode((ar & 63) | 128)
                    } else {
                        ap += String.fromCharCode((ar >> 12) | 224);
                        ap += String.fromCharCode(((ar >> 6) & 63) | 128);
                        ap += String.fromCharCode((ar & 63) | 128)
                    }
                }
            }
            return ap
        },
        _utf8_decode: function(ap) {
            var ar = "";
            var au = 0;
            var av = 0
              , at = 0
              , aq = 0;
            while (au < ap.length) {
                av = ap.charCodeAt(au);
                if (av < 128) {
                    ar += String.fromCharCode(av);
                    au++
                } else {
                    if (av > 191 && av < 224) {
                        at = ap.charCodeAt(au + 1);
                        ar += String.fromCharCode(((av & 31) << 6) | (at & 63));
                        au += 2
                    } else {
                        at = ap.charCodeAt(au + 1);
                        aq = ap.charCodeAt(au + 2);
                        ar += String.fromCharCode(((av & 15) << 12) | ((at & 63) << 6) | (aq & 63));
                        au += 3
                    }
                }
            }
            return ar
        }
    };
    function v(ap) {
        var aq = new Image(1,1);
        aq.src = ap;
        aq.onload = function() {
            aq.onload = null;
            return
        }
        ;
        aq.onerror = function() {
            aq.onerror = null;
            return
        }
        ;
        return true
    }
    function an(ap) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            an = function(aq) {
                return typeof aq
            }
        } else {
            an = function(aq) {
                return aq && typeof Symbol === "function" && aq.constructor === Symbol && aq !== Symbol.prototype ? "symbol" : typeof aq
            }
        }
        return an(ap)
    }
    var w = function w(ap) {
        return typeof ap === "string"
    };
    var e = function e(ap) {
        return ap instanceof Blob
    };
    var ak = document.createElement("div");
    ak.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
    var u = ak.getElementsByTagName("i").length === 1;
    if (!u) {
        a.call((typeof window === "undefined" ? "undefined" : an(window)) === "object" ? window : undefined || {})
    }
    function a() {
        if (C.call(this)) {
            return
        }
        if (!("navigator"in this)) {
            this.navigator = {}
        }
        this.navigator.sendBeacon = n.bind(this)
    }
    function n(aq, au) {
        var at = this.event && this.event.type;
        var ar = at === "unload" || at === "beforeunload";
        var av = "XMLHttpRequest"in this ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        av.open("POST", aq, !ar);
        av.withCredentials = true;
        av.setRequestHeader("Accept", "*/*");
        if (w(au)) {
            av.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            av.responseType = "text/plain"
        } else {
            if (e(au) && au.type) {
                av.setRequestHeader("Content-Type", au.type)
            }
        }
        try {
            av.send(au)
        } catch (ap) {
            return false
        }
        return true
    }
    function C() {
        return "navigator"in this && "sendBeacon"in this.navigator
    }
    function M(au) {
        var ar = new Date();
        var at = {};
        at.wa = wcs_add.wa || "unknown";
        at.u = window.location.href;
        at.e = document.referrer || "";
        if (U < 1) {
            I()
        }
        U++;
        at.bt = aa(ar, at.wa);
        for (index in au) {
            var aq = typeof index;
            var ap = typeof au[index];
            if (aq === "string" && index.length >= 3 && ap !== "function") {
                if (ap === "string") {
                    at[index] = au[index]
                } else {
                    if (ap == "object") {
                        at[index] = p.stringify(au[index])
                    }
                }
            }
        }
        for (index in j) {
            if (typeof j[index] !== "function") {
                at[index] = j[index]
            }
        }
        if (wcs.ref) {
            at.ur = wcs.ref
        }
        at.vs = A;
        at.nt = ar.getTime();
        return at
    }
    function R(aq, ar) {
        if (aq == "" || ar == "" || typeof aq == "undefined" || typeof ar == "undefined") {
            return null
        }
        var ap = {};
        ap.wa = wcs_add.wa || "unknown";
        ap.u = window.location.href;
        ap.t = "event";
        ap.e_cat = aq;
        ap.e_act = ar;
        ap.nt = new Date().getTime();
        return ap
    }
    function d(ap) {
        var aq = "https://" + wcs_SerName + "/b";
        return navigator.sendBeacon(aq, p.stringify(ap))
    }
    function g(aw, av) {
        var aq = new Date();
        var ap = [];
        var au;
        var ax = "unknown";
        ap.push("https://" + av + "/m?");
        ap.push("u=" + encodeURIComponent(window.location.href) + "&e=" + (document.referrer ? encodeURIComponent(document.referrer) : ""));
        for (au in wcs_add) {
            if (typeof wcs_add[au] != "function" && (au == "i" || au == "wa")) {
                ap.push("&" + au + "=" + encodeURIComponent(wcs_add[au]));
                if (au == "wa") {
                    ax = wcs_add[au]
                }
            }
        }
        if (U < 1) {
            I()
        }
        L = aa(aq, ax);
        ap.push("&bt=" + L);
        for (au in aw) {
            var at = typeof au;
            var ar = typeof aw[au];
            if ((at == "string" && au.length >= 3 && ar != "function") || au == "qy") {
                if (ar == "string") {
                    ap.push("&" + au + "=" + encodeURIComponent(aw[au]))
                } else {
                    if (ar == "object") {
                        ap.push("&" + au + "=" + encodeURIComponent(p.stringify(aw[au])))
                    }
                }
            }
        }
        for (au in j) {
            if (typeof j[au] != "function") {
                ap.push("&" + au + "=" + encodeURIComponent(j[au]))
            }
        }
        if (wcs.ref != "") {
            ap.push("&ur=" + encodeURIComponent(wcs.ref))
        }
        ap.push("&vs=" + A + "&nt=" + aq.getTime());
        U++;
        return ap.join("")
    }
    wcs.pageview = function(ap) {
        if (typeof wcs_add.cnv2 != "undefined") {
            ap.cnv2 = wcs_add.cnv2
        }
        if (wcs.transport === "beacon" && navigator.sendBeacon) {
            return d(M(ap))
        } else {
            return wcs.pageviewOld(ap)
        }
    }
    ;
    wcs.event = function(ap, aq) {
        if (wcs.transport === "beacon" && navigator.sendBeacon) {
            var ar = R(ap, aq);
            if (ar) {
                return d(ar)
            } else {
                return
            }
        } else {
            return wcs.eventOld(ap, aq)
        }
    }
    ;
    wcs.pageviewOld = function(aq) {
        var ap = g(aq, wcs_SerName);
        ap += "&EOU";
        v(ap)
    }
    ;
    wcs.eventOld = function(ap, ar) {
        var at = [];
        var aq;
        if (ap == "" || ar == "" || typeof ap == "undefined" || typeof ar == "undefined") {
            return
        }
        at.push("https://" + wcs_SerName + "/m?");
        at.push("u=" + encodeURIComponent(window.location.href));
        at.push("&t=event");
        for (aq in wcs_add) {
            if (typeof wcs_add[aq] != "function" && (aq == "i" || aq == "wa")) {
                at.push("&" + aq + "=" + encodeURIComponent(wcs_add[aq]))
            }
        }
        at.push("&e_cat=" + encodeURIComponent(ap));
        at.push("&e_act=" + encodeURIComponent(ar));
        at.push("&nt=" + new Date().getTime());
        v(at.join(""));
        return true
    }
    ;
    function o() {
        if (window.location.search.length <= 0 || window.location.search.split("?").length < 2) {
            return false
        }
        var aq = window.location.search.split("?")[1].split("&");
        var at = aq.length;
        var ap;
        for (var ar = 0; ar < at; ar++) {
            ap = aq[ar].split("=");
            if (ap[0] == "NaPm" && b(ap[1]) != "") {
                return ap[1]
            }
        }
        return false
    }
    function V(ap) {
        var ar = "/";
        var aq = ap.indexOf("/");
        if (aq > 0) {
            ar = ap.substring(aq);
            ap = ap.substring(0, aq);
            return [ap, ar]
        }
        return false
    }
    function D(ax, az, aw, ay) {
        var at = ["ci=" + az, "t=" + Math.round(aw.getTime() / 1000), "u=" + encodeURIComponent(window.location.href)];
        var au = af.encode(at.join("|"));
        var ap = new Date();
        ap.setDate(aw.getDate() + 20);
        var aq = ap.toUTCString();
        y(am, au, ax, aq, ay);
        y(G, "1", ax, 0, ay);
        ap.setDate(aw.getDate() + 30);
        var ar = ap.toUTCString();
        var av = (m(K) || "").split("~");
        av[0] = az;
        y(K, av.join("~"), ax, ar, ay)
    }
    function l(aw, ay, av, ax) {
        var ar = ["ci=" + ay, "t=" + Math.round(av.getTime() / 1000), "u=" + encodeURIComponent(window.location.href)];
        var at = af.encode(ar.join("|"));
        var ap = new Date();
        ap.setDate(av.getDate() + 30);
        var aq = ap.toUTCString();
        y(ai, at, aw, aq, ax);
        var au = (m(K) || "").split("~");
        au[1] = ay;
        y(K, au.join("~"), aw, aq, ax)
    }
    function i(aq) {
        if (!aq) {
            wcs.norefresh++;
            return false
        }
        if (wcs.norefresh > 0) {
            return false
        }
        aq = af.decode(aq);
        var au = aq.split("|");
        var at = au.length;
        var av;
        var ap = 0;
        for (var ar = 0; ar < at; ar++) {
            av = au[ar].split("=");
            if (av[0] == "u") {
                if (decodeURIComponent(av[1]) == window.location.href) {
                    ap++
                }
            } else {
                if (av[0] == "r") {
                    if (decodeURIComponent(av[1]) == document.referrer) {
                        ap++
                    }
                }
            }
        }
        if (ap == 2) {
            return true
        }
        wcs.norefresh++;
        return false
    }
    function ac(ap) {
        var at = new Date();
        var aw = "/";
        if (!ap) {
            ap = ""
        } else {
            var av = V(ap);
            if (av != false) {
                ap = av[0];
                aw = av[1]
            }
            if (window.location.hostname.indexOf(ap) < 0) {
                ap = ""
            }
        }
        if (window.location.search.length <= 0 || window.location.search.split("?").length < 2) {
            return false
        }
        var ar = o();
        var au;
        if (ar) {
            au = F(ar);
            if (au && au.ci && au.tr) {
                var aq = {
                    sa: true,
                    cd: true,
                    pla: true,
                    pla_myc: true,
                    pla_myz: true,
                    pla_myr: true,
                    plab: true,
                    plab_myc: true,
                    plab_myz: true,
                    plab_myr: true,
                    plabc: true,
                    plabc_myc: true,
                    plabc_myz: true,
                    plabc_myr: true,
                    plac: true,
                    plac_myc: true,
                    plac_myz: true,
                    plac_myr: true,
                    sa2: true,
                    sa2_myc: true,
                    sa2_myz: true,
                    sa2_myr: true,
                    pwrcnt: true,
                    pwrcnt_myc: true,
                    pwrcnt_myz: true,
                    pwrcnt_myr: true,
                    brnd: true,
                    brzp: true,
                    brzp_myc: true,
                    brzp_myz: true,
                    brzp_myr: true,
                    brzl: true,
                    brzl_myc: true,
                    brzl_myz: true,
                    brzl_myr: true,
                    brzpb: true,
                    brzlb: true,
                    news: true
                };
                if (aq[au.tr]) {
                    D(ap, au.ci, at, aw)
                }
                if (au.tr === "gfa") {
                    l(ap, au.ci, at, aw)
                }
            }
        }
    }
    function H(aF, at) {
        var aG = new Date();
        var aH = [];
        var ax = m(am);
        if (ax == false) {
            ax = ""
        }
        var ap = m(ab);
        if (i(ap)) {
            return ""
        }
        var av = "0";
        if (m(G) == "1") {
            av = "1"
        }
        var aq = af.decode(ax).split("|");
        var aI = aq.length;
        var aL;
        var aJ = "";
        var aw = "";
        for (var aC = 0; aC < aI; aC++) {
            aL = aq[aC].split("=");
            if (aL[0] == "ci") {
                aH.push("ci=" + aL[1])
            } else {
                if (aL[0] == "t") {
                    aH.push("t=" + aL[1]);
                    var aK = parseInt(aL[1]);
                    var au = Math.round(aG.getTime() / 1000);
                    var ay = au - aK;
                    if (ay < 60 * 30 && av == "1") {
                        aw = "D"
                    } else {
                        if (ay < 60 * 60 * 24 * 15) {
                            aw = "I"
                        }
                    }
                    if (ay < 60 * 60 * 24 * 7) {
                        aw += "C"
                    }
                    aH.push("isDirect=" + aw)
                } else {
                    if (aL[0] == "u") {
                        aH.push("u=" + aL[1])
                    } else {
                        if (aL[0] == "r") {
                            aH.push("r=" + aL[1])
                        }
                    }
                }
            }
        }
        aH.push("cnvType=" + aF);
        aH.push("cnvValue=" + at);
        aJ = aH.join("|");
        y(ab, af.encode("u=" + encodeURIComponent(window.location.href) + "|r=" + encodeURIComponent(document.referrer)), "", 0);
        var ar = m(ai);
        if (ar == false) {
            ar = ""
        }
        var az = [];
        var aE = af.decode(ar).split("|");
        var aD;
        var aA = "";
        for (var aB = 0; aB < aE.length; aB++) {
            aD = aE[aB].split("=");
            if (aD[0] == "ci") {
                az.push("ci=" + aD[1])
            } else {
                if (aD[0] == "t") {
                    az.push("t=" + aD[1])
                } else {
                    if (aD[0] == "u") {
                        az.push("u=" + aD[1])
                    }
                }
            }
        }
        if (az.length > 0) {
            az.push("cnvType=" + aF);
            az.push("cnvValue=" + at);
            aA = az.join("|");
            wcs_add.cnv2 = aA
        }
        return aJ
    }
    wcs.mileageWhitelist = [];
    function r() {
        var aq = window.location.search ? window.location.search.split("?")[1].split("&") : "";
        var at = aq.length;
        var ap;
        var au = "Ncisy";
        for (var ar = 0; ar < at; ar++) {
            ap = aq[ar].split("=");
            if (ap[0] == au) {
                return ap[1]
            }
        }
        return false
    }
    function Z() {
        var ap = document.referrer ? document.referrer : wcs.ref;
        if (ap.indexOf("naver.com") > 0) {
            return true
        }
        return false
    }
    function T(ap) {
        var at = document.referrer ? document.referrer : wcs.ref;
        if (!at) {
            return true
        }
        var ar;
        if (ap == "m") {
            ar = wcs.mileageWhitelist
        } else {
            if (ap == "c") {
                ar = wcs.checkoutWhitelist
            }
        }
        var au = ar.length;
        ar[au] = "naver.com";
        ar[au + 1] = window.location.hostname;
        for (var aq = 0; aq < au + 2; aq++) {
            if (at.indexOf(ar[aq]) >= 0) {
                return true
            }
        }
        return false
    }
    function Q(ap, aq, at) {
        var ar;
        ar = parseInt(aq, at);
        if (at == 36) {
            ar = ar / 1000
        }
        if (Math.round(ap.getTime() / 1000) > ar) {
            return true
        }
        return false
    }
    function Y() {
        var ap = m(c);
        return ap
    }
    function z(ap, ar, at) {
        var au = af.encode(ar);
        var aq = 0;
        y(c, au, ap, aq, at)
    }
    function J(aq, ax) {
        var ap, au, aw, av, at;
        if (!aq) {
            for (at = 0; at < window.location.hostname.length; at++) {
                if ((window.location.hostname.charCodeAt(at) > 12592 && window.location.hostname.charCodeAt(at) < 12687) || (window.location.hostname.charCodeAt(at) >= 44032 && window.location.hostname.charCodeAt(at) <= 55203)) {
                    ae(c, "", ax);
                    return true
                }
            }
            aq = window.location.hostname.toLowerCase()
        }
        ap = aq.split(".");
        au = ap.length;
        for (at = 0; at < au - 1; at++) {
            aw = "";
            av = [];
            for (var ar = at; ar < au; ar++) {
                av.push(ap[ar])
            }
            aw = av.join(".");
            ae(c, aw, ax)
        }
        return true
    }
    function k(ap) {
        return decodeURIComponent(ap.replace(/\+/g, " "))
    }
    function F(av) {
        var ap, au, aq;
        var at = {};
        av = k(av);
        if (av.length > 0) {
            ap = av.split("|");
            au = ap.length;
            for (var ar = 0; ar < au; ar++) {
                aq = ap[ar].split("=");
                at[aq[0]] = aq[1]
            }
        }
        return at
    }
    function f(ap) {
        if (ap !== undefined && ap !== "") {
            return true
        } else {
            return false
        }
    }
    function t(aA) {
        var aw = new Date();
        var at = r();
        var ax = o();
        var aq, av, ar, au;
        var ap = ""
          , aB = ""
          , az = 0;
        var aC = "/";
        if (!aA) {
            aA = ""
        } else {
            var ay = V(aA);
            if (ay != false) {
                aA = ay[0];
                aC = ay[1]
            }
            if (window.location.hostname.indexOf(aA) < 0) {
                aA = ""
            }
        }
        if ((ax || at) && Z()) {
            if (ax) {
                av = F(ax);
                if (av.et) {
                    ap = av.et;
                    az = 36
                }
                au = encodeURIComponent("tr=" + av.tr + "|et=" + av.et + "|ba=" + av.ba + "|aa=" + av.aa + "|ci=" + av.ci + "|ct=" + av.ct + "|hk=" + av.hk)
            } else {
                if (at) {
                    aq = F(at);
                    if (aq.e) {
                        ap = aq.e;
                        az = 10
                    }
                }
            }
            if (ap) {
                if (!Q(aw, ap, az)) {
                    if (ax) {
                        if (typeof av != "undefined" && f(av.tr) && f(av.et) && f(av.ba) && f(av.aa) && f(av.ci) && f(av.ct) && f(av.hk)) {
                            z(aA, au, aC)
                        }
                    } else {
                        if (at) {
                            z(aA, at, aC)
                        }
                    }
                } else {
                    J(aA, aC)
                }
            }
        } else {
            aB = Y();
            if (aB) {
                aB = af.decode(aB);
                if (T("m")) {
                    ar = F(aB);
                    if (ar.v && ar.e) {
                        ap = ar.e;
                        az = 10
                    } else {
                        if (ar.et) {
                            ap = ar.et;
                            az = 36
                        }
                    }
                    if (Q(aw, ap, az)) {
                        J(aA, aC)
                    }
                } else {
                    J(aA, aC)
                }
            }
        }
    }
    wcs.isCPA = false;
    wcs.CPAOrder = function() {
        return true
    }
    ;
    wcs.checkoutWhitelist = [];
    function h(ap, at, ar) {
        var aq = 0;
        y(E, at, ap, aq, ar)
    }
    function S() {
        var ap = m(E);
        return ap
    }
    function al(ap, aq) {
        ae(E, ap, aq)
    }
    function q(ap) {
        var av = "";
        var au = "/";
        if (!ap) {
            ap = ""
        } else {
            var at = V(ap);
            if (at != false) {
                ap = at[0];
                au = at[1]
            }
            if (window.location.hostname.indexOf(ap) < 0) {
                ap = ""
            }
        }
        var aq = o();
        var ar = {};
        if (aq) {
            ar = F(aq);
            av = encodeURIComponent("ct=" + ar.ct + "|ci=" + ar.ci + "|tr=" + ar.tr + "|hk=" + ar.hk + "|trx=" + ar.trx);
            h(ap, av, au)
        } else {
            av = S();
            if (av && !T("c")) {
                al(ap, au)
            }
        }
    }
    wcs.inflow = function(ap) {
        ac(ap);
        t(ap);
        q(ap)
    }
    ;
    wcs.cnv = H;
    wcs.getBaseAccumRate = function() {
        var aq = Y();
        var ap = {};
        if (aq) {
            aq = af.decode(aq);
            ap = F(aq);
            if (ap.ba) {
                return ap.ba
            }
        }
        return 0
    }
    ;
    wcs.getAddAccumRate = function() {
        var aq = Y();
        var ap = {};
        if (aq) {
            aq = af.decode(aq);
            ap = F(aq);
            if (ap.aa) {
                return ap.aa
            }
        }
        return 0
    }
    ;
    wcs.getMileageInfo = function() {
        var ap = Y();
        if (ap) {
            ap = af.decode(ap);
            return ap
        }
        return false
    }
    ;
    wcs.getClickTime = function() {
        var ap = S();
        if (ap) {
            var aq = F(ap);
            if (aq.ct) {
                return aq.ct
            }
        }
        return false
    }
    ;
    wcs.getClickID = function() {
        var ap = S();
        if (ap) {
            var aq = F(ap);
            if (aq.ci) {
                return aq.ci
            }
        }
        return false
    }
    ;
    wcs.getInflowRoute = function() {
        var ap = S();
        if (ap) {
            var aq = F(ap);
            if (aq.tr) {
                return aq.tr
            }
        }
        return false
    }
    ;
    wcs.setReferer = function(ap) {
        wcs.ref = ap
    }
}
)();
window.wcs_do = wcs.pageview;
