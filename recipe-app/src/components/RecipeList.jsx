
import Recipeitem from './Recipeitem';


const RecipeList = ({recipeList, fetchAllRecipes}) => {

    return ( 
        <ul className="recipe-list">
            {recipeList.map( recipe => (
               <Recipeitem key={recipe.id} fetchAllRecipes={fetchAllRecipes} recipe={recipe}/>
            ))}
        </ul>
     );
}
 
export default RecipeList;