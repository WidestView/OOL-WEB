import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  
  // Set default theme to OS theme
  const osTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? "dark" : "light";

  const [theme, setTheme] = useState(localStorage.getItem("theme")?? osTheme);

  const transition = "background-color 0.5s ease-out, color 0.5s ease-in";

  const handleSwitchColorMode = ()=>{

      if(document.querySelector(".theme").style.transition !== transition){

          let themeElements = document.getElementsByClassName("theme");
          for(let i = 0; i < themeElements.length; i++){
            themeElements[i].style.transition = transition;
          }
          
      }

      setTheme(localStorage.getItem("theme") === "light" ? "dark" : "light");
  }

  useEffect(()=>{
      localStorage.setItem('theme', theme); // REGISTER ON LOCAL STORAGE

      if(theme === "light"){
          document.documentElement.style.setProperty('--background-color', '#FFF');
          document.documentElement.style.setProperty('--text-color', '#000');
          document.documentElement.style.setProperty('--link-color', '#023859');
      }else{
          document.documentElement.style.setProperty('--background-color', '#333');
          document.documentElement.style.setProperty('--text-color', '#FFF');
          document.documentElement.style.setProperty('--link-color', '#AAA');
      }
  }, [theme])

  return (
    <div className="App theme mono">
      <Router >
        <Navbar theme={theme} handleSwitchColorMode={handleSwitchColorMode}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
