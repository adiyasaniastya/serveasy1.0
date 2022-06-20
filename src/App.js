import React from "react";
import { Fragment } from "react";
import "./App.css";
import Homepage from "./Pages/homepages/Homepage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar/index";
import Footer from "./Layouts/Footer/Footer.js";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
      <Footer />
    </Fragment>
  );
}

export default App;
