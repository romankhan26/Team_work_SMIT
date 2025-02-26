async function loadRecipes() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const res = await response.json()
        const recipes = res.recipes

        // console.log("Fetched Recipes:", recipes);

        if (recipes.length > 0) {
            for (let i = 0; i < recipes.length; i++) {
                displayRecipe(recipes[i]); 
            }
        }
    } catch (error) {
        console.error("Error loading recipes:", error);
    }
}

function displayRecipe(recipe) {
    const main = document.getElementById("main");
    const blogCard = document.createElement("div");
    blogCard.className = "blogcard";
    blogCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3 class="blog-title">${recipe.name}</h3>   
        <button class="view-button" data-id="${recipe.id}" onclick="openBlogPage(${recipe.id})">View Recipe</button>
    `;
    main.appendChild(blogCard);


    const viewButton = blogCard.querySelector(".view-button");
    viewButton.addEventListener("click", function () {
        openBlogPage(recipe.id);
    });
}

function openBlogPage(recipeId) {
    console.log("Clicked Recipe ID:", recipeId);
    window.location.href = `recipe.html?id=${recipeId}`;
}
window.onload = loadRecipes;

