"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  HiOutlineBars3,
  HiXMark,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";
import { authClient } from "../../lib/auth-client";
import Script from "next/script";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload(); // important for UI refresh
  };

  
const { data: session } = authClient.useSession();
const user = session?.user ?? null;




  return (
    <nav className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-2xl no-underline text-slate-900 dark:text-white"
        >
          Medi<span className="text-teal-600 dark:text-teal-400">Q</span>ueue
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-teal-600 p-2 dark:text-slate-300 no-underline">
            Home
          </Link>
          <Link href="/tutors" className="text-teal-600 p-2 dark:text-slate-300 no-underline">
            Tutors
          </Link>
          <Link href="/add-tutor" className="text-teal-600 p-2 dark:text-slate-300 no-underline">
            Add Tutor
          </Link>
          <Link href="/my-tutors" className="text-teal-600 p-2 dark:text-slate-300 no-underline">
            My Tutors
          </Link>
          <Link href="/my-booked-sessions" className="text-teal-600 p-2 dark:text-slate-300 no-underline">
            Booked Sessions
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          {/* AUTH UI */}
          {user ? (
            <>
              <h2 className="text-slate-900 dark:text-white">
                Welcome {user?.name}
              </h2>

              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button onClick={handleLogout} className="bg-red-500 text-white">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-teal-600 no-underline">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-teal-600 text-white px-4 py-2 rounded no-underline"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden p-4 flex flex-col gap-3">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/tutors" onClick={() => setIsOpen(false)}>Tutors</Link>
          <Link href="/add-tutor" onClick={() => setIsOpen(false)}>Add Tutor</Link>
          <Link href="/my-tutors" onClick={() => setIsOpen(false)}>My Tutors</Link>
          <Link href="/my-booked-sessions" onClick={() => setIsOpen(false)}>
            Booked Sessions
          </Link>

          <hr />

          {user ? (
            <Button onClick={handleLogout} className="bg-red-500 text-white">
              Logout
            </Button>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      )}

      <Script src="https://example.com/script.js" strategy="afterInteractive" />
    </nav>
  );
};

export default Navbar;