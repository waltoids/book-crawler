$(document).ready(function () {


 // click function to collect book info from API call
 $(".seacrh").on("click", function (event) {
    event.preventDefault();
    bookName = $(".search").val().trim();

   
    

    const queryURL = "https://www.googleapis.com/books/v1/volumes?q=${bookName}+inauthor:keyes&key=yourAPIKey";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
 console.log(data)
        // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    })

})

})

