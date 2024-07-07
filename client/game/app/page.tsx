'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
function page() {
  const welcomeString: string[] = "Welcome to Tic Tac Toe . The Gridlock Game By JK...".split(/(?!$)/)
  const char = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
  }
  return (
    <>


      <div className=' h-screen w-screen   flex justify-center items-center flex-col gap-32'>
        <motion.h1 initial={"hidden"} whileInView={"reveal"} transition={{ staggerChildren: .05 }} className='text-white font-bold text-xl md:text-3xl'>
          {welcomeString.map((item, i) => (
            <motion.span key={i} className='' initial={{ opacity: 0 }} animate={{ opacity: 1 }} variants={char} >{item}</motion.span>
          ))}
        </motion.h1>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5, delay:2.5}} className='text-white text-lg md:text-xl font-semibold flex gap-10'>
          <motion.button whileHover={{scale:1.04,transition:{type:"spring",duration:.2,stiffness:150}}} ><Link className='border px-4 py-2 bg-white text-black rounded-lg hover:bg-black hover:text-white transition-all' href={'/single'}>Single Device</Link></motion.button>
          <motion.button whileHover={{scale:1.04,transition:{type:"spring",duration:.2,stiffness:150}}} ><Link className='border px-4 py-2 bg-white text-black rounded-lg hover:bg-black hover:text-white transition-all' href={'/remote'}>Remote Device</Link></motion.button>
        </motion.div>

      </div>
    </>

  )
}


export default page