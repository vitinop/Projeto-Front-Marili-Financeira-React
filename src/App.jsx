import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NavbarDefault from "./components/NavbarDefault/NavbarDefault";
import Whatsapp from "./components/Whatsapp"
import Footer from "./components/Footer/Footer"
import ComoFunciona from "./pages/ComoFunciona/ComoFunciona";
import Objetivos from "./pages/Objetivos/Objetivos";
import VamosConversar from "./pages/VamosConversar/VamosConversar"
function App() {
  return (
    <div className="App">
      <NavbarDefault />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comofunciona" element={<ComoFunciona/>} />
        <Route path="/objetivos" element={<Objetivos/>} />
        <Route path="/comofunciona" element={<Objetivos/>} />
        <Route path="/vamosconversar" element={<VamosConversar/>} />
      </Routes>
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
