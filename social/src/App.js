import React from 'react';
import Layout from './components/Layout/Layout';
import { addPost } from './redux/state';

const App = (props) => {
  return (
    <>
      <Layout 
        postsData={props.appState.profilePage.postsData} 
        dialogsData={props.appState.dialogPage.dialogsData} 
        messagesData={props.appState.dialogPage.messagesData}
        sideBarData={props.appState.sideBar.sideBarData}
        addPost={props.addPost}>
      </Layout>
    </>
  ) 
}

export default App;