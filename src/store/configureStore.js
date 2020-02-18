import { createStore, combineReducers } from 'redux';
import ladderReducer from '../reducers/ladders';
import filterReducer from '../reducers/filters';

// store creation
export default ()=>{
  const store = createStore(
    combineReducers({
      ladders: ladderReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
