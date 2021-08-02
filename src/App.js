import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GlobalStyles from "./globalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
    </BrowserRouter>
  );
};

export default App;
