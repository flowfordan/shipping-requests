import { createStore, applyMiddleware } from "redux";
import {requestsReducer} from "./reducers/requestsReducer";
import thunkMiddleware from 'redux-thunk';

const store = createStore(requestsReducer, applyMiddleware(thunkMiddleware))

export default store;