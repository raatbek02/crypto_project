import React, { useState } from "react";
import { toast } from "react-toastify";
import { $host } from "../../http";
import "./ContactUs.css";

function ContactUs() {
  const [backCallInput, setBackCallInput] = useState({
    name: "",
    phone: "",
  });

  const successSubmited = () => toast.success("Callback sent successfully!");

  const handleInput = (e) => {
    e.persist();
    setBackCallInput({ ...backCallInput, [e.target.name]: e.target.value });
  };

  const submitBackCall = async (e) => {
    e.preventDefault();

    const data = {
      name: backCallInput.name,
      phone: backCallInput.phone,
    };

    $host
      .post(`api/backcall/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        successSubmited();
        setBackCallInput({ name: "", phone: "" });

        console.log("Callback sent successfully", res);
      });
  };

  return (
    <div className="contactUs">
      <div className="contactUs__container">
        <div className="contactUs__content">
          <div className="contactUs__left">
            <div className="contactUs__title">Contact Us</div>
            <div className="contactUs__message">
              Feel free to get in touch me. I am always open to discussing new
              projects,creative ideas or opportunites to be part of your visions
            </div>
          </div>
          <div className="contactUs__right">
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
    </div>
  );
}

export default ContactUs;
