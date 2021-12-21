import React, { useRef, useState, useEffect } from "react";
import "./Crew.scss";
import Carousel from "react-elastic-carousel";
import CrewComponent from "./CrewComponent";

import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";
function Crew() {
  const carouselRef = useRef(null);
  const [currDest, setCurrDest] = useState(0);
  const timeOut=2000;
  // useEffect(() => {
  //   if (currDest === 3) {
  //     setTimeout(() => {
  //       carouselRef.current.goTo(0);
  //     }, timeOut);
  //   }
  // }, [currDest]);
  return (
    <div className="Crew">
      <div className="dest-banner">
        <strong>02</strong>&nbsp; MEET YOUR CREW
      </div>
      <Carousel
        onChange={(currentItem, pageIndex) => setCurrDest(pageIndex)}
        ref={carouselRef}
        // enableAutoPlay
        // autoPlaySpeed={timeOut}
        itemsToShow={1}
        className="crew-carousel"
      >
        <CrewComponent
          position=" COMMANDER"
          personName="Douglas Hurley"
          desc="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. "
          image={douglas}
        />
        <CrewComponent
          position=" Mission Specialist"
          personName="Mark Shuttleworth"
          desc="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. "
          image={mark}
        />
        <CrewComponent
          position="Pilot"
          personName="Victor Glover"
          desc="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
          image={victor}
        />
        <CrewComponent
          position="Flight Engineer"
          personName="Anousheh Ansari"
          desc="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
          image={anousheh}
        />
      </Carousel>
      <div className="crew-buttons">
        <button
          className={currDest === 0 ? "active" : undefined}
          onClick={() => carouselRef.current.goTo(0)}
        ></button>
        <button
          className={currDest === 1 ? "active" : undefined}
          onClick={() => carouselRef.current.goTo(1)}
        ></button>
        <button
          className={currDest === 2 ? "active" : undefined}
          onClick={() => carouselRef.current.goTo(2)}
        ></button>
        <button
          className={currDest === 3 ? "active" : undefined}
          onClick={() => carouselRef.current.goTo(3)}
        ></button>
      </div>
    </div>
  );
}

export default Crew;
