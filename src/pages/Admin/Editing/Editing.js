import React, { useEffect, useState } from "react";
import { $host } from "../../../http";
import "./Editing.css";

function Editing({ activeProduct, handleActiveEdit }) {
  const [newPrice, setNewPrice] = useState("");
  const ubdatePrice = () => {
    const data = {
      price: newPrice,
    };

    $host
      .put(`api/productprice-update/${activeProduct.id}/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="editing">
      <h3>Editing</h3>

      <div className="editing__content">
        <p className="editing__priceLabel">Price per bitcoin ($)</p>
        <div className="editing__priceInput">
          <input
            type="text"
            placeholder="Price..."
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>

        <div className="editing__buttons">
          <button
            onClick={() => {
              ubdatePrice();
              setNewPrice("");
              handleActiveEdit(false);
            }}
          >
            SAVE
          </button>
          <button onClick={() => handleActiveEdit(false)}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default Editing;
