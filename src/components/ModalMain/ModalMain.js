import React, { Component } from 'react';
import './ModalMain.css';

class ModalMain extends Component {
    render() {
      return (
        <div className="ModalMain">
          <div id="overlay">
              <div className="popup">
                <div className="promo">
                  <iframe width="840" height="472" 
                  src="https://www.youtube.com/embed/Q8G7TktJcMQ?autoplay=0" 
                  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen></iframe>
                </div>
                <button className="close" id ="close" title="Закрыть"></button>
              </div>
          </div>

        </div>
      );
    }
  }
  
  export default ModalMain;