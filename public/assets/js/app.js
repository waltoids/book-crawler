// const { response } = require("express");

$(document).ready(function () {
  // Variables for parameters
  //   let bookSearch = $('#book-search')
  //   const submitBook = $(document).on("click", "#submitBook");
  let bookList = $(".bookList");
  let bookSearch = "";

  // create on click function to capture book entered data
  $("#submitBook").on("click", function (event) {
    event.preventDefault();
    bookSearch = $("#book-search").val().trim();
    console.log(bookSearch);

    // volume searches can be performed by sending an HTTP GET request to the following URL

    // * search was not defined so I created a variable  for seach in a click function

    apiKey = "AIzaSyAf-0XFdRGP0OkXktMErBjkhJQKS8evcqE";
    const queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + bookSearch +
      "&key=" + apiKey;

    console.log(bookSearch);

    console.log(queryUrl);

    // $(bookList).submit(function(){
    //   var search = $('#book-search').val();
    if (bookSearch == "") {
      alert("Please enter something in the field");
    } else {
      let url = "";
      let img = "";
      let title = "";
      let author = "";
      let description = "";

      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (response) {
        console.log(response);

        // empty div before dumping new info
        $("#bookList").empty();
        //    loop through array to get book data for all listing/books
        for (let x in response.items) {
          console.log("x response:", response.items[x]);
          title = response.items[x].volumeInfo.title;
          console.log("book title:", title);
          author = response.items[x].volumeInfo.authors[0];
          console.log("author name:", author);
          description = response.items[x].volumeInfo.description;
          console.log("description:", description);
          img = response.items[x].volumeInfo.imageLinks.thumbnail;
          console.log("image:", img);
          url = response.items[x].volumeInfo.infoLink;
          console.log("url:", url);
        }

        // * remove '$' and plus sign from variable values

        //     for(i=0;i<response.items.length;i++)
        //     {
        //      title = (response.items[i].volumeInfo.title);
        //      console.log("item listing:", response.items[i])
        //      console.log("title:", title)
        //      author = (response.items[i].volumeInfo.authors);
        //      img = (response.items[i].volumeInfo.infoLink);
        //      url = response.items[i].volumeInfo.imageLinks.thumbnail;
        //      img.attr('src', url);
        //      console.log("data return;", title, author, img, url)
        //     }
        //     console.log(author)
      });
    }

     return false;
  });
});

// })
