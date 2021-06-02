// src/EventList.js

import React from 'react';

import Event from '../event/event';

/*
  events props will be passed from ?
*/
const EventList = ({ events }) =>  {
  
  return (
    <ul className="EventList">
      {events.map( e => 
          <li key={e.id}>
            <Event event={e}/>
          </li>
      )}
    </ul>
  );
}

export default EventList;