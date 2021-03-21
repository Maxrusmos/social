const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    {id: 1, message: "Привет!", likesCount: 12}, 
    {id: 3, message: "Как дела?", likesCount: 12}, 
    {id: 2, message: "Чем занят?", likesCount: 12}, 
    {id: 4, message: "Сдал лабу?", likesCount: 12}, 
    {id: 5, message: "Смотри, мой первый пост!", likesCount: 12},
  ],
  newPostText: '', 
  profilePhotoUrl: 'https://sun1-93.userapi.com/s/v1/if1/w6Khg45610v5XNTKOzzFOW9mnVMs7XPlhzkSOjhW8mD5F8Isoj8rUlg-kgw3M4BACAJnPeUa.jpg?size=200x0&quality=96&crop=195,1,1616,1616&ava=1',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0
      };
      if (state.newPostText) {
        state.postsData.unshift(newPost);
      }
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;