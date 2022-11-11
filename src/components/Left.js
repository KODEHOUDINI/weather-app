import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CitySec from "./CitySec";
import "./DayWeather.css";
import TimeStuff from "./TimeStuff";

function Left(props) {
  return (
    <div className="col-md-8 m-2 p-2">
      <br />
      <TimeStuff data={props.data}></TimeStuff>
      <br />
      <CitySec data={props.data}></CitySec>
    </div>
  );
}

export default Left;
