import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Styles.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from 'react-router'
import {IndexScreen} from "./components/Index/IndexScreen";
import {LogInSignUpScreen} from "./components/LogInSignUp/LogInSignUpScreen";
import {DashBoardScreen} from "./components/DashBoard/DashBoardScreen";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<IndexScreen/>}/>
            <Route path={"/LoginSignUp"} element={<LogInSignUpScreen/>}/>
            <Route path={"/DashBoard"} element={<DashBoardScreen/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();