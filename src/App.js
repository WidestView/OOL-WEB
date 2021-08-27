import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const routerBaseName = process.env.PUBLIC_URL;

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
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
