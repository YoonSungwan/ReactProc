import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import Greetings from "./components/Greetings";
import VdsMenu from "./pages/VdsMenu";

function App() {
  const onclick = (name : string) => {
      console.log(`${name} says Hello!`);
  };

    function setFrameView(viewId: string, name: string) {
        
    }

    return (
      <div className="wrap toolbar_close">
              <header>
                  <div className="header_left">
                      <h1><span>지능형 교통정보시스템</span></h1>
                      <nav>
                          <ul>
                              <li className="menu"><a title="통합모니터링">통합모니터링</a>
                                  <ul className="sub1">
                                      <li id="its11002"><a onClick={() => window.open('./its11002.view', '_blank')}>통합모니터링</a></li>
                                  </ul>
                              </li>
                              <li className="menu"><a onClick={() => void(0) } title="VDS관리">VDS관리</a>
                                  <ul className="sub1">
                                      <li id="its01001"><a onClick={() => setFrameView('its01001', 'VDS 정보 관리')}>VDS 정보 관리</a></li>
                                      <li id="its01002"><a onClick={() => setFrameView('its01002', 'VDS 수집구간 관리')}>VDS 수집구간 관리</a></li>
                                      <li id="its01003"><a onClick={() => setFrameView('its01003', 'VDS 상태이력 조회')}>VDS 상태이력 조회</a></li>
                                      <li id="its01004"><a onClick={() => setFrameView('its01004', 'VDS 수집이력 조회')}>VDS 수집이력 조회</a></li>
                                      <li id="its01007"><a onClick={() => setFrameView('its01007', 'VDS 원시 오류 조회')}>VDS 원시 오류 조회</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div className="header_right">
                      <ul>
                          {/*<li><span id="loginInfo"><%=loginInfo%></span> <button onclick = "location.href = 'logout.do'" title="로그아웃" id="btn_logout" className="btn_logout"></button> </li>*/}
                          <li><button title="스킨선택" className="btn_skin"></button></li>
                      </ul>
                  </div>
              </header>
          <Greetings onClick={onclick} name="Hello"/>
          <VdsMenu val="test" id="testId"></VdsMenu>
      </div>
  );
}

export default App;
