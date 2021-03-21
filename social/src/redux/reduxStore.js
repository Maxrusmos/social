import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  sideBar: sideBarReducer
});

let store = createStore(reducers);

export default store;