'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { IoIosSearch } from "react-icons/io";
import CategoryCard from './CategoryCard';
import { ScrollArea } from '../ui/scroll-area';

const CategoriesComponent = () => {
  const [categories, setCategories] = useState(
    {
      "message": "success",
      "data": [
      {
      "id": 1,
      "cat_id": 1,
      "cat_name_bn": "দোয়ার গুরুত্ব",
      "cat_name_en": "Dua's Importance",
      "no_of_subcat": 7,
      "no_of_dua": 21,
      "cat_icon": "duar_gurutto"
      }
      ]
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://ird-server-0j09.onrender.com/api/category");
      const data = await response.json();
      setCategories(data);
      console.log("data " + data.data[0].cat_name_bn)
    };

    fetchData();
  }, [categories]);
  
  return (
    <Card 
      className='
        w-[350px]
        h-[85.5vh]
        rounded-2xl
        overflow-hidden
        ml-5
      '
    >
      <CardHeader
        className='
          bg-primary
          rounded-t-2xl
          py-4
        '
      >
        <CardTitle
          className='
            text-background
            text-md
            font-normal
            flex
            justify-center
            align-center
          '
        >
          Categories
        </CardTitle>
      </CardHeader>
      <div className='h-[calc(100vh-24vh)] mb-2 pb-2 overflow-hidden'>
        <div 
          className='
            flex 
            flex-row 
            justify-center
            items-center
            m-5
            border-solid
            border-2
            rounded-lg
            '
          >
          <IoIosSearch size={25} className='mx-2' />
          <Input type="text" placeholder="Search Categories" className='border-none' />
        </div>
        <ScrollArea className='rounded-md border overflow-hidden'>
          {categories?.data !== null && categories.data?.map((category) => (
              <CategoryCard
                cat_name_en={category.cat_name_en}
                no_of_subcat={category.no_of_subcat}
                no_of_dua={category.no_of_dua}
                cat_icon={category.cat_icon}
              />
            ))
          }
        </ScrollArea>
      </div>
    </Card>
  )
}

export default CategoriesComponent