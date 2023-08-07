import React from "react";
import {BiLogoJava} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoHtml5} from 'react-icons/bi'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoAngular} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoSpringBoot} from 'react-icons/bi'
export default function Education() {
return (
    <>
    {/* <div className="pt-6 flex flex-nowrap flex-col  max-w-2xl  mx-auto "> */}
    <div className="pt-6 grid grid-cols-2  divide-x-2 outline-blue-500 ">
 <div className="">

 <h2 className=" text-center py-4  font-sans font-bold  decoration-neutral-800 text-3xl  tracking-widest underline   underline-offset-8 ">Education </h2>
   <div className="text-center "> <span className=" text-xl tracking-wide">- LaunchCode, LC101 Programming Course - June 2023</span></div>
  <div className="text-center pl-9 py-4">  <span className=" text-xl tracking-wide">- St. Louis Community College, Associate in Arts - May 2022</span></div>

  <div className=" text-center py-4  pt-10 font-sans font-bold  decoration-neutral-800 text-3xl  tracking-widest underline   underline-offset-8 ">Skills</div>
   <div className="text-center text-xl text-blue-500 font-bold tracking-wider"> <span className="italic">Programming Languages & tools</span></div>
   <div className=" text-xl pt-1 text-center tracking-wide"> - <span className="italic">Java</span> </div>
   <div className=" text-xl pt-1 text-center tracking-wide"> - <span className="italic">JavaScript</span></div>
   <div className=" text-xl text-center tracking-wide"> - <span className="italic">React</span></div>
   <div className=" text-xl text-center pt-1 tracking-wide"> - <span className="italic">Spring</span></div>
   <div className=" text-xl text-center pt-1 tracking-wide"> - <span className="italic">Angular</span></div>
   <div className=" text-xl text-center pt-1 tracking-wide"> - <span className="italic">Node</span></div>
   <div className=" text-xl text-center pt-1 tracking-wide"> - <span className="italic">CSS</span></div>
   <div className=" text-xl text-center pt-1 tracking-wide"> - <span className="italic">HTML</span></div>
    {/* <ul className="text-center py-2">
    <li>Iterated over questions to display one question at a time and stored candidate’s answers
</li>
    </ul> */}
    <div className="pt-8 flex flex-row item-center text-center">
    <div className=" pt-4  pl-28 item-center text-center"><a className="  text-5xl" href="https://www.java.com/en/"><BiLogoJava/> </a></div>
     <div className="pl-8 pt-4"><a className=" text-5xl" href="https://www.javascript.com/"><BiLogoJavascript/></a></div>
     <div className="pl-8 pt-4"><a className="   text-5xl" href="https://react.dev/"><BiLogoReact/></a></div>
     <div className="pl-8 pt-4"><a className="   text-5xl" href="https://spring.io/"><BiLogoSpringBoot/></a></div>
     <div className="pl-8 pt-4"><a className="   text-5xl" href="https://angular.io/"><BiLogoAngular/></a></div>
     <div className="pl-8 pt-4"><a className="   text-5xl" href="https://nodejs.org/en"><BiLogoNodejs/></a></div>
     <div className="pl-8 pt-4"><a className="   text-5xl" href="https://css.com/"><BiLogoCss3/></a></div>
     <div className="pl-8 pt-4"><a className="   text-5xl" href="https://html.com/"><BiLogoHtml5/></a></div>
 
 </div>
 
 
   
    </div>
    <div className="col-start-2">
    <h2 className=" text-center py-4  font-sans font-bold  decoration-neutral-800 text-3xl  tracking-widest underline   underline-offset-8">Independent Learning</h2>
    <div className=" text-center">
    <span className="text-xl font-bold text-blue-500  tracking-wider">Java Programming Masterclass</span>
  </div>
  <div className="text-center ">
    <span className="text-xl tracking-wide"> Instructor: Tim Buchalka || 47 hours  </span>
  </div>
  <div className=" pt-6 text-center">
    <span className="text-xl italic tracking-tight font-bold">Topics covered: </span>
  </div>
 <ul className="pt-4 text-center grid grid-cols-2 tracking-wider ">
    <li className="pt-2 text-lg">- Key words and expressions
</li>
    <li className="pt-2 text-lg">- Conditional statements and loops</li>
    <li className="pt-2 text-lg">- Four pillars of OOP</li>
    <li className="pt-2 text-lg">- Java collections</li>
    <li className="pt-2 text-lg">- Debugging and unit testing</li>
    <li className="pt-2 pb-8 text-lg ">- Stream and Databases</li>

 </ul>
 {/* <div className="  border-b"></div> */}
 <div className="pt-8  text-center">
    <span className="text-xl font-bold text-blue-500  tracking-wider">Beginner JavaScript</span>
  </div>
  <div className="text-center  ">
    <span className="text-xl tracking-wide"> Instructor: Wes Bos || 28 hours  </span>
  </div>
  <div className=" text-center pt-6">
    <span className="text-xl italic tracking-tight font-bold">Topics covered: </span>
  </div>
 <ul className="py-4 text-center grid grid-cols-2 tracking-wider">
    <li className="pt-1 text-lg">- Events

</li>
    <li className="pt-2 text-lg">- Keywords and expressions</li>
    <li className="pt-2 text-lg">- Logic and flow control</li>
    <li className="pt-2 text-lg">- Fetching data from an  API</li>
    <li className="pt-2 text-lg">- Conditional Statements and loops</li>
    <li className="pt-2 text-lg">- Structuring larger applications
</li>

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
 
     
  </div>
    </>
)

}