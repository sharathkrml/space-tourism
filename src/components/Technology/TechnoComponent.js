import "./TechnoComponent.scss";
function TechnoComponent(props) {
  return (
    <div className="techno-component">
      <div className="techno-buttons">
        <button
          className={props.current.toString() === "0" ? "active" : undefined}
          onClick={() => props.goTo(0)}
        >
          1
        </button>
        <button
          className={props.current.toString() === "1" ? "active" : undefined}
          onClick={() => props.goTo(1)}
        >
          2
        </button>
        <button
          className={props.current.toString() === "2" ? "active" : undefined}
          onClick={() => props.goTo(2)}
        >
          3
        </button>
      </div>
      <div className="techno-details">
        <div className="terminology">THE TERMINOLOGY...</div>
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
