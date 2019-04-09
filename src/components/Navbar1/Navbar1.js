import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './Navbar1.css';

export default class Navbar1 extends Component {
    render() {
      return (
        <div className="App">
         <nav>
	  <ul className="menu">		
      <li><Link to="/">Главная</Link></li>  
      {/* <li><a href="http://show.solonest.moscow" target="_blank" rel="noopener noreferrer">Блог</a></li> */}
      <li><Link to="/blog">Блог</Link></li>
      <li><Link to="/video">Видео</Link></li>
      <li><Link to="/audio">Аудио</Link></li>
      <li><Link to="/cds">CD's</Link></li>
      <li><Link to="/performance">Перформанс</Link></li>
      <li><Link to="/contacts">Контакты</Link></li>
	  </ul>    
  </nav>
        </div>
      );
    }
  }  
  
  