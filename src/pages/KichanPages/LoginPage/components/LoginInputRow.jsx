import React from "react";
import "./LoginInputRow.style.css";

const LoginInputRow = ({sort, setInputContent, handleLogin}) => {
  return (
    <div className="login-row">
      <input
        onChange={(e) => setInputContent(e.target.value)}
        onKeyDown={handleLogin}
        type={sort === "password" ? "password" : ""}
        placeholder={sort === "id" ? "아이디" : "비밀번호"}
        className="login-input"
      />
    </div>
  );
};

export default LoginInputRow;
