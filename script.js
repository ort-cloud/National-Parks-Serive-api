const apiKey = "";

function formatQueryParams() {
  const items = Object.keys().map(key => `${key}=${[key]}`)
  return items.join("&");
}

function main() {
  $(`fieldset`).on("click", "#submit", function () {
    event.preventDefault();
    let  = $('#text-box').val();
    getUserName();
  });
}

function getUserName() {
  const searchUrl = ``;

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

const displayResults = (responseJson) => {
  $('.search-results').empty();
responseJson.forEach((repoObj) => {
  $('.search-results').append(`
        <div>${repoObj.name}</div>  
        <div>${repoObj.html_url}</div>
     `)
})

}

$(main);