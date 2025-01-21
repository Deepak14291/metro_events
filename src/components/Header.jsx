import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full fixed flex h-20 bg-blue text-white justify-center items-center'>
            <div className='text-xl font-medium ml-4'>
                <Link to="/">Metro Events</Link>
            </div>
            <div className='flex flex-grow justify-center tracking-wide font-medium h-full'>
                <Link className='hover:bg-[#1035bb] h-full px-5 content-center' to="/">City</Link >
                <Link className='hover:bg-[#1035bb] h-full px-5 content-center' to="/artist">Artist</Link >
                {/* <Link className='hover:bg-[#1035bb] h-full px-5 content-center' to="/country">Country</Link > */}
            </div>
        </div>
    )
}

export default Header