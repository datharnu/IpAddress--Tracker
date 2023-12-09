import React, { useState, useEffect } from 'react';
import Arrow from '../assets/images/icon-arrow.svg';
import Info from './Info';
import Map from './Map';
import CustomIcon from './icon';
import { MapContainer, TileLayer } from 'react-leaflet';


export default function Hero({ title }) {
    const [search, setSearch] = useState('');
    const [ipTracker, setIpTracker] = useState('');

    async function fetchIpTracker() {
        try {
            const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_7AZD01mzLDTj9vqikJlo66fQImzw2&ipAddress=${search}`);
            const data = await response.json();
            setIpTracker(data);
            // console.log(data);
        } catch (error) {
            console.error("Error fetching IP tracker data:", error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        fetchIpTracker();
    };

    useEffect(() => {
        // Initial IP tracking on component mount
        fetchIpTracker();
    }, []);

    return (
        <section className=' lg:bg-bgImgB w-full bg-contain  bg-no-repeat py-36 bg-bgImg'>
            <h1 className='text-white text-xl text-center -mt-32'>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className='justify-center my-5 flex md:pb-28 lg:pb-36'>
                    <div className='md:w-[30rem] lg:w-[40rem] w-80'>
                        <input
                            className=' py-3 rounded-l-xl w-full pl-10 '
                            type='text'
                            name='search'
                            id='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search for any IP address or domain'
                        />
                    </div>
                    <div className='-mt-[1px] '>
                        <button type="submit">
                            <img src={Arrow} alt="Submit" className='bg-black py-[18px] px-5 rounded-r-xl ' />
                        </button>
                    </div>
                </div>
            </form>

            <Info data={ipTracker} />
            <div className='-mt-[202px]'>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}   >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Map mapImg='-mt-[202px]' mapData={ipTracker} />
                </MapContainer>


            </div>


        </section >
    );
}
