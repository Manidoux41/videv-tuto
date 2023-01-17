import React, { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

const App = () => {
  // state (état, donnée)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

 

  //const inputRef = useRef()

  // comportements
  const handleDelete = (id) => {
    //1. copie du state
    const fruitsCopy = [...fruits];
    //2.Manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fuitAAjouter) => {
    //1. copie du state
    const fruitsCopy = [...fruits];
    fruitsCopy.push(fuitAAjouter)
    setFruits(fruitsCopy);
  }


  // affichage(render)
  return (
    <>
      <h1>Liste de Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onFruitDelete={handleDelete}  key={fruit.id}/>
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd}/>
    </>
  );
};

export default App;
