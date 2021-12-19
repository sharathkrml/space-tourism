import React, { useRef, useState } from "react";
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
  return (
    <div className="Crew">
      <div className="dest-banner">
        <strong>02</strong>&nbsp; MEET YOUR CREW
      </div>
      <Carousel className="crew-carousel">
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
    </div>
  );
}

export default Crew;
