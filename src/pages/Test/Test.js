import React, { useEffect, useState } from "react";

import img1 from "../../assets/images/test_images/1.png";
import img2 from "../../assets/images/test_images/2.png";
import img3 from "../../assets/images/test_images/3.png";
import img4 from "../../assets/images/test_images/4.png";
import img5 from "../../assets/images/test_images/5.png";
import img6 from "../../assets/images/test_images/6.png";
import img7 from "../../assets/images/test_images/7.png";
import img8 from "../../assets/images/test_images/8.png";
import img9 from "../../assets/images/test_images/9.png";
import img10 from "../../assets/images/test_images/10.png";
import img11 from "../../assets/images/test_images/11.png";
import img12 from "../../assets/images/test_images/12.png";
import img13 from "../../assets/images/test_images/13.png";
import img14 from "../../assets/images/test_images/14.png";
import img15 from "../../assets/images/test_images/15.png";
import img16 from "../../assets/images/test_images/16.png";
import img17 from "../../assets/images/test_images/17.png";

// import "./Test.css";

// function Test() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem("showModal") !== true) {
//       localStorage.setItem("showModal", true);
//       setShow(true);
//     }
//   }, []);

//   if (show) {
//     return <Component />;
// 	}
	
// 	return {
		
// 	}
// }

function Test() {
  const images = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
    { id: 11, img: img11 },
    { id: 12, img: img12 },
    { id: 13, img: img13 },
    { id: 14, img: img14 },
    { id: 15, img: img15 },
    { id: 16, img: img16 },
    { id: 17, img: img17 },
    { id: 18, img: img1 },
    { id: 19, img: img9 },
    { id: 20, img: img7 },
    { id: 21, img: img5 },
    { id: 22, img: img7 },
    { id: 21, img: img8 },
    { id: 24, img: img2 },
  ];
  return (
    <div className="test">
      <div className="test__container">
        <div className="test__content">
          {images.map((obj) => {
            return (
              <div key={obj.id} className="test__img">
                <img src={obj.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Test;
