import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

import "swiper/swiper.min.css";

import "./CryptoNews.css";

SwiperCore.use([Autoplay, Pagination]);

function CryptoNews() {
  return (
    <div className="cryptoNews">
      <div className="cryptoNews__content">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          loop={true}
          speed={900}
          spaceBetween={0}
          breakpoints={{
            1250: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 3,
            },
            430: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <a
              href="https://coinmarketcap.com/alexandria/article/join-coinmarketcap-s-new-free-api-scholarship-program"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cryptoNews__item">
                <div className="cryptoNews__img">
                  <img
                    src={
                      "https://s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/img/1639738636872_Free-API-Sponsorship-Program-(updated)-280x136.png"
                    }
                    alt=""
                  />
                </div>
                <div className="cryptoNews__title">
                  Get Free CoinMarketCap API
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://coinmarketcap.com/currencies/hashland/airdrop/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cryptoNews__item">
                <div className="cryptoNews__img">
                  <img
                    src={
                      "https://s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1645751024268_(1)%20Airdrop-280x136.png"
                    }
                    alt=""
                  />
                </div>
                <div className="cryptoNews__title">
                  Join The HashLand NFTs Airdrop!
                </div>
              </div>
            </a>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <a
              href="https://coinmarketcap.com/alexandria/article/podcast-super-bowl-crypto-ads-addiction-to-trading"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cryptoNews__item">
                <div className="cryptoNews__img">
                  <img
                    src={
                      "https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1641204376271_MM-280x136.jpeg"
                    }
                    alt=""
                  />
                </div>
                <div className="cryptoNews__title">
                  Podcast: Crypto Trading Gone Wrong?
                </div>
              </div>
            </a>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <a
              href="https://coinmarketcap.com/alexandria/landing/portfolio-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cryptoNews__item">
                <div className="cryptoNews__img">
                  <img
                    src={
                      "https://s2.coinmarketcap.com/static/new-alerts/61152358029ab00019681d99/img/1642729800564_Webp.net-compress-image%20(3).jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="cryptoNews__title">
                  Track Your Token Profits!
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CryptoNews;
