import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import { toast } from "react-toastify";
import { $host } from "../../../http";

function Table() {
  const [products, setProducts] = useState([]);
  const [active_yearNum, setActive_yearNum] = useState(1);
  const [avtive_yearName, setActive_yearName] = useState("1y");
  const [active_month, setActive_month] = useState(null);
  const [sell_id, setSell_id] = useState(null);
  const [sold, setSold] = useState(null);

  //   const [results_arr, setResults_arr] = useState([]);

  //   console.log("sold", sold);
  //   console.log("sell_id", sell_id);
  //   console.log("active_month", active_month);
  console.log("products", products);
  //   console.log("results_arr", results_arr);

  let total_sum = 0;

  for (let i = 0; products.results && i < products.results.length; i++) {
    //  console.log("results_arr[i]", products.results[i]);

    if (products.results[i].price_per_quantity !== null) {
      total_sum = total_sum + products.results[i].price_per_quantity;

      console.log("totaaaaaaal_sum", total_sum);
    }
  }
  console.log("total_sum", total_sum);

  const success_sell = () => toast.success("Successfully sold");
  const success_cancel = () => toast.success(" Sale canceled");
  const warning_sell = () => toast.warn("To sell, select a month");
  const warning_cancel = () =>
    toast.warn("To sell, select the sold product of the month");

  const column_arr = [
    {
      id: 1,
      title: "Месяц",
      per_month: "В месяц",
      totality: "Совокупность",
      price: "Примерная цена",
      price_device: "Доступно $ (за 1 аппарат)",
      price_per_quantity: "Доступно $ (за n аппаратов)",
    },
  ];

  //   const sendIdToServer = () => {
  //     const data = {
  //       product: sell_id,
  //     };

  //     axios
  //       .post(`http://127.0.0.1:8000/api/cart-item_product/`, data, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((res) => {
  //         console.log("sendIdToServer", res);
  //       });
  //   };

  //   const changePrice = () => {
  //     axios
  //       .get(`http://127.0.0.1:8000/api/next-table/?get_id=${sell_id}`)
  //       .then((res) => {
  //         console.log("New changePrice", res);
  //       })
  //       .catch((e) => {
  //         //   console.log(e, "aaaaaa");
  //       });
  //   };

  const getProducts = () => {
    $host
      .get(`api/table-products/?page=${active_yearNum}`)
      .then(({ data }) => {
        setProducts(data);
      //   console.log("getProducts", data);
      })
      .catch((e) => {
        //   console.log(e);
      });
  };

  useEffect(() => {
    getProducts();
  }, [active_yearNum]);

  const sell_product = async () => {
    const data = {
      product: sell_id,
    };

    if (!sold && sell_id) {
      await $host
        .post(`api/cart-item_product/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          success_sell();
          setActive_month(null);
          setSell_id(null);
        });

      await $host
        .get(`api/next-table/?get_id=${sell_id}`)
        .then(({ data }) => {
          //  setResults_arr(data);
        })
        .catch((e) => {
          //   console.log(e, "aaaaaa");
        });

      await $host
        .get(`api/table-products/?page=${active_yearNum}`)
        .then(({ data }) => {
          setProducts(data);

          //  console.log("getProducts", data);
        })
        .catch((e) => {
          //   console.log(e);
        });
    } else {
      warning_sell();
    }

    //   await sendIdToServer();
    //  await changePrice();

    //  await getProducts();
    //  console.log("changedProducts", products);
  };

  const notSell_product = async () => {
    const data = {
      product: sell_id,
    };

    if (sold && sell_id) {
      await $host
        .post(`api/destroy-cart/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
         //  console.log("Prev post", res);
          success_cancel();
          setActive_month(null);
          setSell_id(null);
        });

      await $host.get(`api/previo-table/?get_id=${sell_id}`).then((res) => {
        console.log("Prev data");
      });

      await $host
        .get(`api/table-products/?page=${active_yearNum}`)
        .then(({ data }) => {
          setProducts(data);
         //  console.log("Prev Products", data);
        })
        .catch((e) => {
          //   console.log(e);
        });
    } else {
      warning_cancel();
    }
  };

  return (
    <div className="table">
      <div className="table__header">
        <div className="table__header--left">
          <div className="table__header--buttons">
            <div className="table__header--btn_sell">
              <button onClick={() => sell_product()}>SELL</button>
            </div>
            <div className="table__header--btn_notSell">
              <button onClick={() => notSell_product()}>Not sell</button>
            </div>
          </div>
        </div>
        <div className="table__header--middle">
          <span>Total: {total_sum}$</span>
        </div>
        <div className="table__header--right">
          <div className="table__header--years">
            <button
              onClick={() => {
                setActive_yearNum(1);
                setActive_yearName("1y");
              }}
              className={avtive_yearName === "1y" ? "active" : ""}
            >
              1Y
            </button>
            <button
              onClick={() => {
                setActive_yearNum(2);
                setActive_yearName("2y");
              }}
              className={avtive_yearName === "2y" ? "active" : ""}
            >
              2Y
            </button>
            <button
              onClick={() => {
                setActive_yearNum(3);
                setActive_yearName("3y");
              }}
              className={avtive_yearName === "3y" ? "active" : ""}
            >
              3Y
            </button>
            <button
              onClick={() => {
                setActive_yearNum(4);
                setActive_yearName("4y");
              }}
              className={avtive_yearName === "4y" ? "active" : ""}
            >
              4Y
            </button>
            <button
              onClick={() => {
                setActive_yearNum(5);
                setActive_yearName("5y");
              }}
              className={avtive_yearName === "5y" ? "active" : ""}
            >
              5Y
            </button>
          </div>
        </div>
      </div>

      <div className="table__content">
        <div className="table__item">
          <p className="table_title first">Месяц</p>

          {column_arr.map((el) => (
            <div key={el.id} className="table__column">
              <div className="table__cell">{el.per_month}</div>
              <div className="table__cell">{el.totality}</div>
              <div className="table__cell">{el.price}</div>
              <div className="table__cell">{el.price_device}</div>
              <div className="table__cell">{el.price_per_quantity}</div>
            </div>
          ))}
        </div>
        {products.results &&
          products.results.map((item) => (
            <div
              key={item.id}
              className={
                item.id === active_month ? "table__item _active" : "table__item"
              }
            >
              <p
                className={
                  item.id === active_month
                    ? "table_title _active"
                    : "table_title"
                }
              >
                <button
                  onClick={() => {
                    setActive_month(item.id);
                    setSell_id(item.id);
                    setSold(item.is_solid);
                  }}
                  className={
                    item.is_solid
                      ? "table_title--button _sold-btn"
                      : "table_title--button"
                  }
                >
                  {item.title}
                </button>
              </p>
              <div
                className={
                  item.is_solid
                    ? `table__column _active _sold`
                    : `table__column _active`
                }
              >
                <div className="table__cell">{item.count}</div>
                <div className="table__cell">{item.totality.toFixed(2)}</div>
                <div className="table__cell">{item.price}</div>
                <div className="table__cell">{item.price_device}</div>
                <div className="table__cell">{item.price_per_quantity}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Table;

// <div className="table__title--month">
//   <div className="y_block">
//     <div className="table__item">
//       {<div className="table__item--field">Месяц</div>}
//     </div>
//   </div>
//   <div className="x_block">
//     {arr.map((item) => (
//       <div
//         className={
//           active === item.id ? "table__item _active" : "table__item"
//         }
//       >
//         {
//           <div
//             onClick={() => setActive(item.id)}
//             className="table__item--field"
//           >
//             <button> {item.title}</button>
//           </div>
//         }
//       </div>
//     ))}
//   </div>
// </div>
// <div className="table__content">
//   <div className="table__item ">
//     {column_arr.map((el) => (
//       <>
//         {/* {<div className="table__item--field month">{el.title}</div>} */}

//         <div className="table__item--field">{el.per_month}</div>
//         <div className="table__item--field">{el.totality}</div>
//         <div className="table__item--field">{el.price}</div>
//         <div className="table__item--field">{el.available}</div>
//       </>
//     ))}
//   </div>
//   {arr.map((item) => (
//     <div
//       className={
//         active === item.id ? "table__item _active" : "table__item"
//       }
//       // className={"table__item"}
//     >
//       {/* {
//         <div
//           onClick={() => setActive(item.id)}
//           className="table__item--field month"
//         >
//           <button> {item.title}</button>
//         </div>
//       } */}

//       {/* <div className="color-item"> */}
//       <div className="table__item--field">{item.per_month}</div>
//       <div className="table__item--field">{item.totality}</div>
//       <div className="table__item--field">{item.price}</div>
//       <div className="table__item--field">{item.available}</div>
//       {/* </div> */}
//     </div>
//   ))}
// </div>

// .table__title--month {
//   width: 100%;
//   display: flex;
//   /* justify-content: space-between; */
//   background-color: rgb(192, 185, 185);
//   font-size: 11px;
//   margin-bottom: 40px;
//   border-radius: 8px;
// }
// .table__title--month .table__item {
//   /* padding: 5px; */
//   text-align: center;
// }
// /* .table__title--month .table__item:first-child {
// } */
// .y_block {
//   width: 20%;
//   display: flex;
//   align-items: center;
//   padding-left: 5px;
//   color: #1d2746;
//   font-weight: 500;
// }
// .x_block {
//   width: 80%;
//   display: flex;
//   justify-content: space-between;
// }
// .x_block .table__item:first-child {
//   margin-left: 27px;
// }
// /* .x_block .table__item {
//   margin-left: 20px;

// } */
// .x_block .table__item:last-child {
//   /* margin-right: 5px; */
// }
// /* .table__title--month .table__item._active .table__item--field {
//   background-color: rgb(102, 255, 0);
//   cursor: pointer;
// } */

// .table__title--month .table__item .table__item--field button {
//   /* margin-right: 15px; */
//   padding: 9px 10px;
//   border-radius: 8px;
//   background-color: transparent;
//   color: #1d2746;
//   font-weight: 700;
//   font-size: 12px;
// }

// .table__title--month .table__item._active .table__item--field button {
//   /* padding: 9px 12px; */
//   color: #f6d912;
//   background-color: #1d2746;
// }

// .table__title--month .table__item--field {
//   margin-bottom: 0;
// }

// /* =========================================== */

// .table__content {
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
// }
// .table__content .table__item:first-child {
//   width: 20%;
// }

// /* .month button {
//   padding: 9px 12px;
//   border-radius: 8px;
//   background-color: transparent;
//   color: #1d2746;
//   font-weight: 700;
//   font-size: 12px;
// }

// .table__content .table__item._active .month button {
//   color: #f6d912;
//   background-color: #1d2746;
// } */

// .table__content .table__item {
//   padding: 5px;
// }
// .table__content .table__item._active {
//   background-color: #fce9a8;
//   border-radius: 8px;
// }
// /* .table__content .table__item._active .color-item {
//   background-color: #fce9a8;
//   border-radius: 8px;
//   padding: 5px;
//   width: 100%;
// } */
// /* .table__item._active .table__item--field:nth-child(1) {
//   background-color: rgb(229, 255, 0);
// } */
// .table__content .table__item:first-child .table__item--field,
// .table__title--month .y_block .table__item .table__item--field {
//   text-align: left;
//   padding-left: 10px;
// }
// /* .table__content .table__item:first-child .table__item--field:first-child {
//   padding: 7px 12px;
// }
// .table__content .table__item:first-child .table__item--field {
//   margin-bottom: 36px;
// } */
// .table__content .table__item--field {
//   font-size: 14px;
//   font-weight: 500;
//   color: #030d2e;
//   margin-bottom: 30px;
//   text-align: center;
// }
// /* .table__content .table__item--field:first-child {
//   margin-bottom: 40px;
// } */

//   const arr = [
//     {
//       id: 1,
//       title: "1M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 2,
//       title: "2M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 3,
//       title: "3M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 4,
//       title: "4M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 5,
//       title: "5M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 6,
//       title: "6M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 7,
//       title: "7M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 8,
//       title: "8M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 9,
//       title: "9M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 10,
//       title: "10M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 11,
//       title: "11M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//     {
//       id: 12,
//       title: "12M",
//       per_month: 0.04,
//       totality: 0.04,
//       price: 37560,
//       available: 1500,
//     },
//   ];
