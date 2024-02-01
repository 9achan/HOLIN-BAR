export const saveData = () => {
  var data1 = document.getElementById("guestNo").value;
  var data2 = document.getElementById("pickDate").value;
  var data3 = document.getElementById("pickTime").value;

  sessionStorage.setItem("person", [data1]); // 使用 sessionStorage 存储数据
  sessionStorage.setItem("date", [data2]); // 使用 sessionStorage 存储数据
  sessionStorage.setItem("time", [data3]); // 使用 sessionStorage 存储数据
  window.location.href = "bookingJumpPage.html"; // 跳转到下一页
};
