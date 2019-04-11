module mode {
    export class BulidingBase extends p2.Body {
        public fx: number; //-1 上边一层  1下边一层
        constructor(mass: number, w: number, h: number, x: number, fx: number, name: string) {
            super({ mass: mass })
            this.fx = fx;
            this.initShape(w, h);
            this.initpost(x, fx, w, h);
            this.initDisp(w, h, name);
            this.type = p2.Body.KINEMATIC; //1122223335555
        }

        //初始化形状
        public boxShape: p2.Box;
        public boxShape1: p2.Box;
        public initShape(w: number, h: number) {
            let bw = w * Tools.getGZ() / 50;
            let bh = h * Tools.getGZ() / 50;
            let bw1 = Tools.getGZ() / 50;
            this.boxShape = new p2.Box({ bw, bh });
            this.addShape(this.boxShape, [0, 0], 0);
            this.boxShape.collisionMask = Tools.JIAN_ZHU;
            this.boxShape.collisionGroup = Tools.REN;
            this.boxShape1 = new p2.Box({ bw, bw1 });
            let y = 0;
            //上层
            if (this.fx = -1) {
                y = -((bh / 2) - (Tools.getGZ() / 50))
            }

            if (this.fx = 1) {
                y = ((bh / 2) - (Tools.getGZ() / 50))
            }
            this.addShape(this.boxShape1, [0, y], 0);
            this.boxShape1.collisionMask = Tools.TOU;
            this.boxShape1.collisionGroup = Tools.REN;
        }

        //初始化位置 1下方 -1上方
        public initpost(x: number, fx: number, w: number, h: number) {
            let px = x * Tools.getGZ() + w * Tools.getGZ() * 0.5;
            let py = 0;
            if (fx == 1) {
                py = -h * 0.5 * Tools.getGZ();
            }
            if (fx == -1) {
                py = -Tools.getPhoneW() * 2 + (h * 0.5 * Tools.getGZ())
            }
            let p2pos = Tools.egretTOp2(px, py);
            this.position[0] = p2pos.x;
            this.position[1] = p2pos.y;
        }

        //初始化贴图
        public disp: egret.Bitmap;
        public initDisp(w: number, h: number, name: string) {
            this.disp = new egret.Bitmap(RES.getRes(name));
            this.disp.width = w * Tools.getGZ();
            this.disp.height = h * Tools.getGZ();
            this.disp.anchorOffsetX = this.disp.width * 0.5;
            this.disp.anchorOffsetY = this.disp.height * 0.5;
            this.displays = [this.disp];
        }


    }
}
