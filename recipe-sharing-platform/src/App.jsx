import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx'; // Updated extension
import RecipeDetail from './components/RecipeDetail.jsx'; // Updated extension
import AddRecipeForm from './components/AddRecipeForm.jsx'; // If applicable

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
