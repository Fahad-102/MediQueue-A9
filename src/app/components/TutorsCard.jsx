import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcExternal } from 'react-icons/fc';

const TutorsCard = ({ tutor }) => {
  const {
    _id,
    tutorName,
    photo,
    subject,
    hourlyFee,
    teachingMode,
    availableTime,
    availableDays,
    sessionStartDate
  } = tutor;

  return (
    <div className="h-full flex flex-col">
      <Card className="p-5 h-full flex flex-col justify-between border border-default-100 bg-background/60 dark:bg-default-50/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300">
        
        <div className="relative w-full aspect-square mb-4 bg-default-100 rounded-xl overflow-hidden">
          <Image
            src={photo}
            alt={tutorName}
            fill
            sizes="(max-w-7xl) 33vw, (max-w-md) 100vw"
            priority={false}
            className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {subject}
          </span>
        </div>

        <div className="grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground line-clamp-1 mb-1">
              {tutorName}
            </h3>
            
            <div className="space-y-1.5 my-3 text-sm text-default-500 dark:text-default-400">
              <p className="flex items-center gap-1.5 line-clamp-1">
                 <span className="font-medium text-default-600">Time:</span> {availableTime}
              </p>
              <p className="flex items-center gap-1.5 line-clamp-1">
                 <span className="font-medium text-default-600">Days:</span> {availableDays}
              </p>
              <p className="flex items-center gap-1.5 text-xs bg-default-100 dark:bg-default-100/50 py-1 px-2.5 rounded-md  mt-1 font-medium">
                 Session Starts: {sessionStartDate}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-default-100 flex justify-between items-center mb-4">
            <div>
              <span className="block text-[10px] uppercase text-default-400 font-bold tracking-wider">Hourly Fee</span>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">${hourlyFee}<span className="text-xs text-default-400 font-normal">/hr</span></p>
            </div>
            <div className="text-right">
              <span className="block text-[10px] uppercase text-default-400 font-bold tracking-wider">Mode</span>
              <span className="text-sm font-bold bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 px-2.5 py-0.5 rounded-md inline-block">
                {teachingMode}
              </span>
            </div>
          </div>
        </div>

       <Link href={`/tutors/${_id}`}> <Button 
          variant='ghost' className="w-full  hover:bg-green-700 hover:text-white text-teal-600 font-bold transition-colors duration-200"
          radius="lg"
        >
          <FcExternal /> Book Now
        </Button>
        </Link>
      </Card>
    </div>
  );
};

export default TutorsCard;