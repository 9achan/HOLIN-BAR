import React, { useState } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const Booking = () => {
  // 人數加減區
  const [guestNo, setGuestNo] = useState(1);

  const cntUp = () => {
    setGuestNo((prevGuestNo) => Math.min(prevGuestNo + 1, 6));
  };

  const cntDown = () => {
    setGuestNo((prevGuestNo) => Math.max(prevGuestNo - 1, 1));
  };

  // 日曆區
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [clickedDays, setClickedDays] = useState(0);
  const [pickDate, setPickDate] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  // const formatDates = (dates) => {
  //   if (dates != null) {
  //     return dates.map((date) => {
  //       return (
  //         dayNames[date.getDay()] +
  //         "-" +
  //         date.getDate() +
  //         "-" +
  //         monthNames[date.getMonth()] +
  //         "-" +
  //         date.getFullYear()
  //       );
  //     });
  //   }
  //   return null;
  // };

  const daysInMonth = (month) => new Date(currentYear, month + 1, 0).getDate();

  const firstDayOffset = () => new Date(currentYear, currentMonth, 1).getDay();

  const displayCalendar = () => {
    const days = daysInMonth(currentMonth);
    const calendarContent = [];

    for (let i = 1; i < firstDayOffset(); i++) {
      calendarContent.push(
        <div key={`empty-${i}`} className="month flex center-vh"></div>
      );
    }

    for (let i = 1; i <= days; i++) {
      const day = new Date(currentYear, currentMonth, i).getDay();
      const dateString = `${dayNames[day]}-${i}-${monthNames[currentMonth]}-${currentYear}`;
      calendarContent.push(
        <div key={dateString} className="month">
          <div
            id={dateString}
            className="month-selector flex center-vh clickable"
            onClick={() => monthClick(i)}
          >
            <p>{i}</p>
          </div>
        </div>
      );
    }

    return calendarContent;
  };

  const monthClick = (day) => {
    const newPickDate = new Date(currentYear, currentMonth, day);
    setPickDate(newPickDate.toString().split(" ").slice(0, 4).join(" "));
    if (clickedDays === 0) {
      setSelectedDates([newPickDate]);
    } else {
      setSelectedDates([...selectedDates, newPickDate]);
    }
    setClickedDays((prevClickedDays) => prevClickedDays + 1);
  };

  const handleChangeMonth = (increment) => {
    if (currentMonth === 0 && increment === -1) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else if (currentMonth === 11 && increment === 1) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + increment);
    }
  };

  const [pickTime, setPickTime] = useState("");
  const saveData = () => {
    // 檢查用餐人數是否為空
    if (!guestNo) {
      alert("請填寫用餐人數");
      return;
    }

    // 檢查預約日期是否為空
    if (!pickDate) {
      alert("請選擇預約日期");
      return;
    }

    // 檢查預約時間是否為空
    if (!pickTime) {
      alert("請選擇預約時間");
      return;
    }
    
    sessionStorage.setItem("person", guestNo);
    sessionStorage.setItem("date", pickDate);
    sessionStorage.setItem("time", pickTime);
    // 使用 React Router 跳轉到下一頁
    window.location.href = "/booking/jumppage";
  };

  return (
    <>
      <section className="search-box">
        <div className="calender-panel">
          <div className="reserve">
            <div className="guests">
              <label for="guests">用餐人數</label>
              <div className="guests_counter">
                <button className="counter-btn" onClick={cntDown} type="button">
                  -
                </button>
                <input
                  type="text"
                  name="guests"
                  value={guestNo}
                  onChange={(e) => setGuestNo(e.target.value)}
                  readonly
                />
                <button className="counter-btn" onClick={cntUp} type="button">
                  +
                </button>
              </div>
            </div>
            <div className="reserve-dates">
              <label>預約日期</label>
              <div className="pickdate-box">
                <p id="pickDate" onChange={(e) => setPickDate(e.target.value)}>
                  {pickDate}
                </p>
              </div>
            </div>
            <div className="reserve-times">
              <label>預約時間</label>
              <select
                name="booking-times"
                id="pickTime"
                onChange={(e) => setPickTime(e.target.value)}
              >
                <option value="">請選擇</option>
                <option value="19:00">19:00</option>
                <option value="22:00">22:00</option>
                <option value="01:00">01:00</option>
              </select>
            </div>
          </div>
          <button className="booking-btn" onClick={saveData}>
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
            <div className="left" onClick={() => handleChangeMonth(-1)}>
              &lt;
            </div>
            <p>{monthNames[currentMonth].toUpperCase()}</p>
            <div className="right" onClick={() => handleChangeMonth(1)}>
              &gt;
            </div>
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
          <div className="calender-content">{displayCalendar()}</div>
        </div>
        <div className="calender-wrapper-deco-txt">
          <p>ハッピーパーティー</p>
        </div>
      </section>
    </>
  );
};

export default Booking;
