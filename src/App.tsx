import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Accordian from "./subprojects/accordian";
import Home from "./subprojects/Home";
import RgbHexColor from "./subprojects/rgbhexcolor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path='/rgbhexcolor' element={<RgbHexColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
