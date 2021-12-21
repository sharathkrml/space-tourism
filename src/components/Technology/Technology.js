import React, { useRef, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import TechnoComponent from "./TechnoComponent";
import "./Technology.scss";

import vehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicleMob from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceportMob from "../../assets/technology/image-spaceport-landscape.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsuleMob from "../../assets/technology/image-space-capsule-landscape.jpg";

const getIsMobile = () => window.innerWidth <= 768;

function Technology() {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const carouselRef = useRef(null);
  const [currDest, setCurrDest] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const goTo = (n) => {
    carouselRef.current.goTo(n);
  };
  return (
    <div className="Technology">
      <div className="dest-banner">
        <strong>03</strong>&nbsp; SPACE LAUNCH 101
        <Carousel
          onChange={(currentItem, pageIndex) => setCurrDest(pageIndex)}
          ref={carouselRef}
          itemsToShow={1}
          className="techno-carousel"
          verticalMode={!isMobile}
        >
          <TechnoComponent
            goTo={goTo}
            current={currDest}
            name="Launch vehicle"
            desc=" A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! "
            img={isMobile ? vehicleMob : vehicle}
          />
          <TechnoComponent
            goTo={goTo}
            current={currDest}
            name="Spaceport"
            desc="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."
            img={isMobile ? spaceportMob : spaceport}
          />
          <TechnoComponent
            goTo={goTo}
            current={currDest}
            name="Space capsule"
            desc="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            img={isMobile ? capsuleMob : capsule}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Technology;
