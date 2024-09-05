import React from "react";
import "./cardAboutUs.css"

export default function AboutUsc({ image, tittle, description }) {
  return (
    <div className="cardAU">
      <img className="slikaAU" src={image} alt={tittle} />
      <h2 className="nameAU">{tittle}</h2>
      <p>Novi Pazar, Serbia</p>
      <hr style={{width:"90%",color:"gray"}}/>
      <p className="descAU">{description}</p>
    </div>
  );
}
