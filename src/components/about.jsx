import React from "react";

export default function About() {
return (
    <>
<div className="flex flex-wrap items-end justify-center w-screen  border-b border-gray-700 bg-gray-50">
    
  <header className="w-full py-1">
    
    <div className="max-w-2xl mx-auto flex items-center">
        
      <span className="w-6/12 sm:w-3/12 px-6 flex flex-wrap">
        <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="image/208D5F57-832A-4E6B-96DB-F4933FE5C587_1_201_a.jpeg" alt="Geoffrey Meier" decoding="async" />
        
      </span>
      <h2 className="text-center  text-4xl font-medium  sm:ml-13  sm:mt-0   ">Geoffrey Meier </h2>
     
      {/* <h1 className="text-4xl flex place-items-baseline mr-auto">Geoffrey Meier</h1> */}
      {/* <nav className="sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden">
        <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 ml-0 mr-0 sm:ml-20 mt-3 sm:mt-0 max-w-max before:-bottom-1 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/">About</a>
        <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 ml-0 mr-0 sm:ml-12 mt-3 sm:mt-0 max-w-max before:-bottom-1 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/projects">Projects</a>
        <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 ml-0 mr-0 sm:ml-12 mt-3 sm:mt-0 max-w-max before:-bottom-1 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/references">References</a>
      </nav> */}

      
    </div>
     <nav className="sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden justify-center">
        <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500  sm:ml-10 sm:mr-10  sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/">About</a>
        <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 sm:ml-10  sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/projects">Projects</a>
        <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 sm:ml-10 sm:mr-10 sm:mt-2 max-w-max before:-bottom-0 before:absolute before:w-full before:bg-blue-500 before:h-px" href="/references">References</a>
      </nav>
  </header>
  <div className="max-w-4xl mx-auto px-8 md:px-0 py-8 sm:py-16">
    <div className="flex flex-col w-full">
   
    <h2 className=" italic font-medium text-2xl text-center sm:mr-14 sm:mt-0">My Objective as a Software Developer:</h2>
      <p className="text-center sm:mt-4">
      To bring my newly acquired skills and passion for software development to a team.  I want to build off what I've learned and develop secure and intuitive programs, software, and web-based applications.  I have ambitions to become a Full Stack Developer  and to further my skills by continuing to learn on my own and through my peers.
      </p>
      
    </div>
   
   
  </div>
</div>
<div className=" py-10 ml-20">
        <div className="border border-gray-700 border-1  p-4 w-1/4 ">
  <h2 className="border-b border-gray-700 pb-2 mb-4" >Skills:</h2>
  <ul className="border border-gray-700 p-4 relative ">
    <li>Java</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Angular</li>
    <li>React</li>
    <li>CSS</li>
    <li></li>
    <li>HTML</li>
    <li>Node</li>
  </ul>
</div>
</div>
      


 {/* <div class="navbar">
   
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/education">Education</a></li>
    
    <li><a href="/contact">Contact</a></li>
  </ul>
</div> */}

        

{/*         
<div className="flex flex-wrap  w justify-center border-b items-center border-blue-200 bg-gray-50 decoration-clone ">
    <header className="w-full py-1 ">
        <div className="items-center max-w-3xl mx-auto flex">
            <span className="w-6/12 sm:w-3/12 px-8 flex flex-wrap ">
            <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="image/208D5F57-832A-4E6B-96DB-F4933FE5C587_1_201_a.jpeg" alt="Geoffrey meier" decoding="async"  />
            </span>
        {/* <h1 className=" text-4xl  flex place-items-baseline mr-auto ">Geoffrey Meier</h1> */}
       
    {/* <nav className="sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden">
    <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 ml-0 mr-0 sm:ml-20 mt-3 sm:mt-0 max-w-max before:-bottom-1 before:absolute before:w-full before:bg-blue-500 before:h-px " href="/">About</a>
    <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 ml-0 mr-0 sm:ml-12 mt-3 sm:mt-0 max-w-max before:-bottom-1 before:absolute before:w-full before:bg-blue-500 before:h-px " href="/projects">Projects</a>
    <a className="relative text-gray-700 border-b border-transparent hover:text-blue-500 ml-0 mr-0 sm:ml-12 mt-3 sm:mt-0 max-w-max before:-bottom-1 before:absolute before:w-full before:bg-blue-500 before:h-px " href="/references">References</a>
    </nav>
    </div>
     */}
    {/* </header>
    <div className="max-w-4xl mx-auto px-8 md:px-0 py-8 sm:py-16 ">
        <div className="flex flex-col w-full ">
        <h2 className="text-center">Geoffrey Meier</h2>
        <h2 className="text-center"> Software developer</h2>
        </div>

    </div> */}
    

    
    {/* <li><a href="https://github.com/GeoffMeier">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/geoffrey-meier-47395a273/">LinkedIn</a></li> */}


{/* </div> */}


 
    </>
)

}