export const fetchBlogs = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
      return data.recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        date: new Date().toLocaleDateString(),
        image: recipe.image,
        description: recipe.description || recipe.instructions
      }));
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  };