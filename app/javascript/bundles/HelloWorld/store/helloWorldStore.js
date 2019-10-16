import { combineReducers, createStore } from "redux";
import updateName from "../reducers/helloWorldReducer";

const helloWorldReducer = combineReducers({ name: updateName });

const configureStore = railsProps => createStore(helloWorldReducer, railsProps);

export default configureStore;
