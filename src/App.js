import Navbar from "./Navbar";

function App() {

  console.log(process.env.REACT_APP_API_URL);

  return (
    <div className="App">
      <Navbar/>
      <div className="body container">
        
      </div>
    </div>
  );
}

export default App;
