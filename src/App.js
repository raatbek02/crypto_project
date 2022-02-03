import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
