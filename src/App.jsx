// src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import { Link } from "react-router-dom";
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <AppRoutes />
    </div>
  );
};

export default App;
