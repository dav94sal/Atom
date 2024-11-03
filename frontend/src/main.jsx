import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DateProvider from './context/DateContext.jsx';
import { Modal, ModalProvider } from './context/Modal';
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
    <ModalProvider>
      <Provider store={store}>
        <DateProvider>
          <App />
          <Modal />
        </DateProvider>
      </Provider>
    </ModalProvider>
  </React.StrictMode>
)
