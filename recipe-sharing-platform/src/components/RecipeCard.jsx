import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="p-4 bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.summary}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
