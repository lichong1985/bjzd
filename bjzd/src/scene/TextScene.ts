module scene {
    export class TestScene extends egret.DisplayObjectContainer {
        constructor() {
            super();
            this.initP2World();
            this.test_init();
        }
        //2D物理世界
        public world: p2.World;
        public initP2World() {
            this.world = new p2.World();
            this.world.gravity = [0, -10];
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);//添加帧同步
        }

        //添加游戏引擎帧同步
        public onEnterFrame() {
            this.p2Updata();

        }

        //刷新物理引擎
        public p2Updata() {
            this.world.step(1 / 60.0);
            var l: number = this.world.bodies.length;
            for (var i: number = 0; i < l; i++) {
                var boxBody: p2.Body = this.world.bodies[i];

                for (let i = 0; i < boxBody.displays.length; i++) {
                    var box: egret.DisplayObject = boxBody.displays[i];
                    if (box) {
                        let p: egret.Point = Tools.p2TOegretPoitn(boxBody.position[0], boxBody.position[1])
                        box.x = p.x;
                        box.y = p.y;
                        box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                    }
                }

            }
        }

        //添加建筑物
        public x_mark_x = 0;//横坐标标记 下
        public x_mark_s = 0;//横坐标标记 上
        public addBuild(w: number, h: number, fx: number, name: string) {
            let b: mode.BulidingBase;
            if (fx == 1) {
                b = new mode.BulidingBase(1, w, h, this.x_mark_x, fx, name);
                this.x_mark_x += w;
            }

            if (fx == -1) {
                b = new mode.BulidingBase(1, w, h, this.x_mark_s, fx, name);
                this.x_mark_s += w;
            }
            this.addChildAt(b.disp, ceng.buiding);
            this.world.addBody(b);
        }

        public test_init() {
            this.addBuild(1, 2, -1, "jz_png")
            this.addBuild(1, 1, -1, "jz_png")
            this.addBuild(1, 2, -1, "jz_png")
            this.addBuild(1, 1, -1, "jz_png")
            this.addBuild(1, 2, -1, "jz_png")
            this.addBuild(1, 1, -1, "jz_png")
            this.addBuild(1, 2, -1, "jz_png")
            this.addBuild(1, 1, -1, "jz_png")

            this.addBuild(1, 2, 1, "jz_png")
            this.addBuild(1, 1, 1, "jz_png")
            this.addBuild(1, 2, 1, "jz_png")
            this.addBuild(1, 1, 1, "jz_png")
            this.addBuild(1, 2, 1, "jz_png")
            this.addBuild(1, 1, 1, "jz_png")
            this.addBuild(1, 2, 1, "jz_png")
            this.addBuild(1, 1, 1, "jz_png")
        }

        //---------------------触控相关------------------------------
        public chang_jing_zhuangtai: number = 1;// 1未开始 2已经开始


        public mouseUp(evt: egret.TouchEvent) {
            if (this.chang_jing_zhuangtai == 1) {
                this.chang_jing_zhuangtai = 2;
                this.addPlayer();
            }
        }
        public mouseDown(evt: egret.TouchEvent) {
        }

        //-------------------------------------------------------
        public player: mode.Ren;
        public addPlayer() {
            this.player = new mode.Ren(this);
            this.addChildAt(this.player.disp, Tools.REN);
            this.world.addBody(this.player);
            this.player.position = [0, Tools.getGZ() * 7 / 50];
            this.player.force = [50, 50];
        }
    }
}