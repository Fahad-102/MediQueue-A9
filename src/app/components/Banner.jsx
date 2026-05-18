"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
      <div className='relative max-w-7xl mx-auto w-full rounded-xl overflow-hidden shadow-lg'>
          <Swiper navigation pagination={{ clickable: true }} modules={[Pagination, Navigation]} className="mySwiper [--swiper-navigation-color:#0d9488] [--swiper-pagination-color:#0d9488]">
            
            <SwiperSlide>
                <div className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat bg-[url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920)]">
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                            Find the Perfect Tutor for You
                        </h1>
                        <p className="text-gray-200 text-base md:text-xl max-w-2xl mb-8">
                            Boost your grades and master any subject with the help of our experienced, top-rated educators.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-teal-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md">
                                Find a Tutor
                            </button>
                            <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat bg-[url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920)]">
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                            Start Your Teaching Career Today
                        </h1>
                        <p className="text-gray-200 text-base md:text-xl max-w-2xl mb-8">
                            Join our platform as an instructor, share your knowledge, and start earning by teaching students nationwide.
                        </p>
                        <button className="px-8 py-3 bg-teal-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105">
                            Join as a Tutor
                        </button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat bg-[url(https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1920)]">
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                            Interactive 1-on-1 Online Classes
                        </h1>
                        <p className="text-gray-200 text-base md:text-xl max-w-2xl mb-8">
                            Learn from the comfort of your home with personalized, live interactive sessions tailored to your pace.
                        </p>
                        <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all duration-300 shadow-lg">
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