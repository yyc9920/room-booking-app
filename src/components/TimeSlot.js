import React from 'react';

const TimeSlot = ({ timeSlot }) => {
  const modernRed = '#FF3D57';
  const backgroundColor = timeSlot.booked ? modernRed : 'white';

  return (
    <div style={{ backgroundColor, padding: '10px', margin: '5px', borderRadius: '5px' }}>
      <p>{timeSlot.time}</p>
    </div>
  );
};

export default TimeSlot;

