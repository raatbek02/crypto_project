import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $host } from "../../http";
import { add_htu } from "../../store/htu_store";

import "./Htu.css";

function Htu() {
  //   const [htu_store, setHtu_store] = useState([]);
  const htu_store = useSelector((s) => s.htu_store.htu_store);
  const dispatch = useDispatch();

  useEffect(() => {
    const getHtu_store = async () => {
      await $host
        .get(`api/news`)
        .then(({ data }) => {
          dispatch(add_htu(data));
          //  setHtu_store(data);
          console.log("success", data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    getHtu_store();
  }, []);

  return (
    <div className="htu">
      <div className="htu__container">
        <div className="htu__content">
          {htu_store &&
            htu_store.map((el) => (
              <div key={el.id} className="htu__item">
                <div className="htu__title">{el.title}</div>
                <div className="htu__item--content">
                  <div className="htu__img mobile">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="htu__text">{el.description}</div>
                  <div className="htu__img desktop">
                    <img src={el.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          {/* <div className="htu__item">
            <div className="htu__title">Traditional Buy and Hold Investing</div>
            <div className="htu__item--content">
              <div className="htu__text">
                Buy-and-hold, long-term investing can be profitable if done
                correctly. You need to do your homework, though; you can’t just
                buy any cryptocurrency and expect to make money. The lowest risk
                positions would be to invest in Bitcoin or Ethereum and
                dollar-cost average into your position over a long period.
                Looking at the table above, you can see that holding either
                Bitcoin or Ethereum over the last 5 to 6 years has been very
                profitable. Moving forward, there are no guarantees, but using a
                dollar-cost averaging strategy should give you an acceptable
                position cost average. Dollar-cost averaging is an investment
                strategy that tries to reduce the impact of market volatility on
                large purchases. Instead of entering a position all at once with
                a large purchase, purchases are spread out in regular intervals
                over a long period. The intervals could be weekly, monthly or
                whatever fits your strategy. The critical part is to purchase
                the same dollar amount at each interval.
              </div>
              <div className="htu__img">
                <img
                  src="https://investorjunkie.com/wp-content/uploads/2019/06/buy-sell-stocks-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="htu__item">
            <div className="htu__title">Staking Cryptocurrencies</div>
            <div className="htu__item--content">
              <div className="htu__text">
                The staking of cryptocurrencies is very similar to depositing
                fiat into a savings account. The big difference with staking is
                that you can realize a much higher yield. A traditional bank
                will pay you around 1% interest if you are lucky. Some banks pay
                as little as 0.01%, including JPMorgan Chase, the largest bank
                in the United States. Staking yields will vary depending on the
                coin or token you stake, but it is not uncommon to receive 15%
                to 20% or even higher. Many exchanges and platforms offer
                staking, with both centralized and decentralized options. You
                can even stake crypto from some hardware wallets. The lowest
                risk option for staking would be to stake stablecoins. When you
                stake stablecoins, you eliminate most of the risk associated
                with the price fluctuations of cryptocurrency. Also, if
                possible, avoid lockup periods when staking.
              </div>
              <div className="htu__img">
                <img
                  src="https://images.ctfassets.net/q5ulk4bp65r7/3tzJIgkHEKOaubmZIUA5HY/35a85bd3cd3595af8bcf02725a020a0c/Learn_Illustration_What_is_Staking.png?w=768&fm=png"
                  alt=""
                />
              </div>
            </div>
          </div>{" "} */}
        </div>
      </div>
    </div>
  );
}

export default Htu;
