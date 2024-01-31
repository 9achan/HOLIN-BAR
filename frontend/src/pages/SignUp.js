import React from 'react';

const SignUp = () => {
    return (
        <>
            <div className="container right-panel-active">
                {/* <!-- Sign Up --> */}
                <div className="container__form container--signup">
                    <form action="#" className="form" id="form1">
                        <h2 className="form__title">註冊會員</h2>
                        {/* <!-- 姓名 --> */}
                        <label htmlFor="username">姓名</label>
                        <input type="text" name="username" id="username" title="請輸入姓名" placeholder="王大明" required
                            autocomplete="on" autofocus />
                        {/* <!-- 生日(選填) --> */}
                        <label htmlFor="birthday">生日</label>
                        <input type="date" name="birthday" id="birthday" title="請選擇生日" />
                        {/* <!-- 電話 --> */}
                        <label htmlFor="tel">聯絡電話</label>
                        <input type="tel" name="tel" id="tel" title="請輸入連絡電話" placeholder="0987654321" multiple
                            autocomplete="on" />
                        {/* <!-- 信箱 --> */}
                        <label htmlFor="email_username">信箱</label>
                        <input type="username" name="email_username" id="email_username" title="請輸入username"
                            placeholder="example@yourusername.com" size="50px" />
                        {/* <!-- 密碼 --> */}
                        <label htmlFor="password-u">密碼</label>
                        <input type="password" name="password-u" id="password-u" title="請輸入密碼" placeholder="請輸入8位數包含英文和數字"
                            autocomplete="on" size="50px" />
                        {/* <!-- 密碼確認 --> */}
                        <label htmlFor="password-c">確認密碼</label>
                        <input type="password" name="password-c" id="password-c" title="請再次輸入密碼" placeholder="請再次輸入密碼"
                            autocomplete="on" size="50px" />
                        {/* <!-- 註冊btn --> */}
                        <button className="btn signup">註冊</button>
                    </form>
                </div>
                {/* <!-- Login In --> */}
                <div className="container__form container--signin">
                    <form action="#" className="form" id="loginForm">
                        <h2 className="form__title">登入</h2>
                        {/* <!-- 信箱 --> */}
                        {/* <!-- <input type="eusername" placeholder="Eusername" className="input" /> --> */}
                        {/* <!-- <label for="email">信箱</label> */}
                        {/* <input type="email" name="email" id="email" title="請輸入Email" placeholder="example@yourusername.com" required> --> */}
                        <label htmlFor="login_username">信箱</label>
                        <input type="email" id="login_username" name="login_username" title="請輸入Email"
                            placeholder="example@yourusername.com" required />
                        {/* <!-- 密碼 --> */}
                        {/* <!-- <input type="password" placeholder="Password" className="input" /> --> */}
                        <label htmlFor="password">密碼</label>
                        <input type="password" name="password" id="password" title="請輸入密碼" placeholder="請輸入8位數包含英文和數字"
                            autocomplete="on" required />
                        {/* <!-- 記住我 --> */}
                        <a href="#" className="link">忘記密碼?</a>
                        
                        {/* <!-- 登入btn --> */}
                        <button type="button" onClick="" className="btn signin">登入</button>
                        {/* <!-- google --> */}
                        <button type="button" className="btn google ">
                            {/* <!-- <h3>Sign in with Google</h3> --> */}
                            Sign in with Google
                        </button>
                    </form>
                </div>
                {/* <!-- Overlay --> */}
                <div className="container__overlay">
                    <div className="overlay">
                        <div className="overlay__panel overlay--left">
                            <button className="btn" id="signIn">登入</button>
                        </div>
                        <div className="overlay__panel overlay--right">
                            <button type="button" className="btn" id="signUp">註冊</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default SignUp