import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import QuanLyDatVeReducer from "./reducers/QuanLyDatVeReducer/QuanLyDatVeReducer";
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))