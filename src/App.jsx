import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Classroom from "./Classroom";
import Exam from "./Exam";
import Calender from "./Calender";
import Faculty from "./Faculty";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LostandFound from "./LostandFound";
import { Switch, Route, Redirect } from "react-router-dom";
import Loginuser from "./Loginuser";
import Bluebar from "./Bluebar";


//Start Preloader for Welcome Screen
const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  //End Preloader for Welcome Screen
  return (
    !loading && (
    <>
      <Bluebar/>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/calender" component={Calender} />
        <Route exact path="/classroom" component={Classroom} />
        <Route exact path="/faculty" component={Faculty} />
        <Route exact path="/exam" component={Exam} />
        <Route exact path="/lostandfound" component={LostandFound} />
        <Route exact path="/loginuser" component={Loginuser} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
    )
  );
};

export default App;
