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
    var DaScene = (function (_super) {
        __extends(DaScene, _super);
        function DaScene() {
            var _this = _super.call(this) || this;
            _this.initBG();
            _this.initTest();
            _this.addShuKeListener();
            return _this;
        }
        DaScene.prototype.initBG = function () {
            this.bg = new bg.BeiJing();
            this.bg.x = 0;
            this.bg.y = -Tools.getPhoneW() * 2;
            this.addChildAt(this.bg, ceng.bg1);
        };
        DaScene.prototype.initTest = function () {
            this.jz = new scene.TestScene();
            this.addChildAt(this.jz, ceng.bg2);
        };
        DaScene.prototype.addShuKeListener = function () {
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        };
        DaScene.prototype.mouseUp = function (evt) {
            this.jz.mouseUp(evt);
        };
        DaScene.prototype.mouseDown = function (evt) {
            this.jz.mouseDown(evt);
        };
        return DaScene;
    }(egret.DisplayObjectContainer));
    scene.DaScene = DaScene;
    __reflect(DaScene.prototype, "scene.DaScene");
})(scene || (scene = {}));
//# sourceMappingURL=DaScene.js.map