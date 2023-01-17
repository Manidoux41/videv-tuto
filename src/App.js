import React, { useState } from "react";

const App = () => {
  // state (état, donnée)
  const [fruits, setFruits] = useState([
    {id: 1, nom: 'Abricot'},
    {id: 2, nom: 'Banane'},
    {id: 3, nom: 'Cerise'}
  ])

  // comportements
 const handleDelete = (id) => {
  console.log(id)
  //1. copie du state
  const fruitsCopy = [...fruits]
  //2.Manipuler le state
  const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id)
  //3. modifier le state avec le setter
  setFruits(fruitsCopyUpdated)
 }

  // affichage(render)
  return (
    <>
      <h1>Liste de Fruits</h1>
      <ul>
        {fruits.map((fruit) => 
          <li key={fruit.id}>
            {fruit.nom}
            <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default App;
