import React, {useEffect, useState} from 'react';
import RecipeCard from "../../molecules/RecipeCard";
import axios from "axios";
import {PrimaryButton} from "../../atoms/Button";
import RecipeModal from "../../molecules/RecipeModal";

const RecipeList = ({request}) => {
    const [recipes, setRecipes] = useState([])
    const [currentRecipe, setCurrentRecipe] = useState()
    const [response, setResponse] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        getRecipes()
    }, [request])
    const getRecipes = async (_cont) => {
        setIsLoading(true)
        try {
            await axios.get(`https://api.edamam.com/api/recipes/v2/?q=${request}&${_cont ? _cont : ''}&app_id=8a2d0c3f&app_key=1f790af7badfc909b77609ea492f25ca&type=public`).then(
                r => {
                    setResponse(r.data);
                    setRecipes(r.data.hits);
                }
            ).finally(() => setIsLoading(false))
        }catch (error){
            return(<div className="text-danger text-bg-danger">Something went wrong</div>)
        }
    }
    const [modal, setModal] = useState(false)
    const toggleModal = (label) => {
        if (modal) {
            setModal(false);
            setCurrentRecipe(null);
        } else {
            setModal(true);
            const recipe = recipes?.find((r) => r.recipe.label === label);
            setCurrentRecipe(recipe.recipe);
        }
        console.log(currentRecipe)
    };
    if (isLoading){
        return <div className="text-dark h3">Loading...</div>
    } else if(!recipes[0]){
        return <div className="text-dark h3">Sorry, we can't find {request.charAt(0).toUpperCase() + request.slice(1)} Recipes</div>
    }else {
    return (
        <>
            {modal && <RecipeModal recipe={currentRecipe} toggleModal={toggleModal} />}

            <h1 className={"m-3"}>{request.charAt(0).toUpperCase() + request.slice(1)} Recipes</h1>

            <div className="row m-2">
                {recipes?.map((r) => (
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={r.recipe.uri}>
                        <div className="d-flex justify-content-center">
                            <RecipeCard toggleModal={(r) => toggleModal(r)} type={r.recipe.mealType} image={r.recipe.image} title={r.recipe.label} text="sup recipe" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="m-3 d-flex float-end">
                <PrimaryButton onClick={()=>getRecipes(response._links.next.href)}>Next Page</PrimaryButton>
            </div>
        </>
    );}
};

export default RecipeList;