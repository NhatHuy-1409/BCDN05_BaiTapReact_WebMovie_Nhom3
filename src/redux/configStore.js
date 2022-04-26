import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import QuanLyDatVeReducer from "./reducers/QuanLyDatVeReducer/QuanLyDatVeReducer";
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
import { CarouselReducer } from "./reducers/CarouselReducer/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer.js/QuanLyRapReducer";

const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,
  QuanLyDatVeReducer,
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))