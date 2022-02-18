import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./components/AppRoutes";

import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const activeBurger = useSelector((s) => s.activeBurger.activeBurger);
  const dispatch = useDispatch();

  document.documentElement.style.overflowY = activeBurger ? "hidden " : "auto ";

  return (
    <div className="App">
      <div className="desktop">
        <div className="app__container">
          <Sidebar />
          <ContentBlock />
        </div>
      </div>
      <div className="mobile">
        <div className="app__container">
          <div className={activeBurger ? "app__left _active" : "app__left "}>
            <Sidebar />
          </div>
          <div className="app__right">
            <AppRoutes />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
