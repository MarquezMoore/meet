import React from 'react';
import { InfoAlert } from '../alerts/alert';

import './citySearch.css';
class CitySearch extends React.Component{
  constructor(props){
    super();

    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: undefined,
      infoText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleBlur = e => {
    setTimeout( ()=> {
      this.setState({
        showSuggestions: false
      })
    }, 300)
  }

  handleClick = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    })

    this.props.updateEvents(suggestion);
    this.setState({ showSuggestions: false });
  }

  handleChange = (e) => {
    const value = e.target.value;
    const suggestions = this.props.locations.filter( location => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    })

    
    suggestions.length
      ? this.setState({
          query: e.target.value,
          suggestions,
          infoText: ''
      })
      : this.setState({
          query: e.target.value,
          suggestions,
          infoText: 'We can not find the city you are looking for. Please try another city',
      })

    
  }
  
  render(){
    return(
      <div className="CitySearch">
        <InfoAlert className="info" text={this.state.infoText} />
        <input 
          placeholder='Filter by city'
          className="city-search py-3" 
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          onFocus={() => {this.setState({ showSuggestions: true })}}
          onBlur={this.handleBlur}
          />
        <ul 
          className="suggestions w-100 flex-column align-items-center"
          style={
            this.state.showSuggestions ? {display: 'flex'} : {display: 'none'} 
          }
        >

          {
            this.state.suggestions.map( s => (
              <li onClick={() => this.handleClick(s)} key={s} >{s}</li>
            ))
          }

          <li key='all' onClick={() => this.handleClick("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    )
  };
}

export default CitySearch;
