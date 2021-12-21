import React from "react";
import "./CrewComponent.scss";
function CrewComponent(props) {
  return (
    <div className="crew-component">
      <div className="crew-details">
        <div className="crew-position">{props.position}</div>
        <div className="person-name">{props.personName}</div>
        <div className="person-desc">{props.desc}</div>
      </div>
      <div className="crew-image">
        <img draggable={false} src={props.image} alt="person" />
        <hr />
      </div>
    </div>
  );
}

export default CrewComponent;
