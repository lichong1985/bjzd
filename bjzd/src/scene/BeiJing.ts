module bg {
    export class BeiJing extends egret.DisplayObjectContainer {
        constructor() {
            super();
            this.init();
        }

        //初始化背景图片
        public bg: egret.Bitmap;
        public init() {
            this.bg = new egret.Bitmap(RES.getRes("bg_png"));
            this.bg.width = Tools.getPhoneW();
            this.bg.height = Tools.getPhoneW() * 2;
            this.addChildAt(this.bg, ceng.bg1);
            this.bg.x = 0;
            this.bg.y = 0;
        }

    }
}