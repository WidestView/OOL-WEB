import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import Home from "./pages/Home";
import NotFound from "./pages/Errors/NotFound";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import Workspace from "./pages/System/Workspace";
import Admin from "./pages/System/Admin";
import UserView from "./pages/System/UserView";

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
  const [employee, setEmployee] = useState();

  const refreshUser = () => {
    async function fetchUser() {
      try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/greet`);
        setUser(res.data);
      }
      catch(error){
        if (error.response && error.response.status === 401) { 
          setUser(null);
        }
      }
    }
    fetchUser();
  }

  useEffect(refreshUser, []);

  useEffect(() => {
    async function fetchEmployee() {
      try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Employee/info`);
        setEmployee(res.data);
      }
      catch(error){
        if (error.response && error.response.status === 401) { 
          setEmployee(null);
        }
      }
    }
    if (user) {
      console.info(user);
      if (user.kind === "employee") fetchEmployee();
    }
  }, [user]);

  useEffect(() => {
    if (employee) {
      console.info(employee);
    }
  }, [employee]);

  return (
    <div className="App">
      <Router basename={routerBaseName}>
        <Navbar user={user} refreshUser={refreshUser} employee={employee}/>
        <Switch>
          <Route exact path={["/", "/home", "/ool-web", "/OOL-WEB"]}>
            <Home/>
          </Route>
          <Route exact path={["/user"]}>
            <UserView user={user}/>
          </Route>
          <Route exact path={["/workspace"]}>
            <Workspace employee={employee}/>
          </Route>
          <Route exact path={["/admin"]}>
            <Admin employee={employee}/>
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
