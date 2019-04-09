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
          }, {
            id: 4,
            name: 'Блюз',
            link: <iframe width="560" height="315" src="https://www.youtube.com/embed/b9Gc4HAdLcE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            }, {
              id: 5,
              name: 'Моменты из жизни',
              link: <iframe width="560" height="315" src="https://www.youtube.com/embed/i_LKYZIDTdA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
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
              <button onClick = {this.changeCliphandle.bind(this,clips[3].link) } type="button" className="btn btn-warning">{clips[3].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[4].link) } type="button" className="btn btn-secondary">{clips[4].name}</button>               
              </div>
            </div>
          </div>
        </div>       
      );
    }
  }
  
  