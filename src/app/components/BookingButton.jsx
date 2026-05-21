"use client"
import React from 'react';
import { RiExternalLinkFill } from 'react-icons/ri';
import { authClient } from '../lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const BookingButton = ({ tutor, totalSlot }) => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleBooking = async () => {
        if (!user) {
            toast.error("Please login to book a session");
            return;
        }

        const bookingData = {
            userID: user?.id,
            userName: user?.name,
            userImage: user?.image,
            userEmail: user?.email,
            tutorId: tutor?._id,
            tutorName: tutor?.tutorName,
            tutorSubject: tutor?.subject,
            tutorTeachingMode: tutor?.teachingMode,
            tutorFee: tutor?.hourlyFee,
            tutorImage: tutor?.photo
        };

        try {
            const res = await fetch("http://localhost:5000/booking", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });

            if (res.ok) {
                toast.success("You Booked Successfully");
                router.refresh();
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <button 
                onClick={handleBooking} 
                disabled={totalSlot === 0}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md ${
                    totalSlot === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' 
                    : 'bg-teal-600 text-white hover:bg-gray-800 hover:shadow-lg active:scale-98'
                }`}
            >
                <div className='flex items-center gap-2'>
                    <RiExternalLinkFill /> Book Session
                </div>
            </button>
        </div>
    );
};

export default BookingButton;