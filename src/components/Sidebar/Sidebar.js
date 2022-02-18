import React from "react";

import sidebar_title from "../../assets/images/sidebar_images/sidebar_title.png";
import sidebar_1 from "../../assets/images/sidebar_images/sidebar_1.png";
import sidebar_2 from "../../assets/images/sidebar_images/sidebar_2.png";
import sidebar_3 from "../../assets/images/sidebar_images/sidebar_3.png";
import sidebar_4 from "../../assets/images/sidebar_images/sidebar_4.png";
import sidebar_5 from "../../assets/images/sidebar_images/sidebar_5.png";
import sidebar_6 from "../../assets/images/sidebar_images/sidebar_6.png";
import sidebar_footer_icon from "../../assets/images/sidebar_images/sidebar_footer_icon.png";

import "./Sidebar.css";
import { Link } from "react-router-dom";
import { ADMIN, HOME } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { setActiveBurger } from "../../store/activeBurger";

function Sidebar() {
  const activeBurger = useSelector((s) => s.activeBurger.activeBurger);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__header ">
          <div className="sidebar__title">
            <img src={sidebar_title} alt="" />
            <span>CriptoCurrency</span>
          </div>
          <div
            onClick={() => dispatch(setActiveBurger(!activeBurger))}
            className={
              activeBurger
                ? "header__burger--sidebar _active"
                : "header__burger--sidebar "
            }
          >
            <span></span>
          </div>
        </div>
        {/* 
        <div className="sidebar__title">
          <img src={sidebar_title} alt="" />
          <span>CriptoCurrency</span>
        </div> */}

        <ul>
          <Link to={HOME}>
            <li>
              <img src={sidebar_1} alt="" />
              <span>Overview</span>
            </li>
          </Link>
          <li>
            <img src={sidebar_2} alt="" />
            <span>Portfolio</span>
          </li>{" "}
          <li>
            <img src={sidebar_3} alt="" />
            <span>Watchlist</span>
          </li>{" "}
          <li>
            <img src={sidebar_4} alt="" />
            <span>Orders</span>
          </li>
          <li>
            <img src={sidebar_5} alt="" />
            <span>Reports</span>
          </li>{" "}
          <Link to={ADMIN}>
            <li>
              <img src={sidebar_6} alt="" />
              <span>Admin</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__footer--img">
          <img src={sidebar_footer_icon} alt="" />
        </div>
        <p>Support</p>
      </div>
    </div>
  );
}

export default Sidebar;
