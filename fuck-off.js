function fetchRandomJoke() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // I use CORS proxy URL  to prevent blocking.
  const apiUrl = 'https://evilinsult.com/generate_insult.php';

  const timestamp = Date.now();
  const randomUrl = `${apiUrl}?_=${timestamp}`; // I used this method to avoid caching by the browser.

  return fetch(proxyUrl + randomUrl)
    .then(response => response.text())
    .then(data => {
      return data.trim();
    });
}


// 
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", () => {
  fetchRandomJoke()
    .then(joke => {
      const jokeContainer = document.getElementById("joke-container");
      const jokeText = document.getElementById("joke-text");
      jokeText.textContent = joke;
      jokeContainer.style.display = "block";
    })
    .catch(error => {
      console.log("Error:", error);
    });
});
    function fetchRandomArt() {
      const randomArtIndex = Math.floor(Math.random() * 10) + 1;
      const artImage = document.getElementById("art-image");
      artImage.src = "art-img/random-art-" + randomArtIndex + ".png";
    }
    fetchRandomArt();