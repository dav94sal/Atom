import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MonthProvider from './context/MonthContext.jsx'
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css'

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
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
