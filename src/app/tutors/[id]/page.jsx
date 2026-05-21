import BookingButton from '@/app/components/BookingButton';
import { DeleteAlert } from '@/app/components/DeleteAlert';
import { EditModal } from '@/app/components/EditModal';
import ProtectedRoute from '@/app/components/ProtectedRoute';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';


const TutorsDetailspage = async ({ params }) => {
    const { id } = await params;
    let tutor = null;

    try {
        const res = await fetch(`http://localhost:5000/tutors/${id}`, {
            cache: 'no-store'
        });

        if (res.ok) {
            tutor = await res.json();
        }
    } catch (error) {
        console.error("Fetch failed:", error.message);
    }

    
    if (!tutor) {
        return (
            
            <div className="flex flex-col justify-center items-center h-[60vh] gap-3">
                <div className="text-red-500 bg-red-50 px-4 py-2 rounded-full font-medium text-sm">Server Connection Failed</div>
                <p className="text-gray-500 text-sm">Please ensure your backend server is running on port 5000.</p>
            </div>
        );
    }

    const {
        tutorName,
        photo,
        subject,
        availableDays,
        availableTime,
        hourlyFee,
        totalSlot,
        sessionStartDate,
        institution,
        experience,
        location,
        teachingMode,
        userEmail,
        description
    } = tutor;

    return (
        <ProtectedRoute>
            <Card className='max-w-5xl  mx-auto bg-gray-300 p-4'>
                <div className='flex items-center gap-2 mb-4'>
                    <EditModal tutor={tutor} />
                <DeleteAlert tutor={tutor} />
                </div>
            <div className="max-w-4xl mx-auto w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                
                <div className="md:w-2/5 relative bg-gray-200 h-64 md:h-auto min-h-75">
                    <Image 
                        src={photo} 
                        alt={tutorName}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                        {subject}
                    </div>
                    {totalSlot === 0 && (
                        <div className="absolute inset-0 bg-black/60 flex justify-center items-center backdrop-blur-xs">
                            <span className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg text-sm tracking-wide shadow-lg">
                                ALL SLOTS BOOKED
                            </span>
                        </div>
                    )}
                </div>

                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{tutorName}</h1>
                                <p className="text-sm font-medium text-blue-600 mt-0.5">{institution}</p>
                            </div>
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                teachingMode === 'Online' ? 'bg-purple-100 text-green-700' :
                                teachingMode === 'Offline' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                            }`}>
                                {teachingMode} Mode
                            </span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                            {description || "No description provided by the tutor."}
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm border-b border-gray-100 pb-6">
                            <div>
                                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Experience</span>
                                <span className="font-medium text-gray-700 mt-0.5 block">{experience}</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</span>
                                <span className="font-medium text-gray-700 mt-0.5 block">{location}</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Available Schedule</span>
                                <span className="font-medium text-gray-700 mt-0.5 block text-xs">{availableDays} ({availableTime})</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Session Starts</span>
                                <span className="font-medium text-gray-700 mt-0.5 block">{sessionStartDate}</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</span>
                                <span className="font-medium text-gray-700 mt-0.5 block">{userEmail}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-extrabold text-gray-900">${hourlyFee}</span>
                            <span className="text-xs font-medium text-gray-400">/ hour</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <span className="block text-xs font-medium text-gray-400">Available Slots</span>
                                <span className={`text-sm font-bold ${totalSlot < 3 ? 'text-amber-300' : 'text-green-600'}`}>
                                    {totalSlot} {totalSlot === 1 ? 'slot' : 'slots'} left
                                </span>
                            </div>
                            <BookingButton tutor={tutor} totalSlot={totalSlot}/>
                        </div>
                    </div>

                </div>
            </div>
            </Card>
            </ProtectedRoute>
    );
};

export default TutorsDetailspage;