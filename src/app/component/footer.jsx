import React from 'react'
import { BsSearch } from "react-icons/bs";

function footer() {
    return (
        <>
            <section className='bg-[#39474F] text-white '>
                <div className="container flex justify-between">
                    <div className='py-3'>
                        <img className="w-100" src="https://www.digitalsahuji.com/storage/app/public/company/2023-06-27-649a72e490fce.png" alt="" />
                        <h3 className='uppercase'>Download our app</h3>
                        <img className="w-100" src="https://www.digitalsahuji.com/public/assets/front-end/png/google_app.png" alt="" />
                    </div>
                    <div>
                        <h3 className='font-bold text-white py-3'>Special</h3>
                        <ul>
                            <li>Featured Products</li>
                            <li>Latest Products</li>
                            <li>Best Selling Products</li>
                            <li>Top Rated Products</li>
                            <li>Register as a student</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-white py-3'>Account & shipping info</h3>
                        <ul>
                            <li>Profile Info</li>
                            <li>Wish List</li>
                            <li>Track Order</li>
                            <li>Refund policy</li>
                            <li>Return policy</li>
                            <li>Cancellation policy</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-white '>Subscribe to our new channel to get latest updates</h5>
                        <form>
                            <input type="text" className='form-control' placeholder='Your Email Address ' />
                            <button className='bg-[blue] text-white'><BsSearch /></button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default footer
