import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const routerBaseName = process.env.PUBLIC_URL;

axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [process.env.REACT_APP_API_URL];
    const token = localStorage.getItem('token');    
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function App() {

  const osTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? "dark" : "light";

  const [theme, setTheme] = useState(localStorage.getItem("theme")?? osTheme);

  const handleSwitchColorMode = ()=> {

    // console.log(`Theme is now ${theme}`)
    setTheme(localStorage.getItem("theme") === "light" ? "dark" : "light");
  }

  useEffect(()=>localStorage.setItem('theme', theme), [theme])

  return (
    <div className="App">
      <Router basename={routerBaseName}>
        <Navbar theme={theme} handleSwitchColorMode={handleSwitchColorMode}/>
        <Switch>
          <Route exact path={["/", "/home", "/ool-web", "/OOL-WEB"]}>
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
