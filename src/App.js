import {PrimaryButton, SecondaryButton, SuccessButton} from "./components/atoms/Button";
import './App.css';

function App() {
  return (
    <div className="App">
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SuccessButton>Success</SuccessButton>
    </div>
  );
}

export default App;
