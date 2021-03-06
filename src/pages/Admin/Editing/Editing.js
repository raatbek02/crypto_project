import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { $host } from "../../../http";
import { addProducts } from "../../../store/products";
import "./Editing.css";

function Editing({ activeProduct, handleActiveEdit, activeYear }) {
  const [newPrice, setNewPrice] = useState("");

  const success_ubdate = () =>
    toast.success("Price per bitcoin successfully ubdated");

  const dispatch = useDispatch();
  const ubdatePrice = () => {
    const data = {
      price: newPrice,
    };

    if (newPrice) {
      $host
        .put(`api/productprice-update/${activeProduct.id}/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          $host
            .get(`api/table-products/?page=${activeYear}`)
            .then(({ data }) => {
              dispatch(addProducts(data));
              //   console.log("getProducts", data);
            });

          success_ubdate();
        });
    }
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
