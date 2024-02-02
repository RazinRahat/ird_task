'use client'

import React from 'react'

type Props = {
  subcat_name_en: string
}

const DuaSubCategoryCard:React.FC<Props> = ({subcat_name_en}) => {
  return (
    <div className='flex flex-row bg-background justify-start items-center rounded-2xl mb-5 px-5 py-4'>
      <div className='text-title font-medium leading-[25px]'>
        <div className='flex flex-row items-center font-medium leading-[25px]'>
          <h1 className='text-primary mr-2'>Section:</h1>
          <h1 className='text-black'>{subcat_name_en}</h1>
        </div>
      </div>
    </div>
  )
}

export default DuaSubCategoryCard