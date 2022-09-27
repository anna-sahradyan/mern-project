import {combineReducers} from "redux";
import auth from "./auth/authSlice";
const rootReducer = combineReducers({
    auth,
    devTools: true,
})
export default rootReducer;