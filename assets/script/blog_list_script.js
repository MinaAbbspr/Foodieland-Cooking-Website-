//Search
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input");

    if (!searchInput) return;
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const articles = document.querySelectorAll(".main-column article");
        articles.forEach((article) => {
            const titleElement = article.querySelector("h2");
            if (titleElement) {
                const titleText = titleElement.textContent.toLowerCase();
                if (titleText.includes(query)) {
                    article.style.display = "";
                } else {
                    article.style.display = "none";
                }
            }
        });
    });
});
/*
document.addEventListener("DOMContentLoaded", () => {
    const pageButtons = document.querySelectorAll(".pagination .page-num");
    const articles = document.querySelectorAll(".main-column article");

    function showPage(pageNumber) {
        articles.forEach((article) => {
            const articlePage = article.getAttribute("data-page");
            
            if (articlePage === pageNumber) {
                article.style.setProperty("display", "flex", "important");
            } else {
                article.style.setProperty("display", "none", "important");
            }
        });
    }
    showPage("1");
    pageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const clickedPage = button.textContent.trim();
            if (clickedPage === "1" || clickedPage === "2" || clickedPage === "3") {
                document.querySelector(".pagination .page-num.active")?.classList.remove("active");
                button.classList.add("active");
                showPage(clickedPage);
            }
        });
    });
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const pageButtons = document.querySelectorAll(".pagination .page-num");
    const articles =  Array.from(document.querySelectorAll(".main-column article"));
    const mainColumn = document.querySelector('.main-column');
    function reorderArticles(mod, a, b) {
        if (articles.length === 0) return;

        const oddIndexArticles = articles.filter((_, index) => index % mod === a);
        const evenIndexArticles = articles.filter((_, index) => index % mod === b);
        
        const reorderedArticles = [...oddIndexArticles, ...evenIndexArticles];
        
        while (mainColumn.firstChild) {
            mainColumn.removeChild(mainColumn.firstChild);
        }
        
        reorderedArticles.forEach(article => {
            mainColumn.appendChild(article);
        });
    }

    pageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const clickedPage = button.textContent.trim();
            if (clickedPage === "1" || clickedPage === "2" || clickedPage === "3") {
                document.querySelector(".pagination .page-num.active")?.classList.remove("active");
                button.classList.add("active");
                if(clickedPage === "1"){
                    while (mainColumn.firstChild) {
                        mainColumn.removeChild(mainColumn.firstChild);
                    }
                    
                    articles.forEach(article => {
                        mainColumn.appendChild(article);
                    });
                }
                else if (clickedPage === "2") {
                    reorderArticles(2,0,1);
                } else {
                    reorderArticles(2,1,0);
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const recipeCards = document.querySelectorAll(".post-card");

    recipeCards.forEach(card => {
        card.addEventListener('click', function (event) {
            if (event.target.closest('button')) {
                return;
            }
            window.location.href = 'Blog_Post_Page.html'; 
        });
    });
    
});