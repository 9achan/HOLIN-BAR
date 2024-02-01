import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand bg-body-tertiary"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          "z-index": "999",
          padding: "0",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="images/logo_b.svg" alt="holin logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-2">
              <li className="nav-item">
                <Link to="/booking" className="nav-link">
                  訂位
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  菜單
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <img
                    src="./images/component/topbar-dark/user_d.svg"
                    alt="user icon"
                  />
                  會員
                </Link>
              </li>
            </ul>
            <button
              className="hamburger"
              id="popupButton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <div id="popupContainer" className="popup-container">
        <div className="popup-content">
          <span className="close" id="closeButton"></span>
          <div className="button-row">
            <button>
              <Link to="/">首頁</Link>
              <img
                src="./images/hamburger/pattern1_wave_white.svg"
                alt=""
                width="180px"
                height="170px"
              />
            </button>
            <button>
              <Link to="/news">最新消息</Link>
              <img
                src="./images/hamburger/pattern1_wave_white.svg"
                alt=""
                width="180px"
                height="170px"
              />
            </button>
            <button>
              <Link to="/aboutus">關於我們</Link>
              <img
                src="./images/hamburger/pattern1_wave_white.svg"
                alt=""
                width="180px"
                height="170px"
              />
            </button>
          </div>
          <div className="button-row">
            <button>
              <Link to="/signup">會員登入</Link>
              <img
                src="./images/hamburger/pattern1_wave_white.svg"
                alt=""
                width="180px"
                height="170px"
              />
            </button>
            <button>
              <Link to="/menu">菜單</Link>
              <img
                src="./images/hamburger/pattern1_wave_white.svg"
                alt=""
                width="180px"
                height="170px"
              />
            </button>
            <button>
              <Link to="/booking">一般訂位</Link>
              <img
                src="./images/hamburger/pattern1_wave_white.svg"
                alt=""
                width="180px"
                height="170px"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
