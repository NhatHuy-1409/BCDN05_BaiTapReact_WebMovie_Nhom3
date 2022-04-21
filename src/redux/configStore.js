import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))