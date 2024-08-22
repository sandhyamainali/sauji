"use client";
import React, { useEffect, useState } from 'react'

function Hook() {
  let [red,setRed]=useState('red')
  let[show,setShow]=useState(true)
  let[data,setData]=useState([])
 
  useEffect(()=>{
    // document.title='Sauji'
    fetch('https://fakestoreapi.com/products').then(res=>res.json()) .then(json=>setData(json))
  },[])
  console.log(data)
  return (
    <div>
      <h1>{red}</h1>
      <button onClick={(()=>setRed('blue'))}>Change</button>
    <div>
    <h1 className={show? "":"hidden"}>Hello</h1>
     <button onClick={(()=>setShow(!show))}>toggle</button>
     {data.slice(0,5).map((a)=>(
      <li>{a.title}</li>
     ))}
     </div>
     </div>
  )
}

export default Hook
