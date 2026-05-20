"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { HiOutlineBars3, HiXMark, HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        <Link href="/" className="font-bold text-2xl no-underline text-slate-900 dark:text-white">
          Medi<span className="text-teal-600 dark:text-teal-400">Q</span>ueue
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-teal-600  p-2 dark:text-slate-300 no-underline hover:text-green-500 hover:border-b-2  hover:rounded-xl  dark:hover:text-teal-400 font-medium transition-colors">Home</Link>
          <Link href="/tutors" className="text-teal-600  p-2 dark:text-slate-300 no-underline hover:text-green-500 hover:border-b-2  hover:rounded-xl  dark:hover:text-teal-400 font-medium transition-colors">Tutors</Link>
          <Link href="/add-tutor" className="text-teal-600  p-2 dark:text-slate-300 no-underline hover:text-green-500 hover:border-b-2  hover:rounded-xl  dark:hover:text-teal-400 font-medium transition-colors">Add Tutor</Link>
          <Link href="/my-tutors" className="text-teal-600  p-2 dark:text-slate-300 no-underline hover:text-green-500 hover:border-b-2  hover:rounded-xl  dark:hover:text-teal-400 font-medium transition-colors">My Tutors</Link>
          <Link href="/my-booked-sessions" className="text-teal-600  p-2 dark:text-slate-300 no-underline hover:text-green-500 hover:border-b-2  hover:rounded-xl  dark:hover:text-teal-400 font-medium transition-colors">My Booked Sessions</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-200 text-xl hover:ring-2 hover:ring-teal-600 transition-all duration-200"
            type="button"
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
          
          <Link href="/login" className="text-teal-600 dark:text-slate-300 no-underline font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Login</Link>
          <Link href="/register" className="bg-teal-600 dark:bg-teal-500 text-white px-4 py-2 rounded no-underline hover:bg-teal-700 dark:hover:bg-teal-600 font-medium transition-colors shadow-sm">
            Register
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="p-2 rounded-full text-slate-700 hover:ring-teal-600 dark:text-slate-200 text-xl"
            type="button"
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-2xl text-gray-700 dark:text-slate-300 p-1"
            type="button"
          >
            {isOpen ? <HiXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-slate-300 no-underline font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
          <Link href="/tutors" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-slate-300 no-underline font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Tutors</Link>
          <Link href="/add-tutor" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-slate-300 no-underline font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Add Tutor</Link>
          <Link href="/my-tutors" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-slate-300 no-underline font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">My Tutors</Link>
          <Link href="/my-booked-sessions" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-slate-300 no-underline font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">My Booked Sessions</Link>
          <hr className="dark:border-slate-800" />
          <Link href="/login" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-slate-300 no-underline font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Login</Link>
          <Link href="/register" onClick={() => setIsOpen(false)} className="bg-teal-600 text-white px-4 py-2 rounded no-underline text-center font-medium shadow-sm hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;