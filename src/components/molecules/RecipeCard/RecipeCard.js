import React from 'react';
import {PrimaryButton} from "../../atoms/Button";

const RecipeCard = ({image, title, type, toggleModal}) => {
    return (<div className="card mb-4" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="recipe img"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="text-muted">{type.map(t=>t+" ")}</p>
                <PrimaryButton type="submit" onClick={()=>toggleModal(title)} className="btn btn-primary">View Recipe</PrimaryButton>
            </div>
        </div>

    );
};

export default RecipeCard;