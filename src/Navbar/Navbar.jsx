import React from 'react'
import "./Navbar.css"
import {FaHouseChimney, FaUser} from "react-icons/fa6"
import { AiTwotoneExperiment } from "react-icons/ai";
const Navbar = () => {
  const links = [
    {
      id: 1,
      link: <FaHouseChimney size={24}/>
    },
    {
      id: 2,
      link: <FaUser size={24}/>
    },
    {
      id: 3,
      link: <AiTwotoneExperiment size={24}/>
    },
  ]
  return (
      <div className='flex justify-center 
      items-center w-full text-stone-300 bg-neutral-900 h-14 fixed res-1 p-2'>
        <ul className='flex space-x-12 cursor-pointer'>
          {links.map(({id,link}) => (
            <li key={id} className='highlight box-1'>
              {link}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Navbar;