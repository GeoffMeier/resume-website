import React from "react";
import About from "../components/about";
import Education from "../components/education";
import Navbar from "../components/navbar";

function Home() {
	return (
		<div>
			<Navbar />
			<About />
			<Education />
		</div>
	);
}

export default Home;
