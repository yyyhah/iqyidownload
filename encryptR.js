function a(e, t) {
    e[t >> 5] |= 128 << t % 32,
    e[14 + (t + 64 >>> 9 << 4)] = t;
    for (var i = 1732584193, a = -271733879, n = -1732584194, u = 271733878, c = 0; c < e.length; c += 16) {
        var f = i
          , p = a
          , h = n
          , _ = u;
        i = r(i, a, n, u, e[c + 0], 7, -680876936),
        u = r(u, i, a, n, e[c + 1], 12, -389564586),
        n = r(n, u, i, a, e[c + 2], 17, 606105819),
        a = r(a, n, u, i, e[c + 3], 22, -1044525330),
        i = r(i, a, n, u, e[c + 4], 7, -176418897),
        u = r(u, i, a, n, e[c + 5], 12, 1200080426),
        n = r(n, u, i, a, e[c + 6], 17, -1473231341),
        a = r(a, n, u, i, e[c + 7], 22, -45705983),
        i = r(i, a, n, u, e[c + 8], 7, 1770035416),
        u = r(u, i, a, n, e[c + 9], 12, -1958414417),
        n = r(n, u, i, a, e[c + 10], 17, -42063),
        a = r(a, n, u, i, e[c + 11], 22, -1990404162),
        i = r(i, a, n, u, e[c + 12], 7, 1804603682),
        u = r(u, i, a, n, e[c + 13], 12, -40341101),
        n = r(n, u, i, a, e[c + 14], 17, -1502002290),
        a = r(a, n, u, i, e[c + 15], 22, 1236535329),
        i = o(i, a, n, u, e[c + 1], 5, -165796510),
        u = o(u, i, a, n, e[c + 6], 9, -1069501632),
        n = o(n, u, i, a, e[c + 11], 14, 643717713),
        a = o(a, n, u, i, e[c + 0], 20, -373897302),
        i = o(i, a, n, u, e[c + 5], 5, -701558691),
        u = o(u, i, a, n, e[c + 10], 9, 38016083),
        n = o(n, u, i, a, e[c + 15], 14, -660478335),
        a = o(a, n, u, i, e[c + 4], 20, -405537848),
        i = o(i, a, n, u, e[c + 9], 5, 568446438),
        u = o(u, i, a, n, e[c + 14], 9, -1019803690),
        n = o(n, u, i, a, e[c + 3], 14, -187363961),
        a = o(a, n, u, i, e[c + 8], 20, 1163531501),
        i = o(i, a, n, u, e[c + 13], 5, -1444681467),
        u = o(u, i, a, n, e[c + 2], 9, -51403784),
        n = o(n, u, i, a, e[c + 7], 14, 1735328473),
        a = o(a, n, u, i, e[c + 12], 20, -1926607734),
        i = s(i, a, n, u, e[c + 5], 4, -378558),
        u = s(u, i, a, n, e[c + 8], 11, -2022574463),
        n = s(n, u, i, a, e[c + 11], 16, 1839030562),
        a = s(a, n, u, i, e[c + 14], 23, -35309556),
        i = s(i, a, n, u, e[c + 1], 4, -1530992060),
        u = s(u, i, a, n, e[c + 4], 11, 1272893353),
        n = s(n, u, i, a, e[c + 7], 16, -155497632),
        a = s(a, n, u, i, e[c + 10], 23, -1094730640),
        i = s(i, a, n, u, e[c + 13], 4, 681279174),
        u = s(u, i, a, n, e[c + 0], 11, -358537222),
        n = s(n, u, i, a, e[c + 3], 16, -722521979),
        a = s(a, n, u, i, e[c + 6], 23, 76029189),
        i = s(i, a, n, u, e[c + 9], 4, -640364487),
        u = s(u, i, a, n, e[c + 12], 11, -421815835),
        n = s(n, u, i, a, e[c + 15], 16, 530742520),
        a = s(a, n, u, i, e[c + 2], 23, -995338651),
        i = d(i, a, n, u, e[c + 0], 6, -198630844),
        u = d(u, i, a, n, e[c + 7], 10, 1126891415),
        n = d(n, u, i, a, e[c + 14], 15, -1416354905),
        a = d(a, n, u, i, e[c + 5], 21, -57434055),
        i = d(i, a, n, u, e[c + 12], 6, 1700485571),
        u = d(u, i, a, n, e[c + 3], 10, -1894986606),
        n = d(n, u, i, a, e[c + 10], 15, -1051523),
        a = d(a, n, u, i, e[c + 1], 21, -2054922799),
        i = d(i, a, n, u, e[c + 8], 6, 1873313359),
        u = d(u, i, a, n, e[c + 15], 10, -30611744),
        n = d(n, u, i, a, e[c + 6], 15, -1560198380),
        a = d(a, n, u, i, e[c + 13], 21, 1309151649),
        i = d(i, a, n, u, e[c + 4], 6, -145523070),
        u = d(u, i, a, n, e[c + 11], 10, -1120210379),
        n = d(n, u, i, a, e[c + 2], 15, 718787259),
        a = d(a, n, u, i, e[c + 9], 21, -343485551),
        i = l(i, f),
        a = l(a, p),
        n = l(n, h),
        u = l(u, _)
    }
    return Array(i, a, n, u)
}
function n(e, t, i, a, n, r) {
    return l(u(l(l(t, e), l(a, r)), n), i)
}
function r(e, t, i, a, r, o, s) {
    return n(t & i | ~t & a, e, t, r, o, s)
}
function o(e, t, i, a, r, o, s) {
    return n(t & a | i & ~a, e, t, r, o, s)
}
function s(e, t, i, a, r, o, s) {
    return n(t ^ i ^ a, e, t, r, o, s)
}
function d(e, t, i, a, r, o, s) {
    return n(i ^ (t | ~a), e, t, r, o, s)
}
function l(e, t) {
    var i = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
}
function u(e, t) {
    return e << t | e >>> 32 - t
}
function c(e) {
    var p = 0, h = 8;
    for (var t = Array(), i = (1 << h) - 1, a = 0; a < e.length * h; a += h)
        t[a >> 5] |= (e.charCodeAt(a / h) & i) << a % 32;
    return t
}
function f(e) {
    var p = 0, h = 8;
    for (var t = p ? "0123456789ABCDEF" : "0123456789abcdef", i = "", a = 0; a < 4 * e.length; a++)
        i += t.charAt(e[a >> 2] >> a % 4 * 8 + 4 & 15) + t.charAt(e[a >> 2] >> a % 4 * 8 & 15);
    return i
}
function R(e){
    var h = 8;
    return f(a(c(e), e.length * h))
}
function HGet(){
    var o = '-1';
    if ("-1" === o)
        try {
            o = r.get("__dfp")
        } catch (e) {
            o = ""
        }
    if ("" !== o) {
        var e = o.split("@")
          , t = (new Date).getTime();
        3 == e.length && Number(e[2]) <= t && t <= Number(e[1]) && (o = e[0])
    }
    return o
}
function getTime(){
    return (new Date).getTime();
}
function getKey(S,L){
    return R(R("")+S+L);
}
var cc = {
            1: {
                3: !0,
                37: !1,
                40: !0,
                42: !0,
                48: !0
            },
            2: {},
            4: {
                3: !1,
                5: !1
            }
        }
