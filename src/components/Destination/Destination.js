import React, { useRef, useState } from "react";
import "./Destination.scss";
import DestComponent from "./DestComponent";
import Carousel from "react-elastic-carousel";
import moonImg from "../../assets/destination/image-moon.png";
import marsImg from "../../assets/destination/image-mars.png";
import europaImg from "../../assets/destination/image-europa.png";
import titanImg from "../../assets/destination/image-titan.png";

function Destination() {
  const carouselRef = useRef(null);
  const [currDest, setCurrDest] = useState(0);
  return (
    <div className="destination">
      <div className="dest-banner">
        <strong>01</strong>&nbsp; PICK YOUR DESTINATION
      </div>

      <div className="dest-carousel">
        <div className="dest-carousel-buttons">
          <button
            className={currDest === 0 ? "active" : undefined}
            onClick={() => carouselRef.current.goTo(0)}
          >
            MOON
          </button>
          <button
            className={currDest === 1 ? "active" : undefined}
            onClick={() => carouselRef.current.goTo(1)}
          >
            MARS
          </button>
          <button
            className={currDest === 2 ? "active" : undefined}
            onClick={() => carouselRef.current.goTo(2)}
          >
            EUROPA
          </button>
          <button
            className={currDest === 3 ? "active" : undefined}
            onClick={() => carouselRef.current.goTo(3)}
          >
            TITAN
          </button>
        </div>
        <div className="dest-wrapper">
          <div className="dest-body">
            <Carousel
              onChange={(currentItem, pageIndex) => setCurrDest(pageIndex)}
              ref={carouselRef}
              itemsToShow={1}
              // enableAutoPlay
              // autoPlaySpeed={1500}
            >
              <DestComponent
                title="MOON"
                details="See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. "
                distance="384,400 KM"
                time="3 DAYS"
                img={moonImg}
              />

              <DestComponent
                title="MARS"
                details="Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest! "
                distance="225 mil. km"
                time="9 months"
                img={marsImg}
              />

              <DestComponent
                title="EUROPA"
                details="Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                distance="628 mil. km"
                time="3 years"
                img={europaImg}
              />

              <DestComponent
                title="TITAN"
                details="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                distance="1.6 bil. km"
                time="7 years"
                img={titanImg}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
