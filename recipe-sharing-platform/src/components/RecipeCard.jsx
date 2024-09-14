// src/components/RecipeCard.jsx

import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card p-4 bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
      <p className="mt-2 text-gray-600">{recipe.summary}</p>
      <a href={`/recipe/${recipe.id}`} className="text-blue-500 mt-4 block">View Recipe</a>
    </div>
  );
};

export default RecipeCard;
