"use client";

import { useState } from "react";
import { TrashBin } from "@gravity-ui/icons";

export default function TutorRowActions({ initialTutors }) {
    const [tutors, setTutors] = useState(initialTutors);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);

    const [tutorName, setTutorName] = useState("");
    const [subject, setSubject] = useState("");
    const [teachingMode, setTeachingMode] = useState("");
    const [hourlyFee, setHourlyFee] = useState("");

    const openUpdateModal = (tutor) => {
        setSelectedTutor(tutor);
        setTutorName(tutor.tutorName || tutor.name || "");
        setSubject(tutor.tutorSubject || tutor.subject || "");
        setTeachingMode(tutor.tutorTeachingMode || tutor.teachingMode || "Online");
        setHourlyFee(tutor.tutorFee || tutor.hourlyFee || "");
        setIsUpdateOpen(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const targetId = selectedTutor._id?.$oid || selectedTutor._id;
        
        const updatedInfo = {
            tutorName,
            tutorSubject: subject,
            tutorTeachingMode: teachingMode,
            tutorFee: Number(hourlyFee)
        };

        const res = await fetch(`http://localhost:5000/tutors/${targetId}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedInfo)
        });

        if (res.ok) {
            setTutors(tutors.map(t => (t._id?.$oid || t._id) === targetId ? { ...t, ...updatedInfo } : t));
            setIsUpdateOpen(false);
        }
    };

    const openDeleteModal = (tutor) => {
        setSelectedTutor(tutor);
        setIsDeleteOpen(true);
    };

    const handleDelete = async () => {
        const targetId = selectedTutor._id?.$oid || selectedTutor._id;
        
        const res = await fetch(`http://localhost:5000/tutors/${targetId}`, {
            method: "DELETE"
        });

        if (res.ok) {
            setTutors(tutors.filter(t => (t._id?.$oid || t._id) !== targetId));
            setIsDeleteOpen(false);
        }
    };

    return (
        <>
            {tutors.map((tutor) => {
                const id = tutor._id?.$oid || tutor._id;
                return (
                    <tr key={id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 font-medium text-gray-900">{tutor.tutorName || tutor.name}</td>
                        <td className="p-5 text-gray-500">{tutor.tutorSubject || tutor.subject}</td>
                        <td className="p-5">{tutor.tutorTeachingMode || tutor.teachingMode}</td>
                        <td className="p-5 font-bold text-gray-900">${tutor.tutorFee || tutor.hourlyFee}</td>
                        
                        <td className="p-5 text-center">
                            <button 
                                onClick={() => openUpdateModal(tutor)}
                                className="px-3 py-1.5 bg-teal-50 text-teal-600 border border-teal-100 rounded-xl text-xs font-semibold hover:bg-teal-100"
                            >
                                Update
                            </button>
                        </td>
                        
                        <td className="p-5 text-center">
                            <button 
                                onClick={() => openDeleteModal(tutor)}
                                className="inline-flex items-center justify-center p-2 rounded-xl bg-red-50 border border-red-100 text-red-400 hover:text-red-500"
                            >
                                <TrashBin className="w-4 h-4" />
                            </button>
                        </td>
                    </tr>
                );
            })}

            {isUpdateOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <form onSubmit={handleUpdate} className="bg-white rounded-2xl p-6 max-w-md w-full border border-gray-100 shadow-2xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Edit Tutor Info</h3>
                        
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
                                <input type="text" value={tutorName} onChange={e => setTutorName(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" required />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">Subject</label>
                                <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" required />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">Teaching Mode</label>
                                <select value={teachingMode} onChange={e => setTeachingMode(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none">
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">Hourly Fee ($)</label>
                                <input type="number" value={hourlyFee} onChange={e => setHourlyFee(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" required />
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button type="button" onClick={() => setIsUpdateOpen(false)} className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-xl">Cancel</button>
                            <button type="submit" className="px-4 py-2 text-sm text-white bg-teal-600 rounded-xl">Save</button>
                        </div>
                    </form>
                </div>
            )}

            {isDeleteOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full border border-gray-100 shadow-2xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Are you sure?</h3>
                        <p className="text-gray-400 text-sm mb-6">This will delete the tutor record permanently.</p>
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => setIsDeleteOpen(false)} className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-xl">No</button>
                            <button onClick={handleDelete} className="px-4 py-2 text-sm text-white bg-red-600 rounded-xl">Yes, Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}