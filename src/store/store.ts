import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootReducer = ReturnType<typeof rootReducer>;