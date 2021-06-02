import React from 'react';
import './App.css';

import EventList from './components/eventList/eventList';
import CitySearch from './components/citySearch/citySearch';
import NumOfEvents from './components/numOfEvents/numOfEvents';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumOfEvents />
    </div>
  );
}

export default App;
