// Credit to Spencer Carli for the store.

// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
// import { createLogger } from 'redux-logger';
// import immutableCheckMiddleWare from 'redux-immutable-state-invariant';
// import * as storage from 'redux-storage';
// import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
// import debounce from 'redux-storage-decorator-debounce';
// import filter from 'redux-storage-decorator-filter';

// // Setup
// const middleWare = [];

// // Immutability Check
// if (process.env.NODE_ENV === 'development') {
//   middleWare.push(immutableCheckMiddleWare());
// }

// // Redux Store
// const wrappedReducer = storage.reducer(reducers);
// let engine = createEngine('my-save-key');
// engine = debounce(engine, 1000);
// engine = filter(engine, ['auth']);
// const reduxStorageMiddleware = storage.createMiddleware(engine);
// middleWare.push(reduxStorageMiddleware);
// const loadStore = storage.createLoader(engine);

// // Logger Middleware. This always has to be last
// const loggerMiddleware = createLogger({
//   predicate: () => process.env.NODE_ENV === 'development',
// });
// middleWare.push(loggerMiddleware);

// const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
// export function makeStore(callback) {
//  const store = createStoreWithMiddleware(wrappedReducer);
//  loadStore(store)
//     .then((newState) => callback(null, newState))
//     .catch(() => callback('Failed to load previous state', null));
//   return store;
// }

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middlewares = [
  thunk
];

const isDev = process.env.NODE_ENV === 'development';

let enhancers;

if (isDev) {
  const logger = require('redux-logger');

  const devMiddleware = [
    logger()
  ]
  enhancers = compose(
    applyMiddleware(...middlewares, ...devMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
} else {
  enhancers = compose(applyMiddleware(...middlewares))
}

const store = createStore(
  reducer, undefined, enhancers
)

export default store;
