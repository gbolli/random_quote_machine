$(document).ready(function() {
  
  // create variables
  var quote = "";
  var author = "";
  
  // populate on load
  generateQuote();
  
  // remove focus from button after clicking
  $(".btn").mouseup(function(){
    $(this).blur();
  })
  
  // tweet the quote
  $(".tweet").on("click", function() {
    window.open('https://twitter.com/intent/tweet?text=' +
					encodeURIComponent(quote + ' - ' + author));
  });
  
  // generate a new quote upon clicking button
  $("#quoteGen").on("click", function() {
    generateQuote();
    });

  // generate new quote
  function generateQuote() { 
        $.ajax({
          type: 'GET',
          dataType: 'json',
            //url: 'http://api.icndb.com/jokes/random',  // chuck norris
            url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',  // forismatic api
          //url: 'https://random-quote-generator.herokuapp.com/api/quotes/random',
          //json: "callback",
          //data: {},
          
          success: function (data) {
            
            // console.log(data);   //  for testing
            // console.log(data.value.joke); // chuck norris
          
            quote = data.quoteText;   // forismatic api
            author = data.quoteAuthor;  // forismatic api
            
            // quote = data.quote;  // heroku app
            // author = data.author; // heroku app
              
            // quote = data.value.joke;  // chuck norris
            // author = "";   // chuck norris
            
            // apply quote and author to html
            $("#randomQuote").html(quote);
            $("#randomQuoteSource").html(author);  
              
            }
        });  
  };
});
