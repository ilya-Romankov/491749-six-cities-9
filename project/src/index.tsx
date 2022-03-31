import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {offers} from './mock/offers';
import {fetchHostelsAction} from './store/api-action';

store.dispatch(fetchHostelsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App hostels={offers}/>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
