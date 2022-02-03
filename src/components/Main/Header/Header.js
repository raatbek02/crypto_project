import React from "react";

import search from '../../../assets/images/header_images/search.svg'
import notification from "../../../assets/images/header_images/notification.svg";
import info from "../../../assets/images/header_images/info.svg";

import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header__content">
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
            {/* <li>
              <img src={null} alt="" />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
