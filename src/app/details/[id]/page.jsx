 "use client";
import { products } from '@/app/Data';
import { useParams } from 'next/navigation'
import React from 'react'

function pages() {
    let {id}=useParams()
    var Products= products.find((a)=>a.id == id)
  return (
    <>
    Details of Products
      <h2>{Products.title}</h2>
      <h2>{Products.price}</h2>
      <img className="w-full"src={Products.images} alt="" />
    </>
  )
}

export default pages
