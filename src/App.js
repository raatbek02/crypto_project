import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./components/AppRoutes";

import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <Sidebar />
        <AppRoutes />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
