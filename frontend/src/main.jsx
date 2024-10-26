import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MonthProvider from './context/MonthContext.jsx'
import { Provider } from 'react-redux';
import { restoreCSRF, csrfFetch } from './store/csrf';
import configureStore from './store';
import * as sessionActions from './store/session.js'
import './index.css'

const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MonthProvider>
        <App />
      </MonthProvider>
    </Provider>
  </React.StrictMode>
)
