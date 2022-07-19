import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../src/assets/icons/clock.svg'
import marker from '../../src/assets/icons/marker.svg'
import phone from '../../src/assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white px-12 text-white ' >
            <InfoCard cardTitle='Opening Hours' img={clock} bgClass="bg-accent"></InfoCard>
            <InfoCard cardTitle='Our Location' img={marker} bgClass="bg-primary" ></InfoCard>
            <InfoCard cardTitle='contact Us' img={phone} bgClass="bg-accent"></InfoCard>
        </div>
    );
};

export default Info;