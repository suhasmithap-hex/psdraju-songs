function toggleLyrics(button) {

    const lyrics = button.parentElement.nextElementSibling;

    if (lyrics.style.display === "block") {

        lyrics.style.display = "none";

        button.innerHTML = "📜 Show Lyrics";

    } else {

        lyrics.style.display = "block";

        button.innerHTML = "📜 Hide Lyrics";

    }

}