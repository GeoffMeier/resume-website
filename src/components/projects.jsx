import React from "react";

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-3 pt-4 pl-4 pr-4">
        <div className="col-span-2 text-center">
          <h2 className="text-center py-2 pb-10  font-sans font-bold  decoration-neutral-800 text-3xl  tracking-widest underline   underline-offset-8">
            Individual Projects
          </h2>
          {/* <div className="grid grid-cols-2 ">
               <div className="cols-start-1 "> <h3 className="  text-center text-2xl py-4 font-bold">Candidate Testing  <span className="pl-2 pr-2">~</span><span className="italic  font-bold text-blue-500">JavaScript</span> </h3>
                 <ul className="text-left pl-4 text-xl tracking-wider">
                        <li className="py-1"><span className="text-blue-500 font-extrabold">- </span>Iterated over questions to display one question at a time and stored candidate’s answers</li>
                        <li className="py-1"><span className="text-blue-500 font-extrabold">- </span> Checked each answer for accuracy (case insensitive equality check)</li>
                        <li className="py-1"><span className="text-blue-500 font-extrabold">- </span> Calculated the candidate's overall grade percentage to ensure they passed with a 80% or higher</li>
                        <li className="py-1"><span className="text-blue-500 font-extrabold">- </span> Displayed the results</li>
                        
                    </ul>  
                    </div>
            </div> */}
        </div>
        <div className="col-span-1 text-center  ">
          <h2 className="text-center py-2  font-sans font-bold  decoration-neutral-800 text-3xl  tracking-widest underline   underline-offset-8">
            Liftoff Group Project
          </h2>
        </div>
      </div>
      <div className=" grid grid-cols-3 pt-0 pl-4 pr-4 ">
        <div className="col-span-1 text-center border-b-4 border-neutral-800 ">
          <div className=" border-neutral-800 p-4">
            <h3 className="text-center text-2xl pb-4 font-bold">
              Launch Checklist Form
              <span className="pl-2 pr-2">~</span>
              <span className="italic font-bold text-blue-500">JavaScript</span>
            </h3>
            <ul className="text-left pl-4 pt-2 text-xl tracking-wider pb-16">
              <li className="py-1">
                <span className="text-blue-500 font-extrabold">- </span>
                Validated that the user submitted data correctly for each field
              </li>
              <li className="py-1">
                <span className="text-blue-500 font-extrabold">- </span>
                After validation, updated a list of what was currently ready and
                what was not ready to launch
              </li>
              <li className="py-1">
                <span className="text-blue-500 font-extrabold">- </span>
                Indicated what was correct and incorrect using the DOM to update
                the CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-2 border-r-4  border-l-4 border-b-4 border-neutral-800 ">
          <h3 className="text-center text-2xl pt-2 font-bold">
            Orbit Report
            <span className="pl-2 pr-2">~</span>
            <span className="italic font-bold text-blue-500">JavaScript</span>
          </h3>
          <ul className="text-left pl-4 pt-2 text-xl tracking-wider">
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Added an Angular component tag in the apps HTML to display a table
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Iterated over objects and displayed their information in a new
              table
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Iterated over a specific column and highlighted any instances of
              “space debris”
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Iterated over each object in the table to display a total number
              of objects
            </li>
          </ul>
        </div>
        <div className="col-start-3 p-0  ">
          <h3 className="text-center text-2xl pt-2 font-bold">
            Movie Application
            <span className="pl-2 pr-2">~</span>
            <span className="italic font-bold text-blue-500">
              React, Spring Boot, & MySQL
            </span>
          </h3>
          <ul className="text-left pt-2 pl-4 text-xl tracking-wider">
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Utilized public movie DB API to pull in movie data
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Allowed users to search and browse movies by title, cast, and
              genre
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Displayed movies in card views with pagination
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Provided content about each movie with a simple click on the movie
              card
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Allowed users to sign in and add movies to their cart
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Cart allowed checkout through the use of the Stripe API
            </li>
          </ul>
        </div>
      </div>

      <div className=" grid grid-cols-3  pl-4 pr-4">
        <div className="col-span-1 text-center">
          <div className="col-start-1  border-neutral-800  p-4">
            <h3 className="text-center text-2xl pb-0 font-bold">
              Tech Jobs (mvc)
              <span className="pl-2 pr-2">~</span>
              <span className="italic font-bold text-blue-500">Java</span>
            </h3>
            <ul className="text-left pt-2 pl-4 text-xl tracking-wider">
              <li className="py-1">
                <span className="text-blue-500 font-extrabold">- </span>
                Used a loop to display job results in a table
              </li>
              <li className="py-1">
                <span className="text-blue-500 font-extrabold">- </span>
                Added a table to view jobs by category
              </li>
              <li className="py-1">
                <span className="text-blue-500 font-extrabold">- </span>
                Created a handler to process a search request and render the
                data in the updated search view
              </li>
              <li className="py-1">
                <span className="text-blue-500 font-extrabold">- </span>
                Created a handler to loop over the search results and display
                all job fields
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-2  p-4  border-l-4 border-r-4 border-neutral-800">
          <h3 className="text-center text-2xl pb-0 font-bold">
            Tech Jobs (persistent)
            <span className="pl-2 pr-2">~</span>
            <span className="italic font-bold text-blue-500">Java</span>
          </h3>
          <ul className="text-left pt-2 pl-4 text-xl tracking-wider">
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Connected MySQL database to a spring application
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Created an Abstract class for extending classes with similar
              fields
            </li>
            <li className="py-1">
              <span className="text-blue-500 font-extrabold">- </span>
              Created a CrudRepository interface for each class to add, delete,
              and view data in the controller using get and post requests
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
