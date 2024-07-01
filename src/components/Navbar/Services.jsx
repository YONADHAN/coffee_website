import Aos from 'aos';
import React from 'react'
import Img2 from "../../assets/coffee2.png";
const ServicesData = [
    {
        id:1,
        img:Img2,
        name:"Espresso",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur earum. ",
        aosDelay:"100",
    },
    {
        id:2,
        img:Img2,
        name:"Espresso",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur earum.  ",
        aosDelay:"200",
    },
    {
        id:3,
        img:Img2,
        name:"Espresso",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur earum.  ",
        aosDelay:"300",
    },
]



const Services = () => {
  return (
    <>
    <span id='services'></span>
    <div className='py-10'>
      <div className="container">
        {/*header title*/}
        <div className= "text-center mb-28 md:mb-24">
            <h1 className='font-bold font-cursive text-gray-700 text-4xl'>Best Coffee For You</h1>
        </div>
        
        {/*Services Card Section*/} 
        <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 md-gap-5 place-items-center'>
           {
             ServicesData.map((data,index) => {
                return(
                    <div 
                    data-aos="fade-up"
                    data-aos-delay = {data.aosDelay}
                    key={index} className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 relative group max-w-[300px] mb-10 md:mb-0'>
                        {/*image section*/}
                       <div className='h-[122px]'>
                            <img src={data.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-1/2 group-hover:scale-110 group-hover:rotate-12 duration-300'/>
                       </div>
                        {/*text section*/}
                        <div className='p-7 text-center text-sm line-clamp-4 -mt-10'>
                            <h1 className='text-xl font-bold mb-2  group-hover:text-white duration-200'>{data.name}</h1>
                            <p className=' text-gray-500  group-hover:text-white duration-200'>{data.description}</p>
                        </div>
                    </div>
                );
            })
           }
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
