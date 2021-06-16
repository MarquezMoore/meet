import React from 'react';

import './navbar.css';
import meet from '../../assets/meet.png'

export default class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar d-flex justify-content-center">
        <img src={require('../../assets/meet.png')} alt=""/>
      </div>
    )
  }
}