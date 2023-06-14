import { createSelector,createSlice } from "@reduxjs/toolkit";
const init = {
  itemList:[{name:'前端监控',id:1,create:'zxc',maintainer:['asd','asda']}]
}
const item= createSlice({
  name:'item',
  initialState: init,
  reducers: {
    logined(state, action) {
      console.log(action);
      state.loginFlag = action.payload
    },
  },
})
export default item.reducer;