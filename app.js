// Selects the HTML element where the joke will be displayed
const jokeCont = document.getElementById("joke");

// Selects the HTML element where the joke category will be displayed
const category = document.getElementById("category");

// Selects the button element that will trigger the fetching of a new joke
const btn = document.getElementById("btn");



// URL for the Joke API, requesting a single joke that excludes certain categories
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Function to fetch a joke from the API
let getJoke = () => {
    fetch(url) // Fetch joke data from the specified URL
        .then(data => data.json()) // Parse the response as JSON
        .then(item => {
            // Display the fetched joke in the joke container
            jokeCont.textContent = item.joke;
            // Display the joke category in the pid element
            category.textContent = `Category: ${item.category}`;
        });
}

// Add an event listener to the button to fetch a new joke on click
btn.addEventListener('click', getJoke);

// Fetch an initial joke when the page loads
getJoke();