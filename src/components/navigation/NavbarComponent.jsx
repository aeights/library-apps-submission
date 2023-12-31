"use client"

import Link from 'next/link'
import React, { useState } from 'react'

function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='bg-blue-700 w-screen p-6'>
            <div className='flex justify-between items-center'>
                <Link href={"/"} className='flex'>
                    <span className="material-symbols-outlined text-slate-200 mr-2">book_5</span>
                    <p className='text-slate-200 font-semibold text-xl'>Library</p>
                </Link>
                <div className='block cursor-pointer md:hidden'>
                    <span onClick={openMenu} className="material-symbols-outlined text-slate-200">menu</span>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} duration-300 absolute pt-20 pb-4 w-full left-0 mt-40 z-[-1] flex flex-col bg-blue-500 md:static md:p-0 md:mt-0 md:z-0 md:flex md:flex-row md:bg-transparent md:justify-between md:items-center md:w-[60%]`}>
                    <ul className='flex flex-col justify-center items-center mb-4 md:flex md:flex-row md:mb-0'>
                        <li className='mx-2 hover:font-semibold duration-300'>
                            <Link className='text-slate-200' href={"/home"}>Home</Link>
                        </li>
                        <li className='mx-2 hover:font-semibold duration-300'>
                            <Link className='text-slate-200' href={"/about"}>About</Link>
                        </li>
                        <li className='mx-2 hover:font-semibold duration-300'>
                            <Link className='text-slate-200' href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <div className='mx-2'>
                            <Link className='text-slate-200 font-semibold' href={"/login"}>Login</Link>
                        </div>
                        <div className='px-4 py-2 bg-slate-100 mx-2 rounded-lg font-semibold hover:bg-slate-300 duration-300'>
                            <Link className='text-slate-800' href={"/register"}>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent