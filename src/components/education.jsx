import React from "react";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoAngular } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
	Section,
	SectionBody,
	SectionIconLink,
	SectionSubTitle,
	SectionTitle,
} from "./section";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
export default function Education() {
	return (
		<>
			{/* <div className="pt-6 flex flex-nowrap flex-col  max-w-2xl  mx-auto "> */}
			<Section>
				<SectionTitle>Education</SectionTitle>
				<SectionBody>
					- LaunchCode, LC101 Programming Course - June 2023
					<br />- St. Louis Community College, Associate in Arts - May 2022
				</SectionBody>
			</Section>

			<Section>
				<SectionTitle>Skills</SectionTitle>
				<SectionSubTitle>Programming Languages & tools</SectionSubTitle>
				<SectionBody className="flex-row flex-wrap gap-2 justify-center">
					<SectionIconLink
						icon={<BiLogoJava />}
						label="Java"
						href="https://www.java.com/en/"
					/>
					<SectionIconLink
						icon={<BiLogoJavascript />}
						label="JavaScript"
						href="https://www.javascript.com/"
					></SectionIconLink>
					<SectionIconLink
						icon={<BiLogoReact />}
						label="React"
						href="https://react.dev/"
					></SectionIconLink>
					<SectionIconLink
						icon={<BiLogoSpringBoot />}
						label="Spring Boot"
						href="https://spring.io/"
					></SectionIconLink>
					<SectionIconLink
						icon={<BiLogoAngular />}
						label="Angular"
						href="https://angular.io/"
					></SectionIconLink>
					<SectionIconLink
						icon={<BiLogoNodejs />}
						label="NodeJS"
						href="https://nodejs.org/en"
					></SectionIconLink>
					<SectionIconLink
						icon={<BiLogoCss3 />}
						label="CSS"
						href="https://css.com/"
					></SectionIconLink>
					<SectionIconLink
						icon={<BiLogoHtml5 />}
						label="HTML"
						href="https://html.com/"
					></SectionIconLink>
				</SectionBody>
			</Section>

			<div className="col-start-2">
				<h2 className=" text-center py-4  font-sans font-bold  decoration-neutral-800 text-3xl  tracking-widest underline   underline-offset-8">
					Independent Learning
				</h2>
				<div className=" text-center">
					<span className="text-xl font-bold text-blue-500  tracking-wider">
						Java Programming Masterclass
					</span>
				</div>
				<div className="text-center ">
					<span className="text-xl tracking-wide">
						{" "}
						Instructor: Tim Buchalka || 47 hours{" "}
					</span>
				</div>
				<div className=" pt-6 text-center">
					<span className="text-xl italic tracking-tight font-bold">
						Topics covered:{" "}
					</span>
				</div>
				<ul className="pt-4 text-center grid grid-cols-2 tracking-wider ">
					<li className="pt-2 text-lg">- Key words and expressions</li>
					<li className="pt-2 text-lg">- Conditional statements and loops</li>
					<li className="pt-2 text-lg">- Four pillars of OOP</li>
					<li className="pt-2 text-lg">- Java collections</li>
					<li className="pt-2 text-lg">- Debugging and unit testing</li>
					<li className="pt-2 pb-8 text-lg ">- Stream and Databases</li>
				</ul>
				{/* <div className="  border-b"></div> */}
				<div className="pt-8  text-center">
					<span className="text-xl font-bold text-blue-500  tracking-wider">
						Beginner JavaScript
					</span>
				</div>
				<div className="text-center  ">
					<span className="text-xl tracking-wide">
						{" "}
						Instructor: Wes Bos || 28 hours{" "}
					</span>
				</div>
				<div className=" text-center pt-6">
					<span className="text-xl italic tracking-tight font-bold">
						Topics covered:{" "}
					</span>
				</div>
				<ul className="py-4 text-center grid grid-cols-2 tracking-wider">
					<li className="pt-1 text-lg">- Events</li>
					<li className="pt-2 text-lg">- Keywords and expressions</li>
					<li className="pt-2 text-lg">- Logic and flow control</li>
					<li className="pt-2 text-lg">- Fetching data from an API</li>
					<li className="pt-2 text-lg">- Conditional Statements and loops</li>
					<li className="pt-2 text-lg">- Structuring larger applications</li>
				</ul>

				{/* <div className="text-center pt-6">
    <span className="text-xl text-blue-500 font-bold font-bold tracking-wider">Beginner JavaScript</span>
 </div>
 <div className="text-center ">
    <span className="text-xl tracking-wide">- Instructor: Wes Bos </span>
  </div>
  <div className="text-center ">
    <span className="text-xl italic tracking-wide">- 28 hours </span>
  </div> */}
				{/* <div className="text-center pt-6">
    <span className="text-xl text-blue-500  font-bold tracking-wider">Web Developer Bootcamp</span>
 </div>
 <div className="text-center ">
    <span className="text-xl tracking-wide">- Instructor: Colt Steele  </span>
  </div>
  <div className="text-center ">
    <span className="text-xl italic tracking-wide">- 64 hours </span>
  </div> */}
			</div>
		</>
	);
}
