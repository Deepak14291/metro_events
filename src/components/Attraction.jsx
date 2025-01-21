import React from 'react'

const Attraction = ({ attraction }) => {
    return (
        <div className='grid grid-cols-12 mb-10'>
            <div className='col-start-3 col-end-9 col-span-6 mt-3 p-8 flex flex-row gap-2 border hover:bg-slate-300 shadow-md '>
                <div className='ml-2 '>
                    <img src={attraction.images[4].url} alt="event" width={200} height={115} />
                </div>
                <div className='ml-6 flex flex-col flex-grow'>
                    <div className='font-bold text-lg'>
                        {attraction.name}
                    </div>
                    <div className='flex justify-end'>
                        <a target="_blank" rel="noopener noreferrer" className='bg-blue px-4 py-2 text-white mt-3' href={attraction.url}>Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attraction