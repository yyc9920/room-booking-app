import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoomsList from './components/RoomsList';
import Room from './components/Room';

const rooms = [
  {
    id: 1,
    name: 'Room 1',
    timeSlots: [
      { time: '9:00 - 9:30', booked: false },
      { time: '9:30 - 10:00', booked: true },
      // more time slots
    ],
  },
  {
    id: 2,
    name: 'Room 2',
    timeSlots: [
      { time: '9:00 - 9:30', booked: false },
      { time: '9:30 - 10:00', booked: false },
      // more time slots
    ],
  },
  // more rooms
];

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" render={() => <RoomsList rooms={rooms} />} />
          <Route
            path="/room/:roomId"
            render={(routeProps) => <Room {...routeProps} rooms={rooms} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

