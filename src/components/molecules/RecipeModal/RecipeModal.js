import React from 'react';
import styles from './RecipeModal.module.css'
import {PrimaryButton} from "../../atoms/Button";
const RecipeModal = ({recipe, toggleModal}) => {
    const handleOverlayClick = (event) => {
        // Check if the click occurred on the overlay element
        if (event.target.classList.contains(styles['modal-overlay'])) {
            toggleModal();
        }
    };
    return (
        <div className={styles['modal-overlay']} onClick={handleOverlayClick}>
            <div className={`${styles['recipe-modal']} ${styles['wide']}`}>
                <div className={styles['image-container']}>
                    <img src={recipe.image} className={styles['image']} alt={recipe.label} />
                    <div className={styles['overlay']}></div>
                </div>
                <div className={styles['modal-content']}>
                    <h5 className={styles['modal-title']}>{recipe.label}</h5>
                    <p className={styles['modal-description']}>{recipe.description}</p>
                    <ul className={styles['modal-details']}>
                        <li>
                            <strong>Ingredients:</strong>
                            <ul>
                                {recipe.ingredients.map((ingredient) => (
                                    <li key={ingredient.text}>{ingredient.text}</li>
                                ))}
                            </ul>
                        </li>

                    </ul>
                    <PrimaryButton><a href={recipe.shareAs} target="_blank" rel="noopener noreferrer" className={styles['modal-link']}>Full Recipe</a></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default RecipeModal;