document.getElementById('Home').onclick = function() {
    window.location.href = 'Home_Page.html';
};
document.getElementById('Recipes').onclick = function() {
    window.location.href = 'Recipe_Details.html';
};
document.getElementById('Blog').onclick = function() {
    window.location.href = 'Blog_List_Page.html';
};
document.getElementById('Contact').onclick = function() {
    window.location.href = 'Contact_Page.html';
};
document.addEventListener("DOMContentLoaded", function () {
    const recipeCards = document.querySelectorAll(".sug-card, .recipe-card, .mini-recipe-card");

    recipeCards.forEach(card => {
        card.addEventListener('click', function (event) {
            if (event.target.closest('button')) {
                return;
            }
            window.location.href = 'Recipe_Details.html'; 
        });
    });
    
});