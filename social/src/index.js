import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: "Привет!", likesCount: 12}, 
  {id: 3, message: "Как дела?", likesCount: 12}, 
  {id: 2, message: "Чем занят?", likesCount: 12}, 
  {id: 4, message: "Сдал лабу?", likesCount: 12}, 
  {id: 5, message: "Смотри, мой первый пост!", likesCount: 12}
];

let dialogsData = [
  {id: 1, name: "Адиянов Роман"}, 
  {id: 2, name: "Якупова Айгуль"}, 
  {id: 3, name: "Жилин Даниил"}, 
  {id: 4, name: "Стрижаков Андрей"}, 
  {id: 5, name: "Лангавый Григорий"}
];

let messagesData = [
  {id: 1, message: "Привет!"}, 
  {id: 3, message: "Как дела?"}, 
  {id: 2, message: "Чем занят?"}, 
  {id: 4, message: "Сдал лабу?"}, 
  {id: 5, message: "Гулять пойдешь?"}
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();