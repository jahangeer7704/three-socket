'use client'
import React from 'react'
import App from "@/components/App";

function Wrapper({children}:{children:React.ReactNode}) {
  return (
    <div className='overflow-hidden relative'>
        <div className='absolute z-[-10]'>
        <App/>

        </div>
        <div>
        <div className='bg-blue-700 h-32 w-32 absolute z-[-4] rounded-full top-[-20vh]' style={{  boxShadow:" 25px 25px 350px 350px rgba(14, 102, 150, 0.2)"}}></div>
        <div className='bg-blue-700 h-32 w-32 absolute z-[-4] rounded-full top-[-20vh] right-1' style={{  boxShadow:" 25px 25px 350px 350px rgba(14, 102, 150, 0.05)"}}></div>
        <div className='bg-blue-700 h-32 w-32 absolute z-[-4] rounded-full bottom-[-20vh]' style={{  boxShadow:" 25px 25px 350px 350px rgba(14, 102, 150, 0.05)"}}></div>
        <div className='bg-blue-700 h-32 w-32 absolute z-[-4] rounded-full bottom-[-20vh] right-1' style={{  boxShadow:" 25px 25px 350px 350px rgba(14, 102, 150, 0.2)"}}></div>
        <div className=' absolute z-[-2] backdrop-blur-md h-screen w-screen '>

        </div>
        </div>
            
        {children}
    </div>
  )
}

export default Wrapper