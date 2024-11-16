document.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem("currentUser");

    // Memastikan hanya user "Atri" yang dapat mengakses halaman ini
    if (currentUser !== "Atri") {
    
    } else {
        // Fungsi untuk menyimpan data anime ke Local Storage
        document.getElementById("animeForm").addEventListener("submit", (event) => {
            event.preventDefault();

            const title = document.getElementById("title").value;
            const cover = document.getElementById("cover").value;
            const story = parseInt(document.getElementById("story").value);
            const graphic = parseInt(document.getElementById("graphic").value);
            const character = parseInt(document.getElementById("character").value);
            const ost = parseInt(document.getElementById("ost").value);
            const studio = document.getElementById("studio").value;
            const source = document.getElementById("source").value;
            const genre = document.getElementById("genre").value.split(",").map(g => g.trim());

            const newAnime = {
                title,
                cover,
                rating: { story, graphic, character, ost },
                studio,
                source,
                genre
            };

            let animeList = JSON.parse(localStorage.getItem("animeList")) || [];
            animeList.push(newAnime);
            localStorage.setItem("animeList", JSON.stringify(animeList));

            document.getElementById("animeForm").reset();
            alert("Anime added successfully!");
        });
    }
});
