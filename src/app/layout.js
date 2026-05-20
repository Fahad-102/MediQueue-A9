import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediQueue – Tutor Booking System",
  description: "Book your online learning sessions efficiently without scheduling conflicts.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning 
    >
      <body className="min-h-full flex flex-col  bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Providers>
          <Navbar />
          
          <main className="grow m-10">
            {children}
          </main>
          
          <Footer />
        </Providers>
      </body>
    </html>
  );
}