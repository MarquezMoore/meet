// Node Modules
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Custom Components
import EventList from './components/eventList/eventList';
import CitySearch from './components/citySearch/citySearch';
import NumOfEvents from './components/numOfEvents/numOfEvents';
import WelcomeScreen from './components/welcomeScreen/welcomeScreen';
import Navbar from './components/navbar/navbar'
import EventGenre from './components/eventGenre/eventGerne';
import { WarningAlert } from './components/alerts/alert'

// Custom Stylesheets
import './App.css';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom API Methods
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      events: [],
      locations: [],
      numOfEvents: 32,
      networkStatus: navigator.onLine ? 'Online' : 'Offline',
      showWelcomeScreen: undefined,
      cityFilter: null
    }

    this.updateEvents = this.updateEvents.bind(this);
    this.getData = this.getData.bind(this)
  }

  async componentDidMount() {
    this.mounted = true;
    

    // Function below is used to test on local machine 

    // getEvents().then((events) => {
    //   if (this.mounted) {
    //     console.log(events.slice(0 ,this.state.numOfEvents))
    //     const e = events.slice(0 ,this.state.numOfEvents)
    //     this.setState({ events: e, locations: extractLocations(events) });
    //   }
    // });
    

    const access_token = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(access_token)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    // If code in url or access_token is valid dont show welcome screen else show welcome screen for authorization
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // If the code or are access_token are valid, get events
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        const limitedEvents = events.slice(0 ,this.state.numOfEvents);
        if (this.mounted) {
          this.setState({ events: limitedEvents, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (selectedCity, num ) => {
    // Update state based on pass parameters
   
   
    getEvents()
      .then( events => {
        if(selectedCity){
          this.setState({
            events: selectedCity === 'all' 
            ? events : events.filter((event) => event.location === selectedCity)
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
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map( location => {
      const number = events.filter( event => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render () {
    const { networkStatus, locations, events, showWelcomeScreen } = this.state;
    if (this.state.showWelcomeScreen === undefined ) return  <div className="App" />

    return (
      <div className="App" >
        <WarningAlert
          text={networkStatus === 'Offline' ? 'App is running offline: data may not be updated' : ''}
        />
        <Navbar />
        <Container fluid >
          <Row className="body">
            <Col md={5} className="charts-section ">
              <div className="data-vis-wrapper h-100">
                <EventGenre events={events} />
                {/* <ResponsiveContainer height={400} >
                  <ScatterChart
                    margin={{
                      top: 50, right: 40, bottom: 50, left: 0,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter data={this.getData()} fill="#e2d36b" />
                  </ScatterChart>
                </ResponsiveContainer> */}
              </div>
            </Col>
            <Col className="events-section px-5 h-100" md={7} >
              <CitySearch locations={locations} updateEvents={this.updateEvents}/>
              <NumOfEvents updateEvents={this.updateEvents}/>
              <div className="eventList-container h-75 overflow-scroll">
                <EventList events = {events} />
              </div>
            </Col>
          </Row>
        </Container>
    
        {/* Start of Welcome */}
        <WelcomeScreen 
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} 
        />
        {/* End of welcome */}
      </div>
    );
  };
}

export default App;
