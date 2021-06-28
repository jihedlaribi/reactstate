import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Profile from './Components/Profile';
import Compteur from './Components/Compteur'


import './App.css';
class App extends Component {
  state={
    show:false,
  }
handleShow= () => {
  this.setState({
    show:!this.state.show
  })
}
  render() {
    return (
      <div className="header">
        {this.state.show ? <Compteur/>:<h1>show the profile </h1>}
         <Button onClick={this.handleShow}variant="primary">{this.state.show ? "hide" : "show"}</Button>
      </div>
    );
  }
}

export default App;