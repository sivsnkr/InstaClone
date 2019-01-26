import {combineReducers} from "redux";
import user from "./currentUser";
import error from "./error";
import post from "./post";

export default combineReducers({
    user,
    post,
    error,
});