"use client";

import React from "react";
import { Button, Card } from "@heroui/react";
import { MdAdd } from "react-icons/md";
import { useRouter } from "next/navigation"; 

import ProtectedRoute from "../components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const AddTutorPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const tutors = Object.fromEntries(formData.entries());

    tutors.hourlyFee = Number(tutors.hourlyFee);
    tutors.totalSlot = Number(tutors.totalSlot);
    tutors.photo = tutors.photo?.trim();

    
    if (!tutors.photo || tutors.photo === "") {
      tutors.photo = "https://images.unsplash.com/photo-1534528741775-53994a69daeb";
    }

    console.log(tutors);

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tutors`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData.token}`,
          },
          body: JSON.stringify(tutors),
        }
      );

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        toast.success("Tutor added successfully!"); 
        router.push("/tutors");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-500">
          Add Tutors
        </h1>

        <Card className="shadow-lg border bg-white dark:bg-slate-900 dark:border-slate-800">
          <form onSubmit={onSubmit} className="p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Tutor Name */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Tutor Name *
                </label>
                <input
                  name="tutorName"
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Email Address *
                </label>
                <input
                  name="userEmail"
                  type="email"
                  required
                  placeholder="muhammadfahadbinjamal@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Subject / Category *
                </label>
                <select
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                  <option value="ICT">ICT</option>
                </select>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Tuition Fee (USD / Hourly) *
                </label>
                <input
                  name="hourlyFee"
                  type="number"
                  required
                  placeholder="150"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Experience */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Experience / Background *
                </label>
                <input
                  name="experience"
                  type="text"
                  required
                  placeholder="B.Sc in CSE / 2 Years Experience"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Location *
                </label>
                <input
                  name="location"
                  type="text"
                  required
                  placeholder="Chattogram"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Institution */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Institution *
                </label>
                <input
                  name="institution"
                  type="text"
                  required
                  placeholder="East Delta University"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Available Days */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Available Days *
                </label>
                <input
                  name="availableDays"
                  type="text" 
                  required
                  placeholder="e.g., Sat - Mon - Wed or Fri - Sat"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Available Time */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Available Time *
                </label>
                <input
                  name="availableTime"
                  type="time"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Total Slot */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Total Slot *
                </label>
                <input
                  name="totalSlot"
                  type="number"
                  required
                  placeholder="Total Slots"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Session Start Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Session Start Date *
                </label>
                <input
                  name="sessionStartDate"
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Teaching Mode */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Teaching Mode *
                </label>
                <select
                  name="teachingMode"
                  required
                  defaultValue="Online"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all appearance-none cursor-pointer"
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              {/* Tutor Image */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  Tutor Image URL *
                </label>
                <input
                  name="photo"
                  type="url"
                  required
                  placeholder="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-teal-600 dark:text-slate-300">
                  About Tutor / Bio *
                </label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  placeholder="Describe your teaching methods, background, and schedule availability..."
                  className="w-full px-4 py-3 rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-teal-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="rounded-2xl w-full bg-teal-600 text-white hover:bg-teal-700 transition-colors py-6 font-semibold border-none shadow-md"
            >
              <MdAdd className="text-xl" />
              Add Tutor Profile
            </Button>
          </form>
        </Card>
      </div>
    </ProtectedRoute>
  );
};

export default AddTutorPage;