import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./DayWeather.css";
import Cloudy from "../images/Cloudy.gif";

function DayWeather() {
  let gif = Cloudy;
  return (
    <div className="col-md-6 py-4 m-2 mt-3 positionDay ">
      <div className="row text-center">
        <h4>Tuesday</h4>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <img src={gif} alt="climateContent" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h4>Partly Sunny</h4>
        </div>
        <div className="col-md-3 d-flex align-items-center text-center">
          <h3>17°C</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <img src={gif} alt="climateContent" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h4>Partly Sunny</h4>
        </div>
        <div className="col-md-3 d-flex align-items-center text-center">
          <h3>17°C</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <img src={gif} alt="climateContent" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h4>Partly Sunny</h4>
        </div>
        <div className="col-md-3 d-flex align-items-center text-center">
          <h3>17°C</h3>
        </div>
      </div>
    </div>
  );
}

export default DayWeather;
