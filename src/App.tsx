import { useState } from "react";

import InputSelect from "./components/SelectInput";

import "./App.css";
import SelectInputDep from "./components/SelectInputDep";
import Data from './components/Data.json'
import SelectInputMun from "./components/SelectInputMun";



function App() {
  const Autos = ["Audi", "BMW", "Mercedes"];
  const Animales = ["Perro", "Gato", "Pez"];
  const Futbol = ["Barcelona", "Real Madrid", "Atletico Madrid"];

  const [lista, setLista] = useState<string[]>(Autos);
  const [dep, setdep] = useState<number>(0);
  const listaInicial = ["Autos", "Animales", "Futbol"];


  const onHandleSelectedIndexChanged = (index: number) => {
    // Dependiendo del indice va a escoger que lista debe cargar en el segundo dropDown list
    // Logica para escoger cual es el arreglo que se debe cargar, si es Autos, Animales o Futbol
    // Ese valor lo carga en el estado lista
    // setLista(Autos); si el valor index es 1
    // setLista(Animales); si el valor index es 2
    // setLista(Futbol); si el valor index es 3
    switch (index) {
      case 0:
        setLista(Autos);
        break;
      case 1:
        setLista(Animales);
        break;
      case 2:
        setLista(Futbol);
        break;
      default:
        setLista([]);
    }
  };

  const onSelectedIndexChanged1 = (index: number) => {
    console.log('llega', index);
    setdep(index)
  }
  console.log(dep);
  return (
    <>
      <h1>Eventos</h1>
      <hr />
      <InputSelect
        cargaInicial={listaInicial}
        onSelectedIndexChanged={onHandleSelectedIndexChanged}
      />
      <InputSelect
        cargaInicial={lista}
        onSelectedIndexChanged={(index: any) => console.log(index)}
      />

      <div id="container">
        <div id="item"><SelectInputDep cargaInicial={Data} onSelectedIndexChanged1={onSelectedIndexChanged1} /></div>
        <div id="item"> <SelectInputMun cargaInicial={Data} id_depa={dep}></SelectInputMun></div>
      </div>
    </>
  );
}

export default App;
