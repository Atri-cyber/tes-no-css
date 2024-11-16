// Ambil data dari LocalStorage
const animeList = JSON.parse(localStorage.getItem('animeList')) || [];
const animeListContainer = document.getElementById('anime-list');

// Cek apakah ada data
if (animeList.length === 0) {
    animeListContainer.innerHTML = '<p>No anime added yet.</p>';
} else {
    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');

        animeCard.innerHTML = `
            <img src="${anime.cover}" alt="${anime.title}" class="anime-cover">
            <h2 class="anime-title">${anime.title}</h2>
            <p class="anime-details">Story: ${anime.storyRating}/10</p>
            <p class="anime-details">Graphic: ${anime.graphicRating}/10</p>
            <p class="anime-details">Character: ${anime.characterRating}/10</p>
            <p class="anime-details">OST/OP/ED: ${anime.ostRating}/10</p>
            <p class="anime-details">Studio: ${anime.studio}</p>
            <p class="anime-details">Source: ${anime.source}</p>
            <p class="anime-details">Genre: ${anime.genre}</p>
        `;

        animeListContainer.appendChild(animeCard);
    });
}
