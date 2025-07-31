import React from "react";
import Card from "./Card";
import "./CardsContainer.css";

function CardsContainer({ cardData }) {
  return (
    <div class="cards-container">
      {cardData.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}

export default CardsContainer;
