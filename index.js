function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
  return fetch("https://anapioficeandfire.com/api/books");
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

/*  Deliveries:

function fetchBooks() {
  // Return the 5th book in the series
  fetch("https://anapioficeandfire.com/api/books/5")
    .then((resp) => resp.json())
    .then((json) => console.log(json));
  
  // Returns the 1031st character in the series
  fetch("https://anapioficeandfire.com/api/characters/1031")
    .then((resp) => resp.json())
    .then((json) => console.log(json));

  // Returns the total number of pages of all the books
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      let totalPages = 0;
      json.forEach(book => {
      totalPages+= book.numberOfPages;
      });
      console.log(totalPages);
    });
}
*/