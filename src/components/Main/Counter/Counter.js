import React, { useState } from "react";

import left from "../../../assets/images/middleContent_images/left.svg";
import right from "../../../assets/images/middleContent_images/right.svg";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(1);
  let item_price = 25000;
  let total_item_price = 0;
  return (
    <div className="counter">
      <div className="counter__title">model 1</div>
      <div className="counter__content">
        <div className="counter__item">
          <p className="counter__item--left">Количество аппаратов</p>
          <div className="counter__item--button">
            <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
              <img src={left} alt="" />
            </button>

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        <div className="counter__item">
          <p className="counter__item--left">Цена за аппарата</p>
          <p className="counter__item--button">{item_price}$</p>
        </div>{" "}
        <div className="counter__item">
          <p className="counter__item--left">Итого:</p>
          <div className="counter__item--button">
            {(total_item_price += item_price * count)}$
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
