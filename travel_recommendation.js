// Task 6: Recommendation Result
// Step 1: Defining object and variables for XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = './travel_recommendation_api.json';
// Step 2: Request setup
// Prepare a GET request to the specified URL,
// which we have saved in a variable url in asynchronous
// mode within this file
xhr.open("GET", url, true);
/** The open method configures an XHR request with the
 * following parameters:
 * 'GET': Specifies the HTTP method used for the request 
 (in this case, a GET request).
 * URL: Represents the URL from where you will fetch the data.
 * True: Indicates if the request is asynchronous (true) or
 synchronous (false). In this case, it's set to true for
 asynchronous operation, allowing other scripts to run while
 the request is processed. */

// Step 3: Response type specification
// In this step, we need to inform the XMLHttpRequest object
// that the expected response from the server should be in
// JSON format.
xhr.responseType = "json";

// Step 4: Handling the 'onload' event
xhr.onload = function() {
    var countries = xhr.response.countries;
    var countriesDiv = document.getElementById("countries");
    /**var countries = xhr.response.countries; This line extracts the
 * countries array from the JSON response received from the
 * server. The xhr.response contains the parsed JSON data,
 * and .countries accesses the specific property containing
 * the array of countries. 
 * var countriesDiv = xhr.response.countries; This line retrieves
 * the HTML element with the ID 'countries' where the fetched
 * content will be displayed. */

    // Step 5: Iterating through the countries array and displaying the data
    countries.forEach(function(country) {
        country.cities.forEach(function(city) {
            // Create HTML element dynamically, for example,
            // <div>, <img>, <h3>, <p> etc.,
            // for each country's name, image, and description
            // using createElement DOM method:
            var countryDiv = document.createElement("div");
            countryDiv.classList.add("recommendation");
            // Populate these HTML elements with corresponding content
            // from the fetched JSON data:
            var img = document.createElement("img");
            img.src = city.imageUrl;

            var name = document.createElement("h3");
            name.textContent = city.name;

            var description = document.createElement("p");
            description.textContent = city.description;

            // Attach these elements to the countryDiv to displau
            // each country's information on the webpage
            countryDiv.appendChild(img);
            countryDiv.appendChild(name);
            countryDiv.appendChild(description);

            countriesDiv.appendChild(countryDiv);
        });
    });
    var beaches = xhr.response.beaches;
    var beachesDiv = document.getElementById("beaches");

    beaches.forEach(function(beach) {
        var beachDiv = document.createElement("div");
        beachDiv.classList.add("recommendation");

        var img = document.createElement("img");
        img.src = beach.imageUrl;

        var name = document.createElement("h3");
        name.textContent = beach.name;

        var description = document.createElement("p");
        description.textContent = beach.description;

        beachDiv.appendChild(img);
        beachDiv.appendChild(name);
        beachDiv.appendChild(description);
        beachesDiv.appendChild(beachDiv);
    });
    var temples = xhr.response.temples;
    var templesDiv = document.getElementById("temples");

    temples.forEach(function(temple) {
        var templeDiv = document.createElement("div");
        templeDiv.classList.add("recommendation");

        var img = document.createElement("img");
        img.src = temple.imageUrl;

        var name = document.createElement("h3");
        name.textContent = temple.name;

        var description = document.createElement("p");
        description.textContent = temple.description;

        templeDiv.appendChild(img);
        templeDiv.appendChild(name);
        templeDiv.appendChild(description);
        templesDiv.appendChild(templeDiv);
    });
}
// We need to send the XMLHttpRequest to fetch the data from
// the specified URL
xhr.send();

// Function to clear search text when user clicks the clear button
function clearSearch() {
    document.getElementById("searchInput").value = "";
}

// Function to search for a recommendation within our json
function showTravelRecommendation() {
    var searchInput = document.getElementById("searchInput").value
        .toLowerCase()
        .trim();
    
    // Get all recommendation elements
    var recommendations = document.querySelectorAll(".recommendation");

    recommendations.forEach(function(recommendation) {
        var cityName = recommendation.querySelector("h3").textContent
            .toLowerCase();
        var cityDescription = recommendation.querySelector("p").textContent
            .toLowerCase();

        // Check if the search input matches either the city name or description
        if (cityName.includes(searchInput) || cityDescription.includes(searchInput)) {
            // If there's a match, display the recommendation
            recommendation.style.display = "block";
        } else {
            // If no match, hide the recommendation
            recommendation.style.display = "none";
        }
    });
}