import React from "react";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import { BookingDeleteAlert } from "../components/BookingDeleteAlert";

const Bookingpage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Please login to see your bookings.
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${user.id}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-5 my-5 sm:my-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-teal-600 mb-6 text-center md:text-left">
        My Booked Sessions
      </h1>

      {!data || data.length === 0 ? (
        <div className="text-center p-10 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-slate-400 border border-dashed border-slate-200 dark:border-slate-700">
          You have not booked any tutors yet!
        </div>
      ) : (
        <>
          
          <div className="flex flex-col gap-3 md:hidden">
            {data.map((booking) => {
              const actualBookingId = booking._id?.$oid || booking._id;
              return (
                <div
                  key={actualBookingId}
                  className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-4 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Student</p>
                      <p className="font-medium text-sm text-slate-800 dark:text-teal-600">
                        {booking.userName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 mb-0.5">Tutor</p>
                      <p className="text-sm text-teal-600 font-medium">
                        {booking.tutorName}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Subject</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {booking.tutorSubject}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs border ${
                        booking.tutorTeachingMode === "Online"
                          ? "text-green-600 bg-green-50 border-green-200"
                          : "text-blue-600 bg-blue-50 border-blue-200"
                      }`}
                    >
                      {booking.tutorTeachingMode || "Offline"}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 truncate mb-3">
                    {booking.userEmail}
                  </p>

                  <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700">
                    <span className="font-bold text-base text-slate-800 dark:text-teal-600">
                      ${booking.tutorFee}
                    </span>
                    <BookingDeleteAlert bookingId={actualBookingId} />
                  </div>
                </div>
              );
            })}
          </div>

         
          <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-slate-400 text-sm bg-slate-50 dark:bg-slate-900">
                  <th className="p-5 whitespace-nowrap">Name</th>
                  <th className="p-5 whitespace-nowrap">Tutor</th>
                  <th className="p-5 whitespace-nowrap">Subject</th>
                  <th className="p-5 whitespace-nowrap">Email</th>
                  <th className="p-5 whitespace-nowrap">Mode</th>
                  <th className="p-5 whitespace-nowrap">Fee</th>
                  <th className="p-5 text-center whitespace-nowrap">Cancel</th>
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                {data.map((booking) => {
                  const actualBookingId = booking._id?.$oid || booking._id;
                  return (
                    <tr
                      key={actualBookingId}
                      className="hover:bg-slate-50 dark:hover:bg-slate-900/40"
                    >
                      <td className="p-5 whitespace-nowrap font-medium text-teal-600 dark:text-teal-600">
                        {booking.userName}
                      </td>

                      <td className="p-5 whitespace-nowrap text-teal-600">
                        {booking.tutorName}
                      </td>

                      <td className="p-5 whitespace-nowrap text-slate-700 dark:text-slate-300">
                        {booking.tutorSubject}
                      </td>

                      <td className="p-5 whitespace-nowrap text-slate-500">
                        {booking.userEmail}
                      </td>

                      <td className="p-5 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded-full text-xs border ${
                            booking.tutorTeachingMode === "Online"
                              ? "text-green-600 bg-green-50 border-green-200"
                              : "text-blue-600 bg-blue-50 border-blue-200"
                          }`}
                        >
                          {booking.tutorTeachingMode || "Offline"}
                        </span>
                      </td>

                      <td className="p-5 whitespace-nowrap font-bold text-slate-800 dark:text-teal-600">
                        ${booking.tutorFee}
                      </td>

                      <td className="p-5 text-center">
                        <BookingDeleteAlert bookingId={actualBookingId} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Bookingpage;