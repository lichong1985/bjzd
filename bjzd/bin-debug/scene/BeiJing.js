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
var bg;
(function (bg) {
    var BeiJing = (function (_super) {
        __extends(BeiJing, _super);
        function BeiJing() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        BeiJing.prototype.init = function () {
            this.bg = new egret.Bitmap(RES.getRes("bg_png"));
            this.bg.width = Tools.getPhoneW();
            this.bg.height = Tools.getPhoneW() * 2;
            this.addChildAt(this.bg, ceng.bg1);
            this.bg.x = 0;
            this.bg.y = 0;
        };
        return BeiJing;
    }(egret.DisplayObjectContainer));
    bg.BeiJing = BeiJing;
    __reflect(BeiJing.prototype, "bg.BeiJing");
})(bg || (bg = {}));
//# sourceMappingURL=BeiJing.js.map