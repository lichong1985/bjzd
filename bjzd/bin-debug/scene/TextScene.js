var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var scene;
(function (scene) {
    var TestScene = (function (_super) {
        __extends(TestScene, _super);
        function TestScene() {
            var _this = _super.call(this) || this;
            //添加建筑物
            _this.x_mark_x = 0; //横坐标标记 下
            _this.x_mark_s = 0; //横坐标标记 上
            //---------------------触控相关------------------------------
            _this.chang_jing_zhuangtai = 1; // 1未开始 2已经开始
            _this.initP2World();
            _this.test_init();
            return _this;
        }
        TestScene.prototype.initP2World = function () {
            this.world = new p2.World();
            this.world.gravity = [0, -10];
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this); //添加帧同步
        };
        //添加游戏引擎帧同步
        TestScene.prototype.onEnterFrame = function () {
            this.p2Updata();
        };
        //刷新物理引擎
        TestScene.prototype.p2Updata = function () {
            this.world.step(1 / 60.0);
            var l = this.world.bodies.length;
            for (var i = 0; i < l; i++) {
                var boxBody = this.world.bodies[i];
                for (var i_1 = 0; i_1 < boxBody.displays.length; i_1++) {
                    var box = boxBody.displays[i_1];
                    if (box) {
                        var p = Tools.p2TOegretPoitn(boxBody.position[0], boxBody.position[1]);
                        box.x = p.x;
                        box.y = p.y;
                        box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                    }
                }
            }
        };
        TestScene.prototype.addBuild = function (w, h, fx, name) {
            var b;
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
        };
        TestScene.prototype.test_init = function () {
            this.addBuild(1, 2, -1, "jz_png");
            this.addBuild(1, 1, -1, "jz_png");
            this.addBuild(1, 2, -1, "jz_png");
            this.addBuild(1, 1, -1, "jz_png");
            this.addBuild(1, 2, -1, "jz_png");
            this.addBuild(1, 1, -1, "jz_png");
            this.addBuild(1, 2, -1, "jz_png");
            this.addBuild(1, 1, -1, "jz_png");
            this.addBuild(1, 2, 1, "jz_png");
            this.addBuild(1, 1, 1, "jz_png");
            this.addBuild(1, 2, 1, "jz_png");
            this.addBuild(1, 1, 1, "jz_png");
            this.addBuild(1, 2, 1, "jz_png");
            this.addBuild(1, 1, 1, "jz_png");
            this.addBuild(1, 2, 1, "jz_png");
            this.addBuild(1, 1, 1, "jz_png");
        };
        TestScene.prototype.mouseUp = function (evt) {
            if (this.chang_jing_zhuangtai == 1) {
                this.chang_jing_zhuangtai = 2;
                this.addPlayer();
            }
        };
        TestScene.prototype.mouseDown = function (evt) {
        };
        TestScene.prototype.addPlayer = function () {
            this.player = new mode.Ren(this);
            this.addChildAt(this.player.disp, Tools.REN);
            this.world.addBody(this.player);
            this.player.position = [0, Tools.getGZ() * 7 / 50];
            this.player.force = [50, 50];
        };
        return TestScene;
    }(egret.DisplayObjectContainer));
    scene.TestScene = TestScene;
    __reflect(TestScene.prototype, "scene.TestScene");
})(scene || (scene = {}));
//# sourceMappingURL=TextScene.js.map