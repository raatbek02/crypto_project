import React, { useState } from "react";

import sidebar_title from "../../assets/images/sidebar_images/sidebar_title.png";
import sidebar_1 from "../../assets/images/sidebar_images/sidebar_1.png";
import sidebar_2 from "../../assets/images/sidebar_images/sidebar_2.png";
import sidebar_3 from "../../assets/images/sidebar_images/sidebar_3.png";

import profile_white from "../../assets/images/header_images/profile_white.svg";

// import profile_white from "../../assets/images/header_images/profile_white.svg";

import "./Sidebar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ABOUT, ADMIN, CRYPTOS_AND_NEWS, HOME, HTU } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { setActiveBurger } from "../../store/activeBurger";
import Modal from "../UI/Modal/Modal";
import AuthContent from "../Auth/AuthContent/AuthContent";
import ContactUs from "../../pages/ContactUs/ContactUs";
import { setIsAuth } from "../../store/isAuth";

function Sidebar() {
  const [activeBackCall, setActiveBackCall] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);

  const activeBurger = useSelector((s) => s.activeBurger.activeBurger);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("isAuthLocal", false);
    dispatch(setIsAuth(false));
    navigate(HOME);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__header ">
          <div className="sidebar__title">
            <img src={sidebar_title} alt="" />
            <span>CryptoCurrency</span>
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

        <div className="sidebar__list">
          <Link to={HOME}>
            <button onClick={() => dispatch(setActiveBurger(false))}>
              <img src={sidebar_1} alt="" />
              <span>Overview</span>
            </button>
          </Link>
          <Link to={CRYPTOS_AND_NEWS}>
            <button onClick={() => dispatch(setActiveBurger(false))}>
              <img src={sidebar_2} alt="" />
              <span>Top cryptos</span>
            </button>
          </Link>
          <Link to={HTU}>
            <button onClick={() => dispatch(setActiveBurger(false))}>
              <img src={sidebar_3} alt="" />
              <span>How to trade</span>
            </button>{" "}
          </Link>
          <button
            onClick={() => {
              setModalAuth(true);
              dispatch(setActiveBurger(false));
            }}
          >
            <img src={profile_white} alt="" />
            <span>Login</span>
          </button>{" "}
          {/* <button>
            <img src={sidebar_4} alt="" />
            <span>Orders</span>
          </button>
          <button>
            <img src={sidebar_5} alt="" />
            <span>Reports</span>
          </button>{" "} */}
          {/* <button
            className="sidebar__mobileLogin"
            onClick={() => setModalAuth(true)}
          >
            <img src={profile_white} alt="" />
            <span>Login</span>
          </button>{" "} */}
          {/* <Link to={ADMIN}>
            <button onClick={() => dispatch(setActiveBurger(false))}>
              <img src={sidebar_6} alt="" />
              <span>Admin</span>
            </button>
          </Link> */}
        </div>

        {/* <Modal active={modalAuth} setActive={setModalAuth}>
          <AuthContent />
        </Modal> */}
      </div>

      <div className="sidebar__footer">
        {/* <div className="sidebar__footer--img">
          <img src={sidebar_footer_icon} alt="" />
        </div> */}
        <ul>
          <Link to={ABOUT}>
            <li onClick={() => dispatch(setActiveBurger(false))}>About us</li>
          </Link>

          <li
            onClick={() => {
              setActiveBackCall(true);
              dispatch(setActiveBurger(false));
            }}
          >
            Contact us
          </li>
        </ul>
        <p>Copyright &copy; 2022</p>
      </div>
      <Modal active={activeBackCall} setActive={setActiveBackCall}>
        <ContactUs />
      </Modal>

      <Modal active={modalAuth} setActive={setModalAuth}>
        {location.pathname !== "/admin" ? (
          <AuthContent setModalAuth={setModalAuth} />
        ) : (
          <button
            onClick={() => {
              logout();
              setModalAuth(false);
            }}
            className="header__logoutBtn"
          >
            Logout
          </button>
        )}
      </Modal>
    </div>
  );
}

export default Sidebar;
