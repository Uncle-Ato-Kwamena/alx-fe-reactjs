import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx'; 
import RecipeDetail from './components/RecipeDetail.jsx'; 
import AddRecipeForm from './components/AddRecipeForm.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* If you have this route */}
      </Routes>
    </Router>
  );
}

export default App;
