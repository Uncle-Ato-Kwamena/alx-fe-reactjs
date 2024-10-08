import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow overflow-hidden">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-700">{recipe.summary}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
