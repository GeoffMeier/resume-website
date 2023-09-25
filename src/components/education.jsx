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

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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
			<section id="education">
				<Section className="flex-row justify-between  w-full  mt-4">
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

				<Section
					className="flex-row flex-wrap  w-full items-center justify-stretch pt-10 "
					noSeparator
				>
					<SectionTitle className="w-full "> Languages</SectionTitle>
					<SubSection className="flex justify-start w-1/4">
						<DeveloperIllustration />
					</SubSection>
					<SubSection>
						<SectionBody className=" gap-2  grid grid-flow-row w-3/4 auto-rows-max grid-cols-4">
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

				<Section noSeparator className="pt-10">
					<SectionTitle>Independent Learning</SectionTitle>
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>Java Programming Masterclass</AccordionTrigger>
							<AccordionContent>
								Instructor: Tim Buchalka || 47 hours
								<SectionList>
									<SectionListItem>Key words and expressions</SectionListItem>
									<SectionListItem>
										{" "}
										Conditional statements and loops
									</SectionListItem>
									<SectionListItem>Four pillars of OOP</SectionListItem>
									<SectionListItem>Java collections</SectionListItem>
									<SectionListItem>Debugging and unit testing</SectionListItem>
									<SectionListItem>Stream and Databases</SectionListItem>
								</SectionList>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Beginner JavaScript</AccordionTrigger>
							<AccordionContent>
								Instructor: Wes Bos || 28 hours
								<SectionList>
									<SectionListItem> Events</SectionListItem>
									<SectionListItem> Keywords and expressions</SectionListItem>
									<SectionListItem> Logic and flow control</SectionListItem>
									<SectionListItem> Fetching data from an API</SectionListItem>
									<SectionListItem>
										{" "}
										Conditional Statements and loops
									</SectionListItem>
									<SectionListItem>
										{" "}
										Structuring larger applications
									</SectionListItem>
								</SectionList>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</Section>
			</section>
		</>
	);
}
