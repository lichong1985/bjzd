var Tools;
(function (Tools) {
    //p2  坐标 转 白鹭 坐标
    function p2TOegretPoitn(x, y) {
        return egret.Point.create(x * 50, -y * 50);
    }
    Tools.p2TOegretPoitn = p2TOegretPoitn;
    // 白鹭 坐标 转 p2 坐标
    function egretTOp2(x, y) {
        return egret.Point.create(x / 50, -y / 50);
    }
    Tools.egretTOp2 = egretTOp2;
    //获取设备分辨率宽
    function getPhoneW() {
        return main.MainR.m.game_w;
    }
    Tools.getPhoneW = getPhoneW;
    //获取设备分辨率高
    function getPhoneH() {
        return main.MainR.m.game_h;
    }
    Tools.getPhoneH = getPhoneH;
    //返回格子宽高
    function getGZ() {
        return getPhoneW() / 7;
    }
    Tools.getGZ = getGZ;
    //求两个点之间的向量
    function xiangliang(from, to, sd) {
        var jl = egret.Point.distance(to, from);
        var pi = sd / jl;
        var rx = (to.x - from.x) * pi;
        var ry = (to.y - from.y) * pi;
        return egret.Point.create(rx, ry);
    }
    Tools.xiangliang = xiangliang;
    //生成随机数
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    Tools.GetRandomNum = GetRandomNum;
    //碰撞系
    Tools.JIAN_ZHU = Math.pow(2, 1); //建筑
    Tools.REN = Math.pow(2, 2); //人
    Tools.SHENG_ZI = Math.pow(2, 3); //绳子
    Tools.NIAO = Math.pow(2, 4); //鸟 无人机
    Tools.QI_QIU = Math.pow(2, 5); //气球
    Tools.YUN = Math.pow(2, 0); //云彩 乌云
    Tools.TOU = Math.pow(2, 6); //人物与建筑物头部
    Tools.JI_GUANG = Math.pow(2, 7); //激光
})(Tools || (Tools = {}));
//# sourceMappingURL=Tools.js.map