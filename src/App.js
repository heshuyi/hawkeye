import React from "react";
import { useSelector } from "react-redux";
function App(){
  let {userId,loginFlag} = useSelector(state=>state.user)
  return (
  <div>
    开始
    {userId}:{loginFlag.toString()}
  </div>)
}
export default App;