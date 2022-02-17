import React, { useState, useEffect } from "react";
import axios from "axios";

import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import left from "../../../assets/images/categories_images/left.png";
import right from "../../../assets/images/categories_images/right.png";

import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { addCoins } from "../../../store/coins_store";
import { add_coinId } from "../../../store/coin_id";
import { add_coinDetail } from "../../../store/coin_detail";

SwiperCore.use([Autoplay, Pagination]);

function Categories() {
  //  const [coins, setCoins] = useState([]);
  const [activeCategory, setActiveCategory] = useState("bitcoin");
  const dispatch = useDispatch();
  const coins = useSelector((s) => s.coins_store.coins);

  localStorage.setItem("bitcoin_data", JSON.stringify(coins[0]));

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false
`
      )
      .then(({ data }) => {
        dispatch(addCoins(data));
        //   console.log(data);
      });
  }, []);
  return (
    <div className="catedories">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        loop={true}
        speed={900}
        spaceBetween={0}
        slidesPerView={5}
      >
        <div className="categories__content">
          {/* <div className="categories__left">
            <img src={left} alt="" />
          </div> */}
          <div className="categories__items">
            {coins.map((el) => (
              <SwiperSlide key={el.id}>
                <div
                  className={
                    activeCategory === el.id
                      ? `categories__item _active`
                      : `categories__item`
                  }
                  onClick={() => {
                    dispatch(add_coinId(el.id));
                    dispatch(add_coinDetail(el));
                    setActiveCategory(el.id);
                  }}
                >
                  <div className="categories__item--left">
                    <div className="categories__item--left--logo">
                      <img src={el.image} alt="" />
                    </div>
                  </div>
                  <div className="categories__item--right">
                    <div className="categories__item--right--items">
                      <p>{el.symbol}</p>
                      <p>{el.name}</p>
                    </div>
                    <div className="categories__item--right--items">
                      <p>{el.current_price.toFixed(2)}$</p>
                      {el.price_change_percentage_24h < 0 ? (
                        <p className="categories__item--right--percent red">
                          {el.price_change_percentage_24h.toFixed(2)} %
                        </p>
                      ) : (
                        <p className="categories__item--right--percent green">
                          {el.price_change_percentage_24h.toFixed(2)} %
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          {/* <div className="categories__right">
            <img src={right} alt="" />
          </div> */}
        </div>
      </Swiper>
    </div>
  );
}

export default Categories;

// return (
//   <div className="catedories">
//     <div className="categories__content">
//       <div className="categories__left">
//         <img src={left} alt="" />
//       </div>
//       <div className="categories__items">
//         {cryptos.map((el) => (
//           <div key={el.id} className="categories__item">
//             <div className="categories__item--left">
//               <img src={el.image} alt="" />
//             </div>
//             <div className="categories__item--right">
//               <div className="categories__item--right--items">
//                 <p>{el.short_name}</p>
//                 <p>{el.name}</p>
//               </div>
//               <div className="categories__item--right--items">
//                 <p>{el.price}</p>
//                 <p className="categories__item--right--percent">
//                   {el.percent} %
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="categories__right">
//         <img src={right} alt="" />
//       </div>
//     </div>
//   </div>
// );
