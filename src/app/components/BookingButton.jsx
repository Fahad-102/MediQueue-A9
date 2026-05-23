"use client";

import React, { useState } from "react"; 
import { RiExternalLinkFill } from "react-icons/ri";
import { authClient } from "../../lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Spinner } from "@heroui/react"; 

const BookingButton = ({ tutor, totalSlot }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isBooking, setIsBooking] = useState(false); 

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please login to book a session");
      return;
    }

    setIsBooking(true); 

    const actualTutorId = tutor?._id?.$oid || tutor?._id;

    const bookingData = {
      userID: user?.id,
      userName: user?.name,
      userImage: user?.image,
      userEmail: user?.email,
      tutorId: actualTutorId,
      tutorName: tutor?.tutorName,
      tutorSubject: tutor?.subject,
      tutorTeachingMode: tutor?.teachingMode,
      tutorFee: tutor?.hourlyFee,
      tutorImage: tutor?.photo,
    };

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData?.token}`, 
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (res.ok) {
        toast.success("You Booked Successfully");
        router.refresh(); 
      } else {

        const errorData = await res.json().catch(() => ({}));
        toast.error(errorData?.message || "Booking failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsBooking(false); 
    }
  };

  return (
    <div>
      <button
        onClick={handleBooking}
        disabled={totalSlot === 0 || isBooking} 
        className={`px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all ${
          totalSlot === 0 || isBooking
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-teal-600 text-white hover:bg-slate-800"
        }`}
      >
        <div className="flex items-center gap-2">
          
          {isBooking ? (
            <>
              <Spinner size="sm" color="current" />
              Booking...
            </>
          ) : (
            <>
              <RiExternalLinkFill /> Book Session
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default BookingButton;