import React from 'react'
import HeroImg from "../../assets/coffee2.png"
function Home() {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark/95 flex justify-center items-center text-white'>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/*text container section */}
          <div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mt-10 sm:mt-0'>We serve the richest 
              <span className='text-primary/70 font-cursive'> Coffee </span> 
               in the city</h1>
              <div>
                <button className='text-white font-bold bg-gradient-to-r from-primary/70 to-secondary px-3 py-2 rounded-full hover:scale-105 duration-200'>Coffee And Code</button>
              </div>
          </div>
          {/*image container section */}
          <div>
            <img src= {HeroImg} alt="" className='w-[308px] sm:w-[410px] sm:scale-110 mx-auto spin'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
