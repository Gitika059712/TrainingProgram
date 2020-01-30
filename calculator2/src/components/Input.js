import React, { Component } from 'react'
import './Input.css';

export default class Input extends Component {
  render() {
    return (
      
      <div id="inputdemo" className="input">
        {this.props.children}
      
      </div>
    )
  }
}
