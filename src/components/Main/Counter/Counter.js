// import axios from "axios";
import { $host } from "../../../http/index";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import left from "../../../assets/images/middleContent_images/left.svg";
import right from "../../../assets/images/middleContent_images/right.svg";
import { minusDevice, plusDevice } from "../../../store/device_count";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(1);
  const [device, setDevice] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    $host
      .get(`api/device-item/`)
      .then(({ data }) => {
        setDevice(data);
      })
      .catch((e) => {
        //   console.log("error price");
      });
  }, []);

  const plus_qnt = async (id) => {
    const data = {
      device_item: id,
    };
    await $host
      .post(`api/device-update/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        //   console.log("Count send plus ", res);

        $host
          .get(`api/device-item/`)
          .then(({ data }) => {
            setDevice(data);
          })
          .catch((e) => {
            // console.log("error price");
          });
      })
      .catch((e) => {
        //   console.log("Error send plus", e);
      });
  };

  const minus_qnt = async (id) => {
    const data = {
      device_item: id,
    };
    await $host
      .post(`api/device-update/?minus`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        //   console.log("Count send minus", res);

        $host
          .get(`api/device-item/`)
          .then(({ data }) => {
            setDevice(data);
          })
          .catch((e) => {
            // console.log("error price");
          });
      })
      .catch((e) => {
        //   console.log("Error send minus", e);
      });
  };

  return (
    <div className="counter">
      {device.map((el) => (
        <div key={el.id}>
          {localStorage.setItem(
            "device_local_price",
            JSON.stringify(el.product.price)
          )}

          <div className="counter__title">{el.product.title}</div>
          <div className="counter__content">
            <div className="counter__item">
              <p className="counter__item--left">Количество аппаратов</p>
              <div className="counter__item--button">
                <button
                  onClick={() => {
                    setCount(count > 1 ? count - 1 : 1);
                    //   dispatch(minusDevice(1));
                    minus_qnt(1);
                  }}
                >
                  <img src={left} alt="" />
                </button>

                <p>{el.quantity}</p>
                <button
                  onClick={() => {
                    setCount(count + 1);
                    //   dispatch(plusDevice(1));
                    plus_qnt(1);
                  }}
                >
                  <img src={right} alt="" />
                </button>
              </div>
            </div>
            <div className="counter__item">
              <p className="counter__item--left">Цена за аппарата</p>
              <p className="counter__item--button">{el.product.price}$</p>
            </div>{" "}
            <div className="counter__item">
              <p className="counter__item--left">Итого:</p>
              <div className="counter__item--button">
                {el.product.price * el.quantity}$
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Counter;
