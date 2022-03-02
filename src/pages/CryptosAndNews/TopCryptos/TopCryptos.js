import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Main/Header/Header";
import { addCoinsTop100 } from "../../../store/coins_top100";
import CryptoNews from "../CryptoNews/CryptoNews";
import "./TopCryptos.css";

function TopCryptos() {
  const dispatch = useDispatch();
  const coinsTop = useSelector((s) => s.coins_top100.coins_top100);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
`
      )
      .then(({ data }) => {
        dispatch(addCoinsTop100(data));
        //   console.log(data);
      });
  }, []);
  return (
    <div className="topCryptos">
      <div className="topCryptos__container">
        {/* <Header /> */}

        <div className="topCryptos__news">
          <CryptoNews />
        </div>

        <div className="topCryptos__content">
          <div className="topCryptos__content--title">
            Cryptocurrency Prices by Market Cap
          </div>

          <div className="topCryptos__content--cryptos desktop">
            <div className="topCryptos__content--item">
              <div className="topCryptos__content--item--left">
                <div
                  className="topCryptos__num"
                  style={{
                    //   marginLeft: "10px",
                    fontWeight: "900",
                  }}
                >
                  #
                </div>
                <div className="topCryptos__nameS">
                  <div
                    className="topCryptos__name"
                    style={{
                      marginLeft: "10px",
                      fontWeight: "900",
                    }}
                  >
                    <span>Coins</span>
                  </div>

                  <div className="topCryptos__symbol"></div>
                </div>
              </div>
              <div className="topCryptos__content--item--right">
                <div
                  className="topCryptos__price"
                  style={{ marginLeft: "10px" }}
                >
                  Price
                </div>
                {/* <div className="topCryptos__high_24h">{el.high_24h}$</div>
                <div className="topCryptos__low_24h">{el.low_24h}$</div> */}

                <div className="topCryptos__24h" style={{ marginLeft: "10px" }}>
                  24h
                </div>
                <div
                  className="topCryptos__marketCup"
                  style={{ marginLeft: "10px" }}
                >
                  Mkt cap
                </div>
              </div>
            </div>
            {coinsTop.map((el, index) => (
              <div key={el.id} className="topCryptos__content--item">
                <div className="topCryptos__content--item--left">
                  <div className="topCryptos__num">{index + 1}</div>
                  <div className="topCryptos__nameS">
                    <div className="topCryptos__name">
                      <div className="topCryptos__img">
                        <img src={el.image} alt="" />
                      </div>
                      <span>{el.name}</span>
                    </div>

                    <div className="topCryptos__symbol">{el.symbol}</div>
                  </div>
                </div>
                <div className="topCryptos__content--item--right">
                  <div className="topCryptos__price">${el.current_price}</div>
                  {/* <div className="topCryptos__high_24h">{el.high_24h}$</div>
                <div className="topCryptos__low_24h">{el.low_24h}$</div> */}
                  {el.price_change_percentage_24h < 0 ? (
                    <div className="topCryptos__24h red">
                      {el.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  ) : (
                    <div className="topCryptos__24h green">
                      {el.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  )}

                  <div className="topCryptos__marketCup">${el.market_cap}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="topCryptos__content--cryptos mobile">
            {coinsTop.map((el, index) => (
              <div key={el.id} className="topCryptos__content--item">
                <div className="topCryptos__content--item--left">
                  <div className="topCryptos__leftTop">
                    <div className="topCryptos__img">
                      <img src={el.image} alt="" />
                    </div>
                    <span>{el.name}</span>
                  </div>
                  <div className="topCryptos__leftBottom">
                    <div className="topCryptos__symbol">{el.symbol}</div>
                    {el.price_change_percentage_24h < 0 ? (
                      <div className="topCryptos__24h red">
                        {el.price_change_percentage_24h.toFixed(2)}%
                      </div>
                    ) : (
                      <div className="topCryptos__24h green">
                        {el.price_change_percentage_24h.toFixed(2)}%
                      </div>
                    )}
                  </div>
                </div>
                <div className="topCryptos__content--item--right">
                  <div className="topCryptos__rightTop">
                    <div className="topCryptos__price">
                      ${el.current_price.toFixed(2)}
                    </div>
                  </div>

                  <div className="topCryptos__rightBottom">
                    <div className="topCryptos__marketCup">
                      {/* {String(el.market_cap).slice(0, 2)} Bn */}
                      Mkt cap ${el.market_cap}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCryptos;
