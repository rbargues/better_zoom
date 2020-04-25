import React, { Component } from 'react';
import Username from "./components/Username.jsx";
import Users from "./components/Users.jsx";

const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    socket.on("update", users => {
      this.setState({users: users});
    });
  }
  render() {
    return (
      <div id="app">
        <Username />
        <Users users = {this.state.users}/>
      </div>
    )
  }
}

export default App;