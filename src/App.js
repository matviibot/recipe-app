import {PrimaryButton, SecondaryButton, SuccessButton} from "./components/atoms/Button";
import {PrimaryInput} from "./components/atoms/Input";
import { PrimaryText, SecondaryText, DangerText, WarningText, InfoText, SuccessText, MutedText, WhiteText, BlackText, DarkText } from "./components/atoms/Text";
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
            <PrimaryInput placeholder="Primary"/>
        </div>
    );
}

export default App;
