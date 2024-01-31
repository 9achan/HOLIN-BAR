import React from "react";
import Footer from "../components/Footer";


const Booking = () => {
  return (
    <div>
      <main>
        <section className="search-box">
          <div className="calender-panel">
            <div className="reserve">
              <div className="guests">
                <label for="guests">用餐人數</label>
                <div className="guests_counter">
                  <button className="counter-btn" id="cnt-down" type="button">
                    -
                  </button>
                  <input
                    id="guestNo"
                    type="text"
                    name="guests"
                    value="1"
                    readonly
                  />
                  <button className="counter-btn" id="cnt-up" type="button">
                    +
                  </button>
                </div>
              </div>
              <div className="reserve-dates">
                <label>預約日期</label>
                <div className="pickdate-box">
                  <p id="pickDate"></p>
                </div>
              </div>
              <div className="reserve-times">
                <label>預約時間</label>
                <select name="booking-times" id="pickTime">
                  <option value="19:00">19:00</option>
                  <option value="22:00">22:00</option>
                  <option value="01:00">01:00</option>
                </select>
              </div>
            </div>
            <button className="btn" onclick="saveData()">
              搜尋
            </button>
          </div>
        </section>

        <section className="calender-wrapper-box">
          <div className="calender-wrapper-deco">
            <figure className="mirrorY">
              <img src="images/booking/pattern5_deco.svg" alt="" />
            </figure>
            <figure className="mirrorX">
              <img src="images/booking/pattern5_deco.svg" alt="" />
            </figure>
          </div>
          <div className="calender-wrapper">
            <div className="calender-title">
              <div className="left">&lt;</div>
              <p></p>
              <div className="right">&gt;</div>
            </div>
            <div className="days">
              <p>MON</p>
              <p>TUE</p>
              <p>WED</p>
              <p>THU</p>
              <p>FRI</p>
              <p>SAT</p>
              <p>SUN</p>
            </div>
            <div className="calender-content"></div>
          </div>
          <div className="calender-wrapper-deco-txt">
            <p>ハッピーパーティー</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
