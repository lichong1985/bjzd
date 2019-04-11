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
var mode;
(function (mode) {
    var Ren = (function (_super) {
        __extends(Ren, _super);
        function Ren(scene) {
            var _this = _super.call(this, { mass: 1 }) || this;
            //激光锁定建筑物
            _this.result = new p2.RaycastResult(); //光线投射
            _this.rayClosest = new p2.Ray({
                mode: p2.Ray.CLOSEST
            });
            _this.hitPoint = p2.vec2.create();
            _this.scene = scene;
            _this.initDisp();
            _this.initShape();
            return _this;
        }
        Ren.prototype.initDisp = function () {
            this.disp = new egret.Bitmap(RES.getRes("ren_png"));
            this.disp.anchorOffsetX = this.disp.width * 0.5;
            this.disp.anchorOffsetY = this.disp.height * 0.5;
            this.displays = [this.disp];
        };
        Ren.prototype.initShape = function () {
            var bw = this.disp.width / 50;
            var bh = this.disp.height / 50;
            var bw1 = bw;
            var y = bw1 / 2 - (Tools.getGZ() / 50);
            this.boxShape = new p2.Box({ bw: bw, bh: bh });
            this.boxShape1 = new p2.Box({ bw: bw, bw1: bw1 });
            this.addShape(this.boxShape, [0, 0], 0);
            this.addShape(this.boxShape1, [0, y], 0);
            this.boxShape.collisionMask = Tools.REN;
            this.boxShape.collisionGroup = Tools.JIAN_ZHU | Tools.NIAO | Tools.QI_QIU;
            this.boxShape1.collisionMask = Tools.TOU;
            this.boxShape1.collisionGroup = Tools.TOU;
        };
        //锁定
        Ren.prototype.suoding = function () {
        };
        return Ren;
    }(p2.Body));
    mode.Ren = Ren;
    __reflect(Ren.prototype, "mode.Ren");
})(mode || (mode = {}));
//# sourceMappingURL=Ren.js.map