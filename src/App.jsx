// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Approutes";
import Navbar from "./components/Navbar"; // ✅ Import your Navbar
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar /> {/* ✅ Use your Navbar component here */}
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
