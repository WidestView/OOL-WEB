import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Auth from "./util/Auth";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./views/home/HomeView";
import InfoView from "./views/home/InfoView";
import ProfileView from "./views/user/ProfileView";
import SignUpView from "./views/user/SignUpView";
import WorkspaceView from "./views/employee/WorkspaceView";
import AdminView from "./views/admin/AdminView";
import PackagesView from "./views/admin/PackagesView";
import PackageView from "./views/admin/PackageView";
import UsersView from "./views/admin/UsersView";
import UserView from "./views/admin/UserView";
import PhotoshootView from "./views/photoshoot/PhotoshootView";
import NotFoundView from "./views/errors/NotFoundView";
import UnauthorizedView from "./views/errors/UnauthorizedView";

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
            <ProfileView user={user} badLogin={badLogin}/>
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
          <Route exact path="/photoshoot/:id">
            <PhotoshootView user={user} employee={employee} badLogin={badLogin}/>
          </Route>
          <Route exact path="/signup" component={SignUpView}/>
          <Route exact path="/info" component={InfoView}/>
          <Route exact path="/401" component={UnauthorizedView}/>
          <Route path="*" component={NotFoundView}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
