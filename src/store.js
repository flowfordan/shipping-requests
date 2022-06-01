import { createStore } from "redux";
import {requestsReducer} from "./reducers/requestsReducer";

const store = createStore(requestsReducer)

export default store;