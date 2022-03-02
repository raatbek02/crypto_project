import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./components/AppRoutes";

import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import { useDispatch, useSelector } from "react-redux";
import lottie from "lottie-web";
import Modal from "./components/UI/Modal/Modal";
import WelcomeModal from "./components/UI/WelcomeModal/WelcomeModal";
import Header from "./components/Main/Header/Header";

function App() {
  const [activeWelcome, setActiveWelcome] = useState(false);
  const activeBurger = useSelector((s) => s.activeBurger.activeBurger);
  const dispatch = useDispatch();

  document.documentElement.style.overflowY = activeBurger ? "hidden " : "auto ";

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./crypto.json"),
    });

    setActiveWelcome(true);

    setTimeout(() => {
      setActiveWelcome(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <div className="app_desktop">
        <div className="app__container">
          <Sidebar />
          <ContentBlock />
        </div>
      </div>
      <div className="app_mobile">
        <div className="app__container">
          <div className={activeBurger ? "app__left _active" : "app__left "}>
            <Sidebar />
          </div>
          <div className="app__right">
            <ContentBlock />
          </div>
        </div>
      </div>
      <ToastContainer />
      <WelcomeModal active={activeWelcome} setActive={activeWelcome}>
        <div ref={container}></div>
      </WelcomeModal>
    </div>
  );
}

export default App;
