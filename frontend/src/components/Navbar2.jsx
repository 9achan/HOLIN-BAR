import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

import "../css/navbar2.css";

const Navbar2 = () => {
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

  const toggleMenu = () => {
    const body = document.querySelector("body");
    if (body.classList.contains("nav-active")) {
      body.classList.remove("nav-active");
    } else {
      body.classList.add("nav-active");
    }
  };

  return (
    <>
      <header className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <Link to="/" className="hover-target">
              <img src="images/logo_b.svg" alt="holin logo" />
            </Link>
          </div>
          <nav>
            <ul className="menu">
              <li>
                <Link to="/booking" className="hover-target">
                  訂位
                </Link>
              </li>

              <li>
                <Link to="/menu" className="hover-target">
                  菜單
                </Link>
              </li>
              <li>
                {/* 使用條件渲染決定要顯示 Dropdown 還是 Link */}
                {isLoggedIn ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      className="hover-target"
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
                  <Link to="/signup" className="hover-target">
                    會員
                  </Link>
                )}
              </li>
            </ul>
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

export default Navbar2;
