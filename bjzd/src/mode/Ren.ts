module mode {
    export class Ren extends p2.Body {
        public scene: scene.TestScene;
        constructor(scene: scene.TestScene) {
            super({ mass: 1 });
            this.scene=scene;
            this.initDisp();
            this.initShape();
        }

        //初始化贴图
        public disp: egret.Bitmap;
        public initDisp() {
            this.disp = new egret.Bitmap(RES.getRes("ren_png"));
            this.disp.anchorOffsetX = this.disp.width * 0.5;
            this.disp.anchorOffsetY = this.disp.height * 0.5;
            this.displays = [this.disp];
        }

        //初始化形状
        public boxShape: p2.Box;
        public boxShape1: p2.Box;
        public initShape() {
            let bw = this.disp.width / 50;
            let bh = this.disp.height / 50;
            let bw1 = bw;
            let y = bw1 / 2 - (Tools.getGZ() / 50)
            this.boxShape = new p2.Box({ bw, bh });
            this.boxShape1 = new p2.Box({ bw, bw1 });

            this.addShape(this.boxShape, [0, 0], 0);
            this.addShape(this.boxShape1, [0, y], 0);
            this.boxShape.collisionMask = Tools.REN;
            this.boxShape.collisionGroup = Tools.JIAN_ZHU | Tools.NIAO | Tools.QI_QIU;
            this.boxShape1.collisionMask = Tools.TOU;
            this.boxShape1.collisionGroup = Tools.TOU;
        }


        //激光锁定建筑物
        public result = new p2.RaycastResult();//光线投射
        public rayClosest = new p2.Ray({
            mode: p2.Ray.CLOSEST
        });
        public hitPoint = p2.vec2.create();
        //锁定
        public suoding() {

        }


    }
}