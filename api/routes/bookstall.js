

const bookscontroller = require('../controllers/books');
const bookstall = require('express').Router();


// get to return us all the books
bookstall.get('/books',bookscontroller.getAllBooks);
bookstall.get('/books/:id',bookscontroller.getBookbyID);


module.exports = bookstall;