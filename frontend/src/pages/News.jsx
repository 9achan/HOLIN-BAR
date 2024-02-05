import React from "react";

const News = () => {
  return (
    <section className="container_news">
      <div className="bignews">
        <div className="maincard">
          <figure>
            <img
              src="./images/news/pattern4_wind.svg"
              className="img-fluid"
              alt=""
            />
          </figure>
          <h2>最新消息</h2>
          <figure>
            <img
              src="./images/news/pattern4_wind.svg"
              className="img-fluid"
              alt=""
            />
          </figure>
        </div>
        <div className="mainnew d-flex">
          <img src="./images/news/news1.jpg" alt="" className="mr-4" />
          <div className="mainnew_text">
            <h3 className="mb-4">以Back To Shot 迎接 Back To School ！</h3>
            <p>
              2024.02.19 - 2024.03.03
              <br />
              只要每人平均消費超過$250，則能在離開前，以學生證一人換上一杯Shot，只要每人平均消費超過$500，則能在離開前，以學生證一人換上二杯Shot，以此類推！{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="newstable d-flex flex-wrap justify-content-center">
        <div className="newscard c1 card m-4">
          <img src="./images/news/news2.png" alt="" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">SHOW出你的攝影集！</h3>
            <p className="card-text">
              2023.12.31
              <br />
              今晚河林將為大家準備相機和相紙，讓我們一起把2023年最後一晚好好記錄下來！
              活動內容：我們會安排攝影師對每一桌進行拍照，並且在2024來臨的那一刻進現場沖洗。(相片數量，先到先拍)
            </p>
          </div>
        </div>
        <div className="newscard c2 card m-4">
          <img src="./images/news/news3.png" alt="" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">
              愛喝酒的你/妳還不快揪朋友們一起來參與？！
            </h3>
            <p className="card-text">
              2023.12.23 - 2023.12.24
              <br />
              今年聖誕酒精路跑，河林邀請你各位一起穿梭在台北各個角落、一起喝到茫、一起組隊玩遊戲！愛喝酒的你/妳還不快揪朋友們一起來參與？！***參加者需穿戴與綠色或三葉草相關的服裝或飾品。由小隊輔帶著大家一起穿梭在台北的各個角落，快來和我們一起同樂吧!!!
            </p>
          </div>
        </div>
        <div className="newscard c3 card m-4">
          <img src="./images/news/news4.png" alt="" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">Halloween DJ Night</h3>
            <p className="card-text">
              2023.10.31
              <br />
              當天我們邀請了兩位DJ @mr_lobby & anicorn @reshueimeile
              分別為Halloween帶來2組音樂，以80年代Disco & City
              Pop呈現小舞步音樂派對。 ***Dress
              code：80年代服飾、精心裝扮的萬聖妝容 ***活動時間：2023.10.31
              pm10:00
            </p>
          </div>
        </div>
        <div className="newscard c4 card m-4">
          <img src="./images/news/news5.png" alt="" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">福虎祭aka今夏最荒誕拼酒賽事！</h3>
            <p className="card-text">
              2023.07.23 - 2023.07.24
              <br />
              集美食、酒水、音樂、遊戲於一身的精釀嘉年華
              aka今夏最荒誕拼酒賽事！最大贏家可獲得河林90-days-pass，未來一季讓你天天都能have
              fun！
              圖片上錯年度啦～真是sorry..在此開出bonus：祝河林闆娘生日快樂，立刻獲得河林特調乙杯
              年度限定活動，就等你耶
            </p>
          </div>
        </div>
      </div>
      <div className="pagemark d-flex justify-content-center">
        <div className="arrow-box">
          <figure className="arrow_left">
            <img src="./images/news/arrow_left.svg" alt="arrow_left" />
          </figure>
          <div className="pagenum d-flex">
            <p className="mx-2">1</p>
            <p className="mx-2">2</p>
          </div>
          <figure className="arrow_right">
            <img src="./images/news/arrow_right.svg" alt="arrow_right" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default News;
