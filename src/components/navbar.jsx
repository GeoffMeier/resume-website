import React from "react";

export default function Navbar() {
	return (
		<>
			<header className="w-screen py-0 bg-neutral-800">
				<div className="max-w-xl mx-auto w-full flex md:items-center justify-center gap-4 md:text-center">
					<div className=" md:w-3/12 px-0 flex   py-0">
						<img
							className="py-4 shadow-lg rounded-full h-60 md:h-auto  align-middle border-none"
							src="image/headShot.jpeg"
							alt="Geoffrey Meier"
							decoding="async"
						/>

						{/* <h2 className="py-1 text-zinc-200 tracking-normal">Geoffrey Meier</h2> */}
					</div>

					<nav className="flex flex-col md:flex-row md:w-10/12 justify-center items-start order-last md:order-none my-4 md:my-0  ">
						<a
							className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-44 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px "
							href="/"
						>
							About
						</a>
						<a
							className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px"
							href="/education"
						>
							Education
						</a>
						<a
							className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px"
							href="/projects"
						>
							Projects
						</a>
						<a
							className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px"
							href="/references"
						>
							References
						</a>
					</nav>
				</div>
			</header>
		</>
	);
}
