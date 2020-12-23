import React from "react";
import "../styles/PokeCard.css";

const PokemonCard = ({ name, imageUrl }) => (
  <div id="card">
    You chose<div id="pokemon">{name}</div>
    <img alt="pokemon" src={imageUrl} />
  </div>
);

export default PokemonCard;
