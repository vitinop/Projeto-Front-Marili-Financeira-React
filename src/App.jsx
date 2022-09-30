import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import "./App.css";
import NavbarDefault from "./components/NavbarDefault";


function App() {
  return (
    <div className="App">
      <NavbarDefault/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
 
    </div>
  );
}

export default App;
