import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ImgSrc from "../testpic.jpg";
import "./DayWeather.css";
import { useState } from "react";
// import axios from "../../node_modules/axios/dist/axios";
// import { useState } from "react";

function CitySec(props) {
  // let ImgSrc = "./testpic.jpg";
  let API_KEY = "AIzaSyDQT1cGtYGQvZ6sjpOhM5fdnOuYVnaI2Q4";
  // fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${props.data.name}&key=${API_KEY}`,{mode: 'no-cors'}).then((res) => {
  //   console.log(res.text())
  //   ImgSrc = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${res ? res.json().result[0].photos[0].photo_reference : ""}&key=${API_KEY}`;
  // })

  let req = new XMLHttpRequest();
  let [ImgSrc, setImgSrc] = useState("");
  req.addEventListener("load", () => {
    let a = req.response.replace(/\s/g, "");
    console.log(a);
    let ref = JSON.parse(a).results[0].photos
      ? JSON.parse(a).results[0].photos[0].photo_reference
      : "";
    setImgSrc(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${API_KEY}`
    );
    console.log(ref);
  });
  req.open(
    "GET",
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${props.data.name}&key=${API_KEY}`
  );
  req.send();
  console.log(ImgSrc);
  return (
    <div className="row position positionChild m-1 p-3">
      <div className="col-md-12">
        {/* Src to b var */}
        <img width="100%" height="440rem" src={ImgSrc} alt="Code"></img>
      </div>
      <div className="d-flex justify-content-center"></div>
    </div>
  );
}

export default CitySec;
