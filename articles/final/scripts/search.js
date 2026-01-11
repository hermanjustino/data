// Function to load CSV file
function loadCSV(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

// Function to parse CSV data
function parseCSV(data) {
    const lines = data.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    return result;
}

// Function to filter neighborhoods based on search input
function filterNeighborhoods(neighborhoods) {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const list = document.getElementById('neighborhoodList');
    list.innerHTML = '';

    if (input.length >= 3) {
        const filtered = neighborhoods.filter(neighborhood => neighborhood.name.toLowerCase().includes(input));
        filtered.forEach(neighborhood => {
            const tr = document.createElement('tr');
            const nameTd = document.createElement('td');
            const populationTd = document.createElement('td');
            nameTd.textContent = neighborhood.name;
            populationTd.textContent = neighborhood.population;
            list.appendChild(tr);
            tr.appendChild(nameTd);
            tr.appendChild(populationTd);
        });
    }
}

// Function to sort table by column
let sortOrder = {
    name: 'asc',
    population: 'asc'
};

function sortTable(column) {
    const list = document.getElementById('neighborhoodList');
    const rows = Array.from(list.getElementsByTagName('tr'));
    const sortedRows = rows.sort((a, b) => {
        const aText = a.getElementsByTagName('td')[column === 'name' ? 0 : 1].textContent;
        const bText = b.getElementsByTagName('td')[column === 'name' ? 0 : 1].textContent;

        if (column === 'population') {
            return sortOrder[column] === 'asc' ? parseInt(aText) - parseInt(bText) : parseInt(bText) - parseInt(aText);
        } else {
            return sortOrder[column] === 'asc' ? aText.localeCompare(bText) : bText.localeCompare(aText);
        }
    });

    sortOrder[column] = sortOrder[column] === 'asc' ? 'desc' : 'asc';

    list.innerHTML = '';
    sortedRows.forEach(row => list.appendChild(row));

    // Update the header classes for sorting arrows
    const headers = document.querySelectorAll('#neighborhoodTable th');
    headers.forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
    });
    const header = document.querySelector(`#neighborhoodTable th[onclick="sortTable('${column}')"]`);
    header.classList.add(sortOrder[column] === 'asc' ? 'sort-asc' : 'sort-desc');
}

// Load and parse the CSV file
loadCSV('./data/neighborhood_population.csv', function (data) {
    const neighborhoods = parseCSV(data).map(row => ({
        name: row[''],
        population: row['population']
    }));

    // Add event listener to search input
    document.getElementById('searchInput').addEventListener('input', function () {
        filterNeighborhoods(neighborhoods);
    });
});

// Expose sortTable to the global scope
window.sortTable = sortTable;