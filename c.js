$(document).ready(function () {


 // click function to collect book info from API call
 $(".seacrh").on("click", function (event) {
    event.preventDefault();
    bookName = $(".search").val().trim();

   
    // AJAX call to the run OpenWeatherMap API for 5 days forecast
    const queryURL = "";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {

       
    })

})

})

