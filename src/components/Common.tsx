import React, { useState, useEffect, useRef, Component } from 'react';

type defParam = {
    menuId: string
    ,menuNm: string
    ,reg?: Date
    ,menuList?: Array<string>
    ,onClick?: () => void
};

class classCom extends Component {

}

export function SetFrameView() {
    let MAX_TAB_CNT = 10;
    
    let [cnt, setCnt] = useState<number>(MAX_TAB_CNT);
    let onIncrease = () => {
        setCnt(setFunc => setFunc + 1);
    };

    let [cntMi, setCntMi] = useState<number | null>(MAX_TAB_CNT);
    let onDecrease = () => {
        setCntMi((typeof cntMi == 'number' ? cntMi : 0) - 1)
    };

    return (
        <div>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
            <h2>{cnt}+</h2>
            <h2>{cntMi}-</h2>
        </div>
    );
};

export function DefaultCrudBtn({menuId, menuNm} : defParam){
    return (
        <div className="btn_box" id="btnSection">
            <ul className="btn_ss btn_left">
                <li><button className="btn_regist">신규</button></li>
                <li><button className="btn_modify">수정</button></li>
                <li><button className="btn_delete">삭제</button></li>
            </ul>
            <ul className="btn_ss btn_right">
                <li><button className="btn_cancel">{menuNm} : 취소</button></li>
                <li><button className="btn_save">{menuId} : 저장</button></li>
            </ul>
        </div>
    );
};