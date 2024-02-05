import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const [loggedIn, setLoggedIn] = useState(false); // 新增 loggedIn 狀態

  useEffect(() => {
    const containerElement = document.querySelector(".container");
    if (containerElement) {
      if (formData.isSignUp) {
        containerElement.classList.add("right-panel-active");
      } else {
        containerElement.classList.remove("right-panel-active");
      }
    }
  }, [formData.isSignUp]);

  const handleSignInClick = () => {
    setFormData({ ...formData, isSignUp: false });
    handleFormSubmit(); // 調用 handleFormSubmit 函式
  };

  const handleSignUpClick = () => {
    setFormData({ ...formData, isSignUp: true });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async () => { // 移除參數 e
    try {
      const response = await axios.post('http://localhost:5501/users/login', formData);
      const { token, _id } = response.data;
      // 儲存 token 和 _id 到 localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('user_id', _id);
      // 處理成功登入的情況（例如，重新導向用戶）
      console.log('登入成功：', response.data);
      setLoggedIn(true);
    } catch (error) {
      // 處理登入失敗的情況（例如，顯示錯誤訊息給用戶）
      console.error('登入失敗：', error);
    }
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className={`signupBox ${formData.isSignUp ? 'right-panel-active' : ''}`}>
        <div className="container">
          {/*註冊表單 */}
          <div className="container__form container--signup">
            <form action="#" className="form" id="form1" onSubmit={handleFormSubmit}>
              <h2 className="form__title">註冊會員</h2>
              <label htmlFor="username">姓名</label>
              <input
                type="text"
                name="username"
                id="username"
                title="請輸入姓名"
                placeholder="王大明"
                required
                autoComplete="on"
                autoFocus
              />
              <label htmlFor="birthday">生日</label>
              <input
                type="date"
                name="birthday"
                id="birthday"
                title="請選擇生日"
              />
              <label htmlFor="tel">聯絡電話</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                title="請輸入連絡電話"
                placeholder="0987654321"
                multiple
                autoComplete="on"
              />
              <label htmlFor="email_username">信箱</label>
              <input
                type="username"
                name="email_username"
                id="email_username"
                title="請輸入username"
                placeholder="example@yourusername.com"
                size="50px"
              />
              <label htmlFor="password-u">密碼</label>
              <input
                type="password"
                name="password-u"
                id="password-u"
                title="請輸入密碼"
                placeholder="請輸入8位數包含英文和數字"
                autoComplete="on"
                size="50px"
              />
              <label htmlFor="password-c">確認密碼</label>
              <input
                type="password"
                name="password-c"
                id="password-c"
                title="請再次輸入密碼"
                placeholder="請再次輸入密碼"
                autoComplete="on"
                size="50px"
              />
              <button className="btn signup">註冊</button>
            </form>
          </div>
          {/* 登入 */}
          <div className="container__form container--signin">
            <form action="#" className="form" id="loginForm" onSubmit={handleFormSubmit}>
              <h2 className="form__title">登入</h2>
              <label htmlFor="login_username">信箱</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                title="請輸入帳號"
                placeholder="請輸入帳號"
                required
              />
              <label htmlFor="password">密碼</label>
              <input
               type="password"
               id="password"
               name="password"
               value={formData.password}
               onChange={handleInputChange}
               title="請輸入密碼"
               placeholder="請輸入密碼"
               autoComplete="on"
               required
              />
              <button type="button" className="btn signin" onClick={handleSignInClick}>
                登入
              </button>
              <button type="button" className="btn google ">
                Sign in with Google
              </button>
            </form>
          </div>
          {/* Overlay */}
          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button className="btn" id="signIn" onClick={handleSignInClick}>
                  登入
                </button>
              </div>
              <div className="overlay__panel overlay--right">
                <button type="button" className="btn" id="signUp" onClick={handleSignUpClick}>
                  註冊
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
