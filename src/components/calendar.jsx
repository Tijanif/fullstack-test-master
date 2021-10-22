import { useEffect, useState } from 'react';

import React from 'react';
import DaysOfTheWeek from './daysOfTheWeek';
import TimeSlots from './timeSlots';

const Calendar = () => {
  const [availability, setAvailability] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  console.log('Calendar', availability);
  useEffect(() => {
    fetch('http://localhost:8080/availability')
      .then((res) => res.json())
      .then((data) => {
        setAvailability({ data });
      });
  }, []);

  console.log('I am timeslots', timeSlots);
  return (
    <div>
      <h1>Your Timezone: GTM +00:00</h1>

      <div>
        <DaysOfTheWeek
          availability={availability}
          setTimeSlots={setTimeSlots}
        />

        <TimeSlots timeSlots={timeSlots} />
      </div>
    </div>
  );
};

export default Calendar;
