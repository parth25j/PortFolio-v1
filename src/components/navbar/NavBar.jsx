import React, { useCallback, useState } from "react";
import { logo, navItems } from "./NavItems";
import { PiHamburger } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
    const [open,setOpen] = useState(false)
    //  const handleToggle = useCallback(()=>{
    //      setOpen(prev => {
    //        return !prev
    //         console.log(prev)
    //      })
    //      console.log(open)
    //  },[])
   const handleToggle = ()=>{
           setOpen(prev => {
            console.log(open)
               return !prev
               
           })
   }
   console.log(open,'val of open')
  return (
  
    <div className=" absolute top-0  fixed bg-black z-50">
  <div className="min-w-screen  px-10! py-4! flex  md:flex-row items-center justify-between gap-4 ">
    
    {/* Logo */}
    <div className="text-white m-auto! sm:m-0! text-2xl font-extrabold md:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] z-10">
      {logo.name}
    </div>

    {/* Navigation */}
    <nav>
      <ul className="hidden justify-center sm:flex sm:justify-end text-white text-base font-medium gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.slug} className="hover:text-blue-400 transition-colors duration-200">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
        
      <button onClick={handleToggle} className="text-white text-2xl! sm:hidden">{open ? <IoMdClose/>:<PiHamburger  />}</button>  
      {/* {
        open && <ul className="bg-white! text-white sm:hidden">
                {navItems.map((ele)=>{
                      <a href=""><li>{ele.name}</li></a>
                })}
            </ul>
        
      } */}




    </nav>

    {open && (
        <ul className="flex flex-col gap-2 justify-center px-4! py-2! absolute left-0 top-15 sm:hidden bg-black w-full shadow-lg rounded-md z-10">
  {navItems.map((ele, index) => (
    <li
      key={ele.id}
      className={`border-b border-gray-600 pb-2 ${
        index === navItems.length - 1 ? "border-b-0" : ""
      }`}
    >
      <a
        href={ele.slug}
        className="text-white block px-2 py-1 hover:text-blue-400 transition-all duration-200 ease-in-out"
      >
        {ele.name}
      </a>
    </li>
  ))}
</ul>

)}
    
  </div>
</div>

  );
};

export default NavBar;
