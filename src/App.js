import "./index.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="container">
      {/* <nav>
        <ul>
          <Link to="/" class="list">
            <Home/>
          </Link>
          <Link to="/about" class="list">
            <AboutPage/>
          </Link>
          <Link to="/live" class="list">
            Live course
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
        </ul>
      </nav> */}

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        
      </Routes>
    </div>
  );
}

export default App;