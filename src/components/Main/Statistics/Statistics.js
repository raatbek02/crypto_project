import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "./Statistics.css";
import { useSelector } from "react-redux";
import axios from "axios";

// Chart.register(zoomPlugin);

function Statistics() {
  const [coin_data, setCoin_data] = useState({});
  const [timeFormat, setTimeFormat] = useState("1y");
  const coins = useSelector((s) => s.coins_store.coins);
  const coin_id = useSelector((s) => s.coin_id.coin_id);
  const coin_detail = useSelector((s) => s.coin_detail.coin_detail);

  const bitcoin_data = coins[0];
  localStorage.setItem("bitcoin_data", JSON.stringify(bitcoin_data));
  //   console.log("bitcoin_data", bitcoin_data);
  //   console.log("coin_detail", coin_detail);
  //   console.log("coin_id", coin_id);

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return coin_data.day_d;
      case "7d":
        return coin_data.week_d;
      case "30d":
        return coin_data.month_d;
      case "1y":
        return coin_data.year_d;
      default:
        return coin_data.year_d;
    }
  };

  const chart_data = {
    datasets: [
      {
        data: determineTimeFormat(),
        backgroundColor: ["rgba(149, 42, 203,0.8)"],
        borderColor: ["rgba(149, 42, 203,0.8)"],
        borderWidth: 1,
      },
    ],
  };

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const [day_d, week_d, month_d, year_d] = await Promise.all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=1`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=7`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=30`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=365`
        ),
      ]);

      setCoin_data({
        day_d: formatData(day_d.data.prices),
        week_d: formatData(week_d.data.prices),
        month_d: formatData(month_d.data.prices),
        year_d: formatData(year_d.data.prices),
      });
    };

    fetchData();
  }, [coin_id]);

  return (
    <div className="statistics">
      <div className="statistics__header">
        <div className="statistics__header--left">
          {Object.entries(coin_detail).length > 0 ? (
            <>
              <span style={{ marginRight: "5px" }}>
                {coin_detail && coin_detail.name}
              </span>
              <span style={{ marginRight: "5px" }}>
                {coin_detail && coin_detail.current_price}$
              </span>
              {coin_detail && coin_detail.price_change_percentage_24h > 0 ? (
                <span style={{ color: "#05fb1e" }}>
                  {coin_detail &&
                    coin_detail.price_change_percentage_24h.toFixed(2)}
                  %
                </span>
              ) : (
                <span style={{ color: "#FB0505", fontSize: "10px" }}>
                  {coin_detail &&
                    coin_detail.price_change_percentage_24h.toFixed(2)}
                  %
                </span>
              )}
            </>
          ) : (
            <>
              <span style={{ marginRight: "5px" }}>
                {bitcoin_data && bitcoin_data.name}
              </span>
              <span style={{ marginRight: "5px" }}>
                {bitcoin_data && bitcoin_data.current_price}$
              </span>
              {bitcoin_data && bitcoin_data.price_change_percentage_24h > 0 ? (
                <span style={{ color: "#05fb1e" }}>
                  {bitcoin_data &&
                    bitcoin_data.price_change_percentage_24h.toFixed(2)}
                  %
                </span>
              ) : (
                <span style={{ color: "#FB0505", fontSize: "10px" }}>
                  {bitcoin_data &&
                    bitcoin_data.price_change_percentage_24h.toFixed(2)}
                  %
                </span>
              )}
            </>
          )}
        </div>
        <div className="statistics__header--right">
          <div className="table__header--years">
            <button
              onClick={() => setTimeFormat("24h")}
              className={timeFormat === "24h" ? "active" : ""}
            >
              1D
            </button>
            <button
              onClick={() => setTimeFormat("7d")}
              className={timeFormat === "7d" ? "active" : ""}
            >
              1W
            </button>
            <button
              onClick={() => setTimeFormat("30d")}
              className={timeFormat === "30d" ? "active" : ""}
            >
              1M
            </button>
            <button
              onClick={() => setTimeFormat("1y")}
              className={timeFormat === "1y" ? "active" : ""}
            >
              1Y
            </button>
          </div>
        </div>
      </div>
      <div className="statistics__content">
        <Line
          data={chart_data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    //  maxTicksLimit: 3,
                    beginAtZero: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  type: "time",
                  //   time: {
                  //     unit: "month",
                  //   },
                  distribution: "linear",
                  ticks: {
                    //  maxTicksLimit: 3,
                  },
                  gridLines: false,
                },
              ],
            },

            pan: {
              enabled: false,
              mode: "xy",
              speed: 5,
            },
            zoom: {
              enabled: false,
              drag: false,
              mode: "x",
              //  rangeMin: {
              //    x: 0,
              //    y: 29000,
              //  },
              rangeMax: {
                //  x: 30,
                //   y: 40000,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Statistics;
