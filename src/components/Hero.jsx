import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
    const [videoSrc, setvideoSrc] = useState(window.innerWidth<760 ? smallHeroVideo:heroVideo);

    const handleVideoSourceSet = () =>{
        if(window.innerWidth < 760){
            setvideoSrc(smallHeroVideo);
        } else{
            setvideoSrc(heroVideo);
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleVideoSourceSet);
        return () =>{
            window.removeEventListener('resize', handleVideoSourceSet);
        }
    })
    useGSAP(()=>{
        gsap.to("#hero", {
            opacity:1,
            duration:3,
        })
        gsap.to("#cta" , {
            y:-50,
            opacity:1,
            duration:3,
        })

    },[])

  
  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>

            <p id = "hero" className='hero-title'>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12'>
                <div className=''>
                    <video className='pointer-events-none'autoPlay muted playsInline = {true} key = {videoSrc}>
                    <source src= {videoSrc} type = "video/mp4"  />
                    </video>
                </div>
            </div>
            <div id = "cta" className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href = "#highlights" className='btn'>Buy</a>
                <p>From $199/Month or $999 </p>

            </div>

        </div>

    </section>
  )
}

export default Hero
