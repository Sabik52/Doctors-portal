import React from 'react';
import Service from './Service';
import fluoride from '../../src/assets/images/fluoride.png'
import cavity from '../../src/assets/images/cavity.png'
import whitening from '../../src/assets/images/whitening.png'


const Services = () => {
    const services = [
        {
            _id: 1,
            name : 'Fluoride Treatment',
            description : '',
            img : fluoride
        },
        {
            _id: 2,
            name : 'Cavity Filling',
            description : '',
            img : cavity
        },
        {
            _id: 3,
            name : 'Teeth Whitening',
            description : '',
            img : whitening
        }
    ];
    return (
        <div className='py-28  bg-white'>
           <div className='text-center text-xl '> 
           <h3 className='text-accent text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl text-black'>Services We Provide</h2>
           </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12'>
        {
        services.map(service => <Service
         key={service._id}
         service={service}
         ></Service>)
        }
      </div>
        </div>
    );
};

export default Services;