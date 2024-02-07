import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* 主要內容區 */}
      <div className="aboutus">
        {/* box1-河林圖 */}
        <div className="logo-pic_box">
          <div className="ho">
            <figure>
              <img src="./images/aboutus/01.png" alt="" />
            </figure>
            <figure className="superho">
              <img src="./images/aboutus/ho.svg" alt="" />
            </figure>
          </div>
          <div className="lin">
            <figure className="two">
              <img src="./images/aboutus/02.png" alt="" />
            </figure>
            <figure className="three">
              <img src="./images/aboutus/03.png" alt="" />
            </figure>
            <figure className="superlin">
              <img src="./images/aboutus/lin.svg" alt="" />
            </figure>
          </div>
          <p>
            歡迎蒞臨河林－獨具創新精神、茶與酒融合的酒吧
            <br />
            這裡是一個匯聚研發奇思妙想的實驗場所，將茶的深厚文化與酒的獨特風味融為一體。
          </p>
          <p className="aboutusrwdbox_p1">
            歡迎蒞臨河林－
            <br />
            獨具創新精神、茶與酒融合的酒吧
            <br />
            這裡是一個匯聚研發奇思妙想的實驗場所，
            <br />
            將茶的深厚文化與酒的獨特風味融為一體。
          </p>
        </div>
        {/* box2-都是字的 */}
        <div className="aboutus_textgroup">
          <h2>將茶與酒融合的完美方案</h2>
          <div className="textgroup_box">
            <p>
              河林以研發茶融合酒為己任，創造出一系列令人驚艷的茶酒調製品。
              <br />
              我們的茶葉選擇來自世界各地的優質茶園，經由精密的研磨與混合，
              <br />
              巧妙地融入各式精選烈酒，打造出獨具品味的茶酒風味。
            </p>
            {/* 線 */}
            <div className="line1"></div>
          </div>
        </div>
        {/* box3-1字2圖 */}
        <div className="text-pic_box">
          <div className="bluepic_box">
            <p>
              河林研發團隊擁有豐富的調酒經驗與對茶文化的理解，
              <br />
              我們透過對不同茶種、烘焙度和風味特點的細緻研究，
              <br />
              將茶的豐富層次巧妙地融入每一杯調酒。
              <br />
              『這不僅是一種技藝，更是對茶與酒藝術的極致追求』
            </p>
            <figure>
              <img src="./images/aboutus/aboutuspic1.png" alt="" />
            </figure>
          </div>
          <div className="line_img">
            {/* 線 */}
            <div className="line2"></div>
            <figure>
              <img src="./images/aboutus/aboutuspic2.png" alt="" />
            </figure>
          </div>
        </div>
        {/* box4-剩一行字了 */}
        <div className="aboutus_text">
          <p>
            每一款河林研發的茶酒，都能為我們的顧客帶來一場口感和香氣的藝術表演，
            <br />
            讓您在每一滴酒中都能感受到獨特的茶香和酒味交融的奇妙體驗。
            <br />
            歡迎您共同參與這場茶與酒的奇幻冒險，感受無限的可能性！
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
