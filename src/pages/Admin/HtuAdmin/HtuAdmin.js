import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_uploadImage } from "../../../store/uploadImage";
import { $host } from "../../../http";
import "./HtuAdmin.css";
import UploadPhoto from "./UploadPhoto";
import Modal from "../../../components/UI/Modal/Modal";
import EditHtu from "./EditHtu";
import { add_htu } from "../../../store/htu_store";

function HtuAdmin() {
  const [activeAdd, setActiveAdd] = useState(true);
  const [activeEdit, setActiveEdit] = useState(false);
  const [htu_input, setHtu_input] = useState({
    title: "",
    description: "",
  });
  const [detailHtu, setDetailHtu] = useState({});
  const dispatch = useDispatch();
  const selectedImage = useSelector((s) => s.uploadImage.uploadImage);

  const handleInput = (e) => {
    e.persist();
    setHtu_input({ ...htu_input, [e.target.name]: e.target.value });
  };

  const addHtu = async () => {
    //  const data = {
    //    title: htu_input.title,
    //    description: htu_input.description,
    //    image: selectedImage,
    //   };
    const fd = new FormData();
    fd.append("title", htu_input.title);
    fd.append("description", htu_input.description);
    fd.append("image", selectedImage);

    await $host
      .post(`api/news/`, fd, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        htu_input.description = "";
        htu_input.title = "";
        dispatch(add_uploadImage(""));
      });
  };

  const ubdate_htu = async (id) => {
    const fd = new FormData();
    fd.append("title", htu_input.title);
    fd.append("description", htu_input.description);
    fd.append("image", selectedImage);

    await $host
      .put(`api/news/${id}/`, fd, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        htu_input.description = "";
        htu_input.title = "";
        dispatch(add_uploadImage(""));
      });
  };

  useEffect(() => {}, []);

  const handleActiveEdit = (active, addingActive) => {
    setActiveEdit(active);
    setActiveAdd(addingActive);
  };
  const handleDetailHtu = (detail) => {
    setDetailHtu(detail);
  };

  return (
    <div className="htuAdmin">
      <div className="htuAdmin__container">
        <div className="htuAdmin__content">
          <div className="htuAdmin__title">How to trade</div>
          <div className="htuAdmin__addEdit">
            <button
              onClick={() => {
                setActiveAdd(true);
              }}
            >
              Add new
            </button>
            <button
              onClick={() => {
                //  setActiveAdd(false);
                setActiveEdit(true);
              }}
            >
              Edit
            </button>
          </div>

          <div className="htuAdmin__content--content">
            {activeAdd ? (
              <>
                <div className="htuAdmin__content--left">
                  <input
                    onChange={handleInput}
                    name="title"
                    value={htu_input.title}
                    type={"text"}
                    placeholder="Title"
                    className="titleInput"
                  />
                  <textarea
                    onChange={handleInput}
                    name="description"
                    value={htu_input.description}
                    placeholder="Description"
                    type={"textArea"}
                    className="descriptionInput"
                  />

                  <div className="htuAdmin__add">
                    <button
                      onClick={() => {
                        addHtu();
                      }}
                    >
                      Add
                    </button>
                    <button
                      onClick={() => {
                        htu_input.description = "";
                        htu_input.title = "";
                        dispatch(add_uploadImage(""));
                      }}
                    >
                      Cancel
                    </button>
                  </div>
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
                  <input
                    onChange={handleInput}
                    name="title"
                    value={htu_input.title}
                    type={"text"}
                    placeholder={detailHtu.title}
                    className="titleInput"
                  />
                  <textarea
                    onChange={handleInput}
                    name="description"
                    value={htu_input.description}
                    placeholder={detailHtu.description}
                    type={"textArea"}
                    className="descriptionInput"
                  />

                  <div className="htuAdmin__add">
                    <button
                      onClick={() => {
                        ubdate_htu(detailHtu.id);
                        setActiveAdd(true);
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setActiveAdd(false);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="htuAdmin__content--right">
                  <div>
                    <UploadPhoto />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal active={activeEdit} setActive={setActiveEdit}>
        <EditHtu
          handleActiveEdit={handleActiveEdit}
          ubdate_htu={ubdate_htu}
          handleDetailHtu={handleDetailHtu}
        />
      </Modal>
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
