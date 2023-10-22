const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const removeButton = document.getElementById("removeButton");
const gifContainer = document.getElementById("gifContainer");

async function getGif(q, api_key) {
    const results = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q, api_key}}); //returns 50 GIFs

    const randNum = Math.floor(Math.random()*49); //random int between 0-49

    // console.log (results);
    // console.log(results.data.data[randNum].id);

    // create a URL using the GIF's id 
    const imgId = results.data.data[randNum].id;
    const gifUrl = `https://media3.giphy.com/media/${imgId}/giphy.gif`;

    //call appendGif() with the GIF URL
    appendGif(gifUrl);
}

//appends gifs to the #gifContainer div
const appendGif = (url) => {
    const img = document.createElement('img');
    img.src = url;
    gifContainer.append(img);
}

//calls getGif with search and api_key values
async function handleSearch(event) {
    event.preventDefault();
    const search = searchInput.value;
    const api_key = "jl9wFjF095o0N5nOcXOMDJUsDytLq0qu";
    await getGif(search, api_key);
}

function handleRemove(event) {
    event.preventDefault();
    gifContainer.innerHTML = "";
}

searchButton.addEventListener("click", handleSearch);
removeButton.addEventListener("click", handleRemove)


//My Key: jl9wFjF095o0N5nOcXOMDJUsDytLq0qu
//Example Get URL: http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym