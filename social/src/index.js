import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          store={store}
          appState={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
});