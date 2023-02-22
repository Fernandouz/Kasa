import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BadURL from "./pages/ErrorPage";
import Fiche from "./pages/FicheLogement";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/fiche" element={<Fiche />} />
        <Route path="*" element={<BadURL />} />
      </Routes>
    </div>
  );
}

export default App;
