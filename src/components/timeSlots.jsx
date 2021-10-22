import React from 'react';

const TimeSlots = ({ timeSlots }) => {
  return (
    <>
      <h1>Time slots </h1>
      <div className='timeslots'>
        {timeSlots.map((time, index) => {
          return (
            <p className='times'>
              <span>Time slot {index + 1}: </span>
              {time.startTime}-{time.endTime}{' '}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default TimeSlots;
