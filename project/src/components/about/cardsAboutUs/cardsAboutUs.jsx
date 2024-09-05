import React from "react";
import "./cardsAboutUs.css";
import saban from "./iconprofile.png";
import ajla from "./ajl.jpg"
import AboutUsc from "../cardAboutUs/cardAboutUs";
function AboutUs() {
  const cards = [{ image: ajla, tittle: "Ajla Maljevac", description: "Ajla is a high school student practising web development" },
    { image: saban, tittle: "Hamza Sener", description: "Hamza is a high school student practising web development" },
    { image: saban, tittle: "Medin Dibranin", description: "Medin is a high school student practising web development" },
    { image: saban, tittle: "Zejn Lekovic", description: "Zejn is a high school student practising web development" },
    { image: saban, tittle: "Amel Plojovic", description: "Amel is a student practising web development" }

  ];

  return (
    <div className="AboutUs">
      {cards.map((card, index) => (
        <AboutUsc
          key={index} 
          image={card.image}
          tittle={card.tittle}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default AboutUs;
