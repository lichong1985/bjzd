module Tools {

    //p2  坐标 转 白鹭 坐标
    export function p2TOegretPoitn(x: number, y: number): egret.Point {
        return egret.Point.create(x * 50, - y * 50);

    }

    // 白鹭 坐标 转 p2 坐标
    export function egretTOp2(x: number, y: number): egret.Point {
        return egret.Point.create(x / 50, -y / 50);
    }

    //获取设备分辨率宽
    export function getPhoneW(): number {
        return main.MainR.m.game_w;
    }

    //获取设备分辨率高
    export function getPhoneH(): number {
        return main.MainR.m.game_h;
    }

    //返回格子宽高
    export function getGZ() {
        return getPhoneW() / 7;
    }



    //求两个点之间的向量
    export function xiangliang(from: egret.Point, to: egret.Point, sd: number): egret.Point {
        let jl = egret.Point.distance(to, from);
        let pi = sd / jl;
        let rx = (to.x - from.x) * pi;
        let ry = (to.y - from.y) * pi;
        return egret.Point.create(rx, ry);
    }

    //生成随机数
    export function GetRandomNum(Min, Max): number {
        let Range: number = Max - Min;
        let Rand: number = Math.random();
        return (Min + Math.round(Rand * Range));
    }


    //碰撞系
    export let JIAN_ZHU: number = Math.pow(2, 1);//建筑
    export let REN: number = Math.pow(2, 2);//人
    export let SHENG_ZI: number = Math.pow(2, 3);//绳子
    export let NIAO: number = Math.pow(2, 4);//鸟 无人机
    export let QI_QIU: number = Math.pow(2, 5);//气球
    export let YUN: number = Math.pow(2, 0);//云彩 乌云

    export let TOU: number = Math.pow(2, 6);//人物与建筑物头部
    export let JI_GUANG: number = Math.pow(2, 7);//激光

}