import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorites from "./Favorites";
import Manager from "./Manager";
import About from "./About";
import Navbar from "./Navbar";
import DetailsDisplay from "./DetailsDisplay";

class App extends React.Component {
  constructor() {
    super();
    this.state = { baseURL: "https://pokeapi.co/api/v2/pokemon/" };
  }

  /*componentDidMount(term) {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(function (response) {
      console.log(response);
    });
  }*/

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <div>
              <Navbar></Navbar>
              <div style={{ marginTop: "100px" }}>
                <Manager />
              </div>
            </div>
          </Route>
          <Route path="/favorites" exact>
            <div>
              <Navbar></Navbar>
              <div style={{ marginTop: "100px" }}>
                <Favorites></Favorites>
              </div>
            </div>
          </Route>
          <Route path="/about" exact>
            <div>
              <Navbar></Navbar>
              <div style={{ marginTop: "100px" }}>
                <About></About>
              </div>
            </div>
          </Route>
          <Route path="/pokemon/:name" exact component={DetailsDisplay} />
        </Switch>
      </BrowserRouter>
    );
  }
}
//<Manager /> izmedu diva
export default App;
