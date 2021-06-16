// src/EventList.js

import React from 'react';

import Event from '../event/event';

import './eventList.css'

/*
  events props will be passed from ?
*/
const EventList = ({ events }) =>  {
  
  return (
    <ul className="EventList">
      {events.map( (e, i) => 
          <li key={i}>
            <Event event={e}/>
          </li>
      )}
    </ul>
  );
}

export default EventList;