namespace control {
    import GameModel = model.GameModel;
    import DelayCall = model.DelayCall;

    export class GameControl {

        //
        private width: number;

        constructor() {
            this._model = new GameModel(10, 19);
        }

        private _model: GameModel;

        private _timer: DelayCall;

        private _gameView: view.GameView;

        public set GameView(view: view.GameView) {
            this._gameView = view;
        }

        public runGame() {
            this._timer = DelayCall.call(this._model.moveDown, this._model, 500);
            this._gameView.addEventListener(custom.Event.TOUCH_TAP, this.onBtnHandle, this);
        }

        /**
         * 不同按钮的处理
         * */
        private onBtnHandle(e: custom.Event) {
            switch(e.eventData.name) {
                case "start" : {
                    break;
                }
                case "pause": {
                    break;
                }
            }
        }
    }
}