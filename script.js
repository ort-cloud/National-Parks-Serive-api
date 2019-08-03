const apiKey = "";

function formatQueryParams() {
  const items = Object.keys().map(key => `${key}=${[key]}`)
  return items.join("&");
}

function main() {
  $(`fieldset`).on("click", "#submit", function () {
    event.preventDefault();
    let stateName = $('#text-box').val();
    let numOfParks = $('#of-parks').val();
    getParkInfo(stateName, numOfParks);
  });
  
}

function getParkInfo(stateName, numOfParks) {
  const searchUrl = `https://developer.nps.gov/api/v1/parks?parkCode=&stateCode&limit=${numOfParks}&start=1&q=${stateName}&api_key=WLKboTCTVvJk4NTP6ljXAddPfHaBw5ZPb0IAChen`;

  fetch(searchUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

}

function displayResults (responseJson) {
  $('.search-results').empty();
  responseJson.forEach((repoObj) => {
  $('.search-results').append(`
        <div>${repoObj.fullName}</div>  
        <div>${repoObj.description}</div>
        <div>${repoObj.url}</div>
     `)
  })

}

$(main);