import logo from './logo.svg';
import './App.css';
import Example from './components/Example'
import Example2 from './components/Example2';
import Listado from './components/Listatado';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
function App() {



  
  return (
    <Grid container>
     <>
 
    <Navbar/>
    
    <Outlet/>
     </>
    </Grid>
  );
}

export default App;
