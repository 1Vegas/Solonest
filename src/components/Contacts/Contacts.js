import React, { Component } from 'react';
import './Contacts.css';

export default class Contacts extends Component {
      

      render() {
        
      return (
        <div class="card text-center container">
            <div class="card-header">
                <h3>Контактная информация</h3>
            </div>
            <div class="card-body">
                <h5 class="card-title">Алексей Нестеров</h5>
                <p class="card-text">+7-916-615-8606 (г. Москва): голосом, Whatsup, Viber</p>
                <a href="https://www.facebook.com/profile.php?id=100005488695792" class="btn btn-success" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.facebook.com/andrey.solomennikov3" class="btn btn-info" target="_blank" rel="noopener noreferrer">Facebook(Андрей)</a>
                <a href="https://www.facebook.com/koyote.solonest" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Facebook(Алексей)</a>
                <a href="https://www.youtube.com/user/koyotesolonest" class="btn btn-danger" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
            <div class="card-footer text-muted">
                Ваш контакт очень важен для нас
            </div>
            </div>       
      );
    }
  }