import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'; import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Component/reducer';


const initialState = {
  userVerify:localStorage.getItem('information')?[JSON.parse(localStorage.getItem('information'))]: [],
  userDetails: [],
  pendingState:[],
  completeState:[]
}


const store = createStore(reducer, initialState)


ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

