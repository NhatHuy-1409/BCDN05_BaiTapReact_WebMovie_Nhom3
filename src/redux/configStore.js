import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { CarouselReducer } from "./reducers/CarouselReducer/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer/QuanLyPhimReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
    
})
export const store = createStore(rootReducer,applyMiddleware(thunk))