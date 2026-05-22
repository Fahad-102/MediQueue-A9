"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto w-full rounded-xl overflow-hidden shadow-lg">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper [--swiper-navigation-color:#0d9488] [--swiper-pagination-color:#0d9488]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat bg-[url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920)]">
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                Find the Perfect Tutor for You
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-xl max-w-2xl mb-6 sm:mb-8">
                Boost your grades and master any subject with experienced educators.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/tutors">
                  <button className="px-5 py-2 sm:px-6 sm:py-3 bg-teal-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                    Find a Tutor
                  </button>
                </Link>

                <Link href="/register">
                  <button className="px-5 py-2 sm:px-6 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg">
                    Registration
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat bg-[url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920)]">
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                Start Your Teaching Career Today
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-xl max-w-2xl mb-6 sm:mb-8">
                Join as instructor, teach students and earn online.
              </p>

              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-teal-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                Join as a Tutor
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat bg-[url(https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1920)]">
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                Interactive 1-on-1 Online Classes
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-xl max-w-2xl mb-6 sm:mb-8">
                Learn from home with personalized live sessions.
              </p>

              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg">
                Book a Free Trial
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;