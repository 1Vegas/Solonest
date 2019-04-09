import React, { Component } from 'react';
import './Videoclips.css';

export default class Videoclips extends Component {
      state = {
        clips: [
          {
          id: 1,
          name: 'Всё прекрасно будет',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/MZi-ofnNl5E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 2,
          name: 'Ты для меня',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/ZFcSUruhJm0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          }, {
          id: 3,
          name: 'Всё прекрасно будет',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/MZi-ofnNl5E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }
        ]
      }    
      
     
      changeCliphandle = (newState) => { 
        this.setState(this.state.clips[0].link=newState)
      }

      render() {
        const clips = this.state.clips
      return (
        <div className="Videoclips">
          <div className="border container">
            <div className="image-container">
              <div className="foriframe">
              {clips[0].link}
              </div>

              <div className="fortitles">
              <button onClick={this.changeCliphandle.bind(this,clips[2].link) } type="button" className="btn btn-success">{clips[2].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[1].link) } type="button" className="btn btn-dark">{clips[1].name}</button>               
              </div>
            </div>
          </div>
        </div>       
      );
    }
  }
  
  