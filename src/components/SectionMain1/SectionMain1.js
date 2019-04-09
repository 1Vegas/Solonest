import React, { Component } from 'react';
import './SectionMain1.css';

export default class SectionMain1 extends Component {
    render() {
      return (
        <div className="SectionMain1">
            <section className="card container">
                <div className="card-body">
                    <blockquote className="blockquote">
                        <p>Исполняем музыку разных стилей от «gospel» до альтернативного рока, 
                        рок-н-ролла: как собственного сочинения так и популярных исполнителей, 
                        никогда не останавливаясь на чем-то одном. Параллельно с исполнением песен
                        разных авторов, рождаются свои собственные песни. Все они родились в соавторстве, в результате долгих поисков и размышлений. </p>          
                        <div className="promo">
                            <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/Q8G7TktJcMQ" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>                
                     <br/>   
                    </blockquote>
                </div>
            </section>
        </div>
        
      );
    }
  }