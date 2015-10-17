import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import syncOffline from './syncOffline';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  syncOffline(store);

  return store;
}
