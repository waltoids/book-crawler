$(document).ready(function () {
  let bookSearch = "";

  // create on click function to capture book entered data
  $("#submitBook").on("click", function (event) {
    event.preventDefault();
    bookSearch = $("#book-search").val().trim();
    // make link to search page
    window.location.href = "/books/" + bookSearch;

    console.log(bookSearch);

    // volume searches can be performed by sending an HTTP GET request to the following URL

    // * search was not defined so I created a variable for seach in a click function

    // apiKey = "AIzaSyAf-0XFdRGP0OkXktMErBjkhJQKS8evcqE";
    // const queryUrl =
    //   "https://www.googleapis.com/books/v1/volumes?q=" +
    //   bookSearch +
    //   "&key=" +
    //   apiKey;

    // console.log(bookSearch);

    // console.log(queryUrl);

    // if (bookSearch === "") {
    //   alert("Please enter something in the field");
    // } else {
    //   let book_url = "";
    //   let img = "";
    //   let book_title = "";
    //   let book_author = "";
    //   let books = "";

    //   $.ajax({
    //     url: queryUrl,
    //     method: "GET",
    //   }).then(function (response) {
    //     console.log(response);
    //     books = response.items;
    //     console.log("books:", books);

    //     // empty div before dumping new info
    //     $(".bookList").empty();
    //     //    loop through array to get book data for all listing/books
    //     for (let x in books) {
    //       console.log("x response:", books[x]);
    //       book_title = books[x].volumeInfo.title;
    //       console.log("book title:", book_title);
    //       book_author = books[x].volumeInfo.authors[0];
    //       console.log("author name:", book_author);
    //       img = books[x].volumeInfo.imageLinks.thumbnail;
    //       console.log("image:", img);
    //       book_url = books[x].volumeInfo.infoLink;
    //       console.log("url:", book_url);
    //       searchInfo = books[x].searchInfo.textSnippet;
    //       console.log("searchInfo:", searchInfo);

          //   $('.bookList').append($(`
          //     <div class="col mr2 books_return">
          //       <div class="row">
          //           <div class="input-field col col s4"></div>
          //           <div class="card blue-grey darken-1">
          //             <div class="card-content white-text center">
          //               <span class="card-title">${book_title}</span>
          //               <p>${book_author}</p>
          //               <p>${searchInfo}</p>
          //               <img class="booksImg" src= ${img} alt=${book_title} width= "120">
          //             </div>
          //             <div class="card-action">
          //               <a href=  ${book_url}>Preview the book</a>
          //             </div>
          //           </div>
          //       </div>
          //     </div>
          //     `));

         
  });
});
