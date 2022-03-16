import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mock/offers';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App hostels={offers}/>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
