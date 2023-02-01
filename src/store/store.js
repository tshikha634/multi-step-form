import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/index.js";
import thunk from "redux-thunk";
export const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
