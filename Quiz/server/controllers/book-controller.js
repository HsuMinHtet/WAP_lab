const Book = require('../models/book');

/* exports.getAllBook=(req,res)=>{
    res.json(Book.getAllBook());
} */

exports.getBookById=(req,res)=>{
    res.json(Book.getBookByID(req.params.id));
}

exports.getBookByFname=(req,res)=>{
    res.json(Book.getBookByFname(req.query.firstname));
}

exports.addNewBook=(req,res)=>{
    const b = new Book(req.body.title,req.body.authorId,req.body.firstname,req.body.lastname);
    b.addNewBook();
    res.status(201).end();
}