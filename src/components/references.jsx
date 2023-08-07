import React from "react";
import {SiGithub} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
import {SiGmail} from 'react-icons/si'

export default function References() {
return (
    <>
    {/* <div className="grid grid-cols-4 pt-4">
    <div className=" col-span-1">
        <h2>Name</h2>
    </div>
    </div> */}
   
  {/* <p className="pt-2 font-serif"> </p>
    <h2 className="  pt-10  font-sans text-3xl  tracking-wider underline  underline-offset-4">Education </h2>
    <span className=" pt-5 text-xl">- LaunchCode, LC101 Programming Course - June 2023</span>
    <span className=" pt-3 text-xl">- St. Louis Community College, Associate in Arts - May 2022</span>
     */}
  {/* </div> */}
<div className="pt-4 flex justify-center w-screen">
  <table className=" table-auto max-auto border-separate    border-spacing-0  ">
    {/* <caption className="text-center  pt-0 pb-12 font-sans font-extrabold  decoration-neutral-800 text-3xl  tracking-widest    underline-offset-8  ">Professional References</caption> */}
    <thead className="  ">
        <tr className=" text-2xl  text-blue-500 ">
            <th className="text-center pl-20 pr-16 pt-4 pb-6">Name</th>
            <th className="pl-16 pr-16 pt-4   pb-6">Position</th>
            <th className="pl-16 pr-16 pt-4  pb-6 ">Company</th>
            <th className="pl-16 pr-16  pt-4 pb-6">Contact</th>
            <th className="pl-16 pr-16  pt-4 pb-6">Relationship</th>
        </tr>
        </thead>
        <tbody>
        <tr className="text-center border-separate border border-blue-500">
      <td class="text-xl border-t-2     border-b-2 border-blue-500 py-6 pl-8 pr-8">Gavin Meier</td>
      <td class="text-xl border-t-2 border-b-2 border-blue-500 py-6 pl-8 pr-8">Senior Software Engineer  </td>
      <td class="text-xl border-t-2 border-b-2 border-blue-500 py-6 pl-8 pr-8"> Sonos, Inc. </td>
      <td class="text-xl border-t-2 border-b-2 border-blue-500 py-6 pl-8 pr-8">636-346-0134

</td>
      <td class="text-xl border-t-2 border-b-2 border-blue-500 py-6">Mentor
</td>
    </tr>
    <tr className="text-center">
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8">Lucas Barth</td>
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8">Senior Software Engineer </td>
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8"> Ocelot Consulting</td>
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8">314-422-7578

</td>
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8">Mentor	</td>
    </tr>
    <tr className="text-center border-b border-blue-500">
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8">Taylor Jovi </td>
      
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8">Software Engineer</td>
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8"> TenderHeart Health Outcomes</td>
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8"> 314-322-4873

</td>
      <td class="text-xl  border-b-2 border-blue-500 py-6 pl-8 pr-8">Teacher Assistant at LaunchCode</td>
    </tr>
    <tr className="text-center">
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8 ">Wesley Park</td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8  ">Software Engineer </td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8  "> Superlative Technologies</td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8 ">wespark25@gmail.com</td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8 ">Teacher Assistant at LaunchCode</td>
    </tr>

    <tr className="text-center">
      <td class="text-xl border-b-2 border-blue-500   py-6 pl-8 pr-8">Brian Bredahl</td>
      <td class="text-xl border-b-2 border-blue-500   py-6 pl-8 pr-8">Software Engineer </td>
      <td class="text-xl border-b-2 border-blue-500   py-6 pl-8 pr-8"> VF Corporation</td>
      <td class="text-xl border-b-2 border-blue-500   py-6 pl-8 pr-8">314-809-2486
</td>
      <td class="text-xl  border-b-2 border-blue-500  py-6 pl-8 pr-8">Mentor</td>
    </tr>

    <tr className="text-center">
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8 ">Alex Meier</td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8  ">Software Engineer </td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8  "> MasterCard</td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8 ">636-395-1669
</td>
      <td class="text-xl border-b-2 border-blue-500 py-6 pl-8 pr-8 ">Mentor</td>
    </tr>

    
    
  </tbody>

   

  </table>
  </div>
    
 
</>
)
}