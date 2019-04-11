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
    var BulidingBase = (function (_super) {
        __extends(BulidingBase, _super);
        function BulidingBase(mass, w, h, x, fx, name) {
            var _this = _super.call(this, { mass: mass }) || this;
            _this.fx = fx;
            _this.initShape(w, h);
            _this.initpost(x, fx, w, h);
            _this.initDisp(w, h, name);
            _this.type = 2;
            return _this;
        }
        BulidingBase.prototype.initShape = function (w, h) {
            var bw = w * Tools.getGZ() / 50;
            var bh = h * Tools.getGZ() / 50;
            var bw1 = Tools.getGZ() / 50;
            this.boxShape = new p2.Box({ bw: bw, bh: bh });
            this.addShape(this.boxShape, [0, 0], 0);
            this.boxShape.collisionMask = Tools.JIAN_ZHU;
            this.boxShape.collisionGroup = Tools.REN;
            this.boxShape1 = new p2.Box({ bw: bw, bw1: bw1 });
            var y = 0;
            //上层
            if (this.fx = -1) {
                y = -((bh / 2) - (Tools.getGZ() / 50));
            }
            if (this.fx = 1) {
                y = ((bh / 2) - (Tools.getGZ() / 50));
            }
            this.addShape(this.boxShape1, [0, y], 0);
            this.boxShape1.collisionMask = Tools.TOU;
            this.boxShape1.collisionGroup = Tools.JI_GUANG;
        };
        //初始化位置 1下方 -1上方
        BulidingBase.prototype.initpost = function (x, fx, w, h) {
            var px = x * Tools.getGZ() + w * Tools.getGZ() * 0.5;
            var py = 0;
            if (fx == 1) {
                py = -h * 0.5 * Tools.getGZ();
            }
            if (fx == -1) {
                py = -Tools.getPhoneW() * 2 + (h * 0.5 * Tools.getGZ());
            }
            var p2pos = Tools.egretTOp2(px, py);
            this.position[0] = p2pos.x;
            this.position[1] = p2pos.y;
        };
        BulidingBase.prototype.initDisp = function (w, h, name) {
            this.disp = new egret.Bitmap(RES.getRes(name));
            this.disp.width = w * Tools.getGZ();
            this.disp.height = h * Tools.getGZ();
            this.disp.anchorOffsetX = this.disp.width * 0.5;
            this.disp.anchorOffsetY = this.disp.height * 0.5;
            this.displays = [this.disp];
        };
        return BulidingBase;
    }(p2.Body));
    mode.BulidingBase = BulidingBase;
    __reflect(BulidingBase.prototype, "mode.BulidingBase");
})(mode || (mode = {}));
//# sourceMappingURL=BuildingBase.js.map