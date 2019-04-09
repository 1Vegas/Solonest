import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Navbar1 from './components/Navbar1/Navbar1'
import Header from './components/Header/Header'
import ModalMain from './components/ModalMain/ModalMain'
import SectionMain1 from './components/SectionMain1/SectionMain1'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Contacts from './components/Contacts/Contacts'
import Performance from './components/Performance/Performance'
import Blog from './components/Blog/Blog'
import routes from './routes'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
}

  render() {
    return (
      <div className="App">
    {this.state.user ? (<Home />) : (<Login />)}
        {/* <Header /> */}
        <Navbar1 />
        {/* <ModalMain />         */}
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}                            
        </Switch>                   
        <SectionMain1 />
        <Footer />
      </div>
    );
  }
}

export default App;
