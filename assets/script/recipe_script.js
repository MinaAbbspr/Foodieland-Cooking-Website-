async function fetchAndRenderRecipeDetails() {
    const loadingContainer = document.getElementById('recipeLoading');
    const contentWrapper = document.getElementById('recipeContentWrapper');

    const titleEl = document.getElementById('recipeTitle');
    const authorImgEl = document.getElementById('authorImage');
    const authorNameEl = document.getElementById('authorName');
    const postDateEl = document.getElementById('postDate');
    const prepTimeEl = document.getElementById('prepTimeValue');
    const cookTimeEl = document.getElementById('cookTimeValue');
    const categoryEl = document.getElementById('categoryValue');
    const mainImgEl = document.getElementById('mainRecipeImage');

    const caloriesEl = document.getElementById('caloriesValue');
    const fatEl = document.getElementById('fatValue');
    const proteinEl = document.getElementById('proteinValue');
    const carbsEl = document.getElementById('carbsValue');
    const cholesterolEl = document.getElementById('cholesterolValue');
    const descEl = document.getElementById('recipeDescription');
    const footerDescEl = document.getElementById('mainFooterDescription');

    if (loadingContainer) loadingContainer.style.display = 'flex';
    if (contentWrapper) contentWrapper.style.display = 'none';

    try {
        const response = await fetch('https://foodieland-oq9b.onrender.com/api/recipe-details/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        titleEl.textContent = data.title || 'No Title';
        authorNameEl.textContent = data.author?.name || 'Anonymous';
        postDateEl.textContent = data.author?.date || '';
        prepTimeEl.textContent = data.prepTime || '--';
        cookTimeEl.textContent = data.cookTime || '--';
        categoryEl.textContent = data.category || 'General';

        caloriesEl.textContent = data.nutrition.calories || '0 kcal';
        fatEl.textContent = data.nutrition.totalFat || '0 g';
        proteinEl.textContent = data.nutrition.protein || '0 g';
        carbsEl.textContent = data.nutrition.carbohydrate || '0 g';
        cholesterolEl.textContent = data.nutrition.cholesterol || '0 mg';
        
        footerDescEl.textContent = data.description;

        authorImgEl.src = data.author.image;
        authorImgEl.onerror = function() {
            this.src = "../assets/img/recipedetails/user-default.png"; 
        };
        mainImgEl.src = data.mainImage;
        mainImgEl.onerror = function() {
            this.src = "../assets/img/recipedetails/Group 13937.png";
        };

    } catch (error) {
        console.error('Error fetching recipe details:', error);
        if (descEl) {
            descEl.textContent = 'Failed to load dynamic network content. Please check your connection.';
            descEl.style.color = '#FF4A4A';
        }
    } finally {
        if (loadingContainer) loadingContainer.style.display = 'none';
        if (contentWrapper) contentWrapper.style.display = 'block';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    fetchAndRenderRecipeDetails();
});