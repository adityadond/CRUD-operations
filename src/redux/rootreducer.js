import { combineReducers } from "redux";
import usersReducers from "./reducers";

const rootreducer=combineReducers({
    data:usersReducers
})

export default rootreducer