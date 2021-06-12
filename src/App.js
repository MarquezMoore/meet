import React from 'react';
import EventList from './components/eventList/eventList';
import CitySearch from './components/citySearch/citySearch';
import NumOfEvents from './components/numOfEvents/numOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';


import './App.css';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WarningAlert } from './components/alerts/alert'
import WelcomeScreen from './components/welcomeScreen/welcomeScreen';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      events: [],
      locations: [],
      numOfEvents: 32,
      networkStatus: navigator.onLine ? 'Online' : 'Offline',
      showWelcomeScreen: undefined
    }

    this.updateEvents = this.updateEvents.bind(this);
  }

  async componentDidMount() {
    this.mounted = true;
    /* 

    Used to test on local machine

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    */

    const access_token = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(access_token)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    // If code in url or access_token is valid dont show welcome screen else show welcome screen for authorization
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // If the code or are access_token are valid, get events
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (selectedCity, num ) => {
    getEvents()
      .then( events => {
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
      })
      .catch( e => {
        console.log(e);
      })
  } 

  render () {
    if (this.state.showWelcomeScreen === undefined ) return  <div className="App" />

    return (
      <div className="App">
        <WarningAlert
          className="networkStatus" 
          text={this.state.networkStatus === 'Offline' ? 'Offline' : ''}
        />
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
        {/* Start of Welcome */}
        <WelcomeScreen 
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} 
        />
        {/* End of welcome */}
      </div>
    );
  };
}

export default App;
