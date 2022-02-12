// import axios from "axios";
import { $host } from "../../../http/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import left from "../../../assets/images/middleContent_images/left.svg";
import right from "../../../assets/images/middleContent_images/right.svg";
import { minusDevice, plusDevice } from "../../../store/device_count";

import "./Counter.css";
import { toast } from "react-toastify";
import { addProducts } from "../../../store/products";

function Counter() {
  const [count, setCount] = useState(1);
  const [device, setDevice] = useState([]);
  const [typing_price, setTyping_price] = useState("25000");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((s) => s.products.products);
  const activeYearNum = useSelector((s) => s.activeYearNum.activeYearNum);

  const warn_price = () => toast.warn("price must be above 25000");
  console.log("price", price);
  console.log("device", device);
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

    await $host
      .get(`api/table-products/?page=${activeYearNum}`)
      .then(({ data }) => {
        dispatch(addProducts(data));

        //  console.log("getProducts", data);
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

    await $host
      .get(`api/table-products/?page=${activeYearNum}`)
      .then(({ data }) => {
        dispatch(addProducts(data));

        //  console.log("getProducts", data);
      });
  };

//   const typingPriceHandler = async (e) => {
//     const data_2 = {
//       price: typing_price,
//     };

//     setPrice(typing_price);

//     if (Number(typing_price) >= 25000 && e.key === "Enter") {
//       await $host.put(`api/device/1/`, data_2, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       await $host.get(`api/device-item/`).then(({ data }) => {
//         setDevice(data);
//       });
//     } else {
//       warn_price();
//     }
//     // else if (typing_price === "" && e.key === "Enter") {
//     //       setPrice(0);
//     //     }
//   };
  return (
    <div className="counter">
      {device &&
        device.map((el) => (
          <div key={el.id}>
            {localStorage.setItem(
              "device_local_price",
              JSON.stringify(el.product.price)
            )}

            <div className="counter__title">{el.product.title}</div>
            <div className="counter__content">
              <div className="counter__item">
                <p className="counter__item--left">Quantity of device</p>
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
                <p className="counter__item--left">Price</p>
                <p className="counter__item--right">
                  {/* <p className="counter__item--right--input">
                    <input
                      type={"text"}
                      onChange={(e) => setTyping_price(e.target.value)}
                      onKeyDown={(e) => typingPriceHandler(e)}
                      placeholder={el.product.price}
                    />
                    $
                  </p> */}
                  {el.product.price}$
                </p>
              </div>{" "}
              <div className="counter__item">
                <p className="counter__item--left">Total:</p>
                <div className="counter__item--right">
                  {el.product.price * el.quantity}$
                  {/* {price * el.quantity}$ */}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Counter;
