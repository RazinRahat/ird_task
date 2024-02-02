'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Alert, AlertTitle } from '../ui/alert'
import { MdOutlineTranslate } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { PiSquaresFourLight } from "react-icons/pi";
import { Button } from '../ui/button';

const SettingsComponent = () => {
  return (
    <Card 
      className='
        w-[270]
        rounded-3xl
        h-[85.5vh]
      '
    >
      <CardHeader
        className='
          pt-9
          pb-6
        '
      >
        <CardTitle
          className='
            text-foreground
            text-xl
            font-normal
            flex
            justify-center
            items-center
          '
        >
          Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert 
          className='
            flex
            flex-row
            justify-center
            items-center
            text-primary
            bg-gray-100
            mb-5
          '
        >
          <div className='bg-cyan-50 rounded-3xl p-3 mr-5'>
            <MdOutlineTranslate />
          </div>
          <AlertTitle>Language Settings</AlertTitle>
        </Alert>
        <div className="flex justify-around rounded-b-xl mb-5 ">
          <Button variant="default">English</Button>
          <Button variant="secondary">বাংলা</Button>
        </div>
        <Alert 
          className='
            flex
            flex-row
            justify-center
            items-center
            text-gray-500
            bg-gray-100
            mb-5
          '
        >
          <div className='bg-cyan-50 rounded-3xl p-3 mr-5'>
            <AiOutlineBlock />
          </div>
          <AlertTitle>General Settings</AlertTitle>
        </Alert>
        <Alert 
          className='
            flex
            flex-row
            justify-center
            items-center
            text-gray-500
            bg-gray-100
            mb-5
          '
        >
          <div className='bg-cyan-50 rounded-3xl p-3 mr-5'>
            <PiSquaresFourLight />
          </div>
          <AlertTitle>Font Settings</AlertTitle>
        </Alert>
        <Alert 
          className='
            flex
            flex-row
            justify-center
            items-center
            text-gray-500
            bg-gray-100
            mb-5
          '
        >
          <div className='bg-cyan-50 rounded-3xl p-3 mr-5'>
            <PiSquaresFourLight />
          </div>
          <AlertTitle>Appearance Settings</AlertTitle>
        </Alert>
      </CardContent>
    </Card>
  )
}

export default SettingsComponent