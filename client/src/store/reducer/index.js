import {combineReducer} from "redux";
import user from "./currentUser";
import error from "./error";
import post from "./post";

export default combineReducer({
    user,
    post,
    error, 
});