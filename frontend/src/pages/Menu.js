import React from "react";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <div>
      <main>
        <section className="banner_menu">
          <div className="deco_plus_carousel">
            <h2 className="drinks_deco">DRINKS</h2>
            <div className="menu-carousel">
              <div className="carousel-item carousel-item--1">
                <div className="carousel-item__image"></div>
                <div className="carousel-item__caption">
                  <div className="carousel-item__container">
                    <h3 className="carousel-item__english">
                      Salted Cherry Blossoms
                    </h3>
                    <h3 className="carousel-item__mandarin">鹽漬櫻花</h3>
                    <p className="carousel-item__description">
                      ｜琴酒、梅酒、櫻花、鹽｜
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item carousel-item--2">
                <div className="carousel-item__image"></div>
                <div className="carousel-item__caption">
                  <div className="carousel-item__container">
                    <h3 className="carousel-item__english">
                      Whisky Osmanthus infused
                    </h3>
                    <h3 className="carousel-item__mandarin">桂花融情</h3>
                    <p className="carousel-item__description">
                      ｜咖啡、鹹奶蓋、威士忌、桂花、抹茶｜
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item carousel-item--3">
                <div className="carousel-item__image"></div>
                <div className="carousel-item__caption">
                  <div className="carousel-item__container">
                    <h3 className="carousel-item__english">Amber Iced Tea</h3>
                    <h3 className="carousel-item__mandarin">琥珀冰茶</h3>
                    <p className="carousel-item__description">
                      ｜威士忌、桂花、茶酒、紫蘇｜
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel__nav">
            <figure id="moveLeft" className="carousel__arrow">
              <img src="/images/menu/arrow_left.svg" alt="" />
            </figure>
            <figure id="moveRight" className="carousel__arrow">
              <img src="/images/menu/arrow_right.svg" alt="" />
            </figure>
          </div>
        </section>

        <section className="pages_menu">
          <ul className="menu_category">
            <li className="menu_category_li">
              <h4 onclick="showCategory('category1')">河林特調</h4>
              <figure>
                <img src="images/menu/btn-light.svg" alt="" />
              </figure>
            </li>
            <li className="menu_category_li">
              <h4 onclick="showCategory('category2')">季節限定</h4>
              <figure>
                <img src="images/menu/btn-light.svg" alt="" />
              </figure>
            </li>
            <li className="menu_category_li">
              <h4 onclick="showCategory('category3')">經典調酒</h4>
              <figure>
                <img src="images/menu/btn-light.svg" alt="" />
              </figure>
            </li>
            <li className="menu_category_li">
              <h4 onclick="showCategory('category4')">軟性飲料</h4>
              <figure>
                <img src="images/menu/btn-light.svg" alt="" />
              </figure>
            </li>
            <li className="menu_category_li">
              <h4 onclick="showCategory('category5')">美味餐點</h4>
              <figure>
                <img src="images/menu/btn-light.svg" alt="" />
              </figure>
            </li>
          </ul>

          <div className="menu_table">
            <table className="product-info" id="category1">
              <tr>
                <th>春天</th>
                <td>Spring</td>
                <td className="price">$ 350</td>
              </tr>
              <tr>
                <th>鹽漬櫻花</th>
                <td>Salted Cherry Blossoms</td>
                <td className="price">$ 360</td>
              </tr>
              <tr>
                <th>桂花融情</th>
                <td>Whisky Osmanthus</td>
                <td className="price">$ 360</td>
              </tr>
              <tr>
                <th>洛神蜜餞</th>
                <td>Candided roselle</td>
                <td className="price">$ 400</td>
              </tr>
              <tr>
                <th>琥珀冰茶</th>
                <td>Amber Iced Tea</td>
                <td className="price">$ 400</td>
              </tr>
            </table>
            <table className="product-info" id="category2">
              <tr>
                <th>節制</th>
                <td>Temperance</td>
                <td className="price">$ 320</td>
              </tr>
              <tr>
                <th>甜點</th>
                <td>Dessert</td>
                <td className="price">$ 320</td>
              </tr>
              <tr>
                <th>微絲朋</th>
                <td>Vesper</td>
                <td className="price">$ 360</td>
              </tr>
              <tr>
                <th>浴血黑幫</th>
                <td>Peaky Blinders</td>
                <td className="price">$ 400</td>
              </tr>
              <tr>
                <th>寶劍皇后</th>
                <td>Queen of Sword</td>
                <td className="price">$ 360</td>
              </tr>
            </table>
            <table className="product-info" id="category3">
              <tr>
                <th>瑪格麗特</th>
                <td>Margarita</td>
                <td className="price">$ 260</td>
              </tr>
              <tr>
                <th>老友</th>
                <td>Oldpal</td>
                <td className="price">$ 280</td>
              </tr>
              <tr>
                <th>曼哈頓</th>
                <td>Manhattan</td>
                <td className="price">$ 280</td>
              </tr>
              <tr>
                <th>鏽釘</th>
                <td>Rusty Nail</td>
                <td className="price">$ 280</td>
              </tr>
              <tr>
                <th>血腥瑪麗</th>
                <td>Bloody Mary</td>
                <td className="price">$ 260</td>
              </tr>
            </table>
            <table className="product-info" id="category4">
              <tr>
                <th>檸檬茶</th>
                <td>Lemon Tea</td>
                <td className="price">$ 130</td>
              </tr>
              <tr>
                <th>紅牛</th>
                <td>Red Bull</td>
                <td className="price">$ 130</td>
              </tr>
              <tr>
                <th>柚香蜜桃</th>
                <td>Peach juice</td>
                <td className="price">$ 150</td>
              </tr>
              <tr>
                <th>鹹檸七</th>
                <td>Salted lemon 7</td>
                <td className="price">$ 180</td>
              </tr>
              <tr>
                <th>伯爵可可奶蓋</th>
                <td>Cocoa Milk Cap</td>
                <td className="price">$ 250</td>
              </tr>
            </table>
            <table className="product-info" id="category5">
              <tr>
                <th>美式薯片</th>
                <td>potato chips</td>
                <td className="price">$ 150</td>
              </tr>
              <tr>
                <th>月頭滷味</th>
                <td>Braised food</td>
                <td className="price">$ 250</td>
              </tr>
              <tr>
                <th>蜜汁烤雞翅</th>
                <td>Honey Chicken Wings</td>
                <td className="price">$ 300</td>
              </tr>
              <tr>
                <th>酥炸雞塊</th>
                <td>Fried chicken</td>
                <td className="price">$ 220</td>
              </tr>
              <tr>
                <th>爆米花</th>
                <td>Popcorn</td>
                <td className="price">$ 200</td>
              </tr>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
