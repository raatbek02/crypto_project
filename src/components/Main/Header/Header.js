import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setActiveBurger } from "../../../store/activeBurger";
import Modal from "../../UI/Modal/Modal";
import AuthContent from "../../Auth/AuthContent/AuthContent";

import search from "../../../assets/images/header_images/search.svg";
import notification from "../../../assets/images/header_images/notification.svg";
import info from "../../../assets/images/header_images/info.svg";
import profile from "../../../assets/images/header_images/profile.svg";

import "./Header.css";

function Header() {
  //   const [activeBurger, setActiveBurger] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);
  const activeBurger = useSelector((s) => s.activeBurger.activeBurger);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__content">
        <div
          onClick={() => dispatch(setActiveBurger(!activeBurger))}
          className={activeBurger ? "header__burger _active" : "header__burger"}
        >
          <span></span>
        </div>
        <div className="header__title">
          <h1>Cryptocurrencies</h1>
        </div>
        <div className="header__assets">
          <ul>
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={notification} alt="" />
            </li>{" "}
            <li>
              <img src={info} alt="" />
            </li>{" "}
            <li onClick={() => setModalAuth(true)}>
              <img src={profile} alt="" />
            </li>
          </ul>
        </div>

        <div className="header__assets--mobile">
          <img onClick={() => setModalAuth(true)} src={profile} alt="" />
        </div>
      </div>

      <Modal active={modalAuth} setActive={setModalAuth}>
        <AuthContent />
      </Modal>
    </div>
  );
}

export default Header;
