import { toast } from 'react-toastify';
import { useState } from "react";



const Recipeitem = ({fetchAllRecipes, recipe}) => {

    const [edit, setEdit] = useState(false)
    const  [title, setTtitle] = useState(recipe.title)


    const handleDelete = (recipe) => {

        //confirm this message (confirm())
        const confirmUser = window.confirm("are you sure ?")
        if (confirmUser){
            fetch(`${process.env.REACT_APP_URL_API}/recipes/${recipe.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        
        })
        .then((data) => {
            toast("Recipe deleted");
            fetchAllRecipes()
        });
    }}

    const handleUpdate = (recipe, title) => {
        fetch(`${process.env.REACT_APP_URL_API}/recipes/${recipe.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title : title})
        })
        .then(response => response.json())
        .then(data => {
            toast("La recette a été modifiée");
            fetchAllRecipes();
        })
    }




    return ( 
    <li key={recipe.id} >
    {/* {recipe.title} */}
    {
        edit ? (
        <form onSubmit={() => handleUpdate(recipe, title)}>
            <input type="text" defaultValue={title} onChange={(e) => setTtitle(e.target.value)}/>
            <input type="submit" value="Valider"/>

        </form> 
        ) : (
            <p>{recipe.title}</p>
        )
    }

    <button onClick={() => handleDelete(recipe)}>delete</button>
    <button onClick={() => setEdit(true)}>Update</button>
    </li>
     );
}
 
export default Recipeitem;