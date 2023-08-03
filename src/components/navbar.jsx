
import React from "react";

export default function Navbar() {
return (
    <>
    <header className="w-screen py-0 bg-neutral-800" >
<div className="max-w-xl mx-auto flex items-center text-center">
<div className=" sm:w-3/12 px-0 flex flex-wrap  py-0">
<img className="py-4 shadow-lg rounded-full  h-auto align-middle border-none" src="image/208D5F57-832A-4E6B-96DB-F4933FE5C587_1_201_a.jpeg" alt="Geoffrey Meier" decoding="async" />
<br/>
{/* <h2 className="py-1 text-zinc-200 tracking-normal">Geoffrey Meier</h2> */}
</div>

<nav className="sm:flex flex-col sm:flex-row sm:w-10/12 w-full order-last sm:order-none my-4 sm:my-0 hidden justify-center">
<a className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px " href="/">About</a>
<a className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/education">Education</a>
<a className="relative text-lg tracking-tight text-zinc-200 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/references">References</a>
</nav>
</div>

</header>
</>
)
}