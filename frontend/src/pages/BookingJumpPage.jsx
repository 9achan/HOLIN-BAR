import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookingJumpPage = () => {
  const [isBookingInfoBtn, setIsBookingInfoBtn] = useState(true);

  useEffect(() => {
    const containerElement = document.querySelector(
      ".bookingJumpPageContainer"
    );
    if (containerElement) {
      if (isBookingInfoBtn) {
        containerElement.classList.add("right-panel-active");
      } else {
        containerElement.classList.remove("right-panel-active");
      }
    }
  }, [isBookingInfoBtn]);

  const handleBookingClick = () => {
    setIsBookingInfoBtn(false);
  };

  const [storedDataPerson, setStoredDataPerson] = useState("");
  const [storedDataDate, setStoredDataDate] = useState("");
  const [storedDataTime, setStoredDataTime] = useState("");

  useEffect(() => {
    const person = sessionStorage.getItem("person");
    const date = sessionStorage.getItem("date");
    const time = sessionStorage.getItem("time");

    setStoredDataPerson(person || "No data.");
    setStoredDataDate(date || "No data.");
    setStoredDataTime(time || "No data.");
  }, []);

  return (
    <>
      <div
        className={`bookingJumpPageBody ${
          isBookingInfoBtn ? "right-panel-active" : ""
        }`}
      >
        <div className="bookingJumpPageContainer right-panel-active">
          {/* <!-- bookingInfo --> */}
          <div className="bookingJumpPageContainer__form container--bookingInfo">
            <form action="#" className="form bookingInfoBox" id="bookingForm1">
              <h2>填寫訂位資訊</h2>
              <h3>
                先生/小姐您好
                <br />
                以下是您的訂位資訊
              </h3>
              {/* <!-- 訂位時間 --> */}
              <div className="timecheck">
                {/* <!-- 這裡將顯示表單數據 --> */}
                <p id="displayDataPerson">人數：{storedDataPerson}</p>
                <p id="displayDataDate">日期：{storedDataDate}</p>
                <p id="displayDataTime">時間：{storedDataTime}</p>
              </div>
              <div className="userinfo">
                {/* <!-- 姓名 --> */}
                <label htmlFor="bookingUserName">姓名</label>
                <input
                  type="text"
                  name="bookingUserName"
                  id="bookingUserName"
                  title="請輸入姓名"
                  placeholder="王大明"
                  required
                  autocomplete="on"
                  autofocus
                />
                {/* <!-- 電話 --> */}
                <label htmlFor="bookingTel">聯絡電話</label>
                <input
                  type="tel"
                  name="bookingTel"
                  id="bookingTel"
                  title="請輸入連絡電話"
                  placeholder="0987654321"
                  multiple
                  required
                />
              </div>
            </form>
          </div>

          {/* <!-- bookingChk --> */}
          <div className="bookingJumpPageContainer__form container--bookingChk">
            {/* <!-- 確定訂位區 --> */}
            <form action="#" className="form bookingChkBox" id="bookingForm2">
              <h2>您已訂位成功!</h2>
              <div className="holininf">
                <h3 className="holintext">河林 HoLin</h3>
                <h3 className="tel-add">
                  02-2345-6789
                  <br />
                  台北市中正區濟南路一段321號
                </h3>
              </div>
              <h3>
                先生/小姐您好
                <br />
                以下是您的訂位資訊
              </h3>
              {/* <!-- 訂位時間 --> */}
              <div className="timecheck">
                {/* <!-- 這裡將顯示表單數據 --> */}
                <p id="displayDataPerson-1">人數：{storedDataPerson}</p>
                <p id="displayDataDate-1">日期：{storedDataDate}</p>
                <p id="displayDataTime-1">時間：{storedDataTime}</p>
              </div>
              {/* <!-- 領優惠券 --> */}
              <div className="bonus">
                <h3>
                  還不是會員? 馬上<Link to="/signup">加入會員</Link>領取優惠券
                </h3>
              </div>
              {/* <!-- 活動資訊 --> */}
              <div className="activity">
                <Link to="/news">
                  <h3>活動資訊&nbsp;</h3>
                  <figure>
                    <img src="../images/members/arrow_right.svg" alt="" />
                  </figure>
                </Link>
              </div>
            </form>
          </div>
          {/* <!-- Overlay --> */}
          <div className="bookingJumpPageContainer__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button
                  type="button"
                  className="bookingJumpPageBtn"
                  id="bookingInfo"
                  onClick={handleBookingClick}
                >
                  訂位
                </button>
              </div>
              <div className="overlay__panel overlay--right">
                <Link to="/" className="bookingJumpPageBtn">
                  河林
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingJumpPage;
