import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className='banners' style={{marginTop: "5px"}}>
        <Image 
        src="/BannerNextJs.jpg"
        alt="banner"
        width={2000}
        height={679}
        />
    </div>
  )
}

export default Banner