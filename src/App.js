import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./styles/main.css";

export default function App() {
  const [pokemon, setPokemon] = useState({ name: "", imageUrl: "" });
  return (
    <div className="App">
      <header>
        <h1>Pokemon Search</h1>
        <h4>Gotta fetch 'em all!</h4>
        <img
          alt="pokeball"
          src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-pokemon-ball-red-clipart-13.png"
        />
      </header>
      <section>
        <h6>Enter a number to search for a pokemon</h6>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const inputValue = document.getElementById("textInput").value;
            fetch("https://pokeapi.co/api/v2/pokemon/" + inputValue)
              .then((value) => value.json())
              .then((value) =>
                setPokemon({
                  name: value.name,
                  imageUrl: value.sprites.front_default
                })
              )
              .catch((err) => console.log(err));
          }}
        >
          <input
            id="textInput"
            onChange={(e) => {
              if (
                Number.isInteger(
                  parseInt(e.target.value[e.target.value.length - 1])
                )
              ) {
                console.log("is a number");
              } else {
                e.target.value = e.target.value.slice(0, -1);
              }
            }}
            type="text"
            placeholder="Pokemon N°"
            required
          />
          <input id="submitButton" type="submit" value="Search Pokemon" />
        </form>
        {pokemon.name === "" ? null : (
          <PokemonCard name={pokemon.name} imageUrl={pokemon.imageUrl} />
        )}
      </section>
    </div>
  );
}
