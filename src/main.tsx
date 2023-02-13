import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import reducer from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
