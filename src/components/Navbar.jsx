"use client"
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (


        <nav className={`fixed w-full ${isSticky ? "text-black bg-white shadow-xl" : "text-white bg-transparent"}  z-20 top-0 start-0`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">

                    <span className="self-center text-xl sm:text-2xl font-extrabold whitespace-nowrap ">
                        Zanzibar tourism
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                    <button type="button" className={`" ${isSticky ? "border-black hover:bg-black hover:text-white" : "border-white hover:bg-white hover:text-black"} border-[1px]  font-medium hidden sm:block text-sm px-4 py-2 text-center"`}>Get started</button>

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 hover:text-white md:hidden  " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>


                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>


                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#home" className="block py-2 px-3  rounded md:bg-transparent md:p-0 " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3  rounded  md:hover:bg-transparent  md:p-0 ">About</a>
                        </li>
                        <li>
                            <a href="#destinations" className="block py-2 px-3  rounded  md:p-0 ">Destinations</a>
                        </li>
                        <li>
                            <a href="#whyus" className="block py-2 px-3  rounded  md:p-0 ">Why US</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
