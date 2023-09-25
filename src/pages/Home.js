import React from "react";
import About from "../components/about";
import Education from "../components/education";
import Navbar from "../components/navbar";
import Projects from "@/components/projects";
import References from "@/components/references";
function Home() {
	return (
		<div className="flex flex-col items-center justify-center ">
			<Navbar />
			<div className="flex gap-28 first:gap-0 flex-col max-w-2xl">
				<About />
				<Education />
				<Projects />
				<References />
			</div>
		</div>
	);
}

export default Home;
