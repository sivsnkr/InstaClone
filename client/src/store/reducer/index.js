import {combineReducer} from "redux";
import user from "./currentUser";
import error from "./error";

export default combineReducer({
    user,
    error, 
});