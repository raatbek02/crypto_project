import React, { useState } from "react";
import { toast } from "react-toastify";
import { $host } from "../../../http";

function DeviceEdit({ handleActiveEdit }) {
  const [newPrice, setNewPrice] = useState("");

  const success_change = () =>
    toast.success("Price per device successfully chanched");

  const changeDevicePrice = () => {
    const data = {
      price: newPrice,
    };

    if (newPrice) {
      $host
        .put(`api/device/1/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          success_change();
        });
    }
  };

  return (
    <div className="editing">
      <h3>Edit device</h3>

      <div className="editing__content">
        <p className="editing__priceLabel">Price per device ($)</p>
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
              changeDevicePrice();
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

export default DeviceEdit;
