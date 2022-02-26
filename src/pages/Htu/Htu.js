import React from "react";
import "./Htu.css";

function Htu() {
  return (
    <div className="htu">
      <div className="htu__container">
        <div className="htu__content">
          <div className="htu__item">
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
          </div>{" "}
          <div className="htu__item">
            <div className="htu__title">Cryptocurrency Mining</div>
            <div className="htu__item--content">
              <div className="htu__text">
                Another way to make money with crypto is to mine for it. This
                option does, however, require an outlay of capital upfront. You
                would have to buy a miner (or miners) or build them yourself.
                Either way, there will be a substantial investment in equipment
                required. You will also incur facilities costs because miners
                produce a lot of heat, so you can’t just stick them in a room
                and turn them on without some sort of cooling. If you are
                willing to invest capital upfront, mining can be profitable
                depending on market conditions. A helpful website to determine
                what to mine and how profitable it will be is whattomine.com.
                The type of miner you will need will depend on what you decide
                to mine. If you strictly want to mine Bitcoin, you need an ASIC
                miner like the Antminer S19 Pro. However, if you’re going to
                mine a variety of cryptocurrencies, you need a GPU miner.
              </div>
              <div className="htu__img">
                <img
                  src="https://www.technologistan.pk/wp-content/uploads/2021/06/what-is-crypto-mining-cryptomining-farm-940x588-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Htu;
