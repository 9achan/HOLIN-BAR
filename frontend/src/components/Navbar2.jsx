import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

import "../css/navbar2.css";

const Navbar2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

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

  const [isHovered, setIsHovered] = useState(false);

  const addHoverClass = () => {
    setIsHovered(true);
  };

  const removeHoverClass = () => {
    setIsHovered(false);
  };

  const hoverTargets = document.querySelectorAll(".hover-target");

  for (let i = hoverTargets.length - 1; i >= 0; i--) {
    hoverTargets[i].addEventListener("mouseover", addHoverClass);
    hoverTargets[i].addEventListener("mouseout", removeHoverClass);
  }

  const [isVisible, setIsVisible] = useState(true);
  const toggleMenu = () => {
    setIsVisible(!isVisible);

    const body = document.querySelector("body");
    if (body.classList.contains("nav-active")) {
      body.classList.remove("nav-active");
    } else {
      body.classList.add("nav-active");
    }
  };

  // const closeMenu = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <header className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <Link to="/" className="hover-target">
              <figure style={{width: "64px"}}>
                <img src="images/holinLogo.svg" alt="holin logo" />
              </figure>
            </Link>
          </div>
          <nav>
            {isVisible && (
              <ul className="menu">
                <li>
                  <Link to="/booking" className="hover-target nav-link">
                    訂位
                  </Link>
                </li>

                <li>
                  <Link to="/menu" className="hover-target nav-link">
                    菜單
                  </Link>
                </li>
                <li>
                  {/* 使用條件渲染決定要顯示 Dropdown 還是 Link */}
                  {isLoggedIn ? (
                    <Dropdown>
                      <Dropdown.Toggle
                        className="hover-target nav_member nav-link"
                        id="dropdown-basic"
                      >
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
                    <Link
                      to="/signup"
                      className="hover-target nav_member nav-link"
                    >
                      會員
                    </Link>
                  )}
                </li>
              </ul>
            )}
          </nav>
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target" onClick={toggleMenu}>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="nav">
        <div className="nav__content">
          <div className="button-row">
            <button>
              <Link to="/" onClick={toggleMenu}>
                <div>
                  <img
                    src="./images/hamburger/pattern1_wave_white.svg"
                    alt=""
                    width="180px"
                    height="170px"
                  />
                  <span className="button-text">首頁</span>
                </div>
              </Link>
            </button>
            <button>
              <Link to="/news" onClick={toggleMenu}>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
                <span className="button-text">最新消息</span>
              </Link>
            </button>
            <button>
              <Link to="/aboutus" onClick={toggleMenu}>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
                <span className="button-text">關於我們</span>
              </Link>
            </button>
          </div>
          <div className="button-row">
            <button>
              <Link to="/signup" onClick={toggleMenu}>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
                <span className="button-text">會員登入</span>
              </Link>
            </button>
            <button>
              <Link to="/menu" onClick={toggleMenu}>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
                <span className="button-text">菜單</span>
              </Link>
            </button>
            <button>
              <Link to="/booking" onClick={toggleMenu}>
                <img
                  src="./images/hamburger/pattern1_wave_white.svg"
                  alt=""
                  width="180px"
                  height="170px"
                />
                <span className="button-text">一般訂位</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
