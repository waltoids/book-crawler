$(document).ready(function () {
  let bookSearch = '';

  // create on click function to capture book entered data
  $('#submitBook').on('click', function (event) {
    event.preventDefault();
    bookSearch = $('#book-search').val().trim();
    // make link to search page
    window.location.href = '/books/' + bookSearch;

    console.log(bookSearch);
  });
});
