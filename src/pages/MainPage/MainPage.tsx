import React from "react";
import "./MainPage.css";
import { useNavigate } from "react-router";
import LoginPanel from "./LoginPanel";
const MainPage = () => {
  const navigate = useNavigate();
  const onLogin = async ({ id, password, code }: { id: string; password: string; code: string }) => {
    // 서버에 로그인 정보 전송
    // 성공시 onSuccess
    await fetch("https://localhost:5000", { method: "POST", headers: { "Content-Type": "application.json" }, body: JSON.stringify({ id, password, code }) });
    console.log("on Login 눌러짐");
  };
  return (
    <div className="layout-login">
      <div className="container">
        <h1 className="title">AICT 스마트 안전모</h1>
        <LoginPanel onLogin={onLogin} />
      </div>
    </div>
  );
};

export default MainPage;
