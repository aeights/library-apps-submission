"use client"

import Link from 'next/link';
import React, { useState } from 'react'

function SidebarComponent() {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", url: "/dashboard", src: "dashboard"},
        { title: "Books", url: "/dashboard/books", src: "library_books", gap:true},
        { title: "Account", url: "/dashboard/account", src: "person"},
        { title: "Logout ", url: "/logout", src: "logout", gap:true},
    ];
    return (
        <div
            className={`${open ? "w-72" : "w-20"} bg-blue-800 h-screen p-5  pt-8 relative duration-300`}>
            <span className={`material-symbols-outlined absolute border-2 border-slate-200 cursor-pointer -right-3 top-9 w-7 rounded-full bg-slate-200 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>arrow_back</span>
            <div className="flex gap-x-4 items-center">
                <span className={`cursor-pointer material-symbols-outlined duration-500 text-slate-200 ${open && "rotate-[360deg]"}`}>menu_book</span>
                <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>Library</h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <Link
                        key={index}
                        href={Menu.url}
                        className={`flex hover:font-semibold rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                        <span class="material-symbols-outlined">{Menu.src}</span>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {Menu.title}
                        </span>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default SidebarComponent