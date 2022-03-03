import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $host } from "../../../http";
import { add_htu } from "../../../store/htu_store";

import "./EditHtu.css";

function EditHtu({ handleActiveEdit, ubdate_htu, handleDetailHtu }) {
  const htu_store = useSelector((s) => s.htu_store.htu_store);
  const dispatch = useDispatch();

  const getHtu_store = async () => {
    await $host
      .get(`api/news`)
      .then(({ data }) => {
        dispatch(add_htu(data));
        //  setHtu_store(data);
        console.log("success", data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  useEffect(() => {
    getHtu_store();
  }, []);

  const handleDelete = (id) => {
    $host.delete(`api/news/${id}/`).then((res) => {
      getHtu_store();
    });
  };

  return (
    <div className="editHtu">
      <h2>Editing</h2>
      <div className="editHtu__content">
        {htu_store &&
          htu_store.map((el, index) => (
            <div className="editHtu__item">
              <div className="editHtu__left">
                <div className="editHtu__title">
                  #{index + 1} {el.title}
                </div>
              </div>
              <div className="editHtu__right">
                <div className="editHtu__btns">
                  <button
                    onClick={() => {
                      handleActiveEdit(false, false);

                      handleDetailHtu(el);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(el.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EditHtu;
