import React from 'react';
import { auth } from '../../lib/auth';
import { headers } from 'next/headers';
import { BookingDeleteAlert } from '../components/BookingDeleteAlert';
import ProtectedRoute from '../components/ProtectedRoute';


const Bookingpage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    });

    const user = session?.user;

    if (!user) {
        return <div className="p-10 text-center text-red-500">Please login to see your bookings.</div>;
    }

    const res = await fetch(`http://localhost:5000/booking/${user.id}`, {
        cache: 'no-store'
    });
    const data = await res.json();

    return (
        <ProtectedRoute>
        <div className="max-w-7xl mx-auto p-5 my-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
                My Booked Sessions
            </h1>

            {!data || data.length === 0 ? (
                <div className="text-center p-10 bg-gray-50 rounded-2xl text-gray-400 border border-dashed border-gray-200">
                    You have not booked any tutors yet! 
                </div>
            ) : (
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-400 text-sm font-medium bg-gray-50/50">
                                    <th className="p-5">Name</th>
                                    <th className="p-5">Tutor Name</th>
                                    <th className="p-5">Subject</th>
                                    <th className="p-5">Email</th>
                                    <th className="p-5">Teaching Mode</th>
                                    <th className="p-5">Fee</th>
                                    <th className="p-5 text-center">Cancel</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-gray-700 text-sm">
                                {data.map((booking) => {
                                    const actualBookingId = booking._id?.$oid || booking._id;
                                    
                                    return (
                                        <tr key={actualBookingId} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-5 font-medium text-gray-900">{booking.userName}</td>
                                            <td className="p-5 font-medium text-teal-600">{booking.tutorName}</td>
                                            <td className="p-5">{booking.tutorSubject}</td>
                                            <td className="p-5 text-gray-500">{booking.userEmail}</td>
                                            <td className="p-5">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                                                    booking.tutorTeachingMode === 'Online'
                                                        ? 'bg-green-50 border-green-100 text-green-700'
                                                        : 'bg-blue-50 border-blue-100 text-blue-700'
                                                }`}>
                                                    {booking.tutorTeachingMode || 'Offline'}
                                                </span>
                                            </td>
                                            <td className="p-5 font-bold text-gray-900">${booking.tutorFee}</td>
                                            <td className="p-5 text-center">
                                                <BookingDeleteAlert bookingId={actualBookingId} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
        </ProtectedRoute>
    );
};

export default Bookingpage;