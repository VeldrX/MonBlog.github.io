fetch("articles.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("articles-container");
        data.forEach(article => {
            const card = document.createElement("div");
            card.className = "article-card";
            card.innerHTML = `
        <h3>${article.title}</h3>
        <p><strong>${article.date}</strong></p>
        <p>${article.summary}</p>
        <a href="article.html?id=${article.id}">Lire l'article</a>
      `;
            container.appendChild(card);
        });
    })
    .catch(err => {
        console.error("Erreur chargement JSON :", err);
    });
