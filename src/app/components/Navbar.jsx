"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user ?? null;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  const linkClass = (path) =>
    `no-underline transition-colors duration-200 ${
      pathname === path
        ? "text-teal-600 font-semibold"
        : "text-slate-700 dark:text-slate-300"
    } hover:text-teal-500`;

  return (
    <nav className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-2xl text-slate-900 dark:text-white no-underline">
          Medi<span className="text-teal-600 dark:text-teal-400">Q</span>ueue
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/tutors" className={linkClass("/tutors")}>Tutors</Link>
          <Link href="/add-tutor" className={linkClass("/add-tutor")}>Add Tutor</Link>
          <Link href="/my-tutors" className={linkClass("/my-tutors")}>My Tutors</Link>
          <Link href="/my-booked-sessions" className={linkClass("/my-booked-sessions")}>Booked Sessions</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl text-slate-900 dark:text-white"
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-slate-900 dark:text-white">{user.name}</span>

              <Avatar>
                <Avatar.Image src={user.image} />
                <Avatar.Fallback>{user.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleLogout} className="bg-red-500 text-white">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/login" className="text-teal-600 no-underline hover:text-teal-500">
                Login
              </Link>
              <Link href="/register" className="bg-teal-600 text-white px-4 py-2 rounded no-underline hover:bg-teal-500">
                Register
              </Link>
            </div>
          )}
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-slate-900 dark:text-white text-xl"
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white text-3xl"
          >
            {isOpen ? <HiXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-3 bg-white dark:bg-slate-900 border-t dark:border-slate-800">
          <Link className={linkClass("/")} href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className={linkClass("/tutors")} href="/tutors" onClick={() => setIsOpen(false)}>Tutors</Link>
          <Link className={linkClass("/add-tutor")} href="/add-tutor" onClick={() => setIsOpen(false)}>Add Tutor</Link>
          <Link className={linkClass("/my-tutors")} href="/my-tutors" onClick={() => setIsOpen(false)}>My Tutors</Link>
          <Link className={linkClass("/my-booked-sessions")} href="/my-booked-sessions" onClick={() => setIsOpen(false)}>Booked Sessions</Link>

          <hr />

          {user ? (
            <Button onClick={handleLogout} className="bg-red-500 text-white">
              Logout
            </Button>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}

      <Script src="https://example.com/script.js" strategy="afterInteractive" />
    </nav>
  );
};

export default Navbar;