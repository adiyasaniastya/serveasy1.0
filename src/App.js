import React from 'react';
import { Fragment } from 'react';
import './App.css';
// import {Route, Switch} from 'react-router-dom';
import Homepage from './Pages/homepages/Homepage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactUs from './pages/contactUs/ContactUs.js';
// import MainNavigation from './Layouts/MainNavigation.js';
import Navbar from './Layouts/Navbar/index';
// import Navbar2 from './Layouts/Navbar/index2';
function App() {
    return (
      
      <Fragment>
        <Navbar/>
        {/* <Navbar2/> */}
        <Homepage/>
      </Fragment>
    );
}

export default App;
