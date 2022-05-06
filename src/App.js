import logo from "./logo.svg";
import "./App.css";
import {useState,useEffect} from 'react'
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Listado from "./components/Listatado";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Header from "./components/Header/Header";
import {useLocation} from 'react-router-dom'
function App() {
  const [title,setTitle] =useState(null)
  const location = useLocation();

  useEffect(() => {

    const parseTitle = location.pathname.replace(/\W/g,'');
    console.log(location)
    setTitle(parseTitle)
  }, [location])
  
  return (
    <Grid container>
      <>
      <Header title={title}/>
        <Navbar />
        <Outlet />
      </>
    </Grid>
  );
}

export default App;
