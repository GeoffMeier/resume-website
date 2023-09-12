import React from "react";
import {
	Section,
	SectionBody,
	SectionIconLink,
	SectionSubTitle,
	SectionTitle,
	SectionListItem,
	SectionList,
} from "./section";
export default function Projects() {
	return (
		<>
			<Section>
				<SectionTitle> Individual Projects</SectionTitle>
				<SectionSubTitle> Launch Checklist Form ~ JavaScript</SectionSubTitle>
				<SectionList>
					<SectionListItem>
						Validated that the user submitted data correctly for each field
					</SectionListItem>
					<SectionListItem>
						After validation, updated a list of what was currently ready and
						what was not ready to launch
					</SectionListItem>
					<SectionListItem>
						Indicated what was correct and incorrect using the DOM to update the
						CSS
					</SectionListItem>
				</SectionList>

				<SectionSubTitle> Orbit Report ~ JavaScript </SectionSubTitle>
				<SectionList>
					<SectionListItem>
						Added an Angular component tag in the apps HTML to display a table
					</SectionListItem>
					<SectionListItem>
						Iterated over objects and displayed their information in a new table
					</SectionListItem>
					<SectionListItem>
						Iterated over a specific column and highlighted any instances
						of“space debris”
					</SectionListItem>
					<SectionListItem>
						Iterated over each object in the table to display a total number of
						objects
					</SectionListItem>
				</SectionList>
				<SectionSubTitle> Tech Jobs (mvc) ~ Java</SectionSubTitle>
				<SectionList>
					<SectionListItem>
						Used a loop to display job results in a table
					</SectionListItem>
					<SectionListItem>
						Added a table to view jobs by category
					</SectionListItem>
					<SectionListItem>
						Connected MySQL database to a spring application
					</SectionListItem>
					<SectionListItem>
						Created a handler to process a search request and render the data
						inthe updated search view
					</SectionListItem>
					<SectionListItem>
						Created a handler to loop over the search results and display all
						job fields
					</SectionListItem>
				</SectionList>
				<SectionSubTitle> Tech Jobs (persistent) ~ Java</SectionSubTitle>
				<SectionList>
					<SectionListItem>
						Created an Abstract class for extending classes with similar fields
					</SectionListItem>
					<SectionListItem>
						Created a CrudRepository interface for each class to add, delete,
						and view data in the controller using get and post requests
					</SectionListItem>
				</SectionList>
			</Section>

			<Section>
				<SectionTitle>LiftOff Group Project</SectionTitle>
				<SectionSubTitle>
					Movie Application ~ React, Spring Boot, & MySQL
				</SectionSubTitle>

				<SectionList>
					<SectionListItem>
						Utilized public movie DB API to pull in movie data
					</SectionListItem>
					<SectionListItem>
						Allowed users to search and browse movies by title, cast, and genre
					</SectionListItem>
					<SectionListItem>
						Displayed movies in card views with pagination
					</SectionListItem>
					<SectionListItem>
						Provided content about each movie with a simple click on the movie
						card
					</SectionListItem>
					<SectionListItem>
						Allowed users to sign in and add movies to their cart
					</SectionListItem>
					<SectionListItem>
						Cart allowed checkout through the use of the Stripe API
					</SectionListItem>
				</SectionList>
			</Section>
		</>
	);
}
