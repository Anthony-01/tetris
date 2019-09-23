var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var view;
(function (view) {
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView(skin) {
            var _this = _super.call(this) || this;
            console.log("GameView初始化id:", GameView._id++);
            //设置皮肤
            _this._initSkinName = skin;
            _this.addEventListener(egret.Event.COMPLETE, _this.complete, _this);
            return _this;
        }
        GameView.getIns = function () {
            if (this._ins == null) {
                this._ins = new GameView(skins.ProgressBarSkin);
            }
            return this._ins;
        };
        GameView.recovery = function () {
            this._ins.deallocate();
            this._ins = null;
        };
        GameView.prototype.init = function () {
            var self = this;
            return new Promise(function (resolve, reject) {
                if (!self._initSkinName) {
                    reject("初始化UI失败，皮肤名未赋值！");
                    return;
                }
                self._onOverCall = resolve;
                self.once(egret.Event.COMPLETE, function () {
                    try {
                        self.onInit();
                    }
                    catch (err) {
                        reject("初始化UI失败，onInit出错：" + err);
                    }
                    self.onInitOver();
                }, self);
                self.skinName = self._initSkinName;
            });
        };
        GameView.prototype.onInitOver = function () {
            this._onOverCall();
            this._onOverCall = null;
        };
        //游戏组件初始化
        GameView.prototype.onInit = function () {
            console.log("游戏组件初始化");
            console.log(this.thumb);
        };
        GameView.prototype.complete = function () {
            this.removeEventListener(egret.Event.COMPLETE, this.complete, this);
            console.log("exml文件加载完毕");
            console.log(this.thumb);
        };
        GameView.prototype.deallocate = function () {
            //解绑所有事件
            //移除所有组件
            this.removeChildren();
        };
        GameView._id = 1;
        return GameView;
    }(eui.Component));
    view.GameView = GameView;
    __reflect(GameView.prototype, "view.GameView");
})(view || (view = {}));
