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

  console.log("API URL SETTED TO: " + process.env.REACT_APP_API_URL)

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

      setTheme(localStorage.getItem("theme") === "light" ? "dark" : "light")
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
              <Banner/>
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
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
