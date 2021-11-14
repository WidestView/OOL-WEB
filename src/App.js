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
import Workspace from "./pages/Workspace";
import Admin from "./pages/Admin";
import UserView from "./pages/UserView";
import Users from "./pages/Admin/Users";
import Equipments from "./pages/Admin/Equipments";
import { PackagesView, PackageView } from "./pages/Admin/PackagesView";
import UserAPI from "./api/UserAPI";
import EmployeeAPI from "./api/EmployeeAPI";

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
  const [badLogin, setBadLogin] = useState(false);

  const refreshLogin = () => {
    async function fetchUser() {
      setBadLogin(false);

      try {
        setUser(await UserAPI.getUser());
      }
      catch(error){
        if (error.response && error.response.status === 401) setUser();
        setBadLogin(true);
      } 
    }

    return fetchUser();
  }

  useEffect(refreshLogin, []);

  useEffect(() => {
    async function fetchEmployee() {
      try {
        setEmployee(await EmployeeAPI.getEmployee());
      }
      catch(error) {
        if (error.response && error.response.status === 401) { 
          setEmployee(null);
        }
      }
    }

    if (user && UserAPI.isEmployee(user)) fetchEmployee();

  }, [user]);

  return (
    <div className="App bg-light">
      <Router basename={routerBaseName}>
        <Navbar user={user} employee={employee} refreshLogin={refreshLogin}/>
        <Switch>
          <Route exact path={["/", "/home", "/ool-web", "/OOL-WEB"]}>
            <Home/>
          </Route>
          <Route exact path="/user">
            <UserView user={user} badLogin={badLogin}/>
          </Route>
          <Route exact path="/workspace">
            <Workspace user={user} employee={employee} badLogin={badLogin}/>
          </Route>
          <Route exact path="/admin">
            <Admin user={user} employee={employee} badLogin={badLogin}/>
          </Route>
          <Route exact path="/admin/users">
            <Users/>
          </Route>
          <Route exact path="/admin/equipments">
            <Equipments/>
          </Route>
          <Route exact path="/admin/packages">
            <PackagesView/>
          </Route>
          <Route exact path="/admin/packages/view">
            <PackageView/>
          </Route>
          <Route exact path="/admin/packages/view/:id">
            <PackageView/>
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
