import { configureStore } from "redux";
import reducer from "./reducers/reducer";

const store = configureStore(reducer)

export default store;