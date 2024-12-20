import React, {useState} from "react";
import "./LoginPage.style.css";
import LoginInputRow from "./components/LoginInputRow";
import couple from "../../../common/images/couple.png"

const LoginPage = ({setPage}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    if(event.type==="click"||(event.type==="keydown"&&event.key==="Enter")){
      if(id==="user"&&password==="1234"){
        alert("로그인되었습니다.");
        setPage("ClockPage1");
      }
      else{
        alert("정보가 일치하지 않습니다!");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-title-section">WiseBloom</div>
        <div className="login-subtitle-section">
          <img src={couple} width="100" />
          <div>
            노년의 건강한 두뇌, 오늘부터 함께 시작하세요!
          </div>
        </div>
        <div className="login-box">
          <LoginInputRow sort="id" setInputContent={setId} handleLogin={handleLogin}/>
          <LoginInputRow sort="password" setInputContent={setPassword} handleLogin={handleLogin}/>
        </div>
        <button onClick={handleLogin} className="login-button">
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
