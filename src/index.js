import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from './components/pages/Authentication/Authentication';
import Database from './components/pages/Database/Database';
import Storage from './components/pages/Storage/Storage';
import Hosting from './components/pages/Hosting/Hosting';
import Functions  from './components/pages/Functions/Functions';
import MachineLearning from './components/pages/MachineLearning/MachineLearning';
import { ThemeProvider } from 'styled-components';
import {dashboardTheme} from './dashboardTheme'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
 <ThemeProvider theme={dashboardTheme}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route path="authentication" element={<Authentication />}/>
    <Route path="database" element={<Database />}/>
    <Route path="storage" element={<Storage/>}/>
    <Route path="hosting" element={<Hosting />}/>
    <Route path="functions" element={<Functions/>}/> 
    <Route path="machine-learning" element={<MachineLearning/>}/> 
      
    </Route>
  </Routes>
</BrowserRouter>
</ThemeProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
