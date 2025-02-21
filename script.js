const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylists = document.getElementById("result-playlists");

function requestApi(searchTerm){
    const urlAPI = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(urlAPI)
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((error) => console.error('Erro ao buscar dados:', error));
}

function displayResults(result){
    console.log(result)
    resultPlaylists.classList.add("hidden");
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ""){
        resultPlaylists.classList.remove("hidden");
        resultArtists.classList.add("hidden");
        return;
    } else{
        requestApi(searchTerm)
    }
});