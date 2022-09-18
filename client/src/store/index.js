import { createStore, applyMiddleware } from 'redux';
import { composeWhithDevtools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

export const store = createStore(rootReducer, composeWhithDevtools(applyMiddleware(thunk)));