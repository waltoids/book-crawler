$(document).ready(function(){
    // Variables for parameters
      var bookSearch = $('#book-search')
      const submitBook = $(document).on("click", "#submitBook");
      var bookList = $('.bookList')
      
   // volume searches can be performed by sending an HTTP GET request to the following URL
    apiKey = "AIzaSyAf-0XFdRGP0OkXktMErBjkhJQKS8evcqE"
    var queryUrl ="https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + apiKey;
  
    $(bookList).submit(function(){
      var search = $('#book-search').val();
           if(search == "")
           {
               alert("Please enter something in the field");
           }
           else{		
           var url = "";
           var img = "";
        var title = "";
        var author = "";
        
        
        $.ajax({
          url: queryUrl,
          method: "GET"
        }).then(function(response){
  
            for(i=0;i<response.items.length;i++)
            {
             title=$( + response.items[i].volumeInfo.title);  
             author=$( + response.items[i].volumeInfo.authors);
             img = $(response.items[i].volumeInfo.infoLink); 	
             url= response.items[i].volumeInfo.imageLinks.thumbnail;
             img.attr('src', url);
             
            }
           });
        
        }
     return false;
    });
  });
    