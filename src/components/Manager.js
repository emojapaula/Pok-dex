//import React from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import React from "react";

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.filterSearch = this.filterSearch.bind(this);
    this.state = { searchTerm: "", pokemonList: [], allData: [] };
  }

  async componentDidMount() {
    await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1119", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((pokemonList) =>
        this.setState({
          allData: pokemonList.results,
        })
      );
  }

  filterSearch(searchTerm) {
    let results = this.state.allData.filter(
      (pokemon) => searchTerm === pokemon.name.slice(0, searchTerm.length)
    );
    this.setState({ searchTerm, pokemonList: results });
  }
  render() {
    let { pokemonList, searchTerm, allData } = this.state;
    return (
      <div>
        <SearchBar onChangeSearch={this.filterSearch} />

        {searchTerm.length > 0 ? (
          pokemonList.length > 0 ? (
            <>
              <div
                style={{
                  fontSize: "1.8em",
                  letterSpacing: "2px",
                  color: "#626662",
                  width: "200%",
                }}
              >
                {pokemonList.length} search results for {searchTerm}:
              </div>
              <PokemonList pokemonList={pokemonList} />
            </>
          ) : (
            <div
              style={{
                fontSize: "1.8em",
                letterSpacing: "2px",
                color: "#626662",
                width: "200%",
              }}
            >
              That Pokémon has not been discovered yet!
            </div>
          )
        ) : (
          <PokemonList pokemonList={allData} />
        )}
      </div>
    );
  }
}

export default Manager;
