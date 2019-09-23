var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var model;
(function (model) {
    var Map = (function () {
        function Map(w, h) {
            this.width = w;
            this.height = h;
            this.lines = [];
            for (var row = 0; row < h; row++) {
                this.lines.push(this.newLine());
            }
        }
        /*
        * 创建新的格子
        * */
        Map.prototype.newLine = function () {
            var shapes = [];
            for (var col = 0; col < this.width; col++) {
                shapes.push(model.EBlockShape.noShape);
            }
            return shapes;
        };
        /*
        * 判断一行是否满格
        * */
        Map.prototype.isFullLine = function (row) {
            var line = this.lines[row];
            for (var n = 0; n < line.length; n++) {
                if (line[n] == model.EBlockShape.noShape) {
                    return false;
                }
                return true;
            }
        };
        /*
        * 检测碰撞
        * */
        Map.prototype.isCollide = function () {
            return;
        };
        return Map;
    }());
    model.Map = Map;
    __reflect(Map.prototype, "model.Map");
})(model || (model = {}));
