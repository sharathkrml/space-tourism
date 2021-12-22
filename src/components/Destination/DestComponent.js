import React from "react";
import "./DestComponent.scss";
function DestComponent(props) {
  return (
    <div className="dest-component">
      <div className="dest-image">
        <img src={props.img} alt="dest" />
      </div>
      <div className="dest-switch-btn btn-mob">
        <button
          className={props.currDest === 0 ? "active" : undefined}
          onClick={() => props.goTo(0)}
        >
          MOON
        </button>
        <button
          className={props.currDest === 1 ? "active" : undefined}
          onClick={() => props.goTo(1)}
        >
          MARS
        </button>
        <button
          className={props.currDest === 2 ? "active" : undefined}
          onClick={() => props.goTo(2)}
        >
          EUROPA
        </button>
        <button
          className={props.currDest === 3 ? "active" : undefined}
          onClick={() => props.goTo(3)}
        >
          TITAN
        </button>
      </div>
      <div className="dest-details">
        <div className="dest-title">{props.title}</div>
        <div className="dest-desc">{props.details}</div>
        <hr />
        <div className="dist-time">
          <div className="avg-dist">
            <p className="dist-time-title">AVG. DISTANCE</p>
            <p className="dist-time-data">{props.distance}</p>
          </div>
          <div className="est-time">
            <p className="dist-time-title">EST. TRAVEL TIME</p>
            <p className="dist-time-data">{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestComponent;
