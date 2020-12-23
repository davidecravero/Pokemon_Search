import React from "react";
import PokemonCard from "./components/PokemonCard.class";
import "./styles/main.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {
        name: "",
        imageUrl: ""
      }
    };
  }

  render() {
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
                  this.setState({
                    pokemon: {
                      name: value.name,
                      imageUrl: value.sprites.front_default
                    }
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
          {this.state.pokemon.name === "" ? null : (
            <PokemonCard
              name={this.state.pokemon.name}
              imageUrl={this.state.pokemon.imageUrl}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
