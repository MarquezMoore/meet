import React from 'react';
import EventList from './components/eventList/eventList';
import CitySearch from './components/citySearch/citySearch';
import NumOfEvents from './components/numOfEvents/numOfEvents';
import { extractLocations, getEvents } from './api' 


import './App.css';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      events: [],
      locations: [],
      numOfEvents: 32
    }

    this.updateEvents = this.updateEvents.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      localStorage.setItem('events', JSON.stringify(events));
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

  updateEvents = (selectedCity, num ) => {
    const events = JSON.parse(localStorage.getItem('events'));
    if(selectedCity){
      const locationEvents = (selectedCity === 'all')
      ? events 
      : events.filter((event) => event.location === selectedCity);
  
      this.setState({
        events: locationEvents
      });
    }

    if(num){
      this.setState({
        numOfEvents: num,
        events: events.slice(0, num)
      });
    }
  } 

  render () {
    return (
      <div className="App m-4">
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
        />
        <NumOfEvents 
          updateEvents={this.updateEvents}
        />
        <EventList 
          events = {this.state.events} 
        />
      </div>
    );
  };
}

export default App;
