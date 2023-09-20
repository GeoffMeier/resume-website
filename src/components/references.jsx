import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Section, SectionTitle } from "./section";

export default function References() {
	return (
		<Section>
			<SectionTitle>References</SectionTitle>
			<div className="grid grid-cols-2 gap-4 ">
				<Card>
					<CardHeader>
						<CardTitle> Gavin Meier</CardTitle>
						<CardDescription>Senior Software Engineer</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Sonos, Inc.</p>
					</CardContent>
					<CardFooter>
						<p> Mentor</p>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle> Lucas Barth</CardTitle>
						<CardDescription>Senior Software Engineer</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Ocelot Consulting</p>
					</CardContent>
					<CardFooter>
						<p> Mentor</p>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle> Taylor Jovi</CardTitle>
						<CardDescription> Software Engineer</CardDescription>
					</CardHeader>
					<CardContent>
						<p> TenderHeart Health Outcomes</p>
					</CardContent>
					<CardFooter>
						<p> Teacher Assistant at LaunchCode</p>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle> Wesley Park</CardTitle>
						<CardDescription> Software Engineer</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Superlative Technologies</p>
					</CardContent>
					<CardFooter>
						<p> Teacher Assistant at LaunchCode</p>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle> Brian Bredahl</CardTitle>
						<CardDescription> Software Engineer</CardDescription>
					</CardHeader>
					<CardContent>
						<p> VF Corporation</p>
					</CardContent>
					<CardFooter>
						<p> Mentor</p>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle> Alex Meier</CardTitle>
						<CardDescription> Software Engineer</CardDescription>
					</CardHeader>
					<CardContent>
						<p>MasterCard</p>
					</CardContent>
					<CardFooter>
						<p> Mentor</p>
					</CardFooter>
				</Card>
			</div>
		</Section>
	);
}
