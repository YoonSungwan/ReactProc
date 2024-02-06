import React from 'react';
import { SetFrameView, DefaultCrudBtn } from '../components/Common';

type param = {
    menuId: string;
    menuNm: string;
    onClick: (name: string) => void;
  };

export default function menuDom() {
    let paramNm = "파라미터 테스트";
    return (
        <div>
            <SetFrameView></SetFrameView>
            <DefaultCrudBtn menuId='its04002' menuNm={paramNm}></DefaultCrudBtn>
        </div>
    );
}