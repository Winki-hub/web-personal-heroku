import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop/MenuTop";
import Home from "./components/Pages/Home/Home";
import CV from "./components/Pages/CV/CV";
import Works from "./components/Pages/Works/Works";
import Contact from "./components/Pages/Contact";
import background from "../src/img/Fondo.jpg";

function App() {
  return (
    <div>
      <Router>
        <MenuTop></MenuTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
