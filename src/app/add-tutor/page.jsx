"use client"
import { Button, Card } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { MdAdd } from 'react-icons/md';

const AddTutorPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutors = Object.fromEntries(formData.entries());
    console.log(tutors);


    const res = await fetch("http://localhost:5000/tutors",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tutors)
    })

    const data = await res.json()
    redirect("/tutors")
    console.log(data)

  }; 

  return (
    <div className='max-w-7xl mx-auto my-10 px-4'>
      <h1 className='text-4xl font-bold mb-6 text-gray-500 '>Add Tutors</h1>
      <Card className="shadow-lg border bg-white dark:bg-slate-900 dark:border-slate-800">
        <form onSubmit={onSubmit} className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Tutor Name *</label>
              <input 
                name="tutorName"
                type="text"
                required
                placeholder="Enter Your Name" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Email Address *</label>
              <input 
                name="email"
                type="email"
                required
                placeholder="muhammadfahadbinjamal@example.com" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Subject / Category *</label>
              <select
                name="subject"
                required
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled selected>Select subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="ICT">ICT</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Tuition Fee (USD / Hourly) *</label>
              <input 
                name="price"
                type="number"
                required
                placeholder="150" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Experience / Background *</label>
              <input 
                name="experience"
                type="text"
                required
                placeholder="B.Sc in CSE / 2 Years Experience" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300"> Location *</label>
              <input 
                name="location"
                type="location"
                required
                placeholder="Chattagram" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Institution *</label>
              <input 
                name="institution"
                type="text"
                required
                placeholder="East Delta University" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Available Days*</label>
              <input 
                name="availableDays"
                type="Date"
                required
                placeholder="Enter when you available days" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Available Time *</label>
              <input 
                name="availableTime"
                type="time"
                required
                placeholder="Enter available Time" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Total Slot*</label>
              <input 
                name="totalSlot"
                type="number"
                required
                placeholder="Total Slots" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Session Start Date :*</label>
              <input 
                name="SessionStartDate"
                type="date"
                required
                placeholder=" Enter when session Start" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Teaching Mode *</label>
              <input 
                name="teachingMode"
                type="text"
                required
                placeholder="Online/Offline/Both" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Tutor Image URL *</label>
              <input 
                name="tutorImage"
                type="url"
                required
                placeholder="https://example.com/tutor-profile.jpg" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              />
            </div>
            
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-teal-600 dark:text-slate-300">About Tutor / Bio *</label>
              <textarea 
                name="description"
                required
                rows="4"
                placeholder="Describe your teaching methods, background, and schedule availability..." 
                className="w-full px-4 py-3 rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all resize-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="rounded-2xl w-full bg-teal-600 text-white hover:bg-teal-700 transition-colors py-6 font-semibold border-none shadow-md"
          >
            <MdAdd />Add Tutor Profile
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddTutorPage;