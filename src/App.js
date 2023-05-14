import {PrimaryButton, SecondaryButton, SuccessButton} from "./components/atoms/Button";
import {PrimaryInput} from "./components/atoms/Input";
import {
    PrimaryText,
    SecondaryText,
    DangerText,
    WarningText,
    InfoText,
    SuccessText,
    MutedText,
    WhiteText,
    BlackText,
    DarkText
} from "./components/atoms/Text";
import RecipeCard from "./components/molecules/RecipeCard";
import './App.css';

function App() {
    return (
        <div className="App ">
            <h1>Text Variants</h1>
            <PrimaryText>Primary Text</PrimaryText>
            <SecondaryText>Secondary Text</SecondaryText>
            <DangerText>Danger Text</DangerText>
            <WarningText>Warning Text</WarningText>
            <InfoText>Info Text</InfoText>
            <SuccessText>Success Text</SuccessText>
            <MutedText>Muted Text</MutedText>
            <WhiteText>White Text</WhiteText>
            <BlackText>Black Text</BlackText>
            <DarkText>Dark Text</DarkText>

            <h1>Input Variants</h1>
            <PrimaryInput placeholder="Primary Input"/>

            <h1>Button Variants</h1>
            <PrimaryButton>Primary</PrimaryButton>
            <SecondaryButton>Secondary</SecondaryButton>
            <SuccessButton>Success</SuccessButton>

            <h1>Recipe Cards</h1>
            <div className="row">
                {(() => {
                    const recipeCards = [];
                    for (let i = 0; i < 12; i++) {
                        recipeCards.push(
                            <div className="col col-lg-2">
                                <div className="d-flex justify-content-center">
                                    <RecipeCard
                                        image="https://static.onecms.io/wp-content/uploads/sites/43/2022/05/26/8805-CrispyFriedChicken-mfs-3x2-072.jpg"
                                        title="Chikem" text="chikem recipe"/>
                                </div>
                            </div>
                        );
                    }
                    return recipeCards;
                })()}
            </div>
        </div>
    );
}

export default App;
