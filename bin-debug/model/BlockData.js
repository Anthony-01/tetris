var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var model;
(function (model) {
    //类型枚举
    var EBlockShape;
    (function (EBlockShape) {
        EBlockShape[EBlockShape["noShape"] = 0] = "noShape";
        EBlockShape[EBlockShape["zShape"] = 1] = "zShape";
        EBlockShape[EBlockShape["sShape"] = 2] = "sShape";
        EBlockShape[EBlockShape["lineShape"] = 3] = "lineShape";
        EBlockShape[EBlockShape["tShape"] = 4] = "tShape";
        EBlockShape[EBlockShape["squareShape"] = 5] = "squareShape";
        EBlockShape[EBlockShape["lShape"] = 6] = "lShape";
        EBlockShape[EBlockShape["mirroredLShape"] = 7] = "mirroredLShape";
    })(EBlockShape = model.EBlockShape || (model.EBlockShape = {}));
    model.shapeAry = [
        [[0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, -1], [0, 0], [1, 0], [1, 1]],
        [[0, -1], [0, 0], [-1, 0], [-1, 1]],
        [[0, -1], [0, 0], [0, 1], [0, 2]],
        [[-1, 0], [0, 0], [1, 0], [0, -1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[-1, -1], [0, -1], [0, 0], [0, 1]],
        [[1, -1], [0, -1], [0, 0], [0, 1]]
    ];
    var colors = ["black", "fuchsia", "#cff", "red", "origin", "aqua", "green", "yellow"];
    //方块数据结构用坐标系来表达
    var TetrisData = (function () {
        function TetrisData() {
            var newShape = EBlockShape[Math.floor(Math.random() * 8)];
            this._shape = model.shapeAry[newShape];
            this._color = colors[newShape];
        }
        /**
         * 转化为全局坐标
         * @param row: 原点行
         * @param col: 原点列
         */
        TetrisData.prototype.toGlobal = function (row, col) {
        };
        /**
         * 旋转
         */
        TetrisData.prototype.rotate = function () {
        };
        /**
         * 移动下一步
         */
        TetrisData.prototype.nextFrame = function () {
        };
        return TetrisData;
    }());
    model.TetrisData = TetrisData;
    __reflect(TetrisData.prototype, "model.TetrisData");
})(model || (model = {}));
