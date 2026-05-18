"use client";

import { useState } from 'react';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
                
                <div className="font-bold text-2xl tracking-wide">
                    <Link href="/" className="no-underline">
                        Medi<span className="text-red-900">Q</span><span className="text-black">ueue</span>
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center gap-6 m-0 p-0 list-none">
                        <li><Link href="/" className="text-gray-700 hover:text-teal-600 font-medium no-underline transition-colors">Home</Link></li>
                        <li><Link href="/tutors" className="text-gray-700 hover:text-teal-600 font-medium no-underline transition-colors">Tutors</Link></li>
                        <li><Link href="/add-tutor" className="text-gray-700 hover:text-teal-600 font-medium no-underline transition-colors">Add Tutor</Link></li>
                        <li><Link href="/my-tutors" className="text-gray-700 hover:text-teal-600 font-medium no-underline transition-colors">My Tutors</Link></li>
                        <li><Link href="/my-booked-sessions" className="text-gray-700 hover:text-teal-600 font-medium no-underline transition-colors">My Booked Sessions</Link></li>
                    </ul>
                </div>
                
                <div className="hidden md:flex items-center gap-4">
                    <ul className="flex items-center gap-4 m-0 p-0 list-none">
                        <li><Link href="/login" className="text-gray-700 hover:text-teal-600 font-medium no-underline transition-colors">Login</Link></li>
                        <li>
                            <Link href="/register" className="bg-teal-600 text-white px-4 py-2 rounded no-underline hover:bg-teal-700 transition-colors shadow-sm block">
                                Register
                            </Link>
                        </li>
                        <li className="flex items-center pl-2 border-l border-gray-200">
                            <Avatar isBordered color="teal" radius="full" className="w-9 h-9">
                                <Avatar.Image alt="User Profile" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" />
                                <Avatar.Fallback className="bg-teal-100 text-teal-800 font-bold text-xs">MQ</Avatar.Fallback>
                            </Avatar>
                        </li>
                    </ul>
                </div>

                <div className="flex md:hidden items-center">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-gray-700 focus:outline-none p-2 rounded hover:bg-gray-100 transition-colors text-2xl"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiXMark /> : <HiOutlineBars3 />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 transition-all duration-300">
                    <ul className="flex flex-col gap-4 list-none m-0 p-0">
                        <li><Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-teal-600 font-medium no-underline">Home</Link></li>
                        <li><Link href="/tutors" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-teal-600 font-medium no-underline">Tutors</Link></li>
                        <li><Link href="/add-tutor" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-teal-600 font-medium no-underline">Add Tutor</Link></li>
                        <li><Link href="/my-tutors" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-teal-600 font-medium no-underline">My Tutors</Link></li>
                        <li><Link href="/my-booked-sessions" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-teal-600 font-medium no-underline">My Booked Sessions</Link></li>
                        
                        <hr className="border-gray-200 my-2" />
                        
                        <li><Link href="/login" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-teal-600 font-medium no-underline">Login</Link></li>
                        <li>
                            <Link href="/register" onClick={() => setIsOpen(false)} className="bg-teal-600 text-white px-4 py-2 rounded no-underline text-center block hover:bg-teal-700 font-medium shadow-sm">
                                Register
                            </Link>
                        </li>
                        <li className="flex items-center gap-3 pt-2">
                            <Avatar isBordered color="teal" radius="full" className="w-9 h-9">
                                <Avatar.Image alt="User Profile" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" />
                                <Avatar.Fallback className="bg-teal-100 text-teal-800 font-bold text-xs">MQ</Avatar.Fallback>
                            </Avatar>
                            <span className="text-gray-700 font-medium text-sm">My Profile</span>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;