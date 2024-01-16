import React, { useEffect, useState } from 'react';

const LiveMonitor = ({ socket }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.on('userEvent', (data) => {
      setEvents([...events, data]);
    });

    return () => {
      socket.off('userEvent');
    };
  }, [socket, events]);

  return (
    <div>
      <h2 className='liveMonitor'>Live Monitor</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMonitor;