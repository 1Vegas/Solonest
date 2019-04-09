import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire';
import logo from './../../img/logo.jpg';
import './Home.css';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
}


  logout() {
      fire.auth().signOut();
  }

  render() {
    return (
        <div>
          <header className="container addon"> 
        <img src={logo} alt="logo"/>
        <div className="edit">            
            <button onClick={this.logout}>Logout</button>
            </div>
            </header>	
        </div>
    );

  }

}

  
  