import React from 'react';
import Layout from './components/Layout/Layout';

const App = (props) => {
  console.log(props);
  return (
    <>
      <Layout 
        postsData={props.appState.profilePage.postsData} 
        dialogsData={props.appState.dialogPage.dialogsData} 
        messagesData={props.appState.dialogPage.messagesData}
        sideBarData={props.appState.sideBar.sideBarData}>
      </Layout>
    </>
  ) 
}

export default App;