"use client";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";

export function EditModal({tutor}) {
       const {
        _id,
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
     const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutors = Object.fromEntries(formData.entries());
    console.log(tutors);


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${_id}`,{
      method: "PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tutors)
    })

    const data = await res.json()
    console.log(data)

  }; 
  return (
    <Modal>
      <Button variant="outline" className=' border-teal-600 text-teal-600 font-bold flex items-center'> <FaRegEdit /> Edit</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegEdit className="size:xl text-teal-600" />
              </Modal.Icon>
              <Modal.Heading className='text-teal-600 text-2xl font-bold flex items-center'> Edit Tutor</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           
                           <div className="md:col-span-2 flex flex-col gap-2">
                             <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Tutor Name *</label>
                             <input 
                              defaultValue={tutorName}
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
                             defaultValue={userEmail}
                               name="userEmail"
                               type="email"
                               required
                               placeholder="muhammadfahadbinjamal@example.com" 
                               className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                             />
                           </div>
               
                           <div className="flex flex-col gap-2">
                             <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Subject / Category *</label>
                             <select
                              defaultValue={subject}
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
                              defaultValue={hourlyFee}
                               name="hourlyFee"
                               type="number"
                               required
                               placeholder="150" 
                               className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                             />
                           </div>
               
                           <div className="flex flex-col gap-2">
                             <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Experience / Background *</label>
                             <input 
                              defaultValue={experience}
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
                                defaultValue={location}
                               name="location"
                               type="text"
                               required
                               placeholder="Chattagram" 
                               className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                             />
                           </div>
               
                           <div className="flex flex-col gap-2">
                             <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Institution *</label>
                             <input
                                defaultValue={institution}
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
                             defaultValue={availableDays}
                               name="availableDays"
                               type="text"
                               required
                               placeholder="Enter when you available days" 
                               className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                             />
                           </div>
               
                           <div className="flex flex-col gap-2">
                             <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Available Time *</label>
                             <input 
                             defaultValue={availableTime}
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
                             defaultValue={totalSlot}
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
                             defaultValue={sessionStartDate}
                               name="sessionStartDate"
                               type="date"
                               required
                               placeholder=" Enter when session Start" 
                               className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                             />
                           </div>
               
                           <div className="flex flex-col gap-2">
                             <label className="text-sm font-medium text-teal-600 dark:text-slate-300">Teaching Mode *</label>
                             <input 
                             defaultValue={teachingMode}
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
                             defaultValue={photo}
                               name="photo"
                               type="url"
                               required
                               placeholder="https://example.com/tutor-profile.jpg" 
                               className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                             />
                           </div>
                           
                           <div className="md:col-span-2 flex flex-col gap-2">
                             <label className="text-sm font-medium text-teal-600 dark:text-slate-300">About Tutor / Bio *</label>
                             <textarea 
                             defaultValue={description}
                               name="description"
                               required
                               rows="4"
                               placeholder="Describe your teaching methods, background, and schedule availability..." 
                               className="w-full px-4 py-3 rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all resize-none"
                             />
                           </div>
                         </div>
                          <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-teal-600 text-white">Update</Button>
                  </Modal.Footer>
                       </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}