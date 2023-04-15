import React, { useState, useEffect } from 'react';
import TimeSlot from './TimeSlot';

const Room = ({ match, rooms }) => {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const selectedRoom = rooms.find((r) => r.id === parseInt(match.params.roomId));
    setRoom(selectedRoom);
  }, [match.params.roomId, rooms]);

  return room ? (
    <div>
      <h2>{room.name}</h2>
      <div>
        {room.timeSlots.map((timeSlot, index) => (
          <TimeSlot key={index} timeSlot={timeSlot} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Room;

