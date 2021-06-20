import React from 'react';

import './navbar.css';
import meetSVG from '../../assets/meet.svg'
import meetPNG from '../../assets/meet.png'

export default class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar d-flex justify-content-center">
        <img width={100} src={meetPNG} alt="App-logo"/>
      </div>
    )
  }
}