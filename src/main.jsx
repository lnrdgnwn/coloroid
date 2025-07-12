import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Generate from "./pages/generate/Generate";
import Gradient from "./pages/gradient/Gradient";
import Palettes from "./pages/palettes/Palettes";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palettes" element={<Palettes />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/gradient" element={<Gradient />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
