import React, { useEffect } from "react";
import "./SellModal.css";

function SellModal({ active, setActive, children }) {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = active ? "hidden" : "auto";
  }, [active]);
  return (
    <div
      className={active ? "sellModal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "sellModal__content active" : "sellModal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default SellModal;
