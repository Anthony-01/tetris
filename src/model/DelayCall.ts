namespace model {
    export class DelayCall implements IRender{

        private _fun: Function;
        private _thisObj: any;
        private _ary: Array<any>;
        private _costTime: number = 0;

        public delayTime: number = 0;
        public repeat: number = 0;

        private constructor(fun: Function, thisObj: any, ary: Array<any> = null) {
            this._fun = fun;
            this._thisObj = thisObj;
            this._ary = ary;
        }

        public perReduce: number = 1;

        public static call(fun: Function, thisObj: any, delay: number, ary: Array<any> = null, repeat: number = 0 ) {
            let delayCall = new DelayCall(fun, thisObj, ary);
            delayCall.repeat = repeat;
            delayCall.delayTime = delay;
            RenderManager.Ins.register(delayCall);

            //如何设计等于0时候无限执行
            if (repeat == 0) {
                delayCall.perReduce = 0;
                delayCall.repeat = 1;
            }
            return delayCall;
        }

        private _pause: boolean = false;

        public stop() {
            this._pause = true;
        }

        public start() {
            this._pause = false;
        }

        onUpdate(interval: number) {
            if (this._pause) return;
            this._costTime += interval;
            if (this._costTime >= this.delayTime) {
                this._costTime = 0;
                if (this.repeat > 0) {
                    this.repeat -= this.perReduce;
                    this._fun && this._fun.call(this._thisObj, this._ary);
                } else {
                    this._fun = null;
                    this._thisObj = null;
                    this._ary = null;
                    RenderManager.Ins.unRegister(this);
                }
            }
        }
    }
}