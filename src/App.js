import Meal from "./Components/Meal/Meal";
import {Routes, Route} from 'react-router-dom'
import RecipeInfo from "./Components/RecipeInfo/RecipeInfo";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Meal/>}/>
      <Route path="/:MealId" element={<RecipeInfo/>}/>
    </Routes>
    </>
  );
}

export default App;
