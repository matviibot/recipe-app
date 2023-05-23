import './App.css';
import RecipeList from "./components/organisms/RecipeList/RecipeList";
import Header from "./components/organisms/Header/Header";
import {useState} from "react";

function App() {
    const [request, setRequest] = useState('cake')
    return (
        <div className="App">
            <Header setRequest={setRequest}/>
            <RecipeList request={request}/>
        </div>
    );
}

export default App;
