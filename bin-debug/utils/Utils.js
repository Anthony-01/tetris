var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.cacluteFunTime = function (fun, thisObj) {
            var ary = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                ary[_i - 2] = arguments[_i];
            }
            var old = egret.getTimer();
            fun.call(thisObj, ary);
            var now = egret.getTimer();
            console.log("函数花费时间:", now - old);
        };
        return Utils;
    }());
    utils.Utils = Utils;
    __reflect(Utils.prototype, "utils.Utils");
})(utils || (utils = {}));
