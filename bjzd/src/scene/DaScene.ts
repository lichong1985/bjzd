module scene {
    export class DaScene extends egret.DisplayObjectContainer {
        constructor() {
            super();
            this.initBG();
            this.initTest();
        }
        //初始化背景
        public bg: bg.BeiJing;
        public initBG() {
            this.bg = new bg.BeiJing();
            this.bg.x = 0;
            this.bg.y = -Tools.getPhoneW() * 2;
            this.addChildAt(this.bg, ceng.bg1);
        }
        //初始化 建筑场景
        public jz: scene.TestScene;
        public initTest() {
            this.jz = new scene.TestScene();
            this.addChildAt(this.jz, ceng.bg2);
        }

    }
}