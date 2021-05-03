import React from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.filterSearch = this.filterSearch.bind(this);
    this.state = {
      searchTerm: "",
      pokemonList: [],
      allData: [],
      pokemon: undefined,
    };
  }

  filterSearch(searchTerm) {
    let results = this.state.allData.filter(
      (pokemon) => searchTerm === pokemon.name.slice(0, searchTerm.length)
    );
    this.setState({ searchTerm, pokemonList: results });
  }
  render() {
    let { pokemonList, searchTerm } = this.state;
    console.log(localStorage);

    return (
      /*<div>
        <SearchBar onChangeSearch={this.filterSearch} />
        {searchTerm.length > 0 ? (
          pokemonList.length > 0 ? (
            <>
              {pokemonList.length} search results for {searchTerm}:
              <PokemonList pokemonList={pokemonList} />
            </>
          ) : (
            <>You don't have that Pokemon!</>
          )
        ) : (
          <PokemonList
            pokemonList={JSON.parse(localStorage.getItem("favorites"))}
          />
        )}
      </div>*/
      <div
        style={{
          width: "300%",
          textAlign: "right",
          fontSize: "3em",
          marginTop: "2em",
        }}
      >
        Oh no! Pokemon Center is closed! <br></br>
        Try Again Later!
      </div>
    );
  }
}
export default Favorites;
