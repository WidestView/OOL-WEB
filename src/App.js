import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import Admin from "./pages/Admin/Admin";

// AXIOS CONFIG
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
  response => response,
  error => {
    return Promise.reject(error);
  }
);

// App config
function App() {

  const [authorized, setAuthorized] = useState(false);
  const refreshGreet = async () => {
      try{
          await axios.get(`${process.env.REACT_APP_API_URL}/api/user/greet`);
          setAuthorized(true);
      }
      catch(error){
          if (error.response && error.response.status === 401) { 
              console.error("Usuário não autorizado!");
              setAuthorized(false);
          }
          else console.error(error);
      }
  }

  useEffect(()=> refreshGreet(), []);

  return (
    <div className="App">
      <Router basename={routerBaseName}>
        <Navbar authorized={authorized} refreshGreet={refreshGreet}/>
        <Switch>
          <Route exact path={["/", "/home", "/ool-web", "/OOL-WEB"]}>
            <Home/>
          </Route>
          <Route exact path={["/admin"]}>
            <Admin authorized={authorized}/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword/>
          </Route>
          <Route exact path="/info">
            <Info/>
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
