// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About"
import { useState } from "react";
import Alert from "./components/Alerts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // Weather dark mode is enable
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 3000)
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#3c3c3c'
      showAlert("Dark mode has been enabled", "success")
      document.title = "My-App Dark Mode"
      // setInterval(()=>{
      //   document.title = "My-App is Amazing"
      // }, 2000)
      // setInterval(()=>{
      //   document.title = "This is highlighted"
      // }, 4000)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "primary")
      document.title = "My-App Light Mode"
    } 
  }
  return (
    <>
      <Navbar title="My-App1" aboutText="About my app" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <Router>
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForms showAlert = {showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
