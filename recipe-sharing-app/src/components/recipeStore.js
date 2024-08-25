import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Array used to hold all recipes
  favorites: [], // Array ude to hold favorite recipe IDs
  recommendations: [], // Array used to hold recommended recipes
  
  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  // remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  //  update a recipe EditRecipeForm
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  
  // to delete a recipe
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // used to generate recommendations based on user favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // This action to set's the recipes list
  setRecipes: (recipes) => set({ recipes }),
  
  // to set the search rule
  setSearchTerm: (term) => set({ searchTerm: term }),

  //  filter recipes based on search rule
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // first search term and filtered recipes
  searchTerm: '',
  filteredRecipes: [],
}));

export default useRecipeStore;