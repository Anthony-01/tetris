var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var control;
(function (control) {
    var GameControl = (function () {
        function GameControl() {
        }
        GameControl.prototype.runGame = function () {
        };
        return GameControl;
    }());
    control.GameControl = GameControl;
    __reflect(GameControl.prototype, "control.GameControl");
})(control || (control = {}));
