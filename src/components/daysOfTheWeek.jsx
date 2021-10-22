import React, { useState } from 'react';

const DaysOfTheWeek = ({ availability, setTimeSlots }) => {
  const [selected, setSelected] = useState(null);

  let curr = new Date();
  let week = [];

  const dateAbb = (number) => {
    if (number === 1) {
      return 'st';
    } else if (number === 2) {
      return 'nd';
    } else if (number === 3) {
      return 'rd';
    } else {
      return 'th';
    }
  };

  const dayNames = (name) => {
    if (name === 1) {
      return 'Mon';
    } else if (name === 2) {
      return 'Tue';
    } else if (name === 3) {
      return 'Wed';
    } else if (name === 4) {
      return 'Thu';
    } else if (name === 5) {
      return 'Fri';
    } else if (name === 6) {
      return 'Sat';
    } else if (name === 7) {
      return 'Sun';
    }
  };

  const avilable = (day) => {
    if (availability.data) {
      let dates = availability.data.find(
        (avilableDay) => avilableDay.date.slice(0, 2) === day.slice(8, 10)
      );
      return dates;
    }
  };

  const handleClickDay = (day) => {
    let times = availability.data.filter(
      (slots) => slots.date.slice(0, 2) === day.slice(8, 10)
    );
    setTimeSlots(times[0].availableSlots);
  };

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(
      <div
        className={`each-day  ${
          avilable(day) ? 'available' : 'not-available'
        } ${selected === day ? 'selected' : ''}`}
        onClick={
          avilable(day)
            ? () => {
                handleClickDay(day);
                setSelected(day);
              }
            : null
        }
      >
        <div>
          {day.slice(8, 10)}
          {dateAbb(Number(day.slice(9, 10)))}
        </div>
        <div>{dayNames(i)}</div>
      </div>
    );
  }

  return <div className='whole-week'>{week}</div>;
};

export default DaysOfTheWeek;
