import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    name: '',
    password: '',
    email: '',
    telephone: '',
    birthday: ''
  });
  const [loginFormData, setLoginFormData] = useState({
    name: '',
    password: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    const containerElement = document.querySelector(".container");
    if (containerElement) {
      if (isSignUp) {
        containerElement.classList.add("right-panel-active");
      } else {
        containerElement.classList.remove("right-panel-active");
      }
    }
  }, [isSignUp]);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData({
      ...signUpFormData,
      [name]: value
    });
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const handleSignUpFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://holin-bar-backend-njle.onrender.com/users/', signUpFormData);
      console.log('註冊成功：', response.data);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('註冊失敗：', error);
      // 如果需要，在這裡添加一些處理註冊失敗的操作
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://holin-bar-backend-njle.onrender.com/users/login', loginFormData);
      const { token, _id } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user_id', _id);
      console.log('登入成功：', response.data);
      setLoggedIn(true);
    } catch (error) {
      console.error('登入失敗：', error);
    }
  };
  const handleConfirmation = () => {
    setRegistrationSuccess(false);
    setIsSignUp(false);
    setSignUpFormData({
      name: '',
      password: '',
      email: '',
      telephone: '',
      birthday: ''
    });
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className={`signupbox ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="container">
          {isSignUp ? (
            /* 註冊表單 */
            <div className="container__form container--signup">
              <form action="#" className="form" id="signupForm" onSubmit={handleSignUpFormSubmit}>
                <h2 className="form__title">註冊會員</h2>
                <label htmlFor="signup-username">姓名*</label>
                <input
                  type="text"
                  name="name"
                  id="signup-username"
                  value={signUpFormData.name}
                  onChange={handleSignUpInputChange}
                  title="請輸入姓名"
                  placeholder="王大明 (僅限中英文)"
                  required
                  autoComplete="on"
                  autoFocus
                />
                <label htmlFor="signup-password">密碼*</label>
                <input
                  type="password"
                  name="password"
                  id="signup-password"
                  value={signUpFormData.password}
                  onChange={handleSignUpInputChange}
                  title="請輸入密碼"
                  placeholder="請輸入8位數包含英文和數字"
                  autoComplete="on"
                  required
                />
                <label htmlFor="signup-email">信箱*</label>
                <input
                  type="email"
                  name="email"
                  id="signup-email"
                  value={signUpFormData.email}
                  onChange={handleSignUpInputChange}
                  title="請輸入電子郵件"
                  placeholder="example@yourusername.com"
                  required
                />
                <label htmlFor="signup-telephone">聯絡電話*</label>
                <input
                  type="tel"
                  name="telephone"
                  id="signup-telephone"
                  value={signUpFormData.telephone}
                  onChange={handleSignUpInputChange}
                  title="請輸入連絡電話"
                  placeholder="0987654321"
                  autoComplete="on"
                  required
                />
                <label htmlFor="signup-birthday">生日*</label>
                <input
                  type="number"
                  name="birthday"
                  id="signup-birthday"
                  value={signUpFormData.birthday}
                  onChange={handleSignUpInputChange}
                  title="請選擇生日"
                  placeholder="19990101"
                  required
                />
                <button className="btn signup">註冊</button>
                <div className="rwdContainer">
                  <h3>已經是會員？立即</h3>
                  <Link
                    // type="button"
                    className="rwdBtn"
                    id="signIn"
                    onClick={handleSignInClick}
                  >
                    登入
                  </Link>
                </div>
              </form>
            </div>
          ) : (
            /* 登入表單 */
            <div className="container__form container--signin">
              <form action="#" className="form" id="loginForm" onSubmit={handleLoginFormSubmit}>
                <h2 className="form__title">登入</h2>
                <label htmlFor="login-username">姓名*</label>
                <input
                  type="text"
                  name="name"
                  id="login-username"
                  value={loginFormData.name}
                  onChange={handleLoginInputChange}
                  title="請輸入姓名"
                  placeholder="請輸入姓名"
                  required
                />
                <label htmlFor="login-password">密碼*</label>
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  value={loginFormData.password}
                  onChange={handleLoginInputChange}
                  title="請輸入密碼"
                  placeholder="請輸入密碼"
                  autoComplete="on"
                  required
                />
                <button type="button" className="btn signin" onClick={handleLoginFormSubmit}>
                  登入
                </button>
                {/* <button type="button" className="btn google ">
                  Sign in with Google
                </button> */}
                <div className="rwdContainer rwdSignin">
                  <h3>還不是會員？馬上</h3>
                  <Link to="/signup"
                    // type="button"
                    className="rwdBtn"
                    id="signUp"
                    onClick={handleSignUpClick}
                  >
                    註冊
                  </Link>
                  <h3>領取會員禮</h3>
                </div>
              </form>
            </div>
          )}
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
      {/* 註冊成功彈出視窗 */}
      {registrationSuccess && (
        <div className="registration-success-popup">
          <div className="popup-content">
            <h2>註冊成功！</h2>
            <button onClick={handleConfirmation}>確認</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;

