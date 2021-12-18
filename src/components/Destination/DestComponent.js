import React from "react";
import "./DestComponent.scss";
function DestComponent(props) {
  return (
    <div className="dest-component">
      <div className="dest-image">
        <img src={props.img} alt="dest" />
      </div>
      <div className="dest-details">
        <div className="dest-title">{props.title}</div>
        <div className="dest-desc">{props.details}</div>
        <hr />
        <div className="dist-time">
          <div className="avg-dist">
            <p className="dist-time-title">AVG. DISTANCE</p>
            <p>{props.distance}</p>
          </div>
          <div className="est-time">
            <p className="dist-time-title">EST. TRAVEL TIME</p>
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestComponent;
