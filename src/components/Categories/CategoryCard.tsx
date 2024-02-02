'use client'

import React, { FunctionComponent } from 'react'
import dua_gurutto from '../../../public/images/duar_gurutto.svg'
import Image from 'next/image'

type Props = {
  cat_name_en: string,
  no_of_subcat: number,
  no_of_dua: number,
  cat_icon: string
}

const CategoryCard:React.FC<Props> = ({cat_name_en, no_of_subcat, no_of_dua, cat_icon}) => {
  const Imgsrc = "/images/" + cat_icon + ".svg"
  return (
    <div className='
          flex
          justify-between
          items-center
          mx-3
          my-2
        '
    >   
      <div
        className='
          flex
          flex-row
          gap-x-4
          items-center
          w-full
          h-20
          px-3
          rounded-xl
          bg-gray-200
        '
      >
        <div
          className='
            flex
            flex-row
            w-70
            items-center
          '
        >
          <div
            className='
              flex
              rounded-lg
              items-center
              h-14
              w-14
              bg-gray-100
            '
          >
            <Image src={Imgsrc} width={40} height={40} alt={cat_icon} className='p-3 h-40 w-40' />
          </div>
          <div
            className='
              w-40
              text-left
              ml-2
            '
          >
            <h1 className='text-base text-black'>{cat_name_en}</h1>
            <h1 className='text-xs text-gray-400'>Subcategory: {no_of_subcat}</h1>
          </div>
        </div>
        <div
          className='
            flex
            flex-row
            w-12
            items-center  
          '
        >
          <div
            className='
              flex
              flex-col
              gap-y-1
              justify-center
              items-center
            '
          >
            <h1 className='text-base text-black'>{no_of_dua}</h1>
            <h1 className='text-xs text-gray-400'>Duas</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard