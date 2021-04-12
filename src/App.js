import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
