import React from 'react'
import { MdPhone } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link';


function Header() {
    return (
        <>
            <section className='bg-[#FAFAFC] '>
                <div className="container flex items-center gap-3 mx-auto">
                    <MdPhone />9801433555
                </div>
            </section>
            <div className="header py-3">
                <div className="container flex gap-[20px]">

                    <img src="https://www.digitalsahuji.com/storage/app/public/company/2023-06-27-649a72e48c94a.png" alt="" />

                    <form className='flex'>
                        <input type="text" className='form-control border w-[430px] h-[50px] rounded-l-lg' placeholder='Enter a product...' />
                        <button className='bg-blue-400 text-white rounded-r-lg w-[30px] text-center'><LuSearch /></button>
                    </form>
                    <div className='flex gap-7'>
                        <div className='bg-[#F3F5F9] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center relative '><CiHeart />
                            <span className='absolute -top-2 -right-1 bg-[orange] rounded-[50%] text-white flex justify-center items-center'>0</span></div>
                        <div className='bg-[#F3F5F9] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center '><IoPeopleOutline />
                        </div>

                        <div className='bg-[#F3F5F9] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center relative '><BsCart3 />
                        <span className='absolute -top-2 -right-1 bg-[orange] rounded-[50%] text-white flex justify-center items-center'>0</span></div>

                    </div>
                    <div>
                        <h6 className='font-bold'>Mycart</h6>
                    </div>
                </div>
            </div>

            <nav className='bg-[#4570B6] text-white '>
                <div className="container">
                    <ul className='flex gap-7 py-3'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About US</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/">Contact</Link></li>
                        <li><Link href="/">Service</Link></li>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Header
