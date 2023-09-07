import "./index.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ReferencesPage from "./pages/ReferencesPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/education" element={<EducationPage />} />
			<Route path="/projects" element={<ProjectsPage />} />
			<Route path="/references" element={<ReferencesPage />} /> */}
		</Routes>
	);
}

export default App;
