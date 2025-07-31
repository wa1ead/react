import React from "react";
import "./Card.css";

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.source} alt="" className="twitter-logo" />
      <h2>{card.title}</h2>
    </div>
  );
}

export default Card;
