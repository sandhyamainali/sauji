"use client";
import { products } from '@/app/Data';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'


function page() {
    let {id}=useParams()//last data store in params
    var cat=products.filter((a)=>a.category==id)
  return (
    <div className='container py-2'>
        <h2 className='font-bold'>Details of {id}</h2>

        {cat == '' ? "No Data":""}
        <div className="flex flex-wrap gap-2">
        {cat.map((a)=>(
            <div className='w-[30%] '>
                <div className="shadow p-3 w-[200px] h-[300px]">
                <img className= "w-full" src={a.images} alt=""/>
               <Link href="/">{a.title}</Link> </div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default page
