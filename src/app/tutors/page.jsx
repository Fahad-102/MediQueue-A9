import React from 'react';
import TutorsCard from '../components/TutorsCard';

const Tutorspage = async () => {

    const res = await fetch("http://localhost:5000/tutors", {
        cache: "no-store"
    });

    const data = await res.json();

    // 🔥 ensure always array
    const tutors = Array.isArray(data) ? data : [];

    return (
        <div className='max-w-7xl mx-auto'>
            
            <div>
                <h1 className='text-4xl text-teal-600 font-bold m-5'>
                    All Tutors
                </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tutors.length > 0 ? (
                        tutors.map(tutor => (
                            <TutorsCard key={tutor._id} tutor={tutor} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">
                            No tutors found
                        </p>
                    )
                }
            </div>

        </div>
    );
};

export default Tutorspage;