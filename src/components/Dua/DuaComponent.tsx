'use client'

import React, { useEffect, useState } from 'react'
import DuaSubCategoryCard from './DuaSubCategoryCard'
import { ScrollArea } from '../ui/scroll-area';

const DuaComponent = () => {
  const [subCategories, setSubCategories] = useState(
    {
      "message": "success",
      "data": [
      {
        "id": 1,
        "cat_id": 1,
        "subcat_id": 1,
        "subcat_name_bn": "বান্দা তার রবের মুখাপেক্ষী",
        "subcat_name_en": "The servant is dependent on his Lord",
        "no_of_dua": 3
      }
      ]
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://ird-server-0j09.onrender.com/api/sub_category");
      const data = await response.json();
      setSubCategories(data);
      console.log("data " + data.data[0].cat_name_bn)
    };

    fetchData();
  }, [subCategories]);

  return (
    <div
      className='
        w-[800px]
        mx-5
        h-[84vh] 
        mb-2 
        pb-2 
        overflow-y-scroll
      '
    >
      <ScrollArea className='rounded-md border'>
          {subCategories?.data !== null && subCategories.data?.map((subCategory) => (
              <DuaSubCategoryCard
                subcat_name_en={subCategory.subcat_name_en}
              />
            ))
          }
        </ScrollArea>
    </div>
  )
}

export default DuaComponent