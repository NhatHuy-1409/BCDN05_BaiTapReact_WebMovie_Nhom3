import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { CarouselReducer } from "./reducers/CarouselReducer/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer/QuanLyPhimReducer";

import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyNguoiDungReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))