import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
 
    </div>
  );
}

export default App;
