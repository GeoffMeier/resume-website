import React from "react";

export default function Projects() {
return (
    <>
 {/* <div class="navbar">
   
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/education">Education</a></li>
    
    <li><a href="/contact">Contact</a></li>
  </ul>
</div> */}
<div className="projects">
    <h1 >Project Experience</h1>

</div>
<div className="project1">
    <h2>Liftoff Group Project(LaunchCode)</h2>
    <h3 className="groupProject">The Movie DL</h3>
    <ul className="groupProjectList">
    <li>Utilized public movie DB API to pull in movie data</li>
    <li>Allowed users to search and browse movies by title, cast, and genre</li>
    <li>Displayed movies in card views with pagination</li>
    <li>
    Provided content about each movie with a simple click on the movie card
    </li>
    <li>Allowed users to sign in and add movies to their cart</li>
    <li>
Cart allowed checkout through the use of the Stripe API </li>
</ul>
</div>
    </>
)

}