// Récupère l'ID dans l'URL
const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");

fetch("articles.json")
    .then(res => res.json())
    .then(data => {
        const article = data.find(a => a.id === articleId);
        const container = document.getElementById("article-container");

        if (article) {
            container.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>${article.date}</strong></p>
        ${article.content}
      `;
        } else {
            container.innerHTML = "<p>Article introuvable.</p>";
        }
    });
