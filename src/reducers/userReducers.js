import { CreateSliceOptions,createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
const init = {userId:'123',loginFlag:false}

const users = createSlice({
    name: "user",
    initialState: init,
    reducers: {
      logined(state, action) {
        console.log(action);
        state.loginFlag = action.payload
      },
    },
    // extraReducers: {
    //   [getChannels.fulfilled]: (state, action) => {
    //     state.isFetching = false;
    //     state.channels = action.payload;
    //   },
    // },
})
export const{logined} = users.actions;
export default users.reducer;