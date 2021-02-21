import React from 'react';
import './dialogs.css';

const Dialogs = (props) => {
  return (
    <>
      <div className="main-dialogs-container">
        <div className="dialogs-switch">
          <h2>Select Chat</h2>
          <hr/>
          <div className="dialog-switch-item">
            Адиянов Роман
          </div>
          <div className="dialog-switch-item">
            Якупова Айгуль
          </div>
          <div className="dialog-switch-item">
            Жилин Даниил
          </div>
          <div className="dialog-switch-item">
            Стрижаков Андрей
          </div>
          <div className="dialog-switch-item">
            Лангавый Григорий
          </div>
        </div>
        <div className="selected-dialog">
          выбранный диалог
        </div>
      </div>
    </>
  )
}

export default Dialogs;