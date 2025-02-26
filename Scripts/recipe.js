const nameEl = document.getElementById("name");
const imageEl = document.getElementById("image");
const cousineEl = document.getElementById("cousine");
const mealTypeEl = document.getElementById("meal-type");
const prepTimeEl = document.getElementById("prepTime");
const cookTimeEl = document.getElementById("cookTime");
const servingsEl = document.getElementById("servings");
const difficultyEl = document.getElementById("difficulty");
const calEl = document.getElementById("cal");
const ratingsEl = document.getElementById("ratings");
const reviewsEl = document.getElementById("reviews");
const ingredientsEl = document.getElementById("ingredients");
const instructionsEl = document.getElementById("instructions");
const tagsEl = document.getElementById("tags");


async function loadRecipe() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("id");

        const response = await   fetch(`https://dummyjson.com/recipes/${searchQuery}`);
        const recipe = await response.json()

        nameEl.textContent = recipe.name;
        imageEl.src = recipe.image;
        imageEl.alt = recipe.name;
        cousineEl.textContent = recipe.cuisine;
        mealTypeEl.textContent = recipe.mealType.join(" | ");
        prepTimeEl.textContent = recipe.prepTimeMinutes;
        cookTimeEl.textContent = recipe.cookTimeMinutes;
        servingsEl.textContent = recipe.servings;
        difficultyEl.textContent = recipe.difficulty;
        calEl.textContent = recipe.caloriesPerServing;
        ratingsEl.textContent = recipe.rating;
        reviewsEl.textContent = recipe.reviewCount;
        recipe.ingredients.forEach(ingredient => {
            let li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsEl.appendChild(li);
        });
        recipe.instructions.forEach(instruction => {
            let li = document.createElement("li");
            li.textContent = instruction;
            instructionsEl.appendChild(li);
        });

        recipe.tags.forEach(tag => tagsEl.innerHTML += `<span class="tag">${tag}</span>`);
        console.log("Fetched Recipe:", recipe);

    } catch (error) {
        console.error("Error loading recipe:", error);
    }
}
loadRecipe()



