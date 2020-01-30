import React, { Component } from 'react'
import './ClearBtn.css';
export default class ClearBtn extends Component {
  render() {
    return (
      <div className="clrbtn" onClick={()=>this.props.handleClick()}>
      {this.props.children}
    </div>
    )
  }
}
