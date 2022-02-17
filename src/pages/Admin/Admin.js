import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import "./Admin.css";
import { useSelector } from "react-redux";
import { $host } from "../../http";

import ubdate_icon from "../../assets/images/admin_images/ubdate.png";
import Modal from "../../components/UI/Modal/Modal";
import Editing from "./Editing/Editing";

function Admin() {
  const [activeYear, setActiveYear] = useState(1);
  const [products, setProducts] = useState([]);
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});

  const handleActiveEdit = (active) => {
    setActiveEdit(active);
  };

  useEffect(() => {
    const getProducts = () => {
      $host
        .get(`api/table-products/?page=${activeYear}`)
        .then(({ data }) => {
          setProducts(data);
          //   console.log("getProducts", data);
        })
        .catch((e) => {
          //   console.log(e);
        });
    };
    getProducts();
  }, [activeYear]);

  return (
    <div className="admin">
      <div className="admin__container">
        <h2>ADMIN</h2>

        <div className="admin__content">
          <div className="admin__selectYear">
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-label">
                Select a year
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
                  <div className="admin__item--month">{el.title}</div>
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
      </div>
      <Modal active={activeEdit} setActive={setActiveEdit}>
        <Editing
          activeProduct={activeProduct}
          handleActiveEdit={handleActiveEdit}
        />
      </Modal>
    </div>
  );
}

export default Admin;
