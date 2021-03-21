const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
    {id: 1, name: "Адиянов Роман", url: "https://sun1-21.userapi.com/s/v1/if1/xHIIt8A2-ZnD5lhKD6xnK5dkC1_RUqb4DFVuSLFj-Z58ibqdzK8wZYwUeCqziwh4nLOCY7WG.jpg?size=200x0&quality=96&crop=1063,0,1247,1707&ava=1"}, 
    {id: 2, name: "Жилин Даниил", url: "https://sun1-89.userapi.com/s/v1/ig2/9D2NYfY0_LAukzd6gsxgUXdA8fMJbs9cWn5LneIxN-fJIGqj-Rrgbh9icTmqPb0JDbMRDq-U5cTVqlMlqhFlXlHr.jpg?size=200x0&quality=96&crop=369,64,691,691&ava=1"},
    {id: 3, name: "Белоусова Анна", url: "https://sun1-47.userapi.com/s/v1/if1/OWgQQ5SjJkNp_O-ZmJOUfq0GLgT3MihZkrrN0Drycw9CJHGMwWlKgYofDzYbEcXgPa39VZYx.jpg?size=200x0&quality=96&crop=0,0,960,1280&ava=1"}, 
    {id: 4, name: "Куварина Мария", url: "https://sun1-30.userapi.com/s/v1/ig2/db9iDZrlcFi1ujGBy-CDL2To1OaFDipod8fa67G1alhvI6xA3u_hQhx9IyjqLqv0VF7kcl0B8EAzZi_Sb1jx7vsx.jpg?size=200x0&quality=96&crop=0,269,1620,1620&ava=1"}, 
    {id: 5, name: "Стрижаков Андрей", url: "https://sun1-19.userapi.com/s/v1/if1/-gcV6Kuba5ho2vJoySVYOgu9aOLMxYMomFEDE8tDNjvbJqcmwXc6yjuXQFfOCAPduJGsYp11.jpg?size=200x0&quality=96&crop=261,0,1088,1088&ava=1"}, 
    {id: 6, name: "Лангавый Григорий", url: "https://sun1-88.userapi.com/s/v1/ig2/ytLOXDUFBjHfXXz8FDE6Qt6aVSFRoa-vvdBsDgP6SON7w9twjucBRubzivLWiKkBpelUYMNnN-bTx4I_fZdJEHQl.jpg?size=200x0&quality=96&crop=0,172,1620,1620&ava=1"}
  ],
  messagesData: [
    {id: 1, message: "Привет!"}, 
    {id: 2, message: "Как дела?"}, 
    {id: 3, message: "Чем занят?"}, 
    {id: 4, message: "Сдал лабу?"}, 
    {id: 5, message: "Гулять пойдешь?"},
    {id: 6, message: "Привет!"}, 
    {id: 7, message: "Как дела?"}, 
    {id: 8, message: "Чем занят?"}, 
    {id: 9, message: "Сдал лабу?"}, 
    {id: 10, message: "Гулять пойдешь?"}
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageTextBody;
      return state;
    case SEND_MESSAGE: 
      if (state.newMessageText) {
        state.messagesData.push({
          id: 1,
          message: state.newMessageText,
        });
      }
      state.newMessageText = '';
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (messageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageTextBody: messageText });

export default dialogsReducer;