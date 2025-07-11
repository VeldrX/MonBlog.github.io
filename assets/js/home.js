fetch('assets/articles/articles.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('articles-list');

        data.forEach(article => {
            const card = document.createElement('article');
            card.classList.add('article-card');

            card.innerHTML = `
        <h3>${article.title}</h3>
        <p class="date">${article.date}</p>
        <p>${article.summary}</p>
        <a href="assets/articles/${article.file}" class="btn">Lire l’article</a>
      `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Erreur lors du chargement des articles :', error);
    });
