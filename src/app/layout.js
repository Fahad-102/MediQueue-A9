import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const josefin = Josefin_Sans({
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
      className={`${josefin.className} h-full antialiased`}
      suppressHydrationWarning 
    >
      <body className="min-h-full flex flex-col  bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Providers>
          <Navbar />
          
          <main className="grow m-10">
            {children}
          </main>
          <ToastContainer 
            position="top-right" 
            autoClose={3000} 
            theme="dark" // dark/light/colored icchamoto dite paro
          />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}