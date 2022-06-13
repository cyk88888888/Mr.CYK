/*
 * @Descripttion: 消息码层级基类
 * @Author: CYK
 * @Date: 2022-05-12 09:23:41
 */
import { _decorator, Component, Node } from 'cc';
import { BaseUT } from '../base/BaseUtil';
import { SceneMgr } from '../mgr/SceneMgr';
import { UILayer } from './UILayer';
const { ccclass, property } = _decorator;

@ccclass('UIMsg')
export class UIMsg extends UILayer {
    protected addToLayer(){
        BaseUT.setFitSize(this.node);
        this.node.setParent(SceneMgr.inst.curScene.msg);
    }
}

