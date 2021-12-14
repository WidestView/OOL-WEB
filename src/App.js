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
import EquipmentsView from "./views/admin/EquipmentsView";
import EquipmentView from "./views/admin/EquipmentView";
import OrderView from "./views/order/OrderView";
import PhotoshootView from "./views/photoshoot/PhotoshootView";
import NotFoundView from "./views/errors/NotFoundView";
import UnauthorizedView from "./views/errors/UnauthorizedView";
import EmployeesView from "./views/admin/EmployeesView";
import EmployeeView from "./views/admin/EmployeeView";

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
          <Route exact path="/admin/employees" component={EmployeesView}/>
          <Route exact path="/admin/employees/add" component={EmployeeView}/>
          <Route exact path="/admin/employees/:id" component={EmployeeView}/>
          <Route exact path="/admin/packages" component={PackagesView}/>
          <Route exact path="/admin/packages/add" component={PackageView}/>
          <Route exact path="/admin/packages/:id" component={PackageView}/>
          <Route exact path="/admin/equipments" component={EquipmentsView}/>
          <Route exact path="/admin/equipments/add" component={EquipmentView}/>
          <Route exact path="/admin/equipments/:id" component={EquipmentView}/>
          <Route exact path="/order/:id">
            <OrderView/>
          </Route>
          <Route exact path="/photoshoot/:id">
            <PhotoshootView user={user} employee={employee} badLogin={badLogin}/>
          </Route>
          <Route exact path="/signup">
            <SignUpView loggedIn={user !== undefined} />
          </Route>
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
