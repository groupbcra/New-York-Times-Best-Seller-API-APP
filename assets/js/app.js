/* Begin Javascript*/
$("#click-button").on("click", function (){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "01cd713d6ecc423a836748cc15420ef3"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });


})


/*End Javascript*/