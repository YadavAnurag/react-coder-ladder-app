import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addFakeLadder } from './actions/ladders';
import configureStore from './store/configureStore';
import { ladders } from './fixtures/ladders'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
// store.subscribe(()=>{
//   console.log(store.getState());
// });

// adding fixtures
ladders.map(ladder=> store.dispatch(addFakeLadder(ladder)));


const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));