import React, { Component } from 'react';
import './Header.css';
import logo from './../../img/logo.jpg';

export default class Header extends Component {
    render() {
      return (
        <div className="Header">
        <header className="container addon">    
          <img src={logo} alt="logo"/>
          {/* <form className="edit">
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" required/>
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" required/>
            <input type="submit" className="fadeIn fourth" value="Вход"/>
          </form>   */}
	      </header>	
        </div>
      );
    }
  }  