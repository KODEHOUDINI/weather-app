import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./DayWeather.css";
import Left from "./Left";
import Right from "./Right";

function MainBody(props) {
  return (
    <div className="container d-flex align-items-center adjustMe position my-5">
      <div className="row ">
        <div className="d-flex justify-content-center">
          <Left data={props.data}></Left>
          <Right data={props.data}></Right>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
