import React, { useState } from "react";
import { toast } from "react-toastify";
import { $host } from "../../http";

import logo_1 from "../../assets/images/contactUs_logo_1.svg";
import logo_2 from "../../assets/images/contactUs_logo_2.svg";
import logo_3 from "../../assets/images/contactUs_logo_3.svg";

import "./ContactUs.css";

function ContactUs() {
  const [backCallInput, setBackCallInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      email: backCallInput.email,
      phone: backCallInput.phone,
      message: backCallInput.message,
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
            <div className="contactUs__left--title">Send us a message</div>
            <form>
              <input
                onChange={handleInput}
                value={backCallInput.name}
                name="name"
                type={"text"}
                placeholder={"Your name"}
              />
              <input
                onChange={handleInput}
                value={backCallInput.email}
                name="email"
                type={"email"}
                placeholder={"Your email"}
              />
              <input
                onChange={handleInput}
                value={backCallInput.phone}
                name="phone"
                type={"number"}
                placeholder={"Phone number"}
              />
              <input
                onChange={handleInput}
                value={backCallInput.message}
                name="message"
                type={"text"}
                placeholder={"Message"}
              />{" "}
              <button onClick={(e) => submitBackCall(e)}>Отправить </button>
            </form>
          </div>
          <div className="contactUs__right">
            <div className="contactUS__right--title">Contact Information</div>
            <div className="contactUs__right--content">
              <div className="contactUS__right--item">
                <div className="contactUs__right--logo">
                  <img src={logo_1} alt="" />
                </div>
                <p>Langwiesenstrasse 18, 8108 Dällikon, Zurich</p>
              </div>
              <div className="contactUS__right--item">
                <div className="contactUs__right--logo">
                  <img src={logo_2} alt="" />
                </div>
                <p>+996 999 999 999</p>
              </div>{" "}
              <div className="contactUS__right--item">
                <div className="contactUs__right--logo">
                  <img src={logo_3} alt="" />
                </div>
                <p>info@bitcoinall.ch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
