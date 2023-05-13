import {PrimaryButton, SecondaryButton, SuccessButton} from "./components/atoms/Button";
import {PrimaryInput} from "./components/atoms/Input";
import './App.css';

function App() {
  return (
    <div className="App">
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <SuccessButton>Success</SuccessButton>
        <PrimaryInput placeholder="Primary" />
    </div>
  );
}

export default App;
