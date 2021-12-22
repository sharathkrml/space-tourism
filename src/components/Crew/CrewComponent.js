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
      <div className="crew-buttons-mob btn-mob">
        <button
          className={props.currDest === 0 ? "active" : undefined}
          onClick={() => props.goTo(0)}
        ></button>
        <button
          className={props.currDest === 1 ? "active" : undefined}
          onClick={() => props.goTo(1)}
        ></button>
        <button
          className={props.currDest === 2 ? "active" : undefined}
          onClick={() => props.goTo(2)}
        ></button>
        <button
          className={props.currDest === 3 ? "active" : undefined}
          onClick={() => props.goTo(3)}
        ></button>
      </div>
      <div className="crew-image">
        <img src={props.image} alt="person" />
        <hr />
      </div>
    </div>
  );
}

export default CrewComponent;
