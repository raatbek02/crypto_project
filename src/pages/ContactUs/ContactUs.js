import React, { useState } from "react";
import './ContactUs.css'

function ContactUs() {
  const [backCallInput, setBackCallInput] = useState({
    name: "",
    phone: "",
  });

  const handleInput = (e) => {
    e.persist();
    setBackCallInput({ ...backCallInput, [e.target.name]: e.target.value });
  };

  const submitBackCall = async () => {
    const data = {
      name: backCallInput.name,
      phone: backCallInput.phone,
    };
  };

  return (
    <div className="contactUs">
      <div className="contactUs__container">
        <div className="contactUs__title">Contact Us</div>
        <div className="contactUs__content">
          <form>
            <input
              onChange={handleInput}
              value={backCallInput.name}
              name="name"
              type={"text"}
              placeholder={"Ваше Имя"}
            />

            <input
              onChange={handleInput}
              value={backCallInput.phone}
              name="phone"
              type={"number"}
              placeholder={"Номер телефона"}
            />

            <button onClick={(e) => submitBackCall(e)}>Отправить </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
