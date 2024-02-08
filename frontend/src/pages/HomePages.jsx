import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";

import "../css/swCarousel.css";

const HomePages = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ededed",
          "--swiper-pagination-color": "#ededed",
          marginTop: "80px",
          height: "85vh",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: "url('../../images/index/banner-1.2.png')",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            河林
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            喝拎
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            HOLIN
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </Swiper>
      <section className="container-fluid">
        <div className="intro1 mb-5">
          <h2 className="heading">
            河<br />の<br />林
          </h2>
          <div className="intro1_contents">
            <div className="intro1_info">
              <p className="intro1_info_txt">
                河林，是以音樂與藝文為核心價值
                <br />
                結合茶類、酒飲以及當地人文料理的餐飲酒吧
                <br />
                由一位擁有電影背景的主理人與熱愛音樂的朋友於2023年共同創立
                <br />
                旨在酒吧餐飲空間中讓客人找到歸屬感，並營造出讓人回味的空間氛圍
                <br />
              </p>
              <ul className="intro1_info_access">
                <li className="intro1_info_access_holin">河林</li>
                <li className="intro1_info_access_addr">
                  100台北市中正區濟南路一段321號
                </li>
                <li className="intro1_info_access_time">
                  19時&sim;02時
                  <br />
                  バー不定休
                </li>
              </ul>
            </div>
            <div className="intro1_img">
              <div className="intro1_img_large">
                <img
                  src="./images/index/aboutus1-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="intro1_img_small">
                <img
                  src="./images/index/aboutus1-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="intro2">
          <div className="intro2_img">
            <div className="intro2_img_item">
              <img
                src="./images/index/aboutus2-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="intro2_img_item">
              <img
                src="./images/index/aboutus2-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="intro2_img_item">
              <img
                src="./images/index/aboutus2-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="intro2_contents">
            <h2 className="heading">
              最<br />高<br />品<br />質
            </h2>
            <p className="intro2_contents_txt">
              以台灣鐵觀音與高山茶製作雞尾酒
              <br />
              結合台灣酒品與獨立音樂企劃
              <br />
              並在菜色上重新演繹當地小吃
              <br />
              音樂元素貫穿整個餐點
              <br />
              歌曲詞句的情感融入酒單
              <br />
              並搭配小型音樂演出
              <br />
              營造出令人流連忘返的台灣風味
              <br />
            </p>
          </div>
        </div>
        <div className="intro3 mb-5">
          <h2 className="heading">
            ハ<br />ッ<br />ピ<br />ー<br />パ<br />ー<br />テ<br />ィ<br />ー
          </h2>
          <div className="intro3_contents">
            <div className="intro3_info">
              <p className="intro3_info_title">
                台湾人にぴったりのプレミアムバーテンダー
              </p>
              <p className="intro3_info_txt">
                河林以獨特的茶酒風格宣揚在地文化
                <br />
                成為台灣酒文化的代表品牌
                <br />
                以台灣鐵觀音與高山茶製作雞尾酒
                <br />
                結合台灣酒品與獨立音樂企劃
                <br />
                並在菜色上重新演繹當地小吃
                <br />
                音樂元素貫穿整個餐點
                <br />
                歌曲詞句的情感融入酒單
                <br />
                並搭配小型音樂演出
                <br />
                營造出令人流連忘返的台灣風味
                <br />
              </p>
            </div>
            <div className="intro3_img">
              <img
                src="./images/index/aboutus3-1.jpg"
                alt=""
                className="intro3_img_large"
              />
              <img
                src="./images/index/aboutus3-2.jpg"
                alt=""
                className="intro3_img_small"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="envtpic">
        <img src="./images/index/index_bg.jpg" className="img-fluid" alt="" />
      </section>
    </>
  );
};

export default HomePages;
