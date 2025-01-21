import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import Event from '../components/Event'

const HomeScreen = () => {

    const [events, setEvents] = useState("");

    async function fetchApiDataHandler() {
        try {
            let apiKey = process.env.REACT_APP_EVENTS_API_KEY;
            // let url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${apiKey}`;
            let url = `https://app.ticketmaster.com/discovery/v2/events.json?city=glasgow&apikey=${apiKey}`;
            let response = await axios({
                url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                let eventList = [...response.data._embedded.events]

                // let eventNames = eventList.map((e) => e.name);
                setEvents(eventList);
                console.log(eventList);
                // console.log(eventNames);
                // console.log(response.status);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex flex-col h-screen'>
                <Header />
                <div className='flex-grow'>
                    <div className='gap-2 mt-6 flex items-baseline'>
                        <div className='grid grid-cols-12 w-full'>
                            <div className='col-start-4 col-end-10 col-span-6 space-x-4'>
                                <label htmlFor="city" className=''>Enter a city name </label>
                                <input type="text" id='city' className='' />
                                <button onClick={fetchApiDataHandler} className='bg-blue text-white px-4 py-2'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='grid grid-cols-12 '>
                            <div className='col-start-3 col-end-8 col-span-5 font-semibold text-xl'>
                                Events:
                            </div>
                        </div>
                        {events ? events.map((e) => (<Event event={e} key={e.id} />)) : ""}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomeScreen