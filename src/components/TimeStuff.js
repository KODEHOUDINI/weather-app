import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./DayWeather.css";
import DynamicGif from "./DynamicGif";

function TimeStuff(props) {
  // Greeting and time component
  let time = new Date();

  let currentTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  // function getDate() {
  //   currentTime = time.toLocaleString("en-US", {
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   });
  //   console.log(currentTime);
  // }
  // setInterval(getDate(), 500);

  let currentDate = time
    .toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(",", " ")
    .replace(",", " ");
  return (
    <div className="row positionChildTime m-1 p-1">
      <div className="col-md-3">
        <br />
        <h1>{props.data.name}</h1>
        <p>{props.data.sys ? props.data.sys.country : null}</p>
      </div>
      <div className="col-md-6 text-center">
        <DynamicGif weather = {props.data.weather}></DynamicGif>
        <h1>{props.data.weather ? props.data.weather[0].description : null}</h1>
      </div>
      <div className="col-md-3 text-end">
        <br />
        <h1>{currentTime}</h1>
        <p>{currentDate}</p>
      </div>
    </div>
  );
}

export default TimeStuff;
/* --electric-indigo: #6d2afaff;
--space-cadet: #202a52ff;
--electric-indigo-2: #6c29fbff;
--space-cadet-2: #141949ff;
--oxford-blue: #0b143eff;
--dark-blue-gray: #676a8cff;
--oxford-blue-2: #0b163eff;
--oxford-blue-3: #0f1b41ff;
--space-cadet-3: #111647ff;
--cosmic-cobalt: #363479ff; */
