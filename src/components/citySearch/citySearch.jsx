import React from 'react'

class CitySearch extends React.Component{
  constructor(props){
    super();

    this.state = {
      query: '',
      suggestions: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(suggestion) {
    this.setState({
      query: suggestion
    })
  }

  handleChange(e) {
    const value = e.target.value;
    const suggestions = this.props.locations.filter( location => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    })
    this.setState({
      query: e.target.value,
      suggestions
    })
  }
  
  render(){
    return(
      <div className="CitySearch">
      <input 
        className="city-search" 
        type="text"
        value={this.state.query}
        onChange={this.handleChange}/>
      <ul className="suggestions">
        {this.state.suggestions.map( s => (
          <li onClick={() => this.handleClick(s)} key={s} >{s}</li>
        ))}
        <li key='all'>
          <b>See all cities</b>
        </li>
      </ul>
    </div>
    )
  };
}

export default CitySearch;