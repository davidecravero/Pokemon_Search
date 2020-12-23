import React from "react";
import "../styles/PokeCard.css";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, imageUrl } = this.props;
    return (
      <div id="card">
        You chose<div id="pokemon">{name}</div>
        <img alt="pokemon" src={imageUrl} />
      </div>
    );
  }
}

export default PokemonCard;
