import React from "react";
import { useSelector } from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import WelcomePage from "./pages/WelcomePage/Welcome";
import Home from "./pages/HomePage";
import './app.less';
function App() {
  let {loginFlag } = useSelector((state) => state.user);
  return (
    <div>
      {loginFlag ? (
        <BrowserRouter>
        <Home/>
        </BrowserRouter>
      ) : (
        <WelcomePage />
      )}
    </div>
  );
}
export default App;
