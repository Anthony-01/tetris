namespace utils {
    export class Utils {
        public static cacluteFunTime(fun: Function, thisObj: any, ...ary) {
            let old = egret.getTimer();
            fun.call(thisObj, ary);
            let now = egret.getTimer();
            console.log("函数花费时间:", now - old);
        }
    }
}