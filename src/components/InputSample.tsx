import React, {useState, useRef} from 'react';

export function InputSample() {
    //react 상태변경 함수는 비동기
    let [inpt, evntState] = useState({
        inputNum: "",
        //inputName: ""
        //,inputTest: ""
    });

    const {inputNum} = inpt;
    const inputName = "temp";

    let onChangeEvnt = (e: any) => {
        let { value, name } = e.target;
        console.log(inpt);
        console.log([name]);
        console.log(name);
        console.log(value);
        evntState({
            ...inpt,           //...는 나머지 파라미터. 파라미터값의 맨끝에만 위치
            [name]: value      //[] 안의 프로퍼티 이름을 동적으로 인식
        });
    };

    const inputRef = useRef<any>();
    let onClickInit = (e: any) => {
        evntState({
            inputNum : "",
            //inputName: "init"
            //,inputTest: ""
        });
        inputRef.current.focus();
    };

    return (
        <div>
            <button onClick={onClickInit}>인풋 테스트</button>
            <input name="inputNum" onChange={onChangeEvnt} type='number' placeholder="inputNum" value={inputNum}></input>
            <input name="inputName" onChange={onChangeEvnt} placeholder="inputName" value={inputName} ref={inputRef}></input>
            <h2>result: {inputNum}, {inputName}</h2>
        </div>
    );
}

//리액트 객체를 수정해야 할 때에는, input[inputName] = value같은 기존 객체를 직접 수정하는 방식x
//대신 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용해야함