import React from 'react';
import EventList from './components/eventList/eventList';
import CitySearch from './components/citySearch/citySearch';
import NumOfEvents from './components/numOfEvents/numOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import Navbar from './components/navbar/navbar'

import { Container, Row, Col } from 'react-bootstrap';


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
      showWelcomeScreen: undefined,
      cityFilter: null
    }

    this.updateEvents = this.updateEvents.bind(this);
    this.getData = this.getData.bind(this)
  }

  async componentDidMount() {
    this.mounted = true;
    

    // Function below is used to test on local machine 

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    

    // const access_token = localStorage.getItem('access_token');
    // const isTokenValid = (await checkToken(access_token)).error ? false : true;
    // const searchParams = new URLSearchParams(window.location.search);
    // const code = searchParams.get("code");
    // // If code in url or access_token is valid dont show welcome screen else show welcome screen for authorization
    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // // If the code or are access_token are valid, get events
    // if ((code || isTokenValid) && this.mounted) {
    //   getEvents().then((events) => {
    //     if (this.mounted) {
    //       this.setState({ events, locations: extractLocations(events) });
    //     }
    //   });
    // }
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
    console.log(data)
    return data;
  };

  render () {
    const { networkStatus, locations, events, showWelcomeScreen } = this.state;
    // if (this.state.showWelcomeScreen === undefined ) return  <div className="App" />

    return (
      <div className="App" >
        {/* <WarningAlert
          className="networkStatus" 
          text={networkStatus === 'Offline' ? 'Offline' : ''}
        /> */}
        <Navbar />
        <Container fluid className="">
          <Row>
            <Col md={5} className="d-flex bg-dark justify-content-center align-items-center">
              <ScatterChart
                width={400}
                height={400}
                margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis type="number" dataKey="number" name="number of events" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </Col>
            <Col md={7}>
              <CitySearch ocations={locations} updateEvents={this.updateEvents}/>
              <NumOfEvents updateEvents={this.updateEvents}/>
              <EventList events = {events} />
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
