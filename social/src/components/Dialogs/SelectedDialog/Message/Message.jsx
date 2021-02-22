import React from 'react';
import './message.css';

const Message = (props) => {
  return (
    <>
      <div className="message">
        <div className="message-title">
          <img src="https://sun9-7.userapi.com/impf/c636923/v636923360/1e63d/6mN15QamFa4.jpg?size=2560x1619&quality=96&proxy=1&sign=721436cd203cbf7db59b3c06cca45761&type=album" alt="message photo"/>
          <h3>Воробьёв Максим</h3>
        </div>
        <hr/>
        <div className="message-text">{props.message}</div>
      </div>
    </>
  )
}

export default Message;