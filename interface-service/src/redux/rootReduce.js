import { combineReducers } from "redux";

import shopReducer from "./shopping/shopping-reduce";

const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;