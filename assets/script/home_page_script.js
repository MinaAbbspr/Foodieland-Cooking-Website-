document.getElementById('View Recipes').onclick = function() {
    window.location.href = 'Recipe_Details.html';
};

async function fetchAndRenderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    const loadingContainer = document.querySelector('.loading-container');

    if (loadingContainer) {
        loadingContainer.style.display = 'flex';
    }
    categoriesGrid.textContent = '';

    try {
        const response = await fetch('https://foodieland-oq9b.onrender.com/api/categories');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const categories = await response.json();

        categories.forEach(category => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'cat-card card';
            const imgShadow = document.createElement('img');
            imgShadow.src = category.image;
            imgShadow.alt = category.name;
            imgShadow.className = 'cat-img-shadow';
            const imgMain = document.createElement('img');
            imgMain.src = category.image;
            imgMain.alt = category.name;
            imgMain.className = 'cat-img';
            const p = document.createElement('p');
            p.textContent = category.name;
            cardDiv.appendChild(imgShadow);
            cardDiv.appendChild(imgMain);
            cardDiv.appendChild(p);
            categoriesGrid.appendChild(cardDiv);
        });

    } catch (error) {
        console.error('Error fetching categories:', error);
        const errorParagraph = document.createElement('p');
        errorParagraph.className = 'error-text';
        errorParagraph.textContent = 'Failed to load categories. Please refresh the page.';
        categoriesGrid.appendChild(errorParagraph);
        
    } finally {
        if (loadingContainer) {
            loadingContainer.style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetchAndRenderCategories();
});