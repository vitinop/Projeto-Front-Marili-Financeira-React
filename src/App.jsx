import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import "./App.css";
import NavbarDefault from "./components/NavbarDefault";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <NavbarDefault/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
