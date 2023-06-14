import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import itemReducer from "./reducers/itemReudcers";

 let  store = configureStore({
    reducer: {
      user: userReducer,
      items: itemReducer
    },
  })
  export default store