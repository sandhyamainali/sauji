import React from 'react'
import { products } from '../Data'
import Link from 'next/link'


function ProductsByCat(props) {
    let cat=products.filter((a)=>a.category== props.title)
  return (
    <>
    <section>
        <div className="container py-3">
          <h3 className='font-bold text-2xl uppercase'>{props.title}</h3>
        </div>

        <div className="flex gap-2 container">
        {cat.slice(0,4).map((a)=>(
            <div className='md:w-[30%] '>
                <div className="shadow p-3 w-[200px] h-[300px]">
                <img className="w-full"src={a.images} alt="" />
                <Link href={`/details/${a.id}`}>{a.title}</Link></div>
                </div>
        ))}
      </div>
      </section>
      
    </>
  )
}

export default ProductsByCat
