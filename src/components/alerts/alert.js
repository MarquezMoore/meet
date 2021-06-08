import React from 'react';

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
        <p style={this.getStyle()}>{this.props.text}</p>
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
    this.color = 'blue';
    this.classNames = 'Alert info';
  }
}
export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.classNames = 'Alert error';
  }
}