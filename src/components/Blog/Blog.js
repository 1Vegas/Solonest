import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

export default class Blog extends Component {

    state = {
        data: null
      };
    
      componentDidMount() {
        //   Call our fetch function below once the component mounts
        this.callBackendAPI()
          .then(res => this.setState({ data: res.express }))
          .catch(err => console.log(err));
      }
        // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    //   callBackendAPI = async () => {
    //     const response = await fetch('/express_backend');
    //     const body = await response.json()

    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json()
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };
    
      render() {
        return (
          <div className="Blog container">
            {/* <header className="App-header">              
              <h1 className="App-title">Welcome to React</h1>
            </header> */}
             {/* Render the newly fetched data inside of this.state.data  */}
             <iframe src="http://show.solonest.moscow" width="1140" height="550" align="center"></iframe>
             <br />
             <a href="http://solonest.blogspot.com" class="btn btn-secondary butt" target="_blank" rel="noopener noreferrer">Старый Блог</a>             
             <p className="Blog-intro">{this.state.data}</p>
          </div>
        );
      }
    }

//     render() {
      
//     return (
//       <div class="card text-center container">
//           <div class="card-header">
//               <h3>Контактная информация</h3>
//           </div>
//           <div class="card-body">
//               <h5 class="card-title">Алексей Нестеров</h5>
//               <p class="card-text">+7-916-615-8606 (г. Москва): голосом, Whatsup, Viber</p>
//               <a href="https://www.facebook.com/profile.php?id=100005488695792" class="btn btn-success" target="_blank">Facebook</a>
//               <a href="https://www.facebook.com/andrey.solomennikov3" class="btn btn-info" target="_blank">Facebook(Андрей)</a>
//               <a href="https://www.facebook.com/koyote.solonest" class="btn btn-primary" target="_blank">Facebook(Алексей)</a>
//               <a href="https://www.youtube.com/user/koyotesolonest" class="btn btn-danger" target="_blank">YouTube</a>
//           </div>
//           <div class="card-footer text-muted">
//               Ваш контакт очень важен для нас
//           </div>
//           </div>       
//     );
//   }
//}