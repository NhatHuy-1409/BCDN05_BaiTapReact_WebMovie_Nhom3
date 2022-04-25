import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import QuanLyDatVeReducer from "./reducers/QuanLyDatVeReducer/QuanLyDatVeReducer";
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
import { CarouselReducer } from "./reducers/CarouselReducer/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer/QuanLyPhimReducer";
import { LoadingReducer } from "./reducers/LoadingReducer/LoadingReducer";


const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,
  QuanLyDatVeReducer,
  CarouselReducer,
  QuanLyPhimReducer,
  LoadingReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))