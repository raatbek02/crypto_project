import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_uploadImage } from "../../../store/uploadImage";
import "./UploadPhoto.css";

function UploadPhoto() {
  // const [selectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch();
  const selectedImage = useSelector((s) => s.uploadImage.uploadImage);
  console.log("selectedImage", selectedImage);

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch(add_uploadImage(e.target.files[0]));
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    dispatch(add_uploadImage());
  };

  return (
    <>
      <div>
        <div className="fileInput">
          <label>
            <input
              accept="image/*"
              type="file"
              onChange={imageChange}
              id="uploadFile"
            />
            Upload Image
          </label>
        </div>

        {selectedImage && (
          <div className="fileResults">
            <div className="fileImages">
              <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
            </div>
            <div className="fileDelete">
              <button onClick={removeSelectedImage}>Remove This Image</button>{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UploadPhoto;

// Just some styles
// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   preview: {
//     marginTop: 50,
//     display: "flex",
//     flexDirection: "column",
//   },
//   image: { maxWidth: "100%", maxHeight: 320 },
//   delete: {
//     cursor: "pointer",
//     padding: 15,
//     background: "red",
//     color: "white",
//     border: "none",
//   },
// };

//     const [imageName, setImageName] = useState("");
//   const [image, setImage] = useState();
//   console.log(imageName);

//   const imageChangeHandler = (e) => {
//     setImage(e.target.files[0]);
//     setImageName(e.target.files[0].name);
//   };
//   return (
//     <div className="fileInput">
//       <div>
//         <input
//           //   style={{ display: "none" }}
//           id="upload-photo"
//           name="upload-photo"
//           type="file"
//           onChange={imageChangeHandler}
//         />
//         <label htmlFor="upload-photo">Upload photo</label>
//       </div>

//       <div style={{ marginTop: "30px" }}>fileName: {imageName}</div>
//     </div>
//   );
