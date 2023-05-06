import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom'



const Nav = () => {
  const [navbg, setNavbg] = useState<Boolean>(false);
  const [menuOpened, setMenuOpened] = useState<Boolean>(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    };
  window.addEventListener("scroll", scrollFunction);

    const links = ['drops', 'marketplace', 'creator', 'community']
  return (
    <div className="z-50 relative">
      <div className={`w-screen fixed top-0 left-0 h-16 lg:h-20  border-b-2 ${navbg || menuOpened ? 'bg-black border-slate-500' : 'border-transparent lg:bg-transparent'}  duration-500`}>
        <div className="nav flex items-center h-full">
          <div className="flex justify-between w-full items-center">
              <div className="flex items-center gap-10 xl:gap-12">
                <p className="font-bold text-2xl text-white">LUVAL</p>
                <div className="hidden lg:flex items-center text-gray-100 gap-5 xl:gap-8 capitalize">
                  {links.map((link) => (
                    <p className='cursor-pointer hover:text-red-500 text-sx duration-500'>{link}</p>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-5">
                <div className="h-12 w-64 lg:80 xl:w-96 bg-black border-2 border-gray-400 relative rounded-full">
                  <input type="text" className='h-full w-full outline-none border-none text-sx text-white bg-transparent  pl-5 pr-10' placeholder='Search'/>
                  <BsSearch className='absolute top-1/2 -translate-y-1/2 text-lg text-white pointer-events-none right-5'/>
                </div>
                <p className="px-5 py-3 xl:px-6 xl:py-3 rounded-full bg-blue-500 text-sm cursor-pointer border-2 border-blue-500 hover:bg-blue-700 hover:scale-105 text-white active:scale-90 duration-500 shadow-md shadow-black">Connect Wallet</p>
              </div>
              {menuOpened ? <FaTimes onClick={toggleMenu} className='lg:hidden text-white text-lg cursor-pointer active:scale-75 duration-500'/>
              :<FaBars onClick={toggleMenu} className='lg:hidden text-white text-lg cursor-pointer active:scale-75 duration-500'/>}
          </div>
        </div>
      </div>
      <div className={`lg:hidden fixed rest w-screen top-16 p-2 duration-500 bg-black ${menuOpened ? 'left-0':'left-[200vw]'}`}>
          <div className="h-12 w-full bg-black border-2 border-gray-400 relative rounded-xl">
            <input type="text" className='h-full w-full outline-none border-none text-sx text-white bg-transparent  pl-3 pr-10' placeholder='Search'/>
            <BsSearch className='absolute top-1/2 -translate-y-1/2 md:text-lg text-white pointer-events-none right-3'/>
          </div>
          <div className="flex mt-4 text-center capitalize flex-col gap-7">
            {links.map((link) => (
              <p className='text-white text-sm '>{link}</p>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Nav