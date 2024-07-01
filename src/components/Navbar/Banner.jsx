import React from 'react'
import BannerImg from "../../assets/coffee-white.png";
import BgTexture from "../../assets/website/coffee-texture.jpg";

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: '#270c03',
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize : "cover",
    height:"100%",
    width:"100%",
}
function Banner() {
  return (
    <>
       <div style={bgImage}>
            <div className="container min-h-[550px] flex justify-center items-center py-10 sm:py-0">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    {/*image section*/}
                    <div>
                        <img src={BannerImg} alt="" className='h-[450px] w-[450px] mx-auto spin drop-shadow-xl' />
                    </div>
                    {/*text content section*/}
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-3xl font-cursive font-bold mb-2 sm:mb-4'>Premium Blen Coffee</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam perspiciatis atque ducimus nobis sapiente maxime autem minus sed eligendi iste, maiores aliquid eveniet facere magnam minima odit placeat unde.</p>

                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default Banner
