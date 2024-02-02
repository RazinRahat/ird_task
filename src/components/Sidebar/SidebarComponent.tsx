'use client'

import Image from 'next/image'
import React from 'react'
import dua_logo from '../../../public/dua-logo.svg';
import { FaHandHoldingHeart } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { RiMedicineBottleLine } from "react-icons/ri";
import { PiChatsTeardropLight } from "react-icons/pi";
import { HiOutlineBookOpen } from "react-icons/hi2";

const SidebarComponent = () => {
  return (
    <div 
      className='
        w-[100px]
        rounded-3xl
        h-[93vh]
      '
    >
      <div
        className='
          w-[100]
          rounded-3xl
          h-[93vh]
          bg-background
          flex
          flex-col
          justify-center
          items-center
        '
      >
        <Image src={dua_logo} alt='dua-logo' className='py-7 mb-10 h-13 w-16'></Image>

        <div>
          <div className='p-3'>
            <div className='rounded-full p-2 h-10 w-10 flex justify-center items-center bg-gray-200'>
              <CiHome size={20} className='text-gray-500' />
            </div>
          </div>
          <div className='p-3'>
            <div className='rounded-full p-2 h-10 w-10 flex justify-center items-center bg-gray-200'>
              <PiSquaresFourLight size={20} className='text-gray-500' />
            </div>
          </div>
          <div className='p-3'>
            <div className='rounded-full p-2 h-10 w-10 flex justify-center items-center bg-gray-200'>
              <IoBulbOutline size={20} className='text-gray-500' />
            </div>
          </div>
          <div className='p-3'>
            <div className='rounded-full p-2 h-10 w-10 flex justify-center items-center bg-gray-200'>
              <CiBookmark size={20} className='text-gray-500' />
            </div>
          </div>
          <div className='p-3'>
            <div className='rounded-full p-2 h-10 w-10 flex justify-center items-center bg-gray-200'>
              <RiMedicineBottleLine size={20} className='text-gray-500' />
            </div>
          </div>
          <div className='p-3'>
            <div className='rounded-full p-2 h-10 w-10 flex justify-center items-center bg-gray-200'>
              <PiChatsTeardropLight size={20} className='text-gray-500' />
            </div>
          </div>
          <div className='p-3'>
            <div className='rounded-full p-2 h-10 w-10 flex justify-center items-center bg-gray-200'>
              <HiOutlineBookOpen size={20} className='text-gray-500' />
            </div>
          </div>
        </div>

        <div
          className='
            py-7
            mt-5
          '
        >
          <div 
            className='
              bg-primary 
              rounded-lg 
              p-5 h-13 
              w-13 
              flex 
              justify-center 
              items-center
            '
          >
            <FaHandHoldingHeart size={25} className='text-white'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent