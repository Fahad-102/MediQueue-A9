import React from 'react';
import TutorsCard from '../components/TutorsCard';

const Tutorspage = async() => {
    const res  = await fetch("http://localhost:5000/tutors")
    const tutors = await res.json()
 console.log(tutors)
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <h1 className='text-4xl font-bold m-5'>All Tutors</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tutors.map(tutor => <TutorsCard key={tutor._id} tutor={tutor}/>)
                }
            </div>
        </div>
    );
};

export default Tutorspage;