import React, { Component } from 'react';
import './Audio.css';

export default class Audio extends Component {
      state = {
        clips: [
          {
          id: 1,
          name: 'Пустыня',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/HJN04GI3zHU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          },{
          id: 2,
          name: 'Пустыня',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/HJN04GI3zHU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          }, {
          id: 3,
          name: 'Ну и что',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/aUgBkF10VMQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 4,
          name: 'Овцы',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/jYnTXPVM8TM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 5,
          name: 'Солдат',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/NY0TrxkZoWo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 6,
          name: 'За окном',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/fk-x9RTEIIc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 7,
          name: 'Июльский Дождь',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/0AVjo6oUqHk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 8,
          name: 'В поле',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/DY7CW497Lls" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 9,
          name: 'Блюз',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/pMmQb59yHPs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 10,
          name: 'Мир',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/f1dDDDnSnJo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 11,
          name: 'За окном (remix)',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/PRfUrPpK2r8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 12,
          name: 'Свет жизни',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/KLzQRlCRlCg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 13,
          name: 'Всё прекрасно',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/MxeaUNFehcg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
          }, {
          id: 14,
          name: 'Ты для меня',
          link: <iframe width="560" height="315" src="https://www.youtube.com/embed/nWtbgezY_Fs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            },
        ]
      }    
      
     
      changeCliphandle = (newState) => { 
        this.setState(this.state.clips[1].link=newState)
      }

      render() {
        const clips = this.state.clips
      return (
        <div className="Audio">
          <div className="border container">
            <div className="image-container">
              <div className="foriframe">
              {clips[1].link}
              </div>

              <div className="fortitles">
              <button onClick = {this.changeCliphandle.bind(this,clips[1].link) } type="button" className="btn btn-dark">{clips[1].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[2].link) } type="button" className="btn btn-dark">{clips[2].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[3].link) } type="button" className="btn btn-dark">{clips[3].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[4].link) } type="button" className="btn btn-dark">{clips[4].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[5].link) } type="button" className="btn btn-dark">{clips[5].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[6].link) } type="button" className="btn btn-dark">{clips[6].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[7].link) } type="button" className="btn btn-dark">{clips[7].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[8].link) } type="button" className="btn btn-dark">{clips[8].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[9].link) } type="button" className="btn btn-dark">{clips[9].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[10].link) } type="button" className="btn btn-dark">{clips[10].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[11].link) } type="button" className="btn btn-dark">{clips[11].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[12].link) } type="button" className="btn btn-dark">{clips[12].name}</button>
              <button onClick = {this.changeCliphandle.bind(this,clips[13].link) } type="button" className="btn btn-dark">{clips[13].name}</button>
                             
              </div>
            </div>
          </div>
        </div>       
      );
    }
  }
  
  