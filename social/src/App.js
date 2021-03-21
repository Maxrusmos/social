import React from 'react';
import Layout from './components/Layout/Layout';

const App = (props) => {
  return (
    <>
      <Layout 
        store={props.store}
        postsData={props.appState.profilePage.postsData} 
        newPostText={props.appState.profilePage.newPostText} 
        newMessageText={props.appState.dialogPage.newMessageText}
        dialogsData={props.appState.dialogPage.dialogsData} 
        messagesData={props.appState.dialogPage.messagesData}
        sideBarData={props.appState.sideBar.sideBarData}
        dispatch={props.dispatch}
        profilePhotoUrl={props.appState.profilePage.profilePhotoUrl}>
      </Layout>
    </>
  ) 
}

export default App;