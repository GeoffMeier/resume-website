import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function Section(props) {
	return (
		<>
			<div
				className={cn(
					"flex flex-col gap-2 md:gap-4 px-4 md:px-0 ",
					props.className
				)}
			>
				{props.children}
			</div>
			{!props.noSeparator && <Separator />}
		</>
	);
}

export function SectionTitle(props) {
	return (
		<h3
			className={cn(
				"font-bold text-3xl  tracking-wide uppercase font-sans  pl-0 ",
				props.className
			)}
		>
			{props.children}
		</h3>
	);
}
export function SubSection(props) {
	return (
		<div className={cn("flex flex-col gap-2 md:gap-4  ", props.className)}>
			{props.children}
		</div>
	);
}

export function SectionSubTitle(props) {
	return <h4 className=" text-xl text-muted-foreground ">{props.children}</h4>;
}

export function SectionBody(props) {
	return <div className={cn("flex ", props.className)}>{props.children}</div>;
}

export function SectionList(props) {
	return (
		<ul className={cn("list-disc pl-4", props.className)}>{props.children}</ul>
	);
}
export function SectionListItem(props) {
	return <li className={cn(" ", props.className)}>{props.children}</li>;
}

export function SectionIconLink(props) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<a className="  text-5xl" href={props.href} aria-label={props.label}>
					{props.icon}
				</a>
			</TooltipTrigger>
			<TooltipContent>{props.label}</TooltipContent>
		</Tooltip>
	);
}

export function SectionHoverCard(props) {
	return (
		<HoverCard>
			<HoverCardTrigger
				className="cursor-pointer flex flex-row h-12 items-stretch pl-0"
				asChild
			>
				<a href={props.href} target="_blank">
					{props.icon}
					{props.children}
				</a>
			</HoverCardTrigger>

			<HoverCardContent
				className={cn("  flex", props.contentClassName)}
				side="top"
			>
				<img src={props.openGraph} />
			</HoverCardContent>
		</HoverCard>
	);
}