function getM3U8FT1(){
    var e = [];
    cc[1][37] = !0,
    cc[1][38] = !0;
    console.log(cc);
    for (var t = 1; t <= 64; t++)
        e.push(cc[1][t] ? 1 : 0);
    return parseInt(e.reverse().join(""), 2)
}
function getMP4FT1(){
    var e = [];
    cc[1][45] = !0;
    console.log(cc);
    for (var t = 1; t <= 64; t++)
        e.push(cc[1][t] ? 1 : 0);
    return parseInt(e.reverse().join(""), 2)
}
function getFT1(){
    console.log(cc);
    for (var e = [], t = 1; t <= 64; t++)
        e.push(cc[1][t] ? 1 : 0);
    return parseInt(e.reverse().join(""), 2)
}

function getFT4(){
    console.log(cc);
    for (var e = [], t = 1; t <= 64; t++)
        e.push(cc[4][t] ? 1 : 0);
    return parseInt(e.reverse().join(""), 2)
}

function getK_ft(prio){
    var k_ft1,k_ft4;
    -1 != prio.indexOf("m3u8") ? k_ft1 = getM3U8FT1() : -1 != prio.indexOf("mp4") ? k_ft1 = getMP4FT1() : (k_ft1 = getFT1(),
                                k_ft4 = getFT4())
    return [k_ft1,4];
}
function getUrl(e){
    var t = []
    var k = ["tvid","bid","vid","src","vt","rs","uid","ori","ps","tm","qd_v","k_uid","pt","d","s","lid","cf","ct","authKey","k_tag","ost","ppt","dfp","locale","prio","pck","k_err_retries","k_ft1","k_ft4","bop"]
    for (var i in k)
        t[t.length] = encodeURIComponent(k[i]) + "=" + encodeURIComponent(e[k[i]]);
    return t.join("&").replace(/%20/g, "+")
}
        // i.exports = function(e) {
        //     return f(a(c(e), e.length * h))
        // }
