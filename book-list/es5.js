//book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//ui constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  row.innerHTML = ` <td> ${book.title} </td>
  <td> ${book.author} </td>
  <td> ${book.isbn} </td>
  <td> <a href="#" class="delete">X</a></td> 
  `;
  list.appendChild(row);
};

UI.prototype.clearContents = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);
  //disappear after 3 secs
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};
//EVENT LISTENERS
//adding event
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //create new instance of a book
  const book = new Book(title, author, isbn);
  //adding to the ui
  const ui = new UI();
  //validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    ui.addBookToList(book);
    ui.showAlert("Book added", "success");
    ui.clearContents();
  }
  e.preventDefault();
});

//Delete event
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book removed", "success");
  e.preventDefault();
});
