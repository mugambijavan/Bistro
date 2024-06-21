import React from 'react';
import {navData} from "../data";


const Nav = ({onClick}) => {
  return (
    <nav className='w-full h-full my-0'>
      <ul className=' h-full flex flex-col justify-around items-center padding-top'>
        {navData?.map((item, index) => {
          return (
            <li key={index} onClick={onClick} >
              <a className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-250' href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
    )
};

export default Nav;
