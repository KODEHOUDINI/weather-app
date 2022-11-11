import "./DayWeather.css";
// import Cloudy from "../images/Cloudy.gif";

function DynamicGif(props) {
  let picNum = props.weather ? props.weather[0].id : 1;
  let gif = require(`../images/weather codes/${String(picNum).charAt(0)}.gif`);
  return (
    <div className="iPos">
      <img src={gif} alt="done" />
    </div>
  );
}

export default DynamicGif;
