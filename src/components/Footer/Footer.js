import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
      return (        
       	  <footer> 
             <div className="footer-blocks container">
                <div className="first">
                  <p>Все права защищены 2019 г. РАО свид. № 7955, но для жителей СССР всё бесплатно. In God we trust since 1990</p>
                </div>
                <div className="second">
                    <a href="https://www.facebook.com/profile.php?id=100005488695792" target="_blank"  rel="noopener noreferrer">
                        <div className="socicon"><i className="fab fa-facebook-f"></i></div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCLe9c6D1fvldnS_0tFDMlbA" target="_blank"  rel="noopener noreferrer">
                        <div className="socicon"><i className="fab fa-youtube"></i></div>
                    </a>        
                </div>
            </div>
            
          </footer>
        
      );
    }
  } 