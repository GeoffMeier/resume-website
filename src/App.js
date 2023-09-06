import "./index.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ReferencesPage from "./pages/ReferencesPage";

function App() {
  return (
    <div className="">
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
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/references" element={<ReferencesPage />} />
      </Routes>
    </div>
  );
}

export default App;
