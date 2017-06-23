$(document).ready(function() {
  
  var quote = "";
  var author = "";
  
  generateQuote();
  
  $(".btn").mouseup(function(){
    $(this).blur();
  })
  
  $(".tweet").on("click", function() {
    
    // still needs code
    
  });
  
  $("#quoteGen").on("click", function() {
    generateQuote();
    });

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
            
            $("#randomQuote").html(quote);
            $("#randomQuoteSource").html(source);  
              
          //},
          //xhrFields: {
          //  withCredentials: false
          }
        });  
  };
});
