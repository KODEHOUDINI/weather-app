import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./DayWeather.css";
import MainWeather from "./MainWeather";

function Right(props) {
  return (
    <div className="col-md-4 position RightpositionChild my-3 me-4 p-2">
      <MainWeather data={props.data}></MainWeather>
    </div>
  );
}

export default Right;
