import React from "react";
import Display from "./Display";
import "../styles/PokemonList.css";
import { Waypoint } from "react-waypoint";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 12,
    };
  }

  render() {
    return (
      <div className="list">
        {this.props.pokemonList.slice(0, this.state.scrolled).map((pokemon) => (
          <Display className="display" url={pokemon.url} key={pokemon.name} />
        ))}
        <Waypoint
          onEnter={() => {
            this.setState({ scrolled: this.state.scrolled + 12 });
          }}
        />
        {this.props.pokemonList
          .slice(this.state.scrolled, this.state.scrolled + 3)
          .map((pokemon) => (
            <Display className="display" url={pokemon.url} key={pokemon.name} />
          ))}
      </div>
    );
  }
}

export default PokemonList;
