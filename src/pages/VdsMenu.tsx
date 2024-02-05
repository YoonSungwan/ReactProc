import React, { useState } from "react";

type param = {
    val: string;
    id?: string;
};

let thisStyle = {
    fontSize: 12,
    background: 'black',
    color: 'red'
};

function EmptyFunc() {
    //destructuring 문법
    let [글제목, 제목변경함수] = useState("useState 테스트");
    let [글제목배열, 배열변경함수] = useState(['useState array 테스트', 'array는 음식']);
    //state: 변수 대신 쓰는 데이터 저장공간. 문자 숫자 array object 다 저장 가능 -> 변수 대신 쓰는 이유는 web-app처럼 쓰려고
    // -> 변수랑 다르게 state는 변경되면 html이 자동으로 재랜더링, 고로 자주 바뀌는 주요 데이터는 state로

    return (
        <div>
            <span>{글제목}</span>
            <span>{글제목배열[0]} 그리고 {글제목배열[1]}</span>
        </div>
    );
}


const returnVds = ({val, id} : param, fSize: number) => {
    console.log(val, id, fSize);
    return(
      <div>
          <span style={{fontSize: fSize}}>속성 할당 테스트.</span> 할당값은 <span style={thisStyle}>{val}</span>로 확인. 추가로 {id}
          {EmptyFunc()}
      </div>  
    );
}

export default returnVds;