import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {ImGithub} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
export default function About() {
return (
    <>
{/* <div className="flex flex-wrap  justify-center w-screen "> */}
<header className="w-screen py-0 bg-neutral-800" >
<div className="max-w-xl mx-auto flex items-center text-center">
<div className=" sm:w-3/12 px-0 flex flex-wrap  py-0">
<img className="shadow-lg rounded-full  h-auto align-middle border-none" src="image/208D5F57-832A-4E6B-96DB-F4933FE5C587_1_201_a.jpeg" alt="Geoffrey Meier" decoding="async" />
<br/>
{/* <h2 className="py-1 text-zinc-200 tracking-normal">Geoffrey Meier</h2> */}
</div>

<nav className="sm:flex flex-col sm:flex-row sm:w-10/12 w-full order-last sm:order-none my-4 sm:my-0 hidden justify-center">
<a className="relative tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px " href="/">About</a>
<a className="relative tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/projects">Projects</a>
<a className="relative tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/references">References</a>
</nav>
</div>

</header>


{/* </div> */}

  <section className="">
  <div className=" pt-6 flex flex-nowrap flex-col  max-w-2xl  mx-auto ">
  {/* <div class=" flex flex-nowrap flex-col  max-w-2xl  mx-auto  items-baseline "> */}
  <h1 className=" pt-5 pl-6 text-5xl tracking-tighter font-extrabold">GEOFFREY <span className="text-blue-500">MEIER</span>  </h1>
  <div className="pt-2"> 
   <span className="pl-0 tracking-tight font-medium">ST.LOUIS, MISSOURI</span> 
   <span className="pl-2 tracking-tight ">*</span> 
   <span className="pl-2 tracking-tight font-medium hover:underline hover:text-blue-500 text-blue-500"><a href="mailto: grm0809@gmail.com">GRM0809@GMAIL.COM </a></span>
   
   <span className="pl-2 tracking-tight ">*</span> 
   <span className="pl-2 tracking-tight font-medium ">636-728-8409</span> 
  
    </div>
    <div className="pt-10 flex flex-row">
      <div><a className="  text-4xl" href="https://github.com/GeoffMeier"><ImGithub/> </a></div>
     <div><a className=" pl-10  text-4xl" href="https://github.com/GeoffMeier"><BsLinkedin/></a></div>
    </div>

  {/* <p className="pt-2 font-serif"> </p>
    <h2 className="  pt-10  font-sans text-3xl  tracking-wider underline  underline-offset-4">Education </h2>
    <span className=" pt-5 text-xl">- LaunchCode, LC101 Programming Course - June 2023</span>
    <span className=" pt-3 text-xl">- St. Louis Community College, Associate in Arts - May 2022</span>
     */}
  {/* </div> */}
  </div>
  </section>
 

 
    </>
)

}