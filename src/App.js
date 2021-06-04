import React from 'react';
import './App.css';

import EventList from './components/eventList/eventList';
import CitySearch from './components/citySearch/citySearch';
import NumOfEvents from './components/numOfEvents/numOfEvents';
import { extractLocations, getEvents } from './api' 

import './nprogress.css';
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      events: [],
      locations: []
    }

    this.updateEvents = this.updateEvents.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted) {
        this.setState({ 
          events, 
          locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = selectedCity => {

    getEvents().then((events) => {
      const locationEvents = (selectedCity === 'all') 
      ? events 
      : events.filter((event) => event.location === selectedCity);
      
      this.setState({
        events: locationEvents
      });
    });
  } 

  render () {
    return (
      <div className="App">
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
        />
        <NumOfEvents />
        <EventList 
          events={this.state.events} 
        />
      </div>
    );
  };
}

export default App;
