import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { $host } from "../../../http";

// import AddIcon from "@material-ui/icons/Add";
import { Fab, Button } from "@mui/material";

// import "./styles.css";

import "./HtuAdmin.css";
import UploadPhoto from "./UploadPhoto";

function HtuAdmin() {
  const [activeAdd, setActiveAdd] = useState(true);
  const [imageName, setImageName] = useState();
  const [image, setImage] = useState();
  console.log(image?.name);
  //   const [activeUbdate, setActiveUbdate] = useState(false);
  const dispatch = useDispatch();
  const addHtu = async () => {
    const data = {};
    $host.post(`api/news`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  useEffect(() => {}, []);
  const ubdate_htu = async () => {};
  return (
    <div className="htuAdmin">
      <div className="htuAdmin__container">
        <div className="htuAdmin__content">
          <div className="htuAdmin__title">How to trade</div>
          <div className="htuAdmin__addButtons">
            <button
              onClick={() => {
                setActiveAdd(true);
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                setActiveAdd(false);
              }}
            >
              Edit
            </button>
          </div>

          <div className="htuAdmin__content--content">
            {activeAdd ? (
              <>
                <div className="htuAdmin__content--left">
                  <input type={"text"} placeholder="Title" />
                  <textArea placeholder="Description" />
                </div>
                <div className="htuAdmin__content--right">
                  <div>
                    <UploadPhoto />
                  </div>

                  {/* <img src={null} alt="" />
                  {/* <div><img src={URL.createObjectURL(image)} alt="upload image"/></div> */}
                </div>
              </>
            ) : (
              <>
                <div className="htuAdmin__content--left">
                  <input type={"text"} placeholder="Tittle" />
                  <textArea placeholder="Description" />
                </div>
                <div className="htuAdmin__content--right">
                  <img src={null} alt="" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HtuAdmin;

//   <label htmlFor="upload-photo">
//     <input
//       // style={{ display: "none" }}
//       id="upload-photo"
//       name="upload-photo"
//       type="file"
//       onChange={imageChangeHandler}
//     />
//     <Fab
//       color="secondary"
//       size="small"
//       component="span"
//       aria-label="add"
//       variant="extended"
//     >
//       Upload photo
//     </Fab>
//     <Button color="secondary" variant="contained" component="span">
//       Upload photo
//     </Button>{" "}
//   </label>;
