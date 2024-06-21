import React from 'react';
import {teamData} from '../data';
import {motion} from "framer-motion";
import {fadeIn} from "../variants"

const Team = () => {
  const {pretitle, title, sub1, sub2, name, occupation, signatureImg, chefImg} = teamData;
  return (
    <section id='team' className=' relative top-96 z-10 lg:top-[480px] min-h-[720px]'>
      <div className='container mx-auto'>
        {/* text & image wrapper */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start'>
          {/* text */}
          <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)} initial="hidden" whileInView={"show"} className='flex-1 text-center lg:text-left lg:pt-16'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-[30px]'>{sub1}</p>
            <p className='mb-[30px]'>{sub2}</p>
            <div>
              <div className='text-2xl capitalize font-semibold text-accent'>{name}</div>
              <div className='text-[15px] font-semibold capitalize text-grey/70'>{occupation}</div>
            </div>
            <div className='flex justify-start lg:justify-start mb-6 lg:mb-0'>
              <img src={signatureImg} alt='' />
            </div>
          </motion.div>
          {/* image */}
          <motion.div variants={fadeIn('up', 'tween', 0.7, 1.6)} initial="hidden" whileInView={"show"} className='flex-1'>
            <img alt='' src={chefImg} />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Team;
