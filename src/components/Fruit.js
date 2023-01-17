const Fruit = ({fruitInfo, onFruitDelete}) => {
    //State
    
    //Comportements
    
    //Affichage
    return (
        <li>
            {fruitInfo.nom}
            <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
        </li>
    );
};

export default Fruit;