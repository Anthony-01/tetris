namespace model {
    export interface IRender {
        onUpdate(interval: number): void;
    }
    export class RenderManager {
        private static _ins: RenderManager;

        public static get Ins(): RenderManager {
            if (this._ins == null) {
                this._ins = new RenderManager();
            }
            return this._ins;
        }

        public static destroy() {
            if (this._ins !== null) {
                this._ins.recovery();
                this._ins = null;
            }
        }

        private stage: egret.DisplayObjectContainer;

        private renderList: Array<IRender>;

        private pause: boolean;

        private constructor() {
            this.renderList = [];
            this.pause = false;
        }

        private _lastTime: number;

        public startRender(stage: egret.DisplayObjectContainer) {
            this.stage = stage;

            this._lastTime = egret.getTimer();

            this.stage.addEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
        }

        public changePause() {
            this.pause = !this.pause;
        }

        public register(render: IRender) {
            this.renderList.push(render);
        }

        public unRegister(render: IRender) {
            let index = this.renderList.indexOf(render);
            if (index === -1) {
                console.log("未注册的Render:", render);
                return;
            }
            this.renderList.splice(index, 1);
        }

        private onUpdate() {
            if (this.pause) return;
            let now = egret.getTimer();
            let interval = now - this._lastTime;
            this._lastTime = now;
            for (let render of this.renderList) {
                render.onUpdate(interval);
            }
        }

        private recovery() {
            this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.onUpdate, this);
        }
    }
}