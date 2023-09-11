import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Section(props) {
	return (
		<div className="flex flex-col gap-2 md:gap-4 text-center ">
			{props.children}
			<Separator />
		</div>
	);
}

export function SectionTitle(props) {
	return (
		<h3 className="font-bold text-2xl underline underline-offset-2">
			{props.children}
		</h3>
	);
}

export function SectionSubTitle(props) {
	return <h4 className=" text-xl text-muted-foreground ">{props.children}</h4>;
}

export function SectionBody(props) {
	return <div>{props.children}</div>;
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
