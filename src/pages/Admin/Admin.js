import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../../store/products";
import { $host } from "../../http";

// import ubdate_icon from "../../assets/images/admin_images/ubdate.png";
import Modal from "../../components/UI/Modal/Modal";
import Editing from "./Editing/Editing";
import DeviceEdit from "./DeviceEdit/DeviceEdit";
import { setActiveBurger } from "../../store/activeBurger";

import profile from "../../assets/images/header_images/profile.svg";
import "./Admin.css";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME } from "../../utils/consts";
import { setIsAuth } from "../../store/isAuth";
import HtuAdmin from "./HtuAdmin/HtuAdmin";

function Admin() {
  const [activeYear, setActiveYear] = useState(1);
  //   const [products, setProducts] = useState([]);
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeDeviceEdit, setActiveDeviceEdit] = useState(false);
  const [activeLogout, setActiveLogout] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});

  const dispatch = useDispatch();
  const products = useSelector((s) => s.products.products);
  const activeBurger = useSelector((s) => s.activeBurger.activeBurger);

  const navigate = useNavigate();

  const handleActiveEdit = (active) => {
    setActiveEdit(active);
    setActiveDeviceEdit(active);
  };

  const getProducts = () => {
    $host
      .get(`api/table-products/?page=${activeYear}`)
      .then(({ data }) => {
        dispatch(addProducts(data));
        //   console.log("getProducts", data);
      })
      .catch((e) => {
        //   console.log(e);
      });
  };
  useEffect(() => {
    getProducts();
  }, [activeYear]);

  return (
    <div className="admin">
      <div className="admin__container">
        {/* <div className="admin__header">
          <div
            onClick={() => dispatch(setActiveBurger(!activeBurger))}
            className={
              activeBurger ? "header__burger _active" : "header__burger"
            }
          >
            <span></span>
          </div>
          <h2>ADMIN</h2>

          <div onClick={() => logout()} className="admin__logout">
            <img src={profile} alt="" />

            <span>Logout</span>
          </div>
        </div> */}

        <div className="admin__contentTable">
          <div className="admin__contentHeader">
            <div className="admin__selectYear dekstop">
              <FormControl sx={{ m: 1, minWidth: 120 }} color="warning">
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select a year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={activeYear}
                  label="Select a year"
                  onChange={(e) => setActiveYear(e.target.value)}
                >
                  <MenuItem value={1}>1 year</MenuItem>
                  <MenuItem value={2}>2 year</MenuItem>
                  <MenuItem value={3}>3 year</MenuItem>
                  <MenuItem value={4}>4 year</MenuItem>
                  <MenuItem value={5}>5 year</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="admin__selectYear mobile">
              <FormControl sx={{ m: 1, minWidth: 30 }} color="warning">
                <InputLabel id="demo-simple-select-autowidth-label">
                  Year
                </InputLabel>
                <Select
                  style={{ fontSize: "12px" }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={activeYear}
                  label="Year"
                  onChange={(e) => setActiveYear(e.target.value)}
                >
                  <MenuItem value={1}>1Y</MenuItem>
                  <MenuItem value={2}>2Y</MenuItem>
                  <MenuItem value={3}>3Y</MenuItem>
                  <MenuItem value={4}>4Y</MenuItem>
                  <MenuItem value={5}>5Y</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="admin__productName">
              <img
                src="	https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt=""
              />
              BTC
            </div>

            <div className="admin__deviceChanger">
              <button onClick={() => setActiveDeviceEdit(true)}>Device</button>
            </div>
          </div>

          <div className="admin__months">
            <div className="admin__item first">
              <div className="admin__item--number">№</div>
              <div className="admin__item--month">Months</div>
              <div className="admin__item--change">Editing</div>
            </div>
            {products.results &&
              products.results.map((el, index) => (
                <div key={el.id} className="admin__item">
                  <div className="admin__item--number">№{index + 1}</div>
                  <div className="admin__item--month">
                    {el.title} ≈{" "}
                    <span style={{ color: "#95afd3" }}>{el.price}$</span>
                  </div>
                  <div className="admin__item--change">
                    <button
                      onClick={() => {
                        setActiveEdit(true);
                        setActiveProduct(el);
                      }}
                      className="admin__item--button"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* <HtuAdmin/> */}
      </div>
      <Modal active={activeEdit} setActive={setActiveEdit}>
        <Editing
          activeProduct={activeProduct}
          activeYear={activeYear}
          handleActiveEdit={handleActiveEdit}
        />
      </Modal>

      <Modal active={activeDeviceEdit} setActive={setActiveDeviceEdit}>
        <DeviceEdit handleActiveEdit={handleActiveEdit} />
      </Modal>

      <Modal active={activeLogout} setActive={setActiveLogout}>
        Hello logout
      </Modal>
    </div>
  );
}

export default Admin;
