import "./App.css";
import PortfolioContainer from "./meContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./meContainer/header/Header";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <PortfolioContainer />
    </div>
  );
}

export default App;
