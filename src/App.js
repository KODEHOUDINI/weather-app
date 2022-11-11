import Search from "./components/Search";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/DayWeather.css";

function App(props) {
  //for search

  return (
    <div className="App">
      {/* Main container */}
      <Search></Search>
    </div>
  );
}

export default App;
