namespace model {
    export class Map {

        public width: number;
        public height: number;
        //行对象
        private lines: Array<Array<EBlockShape>>;

        constructor(w: number, h: number) {
            this.width = w;
            this.height = h;
            this.lines = [];
            for (let row = 0; row < h; row++) {
                this.lines.push(this.newLine());
            }
        }

        /*
        * 创建新的格子
        * */
        private newLine(): Array<EBlockShape> {
            let shapes = [];
            for (let col = 0; col < this.width; col++) {
                shapes.push(EBlockShape.noShape);
            }
            return shapes;
        }

        /*
        * 判断一行是否满格
        * */
        public isFullLine(row: number): boolean {
            let line = this.lines[row];
            for (let n = 0; n < line.length; n++) {
                if (line[n] == EBlockShape.noShape) {
                    return false;
                }
                return true;
            }
        }

        /*
        * 检测碰撞
        * */
        public isCollide(data: Array<ITetris>): boolean {
            let back = false;
            for (let n = 0; n < data.length; n++) {
                let row = data[n].row;
                let col = data[n].col;
                if (col < 0 || col == this.width) return true;
                if (row == this.height) return true;
                if (row < 0) continue;
                else if (this.lines[row][col] != EBlockShape.noShape) {
                    return true;
                }
            }
            return back;
        }

        private appendShape(shapeId: number, data: any) {
            for (let n = 0; n < data.length; n++) {
                this.lines[data[n].row][data[n].col] = shapeId;
            }
            for (let row = 0; row < this.lines.length; row++) {
                //消除
                if (this.isFullLine(row)) {
                    this.lines.splice(row, 1);
                    this.lines.push(this.newLine());
                }
            }
        }
    }
}