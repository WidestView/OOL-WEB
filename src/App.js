import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="body container">
        <Home className="col-12"/>
      </div>
    </div>
  );
}

export default App;
