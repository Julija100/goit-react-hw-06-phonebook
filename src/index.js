import { configureStore } from "@reduxjs/toolkit";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import rootReducer from "./reducers";


const store = configureStore(
  { reducer: rootReducer, devTools : true}
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

