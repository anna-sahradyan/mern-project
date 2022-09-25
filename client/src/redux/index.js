import {combineReducers} from "redux";
import auth from "./authSlice";
const rootReducer = combineReducers({
    auth,
    devTools: true,
})
export default rootReducer;