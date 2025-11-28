import "./LoginPage.css";
import InputData from "./InputData";
import LoginPopup from "./LoginPopup";
import { useState } from "react";

const LoginPage = () => {
const [isShow, setIsShow] = useState(false);

const [strID,setStrID] = useState('');
const [strPW,setStrPW] = useState('');
const [strEmail,setStrEmail] = useState('');

const [isError,setIsError] = useState(false);

  const handleSubmit = (e) => {
    //원래 가진 기능이 사용되지 않도록 방지
    e.preventDefault();
    if(strEmail.includes("@")){
      setIsShow(true);
      setIsError(false);
    }else{
      setIsError(true);
    }
  };
  const handleEmailBlur = ()=>{
    if(strEmail.includes("@")){
      setIsError(false);
    }else{
      setIsError(true);
    }
  }
  const handleClose = ()=>{
    //닫기 버튼 누르면
    //팝업창 닫힘 + id, pw, email의 값이 공백 처리
    //이메일 경고 문구도 공백
    setIsShow(false);
    setStrID('');
    setStrPW('');
    setStrEmail('');
    setIsError('');
  }
  return (
    <>
      <form className="login-page" onSubmit={handleSubmit} noValidate>
        <InputData 
          title="아이디 또는 이메일" 
          type="text"
          value={strID}
          onChange={(e)=>{setStrID(e.target.value)}}
        />
        <InputData 
          title="비밀번호" 
          type="password" 
          value={strPW} 
          onChange={(e)=>{setStrPW(e.target.value)}}
        />
        <InputData
          title="이메일"
          type="email"
          value={strEmail}
          onChange={(e)=>{setStrEmail(e.target.value)}}
          onBlur = {handleEmailBlur}
        />

        {
          isError && <p>올바른 이메일 주소를 적어주세요.</p>
        }
        
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
