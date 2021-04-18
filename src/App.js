import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends component {
  render() {
    return (
      <div>
        <FormularioCadastro />
        <ListaDeNotas />
      </div>
    );
  }
}

export default App;
