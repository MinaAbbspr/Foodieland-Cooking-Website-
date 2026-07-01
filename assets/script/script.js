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


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        if (!emailInput.value) return;
        const emailValue = emailInput.value;

        const submitButton = newsletterForm.querySelector('button');
        const originalButtonText = submitButton.innerText;
        submitButton.innerText = "Connecting to server...";
        submitButton.disabled = true;

        try {
            const response = await fetch('https://foodieland-oq9b.onrender.com/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({email: emailValue })
            });

            if (response.ok) {
                alert('Your email has been registered successfully.');
                newsletterForm.reset();
            } else {
                const errorText = await response.text();
                alert(`Server responded with error ${response.status}. Please try again.`);
            }

        } catch (error) {
            alert('Could not connect to the server. Please check your internet connection.');
        } finally {
            submitButton.innerText = originalButtonText;
            submitButton.disabled = false;
        }
    });
});