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
	SectionList,
	SectionListItem,
	SubSection,
	SectionHoverCard,
} from "./section";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import EducationIllustration from "./educationIllustration";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import LaunchCode from "./launchCode";
import Stlcc from "./stlcc";
import DeveloperIllustration from "./developerIllustration";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const ProgrammingLanguagesCarousel = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<div className="overflow-hidden" ref={emblaRef}>
			<div className="flex">
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
			</div>
		</div>
	);
};

function DegreeInfo(props) {
	return (
		<div className="flex flex-col text-xs items-start gap-1 pl-2 justify-end font-sans tracking-tight font-light">
			<span>{props.degree}</span>
			<span>{props.year}</span>
		</div>
	);
}
export default function Education() {
	return (
		<>
			{/* <div className="pt-6 flex flex-nowrap flex-col  max-w-2xl  mx-auto "> */}
			<Section className="flex-row justify-between  w-full">
				<SubSection className="justify-start items-start ">
					<SectionTitle>Education</SectionTitle>
					<SectionList className="list-none pl-1 flex flex-col gap-6">
						<SectionListItem>
							<SectionHoverCard
								href="https://launchcode.org"
								icon={<LaunchCode />}
								openGraph="https://www.launchcode.org/assets/og-default-image-254a27700bce39b831cfc829e9849d300afe0e43aa6678894976d5214380afa4.jpg"
								contentClassName="h-[250px] w-auto"
							>
								<DegreeInfo
									degree="LC101 Programming Course"
									year="June 2023"
								/>
							</SectionHoverCard>
						</SectionListItem>
						<SectionListItem>
							<SectionHoverCard
								href="https://stlcc.edu"
								icon={<Stlcc />}
								openGraph="https://www.stlcc.edu/images/logos-icons/stlcc-logo-blue-bgrnd.gif"
								contentClassName="h-[250px]"
							>
								<DegreeInfo degree="Associate in Arts" year="May 2022" />
							</SectionHoverCard>
						</SectionListItem>
					</SectionList>
				</SubSection>
				<SubSection className="flex-row justify-end items-center">
					<EducationIllustration className="w-1/2 " />
				</SubSection>
			</Section>

			<Section className="flex-row justify-between w-full ">
				<SubSection className="w-1/4">
					<DeveloperIllustration />
				</SubSection>
				<SubSection>
					<SectionTitle> Languages</SectionTitle>
					<SectionBody className=" gap-2 justify-center grid grid-flow-row auto-rows-max grid-cols-3">
						{/* <ProgrammingLanguagesCarousel /> */}
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
				</SubSection>
			</Section>

			<Section>
				<SectionTitle>Independent Learning</SectionTitle>
				<SectionSubTitle>Java Programming Masterclass</SectionSubTitle>
				<SectionSubTitle>Instructor: Tim Buchalka || 47 hours </SectionSubTitle>
				<SectionList>
					<SectionListItem>Key words and expressions</SectionListItem>
					<SectionListItem> Conditional statements and loops</SectionListItem>
					<SectionListItem>Four pillars of OOP</SectionListItem>
					<SectionListItem>Java collections</SectionListItem>
					<SectionListItem>Debugging and unit testing</SectionListItem>
					<SectionListItem>Stream and Databases</SectionListItem>
				</SectionList>
				<SectionSubTitle>Beginner JavaScript</SectionSubTitle>
				<SectionSubTitle>Instructor: Wes Bos || 28 hours</SectionSubTitle>
				<SectionList>
					<SectionListItem> Events</SectionListItem>
					<SectionListItem> Keywords and expressions</SectionListItem>
					<SectionListItem> Logic and flow control</SectionListItem>
					<SectionListItem> Fetching data from an API</SectionListItem>
					<SectionListItem> Conditional Statements and loops</SectionListItem>
					<SectionListItem> Structuring larger applications</SectionListItem>
				</SectionList>
			</Section>

			{/* <div className="col-start-2">
				<h2 className=" text-center py-4  font-sans font-bold  decoration-neutral-800 text-3xl  tracking-widest underline   underline-offset-8"></h2>
				<div className=" text-center">
					<span className="text-xl font-bold text-blue-500  tracking-wider"></span>
				</div>
				<div className="text-center ">
					<span className="text-xl tracking-wide"> </span>
				</div>
				<div className=" pt-6 text-center">
					<span className="text-xl italic tracking-tight font-bold"></span>
				</div>
				<ul className="pt-4 text-center grid grid-cols-2 tracking-wider ">
					<li className="pt-2 text-lg">- Key words and expressions</li>
					<li className="pt-2 text-lg">- Conditional statements and loops</li>
					<li className="pt-2 text-lg">- Four pillars of OOP</li>
					<li className="pt-2 text-lg">- Java collections</li>
					<li className="pt-2 text-lg">- Debugging and unit testing</li>
					<li className="pt-2 pb-8 text-lg ">- Stream and Databases</li>
				</ul> */}
			{/* <div className="  border-b"></div> */}
			{/* <div className="pt-8  text-center">
				<span className="text-xl font-bold text-blue-500  tracking-wider"></span>
			</div>
			<div className="text-center  ">
				<span className="text-xl tracking-wide"> </span>
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
			</ul> */}

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
		</>
	);
}
