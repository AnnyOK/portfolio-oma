import React, { useState } from 'react'
import { Home } from '../pages/home'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import image from '../../src/images/avatar.png'

function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <div className=" flex justify-between items-center p-3 text-white ">
      <div className='bg-cover bg-center rounded-full border-purple-500 border  md:w-[100px] w-[50px] h-[50px] md:h-[100px] ' style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className=" sm:hidden lg:flex w-[50%] flex justify-between items-center p-3 ">
        <Link to={''}> Home</Link>
        <Link to={''}>About Me</Link>
        <Link to={''}>Portfolio</Link>
        <Link to={''}>Contact Me</Link>
        <Link
          to={''}
          className="p-3  rounded-md bg-gradient-to-r from-blue-200 via-purple-500 to-orange-500 text-black"
        >
          Hire Me
        </Link>
      </div>
      {!menu && <IoMdMenu className="sm:block lg:hidden" onClick={() => setMenu(!menu)} />}
      {menu && <div className="sm:flex-col lg:hidden flex flex-col  items-center bg-purple-200 rounded-md text-gray-700" onClick={() => setMenu(!menu)}>
        <Link to={''}> Home</Link>
        <Link to={''}>About Me</Link>
        <Link to={''}>Portfolio</Link>
        <Link to={''}>Contact Me</Link>
        <Link
          to={''}
          className="p-3 fixed right-[100px] rounded-md sm:p-1  bg-gradient-to-r from-blue-200 via-purple-500 to-orange-500 text-black"
        >
          Hire Me
        </Link>
      </div>}
    </div>
  )
}

export default Navbar
