let ul = document.querySelector('#ul');
let selectCountry = document.querySelector('#selectPays');

fetch("data/cities.json")
.then((response) => response.json())
.then((data) => allApply(data) )

function allApply(data){
    selectionCountries(data)
    
    selectCountry.addEventListener("change", () => {
        listCities(data)
    });
}

function selectionCountries(data){

    let countries = [];
    let listCountries = '<option value="">Selectionner un pays</option>';

    data.forEach(tabCountries => {

        if (!countries.includes(tabCountries.countrycode.name)) {
            countries.push(tabCountries.countrycode.name);
        }

    });

    countries.sort()

    for (const country of countries) {

        listCountries +=` 
        <option value="${country}">${country}</option>
        `;
    }
    selectCountry.innerHTML = listCountries;
}


function listCities(data){
    let optValue = selectCountry.value;
    let cities = [];
    let liCities = "";

    data.forEach(city => {

        if (optValue === city.countrycode.name) {
            cities.push(city.name);
        }
    });
    
    cities.sort();
    
    for (const city of cities) {
        liCities += `
        <ul>
        <li>${city}</li>
        </ul>
        `
    }
    ul.innerHTML = liCities
}
