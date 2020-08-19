var mal = "https://myanimelist.net/anime/";
var id = "";
var aniwatchTitle = "";

aniwatchTitle = document.getElementsByClassName('pr-5')[0].innerText;
try {
    fetch('https://api.jikan.moe/v3/search/anime?q=' + aniwatchTitle)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        id = data["results"][0]["mal_id"]
        window.open(mal+id, '_blank')
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
} catch(error) {
    console.log(error)
}