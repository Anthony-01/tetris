namespace model {

    //类型枚举
    export enum EBlockShape {
        noShape = 0,
        zShape,
        sShape,
        lineShape,
        tShape,
        squareShape,
        lShape,
        mirroredLShape
    }

    export interface ITetris {
        row: number,
        col: number
    }

    export const shapeAry = [
        [[0, 0], [0, 0], [0, 0], [0, 0]],
        [[0, -1], [0, 0], [1, 0], [1, 1]],
        [[0, -1], [0, 0], [-1, 0], [-1, 1]],
        [[0, -1], [0, 0], [0, 1], [0, 2]],
        [[-1, 0], [0, 0], [1, 0], [0, -1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[-1, -1], [0, -1], [0, 0], [0, 1]],
        [[1, -1], [0, -1], [0, 0], [0, 1]]
    ];

    const colors = ["black", "fuchsia", "#cff", "red", "origin", "aqua", "green", "yellow"];
    //方块数据结构用坐标系来表达
    export class BlockData {

        private _shape: Array<Array<number>>;
        private _color: string;

        private shapeId: EBlockShape;

        constructor() {
            //反向枚举
            let newShape = EBlockShape[Math.floor(Math.random() * 8)];
            this._shape = shapeAry[EBlockShape[newShape]];
            this._color = colors[EBlockShape[newShape]];
            this.shapeId = EBlockShape[newShape];
        }

        get MShapeId(): EBlockShape {
            return this.shapeId;
        }

        /**
         * 转化为全局坐标
         * @param row: 原点行
         * @param col: 原点列
         */
        public toGlobal(row: number, col: number) {

        }

        /**
         * 旋转
         */
        public rotate() {
            let copy = [];
            for (let n = 0; n < this._shape.length; n++) {
                let position = [];
                position.push(this._shape[n][1]);
                position.push(-this._shape[n][0]);
                copy.push(position);
            }
            this._shape = copy;
            return copy;
        }

        public translate(row: number, col: number): Array<ITetris> {
            let copy = [];
            for (let n = 0; n < this._shape.length; n++) {
                let temp: ITetris = {
                    row: this._shape[n][1] + row,
                    col: this._shape[n][0] + col
                };
                copy.push(temp)
            }
            return copy;
        }

        /**
         * 移动下一步
         */
        public nextFrame() {

        }

        // get data(): Array<ITetris> {
        //     return this._shape;
        // }
    }
}