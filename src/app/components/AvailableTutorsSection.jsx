import React from 'react';
import TutorsCard from './TutorsCard';
import Link from 'next/link';
import { Button } from '@heroui/react';

const AvailableTutorsSection = async() => {
    const res = await fetch('http://localhost:5000/availableTutors')
    const tutors = await res.json()
    return (
        <div className='max-w-7xl mx-auto'>
                    <div>
                        <h1 className='text-5xl flex justify-center text-teal-600 font-bold m-10'>Available Tutors</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            tutors.map(tutor => <TutorsCard key={tutor._id} tutor={tutor}/>)
                        }
                    </div>
                    <div className='flex justify-center m-5'>
                        <Link href={'/tutors'}>
                        <Button variant='primary' className='text-white bg-teal-600'>
                        Show More
                        </Button>
                        </Link>
                        </div>
                </div>
    );
};

export default AvailableTutorsSection;