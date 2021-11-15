import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import HomeView from "./views/HomeView";
import NotFound from "./views/errors/NotFoundView";
import SignUpView from "./views/SignUpView";
import ForgotPasswordView from "./views/ForgotPasswordView";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InfoView from "./views/InfoView";
import WorkspaceView from "./views/WorkspaceView";
import AdminView from "./views/AdminView";
import UserView from "./views/UserView";
import PackagesView from "./views/admin/PackagesView";
import PackageView from "./views/admin/PackageView";
import Auth from "./util/Auth";
import UnauthorizedView from "./views/errors/UnauthorizedView";
import UsersView from "./views/admin/UsersView";

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
  const [badLogin, setBadLogin] = useState(false);
  const [employee, setEmployee] = useState();

  useEffect(() => Auth.refreshLogin(setUser, setBadLogin), []);
  useEffect(() => Auth.checkAndFetchEmployee(user, setEmployee), [user]);

  return (
    <div className="App bg-light">
      <Router basename={routerBaseName}>
        <Navbar user={user} employee={employee} refreshLogin={() => Auth.refreshLogin(setUser, setBadLogin)}/>
        <Switch>
          <Route exact path={["/", "/home"]} component={HomeView}/>
          <Route exact path="/user">
            <UserView user={user} badLogin={badLogin}/>
          </Route>
          <Route exact path="/workspace">
            <WorkspaceView user={user} employee={employee} badLogin={badLogin}/>
          </Route>
          <Route exact path="/admin">
            <AdminView user={user} employee={employee} badLogin={badLogin}/>
          </Route>
          <Route exact path="/admin/users" component={UsersView}/>
          <Route exact path="/admin/users/add" component={UserView}/>
          <Route exact path="/admin/users/:id" component={UserView}/>
          <Route exact path="/admin/packages" component={PackagesView}/>
          <Route exact path="/admin/packages/add" component={PackageView}/>
          <Route exact path="/admin/packages/:id" component={PackageView}/>
          <Route exact path="/signup" component={SignUpView}/>
          <Route exact path="/forgot-password" component={ForgotPasswordView}/>
          <Route exact path="/info" component={InfoView}/>
          <Route exact path="/401" component={UnauthorizedView}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
