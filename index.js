/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getBreweries, displayResults, and watchSubmit functions. When you're done, 

this app should allow a user to search for a state, and display a list of breweries in that state. The list should include the brewery's name and a link to their website. You should make requests to this API: https://www.openbrewerydb.org/ . Make any necessary adjustments to make this app accessible. */

'use strict';

function getBreweries(state) {
    state = $('.js-query').val();
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
                .then(response => response.Json) 
                .then(responseJson => console.log(responseJson))
    };

function displayResults(responseJson) {
  $('')


}

function watchForm() {
  $('body').on('submit', '.js-search-form', function(){    
    event.preventDefault();
    getBreweries(state);
  });
}

$(watchForm);