// Initialize the map with actual values
var map = L.map('map').setView([43.70011, -79.4163], 12); // Coordinates for Toronto, Canada
    
// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Define the list of specific neighborhoods to be colored orange
var specificNeighborhoods = [
    // Bloor Street
    "Annex",
    "Palmerston-Little Italy", "Dufferin Grove", "Dovercourt Village", 
    "Seaton Village", "High Park-Swansea", "Roncesvalles", "Rosedale-Moore Park", "Lambton Baby Point", "High Park North",
    "Junction-Wallace Emerson", "Stonegate-Queensway", "Kingsway South", "Runnymede-Bloor West Village", "Church-Wellesley",

    // Yonge Street 
    "Yonge-St. Clair", "Church and Wellesley", "South Eglinton-Davisville",
    "Downtown Yonge East", "St Lawrence-East Bayfront-The Islands", "Bay-Cloverhill", "North St.James Town",
    "Yonge-St.Clair",

    // University Avenue
    "Grange Park", "Chinatown", "Bay Street Corridor", "Financial District", 
    "Entertainment District", "Queen's Park", "Discovery District", "Yonge-Bay Corridor", "Kensington-Chinatown",
    "University", "Bay-Cloverhill",
];

// Load GeoJSON data
var geojsonLayer = new L.GeoJSON.AJAX("./data/neighbourhoods.geojson", {
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.AREA_NAME) {
            layer.bindPopup("Neighbourhood: " + feature.properties.AREA_NAME);
            layer.on('click', function() {
                console.log("Clicked on neighborhood:", feature.properties.AREA_NAME);
                loadChart(feature.properties.AREA_NAME);
            });
        }
    },
    style: function (feature) {
        var areaName = feature.properties.AREA_NAME;
        var isSpecific = specificNeighborhoods.includes(areaName);
        var color = isSpecific ? "#228B22" : "#800080"; // Dark green for specific, Purple for non-specific
        return {
            color: color,
            weight: 2,
            opacity: 1
        };
    }
}).addTo(map);

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal and destroy the chart
span.onclick = function() {
    modal.style.display = "none";
    if (radialChart) {
        radialChart.destroy();
        radialChart = null;
    }
}

// When the user clicks anywhere outside of the modal, close it and destroy the chart
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        if (radialChart) {
            radialChart.destroy();
            radialChart = null;
        }
    }
}

// Load the neighborhood data from the JSON file
var neighborhoodData;
fetch('./data/neighborhood_data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        neighborhoodData = data;
        console.log("Neighborhood data loaded:", neighborhoodData);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

var radialChart; // Declare the chart variable outside the function

// Function to generate gradient colors
function generateGradientColors(numColors) {
    var colors = [];
    var startColor = [255, 99, 132]; // Start color (red)
    var endColor = [54, 162, 235]; // End color (blue)

    for (var i = 0; i < numColors; i++) {
        var r = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * (i / (numColors - 1)));
        var g = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * (i / (numColors - 1)));
        var b = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * (i / (numColors - 1)));
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }

    return colors;
}

// Function to normalize neighborhood names
function normalizeNeighborhoodName(name) {
    return name.trim().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
}

// Function to load the chart
function loadChart(neighborhood) {
    console.log("loadChart called with neighborhood:", neighborhood);
    if (!neighborhoodData) {
        console.error("Neighborhood data is not loaded yet.");
        return;
    }

    // Get the selected data type from the dropdown
    var dataType = document.getElementById('dataSelect').value;

    // Set the neighborhood name in the modal
    document.getElementById('neighborhoodName').textContent = neighborhood;

    // Normalize the neighborhood name
    var normalizedNeighborhood = normalizeNeighborhoodName(neighborhood);
    console.log("Normalized neighborhood:", normalizedNeighborhood);

    // Get the selected data object
    var selectedData = neighborhoodData[dataType];
    if (!selectedData) {
        console.error("Selected data type not found:", dataType);
        return;
    }

    // Set the description in the modal
    document.getElementById('dataDescription').textContent = selectedData.description;

    // Initialize arrays to store data
    var labels = [];
    var data = [];

    // Iterate through the categories in the selected data object
    for (var category in selectedData.categories) {
        if (selectedData.categories.hasOwnProperty(category)) {
            var categoryData = selectedData.categories[category];
            var value = categoryData[neighborhood];

            // Add the category and value to the arrays
            labels.push(category);
            data.push(value);
        }
    }

    // Print the neighborhood and data to the console
    console.log("Neighborhood:", neighborhood);
    console.log("Data:", data);

    // Generate gradient colors based on the number of labels
    var backgroundColors = generateGradientColors(labels.length);

    if (radialChart) {
        // Update the existing chart
        radialChart.data.labels = labels;
        radialChart.data.datasets[0].data = data;
        radialChart.data.datasets[0].backgroundColor = backgroundColors;
        radialChart.update();
    } else {
        // Create the radial chart
        var ctx = document.getElementById('radialChart').getContext('2d');
        radialChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: labels,
                datasets: [{
                    label: dataType,
                    data: data,
                    backgroundColor: backgroundColors
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Adjust the chart size to fit the modal
    var chartContainer = document.getElementById('radialChart').parentElement;
    var chartHeight = chartContainer.clientHeight - 40; // Adjust height to fit within the modal content
    var chartWidth = chartContainer.clientWidth;
    document.getElementById('radialChart').style.height = chartHeight + 'px';
    document.getElementById('radialChart').style.width = chartWidth + 'px';

    // Display the modal
    modal.style.display = "block";
}

// Add event listener to the dropdown to reload the chart when the selection changes
document.getElementById('dataSelect').addEventListener('change', function() {
    if (radialChart) {
        radialChart.destroy();
        radialChart = null;
    }
    // Reload the chart with the new data type
    var neighborhood = document.getElementById('neighborhoodName').textContent;
    if (neighborhood) {
        loadChart(neighborhood);
    }
});