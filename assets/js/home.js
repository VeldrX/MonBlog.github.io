fetch('assets/articles/articles.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('articles-list');

        data.forEach(article => {
            // Crée un lien englobant toute la carte
            const cardLink = document.createElement('a');
            cardLink.classList.add('article-card');
            cardLink.href = `assets/articles/${article.file}`;

            cardLink.innerHTML = `
                <h3>${article.title}</h3>
                <p class="date">${article.date}</p>
                <p>${article.summary}</p>
            `;

            container.appendChild(cardLink);
        });
    })
    .catch(error => {
        console.error('Erreur lors du chargement des articles :', error);
    });
