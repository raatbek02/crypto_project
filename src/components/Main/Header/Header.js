import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setActiveBurger } from "../../../store/activeBurger";

import "./Header.css";

function Header() {
  //   const [activeBurger, setActiveBurger] = useState(false);
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
          <h1>BitcoinAll</h1>
        </div>
        {/* <div className="header__assets">
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
        </div> */}

        {/* <div className="header__assets--mobile">
          <img onClick={() => setModalAuth(true)} src={profile} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
