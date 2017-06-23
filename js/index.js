$(document).ready(function() {
  
  $(".tweet").on("click", function() {
    $("#testArea").html("howdy");
  });
  
  $("#quoteGen").click( function() {
        
        $.ajax({
          type: 'GET',
          dataType: 'json',
          //url: 'http://api.icndb.com/jokes/random',  // chuck norris
            url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',  // forismatic api
          //url: 'https://random-quote-generator.herokuapp.com/api/quotes/random',
          //json: "callback",
          //data: {},
          
          success: function (data) {
            
            var quote = "";
            var source = "";
            
            // console.log(data);   //  for testing
            // console.log(data.value.joke); // chuck norris
          
            quote += data.quoteText;   // forismatic api
            source += data.quoteAuthor;  // forismatic api
            
            // quote += data.quote;  // heroku app
            // source += data.author; // heroku app
              
            // quote = data.value.joke;  // chuck norris
            
            $("#randomQuote").html(quote);
            $("#randomQuoteSource").html(source);  
              
          //},
          //xhrFields: {
          //  withCredentials: false
          }
        });  
        
          
        

      
      });
  
});
