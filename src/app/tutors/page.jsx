import React from 'react';
import TutorsCard from '../components/TutorsCard';

const Tutorspage = async ({ searchParams }) => {

    const search = searchParams?.search || "";
    const subject = searchParams?.subject || "All";
    const minPrice = searchParams?.minPrice || "";
    const maxPrice = searchParams?.maxPrice || "";

    const res = await fetch(
        `http://localhost:5000/tutors?search=${search}&subject=${subject}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        {
            cache: "no-store"
        }
    );

    const data = await res.json();
    const tutors = Array.isArray(data) ? data : [];

    return (
        <div className='max-w-7xl mx-auto'>
            

            <div>
                <h1 className='text-4xl text-teal-600 font-bold m-5'>
                    All Tutors
                </h1>
            </div>

            <form className="flex flex-wrap gap-2 m-5" method="GET">

                <input
                    name="search"
                    placeholder="Search tutor..."
                    className="border p-2"
                    defaultValue={search}
                />

                <select
                    name="subject"
                    className="border p-2"
                    defaultValue={subject}
                >
                    <option value="All">All</option>
                    <option value="Math">Math</option>
                    <option value="Physics">Physics</option>
                    <option value="English">English</option>
                </select>

                <input
                    name="minPrice"
                    placeholder="Min Price"
                    className="border p-2"
                    defaultValue={minPrice}
                />

                <input
                    name="maxPrice"
                    placeholder="Max Price"
                    className="border p-2"
                    defaultValue={maxPrice}
                />

                <button className="bg-teal-600 text-white px-4">
                    Search
                </button>

            </form>

    
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