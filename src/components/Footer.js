import React from 'react';
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import Socials from "./Socials";
import { footerData } from '../data';
import {motion} from "framer-motion";
import { fadeIn, staggerContainer } from '../variants';

const Footer = () => {
  const {contact, hours, social} = footerData
  return (
    <footer id='contact' className='relative top-96 bottom-0 z-20 bg-dark lg:bg-transparent lg:min-h-[650px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-24'>
      <div className='container mx-auto h-full'>
        <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} className='h-full flex flex-col gap-y-3'>
          {/* newsletter */}
          <motion.div variants={fadeIn('up', 'tween', 0.4, 1.6)}>
            <Newsletter />
          </motion.div>
          {/* info */}
          <motion.div variants={fadeIn('up', 'tween', 0.6, 1.6)} className='flex flex-col lg:flex-row lg:gap-x-[0px] gap-y-12 lg:gap-y-0 lg:my-10 items-center justify-center lg:justify-around'>
            {/* contact */}
            <div className='flex-1 lg:max-w-[230px]'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px] flex items-center justify-center lg:justify-start'>{contact.title}</div>
              <div className='capitalize flex items-center justify-center lg:justify-start'>{contact.address}</div>
              <div className='capitalize flex items-center justify-center lg:justify-start'>{contact.phone}</div>
            </div>
            {/* program */}
            <div className='flex-1 lg:max-w-[450px]  '>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px] flex items-center justify-center'>{hours.title}</div>
              <div className='flex gap-y-[20px] flex-col lg:flex-row lg:justify-between '>{hours.program?.map((item, index)=> {
                return (
                  <div className='capitalize' key={index}>
                    <div className='flex items-center justify-center'>{item.days}</div>
                    <div className='text-[20px] text-accent flex items-center justify-center'>{item.hours}</div>
                  </div>
                )
              })}</div>
            </div>
            {/* social */}
            <div className='flex-1 lg:max-w-[230px] mb-12'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px] flex items-center justify-center lg:justify-end'>{social.title}</div>
              <Socials className='flex items-center justify-center lg:justify-end' />
            </div>
          </motion.div>
          {/* copyright */}
          <Copyright />
        </motion.div>
      </div>
    </footer>
  )
};

export default Footer;
