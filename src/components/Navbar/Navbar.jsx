import React from 'react';
import Logo from "../../assets/website/coffee_logo.png";
import {FaCoffee} from "react-icons/fa"
const Menus = [
    {
        id:1,
        name: "Home",
        link:"/#",
    },
    {
        id: 2,
        name: "Services",
        link:"/#services",
    },
    {
        id:3,
        name:"About",
        link:"/#about",
    },
]
const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2">
            <div className="lg:flex justify-between items-center ">
                {/*Logo section*/}
                <div className='flex justify-center items-center gap-2 font-bold text-2xl sm:text-3xl tracking-wider font-cursive'>
                    <img src= {Logo} alt="Logo" className='w-14'/>
                    <a href="#">Coffee Cafe</a>
                </div>
                {/*Links section*/}
                <div className='flex justify-between'>
                    <ul className=' lg:flex items-center gap-4'>
                        {Menus.map((data,index) => (
                            <li key={index}>

                                 <a href={data.link} className='text-white/70 hover:text-white duration-200 text-xl px-2 font-bold '>
                                    {data.name}
                                </a>
                            </li>
                        ))}
                         
                    </ul>
                    <button className='flex items-center gap-3 rounded-full lg:ml-4 bg-primary/70 py-2 px-4 hover:scale-105 duration-200 font-bold'>
                        Order
                        <FaCoffee className='cursor-pinter w-18'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
