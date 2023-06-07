import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";

 let  store = configureStore({
    reducer: {
      user: userReducer,
    },
  })
  export default store