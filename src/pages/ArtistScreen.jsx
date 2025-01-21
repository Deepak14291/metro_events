import React from 'react'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import Attraction from '../components/Attraction'

const ArtistScreen = () => {
    const artistRef = useRef("Shirley");
    // const [city, setCity] = useState("");
    const [attractions, setAttractions] = useState("");

    async function fetchApiArtistDataHandler() {
        try {
            let apiKey = process.env.REACT_APP_EVENTS_API_KEY;
            let artistName = artistRef.current?.value;
            // https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=craig+ferguson&apikey=9DPRDD4vWY6hAf0o8GonFnEt2zYuDvHb
            let url = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${artistName}&apikey=${apiKey}`;
            let response = await axios({
                url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                let attractionList = [...response.data._embedded.attractions];
                setAttractions(attractionList);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex flex-col h-screen'>
                <Header />
                <div className='flex-grow mt-20'>
                    <div className='gap-2 mt-6 flex items-baseline'>
                        <div className='grid grid-cols-12 w-full'>
                            <div className='col-start-4 col-end-10 col-span-6 space-x-4'>
                                <label htmlFor="city" className=''>Enter artist name </label>
                                <input type="text" ref={artistRef} id='city' />
                                <button onClick={fetchApiArtistDataHandler} className='bg-blue text-white px-4 py-2'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='grid grid-cols-12 '>
                            <div className='col-start-3 col-end-8 col-span-5 font-semibold text-xl'>
                                Results:
                            </div>
                        </div>
                        {attractions ? attractions.map((e) => (<Attraction attraction={e} key={e.id} />)) : ""}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ArtistScreen