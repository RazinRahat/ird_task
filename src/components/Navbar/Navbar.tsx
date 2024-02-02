'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const Navbar = () => {
  return (
    <div className='py-4 px-4 w-[1480px] flex flex-row justify-between'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-2xl w-[900px]'>Duas Page</h1>
            <div className='flex flex-row justify-end'>
              <Input type="text" placeholder="Search by Dua Name" />
            </div>
        </div>
        <div className='flex justify-center items-center'>
          <Avatar>
            <AvatarImage src="https://duaruqyah.com/assets/settings/profile.svg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
    </div>
  )
}

export default Navbar