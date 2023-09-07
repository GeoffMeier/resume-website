/** @format */

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { Separator } from "./ui/separator";
export default function About() {
	return (
		<>
			{/* <div className="flex flex-wrap  justify-center w-screen "> */}
			<header className="w-screen py-0 bg-neutral-800">
				<div className="max-w-xl mx-auto flex items-center text-center">
					<div className=" sm:w-3/12 px-0 flex flex-wrap  py-0">
						{/* <img className="py-4 shadow-lg rounded-full  h-auto align-middle border-none" src="image/208D5F57-832A-4E6B-96DB-F4933FE5C587_1_201_a.jpeg" alt="Geoffrey Meier" decoding="async" /> */}
						{/* <br/> */}
						{/* <h2 className="py-1 text-zinc-200 tracking-normal">Geoffrey Meier</h2> */}
					</div>

					{/* <nav className="sm:flex flex-col sm:flex-row sm:w-10/12 w-full order-last sm:order-none my-4 sm:my-0 hidden justify-center">
<a className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px " href="/">About</a>
<a className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/education">Education</a>
<a className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/references">References</a>
</nav> */}
				</div>
			</header>

			{/* </div> */}

			<section className="">
				<div className=" pt-8 flex flex-nowrap flex-col text-center md:text-left max-w-2xl  mx-auto ">
					{/* <div class=" flex flex-nowrap flex-col  max-w-2xl  mx-auto  items-baseline "> */}
					<h1 className=" pt-5 pl-0 text-6xl tracking-tighter font-extrabold">
						GEOFFREY <span className="text-blue-500">MEIER</span>{" "}
					</h1>

					<div className="pt-2">
						<span className="pl-0 tracking-tight font-bold text-blue-500 text-xl">
							SOFTWARE DEVELOPER
						</span>
						<span className="pl-2 tracking-tight text-xl">*</span>
						<span className="pl-2 tracking-tight font-bold text-xl">
							ST.LOUIS, MISSOURI
						</span>
						<span className="pl-2 tracking-tight text-xl">*</span>
						{/* <span className="pl-2 tracking-tight font-medium hover:underline hover:text-blue-500 text-blue-500"><a href="mailto: grm0809@gmail.com">GRM0809@GMAIL.COM </a></span> */}

						<span className="pl-2 tracking-tight font-bold text-xl">
							636-728-8409
						</span>
					</div>
					<div className=" flex text-3xl md:text-5xl md:justify-start flex-nowrap  justify-center py-4 gap-4 flex-row  items-center">
						<a href="https://github.com/GeoffMeier">
							<SiGithub />{" "}
						</a>

						<a
							className="text-blue-500"
							href="https://www.linkedin.com/in/geoffrey-meier-47395a273/"
						>
							<SiLinkedin />
						</a>
						<a className=" text-[#BB001B]" href="mailto: grm0809@gmail.com">
							<SiGmail />
						</a>
					</div>
					<Separator />

					<h2 className="pt-12 font-bold text-2xl underline-offset-2 underline">
						OBJECTIVE:
					</h2>
					<p className="pt-3 font-light text-xl tracking-wider">
						To bring my newly acquired skills and passion for software
						development to a team. I want to build off what I've learned and
						develop secure and intuitive programs, software, and web-based
						applications. I have ambitions to become a Full Stack Developer and
						to further my skills by continuing to learn on my own and through my
						peers.{" "}
					</p>
				</div>
			</section>
		</>
	);
}
