import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import AuthReducers from "./authReducer";

const RootReducer = combineReducers({
    auth:AuthReducers,
    counter:counterReducer
})
export default RootReducer;