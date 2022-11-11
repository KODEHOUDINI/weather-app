import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./DayWeather.css";

function MainWeather(props) {
  const celcius = props.data.main ? (props.data.main.temp - 273.15).toFixed(2) : null;
  const celcius1 = props.data.main ? (props.data.main.feels_like - 273.15).toFixed(2) : null;
  return (
    <div className="row mainWeather">
      {/* Value 1 */}
      <div className="mt-4">
        <div className="col-md-12 text-center">
          <h1>Temperature </h1>
        </div>

        <div className="col-md-12 text-center">
          <h3>
            {celcius}
            <sup>&#8451;</sup>
          </h3>
        </div>
      </div>

      {/* Value 2 */}
      <div className="my-4">
        <div className="col-md-12 text-center">
          <h1>Feels Like</h1>
        </div>
        <div className="col-md-12 text-center">
          <h3>
            {celcius1}
            <sup>&#8451;</sup>
          </h3>
        </div>
      </div>

      {/* Value 3 */}
      <div className="mb-4">
        <div className="col-md-12 text-center">
          <h1>Wind Speed</h1>
        </div>
        <div className="col-md-12 text-center">
          <h3>{props.data.wind ? props.data.wind.speed : null} km/h</h3>
        </div>
      </div>

      {/* Value 4 */}
      <div className="col-md-12 text-center my-2">
        <h1>Humidity</h1>
      </div>
      <div className="col-md-12 text-center">
        <h3>{props.data.main ? props.data.main.humidity : null}%</h3>
      </div>
    </div>
  );
}

export default MainWeather;
