import { useState } from "react";

const FruitForm = ({handleAdd}) => {
    //State
    const [nouveauFruit, setNouveauFruit] = useState("");
    //Comportements
    const handleSubmit = (e) => {
        e.preventDefault();     
        //2.Manipuler le state
        const id = new Date().getTime();
        const nom = nouveauFruit
        const fuitAAjouter = {id,nom}      
        //3. modifier le state avec le setter
        handleAdd(fuitAAjouter)
        setNouveauFruit("")
      };
    
      const handleChange = (e) => {
        setNouveauFruit(e.target.value);
      }
    //Affichage
    return (
        <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
    );
};

export default FruitForm;