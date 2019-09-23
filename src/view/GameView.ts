namespace view {


    export class GameView extends eui.Component{

        private static _ins: GameView;

        private static _id: number = 1;

        public static getIns(): GameView {
            if (this._ins == null) {
                this._ins = new GameView(skins.ProgressBarSkin);
            }
            return this._ins;
        }

        public static recovery() {
            this._ins.deallocate();
            this._ins = null;
        }

        private _onOverCall: Function;
        private _initSkinName: any;


        private constructor(skin: any) {
            super();

            console.log("GameView初始化id:", GameView._id++);

            //设置皮肤
            this._initSkinName = skin;
            this.addEventListener(egret.Event.COMPLETE, this.complete, this);
        }

        public init(): Promise<any> {
            let self = this;
            return new Promise((resolve, reject) => {
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
            })
        }

        private onInitOver() {
            this._onOverCall();
            this._onOverCall = null;
        }

        public thumb: any;
        //游戏组件初始化
        private onInit() {
            console.log("游戏组件初始化");
            console.log(this.thumb);
        }

        private complete() {
            this.removeEventListener(egret.Event.COMPLETE, this.complete, this);

            console.log("exml文件加载完毕");
            console.log(this.thumb);
        }

        public deallocate() {
            //解绑所有事件

            //移除所有组件
            this.removeChildren();
        }
    }
}