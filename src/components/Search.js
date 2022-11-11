import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./DayWeather.css";
import { useState } from "react";
import axios from "../../node_modules/axios/dist/axios";
import Theme from "../images/Theme.gif";
import MainBody from "./MainBody";

function Search() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fc478926dc0bed8b34370e0cef32964`;
  const searchCity = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        // console.log(response.data);
      });
      setCity("");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row search">
        <div className="col-md-12 d-flex justify-content-center  text-center">
          <div className="lap1">
            <img src={Theme} alt="" />
            <h1>WeatherGenie</h1>
            <p>Powered By Frontend Society &trade; </p>
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              onKeyPress={searchCity}
              type="text"
              placeholder="Enter location"
            />
          </div>
        </div>
      </div>
      {data.name !== undefined && <MainBody data={data}></MainBody>}
    </div>
  );
}

export default Search;
