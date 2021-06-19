import React from 'react';

import './navbar.css';
import meet from '../../assets/meet.svg'

export default class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar d-flex justify-content-center">
        <img width={100} src={meet} alt="App-logo"/>
      </div>
    )
  }
}