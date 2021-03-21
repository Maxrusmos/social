import React from "react";
import "./createNewMessage.css";
import attachMessage from "./../../../../res/attachMessage.png";
import sendMessage from "./../../../../res/sendMessage.png";
import sendVoice from "./../../../../res/sendVoice.png";

const CreateNewMessage = (props) => {
  let onSendMessageButtonClick = () => {
    props.sendMessage();
  };

  let onNewMessageChanged = (e) => {
    let newMessageTextBody = e.target.value;
    props.updateNewMessageText(newMessageTextBody);
  };

  return (
    <>
      <div>
        <hr />
        <div className="input-newMessage-block">
          <img
            className="attach-file-newMessage-img"
            src={attachMessage}
            alt="Прикрепить файл"
          />
          <textarea
            className="createNewMessage-textarea"
            onChange={onNewMessageChanged}
            placeholder="Напишите сообщение..."
            value={props.newMessageText}
          ></textarea>
          <img
            className="sendVoice"
            src={sendVoice}
            alt="отправить голосовое сообщение"
          />
          <img
            className="sendMessage"
            src={sendMessage}
            alt="отправить сообщение"
            onClick={onSendMessageButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default CreateNewMessage;
