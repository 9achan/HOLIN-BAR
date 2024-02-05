import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("authToken");

    if (userId && token) {
      loadMemberInfo(userId, token);
    }
  }, []);

  const loadMemberInfo = async (userId, token) => {
    try {
      const response = await axios.get(
        `http://localhost:5501/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const memberName = response.data.name;
      setUsername(memberName);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(
        "Failed to load member information:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLogout = () => {
    // 清除 localStorage 中的數據
    localStorage.removeItem("user_id");
    localStorage.removeItem("authToken");
    // 重置狀態
    setUsername("");
    setIsLoggedIn(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary">
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
              <li className="nav-item dropdown">
                {/* 使用條件渲染決定要顯示 Dropdown 還是 Link */}
                {isLoggedIn ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav_member nav-link dropdown-toggle"
                      id="dropdown-basic"
                    >
                      {/* <img
                      src="./images/component/topbar-dark/user_d.svg"
                      alt="user icon"
                      /> */}
                      {username}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">會員資料</Dropdown.Item>
                      <Dropdown.Item href="#">優惠券</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#" onClick={handleLogout}>
                        登出
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link to="/signup" className="nav_member nav-link">
                    會員
                  </Link>
                )}
              </li>
            </ul>
            {/* <button
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
            </button> */}
          </div>
        </div>
      </nav>
      {/* 漢堡v2 */}
      <div id="popupContainer" className="popup-container">
        <label id="hamburger_label" htmlFor="hamburger_input">
          <input
            type="checkbox"
            id="hamburger_input"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <span className="hamburger_span">
            <span className="hamburger_span2"></span>
          </span>
          <div id="button_rowbox" className={isOpen ? "open" : ""}>
            <div className="button-row">
              <button>
                <Link to="/" onClick={closeMenu}>
                  首頁
                </Link>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
              </button>
              <button>
                <Link to="/news" onClick={closeMenu}>
                  最新消息
                </Link>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
              </button>
              <button>
                <Link to="/aboutus" onClick={closeMenu}>
                  關於我們
                </Link>
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
                <Link to="/signup" onClick={closeMenu}>
                  會員登入
                </Link>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
              </button>
              <button>
                <Link to="/menu" onClick={closeMenu}>
                  菜單
                </Link>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
              </button>
              <button>
                <Link to="/booking" onClick={closeMenu}>
                  一般訂位
                </Link>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
              </button>
            </div>
          </div>
        </label>
      </div>
      {/* <div id="popupContainer" className="popup-container">
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
      </div> */}
    </>
  );
};

export default Navbar;
