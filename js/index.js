$(document).ready(function() {
  
  $(".tweet").on("click", function() {
    $("#testArea").html("howdy");
  });
  
  $("#quoteGen").click( function() {
    
        var quote = "";
        var source = "";
    
        $.ajax({
          url: 'https://crossorigin.me/http://api.forismatic.com/api/1.0',
          //json: "callback",
          data: {},
          type: 'GET',
          dataType: 'json',
          success: function (data) {
            
            console.log(data);
          
            quote += data.quoteText;
            source += data.quoteAuthor;
            
          },
          xhrFields: {
            withCredentials: false
          }
        });  
        
          
        $("#randomQuote").html(quote);
        $("#randomQuoteSource").html(source);

      
      });
  
});