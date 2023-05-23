import React, {useEffect, useState} from 'react';
import RecipeCard from "../../molecules/RecipeCard";
import axios from "axios";
import {PrimaryButton} from "../../atoms/Button";
const RecipeList = ({request}) => {
    const [recipes, setRecipes] = useState()

    useEffect(()=>{
        getRecipes()
    }, [request])
    const getRecipes = async () => {
        await axios.get(`https://api.edamam.com/api/recipes/v2/?q=${request}&app_id=8a2d0c3f&app_key=1f790af7badfc909b77609ea492f25ca&type=public`).then(
            r => setRecipes(r.data.hits)
        )
    }

    return (
        <>
            <h1>Recipes</h1>

            <div className="row m-2">
            {recipes?.map((r) => (
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={r.recipe.label}>
                    <div className="d-flex justify-content-center">
                        <RecipeCard image={r.recipe.image} title={r.recipe.label} text="sup recipe" />
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default RecipeList;