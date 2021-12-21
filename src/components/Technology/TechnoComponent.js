import React from "react";

function TechnoComponent(props) {
  return (
    <div className="techno-component">
      <div className="techno-details">
        <div className="terminology">THE TERMINOLOGY</div>
        <div className="techno-name">{props.name}</div>
        <div className="techno-desc">{props.desc}</div>
      </div>
      <div className="techno-image">
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  );
}

export default TechnoComponent;
