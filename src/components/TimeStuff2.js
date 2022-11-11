import React, { Component } from "react";

class TimeStuff extends Component {
  state = {
    currentTime: "",
  };

  updateTime() {
    var time = new Date();
    let newTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    this.setState({ currentTime: newTime });
  }
  time = new Date();
  currentDate = this.time
    .toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(",", " ")
    .replace(",", " ");

  render() {
    setInterval(this.updateTime(), 1000);

    return (
      <div className="row positionChildTime m-1 p-1">
        <div className="col-md-9">
          <h1>{"Have a nice day!"}</h1>
          <h2>Have a nice day</h2>
        </div>
        <div className="col-md-3 rightPos">
          <h1>{this.state.currentTime}</h1>
          <h2>{this.currentDate}</h2>
        </div>
      </div>
    );
  }
}

export default TimeStuff;
