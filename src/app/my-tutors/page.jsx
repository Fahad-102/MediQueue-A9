import React from 'react';
import { auth } from '../../lib/auth';
import { headers } from 'next/headers';
import TutorRowActions from '../components/TutorRowActions';
import ProtectedRoute from '../components/ProtectedRoute';


const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    });

    const token = await auth.api.getToken({
                headers: await headers()
            });

    const user = session?.user;

    if (!user) {
        return <div className="p-10 text-center text-red-500">Please login to view your tutors list.</div>;
    }

    const res = await fetch(`http://localhost:5000/tutors`, {
        cache: 'no-store',
         headers:{
                                authorization :`Bearer ${token.token}`
                            }
    });
    const allTutors = await res.json();
    
    const userTutors = allTutors.filter(tutor => tutor.userId === user.id || tutor.userID === user.id);

    return (
        <ProtectedRoute>
        <div className="max-w-7xl mx-auto p-5 my-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
                My Tutors List
            </h1>

            {!userTutors || userTutors.length === 0 ? (
                <div className="text-center p-10 bg-gray-50 rounded-2xl text-gray-400 border border-dashed border-gray-200">
                    You have not added any tutors entries yet!
                </div>
            ) : (
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-400 text-sm font-medium bg-gray-50/50">
                                    <th className="p-5">Tutor Image</th>
                                    <th className="p-5">Tutor Name</th>
                                    <th className="p-5">Subject</th>
                                    <th className="p-5">Teaching Mode</th>
                                    <th className="p-5">Hourly Fee</th>
                                    <th className="p-5 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-gray-700 text-sm">
                                <TutorRowActions initialTutors={userTutors} />
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
        </ProtectedRoute>
    );
};

export default MyTutorsPage;