import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

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

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };
  return (
    <>
      <div className={`signupbox ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="container">
          {/* Sign Up */}
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
          {/* Login In */}
          <div className="container__form container--signin">
            <form action="#" className="form" id="loginForm" onSubmit={handleFormSubmit}>
              <h2 className="form__title">登入</h2>
              <label htmlFor="login_username">信箱</label>
              <input
                type="email"
                id="login_username"
                name="login_username"
                title="請輸入Email"
                placeholder="example@yourusername.com"
                required
              />
              <label htmlFor="password">密碼</label>
              <input
                type="password"
                name="password"
                id="password"
                title="請輸入密碼"
                placeholder="請輸入8位數包含英文和數字"
                autoComplete="on"
                required
              />
              <a href="#" className="link"></a>
              <button type="button" className="btn signin">
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
