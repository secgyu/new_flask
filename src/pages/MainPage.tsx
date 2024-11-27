import React from "react";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="layout-login">
      <div className="container">
        <h1 className="title">AICT 스마트 안전모</h1>
        <div className="login-box">
          <h2 className="login-title">로그인</h2>
          <form method="post">
            <div className="input-group">
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" name="id" />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="input-group">
              <label htmlFor="code">코드</label>
              <input type="text" id="code" name="code" />
            </div>
            <button type="submit" className="login-button">
              로그인하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
