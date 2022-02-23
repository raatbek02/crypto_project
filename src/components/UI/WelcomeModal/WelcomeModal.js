import React, { useEffect } from "react";
import "./WelcomeModal.css";

function WelcomeModal({ active, setActive, children }) {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = active ? "hidden" : "auto";
  }, [active]);
  return (
    <div
      className={active ? "welcomeModal active" : "welcomeModal"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? "welcomeModal__content active" : "welcomeModal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default WelcomeModal;
