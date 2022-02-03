import React, { useState } from "react";
import "./Table.css";

function Table() {
  const [active_year, setActive_year] = useState(1);
  const [active_month, setActive_month] = useState(null);
  const arr = [
    {
      id: 1,
      title: "1M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 2,
      title: "2M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 3,
      title: "3M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 4,
      title: "4M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 5,
      title: "5M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 6,
      title: "6M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 7,
      title: "7M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 8,
      title: "8M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 9,
      title: "9M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 10,
      title: "10M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 11,
      title: "11M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
    {
      id: 12,
      title: "12M",
      per_month: 0.04,
      totality: 0.04,
      price: 37560,
      available: 1500,
    },
  ];

  const column_arr = [
    {
      id: 1,
      title: "Месяц",
      per_month: "В месяц",
      totality: "Совокупность",
      price: "Примерная цена",
      available: "Доступно $ (за 1 аппарат)",
    },
  ];

  return (
    <div className="table">
      <div className="table__header">
        <div className="table__header--left">
          <div className="table__header--buttons">
            <div className="table__header--btn_sell">
              <button>SELL</button>
            </div>
            <div className="table__header--btn_notSell">
              <button>Not sell</button>
            </div>
          </div>
        </div>
        <div className="table__header--right">
          <div className="table__header--years">
            <button className="active">1Y</button>
            <button>3Y</button>
            <button>5Y</button>
            <button>10Y</button>
          </div>
        </div>
      </div>

      <div className="table__content">
        <div className="table__item">
          <p className="table_title first">Месяц</p>

          {column_arr.map((el) => (
            <div className="table__column">
              <div className="table__cell">{el.per_month}</div>
              <div className="table__cell">{el.totality}</div>
              <div className="table__cell">{el.price}</div>
              <div className="table__cell">{el.available}</div>
            </div>
          ))}
        </div>
        {arr.map((item) => (
          <div
            className={
              item.id === active_month ? "table__item _active" : "table__item"
            }
          >
            <p
              className={
                item.id === active_month ? "table_title _active" : "table_title"
              }
            >
              <button onClick={() => setActive_month(item.id)}>
                {item.title}
              </button>
            </p>
            <div className="table__column _active">
              <div className="table__cell">{item.per_month}</div>
              <div className="table__cell">{item.totality}</div>
              <div className="table__cell">{item.price}</div>
              <div className="table__cell">{item.available}</div>
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
