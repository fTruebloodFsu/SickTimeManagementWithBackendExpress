import React from 'react';
import Clock from 'react-live-clock';

function Time(target){

  return(
    <div className='Time'>
      <Clock format={'dd, MMMM Do YYYY'} ticking={true} timezone={'US/Pacific'} />
    </div>
  );
}

export default Time;

