import React, { Component } from 'react';
import './CDs.css';
import cd01 from './../../img/cd/cd01.jpg';
import cd02 from './../../img/cd/cd02.jpg';
import cd03 from './../../img/cd/cd03.jpg';

export default class CDs extends Component {   

    render() {
      return (
        <div className="CDs">
          	
              <div className="container gallery-container">

<h1>Альбом "Сестра Луна" 2008 г.</h1>

<p className="page-description text-center">Алексей Нестеров/Андрей Соломенников</p>

<div className="tz-gallery">

    <div className="row">
        <div className="col-sm-6 col-md-4">
            <a className="lightbox" >
                <img src={cd01} alt="Disc"/>
            </a>
        </div>
        <div className="col-sm-6 col-md-4">
            <a className="lightbox" >
                <img src={cd02} alt="Front"/>
            </a>
        </div>
        <div className="col-sm-12 col-md-4">
            <a className="lightbox" >
                <img src={cd03} alt="Back"/>
            </a>
        </div>
        
    </div>

</div>

</div>

        </div>
      );
    }
  } 