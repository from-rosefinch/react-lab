import "./LoginPage.css";
import InputData from "./InputData";
import LoginPopup from "./LoginPopup";
import { useState } from "react";

const LoginPage = () => {
const [isShow, setIsShow] = useState(false);
  const handleSubmit = (e) => {
    //원래 가진 기능이 사용되지 않도록 방지
    e.preventDefault();
    setIsShow(true);
  };
  const handleClose = ()=>{
    setIsShow(false);
  }
  return (
    <>
      <form className="login-page" onSubmit={handleSubmit}>
        <InputData title="아이디 또는 이메일" />
        <InputData title="비밀번호" />
        <div className="checkbox">
          <input type="checkbox" id="check" />
          <label htmlFor="check">로그인 상태 유지</label>
        </div>
        <button type="submit">로그인</button>
      </form>
      {isShow && <LoginPopup onClose={handleClose} />}
    </>
  );
};

export default LoginPage;
