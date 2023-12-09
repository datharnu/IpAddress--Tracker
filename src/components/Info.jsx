import React from 'react';

export default function Info({ data }) {
    return (
        <section className="" >
            <div className="map-data grid md:grid-cols-2 md:bottom-20 lg:bottom-32 lg:grid-cols-4 gap-8 text-center p-8 text-xs  font-bold text-darkGrey bg-white mx-7 rounded-xl relative tracking-wider" style={{ zIndex: 10000 }
            }>
                <div className='lg:border-r lg:border-slate-600'>
                    <p>IP ADDRESS</p>
                    <span className='text-vDarkGrey text-xl'>{data.ip}</span>
                </div>

                <div className='lg:border-r lg:border-slate-600'>
                    <p>LOCATION</p>
                    <span className='text-vDarkGrey text-xl'>{data.location?.region}  </span>
                    <span className='text-vDarkGrey text-xl'>{data.location?.country} </span>
                    <span className='text-vDarkGrey text-xl'>{data.location?.city}</span>
                </div>
                <div className='lg:border-r lg:border-slate-600'>                <p>TIMEZONE</p>
                    <span className='text-vDarkGrey text-xl'>UTC{data.location?.timezone}</span></div>
                <div>
                    <p>ISP</p>
                    <span className='text-vDarkGrey text-xl'>{data.isp}</span>

                </div>
            </ div>

        </section >

    );
}

