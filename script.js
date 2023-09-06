// Your JavaScript code to fetch and display anime data here

const apiUrl = "https://api.jikan.moe/v4/anime";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const animeList = data.data.sort((b, a) => b.popularity - a.popularity);
    const animeContainer = document.getElementById("anime-container");

    animeList.forEach((anime) => {
      const animeCard = document.createElement("div");
      animeCard.classList.add("anime-card");

      // Create an image element
      const animeImage = document.createElement("img");
      animeImage.classList.add("anime-image");
      animeImage.src = anime.images.webp.image_url;
      animeImage.alt = anime.title;

      // Create a title element
      const animeTitle = document.createElement("p");
      animeTitle.textContent = anime.title;

      // Create episodes element
      const episodes = document.createElement("p");
      episodes.textContent = `Episodes: ${anime.episodes}`;
      episodes.classList.add("episodes");

      // Create anime URL link
      const animeUrl = document.createElement("a");
      animeUrl.href = anime.url;
      animeUrl.classList.add("anime-url-button");
      animeUrl.target = "_blank"; // Opens in a new tab
      animeUrl.textContent = "Anime URL";
      // Create a link to the YouTube trailer
      const trailerLink = document.createElement("a");
      trailerLink.classList.add("watch-trailer-button");
      trailerLink.href = anime.trailer.url;
      trailerLink.target = "_blank"; // Opens in a new tab
      trailerLink.textContent = "Watch Trailer";

      // Append elements to the card
      animeCard.appendChild(animeImage);
      animeCard.appendChild(animeTitle);
      animeCard.appendChild(episodes);
      animeCard.appendChild(animeUrl);
      animeCard.appendChild(trailerLink);

      // Append the card to the container
      animeContainer.appendChild(animeCard);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
