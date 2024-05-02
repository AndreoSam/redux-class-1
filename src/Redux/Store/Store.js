import { applyMiddleware, createStore } from "redux";
import RootReducer from "../Reducer/indexReducers";
import { thunk } from "redux-thunk";
const storage = createStore(RootReducer, applyMiddleware(thunk));


export default storage;
