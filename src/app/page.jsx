import React from 'react'

import Link from 'next/link'
import { Category } from './Data'
import ProductsByCat from './component/ProductsByCat'



function page() {
  return (
    <>
      <section>
        <div className="container flex justify-between">
          <div className='w-[25%] gap-5 mx-3'>
            <div className="shadow">
                  <ul>
                    {Category.slice(0,7).map((a)=>(
                      <li className='py-3 border ps-3'>
                      <Link href={`/category/${a.slug}`}>{a.name}</Link></li>  //make folder category and for dynamic value make another folder with [id(can be anything)]
                    ))}
                  </ul>
            </div>
          </div>
          <div className='w-[75%] '>
                    <img className="w-full w-[100%] h-[350px]"src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a74dddde4d1.png" alt="" />
          </div>

        </div>
      </section>
      <ProductsByCat title="beauty"/>
      <ProductsByCat title="furniture" />
      <ProductsByCat title="grocery" />

    </>
  )
}

export default page
