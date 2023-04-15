import React from 'react';
import { Link } from 'react-router-dom';

const RoomsList = ({ rooms }) => {
  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomsList;

