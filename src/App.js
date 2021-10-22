
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    // backgroundColor: 'black'
  })
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

  }
  const toggleHandler = () => {

    // setAlert('this is alert');

    setTimeout(() => {
      setAlert(null);
    }, 2000);
    showAlert("toggle is clicked", "success");

    console.log("toggle");
    if (mode == 'light') {
      setMode('dark');
      document.body.style.background = "gray";
      setMyStyle({
        color: 'white',
        // backgroundColor: 'white'
      })
    } else {
      setMode('light');
      document.body.style.background = "white";
      setMyStyle({
        color: 'black',
        // backgroundColor: 'black'
      })
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleHandler={toggleHandler} title={"textUtilities"} myStyle={myStyle} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert}></TextForm>
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
