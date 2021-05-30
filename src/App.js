import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {

  // Set default theme to OS theme
  const osTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? "dark" : "light";

  const [theme, setTheme] = useState(localStorage.getItem("theme")?? osTheme);

  const transition = "background-color 0.5s ease-out, color 0.5s ease-in";

  const handleSwitchColorMode = ()=>{

      if(document.querySelector(".theme").style.transition !== transition){
          let elements = document.getElementsByClassName("theme");
          
          for(let i = 0; i < elements.length; i++){
              elements[i].style.transition = transition;
          }
      }

      setTheme(localStorage.getItem("theme") === "light" ? "dark" : "light")
  }

  useEffect(()=>{
      localStorage.setItem('theme', theme); // REGISTER ON LOCAL STORAGE

      if(theme === "light"){
          document.documentElement.style.setProperty('--background-color', '#FFF');
          document.documentElement.style.setProperty('--text-color', '#000');
      }else{
          document.documentElement.style.setProperty('--background-color', '#333');
          document.documentElement.style.setProperty('--text-color', '#FFF');
      }
  }, [theme])

  return (
    <div className="App theme mono">
      <Router >
        <Navbar theme={theme} handleSwitchColorMode={handleSwitchColorMode}/>
          <Switch>
            <Route exact path="/">
              <Banner theme={theme}/>
              <Home theme={theme}/>
            </Route>
            <Route exact path="/signup">
              <SignUp theme={theme}/>
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword theme={theme}/>
            </Route>
            <Route path="*">
              <NotFound theme={theme}/>
            </Route>
          </Switch>
          <Footer theme={theme}/>
      </Router>
    </div>
  );
}

export default App;
