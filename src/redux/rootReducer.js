import { combineReducers } from "redux";
import { appReducer } from "./appReducer/appReducer";

export const rootReducer = combineReducers({ app: appReducer });
