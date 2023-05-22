/*
 * @Descripttion: 列表测试界面
 * @Author: CYK
 * @Date: 2022-05-12 09:23:41
 */
import { Button, Node, _decorator } from 'cc';
import { BaseEnum } from '../../framework/base/BaseEnum';
import { FileMgr } from '../../framework/mgr/FileMgr';
import { SceneMgr } from '../../framework/mgr/SceneMgr';
import { UILayer } from '../../framework/ui/UILayer';
import { ButtonPlus } from '../../framework/uiComp/ButtonPlus';
import WebFileHandler from '../../framework/mgr/WebFileHandler';
const { ccclass, property } = _decorator;

@ccclass('FileTestLayer')
export class FileTestLayer extends UILayer {
    /** 预制体路径 */
    public static prefabUrl: string = 'prefab/fileTest/FileTestLayer';
    @property({ type: Button })
    private btn_back: Button;
    @property({ type: ButtonPlus })
    private btn_fileSelect: ButtonPlus;
    @property({ type: ButtonPlus })
    private btn_fileSave: ButtonPlus;
    //数据数组（所有List共用）
    data: number[] = [];
    protected onEnter() {
        this.data = [];
    }

    private _tap_btn_back() {
        SceneMgr.inst.pop();
    }

    /** 打开文件选择器+读取数据 */
    private _tap_btn_fileSelect() {
        // 打开文件选择器
        // FileMgr.inst.openLocalFile(null, (file) => {
        //     console.log("file", file)
        //     // 读取数据
        //     FileMgr.inst.readLocalFile(file, BaseEnum.READ_FILE_TYPE.TEXT, (result) => {
        //         console.log("file result", result)
        //     })
        // });
        let aa = new WebFileHandler;
        aa;
        aa.openImageWin(function(e, i) {
            e;
            i;
            // t.bgTex = e;
            // var o = i.name.lastIndexOf(".");
            // t.bgName = i.name.slice(0, o),
            // t.bgPathTxt.string = i.name,
            // t.mapWidthTxt.string = "" + e.width,
            // t.mapHeightTxt.string = "" + e.height
        })
    }

    /** 保存数据到文件 */
    private _tap_btn_fileSave() {
        let list = [{type:1,aa:5},{type:3,bb:66}];
        FileMgr.inst.saveForBrowser(JSON.stringify(list), `json/${1}.json`);
    }
}

