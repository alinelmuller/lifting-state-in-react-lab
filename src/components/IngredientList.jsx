
const IngredientList = (props) => {
    return (
        <>
            <ul>
                {props.availableIngredients.map((ingredient, index) => (
                    <li key={index} style={{backgroundColor: ingredient.color}}>
                        {ingredient.name}
                        <button onClick={() => props.handleAdd(ingredient.name, ingredient.color)}>x</button>
                    </li>
                ))}
            </ul>
            
        </>
    ); 
};
  
export default IngredientList;
  