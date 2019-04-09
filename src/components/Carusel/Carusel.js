import React, { Component } from 'react'
import './Carusel.css'
import sh01 from './../../img/sh01.jpg'
import _MG_5951 from './../../img/_MG_5951.jpg'
import sh02 from './../../img/sh02.jpg'
import sh03 from './../../img/sh03.jpg'
import sh04 from './../../img/sh04.jpg'

class Carusel extends Component {
    render() {
      return (
        <div className="Carusel">
         <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={sh01} className="d-block w-100" alt="sh01.jpg"/>
            </div>
            <div className="carousel-item">
              <img src={_MG_5951} className="d-block w-100" alt="_MG_5951.jpg"/>
            </div>
            <div className="carousel-item">
              <img src={sh02} className="d-block w-100" alt="sh02.jpg"/>
            </div>
            <div className="carousel-item">
                <img src={sh03} className="d-block w-100" alt="sh03.jpg"/>
            </div>
            <div className="carousel-item">
                <img src={sh04} className="d-block w-100" alt="sh04.jpg"/>
            </div>       

          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>
  </div>

        </div>
      );
    }
  }
  
  export default Carusel;