import { useEffect, useState } from "react";
import FormRecipe from "./components/FormRecipe";
import RecipeList from "./components/RecipeList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    console.log("RecipeList component mounted");
    fetchAllRecipes()
  }, [])

  const fetchAllRecipes = () => {
    fetch(`${process.env.REACT_APP_URL_API}/recipes`)
    .then((response) => response.json())
    .then((data) => {
      setRecipeList(data);
    });
  }

  return (
    <div className="App">
      Hello app

      <FormRecipe fetchAllRecipes={fetchAllRecipes} />

      <RecipeList recipeList={recipeList} fetchAllRecipes={fetchAllRecipes}/>
      <ToastContainer />
    </div>
  );
}

export default App;
