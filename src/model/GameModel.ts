namespace model {
    export class GameModel {

        //
        private mapHandle: Map;
        //
        private currentBlock: BlockData;
        //
        private nextBlock: BlockData;

        //
        private currentPosition: egret.Point;

        constructor(w: number, h: number) {
            this.mapHandle = new Map(w, h);

            //
            this.currentBlock = new BlockData();
            this.currentPosition = new egret.Point(w / 2, 0);

            this.nextBlock = new BlockData();
        }

        public createBlock() {
            this.currentBlock = this.nextBlock;
            this.currentPosition = new egret.Point(this.mapHandle.width / 2, 0);
            this.nextBlock = new BlockData();
        }

        public moveLeft() {
            this.currentPosition.y--;
            let temp = this.currentBlock.translate(this.currentPosition.x, this.currentPosition.y);
            if (this.mapHandle.isCollide(temp)) {
                this.currentPosition.y++;
            } else {
                this.onUpdate();
            }
        }

        public moveRight() {
            this.currentPosition.y++;
            let temp = this.currentBlock.translate(this.currentPosition.x, this.currentPosition.y);
            if (this.mapHandle.isCollide(temp)) {
                this.currentPosition.y--;
            } else {
                this.onUpdate();
            }
        }

        public moveDown() {
            this.currentPosition.x++;
            let temp = this.currentBlock.translate(this.currentPosition.x, this.currentPosition.y);
            if (this.mapHandle.isCollide(temp)) {
                this.currentPosition.x--;
            } else {
                this.onUpdate();
            }
        }

        /**
         * 旋转
         * */
        public rotate()  {
            if (this.currentBlock.MShapeId == EBlockShape.squareShape) return;
            let temp = this.currentBlock.rotate();
            //如果没有发生碰撞就更新GameView以及Block;

        }

        public onUpdate() {
            //首先设置GameView

            //检测GameView的存在，调用GameView接口进行刷新
        }
    }
}