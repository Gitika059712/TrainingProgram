import React, { Component } from 'react'
import AppHeader from './AppHeader'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userInfo:[],
      
  }
}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json()
    .then((data)=>{
      this.setState({userInfo:data})
    })
    .catch())
  }

  render() {
  
    return (
      <div>
        <AppHeader userinfo = {this.state.userInfo}></AppHeader>
       </div>
    )
  }
}
