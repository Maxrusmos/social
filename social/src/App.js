import React from 'react';
import Layout from './components/Layout/Layout';

const App = (props) => {
  return (
    <>
      <Layout 
        postsData={props.appState.profilePage.postsData} 
        newPostText={props.appState.profilePage.newPostText} 
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