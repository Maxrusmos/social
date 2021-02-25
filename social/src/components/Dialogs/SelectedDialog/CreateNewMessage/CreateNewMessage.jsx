import React from "react";
import "./createNewMessage.css";
import attachMessage from "./../../../../res/attachMessage.png";
import sendMessage from "./../../../../res/sendMessage.png";
import sendVoice from "./../../../../res/sendVoice.png";

const CreateNewMessage = () => {
  let newMessageElement = React.createRef();

  let sendMessageButtonClick = () => {
    let text = newMessageElement.current.textContent;
    alert(text);
  };

  return (
    <>
      <div className="">
        <hr />
        <div className="input-newMessage-block">
          <img
            className="attach-file-newMessage-img"
            src={attachMessage}
            alt="Прикрепить файл"
          />
          <div
            ref={newMessageElement}
            className="createNewMessage-divInput"
            data-text="Напишите сообщение..."
            contentEditable="true"
          ></div>
          <img
            className="sendVoice"
            src={sendVoice}
            alt="отправить голосовое сообщение"
          />
          <img
            className="sendMessage"
            src={sendMessage}
            alt="отправить сообщение"
            onClick={sendMessageButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default CreateNewMessage;
