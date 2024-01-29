const bookingInfoBtn = document.getElementById("bookingInfo");
// const bookingChkBtn = document.getElementById("bookingChk");
const fistForm = document.getElementById("bookingForm1");
const secondForm = document.getElementById("bookingForm2");
const container = document.querySelector(".bookingJumpPageContainer");

bookingInfoBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

// bookingChkBtn.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// });

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());





// 檢查 sessionStorage 中是否有儲存的數據
var storedDataPerson = sessionStorage.getItem("person");
var storedDataDate = sessionStorage.getItem("date");
var storedDataTime = sessionStorage.getItem("time");
if (storedDataPerson) {
  document.getElementById("displayDataPerson").textContent = "人數: " + storedDataPerson;
  document.getElementById("displayDataPerson-1").textContent = "人數: " + storedDataPerson;
} else {
  document.getElementById("displayDataPerson").textContent = "No data.";
  document.getElementById("displayDataPerson-1").textContent = "No data.";
}

if (storedDataDate) {
  document.getElementById("displayDataDate").textContent = "日期: " + storedDataDate;
  document.getElementById("displayDataDate-1").textContent = "日期: " + storedDataDate;
} else {
  document.getElementById("displayDataDate").textContent = "No data.";
  document.getElementById("displayDataDate-1").textContent = "No data.";
}

if (storedDataTime) {
  document.getElementById("displayDataTime").textContent = "時間: " + storedDataTime;
  document.getElementById("displayDataTime-1").textContent = "時間: " + storedDataTime;
} else {
  document.getElementById("displayDataTime").textContent = "No data.";
  document.getElementById("displayDataTime-1").textContent = "No data.";
}