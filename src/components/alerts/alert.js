import React from 'react';

import './alert.css';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.classNames = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  getClassNames = () => {
    return this.classNames;
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <span style={this.getStyle()}>{this.props.text}</span>
      </div>
    );
  }
}
/*
  Sub-classes
*/ 
export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#31708f';
    this.classNames = 'Alert info';
  }
}
export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#D8000C';
    this.classNames = 'Alert error';
  }
}
export class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#9F6000';
    this.classNames = 'Alert warning bg-dark text-center bg-gradient';
    // Wrapper should be #FEEFB3
  }
}