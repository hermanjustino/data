import json

# List of neighbourhoods to include
bordering_neighbourhoods = [
    # Bloor Street
    "Annex",
    "Palmerston-Little Italy", "Dufferin Grove", "Dovercourt Village", 
     "Seaton Village", "High Park-Swansea", "Roncesvalles", "Rosedale-Moore Park", "Lambton Baby Point", "High Park North",
    "Junction-Wallace Emerson", "Stonegate-Queensway", "Kingsway South", "Runnymede-Bloor West Village", "Church-Wellesley",

    # Yonge Street 
    "Yonge-St. Clair", "Church and Wellesley", "South Eglinton-Davisville",
    "Downtown Yonge East", "St Lawrence-East Bayfront-The Islands", "Bay-Cloverhill", "North St.James Town",
    "Yonge-St.Clair",

    # University Avenue
    "Grange Park", "Chinatown", "Bay Street Corridor", "Financial District", 
    "Entertainment District", "Queen's Park", "Discovery District", "Yonge-Bay Corridor", "Kensington-Chinatown",
    "University", "Bay-Cloverhill",

]

# Load the original GeoJSON data
with open('../data/neighbourhoods.geojson', 'r') as f:
    data = json.load(f)

# Filter the features
filtered_features = [feature for feature in data['features'] if feature['properties']['AREA_NAME'] in bordering_neighbourhoods]

# Create a new GeoJSON object
filtered_geojson = {
    "type": "FeatureCollection",
    "crs": data['crs'],
    "features": filtered_features
}

# Save the filtered GeoJSON data
with open('../data/filtered_neighbourhoods.geojson', 'w') as f:
    json.dump(filtered_geojson, f)