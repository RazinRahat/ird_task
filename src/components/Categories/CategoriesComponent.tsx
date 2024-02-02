'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { IoIosSearch } from "react-icons/io";
import CategoryCard from './CategoryCard';

const CategoriesComponent = () => {
  const [categories, setCategories] = useState(null);

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
      {/* <div>{data}</div> */}
      {/* <CategoryCard /> */}
      {categories?.data !== null && categories.data?.map((category) => (
          <li>{category}</li>
        ))}
    </Card>
  )
}

export default CategoriesComponent