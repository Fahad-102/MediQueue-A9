import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 px-5 py-12 mt-auto border-t-4 border-teal-600">
            <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-10">
                
                <div className="flex-[1.5] min-w-[280px]">
                    <div className="font-bold text-2xl text-white mb-4 tracking-wide">
                        Medi<span className="text-red-500">Q</span><span>ueue</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">
                        MediQueue is Chittagong premier tutor booking and learning queue management platform. 
                        We connect passionate medical, engineering, and academic tutors with students seeking academic excellence.
                    </p>
                </div>

                <div className="flex-1 min-w-[180px]">
                    <h4 className="text-white font-bold mb-[18px] text-base uppercase tracking-[0.5px]">
                        Explore Platform
                    </h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li>
                            <Link href="/" className="text-slate-400 hover:text-teal-400 text-sm no-underline transition-colors">
                                Home Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/tutors" className="text-slate-400 hover:text-teal-400 text-sm no-underline transition-colors">
                                Find All Tutors
                            </Link>
                        </li>
                        <li>
                            <Link href="/add-tutor" className="text-slate-400 hover:text-teal-400 text-sm no-underline transition-colors">
                                Become a Tutor
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-booked-sessions" className="text-slate-400 hover:text-teal-400 text-sm no-underline transition-colors">
                                My Booked Slots
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 min-w-[220px]">
                    <h4 className="text-white font-bold mb-[18px] text-base uppercase tracking-[0.5px]">
                        Contact & Support
                    </h4>
                    <div className="flex flex-col gap-2 text-sm text-slate-300">
                        <p className="flex items-center gap-2 m-0">
                            <FaLocationDot className="text-teal-500 min-w-[16px]" /> ORC Mall, GEC Circle, Chittagong
                        </p>
                        <p className="flex items-center gap-2 m-0">
                            <SiGmail className="text-teal-500 min-w-[16px]" /> muhammadfahadbinjamal@gmail.com
                        </p>
                        <p className="flex items-center gap-2 m-0">
                            <IoMdCall className="text-teal-500 min-w-[16px]" /> +880 1830480102
                        </p>
                    </div>
                    
                    <div className="flex gap-4 mt-5">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-sky-400 hover:scale-110 transition-transform no-underline" title="Facebook">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-sky-500 hover:scale-110 transition-transform no-underline" title="LinkedIn">
                            <FaLinkedin />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-rose-400 hover:scale-110 transition-transform no-underline" title="Instagram">
                            <FaInstagram />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-sky-400 hover:scale-110 transition-transform no-underline" title="Twitter">
                            <FaXTwitter />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="border-t border-slate-700 mt-10 pt-5 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} <strong className="text-slate-400">MediQueue Inc.</strong> All rights reserved. Developed By Muhammad Fahad Bin Jamal.
            </div>
        </footer>
    );
};

export default Footer;