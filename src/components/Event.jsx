import React from 'react';
import { getDay, getMonth, convertTimeTo12HourFormat, getDayOfWeek } from '../functions/convertdate';

const Event = ({ event }) => {
    return (
        <div className='grid grid-cols-12 mb-10'>
            <div className='col-start-3 col-end-9 col-span-6 mt-3 p-8 flex flex-row gap-2 border hover:bg-slate-300 shadow-md '>
                <div className='flex flex-col text-center text-lg'>
                    <div>{getMonth(event.dates.start.localDate)}</div>
                    <div>{getDay(event.dates.start.localDate)}</div>
                </div>
                <div className='ml-4 '>
                    <img src={event.images[3].url} alt="event" width={200} height={115} />
                </div>
                <div className='ml-4 flex-grow leading-6'>
                    <div className='flex gap-3 text-sm space-x-2'>
                        <div> {getDayOfWeek(event.dates.start.localDate)}</div>
                        <li> {convertTimeTo12HourFormat(event.dates.start.localTime)}</li>
                    </div>
                    <div className='font-medium'> {event.name}</div>
                    <div className='flex gap-3 space-x-2'>
                        <div className='font-normal'> {event._embedded.venues[0].city.name}</div>
                        <li className='font-normal'> {event._embedded.venues[0].name}</li>
                    </div>
                    <div className='flex justify-end'>
                        <a target="_blank" rel="noopener noreferrer" className='bg-blue px-4 py-2 text-white mt-3' href={event.url}>Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event