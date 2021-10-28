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
import Personal from "./pages/Personal";
import System from "./pages/System/System";
import Admin from "./pages/System/Admin";

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
  const [user, setUser] = useState();

  const refreshUser = async () => {
      try{
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee/info`);
          setUser(res.data);
      }
      catch(error){
          if (error.response && error.response.status === 401) { 
              console.error("Usuário não autorizado!");
              setUser(null);
          }
          else console.error(error);
      }
  }

  useEffect(()=> refreshUser(), []);

  return (
    <div className="App">
      <Router basename={routerBaseName}>
        <Navbar user={user} refreshUser={refreshUser}/>
        <Switch>
          <Route exact path={["/", "/home", "/ool-web", "/OOL-WEB"]}>
            <Home/>
          </Route>
          <Route exact path={["/personal"]}>
            <Personal user={user}/>
          </Route>
          <Route exact path={["/system"]}>
            <System user={user}/>
          </Route>
          <Route exact path={["/admin"]}>
            <Admin user={user}/>
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
