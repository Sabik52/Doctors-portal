import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div className= {`card lg:card-side shadow-xl ${bgClass}`}>
  <figure>
    <img className='ml-4' src={img} alt="Album"/>

    </figure>
  <div class="card-body ">
    <h2 class="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
    );
};

export default InfoCard;