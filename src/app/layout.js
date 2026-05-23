import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "./components/Breadcrumb";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "MediQueue – Tutor Booking System",
  description: "Book your online learning sessions efficiently without scheduling conflicts.",
   icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 ${josefin.className}`}>
        <Providers>
          <Navbar />
           <Breadcrumb />
          <main className="grow m-10">
            {children}
          </main>
          <ToastContainer 
            position="top-right" 
            autoClose={3000} 
            theme="dark" 
          />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}