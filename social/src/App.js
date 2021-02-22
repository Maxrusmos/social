import React from 'react';
import Layout from './components/Layout/Layout';

const App = (props) => {
  console.log(props);
  return (
    <>
      <Layout postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messagesData}></Layout>
    </>
  ) 
}

export default App;